const fs = require('fs');

// ============================================================
// FIX 1 — LEGAL PAGE DATE UPDATES (terms, privacy, disclaimer)
// ============================================================
const legalPages = ['terms.html', 'privacy.html', 'disclaimer.html'];
legalPages.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  const before = html;
  html = html.replace(
    'Effective Date: January 1, 2025. Last Updated: January 1, 2025.',
    'Effective Date: January 1, 2026. Last Updated: June 2026.'
  );
  if (html !== before) {
    fs.writeFileSync(file, html, 'utf8');
    console.log(`  FIX 1 dates updated: ${file}`);
  } else {
    console.log(`  FIX 1 SKIP (not found): ${file}`);
  }
});

// ============================================================
// FIX 2 — INLINE DARK BACKGROUND ON SERVICE FAQ SECTIONS
// ============================================================
const faqBgTargets = [
  { file: 'service-web-design.html',    aria: 'wd-faq-heading' },
  { file: 'service-google-profile.html', aria: 'gbp-faq-heading' },
  { file: 'service-local-seo.html',     aria: 'seo-faq-heading' },
];
faqBgTargets.forEach(({ file, aria }) => {
  let html = fs.readFileSync(file, 'utf8');
  const target = `class="service-faq section--sm" style="background:var(--section-alt);" aria-labelledby="${aria}"`;
  const replacement = `class="service-faq section--sm" style="background:#1A252F;" aria-labelledby="${aria}"`;
  if (!html.includes(target)) { console.log(`  FIX 2 SKIP (not found): ${file}`); return; }
  fs.writeFileSync(file, html.replace(target, replacement), 'utf8');
  console.log(`  FIX 2 FAQ section dark bg: ${file}`);
});

// ============================================================
// FIX 3 — faq.html CATEGORY HEADERS — add faq-category-title class
// ============================================================
let faq = fs.readFileSync('faq.html', 'utf8');
const faqBefore = faq;
// All category headings use class="faq-category__heading" — add faq-category-title
faq = faq.split('class="faq-category__heading"').join('class="faq-category__heading faq-category-title"');
const headingCount = (faqBefore.match(/class="faq-category__heading"/g) || []).length;
if (faq !== faqBefore) {
  fs.writeFileSync('faq.html', faq, 'utf8');
  console.log(`  FIX 3 faq-category-title added to ${headingCount} headings in faq.html`);
} else {
  console.log('  FIX 3 SKIP: faq-category__heading not found');
}

// ============================================================
// APPEND ALL CSS (FIX 2 nuclear + FIX 3 category headers)
// ============================================================
const css = `

/* ============================================================
   FIX V6 — FAQ / COMMON QUESTIONS — UNIVERSAL DARK STANDARD
   Applies to EVERY page via has-selector + class selectors
   ============================================================ */

/* Section background */
section:has(.faq-item),
section:has([class*="faq-item"]),
[class*="faq-section"],
[class*="faq_section"],
[class*="common-questions"],
[id*="faq"],
.service-faq,
.faq-wrapper,
.faqs {
  background: var(--dark) !important;
  padding: 80px 0 !important;
}

/* faq.html preserves prairie parallax (semi-transparent) */
.faq-body section:has(.faq-item) {
  background: rgba(26, 37, 47, 0.92) !important;
}

/* Category headers — orange */
.faq-category-title,
.faq-category__heading,
[class*="faq-section"] h2,
[class*="common-questions"] h2,
section:has(.faq-item) h2 {
  color: var(--primary) !important;
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700 !important;
  font-size: 1.3rem !important;
  margin-top: 2.5rem !important;
  margin-bottom: 1.5rem !important;
  padding-bottom: 0.5rem !important;
  border-bottom: 2px solid rgba(230,126,34,0.3) !important;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

/* Main section heading (white) — overrides orange for top-level h2 */
[class*="faq-section"] > .container > h2:first-child,
.faq-section__title,
.service-faq > .container > h2:first-child,
section.service-faq .section__header h2 {
  color: #FFFFFF !important;
  font-size: 2rem !important;
  font-weight: 800 !important;
  text-align: center !important;
  border-bottom: none !important;
  margin-top: 0 !important;
  padding-bottom: 0 !important;
}

/* FAQ item cards */
.faq-item,
[class*="faq-item"],
[class*="faq-card"],
[class*="accordion-item"] {
  background: linear-gradient(135deg,
    rgba(44,62,80,0.95) 0%,
    rgba(26,37,47,0.98) 100%) !important;
  border-left: 5px solid var(--primary) !important;
  border-top: 2px solid rgba(230,126,34,0.3) !important;
  border-bottom: 2px solid rgba(241,196,15,0.2) !important;
  border-right: none !important;
  border-radius: 16px !important;
  margin-bottom: 1.5rem !important;
  box-shadow:
    0 8px 32px rgba(0,0,0,0.4),
    0 2px 8px rgba(230,126,34,0.15) !important;
  transition: transform 0.25s ease, box-shadow 0.25s ease !important;
  overflow: hidden !important;
  position: relative !important;
}

.faq-item:hover,
[class*="faq-item"]:hover {
  transform: translateY(-4px) !important;
  box-shadow:
    0 16px 48px rgba(0,0,0,0.5),
    0 4px 16px rgba(230,126,34,0.3) !important;
}

/* Top ribbon */
.faq-item::before,
[class*="faq-item"]::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  height: 3px !important;
  background: linear-gradient(90deg,
    var(--primary) 0%,
    var(--secondary) 50%,
    transparent 100%) !important;
}

/* Inner padding */
.faq-item__inner,
[class*="faq-item"] > div {
  padding: 1.75rem 2rem !important;
}

/* Question */
.faq-item__question,
[class*="faq-item"] h3,
[class*="faq-item"] strong,
[class*="faq-card"] h3 {
  color: #FFFFFF !important;
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700 !important;
  font-size: 1.05rem !important;
  margin-bottom: 0.75rem !important;
  display: block !important;
}

/* Answer */
.faq-item__answer,
[class*="faq-item"] p,
[class*="faq-card"] p {
  color: #B0C4D8 !important;
  font-family: 'Inter', sans-serif !important;
  font-size: 0.97rem !important;
  line-height: 1.75 !important;
  display: block !important;
  visibility: visible !important;
  max-height: none !important;
  opacity: 1 !important;
  overflow: visible !important;
}

/* Mobile */
@media (max-width: 768px) {
  section:has(.faq-item),
  .service-faq { padding: 50px 0 !important; }
  .faq-item__inner,
  [class*="faq-item"] > div { padding: 1.25rem 1.5rem !important; }
  [class*="faq-item"] h3 { font-size: 0.97rem !important; }
  [class*="faq-item"] p { font-size: 0.92rem !important; }
}
`;

fs.appendFileSync('styles.css', css, 'utf8');
console.log('\nCSS appended (FIX 2 nuclear + FIX 3 category headers)');
console.log('fix_v6.js complete.');
