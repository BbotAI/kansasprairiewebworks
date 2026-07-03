// Proven interaction-testing example: use-cases.html's click-to-enlarge image lightbox.
// Run from the skill directory: node examples/lightbox-check.mjs [base-url]
// Default base-url is the live site; pass a local path override if ever needed, e.g.:
//   node examples/lightbox-check.mjs file:///path/to/use-cases.html
//
// Copy this file's structure for testing any other click/tap/keyboard-driven component:
// desktop pass with all close/interaction methods, then a mobile pass with tap().

import { launch, desktopContext, mobileContext, watchConsoleErrors, waitForVisible, waitForHidden } from '../driver.mjs';

const BASE = process.argv[2] || 'https://kansasprairiewebworks.com';
const PAGE_URL = `${BASE.replace(/\/$/, '')}/use-cases.html`;
const SHOT_DIR = new URL('.', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'); // dir of this file, Windows-safe

(async () => {
  const browser = await launch();
  let failed = false;

  // ─── DESKTOP: open/close via all 3 methods ───
  const context = await desktopContext(browser);
  const page = await context.newPage();
  const desktopErrors = watchConsoleErrors(page, 'desktop');

  await page.goto(PAGE_URL, { waitUntil: 'networkidle' });
  await page.locator('#proof').scrollIntoViewIfNeeded();

  const cardCount = await page.locator('.uc-card').count();
  console.log('Visible proof cards:', cardCount, cardCount === 3 ? 'OK' : 'UNEXPECTED (expected 3)');

  // Card 1 — close via background click
  await page.locator('.uc-card', { hasText: 'Mike' }).locator('.uc-card-media img').first().click();
  await waitForVisible(page, '#ucLightbox.is-open');
  await page.mouse.click(20, 20); // corner of dark overlay, away from centered image
  await waitForHidden(page, '#ucLightbox');
  console.log('Close via background click: OK');

  // Card 2 — close via X button
  await page.locator('.uc-card', { hasText: 'Macro Tripwire' }).locator('.uc-card-media img').first().click();
  await waitForVisible(page, '#ucLightbox.is-open');
  await page.screenshot({ path: `${SHOT_DIR}tripwire-enlarged.png` });
  await page.locator('#ucLightboxClose').click();
  await waitForHidden(page, '#ucLightbox');
  console.log('Close via X button: OK (screenshot: tripwire-enlarged.png)');

  // Card 3 — close via Escape key
  await page.locator('.uc-card', { hasText: 'DogeBeats' }).locator('.uc-card-media img').first().click();
  await waitForVisible(page, '#ucLightbox.is-open');
  await page.keyboard.press('Escape');
  await waitForHidden(page, '#ucLightbox');
  console.log('Close via Escape key: OK');

  await context.close();

  // ─── MOBILE: tap to open, tap background to close ───
  const mContext = await mobileContext(browser);
  const mpage = await mContext.newPage();
  const mobileErrors = watchConsoleErrors(mpage, 'mobile');

  await mpage.goto(PAGE_URL, { waitUntil: 'networkidle' });
  await mpage.locator('#proof').scrollIntoViewIfNeeded();
  await mpage.locator('.uc-card', { hasText: 'Macro Tripwire' }).locator('.uc-card-media img').first().tap();
  await waitForVisible(mpage, '#ucLightbox.is-open');
  await mpage.screenshot({ path: `${SHOT_DIR}mobile-open.png` });
  console.log('Mobile tap opens lightbox: OK (screenshot: mobile-open.png)');
  await mpage.tap('#ucLightbox', { position: { x: 10, y: 10 } });
  await waitForHidden(mpage, '#ucLightbox');
  console.log('Mobile tap on background closes lightbox: OK');

  await mContext.close();
  await browser.close();

  const allErrors = [...desktopErrors, ...mobileErrors];
  console.log('\nConsole errors:', allErrors.length === 0 ? 'none' : '\n' + allErrors.join('\n'));
  if (allErrors.length > 0) failed = true;

  process.exit(failed ? 2 : 0);
})().catch((err) => {
  console.error('lightbox-check failed:', err);
  process.exit(1);
});
