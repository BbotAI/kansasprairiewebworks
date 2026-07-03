---
name: run-kpw-build
description: Visual QA for the kpw-build static site (kansasprairiewebworks.com) — screenshot any live page, test mobile/touch viewports, and drive interactive JS components (clicks, taps, keyboard) with console-error checking. Use when asked to screenshot a page, verify a UI change actually works, test a lightbox/modal/accordion, check mobile rendering, or confirm no console errors after editing HTML/CSS/JS on this site.
---

kpw-build is a plain HTML/CSS/JS static site (no build step, no framework) deployed to
GitHub Pages. There's no local dev server to launch — pages are verified directly against
the live URL (`https://kansasprairiewebworks.com/...`) after each deploy. Drive it with the
Playwright helpers in `.claude/skills/run-kpw-build/driver.mjs` — no `chromium-cli` is
installed in this environment, so this driver (and its `examples/`) is the harness.

All paths below are relative to `.claude/skills/run-kpw-build/` unless noted otherwise.

## Prerequisites

Node.js and npm (already present in this environment — verified with Node v24.11.1 / npm 11.6.2).
No OS packages needed beyond what Playwright's Chromium ships with; no `xvfb` required since
Chromium runs headless here.

## Setup

One-time, from this directory:

```bash
npm install                      # installs playwright (pinned in package.json)
npx playwright install chromium  # downloads the Chromium build Playwright drives
```

`node_modules/` and screenshot output (`*.png`/`*.jpg`) are gitignored in this directory —
re-run `npm install` after a fresh clone.

## Run (agent path)

### Quick screenshot / console-error check

```bash
node driver.mjs shot <url> [out.png] [--mobile] [--full-page]
node driver.mjs check <url> [--mobile]     # console-error check only, no screenshot
```

Example (verified this session):

```bash
node driver.mjs shot "https://kansasprairiewebworks.com/use-cases.html" /tmp/shot.png
node driver.mjs shot "https://kansasprairiewebworks.com/use-cases.html" /tmp/shot-m.png --mobile
```

Both printed `Console errors: none` and produced a correctly rendered PNG.

### Interactive components (click/tap/keyboard flows)

For anything beyond a static screenshot — a lightbox, an accordion, a form — write a small
script that imports the shared helpers from `driver.mjs` and drives the specific flow.
`examples/lightbox-check.mjs` is a complete, proven template for this (tests use-cases.html's
click-to-enlarge image lightbox: 3 images open correctly, closes via background click / X
button / Escape key, plus a mobile tap-open/tap-close pass) — copy its structure for the next
interactive component:

```bash
node examples/lightbox-check.mjs                                    # against the live site
node examples/lightbox-check.mjs https://deploy-preview-url.example  # against another host
```

Verified output (this session, against production):

```
Visible proof cards: 3 OK
Close via background click: OK
Close via X button: OK (screenshot: tripwire-enlarged.png)
Close via Escape key: OK
Mobile tap opens lightbox: OK (screenshot: mobile-open.png)
Mobile tap on background closes lightbox: OK

Console errors: none
```

**Helpers available from `driver.mjs`** (import into any new example script):

| export | what it does |
|---|---|
| `launch()` | Launches headless Chromium (`--no-sandbox`) |
| `desktopContext(browser, overrides?)` | 1400×900 viewport context |
| `mobileContext(browser, overrides?)` | 390×844, `isMobile`/`hasTouch` true, iPhone UA — use for real tap() testing, not just a shrunk desktop viewport |
| `watchConsoleErrors(page, label?)` | Attaches `console`/`pageerror` listeners, returns the array they push into — check its `.length` at the end of a flow |
| `waitForVisible(page, selector, timeout?)` | Waits for an element to become visible |
| `waitForHidden(page, selector, timeout?)` | Waits for an element to become hidden — see Gotchas below, this is not the same as "wait for `:not(.open-class)`" |

Screenshots from `driver.mjs shot` go wherever you point `out.png`; screenshots taken inside a
custom example script (like `lightbox-check.mjs`) land next to that script by convention.

## Run (human path)

Not applicable — there's no local server or build; a human checks the same live URLs in a
regular browser. The driver above exists specifically for the case a human isn't available to look.

## Test

No test suite in this repo (static HTML site). "Testing" a change here means running the
driver against the live URL after deploying, per the steps above.

---

## Gotchas

- **`waitForSelector` defaults to `state: 'visible'`.** A closed modal/lightbox that's
  `display: none` (rather than merely missing an "open" class) will never satisfy
  `page.waitForSelector('#thing:not(.is-open)')` under the default state — the selector
  matches the element, but the element itself isn't "visible", so Playwright hangs until
  timeout even though the close actually succeeded. Use `waitForHidden(page, '#thing')`
  (i.e. `{ state: 'hidden' }` on the specific element) instead of trying to select the
  "not open" variant.
- **Mobile emulation needs `isMobile: true, hasTouch: true` + `.tap()`, not just a narrow
  `viewport`.** A shrunk desktop context can miss touch-specific behavior; `mobileContext()`
  sets these plus an iPhone user agent so `page.tap()` / `locator.tap()` exercise the real
  touch path.
- **Don't name a variable `URL`** in an ESM script that also uses `import.meta.url` — it
  shadows the global `URL` constructor and throws `TypeError: URL is not a constructor`.
  (Hit this writing `lightbox-check.mjs`; the page-URL constant there is `PAGE_URL`.)
- **No `chromium-cli` in this environment.** Confirmed absent (`which chromium-cli` → not
  found) — that's why this skill ships its own Playwright driver instead of the usual
  `chromium-cli` heredoc pattern from the generic `/run` skill.

## Troubleshooting

- **`TypeError: URL is not a constructor`** in a new example script: you named a local
  variable `URL`. Rename it (e.g. `PAGE_URL`) — see Gotchas.
- **A close-interaction test hangs for the full timeout then fails** even though the
  screenshot/behavior looked right: check whether you're waiting on `:not(.open-class)`
  with default `waitForSelector` state. Switch to `waitForHidden()`.
