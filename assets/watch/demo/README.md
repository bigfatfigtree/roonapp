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
- The three brand surfaces in `app.html` all use the **logo-dark** lockup
  (all three sit on light backgrounds; logo-light ships alongside for any
  future dark surface):
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
| `app.js` | Unmodified app front-end (225,355 B, md5 `3b9fe2f71b21ccb675106d3ca288c6ee`) |
| `styles.css` | Unmodified app styles (64,143 B, md5 `614181e9d0d45a16b531b9afb953d42b`) |
| `demo-data.js` | Baked API map — 71 keys |
| `demo-shim.js` | fetch override (see above) |
| `demo.css` | Local fallback fonts (@font-face) + logo/font notes |
| `fonts/` | InstrumentSerif-Regular/Italic, Inter 400/500/600/700/800 (TTF) |
| `assets/mark-dark.png`, `mark-light.png` | Standalone dinosaur mark (small-mark uses) |
| `assets/brand/logo-dark.png`, `logo-light.png` | Canonical logo lockup |
| `media/fam_b44fd40e9d36256d3b/` | 9 sample media files (3 photos × web+original, 1 video × view+original+poster) |
| `qa-demo-*.png` | QA screenshots — **not yet produced**: the sandbox Chromium chain was in a SIGTRAP outage window throughout the build session (see README “QA status” note in the build report); re-run the QA pass when it lifts |

## QA (how to re-run)

Serve this folder with any static server, then load `index.html` /
`app.html` with all non-local requests blocked: the journey is
one-tap demo login → Today cover → Explore (scroll; Everyone⇄person
toggle re-renders) → Threads list → chapter reader. Grep the tree for
`http://` / `https://` / `googleapis` — the only hits should be inside
README/comments, never in code that loads.
