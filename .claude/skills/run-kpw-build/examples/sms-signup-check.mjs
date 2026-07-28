import { launch, desktopContext, watchConsoleErrors, waitForVisible } from '../driver.mjs';

const PAGE_URL = process.argv[2] || 'https://kansasprairiewebworks.com/sms-signup.html';
const HOME_URL = 'https://kansasprairiewebworks.com/index.html';

const browser = await launch();
const context = await desktopContext(browser);
const page = await context.newPage();
const errors = watchConsoleErrors(page, 'sms-signup');

// 1. Empty submit — should show validation errors, not the success message
await page.goto(PAGE_URL, { waitUntil: 'networkidle' });
await page.click('#smsSignupForm button[type="submit"]');
const phoneErr = (await page.textContent('#smsPhoneError')).trim();
const consentErr = (await page.textContent('#smsConsentError')).trim();
console.log('Empty submit — phone error:', JSON.stringify(phoneErr));
console.log('Empty submit — consent error:', JSON.stringify(consentErr));
const successHiddenAfterEmpty = !(await page.isVisible('.form-success.visible'));
console.log('Success message stayed hidden on empty submit:', successHiddenAfterEmpty);

// 2. Valid submit — should show success, clear the form
// NOTE: use a raw .click() on the checkbox, not page.check() — page.check()
// on this label-wrapped checkbox reliably breaks the *next* click's ability
// to reach the submit handler (confirmed via requestSubmit()/dispatchEvent
// working fine while .check()-then-.click() silently no-ops with a native
// page reload). Real user clicks behave like locator.click(), not
// page.check(), so this is a Playwright API quirk, not an app bug.
await page.fill('#smsPhone', '785-555-1234');
await page.locator('#smsConsent').click();
await page.click('#smsSignupForm button[type="submit"]');
await waitForVisible(page, '.form-success.visible');
const successText = (await page.textContent('.form-success')).trim();
console.log('Success message shown:', JSON.stringify(successText));
const phoneAfterReset = await page.inputValue('#smsPhone');
const consentAfterReset = await page.isChecked('#smsConsent');
console.log('Form reset after success — phone:', JSON.stringify(phoneAfterReset), '| consent checked:', consentAfterReset);

// 3. Consent checkbox links go to the right pages
const privacyHref = await page.getAttribute('.checkbox-label a[href="privacy.html"]', 'href');
const termsHref = await page.getAttribute('.checkbox-label a[href="terms.html"]', 'href');
console.log('Checkbox privacy link:', privacyHref, '| terms link:', termsHref);

await page.close();

// 4. Footer link from homepage navigates to sms-signup.html
const page2 = await context.newPage();
const errors2 = watchConsoleErrors(page2, 'homepage-footer');
await page2.goto(HOME_URL, { waitUntil: 'networkidle' });
await page2.click('footer a[href="sms-signup.html"]');
await page2.waitForLoadState('networkidle');
console.log('Footer link navigated to:', page2.url());

// 5. Confirm SMS Signup absent from main nav / hamburger menu on the homepage
const navLinksText = await page2.locator('.navbar__links').innerText();
const mobileMenuText = await page2.locator('.navbar__mobile-menu').innerText();
console.log('SMS Signup in desktop nav:', navLinksText.includes('SMS Signup'));
console.log('SMS Signup in mobile menu:', mobileMenuText.includes('SMS Signup'));

console.log('\nConsole errors (sms-signup page):', errors.length, errors);
console.log('Console errors (homepage):', errors2.length, errors2);

await browser.close();
