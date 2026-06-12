const fs = require('fs');
const path = require('path');

// ============================================================
// FIX 1 — FORMSPREE ID — replace [KPW_FORMSPREE_ID] sitewide
// ============================================================
const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let formspreeCount = 0;
allHtml.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes('[KPW_FORMSPREE_ID]')) {
    const updated = html.split('[KPW_FORMSPREE_ID]').join('xdavwdpq');
    fs.writeFileSync(file, updated, 'utf8');
    formspreeCount++;
    console.log(`  FIX 1 Formspree: ${file}`);
  }
});
if (formspreeCount === 0) console.log('  FIX 1: no [KPW_FORMSPREE_ID] found');

// ============================================================
// FIX 2 — Add two-paths-section class to "Two Ways" sections
// ============================================================
const twoPathsPages = [
  { file: 'service-google-profile.html', aria: 'gbp-paths-heading' },
  { file: 'service-facebook-page.html', aria: 'fb-paths-heading' }
];
twoPathsPages.forEach(({ file, aria }) => {
  let html = fs.readFileSync(file, 'utf8');
  const target = `<section class="section" style="background:var(--section-alt);" aria-labelledby="${aria}">`;
  const replacement = `<section class="section two-paths-section" style="background:var(--section-alt);" aria-labelledby="${aria}">`;
  if (!html.includes(target)) { console.log(`  FIX 2 SKIP (not found): ${file}`); return; }
  fs.writeFileSync(file, html.replace(target, replacement), 'utf8');
  console.log(`  FIX 2 two-paths-section class: ${file}`);
});

// ============================================================
// FIX 5a — FAQ hero class + body class
// ============================================================
let faq = fs.readFileSync('faq.html', 'utf8');

// Hero class
const faqHeroTarget = '<section class="page-hero" aria-label="FAQ hero">';
const faqHeroReplacement = '<section class="page-hero faq-hero" aria-label="FAQ hero">';
if (faq.includes(faqHeroTarget)) {
  faq = faq.replace(faqHeroTarget, faqHeroReplacement);
  console.log('  FIX 5a faq-hero class: faq.html hero section');
} else {
  console.log('  FIX 5a SKIP: faq-hero target not found');
}

// Body class
if (faq.includes('<body>')) {
  faq = faq.replace('<body>', '<body class="faq-body">');
  console.log('  FIX 5a faq-body class: faq.html body tag');
} else {
  console.log('  FIX 5a SKIP: <body> not found (may already have class)');
}

// ============================================================
// FIX 5b — Pricing correction $1,200 → $1,000 in faq.html
// ============================================================
const priceCount = (faq.match(/\$1,200/g) || []).length;
if (priceCount > 0) {
  faq = faq.split('$1,200').join('$1,000');
  console.log(`  FIX 5b pricing: $1,200 → $1,000 (${priceCount} instance${priceCount > 1 ? 's' : ''})`);
} else {
  console.log('  FIX 5b SKIP: $1,200 not found in faq.html');
}

fs.writeFileSync('faq.html', faq, 'utf8');
console.log('  faq.html written.');

// ============================================================
// APPEND ALL CSS (FIX 2, 3, 4, 5, 6)
// ============================================================
const css = `

/* ============================================================
   FIX V5 — TWO WAYS WE CAN HELP — DARK SECTION + GLASS CARDS
   ============================================================ */

.two-paths-section {
  background: var(--dark-mid) !important;
  padding: 80px 0 !important;
}

.two-paths-section h2 {
  color: #FFFFFF !important;
  font-weight: 800 !important;
}

.two-paths-section p {
  color: var(--text-muted) !important;
}

.path-card,
[class*="path-card"] {
  background: linear-gradient(135deg,
    rgba(44,62,80,0.95) 0%,
    rgba(26,37,47,0.98) 100%) !important;
  border: 1px solid rgba(255,255,255,0.08) !important;
  border-top: 3px solid var(--primary) !important;
  border-radius: 16px !important;
  padding: 2rem !important;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3) !important;
}

.path-card__label,
[class*="path-card"] .path-card__label,
[class*="path-label"] {
  color: var(--primary) !important;
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700 !important;
  font-size: 0.8rem !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  margin-bottom: 0.5rem !important;
  display: block !important;
}

.path-card h3,
.path-card__title,
[class*="path-card"] h3 {
  color: #FFFFFF !important;
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700 !important;
  font-size: 1.15rem !important;
  margin-bottom: 0.75rem !important;
}

.path-card p,
.path-card__desc,
[class*="path-card"] p {
  color: #B0C4D8 !important;
  line-height: 1.7 !important;
}

.path-card li,
.path-card__list li,
[class*="path-card"] li {
  color: #B0C4D8 !important;
  line-height: 1.7 !important;
}

.path-card li i,
[class*="path-card"] li i {
  color: var(--primary) !important;
}

/* ============================================================
   FIX V5 — WHAT YOU GET / service-detail-overview — DARK
   ============================================================ */

.service-detail-overview {
  background: var(--dark) !important;
  padding: 80px 0 !important;
}

.service-detail-overview .section__header h2 {
  color: #FFFFFF !important;
}

.service-detail-overview .section__header p {
  color: var(--text-muted) !important;
}

.glass-card__icon {
  color: var(--primary) !important;
  font-size: 2rem !important;
  margin-bottom: 1rem !important;
  display: block !important;
}

.glass-card__title {
  color: #FFFFFF !important;
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700 !important;
  font-size: 1.05rem !important;
}

.glass-card__body {
  color: #B0C4D8 !important;
  line-height: 1.65 !important;
}

/* ============================================================
   FIX V5 — CHECKLIST READABILITY (dark sections)
   ============================================================ */

.checklist li {
  color: #B0C4D8 !important;
  line-height: 1.8 !important;
}

.checklist li i {
  color: var(--primary) !important;
}

/* ============================================================
   FIX V5 — FAQ HERO — CLEAR STICKY NAVBAR
   ============================================================ */

.faq-hero,
[class*="faq"][class*="hero"] {
  padding-top: 120px !important;
  padding-bottom: 60px !important;
}

/* ============================================================
   FIX V5 — FAQ PAGE — PRAIRIE PARALLAX BACKGROUND
   ============================================================ */

.faq-body {
  background-image: url('images/kpw-prairie-wide.png') !important;
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;
}

.faq-section,
.faq-page,
body.faq-body .faq-section {
  background: rgba(26, 37, 47, 0.92) !important;
}

/* ============================================================
   FIX V5 — NUCLEAR FAQ DARK OVERRIDE (all pages)
   ============================================================ */

body .faq-section,
body .faq-list,
body [class*="faq-section"],
body [class*="common-questions"] {
  background: rgba(26, 37, 47, 0.92) !important;
}

body .faq-item,
body [class*="faq-item"] {
  background: linear-gradient(135deg,
    rgba(44,62,80,0.95) 0%,
    rgba(26,37,47,0.98) 100%) !important;
  border-left: 5px solid var(--primary) !important;
  border-top: 2px solid rgba(230,126,34,0.3) !important;
  border-bottom: 2px solid rgba(241,196,15,0.2) !important;
  color: #FFFFFF !important;
}

body .faq-item__question,
body [class*="faq"] h3.faq-item__question {
  color: #FFFFFF !important;
  font-weight: 700 !important;
}

body .faq-item__answer,
body [class*="faq"] p.faq-item__answer {
  color: #B0C4D8 !important;
  display: block !important;
  visibility: visible !important;
  max-height: none !important;
  opacity: 1 !important;
}
`;

fs.appendFileSync('styles.css', css, 'utf8');
console.log('\nCSS appended (FIX 2–6)');
console.log('fix_v5.js complete.');
