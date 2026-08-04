# SMS / A2P 10DLC Compliance — state and rules

Last updated: 2026-08-03

Twilio campaign `CM942596bb303db241c926550b9d5cf556` (brand `BN6e1bbe7b540074117ad8820e31408fed`,
STARTER use case) was **rejected five times**. This records what was actually
wrong, what changed, and the rules for touching any of it again.

**Three files are involved and they must agree word for word:**
`sms-signup.html`, `privacy.html`, `terms.html`.

---

## What the rejections meant

| Error | Twilio's words | What it actually meant here |
|---|---|---|
| **30923** | "opt-in flow makes consent a required condition" | The reviewer believed consent was bundled. It wasn't — but see below |
| **30896** | "opt-in details don't adequately show how end users consent" | Missing message types, a specific frequency, and STOP inside the consent itself |

---

## The audit (2026-08-03)

`terms.html` contained **no SMS language at all** — only nav links. So the
reviewer note "bundles SMS consent into your mandatory Terms of Service" was
not literally true of the text. The form mechanics were already compliant:
the consent checkbox has never had a `required` attribute, and a skip path
existed. Four real problems were found instead.

### 1. The carrier carve-out clause was missing — most likely the repeat blocker

`privacy.html` §4 listed sharing categories with **no exclusion for SMS data**.
§12 said numbers weren't shared "for marketing purposes", but that is a weaker
claim, in a different section, and not the construction reviewers look for.

Carriers effectively require this exact shape, and its absence is the single
most common cause of repeat A2P rejections:

> **No mobile information will be shared with third parties or affiliates for
> marketing or promotional purposes.** All of the above categories exclude text
> messaging originator opt-in data and consent; this information will not be
> shared with any third parties.

**Now present in `privacy.html` §4 and §12, and in `terms.html` §12.**

### 2. The privacy policy described a different messaging model than the form

§12 previously read *"may send SMS messages to business owners **who have
engaged with our outreach**"* — that is outreach, not opt-in. A reviewer
cross-checking the opt-in page against the policy sees a form claiming express
consent and a policy describing messaging people we contacted first, and
resolves the contradiction against us.

**This is the most plausible source of the "Forced Consent" note**, not the
form mechanics. §12 now describes express written consent via the signup form,
states we never message anyone who hasn't opted in, and says consent is never
a condition of purchase.

### 3. Frequency contradicted the checkbox

Policy said "1-3 messages per contact"; the form said "1-4 messages per month".
Reviewers compare these directly, and "per contact" isn't a frequency in their
terms. **Now "typically 1-4 messages per month" everywhere.**

### 4. `terms.html` had no messaging terms

The consent text says "See our Terms of Service" but the ToS said nothing about
the program. **Added §12 SMS Program Terms** (Contact renumbered to §13):
program name, message types, frequency, cost, STOP/HELP, carrier
non-liability, and that opting in is optional and never a condition of
purchase.

### 5. The skip control was invisible

The decline path was an **`×` icon** in the card corner whose "No thanks"
wording lived only in `aria-label` and `title`. A sighted reviewer looking for
the "explicit skip option" the rejection demanded would have seen a close icon
and nothing else. **Replaced with a full-width "No thanks, skip this" button
directly beneath the submit button.** It keeps `id="smsSignupClose"` so the
handler in `main.js` still binds, and `type="button"` so it never submits.

---

## Rules for future edits

1. **Never describe anything on the page that a reviewer cannot see.** An
   earlier draft of the `message_flow` claimed a visible "No thanks" option
   while it was an unlabelled `×`. A claim they can't verify is worse than an
   omission.
2. **The three files must match verbatim** on message types, frequency, and
   the carve-out sentence. Change one, change all three.
3. **Never add `required` to the consent checkbox**, and never gate any form
   submission, quote, or purchase on it.
4. **Never let the privacy policy imply outreach/cold messaging.** Everything
   must read as opt-in only.
5. The consent checkbox label must always carry: message types, a specific
   frequency, "Message and data rates may apply", **Reply STOP**, and
   **Reply HELP**.

---

## Current approved wording

**Checkbox label (`sms-signup.html`):**

> I agree to receive SMS messages from Kansas Prairie Webworks including web
> design tips, Google Business Profile updates, service announcements, and
> promotional offers. Message frequency varies, typically 1-4 messages per
> month. Message and data rates may apply. Reply STOP to unsubscribe at any
> time. Reply HELP for assistance. See our [Privacy Policy] and [Terms of
> Service].

**`message_flow` for the Twilio campaign submission:**

> End users visit https://kansasprairiewebworks.com/sms-signup.html and enter
> their mobile phone number. Consent is collected through a separate checkbox
> that is unchecked by default and is not required to submit the form,
> purchase any service, or create an account. A clearly visible "No thanks,
> skip this" button sits directly beneath the submit button, and the page
> offers phone, email, and web-form alternatives for anyone who declines.
>
> The consent checkbox reads: "I agree to receive SMS messages from Kansas
> Prairie Webworks including web design tips, Google Business Profile updates,
> service announcements, and promotional offers. Message frequency varies,
> typically 1-4 messages per month. Message and data rates may apply. Reply
> STOP to unsubscribe at any time. Reply HELP for assistance. See our Privacy
> Policy and Terms of Service."
>
> The checkbox links to https://kansasprairiewebworks.com/privacy.html and
> https://kansasprairiewebworks.com/terms.html. Full SMS program terms are in
> Section 12 of the Terms of Service. No phone number receives a message until
> consent is recorded.

**Screenshot for the submission:** capture the checkbox label **and** the
"No thanks, skip this" button in the same frame — that one image answers both
rejection errors.

---

## Still on the Twilio side, not the website

Error 30896 also covers the **campaign submission fields**, not just the page.
A compliant site still fails if `message_flow` is thin or the hosted
screenshots are missing. Kaleb owns that half.

**Status as of 2026-08-03:** all website-side issues fixed and live; campaign
not yet resubmitted.
