# AGENT_BRIEF.md
# Kansas Prairie Webworks — Master Build Document
# Version 4.0 FINAL
# kansasprairiewebworks.com

---

## CLAUDE CODE — READ THIS FIRST

You are Claude Code with GitHub token access.
You have full file system and GitHub permissions.

### Your mission:
Build the complete Kansas Prairie Webworks website exactly as
specified in this document. Push finished site to GitHub.
Track all progress in PROGRESS.md.

### Startup sequence (do this every time you open this project):
1. Read this entire file
2. Read PROGRESS.md to see current build status
3. Open TASKS.md and find the first unchecked task
4. Continue from there without re-doing completed work

### Build rules:
- Build one complete file at a time
- Mark TASKS.md checkbox [x] after each completed file
- Update PROGRESS.md after each completed phase
- Re-read AGENT_BRIEF.md at the start of each new phase
- Never stop between phases unless there is an actual error
- If unsure about any spec — re-read this file, do not guess

### File locations:
- All HTML pages in project root (not subfolders)
- styles.css and main.js in project root
- CNAME file in project root (no extension, no quotes)
- All images referenced from images/ subfolder

### GitHub:
- Repo: bbotai/kansasprairiewebworks
- Branch: main
- Push when Phase 15 final review is complete
- Commit message: "Initial build — Kansas Prairie Webworks v1.0"

### Never do:
- Use React, Vue, or any framework
- Use inline styles (all CSS goes in styles.css)
- Use jQuery
- Display any street address
- Mention Namecheap, Cloudflare, GitHub, or Railway
  in any client-facing page content
- Stop and ask for confirmation on every file

---

## BUSINESS INFORMATION

**Company:** Kansas Prairie Webworks
**Abbreviation:** KPW
**Domain:** kansasprairiewebworks.com
**Phone:** 785-577-7695
**Email:** kansasprairiewebworks@gmail.com
**Facebook:** https://www.facebook.com/kansasprairiewebworks
**Location display:** Salina, Kansas — Serving Central Kansas
**Street address:** NEVER display publicly
**Mission:** "Your Complete Online Presence — Website. Google. Facebook."

---

## REMAINING PLACEHOLDERS
> These 3 items are NOT yet known. Use bracket format exactly.
> Owner will find/replace in VS Code after build (Ctrl+Shift+H)

| Placeholder | Meaning |
|---|---|
| [KPW_BOOKING_URL] | Calendly or booking page link |
| [KPW_GOOGLE_PROFILE_URL] | Google Business Profile URL |
| [KPW_FORMSPREE_ID] | Formspree form ID for contact forms |

## HARDCODED VALUES — use these directly, no placeholders:
- Domain: kansasprairiewebworks.com
- Phone: 785-577-7695
- Email: kansasprairiewebworks@gmail.com
- Facebook: https://www.facebook.com/kansasprairiewebworks
- All URLs: https://kansasprairiewebworks.com

---

## SERVICE AREA

Primary: Salina / Saline County
Secondary:
- McPherson / McPherson County
- Abilene / Dickinson County
- Bennington / Ottawa County
- Concordia / Republic County
- Junction City / Geary County
- Manhattan / Riley County

Tagline: "Proudly serving small businesses across Central Kansas."

Geo-banner Midwest zone:
Kansas, Missouri, Nebraska, Oklahoma, Colorado, Iowa
Visitors OUTSIDE this zone see polite top banner.
Visitors inside this zone see site normally.

---

## OWNER ORIGIN STORY
> Use this on About page — this IS the brand foundation

Five years ago the owner hired an out-of-state California agency
to build the online presence for Diehls Trucking.
Paid $1,500 setup and $250/month.
The website was slow, the work was lazy, and when they complained —
the agency stopped answering. No calls. No emails.
Had to call the bank to stop automatic payments.

That experience — plus years of self-teaching web development,
AI tools, automation systems, and crypto/blockchain platforms —
became the foundation for Kansas Prairie Webworks.

Key lines from this story:
- "I'm not a California agency. I'm your neighbor."
- "You can call me. I'll answer."
- "Local pricing. Local accountability. Real results."
- "I've been the customer who got burned. I built KPW so you don't have to be."

---

## VISUAL DESIGN — MANDATORY SPEC

### The Target:
DogeBeats.com visual energy (dogebeats.com — real live site, reference it)
adapted to KPW's prairie color palette.

Deep gradients. Glass-morphism cards. Dimensional depth.
Color-popping keywords. Animated hero. Diagonal section cuts.
When a Kansas small business owner opens this on their phone —
jaw drop. Then they hit call.

### CSS Variables (use ALL of these — no hardcoded hex):
```css
:root {
  --primary:       #E67E22;
  --secondary:     #F1C40F;
  --accent:        #34495E;
  --dark:          #1A252F;
  --dark-mid:      #2C3E50;
  --light:         #FDF6E3;
  --section-alt:   #F8F4E8;
  --glass-bg:      rgba(255,255,255,0.06);
  --glass-border:  rgba(255,255,255,0.12);
  --white:         #FFFFFF;
  --text:          #2C3E50;
  --text-light:    #ECF0F1;
  --text-muted:    #95A5A6;
  --grad-hero:     linear-gradient(135deg,#1A252F 0%,#2C3E50 50%,#1a1a2e 100%);
  --grad-orange:   linear-gradient(135deg,#E67E22,#F39C12);
  --grad-gold:     linear-gradient(135deg,#F1C40F,#E67E22);
  --grad-dark:     linear-gradient(180deg,#1A252F 0%,#2C3E50 100%);
  --shadow-card:   0 8px 32px rgba(0,0,0,0.3),0 2px 8px rgba(230,126,34,0.2);
  --shadow-glow:   0 0 20px rgba(230,126,34,0.4);
}
```

### Glass card pattern (use on all cards over dark/gradient backgrounds):
```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-card);
  border-radius: 16px;
  padding: 2rem;
}
```

### Mandatory visual techniques:
- Animated gradient on hero (slow CSS keyframe color shift)
- KPW badge with subtle pulse animation
- `.text-pop` class — Poppins 700, color: var(--primary) — on key phrases
- Diagonal section dividers using clip-path:
  `clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%)`
- Scroll-triggered fade-up on all cards (.animate-on-scroll + .visible)
- Icon cards: hover state adds var(--shadow-glow) border glow
- Section backgrounds alternate: dark gradient → warm wheat → white → dark
- Cards always defined by shadow, border, or contrasting background
- ZERO white cards on white backgrounds — ever

### Typography:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```
- Hero h1: Poppins 800-900
- Section h2: Poppins 700
- Subheads: Poppins 600
- Body: Inter 400-500
- Buttons: Poppins 600
- .text-pop spans: Poppins 700, var(--primary)

### Font Awesome CDN:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
```

---

## COMPLETE SITE STRUCTURE (17 HTML pages)

```
kansasprairiewebworks.com/
├── index.html
├── about.html
├── services.html
├── service-web-design.html
├── service-google-profile.html
├── service-facebook-page.html
├── service-local-seo.html
├── service-monthly-posting.html
├── service-web-app.html
├── pricing.html
├── portfolio.html
├── contact.html
├── service-areas.html
├── faq.html
├── terms.html
├── privacy.html
├── disclaimer.html
├── styles.css
├── main.js
├── sitemap.xml
├── robots.txt
├── CNAME  ← contains: kansasprairiewebworks.com
├── .gitignore
├── README.md
├── AGENT_BRIEF.md
├── TASKS.md
├── PROGRESS.md
└── images/
    ├── README.txt
    ├── kpw-logo-badge.png
    ├── kpw-hero-storm.jpg
    ├── kpw-ad-windmill-sunset.jpg
    ├── kpw-ad-google-profile.jpg
    ├── kpw-prairie-wide.jpg
    └── dogebeats-screenshot.jpg
```

---

## NAVIGATION

### Desktop nav:
Home | About | Services ▾ | Pricing | Portfolio | Service Areas | FAQ | Contact
Right side CTA button: "Book Free Call" → [KPW_BOOKING_URL]

### Services dropdown items:
- Website Design → service-web-design.html
- Google Business Profile → service-google-profile.html
- Facebook Business Page → service-facebook-page.html
- Local SEO → service-local-seo.html
- Monthly Posting → service-monthly-posting.html
- Web App / Custom Build → service-web-app.html

### Mobile hamburger — CRITICAL RULES:
- Menu drops DOWN below navbar as stacked full-width buttons
- Each nav item: full width, clear padding, tap-friendly (min 48px height)
- NEVER overlaps page content
- NEVER stacks items on top of each other
- Bottom of mobile menu always includes:
  - 📞 Call Now → tel:7855777695
  - 📅 Book Free Call → [KPW_BOOKING_URL]
- Closes on: link tap, outside tap, ESC key

### Sticky nav behavior:
- Always visible at top
- Adds .scrolled class after 80px scroll
- .scrolled: solid dark background + subtle shadow

### Footer legal links (every page):
Terms of Service | Privacy Policy | Disclaimer

---

## PRICING (official — use throughout site)

### Tier 1 — Business Card Website
Setup: $450 | Monthly: $35/mo
- Single page, mobile-ready website
- Domain purchased + configured (client picks name with KPW guidance)
- Hosted and maintained by KPW
- Click-to-call, click-to-email, contact form
- Basic on-page SEO
- Best for: Solo operators, new businesses, trades starting out

### Tier 2 — Web + Facebook Presence
Setup: $600 | Monthly: $65/mo
- Everything in Tier 1
- Facebook Business Page — fully built and optimized
- Professional cover, branding, business info, services configured
- Best for: Businesses wanting local social visibility

### Tier 3 — Web + Google Presence
Setup: $650 | Monthly: $75/mo
- Everything in Tier 1
- Google Business Profile — fully built, verified, optimized
- Photos, services, hours, description configured
- Local search foundation
- Best for: Businesses wanting Google Maps visibility

### Tier 4 — Complete Online Presence (FLAGSHIP — featured/highlighted)
Setup: $1,000

Monthly Option A — Maintenance: $150/mo
- Website hosting, updates, security monitoring
- Semi-annual Facebook + Google account audit
- Basic support

Monthly Option B — Active Content: $350/mo
- Everything in Maintenance
- 4 AI-optimized Facebook posts/month
- 4 AI-optimized Google Business posts/month
- 8 total SEO-optimized posts/month
- All posts link to client website
- Monthly performance check-in

Setup includes:
- Full multi-page website (Home, About, Services, Service Areas, Contact, FAQ)
- Google Business Profile — full setup, verification, optimization
- Facebook Business Page — full setup, branding, optimization
- Business directory listings (Google, Bing, Yelp, Apple Maps, etc.)
- Local SEO foundation + schema markup
- Best for: Established businesses wanting full digital dominance

Tier 4 onboarding (first 3 months at $150/mo):
Covers directory cleanup, verification, indexing headaches.
Month 4+: client chooses $150 maintenance OR $350 active content.

### Web App / Custom Build
Starting at: $2,500 setup
Monthly: Custom quote (hosting + API costs vary by usage)
- Full-stack web applications
- AI-integrated platforms and autonomous systems
- E-commerce, marketplaces, booking platforms
- Custom business tools
- Example: DogeBeats.com — AI-autonomous music marketplace
- Variable hosting/API/storage costs passed through at cost
- Discovery call required before quote

### Blog Add-On (standalone):
$99/mo — 4 AI-optimized blog posts delivered via email
(Can be added to any tier)

### Cancellation policy (all tiers):
- 30-day written notice required (email accepted)
- No refund on setup fees after work begins
- Monthly fee stops after 30-day notice period
- Domain + all accounts remain client property always
- KPW admin access removed within 48 hours of cancellation

---

## TWO CLIENT PATHS — ACCOUNT MANAGEMENT
> This differentiates KPW from every out-of-state agency

### Path A — "We Handle Everything"
For non-tech clients (Mike Adams model):
1. KPW creates Facebook Business Page on client's behalf
2. KPW creates + verifies Google Business Profile
   (handles verification calls, postcard requests, phone pins)
3. KPW cleans up duplicate/outdated/lost listings
4. Client receives owner/admin invite via email
5. KPW stays as Manager for ongoing service
6. Cancellation: KPW removes itself within 48 hours
   Client keeps 100% of accounts, pages, listings

### Path B — "Add Us As Manager"
For clients with existing accounts:
1. Client adds KPW as Facebook Page Manager
2. Client adds KPW as Google Business Profile Manager
3. KPW optimizes, posts, manages from existing accounts
4. Same 48-hour removal on cancellation

### Key message for site copy:
"Your accounts are yours. Always.
We build them, manage them, and hand them back
— with everything intact — if you ever move on."

---

## HOMEPAGE SECTIONS (in this exact order)

1. Nav
2. Hero — deep gradient + storm image overlay, animated, badge pulse,
   headline with .text-pop keywords, 2 buttons, tagline
3. Facebook MAJOR section (see full spec below — primary channel)
4. Facebook Social Proof Block (see spec below)
5. Featured Package — orange/gold gradient, package includes list
6. Services cards — 6 glass cards on dark bg, link to service pages
7. Pricing preview — 4 tier cards linking to pricing.html
8. Service areas strip — Storm Blue bg, town badge tags
9. Portfolio preview — 3 cards including DogeBeats teaser
10. FAQ preview — 3 accordion questions, link to faq.html
11. Origin story teaser — dark bg, quote pull, "Read Our Story →" about.html
12. CTA banner — dark bg, 2 buttons
13. Contact preview — phone, email, Facebook
14. Footer — multi-column, legal links
15. Mobile sticky footer — Call / Text / Facebook (mobile only)
16. Geo-banner — JS fires on load for out-of-Midwest visitors
17. Floating Facebook Messenger button — EVERY PAGE (dismissible)

NOTE — GOOGLE BUSINESS SECTION:
The Google Business Profile homepage section is INTENTIONALLY OMITTED
from this build. No Google Business Profile exists yet.
When the profile is created, add it back with one command:
"Add the Google Business Profile section to index.html after the
Facebook Social Proof Block, using the Google section spec in AGENT_BRIEF."
The service-google-profile.html page and nav link remain in the build.

---

## FACEBOOK MAJOR SECTION SPEC
> Facebook is the PRIMARY lead generation channel for KPW in Salina Kansas.
> This gets TWO full sections back to back — more prominent than anything
> except the hero.

### Section A — "Your Facebook Business Page — Fully Set Up"
Background: var(--light) warm wheat — NOT white on white
Layout: 2 columns (text left, styled Facebook mockup card right)
Facebook brand blue (#1877F2) used as accent color in this section

Title: "Your <span class='text-pop'>Facebook Business Page</span> — Fully Set Up"
Subtext: "We build professional Facebook pages that attract local customers
and keep your brand consistent across every platform."

Facebook icon: Font Awesome fab fa-facebook-f (large, #1877F2)

Benefits list (checkmark style):
✅ Local visibility that brings in real customers
✅ Professional branding that builds instant trust
✅ Consistent posting that keeps you top of mind
✅ Integrated with your website for a complete online presence
✅ Managed by a local Salina Kansas neighbor — not a California agency

Buttons:
- "View Our Facebook Page" → https://www.facebook.com/kansasprairiewebworks
- "Get Your Facebook Page Setup" → [KPW_BOOKING_URL]

Mockup card (right column):
Styled CSS div simulating a Facebook Business Page preview:
- Dark header with KPW logo placeholder
- Page name: "Kansas Prairie Webworks"
- Category: "Web Design · Digital Marketing"
- Fake "Like" and "Follow" buttons
- Rating stars visual
- "Message" button styled in Facebook blue

### Section B — Facebook Social Proof Block
Background: var(--dark) deep charcoal
Layout: centered, full-width

Title: "Find Us on <span class='text-pop'>Facebook</span>"
Subtext: "Where Salina Kansas businesses connect.
Follow us for tips, examples, and local business wins."

3 glass cards in a row:
Card 1 — 📘 "Follow Our Page"
  "See our latest work, tips, and client results."
  Button: "Follow on Facebook" → https://www.facebook.com/kansasprairiewebworks

Card 2 — 💬 "Message Us Directly"
  "Questions? Just send us a message on Facebook.
  We respond fast — usually same day."
  Button: "Message Now" → https://m.me/kansasprairiewebworks

Card 3 — 📣 "Share With a Friend"
  "Know a Kansas business that needs help?
  Tag them or share our page."
  Button: "Share Our Page" → https://www.facebook.com/share/1DBaZv1XDi/

---

## FLOATING FACEBOOK MESSENGER BUTTON
> Present on EVERY page — all 17 HTML files
> Dismissible with ✕ like the Doge dog popup on DogeBeats

HTML (inject before closing </body> on every page):
```html
<div class="fb-float" id="fbFloat">
  <button class="fb-float__close" onclick="dismissFbFloat()" aria-label="Close">✕</button>
  <a href="https://m.me/kansasprairiewebworks"
     target="_blank" rel="noopener"
     class="fb-float__btn"
     aria-label="Message us on Facebook Messenger">
    <i class="fab fa-facebook-messenger"></i>
    <span class="fb-float__label">Message Us</span>
  </a>
</div>
```

CSS (.fb-float):
- Position: fixed, bottom: 90px (above mobile sticky), right: 20px
- On desktop: bottom: 30px, right: 30px
- z-index: 9998 (below geo-banner 10000, below mobile sticky 9999)
- .fb-float__btn:
    background: #1877F2 (Facebook blue)
    border-radius: 50px
    padding: 12px 20px
    display: flex, align-items: center, gap: 10px
    color: white, font-family: Poppins, font-weight: 600
    box-shadow: 0 4px 20px rgba(24,119,242,0.5)
    hover: brighten + scale(1.05) transition
- .fb-float__close:
    position: absolute, top: -8px, right: -8px
    background: var(--dark-mid), color: white
    border-radius: 50%, width: 22px, height: 22px
    font-size: 11px, cursor: pointer
    border: 2px solid white
    display: flex, align-items: center, justify-content: center
- .fb-float (when .dismissed):
    display: none

JS in main.js:
```javascript
function dismissFbFloat() {
  const el = document.getElementById('fbFloat');
  if (el) {
    el.classList.add('dismissed');
    // Remember dismissal for this session only
    sessionStorage.setItem('fbFloatDismissed', 'true');
  }
}

// Check on page load — if dismissed this session, hide immediately
document.addEventListener('DOMContentLoaded', function() {
  if (sessionStorage.getItem('fbFloatDismissed') === 'true') {
    const el = document.getElementById('fbFloat');
    if (el) el.classList.add('dismissed');
  }
});
```

Behavior:
- Appears on every page after 2 second delay (CSS animation, slides in from right)
- ✕ button dismisses it for the entire browser session
- If user navigates to another page in same session — stays dismissed
- Fresh session (new tab or new visit) — appears again
- Never blocks content
- On mobile: sits above the sticky footer bar

---

## SERVICE DETAIL PAGE STRUCTURE
(Template for all 6 individual service pages)

Section backgrounds alternate:
dark gradient → warm wheat → white w/colored cards → dark gradient

1. Nav
2. Page hero — full gradient, title, subheadline, CTA
3. Service overview — what it is, who it's for, 2-col
4. What's included — icon list, glass cards on dark
5. Benefits — colored cards NOT white on white
6. How it works — numbered glass cards (3-4 steps)
7. Two Client Paths — Path A / Path B (on Google + Facebook pages)
8. Pricing mention — tier reference, "Starting at..."
9. Service FAQ — 4-5 questions, plain HTML accordion
10. Related services — links to other pages
11. CTA banner
12. Footer + mobile sticky

---

## INDIVIDUAL SERVICE PAGE SPECS

### service-web-design.html
Hero: "Professional Website Design for Kansas Businesses"
Pricing reference: Tier 1 ($450 setup / $35mo)
FAQ: How long does it take? Do I own it? Mobile-ready? Can you update it later?

### service-google-profile.html
Hero: "Not Showing Up on Google? We'll Fix That."
Image: kpw-ad-google-profile.jpg
Include TWO CLIENT PATHS section
FAQ: What is GBP? Why do I need it? How long to show up? Lost my account?

### service-facebook-page.html
Hero: "Your Facebook Business Page — Fully Set Up"
Facebook blue accent color (#1877F2) used as secondary on this page only
Include TWO CLIENT PATHS section
FAQ: Personal vs business page? Do I need one? Will you manage it? What if I cancel?

### service-local-seo.html
Hero: "Get Found Across Central Kansas"
Mention ALL service area towns naturally in body copy (SEO asset)
FAQ: What is local SEO? Different from regular SEO? How long? What do you do?

### service-monthly-posting.html
Sub-service tabs or accordion at top:
  Tab A — Blog Package ($99/mo):
    4 AI-optimized posts/month, SEO-optimized, links to website
    Delivered via email with copy-paste instructions
    Client fills blog intake form on this page
    Blog intake form fields:
      Business Name, Industry, Target Customer, Post Topics (checkboxes),
      Preferred Tone (Professional/Casual/Friendly - radio),
      Brand Colors, Website URL, Special Promos/Announcements,
      Delivery Email
    Form action: https://formspree.io/f/[KPW_FORMSPREE_ID]
  Tab B — Facebook Manager (included in $350/mo):
    KPW added as page manager, 4 posts/month, captions + hashtags + CTA
  Tab C — Google Business Manager (included in $350/mo):
    4 posts/month, Q&A monitoring, photo updates, full optimization
FAQ: What kind of posts? How often? Who approves? Can I see before you post?

### service-web-app.html
Visual treatment: DogeBeats-level — dark gradient throughout, glass cards
Hero: "Beyond a Website — Full Stack Web Applications"
4 capability glass cards: AI Platforms | Autonomous Systems | E-Commerce | Custom Tools
DogeBeats featured example section:
  Image: dogebeats-screenshot.jpg
  Label: "AI-Autonomous Music Marketplace — Full Stack Web Application"
  Description: "Built from scratch — AI-powered, runs autonomously,
  processes payments 24/7 with minimal human intervention."
  Button: "View Live Site →" → https://dogebeats.com
  DO NOT lead with crypto — lead with technical achievement
Pricing: Starting at $2,500 — custom quote required
Variable cost disclaimer (hosting/API/storage)
FAQ: How long does it take? What do you need from me? What does it cost to run?

---

## PRICING PAGE (pricing.html)

Hero: "Simple, Honest Pricing for Kansas Businesses"
Subheadline: "No surprises. No hidden fees. No California agencies."

5 pricing cards in grid:
- Tier 1: $450 / $35mo → service-web-design.html
- Tier 2: $600 / $65mo → service-facebook-page.html
- Tier 3: $650 / $75mo → service-google-profile.html
- Tier 4: $1,000 / $150 or $350mo → featured card with glow border
- Web App: Starting at $2,500 → contact.html (custom quote)

Tier 4 card: toggle between $150/mo Maintenance and $350/mo Active Content

Bottom section:
- "Not sure which tier fits you?" 
- Book free call button + call button
- Blog Add-On callout: $99/mo
- Fine print: cancellation, ownership, 30-day notice

---

## FAQ PAGE (faq.html)

CRITICAL: Every Q&A must be in plain HTML DOM.
NOT JavaScript-rendered. Readable by Google + AI crawlers.
Include FAQ JSON-LD schema in head.

Categories:
1. Getting Started (4 Q&A)
2. Website Design (4 Q&A)
3. Google Business Profile (4 Q&A)
4. Facebook Business Page (3 Q&A)
5. Local SEO (3 Q&A)
6. Pricing & Packages (4 Q&A)
7. Account Ownership & Cancellation (3 Q&A):
   - "Who owns my website and accounts?"
   - "What happens when I cancel?"
   - "What if I already have accounts or lost access to them?"

---

## SERVICE AREAS PAGE (service-areas.html)

Hero: "Serving Central Kansas Small Businesses"
Real paragraph body copy mentioning all towns naturally (local SEO asset)
7 town cards with real 2-sentence descriptions
"Don't see your town? Call us — if you're in Kansas, we can help."
areaServed JSON-LD schema with all counties

---

## ABOUT PAGE (about.html)

Hero: "Built in Kansas. Built for Kansas."
Background: kpw-prairie-wide.jpg with dark overlay

Full origin story section (dark bg, pull quote styling):
"Five years ago I hired an out-of-state California agency..."
Full story — authentic, personal, no corporate fluff.
Ends with: "I'm not a California agency. I'm your neighbor."

Why KPW — 3 glass cards on dark:
1. We're Local — Salina, Kansas. You can call us. We'll answer.
2. Done For You — no tech stress, we handle everything start to finish
3. You Keep Everything — your domain, accounts, listings. Always yours.

Our Process — 4 numbered steps:
1. Free Consultation Call
2. We Build Everything
3. You Review + We Launch
4. Ongoing Support

Service area paragraph
CTA banner

---

## PORTFOLIO PAGE (portfolio.html)

Hero: "Our Work — Real Results for Kansas Businesses"
Note: "Portfolio samples shown — real client work added as projects complete."
Filter bar: All | Websites | Google | Facebook | SEO | Web Apps
6 CSS gradient placeholder cards + DogeBeats card:
  DogeBeats: dogebeats-screenshot.jpg
  Label: "AI-Autonomous Music Marketplace"
  Tag: Web Apps
  Button: "View Live →" → https://dogebeats.com
CTA: "Want results like these?" → [KPW_BOOKING_URL]

---

## CONTACT PAGE (contact.html)

Hero: "Let's Talk — No Pressure, No Jargon"
Sub: "Free consultation. Just a conversation."

3 large action buttons:
- 📞 Call Now → tel:7855777695
- 💬 Text Us → sms:7855777695
- 📅 Book a Free Call → [KPW_BOOKING_URL]

Contact form:
Fields: Full Name, Business Name, Email, Phone,
        Service (dropdown — all 6 services), Message
Action: https://formspree.io/f/[KPW_FORMSPREE_ID]
Button: "Send My Message"

Contact info block:
- 📞 785-577-7695
- ✉️ kansasprairiewebworks@gmail.com
- 📍 Salina, Kansas — Serving Central Kansas
- 📘 facebook.com/kansasprairiewebworks
- NO street address

---

## LEGAL PAGES

### terms.html — Terms of Service
1. Services Provided
2. Payment Terms (setup due before work, 30-day cancel notice, no refund after start)
3. Account Ownership Policy:
   All client accounts (domain, Facebook, Google, website files) are client property.
   KPW admin/manager access removed within 48 hours of cancellation.
   Accounts built by KPW on client's behalf are transferred to client ownership.
4. Intellectual Property (client owns content, KPW may show work in portfolio)
5. No Guarantee of Results (rankings, reach, follower counts — results vary)
6. Limitation of Liability (capped at fees paid in last 30 days)
7. Governing Law: State of Kansas. Disputes: Saline County, Kansas.
8. Kansas Consumer Protection Act (KCPA) compliance statement
9. Changes to Terms (30-day notice)

### privacy.html — Privacy Policy
1. What We Collect (contact form data, IP via server logs, no tracking cookies)
2. How We Use It (respond to inquiries, deliver work, optional service updates)
3. What We Never Do (never sell, never share except as required by law)
4. Third Party Tools (Formspree, GitHub Pages)
5. Data Breach Notification (Kansas law compliance — prompt notification)
6. Kansas Consumer Protection Act compliance
7. Out-of-State Visitors (basic CCPA + GDPR acknowledgment)
8. Contact: kansasprairiewebworks@gmail.com

### disclaimer.html — Disclaimer
1. No Guarantee of Search Rankings
2. No Guarantee of Social Media Performance
3. SEO Timeline (typical 3-6 months local traction, varies by market)
4. Third Party Platform Changes (Google + Facebook algorithm changes outside KPW control)
5. Web App Variable Costs (hosting/API/storage passed through at cost)
6. General Information (nothing on site is legal or financial advice)

---

## GEO-BANNER (JavaScript)

```javascript
const midwestStates = ['KS','MO','NE','OK','CO','IA'];

async function checkGeoLocation() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    if (data.region_code && !midwestStates.includes(data.region_code)) {
      showGeoBanner(data.region || data.country_name);
    }
  } catch(e) {
    // Silent fail — never block site load on API error
  }
}

function showGeoBanner(location) {
  const banner = document.createElement('div');
  banner.className = 'geo-banner';
  banner.innerHTML = `
    <div class="geo-banner__inner">
      <span>🌾 Looks like you're visiting from <strong>${location}</strong>.
      We serve Central Kansas — but you're always welcome!
      Know a Kansas business that needs help?
      <a href="mailto:kansasprairiewebworks@gmail.com">Send them our way.</a></span>
      <button onclick="this.closest('.geo-banner').remove()" aria-label="Close">✕</button>
    </div>`;
  document.body.prepend(banner);
}

document.addEventListener('DOMContentLoaded', checkGeoLocation);
```

Geo-banner CSS:
- Background: var(--grad-orange)
- Text: white, Inter
- Fixed top strip, z-index: 10000
- Dismissible ✕ button
- Never blocks content

---

## MOBILE STICKY FOOTER

```html
<div class="mobile-sticky">
  <a href="tel:7855777695" class="mobile-sticky__btn">
    <i class="fas fa-phone"></i><span>Call</span>
  </a>
  <a href="sms:7855777695" class="mobile-sticky__btn">
    <i class="fas fa-comment-sms"></i><span>Text</span>
  </a>
  <a href="https://www.facebook.com/kansasprairiewebworks"
     target="_blank" rel="noopener" class="mobile-sticky__btn">
    <i class="fab fa-facebook-f"></i><span>Facebook</span>
  </a>
</div>
```

CSS: fixed bottom, z-index 9999, display:none above 768px
Background: var(--dark)
3 equal-width buttons, icon + label stacked

---

## SEO — ALL PAGES

Every page head:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[PAGE SPECIFIC]">
<meta name="keywords" content="Salina web design, Kansas web design,
  Google Business Profile Kansas, Facebook Business Page Kansas,
  Local SEO Kansas, Central Kansas web design, web design near me Kansas">
<meta name="author" content="Kansas Prairie Webworks">
<meta property="og:title" content="[PAGE TITLE] | Kansas Prairie Webworks">
<meta property="og:description" content="[PAGE SPECIFIC]">
<meta property="og:image" content="images/kpw-hero-storm.jpg">
<meta property="og:url" content="https://kansasprairiewebworks.com/[page]">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://kansasprairiewebworks.com/[page]">
```

LocalBusiness schema (index.html only):
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kansas Prairie Webworks",
  "description": "Kansas web design, Google Business Profile, Facebook Business Page setup, and Local SEO for Central Kansas small businesses.",
  "url": "https://kansasprairiewebworks.com",
  "telephone": "785-577-7695",
  "email": "kansasprairiewebworks@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Salina",
    "addressRegion": "KS",
    "addressCountry": "US"
  },
  "areaServed": [
    "Salina KS","McPherson KS","Abilene KS",
    "Bennington KS","Concordia KS","Junction City KS","Manhattan KS"
  ],
  "sameAs": ["https://www.facebook.com/kansasprairiewebworks"],
  "serviceType": [
    "Web Design","Google Business Profile",
    "Facebook Business Page","Local SEO","Web Application Development"
  ]
}
```

Page meta descriptions:
- index.html: "Kansas Prairie Webworks — Web design, Google Business Profile, and Facebook Business Page setup for Central Kansas small businesses. Serving Salina, McPherson, Abilene, and more. Call 785-577-7695."
- about.html: "Learn about Kansas Prairie Webworks — locally owned in Salina Kansas, helping small businesses get online fast and get found by local customers."
- services.html: "Web design, Google Business Profile, Facebook setup, and Local SEO for Kansas businesses. Done for you. No tech stress. Call 785-577-7695."
- service-web-design.html: "Professional website design for Kansas small businesses. Mobile-ready, fast, and built to convert. Starting at $450."
- service-google-profile.html: "Google Business Profile setup and optimization for Central Kansas businesses. Show up in Google Search and Maps. Serving Salina and beyond."
- service-facebook-page.html: "Facebook Business Page setup for Kansas small businesses. Professional branding, local visibility, consistent posting."
- service-local-seo.html: "Local SEO services for Kansas businesses. Get found by customers in Salina, McPherson, Abilene, and across Central Kansas."
- service-monthly-posting.html: "Monthly blog, Facebook, and Google Business posting packages for Kansas businesses. AI-optimized, SEO-linked, delivered ready to post."
- service-web-app.html: "Custom web application development for Kansas businesses. AI-integrated platforms, autonomous systems, full-stack builds. Starting at $2,500."
- pricing.html: "Kansas Prairie Webworks pricing — simple honest tiers from $450 to custom web apps. No hidden fees. No contracts. Serving Central Kansas."
- portfolio.html: "Kansas Prairie Webworks portfolio — websites, Google listings, and Facebook pages built for Central Kansas businesses."
- contact.html: "Contact Kansas Prairie Webworks — call 785-577-7695, text, or book a free consultation. Salina Kansas. No pressure."
- service-areas.html: "Kansas Prairie Webworks serves Salina, McPherson, Abilene, Concordia, Junction City, Manhattan, and all of Central Kansas."
- faq.html: "Frequently asked questions about Kansas Prairie Webworks — web design, Google Business Profile, Facebook pages, Local SEO, pricing, and account ownership."
- terms.html: "Kansas Prairie Webworks Terms of Service — payment terms, account ownership policy, cancellation, and Kansas governing law."
- privacy.html: "Kansas Prairie Webworks Privacy Policy — how we collect, use, and protect your information. KCPA compliant."
- disclaimer.html: "Kansas Prairie Webworks Disclaimer — no guarantee of search rankings, SEO timelines, and platform change policy."

---

## TECHNICAL REQUIREMENTS

- Vanilla HTML5, CSS3, JavaScript ES6+ — no frameworks ever
- Single styles.css — all pages link to it
- Mobile-first CSS — breakpoints: 768px and 1200px
- No jQuery — vanilla JS only
- Lazy load: loading="lazy" on all below-fold images
- Hero image: loading="eager"
- FAQ: all content in HTML DOM — never JS-only rendered
- Geo-banner: silent fail if API unavailable — never block page load
- Animations: CSS keyframes + IntersectionObserver — no animation libraries
- Accessibility: semantic HTML, aria-labels on all buttons, skip nav link
- Performance: minify-ready code, no render-blocking scripts

---

## STRIPE PAYMENT WORKFLOW (internal — never add keys to any file)

NEVER put Stripe API keys, secret keys, or publishable keys
in any MD file, HTML file, or any file that touches the GitHub repo.
The KPW website has NO payment processing — contact form and call only.

KPW uses Stripe Dashboard only (no code integration needed):

Setup fee invoices (like Mike's $800/$1,000):
- Stripe Dashboard → Invoices → Create Invoice
- Add client name + email + KPW logo
- Line item: service name + amount
- Memo: "Thank you for choosing Kansas Prairie Webworks."
- Send → client gets branded email with pay button
- Client pays by card OR writes check (mark paid manually in dashboard)

Monthly recurring ($150, $250, $350/mo):
- Stripe Dashboard → Subscriptions → Create Subscription
- Set client email, amount, billing date
- Stripe auto-charges monthly, sends receipts automatically
- No code, no keys, no risk

Payment link for ad hoc payments:
- Stripe Dashboard → Payment Links → Create
- Share URL via text or email directly to client

---

## DEPLOYMENT STACK (internal — never mention to clients)

- Domain: Namecheap (kansasprairiewebworks.com — purchased, 2 years)
- DNS: Cloudflare
- Hosting: GitHub Pages
- Repo: bbotai/kansasprairiewebworks
- Build: Claude Code
- Forms: Formspree
- Search Console: Google (submit sitemap after launch)

---

*Kansas Prairie Webworks — Built in Kansas. Built for Kansas.*
*AGENT_BRIEF.md v3.0 FINAL*
*kansasprairiewebworks.com*
