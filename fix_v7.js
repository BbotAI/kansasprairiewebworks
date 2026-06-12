const fs = require('fs');

const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));

// ============================================================
// FIX 1 — PORTFOLIO IMAGES: check which exist, skip missing
// ============================================================
const screenshotImages = [
  'images/screenshot_complete_online.jpg',
  'images/screenshot_seo.jpg',
  'images/screenshot_google.jpg',
  'images/screenshot_multi_page.jpg',
  'images/screenshot_facebook.jpg',
  'images/screenshot_local_trades.jpg',
];
screenshotImages.forEach(img => {
  if (fs.existsSync(img)) {
    console.log('  FIX 1 staging (exists):', img);
  } else {
    console.log('  FIX 1 SKIP (missing):', img);
  }
});

// ============================================================
// FIX 2 — PORTFOLIO CARDS: only wire images that exist on disk
// Card mappings: title keyword → img src + alt
// ============================================================
const cardMappings = [
  { keyword: 'Local Trades Business Website',          img: 'images/screenshot_local_trades.jpg',    alt: 'Local trades business website built by Kansas Prairie Webworks — Salina Kansas' },
  { keyword: 'Google Business Profile Setup',          img: 'images/screenshot_google.jpg',          alt: 'Google Business Profile setup and optimization — Kansas Prairie Webworks' },
  { keyword: 'Facebook Business Page',                 img: 'images/screenshot_facebook.jpg',        alt: 'Facebook Business Page full build — Kansas Prairie Webworks' },
  { keyword: 'Local SEO',                              img: 'images/screenshot_seo.jpg',             alt: 'Local SEO and directory setup — Kansas Prairie Webworks' },
  { keyword: 'Multi-Page Service Business Website',    img: 'images/screenshot_multi_page.jpg',      alt: 'Multi-page service business website — Kansas Prairie Webworks' },
  { keyword: 'Complete Online Presence Build',         img: 'images/screenshot_complete_online.jpg', alt: 'Complete online presence build Tier 4 — Kansas Prairie Webworks' },
];

// Only replace placeholder if image exists on disk
let portfolioHtml = fs.readFileSync('portfolio.html', 'utf8');
let portfolioChanged = false;
cardMappings.forEach(({ keyword, img, alt }) => {
  if (!fs.existsSync(img)) return; // skip missing images — keep gradient placeholder

  // Find the portfolio-card containing this keyword
  const cardStart = portfolioHtml.indexOf('<div class="portfolio-card');
  // Find all cards and look for the right one
  let pos = 0;
  while (pos < portfolioHtml.length) {
    const cardIdx = portfolioHtml.indexOf('<div class="portfolio-card', pos);
    if (cardIdx === -1) break;
    const cardEnd = portfolioHtml.indexOf('</div>\n\n', cardIdx);
    if (cardEnd === -1) break;
    const cardSection = portfolioHtml.substring(cardIdx, cardEnd + 8);
    if (cardSection.includes(keyword)) {
      const placeholderStart = cardSection.indexOf('<div class="portfolio-card__placeholder"');
      if (placeholderStart !== -1) {
        const placeholderEnd = cardSection.indexOf('</div>', placeholderStart) + 6;
        const imgTag = `<img src="${img}"\n             alt="${alt}"\n             loading="lazy"\n             style="width:100%;height:220px;object-fit:cover;object-position:top;"\n             onerror="this.style.display='none'">`;
        const newCard = cardSection.substring(0, placeholderStart) + imgTag + cardSection.substring(placeholderEnd);
        portfolioHtml = portfolioHtml.substring(0, cardIdx) + newCard + portfolioHtml.substring(cardIdx + cardSection.length);
        portfolioChanged = true;
        console.log('  FIX 2 wired image:', img);
      }
      break;
    }
    pos = cardIdx + 1;
  }
});
if (portfolioChanged) {
  fs.writeFileSync('portfolio.html', portfolioHtml, 'utf8');
} else {
  console.log('  FIX 2: No images exist yet — all gradient placeholders kept');
}

// ============================================================
// FIX 3B — HEADING ORDER: footer <h4> → <h3> on ALL 17 pages
// Only changes h4 tags inside <footer> element
// ============================================================
let footerH4Count = 0;
allHtml.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  const footerStart = html.indexOf('<footer');
  const footerEnd = html.lastIndexOf('</footer>') + 9;
  if (footerStart === -1) return;
  const footerSection = html.substring(footerStart, footerEnd);
  const updatedFooter = footerSection.replace(/<h4>/g, '<h3>').replace(/<\/h4>/g, '</h3>');
  if (updatedFooter !== footerSection) {
    const h4sChanged = (footerSection.match(/<h4>/g) || []).length;
    footerH4Count += h4sChanged;
    fs.writeFileSync(file, html.substring(0, footerStart) + updatedFooter + html.substring(footerEnd), 'utf8');
    console.log(`  FIX 3B footer h4→h3 (${h4sChanged}): ${file}`);
  }
});
console.log(`  FIX 3B total: ${footerH4Count} h4→h3 changes across all pages`);

// ============================================================
// FIX 3D — ADD WIDTH/HEIGHT TO 2 IMGS MISSING THEM
// ============================================================

// service-monthly-posting.html blogger image
let postingHtml = fs.readFileSync('service-monthly-posting.html', 'utf8');
const bloggerImgOld = 'alt="Kaleb Diehl — Local Web Designer in Salina Kansas" style="width:100%;border-radius:8px 8px 0 0;margin-bottom:1rem;" loading="lazy"';
const bloggerImgNew = 'alt="Kaleb Diehl — Local Web Designer in Salina Kansas" width="1200" height="630" style="width:100%;border-radius:8px 8px 0 0;margin-bottom:1rem;" loading="lazy"';
if (postingHtml.includes(bloggerImgOld)) {
  fs.writeFileSync('service-monthly-posting.html', postingHtml.replace(bloggerImgOld, bloggerImgNew), 'utf8');
  console.log('  FIX 3D width/height: service-monthly-posting.html blogger img');
} else {
  console.log('  FIX 3D SKIP (not matched): service-monthly-posting.html blogger img');
}

// service-web-app.html dogebeats img
let webappHtml = fs.readFileSync('service-web-app.html', 'utf8');
const dogeImgOld = 'alt="DogeBeats.com — AI-Autonomous Platform built by Kansas Prairie Webworks" class="portfolio-card__image" loading="lazy" style="border-radius:12px;border:1px solid rgba(255,255,255,0.12);width:100%;"';
const dogeImgNew = 'alt="DogeBeats.com — AI-Autonomous Platform built by Kansas Prairie Webworks" class="portfolio-card__image" width="800" height="500" loading="lazy" style="border-radius:12px;border:1px solid rgba(255,255,255,0.12);width:100%;"';
if (webappHtml.includes(dogeImgOld)) {
  fs.writeFileSync('service-web-app.html', webappHtml.replace(dogeImgOld, dogeImgNew), 'utf8');
  console.log('  FIX 3D width/height: service-web-app.html dogebeats img');
} else {
  console.log('  FIX 3D SKIP (not matched): service-web-app.html dogebeats img');
}

// ============================================================
// FIX 3E — META DESCRIPTIONS (120-160 chars)
// ============================================================
const metaDescFixes = {
  'contact.html': {
    old: 'Contact Kansas Prairie Webworks — call 785-577-7695, text, or book a free consultation. Salina Kansas. No pressure.',
    newDesc: 'Contact Kansas Prairie Webworks — call 785-577-7695, text, or book a free consultation. Salina, Kansas web design. No pressure.',
  },
  'portfolio.html': {
    old: 'Kansas Prairie Webworks portfolio — websites, Google listings, and Facebook pages built for Central Kansas businesses.',
    newDesc: 'Kansas Prairie Webworks portfolio — websites, Google listings, and Facebook pages built for Central Kansas small businesses. Salina, KS.',
  },
  'privacy.html': {
    old: 'Privacy Policy for Kansas Prairie Webworks — Salina, Kansas. How we collect, use, and protect your information.',
    newDesc: 'Privacy Policy for Kansas Prairie Webworks — Salina, Kansas. How we collect, use, and protect your personal information. Locally owned.',
  },
  'terms.html': {
    old: 'Terms of Service for Kansas Prairie Webworks — Salina, Kansas. Governing law: Saline County, Kansas. Effective 2025.',
    newDesc: 'Terms of Service for Kansas Prairie Webworks — Salina, Kansas. Governing law: Saline County, Kansas. Effective 2026. Web design services.',
  },
  'index.html': {
    old: 'Kansas Prairie Webworks — Web design, Google Business Profile, and Facebook Business Page setup for Central Kansas small businesses. Serving Salina, McPherson, Abilene, and more. Call 785-577-7695.',
    newDesc: 'Kansas Prairie Webworks — web design, Google Business Profile, and Facebook for Central Kansas small businesses. Salina, KS. Call 785-577-7695.',
  },
  'service-areas.html': {
    old: 'Kansas Prairie Webworks serves small businesses in Salina, McPherson, Abilene, Bennington, Concordia, Junction City, and Manhattan Kansas. Local web design and digital marketing.',
    newDesc: 'Kansas Prairie Webworks serves small businesses across Central Kansas — Salina, McPherson, Abilene, Concordia, and more. Local web design.',
  },
  'service-web-app.html': {
    old: 'Custom web application and AI-autonomous platform development. Full-stack builds starting at $2,500. See DogeBeats — a live AI-autonomous platform built by Kansas Prairie Webworks.',
    newDesc: 'Custom web applications and AI-autonomous platforms. Full-stack builds from $2,500. DogeBeats is a live example built by Kansas Prairie Webworks.',
  },
};

Object.entries(metaDescFixes).forEach(([file, { old, newDesc }]) => {
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes(old)) {
    fs.writeFileSync(file, html.replace(old, newDesc), 'utf8');
    console.log(`  FIX 3E meta desc (${newDesc.length} chars): ${file}`);
  } else {
    console.log(`  FIX 3E SKIP (not found): ${file}`);
  }
});

// ============================================================
// FIX 3G — OG IMAGE WIDTH/HEIGHT — add to all 17 pages
// ============================================================
let ogCount = 0;
allHtml.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes('og:image:width')) { return; } // already present
  const ogImgTag = html.match(/<meta property="og:image" content="[^"]*">/);
  if (!ogImgTag) { console.log('  FIX 3G SKIP (no og:image):', file); return; }
  const ogDimensions = '\n  <meta property="og:image:width" content="1200">\n  <meta property="og:image:height" content="630">';
  const updated = html.replace(ogImgTag[0], ogImgTag[0] + ogDimensions);
  fs.writeFileSync(file, updated, 'utf8');
  ogCount++;
});
console.log(`  FIX 3G OG dimensions added to ${ogCount} pages`);

// ============================================================
// FIX 3K — SITEMAP.XML: update lastmod dates to 2026-06-11
// ============================================================
let sitemap = fs.readFileSync('sitemap.xml', 'utf8');
const sitemapBefore = sitemap;
sitemap = sitemap.split('2025-01-01').join('2026-06-11');
if (sitemap !== sitemapBefore) {
  fs.writeFileSync('sitemap.xml', sitemap, 'utf8');
  const count = (sitemapBefore.match(/2025-01-01/g) || []).length;
  console.log(`  FIX 3K sitemap: ${count} lastmod dates updated to 2026-06-11`);
}

// ============================================================
// FIX 4A — HERO IMAGE PRELOAD (index.html)
// ============================================================
let indexHtml = fs.readFileSync('index.html', 'utf8');
if (!indexHtml.includes('rel="preload"')) {
  const preloadTag = '  <link rel="preload" as="image" href="images/kpw-hero-storm.png">\n';
  indexHtml = indexHtml.replace(
    '  <link rel="preconnect" href="https://fonts.googleapis.com">',
    preloadTag + '  <link rel="preconnect" href="https://fonts.googleapis.com">'
  );
  fs.writeFileSync('index.html', indexHtml, 'utf8');
  console.log('  FIX 4A preload added: index.html');
} else {
  console.log('  FIX 4A SKIP: preload already present in index.html');
}

// ============================================================
// FIX 5A — CACHE-CONTROL META (index.html)
// ============================================================
indexHtml = fs.readFileSync('index.html', 'utf8'); // re-read after preload edit
if (!indexHtml.includes('Cache-Control')) {
  indexHtml = indexHtml.replace(
    '<meta name="viewport"',
    '<meta http-equiv="Cache-Control" content="max-age=86400">\n  <meta name="viewport"'
  );
  fs.writeFileSync('index.html', indexHtml, 'utf8');
  console.log('  FIX 5A Cache-Control meta added: index.html');
} else {
  console.log('  FIX 5A SKIP: Cache-Control already present');
}

console.log('\nfix_v7.js complete.');
