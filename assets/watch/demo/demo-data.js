// Roon interactive demo — baked sample-family data.
// Captured 2026-10-30 (populate-media + go-live bake): throwaway instances of the
// current app server on hermetic COPIES of db.json; real app/data/db.json md5
// 0ebba7678e251db5fd26291b87828d2d verified unchanged before/after. Sample family
// fam_b44fd40e9d36256d3b. Keys are "METHOD path?sortedquery" — 256 keys, all HTTP 200.
// Stage 1 (capture.py): previous-bake key replay + Playwright UI journey.
// Stage 2 (supplement.py): id-dependent keys re-enumerated from the reseeded
// store (all thread details, comments, per-person/per-month feeds, film years).
// Stage 3 (film_thread_supplement.py): film keys with the followed Gardens
// thread as the closing segment (film/<year>?thread=<id>), captured the
// same way, for the Rooney-in-action showcase deep links.
// Bake transforms: "/media/..." URLs rewritten to relative "media/...";
// capture-origin URLs made relative; prompt replyToken fields stripped;
// guest-link token + url fields stripped (signed credentials, same class);
// memory fileRef/originalSrc point at the web rendition (static export
// ships renditions only; originals stay in the real app).
window.ROON_DEMO_DATA = {
 "GET /api/families": {
  "families": [
   {
    "id": "fam_b44fd40e9d36256d3b",
    "name": "Sample Family (Demo)",
    "ownerId": "usr_ab07029fd28b543202",
    "members": [
     {
      "userId": "usr_ab07029fd28b543202",
      "role": "owner",
      "joinedAt": "2026-10-30T13:58:10.808Z",
      "name": "Sample Family (Demo)",
      "email": "sample@roon.example"
     }
    ],
    "plan": "roon",
    "planSelectedAt": "2026-10-30T13:58:10.808Z",
    "billingStatus": "stripe_not_configured",
    "sample": true,
    "createdAt": "2026-10-30T13:58:10.808Z"
   }
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b": {
  "family": {
   "id": "fam_b44fd40e9d36256d3b",
   "name": "Sample Family (Demo)",
   "ownerId": "usr_ab07029fd28b543202",
   "members": [
    {
     "userId": "usr_ab07029fd28b543202",
     "role": "owner",
     "joinedAt": "2026-10-30T13:58:10.808Z",
     "name": "Sample Family (Demo)",
     "email": "sample@roon.example"
    }
   ],
   "plan": "roon",
   "planSelectedAt": "2026-10-30T13:58:10.808Z",
   "billingStatus": "stripe_not_configured",
   "sample": true,
   "createdAt": "2026-10-30T13:58:10.808Z"
  },
  "usage": {
   "counts": {
    "photo": 48,
    "video": 7,
    "voice": 0,
    "writing": 8,
    "total": 63
   },
   "videoMinutes": 2.1,
   "pendingReview": 0,
   "people": 3,
   "contributors": 0,
   "limits": {
    "memories": null,
    "photos": 25000,
    "videoMinutes": 300,
    "people": 8,
    "contributors": 6,
    "cadencePerWeek": null,
    "roomStep": 0,
    "storylines": 3,
    "promptWindowDays": null,
    "yearFilm": true,
    "letters": true
   },
   "internal": {
    "storageBytesUsed": 62389596,
    "storageBytesCap": 214748364800
   },
   "presented": {
    "room": {
     "photosUsed": 48,
     "photosCap": 25000,
     "videoMinutesUsed": 2.1,
     "videoMinutesCap": 300,
     "step": 0
    },
    "storylines": {
     "used": 3,
     "allowed": 3,
     "followedIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ]
    },
    "processing": {
     "state": "caught_up",
     "toldCount": 63,
     "storedCount": 63
    }
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/activity?limit=5": {
  "items": [
   {
    "id": "th:thr_b9e51c83f33adac898",
    "kind": "thread",
    "at": "2026-10-30T20:42:09.043Z",
    "actorUserId": null,
    "actorName": "Rooney",
    "targetType": "thread",
    "targetId": "thr_b9e51c83f33adac898",
    "personId": null,
    "text": "Rooney is following “Gardens, summer after summer”"
   }
  ],
  "total": 1,
  "hasNew": true,
  "seenAt": null,
  "newByPerson": {}
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/billing": {
  "configured": false,
  "billingStatus": "stripe_not_configured",
  "plan": "roon",
  "roomStep": 0,
  "catalog": [
   {
    "sku": "roon_annual",
    "kind": "plan",
    "mode": "subscription",
    "interval": "year",
    "amountCents": 9900,
    "name": "Roon — annual",
    "description": "Roon for one family, billed yearly."
   },
   {
    "sku": "roon_monthly",
    "kind": "plan",
    "mode": "subscription",
    "interval": "month",
    "amountCents": 1200,
    "name": "Roon — monthly",
    "description": "Roon for one family, billed monthly."
   },
   {
    "sku": "forever",
    "kind": "plan",
    "mode": "payment",
    "interval": null,
    "amountCents": 74900,
    "name": "Roon Forever",
    "description": "Everything in Roon, for life. One payment."
   },
   {
    "sku": "forever_founding",
    "kind": "plan",
    "mode": "payment",
    "interval": null,
    "amountCents": 59900,
    "name": "Roon Forever — Founding",
    "description": "Founding cohort pricing, first 200 families only."
   },
   {
    "sku": "room1_annual",
    "kind": "room",
    "mode": "subscription",
    "interval": "year",
    "amountCents": 3000,
    "name": "Room — step 1 (annual)",
    "description": "+25,000 photos and +300 minutes of video room."
   },
   {
    "sku": "room1_monthly",
    "kind": "room",
    "mode": "subscription",
    "interval": "month",
    "amountCents": 300,
    "name": "Room — step 1 (monthly)",
    "description": "+25,000 photos and +300 minutes of video room."
   },
   {
    "sku": "room1_forever",
    "kind": "room",
    "mode": "payment",
    "interval": null,
    "amountCents": 19900,
    "name": "Room — step 1 (Forever block)",
    "description": "+25,000 photos and +300 minutes of video room, for life."
   },
   {
    "sku": "room2_annual",
    "kind": "room",
    "mode": "subscription",
    "interval": "year",
    "amountCents": 8000,
    "name": "More room — step 2 (annual)",
    "description": "+75,000 photos and +900 minutes of video room."
   },
   {
    "sku": "room2_monthly",
    "kind": "room",
    "mode": "subscription",
    "interval": "month",
    "amountCents": 800,
    "name": "More room — step 2 (monthly)",
    "description": "+75,000 photos and +900 minutes of video room."
   },
   {
    "sku": "room2_forever",
    "kind": "room",
    "mode": "payment",
    "interval": null,
    "amountCents": 44900,
    "name": "More room — step 2 (Forever block)",
    "description": "+75,000 photos and +900 minutes of video room, for life."
   },
   {
    "sku": "room3_annual",
    "kind": "room",
    "mode": "subscription",
    "interval": "year",
    "amountCents": 15000,
    "name": "The vault — step 3 (annual)",
    "description": "+200,000 photos and +2,400 minutes of video room."
   },
   {
    "sku": "room3_monthly",
    "kind": "room",
    "mode": "subscription",
    "interval": "month",
    "amountCents": 1500,
    "name": "The vault — step 3 (monthly)",
    "description": "+200,000 photos and +2,400 minutes of video room."
   },
   {
    "sku": "room3_forever",
    "kind": "room",
    "mode": "payment",
    "interval": null,
    "amountCents": 119900,
    "name": "The vault — step 3 (Forever block)",
    "description": "+200,000 photos and +2,400 minutes of video room, for life."
   },
   {
    "sku": "deep_backfill",
    "kind": "addon",
    "mode": "payment",
    "interval": null,
    "amountCents": 1900,
    "name": "Deep Backfill",
    "description": "Rooney tells 2,500 more memories from your backfill."
   },
   {
    "sku": "extra_storyline_annual",
    "kind": "addon",
    "mode": "subscription",
    "interval": "year",
    "amountCents": 2400,
    "name": "+1 followed storyline (annual)",
    "description": "One more person Rooney follows, per year."
   },
   {
    "sku": "extra_storyline_monthly",
    "kind": "addon",
    "mode": "subscription",
    "interval": "month",
    "amountCents": 300,
    "name": "+1 followed storyline (monthly)",
    "description": "One more person Rooney follows, per month."
   },
   {
    "sku": "second_family",
    "kind": "addon",
    "mode": "subscription",
    "interval": "year",
    "amountCents": 4900,
    "name": "A second family (annual)",
    "description": "A second family story, per year."
   },
   {
    "sku": "second_family_monthly",
    "kind": "addon",
    "mode": "subscription",
    "interval": "month",
    "amountCents": 500,
    "name": "A second family (monthly)",
    "description": "A second family story, per month."
   }
  ],
  "checkouts": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/chapters": {
  "chapters": [
   {
    "id": "ch_eae0e5974324e4ac9b",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "The Summer of Gardens",
    "userRenamed": false,
    "startDate": "2021-06-05T15:00:00.000Z",
    "endDate": "2021-06-26T15:00:00.000Z",
    "season": "Summer",
    "year": 2021,
    "narrative": "Between June 5, 2021 and June 26, 2021, your family kept 4 memories here.\nIn these memories: Rooney, Grandma June.\nIn your own words:\n- June 5, 2021: Rooney, three, all curls\n- June 5, 2021: June shows Rooney how peas climb\n- June 12, 2021: Grandma June's garden, first summer\n- June 26, 2021: Tomato rows in Grandma's garden",
    "memoryIds": [
     "mem_54bc7a84815e545002",
     "mem_fc2c9720b282443477",
     "mem_6aa6a2b721b1260593",
     "mem_ec56ae9a061e71a5ab"
    ],
    "order": 0,
    "updatedAt": "2026-10-30T20:42:09.033Z",
    "sample": true
   },
   {
    "id": "ch_8c6dcc897450921238",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "The Spring of Birthdays",
    "userRenamed": false,
    "startDate": "2022-04-09T15:00:00.000Z",
    "endDate": "2022-04-16T15:00:00.000Z",
    "season": "Spring",
    "year": 2022,
    "narrative": "Between April 9, 2022 and April 16, 2022, your family kept 4 memories here.\nIn these memories: Milo, Rooney.\nIn your own words:\n- April 9, 2022: Milo, one and a half, all cheeks\n- April 9, 2022: Sharing the good crayons\n- April 10, 2022: The birthday countdown begins\n- April 16, 2022: Rooney's fourth birthday, the cake with claws",
    "memoryIds": [
     "mem_a371734fd704a21023",
     "mem_2624af56c403e9b350",
     "mem_e401cb50082a7af781",
     "mem_af4b52e146f5edf5f2"
    ],
    "order": 1,
    "updatedAt": "2026-10-30T20:42:09.034Z",
    "sample": true
   },
   {
    "id": "ch_3cbd8d15a369323b3f",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "The Summer of Dinosaurs",
    "userRenamed": false,
    "startDate": "2022-06-11T15:00:00.000Z",
    "endDate": "2022-08-05T15:00:00.000Z",
    "season": "Summer",
    "year": 2022,
    "narrative": "Between June 11, 2022 and August 5, 2022, your family kept 8 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- June 11, 2022: Rooney waters the pavement, calls it rain\n- June 11, 2022: Grandma June braids his curls, very serious work\n- June 15, 2022: First week on the bike, wobbles and all\n- June 18, 2022: First bike, bell and all\n- July 10, 2022: Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.\n- July 22, 2022: Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.\n- July 23, 2022: Rooney and the roaring dinosaur\n- August 5, 2022: Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
    "memoryIds": [
     "mem_2f6e011eab75e67503",
     "mem_cdc89eb41ae2bae21e",
     "mem_187eba5cfff57a4727",
     "mem_5f2a3fed4908bb1434",
     "mem_779944c9856c93722e",
     "mem_ffd7b0dcc8b461d108",
     "mem_18e4fe2a9092efba17",
     "mem_f95372c30d18e170d9"
    ],
    "order": 2,
    "updatedAt": "2026-10-30T20:42:09.034Z",
    "sample": true
   },
   {
    "id": "ch_e78ae78a71ecd79fb9",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "The Spring of Birthdays",
    "userRenamed": false,
    "startDate": "2023-04-08T15:00:00.000Z",
    "endDate": "2023-04-15T15:00:00.000Z",
    "season": "Spring",
    "year": 2023,
    "narrative": "Between April 8, 2023 and April 15, 2023, your family kept 2 memories here.\nIn these memories: Grandma June, Rooney, Milo.\nIn your own words:\n- April 8, 2023: Grandma June's porch, waiting on the spring\n- April 15, 2023: Rooney's birthday, five candles",
    "memoryIds": [
     "mem_12c0caecfb0c0da7de",
     "mem_ca71de709a423445c4"
    ],
    "order": 3,
    "updatedAt": "2026-10-30T20:42:09.035Z",
    "sample": true
   },
   {
    "id": "ch_05fd5c21691271075e",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "The Summer of Dinosaurs",
    "userRenamed": false,
    "startDate": "2023-06-10T15:00:00.000Z",
    "endDate": "2023-07-29T15:00:00.000Z",
    "season": "Summer",
    "year": 2023,
    "narrative": "Between June 10, 2023 and July 29, 2023, your family kept 13 memories here.\nIn these memories: Rooney, Grandma June, Milo.\nIn your own words:\n- June 10, 2023: Rooney on the blue bike, no hands (almost)\n- June 17, 2023: The garden gate, painted blue\n- June 24, 2023: The dinosaur she drew at four, still up\n- June 25, 2023: First ocean trip, straight to the water\n- July 2, 2023: Ocean morning, before the crowds\n- July 8, 2023: Grandma June in the garden, gloves on\n- July 14, 2023: The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.\n- July 14, 2023: Pool afternoon · sample photo\n- July 16, 2023: Toy dinosaurs, lined up by size\n- July 22, 2023: Filming in the park · sample photo\n- July 22, 2023: Park day, filmed · sample video\n- July 29, 2023: Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.\n- July 29, 2023: Cake, approved · sample photo",
    "memoryIds": [
     "mem_639c875daf7b901106",
     "mem_4b70ed96ef67b29f65",
     "mem_7f07a5581eaf9170f5",
     "mem_eef8794db980a7a3b2",
     "mem_408cca4804787ed824",
     "mem_63f222abc7f392d012",
     "mem_3fe0a5b5bacfbd9083",
     "mem_8d8366c4037c349dd7",
     "mem_d9ce759843bca5c265",
     "mem_c6dcc84a9709e00e0f",
     "mem_3f3f0b99d08d3f1a40",
     "mem_054b85eb18d7bb1571",
     "mem_f9cc639af1d983489e"
    ],
    "order": 4,
    "updatedAt": "2026-10-30T20:42:09.036Z",
    "sample": true
   },
   {
    "id": "ch_89039e0101b3cf1b2d",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "Fall 2023 with Milo",
    "userRenamed": false,
    "startDate": "2023-09-02T15:00:00.000Z",
    "endDate": "2023-10-14T15:00:00.000Z",
    "season": "Fall",
    "year": 2023,
    "narrative": "Between September 2, 2023 and October 14, 2023, your family kept 3 memories here.\nIn these memories: Milo, Rooney.\nIn your own words:\n- September 2, 2023: Milo and the biggest leaf\n- September 9, 2023: Milo turns three, cake first\n- October 14, 2023: Pumpkin carving, Milo supervises",
    "memoryIds": [
     "mem_4a762c2bc960377d50",
     "mem_8d9e6c485794b4baed",
     "mem_71e2c7191a75d606a5"
    ],
    "order": 5,
    "updatedAt": "2026-10-30T20:42:09.036Z",
    "sample": true
   },
   {
    "id": "ch_711d7607ba23d13fb0",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "The Winter of Christmas",
    "userRenamed": false,
    "startDate": "2023-12-16T15:00:00.000Z",
    "endDate": "2023-12-25T15:00:00.000Z",
    "season": "Winter",
    "year": 2023,
    "narrative": "Between December 16, 2023 and December 25, 2023, your family kept 2 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- December 16, 2023: The tree goes up, Milo directs\n- December 25, 2023: Christmas morning, matching pajamas",
    "memoryIds": [
     "mem_4e9bdea78284d98733",
     "mem_94fab9ff114312377c"
    ],
    "order": 6,
    "updatedAt": "2026-10-30T20:42:09.037Z",
    "sample": true
   },
   {
    "id": "ch_fc9aa72ed1fd09c617",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "The Spring of Birthdays",
    "userRenamed": false,
    "startDate": "2024-04-06T15:00:00.000Z",
    "endDate": "2024-04-13T15:00:00.000Z",
    "season": "Spring",
    "year": 2024,
    "narrative": "Between April 6, 2024 and April 13, 2024, your family kept 2 memories here.\nIn these memories: Rooney, Grandma June.\nIn your own words:\n- April 6, 2024: Planting peas with Grandma June\n- April 13, 2024: Birthday breakfast in bed for Rooney",
    "memoryIds": [
     "mem_e18ef9b9ba986dc720",
     "mem_6fcc2eced27e195091"
    ],
    "order": 7,
    "updatedAt": "2026-10-30T20:42:09.037Z",
    "sample": true
   },
   {
    "id": "ch_f7ad9c71b08b61d04c",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "The Summer of Dinosaurs",
    "userRenamed": false,
    "startDate": "2024-06-08T15:00:00.000Z",
    "endDate": "2024-08-11T15:00:00.000Z",
    "season": "Summer",
    "year": 2024,
    "narrative": "Between June 8, 2024 and August 11, 2024, your family kept 8 memories here.\nIn these memories: Rooney, Grandma June, Milo.\nIn your own words:\n- June 8, 2024: Rooney's sunflower, taller than her\n- June 15, 2024: Milo waters the garden his own way\n- June 22, 2024: Milo's first bike ride, Rooney running behind\n- July 6, 2024: Face to face with the museum dinosaur\n- July 18, 2024: Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.\n- July 20, 2024: First ocean day, straight into the waves\n- July 27, 2024: The garden, taller than Milo\n- August 11, 2024: Ocean hair, don't care",
    "memoryIds": [
     "mem_70fd69ae3146cad340",
     "mem_01399d6dba81c181c9",
     "mem_46c968b69840a936d2",
     "mem_54cb15e5afe5f95cb0",
     "mem_36ea069addf1fb73e6",
     "mem_dd98fca8eabcf0af64",
     "mem_fb3e71ff2665bb362b",
     "mem_202fb58f4798322320"
    ],
    "order": 8,
    "updatedAt": "2026-10-30T20:42:09.038Z",
    "sample": true
   },
   {
    "id": "ch_3ced39a3685e001a15",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "Fall 2024 with Milo",
    "userRenamed": false,
    "startDate": "2024-09-01T15:00:00.000Z",
    "endDate": "2024-10-30T15:00:00.000Z",
    "season": "Fall",
    "year": 2024,
    "narrative": "Between September 1, 2024 and October 30, 2024, your family kept 3 memories here.\nIn these memories: Milo, Rooney, Grandma June.\nIn your own words:\n- September 1, 2024: First day of preschool for Milo\n- September 7, 2024: Milo's fourth birthday, balloons everywhere\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
    "memoryIds": [
     "mem_4836287c77ee44c79c",
     "mem_74b4de13459ab5e92c",
     "mem_73f2cf5cc2563a5100"
    ],
    "order": 9,
    "updatedAt": "2026-10-30T20:42:09.038Z",
    "sample": true
   },
   {
    "id": "ch_1769fa00b0d12b9042",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "Winter 2024 with Rooney",
    "userRenamed": false,
    "startDate": "2024-12-24T15:00:00.000Z",
    "endDate": "2024-12-24T15:00:00.000Z",
    "season": "Winter",
    "year": 2024,
    "narrative": "Between December 24, 2024 and December 24, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- December 24, 2024: Christmas Eve, cookies for Santa",
    "memoryIds": [
     "mem_f2aab3298ef0e8a8e2"
    ],
    "order": 10,
    "updatedAt": "2026-10-30T20:42:09.038Z",
    "sample": true
   },
   {
    "id": "ch_7aa649f0ff57ad2cb8",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "The Spring of Birthdays",
    "userRenamed": false,
    "startDate": "2025-04-05T15:00:00.000Z",
    "endDate": "2025-04-12T15:00:00.000Z",
    "season": "Spring",
    "year": 2025,
    "narrative": "Between April 5, 2025 and April 12, 2025, your family kept 2 memories here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- April 5, 2025: Rooney reads to the whole class\n- April 12, 2025: Seven: a birthday crown and big plans",
    "memoryIds": [
     "mem_66e690fc8ee0883d1f",
     "mem_2a0a0b17b2d2264708"
    ],
    "order": 11,
    "updatedAt": "2026-10-30T20:42:09.039Z",
    "sample": true
   },
   {
    "id": "ch_0eee7456d81132d561",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "Summer 2025 with Rooney",
    "userRenamed": false,
    "startDate": "2025-06-14T15:00:00.000Z",
    "endDate": "2025-08-16T15:00:00.000Z",
    "season": "Summer",
    "year": 2025,
    "narrative": "Between June 14, 2025 and August 16, 2025, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- June 14, 2025: First splash day of summer\n- June 21, 2025: Grandma's garden, sixth summer\n- July 12, 2025: Two bikes, one summer\n- July 19, 2025: The ocean, one year on\n- August 2, 2025: Pool noodles and big jumps\n- August 16, 2025: Grandma June teaches Rooney to shell peas",
    "memoryIds": [
     "mem_903bad6961b6d2995b",
     "mem_2470198b42e1c9e540",
     "mem_60086cd206cb7bd499",
     "mem_7807b53986c470156f",
     "mem_f454bc241be340cb79",
     "mem_979e2268db43b1f51b"
    ],
    "order": 12,
    "updatedAt": "2026-10-30T20:42:09.039Z",
    "sample": true
   },
   {
    "id": "ch_5c6ef2069c6229d0cd",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "Fall 2025 with Rooney",
    "userRenamed": false,
    "startDate": "2025-09-13T15:00:00.000Z",
    "endDate": "2025-11-15T15:00:00.000Z",
    "season": "Fall",
    "year": 2025,
    "narrative": "Between September 13, 2025 and November 15, 2025, your family kept 5 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- September 13, 2025: Back to school, second grade\n- September 27, 2025: Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.\n- October 5, 2025: Grandma June at the head of the table\n- November 8, 2025: Rooney's first lost tooth\n- November 15, 2025: Milo, five, missing the same one",
    "memoryIds": [
     "mem_f328007bb8e20b0224",
     "mem_6aabc3425a294b31aa",
     "mem_7f2870e0ccda780dba",
     "mem_9384517751ca8103e4",
     "mem_a91f2e4dd0759b6662"
    ],
    "order": 13,
    "updatedAt": "2026-10-30T20:42:09.040Z",
    "sample": true
   }
  ],
  "testRun": false,
  "hiddenChapters": 0
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/collections": {
  "collections": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_05fd5c21691271075e&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_0eee7456d81132d561&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_1769fa00b0d12b9042&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_3cbd8d15a369323b3f&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_3ced39a3685e001a15&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_5c6ef2069c6229d0cd&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_711d7607ba23d13fb0&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_7aa649f0ff57ad2cb8&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_89039e0101b3cf1b2d&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_8c6dcc897450921238&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_e78ae78a71ecd79fb9&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_eae0e5974324e4ac9b&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_f7ad9c71b08b61d04c&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_fc9aa72ed1fd09c617&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_01399d6dba81c181c9&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_054b85eb18d7bb1571&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_12c0caecfb0c0da7de&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_187eba5cfff57a4727&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_18e4fe2a9092efba17&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_202fb58f4798322320&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_2470198b42e1c9e540&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_2624af56c403e9b350&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_2a0a0b17b2d2264708&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_2f6e011eab75e67503&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_36ea069addf1fb73e6&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_3f3f0b99d08d3f1a40&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_3fe0a5b5bacfbd9083&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_408cca4804787ed824&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_46c968b69840a936d2&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_4836287c77ee44c79c&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_4a762c2bc960377d50&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_4b70ed96ef67b29f65&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_4e9bdea78284d98733&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_54bc7a84815e545002&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_54cb15e5afe5f95cb0&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_5f2a3fed4908bb1434&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_60086cd206cb7bd499&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_639c875daf7b901106&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_63f222abc7f392d012&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_66e690fc8ee0883d1f&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_6aa6a2b721b1260593&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_6aabc3425a294b31aa&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_6fcc2eced27e195091&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_70fd69ae3146cad340&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_71e2c7191a75d606a5&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_73f2cf5cc2563a5100&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_74b4de13459ab5e92c&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_779944c9856c93722e&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_7807b53986c470156f&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_7f07a5581eaf9170f5&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_7f2870e0ccda780dba&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_8d8366c4037c349dd7&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_8d9e6c485794b4baed&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_903bad6961b6d2995b&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_9384517751ca8103e4&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_94fab9ff114312377c&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_979e2268db43b1f51b&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_a371734fd704a21023&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_a91f2e4dd0759b6662&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_af4b52e146f5edf5f2&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_c6dcc84a9709e00e0f&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_ca71de709a423445c4&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_cdc89eb41ae2bae21e&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_d9ce759843bca5c265&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_dd98fca8eabcf0af64&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_e18ef9b9ba986dc720&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_e401cb50082a7af781&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_ec56ae9a061e71a5ab&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_eef8794db980a7a3b2&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_f2aab3298ef0e8a8e2&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_f328007bb8e20b0224&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_f454bc241be340cb79&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_f95372c30d18e170d9&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_f9cc639af1d983489e&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_fb3e71ff2665bb362b&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_fc2c9720b282443477&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_ffd7b0dcc8b461d108&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=thr_24016a97a40fba4977&targetType=thread": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=thr_5cd11a25d239b68452&targetType=thread": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=thr_71235f37f565803654&targetType=thread": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=thr_92d123c3127b82360c&targetType=thread": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=thr_a84d50f2e376c2933a&targetType=thread": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=thr_b9e51c83f33adac898&targetType=thread": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=thr_d57a5d3de9b4981b37&targetType=thread": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=thr_fea6feee44751599b9&targetType=thread": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/den-prefs": {
  "autoShareNew": false
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?cursor=MTI=&limit=12&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_979e2268db43b1f51b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
     "poster": null,
     "caption": "Grandma June teaches Rooney to shell peas",
     "storyText": "",
     "takenAt": "2025-08-16T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 16, 2025, with Grandma June and Rooney. Moment 15 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-08-16T15:00:00.000Z",
        "formatted": "August 16, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 15,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_7aa649f0ff57ad2cb8",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2025-04-05T15:00:00.000Z",
     "endDate": "2025-04-12T15:00:00.000Z",
     "season": "Spring",
     "year": 2025,
     "narrative": "Between April 5, 2025 and April 12, 2025, your family kept 2 memories here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- April 5, 2025: Rooney reads to the whole class\n- April 12, 2025: Seven: a birthday crown and big plans",
     "memoryIds": [
      "mem_66e690fc8ee0883d1f",
      "mem_2a0a0b17b2d2264708"
     ],
     "order": 11,
     "updatedAt": "2026-10-30T20:42:09.039Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 5, 2025 to April 12, 2025 and holds 2 memories. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2025-04-05T15:00:00.000Z",
       "endDate": "2025-04-12T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f454bc241be340cb79",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
     "poster": null,
     "caption": "Pool noodles and big jumps",
     "storyText": "",
     "takenAt": "2025-08-02T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 2, 2025, with Milo and Rooney. Moment 25 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-08-02T15:00:00.000Z",
        "formatted": "August 2, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 25,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_7807b53986c470156f",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "poster": null,
     "caption": "The ocean, one year on",
     "storyText": "",
     "takenAt": "2025-07-19T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 19, 2025, with Rooney, Milo and Grandma June. Moment 24 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-07-19T15:00:00.000Z",
        "formatted": "July 19, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 24,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_60086cd206cb7bd499",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
     "poster": null,
     "caption": "Two bikes, one summer",
     "storyText": "",
     "takenAt": "2025-07-12T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 12, 2025, with Rooney and Milo. Moment 23 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-07-12T15:00:00.000Z",
        "formatted": "July 12, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 23,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_1769fa00b0d12b9042",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Winter 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-12-24T15:00:00.000Z",
     "endDate": "2024-12-24T15:00:00.000Z",
     "season": "Winter",
     "year": 2024,
     "narrative": "Between December 24, 2024 and December 24, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- December 24, 2024: Christmas Eve, cookies for Santa",
     "memoryIds": [
      "mem_f2aab3298ef0e8a8e2"
     ],
     "order": 10,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "commentary": {
     "text": "\"Winter 2024 with Rooney\" covers December 24, 2024 to December 24, 2024 and holds 1 memory. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Winter 2024 with Rooney",
       "startDate": "2024-12-24T15:00:00.000Z",
       "endDate": "2024-12-24T15:00:00.000Z",
       "count": 1
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_2470198b42e1c9e540",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
     "poster": null,
     "caption": "Grandma's garden, sixth summer",
     "storyText": "",
     "takenAt": "2025-06-21T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 21, 2025, with Grandma June and Rooney. Moment 7 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-06-21T15:00:00.000Z",
        "formatted": "June 21, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 7,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_903bad6961b6d2995b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
     "poster": null,
     "caption": "First splash day of summer",
     "storyText": "",
     "takenAt": "2025-06-14T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 14, 2025, with Rooney and Milo. Moment 22 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-06-14T15:00:00.000Z",
        "formatted": "June 14, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 22,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_2a0a0b17b2d2264708",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
     "poster": null,
     "caption": "Seven: a birthday crown and big plans",
     "storyText": "",
     "takenAt": "2025-04-12T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 12, 2025, with Rooney and Milo. Moment 21 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-04-12T15:00:00.000Z",
        "formatted": "April 12, 2025",
        "season": "Spring",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 21,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_3ced39a3685e001a15",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Milo",
     "userRenamed": false,
     "startDate": "2024-09-01T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between September 1, 2024 and October 30, 2024, your family kept 3 memories here.\nIn these memories: Milo, Rooney, Grandma June.\nIn your own words:\n- September 1, 2024: First day of preschool for Milo\n- September 7, 2024: Milo's fourth birthday, balloons everywhere\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_4836287c77ee44c79c",
      "mem_74b4de13459ab5e92c",
      "mem_73f2cf5cc2563a5100"
     ],
     "order": 9,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "commentary": {
     "text": "\"Fall 2024 with Milo\" covers September 1, 2024 to October 30, 2024 and holds 3 memories. In these memories: Milo, Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Milo",
       "startDate": "2024-09-01T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 3
      },
      {
       "type": "people",
       "names": [
        "Milo",
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_66e690fc8ee0883d1f",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
     "poster": null,
     "caption": "Rooney reads to the whole class",
     "storyText": "",
     "takenAt": "2025-04-05T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 5, 2025, with Rooney. Memory 1 of 2 in \"The Spring of Birthdays\" (April 5, 2025 to April 12, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-04-05T15:00:00.000Z",
        "formatted": "April 5, 2025",
        "season": "Spring",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "The Spring of Birthdays",
        "position": 1,
        "count": 2,
        "startDate": "2025-04-05T15:00:00.000Z",
        "endDate": "2025-04-12T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f2aab3298ef0e8a8e2",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
     "poster": null,
     "caption": "Christmas Eve, cookies for Santa",
     "storyText": "",
     "takenAt": "2024-12-24T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 24, 2024, with Rooney and Milo. Moment 20 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-12-24T15:00:00.000Z",
        "formatted": "December 24, 2024",
        "season": "Winter",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 20,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": "MjQ=",
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?cursor=MTI=&limit=12&scope=per_04a1327dc4ed158c3c": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_04a1327dc4ed158c3c",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?cursor=MTI=&limit=12&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_1769fa00b0d12b9042",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Winter 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-12-24T15:00:00.000Z",
     "endDate": "2024-12-24T15:00:00.000Z",
     "season": "Winter",
     "year": 2024,
     "narrative": "Between December 24, 2024 and December 24, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- December 24, 2024: Christmas Eve, cookies for Santa",
     "memoryIds": [
      "mem_f2aab3298ef0e8a8e2"
     ],
     "order": 10,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "commentary": {
     "text": "\"Winter 2024 with Rooney\" covers December 24, 2024 to December 24, 2024 and holds 1 memory. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Winter 2024 with Rooney",
       "startDate": "2024-12-24T15:00:00.000Z",
       "endDate": "2024-12-24T15:00:00.000Z",
       "count": 1
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f2aab3298ef0e8a8e2",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
     "poster": null,
     "caption": "Christmas Eve, cookies for Santa",
     "storyText": "",
     "takenAt": "2024-12-24T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 24, 2024, with Rooney and Milo. Moment 20 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-12-24T15:00:00.000Z",
        "formatted": "December 24, 2024",
        "season": "Winter",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 20,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_3ced39a3685e001a15",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Milo",
     "userRenamed": false,
     "startDate": "2024-09-01T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between September 1, 2024 and October 30, 2024, your family kept 3 memories here.\nIn these memories: Milo, Rooney, Grandma June.\nIn your own words:\n- September 1, 2024: First day of preschool for Milo\n- September 7, 2024: Milo's fourth birthday, balloons everywhere\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_4836287c77ee44c79c",
      "mem_74b4de13459ab5e92c",
      "mem_73f2cf5cc2563a5100"
     ],
     "order": 9,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "commentary": {
     "text": "\"Fall 2024 with Milo\" covers September 1, 2024 to October 30, 2024 and holds 3 memories. In these memories: Milo, Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Milo",
       "startDate": "2024-09-01T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 3
      },
      {
       "type": "people",
       "names": [
        "Milo",
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_74b4de13459ab5e92c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
     "poster": null,
     "caption": "Milo's fourth birthday, balloons everywhere",
     "storyText": "",
     "takenAt": "2024-09-07T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 7, 2024, with Milo, Rooney and Grandma June. Moment 18 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-09-07T15:00:00.000Z",
        "formatted": "September 7, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 18,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_4836287c77ee44c79c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
     "poster": null,
     "caption": "First day of preschool for Milo",
     "storyText": "",
     "takenAt": "2024-09-01T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 1, 2024, with Milo. Memory 1 of 3 in \"Fall 2024 with Milo\" (September 1, 2024 to October 30, 2024).",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-09-01T15:00:00.000Z",
        "formatted": "September 1, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2024 with Milo",
        "position": 1,
        "count": 3,
        "startDate": "2024-09-01T15:00:00.000Z",
        "endDate": "2024-10-30T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_f7ad9c71b08b61d04c",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Dinosaurs",
     "userRenamed": false,
     "startDate": "2024-06-08T15:00:00.000Z",
     "endDate": "2024-08-11T15:00:00.000Z",
     "season": "Summer",
     "year": 2024,
     "narrative": "Between June 8, 2024 and August 11, 2024, your family kept 8 memories here.\nIn these memories: Rooney, Grandma June, Milo.\nIn your own words:\n- June 8, 2024: Rooney's sunflower, taller than her\n- June 15, 2024: Milo waters the garden his own way\n- June 22, 2024: Milo's first bike ride, Rooney running behind\n- July 6, 2024: Face to face with the museum dinosaur\n- July 18, 2024: Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.\n- July 20, 2024: First ocean day, straight into the waves\n- July 27, 2024: The garden, taller than Milo\n- August 11, 2024: Ocean hair, don't care",
     "memoryIds": [
      "mem_70fd69ae3146cad340",
      "mem_01399d6dba81c181c9",
      "mem_46c968b69840a936d2",
      "mem_54cb15e5afe5f95cb0",
      "mem_36ea069addf1fb73e6",
      "mem_dd98fca8eabcf0af64",
      "mem_fb3e71ff2665bb362b",
      "mem_202fb58f4798322320"
     ],
     "order": 8,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
    "commentary": {
     "text": "\"The Summer of Dinosaurs\" covers June 8, 2024 to August 11, 2024 and holds 8 memories. In these memories: Rooney, Grandma June and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Dinosaurs",
       "startDate": "2024-06-08T15:00:00.000Z",
       "endDate": "2024-08-11T15:00:00.000Z",
       "count": 8
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_fb3e71ff2665bb362b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
     "poster": null,
     "caption": "The garden, taller than Milo",
     "storyText": "",
     "takenAt": "2024-07-27T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 27, 2024, with Grandma June, Milo and Rooney. Moment 6 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-27T15:00:00.000Z",
        "formatted": "July 27, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 6,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_dd98fca8eabcf0af64",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
     "poster": null,
     "caption": "First ocean day, straight into the waves",
     "storyText": "",
     "takenAt": "2024-07-20T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 20, 2024, with Rooney and Milo. Moment 16 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-20T15:00:00.000Z",
        "formatted": "July 20, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 16,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_36ea069addf1fb73e6",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Three summers of dinosaurs",
     "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "takenAt": "2024-07-18T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 18, 2024, with Rooney and Milo. Moment 15 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-18T15:00:00.000Z",
        "formatted": "July 18, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 15,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_711d7607ba23d13fb0",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Winter of Christmas",
     "userRenamed": false,
     "startDate": "2023-12-16T15:00:00.000Z",
     "endDate": "2023-12-25T15:00:00.000Z",
     "season": "Winter",
     "year": 2023,
     "narrative": "Between December 16, 2023 and December 25, 2023, your family kept 2 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- December 16, 2023: The tree goes up, Milo directs\n- December 25, 2023: Christmas morning, matching pajamas",
     "memoryIds": [
      "mem_4e9bdea78284d98733",
      "mem_94fab9ff114312377c"
     ],
     "order": 6,
     "updatedAt": "2026-10-30T20:42:09.037Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "commentary": {
     "text": "\"The Winter of Christmas\" covers December 16, 2023 to December 25, 2023 and holds 2 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Winter of Christmas",
       "startDate": "2023-12-16T15:00:00.000Z",
       "endDate": "2023-12-25T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_54cb15e5afe5f95cb0",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
     "poster": null,
     "caption": "Face to face with the museum dinosaur",
     "storyText": "",
     "takenAt": "2024-07-06T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 6, 2024, with Rooney and Milo. Moment 14 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-06T15:00:00.000Z",
        "formatted": "July 6, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 14,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_46c968b69840a936d2",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-poster.jpg",
     "caption": "Milo's first bike ride, Rooney running behind",
     "storyText": "",
     "takenAt": "2024-06-22T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": 15,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from June 22, 2024, with Milo and Rooney. Moment 13 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-06-22T15:00:00.000Z",
        "formatted": "June 22, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 13,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": "MjQ=",
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?cursor=MTI=&limit=12&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_903bad6961b6d2995b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
     "poster": null,
     "caption": "First splash day of summer",
     "storyText": "",
     "takenAt": "2025-06-14T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 14, 2025, with Rooney and Milo. Moment 22 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-06-14T15:00:00.000Z",
        "formatted": "June 14, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 22,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_1769fa00b0d12b9042",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Winter 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-12-24T15:00:00.000Z",
     "endDate": "2024-12-24T15:00:00.000Z",
     "season": "Winter",
     "year": 2024,
     "narrative": "Between December 24, 2024 and December 24, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- December 24, 2024: Christmas Eve, cookies for Santa",
     "memoryIds": [
      "mem_f2aab3298ef0e8a8e2"
     ],
     "order": 10,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "commentary": {
     "text": "\"Winter 2024 with Rooney\" covers December 24, 2024 to December 24, 2024 and holds 1 memory. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Winter 2024 with Rooney",
       "startDate": "2024-12-24T15:00:00.000Z",
       "endDate": "2024-12-24T15:00:00.000Z",
       "count": 1
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_2a0a0b17b2d2264708",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
     "poster": null,
     "caption": "Seven: a birthday crown and big plans",
     "storyText": "",
     "takenAt": "2025-04-12T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 12, 2025, with Rooney and Milo. Moment 21 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-04-12T15:00:00.000Z",
        "formatted": "April 12, 2025",
        "season": "Spring",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 21,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_66e690fc8ee0883d1f",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
     "poster": null,
     "caption": "Rooney reads to the whole class",
     "storyText": "",
     "takenAt": "2025-04-05T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 5, 2025, with Rooney. Memory 1 of 2 in \"The Spring of Birthdays\" (April 5, 2025 to April 12, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-04-05T15:00:00.000Z",
        "formatted": "April 5, 2025",
        "season": "Spring",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "The Spring of Birthdays",
        "position": 1,
        "count": 2,
        "startDate": "2025-04-05T15:00:00.000Z",
        "endDate": "2025-04-12T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f2aab3298ef0e8a8e2",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
     "poster": null,
     "caption": "Christmas Eve, cookies for Santa",
     "storyText": "",
     "takenAt": "2024-12-24T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 24, 2024, with Rooney and Milo. Moment 20 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-12-24T15:00:00.000Z",
        "formatted": "December 24, 2024",
        "season": "Winter",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 20,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_3ced39a3685e001a15",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Milo",
     "userRenamed": false,
     "startDate": "2024-09-01T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between September 1, 2024 and October 30, 2024, your family kept 3 memories here.\nIn these memories: Milo, Rooney, Grandma June.\nIn your own words:\n- September 1, 2024: First day of preschool for Milo\n- September 7, 2024: Milo's fourth birthday, balloons everywhere\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_4836287c77ee44c79c",
      "mem_74b4de13459ab5e92c",
      "mem_73f2cf5cc2563a5100"
     ],
     "order": 9,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "commentary": {
     "text": "\"Fall 2024 with Milo\" covers September 1, 2024 to October 30, 2024 and holds 3 memories. In these memories: Milo, Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Milo",
       "startDate": "2024-09-01T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 3
      },
      {
       "type": "people",
       "names": [
        "Milo",
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_74b4de13459ab5e92c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
     "poster": null,
     "caption": "Milo's fourth birthday, balloons everywhere",
     "storyText": "",
     "takenAt": "2024-09-07T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 7, 2024, with Milo, Rooney and Grandma June. Moment 18 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-09-07T15:00:00.000Z",
        "formatted": "September 7, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 18,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_f7ad9c71b08b61d04c",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Dinosaurs",
     "userRenamed": false,
     "startDate": "2024-06-08T15:00:00.000Z",
     "endDate": "2024-08-11T15:00:00.000Z",
     "season": "Summer",
     "year": 2024,
     "narrative": "Between June 8, 2024 and August 11, 2024, your family kept 8 memories here.\nIn these memories: Rooney, Grandma June, Milo.\nIn your own words:\n- June 8, 2024: Rooney's sunflower, taller than her\n- June 15, 2024: Milo waters the garden his own way\n- June 22, 2024: Milo's first bike ride, Rooney running behind\n- July 6, 2024: Face to face with the museum dinosaur\n- July 18, 2024: Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.\n- July 20, 2024: First ocean day, straight into the waves\n- July 27, 2024: The garden, taller than Milo\n- August 11, 2024: Ocean hair, don't care",
     "memoryIds": [
      "mem_70fd69ae3146cad340",
      "mem_01399d6dba81c181c9",
      "mem_46c968b69840a936d2",
      "mem_54cb15e5afe5f95cb0",
      "mem_36ea069addf1fb73e6",
      "mem_dd98fca8eabcf0af64",
      "mem_fb3e71ff2665bb362b",
      "mem_202fb58f4798322320"
     ],
     "order": 8,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
    "commentary": {
     "text": "\"The Summer of Dinosaurs\" covers June 8, 2024 to August 11, 2024 and holds 8 memories. In these memories: Rooney, Grandma June and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Dinosaurs",
       "startDate": "2024-06-08T15:00:00.000Z",
       "endDate": "2024-08-11T15:00:00.000Z",
       "count": 8
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_202fb58f4798322320",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
     "poster": null,
     "caption": "Ocean hair, don't care",
     "storyText": "",
     "takenAt": "2024-08-11T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 11, 2024, with Rooney. Moment 4 of 5 in the thread \"Oceans, summer after summer\", which runs from 2023 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-08-11T15:00:00.000Z",
        "formatted": "August 11, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Oceans, summer after summer",
        "position": 4,
        "count": 5,
        "fromYear": 2023,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_fb3e71ff2665bb362b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
     "poster": null,
     "caption": "The garden, taller than Milo",
     "storyText": "",
     "takenAt": "2024-07-27T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 27, 2024, with Grandma June, Milo and Rooney. Moment 6 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-27T15:00:00.000Z",
        "formatted": "July 27, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 6,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_dd98fca8eabcf0af64",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
     "poster": null,
     "caption": "First ocean day, straight into the waves",
     "storyText": "",
     "takenAt": "2024-07-20T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 20, 2024, with Rooney and Milo. Moment 16 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-20T15:00:00.000Z",
        "formatted": "July 20, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 16,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_fc9aa72ed1fd09c617",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2024-04-06T15:00:00.000Z",
     "endDate": "2024-04-13T15:00:00.000Z",
     "season": "Spring",
     "year": 2024,
     "narrative": "Between April 6, 2024 and April 13, 2024, your family kept 2 memories here.\nIn these memories: Rooney, Grandma June.\nIn your own words:\n- April 6, 2024: Planting peas with Grandma June\n- April 13, 2024: Birthday breakfast in bed for Rooney",
     "memoryIds": [
      "mem_e18ef9b9ba986dc720",
      "mem_6fcc2eced27e195091"
     ],
     "order": 7,
     "updatedAt": "2026-10-30T20:42:09.037Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 6, 2024 to April 13, 2024 and holds 2 memories. In these memories: Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2024-04-06T15:00:00.000Z",
       "endDate": "2024-04-13T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   }
  ],
  "nextCursor": "MjQ=",
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?cursor=MTI=&limit=12&scope=per_aa070d4d417e870984": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aa070d4d417e870984",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?cursor=MTI=&limit=12&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_e18ef9b9ba986dc720",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
     "poster": null,
     "caption": "Planting peas with Grandma June",
     "storyText": "",
     "takenAt": "2024-04-06T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 6, 2024, with Rooney and Grandma June. Moment 9 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-04-06T15:00:00.000Z",
        "formatted": "April 6, 2024",
        "season": "Spring",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 9,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_711d7607ba23d13fb0",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Winter of Christmas",
     "userRenamed": false,
     "startDate": "2023-12-16T15:00:00.000Z",
     "endDate": "2023-12-25T15:00:00.000Z",
     "season": "Winter",
     "year": 2023,
     "narrative": "Between December 16, 2023 and December 25, 2023, your family kept 2 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- December 16, 2023: The tree goes up, Milo directs\n- December 25, 2023: Christmas morning, matching pajamas",
     "memoryIds": [
      "mem_4e9bdea78284d98733",
      "mem_94fab9ff114312377c"
     ],
     "order": 6,
     "updatedAt": "2026-10-30T20:42:09.037Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "commentary": {
     "text": "\"The Winter of Christmas\" covers December 16, 2023 to December 25, 2023 and holds 2 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Winter of Christmas",
       "startDate": "2023-12-16T15:00:00.000Z",
       "endDate": "2023-12-25T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_94fab9ff114312377c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
     "poster": null,
     "caption": "Christmas morning, matching pajamas",
     "storyText": "",
     "takenAt": "2023-12-25T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 25, 2023, with Rooney, Milo and Grandma June. Moment 12 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-12-25T15:00:00.000Z",
        "formatted": "December 25, 2023",
        "season": "Winter",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 12,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_4e9bdea78284d98733",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
     "poster": null,
     "caption": "The tree goes up, Milo directs",
     "storyText": "",
     "takenAt": "2023-12-16T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 16, 2023, with Rooney, Milo and Grandma June. Moment 11 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-12-16T15:00:00.000Z",
        "formatted": "December 16, 2023",
        "season": "Winter",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 11,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_054b85eb18d7bb1571",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur cake",
     "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 29, 2023, with Rooney and Grandma June. Moment 6 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-29T15:00:00.000Z",
        "formatted": "July 29, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 6,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_e78ae78a71ecd79fb9",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2023-04-08T15:00:00.000Z",
     "endDate": "2023-04-15T15:00:00.000Z",
     "season": "Spring",
     "year": 2023,
     "narrative": "Between April 8, 2023 and April 15, 2023, your family kept 2 memories here.\nIn these memories: Grandma June, Rooney, Milo.\nIn your own words:\n- April 8, 2023: Grandma June's porch, waiting on the spring\n- April 15, 2023: Rooney's birthday, five candles",
     "memoryIds": [
      "mem_12c0caecfb0c0da7de",
      "mem_ca71de709a423445c4"
     ],
     "order": 3,
     "updatedAt": "2026-10-30T20:42:09.035Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 8, 2023 to April 15, 2023 and holds 2 memories. In these memories: Grandma June, Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2023-04-08T15:00:00.000Z",
       "endDate": "2023-04-15T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Grandma June",
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_63f222abc7f392d012",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
     "poster": null,
     "caption": "Grandma June in the garden, gloves on",
     "storyText": "",
     "takenAt": "2023-07-08T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 8, 2023, with Grandma June and Rooney. Moment 4 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-08T15:00:00.000Z",
        "formatted": "July 8, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 4,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_408cca4804787ed824",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
     "poster": null,
     "caption": "Ocean morning, before the crowds",
     "storyText": "",
     "takenAt": "2023-07-02T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 2, 2023, with Grandma June and Rooney. Moment 4 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-02T15:00:00.000Z",
        "formatted": "July 2, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 4,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_4b70ed96ef67b29f65",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
     "poster": null,
     "caption": "The garden gate, painted blue",
     "storyText": "",
     "takenAt": "2023-06-17T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 17, 2023, with Grandma June. Moment 3 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-06-17T15:00:00.000Z",
        "formatted": "June 17, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 3,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_eae0e5974324e4ac9b",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Gardens",
     "userRenamed": false,
     "startDate": "2021-06-05T15:00:00.000Z",
     "endDate": "2021-06-26T15:00:00.000Z",
     "season": "Summer",
     "year": 2021,
     "narrative": "Between June 5, 2021 and June 26, 2021, your family kept 4 memories here.\nIn these memories: Rooney, Grandma June.\nIn your own words:\n- June 5, 2021: Rooney, three, all curls\n- June 5, 2021: June shows Rooney how peas climb\n- June 12, 2021: Grandma June's garden, first summer\n- June 26, 2021: Tomato rows in Grandma's garden",
     "memoryIds": [
      "mem_54bc7a84815e545002",
      "mem_fc2c9720b282443477",
      "mem_6aa6a2b721b1260593",
      "mem_ec56ae9a061e71a5ab"
     ],
     "order": 0,
     "updatedAt": "2026-10-30T20:42:09.033Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
    "commentary": {
     "text": "\"The Summer of Gardens\" covers June 5, 2021 to June 26, 2021 and holds 4 memories. In these memories: Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Gardens",
       "startDate": "2021-06-05T15:00:00.000Z",
       "endDate": "2021-06-26T15:00:00.000Z",
       "count": 4
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_ca71de709a423445c4",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
     "poster": null,
     "caption": "Rooney's birthday, five candles",
     "storyText": "",
     "takenAt": "2023-04-15T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 15, 2023, with Rooney, Milo and Grandma June. Moment 3 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-04-15T15:00:00.000Z",
        "formatted": "April 15, 2023",
        "season": "Spring",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 3,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_12c0caecfb0c0da7de",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
     "poster": null,
     "caption": "Grandma June's porch, waiting on the spring",
     "storyText": "",
     "takenAt": "2023-04-08T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 8, 2023, with Grandma June and Rooney. Moment 2 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-04-08T15:00:00.000Z",
        "formatted": "April 8, 2023",
        "season": "Spring",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 2,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": "MjQ=",
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2021-06&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_eae0e5974324e4ac9b",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Gardens",
     "userRenamed": false,
     "startDate": "2021-06-05T15:00:00.000Z",
     "endDate": "2021-06-26T15:00:00.000Z",
     "season": "Summer",
     "year": 2021,
     "narrative": "Between June 5, 2021 and June 26, 2021, your family kept 4 memories here.\nIn these memories: Rooney, Grandma June.\nIn your own words:\n- June 5, 2021: Rooney, three, all curls\n- June 5, 2021: June shows Rooney how peas climb\n- June 12, 2021: Grandma June's garden, first summer\n- June 26, 2021: Tomato rows in Grandma's garden",
     "memoryIds": [
      "mem_54bc7a84815e545002",
      "mem_fc2c9720b282443477",
      "mem_6aa6a2b721b1260593",
      "mem_ec56ae9a061e71a5ab"
     ],
     "order": 0,
     "updatedAt": "2026-10-30T20:42:09.033Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
    "commentary": {
     "text": "\"The Summer of Gardens\" covers June 5, 2021 to June 26, 2021 and holds 4 memories. In these memories: Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Gardens",
       "startDate": "2021-06-05T15:00:00.000Z",
       "endDate": "2021-06-26T15:00:00.000Z",
       "count": 4
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_ec56ae9a061e71a5ab",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
     "poster": null,
     "caption": "Tomato rows in Grandma's garden",
     "storyText": "",
     "takenAt": "2021-06-26T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 26, 2021, with Grandma June. Moment 2 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2021-06-26T15:00:00.000Z",
        "formatted": "June 26, 2021",
        "season": "Summer",
        "year": 2021
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 2,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_6aa6a2b721b1260593",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-poster.jpg",
     "caption": "Grandma June's garden, first summer",
     "storyText": "",
     "takenAt": "2021-06-12T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": 34.1,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from June 12, 2021, with Grandma June. Moment 1 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2021-06-12T15:00:00.000Z",
        "formatted": "June 12, 2021",
        "season": "Summer",
        "year": 2021
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 1,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_54bc7a84815e545002",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
     "poster": null,
     "caption": "Rooney, three, all curls",
     "storyText": "",
     "takenAt": "2021-06-05T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 5, 2021, with Rooney. Memory 1 of 4 in \"The Summer of Gardens\" (June 5, 2021 to June 26, 2021).",
      "basedOn": [
       {
        "type": "date",
        "value": "2021-06-05T15:00:00.000Z",
        "formatted": "June 5, 2021",
        "season": "Summer",
        "year": 2021
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "The Summer of Gardens",
        "position": 1,
        "count": 4,
        "startDate": "2021-06-05T15:00:00.000Z",
        "endDate": "2021-06-26T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_fc2c9720b282443477",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
     "poster": null,
     "caption": "June shows Rooney how peas climb",
     "storyText": "",
     "takenAt": "2021-06-05T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 5, 2021, with Grandma June and Rooney. Moment 1 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2021-06-05T15:00:00.000Z",
        "formatted": "June 5, 2021",
        "season": "Summer",
        "year": 2021
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 1,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2021-06&scope=per_1c03ef455d57eb3eb6": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2021-06&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_eae0e5974324e4ac9b",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Gardens",
     "userRenamed": false,
     "startDate": "2021-06-05T15:00:00.000Z",
     "endDate": "2021-06-26T15:00:00.000Z",
     "season": "Summer",
     "year": 2021,
     "narrative": "Between June 5, 2021 and June 26, 2021, your family kept 4 memories here.\nIn these memories: Rooney, Grandma June.\nIn your own words:\n- June 5, 2021: Rooney, three, all curls\n- June 5, 2021: June shows Rooney how peas climb\n- June 12, 2021: Grandma June's garden, first summer\n- June 26, 2021: Tomato rows in Grandma's garden",
     "memoryIds": [
      "mem_54bc7a84815e545002",
      "mem_fc2c9720b282443477",
      "mem_6aa6a2b721b1260593",
      "mem_ec56ae9a061e71a5ab"
     ],
     "order": 0,
     "updatedAt": "2026-10-30T20:42:09.033Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
    "commentary": {
     "text": "\"The Summer of Gardens\" covers June 5, 2021 to June 26, 2021 and holds 4 memories. In these memories: Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Gardens",
       "startDate": "2021-06-05T15:00:00.000Z",
       "endDate": "2021-06-26T15:00:00.000Z",
       "count": 4
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_54bc7a84815e545002",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
     "poster": null,
     "caption": "Rooney, three, all curls",
     "storyText": "",
     "takenAt": "2021-06-05T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 5, 2021, with Rooney. Memory 1 of 4 in \"The Summer of Gardens\" (June 5, 2021 to June 26, 2021).",
      "basedOn": [
       {
        "type": "date",
        "value": "2021-06-05T15:00:00.000Z",
        "formatted": "June 5, 2021",
        "season": "Summer",
        "year": 2021
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "The Summer of Gardens",
        "position": 1,
        "count": 4,
        "startDate": "2021-06-05T15:00:00.000Z",
        "endDate": "2021-06-26T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_fc2c9720b282443477",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
     "poster": null,
     "caption": "June shows Rooney how peas climb",
     "storyText": "",
     "takenAt": "2021-06-05T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 5, 2021, with Grandma June and Rooney. Moment 1 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2021-06-05T15:00:00.000Z",
        "formatted": "June 5, 2021",
        "season": "Summer",
        "year": 2021
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 1,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2021-06&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_eae0e5974324e4ac9b",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Gardens",
     "userRenamed": false,
     "startDate": "2021-06-05T15:00:00.000Z",
     "endDate": "2021-06-26T15:00:00.000Z",
     "season": "Summer",
     "year": 2021,
     "narrative": "Between June 5, 2021 and June 26, 2021, your family kept 4 memories here.\nIn these memories: Rooney, Grandma June.\nIn your own words:\n- June 5, 2021: Rooney, three, all curls\n- June 5, 2021: June shows Rooney how peas climb\n- June 12, 2021: Grandma June's garden, first summer\n- June 26, 2021: Tomato rows in Grandma's garden",
     "memoryIds": [
      "mem_54bc7a84815e545002",
      "mem_fc2c9720b282443477",
      "mem_6aa6a2b721b1260593",
      "mem_ec56ae9a061e71a5ab"
     ],
     "order": 0,
     "updatedAt": "2026-10-30T20:42:09.033Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
    "commentary": {
     "text": "\"The Summer of Gardens\" covers June 5, 2021 to June 26, 2021 and holds 4 memories. In these memories: Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Gardens",
       "startDate": "2021-06-05T15:00:00.000Z",
       "endDate": "2021-06-26T15:00:00.000Z",
       "count": 4
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_ec56ae9a061e71a5ab",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
     "poster": null,
     "caption": "Tomato rows in Grandma's garden",
     "storyText": "",
     "takenAt": "2021-06-26T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 26, 2021, with Grandma June. Moment 2 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2021-06-26T15:00:00.000Z",
        "formatted": "June 26, 2021",
        "season": "Summer",
        "year": 2021
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 2,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_6aa6a2b721b1260593",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-poster.jpg",
     "caption": "Grandma June's garden, first summer",
     "storyText": "",
     "takenAt": "2021-06-12T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": 34.1,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from June 12, 2021, with Grandma June. Moment 1 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2021-06-12T15:00:00.000Z",
        "formatted": "June 12, 2021",
        "season": "Summer",
        "year": 2021
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 1,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_fc2c9720b282443477",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
     "poster": null,
     "caption": "June shows Rooney how peas climb",
     "storyText": "",
     "takenAt": "2021-06-05T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 5, 2021, with Grandma June and Rooney. Moment 1 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2021-06-05T15:00:00.000Z",
        "formatted": "June 5, 2021",
        "season": "Summer",
        "year": 2021
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 1,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-04&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_8c6dcc897450921238",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2022-04-09T15:00:00.000Z",
     "endDate": "2022-04-16T15:00:00.000Z",
     "season": "Spring",
     "year": 2022,
     "narrative": "Between April 9, 2022 and April 16, 2022, your family kept 4 memories here.\nIn these memories: Milo, Rooney.\nIn your own words:\n- April 9, 2022: Milo, one and a half, all cheeks\n- April 9, 2022: Sharing the good crayons\n- April 10, 2022: The birthday countdown begins\n- April 16, 2022: Rooney's fourth birthday, the cake with claws",
     "memoryIds": [
      "mem_a371734fd704a21023",
      "mem_2624af56c403e9b350",
      "mem_e401cb50082a7af781",
      "mem_af4b52e146f5edf5f2"
     ],
     "order": 1,
     "updatedAt": "2026-10-30T20:42:09.034Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 9, 2022 to April 16, 2022 and holds 4 memories. In these memories: Milo and Rooney.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2022-04-09T15:00:00.000Z",
       "endDate": "2022-04-16T15:00:00.000Z",
       "count": 4
      },
      {
       "type": "people",
       "names": [
        "Milo",
        "Rooney"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_af4b52e146f5edf5f2",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_af4b52e146f5edf5f2-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_af4b52e146f5edf5f2-web.jpg",
     "poster": null,
     "caption": "Rooney's fourth birthday, the cake with claws",
     "storyText": "",
     "takenAt": "2022-04-16T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 16, 2022, with Rooney. Moment 2 of 6 in the thread \"Birthdays, spring after spring\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-04-16T15:00:00.000Z",
        "formatted": "April 16, 2022",
        "season": "Spring",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Birthdays, spring after spring",
        "position": 2,
        "count": 6,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_e401cb50082a7af781",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-view.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-poster.jpg",
     "caption": "The birthday countdown begins",
     "storyText": "",
     "takenAt": "2022-04-10T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": 11.8,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from April 10, 2022, with Rooney. Moment 1 of 6 in the thread \"Birthdays, spring after spring\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-04-10T15:00:00.000Z",
        "formatted": "April 10, 2022",
        "season": "Spring",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Birthdays, spring after spring",
        "position": 1,
        "count": 6,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_2624af56c403e9b350",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
     "poster": null,
     "caption": "Sharing the good crayons",
     "storyText": "",
     "takenAt": "2022-04-09T16:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 9, 2022, with Rooney and Milo. Moment 1 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-04-09T16:00:00.000Z",
        "formatted": "April 9, 2022",
        "season": "Spring",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 1,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_a371734fd704a21023",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
     "poster": null,
     "caption": "Milo, one and a half, all cheeks",
     "storyText": "",
     "takenAt": "2022-04-09T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 9, 2022, with Milo. Memory 1 of 4 in \"The Spring of Birthdays\" (April 9, 2022 to April 16, 2022).",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-04-09T15:00:00.000Z",
        "formatted": "April 9, 2022",
        "season": "Spring",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo"
        ]
       },
       {
        "type": "chapter",
        "title": "The Spring of Birthdays",
        "position": 1,
        "count": 4,
        "startDate": "2022-04-09T15:00:00.000Z",
        "endDate": "2022-04-16T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-04&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_8c6dcc897450921238",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2022-04-09T15:00:00.000Z",
     "endDate": "2022-04-16T15:00:00.000Z",
     "season": "Spring",
     "year": 2022,
     "narrative": "Between April 9, 2022 and April 16, 2022, your family kept 4 memories here.\nIn these memories: Milo, Rooney.\nIn your own words:\n- April 9, 2022: Milo, one and a half, all cheeks\n- April 9, 2022: Sharing the good crayons\n- April 10, 2022: The birthday countdown begins\n- April 16, 2022: Rooney's fourth birthday, the cake with claws",
     "memoryIds": [
      "mem_a371734fd704a21023",
      "mem_2624af56c403e9b350",
      "mem_e401cb50082a7af781",
      "mem_af4b52e146f5edf5f2"
     ],
     "order": 1,
     "updatedAt": "2026-10-30T20:42:09.034Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 9, 2022 to April 16, 2022 and holds 4 memories. In these memories: Milo and Rooney.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2022-04-09T15:00:00.000Z",
       "endDate": "2022-04-16T15:00:00.000Z",
       "count": 4
      },
      {
       "type": "people",
       "names": [
        "Milo",
        "Rooney"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_2624af56c403e9b350",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
     "poster": null,
     "caption": "Sharing the good crayons",
     "storyText": "",
     "takenAt": "2022-04-09T16:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 9, 2022, with Rooney and Milo. Moment 1 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-04-09T16:00:00.000Z",
        "formatted": "April 9, 2022",
        "season": "Spring",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 1,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_a371734fd704a21023",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
     "poster": null,
     "caption": "Milo, one and a half, all cheeks",
     "storyText": "",
     "takenAt": "2022-04-09T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 9, 2022, with Milo. Memory 1 of 4 in \"The Spring of Birthdays\" (April 9, 2022 to April 16, 2022).",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-04-09T15:00:00.000Z",
        "formatted": "April 9, 2022",
        "season": "Spring",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo"
        ]
       },
       {
        "type": "chapter",
        "title": "The Spring of Birthdays",
        "position": 1,
        "count": 4,
        "startDate": "2022-04-09T15:00:00.000Z",
        "endDate": "2022-04-16T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-04&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_8c6dcc897450921238",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2022-04-09T15:00:00.000Z",
     "endDate": "2022-04-16T15:00:00.000Z",
     "season": "Spring",
     "year": 2022,
     "narrative": "Between April 9, 2022 and April 16, 2022, your family kept 4 memories here.\nIn these memories: Milo, Rooney.\nIn your own words:\n- April 9, 2022: Milo, one and a half, all cheeks\n- April 9, 2022: Sharing the good crayons\n- April 10, 2022: The birthday countdown begins\n- April 16, 2022: Rooney's fourth birthday, the cake with claws",
     "memoryIds": [
      "mem_a371734fd704a21023",
      "mem_2624af56c403e9b350",
      "mem_e401cb50082a7af781",
      "mem_af4b52e146f5edf5f2"
     ],
     "order": 1,
     "updatedAt": "2026-10-30T20:42:09.034Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 9, 2022 to April 16, 2022 and holds 4 memories. In these memories: Milo and Rooney.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2022-04-09T15:00:00.000Z",
       "endDate": "2022-04-16T15:00:00.000Z",
       "count": 4
      },
      {
       "type": "people",
       "names": [
        "Milo",
        "Rooney"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_af4b52e146f5edf5f2",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_af4b52e146f5edf5f2-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_af4b52e146f5edf5f2-web.jpg",
     "poster": null,
     "caption": "Rooney's fourth birthday, the cake with claws",
     "storyText": "",
     "takenAt": "2022-04-16T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 16, 2022, with Rooney. Moment 2 of 6 in the thread \"Birthdays, spring after spring\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-04-16T15:00:00.000Z",
        "formatted": "April 16, 2022",
        "season": "Spring",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Birthdays, spring after spring",
        "position": 2,
        "count": 6,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_e401cb50082a7af781",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-view.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-poster.jpg",
     "caption": "The birthday countdown begins",
     "storyText": "",
     "takenAt": "2022-04-10T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": 11.8,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from April 10, 2022, with Rooney. Moment 1 of 6 in the thread \"Birthdays, spring after spring\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-04-10T15:00:00.000Z",
        "formatted": "April 10, 2022",
        "season": "Spring",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Birthdays, spring after spring",
        "position": 1,
        "count": 6,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_2624af56c403e9b350",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
     "poster": null,
     "caption": "Sharing the good crayons",
     "storyText": "",
     "takenAt": "2022-04-09T16:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 9, 2022, with Rooney and Milo. Moment 1 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-04-09T16:00:00.000Z",
        "formatted": "April 9, 2022",
        "season": "Spring",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 1,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-04&scope=per_f67acb6274b180d4a0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-06&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_5f2a3fed4908bb1434",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_5f2a3fed4908bb1434-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_5f2a3fed4908bb1434-web.jpg",
     "poster": null,
     "caption": "First bike, bell and all",
     "storyText": "",
     "takenAt": "2022-06-18T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 18, 2022, with Rooney. Moment 2 of 5 in the thread \"Bikes, summer after summer\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-06-18T15:00:00.000Z",
        "formatted": "June 18, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Bikes, summer after summer",
        "position": 2,
        "count": 5,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_187eba5cfff57a4727",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-view.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-poster.jpg",
     "caption": "First week on the bike, wobbles and all",
     "storyText": "",
     "takenAt": "2022-06-15T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": 19.1,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from June 15, 2022, with Rooney. Moment 1 of 5 in the thread \"Bikes, summer after summer\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-06-15T15:00:00.000Z",
        "formatted": "June 15, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Bikes, summer after summer",
        "position": 1,
        "count": 5,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_cdc89eb41ae2bae21e",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
     "poster": null,
     "caption": "Grandma June braids his curls, very serious work",
     "storyText": "",
     "takenAt": "2022-06-11T16:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 11, 2022, with Milo and Grandma June. Moment 1 of 10 in the thread \"Milo & Grandma June, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-06-11T16:00:00.000Z",
        "formatted": "June 11, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Grandma June, together",
        "position": 1,
        "count": 10,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_2f6e011eab75e67503",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2f6e011eab75e67503-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2f6e011eab75e67503-web.jpg",
     "poster": null,
     "caption": "Rooney waters the pavement, calls it rain",
     "storyText": "",
     "takenAt": "2022-06-11T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 11, 2022, with Rooney. Memory 1 of 8 in \"The Summer of Dinosaurs\" (June 11, 2022 to August 5, 2022).",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-06-11T15:00:00.000Z",
        "formatted": "June 11, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "The Summer of Dinosaurs",
        "position": 1,
        "count": 8,
        "startDate": "2022-06-11T15:00:00.000Z",
        "endDate": "2022-08-05T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-06&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_cdc89eb41ae2bae21e",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
     "poster": null,
     "caption": "Grandma June braids his curls, very serious work",
     "storyText": "",
     "takenAt": "2022-06-11T16:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 11, 2022, with Milo and Grandma June. Moment 1 of 10 in the thread \"Milo & Grandma June, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-06-11T16:00:00.000Z",
        "formatted": "June 11, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Grandma June, together",
        "position": 1,
        "count": 10,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-06&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_5f2a3fed4908bb1434",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_5f2a3fed4908bb1434-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_5f2a3fed4908bb1434-web.jpg",
     "poster": null,
     "caption": "First bike, bell and all",
     "storyText": "",
     "takenAt": "2022-06-18T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 18, 2022, with Rooney. Moment 2 of 5 in the thread \"Bikes, summer after summer\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-06-18T15:00:00.000Z",
        "formatted": "June 18, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Bikes, summer after summer",
        "position": 2,
        "count": 5,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_187eba5cfff57a4727",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-view.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-poster.jpg",
     "caption": "First week on the bike, wobbles and all",
     "storyText": "",
     "takenAt": "2022-06-15T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": 19.1,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from June 15, 2022, with Rooney. Moment 1 of 5 in the thread \"Bikes, summer after summer\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-06-15T15:00:00.000Z",
        "formatted": "June 15, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Bikes, summer after summer",
        "position": 1,
        "count": 5,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_2f6e011eab75e67503",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2f6e011eab75e67503-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2f6e011eab75e67503-web.jpg",
     "poster": null,
     "caption": "Rooney waters the pavement, calls it rain",
     "storyText": "",
     "takenAt": "2022-06-11T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 11, 2022, with Rooney. Memory 1 of 8 in \"The Summer of Dinosaurs\" (June 11, 2022 to August 5, 2022).",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-06-11T15:00:00.000Z",
        "formatted": "June 11, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "The Summer of Dinosaurs",
        "position": 1,
        "count": 8,
        "startDate": "2022-06-11T15:00:00.000Z",
        "endDate": "2022-08-05T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-06&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_cdc89eb41ae2bae21e",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
     "poster": null,
     "caption": "Grandma June braids his curls, very serious work",
     "storyText": "",
     "takenAt": "2022-06-11T16:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 11, 2022, with Milo and Grandma June. Moment 1 of 10 in the thread \"Milo & Grandma June, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-06-11T16:00:00.000Z",
        "formatted": "June 11, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Grandma June, together",
        "position": 1,
        "count": 10,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-07&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_18e4fe2a9092efba17",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-s-roaring-dinosaur-2022.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-s-roaring-dinosaur-2022.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-poster.jpg",
     "caption": "Rooney and the roaring dinosaur",
     "storyText": "",
     "takenAt": "2022-07-23T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": 28,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from July 23, 2022, with Rooney. Moment 3 of 9 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-07-23T15:00:00.000Z",
        "formatted": "July 23, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Dinosaurs, summer after summer",
        "position": 3,
        "count": 9,
        "fromYear": 2022,
        "toYear": 2024
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_ffd7b0dcc8b461d108",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur drawing on the fridge",
     "storyText": "Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.",
     "takenAt": "2022-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 22, 2022, with Rooney. Moment 2 of 9 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-07-22T15:00:00.000Z",
        "formatted": "July 22, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Dinosaurs, summer after summer",
        "position": 2,
        "count": 9,
        "fromYear": 2022,
        "toYear": 2024
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_779944c9856c93722e",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur phase begins",
     "storyText": "Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.",
     "takenAt": "2022-07-10T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 10, 2022, with Rooney. Moment 1 of 9 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-07-10T15:00:00.000Z",
        "formatted": "July 10, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Dinosaurs, summer after summer",
        "position": 1,
        "count": 9,
        "fromYear": 2022,
        "toYear": 2024
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-07&scope=per_04a1327dc4ed158c3c": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_04a1327dc4ed158c3c",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-07&scope=per_1c03ef455d57eb3eb6": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-07&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_18e4fe2a9092efba17",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-s-roaring-dinosaur-2022.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-s-roaring-dinosaur-2022.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-poster.jpg",
     "caption": "Rooney and the roaring dinosaur",
     "storyText": "",
     "takenAt": "2022-07-23T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": 28,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from July 23, 2022, with Rooney. Moment 3 of 9 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-07-23T15:00:00.000Z",
        "formatted": "July 23, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Dinosaurs, summer after summer",
        "position": 3,
        "count": 9,
        "fromYear": 2022,
        "toYear": 2024
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_ffd7b0dcc8b461d108",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur drawing on the fridge",
     "storyText": "Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.",
     "takenAt": "2022-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 22, 2022, with Rooney. Moment 2 of 9 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-07-22T15:00:00.000Z",
        "formatted": "July 22, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Dinosaurs, summer after summer",
        "position": 2,
        "count": 9,
        "fromYear": 2022,
        "toYear": 2024
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_779944c9856c93722e",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur phase begins",
     "storyText": "Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.",
     "takenAt": "2022-07-10T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 10, 2022, with Rooney. Moment 1 of 9 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-07-10T15:00:00.000Z",
        "formatted": "July 10, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Dinosaurs, summer after summer",
        "position": 1,
        "count": 9,
        "fromYear": 2022,
        "toYear": 2024
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-07&scope=per_aa070d4d417e870984": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aa070d4d417e870984",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-07&scope=per_aae84005dd4d3217b0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aae84005dd4d3217b0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-07&scope=per_f67acb6274b180d4a0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-08&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_3cbd8d15a369323b3f",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Dinosaurs",
     "userRenamed": false,
     "startDate": "2022-06-11T15:00:00.000Z",
     "endDate": "2022-08-05T15:00:00.000Z",
     "season": "Summer",
     "year": 2022,
     "narrative": "Between June 11, 2022 and August 5, 2022, your family kept 8 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- June 11, 2022: Rooney waters the pavement, calls it rain\n- June 11, 2022: Grandma June braids his curls, very serious work\n- June 15, 2022: First week on the bike, wobbles and all\n- June 18, 2022: First bike, bell and all\n- July 10, 2022: Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.\n- July 22, 2022: Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.\n- July 23, 2022: Rooney and the roaring dinosaur\n- August 5, 2022: Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "memoryIds": [
      "mem_2f6e011eab75e67503",
      "mem_cdc89eb41ae2bae21e",
      "mem_187eba5cfff57a4727",
      "mem_5f2a3fed4908bb1434",
      "mem_779944c9856c93722e",
      "mem_ffd7b0dcc8b461d108",
      "mem_18e4fe2a9092efba17",
      "mem_f95372c30d18e170d9"
     ],
     "order": 2,
     "updatedAt": "2026-10-30T20:42:09.034Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_2f6e011eab75e67503-web.jpg",
    "commentary": {
     "text": "\"The Summer of Dinosaurs\" covers June 11, 2022 to August 5, 2022 and holds 8 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Dinosaurs",
       "startDate": "2022-06-11T15:00:00.000Z",
       "endDate": "2022-08-05T15:00:00.000Z",
       "count": 8
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f95372c30d18e170d9",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Milo roars back",
     "storyText": "Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "takenAt": "2022-08-05T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from August 5, 2022, with Rooney and Milo. Moment 2 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-08-05T15:00:00.000Z",
        "formatted": "August 5, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 2,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-08&scope=per_04a1327dc4ed158c3c": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_04a1327dc4ed158c3c",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-08&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_f95372c30d18e170d9",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Milo roars back",
     "storyText": "Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "takenAt": "2022-08-05T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from August 5, 2022, with Rooney and Milo. Moment 2 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-08-05T15:00:00.000Z",
        "formatted": "August 5, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 2,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-08&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_3cbd8d15a369323b3f",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Dinosaurs",
     "userRenamed": false,
     "startDate": "2022-06-11T15:00:00.000Z",
     "endDate": "2022-08-05T15:00:00.000Z",
     "season": "Summer",
     "year": 2022,
     "narrative": "Between June 11, 2022 and August 5, 2022, your family kept 8 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- June 11, 2022: Rooney waters the pavement, calls it rain\n- June 11, 2022: Grandma June braids his curls, very serious work\n- June 15, 2022: First week on the bike, wobbles and all\n- June 18, 2022: First bike, bell and all\n- July 10, 2022: Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.\n- July 22, 2022: Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.\n- July 23, 2022: Rooney and the roaring dinosaur\n- August 5, 2022: Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "memoryIds": [
      "mem_2f6e011eab75e67503",
      "mem_cdc89eb41ae2bae21e",
      "mem_187eba5cfff57a4727",
      "mem_5f2a3fed4908bb1434",
      "mem_779944c9856c93722e",
      "mem_ffd7b0dcc8b461d108",
      "mem_18e4fe2a9092efba17",
      "mem_f95372c30d18e170d9"
     ],
     "order": 2,
     "updatedAt": "2026-10-30T20:42:09.034Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_2f6e011eab75e67503-web.jpg",
    "commentary": {
     "text": "\"The Summer of Dinosaurs\" covers June 11, 2022 to August 5, 2022 and holds 8 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Dinosaurs",
       "startDate": "2022-06-11T15:00:00.000Z",
       "endDate": "2022-08-05T15:00:00.000Z",
       "count": 8
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f95372c30d18e170d9",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Milo roars back",
     "storyText": "Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "takenAt": "2022-08-05T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from August 5, 2022, with Rooney and Milo. Moment 2 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2022-08-05T15:00:00.000Z",
        "formatted": "August 5, 2022",
        "season": "Summer",
        "year": 2022
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 2,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-08&scope=per_aa070d4d417e870984": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aa070d4d417e870984",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-08&scope=per_aae84005dd4d3217b0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aae84005dd4d3217b0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-08&scope=per_f67acb6274b180d4a0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-04&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_e78ae78a71ecd79fb9",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2023-04-08T15:00:00.000Z",
     "endDate": "2023-04-15T15:00:00.000Z",
     "season": "Spring",
     "year": 2023,
     "narrative": "Between April 8, 2023 and April 15, 2023, your family kept 2 memories here.\nIn these memories: Grandma June, Rooney, Milo.\nIn your own words:\n- April 8, 2023: Grandma June's porch, waiting on the spring\n- April 15, 2023: Rooney's birthday, five candles",
     "memoryIds": [
      "mem_12c0caecfb0c0da7de",
      "mem_ca71de709a423445c4"
     ],
     "order": 3,
     "updatedAt": "2026-10-30T20:42:09.035Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 8, 2023 to April 15, 2023 and holds 2 memories. In these memories: Grandma June, Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2023-04-08T15:00:00.000Z",
       "endDate": "2023-04-15T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Grandma June",
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_ca71de709a423445c4",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
     "poster": null,
     "caption": "Rooney's birthday, five candles",
     "storyText": "",
     "takenAt": "2023-04-15T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 15, 2023, with Rooney, Milo and Grandma June. Moment 3 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-04-15T15:00:00.000Z",
        "formatted": "April 15, 2023",
        "season": "Spring",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 3,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_12c0caecfb0c0da7de",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
     "poster": null,
     "caption": "Grandma June's porch, waiting on the spring",
     "storyText": "",
     "takenAt": "2023-04-08T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 8, 2023, with Grandma June and Rooney. Moment 2 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-04-08T15:00:00.000Z",
        "formatted": "April 8, 2023",
        "season": "Spring",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 2,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-04&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_e78ae78a71ecd79fb9",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2023-04-08T15:00:00.000Z",
     "endDate": "2023-04-15T15:00:00.000Z",
     "season": "Spring",
     "year": 2023,
     "narrative": "Between April 8, 2023 and April 15, 2023, your family kept 2 memories here.\nIn these memories: Grandma June, Rooney, Milo.\nIn your own words:\n- April 8, 2023: Grandma June's porch, waiting on the spring\n- April 15, 2023: Rooney's birthday, five candles",
     "memoryIds": [
      "mem_12c0caecfb0c0da7de",
      "mem_ca71de709a423445c4"
     ],
     "order": 3,
     "updatedAt": "2026-10-30T20:42:09.035Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 8, 2023 to April 15, 2023 and holds 2 memories. In these memories: Grandma June, Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2023-04-08T15:00:00.000Z",
       "endDate": "2023-04-15T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Grandma June",
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_ca71de709a423445c4",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
     "poster": null,
     "caption": "Rooney's birthday, five candles",
     "storyText": "",
     "takenAt": "2023-04-15T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 15, 2023, with Rooney, Milo and Grandma June. Moment 3 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-04-15T15:00:00.000Z",
        "formatted": "April 15, 2023",
        "season": "Spring",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 3,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-04&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_e78ae78a71ecd79fb9",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2023-04-08T15:00:00.000Z",
     "endDate": "2023-04-15T15:00:00.000Z",
     "season": "Spring",
     "year": 2023,
     "narrative": "Between April 8, 2023 and April 15, 2023, your family kept 2 memories here.\nIn these memories: Grandma June, Rooney, Milo.\nIn your own words:\n- April 8, 2023: Grandma June's porch, waiting on the spring\n- April 15, 2023: Rooney's birthday, five candles",
     "memoryIds": [
      "mem_12c0caecfb0c0da7de",
      "mem_ca71de709a423445c4"
     ],
     "order": 3,
     "updatedAt": "2026-10-30T20:42:09.035Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 8, 2023 to April 15, 2023 and holds 2 memories. In these memories: Grandma June, Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2023-04-08T15:00:00.000Z",
       "endDate": "2023-04-15T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Grandma June",
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_ca71de709a423445c4",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
     "poster": null,
     "caption": "Rooney's birthday, five candles",
     "storyText": "",
     "takenAt": "2023-04-15T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 15, 2023, with Rooney, Milo and Grandma June. Moment 3 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-04-15T15:00:00.000Z",
        "formatted": "April 15, 2023",
        "season": "Spring",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 3,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_12c0caecfb0c0da7de",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
     "poster": null,
     "caption": "Grandma June's porch, waiting on the spring",
     "storyText": "",
     "takenAt": "2023-04-08T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 8, 2023, with Grandma June and Rooney. Moment 2 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-04-08T15:00:00.000Z",
        "formatted": "April 8, 2023",
        "season": "Spring",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 2,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-04&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_e78ae78a71ecd79fb9",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2023-04-08T15:00:00.000Z",
     "endDate": "2023-04-15T15:00:00.000Z",
     "season": "Spring",
     "year": 2023,
     "narrative": "Between April 8, 2023 and April 15, 2023, your family kept 2 memories here.\nIn these memories: Grandma June, Rooney, Milo.\nIn your own words:\n- April 8, 2023: Grandma June's porch, waiting on the spring\n- April 15, 2023: Rooney's birthday, five candles",
     "memoryIds": [
      "mem_12c0caecfb0c0da7de",
      "mem_ca71de709a423445c4"
     ],
     "order": 3,
     "updatedAt": "2026-10-30T20:42:09.035Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 8, 2023 to April 15, 2023 and holds 2 memories. In these memories: Grandma June, Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2023-04-08T15:00:00.000Z",
       "endDate": "2023-04-15T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Grandma June",
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_ca71de709a423445c4",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
     "poster": null,
     "caption": "Rooney's birthday, five candles",
     "storyText": "",
     "takenAt": "2023-04-15T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 15, 2023, with Rooney, Milo and Grandma June. Moment 3 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-04-15T15:00:00.000Z",
        "formatted": "April 15, 2023",
        "season": "Spring",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 3,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_12c0caecfb0c0da7de",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
     "poster": null,
     "caption": "Grandma June's porch, waiting on the spring",
     "storyText": "",
     "takenAt": "2023-04-08T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 8, 2023, with Grandma June and Rooney. Moment 2 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-04-08T15:00:00.000Z",
        "formatted": "April 8, 2023",
        "season": "Spring",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 2,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-06&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_eef8794db980a7a3b2",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-poster.jpg",
     "caption": "First ocean trip, straight to the water",
     "storyText": "",
     "takenAt": "2023-06-25T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": 10.5,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from June 25, 2023, with Rooney and Milo. Moment 4 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-06-25T15:00:00.000Z",
        "formatted": "June 25, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 4,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_7f07a5581eaf9170f5",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7f07a5581eaf9170f5-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7f07a5581eaf9170f5-web.jpg",
     "poster": null,
     "caption": "The dinosaur she drew at four, still up",
     "storyText": "",
     "takenAt": "2023-06-24T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 24, 2023, with Rooney. Moment 4 of 9 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-06-24T15:00:00.000Z",
        "formatted": "June 24, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Dinosaurs, summer after summer",
        "position": 4,
        "count": 9,
        "fromYear": 2022,
        "toYear": 2024
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_4b70ed96ef67b29f65",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
     "poster": null,
     "caption": "The garden gate, painted blue",
     "storyText": "",
     "takenAt": "2023-06-17T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 17, 2023, with Grandma June. Moment 3 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-06-17T15:00:00.000Z",
        "formatted": "June 17, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 3,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_639c875daf7b901106",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
     "poster": null,
     "caption": "Rooney on the blue bike, no hands (almost)",
     "storyText": "",
     "takenAt": "2023-06-10T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 10, 2023, with Rooney. Moment 3 of 5 in the thread \"Bikes, summer after summer\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-06-10T15:00:00.000Z",
        "formatted": "June 10, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Bikes, summer after summer",
        "position": 3,
        "count": 5,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-06&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_eef8794db980a7a3b2",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-poster.jpg",
     "caption": "First ocean trip, straight to the water",
     "storyText": "",
     "takenAt": "2023-06-25T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": 10.5,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from June 25, 2023, with Rooney and Milo. Moment 4 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-06-25T15:00:00.000Z",
        "formatted": "June 25, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 4,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-06&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_eef8794db980a7a3b2",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-poster.jpg",
     "caption": "First ocean trip, straight to the water",
     "storyText": "",
     "takenAt": "2023-06-25T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": 10.5,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from June 25, 2023, with Rooney and Milo. Moment 4 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-06-25T15:00:00.000Z",
        "formatted": "June 25, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 4,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_7f07a5581eaf9170f5",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7f07a5581eaf9170f5-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7f07a5581eaf9170f5-web.jpg",
     "poster": null,
     "caption": "The dinosaur she drew at four, still up",
     "storyText": "",
     "takenAt": "2023-06-24T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 24, 2023, with Rooney. Moment 4 of 9 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-06-24T15:00:00.000Z",
        "formatted": "June 24, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Dinosaurs, summer after summer",
        "position": 4,
        "count": 9,
        "fromYear": 2022,
        "toYear": 2024
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_639c875daf7b901106",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
     "poster": null,
     "caption": "Rooney on the blue bike, no hands (almost)",
     "storyText": "",
     "takenAt": "2023-06-10T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 10, 2023, with Rooney. Moment 3 of 5 in the thread \"Bikes, summer after summer\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-06-10T15:00:00.000Z",
        "formatted": "June 10, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Bikes, summer after summer",
        "position": 3,
        "count": 5,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-06&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_4b70ed96ef67b29f65",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
     "poster": null,
     "caption": "The garden gate, painted blue",
     "storyText": "",
     "takenAt": "2023-06-17T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 17, 2023, with Grandma June. Moment 3 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-06-17T15:00:00.000Z",
        "formatted": "June 17, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 3,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-07&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_05fd5c21691271075e",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Dinosaurs",
     "userRenamed": false,
     "startDate": "2023-06-10T15:00:00.000Z",
     "endDate": "2023-07-29T15:00:00.000Z",
     "season": "Summer",
     "year": 2023,
     "narrative": "Between June 10, 2023 and July 29, 2023, your family kept 13 memories here.\nIn these memories: Rooney, Grandma June, Milo.\nIn your own words:\n- June 10, 2023: Rooney on the blue bike, no hands (almost)\n- June 17, 2023: The garden gate, painted blue\n- June 24, 2023: The dinosaur she drew at four, still up\n- June 25, 2023: First ocean trip, straight to the water\n- July 2, 2023: Ocean morning, before the crowds\n- July 8, 2023: Grandma June in the garden, gloves on\n- July 14, 2023: The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.\n- July 14, 2023: Pool afternoon · sample photo\n- July 16, 2023: Toy dinosaurs, lined up by size\n- July 22, 2023: Filming in the park · sample photo\n- July 22, 2023: Park day, filmed · sample video\n- July 29, 2023: Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.\n- July 29, 2023: Cake, approved · sample photo",
     "memoryIds": [
      "mem_639c875daf7b901106",
      "mem_4b70ed96ef67b29f65",
      "mem_7f07a5581eaf9170f5",
      "mem_eef8794db980a7a3b2",
      "mem_408cca4804787ed824",
      "mem_63f222abc7f392d012",
      "mem_3fe0a5b5bacfbd9083",
      "mem_8d8366c4037c349dd7",
      "mem_d9ce759843bca5c265",
      "mem_c6dcc84a9709e00e0f",
      "mem_3f3f0b99d08d3f1a40",
      "mem_054b85eb18d7bb1571",
      "mem_f9cc639af1d983489e"
     ],
     "order": 4,
     "updatedAt": "2026-10-30T20:42:09.036Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
    "commentary": {
     "text": "\"The Summer of Dinosaurs\" covers June 10, 2023 to July 29, 2023 and holds 13 memories. In these memories: Rooney, Grandma June and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Dinosaurs",
       "startDate": "2023-06-10T15:00:00.000Z",
       "endDate": "2023-07-29T15:00:00.000Z",
       "count": 13
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_054b85eb18d7bb1571",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur cake",
     "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 29, 2023, with Rooney and Grandma June. Moment 6 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-29T15:00:00.000Z",
        "formatted": "July 29, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 6,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f9cc639af1d983489e",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
     "poster": null,
     "caption": "Cake, approved · sample photo",
     "storyText": "",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 29, 2023, with Rooney and Milo. Moment 8 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-29T15:00:00.000Z",
        "formatted": "July 29, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 8,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_c6dcc84a9709e00e0f",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_c6dcc84a9709e00e0f-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_c6dcc84a9709e00e0f-web.jpg",
     "poster": null,
     "caption": "Filming in the park · sample photo",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 22, 2023, with Rooney. Memory 10 of 13 in \"The Summer of Dinosaurs\" (June 10, 2023 to July 29, 2023).",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-22T15:00:00.000Z",
        "formatted": "July 22, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "The Summer of Dinosaurs",
        "position": 10,
        "count": 13,
        "startDate": "2023-06-10T15:00:00.000Z",
        "endDate": "2023-07-29T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "noticing",
    "noticing": {
     "type": "ordinary_day",
     "title": "An ordinary day that kept a lot: July 14, 2023",
     "detail": "2 memories were kept on this single day — more than any other day in this family.",
     "evidenceMemoryIds": [
      "mem_3fe0a5b5bacfbd9083",
      "mem_8d8366c4037c349dd7"
     ]
    },
    "commentary": {
     "text": "Drawn from 2 memories kept on July 14, 2023: 1 photo, 1 piece of writing. Recorded in them: Rooney and Milo.",
     "basedOn": [
      {
       "type": "noticing_evidence",
       "count": 2,
       "fromDate": "2023-07-14T15:00:00.000Z",
       "toDate": "2023-07-14T15:00:00.000Z",
       "memoryIds": [
        "mem_3fe0a5b5bacfbd9083",
        "mem_8d8366c4037c349dd7"
       ]
      },
      {
       "type": "item_types",
       "counts": {
        "writing": 1,
        "photo": 1
       }
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_3f3f0b99d08d3f1a40",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-poster.jpg",
     "caption": "Park day, filmed · sample video",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": 9,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from July 22, 2023, with Rooney and Milo. Moment 7 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-22T15:00:00.000Z",
        "formatted": "July 22, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 7,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_d9ce759843bca5c265",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
     "poster": null,
     "caption": "Toy dinosaurs, lined up by size",
     "storyText": "",
     "takenAt": "2023-07-16T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 16, 2023, with Rooney and Milo. Moment 6 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-16T15:00:00.000Z",
        "formatted": "July 16, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 6,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_3fe0a5b5bacfbd9083",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur summer, again",
     "storyText": "The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 14, 2023, with Rooney and Milo. Moment 5 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-14T15:00:00.000Z",
        "formatted": "July 14, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 5,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_8d8366c4037c349dd7",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_8d8366c4037c349dd7-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_8d8366c4037c349dd7-web.jpg",
     "poster": null,
     "caption": "Pool afternoon · sample photo",
     "storyText": "",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 14, 2023, with Rooney. Memory 8 of 13 in \"The Summer of Dinosaurs\" (June 10, 2023 to July 29, 2023).",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-14T15:00:00.000Z",
        "formatted": "July 14, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "The Summer of Dinosaurs",
        "position": 8,
        "count": 13,
        "startDate": "2023-06-10T15:00:00.000Z",
        "endDate": "2023-07-29T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_63f222abc7f392d012",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
     "poster": null,
     "caption": "Grandma June in the garden, gloves on",
     "storyText": "",
     "takenAt": "2023-07-08T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 8, 2023, with Grandma June and Rooney. Moment 4 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-08T15:00:00.000Z",
        "formatted": "July 8, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 4,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_408cca4804787ed824",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
     "poster": null,
     "caption": "Ocean morning, before the crowds",
     "storyText": "",
     "takenAt": "2023-07-02T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 2, 2023, with Grandma June and Rooney. Moment 4 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-02T15:00:00.000Z",
        "formatted": "July 2, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 4,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-07&scope=per_04a1327dc4ed158c3c": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_04a1327dc4ed158c3c",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-07&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_f9cc639af1d983489e",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
     "poster": null,
     "caption": "Cake, approved · sample photo",
     "storyText": "",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 29, 2023, with Rooney and Milo. Moment 8 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-29T15:00:00.000Z",
        "formatted": "July 29, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 8,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_3f3f0b99d08d3f1a40",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-poster.jpg",
     "caption": "Park day, filmed · sample video",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": 9,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from July 22, 2023, with Rooney and Milo. Moment 7 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-22T15:00:00.000Z",
        "formatted": "July 22, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 7,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_d9ce759843bca5c265",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
     "poster": null,
     "caption": "Toy dinosaurs, lined up by size",
     "storyText": "",
     "takenAt": "2023-07-16T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 16, 2023, with Rooney and Milo. Moment 6 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-16T15:00:00.000Z",
        "formatted": "July 16, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 6,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_3fe0a5b5bacfbd9083",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur summer, again",
     "storyText": "The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 14, 2023, with Rooney and Milo. Moment 5 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-14T15:00:00.000Z",
        "formatted": "July 14, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 5,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-07&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_05fd5c21691271075e",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Dinosaurs",
     "userRenamed": false,
     "startDate": "2023-06-10T15:00:00.000Z",
     "endDate": "2023-07-29T15:00:00.000Z",
     "season": "Summer",
     "year": 2023,
     "narrative": "Between June 10, 2023 and July 29, 2023, your family kept 13 memories here.\nIn these memories: Rooney, Grandma June, Milo.\nIn your own words:\n- June 10, 2023: Rooney on the blue bike, no hands (almost)\n- June 17, 2023: The garden gate, painted blue\n- June 24, 2023: The dinosaur she drew at four, still up\n- June 25, 2023: First ocean trip, straight to the water\n- July 2, 2023: Ocean morning, before the crowds\n- July 8, 2023: Grandma June in the garden, gloves on\n- July 14, 2023: The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.\n- July 14, 2023: Pool afternoon · sample photo\n- July 16, 2023: Toy dinosaurs, lined up by size\n- July 22, 2023: Filming in the park · sample photo\n- July 22, 2023: Park day, filmed · sample video\n- July 29, 2023: Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.\n- July 29, 2023: Cake, approved · sample photo",
     "memoryIds": [
      "mem_639c875daf7b901106",
      "mem_4b70ed96ef67b29f65",
      "mem_7f07a5581eaf9170f5",
      "mem_eef8794db980a7a3b2",
      "mem_408cca4804787ed824",
      "mem_63f222abc7f392d012",
      "mem_3fe0a5b5bacfbd9083",
      "mem_8d8366c4037c349dd7",
      "mem_d9ce759843bca5c265",
      "mem_c6dcc84a9709e00e0f",
      "mem_3f3f0b99d08d3f1a40",
      "mem_054b85eb18d7bb1571",
      "mem_f9cc639af1d983489e"
     ],
     "order": 4,
     "updatedAt": "2026-10-30T20:42:09.036Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
    "commentary": {
     "text": "\"The Summer of Dinosaurs\" covers June 10, 2023 to July 29, 2023 and holds 13 memories. In these memories: Rooney, Grandma June and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Dinosaurs",
       "startDate": "2023-06-10T15:00:00.000Z",
       "endDate": "2023-07-29T15:00:00.000Z",
       "count": 13
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_054b85eb18d7bb1571",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur cake",
     "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 29, 2023, with Rooney and Grandma June. Moment 6 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-29T15:00:00.000Z",
        "formatted": "July 29, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 6,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f9cc639af1d983489e",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
     "poster": null,
     "caption": "Cake, approved · sample photo",
     "storyText": "",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 29, 2023, with Rooney and Milo. Moment 8 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-29T15:00:00.000Z",
        "formatted": "July 29, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 8,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_c6dcc84a9709e00e0f",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_c6dcc84a9709e00e0f-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_c6dcc84a9709e00e0f-web.jpg",
     "poster": null,
     "caption": "Filming in the park · sample photo",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 22, 2023, with Rooney. Memory 10 of 13 in \"The Summer of Dinosaurs\" (June 10, 2023 to July 29, 2023).",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-22T15:00:00.000Z",
        "formatted": "July 22, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "The Summer of Dinosaurs",
        "position": 10,
        "count": 13,
        "startDate": "2023-06-10T15:00:00.000Z",
        "endDate": "2023-07-29T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_3f3f0b99d08d3f1a40",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-poster.jpg",
     "caption": "Park day, filmed · sample video",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": 9,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from July 22, 2023, with Rooney and Milo. Moment 7 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-22T15:00:00.000Z",
        "formatted": "July 22, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 7,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_d9ce759843bca5c265",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
     "poster": null,
     "caption": "Toy dinosaurs, lined up by size",
     "storyText": "",
     "takenAt": "2023-07-16T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 16, 2023, with Rooney and Milo. Moment 6 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-16T15:00:00.000Z",
        "formatted": "July 16, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 6,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_3fe0a5b5bacfbd9083",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur summer, again",
     "storyText": "The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 14, 2023, with Rooney and Milo. Moment 5 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-14T15:00:00.000Z",
        "formatted": "July 14, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 5,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_8d8366c4037c349dd7",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_8d8366c4037c349dd7-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_8d8366c4037c349dd7-web.jpg",
     "poster": null,
     "caption": "Pool afternoon · sample photo",
     "storyText": "",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 14, 2023, with Rooney. Memory 8 of 13 in \"The Summer of Dinosaurs\" (June 10, 2023 to July 29, 2023).",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-14T15:00:00.000Z",
        "formatted": "July 14, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "The Summer of Dinosaurs",
        "position": 8,
        "count": 13,
        "startDate": "2023-06-10T15:00:00.000Z",
        "endDate": "2023-07-29T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_63f222abc7f392d012",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
     "poster": null,
     "caption": "Grandma June in the garden, gloves on",
     "storyText": "",
     "takenAt": "2023-07-08T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 8, 2023, with Grandma June and Rooney. Moment 4 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-08T15:00:00.000Z",
        "formatted": "July 8, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 4,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_408cca4804787ed824",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
     "poster": null,
     "caption": "Ocean morning, before the crowds",
     "storyText": "",
     "takenAt": "2023-07-02T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 2, 2023, with Grandma June and Rooney. Moment 4 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-02T15:00:00.000Z",
        "formatted": "July 2, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 4,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-07&scope=per_aa070d4d417e870984": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aa070d4d417e870984",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-07&scope=per_aae84005dd4d3217b0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aae84005dd4d3217b0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-07&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_054b85eb18d7bb1571",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur cake",
     "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 29, 2023, with Rooney and Grandma June. Moment 6 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-29T15:00:00.000Z",
        "formatted": "July 29, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 6,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_63f222abc7f392d012",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
     "poster": null,
     "caption": "Grandma June in the garden, gloves on",
     "storyText": "",
     "takenAt": "2023-07-08T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 8, 2023, with Grandma June and Rooney. Moment 4 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-08T15:00:00.000Z",
        "formatted": "July 8, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 4,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_408cca4804787ed824",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
     "poster": null,
     "caption": "Ocean morning, before the crowds",
     "storyText": "",
     "takenAt": "2023-07-02T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 2, 2023, with Grandma June and Rooney. Moment 4 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-07-02T15:00:00.000Z",
        "formatted": "July 2, 2023",
        "season": "Summer",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 4,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-09&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_8d9e6c485794b4baed",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
     "poster": null,
     "caption": "Milo turns three, cake first",
     "storyText": "",
     "takenAt": "2023-09-09T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 9, 2023, with Milo and Rooney. Moment 9 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-09-09T15:00:00.000Z",
        "formatted": "September 9, 2023",
        "season": "Fall",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 9,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_4a762c2bc960377d50",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
     "poster": null,
     "caption": "Milo and the biggest leaf",
     "storyText": "",
     "takenAt": "2023-09-02T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 2, 2023, with Milo. Memory 1 of 3 in \"Fall 2023 with Milo\" (September 2, 2023 to October 14, 2023).",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-09-02T15:00:00.000Z",
        "formatted": "September 2, 2023",
        "season": "Fall",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2023 with Milo",
        "position": 1,
        "count": 3,
        "startDate": "2023-09-02T15:00:00.000Z",
        "endDate": "2023-10-14T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-09&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_8d9e6c485794b4baed",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
     "poster": null,
     "caption": "Milo turns three, cake first",
     "storyText": "",
     "takenAt": "2023-09-09T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 9, 2023, with Milo and Rooney. Moment 9 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-09-09T15:00:00.000Z",
        "formatted": "September 9, 2023",
        "season": "Fall",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 9,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_4a762c2bc960377d50",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
     "poster": null,
     "caption": "Milo and the biggest leaf",
     "storyText": "",
     "takenAt": "2023-09-02T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 2, 2023, with Milo. Memory 1 of 3 in \"Fall 2023 with Milo\" (September 2, 2023 to October 14, 2023).",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-09-02T15:00:00.000Z",
        "formatted": "September 2, 2023",
        "season": "Fall",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2023 with Milo",
        "position": 1,
        "count": 3,
        "startDate": "2023-09-02T15:00:00.000Z",
        "endDate": "2023-10-14T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-09&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_8d9e6c485794b4baed",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
     "poster": null,
     "caption": "Milo turns three, cake first",
     "storyText": "",
     "takenAt": "2023-09-09T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 9, 2023, with Milo and Rooney. Moment 9 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-09-09T15:00:00.000Z",
        "formatted": "September 9, 2023",
        "season": "Fall",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 9,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-09&scope=per_f67acb6274b180d4a0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-10&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_89039e0101b3cf1b2d",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2023 with Milo",
     "userRenamed": false,
     "startDate": "2023-09-02T15:00:00.000Z",
     "endDate": "2023-10-14T15:00:00.000Z",
     "season": "Fall",
     "year": 2023,
     "narrative": "Between September 2, 2023 and October 14, 2023, your family kept 3 memories here.\nIn these memories: Milo, Rooney.\nIn your own words:\n- September 2, 2023: Milo and the biggest leaf\n- September 9, 2023: Milo turns three, cake first\n- October 14, 2023: Pumpkin carving, Milo supervises",
     "memoryIds": [
      "mem_4a762c2bc960377d50",
      "mem_8d9e6c485794b4baed",
      "mem_71e2c7191a75d606a5"
     ],
     "order": 5,
     "updatedAt": "2026-10-30T20:42:09.036Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
    "commentary": {
     "text": "\"Fall 2023 with Milo\" covers September 2, 2023 to October 14, 2023 and holds 3 memories. In these memories: Milo and Rooney.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2023 with Milo",
       "startDate": "2023-09-02T15:00:00.000Z",
       "endDate": "2023-10-14T15:00:00.000Z",
       "count": 3
      },
      {
       "type": "people",
       "names": [
        "Milo",
        "Rooney"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_71e2c7191a75d606a5",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
     "poster": null,
     "caption": "Pumpkin carving, Milo supervises",
     "storyText": "",
     "takenAt": "2023-10-14T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from October 14, 2023, with Rooney and Milo. Moment 10 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-10-14T15:00:00.000Z",
        "formatted": "October 14, 2023",
        "season": "Fall",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 10,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-10&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_89039e0101b3cf1b2d",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2023 with Milo",
     "userRenamed": false,
     "startDate": "2023-09-02T15:00:00.000Z",
     "endDate": "2023-10-14T15:00:00.000Z",
     "season": "Fall",
     "year": 2023,
     "narrative": "Between September 2, 2023 and October 14, 2023, your family kept 3 memories here.\nIn these memories: Milo, Rooney.\nIn your own words:\n- September 2, 2023: Milo and the biggest leaf\n- September 9, 2023: Milo turns three, cake first\n- October 14, 2023: Pumpkin carving, Milo supervises",
     "memoryIds": [
      "mem_4a762c2bc960377d50",
      "mem_8d9e6c485794b4baed",
      "mem_71e2c7191a75d606a5"
     ],
     "order": 5,
     "updatedAt": "2026-10-30T20:42:09.036Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
    "commentary": {
     "text": "\"Fall 2023 with Milo\" covers September 2, 2023 to October 14, 2023 and holds 3 memories. In these memories: Milo and Rooney.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2023 with Milo",
       "startDate": "2023-09-02T15:00:00.000Z",
       "endDate": "2023-10-14T15:00:00.000Z",
       "count": 3
      },
      {
       "type": "people",
       "names": [
        "Milo",
        "Rooney"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_71e2c7191a75d606a5",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
     "poster": null,
     "caption": "Pumpkin carving, Milo supervises",
     "storyText": "",
     "takenAt": "2023-10-14T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from October 14, 2023, with Rooney and Milo. Moment 10 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-10-14T15:00:00.000Z",
        "formatted": "October 14, 2023",
        "season": "Fall",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 10,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-10&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_89039e0101b3cf1b2d",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2023 with Milo",
     "userRenamed": false,
     "startDate": "2023-09-02T15:00:00.000Z",
     "endDate": "2023-10-14T15:00:00.000Z",
     "season": "Fall",
     "year": 2023,
     "narrative": "Between September 2, 2023 and October 14, 2023, your family kept 3 memories here.\nIn these memories: Milo, Rooney.\nIn your own words:\n- September 2, 2023: Milo and the biggest leaf\n- September 9, 2023: Milo turns three, cake first\n- October 14, 2023: Pumpkin carving, Milo supervises",
     "memoryIds": [
      "mem_4a762c2bc960377d50",
      "mem_8d9e6c485794b4baed",
      "mem_71e2c7191a75d606a5"
     ],
     "order": 5,
     "updatedAt": "2026-10-30T20:42:09.036Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
    "commentary": {
     "text": "\"Fall 2023 with Milo\" covers September 2, 2023 to October 14, 2023 and holds 3 memories. In these memories: Milo and Rooney.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2023 with Milo",
       "startDate": "2023-09-02T15:00:00.000Z",
       "endDate": "2023-10-14T15:00:00.000Z",
       "count": 3
      },
      {
       "type": "people",
       "names": [
        "Milo",
        "Rooney"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_71e2c7191a75d606a5",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
     "poster": null,
     "caption": "Pumpkin carving, Milo supervises",
     "storyText": "",
     "takenAt": "2023-10-14T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from October 14, 2023, with Rooney and Milo. Moment 10 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-10-14T15:00:00.000Z",
        "formatted": "October 14, 2023",
        "season": "Fall",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 10,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-10&scope=per_f67acb6274b180d4a0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-12&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_711d7607ba23d13fb0",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Winter of Christmas",
     "userRenamed": false,
     "startDate": "2023-12-16T15:00:00.000Z",
     "endDate": "2023-12-25T15:00:00.000Z",
     "season": "Winter",
     "year": 2023,
     "narrative": "Between December 16, 2023 and December 25, 2023, your family kept 2 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- December 16, 2023: The tree goes up, Milo directs\n- December 25, 2023: Christmas morning, matching pajamas",
     "memoryIds": [
      "mem_4e9bdea78284d98733",
      "mem_94fab9ff114312377c"
     ],
     "order": 6,
     "updatedAt": "2026-10-30T20:42:09.037Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "commentary": {
     "text": "\"The Winter of Christmas\" covers December 16, 2023 to December 25, 2023 and holds 2 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Winter of Christmas",
       "startDate": "2023-12-16T15:00:00.000Z",
       "endDate": "2023-12-25T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_94fab9ff114312377c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
     "poster": null,
     "caption": "Christmas morning, matching pajamas",
     "storyText": "",
     "takenAt": "2023-12-25T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 25, 2023, with Rooney, Milo and Grandma June. Moment 12 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-12-25T15:00:00.000Z",
        "formatted": "December 25, 2023",
        "season": "Winter",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 12,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_4e9bdea78284d98733",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
     "poster": null,
     "caption": "The tree goes up, Milo directs",
     "storyText": "",
     "takenAt": "2023-12-16T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 16, 2023, with Rooney, Milo and Grandma June. Moment 11 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-12-16T15:00:00.000Z",
        "formatted": "December 16, 2023",
        "season": "Winter",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 11,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-12&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_711d7607ba23d13fb0",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Winter of Christmas",
     "userRenamed": false,
     "startDate": "2023-12-16T15:00:00.000Z",
     "endDate": "2023-12-25T15:00:00.000Z",
     "season": "Winter",
     "year": 2023,
     "narrative": "Between December 16, 2023 and December 25, 2023, your family kept 2 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- December 16, 2023: The tree goes up, Milo directs\n- December 25, 2023: Christmas morning, matching pajamas",
     "memoryIds": [
      "mem_4e9bdea78284d98733",
      "mem_94fab9ff114312377c"
     ],
     "order": 6,
     "updatedAt": "2026-10-30T20:42:09.037Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "commentary": {
     "text": "\"The Winter of Christmas\" covers December 16, 2023 to December 25, 2023 and holds 2 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Winter of Christmas",
       "startDate": "2023-12-16T15:00:00.000Z",
       "endDate": "2023-12-25T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_94fab9ff114312377c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
     "poster": null,
     "caption": "Christmas morning, matching pajamas",
     "storyText": "",
     "takenAt": "2023-12-25T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 25, 2023, with Rooney, Milo and Grandma June. Moment 12 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-12-25T15:00:00.000Z",
        "formatted": "December 25, 2023",
        "season": "Winter",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 12,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_4e9bdea78284d98733",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
     "poster": null,
     "caption": "The tree goes up, Milo directs",
     "storyText": "",
     "takenAt": "2023-12-16T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 16, 2023, with Rooney, Milo and Grandma June. Moment 11 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-12-16T15:00:00.000Z",
        "formatted": "December 16, 2023",
        "season": "Winter",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 11,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-12&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_711d7607ba23d13fb0",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Winter of Christmas",
     "userRenamed": false,
     "startDate": "2023-12-16T15:00:00.000Z",
     "endDate": "2023-12-25T15:00:00.000Z",
     "season": "Winter",
     "year": 2023,
     "narrative": "Between December 16, 2023 and December 25, 2023, your family kept 2 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- December 16, 2023: The tree goes up, Milo directs\n- December 25, 2023: Christmas morning, matching pajamas",
     "memoryIds": [
      "mem_4e9bdea78284d98733",
      "mem_94fab9ff114312377c"
     ],
     "order": 6,
     "updatedAt": "2026-10-30T20:42:09.037Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "commentary": {
     "text": "\"The Winter of Christmas\" covers December 16, 2023 to December 25, 2023 and holds 2 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Winter of Christmas",
       "startDate": "2023-12-16T15:00:00.000Z",
       "endDate": "2023-12-25T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_94fab9ff114312377c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
     "poster": null,
     "caption": "Christmas morning, matching pajamas",
     "storyText": "",
     "takenAt": "2023-12-25T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 25, 2023, with Rooney, Milo and Grandma June. Moment 12 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-12-25T15:00:00.000Z",
        "formatted": "December 25, 2023",
        "season": "Winter",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 12,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_4e9bdea78284d98733",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
     "poster": null,
     "caption": "The tree goes up, Milo directs",
     "storyText": "",
     "takenAt": "2023-12-16T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 16, 2023, with Rooney, Milo and Grandma June. Moment 11 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-12-16T15:00:00.000Z",
        "formatted": "December 16, 2023",
        "season": "Winter",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 11,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-12&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_711d7607ba23d13fb0",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Winter of Christmas",
     "userRenamed": false,
     "startDate": "2023-12-16T15:00:00.000Z",
     "endDate": "2023-12-25T15:00:00.000Z",
     "season": "Winter",
     "year": 2023,
     "narrative": "Between December 16, 2023 and December 25, 2023, your family kept 2 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- December 16, 2023: The tree goes up, Milo directs\n- December 25, 2023: Christmas morning, matching pajamas",
     "memoryIds": [
      "mem_4e9bdea78284d98733",
      "mem_94fab9ff114312377c"
     ],
     "order": 6,
     "updatedAt": "2026-10-30T20:42:09.037Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "commentary": {
     "text": "\"The Winter of Christmas\" covers December 16, 2023 to December 25, 2023 and holds 2 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Winter of Christmas",
       "startDate": "2023-12-16T15:00:00.000Z",
       "endDate": "2023-12-25T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_94fab9ff114312377c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
     "poster": null,
     "caption": "Christmas morning, matching pajamas",
     "storyText": "",
     "takenAt": "2023-12-25T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 25, 2023, with Rooney, Milo and Grandma June. Moment 12 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-12-25T15:00:00.000Z",
        "formatted": "December 25, 2023",
        "season": "Winter",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 12,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_4e9bdea78284d98733",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
     "poster": null,
     "caption": "The tree goes up, Milo directs",
     "storyText": "",
     "takenAt": "2023-12-16T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 16, 2023, with Rooney, Milo and Grandma June. Moment 11 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2023-12-16T15:00:00.000Z",
        "formatted": "December 16, 2023",
        "season": "Winter",
        "year": 2023
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 11,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-04&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_fc9aa72ed1fd09c617",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2024-04-06T15:00:00.000Z",
     "endDate": "2024-04-13T15:00:00.000Z",
     "season": "Spring",
     "year": 2024,
     "narrative": "Between April 6, 2024 and April 13, 2024, your family kept 2 memories here.\nIn these memories: Rooney, Grandma June.\nIn your own words:\n- April 6, 2024: Planting peas with Grandma June\n- April 13, 2024: Birthday breakfast in bed for Rooney",
     "memoryIds": [
      "mem_e18ef9b9ba986dc720",
      "mem_6fcc2eced27e195091"
     ],
     "order": 7,
     "updatedAt": "2026-10-30T20:42:09.037Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 6, 2024 to April 13, 2024 and holds 2 memories. In these memories: Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2024-04-06T15:00:00.000Z",
       "endDate": "2024-04-13T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_6fcc2eced27e195091",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_6fcc2eced27e195091-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_6fcc2eced27e195091-web.jpg",
     "poster": null,
     "caption": "Birthday breakfast in bed for Rooney",
     "storyText": "",
     "takenAt": "2024-04-13T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 13, 2024, with Rooney. Moment 4 of 6 in the thread \"Birthdays, spring after spring\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-04-13T15:00:00.000Z",
        "formatted": "April 13, 2024",
        "season": "Spring",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Birthdays, spring after spring",
        "position": 4,
        "count": 6,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_e18ef9b9ba986dc720",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
     "poster": null,
     "caption": "Planting peas with Grandma June",
     "storyText": "",
     "takenAt": "2024-04-06T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 6, 2024, with Rooney and Grandma June. Moment 9 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-04-06T15:00:00.000Z",
        "formatted": "April 6, 2024",
        "season": "Spring",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 9,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-04&scope=per_1c03ef455d57eb3eb6": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-04&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_fc9aa72ed1fd09c617",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2024-04-06T15:00:00.000Z",
     "endDate": "2024-04-13T15:00:00.000Z",
     "season": "Spring",
     "year": 2024,
     "narrative": "Between April 6, 2024 and April 13, 2024, your family kept 2 memories here.\nIn these memories: Rooney, Grandma June.\nIn your own words:\n- April 6, 2024: Planting peas with Grandma June\n- April 13, 2024: Birthday breakfast in bed for Rooney",
     "memoryIds": [
      "mem_e18ef9b9ba986dc720",
      "mem_6fcc2eced27e195091"
     ],
     "order": 7,
     "updatedAt": "2026-10-30T20:42:09.037Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 6, 2024 to April 13, 2024 and holds 2 memories. In these memories: Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2024-04-06T15:00:00.000Z",
       "endDate": "2024-04-13T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_6fcc2eced27e195091",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_6fcc2eced27e195091-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_6fcc2eced27e195091-web.jpg",
     "poster": null,
     "caption": "Birthday breakfast in bed for Rooney",
     "storyText": "",
     "takenAt": "2024-04-13T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 13, 2024, with Rooney. Moment 4 of 6 in the thread \"Birthdays, spring after spring\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-04-13T15:00:00.000Z",
        "formatted": "April 13, 2024",
        "season": "Spring",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Birthdays, spring after spring",
        "position": 4,
        "count": 6,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_e18ef9b9ba986dc720",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
     "poster": null,
     "caption": "Planting peas with Grandma June",
     "storyText": "",
     "takenAt": "2024-04-06T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 6, 2024, with Rooney and Grandma June. Moment 9 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-04-06T15:00:00.000Z",
        "formatted": "April 6, 2024",
        "season": "Spring",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 9,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-04&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_fc9aa72ed1fd09c617",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2024-04-06T15:00:00.000Z",
     "endDate": "2024-04-13T15:00:00.000Z",
     "season": "Spring",
     "year": 2024,
     "narrative": "Between April 6, 2024 and April 13, 2024, your family kept 2 memories here.\nIn these memories: Rooney, Grandma June.\nIn your own words:\n- April 6, 2024: Planting peas with Grandma June\n- April 13, 2024: Birthday breakfast in bed for Rooney",
     "memoryIds": [
      "mem_e18ef9b9ba986dc720",
      "mem_6fcc2eced27e195091"
     ],
     "order": 7,
     "updatedAt": "2026-10-30T20:42:09.037Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 6, 2024 to April 13, 2024 and holds 2 memories. In these memories: Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2024-04-06T15:00:00.000Z",
       "endDate": "2024-04-13T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_e18ef9b9ba986dc720",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
     "poster": null,
     "caption": "Planting peas with Grandma June",
     "storyText": "",
     "takenAt": "2024-04-06T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 6, 2024, with Rooney and Grandma June. Moment 9 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-04-06T15:00:00.000Z",
        "formatted": "April 6, 2024",
        "season": "Spring",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 9,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-06&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_46c968b69840a936d2",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-poster.jpg",
     "caption": "Milo's first bike ride, Rooney running behind",
     "storyText": "",
     "takenAt": "2024-06-22T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": 15,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from June 22, 2024, with Milo and Rooney. Moment 13 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-06-22T15:00:00.000Z",
        "formatted": "June 22, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 13,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_01399d6dba81c181c9",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
     "poster": null,
     "caption": "Milo waters the garden his own way",
     "storyText": "",
     "takenAt": "2024-06-15T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 15, 2024, with Grandma June and Milo. Moment 5 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-06-15T15:00:00.000Z",
        "formatted": "June 15, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 5,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_70fd69ae3146cad340",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
     "poster": null,
     "caption": "Rooney's sunflower, taller than her",
     "storyText": "",
     "takenAt": "2024-06-08T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 8, 2024, with Rooney. Memory 1 of 8 in \"The Summer of Dinosaurs\" (June 8, 2024 to August 11, 2024).",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-06-08T15:00:00.000Z",
        "formatted": "June 8, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "The Summer of Dinosaurs",
        "position": 1,
        "count": 8,
        "startDate": "2024-06-08T15:00:00.000Z",
        "endDate": "2024-08-11T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-06&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_46c968b69840a936d2",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-poster.jpg",
     "caption": "Milo's first bike ride, Rooney running behind",
     "storyText": "",
     "takenAt": "2024-06-22T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": 15,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from June 22, 2024, with Milo and Rooney. Moment 13 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-06-22T15:00:00.000Z",
        "formatted": "June 22, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 13,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_01399d6dba81c181c9",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
     "poster": null,
     "caption": "Milo waters the garden his own way",
     "storyText": "",
     "takenAt": "2024-06-15T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 15, 2024, with Grandma June and Milo. Moment 5 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-06-15T15:00:00.000Z",
        "formatted": "June 15, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 5,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-06&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_46c968b69840a936d2",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-poster.jpg",
     "caption": "Milo's first bike ride, Rooney running behind",
     "storyText": "",
     "takenAt": "2024-06-22T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": 15,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from June 22, 2024, with Milo and Rooney. Moment 13 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-06-22T15:00:00.000Z",
        "formatted": "June 22, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "video"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 13,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_70fd69ae3146cad340",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
     "poster": null,
     "caption": "Rooney's sunflower, taller than her",
     "storyText": "",
     "takenAt": "2024-06-08T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 8, 2024, with Rooney. Memory 1 of 8 in \"The Summer of Dinosaurs\" (June 8, 2024 to August 11, 2024).",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-06-08T15:00:00.000Z",
        "formatted": "June 8, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "The Summer of Dinosaurs",
        "position": 1,
        "count": 8,
        "startDate": "2024-06-08T15:00:00.000Z",
        "endDate": "2024-08-11T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-06&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_01399d6dba81c181c9",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
     "poster": null,
     "caption": "Milo waters the garden his own way",
     "storyText": "",
     "takenAt": "2024-06-15T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 15, 2024, with Grandma June and Milo. Moment 5 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-06-15T15:00:00.000Z",
        "formatted": "June 15, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 5,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-07&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_fb3e71ff2665bb362b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
     "poster": null,
     "caption": "The garden, taller than Milo",
     "storyText": "",
     "takenAt": "2024-07-27T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 27, 2024, with Grandma June, Milo and Rooney. Moment 6 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-27T15:00:00.000Z",
        "formatted": "July 27, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 6,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_dd98fca8eabcf0af64",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
     "poster": null,
     "caption": "First ocean day, straight into the waves",
     "storyText": "",
     "takenAt": "2024-07-20T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 20, 2024, with Rooney and Milo. Moment 16 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-20T15:00:00.000Z",
        "formatted": "July 20, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 16,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_36ea069addf1fb73e6",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Three summers of dinosaurs",
     "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "takenAt": "2024-07-18T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 18, 2024, with Rooney and Milo. Moment 15 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-18T15:00:00.000Z",
        "formatted": "July 18, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 15,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_54cb15e5afe5f95cb0",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
     "poster": null,
     "caption": "Face to face with the museum dinosaur",
     "storyText": "",
     "takenAt": "2024-07-06T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 6, 2024, with Rooney and Milo. Moment 14 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-06T15:00:00.000Z",
        "formatted": "July 6, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 14,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-07&scope=per_04a1327dc4ed158c3c": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_04a1327dc4ed158c3c",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-07&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_fb3e71ff2665bb362b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
     "poster": null,
     "caption": "The garden, taller than Milo",
     "storyText": "",
     "takenAt": "2024-07-27T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 27, 2024, with Grandma June, Milo and Rooney. Moment 6 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-27T15:00:00.000Z",
        "formatted": "July 27, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 6,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_dd98fca8eabcf0af64",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
     "poster": null,
     "caption": "First ocean day, straight into the waves",
     "storyText": "",
     "takenAt": "2024-07-20T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 20, 2024, with Rooney and Milo. Moment 16 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-20T15:00:00.000Z",
        "formatted": "July 20, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 16,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_36ea069addf1fb73e6",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Three summers of dinosaurs",
     "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "takenAt": "2024-07-18T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 18, 2024, with Rooney and Milo. Moment 15 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-18T15:00:00.000Z",
        "formatted": "July 18, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 15,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_54cb15e5afe5f95cb0",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
     "poster": null,
     "caption": "Face to face with the museum dinosaur",
     "storyText": "",
     "takenAt": "2024-07-06T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 6, 2024, with Rooney and Milo. Moment 14 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-06T15:00:00.000Z",
        "formatted": "July 6, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 14,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-07&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_fb3e71ff2665bb362b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
     "poster": null,
     "caption": "The garden, taller than Milo",
     "storyText": "",
     "takenAt": "2024-07-27T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 27, 2024, with Grandma June, Milo and Rooney. Moment 6 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-27T15:00:00.000Z",
        "formatted": "July 27, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 6,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_dd98fca8eabcf0af64",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
     "poster": null,
     "caption": "First ocean day, straight into the waves",
     "storyText": "",
     "takenAt": "2024-07-20T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 20, 2024, with Rooney and Milo. Moment 16 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-20T15:00:00.000Z",
        "formatted": "July 20, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 16,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_36ea069addf1fb73e6",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Three summers of dinosaurs",
     "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "takenAt": "2024-07-18T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from July 18, 2024, with Rooney and Milo. Moment 15 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-18T15:00:00.000Z",
        "formatted": "July 18, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 15,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_54cb15e5afe5f95cb0",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
     "poster": null,
     "caption": "Face to face with the museum dinosaur",
     "storyText": "",
     "takenAt": "2024-07-06T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 6, 2024, with Rooney and Milo. Moment 14 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-06T15:00:00.000Z",
        "formatted": "July 6, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 14,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-07&scope=per_aa070d4d417e870984": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aa070d4d417e870984",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-07&scope=per_aae84005dd4d3217b0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aae84005dd4d3217b0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-07&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_fb3e71ff2665bb362b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
     "poster": null,
     "caption": "The garden, taller than Milo",
     "storyText": "",
     "takenAt": "2024-07-27T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 27, 2024, with Grandma June, Milo and Rooney. Moment 6 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-27T15:00:00.000Z",
        "formatted": "July 27, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 6,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-08&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_f7ad9c71b08b61d04c",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Dinosaurs",
     "userRenamed": false,
     "startDate": "2024-06-08T15:00:00.000Z",
     "endDate": "2024-08-11T15:00:00.000Z",
     "season": "Summer",
     "year": 2024,
     "narrative": "Between June 8, 2024 and August 11, 2024, your family kept 8 memories here.\nIn these memories: Rooney, Grandma June, Milo.\nIn your own words:\n- June 8, 2024: Rooney's sunflower, taller than her\n- June 15, 2024: Milo waters the garden his own way\n- June 22, 2024: Milo's first bike ride, Rooney running behind\n- July 6, 2024: Face to face with the museum dinosaur\n- July 18, 2024: Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.\n- July 20, 2024: First ocean day, straight into the waves\n- July 27, 2024: The garden, taller than Milo\n- August 11, 2024: Ocean hair, don't care",
     "memoryIds": [
      "mem_70fd69ae3146cad340",
      "mem_01399d6dba81c181c9",
      "mem_46c968b69840a936d2",
      "mem_54cb15e5afe5f95cb0",
      "mem_36ea069addf1fb73e6",
      "mem_dd98fca8eabcf0af64",
      "mem_fb3e71ff2665bb362b",
      "mem_202fb58f4798322320"
     ],
     "order": 8,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
    "commentary": {
     "text": "\"The Summer of Dinosaurs\" covers June 8, 2024 to August 11, 2024 and holds 8 memories. In these memories: Rooney, Grandma June and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Dinosaurs",
       "startDate": "2024-06-08T15:00:00.000Z",
       "endDate": "2024-08-11T15:00:00.000Z",
       "count": 8
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_202fb58f4798322320",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
     "poster": null,
     "caption": "Ocean hair, don't care",
     "storyText": "",
     "takenAt": "2024-08-11T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 11, 2024, with Rooney. Moment 4 of 5 in the thread \"Oceans, summer after summer\", which runs from 2023 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-08-11T15:00:00.000Z",
        "formatted": "August 11, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Oceans, summer after summer",
        "position": 4,
        "count": 5,
        "fromYear": 2023,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-08&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_f7ad9c71b08b61d04c",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Dinosaurs",
     "userRenamed": false,
     "startDate": "2024-06-08T15:00:00.000Z",
     "endDate": "2024-08-11T15:00:00.000Z",
     "season": "Summer",
     "year": 2024,
     "narrative": "Between June 8, 2024 and August 11, 2024, your family kept 8 memories here.\nIn these memories: Rooney, Grandma June, Milo.\nIn your own words:\n- June 8, 2024: Rooney's sunflower, taller than her\n- June 15, 2024: Milo waters the garden his own way\n- June 22, 2024: Milo's first bike ride, Rooney running behind\n- July 6, 2024: Face to face with the museum dinosaur\n- July 18, 2024: Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.\n- July 20, 2024: First ocean day, straight into the waves\n- July 27, 2024: The garden, taller than Milo\n- August 11, 2024: Ocean hair, don't care",
     "memoryIds": [
      "mem_70fd69ae3146cad340",
      "mem_01399d6dba81c181c9",
      "mem_46c968b69840a936d2",
      "mem_54cb15e5afe5f95cb0",
      "mem_36ea069addf1fb73e6",
      "mem_dd98fca8eabcf0af64",
      "mem_fb3e71ff2665bb362b",
      "mem_202fb58f4798322320"
     ],
     "order": 8,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
    "commentary": {
     "text": "\"The Summer of Dinosaurs\" covers June 8, 2024 to August 11, 2024 and holds 8 memories. In these memories: Rooney, Grandma June and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Dinosaurs",
       "startDate": "2024-06-08T15:00:00.000Z",
       "endDate": "2024-08-11T15:00:00.000Z",
       "count": 8
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June",
        "Milo"
       ]
      }
     ]
    }
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-08&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_f7ad9c71b08b61d04c",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Dinosaurs",
     "userRenamed": false,
     "startDate": "2024-06-08T15:00:00.000Z",
     "endDate": "2024-08-11T15:00:00.000Z",
     "season": "Summer",
     "year": 2024,
     "narrative": "Between June 8, 2024 and August 11, 2024, your family kept 8 memories here.\nIn these memories: Rooney, Grandma June, Milo.\nIn your own words:\n- June 8, 2024: Rooney's sunflower, taller than her\n- June 15, 2024: Milo waters the garden his own way\n- June 22, 2024: Milo's first bike ride, Rooney running behind\n- July 6, 2024: Face to face with the museum dinosaur\n- July 18, 2024: Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.\n- July 20, 2024: First ocean day, straight into the waves\n- July 27, 2024: The garden, taller than Milo\n- August 11, 2024: Ocean hair, don't care",
     "memoryIds": [
      "mem_70fd69ae3146cad340",
      "mem_01399d6dba81c181c9",
      "mem_46c968b69840a936d2",
      "mem_54cb15e5afe5f95cb0",
      "mem_36ea069addf1fb73e6",
      "mem_dd98fca8eabcf0af64",
      "mem_fb3e71ff2665bb362b",
      "mem_202fb58f4798322320"
     ],
     "order": 8,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
    "commentary": {
     "text": "\"The Summer of Dinosaurs\" covers June 8, 2024 to August 11, 2024 and holds 8 memories. In these memories: Rooney, Grandma June and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Dinosaurs",
       "startDate": "2024-06-08T15:00:00.000Z",
       "endDate": "2024-08-11T15:00:00.000Z",
       "count": 8
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_202fb58f4798322320",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
     "poster": null,
     "caption": "Ocean hair, don't care",
     "storyText": "",
     "takenAt": "2024-08-11T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 11, 2024, with Rooney. Moment 4 of 5 in the thread \"Oceans, summer after summer\", which runs from 2023 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-08-11T15:00:00.000Z",
        "formatted": "August 11, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Oceans, summer after summer",
        "position": 4,
        "count": 5,
        "fromYear": 2023,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-08&scope=per_f67acb6274b180d4a0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-09&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_74b4de13459ab5e92c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
     "poster": null,
     "caption": "Milo's fourth birthday, balloons everywhere",
     "storyText": "",
     "takenAt": "2024-09-07T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 7, 2024, with Milo, Rooney and Grandma June. Moment 18 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-09-07T15:00:00.000Z",
        "formatted": "September 7, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 18,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_4836287c77ee44c79c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
     "poster": null,
     "caption": "First day of preschool for Milo",
     "storyText": "",
     "takenAt": "2024-09-01T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 1, 2024, with Milo. Memory 1 of 3 in \"Fall 2024 with Milo\" (September 1, 2024 to October 30, 2024).",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-09-01T15:00:00.000Z",
        "formatted": "September 1, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2024 with Milo",
        "position": 1,
        "count": 3,
        "startDate": "2024-09-01T15:00:00.000Z",
        "endDate": "2024-10-30T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-09&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_74b4de13459ab5e92c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
     "poster": null,
     "caption": "Milo's fourth birthday, balloons everywhere",
     "storyText": "",
     "takenAt": "2024-09-07T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 7, 2024, with Milo, Rooney and Grandma June. Moment 18 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-09-07T15:00:00.000Z",
        "formatted": "September 7, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 18,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_4836287c77ee44c79c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
     "poster": null,
     "caption": "First day of preschool for Milo",
     "storyText": "",
     "takenAt": "2024-09-01T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 1, 2024, with Milo. Memory 1 of 3 in \"Fall 2024 with Milo\" (September 1, 2024 to October 30, 2024).",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-09-01T15:00:00.000Z",
        "formatted": "September 1, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2024 with Milo",
        "position": 1,
        "count": 3,
        "startDate": "2024-09-01T15:00:00.000Z",
        "endDate": "2024-10-30T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-09&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_74b4de13459ab5e92c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
     "poster": null,
     "caption": "Milo's fourth birthday, balloons everywhere",
     "storyText": "",
     "takenAt": "2024-09-07T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 7, 2024, with Milo, Rooney and Grandma June. Moment 18 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-09-07T15:00:00.000Z",
        "formatted": "September 7, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 18,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-09&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_74b4de13459ab5e92c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
     "poster": null,
     "caption": "Milo's fourth birthday, balloons everywhere",
     "storyText": "",
     "takenAt": "2024-09-07T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 7, 2024, with Milo, Rooney and Grandma June. Moment 18 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-09-07T15:00:00.000Z",
        "formatted": "September 7, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 18,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-10&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_73f2cf5cc2563a5100",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from October 30, 2024, with Rooney, Milo and Grandma June. It was kept 2 years ago today.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-10-30T15:00:00.000Z",
        "formatted": "October 30, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "anniversary",
        "yearsAgo": 2,
        "date": "2024-10-30T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": true
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_3ced39a3685e001a15",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Milo",
     "userRenamed": false,
     "startDate": "2024-09-01T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between September 1, 2024 and October 30, 2024, your family kept 3 memories here.\nIn these memories: Milo, Rooney, Grandma June.\nIn your own words:\n- September 1, 2024: First day of preschool for Milo\n- September 7, 2024: Milo's fourth birthday, balloons everywhere\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_4836287c77ee44c79c",
      "mem_74b4de13459ab5e92c",
      "mem_73f2cf5cc2563a5100"
     ],
     "order": 9,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "commentary": {
     "text": "\"Fall 2024 with Milo\" covers September 1, 2024 to October 30, 2024 and holds 3 memories. In these memories: Milo, Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Milo",
       "startDate": "2024-09-01T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 3
      },
      {
       "type": "people",
       "names": [
        "Milo",
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-10&scope=per_04a1327dc4ed158c3c": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_04a1327dc4ed158c3c",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-10&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_73f2cf5cc2563a5100",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from October 30, 2024, with Rooney, Milo and Grandma June. It was kept 2 years ago today.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-10-30T15:00:00.000Z",
        "formatted": "October 30, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "anniversary",
        "yearsAgo": 2,
        "date": "2024-10-30T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": true
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_3ced39a3685e001a15",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Milo",
     "userRenamed": false,
     "startDate": "2024-09-01T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between September 1, 2024 and October 30, 2024, your family kept 3 memories here.\nIn these memories: Milo, Rooney, Grandma June.\nIn your own words:\n- September 1, 2024: First day of preschool for Milo\n- September 7, 2024: Milo's fourth birthday, balloons everywhere\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_4836287c77ee44c79c",
      "mem_74b4de13459ab5e92c",
      "mem_73f2cf5cc2563a5100"
     ],
     "order": 9,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "commentary": {
     "text": "\"Fall 2024 with Milo\" covers September 1, 2024 to October 30, 2024 and holds 3 memories. In these memories: Milo, Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Milo",
       "startDate": "2024-09-01T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 3
      },
      {
       "type": "people",
       "names": [
        "Milo",
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-10&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_73f2cf5cc2563a5100",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from October 30, 2024, with Rooney, Milo and Grandma June. It was kept 2 years ago today.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-10-30T15:00:00.000Z",
        "formatted": "October 30, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "anniversary",
        "yearsAgo": 2,
        "date": "2024-10-30T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": true
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_3ced39a3685e001a15",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Milo",
     "userRenamed": false,
     "startDate": "2024-09-01T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between September 1, 2024 and October 30, 2024, your family kept 3 memories here.\nIn these memories: Milo, Rooney, Grandma June.\nIn your own words:\n- September 1, 2024: First day of preschool for Milo\n- September 7, 2024: Milo's fourth birthday, balloons everywhere\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_4836287c77ee44c79c",
      "mem_74b4de13459ab5e92c",
      "mem_73f2cf5cc2563a5100"
     ],
     "order": 9,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "commentary": {
     "text": "\"Fall 2024 with Milo\" covers September 1, 2024 to October 30, 2024 and holds 3 memories. In these memories: Milo, Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Milo",
       "startDate": "2024-09-01T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 3
      },
      {
       "type": "people",
       "names": [
        "Milo",
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-10&scope=per_aa070d4d417e870984": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aa070d4d417e870984",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-10&scope=per_aae84005dd4d3217b0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aae84005dd4d3217b0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-10&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_73f2cf5cc2563a5100",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from October 30, 2024, with Rooney, Milo and Grandma June. It was kept 2 years ago today.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-10-30T15:00:00.000Z",
        "formatted": "October 30, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "anniversary",
        "yearsAgo": 2,
        "date": "2024-10-30T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": true
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_3ced39a3685e001a15",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Milo",
     "userRenamed": false,
     "startDate": "2024-09-01T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between September 1, 2024 and October 30, 2024, your family kept 3 memories here.\nIn these memories: Milo, Rooney, Grandma June.\nIn your own words:\n- September 1, 2024: First day of preschool for Milo\n- September 7, 2024: Milo's fourth birthday, balloons everywhere\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_4836287c77ee44c79c",
      "mem_74b4de13459ab5e92c",
      "mem_73f2cf5cc2563a5100"
     ],
     "order": 9,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "commentary": {
     "text": "\"Fall 2024 with Milo\" covers September 1, 2024 to October 30, 2024 and holds 3 memories. In these memories: Milo, Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Milo",
       "startDate": "2024-09-01T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 3
      },
      {
       "type": "people",
       "names": [
        "Milo",
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-12&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_1769fa00b0d12b9042",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Winter 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-12-24T15:00:00.000Z",
     "endDate": "2024-12-24T15:00:00.000Z",
     "season": "Winter",
     "year": 2024,
     "narrative": "Between December 24, 2024 and December 24, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- December 24, 2024: Christmas Eve, cookies for Santa",
     "memoryIds": [
      "mem_f2aab3298ef0e8a8e2"
     ],
     "order": 10,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "commentary": {
     "text": "\"Winter 2024 with Rooney\" covers December 24, 2024 to December 24, 2024 and holds 1 memory. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Winter 2024 with Rooney",
       "startDate": "2024-12-24T15:00:00.000Z",
       "endDate": "2024-12-24T15:00:00.000Z",
       "count": 1
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f2aab3298ef0e8a8e2",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
     "poster": null,
     "caption": "Christmas Eve, cookies for Santa",
     "storyText": "",
     "takenAt": "2024-12-24T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 24, 2024, with Rooney and Milo. Moment 20 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-12-24T15:00:00.000Z",
        "formatted": "December 24, 2024",
        "season": "Winter",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 20,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-12&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_1769fa00b0d12b9042",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Winter 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-12-24T15:00:00.000Z",
     "endDate": "2024-12-24T15:00:00.000Z",
     "season": "Winter",
     "year": 2024,
     "narrative": "Between December 24, 2024 and December 24, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- December 24, 2024: Christmas Eve, cookies for Santa",
     "memoryIds": [
      "mem_f2aab3298ef0e8a8e2"
     ],
     "order": 10,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "commentary": {
     "text": "\"Winter 2024 with Rooney\" covers December 24, 2024 to December 24, 2024 and holds 1 memory. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Winter 2024 with Rooney",
       "startDate": "2024-12-24T15:00:00.000Z",
       "endDate": "2024-12-24T15:00:00.000Z",
       "count": 1
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f2aab3298ef0e8a8e2",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
     "poster": null,
     "caption": "Christmas Eve, cookies for Santa",
     "storyText": "",
     "takenAt": "2024-12-24T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 24, 2024, with Rooney and Milo. Moment 20 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-12-24T15:00:00.000Z",
        "formatted": "December 24, 2024",
        "season": "Winter",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 20,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-12&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_1769fa00b0d12b9042",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Winter 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-12-24T15:00:00.000Z",
     "endDate": "2024-12-24T15:00:00.000Z",
     "season": "Winter",
     "year": 2024,
     "narrative": "Between December 24, 2024 and December 24, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- December 24, 2024: Christmas Eve, cookies for Santa",
     "memoryIds": [
      "mem_f2aab3298ef0e8a8e2"
     ],
     "order": 10,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "commentary": {
     "text": "\"Winter 2024 with Rooney\" covers December 24, 2024 to December 24, 2024 and holds 1 memory. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Winter 2024 with Rooney",
       "startDate": "2024-12-24T15:00:00.000Z",
       "endDate": "2024-12-24T15:00:00.000Z",
       "count": 1
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f2aab3298ef0e8a8e2",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
     "poster": null,
     "caption": "Christmas Eve, cookies for Santa",
     "storyText": "",
     "takenAt": "2024-12-24T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from December 24, 2024, with Rooney and Milo. Moment 20 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-12-24T15:00:00.000Z",
        "formatted": "December 24, 2024",
        "season": "Winter",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 20,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-12&scope=per_f67acb6274b180d4a0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-04&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_7aa649f0ff57ad2cb8",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2025-04-05T15:00:00.000Z",
     "endDate": "2025-04-12T15:00:00.000Z",
     "season": "Spring",
     "year": 2025,
     "narrative": "Between April 5, 2025 and April 12, 2025, your family kept 2 memories here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- April 5, 2025: Rooney reads to the whole class\n- April 12, 2025: Seven: a birthday crown and big plans",
     "memoryIds": [
      "mem_66e690fc8ee0883d1f",
      "mem_2a0a0b17b2d2264708"
     ],
     "order": 11,
     "updatedAt": "2026-10-30T20:42:09.039Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 5, 2025 to April 12, 2025 and holds 2 memories. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2025-04-05T15:00:00.000Z",
       "endDate": "2025-04-12T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_2a0a0b17b2d2264708",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
     "poster": null,
     "caption": "Seven: a birthday crown and big plans",
     "storyText": "",
     "takenAt": "2025-04-12T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 12, 2025, with Rooney and Milo. Moment 21 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-04-12T15:00:00.000Z",
        "formatted": "April 12, 2025",
        "season": "Spring",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 21,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_66e690fc8ee0883d1f",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
     "poster": null,
     "caption": "Rooney reads to the whole class",
     "storyText": "",
     "takenAt": "2025-04-05T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 5, 2025, with Rooney. Memory 1 of 2 in \"The Spring of Birthdays\" (April 5, 2025 to April 12, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-04-05T15:00:00.000Z",
        "formatted": "April 5, 2025",
        "season": "Spring",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "The Spring of Birthdays",
        "position": 1,
        "count": 2,
        "startDate": "2025-04-05T15:00:00.000Z",
        "endDate": "2025-04-12T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-04&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_7aa649f0ff57ad2cb8",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2025-04-05T15:00:00.000Z",
     "endDate": "2025-04-12T15:00:00.000Z",
     "season": "Spring",
     "year": 2025,
     "narrative": "Between April 5, 2025 and April 12, 2025, your family kept 2 memories here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- April 5, 2025: Rooney reads to the whole class\n- April 12, 2025: Seven: a birthday crown and big plans",
     "memoryIds": [
      "mem_66e690fc8ee0883d1f",
      "mem_2a0a0b17b2d2264708"
     ],
     "order": 11,
     "updatedAt": "2026-10-30T20:42:09.039Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 5, 2025 to April 12, 2025 and holds 2 memories. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2025-04-05T15:00:00.000Z",
       "endDate": "2025-04-12T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_2a0a0b17b2d2264708",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
     "poster": null,
     "caption": "Seven: a birthday crown and big plans",
     "storyText": "",
     "takenAt": "2025-04-12T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 12, 2025, with Rooney and Milo. Moment 21 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-04-12T15:00:00.000Z",
        "formatted": "April 12, 2025",
        "season": "Spring",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 21,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-04&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_7aa649f0ff57ad2cb8",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2025-04-05T15:00:00.000Z",
     "endDate": "2025-04-12T15:00:00.000Z",
     "season": "Spring",
     "year": 2025,
     "narrative": "Between April 5, 2025 and April 12, 2025, your family kept 2 memories here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- April 5, 2025: Rooney reads to the whole class\n- April 12, 2025: Seven: a birthday crown and big plans",
     "memoryIds": [
      "mem_66e690fc8ee0883d1f",
      "mem_2a0a0b17b2d2264708"
     ],
     "order": 11,
     "updatedAt": "2026-10-30T20:42:09.039Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 5, 2025 to April 12, 2025 and holds 2 memories. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2025-04-05T15:00:00.000Z",
       "endDate": "2025-04-12T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_2a0a0b17b2d2264708",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
     "poster": null,
     "caption": "Seven: a birthday crown and big plans",
     "storyText": "",
     "takenAt": "2025-04-12T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 12, 2025, with Rooney and Milo. Moment 21 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-04-12T15:00:00.000Z",
        "formatted": "April 12, 2025",
        "season": "Spring",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 21,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_66e690fc8ee0883d1f",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
     "poster": null,
     "caption": "Rooney reads to the whole class",
     "storyText": "",
     "takenAt": "2025-04-05T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 5, 2025, with Rooney. Memory 1 of 2 in \"The Spring of Birthdays\" (April 5, 2025 to April 12, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-04-05T15:00:00.000Z",
        "formatted": "April 5, 2025",
        "season": "Spring",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "The Spring of Birthdays",
        "position": 1,
        "count": 2,
        "startDate": "2025-04-05T15:00:00.000Z",
        "endDate": "2025-04-12T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-04&scope=per_f67acb6274b180d4a0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-06&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_2470198b42e1c9e540",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
     "poster": null,
     "caption": "Grandma's garden, sixth summer",
     "storyText": "",
     "takenAt": "2025-06-21T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 21, 2025, with Grandma June and Rooney. Moment 7 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-06-21T15:00:00.000Z",
        "formatted": "June 21, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 7,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_903bad6961b6d2995b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
     "poster": null,
     "caption": "First splash day of summer",
     "storyText": "",
     "takenAt": "2025-06-14T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 14, 2025, with Rooney and Milo. Moment 22 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-06-14T15:00:00.000Z",
        "formatted": "June 14, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 22,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-06&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_903bad6961b6d2995b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
     "poster": null,
     "caption": "First splash day of summer",
     "storyText": "",
     "takenAt": "2025-06-14T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 14, 2025, with Rooney and Milo. Moment 22 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-06-14T15:00:00.000Z",
        "formatted": "June 14, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 22,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-06&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_2470198b42e1c9e540",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
     "poster": null,
     "caption": "Grandma's garden, sixth summer",
     "storyText": "",
     "takenAt": "2025-06-21T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 21, 2025, with Grandma June and Rooney. Moment 7 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-06-21T15:00:00.000Z",
        "formatted": "June 21, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 7,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_903bad6961b6d2995b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
     "poster": null,
     "caption": "First splash day of summer",
     "storyText": "",
     "takenAt": "2025-06-14T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 14, 2025, with Rooney and Milo. Moment 22 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-06-14T15:00:00.000Z",
        "formatted": "June 14, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 22,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-06&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_2470198b42e1c9e540",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
     "poster": null,
     "caption": "Grandma's garden, sixth summer",
     "storyText": "",
     "takenAt": "2025-06-21T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 21, 2025, with Grandma June and Rooney. Moment 7 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-06-21T15:00:00.000Z",
        "formatted": "June 21, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 7,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-07&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_7807b53986c470156f",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "poster": null,
     "caption": "The ocean, one year on",
     "storyText": "",
     "takenAt": "2025-07-19T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 19, 2025, with Rooney, Milo and Grandma June. Moment 24 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-07-19T15:00:00.000Z",
        "formatted": "July 19, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 24,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_60086cd206cb7bd499",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
     "poster": null,
     "caption": "Two bikes, one summer",
     "storyText": "",
     "takenAt": "2025-07-12T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 12, 2025, with Rooney and Milo. Moment 23 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-07-12T15:00:00.000Z",
        "formatted": "July 12, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 23,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-07&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_7807b53986c470156f",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "poster": null,
     "caption": "The ocean, one year on",
     "storyText": "",
     "takenAt": "2025-07-19T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 19, 2025, with Rooney, Milo and Grandma June. Moment 24 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-07-19T15:00:00.000Z",
        "formatted": "July 19, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 24,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_60086cd206cb7bd499",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
     "poster": null,
     "caption": "Two bikes, one summer",
     "storyText": "",
     "takenAt": "2025-07-12T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 12, 2025, with Rooney and Milo. Moment 23 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-07-12T15:00:00.000Z",
        "formatted": "July 12, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 23,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-07&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_7807b53986c470156f",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "poster": null,
     "caption": "The ocean, one year on",
     "storyText": "",
     "takenAt": "2025-07-19T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 19, 2025, with Rooney, Milo and Grandma June. Moment 24 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-07-19T15:00:00.000Z",
        "formatted": "July 19, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 24,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_60086cd206cb7bd499",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
     "poster": null,
     "caption": "Two bikes, one summer",
     "storyText": "",
     "takenAt": "2025-07-12T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 12, 2025, with Rooney and Milo. Moment 23 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-07-12T15:00:00.000Z",
        "formatted": "July 12, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 23,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-07&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_7807b53986c470156f",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "poster": null,
     "caption": "The ocean, one year on",
     "storyText": "",
     "takenAt": "2025-07-19T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 19, 2025, with Rooney, Milo and Grandma June. Moment 24 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-07-19T15:00:00.000Z",
        "formatted": "July 19, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 24,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-08&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_0eee7456d81132d561",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Summer 2025 with Rooney",
     "userRenamed": false,
     "startDate": "2025-06-14T15:00:00.000Z",
     "endDate": "2025-08-16T15:00:00.000Z",
     "season": "Summer",
     "year": 2025,
     "narrative": "Between June 14, 2025 and August 16, 2025, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- June 14, 2025: First splash day of summer\n- June 21, 2025: Grandma's garden, sixth summer\n- July 12, 2025: Two bikes, one summer\n- July 19, 2025: The ocean, one year on\n- August 2, 2025: Pool noodles and big jumps\n- August 16, 2025: Grandma June teaches Rooney to shell peas",
     "memoryIds": [
      "mem_903bad6961b6d2995b",
      "mem_2470198b42e1c9e540",
      "mem_60086cd206cb7bd499",
      "mem_7807b53986c470156f",
      "mem_f454bc241be340cb79",
      "mem_979e2268db43b1f51b"
     ],
     "order": 12,
     "updatedAt": "2026-10-30T20:42:09.039Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "commentary": {
     "text": "\"Summer 2025 with Rooney\" covers June 14, 2025 to August 16, 2025 and holds 6 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Summer 2025 with Rooney",
       "startDate": "2025-06-14T15:00:00.000Z",
       "endDate": "2025-08-16T15:00:00.000Z",
       "count": 6
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_979e2268db43b1f51b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
     "poster": null,
     "caption": "Grandma June teaches Rooney to shell peas",
     "storyText": "",
     "takenAt": "2025-08-16T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 16, 2025, with Grandma June and Rooney. Moment 15 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-08-16T15:00:00.000Z",
        "formatted": "August 16, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 15,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f454bc241be340cb79",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
     "poster": null,
     "caption": "Pool noodles and big jumps",
     "storyText": "",
     "takenAt": "2025-08-02T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 2, 2025, with Milo and Rooney. Moment 25 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-08-02T15:00:00.000Z",
        "formatted": "August 2, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 25,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-08&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_0eee7456d81132d561",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Summer 2025 with Rooney",
     "userRenamed": false,
     "startDate": "2025-06-14T15:00:00.000Z",
     "endDate": "2025-08-16T15:00:00.000Z",
     "season": "Summer",
     "year": 2025,
     "narrative": "Between June 14, 2025 and August 16, 2025, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- June 14, 2025: First splash day of summer\n- June 21, 2025: Grandma's garden, sixth summer\n- July 12, 2025: Two bikes, one summer\n- July 19, 2025: The ocean, one year on\n- August 2, 2025: Pool noodles and big jumps\n- August 16, 2025: Grandma June teaches Rooney to shell peas",
     "memoryIds": [
      "mem_903bad6961b6d2995b",
      "mem_2470198b42e1c9e540",
      "mem_60086cd206cb7bd499",
      "mem_7807b53986c470156f",
      "mem_f454bc241be340cb79",
      "mem_979e2268db43b1f51b"
     ],
     "order": 12,
     "updatedAt": "2026-10-30T20:42:09.039Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "commentary": {
     "text": "\"Summer 2025 with Rooney\" covers June 14, 2025 to August 16, 2025 and holds 6 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Summer 2025 with Rooney",
       "startDate": "2025-06-14T15:00:00.000Z",
       "endDate": "2025-08-16T15:00:00.000Z",
       "count": 6
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f454bc241be340cb79",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
     "poster": null,
     "caption": "Pool noodles and big jumps",
     "storyText": "",
     "takenAt": "2025-08-02T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 2, 2025, with Milo and Rooney. Moment 25 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-08-02T15:00:00.000Z",
        "formatted": "August 2, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 25,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-08&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_0eee7456d81132d561",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Summer 2025 with Rooney",
     "userRenamed": false,
     "startDate": "2025-06-14T15:00:00.000Z",
     "endDate": "2025-08-16T15:00:00.000Z",
     "season": "Summer",
     "year": 2025,
     "narrative": "Between June 14, 2025 and August 16, 2025, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- June 14, 2025: First splash day of summer\n- June 21, 2025: Grandma's garden, sixth summer\n- July 12, 2025: Two bikes, one summer\n- July 19, 2025: The ocean, one year on\n- August 2, 2025: Pool noodles and big jumps\n- August 16, 2025: Grandma June teaches Rooney to shell peas",
     "memoryIds": [
      "mem_903bad6961b6d2995b",
      "mem_2470198b42e1c9e540",
      "mem_60086cd206cb7bd499",
      "mem_7807b53986c470156f",
      "mem_f454bc241be340cb79",
      "mem_979e2268db43b1f51b"
     ],
     "order": 12,
     "updatedAt": "2026-10-30T20:42:09.039Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "commentary": {
     "text": "\"Summer 2025 with Rooney\" covers June 14, 2025 to August 16, 2025 and holds 6 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Summer 2025 with Rooney",
       "startDate": "2025-06-14T15:00:00.000Z",
       "endDate": "2025-08-16T15:00:00.000Z",
       "count": 6
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_979e2268db43b1f51b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
     "poster": null,
     "caption": "Grandma June teaches Rooney to shell peas",
     "storyText": "",
     "takenAt": "2025-08-16T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 16, 2025, with Grandma June and Rooney. Moment 15 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-08-16T15:00:00.000Z",
        "formatted": "August 16, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 15,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f454bc241be340cb79",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
     "poster": null,
     "caption": "Pool noodles and big jumps",
     "storyText": "",
     "takenAt": "2025-08-02T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 2, 2025, with Milo and Rooney. Moment 25 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-08-02T15:00:00.000Z",
        "formatted": "August 2, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 25,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-08&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_0eee7456d81132d561",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Summer 2025 with Rooney",
     "userRenamed": false,
     "startDate": "2025-06-14T15:00:00.000Z",
     "endDate": "2025-08-16T15:00:00.000Z",
     "season": "Summer",
     "year": 2025,
     "narrative": "Between June 14, 2025 and August 16, 2025, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- June 14, 2025: First splash day of summer\n- June 21, 2025: Grandma's garden, sixth summer\n- July 12, 2025: Two bikes, one summer\n- July 19, 2025: The ocean, one year on\n- August 2, 2025: Pool noodles and big jumps\n- August 16, 2025: Grandma June teaches Rooney to shell peas",
     "memoryIds": [
      "mem_903bad6961b6d2995b",
      "mem_2470198b42e1c9e540",
      "mem_60086cd206cb7bd499",
      "mem_7807b53986c470156f",
      "mem_f454bc241be340cb79",
      "mem_979e2268db43b1f51b"
     ],
     "order": 12,
     "updatedAt": "2026-10-30T20:42:09.039Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "commentary": {
     "text": "\"Summer 2025 with Rooney\" covers June 14, 2025 to August 16, 2025 and holds 6 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Summer 2025 with Rooney",
       "startDate": "2025-06-14T15:00:00.000Z",
       "endDate": "2025-08-16T15:00:00.000Z",
       "count": 6
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_979e2268db43b1f51b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
     "poster": null,
     "caption": "Grandma June teaches Rooney to shell peas",
     "storyText": "",
     "takenAt": "2025-08-16T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 16, 2025, with Grandma June and Rooney. Moment 15 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-08-16T15:00:00.000Z",
        "formatted": "August 16, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 15,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-09&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_6aabc3425a294b31aa",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "The lunchbox note era",
     "storyText": "Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.",
     "takenAt": "2025-09-27T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from September 27, 2025, with Rooney and Milo. Moment 26 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-09-27T15:00:00.000Z",
        "formatted": "September 27, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 26,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f328007bb8e20b0224",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
     "poster": null,
     "caption": "Back to school, second grade",
     "storyText": "",
     "takenAt": "2025-09-13T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 13, 2025, with Rooney. Memory 1 of 5 in \"Fall 2025 with Rooney\" (September 13, 2025 to November 15, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-09-13T15:00:00.000Z",
        "formatted": "September 13, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2025 with Rooney",
        "position": 1,
        "count": 5,
        "startDate": "2025-09-13T15:00:00.000Z",
        "endDate": "2025-11-15T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-09&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_6aabc3425a294b31aa",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "The lunchbox note era",
     "storyText": "Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.",
     "takenAt": "2025-09-27T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from September 27, 2025, with Rooney and Milo. Moment 26 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-09-27T15:00:00.000Z",
        "formatted": "September 27, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 26,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-09&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_6aabc3425a294b31aa",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "The lunchbox note era",
     "storyText": "Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.",
     "takenAt": "2025-09-27T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from September 27, 2025, with Rooney and Milo. Moment 26 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-09-27T15:00:00.000Z",
        "formatted": "September 27, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 26,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f328007bb8e20b0224",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
     "poster": null,
     "caption": "Back to school, second grade",
     "storyText": "",
     "takenAt": "2025-09-13T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 13, 2025, with Rooney. Memory 1 of 5 in \"Fall 2025 with Rooney\" (September 13, 2025 to November 15, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-09-13T15:00:00.000Z",
        "formatted": "September 13, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2025 with Rooney",
        "position": 1,
        "count": 5,
        "startDate": "2025-09-13T15:00:00.000Z",
        "endDate": "2025-11-15T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-09&scope=per_f67acb6274b180d4a0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-10&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_7f2870e0ccda780dba",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
     "poster": null,
     "caption": "Grandma June at the head of the table",
     "storyText": "",
     "takenAt": "2025-10-05T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from October 5, 2025, with Grandma June and Milo. Moment 10 of 10 in the thread \"Milo & Grandma June, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-10-05T15:00:00.000Z",
        "formatted": "October 5, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Grandma June, together",
        "position": 10,
        "count": 10,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-10&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_7f2870e0ccda780dba",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
     "poster": null,
     "caption": "Grandma June at the head of the table",
     "storyText": "",
     "takenAt": "2025-10-05T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from October 5, 2025, with Grandma June and Milo. Moment 10 of 10 in the thread \"Milo & Grandma June, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-10-05T15:00:00.000Z",
        "formatted": "October 5, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Grandma June, together",
        "position": 10,
        "count": 10,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-10&scope=per_47f6d75809a92fae04": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-10&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_7f2870e0ccda780dba",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
     "poster": null,
     "caption": "Grandma June at the head of the table",
     "storyText": "",
     "takenAt": "2025-10-05T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from October 5, 2025, with Grandma June and Milo. Moment 10 of 10 in the thread \"Milo & Grandma June, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-10-05T15:00:00.000Z",
        "formatted": "October 5, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Grandma June, together",
        "position": 10,
        "count": 10,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-11&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_5c6ef2069c6229d0cd",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2025 with Rooney",
     "userRenamed": false,
     "startDate": "2025-09-13T15:00:00.000Z",
     "endDate": "2025-11-15T15:00:00.000Z",
     "season": "Fall",
     "year": 2025,
     "narrative": "Between September 13, 2025 and November 15, 2025, your family kept 5 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- September 13, 2025: Back to school, second grade\n- September 27, 2025: Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.\n- October 5, 2025: Grandma June at the head of the table\n- November 8, 2025: Rooney's first lost tooth\n- November 15, 2025: Milo, five, missing the same one",
     "memoryIds": [
      "mem_f328007bb8e20b0224",
      "mem_6aabc3425a294b31aa",
      "mem_7f2870e0ccda780dba",
      "mem_9384517751ca8103e4",
      "mem_a91f2e4dd0759b6662"
     ],
     "order": 13,
     "updatedAt": "2026-10-30T20:42:09.040Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
    "commentary": {
     "text": "\"Fall 2025 with Rooney\" covers September 13, 2025 to November 15, 2025 and holds 5 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2025 with Rooney",
       "startDate": "2025-09-13T15:00:00.000Z",
       "endDate": "2025-11-15T15:00:00.000Z",
       "count": 5
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_a91f2e4dd0759b6662",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
     "poster": null,
     "caption": "Milo, five, missing the same one",
     "storyText": "",
     "takenAt": "2025-11-15T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from November 15, 2025, with Milo. Memory 5 of 5 in \"Fall 2025 with Rooney\" (September 13, 2025 to November 15, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-11-15T15:00:00.000Z",
        "formatted": "November 15, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2025 with Rooney",
        "position": 5,
        "count": 5,
        "startDate": "2025-09-13T15:00:00.000Z",
        "endDate": "2025-11-15T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_9384517751ca8103e4",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
     "poster": null,
     "caption": "Rooney's first lost tooth",
     "storyText": "",
     "takenAt": "2025-11-08T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from November 8, 2025, with Rooney. Memory 4 of 5 in \"Fall 2025 with Rooney\" (September 13, 2025 to November 15, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-11-08T15:00:00.000Z",
        "formatted": "November 8, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2025 with Rooney",
        "position": 4,
        "count": 5,
        "startDate": "2025-09-13T15:00:00.000Z",
        "endDate": "2025-11-15T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-11&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_5c6ef2069c6229d0cd",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2025 with Rooney",
     "userRenamed": false,
     "startDate": "2025-09-13T15:00:00.000Z",
     "endDate": "2025-11-15T15:00:00.000Z",
     "season": "Fall",
     "year": 2025,
     "narrative": "Between September 13, 2025 and November 15, 2025, your family kept 5 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- September 13, 2025: Back to school, second grade\n- September 27, 2025: Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.\n- October 5, 2025: Grandma June at the head of the table\n- November 8, 2025: Rooney's first lost tooth\n- November 15, 2025: Milo, five, missing the same one",
     "memoryIds": [
      "mem_f328007bb8e20b0224",
      "mem_6aabc3425a294b31aa",
      "mem_7f2870e0ccda780dba",
      "mem_9384517751ca8103e4",
      "mem_a91f2e4dd0759b6662"
     ],
     "order": 13,
     "updatedAt": "2026-10-30T20:42:09.040Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
    "commentary": {
     "text": "\"Fall 2025 with Rooney\" covers September 13, 2025 to November 15, 2025 and holds 5 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2025 with Rooney",
       "startDate": "2025-09-13T15:00:00.000Z",
       "endDate": "2025-11-15T15:00:00.000Z",
       "count": 5
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_a91f2e4dd0759b6662",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
     "poster": null,
     "caption": "Milo, five, missing the same one",
     "storyText": "",
     "takenAt": "2025-11-15T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from November 15, 2025, with Milo. Memory 5 of 5 in \"Fall 2025 with Rooney\" (September 13, 2025 to November 15, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-11-15T15:00:00.000Z",
        "formatted": "November 15, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2025 with Rooney",
        "position": 5,
        "count": 5,
        "startDate": "2025-09-13T15:00:00.000Z",
        "endDate": "2025-11-15T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-11&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_5c6ef2069c6229d0cd",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2025 with Rooney",
     "userRenamed": false,
     "startDate": "2025-09-13T15:00:00.000Z",
     "endDate": "2025-11-15T15:00:00.000Z",
     "season": "Fall",
     "year": 2025,
     "narrative": "Between September 13, 2025 and November 15, 2025, your family kept 5 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- September 13, 2025: Back to school, second grade\n- September 27, 2025: Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.\n- October 5, 2025: Grandma June at the head of the table\n- November 8, 2025: Rooney's first lost tooth\n- November 15, 2025: Milo, five, missing the same one",
     "memoryIds": [
      "mem_f328007bb8e20b0224",
      "mem_6aabc3425a294b31aa",
      "mem_7f2870e0ccda780dba",
      "mem_9384517751ca8103e4",
      "mem_a91f2e4dd0759b6662"
     ],
     "order": 13,
     "updatedAt": "2026-10-30T20:42:09.040Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
    "commentary": {
     "text": "\"Fall 2025 with Rooney\" covers September 13, 2025 to November 15, 2025 and holds 5 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2025 with Rooney",
       "startDate": "2025-09-13T15:00:00.000Z",
       "endDate": "2025-11-15T15:00:00.000Z",
       "count": 5
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_9384517751ca8103e4",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
     "poster": null,
     "caption": "Rooney's first lost tooth",
     "storyText": "",
     "takenAt": "2025-11-08T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from November 8, 2025, with Rooney. Memory 4 of 5 in \"Fall 2025 with Rooney\" (September 13, 2025 to November 15, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-11-08T15:00:00.000Z",
        "formatted": "November 8, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2025 with Rooney",
        "position": 4,
        "count": 5,
        "startDate": "2025-09-13T15:00:00.000Z",
        "endDate": "2025-11-15T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2025-11&scope=per_f67acb6274b180d4a0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&scope=all": {
  "cards": [
   {
    "kind": "hero",
    "observation": "\"garden\" appears in memories from 2021, 2023, 2024, 2025 — 7 memories in all.",
    "evidence": {
     "count": 7,
     "fromYear": 2021,
     "toYear": 2025
    },
    "thread": {
     "id": "thr_b9e51c83f33adac898",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:garden",
     "title": "Gardens, summer after summer",
     "titleRenamed": false,
     "observation": "\"garden\" appears in memories from 2021, 2023, 2024, 2025 — 7 memories in all.",
     "basis": "The word \"garden\" in your captions and writing",
     "match": {
      "word": "garden"
     },
     "memoryIds": [
      "mem_6aa6a2b721b1260593",
      "mem_ec56ae9a061e71a5ab",
      "mem_4b70ed96ef67b29f65",
      "mem_63f222abc7f392d012",
      "mem_01399d6dba81c181c9",
      "mem_fb3e71ff2665bb362b",
      "mem_2470198b42e1c9e540"
     ],
     "evidence": {
      "count": 7,
      "fromYear": 2021,
      "toYear": 2025
     },
     "status": "followed",
     "requiresFollowPersonId": null,
     "seenCount": 0,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T20:42:09.043Z",
     "updatedAt": "2026-10-30T22:10:52.650Z",
     "growthCount": 7
    },
    "threadId": "thr_b9e51c83f33adac898",
    "commentary": {
     "text": "Assembled from 7 moments kept from 2021 to 2025: 6 photos, 1 video. Recorded in them: Grandma June, Rooney and Milo.",
     "basedOn": [
      {
       "type": "thread",
       "title": "Gardens, summer after summer",
       "count": 7,
       "fromYear": 2021,
       "toYear": 2025
      },
      {
       "type": "item_types",
       "counts": {
        "video": 1,
        "photo": 6
       }
      },
      {
       "type": "people",
       "names": [
        "Grandma June",
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "growth",
    "thread": {
     "id": "thr_b9e51c83f33adac898",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:garden",
     "title": "Gardens, summer after summer",
     "titleRenamed": false,
     "observation": "\"garden\" appears in memories from 2021, 2023, 2024, 2025 — 7 memories in all.",
     "basis": "The word \"garden\" in your captions and writing",
     "match": {
      "word": "garden"
     },
     "memoryIds": [
      "mem_6aa6a2b721b1260593",
      "mem_ec56ae9a061e71a5ab",
      "mem_4b70ed96ef67b29f65",
      "mem_63f222abc7f392d012",
      "mem_01399d6dba81c181c9",
      "mem_fb3e71ff2665bb362b",
      "mem_2470198b42e1c9e540"
     ],
     "evidence": {
      "count": 7,
      "fromYear": 2021,
      "toYear": 2025
     },
     "status": "followed",
     "requiresFollowPersonId": null,
     "seenCount": 0,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T20:42:09.043Z",
     "updatedAt": "2026-10-30T22:10:52.650Z",
     "growthCount": 7
    },
    "newCount": 7,
    "commentary": {
     "text": "\"Gardens, summer after summer\" grew by 7 new moments. It now holds 7 moments, from 2021 to 2025.",
     "basedOn": [
      {
       "type": "growth",
       "title": "Gardens, summer after summer",
       "newCount": 7,
       "total": 7,
       "fromYear": 2021,
       "toYear": 2025
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_73f2cf5cc2563a5100",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from October 30, 2024, with Rooney, Milo and Grandma June. It was kept 2 years ago today.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-10-30T15:00:00.000Z",
        "formatted": "October 30, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "anniversary",
        "yearsAgo": 2,
        "date": "2024-10-30T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": true
   },
   {
    "kind": "proposal",
    "thread": {
     "id": "thr_5cd11a25d239b68452",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:dinosaur",
     "title": "Dinosaurs, summer after summer",
     "titleRenamed": false,
     "observation": "\"dinosaur\" appears in memories from 2022, 2023, 2024 — 9 memories in all.",
     "basis": "The word \"dinosaur\" in your captions and writing",
     "match": {
      "word": "dinosaur"
     },
     "memoryIds": [
      "mem_779944c9856c93722e",
      "mem_ffd7b0dcc8b461d108",
      "mem_18e4fe2a9092efba17",
      "mem_7f07a5581eaf9170f5",
      "mem_3fe0a5b5bacfbd9083",
      "mem_d9ce759843bca5c265",
      "mem_054b85eb18d7bb1571",
      "mem_54cb15e5afe5f95cb0",
      "mem_36ea069addf1fb73e6"
     ],
     "evidence": {
      "count": 9,
      "fromYear": 2022,
      "toYear": 2024
     },
     "status": "proposed",
     "requiresFollowPersonId": null,
     "seenCount": 0,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T20:42:09.043Z",
     "updatedAt": "2026-10-30T22:10:52.650Z",
     "growthCount": 9
    },
    "commentary": {
     "text": "This thread holds 9 moments from 2022 to 2024: 3 photos, 1 video, 5 pieces of writing. In these moments: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "thread",
       "title": "Dinosaurs, summer after summer",
       "count": 9,
       "fromYear": 2022,
       "toYear": 2024
      },
      {
       "type": "item_types",
       "counts": {
        "writing": 5,
        "video": 1,
        "photo": 3
       }
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "proposal",
    "thread": {
     "id": "thr_fea6feee44751599b9",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:birthday",
     "title": "Birthdays, spring after spring",
     "titleRenamed": false,
     "observation": "\"birthday\" appears in memories from 2022, 2023, 2024, 2025 — 5 memories in all.",
     "basis": "The word \"birthday\" in your captions and writing",
     "match": {
      "word": "birthday"
     },
     "memoryIds": [
      "mem_e401cb50082a7af781",
      "mem_af4b52e146f5edf5f2",
      "mem_ca71de709a423445c4",
      "mem_6fcc2eced27e195091",
      "mem_74b4de13459ab5e92c",
      "mem_2a0a0b17b2d2264708"
     ],
     "evidence": {
      "count": 6,
      "fromYear": 2022,
      "toYear": 2025
     },
     "status": "proposed",
     "requiresFollowPersonId": null,
     "seenCount": 0,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T20:42:09.043Z",
     "updatedAt": "2026-10-30T22:10:52.650Z",
     "growthCount": 6
    },
    "commentary": {
     "text": "This thread holds 6 moments from 2022 to 2025: 5 photos, 1 video. In these moments: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "thread",
       "title": "Birthdays, spring after spring",
       "count": 6,
       "fromYear": 2022,
       "toYear": 2025
      },
      {
       "type": "item_types",
       "counts": {
        "video": 1,
        "photo": 5
       }
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_5c6ef2069c6229d0cd",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2025 with Rooney",
     "userRenamed": false,
     "startDate": "2025-09-13T15:00:00.000Z",
     "endDate": "2025-11-15T15:00:00.000Z",
     "season": "Fall",
     "year": 2025,
     "narrative": "Between September 13, 2025 and November 15, 2025, your family kept 5 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- September 13, 2025: Back to school, second grade\n- September 27, 2025: Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.\n- October 5, 2025: Grandma June at the head of the table\n- November 8, 2025: Rooney's first lost tooth\n- November 15, 2025: Milo, five, missing the same one",
     "memoryIds": [
      "mem_f328007bb8e20b0224",
      "mem_6aabc3425a294b31aa",
      "mem_7f2870e0ccda780dba",
      "mem_9384517751ca8103e4",
      "mem_a91f2e4dd0759b6662"
     ],
     "order": 13,
     "updatedAt": "2026-10-30T20:42:09.040Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
    "commentary": {
     "text": "\"Fall 2025 with Rooney\" covers September 13, 2025 to November 15, 2025 and holds 5 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2025 with Rooney",
       "startDate": "2025-09-13T15:00:00.000Z",
       "endDate": "2025-11-15T15:00:00.000Z",
       "count": 5
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_a91f2e4dd0759b6662",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
     "poster": null,
     "caption": "Milo, five, missing the same one",
     "storyText": "",
     "takenAt": "2025-11-15T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from November 15, 2025, with Milo. Memory 5 of 5 in \"Fall 2025 with Rooney\" (September 13, 2025 to November 15, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-11-15T15:00:00.000Z",
        "formatted": "November 15, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2025 with Rooney",
        "position": 5,
        "count": 5,
        "startDate": "2025-09-13T15:00:00.000Z",
        "endDate": "2025-11-15T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_9384517751ca8103e4",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
     "poster": null,
     "caption": "Rooney's first lost tooth",
     "storyText": "",
     "takenAt": "2025-11-08T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from November 8, 2025, with Rooney. Memory 4 of 5 in \"Fall 2025 with Rooney\" (September 13, 2025 to November 15, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-11-08T15:00:00.000Z",
        "formatted": "November 8, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2025 with Rooney",
        "position": 4,
        "count": 5,
        "startDate": "2025-09-13T15:00:00.000Z",
        "endDate": "2025-11-15T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_7f2870e0ccda780dba",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
     "poster": null,
     "caption": "Grandma June at the head of the table",
     "storyText": "",
     "takenAt": "2025-10-05T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from October 5, 2025, with Grandma June and Milo. Moment 10 of 10 in the thread \"Milo & Grandma June, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-10-05T15:00:00.000Z",
        "formatted": "October 5, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Grandma June, together",
        "position": 10,
        "count": 10,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_0eee7456d81132d561",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Summer 2025 with Rooney",
     "userRenamed": false,
     "startDate": "2025-06-14T15:00:00.000Z",
     "endDate": "2025-08-16T15:00:00.000Z",
     "season": "Summer",
     "year": 2025,
     "narrative": "Between June 14, 2025 and August 16, 2025, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- June 14, 2025: First splash day of summer\n- June 21, 2025: Grandma's garden, sixth summer\n- July 12, 2025: Two bikes, one summer\n- July 19, 2025: The ocean, one year on\n- August 2, 2025: Pool noodles and big jumps\n- August 16, 2025: Grandma June teaches Rooney to shell peas",
     "memoryIds": [
      "mem_903bad6961b6d2995b",
      "mem_2470198b42e1c9e540",
      "mem_60086cd206cb7bd499",
      "mem_7807b53986c470156f",
      "mem_f454bc241be340cb79",
      "mem_979e2268db43b1f51b"
     ],
     "order": 12,
     "updatedAt": "2026-10-30T20:42:09.039Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "commentary": {
     "text": "\"Summer 2025 with Rooney\" covers June 14, 2025 to August 16, 2025 and holds 6 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Summer 2025 with Rooney",
       "startDate": "2025-06-14T15:00:00.000Z",
       "endDate": "2025-08-16T15:00:00.000Z",
       "count": 6
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_6aabc3425a294b31aa",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "The lunchbox note era",
     "storyText": "Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.",
     "takenAt": "2025-09-27T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from September 27, 2025, with Rooney and Milo. Moment 26 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-09-27T15:00:00.000Z",
        "formatted": "September 27, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 26,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f328007bb8e20b0224",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
     "poster": null,
     "caption": "Back to school, second grade",
     "storyText": "",
     "takenAt": "2025-09-13T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 13, 2025, with Rooney. Memory 1 of 5 in \"Fall 2025 with Rooney\" (September 13, 2025 to November 15, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-09-13T15:00:00.000Z",
        "formatted": "September 13, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2025 with Rooney",
        "position": 1,
        "count": 5,
        "startDate": "2025-09-13T15:00:00.000Z",
        "endDate": "2025-11-15T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": "MTI=",
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&scope=per_04a1327dc4ed158c3c": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_04a1327dc4ed158c3c",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&scope=per_1c03ef455d57eb3eb6": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_73f2cf5cc2563a5100",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from October 30, 2024, with Rooney, Milo and Grandma June. It was kept 2 years ago today.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-10-30T15:00:00.000Z",
        "formatted": "October 30, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "anniversary",
        "yearsAgo": 2,
        "date": "2024-10-30T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": true
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_5c6ef2069c6229d0cd",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2025 with Rooney",
     "userRenamed": false,
     "startDate": "2025-09-13T15:00:00.000Z",
     "endDate": "2025-11-15T15:00:00.000Z",
     "season": "Fall",
     "year": 2025,
     "narrative": "Between September 13, 2025 and November 15, 2025, your family kept 5 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- September 13, 2025: Back to school, second grade\n- September 27, 2025: Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.\n- October 5, 2025: Grandma June at the head of the table\n- November 8, 2025: Rooney's first lost tooth\n- November 15, 2025: Milo, five, missing the same one",
     "memoryIds": [
      "mem_f328007bb8e20b0224",
      "mem_6aabc3425a294b31aa",
      "mem_7f2870e0ccda780dba",
      "mem_9384517751ca8103e4",
      "mem_a91f2e4dd0759b6662"
     ],
     "order": 13,
     "updatedAt": "2026-10-30T20:42:09.040Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
    "commentary": {
     "text": "\"Fall 2025 with Rooney\" covers September 13, 2025 to November 15, 2025 and holds 5 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2025 with Rooney",
       "startDate": "2025-09-13T15:00:00.000Z",
       "endDate": "2025-11-15T15:00:00.000Z",
       "count": 5
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_a91f2e4dd0759b6662",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
     "poster": null,
     "caption": "Milo, five, missing the same one",
     "storyText": "",
     "takenAt": "2025-11-15T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from November 15, 2025, with Milo. Memory 5 of 5 in \"Fall 2025 with Rooney\" (September 13, 2025 to November 15, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-11-15T15:00:00.000Z",
        "formatted": "November 15, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2025 with Rooney",
        "position": 5,
        "count": 5,
        "startDate": "2025-09-13T15:00:00.000Z",
        "endDate": "2025-11-15T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_7f2870e0ccda780dba",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
     "poster": null,
     "caption": "Grandma June at the head of the table",
     "storyText": "",
     "takenAt": "2025-10-05T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from October 5, 2025, with Grandma June and Milo. Moment 10 of 10 in the thread \"Milo & Grandma June, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-10-05T15:00:00.000Z",
        "formatted": "October 5, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Grandma June, together",
        "position": 10,
        "count": 10,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_6aabc3425a294b31aa",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "The lunchbox note era",
     "storyText": "Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.",
     "takenAt": "2025-09-27T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from September 27, 2025, with Rooney and Milo. Moment 26 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-09-27T15:00:00.000Z",
        "formatted": "September 27, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 26,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_0eee7456d81132d561",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Summer 2025 with Rooney",
     "userRenamed": false,
     "startDate": "2025-06-14T15:00:00.000Z",
     "endDate": "2025-08-16T15:00:00.000Z",
     "season": "Summer",
     "year": 2025,
     "narrative": "Between June 14, 2025 and August 16, 2025, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- June 14, 2025: First splash day of summer\n- June 21, 2025: Grandma's garden, sixth summer\n- July 12, 2025: Two bikes, one summer\n- July 19, 2025: The ocean, one year on\n- August 2, 2025: Pool noodles and big jumps\n- August 16, 2025: Grandma June teaches Rooney to shell peas",
     "memoryIds": [
      "mem_903bad6961b6d2995b",
      "mem_2470198b42e1c9e540",
      "mem_60086cd206cb7bd499",
      "mem_7807b53986c470156f",
      "mem_f454bc241be340cb79",
      "mem_979e2268db43b1f51b"
     ],
     "order": 12,
     "updatedAt": "2026-10-30T20:42:09.039Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "commentary": {
     "text": "\"Summer 2025 with Rooney\" covers June 14, 2025 to August 16, 2025 and holds 6 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Summer 2025 with Rooney",
       "startDate": "2025-06-14T15:00:00.000Z",
       "endDate": "2025-08-16T15:00:00.000Z",
       "count": 6
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f454bc241be340cb79",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
     "poster": null,
     "caption": "Pool noodles and big jumps",
     "storyText": "",
     "takenAt": "2025-08-02T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 2, 2025, with Milo and Rooney. Moment 25 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-08-02T15:00:00.000Z",
        "formatted": "August 2, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 25,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_7807b53986c470156f",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "poster": null,
     "caption": "The ocean, one year on",
     "storyText": "",
     "takenAt": "2025-07-19T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 19, 2025, with Rooney, Milo and Grandma June. Moment 24 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-07-19T15:00:00.000Z",
        "formatted": "July 19, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 24,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_60086cd206cb7bd499",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
     "poster": null,
     "caption": "Two bikes, one summer",
     "storyText": "",
     "takenAt": "2025-07-12T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 12, 2025, with Rooney and Milo. Moment 23 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-07-12T15:00:00.000Z",
        "formatted": "July 12, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 23,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_7aa649f0ff57ad2cb8",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2025-04-05T15:00:00.000Z",
     "endDate": "2025-04-12T15:00:00.000Z",
     "season": "Spring",
     "year": 2025,
     "narrative": "Between April 5, 2025 and April 12, 2025, your family kept 2 memories here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- April 5, 2025: Rooney reads to the whole class\n- April 12, 2025: Seven: a birthday crown and big plans",
     "memoryIds": [
      "mem_66e690fc8ee0883d1f",
      "mem_2a0a0b17b2d2264708"
     ],
     "order": 11,
     "updatedAt": "2026-10-30T20:42:09.039Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 5, 2025 to April 12, 2025 and holds 2 memories. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2025-04-05T15:00:00.000Z",
       "endDate": "2025-04-12T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_903bad6961b6d2995b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
     "poster": null,
     "caption": "First splash day of summer",
     "storyText": "",
     "takenAt": "2025-06-14T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 14, 2025, with Rooney and Milo. Moment 22 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-06-14T15:00:00.000Z",
        "formatted": "June 14, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 22,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_2a0a0b17b2d2264708",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
     "poster": null,
     "caption": "Seven: a birthday crown and big plans",
     "storyText": "",
     "takenAt": "2025-04-12T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from April 12, 2025, with Rooney and Milo. Moment 21 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-04-12T15:00:00.000Z",
        "formatted": "April 12, 2025",
        "season": "Spring",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 21,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": "MTI=",
  "scope": "per_1c03ef455d57eb3eb6",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&scope=per_47f6d75809a92fae04": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_73f2cf5cc2563a5100",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from October 30, 2024, with Rooney, Milo and Grandma June. It was kept 2 years ago today.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-10-30T15:00:00.000Z",
        "formatted": "October 30, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "anniversary",
        "yearsAgo": 2,
        "date": "2024-10-30T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": true
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_5c6ef2069c6229d0cd",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2025 with Rooney",
     "userRenamed": false,
     "startDate": "2025-09-13T15:00:00.000Z",
     "endDate": "2025-11-15T15:00:00.000Z",
     "season": "Fall",
     "year": 2025,
     "narrative": "Between September 13, 2025 and November 15, 2025, your family kept 5 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- September 13, 2025: Back to school, second grade\n- September 27, 2025: Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.\n- October 5, 2025: Grandma June at the head of the table\n- November 8, 2025: Rooney's first lost tooth\n- November 15, 2025: Milo, five, missing the same one",
     "memoryIds": [
      "mem_f328007bb8e20b0224",
      "mem_6aabc3425a294b31aa",
      "mem_7f2870e0ccda780dba",
      "mem_9384517751ca8103e4",
      "mem_a91f2e4dd0759b6662"
     ],
     "order": 13,
     "updatedAt": "2026-10-30T20:42:09.040Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
    "commentary": {
     "text": "\"Fall 2025 with Rooney\" covers September 13, 2025 to November 15, 2025 and holds 5 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2025 with Rooney",
       "startDate": "2025-09-13T15:00:00.000Z",
       "endDate": "2025-11-15T15:00:00.000Z",
       "count": 5
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_9384517751ca8103e4",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
     "poster": null,
     "caption": "Rooney's first lost tooth",
     "storyText": "",
     "takenAt": "2025-11-08T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from November 8, 2025, with Rooney. Memory 4 of 5 in \"Fall 2025 with Rooney\" (September 13, 2025 to November 15, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-11-08T15:00:00.000Z",
        "formatted": "November 8, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2025 with Rooney",
        "position": 4,
        "count": 5,
        "startDate": "2025-09-13T15:00:00.000Z",
        "endDate": "2025-11-15T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_6aabc3425a294b31aa",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "The lunchbox note era",
     "storyText": "Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.",
     "takenAt": "2025-09-27T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from September 27, 2025, with Rooney and Milo. Moment 26 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-09-27T15:00:00.000Z",
        "formatted": "September 27, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 26,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f328007bb8e20b0224",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
     "poster": null,
     "caption": "Back to school, second grade",
     "storyText": "",
     "takenAt": "2025-09-13T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 13, 2025, with Rooney. Memory 1 of 5 in \"Fall 2025 with Rooney\" (September 13, 2025 to November 15, 2025).",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-09-13T15:00:00.000Z",
        "formatted": "September 13, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney"
        ]
       },
       {
        "type": "chapter",
        "title": "Fall 2025 with Rooney",
        "position": 1,
        "count": 5,
        "startDate": "2025-09-13T15:00:00.000Z",
        "endDate": "2025-11-15T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_0eee7456d81132d561",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Summer 2025 with Rooney",
     "userRenamed": false,
     "startDate": "2025-06-14T15:00:00.000Z",
     "endDate": "2025-08-16T15:00:00.000Z",
     "season": "Summer",
     "year": 2025,
     "narrative": "Between June 14, 2025 and August 16, 2025, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- June 14, 2025: First splash day of summer\n- June 21, 2025: Grandma's garden, sixth summer\n- July 12, 2025: Two bikes, one summer\n- July 19, 2025: The ocean, one year on\n- August 2, 2025: Pool noodles and big jumps\n- August 16, 2025: Grandma June teaches Rooney to shell peas",
     "memoryIds": [
      "mem_903bad6961b6d2995b",
      "mem_2470198b42e1c9e540",
      "mem_60086cd206cb7bd499",
      "mem_7807b53986c470156f",
      "mem_f454bc241be340cb79",
      "mem_979e2268db43b1f51b"
     ],
     "order": 12,
     "updatedAt": "2026-10-30T20:42:09.039Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "commentary": {
     "text": "\"Summer 2025 with Rooney\" covers June 14, 2025 to August 16, 2025 and holds 6 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Summer 2025 with Rooney",
       "startDate": "2025-06-14T15:00:00.000Z",
       "endDate": "2025-08-16T15:00:00.000Z",
       "count": 6
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_979e2268db43b1f51b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
     "poster": null,
     "caption": "Grandma June teaches Rooney to shell peas",
     "storyText": "",
     "takenAt": "2025-08-16T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 16, 2025, with Grandma June and Rooney. Moment 15 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-08-16T15:00:00.000Z",
        "formatted": "August 16, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 15,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_f454bc241be340cb79",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
     "poster": null,
     "caption": "Pool noodles and big jumps",
     "storyText": "",
     "takenAt": "2025-08-02T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 2, 2025, with Milo and Rooney. Moment 25 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-08-02T15:00:00.000Z",
        "formatted": "August 2, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 25,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_7807b53986c470156f",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "poster": null,
     "caption": "The ocean, one year on",
     "storyText": "",
     "takenAt": "2025-07-19T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 19, 2025, with Rooney, Milo and Grandma June. Moment 24 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-07-19T15:00:00.000Z",
        "formatted": "July 19, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 24,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_7aa649f0ff57ad2cb8",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2025-04-05T15:00:00.000Z",
     "endDate": "2025-04-12T15:00:00.000Z",
     "season": "Spring",
     "year": 2025,
     "narrative": "Between April 5, 2025 and April 12, 2025, your family kept 2 memories here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- April 5, 2025: Rooney reads to the whole class\n- April 12, 2025: Seven: a birthday crown and big plans",
     "memoryIds": [
      "mem_66e690fc8ee0883d1f",
      "mem_2a0a0b17b2d2264708"
     ],
     "order": 11,
     "updatedAt": "2026-10-30T20:42:09.039Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 5, 2025 to April 12, 2025 and holds 2 memories. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2025-04-05T15:00:00.000Z",
       "endDate": "2025-04-12T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_60086cd206cb7bd499",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
     "poster": null,
     "caption": "Two bikes, one summer",
     "storyText": "",
     "takenAt": "2025-07-12T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 12, 2025, with Rooney and Milo. Moment 23 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-07-12T15:00:00.000Z",
        "formatted": "July 12, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 23,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_2470198b42e1c9e540",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
     "poster": null,
     "caption": "Grandma's garden, sixth summer",
     "storyText": "",
     "takenAt": "2025-06-21T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 21, 2025, with Grandma June and Rooney. Moment 7 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-06-21T15:00:00.000Z",
        "formatted": "June 21, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 7,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": "MTI=",
  "scope": "per_47f6d75809a92fae04",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&scope=per_aa070d4d417e870984": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aa070d4d417e870984",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&scope=per_aae84005dd4d3217b0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aae84005dd4d3217b0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&scope=per_f67acb6274b180d4a0": {
  "cards": [
   {
    "kind": "hero",
    "thread": {
     "id": "thr_b9e51c83f33adac898",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:garden",
     "title": "Gardens, summer after summer",
     "titleRenamed": false,
     "observation": "\"garden\" appears in memories from 2021, 2023, 2024, 2025 — 7 memories in all.",
     "basis": "The word \"garden\" in your captions and writing",
     "match": {
      "word": "garden"
     },
     "memoryIds": [
      "mem_6aa6a2b721b1260593",
      "mem_ec56ae9a061e71a5ab",
      "mem_4b70ed96ef67b29f65",
      "mem_63f222abc7f392d012",
      "mem_01399d6dba81c181c9",
      "mem_fb3e71ff2665bb362b",
      "mem_2470198b42e1c9e540"
     ],
     "evidence": {
      "count": 7,
      "fromYear": 2021,
      "toYear": 2025
     },
     "status": "followed",
     "requiresFollowPersonId": null,
     "seenCount": 0,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T20:42:09.043Z",
     "updatedAt": "2026-10-30T22:10:52.795Z",
     "growthCount": 7
    },
    "observation": "\"garden\" appears in memories from 2021, 2023, 2024, 2025 — 7 memories in all.",
    "evidence": {
     "count": 7,
     "fromYear": 2021,
     "toYear": 2025
    },
    "threadId": "thr_b9e51c83f33adac898",
    "commentary": {
     "text": "Assembled from 7 moments kept from 2021 to 2025: 6 photos, 1 video. Recorded in them: Grandma June, Rooney and Milo.",
     "basedOn": [
      {
       "type": "thread",
       "title": "Gardens, summer after summer",
       "count": 7,
       "fromYear": 2021,
       "toYear": 2025
      },
      {
       "type": "item_types",
       "counts": {
        "video": 1,
        "photo": 6
       }
      },
      {
       "type": "people",
       "names": [
        "Grandma June",
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_73f2cf5cc2563a5100",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from October 30, 2024, with Rooney, Milo and Grandma June. It was kept 2 years ago today.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-10-30T15:00:00.000Z",
        "formatted": "October 30, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "anniversary",
        "yearsAgo": 2,
        "date": "2024-10-30T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": true
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_7f2870e0ccda780dba",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
     "poster": null,
     "caption": "Grandma June at the head of the table",
     "storyText": "",
     "takenAt": "2025-10-05T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from October 5, 2025, with Grandma June and Milo. Moment 10 of 10 in the thread \"Milo & Grandma June, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-10-05T15:00:00.000Z",
        "formatted": "October 5, 2025",
        "season": "Fall",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Grandma June, together",
        "position": 10,
        "count": 10,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_0eee7456d81132d561",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Summer 2025 with Rooney",
     "userRenamed": false,
     "startDate": "2025-06-14T15:00:00.000Z",
     "endDate": "2025-08-16T15:00:00.000Z",
     "season": "Summer",
     "year": 2025,
     "narrative": "Between June 14, 2025 and August 16, 2025, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- June 14, 2025: First splash day of summer\n- June 21, 2025: Grandma's garden, sixth summer\n- July 12, 2025: Two bikes, one summer\n- July 19, 2025: The ocean, one year on\n- August 2, 2025: Pool noodles and big jumps\n- August 16, 2025: Grandma June teaches Rooney to shell peas",
     "memoryIds": [
      "mem_903bad6961b6d2995b",
      "mem_2470198b42e1c9e540",
      "mem_60086cd206cb7bd499",
      "mem_7807b53986c470156f",
      "mem_f454bc241be340cb79",
      "mem_979e2268db43b1f51b"
     ],
     "order": 12,
     "updatedAt": "2026-10-30T20:42:09.039Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "commentary": {
     "text": "\"Summer 2025 with Rooney\" covers June 14, 2025 to August 16, 2025 and holds 6 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Summer 2025 with Rooney",
       "startDate": "2025-06-14T15:00:00.000Z",
       "endDate": "2025-08-16T15:00:00.000Z",
       "count": 6
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_979e2268db43b1f51b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
     "poster": null,
     "caption": "Grandma June teaches Rooney to shell peas",
     "storyText": "",
     "takenAt": "2025-08-16T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from August 16, 2025, with Grandma June and Rooney. Moment 15 of 15 in the thread \"Rooney & Grandma June, together\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-08-16T15:00:00.000Z",
        "formatted": "August 16, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Rooney & Grandma June, together",
        "position": 15,
        "count": 15,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_7807b53986c470156f",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
     "poster": null,
     "caption": "The ocean, one year on",
     "storyText": "",
     "takenAt": "2025-07-19T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 19, 2025, with Rooney, Milo and Grandma June. Moment 24 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-07-19T15:00:00.000Z",
        "formatted": "July 19, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 24,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_2470198b42e1c9e540",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
     "poster": null,
     "caption": "Grandma's garden, sixth summer",
     "storyText": "",
     "takenAt": "2025-06-21T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 21, 2025, with Grandma June and Rooney. Moment 7 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2025-06-21T15:00:00.000Z",
        "formatted": "June 21, 2025",
        "season": "Summer",
        "year": 2025
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 7,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_3ced39a3685e001a15",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Milo",
     "userRenamed": false,
     "startDate": "2024-09-01T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between September 1, 2024 and October 30, 2024, your family kept 3 memories here.\nIn these memories: Milo, Rooney, Grandma June.\nIn your own words:\n- September 1, 2024: First day of preschool for Milo\n- September 7, 2024: Milo's fourth birthday, balloons everywhere\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_4836287c77ee44c79c",
      "mem_74b4de13459ab5e92c",
      "mem_73f2cf5cc2563a5100"
     ],
     "order": 9,
     "updatedAt": "2026-10-30T20:42:09.038Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "commentary": {
     "text": "\"Fall 2024 with Milo\" covers September 1, 2024 to October 30, 2024 and holds 3 memories. In these memories: Milo, Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Milo",
       "startDate": "2024-09-01T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 3
      },
      {
       "type": "people",
       "names": [
        "Milo",
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_74b4de13459ab5e92c",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
     "poster": null,
     "caption": "Milo's fourth birthday, balloons everywhere",
     "storyText": "",
     "takenAt": "2024-09-07T15:00:00.000Z",
     "peopleIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from September 7, 2024, with Milo, Rooney and Grandma June. Moment 18 of 26 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-09-07T15:00:00.000Z",
        "formatted": "September 7, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Milo",
         "Rooney",
         "Grandma June"
        ]
       },
       {
        "type": "thread",
        "title": "Milo & Rooney, together",
        "position": 18,
        "count": 26,
        "fromYear": 2022,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_fb3e71ff2665bb362b",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
     "poster": null,
     "caption": "The garden, taller than Milo",
     "storyText": "",
     "takenAt": "2024-07-27T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from July 27, 2024, with Grandma June, Milo and Rooney. Moment 6 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-07-27T15:00:00.000Z",
        "formatted": "July 27, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo",
         "Rooney"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 6,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_01399d6dba81c181c9",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
     "poster": null,
     "caption": "Milo waters the garden his own way",
     "storyText": "",
     "takenAt": "2024-06-15T15:00:00.000Z",
     "peopleIds": [
      "per_f67acb6274b180d4a0",
      "per_1c03ef455d57eb3eb6"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "private",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A photo from June 15, 2024, with Grandma June and Milo. Moment 5 of 7 in the thread \"Gardens, summer after summer\", which runs from 2021 to 2025.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-06-15T15:00:00.000Z",
        "formatted": "June 15, 2024",
        "season": "Summer",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "photo"
       },
       {
        "type": "people",
        "names": [
         "Grandma June",
         "Milo"
        ]
       },
       {
        "type": "thread",
        "title": "Gardens, summer after summer",
        "position": 5,
        "count": 7,
        "fromYear": 2021,
        "toYear": 2025
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_fc9aa72ed1fd09c617",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Spring of Birthdays",
     "userRenamed": false,
     "startDate": "2024-04-06T15:00:00.000Z",
     "endDate": "2024-04-13T15:00:00.000Z",
     "season": "Spring",
     "year": 2024,
     "narrative": "Between April 6, 2024 and April 13, 2024, your family kept 2 memories here.\nIn these memories: Rooney, Grandma June.\nIn your own words:\n- April 6, 2024: Planting peas with Grandma June\n- April 13, 2024: Birthday breakfast in bed for Rooney",
     "memoryIds": [
      "mem_e18ef9b9ba986dc720",
      "mem_6fcc2eced27e195091"
     ],
     "order": 7,
     "updatedAt": "2026-10-30T20:42:09.037Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "commentary": {
     "text": "\"The Spring of Birthdays\" covers April 6, 2024 to April 13, 2024 and holds 2 memories. In these memories: Rooney and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Spring of Birthdays",
       "startDate": "2024-04-06T15:00:00.000Z",
       "endDate": "2024-04-13T15:00:00.000Z",
       "count": 2
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Grandma June"
       ]
      }
     ]
    }
   }
  ],
  "nextCursor": "MTI=",
  "scope": "per_f67acb6274b180d4a0",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=4&scope=all": {
  "cards": [
   {
    "kind": "hero",
    "observation": "\"garden\" appears in memories from 2021, 2023, 2024, 2025 — 7 memories in all.",
    "evidence": {
     "count": 7,
     "fromYear": 2021,
     "toYear": 2025
    },
    "thread": {
     "id": "thr_b9e51c83f33adac898",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:garden",
     "title": "Gardens, summer after summer",
     "titleRenamed": false,
     "observation": "\"garden\" appears in memories from 2021, 2023, 2024, 2025 — 7 memories in all.",
     "basis": "The word \"garden\" in your captions and writing",
     "match": {
      "word": "garden"
     },
     "memoryIds": [
      "mem_6aa6a2b721b1260593",
      "mem_ec56ae9a061e71a5ab",
      "mem_4b70ed96ef67b29f65",
      "mem_63f222abc7f392d012",
      "mem_01399d6dba81c181c9",
      "mem_fb3e71ff2665bb362b",
      "mem_2470198b42e1c9e540"
     ],
     "evidence": {
      "count": 7,
      "fromYear": 2021,
      "toYear": 2025
     },
     "status": "followed",
     "requiresFollowPersonId": null,
     "seenCount": 0,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T20:42:09.043Z",
     "updatedAt": "2026-10-30T22:10:52.813Z",
     "growthCount": 7
    },
    "threadId": "thr_b9e51c83f33adac898",
    "commentary": {
     "text": "Assembled from 7 moments kept from 2021 to 2025: 6 photos, 1 video. Recorded in them: Grandma June, Rooney and Milo.",
     "basedOn": [
      {
       "type": "thread",
       "title": "Gardens, summer after summer",
       "count": 7,
       "fromYear": 2021,
       "toYear": 2025
      },
      {
       "type": "item_types",
       "counts": {
        "video": 1,
        "photo": 6
       }
      },
      {
       "type": "people",
       "names": [
        "Grandma June",
        "Rooney",
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "growth",
    "thread": {
     "id": "thr_b9e51c83f33adac898",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:garden",
     "title": "Gardens, summer after summer",
     "titleRenamed": false,
     "observation": "\"garden\" appears in memories from 2021, 2023, 2024, 2025 — 7 memories in all.",
     "basis": "The word \"garden\" in your captions and writing",
     "match": {
      "word": "garden"
     },
     "memoryIds": [
      "mem_6aa6a2b721b1260593",
      "mem_ec56ae9a061e71a5ab",
      "mem_4b70ed96ef67b29f65",
      "mem_63f222abc7f392d012",
      "mem_01399d6dba81c181c9",
      "mem_fb3e71ff2665bb362b",
      "mem_2470198b42e1c9e540"
     ],
     "evidence": {
      "count": 7,
      "fromYear": 2021,
      "toYear": 2025
     },
     "status": "followed",
     "requiresFollowPersonId": null,
     "seenCount": 0,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T20:42:09.043Z",
     "updatedAt": "2026-10-30T22:10:52.813Z",
     "growthCount": 7
    },
    "newCount": 7,
    "commentary": {
     "text": "\"Gardens, summer after summer\" grew by 7 new moments. It now holds 7 moments, from 2021 to 2025.",
     "basedOn": [
      {
       "type": "growth",
       "title": "Gardens, summer after summer",
       "newCount": 7,
       "total": 7,
       "fromYear": 2021,
       "toYear": 2025
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_73f2cf5cc2563a5100",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_47f6d75809a92fae04",
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ],
     "durationSec": null,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A piece of writing from October 30, 2024, with Rooney, Milo and Grandma June. It was kept 2 years ago today.",
      "basedOn": [
       {
        "type": "date",
        "value": "2024-10-30T15:00:00.000Z",
        "formatted": "October 30, 2024",
        "season": "Fall",
        "year": 2024
       },
       {
        "type": "memory_type",
        "value": "writing"
       },
       {
        "type": "people",
        "names": [
         "Rooney",
         "Milo",
         "Grandma June"
        ]
       },
       {
        "type": "anniversary",
        "yearsAgo": 2,
        "date": "2024-10-30T15:00:00.000Z"
       }
      ]
     }
    },
    "onThisDay": true
   },
   {
    "kind": "proposal",
    "thread": {
     "id": "thr_5cd11a25d239b68452",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:dinosaur",
     "title": "Dinosaurs, summer after summer",
     "titleRenamed": false,
     "observation": "\"dinosaur\" appears in memories from 2022, 2023, 2024 — 9 memories in all.",
     "basis": "The word \"dinosaur\" in your captions and writing",
     "match": {
      "word": "dinosaur"
     },
     "memoryIds": [
      "mem_779944c9856c93722e",
      "mem_ffd7b0dcc8b461d108",
      "mem_18e4fe2a9092efba17",
      "mem_7f07a5581eaf9170f5",
      "mem_3fe0a5b5bacfbd9083",
      "mem_d9ce759843bca5c265",
      "mem_054b85eb18d7bb1571",
      "mem_54cb15e5afe5f95cb0",
      "mem_36ea069addf1fb73e6"
     ],
     "evidence": {
      "count": 9,
      "fromYear": 2022,
      "toYear": 2024
     },
     "status": "proposed",
     "requiresFollowPersonId": null,
     "seenCount": 0,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T20:42:09.043Z",
     "updatedAt": "2026-10-30T22:10:52.813Z",
     "growthCount": 9
    },
    "commentary": {
     "text": "This thread holds 9 moments from 2022 to 2024: 3 photos, 1 video, 5 pieces of writing. In these moments: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "thread",
       "title": "Dinosaurs, summer after summer",
       "count": 9,
       "fromYear": 2022,
       "toYear": 2024
      },
      {
       "type": "item_types",
       "counts": {
        "writing": 5,
        "video": 1,
        "photo": 3
       }
      },
      {
       "type": "people",
       "names": [
        "Rooney",
        "Milo",
        "Grandma June"
       ]
      }
     ]
    }
   }
  ],
  "nextCursor": "NA==",
  "scope": "all",
  "storylines": [
   {
    "personId": "per_47f6d75809a92fae04",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_1c03ef455d57eb3eb6",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_f67acb6274b180d4a0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 48,
    "photosCap": 25000,
    "videoMinutesUsed": 2.1,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 63,
    "storedCount": 63
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/film/2021": {
  "year": 2021,
  "film": [
   {
    "memoryId": "mem_54bc7a84815e545002",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
    "takenAt": "2021-06-05T15:00:00.000Z",
    "caption": "Rooney, three, all curls",
    "storyText": "",
    "intertitle": "The Summer of Gardens",
    "chapterTitle": "The Summer of Gardens",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_fc2c9720b282443477",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
    "takenAt": "2021-06-05T15:00:00.000Z",
    "caption": "June shows Rooney how peas climb",
    "storyText": "",
    "intertitle": "The Summer of Gardens",
    "chapterTitle": "The Summer of Gardens",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_6aa6a2b721b1260593",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "takenAt": "2021-06-12T15:00:00.000Z",
    "caption": "Grandma June's garden, first summer",
    "storyText": "",
    "intertitle": "The Summer of Gardens",
    "chapterTitle": "The Summer of Gardens",
    "audio": true,
    "durationSec": 34.1,
    "playFromSec": 0,
    "playSec": 30,
    "truncated": true
   },
   {
    "memoryId": "mem_ec56ae9a061e71a5ab",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "takenAt": "2021-06-26T15:00:00.000Z",
    "caption": "Tomato rows in Grandma's garden",
    "storyText": "",
    "intertitle": "The Summer of Gardens",
    "chapterTitle": "The Summer of Gardens",
    "holdSec": 4.2
   }
  ],
  "count": 4,
  "skipped": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/film/2021?thread=thr_b9e51c83f33adac898": {
  "year": 2021,
  "film": [
   {
    "memoryId": "mem_54bc7a84815e545002",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
    "takenAt": "2021-06-05T15:00:00.000Z",
    "caption": "Rooney, three, all curls",
    "storyText": "",
    "intertitle": "The Summer of Gardens",
    "chapterTitle": "The Summer of Gardens",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_fc2c9720b282443477",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
    "takenAt": "2021-06-05T15:00:00.000Z",
    "caption": "June shows Rooney how peas climb",
    "storyText": "",
    "intertitle": "The Summer of Gardens",
    "chapterTitle": "The Summer of Gardens",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_6aa6a2b721b1260593",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "takenAt": "2021-06-12T15:00:00.000Z",
    "caption": "Grandma June's garden, first summer",
    "storyText": "",
    "intertitle": "The Summer of Gardens",
    "chapterTitle": "The Summer of Gardens",
    "audio": true,
    "durationSec": 34.1,
    "playFromSec": 0,
    "playSec": 30,
    "truncated": true
   },
   {
    "memoryId": "mem_ec56ae9a061e71a5ab",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "takenAt": "2021-06-26T15:00:00.000Z",
    "caption": "Tomato rows in Grandma's garden",
    "storyText": "",
    "intertitle": "The Summer of Gardens",
    "chapterTitle": "The Summer of Gardens",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_6aa6a2b721b1260593",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "takenAt": "2021-06-12T15:00:00.000Z",
    "caption": "Grandma June's garden, first summer",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "audio": true,
    "durationSec": 34.1,
    "playFromSec": 0,
    "playSec": 30,
    "truncated": true
   },
   {
    "memoryId": "mem_ec56ae9a061e71a5ab",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "takenAt": "2021-06-26T15:00:00.000Z",
    "caption": "Tomato rows in Grandma's garden",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_4b70ed96ef67b29f65",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "takenAt": "2023-06-17T15:00:00.000Z",
    "caption": "The garden gate, painted blue",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_63f222abc7f392d012",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "takenAt": "2023-07-08T15:00:00.000Z",
    "caption": "Grandma June in the garden, gloves on",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_01399d6dba81c181c9",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "takenAt": "2024-06-15T15:00:00.000Z",
    "caption": "Milo waters the garden his own way",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_fb3e71ff2665bb362b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "takenAt": "2024-07-27T15:00:00.000Z",
    "caption": "The garden, taller than Milo",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_2470198b42e1c9e540",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "takenAt": "2025-06-21T15:00:00.000Z",
    "caption": "Grandma's garden, sixth summer",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   }
  ],
  "count": 11,
  "skipped": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/film/2022": {
  "year": 2022,
  "film": [
   {
    "memoryId": "mem_a371734fd704a21023",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
    "takenAt": "2022-04-09T15:00:00.000Z",
    "caption": "Milo, one and a half, all cheeks",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_2624af56c403e9b350",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
    "takenAt": "2022-04-09T16:00:00.000Z",
    "caption": "Sharing the good crayons",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_e401cb50082a7af781",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-view.mp4",
    "takenAt": "2022-04-10T15:00:00.000Z",
    "caption": "The birthday countdown begins",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "audio": true,
    "durationSec": 11.8,
    "playFromSec": 0,
    "playSec": 11.8,
    "truncated": false
   },
   {
    "memoryId": "mem_af4b52e146f5edf5f2",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_af4b52e146f5edf5f2-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_af4b52e146f5edf5f2-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_af4b52e146f5edf5f2-web.jpg",
    "takenAt": "2022-04-16T15:00:00.000Z",
    "caption": "Rooney's fourth birthday, the cake with claws",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_2f6e011eab75e67503",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2f6e011eab75e67503-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2f6e011eab75e67503-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_2f6e011eab75e67503-web.jpg",
    "takenAt": "2022-06-11T15:00:00.000Z",
    "caption": "Rooney waters the pavement, calls it rain",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_cdc89eb41ae2bae21e",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
    "takenAt": "2022-06-11T16:00:00.000Z",
    "caption": "Grandma June braids his curls, very serious work",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_187eba5cfff57a4727",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-view.mp4",
    "takenAt": "2022-06-15T15:00:00.000Z",
    "caption": "First week on the bike, wobbles and all",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "audio": true,
    "durationSec": 19.1,
    "playFromSec": 0,
    "playSec": 19.1,
    "truncated": false
   },
   {
    "memoryId": "mem_5f2a3fed4908bb1434",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_5f2a3fed4908bb1434-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_5f2a3fed4908bb1434-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_5f2a3fed4908bb1434-web.jpg",
    "takenAt": "2022-06-18T15:00:00.000Z",
    "caption": "First bike, bell and all",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_18e4fe2a9092efba17",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-s-roaring-dinosaur-2022.mp4",
    "renditionRef": null,
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-s-roaring-dinosaur-2022.mp4",
    "takenAt": "2022-07-23T15:00:00.000Z",
    "caption": "Rooney and the roaring dinosaur",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "audio": true,
    "durationSec": 28,
    "playFromSec": 0,
    "playSec": 28,
    "truncated": false
   }
  ],
  "count": 9,
  "skipped": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/film/2022?thread=thr_b9e51c83f33adac898": {
  "year": 2022,
  "film": [
   {
    "memoryId": "mem_a371734fd704a21023",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
    "takenAt": "2022-04-09T15:00:00.000Z",
    "caption": "Milo, one and a half, all cheeks",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_2624af56c403e9b350",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
    "takenAt": "2022-04-09T16:00:00.000Z",
    "caption": "Sharing the good crayons",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_e401cb50082a7af781",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-view.mp4",
    "takenAt": "2022-04-10T15:00:00.000Z",
    "caption": "The birthday countdown begins",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "audio": true,
    "durationSec": 11.8,
    "playFromSec": 0,
    "playSec": 11.8,
    "truncated": false
   },
   {
    "memoryId": "mem_af4b52e146f5edf5f2",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_af4b52e146f5edf5f2-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_af4b52e146f5edf5f2-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_af4b52e146f5edf5f2-web.jpg",
    "takenAt": "2022-04-16T15:00:00.000Z",
    "caption": "Rooney's fourth birthday, the cake with claws",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_2f6e011eab75e67503",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2f6e011eab75e67503-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2f6e011eab75e67503-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_2f6e011eab75e67503-web.jpg",
    "takenAt": "2022-06-11T15:00:00.000Z",
    "caption": "Rooney waters the pavement, calls it rain",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_cdc89eb41ae2bae21e",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
    "takenAt": "2022-06-11T16:00:00.000Z",
    "caption": "Grandma June braids his curls, very serious work",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_187eba5cfff57a4727",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-view.mp4",
    "takenAt": "2022-06-15T15:00:00.000Z",
    "caption": "First week on the bike, wobbles and all",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "audio": true,
    "durationSec": 19.1,
    "playFromSec": 0,
    "playSec": 19.1,
    "truncated": false
   },
   {
    "memoryId": "mem_5f2a3fed4908bb1434",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_5f2a3fed4908bb1434-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_5f2a3fed4908bb1434-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_5f2a3fed4908bb1434-web.jpg",
    "takenAt": "2022-06-18T15:00:00.000Z",
    "caption": "First bike, bell and all",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_18e4fe2a9092efba17",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-s-roaring-dinosaur-2022.mp4",
    "renditionRef": null,
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-s-roaring-dinosaur-2022.mp4",
    "takenAt": "2022-07-23T15:00:00.000Z",
    "caption": "Rooney and the roaring dinosaur",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "audio": true,
    "durationSec": 28,
    "playFromSec": 0,
    "playSec": 28,
    "truncated": false
   },
   {
    "memoryId": "mem_6aa6a2b721b1260593",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "takenAt": "2021-06-12T15:00:00.000Z",
    "caption": "Grandma June's garden, first summer",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "audio": true,
    "durationSec": 34.1,
    "playFromSec": 0,
    "playSec": 30,
    "truncated": true
   },
   {
    "memoryId": "mem_ec56ae9a061e71a5ab",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "takenAt": "2021-06-26T15:00:00.000Z",
    "caption": "Tomato rows in Grandma's garden",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_4b70ed96ef67b29f65",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "takenAt": "2023-06-17T15:00:00.000Z",
    "caption": "The garden gate, painted blue",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_63f222abc7f392d012",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "takenAt": "2023-07-08T15:00:00.000Z",
    "caption": "Grandma June in the garden, gloves on",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_01399d6dba81c181c9",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "takenAt": "2024-06-15T15:00:00.000Z",
    "caption": "Milo waters the garden his own way",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_fb3e71ff2665bb362b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "takenAt": "2024-07-27T15:00:00.000Z",
    "caption": "The garden, taller than Milo",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_2470198b42e1c9e540",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "takenAt": "2025-06-21T15:00:00.000Z",
    "caption": "Grandma's garden, sixth summer",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   }
  ],
  "count": 16,
  "skipped": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/film/2023": {
  "year": 2023,
  "film": [
   {
    "memoryId": "mem_12c0caecfb0c0da7de",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "takenAt": "2023-04-08T15:00:00.000Z",
    "caption": "Grandma June's porch, waiting on the spring",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_ca71de709a423445c4",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "takenAt": "2023-04-15T15:00:00.000Z",
    "caption": "Rooney's birthday, five candles",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_639c875daf7b901106",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
    "takenAt": "2023-06-10T15:00:00.000Z",
    "caption": "Rooney on the blue bike, no hands (almost)",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_4b70ed96ef67b29f65",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "takenAt": "2023-06-17T15:00:00.000Z",
    "caption": "The garden gate, painted blue",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_7f07a5581eaf9170f5",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_7f07a5581eaf9170f5-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_7f07a5581eaf9170f5-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_7f07a5581eaf9170f5-web.jpg",
    "takenAt": "2023-06-24T15:00:00.000Z",
    "caption": "The dinosaur she drew at four, still up",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_eef8794db980a7a3b2",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
    "takenAt": "2023-06-25T15:00:00.000Z",
    "caption": "First ocean trip, straight to the water",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "audio": true,
    "durationSec": 10.5,
    "playFromSec": 0,
    "playSec": 10.5,
    "truncated": false
   },
   {
    "memoryId": "mem_408cca4804787ed824",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
    "takenAt": "2023-07-02T15:00:00.000Z",
    "caption": "Ocean morning, before the crowds",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_63f222abc7f392d012",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "takenAt": "2023-07-08T15:00:00.000Z",
    "caption": "Grandma June in the garden, gloves on",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_8d8366c4037c349dd7",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_8d8366c4037c349dd7-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_8d8366c4037c349dd7-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_8d8366c4037c349dd7-web.jpg",
    "takenAt": "2023-07-14T15:00:00.000Z",
    "caption": "Pool afternoon · sample photo",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_d9ce759843bca5c265",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
    "takenAt": "2023-07-16T15:00:00.000Z",
    "caption": "Toy dinosaurs, lined up by size",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_c6dcc84a9709e00e0f",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_c6dcc84a9709e00e0f-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_c6dcc84a9709e00e0f-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_c6dcc84a9709e00e0f-web.jpg",
    "takenAt": "2023-07-22T15:00:00.000Z",
    "caption": "Filming in the park · sample photo",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_3f3f0b99d08d3f1a40",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
    "takenAt": "2023-07-22T15:00:00.000Z",
    "caption": "Park day, filmed · sample video",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "audio": true,
    "durationSec": 9,
    "playFromSec": 0,
    "playSec": 9,
    "truncated": false
   },
   {
    "memoryId": "mem_f9cc639af1d983489e",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
    "takenAt": "2023-07-29T15:00:00.000Z",
    "caption": "Cake, approved · sample photo",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_4a762c2bc960377d50",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
    "takenAt": "2023-09-02T15:00:00.000Z",
    "caption": "Milo and the biggest leaf",
    "storyText": "",
    "intertitle": "Fall 2023 with Milo",
    "chapterTitle": "Fall 2023 with Milo",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_8d9e6c485794b4baed",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
    "takenAt": "2023-09-09T15:00:00.000Z",
    "caption": "Milo turns three, cake first",
    "storyText": "",
    "intertitle": "Fall 2023 with Milo",
    "chapterTitle": "Fall 2023 with Milo",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_71e2c7191a75d606a5",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
    "takenAt": "2023-10-14T15:00:00.000Z",
    "caption": "Pumpkin carving, Milo supervises",
    "storyText": "",
    "intertitle": "Fall 2023 with Milo",
    "chapterTitle": "Fall 2023 with Milo",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_4e9bdea78284d98733",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "takenAt": "2023-12-16T15:00:00.000Z",
    "caption": "The tree goes up, Milo directs",
    "storyText": "",
    "intertitle": "The Winter of Christmas",
    "chapterTitle": "The Winter of Christmas",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_94fab9ff114312377c",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
    "takenAt": "2023-12-25T15:00:00.000Z",
    "caption": "Christmas morning, matching pajamas",
    "storyText": "",
    "intertitle": "The Winter of Christmas",
    "chapterTitle": "The Winter of Christmas",
    "holdSec": 4.2
   }
  ],
  "count": 18,
  "skipped": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/film/2023?thread=thr_b9e51c83f33adac898": {
  "year": 2023,
  "film": [
   {
    "memoryId": "mem_12c0caecfb0c0da7de",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "takenAt": "2023-04-08T15:00:00.000Z",
    "caption": "Grandma June's porch, waiting on the spring",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_ca71de709a423445c4",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "takenAt": "2023-04-15T15:00:00.000Z",
    "caption": "Rooney's birthday, five candles",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_639c875daf7b901106",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
    "takenAt": "2023-06-10T15:00:00.000Z",
    "caption": "Rooney on the blue bike, no hands (almost)",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_4b70ed96ef67b29f65",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "takenAt": "2023-06-17T15:00:00.000Z",
    "caption": "The garden gate, painted blue",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_7f07a5581eaf9170f5",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_7f07a5581eaf9170f5-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_7f07a5581eaf9170f5-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_7f07a5581eaf9170f5-web.jpg",
    "takenAt": "2023-06-24T15:00:00.000Z",
    "caption": "The dinosaur she drew at four, still up",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_eef8794db980a7a3b2",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
    "takenAt": "2023-06-25T15:00:00.000Z",
    "caption": "First ocean trip, straight to the water",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "audio": true,
    "durationSec": 10.5,
    "playFromSec": 0,
    "playSec": 10.5,
    "truncated": false
   },
   {
    "memoryId": "mem_408cca4804787ed824",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
    "takenAt": "2023-07-02T15:00:00.000Z",
    "caption": "Ocean morning, before the crowds",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_63f222abc7f392d012",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "takenAt": "2023-07-08T15:00:00.000Z",
    "caption": "Grandma June in the garden, gloves on",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_8d8366c4037c349dd7",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_8d8366c4037c349dd7-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_8d8366c4037c349dd7-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_8d8366c4037c349dd7-web.jpg",
    "takenAt": "2023-07-14T15:00:00.000Z",
    "caption": "Pool afternoon · sample photo",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_d9ce759843bca5c265",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
    "takenAt": "2023-07-16T15:00:00.000Z",
    "caption": "Toy dinosaurs, lined up by size",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_c6dcc84a9709e00e0f",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_c6dcc84a9709e00e0f-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_c6dcc84a9709e00e0f-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_c6dcc84a9709e00e0f-web.jpg",
    "takenAt": "2023-07-22T15:00:00.000Z",
    "caption": "Filming in the park · sample photo",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_3f3f0b99d08d3f1a40",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
    "takenAt": "2023-07-22T15:00:00.000Z",
    "caption": "Park day, filmed · sample video",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "audio": true,
    "durationSec": 9,
    "playFromSec": 0,
    "playSec": 9,
    "truncated": false
   },
   {
    "memoryId": "mem_f9cc639af1d983489e",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
    "takenAt": "2023-07-29T15:00:00.000Z",
    "caption": "Cake, approved · sample photo",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_4a762c2bc960377d50",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
    "takenAt": "2023-09-02T15:00:00.000Z",
    "caption": "Milo and the biggest leaf",
    "storyText": "",
    "intertitle": "Fall 2023 with Milo",
    "chapterTitle": "Fall 2023 with Milo",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_8d9e6c485794b4baed",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
    "takenAt": "2023-09-09T15:00:00.000Z",
    "caption": "Milo turns three, cake first",
    "storyText": "",
    "intertitle": "Fall 2023 with Milo",
    "chapterTitle": "Fall 2023 with Milo",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_71e2c7191a75d606a5",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
    "takenAt": "2023-10-14T15:00:00.000Z",
    "caption": "Pumpkin carving, Milo supervises",
    "storyText": "",
    "intertitle": "Fall 2023 with Milo",
    "chapterTitle": "Fall 2023 with Milo",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_4e9bdea78284d98733",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "takenAt": "2023-12-16T15:00:00.000Z",
    "caption": "The tree goes up, Milo directs",
    "storyText": "",
    "intertitle": "The Winter of Christmas",
    "chapterTitle": "The Winter of Christmas",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_94fab9ff114312377c",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
    "takenAt": "2023-12-25T15:00:00.000Z",
    "caption": "Christmas morning, matching pajamas",
    "storyText": "",
    "intertitle": "The Winter of Christmas",
    "chapterTitle": "The Winter of Christmas",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_6aa6a2b721b1260593",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "takenAt": "2021-06-12T15:00:00.000Z",
    "caption": "Grandma June's garden, first summer",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "audio": true,
    "durationSec": 34.1,
    "playFromSec": 0,
    "playSec": 30,
    "truncated": true
   },
   {
    "memoryId": "mem_ec56ae9a061e71a5ab",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "takenAt": "2021-06-26T15:00:00.000Z",
    "caption": "Tomato rows in Grandma's garden",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_4b70ed96ef67b29f65",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "takenAt": "2023-06-17T15:00:00.000Z",
    "caption": "The garden gate, painted blue",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_63f222abc7f392d012",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "takenAt": "2023-07-08T15:00:00.000Z",
    "caption": "Grandma June in the garden, gloves on",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_01399d6dba81c181c9",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "takenAt": "2024-06-15T15:00:00.000Z",
    "caption": "Milo waters the garden his own way",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_fb3e71ff2665bb362b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "takenAt": "2024-07-27T15:00:00.000Z",
    "caption": "The garden, taller than Milo",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_2470198b42e1c9e540",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "takenAt": "2025-06-21T15:00:00.000Z",
    "caption": "Grandma's garden, sixth summer",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   }
  ],
  "count": 25,
  "skipped": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/film/2024": {
  "year": 2024,
  "film": [
   {
    "memoryId": "mem_e18ef9b9ba986dc720",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "takenAt": "2024-04-06T15:00:00.000Z",
    "caption": "Planting peas with Grandma June",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_6fcc2eced27e195091",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_6fcc2eced27e195091-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_6fcc2eced27e195091-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_6fcc2eced27e195091-web.jpg",
    "takenAt": "2024-04-13T15:00:00.000Z",
    "caption": "Birthday breakfast in bed for Rooney",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_70fd69ae3146cad340",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
    "takenAt": "2024-06-08T15:00:00.000Z",
    "caption": "Rooney's sunflower, taller than her",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_01399d6dba81c181c9",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "takenAt": "2024-06-15T15:00:00.000Z",
    "caption": "Milo waters the garden his own way",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_46c968b69840a936d2",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
    "renditionRef": null,
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
    "takenAt": "2024-06-22T15:00:00.000Z",
    "caption": "Milo's first bike ride, Rooney running behind",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "audio": true,
    "durationSec": 15,
    "playFromSec": 0,
    "playSec": 15,
    "truncated": false
   },
   {
    "memoryId": "mem_54cb15e5afe5f95cb0",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
    "takenAt": "2024-07-06T15:00:00.000Z",
    "caption": "Face to face with the museum dinosaur",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_dd98fca8eabcf0af64",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
    "takenAt": "2024-07-20T15:00:00.000Z",
    "caption": "First ocean day, straight into the waves",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_fb3e71ff2665bb362b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "takenAt": "2024-07-27T15:00:00.000Z",
    "caption": "The garden, taller than Milo",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_202fb58f4798322320",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
    "takenAt": "2024-08-11T15:00:00.000Z",
    "caption": "Ocean hair, don't care",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_4836287c77ee44c79c",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "takenAt": "2024-09-01T15:00:00.000Z",
    "caption": "First day of preschool for Milo",
    "storyText": "",
    "intertitle": "Fall 2024 with Milo",
    "chapterTitle": "Fall 2024 with Milo",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_74b4de13459ab5e92c",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "takenAt": "2024-09-07T15:00:00.000Z",
    "caption": "Milo's fourth birthday, balloons everywhere",
    "storyText": "",
    "intertitle": "Fall 2024 with Milo",
    "chapterTitle": "Fall 2024 with Milo",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_f2aab3298ef0e8a8e2",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "takenAt": "2024-12-24T15:00:00.000Z",
    "caption": "Christmas Eve, cookies for Santa",
    "storyText": "",
    "intertitle": "Winter 2024 with Rooney",
    "chapterTitle": "Winter 2024 with Rooney",
    "holdSec": 4.2
   }
  ],
  "count": 12,
  "skipped": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/film/2024?thread=thr_b9e51c83f33adac898": {
  "year": 2024,
  "film": [
   {
    "memoryId": "mem_e18ef9b9ba986dc720",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "takenAt": "2024-04-06T15:00:00.000Z",
    "caption": "Planting peas with Grandma June",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_6fcc2eced27e195091",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_6fcc2eced27e195091-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_6fcc2eced27e195091-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_6fcc2eced27e195091-web.jpg",
    "takenAt": "2024-04-13T15:00:00.000Z",
    "caption": "Birthday breakfast in bed for Rooney",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_70fd69ae3146cad340",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
    "takenAt": "2024-06-08T15:00:00.000Z",
    "caption": "Rooney's sunflower, taller than her",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_01399d6dba81c181c9",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "takenAt": "2024-06-15T15:00:00.000Z",
    "caption": "Milo waters the garden his own way",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_46c968b69840a936d2",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
    "renditionRef": null,
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
    "takenAt": "2024-06-22T15:00:00.000Z",
    "caption": "Milo's first bike ride, Rooney running behind",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "audio": true,
    "durationSec": 15,
    "playFromSec": 0,
    "playSec": 15,
    "truncated": false
   },
   {
    "memoryId": "mem_54cb15e5afe5f95cb0",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
    "takenAt": "2024-07-06T15:00:00.000Z",
    "caption": "Face to face with the museum dinosaur",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_dd98fca8eabcf0af64",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
    "takenAt": "2024-07-20T15:00:00.000Z",
    "caption": "First ocean day, straight into the waves",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_fb3e71ff2665bb362b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "takenAt": "2024-07-27T15:00:00.000Z",
    "caption": "The garden, taller than Milo",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_202fb58f4798322320",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
    "takenAt": "2024-08-11T15:00:00.000Z",
    "caption": "Ocean hair, don't care",
    "storyText": "",
    "intertitle": "The Summer of Dinosaurs",
    "chapterTitle": "The Summer of Dinosaurs",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_4836287c77ee44c79c",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "takenAt": "2024-09-01T15:00:00.000Z",
    "caption": "First day of preschool for Milo",
    "storyText": "",
    "intertitle": "Fall 2024 with Milo",
    "chapterTitle": "Fall 2024 with Milo",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_74b4de13459ab5e92c",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "takenAt": "2024-09-07T15:00:00.000Z",
    "caption": "Milo's fourth birthday, balloons everywhere",
    "storyText": "",
    "intertitle": "Fall 2024 with Milo",
    "chapterTitle": "Fall 2024 with Milo",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_f2aab3298ef0e8a8e2",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "takenAt": "2024-12-24T15:00:00.000Z",
    "caption": "Christmas Eve, cookies for Santa",
    "storyText": "",
    "intertitle": "Winter 2024 with Rooney",
    "chapterTitle": "Winter 2024 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_6aa6a2b721b1260593",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "takenAt": "2021-06-12T15:00:00.000Z",
    "caption": "Grandma June's garden, first summer",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "audio": true,
    "durationSec": 34.1,
    "playFromSec": 0,
    "playSec": 30,
    "truncated": true
   },
   {
    "memoryId": "mem_ec56ae9a061e71a5ab",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "takenAt": "2021-06-26T15:00:00.000Z",
    "caption": "Tomato rows in Grandma's garden",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_4b70ed96ef67b29f65",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "takenAt": "2023-06-17T15:00:00.000Z",
    "caption": "The garden gate, painted blue",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_63f222abc7f392d012",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "takenAt": "2023-07-08T15:00:00.000Z",
    "caption": "Grandma June in the garden, gloves on",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_01399d6dba81c181c9",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "takenAt": "2024-06-15T15:00:00.000Z",
    "caption": "Milo waters the garden his own way",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_fb3e71ff2665bb362b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "takenAt": "2024-07-27T15:00:00.000Z",
    "caption": "The garden, taller than Milo",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_2470198b42e1c9e540",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "takenAt": "2025-06-21T15:00:00.000Z",
    "caption": "Grandma's garden, sixth summer",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   }
  ],
  "count": 19,
  "skipped": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/film/2025": {
  "year": 2025,
  "film": [
   {
    "memoryId": "mem_66e690fc8ee0883d1f",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
    "takenAt": "2025-04-05T15:00:00.000Z",
    "caption": "Rooney reads to the whole class",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_2a0a0b17b2d2264708",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
    "takenAt": "2025-04-12T15:00:00.000Z",
    "caption": "Seven: a birthday crown and big plans",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_903bad6961b6d2995b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "takenAt": "2025-06-14T15:00:00.000Z",
    "caption": "First splash day of summer",
    "storyText": "",
    "intertitle": "Summer 2025 with Rooney",
    "chapterTitle": "Summer 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_2470198b42e1c9e540",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "takenAt": "2025-06-21T15:00:00.000Z",
    "caption": "Grandma's garden, sixth summer",
    "storyText": "",
    "intertitle": "Summer 2025 with Rooney",
    "chapterTitle": "Summer 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_60086cd206cb7bd499",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
    "takenAt": "2025-07-12T15:00:00.000Z",
    "caption": "Two bikes, one summer",
    "storyText": "",
    "intertitle": "Summer 2025 with Rooney",
    "chapterTitle": "Summer 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_7807b53986c470156f",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "takenAt": "2025-07-19T15:00:00.000Z",
    "caption": "The ocean, one year on",
    "storyText": "",
    "intertitle": "Summer 2025 with Rooney",
    "chapterTitle": "Summer 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_f454bc241be340cb79",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
    "takenAt": "2025-08-02T15:00:00.000Z",
    "caption": "Pool noodles and big jumps",
    "storyText": "",
    "intertitle": "Summer 2025 with Rooney",
    "chapterTitle": "Summer 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_979e2268db43b1f51b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
    "takenAt": "2025-08-16T15:00:00.000Z",
    "caption": "Grandma June teaches Rooney to shell peas",
    "storyText": "",
    "intertitle": "Summer 2025 with Rooney",
    "chapterTitle": "Summer 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_f328007bb8e20b0224",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
    "takenAt": "2025-09-13T15:00:00.000Z",
    "caption": "Back to school, second grade",
    "storyText": "",
    "intertitle": "Fall 2025 with Rooney",
    "chapterTitle": "Fall 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_7f2870e0ccda780dba",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
    "takenAt": "2025-10-05T15:00:00.000Z",
    "caption": "Grandma June at the head of the table",
    "storyText": "",
    "intertitle": "Fall 2025 with Rooney",
    "chapterTitle": "Fall 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_9384517751ca8103e4",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
    "takenAt": "2025-11-08T15:00:00.000Z",
    "caption": "Rooney's first lost tooth",
    "storyText": "",
    "intertitle": "Fall 2025 with Rooney",
    "chapterTitle": "Fall 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_a91f2e4dd0759b6662",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
    "takenAt": "2025-11-15T15:00:00.000Z",
    "caption": "Milo, five, missing the same one",
    "storyText": "",
    "intertitle": "Fall 2025 with Rooney",
    "chapterTitle": "Fall 2025 with Rooney",
    "holdSec": 4.2
   }
  ],
  "count": 12,
  "skipped": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/film/2025?thread=thr_b9e51c83f33adac898": {
  "year": 2025,
  "film": [
   {
    "memoryId": "mem_66e690fc8ee0883d1f",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
    "takenAt": "2025-04-05T15:00:00.000Z",
    "caption": "Rooney reads to the whole class",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_2a0a0b17b2d2264708",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
    "takenAt": "2025-04-12T15:00:00.000Z",
    "caption": "Seven: a birthday crown and big plans",
    "storyText": "",
    "intertitle": "The Spring of Birthdays",
    "chapterTitle": "The Spring of Birthdays",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_903bad6961b6d2995b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "takenAt": "2025-06-14T15:00:00.000Z",
    "caption": "First splash day of summer",
    "storyText": "",
    "intertitle": "Summer 2025 with Rooney",
    "chapterTitle": "Summer 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_2470198b42e1c9e540",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "takenAt": "2025-06-21T15:00:00.000Z",
    "caption": "Grandma's garden, sixth summer",
    "storyText": "",
    "intertitle": "Summer 2025 with Rooney",
    "chapterTitle": "Summer 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_60086cd206cb7bd499",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
    "takenAt": "2025-07-12T15:00:00.000Z",
    "caption": "Two bikes, one summer",
    "storyText": "",
    "intertitle": "Summer 2025 with Rooney",
    "chapterTitle": "Summer 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_7807b53986c470156f",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "takenAt": "2025-07-19T15:00:00.000Z",
    "caption": "The ocean, one year on",
    "storyText": "",
    "intertitle": "Summer 2025 with Rooney",
    "chapterTitle": "Summer 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_f454bc241be340cb79",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
    "takenAt": "2025-08-02T15:00:00.000Z",
    "caption": "Pool noodles and big jumps",
    "storyText": "",
    "intertitle": "Summer 2025 with Rooney",
    "chapterTitle": "Summer 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_979e2268db43b1f51b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
    "takenAt": "2025-08-16T15:00:00.000Z",
    "caption": "Grandma June teaches Rooney to shell peas",
    "storyText": "",
    "intertitle": "Summer 2025 with Rooney",
    "chapterTitle": "Summer 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_f328007bb8e20b0224",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
    "takenAt": "2025-09-13T15:00:00.000Z",
    "caption": "Back to school, second grade",
    "storyText": "",
    "intertitle": "Fall 2025 with Rooney",
    "chapterTitle": "Fall 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_7f2870e0ccda780dba",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
    "takenAt": "2025-10-05T15:00:00.000Z",
    "caption": "Grandma June at the head of the table",
    "storyText": "",
    "intertitle": "Fall 2025 with Rooney",
    "chapterTitle": "Fall 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_9384517751ca8103e4",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
    "takenAt": "2025-11-08T15:00:00.000Z",
    "caption": "Rooney's first lost tooth",
    "storyText": "",
    "intertitle": "Fall 2025 with Rooney",
    "chapterTitle": "Fall 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_a91f2e4dd0759b6662",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
    "takenAt": "2025-11-15T15:00:00.000Z",
    "caption": "Milo, five, missing the same one",
    "storyText": "",
    "intertitle": "Fall 2025 with Rooney",
    "chapterTitle": "Fall 2025 with Rooney",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_6aa6a2b721b1260593",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-poster.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "takenAt": "2021-06-12T15:00:00.000Z",
    "caption": "Grandma June's garden, first summer",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "audio": true,
    "durationSec": 34.1,
    "playFromSec": 0,
    "playSec": 30,
    "truncated": true
   },
   {
    "memoryId": "mem_ec56ae9a061e71a5ab",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "takenAt": "2021-06-26T15:00:00.000Z",
    "caption": "Tomato rows in Grandma's garden",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_4b70ed96ef67b29f65",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "takenAt": "2023-06-17T15:00:00.000Z",
    "caption": "The garden gate, painted blue",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_63f222abc7f392d012",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "takenAt": "2023-07-08T15:00:00.000Z",
    "caption": "Grandma June in the garden, gloves on",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_01399d6dba81c181c9",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "takenAt": "2024-06-15T15:00:00.000Z",
    "caption": "Milo waters the garden his own way",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_fb3e71ff2665bb362b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "takenAt": "2024-07-27T15:00:00.000Z",
    "caption": "The garden, taller than Milo",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   },
   {
    "memoryId": "mem_2470198b42e1c9e540",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "posterRef": null,
    "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "takenAt": "2025-06-21T15:00:00.000Z",
    "caption": "Grandma's garden, sixth summer",
    "storyText": "",
    "intertitle": "Gardens, summer after summer",
    "chapterTitle": "Gardens, summer after summer",
    "segment": "thread",
    "threadId": "thr_b9e51c83f33adac898",
    "holdSec": 4.2
   }
  ],
  "count": 19,
  "skipped": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/guest-links": {
  "guestLinks": [
   {
    "id": "gst_594bfb82954c854d37",
    "familyId": "fam_b44fd40e9d36256d3b",
    "scope": "thread",
    "targetId": "thr_b9e51c83f33adac898",
    "threadId": "thr_b9e51c83f33adac898",
    "filmYear": null,
    "noticingKey": null,
    "createdBy": "usr_ab07029fd28b543202",
    "createdAt": "2026-10-30T20:58:41.155Z",
    "expiry": "30d",
    "expiresAt": "2026-11-29T20:58:41.155Z",
    "allowReactions": true,
    "allowComments": true,
    "downloadOriginals": false,
    "revoked": false,
    "views": 4,
    "reactions": {
     "total": 0,
     "hearts": 0
    },
    "comments": 0
   }
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/imports": {
  "imports": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/interviews": {
  "interviews": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/invite-proposals": {
  "proposals": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/legacy": {
  "planHasLegacy": false,
  "designation": null,
  "whatHappens": [
   "Nothing changes while you are here and using Roon. The people you name are not contacted, not given an account, and cannot see anything.",
   "If this family’s owner can no longer keep the story — and Roon can verify that — the successor you named is invited first. They become the keeper: the whole story, every original photo and video, and the export, exactly as you left it.",
   "The heirs you named are the next in line after the successor, in the order you listed them, if the successor cannot or will not take it on.",
   "You can change these names, or remove them, at any time. Only the family owner can see or change this page.",
   "This is a designation, not a will. It tells Roon who you trust with this family’s story inside Roon — it does not move anything outside Roon."
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/letters": {
  "letters": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/memories": {
  "memories": [
   {
    "id": "mem_54bc7a84815e545002",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_54bc7a84815e545002-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_54bc7a84815e545002-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-rooney-curls-2021.jpg",
    "mime": "image/jpeg",
    "size": 268755,
    "caption": "Rooney, three, all curls",
    "storyText": "",
    "takenAt": "2021-06-05T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:50.617Z",
    "contentHash": "3522a291987c3f220507b95df669bb5916c2092e916648b08be3aa890d557081",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_fc2c9720b282443477",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_fc2c9720b282443477-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-june-peas-2021.jpg",
    "mime": "image/jpeg",
    "size": 176794,
    "caption": "June shows Rooney how peas climb",
    "storyText": "",
    "takenAt": "2021-06-05T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:59.115Z",
    "contentHash": "dd9fbbec2b6c1b54d30d7e806fc769041780934e9eb93a082e36eac4fe34a21f",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_6aa6a2b721b1260593",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-poster.jpg",
    "renditionNote": null,
    "renditionFiles": [
     "mem_6aa6a2b721b1260593-poster.jpg",
     "mem_6aa6a2b721b1260593-view.mp4"
    ],
    "durationSec": 34.1,
    "originalName": "s-garden-first-summer-2021.mp4",
    "mime": "video/mp4",
    "size": 23600689,
    "caption": "Grandma June's garden, first summer",
    "storyText": "",
    "takenAt": "2021-06-12T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:41:30.827Z",
    "contentHash": "596aadf44eddeb7616772ad0461d0cc53785534619c27c220d80e4bf56181201",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_ec56ae9a061e71a5ab",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_ec56ae9a061e71a5ab-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-garden-tomatoes-2021.jpg",
    "mime": "image/jpeg",
    "size": 86205,
    "caption": "Tomato rows in Grandma's garden",
    "storyText": "",
    "takenAt": "2021-06-26T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:50.753Z",
    "contentHash": "3c5466883659f7a7e38087fb4e8aa1bbed4092f856e42bd9e798ee03726e0220",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_a371734fd704a21023",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_a371734fd704a21023-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_a371734fd704a21023-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-milo-cheeks-2022.jpg",
    "mime": "image/jpeg",
    "size": 217526,
    "caption": "Milo, one and a half, all cheeks",
    "storyText": "",
    "takenAt": "2022-04-09T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:50.968Z",
    "contentHash": "9055a6a35f4b7ea0e2f26acff630b00d1a628067401b6b5189b7013cb4f53c2d",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_2624af56c403e9b350",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_2624af56c403e9b350-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-sharing-crayons-2022.jpg",
    "mime": "image/jpeg",
    "size": 191907,
    "caption": "Sharing the good crayons",
    "storyText": "",
    "takenAt": "2022-04-09T16:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:59.301Z",
    "contentHash": "6eb4a4d59b0ece318e27b0fef4a534d2d5ce0f8efe27135944318bfc4875dc16",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_e401cb50082a7af781",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-poster.jpg",
    "renditionNote": null,
    "renditionFiles": [
     "mem_e401cb50082a7af781-poster.jpg",
     "mem_e401cb50082a7af781-view.mp4"
    ],
    "durationSec": 11.8,
    "originalName": "s-birthday-countdown-2022.mp4",
    "mime": "video/mp4",
    "size": 8169620,
    "caption": "The birthday countdown begins",
    "storyText": "",
    "takenAt": "2022-04-10T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:41:39.525Z",
    "contentHash": "77da88712cf499b79ae46cfe311ba84656f8e7c3232006bdcbfcf3e65219cc4f",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_af4b52e146f5edf5f2",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_af4b52e146f5edf5f2-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_af4b52e146f5edf5f2-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_af4b52e146f5edf5f2-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-birthday-four-2022.jpg",
    "mime": "image/jpeg",
    "size": 75518,
    "caption": "Rooney's fourth birthday, the cake with claws",
    "storyText": "",
    "takenAt": "2022-04-16T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:51.159Z",
    "contentHash": "89ac6594046cd3dd758bb421c43d73da21e37714c357677a8dc8fccaaca4701c",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_2f6e011eab75e67503",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2f6e011eab75e67503-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2f6e011eab75e67503-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_2f6e011eab75e67503-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-pavement-rain-2022.jpg",
    "mime": "image/jpeg",
    "size": 209562,
    "caption": "Rooney waters the pavement, calls it rain",
    "storyText": "",
    "takenAt": "2022-06-11T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:51.501Z",
    "contentHash": "d4e7be6f4bfdaaca933f4c5b8fd21d592fce1c2435be6d1404b2d03761d38954",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_cdc89eb41ae2bae21e",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_cdc89eb41ae2bae21e-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-braiding-curls-2022.jpg",
    "mime": "image/jpeg",
    "size": 112075,
    "caption": "Grandma June braids his curls, very serious work",
    "storyText": "",
    "takenAt": "2022-06-11T16:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:59.478Z",
    "contentHash": "7e6ffb7f5c995d6c7eedd8ecd08f167b38af3b7f7f5692f9012fd0b8e6e8eff4",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_187eba5cfff57a4727",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-poster.jpg",
    "renditionNote": null,
    "renditionFiles": [
     "mem_187eba5cfff57a4727-poster.jpg",
     "mem_187eba5cfff57a4727-view.mp4"
    ],
    "durationSec": 19.1,
    "originalName": "s-bike-wobbles-2022.mp4",
    "mime": "video/mp4",
    "size": 5910534,
    "caption": "First week on the bike, wobbles and all",
    "storyText": "",
    "takenAt": "2022-06-15T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:41:57.065Z",
    "contentHash": "68e07a9954abb6701c731ffe05ddff8462ca774ce5778f1aabb263e51e293da9",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_5f2a3fed4908bb1434",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_5f2a3fed4908bb1434-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_5f2a3fed4908bb1434-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_5f2a3fed4908bb1434-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-first-bike-2022.jpg",
    "mime": "image/jpeg",
    "size": 154156,
    "caption": "First bike, bell and all",
    "storyText": "",
    "takenAt": "2022-06-18T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:51.984Z",
    "contentHash": "c23dfcc742d67d11cdad1e75d4b535b4a27bb02b5cbb327194eca41ccaada262",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_779944c9856c93722e",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "writing",
    "fileRef": null,
    "renditionRef": null,
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [],
    "durationSec": null,
    "originalName": null,
    "mime": null,
    "size": 0,
    "caption": "Dinosaur phase begins",
    "storyText": "Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.",
    "takenAt": "2022-07-10T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:49.921Z"
   },
   {
    "id": "mem_ffd7b0dcc8b461d108",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "writing",
    "fileRef": null,
    "renditionRef": null,
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [],
    "durationSec": null,
    "originalName": null,
    "mime": null,
    "size": 0,
    "caption": "Dinosaur drawing on the fridge",
    "storyText": "Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.",
    "takenAt": "2022-07-22T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:49.921Z"
   },
   {
    "id": "mem_18e4fe2a9092efba17",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-s-roaring-dinosaur-2022.mp4",
    "renditionRef": null,
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-poster.jpg",
    "renditionNote": "view_transcode_failed_original_served",
    "renditionFiles": [
     "mem_18e4fe2a9092efba17-poster.jpg"
    ],
    "durationSec": 28,
    "originalName": "s-roaring-dinosaur-2022.mp4",
    "mime": "video/mp4",
    "size": 3537029,
    "caption": "Rooney and the roaring dinosaur",
    "storyText": "",
    "takenAt": "2022-07-23T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:41:57.610Z",
    "contentHash": "8761be4df06649f2329c5cffee9ff403580e53dc65388c25c4d9759f7af04cf5",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_f95372c30d18e170d9",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "writing",
    "fileRef": null,
    "renditionRef": null,
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [],
    "durationSec": null,
    "originalName": null,
    "mime": null,
    "size": 0,
    "caption": "Milo roars back",
    "storyText": "Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
    "takenAt": "2022-08-05T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:49.921Z"
   },
   {
    "id": "mem_12c0caecfb0c0da7de",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_12c0caecfb0c0da7de-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-grandma-porch-2023.jpg",
    "mime": "image/jpeg",
    "size": 452326,
    "caption": "Grandma June's porch, waiting on the spring",
    "storyText": "",
    "takenAt": "2023-04-08T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:52.404Z",
    "contentHash": "3060a0eb831f62045eb9f88a67c8dfd4ee983722dd54956b24d5a8b9a7d7bb9e",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_ca71de709a423445c4",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_ca71de709a423445c4-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-birthday-five-2023.jpg",
    "mime": "image/jpeg",
    "size": 128391,
    "caption": "Rooney's birthday, five candles",
    "storyText": "",
    "takenAt": "2023-04-15T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:52.595Z",
    "contentHash": "cd67400b273dbcbc613b7af38d27661494cc5fa1cbd3d392cea70d3706ff8b77",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_639c875daf7b901106",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_639c875daf7b901106-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-blue-bike-2023.jpg",
    "mime": "image/jpeg",
    "size": 189752,
    "caption": "Rooney on the blue bike, no hands (almost)",
    "storyText": "",
    "takenAt": "2023-06-10T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:52.740Z",
    "contentHash": "00058aa2a33ff8be947f1ee9d298f53bbbc0a11a2946787afbb84b72c820ef48",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_4b70ed96ef67b29f65",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_4b70ed96ef67b29f65-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-garden-gate-2023.jpg",
    "mime": "image/jpeg",
    "size": 624816,
    "caption": "The garden gate, painted blue",
    "storyText": "",
    "takenAt": "2023-06-17T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:52.922Z",
    "contentHash": "ca3be1b70bb1526fa3a3690663dcc556cd8d6c6bc53c458aeba1c2426ff3b4a6",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_7f07a5581eaf9170f5",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_7f07a5581eaf9170f5-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_7f07a5581eaf9170f5-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_7f07a5581eaf9170f5-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-fridge-dinosaur-2023.jpg",
    "mime": "image/jpeg",
    "size": 102271,
    "caption": "The dinosaur she drew at four, still up",
    "storyText": "",
    "takenAt": "2023-06-24T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:53.088Z",
    "contentHash": "328811fd70c5827f7c56b78893de0ca0914cb6be4da0acf63e3357be136abc9d",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_eef8794db980a7a3b2",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-poster.jpg",
    "renditionNote": null,
    "renditionFiles": [
     "mem_eef8794db980a7a3b2-poster.jpg",
     "mem_eef8794db980a7a3b2-view.mp4"
    ],
    "durationSec": 10.5,
    "originalName": "s-first-beach-trip-2023.mp4",
    "mime": "video/mp4",
    "size": 3336612,
    "caption": "First ocean trip, straight to the water",
    "storyText": "",
    "takenAt": "2023-06-25T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:42:05.301Z",
    "contentHash": "f5e155f2b96b82b7fb897b3ecf8cd49251c13eea8e5442054fca7df8948f83b1",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_408cca4804787ed824",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_408cca4804787ed824-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-beach-morning-2023.jpg",
    "mime": "image/jpeg",
    "size": 263978,
    "caption": "Ocean morning, before the crowds",
    "storyText": "",
    "takenAt": "2023-07-02T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:53.263Z",
    "contentHash": "a654c4839c97ad632a83b285b5e961c59c46730a09767d2327f62e34acaa9dae",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_63f222abc7f392d012",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_63f222abc7f392d012-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-garden-gloves-2023.jpg",
    "mime": "image/jpeg",
    "size": 132850,
    "caption": "Grandma June in the garden, gloves on",
    "storyText": "",
    "takenAt": "2023-07-08T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:53.411Z",
    "contentHash": "494fcc66618f72a9264d3c9e4432dd0269bed0909d923e8198a57af26d6d4af7",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_3fe0a5b5bacfbd9083",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "writing",
    "fileRef": null,
    "renditionRef": null,
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [],
    "durationSec": null,
    "originalName": null,
    "mime": null,
    "size": 0,
    "caption": "Dinosaur summer, again",
    "storyText": "The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.",
    "takenAt": "2023-07-14T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:49.921Z"
   },
   {
    "id": "mem_8d8366c4037c349dd7",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_8d8366c4037c349dd7-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_8d8366c4037c349dd7-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_8d8366c4037c349dd7-web.jpg"
    ],
    "durationSec": null,
    "originalName": "p2.jpg",
    "mime": "image/jpeg",
    "size": 151737,
    "caption": "Pool afternoon · sample photo",
    "storyText": "",
    "takenAt": "2023-07-14T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:53.711Z",
    "contentHash": "35fee3338aa9331a044306a16894009f3a42b5ae72b29301650627c4f5689c83",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_d9ce759843bca5c265",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_d9ce759843bca5c265-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-toy-dinosaurs-2023.jpg",
    "mime": "image/jpeg",
    "size": 185296,
    "caption": "Toy dinosaurs, lined up by size",
    "storyText": "",
    "takenAt": "2023-07-16T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:54.079Z",
    "contentHash": "dcb18847b0516ffe960904248bd06e5abee334e5937ba9354d62c440adb4d452",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_c6dcc84a9709e00e0f",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_c6dcc84a9709e00e0f-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_c6dcc84a9709e00e0f-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_c6dcc84a9709e00e0f-web.jpg"
    ],
    "durationSec": null,
    "originalName": "p15.jpg",
    "mime": "image/jpeg",
    "size": 144064,
    "caption": "Filming in the park · sample photo",
    "storyText": "",
    "takenAt": "2023-07-22T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:54.181Z",
    "contentHash": "d0489b8505d0165486af9bf38dfb2018ded0b0ca0d8c8ae804aecbfae3640b12",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_3f3f0b99d08d3f1a40",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-poster.jpg",
    "renditionNote": null,
    "renditionFiles": [
     "mem_3f3f0b99d08d3f1a40-poster.jpg",
     "mem_3f3f0b99d08d3f1a40-view.mp4"
    ],
    "durationSec": 9,
    "originalName": "hero2.mp4",
    "mime": "video/mp4",
    "size": 419415,
    "caption": "Park day, filmed · sample video",
    "storyText": "",
    "takenAt": "2023-07-22T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:42:08.191Z",
    "contentHash": "0f208ffaf54c73204dff2fd7da6ee29b834079d09bcc5413a6dc93a29513098e",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_054b85eb18d7bb1571",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "writing",
    "fileRef": null,
    "renditionRef": null,
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [],
    "durationSec": null,
    "originalName": null,
    "mime": null,
    "size": 0,
    "caption": "Dinosaur cake",
    "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
    "takenAt": "2023-07-29T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_f67acb6274b180d4a0"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:49.921Z"
   },
   {
    "id": "mem_f9cc639af1d983489e",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_f9cc639af1d983489e-web.jpg"
    ],
    "durationSec": null,
    "originalName": "p11.jpg",
    "mime": "image/jpeg",
    "size": 121515,
    "caption": "Cake, approved · sample photo",
    "storyText": "",
    "takenAt": "2023-07-29T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:54.270Z",
    "contentHash": "a66a6fce66d038ced25ad12046ddc491930c7ebbde0dc3de369857b6007bc1dc",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_4a762c2bc960377d50",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4a762c2bc960377d50-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_4a762c2bc960377d50-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-biggest-leaf-2023.jpg",
    "mime": "image/jpeg",
    "size": 72899,
    "caption": "Milo and the biggest leaf",
    "storyText": "",
    "takenAt": "2023-09-02T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:54.357Z",
    "contentHash": "07a49e5fa41c04c60e974cce737f871796e6fa6a10babdd7527cda3f2ee03a53",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_8d9e6c485794b4baed",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_8d9e6c485794b4baed-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-milo-three-2023.jpg",
    "mime": "image/jpeg",
    "size": 90180,
    "caption": "Milo turns three, cake first",
    "storyText": "",
    "takenAt": "2023-09-09T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:54.440Z",
    "contentHash": "a59bfa7fd3970a818bc37b50624faafbf3437cbbfcfb008d94988a39dde9726f",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_71e2c7191a75d606a5",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_71e2c7191a75d606a5-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-pumpkin-2023.jpg",
    "mime": "image/jpeg",
    "size": 263180,
    "caption": "Pumpkin carving, Milo supervises",
    "storyText": "",
    "takenAt": "2023-10-14T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:54.573Z",
    "contentHash": "5fdb9805edc9cd9bfc77070733ff7ee80602d6ba503b984f8cae042414ee433e",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_4e9bdea78284d98733",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_4e9bdea78284d98733-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-tree-goes-up-2023.jpg",
    "mime": "image/jpeg",
    "size": 156015,
    "caption": "The tree goes up, Milo directs",
    "storyText": "",
    "takenAt": "2023-12-16T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:54.707Z",
    "contentHash": "5d5e5092123a50458d205ea238d7edb620e45d2294b1dd68d226b2b8d97901b3",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_94fab9ff114312377c",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_94fab9ff114312377c-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-christmas-morning-2023.jpg",
    "mime": "image/jpeg",
    "size": 97906,
    "caption": "Christmas morning, matching pajamas",
    "storyText": "",
    "takenAt": "2023-12-25T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:54.817Z",
    "contentHash": "efe9ddabbaacfc0833b93d544d04fd3591ac481a19412c42355c9680873e7a10",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_e18ef9b9ba986dc720",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_e18ef9b9ba986dc720-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-planting-peas-2024.jpg",
    "mime": "image/jpeg",
    "size": 255687,
    "caption": "Planting peas with Grandma June",
    "storyText": "",
    "takenAt": "2024-04-06T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_f67acb6274b180d4a0"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:54.936Z",
    "contentHash": "c4112a77ebde9245415d9cf52e803533aab2a0caf4de25df664c2ad3b1a5439d",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_6fcc2eced27e195091",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_6fcc2eced27e195091-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_6fcc2eced27e195091-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_6fcc2eced27e195091-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-birthday-breakfast-2024.jpg",
    "mime": "image/jpeg",
    "size": 139003,
    "caption": "Birthday breakfast in bed for Rooney",
    "storyText": "",
    "takenAt": "2024-04-13T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:55.044Z",
    "contentHash": "7f9b16dced42f36bd534ee72ebab4a570de452325c4cf0887cf9c2ff30db339b",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_70fd69ae3146cad340",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_70fd69ae3146cad340-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_70fd69ae3146cad340-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-sunflower-2024.jpg",
    "mime": "image/jpeg",
    "size": 117090,
    "caption": "Rooney's sunflower, taller than her",
    "storyText": "",
    "takenAt": "2024-06-08T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:55.183Z",
    "contentHash": "4aaf0e0053a8c187f99b3d0171bb269b7f53ec7cd697e56d982fa2dc5fa35c2c",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_01399d6dba81c181c9",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_01399d6dba81c181c9-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-milo-waters-garden-2024.jpg",
    "mime": "image/jpeg",
    "size": 261819,
    "caption": "Milo waters the garden his own way",
    "storyText": "",
    "takenAt": "2024-06-15T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:55.323Z",
    "contentHash": "dc4fc8004a4bf813515e7e74ec7d9741afd41aaca5fa050590518ae5e07da44d",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_46c968b69840a936d2",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
    "renditionRef": null,
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-poster.jpg",
    "renditionNote": "view_transcode_failed_original_served",
    "renditionFiles": [
     "mem_46c968b69840a936d2-poster.jpg"
    ],
    "durationSec": 15,
    "originalName": "s-milo-first-ride-2024.mp4",
    "mime": "video/mp4",
    "size": 7396951,
    "caption": "Milo's first bike ride, Rooney running behind",
    "storyText": "",
    "takenAt": "2024-06-22T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:42:08.937Z",
    "contentHash": "2603bbafbd1770c06c63e927cf82347f5a71ddbea850dfb38cbb84b42e8b7504",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_54cb15e5afe5f95cb0",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_54cb15e5afe5f95cb0-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-museum-dinosaur-2024.jpg",
    "mime": "image/jpeg",
    "size": 437890,
    "caption": "Face to face with the museum dinosaur",
    "storyText": "",
    "takenAt": "2024-07-06T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:55.535Z",
    "contentHash": "9033ffa07db9f48d93672b13195a72710a05656683eebf777880adf7ef2e3aa1",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_36ea069addf1fb73e6",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "writing",
    "fileRef": null,
    "renditionRef": null,
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [],
    "durationSec": null,
    "originalName": null,
    "mime": null,
    "size": 0,
    "caption": "Three summers of dinosaurs",
    "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
    "takenAt": "2024-07-18T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:49.921Z"
   },
   {
    "id": "mem_dd98fca8eabcf0af64",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_dd98fca8eabcf0af64-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-beach-waves-2024.jpg",
    "mime": "image/jpeg",
    "size": 223993,
    "caption": "First ocean day, straight into the waves",
    "storyText": "",
    "takenAt": "2024-07-20T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:55.720Z",
    "contentHash": "4cf7a721ae45553a420509367ed8c31580008a7b7173342e2db953daf2f83cfa",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_fb3e71ff2665bb362b",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_fb3e71ff2665bb362b-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-garden-taller-2024.jpg",
    "mime": "image/jpeg",
    "size": 278050,
    "caption": "The garden, taller than Milo",
    "storyText": "",
    "takenAt": "2024-07-27T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:55.938Z",
    "contentHash": "1dc24f47ee1a23a45956bf9641b1e4e6402b0afc1c61d986bbd85973d89ac034",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_202fb58f4798322320",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_202fb58f4798322320-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-beach-hair-2024.jpg",
    "mime": "image/jpeg",
    "size": 186263,
    "caption": "Ocean hair, don't care",
    "storyText": "",
    "takenAt": "2024-08-11T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:56.107Z",
    "contentHash": "4c70a1c26a046b62c883d3f174338d5f5111bb7665501a6e63167505a6bfee7c",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_4836287c77ee44c79c",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_4836287c77ee44c79c-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_4836287c77ee44c79c-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-preschool-2024.jpg",
    "mime": "image/jpeg",
    "size": 181561,
    "caption": "First day of preschool for Milo",
    "storyText": "",
    "takenAt": "2024-09-01T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:56.277Z",
    "contentHash": "08db5147a836af16ef1c78390a69d9dcf2b936786958cf52d6f0cc6a3d379866",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_74b4de13459ab5e92c",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_74b4de13459ab5e92c-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-milo-birthday-four-2024.jpg",
    "mime": "image/jpeg",
    "size": 187225,
    "caption": "Milo's fourth birthday, balloons everywhere",
    "storyText": "",
    "takenAt": "2024-09-07T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04",
     "per_f67acb6274b180d4a0"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:56.583Z",
    "contentHash": "fd6261582312ab71ec2a7f0a50fc7289c029a74ce56b435480fe83f00491cc13",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_73f2cf5cc2563a5100",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "writing",
    "fileRef": null,
    "renditionRef": null,
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [],
    "durationSec": null,
    "originalName": null,
    "mime": null,
    "size": 0,
    "caption": "An ordinary Wednesday",
    "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
    "takenAt": "2024-10-30T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:49.921Z"
   },
   {
    "id": "mem_f2aab3298ef0e8a8e2",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_f2aab3298ef0e8a8e2-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-christmas-eve-2024.jpg",
    "mime": "image/jpeg",
    "size": 163377,
    "caption": "Christmas Eve, cookies for Santa",
    "storyText": "",
    "takenAt": "2024-12-24T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:56.699Z",
    "contentHash": "74787d999d4c5ec2f53f7f5488d147afda53fdb895ef3e9d850cfb273912a355",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_66e690fc8ee0883d1f",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_66e690fc8ee0883d1f-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_66e690fc8ee0883d1f-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-reads-to-class-2025.jpg",
    "mime": "image/jpeg",
    "size": 263465,
    "caption": "Rooney reads to the whole class",
    "storyText": "",
    "takenAt": "2025-04-05T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:56.970Z",
    "contentHash": "199e02bd03a549d3fe371551ff8d9d0cc4df092cae84a5b799f1667b1958e7c7",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_2a0a0b17b2d2264708",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_2a0a0b17b2d2264708-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-birthday-seven-2025.jpg",
    "mime": "image/jpeg",
    "size": 198089,
    "caption": "Seven: a birthday crown and big plans",
    "storyText": "",
    "takenAt": "2025-04-12T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:57.183Z",
    "contentHash": "2d080d65206f0d848855274857976eea21550a6bff80bb2b285c627ae26c33e8",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_903bad6961b6d2995b",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_903bad6961b6d2995b-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-splash-day-2025.jpg",
    "mime": "image/jpeg",
    "size": 307698,
    "caption": "First splash day of summer",
    "storyText": "",
    "takenAt": "2025-06-14T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:57.334Z",
    "contentHash": "42aab6c21546addefd77fd92d4171b52604f05564116916f6b84ce18eb82d4cc",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_2470198b42e1c9e540",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_2470198b42e1c9e540-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-garden-sixth-2025.jpg",
    "mime": "image/jpeg",
    "size": 341763,
    "caption": "Grandma's garden, sixth summer",
    "storyText": "",
    "takenAt": "2025-06-21T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:57.487Z",
    "contentHash": "32051227a075581072d386a63300edc30d8c87ca70c658702e1ea4d332df7907",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_60086cd206cb7bd499",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_60086cd206cb7bd499-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-two-bikes-2025.jpg",
    "mime": "image/jpeg",
    "size": 505515,
    "caption": "Two bikes, one summer",
    "storyText": "",
    "takenAt": "2025-07-12T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:57.770Z",
    "contentHash": "328d9a5e4a97178ebed8c42a566a5ffd345898c375ebf220da8d58ccaab0abdf",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_7807b53986c470156f",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_7807b53986c470156f-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-beach-one-year-2025.jpg",
    "mime": "image/jpeg",
    "size": 237927,
    "caption": "The ocean, one year on",
    "storyText": "",
    "takenAt": "2025-07-19T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:57.995Z",
    "contentHash": "dadee48fda4539614c0270d7280a8d979d21c5f1cba6ed1815e5d429a597717d",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_f454bc241be340cb79",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_f454bc241be340cb79-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-pool-noodles-2025.jpg",
    "mime": "image/jpeg",
    "size": 213114,
    "caption": "Pool noodles and big jumps",
    "storyText": "",
    "takenAt": "2025-08-02T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:58.116Z",
    "contentHash": "145f97518ef2b46db8387f8ad5962bc016f8951e16a4823a45d6c2e187f0f0e0",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_979e2268db43b1f51b",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_979e2268db43b1f51b-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-shell-peas-2025.jpg",
    "mime": "image/jpeg",
    "size": 56905,
    "caption": "Grandma June teaches Rooney to shell peas",
    "storyText": "",
    "takenAt": "2025-08-16T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:58.225Z",
    "contentHash": "4e2496a0b0b0b10d5c6ac86cd0c79856a5d90442e132072abf8fbf9a7ed9e5b8",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_f328007bb8e20b0224",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_f328007bb8e20b0224-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_f328007bb8e20b0224-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-back-to-school-2025.jpg",
    "mime": "image/jpeg",
    "size": 287911,
    "caption": "Back to school, second grade",
    "storyText": "",
    "takenAt": "2025-09-13T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:58.382Z",
    "contentHash": "660908b070f2acf6d7dc85430c13a622e60ef0adf6d3e2badcd8190e32963269",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_6aabc3425a294b31aa",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "writing",
    "fileRef": null,
    "renditionRef": null,
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [],
    "durationSec": null,
    "originalName": null,
    "mime": null,
    "size": 0,
    "caption": "The lunchbox note era",
    "storyText": "Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.",
    "takenAt": "2025-09-27T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:49.921Z"
   },
   {
    "id": "mem_7f2870e0ccda780dba",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_7f2870e0ccda780dba-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-grandma-table-2025.jpg",
    "mime": "image/jpeg",
    "size": 296383,
    "caption": "Grandma June at the head of the table",
    "storyText": "",
    "takenAt": "2025-10-05T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:58.581Z",
    "contentHash": "40d10d1e22c8d200e59543d6f9e729e191645d2283a829131d6cacbf7fd05bfd",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_9384517751ca8103e4",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_9384517751ca8103e4-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_9384517751ca8103e4-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-lost-tooth-2025.jpg",
    "mime": "image/jpeg",
    "size": 65619,
    "caption": "Rooney's first lost tooth",
    "storyText": "",
    "takenAt": "2025-11-08T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:58.748Z",
    "contentHash": "cfea8e70d5c4f7a6e8b87708dafa5ea8e94bca8a4bde66b7184360d67f062d5f",
    "dateSource": "manual",
    "renditionState": "done"
   },
   {
    "id": "mem_a91f2e4dd0759b6662",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_a91f2e4dd0759b6662-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_a91f2e4dd0759b6662-web.jpg"
    ],
    "durationSec": null,
    "originalName": "s-milo-tooth-2025.jpg",
    "mime": "image/jpeg",
    "size": 142725,
    "caption": "Milo, five, missing the same one",
    "storyText": "",
    "takenAt": "2025-11-15T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "audience": "private",
    "audiencePeople": null,
    "saved": false,
    "savedAt": null,
    "resurfaceMuted": false,
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T20:40:58.915Z",
    "contentHash": "cc4051d83b30e8ea8d51757acbed53cd9824866ac833c5b51cd4d056e15c3f4e",
    "dateSource": "manual",
    "renditionState": "done"
   }
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/people": {
  "people": [
   {
    "followed": true,
    "posture": "growing",
    "diedOn": null,
    "defaultAudience": null,
    "resurfaceMuted": false,
    "denVisible": true,
    "id": "per_47f6d75809a92fae04",
    "familyId": "fam_b44fd40e9d36256d3b",
    "key": "rooney",
    "name": "Rooney",
    "birthdate": "2018-04-12",
    "relationship": "daughter",
    "createdBy": "usr_ab07029fd28b543202",
    "sample": true,
    "createdAt": "2026-10-30T20:40:49.920Z"
   },
   {
    "followed": true,
    "posture": "growing",
    "diedOn": null,
    "defaultAudience": null,
    "resurfaceMuted": false,
    "denVisible": true,
    "id": "per_1c03ef455d57eb3eb6",
    "familyId": "fam_b44fd40e9d36256d3b",
    "key": "milo",
    "name": "Milo",
    "birthdate": "2020-09-03",
    "relationship": "son",
    "createdBy": "usr_ab07029fd28b543202",
    "sample": true,
    "createdAt": "2026-10-30T20:40:49.921Z"
   },
   {
    "followed": true,
    "posture": "together",
    "diedOn": null,
    "defaultAudience": null,
    "resurfaceMuted": false,
    "denVisible": true,
    "id": "per_f67acb6274b180d4a0",
    "familyId": "fam_b44fd40e9d36256d3b",
    "key": "grandma",
    "name": "Grandma June",
    "birthdate": "1955-06-20",
    "relationship": "grandmother",
    "createdBy": "usr_ab07029fd28b543202",
    "sample": true,
    "createdAt": "2026-10-30T20:40:49.921Z"
   }
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/prompt-settings": {
  "settings": {
   "familyId": "fam_b44fd40e9d36256d3b",
   "days": [
    1,
    3,
    5
   ],
   "time": "19:00",
   "perWeek": 3,
   "phone": "",
   "updatedAt": "2026-10-30T14:00:19.086Z"
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/prompts": {
  "prompts": [
   {
    "id": "prm_c13028ccc96bfe31cb",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T22:10:52.939Z",
    "dueAt": "2026-10-30T22:10:52.939Z",
    "scheduledFor": "2026-10-30T22:10:52.939Z",
    "answers": [],
    "sample": true,
    "kind": "ordinary_day",
    "sourceMemoryId": "mem_4a762c2bc960377d50",
    "text": "Tell the story of one completely ordinary day from around September 2, 2023 — the kind of day that never gets written down.",
    "why": "library:ordinary-day",
    "deliveries": [
     {
      "channel": "inapp",
      "status": "delivered"
     },
     {
      "channel": "link",
      "status": "created"
     },
     {
      "channel": "sms",
      "status": "queued_no_provider"
     },
     {
      "channel": "email",
      "status": "queued_no_provider"
     }
    ]
   },
   {
    "id": "prm_82b1622d204c689f97",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T22:10:52.939Z",
    "dueAt": "2026-10-30T22:10:52.939Z",
    "scheduledFor": "2026-10-30T22:10:52.939Z",
    "answers": [],
    "sample": true,
    "kind": "bank",
    "personId": "per_47f6d75809a92fae04",
    "text": "What does an ordinary afternoon look like for Rooney right now — who is there, and what actually happens?",
    "why": "bank:child",
    "deliveries": [
     {
      "channel": "inapp",
      "status": "delivered"
     },
     {
      "channel": "link",
      "status": "created"
     },
     {
      "channel": "sms",
      "status": "queued_no_provider"
     },
     {
      "channel": "email",
      "status": "queued_no_provider"
     }
    ]
   },
   {
    "id": "prm_cfbc6d7eda1b69c26d",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T22:10:52.936Z",
    "dueAt": "2026-10-30T22:10:52.936Z",
    "scheduledFor": "2026-10-30T22:10:52.936Z",
    "answers": [],
    "sample": true,
    "kind": "place_cluster",
    "sourceMemoryId": "mem_779944c9856c93722e",
    "text": "The word \"dinosaur\" shows up in 9 of your memories. What ties those moments together?",
    "why": "library:recurring-keyword",
    "deliveries": [
     {
      "channel": "inapp",
      "status": "delivered"
     },
     {
      "channel": "link",
      "status": "created"
     },
     {
      "channel": "sms",
      "status": "queued_no_provider"
     },
     {
      "channel": "email",
      "status": "queued_no_provider"
     }
    ]
   },
   {
    "id": "prm_8fab380ccd35af6d3f",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T22:10:52.928Z",
    "dueAt": "2026-10-30T22:10:52.928Z",
    "scheduledFor": "2026-10-30T22:10:52.928Z",
    "answers": [],
    "sample": true,
    "kind": "series",
    "seriesId": "ser_24b247c0f066475f22",
    "personId": "per_47f6d75809a92fae04",
    "text": "What is Rooney most into right now?",
    "why": "series:annual",
    "deliveries": [
     {
      "channel": "inapp",
      "status": "delivered"
     },
     {
      "channel": "link",
      "status": "created"
     },
     {
      "channel": "sms",
      "status": "queued_no_provider"
     },
     {
      "channel": "email",
      "status": "queued_no_provider"
     }
    ]
   },
   {
    "id": "prm_72bdfa36a3c4a21a25",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T22:10:52.928Z",
    "dueAt": "2026-10-30T22:10:52.928Z",
    "scheduledFor": "2026-10-30T22:10:52.928Z",
    "answers": [],
    "sample": true,
    "kind": "series",
    "seriesId": "ser_17d20f73d4c776467c",
    "personId": "per_47f6d75809a92fae04",
    "text": "What made Rooney laugh hardest this year?",
    "why": "series:annual",
    "deliveries": [
     {
      "channel": "inapp",
      "status": "delivered"
     },
     {
      "channel": "link",
      "status": "created"
     },
     {
      "channel": "sms",
      "status": "queued_no_provider"
     },
     {
      "channel": "email",
      "status": "queued_no_provider"
     }
    ]
   },
   {
    "id": "prm_24ffae9a2a12f7c5de",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T22:10:52.928Z",
    "dueAt": "2026-10-30T22:10:52.928Z",
    "scheduledFor": "2026-10-30T22:10:52.928Z",
    "answers": [],
    "sample": true,
    "kind": "series",
    "seriesId": "ser_8ca1ac8b49288d6402",
    "personId": "per_1c03ef455d57eb3eb6",
    "text": "What is Milo most into right now?",
    "why": "series:annual",
    "deliveries": [
     {
      "channel": "inapp",
      "status": "delivered"
     },
     {
      "channel": "link",
      "status": "created"
     },
     {
      "channel": "sms",
      "status": "queued_no_provider"
     },
     {
      "channel": "email",
      "status": "queued_no_provider"
     }
    ]
   },
   {
    "id": "prm_aa8ef65762fb31bec0",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T22:10:52.928Z",
    "dueAt": "2026-10-30T22:10:52.928Z",
    "scheduledFor": "2026-10-30T22:10:52.928Z",
    "answers": [],
    "sample": true,
    "kind": "series",
    "seriesId": "ser_68f6f1906eb26ed9de",
    "personId": "per_1c03ef455d57eb3eb6",
    "text": "What made Milo laugh hardest this year?",
    "why": "series:annual",
    "deliveries": [
     {
      "channel": "inapp",
      "status": "delivered"
     },
     {
      "channel": "link",
      "status": "created"
     },
     {
      "channel": "sms",
      "status": "queued_no_provider"
     },
     {
      "channel": "email",
      "status": "queued_no_provider"
     }
    ]
   },
   {
    "id": "prm_da31d5515f256ee9a2",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T22:10:52.928Z",
    "dueAt": "2026-10-30T22:10:52.928Z",
    "scheduledFor": "2026-10-30T22:10:52.928Z",
    "answers": [],
    "sample": true,
    "kind": "series",
    "seriesId": "ser_dcc9b1da2687974073",
    "personId": "per_f67acb6274b180d4a0",
    "text": "What is Grandma June most into right now?",
    "why": "series:annual",
    "deliveries": [
     {
      "channel": "inapp",
      "status": "delivered"
     },
     {
      "channel": "link",
      "status": "created"
     },
     {
      "channel": "sms",
      "status": "queued_no_provider"
     },
     {
      "channel": "email",
      "status": "queued_no_provider"
     }
    ]
   },
   {
    "id": "prm_a7f5fceb5c78c25fc2",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T22:10:52.928Z",
    "dueAt": "2026-10-30T22:10:52.928Z",
    "scheduledFor": "2026-10-30T22:10:52.928Z",
    "answers": [],
    "sample": true,
    "kind": "series",
    "seriesId": "ser_be1a8bfb8b51520583",
    "personId": "per_f67acb6274b180d4a0",
    "text": "What made Grandma June laugh hardest this year?",
    "why": "series:annual",
    "deliveries": [
     {
      "channel": "inapp",
      "status": "delivered"
     },
     {
      "channel": "link",
      "status": "created"
     },
     {
      "channel": "sms",
      "status": "queued_no_provider"
     },
     {
      "channel": "email",
      "status": "queued_no_provider"
     }
    ]
   },
   {
    "id": "prm_12b3072e1efdadb113",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T22:10:52.926Z",
    "dueAt": "2026-10-30T22:10:52.926Z",
    "scheduledFor": "2026-10-30T22:10:52.926Z",
    "answers": [],
    "sample": true,
    "kind": "weekly_one",
    "text": "Weekly One: pick your favorite photo from this week and add one line about why it matters.",
    "why": "ritual:weekly-one",
    "deliveries": [
     {
      "channel": "inapp",
      "status": "delivered"
     },
     {
      "channel": "link",
      "status": "created"
     },
     {
      "channel": "sms",
      "status": "queued_no_provider"
     },
     {
      "channel": "email",
      "status": "queued_no_provider"
     }
    ]
   }
  ],
  "settings": {
   "familyId": "fam_b44fd40e9d36256d3b",
   "days": [
    1,
    3,
    5
   ],
   "time": "19:00",
   "perWeek": 3,
   "phone": "",
   "updatedAt": "2026-10-30T14:00:19.086Z"
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/resurfacing": {
  "resurfacing": {
   "paused": false,
   "hasPause": false,
   "mutedMemoryIds": [],
   "mutedPeopleIds": [],
   "periods": []
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/saved": {
  "memories": [],
  "count": 0
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/series": {
  "series": [
   {
    "id": "ser_24b247c0f066475f22",
    "familyId": "fam_b44fd40e9d36256d3b",
    "personId": "per_47f6d75809a92fae04",
    "personName": "Rooney",
    "question": "What is Rooney most into right now?",
    "interval": "annual",
    "nextDueAt": "2026-10-30T20:40:49.921Z",
    "instances": [
     {
      "promptId": "prm_8fab380ccd35af6d3f",
      "scheduledFor": "2026-10-30T22:10:52.928Z",
      "status": "pending",
      "answers": []
     }
    ],
    "answers": []
   },
   {
    "id": "ser_17d20f73d4c776467c",
    "familyId": "fam_b44fd40e9d36256d3b",
    "personId": "per_47f6d75809a92fae04",
    "personName": "Rooney",
    "question": "What made Rooney laugh hardest this year?",
    "interval": "annual",
    "nextDueAt": "2026-10-30T20:40:49.921Z",
    "instances": [
     {
      "promptId": "prm_72bdfa36a3c4a21a25",
      "scheduledFor": "2026-10-30T22:10:52.928Z",
      "status": "pending",
      "answers": []
     }
    ],
    "answers": []
   },
   {
    "id": "ser_8ca1ac8b49288d6402",
    "familyId": "fam_b44fd40e9d36256d3b",
    "personId": "per_1c03ef455d57eb3eb6",
    "personName": "Milo",
    "question": "What is Milo most into right now?",
    "interval": "annual",
    "nextDueAt": "2026-10-30T20:40:49.921Z",
    "instances": [
     {
      "promptId": "prm_24ffae9a2a12f7c5de",
      "scheduledFor": "2026-10-30T22:10:52.928Z",
      "status": "pending",
      "answers": []
     }
    ],
    "answers": []
   },
   {
    "id": "ser_68f6f1906eb26ed9de",
    "familyId": "fam_b44fd40e9d36256d3b",
    "personId": "per_1c03ef455d57eb3eb6",
    "personName": "Milo",
    "question": "What made Milo laugh hardest this year?",
    "interval": "annual",
    "nextDueAt": "2026-10-30T20:40:49.921Z",
    "instances": [
     {
      "promptId": "prm_aa8ef65762fb31bec0",
      "scheduledFor": "2026-10-30T22:10:52.928Z",
      "status": "pending",
      "answers": []
     }
    ],
    "answers": []
   },
   {
    "id": "ser_dcc9b1da2687974073",
    "familyId": "fam_b44fd40e9d36256d3b",
    "personId": "per_f67acb6274b180d4a0",
    "personName": "Grandma June",
    "question": "What is Grandma June most into right now?",
    "interval": "annual",
    "nextDueAt": "2026-10-30T20:40:49.921Z",
    "instances": [
     {
      "promptId": "prm_da31d5515f256ee9a2",
      "scheduledFor": "2026-10-30T22:10:52.928Z",
      "status": "pending",
      "answers": []
     }
    ],
    "answers": []
   },
   {
    "id": "ser_be1a8bfb8b51520583",
    "familyId": "fam_b44fd40e9d36256d3b",
    "personId": "per_f67acb6274b180d4a0",
    "personName": "Grandma June",
    "question": "What made Grandma June laugh hardest this year?",
    "interval": "annual",
    "nextDueAt": "2026-10-30T20:40:49.921Z",
    "instances": [
     {
      "promptId": "prm_a7f5fceb5c78c25fc2",
      "scheduledFor": "2026-10-30T22:10:52.928Z",
      "status": "pending",
      "answers": []
     }
    ],
    "answers": []
   }
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/threads": {
  "threads": [
   {
    "id": "thr_5cd11a25d239b68452",
    "familyId": "fam_b44fd40e9d36256d3b",
    "source": "auto",
    "kind": "phase",
    "key": "phase:dinosaur",
    "title": "Dinosaurs, summer after summer",
    "titleRenamed": false,
    "observation": "\"dinosaur\" appears in memories from 2022, 2023, 2024 — 9 memories in all.",
    "basis": "The word \"dinosaur\" in your captions and writing",
    "match": {
     "word": "dinosaur"
    },
    "memoryIds": [
     "mem_779944c9856c93722e",
     "mem_ffd7b0dcc8b461d108",
     "mem_18e4fe2a9092efba17",
     "mem_7f07a5581eaf9170f5",
     "mem_3fe0a5b5bacfbd9083",
     "mem_d9ce759843bca5c265",
     "mem_054b85eb18d7bb1571",
     "mem_54cb15e5afe5f95cb0",
     "mem_36ea069addf1fb73e6"
    ],
    "evidence": {
     "count": 9,
     "fromYear": 2022,
     "toYear": 2024
    },
    "status": "proposed",
    "requiresFollowPersonId": null,
    "seenCount": 0,
    "miniStory": null,
    "filmIncluded": false,
    "excludedIds": [],
    "sample": true,
    "createdAt": "2026-10-30T20:42:09.043Z",
    "updatedAt": "2026-10-30T22:10:52.983Z",
    "growthCount": 9
   },
   {
    "id": "thr_b9e51c83f33adac898",
    "familyId": "fam_b44fd40e9d36256d3b",
    "source": "auto",
    "kind": "phase",
    "key": "phase:garden",
    "title": "Gardens, summer after summer",
    "titleRenamed": false,
    "observation": "\"garden\" appears in memories from 2021, 2023, 2024, 2025 — 7 memories in all.",
    "basis": "The word \"garden\" in your captions and writing",
    "match": {
     "word": "garden"
    },
    "memoryIds": [
     "mem_6aa6a2b721b1260593",
     "mem_ec56ae9a061e71a5ab",
     "mem_4b70ed96ef67b29f65",
     "mem_63f222abc7f392d012",
     "mem_01399d6dba81c181c9",
     "mem_fb3e71ff2665bb362b",
     "mem_2470198b42e1c9e540"
    ],
    "evidence": {
     "count": 7,
     "fromYear": 2021,
     "toYear": 2025
    },
    "status": "followed",
    "requiresFollowPersonId": null,
    "seenCount": 0,
    "miniStory": null,
    "filmIncluded": false,
    "excludedIds": [],
    "sample": true,
    "createdAt": "2026-10-30T20:42:09.043Z",
    "updatedAt": "2026-10-30T22:10:52.984Z",
    "growthCount": 7
   },
   {
    "id": "thr_fea6feee44751599b9",
    "familyId": "fam_b44fd40e9d36256d3b",
    "source": "auto",
    "kind": "phase",
    "key": "phase:birthday",
    "title": "Birthdays, spring after spring",
    "titleRenamed": false,
    "observation": "\"birthday\" appears in memories from 2022, 2023, 2024, 2025 — 5 memories in all.",
    "basis": "The word \"birthday\" in your captions and writing",
    "match": {
     "word": "birthday"
    },
    "memoryIds": [
     "mem_e401cb50082a7af781",
     "mem_af4b52e146f5edf5f2",
     "mem_ca71de709a423445c4",
     "mem_6fcc2eced27e195091",
     "mem_74b4de13459ab5e92c",
     "mem_2a0a0b17b2d2264708"
    ],
    "evidence": {
     "count": 6,
     "fromYear": 2022,
     "toYear": 2025
    },
    "status": "proposed",
    "requiresFollowPersonId": null,
    "seenCount": 0,
    "miniStory": null,
    "filmIncluded": false,
    "excludedIds": [],
    "sample": true,
    "createdAt": "2026-10-30T20:42:09.043Z",
    "updatedAt": "2026-10-30T22:10:52.984Z",
    "growthCount": 6
   },
   {
    "id": "thr_24016a97a40fba4977",
    "familyId": "fam_b44fd40e9d36256d3b",
    "source": "auto",
    "kind": "phase",
    "key": "phase:bike",
    "title": "Bikes, summer after summer",
    "titleRenamed": false,
    "observation": "\"bike\" appears in memories from 2022, 2023, 2024, 2025 — 5 memories in all.",
    "basis": "The word \"bike\" in your captions and writing",
    "match": {
     "word": "bike"
    },
    "memoryIds": [
     "mem_187eba5cfff57a4727",
     "mem_5f2a3fed4908bb1434",
     "mem_639c875daf7b901106",
     "mem_46c968b69840a936d2",
     "mem_60086cd206cb7bd499"
    ],
    "evidence": {
     "count": 5,
     "fromYear": 2022,
     "toYear": 2025
    },
    "status": "proposed",
    "requiresFollowPersonId": null,
    "seenCount": 0,
    "miniStory": null,
    "filmIncluded": false,
    "excludedIds": [],
    "sample": true,
    "createdAt": "2026-10-30T20:42:09.043Z",
    "updatedAt": "2026-10-30T22:10:52.984Z",
    "growthCount": 5
   },
   {
    "id": "thr_a84d50f2e376c2933a",
    "familyId": "fam_b44fd40e9d36256d3b",
    "source": "auto",
    "kind": "phase",
    "key": "phase:ocean",
    "title": "Oceans, summer after summer",
    "titleRenamed": false,
    "observation": "\"ocean\" appears in memories from 2023, 2024, 2025 — 5 memories in all.",
    "basis": "The word \"ocean\" in your captions and writing",
    "match": {
     "word": "ocean"
    },
    "memoryIds": [
     "mem_eef8794db980a7a3b2",
     "mem_408cca4804787ed824",
     "mem_dd98fca8eabcf0af64",
     "mem_202fb58f4798322320",
     "mem_7807b53986c470156f"
    ],
    "evidence": {
     "count": 5,
     "fromYear": 2023,
     "toYear": 2025
    },
    "status": "proposed",
    "requiresFollowPersonId": null,
    "seenCount": 0,
    "miniStory": null,
    "filmIncluded": false,
    "excludedIds": [],
    "sample": true,
    "createdAt": "2026-10-30T20:42:09.043Z",
    "updatedAt": "2026-10-30T22:10:52.984Z",
    "growthCount": 5
   },
   {
    "id": "thr_71235f37f565803654",
    "familyId": "fam_b44fd40e9d36256d3b",
    "source": "auto",
    "kind": "co_appearance",
    "key": "co:per_1c03ef455d57eb3eb6+per_47f6d75809a92fae04",
    "title": "Milo & Rooney, together",
    "titleRenamed": false,
    "observation": "Milo and Rooney appear together in 26 memories.",
    "basis": "These people appearing together in your memories",
    "match": {
     "personIds": [
      "per_1c03ef455d57eb3eb6",
      "per_47f6d75809a92fae04"
     ]
    },
    "memoryIds": [
     "mem_2624af56c403e9b350",
     "mem_f95372c30d18e170d9",
     "mem_ca71de709a423445c4",
     "mem_eef8794db980a7a3b2",
     "mem_3fe0a5b5bacfbd9083",
     "mem_d9ce759843bca5c265",
     "mem_3f3f0b99d08d3f1a40",
     "mem_f9cc639af1d983489e",
     "mem_8d9e6c485794b4baed",
     "mem_71e2c7191a75d606a5",
     "mem_4e9bdea78284d98733",
     "mem_94fab9ff114312377c",
     "mem_46c968b69840a936d2",
     "mem_54cb15e5afe5f95cb0",
     "mem_36ea069addf1fb73e6",
     "mem_dd98fca8eabcf0af64",
     "mem_fb3e71ff2665bb362b",
     "mem_74b4de13459ab5e92c",
     "mem_73f2cf5cc2563a5100",
     "mem_f2aab3298ef0e8a8e2",
     "mem_2a0a0b17b2d2264708",
     "mem_903bad6961b6d2995b",
     "mem_60086cd206cb7bd499",
     "mem_7807b53986c470156f",
     "mem_f454bc241be340cb79",
     "mem_6aabc3425a294b31aa"
    ],
    "evidence": {
     "count": 26,
     "fromYear": 2022,
     "toYear": 2025
    },
    "status": "proposed",
    "requiresFollowPersonId": null,
    "seenCount": 0,
    "miniStory": null,
    "filmIncluded": false,
    "excludedIds": [],
    "sample": true,
    "createdAt": "2026-10-30T20:42:09.043Z",
    "updatedAt": "2026-10-30T22:10:52.984Z",
    "growthCount": 26
   },
   {
    "id": "thr_92d123c3127b82360c",
    "familyId": "fam_b44fd40e9d36256d3b",
    "source": "auto",
    "kind": "co_appearance",
    "key": "co:per_47f6d75809a92fae04+per_f67acb6274b180d4a0",
    "title": "Rooney & Grandma June, together",
    "titleRenamed": false,
    "observation": "Rooney and Grandma June appear together in 15 memories.",
    "basis": "These people appearing together in your memories",
    "match": {
     "personIds": [
      "per_47f6d75809a92fae04",
      "per_f67acb6274b180d4a0"
     ]
    },
    "memoryIds": [
     "mem_fc2c9720b282443477",
     "mem_12c0caecfb0c0da7de",
     "mem_ca71de709a423445c4",
     "mem_408cca4804787ed824",
     "mem_63f222abc7f392d012",
     "mem_054b85eb18d7bb1571",
     "mem_4e9bdea78284d98733",
     "mem_94fab9ff114312377c",
     "mem_e18ef9b9ba986dc720",
     "mem_fb3e71ff2665bb362b",
     "mem_74b4de13459ab5e92c",
     "mem_73f2cf5cc2563a5100",
     "mem_2470198b42e1c9e540",
     "mem_7807b53986c470156f",
     "mem_979e2268db43b1f51b"
    ],
    "evidence": {
     "count": 15,
     "fromYear": 2021,
     "toYear": 2025
    },
    "status": "proposed",
    "requiresFollowPersonId": null,
    "seenCount": 0,
    "miniStory": null,
    "filmIncluded": false,
    "excludedIds": [],
    "sample": true,
    "createdAt": "2026-10-30T20:42:09.044Z",
    "updatedAt": "2026-10-30T22:10:52.984Z",
    "growthCount": 15
   },
   {
    "id": "thr_d57a5d3de9b4981b37",
    "familyId": "fam_b44fd40e9d36256d3b",
    "source": "auto",
    "kind": "co_appearance",
    "key": "co:per_1c03ef455d57eb3eb6+per_f67acb6274b180d4a0",
    "title": "Milo & Grandma June, together",
    "titleRenamed": false,
    "observation": "Milo and Grandma June appear together in 10 memories.",
    "basis": "These people appearing together in your memories",
    "match": {
     "personIds": [
      "per_1c03ef455d57eb3eb6",
      "per_f67acb6274b180d4a0"
     ]
    },
    "memoryIds": [
     "mem_cdc89eb41ae2bae21e",
     "mem_ca71de709a423445c4",
     "mem_4e9bdea78284d98733",
     "mem_94fab9ff114312377c",
     "mem_01399d6dba81c181c9",
     "mem_fb3e71ff2665bb362b",
     "mem_74b4de13459ab5e92c",
     "mem_73f2cf5cc2563a5100",
     "mem_7807b53986c470156f",
     "mem_7f2870e0ccda780dba"
    ],
    "evidence": {
     "count": 10,
     "fromYear": 2022,
     "toYear": 2025
    },
    "status": "proposed",
    "requiresFollowPersonId": null,
    "seenCount": 0,
    "miniStory": null,
    "filmIncluded": false,
    "excludedIds": [],
    "sample": true,
    "createdAt": "2026-10-30T20:42:09.044Z",
    "updatedAt": "2026-10-30T22:10:52.984Z",
    "growthCount": 10
   }
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/threads/thr_24016a97a40fba4977": {
  "thread": {
   "id": "thr_24016a97a40fba4977",
   "familyId": "fam_b44fd40e9d36256d3b",
   "source": "auto",
   "kind": "phase",
   "key": "phase:bike",
   "title": "Bikes, summer after summer",
   "titleRenamed": false,
   "observation": "\"bike\" appears in memories from 2022, 2023, 2024, 2025 — 5 memories in all.",
   "basis": "The word \"bike\" in your captions and writing",
   "match": {
    "word": "bike"
   },
   "memoryIds": [
    "mem_187eba5cfff57a4727",
    "mem_5f2a3fed4908bb1434",
    "mem_639c875daf7b901106",
    "mem_46c968b69840a936d2",
    "mem_60086cd206cb7bd499"
   ],
   "evidence": {
    "count": 5,
    "fromYear": 2022,
    "toYear": 2025
   },
   "status": "proposed",
   "requiresFollowPersonId": null,
   "seenCount": 5,
   "miniStory": null,
   "filmIncluded": false,
   "excludedIds": [],
   "sample": true,
   "createdAt": "2026-10-30T20:42:09.043Z",
   "updatedAt": "2026-10-30T22:10:52.990Z",
   "growthCount": 0
  },
  "items": [
   {
    "id": "mem_187eba5cfff57a4727",
    "type": "video",
    "src": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-view.mp4",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-view.mp4",
    "poster": "media/fam_b44fd40e9d36256d3b/mem_187eba5cfff57a4727-poster.jpg",
    "caption": "First week on the bike, wobbles and all",
    "storyText": "",
    "takenAt": "2022-06-15T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "durationSec": 19.1,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_5f2a3fed4908bb1434",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_5f2a3fed4908bb1434-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_5f2a3fed4908bb1434-web.jpg",
    "poster": null,
    "caption": "First bike, bell and all",
    "storyText": "",
    "takenAt": "2022-06-18T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_639c875daf7b901106",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_639c875daf7b901106-web.jpg",
    "poster": null,
    "caption": "Rooney on the blue bike, no hands (almost)",
    "storyText": "",
    "takenAt": "2023-06-10T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_46c968b69840a936d2",
    "type": "video",
    "src": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
    "poster": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-poster.jpg",
    "caption": "Milo's first bike ride, Rooney running behind",
    "storyText": "",
    "takenAt": "2024-06-22T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": 15,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_60086cd206cb7bd499",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
    "poster": null,
    "caption": "Two bikes, one summer",
    "storyText": "",
    "takenAt": "2025-07-12T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   }
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/threads/thr_5cd11a25d239b68452": {
  "thread": {
   "id": "thr_5cd11a25d239b68452",
   "familyId": "fam_b44fd40e9d36256d3b",
   "source": "auto",
   "kind": "phase",
   "key": "phase:dinosaur",
   "title": "Dinosaurs, summer after summer",
   "titleRenamed": false,
   "observation": "\"dinosaur\" appears in memories from 2022, 2023, 2024 — 9 memories in all.",
   "basis": "The word \"dinosaur\" in your captions and writing",
   "match": {
    "word": "dinosaur"
   },
   "memoryIds": [
    "mem_779944c9856c93722e",
    "mem_ffd7b0dcc8b461d108",
    "mem_18e4fe2a9092efba17",
    "mem_7f07a5581eaf9170f5",
    "mem_3fe0a5b5bacfbd9083",
    "mem_d9ce759843bca5c265",
    "mem_054b85eb18d7bb1571",
    "mem_54cb15e5afe5f95cb0",
    "mem_36ea069addf1fb73e6"
   ],
   "evidence": {
    "count": 9,
    "fromYear": 2022,
    "toYear": 2024
   },
   "status": "proposed",
   "requiresFollowPersonId": null,
   "seenCount": 9,
   "miniStory": null,
   "filmIncluded": false,
   "excludedIds": [],
   "sample": true,
   "createdAt": "2026-10-30T20:42:09.043Z",
   "updatedAt": "2026-10-30T22:10:52.999Z",
   "growthCount": 0
  },
  "items": [
   {
    "id": "mem_779944c9856c93722e",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Dinosaur phase begins",
    "storyText": "Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.",
    "takenAt": "2022-07-10T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_ffd7b0dcc8b461d108",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Dinosaur drawing on the fridge",
    "storyText": "Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.",
    "takenAt": "2022-07-22T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_18e4fe2a9092efba17",
    "type": "video",
    "src": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-s-roaring-dinosaur-2022.mp4",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-s-roaring-dinosaur-2022.mp4",
    "poster": "media/fam_b44fd40e9d36256d3b/mem_18e4fe2a9092efba17-poster.jpg",
    "caption": "Rooney and the roaring dinosaur",
    "storyText": "",
    "takenAt": "2022-07-23T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "durationSec": 28,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_7f07a5581eaf9170f5",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_7f07a5581eaf9170f5-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7f07a5581eaf9170f5-web.jpg",
    "poster": null,
    "caption": "The dinosaur she drew at four, still up",
    "storyText": "",
    "takenAt": "2023-06-24T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_3fe0a5b5bacfbd9083",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Dinosaur summer, again",
    "storyText": "The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.",
    "takenAt": "2023-07-14T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_d9ce759843bca5c265",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
    "poster": null,
    "caption": "Toy dinosaurs, lined up by size",
    "storyText": "",
    "takenAt": "2023-07-16T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_054b85eb18d7bb1571",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Dinosaur cake",
    "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
    "takenAt": "2023-07-29T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_54cb15e5afe5f95cb0",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
    "poster": null,
    "caption": "Face to face with the museum dinosaur",
    "storyText": "",
    "takenAt": "2024-07-06T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_36ea069addf1fb73e6",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Three summers of dinosaurs",
    "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
    "takenAt": "2024-07-18T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   }
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/threads/thr_71235f37f565803654": {
  "thread": {
   "id": "thr_71235f37f565803654",
   "familyId": "fam_b44fd40e9d36256d3b",
   "source": "auto",
   "kind": "co_appearance",
   "key": "co:per_1c03ef455d57eb3eb6+per_47f6d75809a92fae04",
   "title": "Milo & Rooney, together",
   "titleRenamed": false,
   "observation": "Milo and Rooney appear together in 26 memories.",
   "basis": "These people appearing together in your memories",
   "match": {
    "personIds": [
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04"
    ]
   },
   "memoryIds": [
    "mem_2624af56c403e9b350",
    "mem_f95372c30d18e170d9",
    "mem_ca71de709a423445c4",
    "mem_eef8794db980a7a3b2",
    "mem_3fe0a5b5bacfbd9083",
    "mem_d9ce759843bca5c265",
    "mem_3f3f0b99d08d3f1a40",
    "mem_f9cc639af1d983489e",
    "mem_8d9e6c485794b4baed",
    "mem_71e2c7191a75d606a5",
    "mem_4e9bdea78284d98733",
    "mem_94fab9ff114312377c",
    "mem_46c968b69840a936d2",
    "mem_54cb15e5afe5f95cb0",
    "mem_36ea069addf1fb73e6",
    "mem_dd98fca8eabcf0af64",
    "mem_fb3e71ff2665bb362b",
    "mem_74b4de13459ab5e92c",
    "mem_73f2cf5cc2563a5100",
    "mem_f2aab3298ef0e8a8e2",
    "mem_2a0a0b17b2d2264708",
    "mem_903bad6961b6d2995b",
    "mem_60086cd206cb7bd499",
    "mem_7807b53986c470156f",
    "mem_f454bc241be340cb79",
    "mem_6aabc3425a294b31aa"
   ],
   "evidence": {
    "count": 26,
    "fromYear": 2022,
    "toYear": 2025
   },
   "status": "proposed",
   "requiresFollowPersonId": null,
   "seenCount": 26,
   "miniStory": null,
   "filmIncluded": false,
   "excludedIds": [],
   "sample": true,
   "createdAt": "2026-10-30T20:42:09.043Z",
   "updatedAt": "2026-10-30T22:10:53.007Z",
   "growthCount": 0
  },
  "items": [
   {
    "id": "mem_2624af56c403e9b350",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2624af56c403e9b350-web.jpg",
    "poster": null,
    "caption": "Sharing the good crayons",
    "storyText": "",
    "takenAt": "2022-04-09T16:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_f95372c30d18e170d9",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Milo roars back",
    "storyText": "Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
    "takenAt": "2022-08-05T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_ca71de709a423445c4",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "poster": null,
    "caption": "Rooney's birthday, five candles",
    "storyText": "",
    "takenAt": "2023-04-15T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_eef8794db980a7a3b2",
    "type": "video",
    "src": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
    "poster": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-poster.jpg",
    "caption": "First ocean trip, straight to the water",
    "storyText": "",
    "takenAt": "2023-06-25T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": 10.5,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_3fe0a5b5bacfbd9083",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Dinosaur summer, again",
    "storyText": "The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.",
    "takenAt": "2023-07-14T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_d9ce759843bca5c265",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_d9ce759843bca5c265-web.jpg",
    "poster": null,
    "caption": "Toy dinosaurs, lined up by size",
    "storyText": "",
    "takenAt": "2023-07-16T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_3f3f0b99d08d3f1a40",
    "type": "video",
    "src": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-view.mp4",
    "poster": "media/fam_b44fd40e9d36256d3b/mem_3f3f0b99d08d3f1a40-poster.jpg",
    "caption": "Park day, filmed · sample video",
    "storyText": "",
    "takenAt": "2023-07-22T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": 9,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_f9cc639af1d983489e",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f9cc639af1d983489e-web.jpg",
    "poster": null,
    "caption": "Cake, approved · sample photo",
    "storyText": "",
    "takenAt": "2023-07-29T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_8d9e6c485794b4baed",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_8d9e6c485794b4baed-web.jpg",
    "poster": null,
    "caption": "Milo turns three, cake first",
    "storyText": "",
    "takenAt": "2023-09-09T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_71e2c7191a75d606a5",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_71e2c7191a75d606a5-web.jpg",
    "poster": null,
    "caption": "Pumpkin carving, Milo supervises",
    "storyText": "",
    "takenAt": "2023-10-14T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_4e9bdea78284d98733",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "poster": null,
    "caption": "The tree goes up, Milo directs",
    "storyText": "",
    "takenAt": "2023-12-16T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_94fab9ff114312377c",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
    "poster": null,
    "caption": "Christmas morning, matching pajamas",
    "storyText": "",
    "takenAt": "2023-12-25T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_46c968b69840a936d2",
    "type": "video",
    "src": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-s-milo-first-ride-2024.mp4",
    "poster": "media/fam_b44fd40e9d36256d3b/mem_46c968b69840a936d2-poster.jpg",
    "caption": "Milo's first bike ride, Rooney running behind",
    "storyText": "",
    "takenAt": "2024-06-22T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": 15,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_54cb15e5afe5f95cb0",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_54cb15e5afe5f95cb0-web.jpg",
    "poster": null,
    "caption": "Face to face with the museum dinosaur",
    "storyText": "",
    "takenAt": "2024-07-06T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_36ea069addf1fb73e6",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Three summers of dinosaurs",
    "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
    "takenAt": "2024-07-18T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_dd98fca8eabcf0af64",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
    "poster": null,
    "caption": "First ocean day, straight into the waves",
    "storyText": "",
    "takenAt": "2024-07-20T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_fb3e71ff2665bb362b",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "poster": null,
    "caption": "The garden, taller than Milo",
    "storyText": "",
    "takenAt": "2024-07-27T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_74b4de13459ab5e92c",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "poster": null,
    "caption": "Milo's fourth birthday, balloons everywhere",
    "storyText": "",
    "takenAt": "2024-09-07T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_73f2cf5cc2563a5100",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "An ordinary Wednesday",
    "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
    "takenAt": "2024-10-30T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_f2aab3298ef0e8a8e2",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f2aab3298ef0e8a8e2-web.jpg",
    "poster": null,
    "caption": "Christmas Eve, cookies for Santa",
    "storyText": "",
    "takenAt": "2024-12-24T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_2a0a0b17b2d2264708",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
    "poster": null,
    "caption": "Seven: a birthday crown and big plans",
    "storyText": "",
    "takenAt": "2025-04-12T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_903bad6961b6d2995b",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_903bad6961b6d2995b-web.jpg",
    "poster": null,
    "caption": "First splash day of summer",
    "storyText": "",
    "takenAt": "2025-06-14T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_60086cd206cb7bd499",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_60086cd206cb7bd499-web.jpg",
    "poster": null,
    "caption": "Two bikes, one summer",
    "storyText": "",
    "takenAt": "2025-07-12T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_7807b53986c470156f",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "poster": null,
    "caption": "The ocean, one year on",
    "storyText": "",
    "takenAt": "2025-07-19T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_f454bc241be340cb79",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_f454bc241be340cb79-web.jpg",
    "poster": null,
    "caption": "Pool noodles and big jumps",
    "storyText": "",
    "takenAt": "2025-08-02T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_6aabc3425a294b31aa",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "The lunchbox note era",
    "storyText": "Rooney started leaving notes in Milo's lunchbox. Milo leaves rocks in hers.",
    "takenAt": "2025-09-27T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   }
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/threads/thr_92d123c3127b82360c": {
  "thread": {
   "id": "thr_92d123c3127b82360c",
   "familyId": "fam_b44fd40e9d36256d3b",
   "source": "auto",
   "kind": "co_appearance",
   "key": "co:per_47f6d75809a92fae04+per_f67acb6274b180d4a0",
   "title": "Rooney & Grandma June, together",
   "titleRenamed": false,
   "observation": "Rooney and Grandma June appear together in 15 memories.",
   "basis": "These people appearing together in your memories",
   "match": {
    "personIds": [
     "per_47f6d75809a92fae04",
     "per_f67acb6274b180d4a0"
    ]
   },
   "memoryIds": [
    "mem_fc2c9720b282443477",
    "mem_12c0caecfb0c0da7de",
    "mem_ca71de709a423445c4",
    "mem_408cca4804787ed824",
    "mem_63f222abc7f392d012",
    "mem_054b85eb18d7bb1571",
    "mem_4e9bdea78284d98733",
    "mem_94fab9ff114312377c",
    "mem_e18ef9b9ba986dc720",
    "mem_fb3e71ff2665bb362b",
    "mem_74b4de13459ab5e92c",
    "mem_73f2cf5cc2563a5100",
    "mem_2470198b42e1c9e540",
    "mem_7807b53986c470156f",
    "mem_979e2268db43b1f51b"
   ],
   "evidence": {
    "count": 15,
    "fromYear": 2021,
    "toYear": 2025
   },
   "status": "proposed",
   "requiresFollowPersonId": null,
   "seenCount": 15,
   "miniStory": null,
   "filmIncluded": false,
   "excludedIds": [],
   "sample": true,
   "createdAt": "2026-10-30T20:42:09.044Z",
   "updatedAt": "2026-10-30T22:10:53.056Z",
   "growthCount": 0
  },
  "items": [
   {
    "id": "mem_fc2c9720b282443477",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fc2c9720b282443477-web.jpg",
    "poster": null,
    "caption": "June shows Rooney how peas climb",
    "storyText": "",
    "takenAt": "2021-06-05T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_12c0caecfb0c0da7de",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_12c0caecfb0c0da7de-web.jpg",
    "poster": null,
    "caption": "Grandma June's porch, waiting on the spring",
    "storyText": "",
    "takenAt": "2023-04-08T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_ca71de709a423445c4",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "poster": null,
    "caption": "Rooney's birthday, five candles",
    "storyText": "",
    "takenAt": "2023-04-15T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_408cca4804787ed824",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
    "poster": null,
    "caption": "Ocean morning, before the crowds",
    "storyText": "",
    "takenAt": "2023-07-02T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_63f222abc7f392d012",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "poster": null,
    "caption": "Grandma June in the garden, gloves on",
    "storyText": "",
    "takenAt": "2023-07-08T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_054b85eb18d7bb1571",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Dinosaur cake",
    "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
    "takenAt": "2023-07-29T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_4e9bdea78284d98733",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "poster": null,
    "caption": "The tree goes up, Milo directs",
    "storyText": "",
    "takenAt": "2023-12-16T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_94fab9ff114312377c",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
    "poster": null,
    "caption": "Christmas morning, matching pajamas",
    "storyText": "",
    "takenAt": "2023-12-25T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_e18ef9b9ba986dc720",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_e18ef9b9ba986dc720-web.jpg",
    "poster": null,
    "caption": "Planting peas with Grandma June",
    "storyText": "",
    "takenAt": "2024-04-06T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_fb3e71ff2665bb362b",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "poster": null,
    "caption": "The garden, taller than Milo",
    "storyText": "",
    "takenAt": "2024-07-27T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_74b4de13459ab5e92c",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "poster": null,
    "caption": "Milo's fourth birthday, balloons everywhere",
    "storyText": "",
    "takenAt": "2024-09-07T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_73f2cf5cc2563a5100",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "An ordinary Wednesday",
    "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
    "takenAt": "2024-10-30T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_2470198b42e1c9e540",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "poster": null,
    "caption": "Grandma's garden, sixth summer",
    "storyText": "",
    "takenAt": "2025-06-21T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_7807b53986c470156f",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "poster": null,
    "caption": "The ocean, one year on",
    "storyText": "",
    "takenAt": "2025-07-19T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_979e2268db43b1f51b",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_979e2268db43b1f51b-web.jpg",
    "poster": null,
    "caption": "Grandma June teaches Rooney to shell peas",
    "storyText": "",
    "takenAt": "2025-08-16T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   }
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/threads/thr_a84d50f2e376c2933a": {
  "thread": {
   "id": "thr_a84d50f2e376c2933a",
   "familyId": "fam_b44fd40e9d36256d3b",
   "source": "auto",
   "kind": "phase",
   "key": "phase:ocean",
   "title": "Oceans, summer after summer",
   "titleRenamed": false,
   "observation": "\"ocean\" appears in memories from 2023, 2024, 2025 — 5 memories in all.",
   "basis": "The word \"ocean\" in your captions and writing",
   "match": {
    "word": "ocean"
   },
   "memoryIds": [
    "mem_eef8794db980a7a3b2",
    "mem_408cca4804787ed824",
    "mem_dd98fca8eabcf0af64",
    "mem_202fb58f4798322320",
    "mem_7807b53986c470156f"
   ],
   "evidence": {
    "count": 5,
    "fromYear": 2023,
    "toYear": 2025
   },
   "status": "proposed",
   "requiresFollowPersonId": null,
   "seenCount": 5,
   "miniStory": null,
   "filmIncluded": false,
   "excludedIds": [],
   "sample": true,
   "createdAt": "2026-10-30T20:42:09.043Z",
   "updatedAt": "2026-10-30T22:10:53.070Z",
   "growthCount": 0
  },
  "items": [
   {
    "id": "mem_eef8794db980a7a3b2",
    "type": "video",
    "src": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-view.mp4",
    "poster": "media/fam_b44fd40e9d36256d3b/mem_eef8794db980a7a3b2-poster.jpg",
    "caption": "First ocean trip, straight to the water",
    "storyText": "",
    "takenAt": "2023-06-25T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": 10.5,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_408cca4804787ed824",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_408cca4804787ed824-web.jpg",
    "poster": null,
    "caption": "Ocean morning, before the crowds",
    "storyText": "",
    "takenAt": "2023-07-02T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_dd98fca8eabcf0af64",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_dd98fca8eabcf0af64-web.jpg",
    "poster": null,
    "caption": "First ocean day, straight into the waves",
    "storyText": "",
    "takenAt": "2024-07-20T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_202fb58f4798322320",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_202fb58f4798322320-web.jpg",
    "poster": null,
    "caption": "Ocean hair, don't care",
    "storyText": "",
    "takenAt": "2024-08-11T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_7807b53986c470156f",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "poster": null,
    "caption": "The ocean, one year on",
    "storyText": "",
    "takenAt": "2025-07-19T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   }
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/threads/thr_b9e51c83f33adac898": {
  "thread": {
   "id": "thr_b9e51c83f33adac898",
   "familyId": "fam_b44fd40e9d36256d3b",
   "source": "auto",
   "kind": "phase",
   "key": "phase:garden",
   "title": "Gardens, summer after summer",
   "titleRenamed": false,
   "observation": "\"garden\" appears in memories from 2021, 2023, 2024, 2025 — 7 memories in all.",
   "basis": "The word \"garden\" in your captions and writing",
   "match": {
    "word": "garden"
   },
   "memoryIds": [
    "mem_6aa6a2b721b1260593",
    "mem_ec56ae9a061e71a5ab",
    "mem_4b70ed96ef67b29f65",
    "mem_63f222abc7f392d012",
    "mem_01399d6dba81c181c9",
    "mem_fb3e71ff2665bb362b",
    "mem_2470198b42e1c9e540"
   ],
   "evidence": {
    "count": 7,
    "fromYear": 2021,
    "toYear": 2025
   },
   "status": "followed",
   "requiresFollowPersonId": null,
   "seenCount": 7,
   "miniStory": null,
   "filmIncluded": false,
   "excludedIds": [],
   "sample": true,
   "createdAt": "2026-10-30T20:42:09.043Z",
   "updatedAt": "2026-10-30T22:10:53.085Z",
   "growthCount": 0
  },
  "items": [
   {
    "id": "mem_6aa6a2b721b1260593",
    "type": "video",
    "src": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-view.mp4",
    "poster": "media/fam_b44fd40e9d36256d3b/mem_6aa6a2b721b1260593-poster.jpg",
    "caption": "Grandma June's garden, first summer",
    "storyText": "",
    "takenAt": "2021-06-12T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": 34.1,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_ec56ae9a061e71a5ab",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_ec56ae9a061e71a5ab-web.jpg",
    "poster": null,
    "caption": "Tomato rows in Grandma's garden",
    "storyText": "",
    "takenAt": "2021-06-26T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_4b70ed96ef67b29f65",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4b70ed96ef67b29f65-web.jpg",
    "poster": null,
    "caption": "The garden gate, painted blue",
    "storyText": "",
    "takenAt": "2023-06-17T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_63f222abc7f392d012",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_63f222abc7f392d012-web.jpg",
    "poster": null,
    "caption": "Grandma June in the garden, gloves on",
    "storyText": "",
    "takenAt": "2023-07-08T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_01399d6dba81c181c9",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "poster": null,
    "caption": "Milo waters the garden his own way",
    "storyText": "",
    "takenAt": "2024-06-15T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_fb3e71ff2665bb362b",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "poster": null,
    "caption": "The garden, taller than Milo",
    "storyText": "",
    "takenAt": "2024-07-27T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_2470198b42e1c9e540",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2470198b42e1c9e540-web.jpg",
    "poster": null,
    "caption": "Grandma's garden, sixth summer",
    "storyText": "",
    "takenAt": "2025-06-21T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   }
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/threads/thr_d57a5d3de9b4981b37": {
  "thread": {
   "id": "thr_d57a5d3de9b4981b37",
   "familyId": "fam_b44fd40e9d36256d3b",
   "source": "auto",
   "kind": "co_appearance",
   "key": "co:per_1c03ef455d57eb3eb6+per_f67acb6274b180d4a0",
   "title": "Milo & Grandma June, together",
   "titleRenamed": false,
   "observation": "Milo and Grandma June appear together in 10 memories.",
   "basis": "These people appearing together in your memories",
   "match": {
    "personIds": [
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ]
   },
   "memoryIds": [
    "mem_cdc89eb41ae2bae21e",
    "mem_ca71de709a423445c4",
    "mem_4e9bdea78284d98733",
    "mem_94fab9ff114312377c",
    "mem_01399d6dba81c181c9",
    "mem_fb3e71ff2665bb362b",
    "mem_74b4de13459ab5e92c",
    "mem_73f2cf5cc2563a5100",
    "mem_7807b53986c470156f",
    "mem_7f2870e0ccda780dba"
   ],
   "evidence": {
    "count": 10,
    "fromYear": 2022,
    "toYear": 2025
   },
   "status": "proposed",
   "requiresFollowPersonId": null,
   "seenCount": 10,
   "miniStory": null,
   "filmIncluded": false,
   "excludedIds": [],
   "sample": true,
   "createdAt": "2026-10-30T20:42:09.044Z",
   "updatedAt": "2026-10-30T22:10:53.095Z",
   "growthCount": 0
  },
  "items": [
   {
    "id": "mem_cdc89eb41ae2bae21e",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_cdc89eb41ae2bae21e-web.jpg",
    "poster": null,
    "caption": "Grandma June braids his curls, very serious work",
    "storyText": "",
    "takenAt": "2022-06-11T16:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_ca71de709a423445c4",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "poster": null,
    "caption": "Rooney's birthday, five candles",
    "storyText": "",
    "takenAt": "2023-04-15T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_4e9bdea78284d98733",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_4e9bdea78284d98733-web.jpg",
    "poster": null,
    "caption": "The tree goes up, Milo directs",
    "storyText": "",
    "takenAt": "2023-12-16T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_94fab9ff114312377c",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_94fab9ff114312377c-web.jpg",
    "poster": null,
    "caption": "Christmas morning, matching pajamas",
    "storyText": "",
    "takenAt": "2023-12-25T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_01399d6dba81c181c9",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_01399d6dba81c181c9-web.jpg",
    "poster": null,
    "caption": "Milo waters the garden his own way",
    "storyText": "",
    "takenAt": "2024-06-15T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_fb3e71ff2665bb362b",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_fb3e71ff2665bb362b-web.jpg",
    "poster": null,
    "caption": "The garden, taller than Milo",
    "storyText": "",
    "takenAt": "2024-07-27T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_74b4de13459ab5e92c",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "poster": null,
    "caption": "Milo's fourth birthday, balloons everywhere",
    "storyText": "",
    "takenAt": "2024-09-07T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_73f2cf5cc2563a5100",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "An ordinary Wednesday",
    "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
    "takenAt": "2024-10-30T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_7807b53986c470156f",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7807b53986c470156f-web.jpg",
    "poster": null,
    "caption": "The ocean, one year on",
    "storyText": "",
    "takenAt": "2025-07-19T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_7f2870e0ccda780dba",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_7f2870e0ccda780dba-web.jpg",
    "poster": null,
    "caption": "Grandma June at the head of the table",
    "storyText": "",
    "takenAt": "2025-10-05T15:00:00.000Z",
    "peopleIds": [
     "per_f67acb6274b180d4a0",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   }
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/threads/thr_fea6feee44751599b9": {
  "thread": {
   "id": "thr_fea6feee44751599b9",
   "familyId": "fam_b44fd40e9d36256d3b",
   "source": "auto",
   "kind": "phase",
   "key": "phase:birthday",
   "title": "Birthdays, spring after spring",
   "titleRenamed": false,
   "observation": "\"birthday\" appears in memories from 2022, 2023, 2024, 2025 — 5 memories in all.",
   "basis": "The word \"birthday\" in your captions and writing",
   "match": {
    "word": "birthday"
   },
   "memoryIds": [
    "mem_e401cb50082a7af781",
    "mem_af4b52e146f5edf5f2",
    "mem_ca71de709a423445c4",
    "mem_6fcc2eced27e195091",
    "mem_74b4de13459ab5e92c",
    "mem_2a0a0b17b2d2264708"
   ],
   "evidence": {
    "count": 6,
    "fromYear": 2022,
    "toYear": 2025
   },
   "status": "proposed",
   "requiresFollowPersonId": null,
   "seenCount": 6,
   "miniStory": null,
   "filmIncluded": false,
   "excludedIds": [],
   "sample": true,
   "createdAt": "2026-10-30T20:42:09.043Z",
   "updatedAt": "2026-10-30T22:10:53.106Z",
   "growthCount": 0
  },
  "items": [
   {
    "id": "mem_e401cb50082a7af781",
    "type": "video",
    "src": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-view.mp4",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-view.mp4",
    "poster": "media/fam_b44fd40e9d36256d3b/mem_e401cb50082a7af781-poster.jpg",
    "caption": "The birthday countdown begins",
    "storyText": "",
    "takenAt": "2022-04-10T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "durationSec": 11.8,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_af4b52e146f5edf5f2",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_af4b52e146f5edf5f2-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_af4b52e146f5edf5f2-web.jpg",
    "poster": null,
    "caption": "Rooney's fourth birthday, the cake with claws",
    "storyText": "",
    "takenAt": "2022-04-16T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_ca71de709a423445c4",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_ca71de709a423445c4-web.jpg",
    "poster": null,
    "caption": "Rooney's birthday, five candles",
    "storyText": "",
    "takenAt": "2023-04-15T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_6fcc2eced27e195091",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_6fcc2eced27e195091-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_6fcc2eced27e195091-web.jpg",
    "poster": null,
    "caption": "Birthday breakfast in bed for Rooney",
    "storyText": "",
    "takenAt": "2024-04-13T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_74b4de13459ab5e92c",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_74b4de13459ab5e92c-web.jpg",
    "poster": null,
    "caption": "Milo's fourth birthday, balloons everywhere",
    "storyText": "",
    "takenAt": "2024-09-07T15:00:00.000Z",
    "peopleIds": [
     "per_1c03ef455d57eb3eb6",
     "per_47f6d75809a92fae04",
     "per_f67acb6274b180d4a0"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_2a0a0b17b2d2264708",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_2a0a0b17b2d2264708-web.jpg",
    "poster": null,
    "caption": "Seven: a birthday crown and big plans",
    "storyText": "",
    "takenAt": "2025-04-12T15:00:00.000Z",
    "peopleIds": [
     "per_47f6d75809a92fae04",
     "per_1c03ef455d57eb3eb6"
    ],
    "durationSec": null,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "private",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   }
  ]
 },
 "GET /api/me": {
  "user": {
   "id": "usr_ab07029fd28b543202",
   "email": "sample@roon.example",
   "name": "Sample Family (Demo)",
   "createdAt": "2026-10-30T13:58:10.808Z"
  },
  "families": [
   {
    "id": "fam_b44fd40e9d36256d3b",
    "name": "Sample Family (Demo)",
    "ownerId": "usr_ab07029fd28b543202",
    "members": [
     {
      "userId": "usr_ab07029fd28b543202",
      "role": "owner",
      "joinedAt": "2026-10-30T13:58:10.808Z",
      "name": "Sample Family (Demo)",
      "email": "sample@roon.example"
     }
    ],
    "plan": "roon",
    "planSelectedAt": "2026-10-30T13:58:10.808Z",
    "billingStatus": "stripe_not_configured",
    "sample": true,
    "createdAt": "2026-10-30T13:58:10.808Z"
   }
  ]
 },
 "POST /api/auth/login": {
  "user": {
   "id": "usr_ab07029fd28b543202",
   "email": "sample@roon.example",
   "name": "Sample Family (Demo)",
   "createdAt": "2026-10-30T13:58:10.808Z"
  }
 },
 "POST /api/families/fam_b44fd40e9d36256d3b/activity/seen": {
  "ok": true,
  "seenAt": "2026-10-30T22:10:53.116Z"
 }
};
