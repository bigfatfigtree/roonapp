# Roon — interactive demo export (Sample Family)

A fully self-contained, backend-free static copy of the Roon app front-end,
running the baked-in **Sample Family (Demo)** data. No server code, no
network calls: serve this folder from any static host (or open it via a
local static server) and the app works.

- **`index.html`** — presentation wrapper: phone frame + Sample disclosure.
  For embedding, iframe **`app.html`** directly; it is the app itself.
- **`app.html`** — the app (copy of `app/public/index.html`, export edits only:
  Google Fonts links removed, `demo.css` added, `demo-data.js` +
  `demo-shim.js` loaded before the unmodified `app.js`).
- Sign-in is the app's own one-tap **“Explore the sample family”** button
  (it POSTs the demo login, which the shim answers from baked data).

> **Sample honesty:** everything in this demo is the app's built-in sample
> family — made-up photos and story, labelled “Sample” by the app itself
> (auth demo box, sample banner, `sample: true` flags). The wrapper repeats
> the disclosure line: “Sample family — made-up photos and story, so you
> can see how Roon feels.”

## Re-bake — 2026-10-30 (second bake, current package)

Re-captured from a **freshly restarted** throwaway instance of the current
app server (PORT 8741, `ROON_DATA_DIR` pointing at a hermetic **copy** of
`db.json` — the real `app/data/db.json`, md5
`295c7e041d8c3b28b0b40a97d5decbfc`, verified unchanged before and after;
the :8730 instance was never touched). **76 keys, all HTTP 200** — the
original 71 plus the C-feature routes the current front-end requests:
`collections`, `saved`, `legacy`, `resurfacing`, `prompt-settings`.
Capture was UI-driven (Playwright journey through the real app) plus an
authenticated replay for the feed month/scope variants, comments and film
years. What this bake carries that the first did not:

- **Feed-assembly dedupe** (server-side): e.g. the lead chapter card now
  reads "Assembled from 4 moments kept from 2023: 3 photos, 1 video"
  (first bake: 6 moments blended from 2022–2024).
- **Commentary prose cleanup** (server-side): "The people recorded in
  these moments:" → "In these moments:" throughout threads/chapters.
- **Caption cleanup + Moments rename** (front-end): current `app.js`
  (md5 `54d3170c364902d9971046bc072f513b`) renders the feed as **Moments**,
  with the "Made by Rooney · N moments" tag on Rooney-built cards and the
  duplicated-name caption fixed.
- New views work in the demo: **Saved**, **Your collections**, **Who this
  story goes to** (legacy) — their GET routes are baked; writes still get
  the demo message, as before.
- Export edits to `app.html` now also remove the **premium-variant boot
  script and `variant.js`**: the demo always shows the shipping default
  design (variants are an app-side experiment, not part of this package).
- Boot behaviour (unchanged from the first bake): the baked `/api/me`
  signs the sample family in immediately — the demo opens on Today; the
  one-tap button appears after signing out.
- QA pass re-run and green (Playwright, 390px, external requests
  blocked): Today → Moments (scroll, person scopes) → Threads → Story →
  chapter reader → Collections → Film. Screenshots: `qa-demo-*.png`.
  Only 404s are the documented Olive/Origin woff2 stubs.

## Dark bake — 2026-10-30 (third bake, current package)

Re-baked from the **post-reskin app (v15)**: Variant D (dark theater) is
now the app's permanent, only design — see `app-v2/DARK-RESKIN-REPORT.md`.
Captured from a freshly started throwaway instance of the finished app
server (PORT 8741, `ROON_DATA_DIR` → hermetic **copy** of `app/data` —
the real `app/data/db.json`, md5 `d5db1a359bef8efce3475a4da31c7e8f`,
verified unchanged before and after the capture; the :8730 instance was
never touched). **Baseline note:** that md5 supersedes the
`295c7e04…` figure from the second bake — the reskin team's own QA
minted one guest-link record on the live store (disclosed in their
report §5), which is the whole difference; no family content changed.

- **77 keys, all HTTP 200** — the second bake's 76 plus
  `GET …/den-prefs`, which the current front-end requests (found by the
  capture journey, not assumed).
- **No variant anything.** Capture used no `?variant=` param and no
  localStorage keys — the app has none left to use: `index.html` ships
  no boot script and `styles.css` has zero `data-variant` selectors.
  The baked demo inherits dark natively as the default.
- **`design.js` is in the package** (21,499 B, md5
  `6c4aeef861cff76caf1e832a7b0c426d`, byte-identical to
  `app/public/design.js`). It is the reskin's renamed, permanent
  behaviour layer (Today's composition, full-screen viewer, head pill,
  Threads grid) — load-bearing, never dropped. The old bake's
  "remove variant boot + variant.js" edit is **retired**: there is
  nothing to remove, and re-adding any of it would resurrect the
  deleted switcher.
- **Export edits to `app.html`** (from the current `app/public/index.html`,
  md5 of result `4b320c830702c9a78d3aa5982b192334`): Google Fonts links
  removed; `demo.css` added; `demo-data.js` + `demo-shim.js` injected
  before the unmodified `app.js`; `design.js` kept, unmodified.
  `app.js` is byte-identical to source (md5
  `54d3170c364902d9971046bc072f513b` — the front-end JS did not change
  in the reskin); `styles.css` is the reskin's (87,675 B, md5
  `3ec5040b85ecbae2d9110b31543771ec`).
- **Logo:** the app now ships the canonical **light** lockup natively —
  all three brand surfaces in the baked `app.html` reference
  `assets/brand/logo-light.png` (correct on the dark ground; no runtime
  swap exists anymore). The wrapper `index.html` iframe background is
  now `#0D0E13` so the phone frame doesn't flash light.
- **Credential stripping extended:** the store now holds one guest-link
  record (see baseline note), whose response carries a signed `token`
  and a `url` embedding it. Both fields were stripped during the bake —
  the same class as `replyToken`; the front-end renders that row fine
  without them (its Copy button is conditional on `url`). Verified:
  no `replyToken`, no guest token, no capture origin anywhere in
  `demo-data.js`.
- **Share cards:** the downloadable card art (`sharecards.js` v2) was
  deliberately left unchanged by the reskin — exports, not surfaces.
  In-app share surfaces in this demo are dark; card art stays v2.
  Expected, not a defect.
- **QA (repo copy, served statically, Playwright 390px, external
  requests blocked):** Today → Moments (scroll) → Threads → thread
  open → Story → chapter reader → Film → Saved → Collections — all
  render, **0 page errors**, only 404s are the documented Olive/Origin
  woff2 stubs. Dark-default proof: `<html>` carries **no** variant
  attributes (`dataset.variant = null`), computed body background
  `rgb(13, 14, 19)` (= `#0D0E13`), screenshot edge pixels ≈ `#0D0E13`,
  and Today's design.js composition (Quick Search, Den people row,
  glass cover pill) is present. Screenshots:
  `~/workspace/roon/qa/dark-bake-{today,moments,threads,thread,story,chapter,film,saved,collections}.png`
  (the second bake's light `qa-demo-*.png` were removed from this
  folder as stale). This package is mirrored byte-identically at
  `~/workspace/roon/repo/assets/watch/demo/`.

## Status: PRE-FONT-DRAFT

Final brand fonts are **Olive Display** (display) and **Origin** (UI),
pending Jeff's decision/purchase. Until then the app renders in its own
designed fallbacks — **Instrument Serif** + **Inter** — which `demo.css`
supplies locally from `fonts/*.ttf`. `styles.css` contains @font-face stubs
for Olive/Origin pointing at `fonts/*.woff2` files that do not exist yet;
those requests 404 harmlessly and the fallback stacks take over (the app's
documented pre-font behaviour).

**Re-export after font/design approval:**
1. Re-run the capture (below) against the then-current app so baked data
   matches the shipped sample family.
2. Put the real Olive Display / Origin files in `fonts/`, fix the
   @font-face blocks in the `styles.css` copy to match the delivered
   files exactly, verify the woff2s load, then delete the Instrument
   Serif / Inter fallback layer from `demo.css` (and `fonts/*.ttf`).
3. Re-copy `app.html` / `app.js` / `styles.css` / `assets/` from
   `app/public/`, re-apply the three export edits to `app.html`, and
   confirm the logo lockup (below) is still the markup in all three
   brand surfaces.
4. Re-run the QA pass (below).

## Logo (canonical artwork — Jeff's rule)

The Roon logo is **one piece of artwork**: the dinosaur drawing forms the
“R” and “oon” is drawn lettering. It is **not a font and is never typeset**.

- Files: `assets/brand/logo-dark.png` + `assets/brand/logo-light.png`
  (900×297 RGBA, ≈3.03:1), copied from `~/workspace/roon/current-site/assets/brand/`.
  md5: logo-dark `63878beb911c4d86a15249e180dfbf77`,
  logo-light `209a29429689584a9b5fa5cbc34a6019`.
- **Superseded by the dark bake (2026-10-30):** the app is now dark by
  default, and the three brand surfaces in `app.html` all use the
  **logo-light** lockup natively (see "Dark bake" above). The original
  note, from the light era: the three surfaces used the **logo-dark**
  lockup (all three sat on light backgrounds; logo-light shipped
  alongside for any future dark surface):
  1. Auth view — `.auth-lockup`, 56px tall
  2. Desktop rail brand — `.rail-lockup`, 30px tall
  3. Mobile header brand — `.mh-lockup`, 26px tall
  (height set, width auto — aspect never distorted; sizing lives in
  `styles.css`, unchanged.)
- **Current-source note:** the app build copied here already carries the
  lockup markup in all three surfaces — grep-verified: no typeset “Roon”
  wordmark (`wordmark` / `rail-word` / `mh-word`) exists anywhere in the
  copied `index.html` / `app.js` / `styles.css`. (An older v12 build did
  typeset it; if a re-export is ever taken from such a build, replace the
  three surfaces with the lockup `<img>` in this skin layer, as above.)
- The standalone dinosaur mark (`assets/mark-dark.png`, `mark-light.png`)
  stays as-is for its approved small-mark uses: centre nav disc, Ask
  Rooney discs/buttons, empty states, note avatars.
  Byte-identity verified 2026-10-30: `app/public/assets/mark-dark.png` ≡
  `current-site/assets/brand/mark-dark.png` ≡ the copy in this folder —
  md5 `3fc10b77b232d058e0afa35c1a67f42a`.

## How it was built (2026-10-30)

1. **Capture.** The real app server was run on port 8741 against a
   throwaway data dir (`ROON_DATA_DIR`): `db.json` was a symlink to the
   real file with all saves no-opped by a preload shim, and media were
   hardlinks — so **the real `app/data/db.json` was never written**
   (md5 `b44d1f04e34ea7834410883c8274fbe1`, verified before and after).
   The production server on port 8730 was never touched.
2. Responses were captured with curl + the demo login for every route the
   front-end can request for the sample family: auth, me, families,
   family detail, people, memories, chapters, prompts, series, letters,
   threads (+ all 5 thread details), interviews, guest-links, billing,
   imports, comments (20 target pairs), film for 2022/2023/2024, and the
   full Explore feed: scope=all (2 pages), each of the 3 people
   (Rooney 2pp, Milo 2pp, Grandma June 1p), the Today hero page
   (limit=4), and month feeds for all 5 months present × all 4 scopes.
   **71 request keys** in total, all HTTP 200. The key list is in
   `../capture-raw/capture-raw.json`.
3. **Bake.** `demo-data.js` maps `METHOD path?sortedquery` → response
   JSON. Every `/media/…` URL was rewritten to relative `media/…`.
   Prompt `replyToken` credentials were **stripped** (the front-end never
   reads them; no credential ships in this package).
4. **Shim.** `demo-shim.js` (loaded before `app.js`) replaces
   `window.fetch`: baked key → baked JSON; POST /api/auth/logout → 200 {};
   any other write → 400 “This is a sample demo — nothing is saved here.”;
   unknown API GET → 404; cross-origin → blocked; `sendBeacon` no-oped.
   `app.js` is **unmodified**.
5. **Assets.** The 9 referenced sample media files live under
   `media/fam_b44fd40e9d36256d3b/`. `public/assets/media/` hero videos are
   **not** referenced anywhere in the front-end (grep-verified) and are
   excluded.

> **Staging note (sandbox write fault):** this sandbox intermittently
> blocks read→write copies, so the binary files and `app.js`/`styles.css`
> in this staging folder are **hardlinks** to their sources (byte-identical,
> md5-verified). When publishing, copy real bytes (or `cp --remove-destination`
> on a healthy machine) so the published folder is independent of the
> source trees.

## What does NOT work statically (by design)

- **Anything that saves**: answering prompts, adding memories, reactions,
  comments, renaming, plan changes → the app shows the demo message
  “This is a sample demo — nothing is saved here.”
- **Share cards** (POST flow) → same demo message.
- **Film years other than 2022–2024**, thread/memory targets outside the
  baked set, and any API route not in `demo-data.js` → “Not part of the
  sample demo.” (Films bake to `{film: []}` for 2022 and 2024 — that's
  what the server returned; 2023 has 3 items.)
- Comments are baked empty (the sample family has none).
- Signing in with typed credentials also works (any input returns the
  captured sample login); signing out returns to the auth view, and the
  one-tap sample login works again.

## File inventory

| Path | What |
|---|---|
| `index.html` | Phone-frame wrapper + Sample disclosure |
| `app.html` | The app page (iframe target) |
| `app.js` | Unmodified app front-end (274,498 B, md5 `54d3170c364902d9971046bc072f513b`) |
| `design.js` | Unmodified permanent behaviour layer (21,499 B, md5 `6c4aeef861cff76caf1e832a7b0c426d`) |
| `styles.css` | Unmodified app styles, post-reskin dark (87,675 B, md5 `3ec5040b85ecbae2d9110b31543771ec`) |
| `demo-data.js` | Baked API map — 77 keys (dark bake, see above) |
| `demo-shim.js` | fetch override (see above) |
| `demo.css` | Local fallback fonts (@font-face) + logo/font notes |
| `fonts/` | InstrumentSerif-Regular/Italic, Inter 400/500/600/700/800 (TTF) |
| `assets/mark-dark.png`, `mark-light.png` | Standalone dinosaur mark (small-mark uses) |
| `assets/brand/logo-dark.png`, `logo-light.png` | Canonical logo lockup |
| `media/fam_b44fd40e9d36256d3b/` | 9 sample media files (3 photos × web+original, 1 video × view+original+poster) |
| QA screenshots | Dark-bake pass: `~/workspace/roon/qa/dark-bake-*.png` (Playwright, 390px) |

## QA (how to re-run)

Serve this folder with any static server, then load `index.html` /
`app.html` with all non-local requests blocked: the journey is
one-tap demo login → Today cover → Explore (scroll; Everyone⇄person
toggle re-renders) → Threads list → chapter reader. Grep the tree for
`http://` / `https://` / `googleapis` — the only hits should be inside
README/comments, never in code that loads.

## Bake 2026-10-30 PM — populate-media + GO-LIVE (251 keys)

Re-baked from the COMPLETION code (Den S1 + prod S2) after the sample
family was enriched under Jeff's "populate all images and videos, no
repeats" order. Two-stage harness (`hidden_files/bake-harness/`):
`capture.py` (previous-key replay + Playwright journey) then
`supplement.py` (id-dependent keys re-enumerated from the reseeded
store: all thread details, comments for every target, per-person and
per-month feeds for every month present 2021-06 → 2025-11, film years
2021–2025, activity, invite-proposals). **251 keys, all HTTP 200**,
real db.json md5-verified unchanged before/after both stages.

- Sample family now: **63 memories (48 photos · 7 videos · 8 writings),
  14 chapters, 8 threads** — Gardens followed. All media is real Pexels
  stock; provenance per file in `app/server/sample-assets/PROVENANCE.md`.
- Den surfaces are IN this bake: `/activity` ("New in your story"),
  `/invite-proposals` (member-proposed invite queue), `/den-prefs`,
  family detail with members + peopleRowOrder, family switcher data.
- No-repeat proof: `app/server/check-sample-covers.js` run against both
  the live store and this baked demo-data.js — **60 cover slots, every
  one populated, zero repeats** (a memory may appear inside its own
  thread/story; it headlines exactly one surface; the pool photo
  headlines exactly one).
- New bake transform: memory `fileRef`/`originalSrc` point at the web
  rendition, so the static package ships renditions only (62 media
  files, 36.5 MB); originals stay in the real app. Two videos
  (roaring-dinosaur, milo-first-ride) have no view rendition in the app
  itself — their originals ship, exactly as the app serves them.
- Design discipline unchanged: design.js byte-identical, no boot
  script, Google Fonts links removed, dark Variant D default
  (body #0D0E13 verified in QA), only font 404s are the documented
  Olive/Origin stubs.
