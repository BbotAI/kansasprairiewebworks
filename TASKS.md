# TASKS.md
# Kansas Prairie Webworks — Claude Code Build Checklist
# Version 4.0 FINAL
# kansasprairiewebworks.com

---

## CLAUDE CODE — STARTUP INSTRUCTIONS

Every time you open this project:
1. Read AGENT_BRIEF.md fully
2. Read PROGRESS.md to see current build status
3. Find the first unchecked [ ] task below
4. Continue from there — do not redo completed work
5. Mark [x] when each task is done
6. Update PROGRESS.md after each completed phase

Domain: kansasprairiewebworks.com (purchased — Namecheap)
Repo: bbotai/kansasprairiewebworks
Branch: main
CNAME file must contain exactly: kansasprairiewebworks.com
All URLs: https://kansasprairiewebworks.com

Build continuously. Do not stop between phases unless actual error.

---

## PHASE 1 — PROJECT SCAFFOLD

- [x] **1.1** Create folder structure and all empty files:
  ```
  index.html, about.html, services.html,
  service-web-design.html, service-google-profile.html,
  service-facebook-page.html, service-local-seo.html,
  service-monthly-posting.html, service-web-app.html,
  pricing.html, portfolio.html, contact.html,
  service-areas.html, faq.html,
  terms.html, privacy.html, disclaimer.html,
  styles.css, main.js, sitemap.xml, robots.txt,
  CNAME, .gitignore, README.md, images/README.txt
  ```

- [x] **1.2** CNAME — contains exactly one line: `kansasprairiewebworks.com`

- [x] **1.3** robots.txt:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://kansasprairiewebworks.com/sitemap.xml
  ```

- [x] **1.4** .gitignore:
  ```
  .DS_Store
  Thumbs.db
  *.log
  node_modules/
  ```

- [x] **1.5** images/README.txt with required filenames list

- [x] **1.6** README.md with project description and placeholder list

- [x] **1.7** Update PROGRESS.md: Phase 1 complete

✅ PHASE 1 COMPLETE

---

## PHASE 2 — styles.css
> Build entire stylesheet before any HTML. Everything depends on it.

- [x] **2.1** CSS reset + all root variables
  (all colors, gradients, shadows from AGENT_BRIEF — no hardcoded hex)

- [ ] **2.2** Typography
  (Poppins headings, Inter body, .text-pop span in var(--primary) Poppins 700)

- [ ] **2.3** Layout utilities
  (.container, .section, .grid-2/3/4/5, .flex, .flex-center, .flex-between)

- [ ] **2.4** Button styles
  (.btn, .btn--primary, .btn--secondary, .btn--dark, .btn--large)
  All hover states, focus states, active states

- [ ] **2.5** Navbar
  (.navbar sticky, .navbar__logo, .navbar__links, .navbar__dropdown)
  (.navbar__cta, .navbar__hamburger, .navbar__mobile-menu)
  Mobile menu: full-width stacked buttons, drops DOWN, never overlaps
  Always includes Call + Book buttons at bottom of mobile menu
  .scrolled class: solid dark bg + shadow

- [ ] **2.6** Hero section
  Deep gradient bg, animated keyframe gradient shift
  .hero__badge pulse animation
  Overlay layer for image + gradient combo

- [ ] **2.7** Glass card component
  .glass-card with backdrop-filter, border, box-shadow from AGENT_BRIEF

- [ ] **2.8** Diagonal section dividers (clip-path)

- [ ] **2.9** .text-pop class (Poppins 700, var(--primary))

- [ ] **2.10** Facebook Major Section A styles
  (warm wheat bg, 2-col, Facebook blue #1877F2 accent, mockup card)

- [ ] **2.11** Facebook Social Proof Block styles
  (dark bg, 3 glass cards, centered)

- [ ] **2.11a** Floating Facebook Messenger button styles
  (.fb-float fixed position, .fb-float__btn Facebook blue,
  .fb-float__close circle X button, .dismissed display:none,
  slide-in animation from right, 2s delay)
  Mobile: sits above sticky footer (bottom: 90px)
  Desktop: bottom: 30px right: 30px

- [ ] **2.12** Featured package section (orange/gold gradient)

- [ ] **2.13** Service cards (6-grid, glass on dark, hover glow)

- [ ] **2.14** Pricing cards
  (tier cards, Tier 4 featured with var(--shadow-glow) border)
  Pricing toggle for $150/$350 monthly options

- [ ] **2.15** Service areas strip (Storm Blue bg, badge tags)

- [ ] **2.16** Portfolio cards (image + overlay, filter bar)

- [ ] **2.17** FAQ accordion (CSS transitions, content always in DOM)

- [ ] **2.18** Origin story section (dark bg, pull quote style)

- [ ] **2.19** CTA banner

- [ ] **2.20** Contact page (form fields, info blocks, action buttons)

- [ ] **2.21** Footer (multi-column dark, legal link row at bottom)

- [ ] **2.22** Mobile sticky footer (3 equal buttons, hidden above 768px)

- [ ] **2.23** Geo-banner (top strip, orange gradient, dismissible)

- [ ] **2.24** Service detail page styles
  (alternating section bg pattern, two-path cards)

- [ ] **2.25** Monthly posting tabs/accordion

- [ ] **2.26** Blog intake form styles

- [ ] **2.27** Legal page styles (clean readable typography)

- [ ] **2.28** Web app page styles (dark gradient throughout, DogeBeats energy)

- [ ] **2.29** Scroll animations (.animate-on-scroll + .visible fade-up)

- [ ] **2.30** Responsive 1200px breakpoint

- [ ] **2.31** Responsive 768px
  (stack all grids to 1col, show hamburger, show mobile sticky)

- [ ] **2.32** Responsive 480px (fine-tune padding + font sizes)

- [ ] **2.33** CSS review:
  - No hardcoded hex values anywhere
  - No white-on-white anywhere
  - All CSS variables used correctly
  - Consistent BEM naming (.block__element--modifier)

- [ ] **2.34** Update PROGRESS.md: Phase 2 complete

✅ PHASE 2 COMPLETE

---

## PHASE 3 — main.js

- [ ] **3.1** Sticky nav .scrolled class (triggers at 80px scroll)

- [ ] **3.2** Hamburger toggle
  Opens/closes .navbar__mobile-menu
  Menu drops DOWN as stacked buttons
  Closes on: nav link click, outside click, ESC key

- [ ] **3.3** Services dropdown (hover desktop / tap mobile)

- [ ] **3.4** Smooth scroll for all anchor links

- [ ] **3.5** FAQ accordion (one open at a time, JS toggles .open class)

- [ ] **3.6** Contact form validation
  Required: name, email, message
  Inline error messages
  Success message on submit
  Action: https://formspree.io/f/[KPW_FORMSPREE_ID]

- [ ] **3.7** Blog intake form validation (same pattern as contact form)

- [ ] **3.8** IntersectionObserver scroll animations
  Adds .visible to .animate-on-scroll elements on enter

- [ ] **3.9** Geo-banner
  Fetch ipapi.co/json
  midwestStates = ['KS','MO','NE','OK','CO','IA']
  If region_code NOT in midwestStates: inject .geo-banner
  Silent fail on any API error — never block page

- [ ] **3.9a** Floating Facebook Messenger button JS
  dismissFbFloat() function — adds .dismissed class + sessionStorage flag
  DOMContentLoaded check — if sessionStorage flag set, hide immediately
  Dismissal persists for browser session only (not permanent)

- [ ] **3.10** Pricing toggle (Tier 4: $150 maintenance / $350 active content)

- [ ] **3.11** JS review: no console errors, all functions commented

- [ ] **3.12** Update PROGRESS.md: Phase 3 complete

✅ PHASE 3 COMPLETE

---

## PHASE 4 — index.html (Homepage)
> Most important page. Full visual treatment. No shortcuts.

- [ ] **4.1** Head: title, all meta, OG tags, canonical, fonts CDN,
  Font Awesome CDN, styles.css link
  LocalBusiness JSON-LD schema (full spec in AGENT_BRIEF)

- [ ] **4.2** Nav with dropdown (copy this nav to all pages)

- [ ] **4.3** Hero:
  Background: kpw-hero-storm.jpg + var(--grad-hero) overlay
  Animated gradient keyframe on background
  KPW badge image (pulse animation)
  h1: "Your <span class='text-pop'>Complete Online Presence</span>"
  Subheadline: "Website. Google. Facebook. All in one package."
  Buttons: "Book Your Free Call" | "Call Now → 785-577-7695"
  Tagline: "We handle the setup. You run your business."

- [ ] **4.4** Facebook Major Section A
  (warm wheat bg, 2-col, benefits list, Facebook mockup card,
  Facebook blue accents, 2 buttons — View Page + Get Setup)

- [ ] **4.5** Facebook Social Proof Block
  (dark bg, 3 glass cards: Follow / Message / Share)

- [ ] **4.5a** NOTE: Google Business Profile section OMITTED intentionally
  No GBP exists yet. Add later with single command when ready.
  service-google-profile.html and nav link still built — just no homepage block.

- [ ] **4.6** Featured package section (gradient, includes list, image)

- [ ] **4.7** Services cards (6 glass cards → individual service pages)

- [ ] **4.8** Pricing preview (4 tier cards → pricing.html)

- [ ] **4.9** Service areas strip (all towns as badge tags)

- [ ] **4.10** Portfolio preview (3 cards including DogeBeats)

- [ ] **4.11** FAQ preview (3 accordion questions → faq.html)

- [ ] **4.12** Origin story teaser:
  "Five years ago I hired a California agency..." (short version)
  "Read Our Story →" → about.html

- [ ] **4.13** CTA banner

- [ ] **4.14** Contact preview (phone click-to-call, email, Facebook)

- [ ] **4.15** Footer with legal links (Terms | Privacy | Disclaimer)

- [ ] **4.16** Mobile sticky footer (Call / Text / Facebook)

- [ ] **4.16a** Floating Facebook Messenger button HTML
  (inject before </body> on THIS page and ALL 17 pages)
  id="fbFloat", ✕ close button, Messenger link, slide-in animation

- [ ] **4.17** Script tag → main.js

- [ ] **4.18** Review: all .text-pop spans on keywords, alt text on images,
  mobile layout at 375px, no white-on-white

- [ ] **4.19** Update PROGRESS.md: Phase 4 complete

✅ PHASE 4 COMPLETE

---

## PHASE 5 — pricing.html

- [ ] **5.1** Head + nav
- [ ] **5.2** Hero: "Simple, Honest Pricing for Kansas Businesses"
  Sub: "No surprises. No hidden fees. No California agencies."
- [ ] **5.3** 5 pricing cards (Tier 1-4 + Web App)
  Tier 4: featured with glow border
  Tier 4: $150/$350 toggle
- [ ] **5.4** "Not sure?" CTA — book + call buttons
- [ ] **5.5** Blog add-on callout ($99/mo)
- [ ] **5.6** Fine print (cancellation, ownership, 30-day notice)
- [ ] **5.7** Footer + mobile sticky + script
- [ ] **5.8** Update PROGRESS.md: Phase 5 complete

✅ PHASE 5 COMPLETE

---

## PHASE 6 — services.html

- [ ] **6.1** Head + nav
- [ ] **6.2** Hero: "Done-For-You Digital Services for Kansas Businesses"
- [ ] **6.3** 6 large service cards → individual service pages
- [ ] **6.4** Two Client Paths section (Path A / Path B)
- [ ] **6.5** Complete Package highlight
- [ ] **6.6** Service areas strip
- [ ] **6.7** Footer + mobile sticky + script
- [ ] **6.8** Update PROGRESS.md: Phase 6 complete

✅ PHASE 6 COMPLETE

---

## PHASE 7 — Individual Service Pages (6 pages)
> Each follows Service Detail Page Structure from AGENT_BRIEF
> Alternate section backgrounds per spec

- [ ] **7.1** service-web-design.html
  Hero: "Professional Website Design for Kansas Businesses"
  Tier 1 pricing reference ($450/$35mo)
  4 FAQ items (plain HTML accordion)

- [ ] **7.2** service-google-profile.html
  Hero: "Not Showing Up on Google? We'll Fix That."
  Image: kpw-ad-google-profile.jpg
  Two Client Paths section
  4 FAQ items including "What if I lost my account?"

- [ ] **7.3** service-facebook-page.html
  Hero: "Your Facebook Business Page — Fully Set Up"
  Facebook blue (#1877F2) accent on this page only
  Two Client Paths section
  4 FAQ items including "What if I cancel?"

- [ ] **7.4** service-local-seo.html
  Hero: "Get Found Across Central Kansas"
  All service area towns mentioned naturally in body copy
  4 FAQ items

- [ ] **7.5** service-monthly-posting.html
  3 sub-service tabs: Blog Package | Facebook Manager | Google Manager
  Blog intake form with all fields from AGENT_BRIEF
  Form action: https://formspree.io/f/[KPW_FORMSPREE_ID]
  4 FAQ items

- [ ] **7.6** service-web-app.html
  Dark gradient visual treatment throughout
  DogeBeats featured: dogebeats-screenshot.jpg + dogebeats.com link
  Label as "AI-Autonomous Platform" — do NOT lead with crypto
  Starting at $2,500, custom quote
  Variable cost disclaimer
  4 FAQ items

- [ ] **7.7** Update PROGRESS.md: Phase 7 complete

✅ PHASE 7 COMPLETE

---

## PHASE 8 — service-areas.html

- [ ] **8.1** Head + nav + areaServed JSON-LD schema
- [ ] **8.2** Hero: "Serving Central Kansas Small Businesses"
- [ ] **8.3** Real intro paragraph (all towns named naturally)
- [ ] **8.4** 7 town cards with real descriptive sentences
- [ ] **8.5** "Don't see your town?" CTA → tel:7855777695
- [ ] **8.6** Footer + mobile sticky + script
- [ ] **8.7** Update PROGRESS.md: Phase 8 complete

✅ PHASE 8 COMPLETE

---

## PHASE 9 — faq.html

- [ ] **9.1** Head + nav + FAQ JSON-LD schema
- [ ] **9.2** Hero: "Got Questions? We've Got Answers."
- [ ] **9.3** All 7 categories, all Q&As in plain HTML accordion
  CRITICAL: every answer visible in HTML source — not JS-rendered
- [ ] **9.4** Category 7: Account Ownership (3 Q&As)
- [ ] **9.5** Bottom CTA: "Still have questions? Call 785-577-7695"
- [ ] **9.6** Footer + mobile sticky + script
- [ ] **9.7** Update PROGRESS.md: Phase 9 complete

✅ PHASE 9 COMPLETE

---

## PHASE 10 — about.html

- [ ] **10.1** Head + nav
- [ ] **10.2** Hero: "Built in Kansas. Built for Kansas."
  Background: kpw-prairie-wide.jpg with dark overlay
- [ ] **10.3** Full origin story section (full text from AGENT_BRIEF)
- [ ] **10.4** Why KPW (3 glass differentiator cards on dark)
- [ ] **10.5** Our Process (4 numbered steps)
- [ ] **10.6** Service area paragraph
- [ ] **10.7** CTA banner + footer + mobile sticky + script
- [ ] **10.8** Update PROGRESS.md: Phase 10 complete

✅ PHASE 10 COMPLETE

---

## PHASE 11 — portfolio.html

- [ ] **11.1** Head + nav
- [ ] **11.2** Hero + sample note disclaimer
- [ ] **11.3** Filter bar (All | Websites | Google | Facebook | SEO | Web Apps)
- [ ] **11.4** 6 CSS gradient placeholder cards + DogeBeats card
  DogeBeats: screenshot + "View Live →" → https://dogebeats.com
- [ ] **11.5** CTA → [KPW_BOOKING_URL]
- [ ] **11.6** Footer + mobile sticky + script
- [ ] **11.7** Update PROGRESS.md: Phase 11 complete

✅ PHASE 11 COMPLETE

---

## PHASE 12 — contact.html

- [ ] **12.1** Head + nav
- [ ] **12.2** Hero: "Let's Talk — No Pressure, No Jargon"
- [ ] **12.3** 3 large action buttons (Call / Text / Book)
- [ ] **12.4** Contact form (all fields, Formspree action)
- [ ] **12.5** Contact info block (NO street address)
- [ ] **12.6** Footer + mobile sticky + script
- [ ] **12.7** Update PROGRESS.md: Phase 12 complete

✅ PHASE 12 COMPLETE

---

## PHASE 13 — Legal Pages

- [ ] **13.1** terms.html
  All sections from AGENT_BRIEF including:
  Kansas KCPA, account ownership policy,
  48-hour removal clause, Saline County jurisdiction

- [ ] **13.2** privacy.html
  All sections from AGENT_BRIEF including:
  KCPA, breach notification, Formspree mention, no data selling,
  out-of-state visitor acknowledgment

- [ ] **13.3** disclaimer.html
  All sections from AGENT_BRIEF including:
  No ranking guarantee, SEO timeline (3-6 months),
  platform changes clause, variable web app costs

Each page: nav + clean layout + footer + mobile sticky + script
All 3 link to each other in footer

- [ ] **13.4** Update PROGRESS.md: Phase 13 complete

✅ PHASE 13 COMPLETE

---

## PHASE 14 — sitemap.xml

- [ ] **14.1** Complete XML sitemap
  All 17 pages, base URL: https://kansasprairiewebworks.com
  Include lastmod dates, changefreq, priority

- [ ] **14.2** Update PROGRESS.md: Phase 14 complete

✅ PHASE 14 COMPLETE

---

## PHASE 15 — FINAL REVIEW

- [ ] **15.1** Nav/footer/mobile sticky identical on all 17 pages

- [ ] **15.2** Placeholder audit — search all files:
  [KPW_BOOKING_URL] — present on every CTA
  [KPW_GOOGLE_PROFILE_URL] — Google section + footer
  [KPW_FORMSPREE_ID] — contact + blog forms
  Confirm ZERO instances of [KPW_DOMAIN] (replaced everywhere)
  Confirm phone/email/Facebook are hardcoded not placeholders

- [ ] **15.3** Visual audit:
  Glass cards render on dark sections
  Animated gradient on hero
  .text-pop spans on keywords throughout
  Diagonal section dividers present
  Zero white-on-white anywhere
  Tier 4 pricing card has glow treatment

- [ ] **15.4** SEO audit:
  Every page: unique title tag
  Every page: unique meta description
  Every image: alt text
  LocalBusiness schema: index.html only
  FAQ schema: faq.html
  areaServed schema: service-areas.html
  sitemap.xml complete
  robots.txt present

- [ ] **15.5** Mobile 375px check:
  All grids stack to 1 column
  Hamburger opens + closes correctly
  Mobile sticky footer visible
  No horizontal scroll
  All tap targets min 48px height

- [ ] **15.6** Geo-banner + Messenger float check:
  Geo-banner JS function present, silent fail confirmed
  Floating Messenger button present on ALL 17 pages
  ✕ dismiss button works, sessionStorage flag set on dismiss
  Messenger button sits above mobile sticky on mobile
  Messenger button does NOT appear over geo-banner

- [ ] **15.6a** Google Business section check:
  Confirm homepage has NO Google Business section (intentionally omitted)
  Confirm service-google-profile.html IS built and linked in nav
  Confirm AGENT_BRIEF note about "add back with one command" is present

- [ ] **15.7** FAQ DOM check:
  All 7 categories visible in HTML source
  All answers readable without JavaScript

- [ ] **15.8** Legal pages check:
  Kansas / KCPA mentioned in terms + privacy
  Account ownership 48-hour clause in terms
  Saline County jurisdiction in terms
  Breach notification in privacy

- [ ] **15.9** DogeBeats check:
  Screenshot + link on portfolio.html
  Screenshot + link on service-web-app.html
  Both labeled "AI-Autonomous Platform" not "crypto"

- [ ] **15.10** File count: 17 HTML + styles.css + main.js +
  sitemap.xml + robots.txt + CNAME + .gitignore + README.md = ✅

- [ ] **15.11** Update PROGRESS.md: Phase 15 complete, build status = READY TO PUSH

✅ PHASE 15 COMPLETE — PUSH TO GITHUB

---

## GITHUB PUSH

When Phase 15 is complete and all checks pass:

```bash
git init
git add .
git commit -m "Initial build — Kansas Prairie Webworks v1.0"
git branch -M main
git remote add origin https://github.com/bbotai/kansasprairiewebworks.git
git push -u origin main
```

Update PROGRESS.md: "Build pushed to GitHub. kansasprairiewebworks.com ready."

---

## AFTER PUSH — OWNER DOES THIS

1. Go to github.com/bbotai/kansasprairiewebworks
2. Settings → Pages → Source: Deploy from branch → main → / root → Save
3. Custom domain: kansasprairiewebworks.com → Save
4. Check: Enforce HTTPS
5. Site live at https://kansasprairiewebworks.com after DNS

## DNS SETUP (owner sets up in Cloudflare)

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
Propagation: 24–48 hours

---

## REMAINING PLACEHOLDER REPLACEMENT
> Owner does this in VS Code after site is live and accounts are ready
> Find/Replace All: Ctrl+Shift+H (Windows) / Cmd+Shift+H (Mac)

| Find | Replace With |
|---|---|
| [KPW_BOOKING_URL] | Calendly or booking link |
| [KPW_GOOGLE_PROFILE_URL] | Google Business Profile URL |
| [KPW_FORMSPREE_ID] | Formspree form ID |

Then commit and push the changes:
```bash
git add .
git commit -m "Add booking URL, Google profile URL, Formspree ID"
git push
```

---

*Kansas Prairie Webworks — Built in Kansas. Built for Kansas.*
*TASKS.md v3.0 FINAL — kansasprairiewebworks.com*
