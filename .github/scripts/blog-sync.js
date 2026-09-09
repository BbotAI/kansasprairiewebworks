#!/usr/bin/env node
/**
 * blog-sync — add newly published Blogger posts to blog.html as cards.
 *
 * Runs unattended in GitHub Actions. Publish on Blogger, and within the cron
 * interval the card and its JSON-LD appear on the site. Nothing to run by hand.
 *
 * ── WHY IT READS THE PUBLIC FEED, NOT THE BLOGGER API ──────────────────────
 *
 * Cards only ever show LIVE posts on a public blog, and the public feed at
 * <blog>/feeds/posts/default?alt=json serves exactly that with no credential
 * at all. The Blogger v3 API needs OAuth, and the old manual workflow borrowed
 * a token out of the operator's local ~/.clasprc.json, which cannot work in
 * CI and would have meant storing a long-lived secret in every client repo.
 * The feed removes the secret entirely. Drafts stay invisible, which is right.
 *
 * This deliberately does NOT touch the KPW Agency Brain. It does not call it,
 * import from it, deploy it, or read its Script Properties. The Agency Brain
 * publishes to Blogger; this reads Blogger. They share nothing but the blog,
 * so this job failing can never affect client posting.
 *
 * ── CONFIG ────────────────────────────────────────────────────────────────
 *
 * One line: `THIS SITE'S BLOG` in BLOG_AGENT.md. Everything else is inferred
 * from the repo so the same file works in any client folder without editing:
 * the site root from CNAME, and the author, publisher, alt-text suffix and
 * placeholder image from the cards already in blog.html.
 *
 * ── THE MATCHING RULE THAT MATTERS ────────────────────────────────────────
 *
 * Posts are matched on the FULL URL, compared as a string. Never on a slug
 * pattern. Blogger appends a numeric suffix when a permalink collides, e.g.
 *   .../2026/07/mobile-app-vs-better-website-kansas-business_01643798843.html
 * and a tidy-looking /[a-z0-9-]+\.html/ silently fails to match it. That does
 * not error, it just reports the post as new and adds a duplicate card. This
 * has already been observed on the live KPW blog. Match on the whole string.
 *
 * Titles are never used for matching. They get edited on Blogger after
 * publication; the permalink does not.
 *
 * Usage:
 *   node .github/scripts/blog-sync.js [--dry-run]
 *
 * Exit codes: 0 = done (whether or not anything changed), 1 = failed.
 * It writes `changed=true|false` to $GITHUB_OUTPUT so the workflow can decide
 * whether to commit.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..', '..');
const BLOG_HTML = path.join(REPO, 'blog.html');
const AGENT_MD = path.join(REPO, 'BLOG_AGENT.md');
const DRY = process.argv.includes('--dry-run');

const die = msg => { console.error('blog-sync: ' + msg); process.exit(1); };

// ── config ────────────────────────────────────────────────────────────────

function blogUrl() {
  if (!fs.existsSync(AGENT_MD)) die('BLOG_AGENT.md not found in ' + REPO);
  const md = fs.readFileSync(AGENT_MD, 'utf8');
  const m = /##\s*THIS SITE'S BLOG\s*\n+\s*(\S+)/.exec(md);
  if (!m) die("could not find a 'THIS SITE'S BLOG' URL in BLOG_AGENT.md");
  const url = m[1].replace(/\/+$/, '');
  // Refuse the template placeholder rather than fetching a nonexistent blog.
  if (/CLIENT_DOMAIN|example\.com|\[/.test(url)) {
    die('BLOG_AGENT.md still has the placeholder blog URL: ' + url);
  }
  return url;
}

function siteRoot() {
  const cname = path.join(REPO, 'CNAME');
  if (fs.existsSync(cname)) {
    const host = fs.readFileSync(cname, 'utf8').trim().split(/\s+/)[0];
    if (host) return 'https://' + host;
  }
  return null;
}

// ── feed ──────────────────────────────────────────────────────────────────

/**
 * Blogger caps a feed response at 500 entries and offers no cursor, so page
 * with start-index, which is 1-based. Stop when a page comes back short.
 */
async function fetchAllPosts(blog) {
  const PAGE = 150;
  const out = [];
  for (let start = 1; ; start += PAGE) {
    const url = `${blog}/feeds/posts/default?alt=json&max-results=${PAGE}&start-index=${start}`;
    const res = await fetch(url, { headers: { 'User-Agent': 'kpw-blog-sync' } });
    if (!res.ok) die(`feed returned ${res.status} for ${url}`);
    const entries = ((await res.json()).feed || {}).entry || [];
    out.push(...entries);
    if (entries.length < PAGE) break;
    if (start > 5000) break; // paranoia, not expected
  }
  return out;
}

const alternate = e => {
  const l = (e.link || []).find(x => x.rel === 'alternate');
  return l ? l.href.split('#')[0].split('?')[0] : null;
};

/** Blogger encodes the image size as the path segment before the filename. */
const cardImage = u => u ? u.replace(/\/[sw]\d+[^/]*\/([^/]+)$/, '/w600-h400-c/$1') : null;

const firstBodyImage = html => {
  const m = /<img[^>]+src=["']([^"']+)["']/i.exec(html || '');
  return m ? cardImage(m[1]) : null;
};

// ── text ──────────────────────────────────────────────────────────────────

const ENTITIES = { '&nbsp;': ' ', '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"',
                   '&#39;': "'", '&rsquo;': '’', '&lsquo;': '‘',
                   '&ldquo;': '“', '&rdquo;': '”', '&mdash;': '—',
                   '&ndash;': '–', '&hellip;': '…' };

function plainText(html) {
  let t = String(html || '')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');
  t = t.replace(/&[a-z#0-9]+;/gi, m => ENTITIES[m.toLowerCase()] !== undefined ? ENTITIES[m.toLowerCase()] : m);
  return t.replace(/\s+/g, ' ').trim();
}

/** Trim to a real sentence boundary, never mid-word and never mid-sentence. */
function excerpt(text, max = 300) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
  if (stop > 80) return cut.slice(0, stop + 1);
  const sp = cut.lastIndexOf(' ');
  return cut.slice(0, sp > 0 ? sp : max) + '…';
}

/** Escape for HTML text nodes and attributes, then prefer named entities. */
const esc = s => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const pretty = s => esc(s)
  .replace(/’/g, '&rsquo;').replace(/‘/g, '&lsquo;')
  .replace(/“/g, '&ldquo;').replace(/”/g, '&rdquo;')
  .replace(/—/g, '&mdash;').replace(/–/g, '&ndash;')
  .replace(/…/g, '&hellip;');

const MONTHS = ['January','February','March','April','May','June','July',
                'August','September','October','November','December'];

/**
 * Format the published date WITHOUT going through the local timezone.
 * Blogger returns an ISO string with its own offset; `new Date(...)` then
 * renders in the runner's zone, and a GitHub runner is UTC while the blog is
 * on Central. An evening post would show as the next day. Read the date parts
 * off the string as the blog itself recorded them.
 */
function prettyDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(iso || ''));
  if (!m) return '';
  return `${MONTHS[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}`;
}

const isoDate = iso => (/^(\d{4}-\d{2}-\d{2})/.exec(String(iso || '')) || [, ''])[1];

// ── learn the house style from cards already on the page ──────────────────

function inferStyle(html) {
  const style = {
    placeholder: 'images/blog-placeholder.webp',
    altSuffix: null,
    author: null,
    authorUrl: null,
    publisher: null,
    publisherUrl: null
  };

  const ph = /<img\s+[^>]*src="([^"]*placeholder[^"]*)"/i.exec(html);
  if (ph) style.placeholder = ph[1];

  // Alt text on existing cards is "<title> &mdash; <Site Name>".
  const alt = /alt="[^"]*&mdash;\s*([^"]+)"/.exec(html);
  if (alt) style.altSuffix = alt[1].trim();

  const ld = /"author":\s*\{\s*"@type":\s*"Person",\s*"name":\s*"([^"]+)",\s*"url":\s*"([^"]+)"/.exec(html);
  if (ld) { style.author = ld[1]; style.authorUrl = ld[2]; }

  const pub = /"publisher":\s*\{\s*"@type":\s*"Organization",\s*"name":\s*"([^"]+)",\s*"url":\s*"([^"]+)"/.exec(html);
  if (pub) { style.publisher = pub[1]; style.publisherUrl = pub[2]; }

  return style;
}

// ── render ────────────────────────────────────────────────────────────────

function cardHtml(post, slot, style) {
  const alt = style.altSuffix ? `${post.title} — ${style.altSuffix}` : post.title;
  const img = post.image
    ? `          <img
            src="${esc(style.placeholder)}"
            data-thumbnail="${esc(post.image)}"
            alt="${pretty(alt)}"
            width="600" height="400" loading="lazy">\n`
    : '';
  return `        <!-- BLOG-${slot} -->
        <article class="service-card blog-card">
${img}          <div class="card-body">
            <p class="blog-date">${esc(post.dateLabel)}</p>
            <h3>${pretty(post.title)}</h3>
            <p>${pretty(post.excerpt)}</p>
            <a href="${esc(post.url)}"
              class="btn btn-outline" target="_blank" rel="noopener">Read More &rarr;</a>
          </div>
        </article>`;
}

function schemaHtml(post, style) {
  const o = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: excerpt(post.plain, 200),
    url: post.url,
    datePublished: post.dateIso
  };
  if (style.author) o.author = { '@type': 'Person', name: style.author, url: style.authorUrl };
  if (style.publisher) o.publisher = { '@type': 'Organization', name: style.publisher, url: style.publisherUrl };
  o.mainEntityOfPage = { '@type': 'WebPage', '@id': post.url };
  const json = JSON.stringify(o, null, 2).split('\n').map(l => '  ' + l).join('\n');
  return `  <script type="application/ld+json">\n${json}\n  </script>`;
}

// ── main ──────────────────────────────────────────────────────────────────

(async () => {
  if (!fs.existsSync(BLOG_HTML)) die('blog.html not found in ' + REPO);

  const blog = blogUrl();
  let html = fs.readFileSync(BLOG_HTML, 'utf8');
  const style = inferStyle(html);
  if (!style.altSuffix) console.warn('blog-sync: no existing card to learn alt-text style from');

  const entries = await fetchAllPosts(blog);
  console.log(`blog-sync: ${entries.length} live post(s) in the feed at ${blog}`);

  // Existing cards, matched on the full href string. See the header note.
  const existing = new Set(
    [...html.matchAll(/<a href="(https?:\/\/[^"]+)"\s*\n?\s*class="btn btn-outline"/g)].map(m => m[1])
  );
  console.log(`blog-sync: ${existing.size} card(s) already on the page`);

  const fresh = [];
  for (const e of entries) {
    const url = alternate(e);
    if (!url || existing.has(url)) continue;
    const body = (e.content && e.content.$t) || (e.summary && e.summary.$t) || '';
    const plain = plainText(body);
    fresh.push({
      url,
      title: plainText((e.title && e.title.$t) || 'Untitled'),
      dateIso: isoDate(e.published && e.published.$t),
      dateLabel: prettyDate(e.published && e.published.$t),
      image: cardImage(e.media$thumbnail && e.media$thumbnail.url) || firstBodyImage(body),
      plain,
      excerpt: excerpt(plain)
    });
  }

  const out = process.env.GITHUB_OUTPUT;
  const report = (changed, count = 0, summary = '') => {
    if (!out) return;
    fs.appendFileSync(out, `changed=${changed}\ncount=${count}\nsummary=${summary}\n`);
  };

  if (!fresh.length) {
    console.log('blog-sync: no new posts. Nothing changed.');
    report(false);
    return;
  }

  // Newest first across the whole grid, which is this site's convention.
  fresh.sort((a, b) => (b.dateIso || '').localeCompare(a.dateIso || ''));
  console.log(`blog-sync: ${fresh.length} new post(s):`);
  fresh.forEach(p => console.log(`  + ${p.dateIso}  ${p.title}`));

  // 1. Cards, prepended to the grid.
  const gridRe = /(<div class="[^"]*blog-grid[^"]*">\s*\n)/;
  if (!gridRe.test(html)) die('could not find the .blog-grid container in blog.html');
  const cards = fresh.map((p, i) => cardHtml(p, i + 1, style)).join('\n\n');
  html = html.replace(gridRe, `$1\n${cards}\n\n`);

  // 2. Renumber every slot comment so BLOG-N stays in document order.
  let n = 0;
  html = html.replace(/<!-- BLOG-\d+ -->/g, () => `<!-- BLOG-${++n} -->`);

  // 3. JSON-LD, before the first existing BlogPosting block so head order
  //    matches card order.
  const schemas = fresh.map(p => schemaHtml(p, style)).join('\n');
  const firstLd = html.indexOf('  <script type="application/ld+json">');
  if (firstLd === -1) die('could not find an existing JSON-LD block to insert before');
  html = html.slice(0, firstLd) + schemas + '\n' + html.slice(firstLd);

  if (DRY) {
    console.log('blog-sync: --dry-run, not writing. Would add ' + fresh.length + ' card(s).');
    report(false, fresh.length);
    return;
  }

  fs.writeFileSync(BLOG_HTML, html);
  console.log(`blog-sync: wrote ${fresh.length} card(s) and ${fresh.length} schema block(s) to blog.html`);
  // Single line, no newlines: GITHUB_OUTPUT is key=value per line.
  report(true, fresh.length, fresh.map(p => p.title).join('; ').slice(0, 200));
})().catch(e => die(e && e.stack ? e.stack : String(e)));
