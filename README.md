# Kansas Prairie Webworks

**kansasprairiewebworks.com**  
Web Design · Google Business Profile · Facebook Business Page · Local SEO  
Salina, Kansas — Serving Central Kansas

---

## Project Overview

This repository contains the complete website for Kansas Prairie Webworks, a locally owned web design and digital marketing agency based in Salina, Kansas. The site is hosted on GitHub Pages with a custom domain.

**Stack:** Vanilla HTML5 / CSS3 / JavaScript ES6+ — no frameworks, no jQuery.

---

## Before you edit styles.css or main.js — read this

The site is behind Cloudflare. Both shared assets are versioned with a `?v=`
query string, currently **`?v=5`**, on all 30 pages that link them.

**Any change to `styles.css` or `main.js` requires two things beyond the edit:**

1. **Bump `?v=` on every page**, not just the page being worked on — otherwise
   pages fall out of sync and serve different CSS to each other.
2. **Purge the Cloudflare cache after the deploy lands** (not before — purging
   early just refills it from the old origin content).

Skipping this ships new HTML against a stale stylesheet and a stale script.
That failure is silent, invisible in a normal browser reload, and looks like a
CSS bug rather than a caching one. It happened on 2026-09-07 — see PROGRESS.md
for the full write-up, the purge call, and the zone id.

Verify with `curl` against the live URL, never a browser, because the browser
holds its own cache on top of Cloudflare's.

Two traps in this stylesheet, both hit on 2026-09-07:

- `.btn--outline` **does not exist** — only `.btn--outline-orange` does. An
  unknown modifier fails silently to base `.btn` (transparent border,
  inherited colour). There is no build step to catch it.
- The `font:` shorthand **resets** `font-family`, `font-weight` and
  `font-size`, so `font:inherit` after those three wipes them.

---

## Site Structure

| File | Description |
|---|---|
| index.html | Homepage |
| about.html | About / Origin Story |
| services.html | Services overview |
| service-web-design.html | Website Design service page |
| service-google-profile.html | Google Business Profile service page |
| service-facebook-page.html | Facebook Business Page service page |
| service-local-seo.html | Local SEO service page |
| service-monthly-posting.html | Monthly Posting / Blog service page |
| service-web-app.html | Web App / Custom Build service page |
| pricing.html | Pricing page |
| portfolio.html | Portfolio |
| contact.html | Contact page |
| service-areas.html | Service Areas |
| faq.html | FAQ |
| terms.html | Terms of Service |
| privacy.html | Privacy Policy |
| disclaimer.html | Disclaimer |
| styles.css | All site styles |
| main.js | All site JavaScript |
| sitemap.xml | XML sitemap for search engines |
| robots.txt | Robots crawl directives |
| CNAME | GitHub Pages custom domain |
| BLOGGER_CANONICAL_FIX.md | Manual steps to fix blog.kansasprairiewebworks.com ?m=1 canonical duplicates in Blogger dashboard (GSC fix — not automatable from this repo) |

---

## Remaining Placeholders

After launch, replace these in VS Code using **Ctrl+Shift+H** (Find & Replace All):

| Placeholder | Replace With |
|---|---|
| `[KPW_BOOKING_URL]` | Your Calendly or booking page URL |
| `[KPW_GOOGLE_PROFILE_URL]` | Your Google Business Profile URL |
| `[KPW_FORMSPREE_ID]` | Your Formspree form ID |

After replacing, commit and push:
```bash
git add .
git commit -m "Add booking URL, Google profile URL, Formspree ID"
git push
```

---

## GitHub Pages Setup

1. Go to github.com/bbotai/kansasprairiewebworks
2. Settings → Pages → Source: Deploy from branch → main → / root → Save
3. Custom domain: kansasprairiewebworks.com → Save
4. Check: Enforce HTTPS
5. Site goes live after DNS propagation (24–48 hours)

---

## DNS Setup (Cloudflare)

A Records for kansasprairiewebworks.com:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

CNAME record:
```
Name: www
Target: bbotai.github.io
Proxy: DNS only (grey cloud)
```

---

## Images Required

Place the following in the `images/` folder:
- `kpw-logo-badge.png` — KPW badge logo
- `kpw-hero-storm.jpg` — Kansas storm hero background
- `kpw-ad-windmill-sunset.jpg` — Windmill sunset image
- `kpw-ad-google-profile.jpg` — Google profile service image
- `kpw-prairie-wide.jpg` — Prairie wide landscape (about page)
- `dogebeats-screenshot.jpg` — DogeBeats.com screenshot

See `images/README.txt` for full specs.

---

*Kansas Prairie Webworks — Built in Kansas. Built for Kansas.*  
*785-577-7695 · kansasprairiewebworks@gmail.com*
