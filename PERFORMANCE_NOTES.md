# Performance notes — kansasprairiewebworks.com

Last updated: 2026-08-04

---

## Read this before acting on a PageSpeed score

**Google has no CrUX field data for this origin.** Verified 2026-08-04 via the
PageSpeed API — `loadingExperience` and `originLoadingExperience` are both
empty, mobile and desktop. Core Web Vitals rank on **field** data, so **CWV
cannot currently affect this site's rankings.** There is nothing to chase.

Lab numbers on the same page, same run:

| | Lab LCP |
|---|---|
| Desktop | **0.9s** |
| Mobile | **6.2s** |

A 7× gap on identical HTML is PageSpeed's simulated slow-4G plus a 4× CPU
throttle — not what visitors experience. The mobile figure also moved 5.0s →
6.2s between two runs minutes apart.

**Do not inline critical CSS or restructure the render path of this live,
ranking site to move a lab number.** That was considered and deliberately
rejected on 2026-08-04. Revisit only if CrUX field data appears and shows a
real problem.

---

## FIXED 2026-08-04 — desktop hero downloading on mobile

The hero background was an inline style on `index.html` hardcoded to the
desktop webp. Inline styles apply the instant the element is parsed, so mobile
began fetching the 154 KB desktop image before `styles.css` arrived with its
`max-width:768px` override. From the network trace:

```
desktop webp request starts   338ms
styles.css finishes           341ms   <- 3ms too late
```

Every mobile visit fetched **209 KB instead of 55 KB**: the preloaded mobile
hero was downloaded and never used, the desktop hero was downloaded and shown.
The `fetchpriority="high"` preload was pointing at a file the page never
rendered.

Now set in `styles.css` behind two non-overlapping media queries.
**Rule: never put `background-image` in an inline style on a responsive
element.** It always wins the race against the stylesheet that would have
narrowed it.

---

## OPEN — Font Awesome ships ~250 KB of dead weight

**Not urgent, not yet done. Kaleb's call, deferred 2026-08-04 — the fix is
sound but he'd rather not risk the live site for it right now. Noted to watch.**

```
fonts/fa-solid-900.woff2    152.9 KB   <- full Font Awesome
fonts/fa-brands-400.woff2   113.9 KB   <- full Font Awesome
```

`fonts/fa-subset.css` is named "subset" and its header claims *"52 icons
actually used, replaces the ~400KB CDN bundle"*. The **CSS** was subset; the
**font files never were**. They are byte-for-byte the complete Font Awesome
fonts. 54 icon classes are used sitewide, 54 are declared in the CSS, and a
real 54-glyph subset would be roughly 5–15 KB total.

That is ~250 KB downloaded on **every page** for nothing. The fonts also use
`font-display: block`, so icons stay invisible until that 267 KB arrives —
subsetting would make them appear far sooner on slow connections.

**It will not move the PageSpeed LCP** — the hero image is the LCP element, not
the icons. The case for doing it is bandwidth and icon render speed for real
visitors, not the score.

### Why this is safer than it sounds

- **The 52 codepoints are written literally in the CSS**
  (`.fa-phone:before { content: "\f095"; }`) — no guessing which glyphs to keep.
- **Zero icons are injected by JavaScript.** `main.js` generates no icon
  markup, so a grep of the HTML sees all real usage.
- **No other repo uses these fonts** — portal, intake and the template don't
  reference them. Blast radius is this site only.
- A dropped glyph renders as an empty box. **Visible, not silent.**

### The de-risk procedure, if it's ever done

1. `pip install fonttools brotli` (adds a package to the machine, not to any
   repo; `pip uninstall fonttools` reverses it).
2. Extract the exact 52 codepoints from `fonts/fa-subset.css` — do not
   hand-pick them.
3. Subset with `pyftsubset`, keeping the originals as `*-full.woff2` rather
   than deleting them, so reverting is one rename.
4. **Programmatically verify all 52 codepoints exist in the new fonts.**
5. Push only if that check passes 52/52. If it fails, push nothing.
6. `git revert` undoes it in seconds regardless; the fonts are not
   render-blocking, so the worst realistic case is some icons look wrong for
   the minutes it takes to roll back.

---

## FIXED 2026-08-05 — the SEO check script's false alarms

`kpw_credentials/kpw_seo_check.js` — **not a git repo.** Backed up before
editing as `kpw_seo_check.js.backup-<timestamp>`, and the corrected version
snapshotted as `kpw_seo_check.js.fixed-<timestamp>`. Note the file is now
CRLF; diff old against new with `diff --strip-trailing-cr` or every line
looks changed (137 real changes, not 3519).

All three original false alarms fixed, **plus a fourth found while testing
that was worse than the three**:

### 1. "Indexed: 0 pages" — fixed

Read the Search Console `sitemaps.list` `indexed` field, which Google
deprecated and now always returns 0. Now only printed when non-zero;
otherwise it infers from search performance, which is authoritative:
`Indexed: yes — 515 impressions in the last 28 days`.

### 2. "TOP QUERIES: (none)" — fixed

The filter was `clicks > 0`, and Google **anonymises query strings on
low-volume searches** — so a site with real clicks in its totals can have no
individual query row reporting any. Now falls back to the highest-impression
queries and labels which view is shown.

### 3. LCP lab data judged against a field threshold — fixed

2.5s is the Core Web Vitals **field** threshold. The script compared
PageSpeed's *simulated* lab number to it, which fires on nearly every small
site. LCP is now flagged on **CrUX field data only**, and lab/field are
printed on separate labelled lines. **No site has field data, so Core Web
Vitals are not affecting any KPW site's rankings right now.**

### 4. PageSpeed rate-limiting returns GOOGLE.COM's metrics — found and fixed

The one that mattered most, and it only surfaced because the fix for #3 made
field data visible. When PageSpeed is rate-limited it follows a redirect to
`https://www.google.com/sorry/index` and **returns CrUX data for
google.com**. Two unrelated client blogs both reported LCP 2.759s / INP
335ms — identical, because both were really reading Google.

Without a guard, the "fix" for #3 would have confidently attributed Google's
metrics to a client and sent someone optimising a page that was never
measured. **Field data is now validated against the requested hostname
before it is trusted**, for both LCP and INP, and a mismatch prints:

```
LCP (real visitors): DISCARDED — PageSpeed was redirected to https://www.google.com/sorry/index
```

**Rule: never trust a third-party API's payload without checking it describes
the thing you asked about.** This one was only caught because two different
sites returned suspiciously identical numbers.

---

## All-client run, 2026-08-05

| Site | Clicks (28d) | Impressions | Mobile | Real issues |
|---|---|---|---|---|
| kansasprairiewebworks.com | 14 (+133%) | 515 | 70 | mobile score |
| mikeservicesllc.com | 13 (+44%) | 584 | 72 | mobile score |
| blog.mikeservicesllc.com | 1 (new) | 102 | 99 | none |
| procleaningsalinaks.com | 1 (new) | 137 | 64 | mobile score, **lab LCP 17.0s** |
| blog.procleaningsalinaks.com | — | — | 94 | none |

Both main client sites are growing. **procleaningsalinaks.com is the outlier
worth a look** — a 17.0s lab LCP is extreme even allowing for throttling, and
the mobile score of 64 is the lowest of the set. No CrUX data yet, so it isn't
hurting rankings, but it will when traffic arrives.

**Mike's opportunities are a different shape from KPW's.** KPW ranks well and
isn't clicked (positions 2-6, a title/meta problem). Mike's sits at positions
41-86 on real commercial queries — `pole barn pad site preparation service`,
`trenching companies near me`, `crawl space encapsulation salina ks`. That is
page 5-9, effectively invisible; it needs content and links, not title tweaks.

---

## SUPERSEDED — original note on the three false alarms

## The SEO check script reports three things that aren't real

`kpw_credentials/kpw_seo_check.js` — **not a git repo, so changes there are not
version controlled.** Back it up before editing.

1. **"Indexed: 0 pages"** — read from the Search Console `sitemaps.list`
   `indexed` field, which Google **deprecated and now always returns 0**. The
   site plainly is indexed: 501 impressions across 5 pages. Should be dropped
   or relabelled.
2. **"TOP QUERIES: (none)"** — the filter is `clicks > 0` (line ~287), and
   Google **anonymises query strings on low-volume searches**. The 15 clicks
   came from queries Google won't name. Not missing data; expected at this
   volume.
3. **LCP flagged against a field threshold using lab data.** 2.5s is the CWV
   *field* threshold; the script compares PageSpeed's *simulated* lab number to
   it, which will fire on almost any small site. It should read
   `loadingExperience` (CrUX) and stay quiet when there's no field data.

All three sent this session chasing problems that didn't exist. **The script
needs a correction pass more than the website does.**

---

## Real SEO opportunities from the same report (unaddressed)

These are genuine and worth work when there's time:

| Query | Impressions | Position | Clicks |
|---|---|---|---|
| `web development` | 92 | 6.0 | **0** |
| `web development kansas` | 17 | 2.1 | **0** |
| `mobile app development` | 120 | 10.3 | 0 |

Ranking and not being clicked points at the title/meta shown in results, not
at rankings. `mobile app development` is the biggest single impression driver
and the script calls it a "wrong signal" — but the contact form does sell
*"Web App / Custom Build"*, so that's a business decision (build a page for it,
or narrow the copy), not a technical defect.
