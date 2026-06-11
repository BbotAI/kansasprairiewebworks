# Kansas Prairie Webworks

**kansasprairiewebworks.com**  
Web Design · Google Business Profile · Facebook Business Page · Local SEO  
Salina, Kansas — Serving Central Kansas

---

## Project Overview

This repository contains the complete website for Kansas Prairie Webworks, a locally owned web design and digital marketing agency based in Salina, Kansas. The site is hosted on GitHub Pages with a custom domain.

**Stack:** Vanilla HTML5 / CSS3 / JavaScript ES6+ — no frameworks, no jQuery.

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
