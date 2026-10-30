# Roon site-v2 — IMAGE PROVENANCE (visual pass v6, 2026-10-30)

## Source of all photography in this pass

**Every photograph placed in the v6 visual pass comes from Roon's own existing
library** — the real family photography that shipped with the original
roonapp.co site, carried into `site-v2/assets/media/` by the site overhaul.
No AI-generated imagery is used anywhere (Jeff's standing rule: real
photography only, across all his brands). No new stock was downloaded in this
pass — see "Blocked / queued" below.

## The library

15 unique photographs, each in two crops:

- `assets/media/p1–p15.jpg` — 900×900 square crops (48–198 KB)
- `assets/media/w1–w15.jpg` — 1400×800 wide crops of the same photographs
  (37–267 KB)

Plus the site's existing video: `hero*.mp4` (homepage hero), `v1–v9.mp4`
(short clips used by the capability cards on /how-rooney-works), and the
brand marks in `assets/` (dinosaur logo — Rooney's own drawing, untouchable).

| File | Subject (verified by eye, 2026-10-30) |
|---|---|
| p1 / w1 | Blonde toddler grinning into the camera, late-afternoon sun, garden |
| p2 / w2 | Older girl swimming in clear turquoise pool water |
| p3 / w3 | Younger girl floating in a bright blue pool, pigtails, grinning up |
| p4 / w4 | Black-and-white: boy laughing, buried in sand at the beach |
| p5 / w5 | Small child in a meadow holding flowers she picked, huge sky |
| p6 / w6 | Black-and-white: little girl in a trench coat walking through a field |
| p7 / w7 | Two children playing catch on a country road at dusk |
| p8 / w8 | Girl riding her bike straight toward the camera, grinning |
| p9 / w9 | Woman pausing on a golden autumn road |
| p10 / w10 | Little boy grinning up at the camera at home (bathroom, holding a razor — pretend shave) |
| p11 / w11 | Black-and-white: toddler at a rustic table with berries and cake, thumbs up |
| p12 / w12 | Two boys roughhousing outdoors — **NOT USED: the file is a photo of a screen; a mouse cursor and timestamp edge are visible in frame** |
| p13 / w13 | Black-and-white: boy in sunglasses + headscarf posing against a hedge |
| p14 / w14 | Sepia: girl in sunglasses and floral dress against a brick wall |
| p15 / w15 | Girl in overalls filming herself with a phone on a tripod, pulling a face |

## Where each photograph was placed in v6

- **Hero bands (wide crops):** letters w1 · our-story w2 · baby-book w3 ·
  legacy w4 · family-story w5 · grandparents w6 · how-rooney w7 ·
  google-alt w8 · preserve w9 · memory-gift w10 · record-parents w11 ·
  artwork w13 · digitize w14 · apple-alt w15 · storyworth p11 (square, 16:9
  crop) · too-many-photos p15 (square, 16:9 crop) · movie-night uses a
  filmstrip hero instead of a single photo (p2, p3, p7, p4 as frames).
- **Filmstrip bands:** every landing page carries one 4-frame strip between
  its first and second sections (frames drawn from the p-series; black-and-
  white/sepia frames lead on digitize, legacy, and our-story to read as
  "the old photographs themselves").
- **Threads cards / mini-stories / echoes:** homepage (3 thread cards +
  4 mini-stories), /how-rooney-works (3 thread cards), and single-card
  echoes on preserve (Grandma's table), too-many-photos (summers),
  baby-book (firsts), grandparents (across generations), record-parents
  (one road), movie-night (4 mini-stories as films). All thread examples
  are labeled "Illustrative example(s)" on the page — sample family, never
  implied to be real Roon users or a real family's output.
- **Homepage directory:** all 14 guide cards now carry a thumbnail (the
  p-series photo that also leads the destination page, so the directory
  rhymes with the pages).

## Craft notes

- All images carry meaningful alt text; below-fold images are
  `loading="lazy" decoding="async"`; hero images are eager.
- Aspect ratios are set in CSS (`.hphoto` 21:9, `.hphoto.mid` 16:9,
  strip frames 4:3, thread thumbs 1:1, mini-stories cover) with
  `object-fit:cover`, plus width/height attributes — no layout shift,
  no stretched faces.
- w10's small app watermark sits in the bottom-right corner of the frame;
  the 21:9 hero crop on /memory-gift slices the center band of the photo
  and excludes it. Verify on the v6 render when renders are unblocked.
- Page weight: the heaviest new load per page is one wide crop (≤267 KB)
  plus a 4-frame strip of squares (≤~600 KB total, lazy). No page gained
  more than ~900 KB of imagery, most of it below the fold.

## Blocked / queued — RESOLVED for renders; stock order still queued

On 2026-10-30 at ~13:20 ET the sandbox's binary-write path was blocked
environment-wide (verified independently by two agents; v5 renders from
13:10–13:15 exist, everything after failed). **The block lifted at ~09:41 ET
the same morning: the full v6 render pass ran clean (REPORT.md §12), and the
renders confirmed every presumed wide-crop twin — the w-series alt text in
this file is now verified, not presumed.** What remains queued is only the
stock order:

1. **Stock order: EXECUTED 2026-10-30 (ship-day pass, Jeff's order — "change
   stock videos and images where needed").** The pages the childhood library
   couldn't carry now run real Pexels photography (free license; every asset
   eyeballed before placement — no watermarks, no photo-of-a-screen, no
   uncanny stock grins). New files follow the library convention (w = 1400×800
   wide crop, p = 900×900 square crop), center-cropped from the Pexels CDN
   originals:

   | File | Placement | Subject | Pexels |
   |---|---|---|---|
   | w16 / p16 | grandparents hero + homepage directory thumb | Grandmother laughing with her two grandchildren at home | Photo 8317830, Mikhail Nilov — https://www.pexels.com/photo/grandmother-with-the-kids-laughing-together-8317830/ |
   | w17 / p17 | record-parents hero + homepage directory thumb | Grandfather and grandson laughing together on a couch | Photo 6972666, Mikhail Nilov — https://www.pexels.com/photo/grandfather-and-grandchild-sitting-on-a-chair-while-spending-time-together-6972666/ |
   | w18 / p18 | artwork hero + homepage directory thumb | Child's yellow handprint painting beside its watercolor set | Photo 8612960, Yan Krukau — https://www.pexels.com/photo/art-materials-and-painting-of-a-hand-on-table-8612960/ |
   | w19 / p19 | movie-night hero (new `.hphoto`; the filmstrip moved to the standard mid-page slot) + homepage directory thumb | Family of four on the couch watching together, remote in hand | Photo 4260643, August de Richelieu — https://www.pexels.com/photo/happy-family-sitting-on-a-couch-and-watching-tv-4260643/ |
   | p20 | artwork filmstrip, frame 1 | Young boy painting sea turtles, concentrating | Photo 33997126, Tahir Xəlfəquliyev — https://www.pexels.com/photo/young-boy-engaged-in-creative-painting-activity-33997126/ |
   | p21 | artwork filmstrip, frame 4 | Two children in a bedroom whose walls are covered with their drawings | Photo 6684659, cottonbro studio — https://www.pexels.com/photo/a-boy-pointing-his-finger-on-the-drawing-6684659/ |
   | p22 | letters filmstrip, frame 2 | Hands writing a letter with a dip pen | Photo 6918482, cottonbro studio — https://www.pexels.com/photo/person-writing-on-white-paper-6918482/ |
   | p23 | digitize filmstrip, frame 1 | Old family photo albums opened to black-and-white prints (left spread) | Photo 6274899, Thiago José Amaral — https://www.pexels.com/photo/old-pictures-on-photo-album-6274899/ |
   | p24 | preserve filmstrip, frame 1 | The same albums, right spread | Photo 6274899, Thiago José Amaral — same URL as p23 |

   Considered and rejected by eye: Nilov 8317711 (three-generation studio
   portrait — too posed), RDNE 5637747 (grandfather/granddaughter at a
   marina — subjects sit too low for the 21:9 hero crop), Podrez 8518730
   (notebook sketching — reads as journaling, not letter-writing),
   cottonbro 4009398 (couple watching TV — no children, weaker for movie
   night). No stock video was added: the only video slot in the system is
   the homepage hero, which already runs the site's own footage; the
   movie-night gap was photographic, and its new hero is the couch photo
   above. Re-rendered as the v7 QA series (REPORT.md ship record).
2. **v6 renders: DONE** — see REPORT.md §12 (all 18 pages × 1280 + 390,
   zero overflow/errors/broken images; eyeballed).
