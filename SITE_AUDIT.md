# SITE_AUDIT.md
# Kansas Prairie Webworks — Claude Code Site Audit
# Generated: 2026-06-11

---

## IMAGES FOLDER STRUCTURE
Files found in images/ with full path:
- images/README.txt [EXISTS]
- images/dogebeats-screenshot.jpg [EXISTS — WORKING]
- images/kpw-ad-google-profile.jpg.png [EXISTS — DOUBLE EXTENSION — pages reference kpw-ad-google-profile.jpg → BROKEN]
- images/kpw-ad-windmill-sunset.jpg [EXISTS — WORKING]
- images/kpw-hero-storm.jpg.png [EXISTS — DOUBLE EXTENSION — pages reference kpw-hero-storm.jpg → BROKEN]
- images/kpw-logo-badge.png.jpg [EXISTS — DOUBLE EXTENSION — pages reference kpw-logo-badge.png → BROKEN]
- images/kpw-prairie-wide.jpg [EXISTS — WORKING]

NOTE: Three files have corrupt double-extensions. The HTML src paths are correct; the FILE NAMES need to be fixed by renaming to remove the extra extension.

## BROKEN IMAGE PATHS FOUND
All broken paths are caused by double-extension filenames, not wrong folder paths.
- [ALL 17 PAGES]: src="images/kpw-logo-badge.png" — BROKEN — file on disk is: images/kpw-logo-badge.png.jpg
- [index.html hero]: style="background-image:url('images/kpw-hero-storm.jpg')" — BROKEN — file is: images/kpw-hero-storm.jpg.png
- [service-google-profile.html hero]: style="background-image:url('images/kpw-ad-google-profile.jpg')" — BROKEN — file is: images/kpw-ad-google-profile.jpg.png
- [service-google-profile.html OG]: og:image content="...images/kpw-ad-google-profile.jpg" — BROKEN (same cause)

FIX METHOD: Rename image files to remove extra extension:
  images/kpw-logo-badge.png.jpg → images/kpw-logo-badge.png
  images/kpw-hero-storm.jpg.png → images/kpw-hero-storm.jpg
  images/kpw-ad-google-profile.jpg.png → images/kpw-ad-google-profile.jpg

---

## index.html
Images:
  - src="images/kpw-logo-badge.png" (navbar + hero badge + footer) — BROKEN (file: .png.jpg)
  - background-image:url('images/kpw-hero-storm.jpg') — BROKEN (file: .jpg.png)
  - src="images/dogebeats-screenshot.jpg" — WORKING
CTA Buttons:
  - "Book Free Call" → href="[KPW_BOOKING_URL]" navbar (BOOKING — remove)
  - "Book Your Free Call" → href="[KPW_BOOKING_URL]" hero (BOOKING — remove)
  - "Call Now → 785-577-7695" → tel:7855777695 (keep)
  - "Get Your Facebook Page Setup" → href="[KPW_BOOKING_URL]" fb-section-a (BOOKING — remove)
  - "View Our Facebook Page" → facebook.com URL (keep)
  - "Book Free Consultation" → href="[KPW_BOOKING_URL]" featured-package (BOOKING — remove)
  - "Book Your Free Call" → href="[KPW_BOOKING_URL]" cta-banner (BOOKING — remove)
  - "Book Free Call" → href="[KPW_BOOKING_URL]" mobile menu (BOOKING — remove)
Booking links found: YES — [KPW_BOOKING_URL] placeholder on 5+ buttons
Duplicate Call Now: NO (one Call Now)
FAQ: HIDDEN — uses <button class="faq-item__question" aria-expanded="false"> accordion
Text contrast issues: "Read Our Story →" on dark origin-story bg (color not set to visible contrast)
OG Tags missing: og:site_name, og:image:width, og:image:height
Schema: LocalBusiness PRESENT — MISSING: "founder" Kaleb Diehl, sameAs missing blog URL
H1 count: 1 ✓ ("Your Complete Online Presence")
Heading issues: None (H2s and H3s in order)
Footer copyright: 2025 — NEEDS UPDATE to 2026
Legal links: Inline nav tag — no explicit horizontal flex CSS seen in HTML (footer__legal-links class)
Ownership language:
  - "You own everything — domain, accounts, listings. Always." in featured package → CORRECT for Facebook/Google
  - "Your accounts are yours. Always." in origin story → NEEDS CLARIFICATION for website/hosting
Notes: Pricing grid is missing Tier 3 ($650/$75mo) — shows Tier 1, Tier 2, Tier 4 (featured), Web App only

---

## about.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
  - background-image:url('images/kpw-prairie-wide.jpg') — WORKING
CTA Buttons:
  - "Book Free Call" navbar → [KPW_BOOKING_URL] (remove)
  - "Book Free Call" CTA banner → [KPW_BOOKING_URL] (remove)
  - "Call 785-577-7695" → tel:7855777695 (keep)
  - "Book Free Call" mobile → [KPW_BOOKING_URL] (remove)
Booking links found: YES
Duplicate Call Now: NO
FAQ: None on this page
Text contrast issues: "You Keep Everything" glass-card body text on dark bg — check CSS
OG Tags missing: og:site_name, og:image:width, og:image:height
Schema: None
H1 count: 1 ✓ ("Built in Kansas. Built for Kansas.")
Heading issues: None
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links (same as all pages)
Ownership language:
  - "You Keep Everything" card: "Cancel anytime — we remove ourselves in 48 hours, nothing missing." → NEEDS CLARIFICATION for website hosting
Notes: AI tools section not present (FIX 11 needed)

---

## services.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
CTA Buttons:
  - Multiple "Book Free Call" and "Book Free Consultation" → [KPW_BOOKING_URL] (remove all)
  - "View Pricing" → pricing.html (keep)
  - "Call 785-577-7695" in CTA banner (keep)
Booking links found: YES
Duplicate Call Now: NO
FAQ: None
Text contrast issues: "Two Ways We Can Help" path-card titles — path-card--a and path-card--b backgrounds unclear
OG Tags missing: og:site_name, og:image:width, og:image:height
Schema: None
H1 count: 1 ✓
Heading issues: None
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language:
  - Path A step 6: "On cancellation: KPW removes itself within 48 hours. You keep 100% of accounts." → CORRECT for Facebook/Google, NEEDS CLARIFICATION for website
  - Quote in Path B: "Your accounts are yours. Always. We build them, manage them, and hand them back..." → NEEDS CLARIFICATION for website
Notes: Ownership callout box not present (FIX 15 needed). AI tools section not present (FIX 11 needed).

---

## pricing.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
CTA Buttons:
  - Multiple "Book Free Call" and "Book Free Consultation" → [KPW_BOOKING_URL] (remove all)
  - "Book Free Consultation" on Tier 4 card → [KPW_BOOKING_URL] (remove)
  - "Call 785-577-7695" (keep)
Booking links found: YES
Duplicate Call Now: NO
FAQ: None (no FAQ section)
Text contrast issues: None obvious
OG Tags missing: og:site_name, og:image:width, og:image:height
Schema: None
H1 count: 1 ✓
Heading issues: None
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language:
  - "Your accounts are yours. Always." highlight-box → NEEDS CLARIFICATION for website hosting
  - "Domain & all accounts remain client property at all times" → partially correct
Notes: PRICING ORDER WRONG — Shows: Tier 1, Tier 2, Tier 4 (featured), Tier 3, Web App. Correct order per FIXES_V1: 1, 2, 3, 4, Web App.

---

## contact.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
CTA Buttons:
  - "Book Free Call" navbar → [KPW_BOOKING_URL] (remove)
  - "Book a Free Call" contact action button → [KPW_BOOKING_URL] (remove/replace)
  - "Book Free 15-Min Call" CTA banner → [KPW_BOOKING_URL] (remove)
  - "Call Now" and "Text Us" → tel/sms (keep)
Booking links found: YES
Duplicate Call Now: NO
FAQ: None
Text contrast issues: None obvious
OG Tags missing: og:site_name, og:image:width, og:image:height
Schema: None
H1 count: 1 ✓
Heading issues: None
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language: None
Notes: Form action uses [KPW_FORMSPREE_ID] placeholder

---

## faq.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
CTA Buttons:
  - "Book Free Call" navbar → [KPW_BOOKING_URL] (remove)
  - "Book Free Call" mobile → [KPW_BOOKING_URL] (remove)
  - "Book Free Call" CTA section → [KPW_BOOKING_URL] (remove)
  - "Call 785-577-7695" (keep)
Booking links found: YES
Duplicate Call Now: NO
FAQ: HIDDEN — all answers use <button class="faq-item__question" aria-expanded="false"> accordion pattern
Text contrast issues: None obvious (faq-page section uses light bg)
OG Tags missing: og:site_name, og:image:width, og:image:height
Schema: FAQPage schema PRESENT ✓ (5 questions)
H1 count: 1 ✓
Heading issues: Uses H2 for category headings, nested within sr-only H2 section — slightly unusual but functional
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language:
  - "Do I own my website after it's built?" → "Your domain, your hosting account, your website files... all of it is yours" → NEEDS CLARIFICATION (hosting depends on plan)
  - "What happens to my accounts if I cancel?" → says website stays live after cancel, which conflicts with hosting ending — NEEDS CLARIFICATION
Notes: Three new ownership Q&As need to be added (FIX 15)

---

## portfolio.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
  - src="images/dogebeats-screenshot.jpg" — WORKING (2 instances)
CTA Buttons:
  - "Book Free Call" navbar → [KPW_BOOKING_URL] (remove)
  - "Book Free Call" CTA banner → [KPW_BOOKING_URL] (remove)
  - "Call 785-577-7695" (keep)
Booking links found: YES
Duplicate Call Now: NO
FAQ: None
Text contrast issues: None obvious
OG Tags missing: og:site_name, og:image:width, og:image:height
Schema: None
H1 count: 1 ✓
Heading issues: None
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language: None
Notes: None

---

## service-areas.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
  - background-image:url('images/kpw-prairie-wide.jpg') — WORKING
CTA Buttons:
  - "Book Free Call" navbar → [KPW_BOOKING_URL] (remove)
  - 7 town-card CTAs "Get Started in [Town]" → all [KPW_BOOKING_URL] (remove each)
  - "Book Free Call" CTA banner → [KPW_BOOKING_URL] (remove)
  - "Call 785-577-7695" (keep)
Booking links found: YES — heavy usage
Duplicate Call Now: NO
FAQ: None
Text contrast issues: None obvious
OG Tags missing: og:site_name, og:image:width, og:image:height
Schema: LocalBusiness with full areaServed array PRESENT ✓
H1 count: 1 ✓
Heading issues: None
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language: None
Notes: Town-card buttons all point to booking — these need Call Now replacements

---

## service-web-design.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
CTA Buttons:
  - "Book Free Call" navbar → [KPW_BOOKING_URL] (remove)
  - "Book Free Consultation" hero → [KPW_BOOKING_URL] (remove)
  - "Get Started" in Tier 1 pricing card → [KPW_BOOKING_URL] (remove)
  - "Book Free Consultation" CTA → [KPW_BOOKING_URL] (remove)
  - Multiple in mobile → remove
Booking links found: YES
Duplicate Call Now: NO
FAQ: HIDDEN — accordion buttons in service-faq section
Text contrast issues:
  - "What You Get" (glass-card__title) on dark bg — need to check CSS variable value
  - glass-card__body text on dark bg — may lack contrast
OG Tags missing: og:site_name, og:image:width, og:image:height
Schema: None
H1 count: 1 ✓
Heading issues: None
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language:
  - "You Own Everything" card: "Your domain is yours. Your hosting account is yours. We never hold your assets hostage. Cancel anytime — everything stays with you." → NEEDS CLARIFICATION for website hosting
Notes: None

---

## service-google-profile.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
  - background-image:url('images/kpw-ad-google-profile.jpg') hero — BROKEN (file: .jpg.png)
  - OG image: "...images/kpw-ad-google-profile.jpg" — BROKEN
CTA Buttons:
  - Multiple booking buttons → [KPW_BOOKING_URL] (remove all)
  - "Start From Scratch" Path A → [KPW_BOOKING_URL] (remove)
  - "Fix My Existing Listing" Path B → [KPW_BOOKING_URL] (remove)
  - "Book Free Consultation" lost account section → [KPW_BOOKING_URL] (remove)
Booking links found: YES
Duplicate Call Now: NO
FAQ: HIDDEN accordion
Text contrast issues:
  - "Two Ways We Can Help" path-card__title elements — on path-card bg (need to verify CSS)
  - "Lost My Account" section: p style="color:var(--text-muted)" on dark bg — low contrast
OG Tags missing: og:site_name, og:image:width, og:image:height
Schema: None
H1 count: 1 ✓
Heading issues: None
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language:
  - "Will you be added as an owner of my Google profile?" → "Never. We are added as Manager... your accounts are still completely under your control." → CORRECT ✓
Notes: Hero background image BROKEN

---

## service-facebook-page.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
CTA Buttons:
  - Multiple booking buttons → remove all [KPW_BOOKING_URL]
  - "Start My Page" Path A → [KPW_BOOKING_URL] (remove)
  - "Fix My Existing Page" Path B → [KPW_BOOKING_URL] (remove)
Booking links found: YES
Duplicate Call Now: NO
FAQ: HIDDEN accordion in dark section
Text contrast issues:
  - "Two Ways We Can Help" path-card__title elements on dark bg — needs #FFFFFF
  - FAQ section on dark bg — check answer text contrast
OG Tags missing: og:site_name, og:image:width, og:image:height
Schema: None
H1 count: 1 ✓
Heading issues: None
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language:
  - "What if I cancel? — do I keep my page?" → "Yes, 100%... The page stays live under your account." → CORRECT ✓
Notes: None

---

## service-local-seo.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
  - background-image:url('images/kpw-prairie-wide.jpg') — WORKING
CTA Buttons:
  - Multiple booking buttons → remove all
Booking links found: YES
Duplicate Call Now: NO
FAQ: HIDDEN accordion
Text contrast issues:
  - "What's Included" glass-cards use background:#fff override — titles and body text should be visible
  - Dark section top: text-muted on dark bg — likely fine
OG Tags missing: og:site_name, og:image:width, og:image:height
Schema: None
H1 count: 1 ✓
Heading issues: None
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language: None
Notes: None

---

## service-monthly-posting.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
CTA Buttons:
  - "Book a Call" hero → [KPW_BOOKING_URL] (remove)
  - Multiple in CTA banner → remove
Booking links found: YES
Duplicate Call Now: NO
FAQ: HIDDEN accordion on dark section
Text contrast issues:
  - posting-tab headers on dark bg — posting-tab__title and posting-tab__price — check CSS
OG Tags missing: og:site_name, og:image:width, og:image:height
Schema: NO BlogPosting schema — MISSING (FIX 13 needed)
H1 count: 1 ✓
Heading issues: None
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language: None
Notes: Blog cards section completely absent (FIX 12 needed)

---

## service-web-app.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
  - src="images/dogebeats-screenshot.jpg" — WORKING (2 instances)
CTA Buttons:
  - Multiple booking buttons → remove all
Booking links found: YES
Duplicate Call Now: NO
FAQ: HIDDEN accordion on dark section
Text contrast issues:
  - DogeBeats section: background dark gradient — ul items use color:var(--text-muted) → may be low contrast
  - FAQ section dark bg: check answer text
OG Tags missing: og:site_name, og:image:width, og:image:height
Schema: None
H1 count: 1 ✓
Heading issues: None
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language: None
Notes: None

---

## terms.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
CTA Buttons: None (mobile only has "Call Now" ✓)
Booking links found: NO ✓
FAQ: None
Text contrast issues: None (white bg content)
OG Tags missing: ALL — no OG tags present (robots:noindex page)
Schema: None
H1 count: 1 ✓
Heading issues: None (H2 section headings within sr-only H2 section — OK)
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language:
  - Section 3: "Your web hosting account belongs to you." — NEEDS CLARIFICATION (hosting ends on cancellation)
  - Section 5: "All published work remains live and belongs to you." after cancellation — NEEDS CLARIFICATION (website goes offline after 30 days)
  - NO section on website file handoff or domain transfer — MISSING
Notes: Hosting/file handoff section needs to be added (FIX 15)

---

## privacy.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
CTA Buttons: None (mobile only has "Call Now" ✓)
Booking links found: NO ✓
FAQ: None
Text contrast issues: None (white bg content)
OG Tags missing: ALL — no OG tags
Schema: None
H1 count: 1 ✓
Heading issues: H3 elements within H2 sections — appropriate
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language: None — MISSING website/account data section
Notes: "Website and Account Data" section needs to be added (FIX 15)

---

## disclaimer.html
Images:
  - src="images/kpw-logo-badge.png" — BROKEN
CTA Buttons: None (mobile only has "Call Now" ✓)
Booking links found: NO ✓
FAQ: None
Text contrast issues: None (white bg content)
OG Tags missing: ALL — no OG tags
Schema: None
H1 count: 1 ✓
Heading issues: None
Footer copyright: 2025 — NEEDS UPDATE
Legal links: footer__legal-links
Ownership language:
  - Section 6: "Account Ownership & 48-Hour Removal" — covers Facebook/Google ✓ — NO mention of website hosting dependency
Notes: "Website Hosting Dependency" section needs to be added (FIX 15)

---

## SUMMARY OF ALL ISSUES — PRIORITY ORDER

1. **CRITICAL — BROKEN IMAGES (3 files)**: kpw-logo-badge.png, kpw-hero-storm.jpg, kpw-ad-google-profile.jpg all broken due to double-extension filenames in repo. Logo appears broken on ALL 17 pages. Fix: rename files to remove extra extension.

2. **HIGH — BOOKING BUTTONS SITEWIDE**: Every page has [KPW_BOOKING_URL] placeholder buttons that are non-functional. Navbar "Book Free Call" on all 17 pages, hero CTAs, section CTAs, mobile menu. Must be removed and replaced with Call Now.

3. **HIGH — FOOTER COPYRIGHT**: All 17 pages show © 2025 — must update to 2026.

4. **HIGH — PRICING ORDER WRONG**: pricing.html and index.html show Tier 1, 2, 4 (featured), Web App — missing Tier 3 on homepage, wrong order on pricing.html (Tier 4 before Tier 3).

5. **HIGH — FAQ ANSWERS HIDDEN**: All FAQ sections across all pages use accordion JavaScript — answers hidden by default. Violates AISCO and accessibility requirements.

6. **HIGH — OWNERSHIP LANGUAGE INCOMPLETE**: Terms.html, about.html, service-web-design.html, faq.html state website/hosting is always live after cancel — this is inaccurate. Website goes offline 30 days after hosting ends. Legal pages need website hosting dependency section.

7. **MEDIUM — OG TAGS INCOMPLETE**: og:site_name missing from all 17 pages. og:image:width and og:image:height missing from most pages. Terms/privacy/disclaimer have no OG tags at all.

8. **MEDIUM — SCHEMA INCOMPLETE**: index.html LocalBusiness schema missing "founder" (Kaleb Diehl) and blog URL in sameAs. service-monthly-posting.html missing BlogPosting schema.

9. **MEDIUM — TEXT CONTRAST**: Dark sections using var(--text-muted) for body text may fail contrast. Specific issues on service-google-profile.html "Lost My Account" section, service-facebook-page.html FAQ dark bg. "Two Ways We Can Help" titles on all relevant pages.

10. **MEDIUM — LEGAL FOOTER LINKS**: footer__legal-links nav — no explicit horizontal flex styling in HTML (may rely on CSS). Need to verify display is horizontal not stacked.

11. **LOW — MISSING SECTIONS**: AI positioning section absent from about.html and services.html. Blog cards absent from service-monthly-posting.html. Ownership callout box absent from services.html. rel=author link absent from all pages.

12. **LOW — NAP FORMAT**: Footer NAP varies slightly across pages — most show "Salina, Kansas" but not always full format "Kansas Prairie Webworks — Salina, Kansas — 785-577-7695".

13. **LOW — GOOGLE PROFILE HERO BROKEN**: service-google-profile.html hero background uses kpw-ad-google-profile.jpg which is broken (fixed by image rename in item 1).
