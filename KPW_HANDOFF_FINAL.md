# KPW Agency Brain — Handoff (2026-07-11)

## Current Apps Script deployment — CONFIRMED LIVE

- **Live Web App URL (v39):**
  `https://script.google.com/macros/s/AKfycbxnHiCoiuJSBcDp5yIdE-oBSh57wS4hXqUKGrvk7bxe-8UpD7cNfejpTeJIjxwF4XIz/exec`
- v39 replaces v38 same-day — v38 shipped the two-stage email system, v39 removes the `welcomeEmail` action loophole that could bypass it (see below).
- Verified live: `doGet` (`getClient`) and `doPost` (`verifyClient`) both returned correct JSON on v39.
- On v39 everywhere: kpw-intake, kpw-client-portal, kpw-photo-curator, and all 5 INTAKE_FROM_BUILD.md files (kpw-agency-brain, KPW-TIER4-TEMPLATE, mike's_services_llc, pro_cleaning_services, kpw-build).
- **Deployments are pinned snapshots, not `@HEAD`-tracking** — `clasp push` alone updates the source + the separate `@HEAD` deployment URL, but does *not* change what an already-created deployment (like v38 or v39) serves. Any future code change that needs to reach the live sites requires a new `clasp deploy` + updating the URL everywhere, same as this pass.
- Deployment cap is 20 versioned + `@HEAD`. Oldest (v17) was undeployed to make room for v39 — next deploy will need another undeploy first.

## Two-stage client email system — live on v39

- **Email 1 — fires immediately** when a client submits the intake form (`doPost` → `saveClientData_`). Confirmation only, no portal link. Also sends an internal alert to `kansasprairiewebworks@gmail.com`.
- **Email 2 — fires when you flip "Website Ready" to `Yes`** on the Clients sheet, via the installable `onClientSheetEdit` trigger. Sends the portal link + walkthrough email, logs a timestamp in "Welcome Email 2 Sent", and confirms to your inbox.
- **The `welcomeEmail` loophole is closed as of v39.** The old `action === 'welcomeEmail'` branch — which sent the immediate portal-link email directly, bypassing the two-stage gate — has been removed entirely from Code.gs, along with its now-unused `buildWelcomeEmailBody_` function. Nothing in the codebase calls that action anymore; the two automatic triggers (intake submit + Website Ready edit) are the only paths that send client emails now.

### One-time manual setup still required (could not be automated)

`clasp run` requires the project to be an API-executable, which this project isn't configured for — so run these **once, manually, from the Apps Script editor** (Extensions → Apps Script → select function → Run):

1. **`ADD_WEBSITE_READY_COLUMNS`** — adds "Website Ready" (default "No") and "Welcome Email 2 Sent" columns to Clients. Safe to re-run.
2. **`createWebsiteReadyTrigger`** — installs the `onClientSheetEdit` trigger. Safe to re-run — warns if already installed.

Run `ADD_WEBSITE_READY_COLUMNS` first, then `createWebsiteReadyTrigger`.

**I still cannot confirm from outside whether you've run these.** `getClientVoiceProfile_` in Client.gs was never updated to expose "Website Ready"/"Welcome Email 2 Sent" in the `getClient` API response — it builds its response from a fixed field list that doesn't include them, so those fields can never appear via the API regardless of sheet state. Doesn't block the trigger (which reads the sheet directly by header name), but means status can't be checked remotely. **Please confirm directly in the Sheet/Apps Script editor whether both functions have been run — if not, run them now.**

### Verification status

- `doGet`/`doPost` confirmed live and correct on v39.
- The save+email fallthrough path has **not** been live-fired (would write a fake row to the real Clients sheet and email your real inbox). Code is syntax-checked clean. First real confirmation will be your next real intake submission.

## Audio files — confirmed deployed

All 4 canonical files (`audio_intake_welcome.mp3`, `audio_portal_welcome.mp3`, `audio_track_country.mp3`, `audio_track_hiphop.mp3`) present in both `kpw-intake/` and `kpw-client-portal/`. Nav player + welcome showcase card wired up on both sites; kept as 2 buttons + showcase card, not a dropdown, per your earlier feedback.

## kpw_seo_check.js (kpw_credentials/) — no changes needed

Uses a Google service account for Search Console + PageSpeed Insights only — no dependency on the Apps Script deployment URL. `SITES`/`CLIENTS` config confirmed self-consistent.

## All repos — git status

| Repo | Latest commit | Pushed |
|---|---|---|
| kpw-intake | `1c25b4a` fix: point intake form to v39 | yes |
| kpw-client-portal | `77c8386` fix: point client portal to v39 | yes |
| kpw-agency-brain | `3225027` fix: remove welcomeEmail loophole, deploy v39 | yes |
| kpw-build | `63c7391` docs: bump Apps Script URL to v39 | yes |
| kpw-photo-curator | `957baf3` fix: point AGENCY_BRAIN to v39 | yes |

## Local-only doc updates (not pushed — no dedicated git remote for this content)

- `KPW-TIER4-TEMPLATE/INTAKE_FROM_BUILD.md`
- `mike's_services_llc/INTAKE_FROM_BUILD.md`
- `pro_cleaning_services/INTAKE_FROM_BUILD.md`

All five INTAKE_FROM_BUILD.md files reference v39 consistently.

kpw-agency-brain and kpw-build both have pre-existing unrelated untracked/modified files (`.gitignore` credentials-ignore rule, `GEO_CONTEXT.md.md`, pricing/template docs, raw audio source files) left alone — not part of this work.
