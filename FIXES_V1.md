# FIXES_V1.md
# Kansas Prairie Webworks — Site Fix Pass 1
# Run AFTER SITE_AUDIT_REQUEST.md audit is complete
# kansasprairiewebworks.com
# Repo: bbotai/kansasprairiewebworks

---

## CLAUDE CODE — INSTRUCTIONS

You have completed the audit in SITE_AUDIT_REQUEST.md.
Now execute every fix below in order.
Surgical edits only — do NOT rebuild from scratch.
Do NOT change anything not listed here.

Commit message when done:
"Fix pass v1 — images, UI, CTA, readability, schema, blogs, AISCO, legal"

---

## FIX 1 — IMAGE PATHS (DO THIS FIRST)

From the audit SITE_AUDIT.md you now know:
- The exact folder structure of the images/ directory
- Every broken image path across all pages

Fix every broken <img> src path on every page.
The correct paths must match the actual file locations in the repo.

Common issues to check and fix:
- Double folder path: src="images/images/file.jpg" → src="images/file.jpg"
- Wrong folder level: src="file.jpg" → src="images/file.jpg"
- Wrong filename case: src="KPW-Logo.png" → src="kpw-logo-badge.png"
- Extra subfolder: src="images/brand/kpw-logo.png" when file is at images/kpw-logo-badge.png

After fixing paths verify these specific images load on every page:
- KPW logo badge (top left navbar + hero)
- Hero storm background image
- Windmill sunset image
- Prairie wide image
- Google profile ad image
- DogeBeats screenshot

Fix image paths on ALL 17 HTML pages.

---

## FIX 2 — REMOVE BOOKING BUTTONS SITEWIDE

Find and DELETE every booking/calendar button on ALL 17 pages.
Do NOT add a new Call Now button — the existing one already there stays.
Simply remove the booking button. No duplicates created.

Delete any button or link containing:
- "Book Your Free Call"
- "Book Free Call"
- "Book a Call"
- "Book Now"
- "Schedule"
- Any href containing [KPW_BOOKING_URL]

---

## FIX 3 — CALL NOW IS PRIMARY CTA SITEWIDE

Call Now = always btn--primary (orange) = always listed first.
Secondary buttons (Text, Email, Facebook) = btn--secondary or btn--dark.
Never two orange buttons side by side.
Never orange button on orange or gold background.

---

## FIX 4 — HOMEPAGE SPECIFIC FIXES

Hero section:
- Remove booking button
- Keep existing Call Now button

Facebook Section A:
- Remove "Get Your Facebook Page Setup" button (booking link)
- Keep "View Our Facebook Page" button
- Add: "📞 Call to Get Started" as btn--secondary below it

Featured Package Section:
- Remove booking button, keep existing Call Now
- Fix any button that is orange on orange/gold background
- Change it to btn--dark (charcoal) or btn--secondary (white outline)

Pricing Preview — fix display ORDER to:
1. Tier 1 — Business Card Website ($450/$35mo)
2. Tier 2 — Web + Facebook ($600/$65mo)
3. Tier 3 — Web + Google ($650/$75mo)
4. Tier 4 — Complete Online Presence ($1,000) FEATURED
5. Web App — Custom Build (Starting at $2,500)

Homepage FAQ Preview:
- All answers OPEN and VISIBLE — no accordion hiding

---

## FIX 5 — ALL FAQ ANSWERS OPEN SITEWIDE

Every FAQ section on every page:
- Answers open and visible by default — no clicking required
- Remove accordion hide/show from all FAQ sections
- All content in plain HTML DOM

Add to styles.css:
```css
.faq__answer,
.faq-item__answer,
.accordion__content,
[class*="faq"][class*="answer"],
[class*="faq"][class*="content"] {
  display: block !important;
  max-height: none !important;
  opacity: 1 !important;
  visibility: visible !important;
  overflow: visible !important;
}
```

---

## FIX 6 — COMMON QUESTIONS CONSISTENT SITEWIDE

Every Common Questions block on every page must be identical.
Same structure. Same CSS. Same open behavior. No exceptions.

HTML structure for every FAQ block:
```html
<section class="faq-section">
  <div class="container">
    <h2 class="faq-section__title">Common Questions</h2>
    <div class="faq-list">
      <div class="faq-item">
        <h3 class="faq-item__question">Question here?</h3>
        <p class="faq-item__answer">Answer here — fully visible.</p>
      </div>
    </div>
  </div>
</section>
```

CSS in styles.css:
```css
.faq-section {
  background: var(--light);
  padding: 80px 0;
}
.faq-section__title {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: var(--dark-mid);
  text-align: center;
  margin-bottom: 3rem;
}
.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.faq-item {
  background: var(--white);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  border-left: 4px solid var(--primary);
}
.faq-item__question {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--dark-mid);
  margin-bottom: 0.75rem;
}
.faq-item__answer {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #4A4A4A;
  line-height: 1.7;
  display: block !important;
  visibility: visible !important;
  max-height: none !important;
  opacity: 1 !important;
}
```

Apply this to every page with FAQ sections.

---

## FIX 7 — TEXT CONTRAST SITEWIDE

Add/update in styles.css:

Dark section body text: color: #ECF0F1
Card titles on white cards: color: #2C3E50 font-weight: 700
Section headings on gradient/dark bg: color: #FFFFFF or #F1C40F
Links and "Read Our Story" on dark bg: color: #F1C40F font-weight: 600
"Two Ways We Can Help" titles: color: #FFFFFF font-weight: 700
Monthly posting dark card text: color: #ECF0F1
Web app page dark section text: color: #ECF0F1

Specific page fixes:
service-web-design.html:
- "What You Get" card titles: color #2C3E50 on white cards
- Tier 1 section text: ensure readable contrast

service-google-profile.html:
- "Two Ways We Can Help" titles: #FFFFFF font-weight: 700
- "Lost My Account" section: color #ECF0F1

service-facebook-page.html:
- "Two Ways We Can Help" titles: #FFFFFF font-weight: 700

service-monthly-posting.html:
- All tab/card titles on dark: #FFFFFF or #F1C40F

---

## FIX 8 — FOOTER SITEWIDE (ALL 17 PAGES)

Copyright — change to:
```html
<p class="footer__copyright">
  © 2026 Kansas Prairie Webworks. All rights reserved.
</p>
<p class="footer__credit">
  Website created by Kansas Prairie Webworks — Salina, Kansas
</p>
```

Legal links — fix to one horizontal line:
```html
<div class="footer__legal">
  <a href="terms.html">Terms of Service</a>
  <span class="footer__legal-sep">|</span>
  <a href="privacy.html">Privacy Policy</a>
  <span class="footer__legal-sep">|</span>
  <a href="disclaimer.html">Disclaimer</a>
</div>
```

CSS:
```css
.footer__legal {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px 16px;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
.footer__legal a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.85rem;
  white-space: nowrap;
}
.footer__legal a:hover { color: var(--primary); }
.footer__legal-sep {
  color: var(--text-muted);
  font-size: 0.85rem;
}
```

---

## FIX 9 — NAVBAR CTA SITEWIDE (ALL 17 PAGES)

Remove any "Book Free Call" button from navbar.
Replace with:
```html
<a href="tel:7855777695" class="btn btn--primary navbar__cta">
  📞 Call Now
</a>
```

Mobile menu — remove booking button, keep:
- 📞 Call Now → tel:7855777695
- 💬 Text Us → sms:7855777695

---

## FIX 10 — PRICING ORDER (ALL PAGES)

pricing.html AND homepage pricing preview:
1. Tier 1 — $450 setup / $35mo
2. Tier 2 — $600 setup / $65mo
3. Tier 3 — $650 setup / $75mo
4. Tier 4 — $1,000 setup — FEATURED (glow border)
5. Web App — Starting at $2,500

---

## FIX 11 — AI TOOLS POSITIONING SECTION

Add to about.html after "Why KPW" section
AND services.html after service cards:

```html
<section class="ai-tools-section">
  <div class="container">
    <h2>We Use the <span class="text-pop">Latest AI Tools</span>
    — So You Don't Have To</h2>
    <p>The web design industry is changing fast. AI tools now allow us
    to build faster, write smarter content, and deliver more value for
    every dollar you invest. Kansas Prairie Webworks stays at the
    cutting edge of these tools — so your business benefits from the
    latest technology without paying agency-level prices.</p>
    <p>You don't need to know anything about AI. That's our job.
    You just need to know your business is in good hands.</p>
    <a href="tel:7855777695" class="btn btn--primary">
      📞 Call Now — 785-577-7695
    </a>
  </div>
</section>
```

Style: dark gradient background, white text.

---

## FIX 12 — BLOG CARDS ON service-monthly-posting.html

Add section after the 3 service tabs, before FAQ:
Title: "Real Blog Posts — Written for Kansas Businesses"
Subtext: "Here's what AI-optimized blog content looks like."

Blog Card 1:
- Title: "Meet Kaleb — Your Local Web Designer in Salina KS"
- Excerpt: "If you've ever hired an out-of-state agency and ended up
  feeling like just another invoice — this one's for you."
- URL: https://kansasprairiewebworks.blogspot.com/2026/06/meet-your-local-web-designer-salina-ks.html
- Thumbnail: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_b0AQYas_iuFlKdf3Wjep1dTqC1QYILhktRlgkEnZdNKYC-6CS_2QF8kbW2UpQ-23xOk_3U_0ZWn3gFuZRWwboL7yEC3a7LpAxHJiOGGJpsrPjiytzNUk-_HebTBsAg_p2Tuchp5mYCynbudcdrL0xrEMHGwQN_WVKQz0BxOiLHc2VBH48gCiZErwLItG/w1200-h630-p-k-no-nu/1000023181.jpg
- Alt: "Kaleb Diehl — Local Web Designer in Salina Kansas"
- Button: "Read Post →" opens new tab

Blog Card 2:
- Title: "How AI Is Changing Small Business Online"
- Excerpt: "AI tools are reshaping how small businesses get found —
  local Kansas businesses that act now will have a real advantage."
- URL: https://kansasprairiewebworks.blogspot.com/2026/06/how-ai-is-changing-small-business-online.html
- Alt: "AI tools for small business — Kansas Prairie Webworks"
- Button: "Read Post →" opens new tab

Below cards:
```html
<a href="https://kansasprairiewebworks.blogspot.com"
   target="_blank" rel="noopener" class="btn btn--secondary">
  📖 See All Blog Posts →
</a>
```

---

## FIX 13 — OPEN GRAPH + SCHEMA SYNC

ALL 17 pages — verify and add missing OG tags:
```html
<meta property="og:site_name" content="Kansas Prairie Webworks">
<meta property="og:type" content="website">
<meta property="og:title" content="[PAGE TITLE] | Kansas Prairie Webworks">
<meta property="og:description" content="[PAGE DESCRIPTION]">
<meta property="og:image" content="https://kansasprairiewebworks.com/images/kpw-hero-storm.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="https://kansasprairiewebworks.com/[page]">
```

index.html LocalBusiness schema — update:
- Add: "founder": {"@type": "Person", "name": "Kaleb Diehl"}
- Update sameAs array to include:
  "https://www.facebook.com/kansasprairiewebworks"
  "https://kansasprairiewebworks.blogspot.com"

service-monthly-posting.html — add BlogPosting schema:
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Meet Kaleb — Your Local Web Designer in Salina KS",
  "author": {"@type": "Person", "name": "Kaleb Diehl"},
  "publisher": {
    "@type": "Organization",
    "name": "Kansas Prairie Webworks",
    "url": "https://kansasprairiewebworks.com"
  },
  "url": "https://kansasprairiewebworks.blogspot.com/2026/06/meet-your-local-web-designer-salina-ks.html",
  "datePublished": "2026-06-11"
}
```

---

## FIX 14 — AISCO READABILITY

ALL pages:
1. Exactly ONE H1 tag per page
2. H2 → H3 order — no skipped levels
3. FAQ answers in plain HTML — not JS-rendered
4. Footer NAP consistent format:
   Kansas Prairie Webworks — Salina, Kansas — 785-577-7695
5. Add to <head> on ALL pages:
```html
<link rel="author" href="https://kansasprairiewebworks.blogspot.com">
```

---

## FIX 15 — WEBSITE OWNERSHIP CLARITY (Legal + Content)

### THE PROBLEM:
Current language says "accounts are yours — we remove ourselves on cancel."
TRUE for Facebook and Google.
NOT fully accurate for websites — hosted under KPW GitHub, domain may
be registered by KPW. Client cannot just walk away with a live website.
Must be clearly explained in all three legal pages and relevant service pages.

---

### terms.html — ADD new section "Website Hosting and File Ownership":

"Websites built by Kansas Prairie Webworks are hosted on KPW
infrastructure under active service plans. Upon cancellation:

1. Client receives a complete copy of all website files within 7 days
   at no additional charge.
2. Domain names registered by KPW on the client's behalf may be
   transferred to the client's own registrar account upon written
   request. Transfer fees charged by the registrar are the
   client's responsibility.
3. Website hosting ends 30 days after the final billing date.
4. Facebook Business Pages and Google Business Profiles created or
   managed by KPW are transferred to full client control within
   48 hours of cancellation. These accounts are always the
   client's property.
5. KPW retains the right to display completed work in its portfolio
   unless the client requests otherwise in writing."

---

### privacy.html — ADD new section "Website and Account Data":

"When Kansas Prairie Webworks builds or manages digital assets on
your behalf — including websites, Google Business Profiles, and
Facebook Business Pages — we handle your business information with
care. We do not use your business data for any purpose other than
delivering your contracted services. Upon cancellation, all client
business data, files, and account access are returned or removed
as described in our Terms of Service."

---

### disclaimer.html — ADD new section "Website Hosting Dependency":

"Websites built and hosted by Kansas Prairie Webworks require an
active service plan to remain live on the internet. Cancellation
of service will result in the website going offline after the
30-day notice period. Kansas Prairie Webworks is not responsible
for business impact resulting from a client's decision to cancel
hosting services. Clients are encouraged to maintain active plans
or arrange alternative hosting before cancelling."

---

### faq.html — ADD to "Account Ownership and Cancellation" category:

Q: "What happens to my website if I cancel?"
A: "Your website files are yours — we'll send you a complete copy
within 7 days of cancellation. Your domain can be transferred to
your own account on request. The website will go offline 30 days
after your final payment since hosting is included in your monthly
plan. Your Facebook page and Google Business Profile are not
affected by cancellation — those stay with you no matter what."

Q: "Who owns my Facebook page and Google listing?"
A: "You do — completely and permanently. Whether we built them or
manage your existing ones, these are always yours. If you cancel,
we remove our manager access within 48 hours and you keep
everything with no interruption."

Q: "Who owns my domain name?"
A: "If we registered your domain on your behalf, we can transfer
full ownership to your own registrar account at any time — just
ask. We recommend clients eventually own their own domain directly.
If you registered it yourself, you already own it fully."

---

### services.html — ADD ownership transparency callout box:

```html
<div class="ownership-callout">
  <h3>What's Always Yours</h3>
  <ul>
    <li>📘 Facebook Business Page — 100% yours, always</li>
    <li>📍 Google Business Profile — 100% yours, always</li>
    <li>🌐 Website Files — provided within 7 days on request</li>
    <li>🔗 Domain Name — transferable to your account anytime</li>
  </ul>
  <p>We believe in complete transparency.
  You should always know exactly what you own.</p>
</div>
```

Style: dark background, gold left border, white text, clean layout.

---

### service-web-design.html — UPDATE ownership language:

Replace any "yours always / remove ourselves" language with:
"Your website files are always yours. If you ever move on,
we provide a complete file handoff within 7 days.
Domain transfer available on request.
Facebook and Google accounts: full handoff within 48 hours."

---

## FINAL CHECK BEFORE PUSH

Confirm every item:
- [ ] All images loading — no broken paths, no square placeholder boxes
- [ ] Zero booking buttons on any page
- [ ] No duplicate Call Now buttons
- [ ] All FAQ answers open and visible — identical layout every page
- [ ] Text readable everywhere — no light on light, no grey on dark
- [ ] Footer: 2026 copyright, horizontal legal links, "Website created by KPW"
- [ ] Call Now = primary orange CTA — no orange on orange anywhere
- [ ] Pricing order: 1, 2, 3, 4, Web App on all pages
- [ ] Blog cards on service-monthly-posting.html with real post images
- [ ] OG tags complete on all 17 pages
- [ ] LocalBusiness schema: founder Kaleb Diehl, blog in sameAs
- [ ] AI positioning section on about.html and services.html
- [ ] AISCO: one H1 per page, rel=author on all pages
- [ ] Legal pages: website hosting policy added to all three
- [ ] FAQ: three new ownership Q&As added
- [ ] services.html: ownership callout box added
- [ ] SITE_AUDIT.md committed to repo

Then push:
```bash
git add .
git commit -m "Fix pass v1 — images, UI, CTA, readability, schema, blogs, AISCO, legal"
git push
```

---

*Kansas Prairie Webworks — kansasprairiewebworks.com*
*Owner: Kaleb Diehl — 785-577-7695 — kansasprairiewebworks@gmail.com*
*FIXES_V1.md — Final*
