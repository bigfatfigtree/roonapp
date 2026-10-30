// Roon interactive demo — baked sample-family data.
// Captured DARK BAKE (post-reskin v15, default-D) 2026-10-30: throwaway instance of the current app server
// (PORT 8741, hermetic COPY of db.json; real app/data/db.json md5
// d5db1a359bef8efce3475a4da31c7e8f verified unchanged before/after). Sample family
// fam_b44fd40e9d36256d3b. Keys are "METHOD path?sortedquery" — 77 keys, all HTTP 200.
// Bake transforms: "/media/..." URLs rewritten to relative "media/...";
// capture-origin URLs made relative; prompt replyToken fields stripped;
// guest-link token + url fields stripped (signed credentials, same class).
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
      "joinedAt": "2026-10-30T13:58:10.808Z"
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
     "joinedAt": "2026-10-30T13:58:10.808Z"
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
    "photo": 3,
    "video": 1,
    "voice": 0,
    "writing": 7,
    "total": 11
   },
   "videoMinutes": 0.2,
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
    "storageBytesUsed": 836731,
    "storageBytesCap": 214748364800
   },
   "presented": {
    "room": {
     "photosUsed": 3,
     "photosCap": 25000,
     "videoMinutesUsed": 0.2,
     "videoMinutesCap": 300,
     "step": 0
    },
    "storylines": {
     "used": 3,
     "allowed": 3,
     "followedIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c",
      "per_aae84005dd4d3217b0"
     ]
    },
    "processing": {
     "state": "caught_up",
     "toldCount": 11,
     "storedCount": 11
    }
   }
  }
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
    "id": "ch_ad787094a7fd4cb45f",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "The Summer of Dinosaurs",
    "userRenamed": false,
    "startDate": "2022-07-10T15:00:00.000Z",
    "endDate": "2022-08-05T15:00:00.000Z",
    "season": "Summer",
    "year": 2022,
    "narrative": "Between July 10, 2022 and August 5, 2022, your family kept 3 memories here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- July 10, 2022: Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.\n- July 22, 2022: Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.\n- August 5, 2022: Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
    "memoryIds": [
     "mem_1abb036e9e35bd4c42",
     "mem_07aa9a262ce65175cf",
     "mem_8de7b390ec7055d50b"
    ],
    "order": 0,
    "updatedAt": "2026-10-30T18:52:10.131Z",
    "sample": true
   },
   {
    "id": "ch_d3cc9066ec0c7443ae",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "The Summer of Samples",
    "userRenamed": false,
    "startDate": "2023-07-14T15:00:00.000Z",
    "endDate": "2023-07-29T15:00:00.000Z",
    "season": "Summer",
    "year": 2023,
    "narrative": "Between July 14, 2023 and July 29, 2023, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- July 14, 2023: The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.\n- July 14, 2023: Pool afternoon · sample photo\n- July 22, 2023: Filming in the park · sample photo\n- July 22, 2023: Park day, filmed · sample video\n- July 29, 2023: Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.\n- July 29, 2023: Cake, approved · sample photo",
    "memoryIds": [
     "mem_11996f317a0946ad06",
     "mem_9d856062922a6d7c23",
     "mem_03b668adf5f32cdca7",
     "mem_d849f11ecb2e5d21da",
     "mem_a759bf4425339484f5",
     "mem_46d04bf203fed1ff5d"
    ],
    "order": 1,
    "updatedAt": "2026-10-30T18:52:10.154Z",
    "sample": true
   },
   {
    "id": "ch_d43c4902d3105d9070",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "Summer 2024 with Rooney",
    "userRenamed": false,
    "startDate": "2024-07-18T15:00:00.000Z",
    "endDate": "2024-07-18T15:00:00.000Z",
    "season": "Summer",
    "year": 2024,
    "narrative": "Between July 18, 2024 and July 18, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- July 18, 2024: Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
    "memoryIds": [
     "mem_54bb73709bf8737bb8"
    ],
    "order": 2,
    "updatedAt": "2026-10-30T18:52:10.155Z",
    "sample": true
   },
   {
    "id": "ch_0b843b62408a9116fe",
    "familyId": "fam_b44fd40e9d36256d3b",
    "title": "Fall 2024 with Rooney",
    "userRenamed": false,
    "startDate": "2024-10-30T15:00:00.000Z",
    "endDate": "2024-10-30T15:00:00.000Z",
    "season": "Fall",
    "year": 2024,
    "narrative": "Between October 30, 2024 and October 30, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
    "memoryIds": [
     "mem_bc60dba1f2ba10df2b"
    ],
    "order": 3,
    "updatedAt": "2026-10-30T18:52:10.183Z",
    "sample": true
   }
  ],
  "testRun": false,
  "hiddenChapters": 0
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/collections": {
  "collections": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_8155151c9cd32d6f56&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_b24e0a0677ad4745ef&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_bcadb8f7135884c5d7&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=ch_f1fbc2a38bd562f617&targetType=chapter": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_03b668adf5f32cdca7&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_07aa9a262ce65175cf&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_11996f317a0946ad06&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_1abb036e9e35bd4c42&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_46d04bf203fed1ff5d&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_54bb73709bf8737bb8&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_8de7b390ec7055d50b&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_9d856062922a6d7c23&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_a759bf4425339484f5&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_bc60dba1f2ba10df2b&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=mem_d849f11ecb2e5d21da&targetType=memory": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=thr_21706836a6d36b71fb&targetType=thread": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=thr_75d1b7ba7e5803409b&targetType=thread": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=thr_790fb3598ad328b530&targetType=thread": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=thr_809c64de93204e7425&targetType=thread": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/comments?targetId=thr_f8df9044ce1c6f3fed&targetType=thread": {
  "comments": []
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/den-prefs": {
  "autoShareNew": false
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?cursor=MTI=&limit=12&scope=all": {
  "cards": [
   {
    "kind": "noticing",
    "noticing": {
     "type": "ordinary_day",
     "title": "An ordinary day that kept a lot: July 14, 2023",
     "detail": "2 memories were kept on this single day — more than any other day in this family.",
     "evidenceMemoryIds": [
      "mem_11996f317a0946ad06",
      "mem_9d856062922a6d7c23"
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
        "mem_11996f317a0946ad06",
        "mem_9d856062922a6d7c23"
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
     "id": "mem_d849f11ecb2e5d21da",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-hero2.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-poster.jpg",
     "caption": "Park day, filmed · sample video",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
     ],
     "durationSec": 9,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from July 22, 2023, with Rooney and Milo. Moment 3 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "title": "The Summer of Samples",
        "position": 3,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_11996f317a0946ad06",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur summer, again",
     "storyText": "The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from July 14, 2023, with Rooney and Milo. Moment 2 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 2,
        "count": 6,
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
     "id": "mem_9d856062922a6d7c23",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-p2.jpg",
     "poster": null,
     "caption": "Pool afternoon · sample photo",
     "storyText": "",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A photo from July 14, 2023, with Rooney. Moment 1 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "type": "thread",
        "title": "The Summer of Samples",
        "position": 1,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_ad787094a7fd4cb45f",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Dinosaurs",
     "userRenamed": false,
     "startDate": "2022-07-10T15:00:00.000Z",
     "endDate": "2022-08-05T15:00:00.000Z",
     "season": "Summer",
     "year": 2022,
     "narrative": "Between July 10, 2022 and August 5, 2022, your family kept 3 memories here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- July 10, 2022: Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.\n- July 22, 2022: Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.\n- August 5, 2022: Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "memoryIds": [
      "mem_1abb036e9e35bd4c42",
      "mem_07aa9a262ce65175cf",
      "mem_8de7b390ec7055d50b"
     ],
     "order": 0,
     "updatedAt": "2026-10-30T18:52:10.131Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"The Summer of Dinosaurs\" covers July 10, 2022 to August 5, 2022 and holds 3 memories. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Dinosaurs",
       "startDate": "2022-07-10T15:00:00.000Z",
       "endDate": "2022-08-05T15:00:00.000Z",
       "count": 3
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
     "id": "mem_8de7b390ec7055d50b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Milo roars back",
     "storyText": "Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "takenAt": "2022-08-05T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from August 5, 2022, with Rooney and Milo. Moment 1 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 1,
        "count": 6,
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
     "id": "mem_07aa9a262ce65175cf",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur drawing on the fridge",
     "storyText": "Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.",
     "takenAt": "2022-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A piece of writing from July 22, 2022, with Rooney. Moment 2 of 5 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
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
        "count": 5,
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
     "id": "mem_1abb036e9e35bd4c42",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur phase begins",
     "storyText": "Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.",
     "takenAt": "2022-07-10T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A piece of writing from July 10, 2022, with Rooney. Moment 1 of 5 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
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
        "count": 5,
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
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?cursor=MTI=&limit=12&scope=per_04a1327dc4ed158c3c": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_04a1327dc4ed158c3c",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?cursor=MTI=&limit=12&scope=per_aa070d4d417e870984": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_ad787094a7fd4cb45f",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Dinosaurs",
     "userRenamed": false,
     "startDate": "2022-07-10T15:00:00.000Z",
     "endDate": "2022-08-05T15:00:00.000Z",
     "season": "Summer",
     "year": 2022,
     "narrative": "Between July 10, 2022 and August 5, 2022, your family kept 3 memories here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- July 10, 2022: Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.\n- July 22, 2022: Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.\n- August 5, 2022: Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "memoryIds": [
      "mem_1abb036e9e35bd4c42",
      "mem_07aa9a262ce65175cf",
      "mem_8de7b390ec7055d50b"
     ],
     "order": 0,
     "updatedAt": "2026-10-30T18:52:10.131Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"The Summer of Dinosaurs\" covers July 10, 2022 to August 5, 2022 and holds 3 memories. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Dinosaurs",
       "startDate": "2022-07-10T15:00:00.000Z",
       "endDate": "2022-08-05T15:00:00.000Z",
       "count": 3
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
     "id": "mem_d849f11ecb2e5d21da",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-hero2.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-poster.jpg",
     "caption": "Park day, filmed · sample video",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
     ],
     "durationSec": 9,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from July 22, 2023, with Rooney and Milo. Moment 3 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "title": "The Summer of Samples",
        "position": 3,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_11996f317a0946ad06",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur summer, again",
     "storyText": "The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from July 14, 2023, with Rooney and Milo. Moment 2 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 2,
        "count": 6,
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
     "id": "mem_9d856062922a6d7c23",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-p2.jpg",
     "poster": null,
     "caption": "Pool afternoon · sample photo",
     "storyText": "",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A photo from July 14, 2023, with Rooney. Moment 1 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "type": "thread",
        "title": "The Summer of Samples",
        "position": 1,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_8de7b390ec7055d50b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Milo roars back",
     "storyText": "Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "takenAt": "2022-08-05T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from August 5, 2022, with Rooney and Milo. Moment 1 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 1,
        "count": 6,
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
     "id": "mem_07aa9a262ce65175cf",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur drawing on the fridge",
     "storyText": "Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.",
     "takenAt": "2022-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A piece of writing from July 22, 2022, with Rooney. Moment 2 of 5 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
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
        "count": 5,
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
     "id": "mem_1abb036e9e35bd4c42",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur phase begins",
     "storyText": "Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.",
     "takenAt": "2022-07-10T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A piece of writing from July 10, 2022, with Rooney. Moment 1 of 5 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
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
        "count": 5,
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
  "scope": "per_aa070d4d417e870984",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-07&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_07aa9a262ce65175cf",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur drawing on the fridge",
     "storyText": "Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.",
     "takenAt": "2022-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A piece of writing from July 22, 2022, with Rooney. Moment 2 of 5 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
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
        "count": 5,
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
     "id": "mem_1abb036e9e35bd4c42",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur phase begins",
     "storyText": "Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.",
     "takenAt": "2022-07-10T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A piece of writing from July 10, 2022, with Rooney. Moment 1 of 5 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
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
        "count": 5,
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
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-07&scope=per_04a1327dc4ed158c3c": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_04a1327dc4ed158c3c",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-07&scope=per_aa070d4d417e870984": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_07aa9a262ce65175cf",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur drawing on the fridge",
     "storyText": "Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.",
     "takenAt": "2022-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A piece of writing from July 22, 2022, with Rooney. Moment 2 of 5 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
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
        "count": 5,
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
     "id": "mem_1abb036e9e35bd4c42",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur phase begins",
     "storyText": "Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.",
     "takenAt": "2022-07-10T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A piece of writing from July 10, 2022, with Rooney. Moment 1 of 5 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
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
        "count": 5,
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
  "scope": "per_aa070d4d417e870984",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-07&scope=per_aae84005dd4d3217b0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aae84005dd4d3217b0",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-08&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_ad787094a7fd4cb45f",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Dinosaurs",
     "userRenamed": false,
     "startDate": "2022-07-10T15:00:00.000Z",
     "endDate": "2022-08-05T15:00:00.000Z",
     "season": "Summer",
     "year": 2022,
     "narrative": "Between July 10, 2022 and August 5, 2022, your family kept 3 memories here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- July 10, 2022: Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.\n- July 22, 2022: Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.\n- August 5, 2022: Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "memoryIds": [
      "mem_1abb036e9e35bd4c42",
      "mem_07aa9a262ce65175cf",
      "mem_8de7b390ec7055d50b"
     ],
     "order": 0,
     "updatedAt": "2026-10-30T18:52:10.131Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"The Summer of Dinosaurs\" covers July 10, 2022 to August 5, 2022 and holds 3 memories. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Dinosaurs",
       "startDate": "2022-07-10T15:00:00.000Z",
       "endDate": "2022-08-05T15:00:00.000Z",
       "count": 3
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
     "id": "mem_8de7b390ec7055d50b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Milo roars back",
     "storyText": "Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "takenAt": "2022-08-05T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from August 5, 2022, with Rooney and Milo. Moment 1 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 1,
        "count": 6,
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
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-08&scope=per_04a1327dc4ed158c3c": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_8de7b390ec7055d50b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Milo roars back",
     "storyText": "Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "takenAt": "2022-08-05T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from August 5, 2022, with Rooney and Milo. Moment 1 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 1,
        "count": 6,
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
  "scope": "per_04a1327dc4ed158c3c",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-08&scope=per_aa070d4d417e870984": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_ad787094a7fd4cb45f",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Dinosaurs",
     "userRenamed": false,
     "startDate": "2022-07-10T15:00:00.000Z",
     "endDate": "2022-08-05T15:00:00.000Z",
     "season": "Summer",
     "year": 2022,
     "narrative": "Between July 10, 2022 and August 5, 2022, your family kept 3 memories here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- July 10, 2022: Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.\n- July 22, 2022: Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.\n- August 5, 2022: Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "memoryIds": [
      "mem_1abb036e9e35bd4c42",
      "mem_07aa9a262ce65175cf",
      "mem_8de7b390ec7055d50b"
     ],
     "order": 0,
     "updatedAt": "2026-10-30T18:52:10.131Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"The Summer of Dinosaurs\" covers July 10, 2022 to August 5, 2022 and holds 3 memories. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Dinosaurs",
       "startDate": "2022-07-10T15:00:00.000Z",
       "endDate": "2022-08-05T15:00:00.000Z",
       "count": 3
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
     "id": "mem_8de7b390ec7055d50b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Milo roars back",
     "storyText": "Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "takenAt": "2022-08-05T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from August 5, 2022, with Rooney and Milo. Moment 1 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 1,
        "count": 6,
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
  "scope": "per_aa070d4d417e870984",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2022-08&scope=per_aae84005dd4d3217b0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aae84005dd4d3217b0",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-07&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_d3cc9066ec0c7443ae",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Samples",
     "userRenamed": false,
     "startDate": "2023-07-14T15:00:00.000Z",
     "endDate": "2023-07-29T15:00:00.000Z",
     "season": "Summer",
     "year": 2023,
     "narrative": "Between July 14, 2023 and July 29, 2023, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- July 14, 2023: The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.\n- July 14, 2023: Pool afternoon · sample photo\n- July 22, 2023: Filming in the park · sample photo\n- July 22, 2023: Park day, filmed · sample video\n- July 29, 2023: Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.\n- July 29, 2023: Cake, approved · sample photo",
     "memoryIds": [
      "mem_11996f317a0946ad06",
      "mem_9d856062922a6d7c23",
      "mem_03b668adf5f32cdca7",
      "mem_d849f11ecb2e5d21da",
      "mem_a759bf4425339484f5",
      "mem_46d04bf203fed1ff5d"
     ],
     "order": 1,
     "updatedAt": "2026-10-30T18:52:10.154Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
    "commentary": {
     "text": "\"The Summer of Samples\" covers July 14, 2023 to July 29, 2023 and holds 6 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Samples",
       "startDate": "2023-07-14T15:00:00.000Z",
       "endDate": "2023-07-29T15:00:00.000Z",
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
     "id": "mem_a759bf4425339484f5",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur cake",
     "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_aae84005dd4d3217b0"
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
      "text": "A piece of writing from July 29, 2023, with Rooney and Grandma June. Moment 4 of 5 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
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
        "title": "Dinosaurs, summer after summer",
        "position": 4,
        "count": 5,
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
     "id": "mem_46d04bf203fed1ff5d",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-p11.jpg",
     "poster": null,
     "caption": "Cake, approved · sample photo",
     "storyText": "",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A photo from July 29, 2023, with Rooney and Milo. Moment 4 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "title": "The Summer of Samples",
        "position": 4,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_03b668adf5f32cdca7",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-p15.jpg",
     "poster": null,
     "caption": "Filming in the park · sample photo",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A photo from July 22, 2023, with Rooney. Moment 2 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "type": "thread",
        "title": "The Summer of Samples",
        "position": 2,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
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
      "mem_11996f317a0946ad06",
      "mem_9d856062922a6d7c23"
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
        "mem_11996f317a0946ad06",
        "mem_9d856062922a6d7c23"
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
     "id": "mem_d849f11ecb2e5d21da",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-hero2.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-poster.jpg",
     "caption": "Park day, filmed · sample video",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
     ],
     "durationSec": 9,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from July 22, 2023, with Rooney and Milo. Moment 3 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "title": "The Summer of Samples",
        "position": 3,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_11996f317a0946ad06",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur summer, again",
     "storyText": "The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from July 14, 2023, with Rooney and Milo. Moment 2 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 2,
        "count": 6,
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
     "id": "mem_9d856062922a6d7c23",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-p2.jpg",
     "poster": null,
     "caption": "Pool afternoon · sample photo",
     "storyText": "",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A photo from July 14, 2023, with Rooney. Moment 1 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "type": "thread",
        "title": "The Summer of Samples",
        "position": 1,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
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
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-07&scope=per_04a1327dc4ed158c3c": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_d3cc9066ec0c7443ae",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Samples",
     "userRenamed": false,
     "startDate": "2023-07-14T15:00:00.000Z",
     "endDate": "2023-07-29T15:00:00.000Z",
     "season": "Summer",
     "year": 2023,
     "narrative": "Between July 14, 2023 and July 29, 2023, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- July 14, 2023: The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.\n- July 14, 2023: Pool afternoon · sample photo\n- July 22, 2023: Filming in the park · sample photo\n- July 22, 2023: Park day, filmed · sample video\n- July 29, 2023: Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.\n- July 29, 2023: Cake, approved · sample photo",
     "memoryIds": [
      "mem_11996f317a0946ad06",
      "mem_9d856062922a6d7c23",
      "mem_03b668adf5f32cdca7",
      "mem_d849f11ecb2e5d21da",
      "mem_a759bf4425339484f5",
      "mem_46d04bf203fed1ff5d"
     ],
     "order": 1,
     "updatedAt": "2026-10-30T18:52:10.154Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
    "commentary": {
     "text": "\"The Summer of Samples\" covers July 14, 2023 to July 29, 2023 and holds 6 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Samples",
       "startDate": "2023-07-14T15:00:00.000Z",
       "endDate": "2023-07-29T15:00:00.000Z",
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
     "id": "mem_46d04bf203fed1ff5d",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-p11.jpg",
     "poster": null,
     "caption": "Cake, approved · sample photo",
     "storyText": "",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A photo from July 29, 2023, with Rooney and Milo. Moment 4 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "title": "The Summer of Samples",
        "position": 4,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_d849f11ecb2e5d21da",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-hero2.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-poster.jpg",
     "caption": "Park day, filmed · sample video",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
     ],
     "durationSec": 9,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from July 22, 2023, with Rooney and Milo. Moment 3 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "title": "The Summer of Samples",
        "position": 3,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_11996f317a0946ad06",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur summer, again",
     "storyText": "The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from July 14, 2023, with Rooney and Milo. Moment 2 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 2,
        "count": 6,
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
  "scope": "per_04a1327dc4ed158c3c",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-07&scope=per_aa070d4d417e870984": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_d3cc9066ec0c7443ae",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Samples",
     "userRenamed": false,
     "startDate": "2023-07-14T15:00:00.000Z",
     "endDate": "2023-07-29T15:00:00.000Z",
     "season": "Summer",
     "year": 2023,
     "narrative": "Between July 14, 2023 and July 29, 2023, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- July 14, 2023: The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.\n- July 14, 2023: Pool afternoon · sample photo\n- July 22, 2023: Filming in the park · sample photo\n- July 22, 2023: Park day, filmed · sample video\n- July 29, 2023: Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.\n- July 29, 2023: Cake, approved · sample photo",
     "memoryIds": [
      "mem_11996f317a0946ad06",
      "mem_9d856062922a6d7c23",
      "mem_03b668adf5f32cdca7",
      "mem_d849f11ecb2e5d21da",
      "mem_a759bf4425339484f5",
      "mem_46d04bf203fed1ff5d"
     ],
     "order": 1,
     "updatedAt": "2026-10-30T18:52:10.154Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
    "commentary": {
     "text": "\"The Summer of Samples\" covers July 14, 2023 to July 29, 2023 and holds 6 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Samples",
       "startDate": "2023-07-14T15:00:00.000Z",
       "endDate": "2023-07-29T15:00:00.000Z",
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
     "id": "mem_a759bf4425339484f5",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur cake",
     "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_aae84005dd4d3217b0"
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
      "text": "A piece of writing from July 29, 2023, with Rooney and Grandma June. Moment 4 of 5 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
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
        "title": "Dinosaurs, summer after summer",
        "position": 4,
        "count": 5,
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
     "id": "mem_46d04bf203fed1ff5d",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-p11.jpg",
     "poster": null,
     "caption": "Cake, approved · sample photo",
     "storyText": "",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A photo from July 29, 2023, with Rooney and Milo. Moment 4 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "title": "The Summer of Samples",
        "position": 4,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_03b668adf5f32cdca7",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-p15.jpg",
     "poster": null,
     "caption": "Filming in the park · sample photo",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A photo from July 22, 2023, with Rooney. Moment 2 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "type": "thread",
        "title": "The Summer of Samples",
        "position": 2,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_d849f11ecb2e5d21da",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-hero2.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-poster.jpg",
     "caption": "Park day, filmed · sample video",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
     ],
     "durationSec": 9,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from July 22, 2023, with Rooney and Milo. Moment 3 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "title": "The Summer of Samples",
        "position": 3,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_11996f317a0946ad06",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur summer, again",
     "storyText": "The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from July 14, 2023, with Rooney and Milo. Moment 2 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 2,
        "count": 6,
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
     "id": "mem_9d856062922a6d7c23",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-p2.jpg",
     "poster": null,
     "caption": "Pool afternoon · sample photo",
     "storyText": "",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A photo from July 14, 2023, with Rooney. Moment 1 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "type": "thread",
        "title": "The Summer of Samples",
        "position": 1,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": null,
  "scope": "per_aa070d4d417e870984",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2023-07&scope=per_aae84005dd4d3217b0": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_a759bf4425339484f5",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur cake",
     "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_aae84005dd4d3217b0"
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
      "text": "A piece of writing from July 29, 2023, with Rooney and Grandma June. Moment 4 of 5 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
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
        "title": "Dinosaurs, summer after summer",
        "position": 4,
        "count": 5,
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
  "scope": "per_aae84005dd4d3217b0",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-07&scope=all": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_d43c4902d3105d9070",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Summer 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-07-18T15:00:00.000Z",
     "endDate": "2024-07-18T15:00:00.000Z",
     "season": "Summer",
     "year": 2024,
     "narrative": "Between July 18, 2024 and July 18, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- July 18, 2024: Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "memoryIds": [
      "mem_54bb73709bf8737bb8"
     ],
     "order": 2,
     "updatedAt": "2026-10-30T18:52:10.155Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"Summer 2024 with Rooney\" covers July 18, 2024 to July 18, 2024 and holds 1 memory. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Summer 2024 with Rooney",
       "startDate": "2024-07-18T15:00:00.000Z",
       "endDate": "2024-07-18T15:00:00.000Z",
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
     "id": "mem_54bb73709bf8737bb8",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Three summers of dinosaurs",
     "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "takenAt": "2024-07-18T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from July 18, 2024, with Rooney and Milo. Moment 5 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 5,
        "count": 6,
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
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-07&scope=per_04a1327dc4ed158c3c": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_d43c4902d3105d9070",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Summer 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-07-18T15:00:00.000Z",
     "endDate": "2024-07-18T15:00:00.000Z",
     "season": "Summer",
     "year": 2024,
     "narrative": "Between July 18, 2024 and July 18, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- July 18, 2024: Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "memoryIds": [
      "mem_54bb73709bf8737bb8"
     ],
     "order": 2,
     "updatedAt": "2026-10-30T18:52:10.155Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"Summer 2024 with Rooney\" covers July 18, 2024 to July 18, 2024 and holds 1 memory. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Summer 2024 with Rooney",
       "startDate": "2024-07-18T15:00:00.000Z",
       "endDate": "2024-07-18T15:00:00.000Z",
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
     "id": "mem_54bb73709bf8737bb8",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Three summers of dinosaurs",
     "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "takenAt": "2024-07-18T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from July 18, 2024, with Rooney and Milo. Moment 5 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 5,
        "count": 6,
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
  "scope": "per_04a1327dc4ed158c3c",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-07&scope=per_aa070d4d417e870984": {
  "cards": [
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_d43c4902d3105d9070",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Summer 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-07-18T15:00:00.000Z",
     "endDate": "2024-07-18T15:00:00.000Z",
     "season": "Summer",
     "year": 2024,
     "narrative": "Between July 18, 2024 and July 18, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- July 18, 2024: Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "memoryIds": [
      "mem_54bb73709bf8737bb8"
     ],
     "order": 2,
     "updatedAt": "2026-10-30T18:52:10.155Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"Summer 2024 with Rooney\" covers July 18, 2024 to July 18, 2024 and holds 1 memory. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Summer 2024 with Rooney",
       "startDate": "2024-07-18T15:00:00.000Z",
       "endDate": "2024-07-18T15:00:00.000Z",
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
     "id": "mem_54bb73709bf8737bb8",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Three summers of dinosaurs",
     "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "takenAt": "2024-07-18T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from July 18, 2024, with Rooney and Milo. Moment 5 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 5,
        "count": 6,
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
  "scope": "per_aa070d4d417e870984",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-07&scope=per_aae84005dd4d3217b0": {
  "cards": [],
  "nextCursor": null,
  "scope": "per_aae84005dd4d3217b0",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-10&scope=all": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_bc60dba1f2ba10df2b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c",
      "per_aae84005dd4d3217b0"
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
     "id": "ch_0b843b62408a9116fe",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-10-30T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between October 30, 2024 and October 30, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_bc60dba1f2ba10df2b"
     ],
     "order": 3,
     "updatedAt": "2026-10-30T18:52:10.183Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"Fall 2024 with Rooney\" covers October 30, 2024 to October 30, 2024 and holds 1 memory. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Rooney",
       "startDate": "2024-10-30T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 1
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
  "nextCursor": null,
  "scope": "all",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-10&scope=per_04a1327dc4ed158c3c": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_bc60dba1f2ba10df2b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c",
      "per_aae84005dd4d3217b0"
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
     "id": "ch_0b843b62408a9116fe",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-10-30T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between October 30, 2024 and October 30, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_bc60dba1f2ba10df2b"
     ],
     "order": 3,
     "updatedAt": "2026-10-30T18:52:10.183Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"Fall 2024 with Rooney\" covers October 30, 2024 to October 30, 2024 and holds 1 memory. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Rooney",
       "startDate": "2024-10-30T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 1
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
  "nextCursor": null,
  "scope": "per_04a1327dc4ed158c3c",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-10&scope=per_aa070d4d417e870984": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_bc60dba1f2ba10df2b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c",
      "per_aae84005dd4d3217b0"
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
     "id": "ch_0b843b62408a9116fe",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-10-30T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between October 30, 2024 and October 30, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_bc60dba1f2ba10df2b"
     ],
     "order": 3,
     "updatedAt": "2026-10-30T18:52:10.183Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"Fall 2024 with Rooney\" covers October 30, 2024 to October 30, 2024 and holds 1 memory. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Rooney",
       "startDate": "2024-10-30T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 1
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
  "nextCursor": null,
  "scope": "per_aa070d4d417e870984",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&month=2024-10&scope=per_aae84005dd4d3217b0": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_bc60dba1f2ba10df2b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c",
      "per_aae84005dd4d3217b0"
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
     "id": "ch_0b843b62408a9116fe",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-10-30T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between October 30, 2024 and October 30, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_bc60dba1f2ba10df2b"
     ],
     "order": 3,
     "updatedAt": "2026-10-30T18:52:10.183Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"Fall 2024 with Rooney\" covers October 30, 2024 to October 30, 2024 and holds 1 memory. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Rooney",
       "startDate": "2024-10-30T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 1
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
  "nextCursor": null,
  "scope": "per_aae84005dd4d3217b0",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&scope=all": {
  "cards": [
   {
    "kind": "hero",
    "observation": "\"sample\" appears in 4 memories in Summer 2023.",
    "evidence": {
     "count": 4,
     "fromYear": 2023,
     "toYear": 2023
    },
    "thread": {
     "id": "thr_790fb3598ad328b530",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:sample",
     "title": "The Summer of Samples",
     "titleRenamed": false,
     "observation": "\"sample\" appears in 4 memories in Summer 2023.",
     "basis": "The word \"sample\" in your captions and writing",
     "match": {
      "word": "sample"
     },
     "memoryIds": [
      "mem_9d856062922a6d7c23",
      "mem_03b668adf5f32cdca7",
      "mem_d849f11ecb2e5d21da",
      "mem_46d04bf203fed1ff5d"
     ],
     "evidence": {
      "count": 4,
      "fromYear": 2023,
      "toYear": 2023
     },
     "status": "followed",
     "requiresFollowPersonId": null,
     "seenCount": 4,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T13:58:15.530Z",
     "updatedAt": "2026-10-30T19:55:51.423Z",
     "growthCount": 0
    },
    "threadId": "thr_790fb3598ad328b530",
    "commentary": {
     "text": "Assembled from 4 moments kept from 2023: 3 photos, 1 video. Recorded in them: Rooney and Milo.",
     "basedOn": [
      {
       "type": "thread",
       "title": "The Summer of Samples",
       "count": 4,
       "fromYear": 2023,
       "toYear": 2023
      },
      {
       "type": "item_types",
       "counts": {
        "photo": 3,
        "video": 1
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
    "kind": "prompt",
    "prompt": {
     "id": "prm_9234abe8255666df97",
     "familyId": "fam_b44fd40e9d36256d3b",
     "status": "pending",
     "createdAt": "2026-10-30T14:00:19.086Z",
     "dueAt": "2026-10-30T14:00:19.086Z",
     "scheduledFor": "2026-10-30T14:00:19.086Z",
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
    },
    "commentary": {
     "text": "A question waiting since October 30, 2026.",
     "basedOn": [
      {
       "type": "date",
       "value": "2026-10-30T14:00:19.086Z",
       "formatted": "October 30, 2026"
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_bc60dba1f2ba10df2b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c",
      "per_aae84005dd4d3217b0"
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
     "id": "thr_f8df9044ce1c6f3fed",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:dinosaur",
     "title": "Dinosaurs, summer after summer",
     "titleRenamed": false,
     "observation": "\"dinosaur\" appears in memories from 2022, 2023, 2024 — 5 memories in all.",
     "basis": "The word \"dinosaur\" in your captions and writing",
     "match": {
      "word": "dinosaur"
     },
     "memoryIds": [
      "mem_1abb036e9e35bd4c42",
      "mem_07aa9a262ce65175cf",
      "mem_11996f317a0946ad06",
      "mem_a759bf4425339484f5",
      "mem_54bb73709bf8737bb8"
     ],
     "evidence": {
      "count": 5,
      "fromYear": 2022,
      "toYear": 2024
     },
     "status": "proposed",
     "requiresFollowPersonId": null,
     "seenCount": 5,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T13:58:15.530Z",
     "updatedAt": "2026-10-30T19:55:51.423Z",
     "growthCount": 0
    },
    "commentary": {
     "text": "This thread holds 5 moments from 2022 to 2024: 5 pieces of writing. In these moments: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "thread",
       "title": "Dinosaurs, summer after summer",
       "count": 5,
       "fromYear": 2022,
       "toYear": 2024
      },
      {
       "type": "item_types",
       "counts": {
        "writing": 5
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
     "id": "thr_75d1b7ba7e5803409b",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:photo",
     "title": "The Summer of Photos",
     "titleRenamed": false,
     "observation": "\"photo\" appears in 3 memories in Summer 2023.",
     "basis": "The word \"photo\" in your captions and writing",
     "match": {
      "word": "photo"
     },
     "memoryIds": [
      "mem_9d856062922a6d7c23",
      "mem_03b668adf5f32cdca7",
      "mem_46d04bf203fed1ff5d"
     ],
     "evidence": {
      "count": 3,
      "fromYear": 2023,
      "toYear": 2023
     },
     "status": "proposed",
     "requiresFollowPersonId": null,
     "seenCount": 0,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T13:58:15.530Z",
     "updatedAt": "2026-10-30T19:55:51.423Z",
     "growthCount": 3
    },
    "commentary": {
     "text": "This thread holds 3 moments from 2023: 3 photos. In these moments: Rooney and Milo.",
     "basedOn": [
      {
       "type": "thread",
       "title": "The Summer of Photos",
       "count": 3,
       "fromYear": 2023,
       "toYear": 2023
      },
      {
       "type": "item_types",
       "counts": {
        "photo": 3
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
    "kind": "chapter",
    "chapter": {
     "id": "ch_0b843b62408a9116fe",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-10-30T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between October 30, 2024 and October 30, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_bc60dba1f2ba10df2b"
     ],
     "order": 3,
     "updatedAt": "2026-10-30T18:52:10.183Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"Fall 2024 with Rooney\" covers October 30, 2024 to October 30, 2024 and holds 1 memory. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Rooney",
       "startDate": "2024-10-30T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 1
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
     "id": "ch_d43c4902d3105d9070",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Summer 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-07-18T15:00:00.000Z",
     "endDate": "2024-07-18T15:00:00.000Z",
     "season": "Summer",
     "year": 2024,
     "narrative": "Between July 18, 2024 and July 18, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- July 18, 2024: Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "memoryIds": [
      "mem_54bb73709bf8737bb8"
     ],
     "order": 2,
     "updatedAt": "2026-10-30T18:52:10.155Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"Summer 2024 with Rooney\" covers July 18, 2024 to July 18, 2024 and holds 1 memory. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Summer 2024 with Rooney",
       "startDate": "2024-07-18T15:00:00.000Z",
       "endDate": "2024-07-18T15:00:00.000Z",
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
     "id": "mem_54bb73709bf8737bb8",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Three summers of dinosaurs",
     "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "takenAt": "2024-07-18T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from July 18, 2024, with Rooney and Milo. Moment 5 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 5,
        "count": 6,
        "fromYear": 2022,
        "toYear": 2024
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_d3cc9066ec0c7443ae",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Samples",
     "userRenamed": false,
     "startDate": "2023-07-14T15:00:00.000Z",
     "endDate": "2023-07-29T15:00:00.000Z",
     "season": "Summer",
     "year": 2023,
     "narrative": "Between July 14, 2023 and July 29, 2023, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- July 14, 2023: The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.\n- July 14, 2023: Pool afternoon · sample photo\n- July 22, 2023: Filming in the park · sample photo\n- July 22, 2023: Park day, filmed · sample video\n- July 29, 2023: Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.\n- July 29, 2023: Cake, approved · sample photo",
     "memoryIds": [
      "mem_11996f317a0946ad06",
      "mem_9d856062922a6d7c23",
      "mem_03b668adf5f32cdca7",
      "mem_d849f11ecb2e5d21da",
      "mem_a759bf4425339484f5",
      "mem_46d04bf203fed1ff5d"
     ],
     "order": 1,
     "updatedAt": "2026-10-30T18:52:10.154Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
    "commentary": {
     "text": "\"The Summer of Samples\" covers July 14, 2023 to July 29, 2023 and holds 6 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Samples",
       "startDate": "2023-07-14T15:00:00.000Z",
       "endDate": "2023-07-29T15:00:00.000Z",
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
     "id": "mem_a759bf4425339484f5",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur cake",
     "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_aae84005dd4d3217b0"
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
      "text": "A piece of writing from July 29, 2023, with Rooney and Grandma June. Moment 4 of 5 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
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
        "title": "Dinosaurs, summer after summer",
        "position": 4,
        "count": 5,
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
     "id": "mem_46d04bf203fed1ff5d",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-p11.jpg",
     "poster": null,
     "caption": "Cake, approved · sample photo",
     "storyText": "",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A photo from July 29, 2023, with Rooney and Milo. Moment 4 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "title": "The Summer of Samples",
        "position": 4,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_03b668adf5f32cdca7",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-p15.jpg",
     "poster": null,
     "caption": "Filming in the park · sample photo",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A photo from July 22, 2023, with Rooney. Moment 2 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "type": "thread",
        "title": "The Summer of Samples",
        "position": 2,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
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
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&scope=per_04a1327dc4ed158c3c": {
  "cards": [
   {
    "kind": "hero",
    "thread": {
     "id": "thr_790fb3598ad328b530",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:sample",
     "title": "The Summer of Samples",
     "titleRenamed": false,
     "observation": "\"sample\" appears in 4 memories in Summer 2023.",
     "basis": "The word \"sample\" in your captions and writing",
     "match": {
      "word": "sample"
     },
     "memoryIds": [
      "mem_9d856062922a6d7c23",
      "mem_03b668adf5f32cdca7",
      "mem_d849f11ecb2e5d21da",
      "mem_46d04bf203fed1ff5d"
     ],
     "evidence": {
      "count": 4,
      "fromYear": 2023,
      "toYear": 2023
     },
     "status": "followed",
     "requiresFollowPersonId": null,
     "seenCount": 4,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T13:58:15.530Z",
     "updatedAt": "2026-10-30T19:55:51.430Z",
     "growthCount": 0
    },
    "observation": "\"sample\" appears in 4 memories in Summer 2023.",
    "evidence": {
     "count": 4,
     "fromYear": 2023,
     "toYear": 2023
    },
    "threadId": "thr_790fb3598ad328b530",
    "commentary": {
     "text": "Assembled from 4 moments kept from 2023: 3 photos, 1 video. Recorded in them: Rooney and Milo.",
     "basedOn": [
      {
       "type": "thread",
       "title": "The Summer of Samples",
       "count": 4,
       "fromYear": 2023,
       "toYear": 2023
      },
      {
       "type": "item_types",
       "counts": {
        "photo": 3,
        "video": 1
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
     "id": "mem_bc60dba1f2ba10df2b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c",
      "per_aae84005dd4d3217b0"
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
    "kind": "prompt",
    "prompt": {
     "id": "prm_cc8b0d47af0bbdeaf4",
     "familyId": "fam_b44fd40e9d36256d3b",
     "status": "pending",
     "createdAt": "2026-10-30T14:00:19.102Z",
     "dueAt": "2026-10-30T14:00:19.102Z",
     "scheduledFor": "2026-10-30T14:00:19.102Z",
     "answers": [],
     "sample": true,
     "kind": "series",
     "seriesId": "ser_7fbee44a13d2d27423",
     "personId": "per_04a1327dc4ed158c3c",
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
    "commentary": {
     "text": "A question about Milo, waiting since October 30, 2026.",
     "basedOn": [
      {
       "type": "date",
       "value": "2026-10-30T14:00:19.102Z",
       "formatted": "October 30, 2026"
      },
      {
       "type": "people",
       "names": [
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "prompt",
    "prompt": {
     "id": "prm_5d13f59c8d281fbc11",
     "familyId": "fam_b44fd40e9d36256d3b",
     "status": "pending",
     "createdAt": "2026-10-30T14:00:19.102Z",
     "dueAt": "2026-10-30T14:00:19.102Z",
     "scheduledFor": "2026-10-30T14:00:19.102Z",
     "answers": [],
     "sample": true,
     "kind": "series",
     "seriesId": "ser_6918eb3a5542b8e4f4",
     "personId": "per_04a1327dc4ed158c3c",
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
    "commentary": {
     "text": "A question about Milo, waiting since October 30, 2026.",
     "basedOn": [
      {
       "type": "date",
       "value": "2026-10-30T14:00:19.102Z",
       "formatted": "October 30, 2026"
      },
      {
       "type": "people",
       "names": [
        "Milo"
       ]
      }
     ]
    }
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_0b843b62408a9116fe",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-10-30T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between October 30, 2024 and October 30, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_bc60dba1f2ba10df2b"
     ],
     "order": 3,
     "updatedAt": "2026-10-30T18:52:10.183Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"Fall 2024 with Rooney\" covers October 30, 2024 to October 30, 2024 and holds 1 memory. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Rooney",
       "startDate": "2024-10-30T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 1
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
     "id": "ch_d43c4902d3105d9070",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Summer 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-07-18T15:00:00.000Z",
     "endDate": "2024-07-18T15:00:00.000Z",
     "season": "Summer",
     "year": 2024,
     "narrative": "Between July 18, 2024 and July 18, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- July 18, 2024: Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "memoryIds": [
      "mem_54bb73709bf8737bb8"
     ],
     "order": 2,
     "updatedAt": "2026-10-30T18:52:10.155Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"Summer 2024 with Rooney\" covers July 18, 2024 to July 18, 2024 and holds 1 memory. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Summer 2024 with Rooney",
       "startDate": "2024-07-18T15:00:00.000Z",
       "endDate": "2024-07-18T15:00:00.000Z",
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
     "id": "mem_54bb73709bf8737bb8",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Three summers of dinosaurs",
     "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "takenAt": "2024-07-18T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from July 18, 2024, with Rooney and Milo. Moment 5 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 5,
        "count": 6,
        "fromYear": 2022,
        "toYear": 2024
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_d3cc9066ec0c7443ae",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Samples",
     "userRenamed": false,
     "startDate": "2023-07-14T15:00:00.000Z",
     "endDate": "2023-07-29T15:00:00.000Z",
     "season": "Summer",
     "year": 2023,
     "narrative": "Between July 14, 2023 and July 29, 2023, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- July 14, 2023: The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.\n- July 14, 2023: Pool afternoon · sample photo\n- July 22, 2023: Filming in the park · sample photo\n- July 22, 2023: Park day, filmed · sample video\n- July 29, 2023: Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.\n- July 29, 2023: Cake, approved · sample photo",
     "memoryIds": [
      "mem_11996f317a0946ad06",
      "mem_9d856062922a6d7c23",
      "mem_03b668adf5f32cdca7",
      "mem_d849f11ecb2e5d21da",
      "mem_a759bf4425339484f5",
      "mem_46d04bf203fed1ff5d"
     ],
     "order": 1,
     "updatedAt": "2026-10-30T18:52:10.154Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
    "commentary": {
     "text": "\"The Summer of Samples\" covers July 14, 2023 to July 29, 2023 and holds 6 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Samples",
       "startDate": "2023-07-14T15:00:00.000Z",
       "endDate": "2023-07-29T15:00:00.000Z",
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
     "id": "mem_46d04bf203fed1ff5d",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-p11.jpg",
     "poster": null,
     "caption": "Cake, approved · sample photo",
     "storyText": "",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A photo from July 29, 2023, with Rooney and Milo. Moment 4 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "title": "The Summer of Samples",
        "position": 4,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_d849f11ecb2e5d21da",
     "type": "video",
     "src": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-view.mp4",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-hero2.mp4",
     "poster": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-poster.jpg",
     "caption": "Park day, filmed · sample video",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
     ],
     "durationSec": 9,
     "sample": true,
     "saved": false,
     "savedAt": null,
     "audience": "den",
     "audiencePeople": null,
     "reactions": [],
     "commentCount": 0,
     "commentary": {
      "text": "A video from July 22, 2023, with Rooney and Milo. Moment 3 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "title": "The Summer of Samples",
        "position": 3,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_11996f317a0946ad06",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur summer, again",
     "storyText": "The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.",
     "takenAt": "2023-07-14T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from July 14, 2023, with Rooney and Milo. Moment 2 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 2,
        "count": 6,
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
     "id": "mem_8de7b390ec7055d50b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Milo roars back",
     "storyText": "Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
     "takenAt": "2022-08-05T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from August 5, 2022, with Rooney and Milo. Moment 1 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 1,
        "count": 6,
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
  "scope": "per_04a1327dc4ed158c3c",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&scope=per_aa070d4d417e870984": {
  "cards": [
   {
    "kind": "hero",
    "thread": {
     "id": "thr_790fb3598ad328b530",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:sample",
     "title": "The Summer of Samples",
     "titleRenamed": false,
     "observation": "\"sample\" appears in 4 memories in Summer 2023.",
     "basis": "The word \"sample\" in your captions and writing",
     "match": {
      "word": "sample"
     },
     "memoryIds": [
      "mem_9d856062922a6d7c23",
      "mem_03b668adf5f32cdca7",
      "mem_d849f11ecb2e5d21da",
      "mem_46d04bf203fed1ff5d"
     ],
     "evidence": {
      "count": 4,
      "fromYear": 2023,
      "toYear": 2023
     },
     "status": "followed",
     "requiresFollowPersonId": null,
     "seenCount": 4,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T13:58:15.530Z",
     "updatedAt": "2026-10-30T19:55:51.435Z",
     "growthCount": 0
    },
    "observation": "\"sample\" appears in 4 memories in Summer 2023.",
    "evidence": {
     "count": 4,
     "fromYear": 2023,
     "toYear": 2023
    },
    "threadId": "thr_790fb3598ad328b530",
    "commentary": {
     "text": "Assembled from 4 moments kept from 2023: 3 photos, 1 video. Recorded in them: Rooney and Milo.",
     "basedOn": [
      {
       "type": "thread",
       "title": "The Summer of Samples",
       "count": 4,
       "fromYear": 2023,
       "toYear": 2023
      },
      {
       "type": "item_types",
       "counts": {
        "photo": 3,
        "video": 1
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
     "id": "mem_bc60dba1f2ba10df2b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c",
      "per_aae84005dd4d3217b0"
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
    "kind": "prompt",
    "prompt": {
     "id": "prm_b96c4b9c8925ee2957",
     "familyId": "fam_b44fd40e9d36256d3b",
     "status": "pending",
     "createdAt": "2026-10-30T14:00:19.152Z",
     "dueAt": "2026-10-30T14:00:19.152Z",
     "scheduledFor": "2026-10-30T14:00:19.152Z",
     "answers": [],
     "sample": true,
     "kind": "bank",
     "personId": "per_aa070d4d417e870984",
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
    "commentary": {
     "text": "A question about Rooney, waiting since October 30, 2026.",
     "basedOn": [
      {
       "type": "date",
       "value": "2026-10-30T14:00:19.152Z",
       "formatted": "October 30, 2026"
      },
      {
       "type": "people",
       "names": [
        "Rooney"
       ]
      }
     ]
    }
   },
   {
    "kind": "prompt",
    "prompt": {
     "id": "prm_27755ea9a72216e4f6",
     "familyId": "fam_b44fd40e9d36256d3b",
     "status": "pending",
     "createdAt": "2026-10-30T14:00:19.099Z",
     "dueAt": "2026-10-30T14:00:19.099Z",
     "scheduledFor": "2026-10-30T14:00:19.099Z",
     "answers": [],
     "sample": true,
     "kind": "series",
     "seriesId": "ser_99032b797f57947041",
     "personId": "per_aa070d4d417e870984",
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
    "commentary": {
     "text": "A question about Rooney, waiting since October 30, 2026.",
     "basedOn": [
      {
       "type": "date",
       "value": "2026-10-30T14:00:19.099Z",
       "formatted": "October 30, 2026"
      },
      {
       "type": "people",
       "names": [
        "Rooney"
       ]
      }
     ]
    }
   },
   {
    "kind": "prompt",
    "prompt": {
     "id": "prm_3c5caf6028d2c2002f",
     "familyId": "fam_b44fd40e9d36256d3b",
     "status": "pending",
     "createdAt": "2026-10-30T14:00:19.098Z",
     "dueAt": "2026-10-30T14:00:19.098Z",
     "scheduledFor": "2026-10-30T14:00:19.098Z",
     "answers": [],
     "sample": true,
     "kind": "series",
     "seriesId": "ser_d145f2f02d552a60b6",
     "personId": "per_aa070d4d417e870984",
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
    "commentary": {
     "text": "A question about Rooney, waiting since October 30, 2026.",
     "basedOn": [
      {
       "type": "date",
       "value": "2026-10-30T14:00:19.098Z",
       "formatted": "October 30, 2026"
      },
      {
       "type": "people",
       "names": [
        "Rooney"
       ]
      }
     ]
    }
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_0b843b62408a9116fe",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-10-30T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between October 30, 2024 and October 30, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_bc60dba1f2ba10df2b"
     ],
     "order": 3,
     "updatedAt": "2026-10-30T18:52:10.183Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"Fall 2024 with Rooney\" covers October 30, 2024 to October 30, 2024 and holds 1 memory. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Rooney",
       "startDate": "2024-10-30T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 1
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
     "id": "ch_d43c4902d3105d9070",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Summer 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-07-18T15:00:00.000Z",
     "endDate": "2024-07-18T15:00:00.000Z",
     "season": "Summer",
     "year": 2024,
     "narrative": "Between July 18, 2024 and July 18, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo.\nIn your own words:\n- July 18, 2024: Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "memoryIds": [
      "mem_54bb73709bf8737bb8"
     ],
     "order": 2,
     "updatedAt": "2026-10-30T18:52:10.155Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"Summer 2024 with Rooney\" covers July 18, 2024 to July 18, 2024 and holds 1 memory. In these memories: Rooney and Milo.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Summer 2024 with Rooney",
       "startDate": "2024-07-18T15:00:00.000Z",
       "endDate": "2024-07-18T15:00:00.000Z",
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
     "id": "mem_54bb73709bf8737bb8",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Three summers of dinosaurs",
     "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
     "takenAt": "2024-07-18T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A piece of writing from July 18, 2024, with Rooney and Milo. Moment 5 of 6 in the thread \"Milo & Rooney, together\", which runs from 2022 to 2024.",
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
        "position": 5,
        "count": 6,
        "fromYear": 2022,
        "toYear": 2024
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_d3cc9066ec0c7443ae",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "The Summer of Samples",
     "userRenamed": false,
     "startDate": "2023-07-14T15:00:00.000Z",
     "endDate": "2023-07-29T15:00:00.000Z",
     "season": "Summer",
     "year": 2023,
     "narrative": "Between July 14, 2023 and July 29, 2023, your family kept 6 memories here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- July 14, 2023: The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.\n- July 14, 2023: Pool afternoon · sample photo\n- July 22, 2023: Filming in the park · sample photo\n- July 22, 2023: Park day, filmed · sample video\n- July 29, 2023: Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.\n- July 29, 2023: Cake, approved · sample photo",
     "memoryIds": [
      "mem_11996f317a0946ad06",
      "mem_9d856062922a6d7c23",
      "mem_03b668adf5f32cdca7",
      "mem_d849f11ecb2e5d21da",
      "mem_a759bf4425339484f5",
      "mem_46d04bf203fed1ff5d"
     ],
     "order": 1,
     "updatedAt": "2026-10-30T18:52:10.154Z",
     "sample": true
    },
    "thumb": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
    "commentary": {
     "text": "\"The Summer of Samples\" covers July 14, 2023 to July 29, 2023 and holds 6 memories. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "The Summer of Samples",
       "startDate": "2023-07-14T15:00:00.000Z",
       "endDate": "2023-07-29T15:00:00.000Z",
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
     "id": "mem_a759bf4425339484f5",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur cake",
     "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_aae84005dd4d3217b0"
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
      "text": "A piece of writing from July 29, 2023, with Rooney and Grandma June. Moment 4 of 5 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
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
        "title": "Dinosaurs, summer after summer",
        "position": 4,
        "count": 5,
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
     "id": "mem_46d04bf203fed1ff5d",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-p11.jpg",
     "poster": null,
     "caption": "Cake, approved · sample photo",
     "storyText": "",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c"
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
      "text": "A photo from July 29, 2023, with Rooney and Milo. Moment 4 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "title": "The Summer of Samples",
        "position": 4,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_03b668adf5f32cdca7",
     "type": "photo",
     "src": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-web.jpg",
     "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-p15.jpg",
     "poster": null,
     "caption": "Filming in the park · sample photo",
     "storyText": "",
     "takenAt": "2023-07-22T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984"
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
      "text": "A photo from July 22, 2023, with Rooney. Moment 2 of 4 in the thread \"The Summer of Samples\", which runs from 2023.",
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
        "type": "thread",
        "title": "The Summer of Samples",
        "position": 2,
        "count": 4,
        "fromYear": 2023,
        "toYear": 2023
       }
      ]
     }
    },
    "onThisDay": false
   }
  ],
  "nextCursor": "MTI=",
  "scope": "per_aa070d4d417e870984",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=12&scope=per_aae84005dd4d3217b0": {
  "cards": [
   {
    "kind": "media",
    "memory": {
     "id": "mem_bc60dba1f2ba10df2b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c",
      "per_aae84005dd4d3217b0"
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
    "kind": "prompt",
    "prompt": {
     "id": "prm_5def76a17e706cd450",
     "familyId": "fam_b44fd40e9d36256d3b",
     "status": "pending",
     "createdAt": "2026-10-30T14:00:19.103Z",
     "dueAt": "2026-10-30T14:00:19.103Z",
     "scheduledFor": "2026-10-30T14:00:19.103Z",
     "answers": [],
     "sample": true,
     "kind": "series",
     "seriesId": "ser_8f00e63c6bff550cb4",
     "personId": "per_aae84005dd4d3217b0",
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
    "commentary": {
     "text": "A question about Grandma June, waiting since October 30, 2026.",
     "basedOn": [
      {
       "type": "date",
       "value": "2026-10-30T14:00:19.103Z",
       "formatted": "October 30, 2026"
      },
      {
       "type": "people",
       "names": [
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "prompt",
    "prompt": {
     "id": "prm_c2dc83598698bff2f2",
     "familyId": "fam_b44fd40e9d36256d3b",
     "status": "pending",
     "createdAt": "2026-10-30T14:00:19.103Z",
     "dueAt": "2026-10-30T14:00:19.103Z",
     "scheduledFor": "2026-10-30T14:00:19.103Z",
     "answers": [],
     "sample": true,
     "kind": "series",
     "seriesId": "ser_c0f6c358b2d6cca457",
     "personId": "per_aae84005dd4d3217b0",
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
    "commentary": {
     "text": "A question about Grandma June, waiting since October 30, 2026.",
     "basedOn": [
      {
       "type": "date",
       "value": "2026-10-30T14:00:19.103Z",
       "formatted": "October 30, 2026"
      },
      {
       "type": "people",
       "names": [
        "Grandma June"
       ]
      }
     ]
    }
   },
   {
    "kind": "chapter",
    "chapter": {
     "id": "ch_0b843b62408a9116fe",
     "familyId": "fam_b44fd40e9d36256d3b",
     "title": "Fall 2024 with Rooney",
     "userRenamed": false,
     "startDate": "2024-10-30T15:00:00.000Z",
     "endDate": "2024-10-30T15:00:00.000Z",
     "season": "Fall",
     "year": 2024,
     "narrative": "Between October 30, 2024 and October 30, 2024, your family kept 1 memory here.\nIn these memories: Rooney, Milo, Grandma June.\nIn your own words:\n- October 30, 2024: Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "memoryIds": [
      "mem_bc60dba1f2ba10df2b"
     ],
     "order": 3,
     "updatedAt": "2026-10-30T18:52:10.183Z",
     "sample": true
    },
    "thumb": null,
    "commentary": {
     "text": "\"Fall 2024 with Rooney\" covers October 30, 2024 to October 30, 2024 and holds 1 memory. In these memories: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "chapter",
       "title": "Fall 2024 with Rooney",
       "startDate": "2024-10-30T15:00:00.000Z",
       "endDate": "2024-10-30T15:00:00.000Z",
       "count": 1
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
     "id": "mem_a759bf4425339484f5",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "Dinosaur cake",
     "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
     "takenAt": "2023-07-29T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_aae84005dd4d3217b0"
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
      "text": "A piece of writing from July 29, 2023, with Rooney and Grandma June. Moment 4 of 5 in the thread \"Dinosaurs, summer after summer\", which runs from 2022 to 2024.",
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
        "title": "Dinosaurs, summer after summer",
        "position": 4,
        "count": 5,
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
  "scope": "per_aae84005dd4d3217b0",
  "storylines": [
   {
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/feed?limit=4&scope=all": {
  "cards": [
   {
    "kind": "hero",
    "observation": "\"sample\" appears in 4 memories in Summer 2023.",
    "evidence": {
     "count": 4,
     "fromYear": 2023,
     "toYear": 2023
    },
    "thread": {
     "id": "thr_790fb3598ad328b530",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:sample",
     "title": "The Summer of Samples",
     "titleRenamed": false,
     "observation": "\"sample\" appears in 4 memories in Summer 2023.",
     "basis": "The word \"sample\" in your captions and writing",
     "match": {
      "word": "sample"
     },
     "memoryIds": [
      "mem_9d856062922a6d7c23",
      "mem_03b668adf5f32cdca7",
      "mem_d849f11ecb2e5d21da",
      "mem_46d04bf203fed1ff5d"
     ],
     "evidence": {
      "count": 4,
      "fromYear": 2023,
      "toYear": 2023
     },
     "status": "followed",
     "requiresFollowPersonId": null,
     "seenCount": 4,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T13:58:15.530Z",
     "updatedAt": "2026-10-30T19:55:51.448Z",
     "growthCount": 0
    },
    "threadId": "thr_790fb3598ad328b530",
    "commentary": {
     "text": "Assembled from 4 moments kept from 2023: 3 photos, 1 video. Recorded in them: Rooney and Milo.",
     "basedOn": [
      {
       "type": "thread",
       "title": "The Summer of Samples",
       "count": 4,
       "fromYear": 2023,
       "toYear": 2023
      },
      {
       "type": "item_types",
       "counts": {
        "photo": 3,
        "video": 1
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
    "kind": "prompt",
    "prompt": {
     "id": "prm_9234abe8255666df97",
     "familyId": "fam_b44fd40e9d36256d3b",
     "status": "pending",
     "createdAt": "2026-10-30T14:00:19.086Z",
     "dueAt": "2026-10-30T14:00:19.086Z",
     "scheduledFor": "2026-10-30T14:00:19.086Z",
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
    },
    "commentary": {
     "text": "A question waiting since October 30, 2026.",
     "basedOn": [
      {
       "type": "date",
       "value": "2026-10-30T14:00:19.086Z",
       "formatted": "October 30, 2026"
      }
     ]
    }
   },
   {
    "kind": "media",
    "memory": {
     "id": "mem_bc60dba1f2ba10df2b",
     "type": "writing",
     "src": null,
     "originalSrc": null,
     "poster": null,
     "caption": "An ordinary Wednesday",
     "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
     "takenAt": "2024-10-30T15:00:00.000Z",
     "peopleIds": [
      "per_aa070d4d417e870984",
      "per_04a1327dc4ed158c3c",
      "per_aae84005dd4d3217b0"
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
     "id": "thr_f8df9044ce1c6f3fed",
     "familyId": "fam_b44fd40e9d36256d3b",
     "source": "auto",
     "kind": "phase",
     "key": "phase:dinosaur",
     "title": "Dinosaurs, summer after summer",
     "titleRenamed": false,
     "observation": "\"dinosaur\" appears in memories from 2022, 2023, 2024 — 5 memories in all.",
     "basis": "The word \"dinosaur\" in your captions and writing",
     "match": {
      "word": "dinosaur"
     },
     "memoryIds": [
      "mem_1abb036e9e35bd4c42",
      "mem_07aa9a262ce65175cf",
      "mem_11996f317a0946ad06",
      "mem_a759bf4425339484f5",
      "mem_54bb73709bf8737bb8"
     ],
     "evidence": {
      "count": 5,
      "fromYear": 2022,
      "toYear": 2024
     },
     "status": "proposed",
     "requiresFollowPersonId": null,
     "seenCount": 5,
     "miniStory": null,
     "filmIncluded": false,
     "excludedIds": [],
     "sample": true,
     "createdAt": "2026-10-30T13:58:15.530Z",
     "updatedAt": "2026-10-30T19:55:51.448Z",
     "growthCount": 0
    },
    "commentary": {
     "text": "This thread holds 5 moments from 2022 to 2024: 5 pieces of writing. In these moments: Rooney, Milo and Grandma June.",
     "basedOn": [
      {
       "type": "thread",
       "title": "Dinosaurs, summer after summer",
       "count": 5,
       "fromYear": 2022,
       "toYear": 2024
      },
      {
       "type": "item_types",
       "counts": {
        "writing": 5
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
    "personId": "per_aa070d4d417e870984",
    "name": "Rooney",
    "posture": "growing"
   },
   {
    "personId": "per_04a1327dc4ed158c3c",
    "name": "Milo",
    "posture": "growing"
   },
   {
    "personId": "per_aae84005dd4d3217b0",
    "name": "Grandma June",
    "posture": "together"
   }
  ],
  "presented": {
   "room": {
    "photosUsed": 3,
    "photosCap": 25000,
    "videoMinutesUsed": 0.2,
    "videoMinutesCap": 300,
    "step": 0
   },
   "storylines": {
    "used": 3,
    "allowed": 3,
    "followedIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ]
   },
   "processing": {
    "state": "caught_up",
    "toldCount": 11,
    "storedCount": 11
   }
  }
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/film/2022": {
  "year": 2022,
  "film": [],
  "count": 0
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/film/2023": {
  "year": 2023,
  "film": [
   {
    "memoryId": "mem_9d856062922a6d7c23",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-p2.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
    "takenAt": "2023-07-14T15:00:00.000Z",
    "caption": "Pool afternoon · sample photo",
    "storyText": "",
    "intertitle": "The Summer of Samples",
    "chapterTitle": "The Summer of Samples"
   },
   {
    "memoryId": "mem_03b668adf5f32cdca7",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-p15.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-web.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-web.jpg",
    "takenAt": "2023-07-22T15:00:00.000Z",
    "caption": "Filming in the park · sample photo",
    "storyText": "",
    "intertitle": "The Summer of Samples",
    "chapterTitle": "The Summer of Samples"
   },
   {
    "memoryId": "mem_46d04bf203fed1ff5d",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-p11.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-web.jpg",
    "src": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-web.jpg",
    "takenAt": "2023-07-29T15:00:00.000Z",
    "caption": "Cake, approved · sample photo",
    "storyText": "",
    "intertitle": "The Summer of Samples",
    "chapterTitle": "The Summer of Samples"
   }
  ],
  "count": 3
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/film/2024": {
  "year": 2024,
  "film": [],
  "count": 0
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/guest-links": {
  "guestLinks": [
   {
    "id": "gst_e634a7a4314283a2f5",
    "familyId": "fam_b44fd40e9d36256d3b",
    "scope": "thread",
    "targetId": "thr_790fb3598ad328b530",
    "threadId": "thr_790fb3598ad328b530",
    "filmYear": null,
    "noticingKey": null,
    "createdBy": "usr_ab07029fd28b543202",
    "createdAt": "2026-10-30T19:43:38.054Z",
    "expiry": "30d",
    "expiresAt": "2026-11-29T19:43:38.057Z",
    "allowReactions": true,
    "allowComments": true,
    "downloadOriginals": false,
    "revoked": false,
    "views": 0,
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
    "id": "mem_1abb036e9e35bd4c42",
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
     "per_aa070d4d417e870984"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T13:58:10.810Z"
   },
   {
    "id": "mem_07aa9a262ce65175cf",
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
     "per_aa070d4d417e870984"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T13:58:10.810Z"
   },
   {
    "id": "mem_8de7b390ec7055d50b",
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
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T13:58:10.810Z"
   },
   {
    "id": "mem_11996f317a0946ad06",
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
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T13:58:10.810Z"
   },
   {
    "id": "mem_9d856062922a6d7c23",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-p2.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_9d856062922a6d7c23-web.jpg"
    ],
    "durationSec": null,
    "originalName": "p2.jpg",
    "mime": "image/jpeg",
    "size": 151737,
    "caption": "Pool afternoon · sample photo",
    "storyText": "",
    "takenAt": "2023-07-14T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T13:58:10.937Z"
   },
   {
    "id": "mem_03b668adf5f32cdca7",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-p15.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_03b668adf5f32cdca7-web.jpg"
    ],
    "durationSec": null,
    "originalName": "p15.jpg",
    "mime": "image/jpeg",
    "size": 144064,
    "caption": "Filming in the park · sample photo",
    "storyText": "",
    "takenAt": "2023-07-22T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T13:58:11.075Z"
   },
   {
    "id": "mem_d849f11ecb2e5d21da",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "video",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-hero2.mp4",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-view.mp4",
    "posterRef": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-poster.jpg",
    "renditionNote": null,
    "renditionFiles": [
     "mem_d849f11ecb2e5d21da-poster.jpg",
     "mem_d849f11ecb2e5d21da-view.mp4"
    ],
    "durationSec": 9,
    "originalName": "hero2.mp4",
    "mime": "video/mp4",
    "size": 419415,
    "caption": "Park day, filmed · sample video",
    "storyText": "",
    "takenAt": "2023-07-22T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T13:58:15.500Z"
   },
   {
    "id": "mem_a759bf4425339484f5",
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
     "per_aa070d4d417e870984",
     "per_aae84005dd4d3217b0"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T13:58:10.810Z"
   },
   {
    "id": "mem_46d04bf203fed1ff5d",
    "familyId": "fam_b44fd40e9d36256d3b",
    "type": "photo",
    "fileRef": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-p11.jpg",
    "renditionRef": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-web.jpg",
    "posterRef": null,
    "renditionNote": null,
    "renditionFiles": [
     "mem_46d04bf203fed1ff5d-web.jpg"
    ],
    "durationSec": null,
    "originalName": "p11.jpg",
    "mime": "image/jpeg",
    "size": 121515,
    "caption": "Cake, approved · sample photo",
    "storyText": "",
    "takenAt": "2023-07-29T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T13:58:11.212Z"
   },
   {
    "id": "mem_54bb73709bf8737bb8",
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
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T13:58:10.810Z"
   },
   {
    "id": "mem_bc60dba1f2ba10df2b",
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
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
    ],
    "source": "backfill",
    "importJobId": null,
    "reviewState": "approved",
    "createdBy": "usr_ab07029fd28b543202",
    "createdByName": "Sample Family (Demo)",
    "guestName": null,
    "sample": true,
    "createdAt": "2026-10-30T13:58:10.810Z"
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
    "id": "per_aa070d4d417e870984",
    "familyId": "fam_b44fd40e9d36256d3b",
    "key": "rooney",
    "name": "Rooney",
    "birthdate": "2018-04-12",
    "relationship": "daughter",
    "createdBy": "usr_ab07029fd28b543202",
    "sample": true,
    "createdAt": "2026-10-30T13:58:10.810Z"
   },
   {
    "followed": true,
    "posture": "growing",
    "diedOn": null,
    "defaultAudience": null,
    "resurfaceMuted": false,
    "denVisible": true,
    "id": "per_04a1327dc4ed158c3c",
    "familyId": "fam_b44fd40e9d36256d3b",
    "key": "milo",
    "name": "Milo",
    "birthdate": "2020-09-03",
    "relationship": "son",
    "createdBy": "usr_ab07029fd28b543202",
    "sample": true,
    "createdAt": "2026-10-30T13:58:10.810Z"
   },
   {
    "followed": true,
    "posture": "together",
    "diedOn": null,
    "defaultAudience": null,
    "resurfaceMuted": false,
    "denVisible": true,
    "id": "per_aae84005dd4d3217b0",
    "familyId": "fam_b44fd40e9d36256d3b",
    "key": "grandma",
    "name": "Grandma June",
    "birthdate": "1955-06-20",
    "relationship": "grandmother",
    "createdBy": "usr_ab07029fd28b543202",
    "sample": true,
    "createdAt": "2026-10-30T13:58:10.810Z"
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
    "id": "prm_b96c4b9c8925ee2957",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T14:00:19.152Z",
    "dueAt": "2026-10-30T14:00:19.152Z",
    "scheduledFor": "2026-10-30T14:00:19.152Z",
    "answers": [],
    "sample": true,
    "kind": "bank",
    "personId": "per_aa070d4d417e870984",
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
    "id": "prm_c46805cc9c032c72e1",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T14:00:19.151Z",
    "dueAt": "2026-10-30T14:00:19.151Z",
    "scheduledFor": "2026-10-30T14:00:19.151Z",
    "answers": [],
    "sample": true,
    "kind": "ordinary_day",
    "sourceMemoryId": "mem_03b668adf5f32cdca7",
    "text": "Tell the story of one completely ordinary day from around July 22, 2023 — the kind of day that never gets written down.",
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
    "id": "prm_d8d6eb7a7567c5bcf0",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T14:00:19.148Z",
    "dueAt": "2026-10-30T14:00:19.148Z",
    "scheduledFor": "2026-10-30T14:00:19.148Z",
    "answers": [],
    "sample": true,
    "kind": "place_cluster",
    "sourceMemoryId": "mem_1abb036e9e35bd4c42",
    "text": "The word \"dinosaur\" shows up in 5 of your memories. What ties those moments together?",
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
    "id": "prm_5def76a17e706cd450",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T14:00:19.103Z",
    "dueAt": "2026-10-30T14:00:19.103Z",
    "scheduledFor": "2026-10-30T14:00:19.103Z",
    "answers": [],
    "sample": true,
    "kind": "series",
    "seriesId": "ser_8f00e63c6bff550cb4",
    "personId": "per_aae84005dd4d3217b0",
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
    "id": "prm_c2dc83598698bff2f2",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T14:00:19.103Z",
    "dueAt": "2026-10-30T14:00:19.103Z",
    "scheduledFor": "2026-10-30T14:00:19.103Z",
    "answers": [],
    "sample": true,
    "kind": "series",
    "seriesId": "ser_c0f6c358b2d6cca457",
    "personId": "per_aae84005dd4d3217b0",
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
    "id": "prm_cc8b0d47af0bbdeaf4",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T14:00:19.102Z",
    "dueAt": "2026-10-30T14:00:19.102Z",
    "scheduledFor": "2026-10-30T14:00:19.102Z",
    "answers": [],
    "sample": true,
    "kind": "series",
    "seriesId": "ser_7fbee44a13d2d27423",
    "personId": "per_04a1327dc4ed158c3c",
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
    "id": "prm_5d13f59c8d281fbc11",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T14:00:19.102Z",
    "dueAt": "2026-10-30T14:00:19.102Z",
    "scheduledFor": "2026-10-30T14:00:19.102Z",
    "answers": [],
    "sample": true,
    "kind": "series",
    "seriesId": "ser_6918eb3a5542b8e4f4",
    "personId": "per_04a1327dc4ed158c3c",
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
    "id": "prm_27755ea9a72216e4f6",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T14:00:19.099Z",
    "dueAt": "2026-10-30T14:00:19.099Z",
    "scheduledFor": "2026-10-30T14:00:19.099Z",
    "answers": [],
    "sample": true,
    "kind": "series",
    "seriesId": "ser_99032b797f57947041",
    "personId": "per_aa070d4d417e870984",
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
    "id": "prm_3c5caf6028d2c2002f",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T14:00:19.098Z",
    "dueAt": "2026-10-30T14:00:19.098Z",
    "scheduledFor": "2026-10-30T14:00:19.098Z",
    "answers": [],
    "sample": true,
    "kind": "series",
    "seriesId": "ser_d145f2f02d552a60b6",
    "personId": "per_aa070d4d417e870984",
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
    "id": "prm_9234abe8255666df97",
    "familyId": "fam_b44fd40e9d36256d3b",
    "status": "pending",
    "createdAt": "2026-10-30T14:00:19.086Z",
    "dueAt": "2026-10-30T14:00:19.086Z",
    "scheduledFor": "2026-10-30T14:00:19.086Z",
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
    "id": "ser_d145f2f02d552a60b6",
    "familyId": "fam_b44fd40e9d36256d3b",
    "personId": "per_aa070d4d417e870984",
    "personName": "Rooney",
    "question": "What is Rooney most into right now?",
    "interval": "annual",
    "nextDueAt": "2026-10-30T13:58:10.810Z",
    "instances": [
     {
      "promptId": "prm_3c5caf6028d2c2002f",
      "scheduledFor": "2026-10-30T14:00:19.098Z",
      "status": "pending",
      "answers": []
     }
    ],
    "answers": []
   },
   {
    "id": "ser_99032b797f57947041",
    "familyId": "fam_b44fd40e9d36256d3b",
    "personId": "per_aa070d4d417e870984",
    "personName": "Rooney",
    "question": "What made Rooney laugh hardest this year?",
    "interval": "annual",
    "nextDueAt": "2026-10-30T13:58:10.810Z",
    "instances": [
     {
      "promptId": "prm_27755ea9a72216e4f6",
      "scheduledFor": "2026-10-30T14:00:19.099Z",
      "status": "pending",
      "answers": []
     }
    ],
    "answers": []
   },
   {
    "id": "ser_7fbee44a13d2d27423",
    "familyId": "fam_b44fd40e9d36256d3b",
    "personId": "per_04a1327dc4ed158c3c",
    "personName": "Milo",
    "question": "What is Milo most into right now?",
    "interval": "annual",
    "nextDueAt": "2026-10-30T13:58:10.810Z",
    "instances": [
     {
      "promptId": "prm_cc8b0d47af0bbdeaf4",
      "scheduledFor": "2026-10-30T14:00:19.102Z",
      "status": "pending",
      "answers": []
     }
    ],
    "answers": []
   },
   {
    "id": "ser_6918eb3a5542b8e4f4",
    "familyId": "fam_b44fd40e9d36256d3b",
    "personId": "per_04a1327dc4ed158c3c",
    "personName": "Milo",
    "question": "What made Milo laugh hardest this year?",
    "interval": "annual",
    "nextDueAt": "2026-10-30T13:58:10.810Z",
    "instances": [
     {
      "promptId": "prm_5d13f59c8d281fbc11",
      "scheduledFor": "2026-10-30T14:00:19.102Z",
      "status": "pending",
      "answers": []
     }
    ],
    "answers": []
   },
   {
    "id": "ser_8f00e63c6bff550cb4",
    "familyId": "fam_b44fd40e9d36256d3b",
    "personId": "per_aae84005dd4d3217b0",
    "personName": "Grandma June",
    "question": "What is Grandma June most into right now?",
    "interval": "annual",
    "nextDueAt": "2026-10-30T13:58:10.810Z",
    "instances": [
     {
      "promptId": "prm_5def76a17e706cd450",
      "scheduledFor": "2026-10-30T14:00:19.103Z",
      "status": "pending",
      "answers": []
     }
    ],
    "answers": []
   },
   {
    "id": "ser_c0f6c358b2d6cca457",
    "familyId": "fam_b44fd40e9d36256d3b",
    "personId": "per_aae84005dd4d3217b0",
    "personName": "Grandma June",
    "question": "What made Grandma June laugh hardest this year?",
    "interval": "annual",
    "nextDueAt": "2026-10-30T13:58:10.810Z",
    "instances": [
     {
      "promptId": "prm_c2dc83598698bff2f2",
      "scheduledFor": "2026-10-30T14:00:19.103Z",
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
    "id": "thr_f8df9044ce1c6f3fed",
    "familyId": "fam_b44fd40e9d36256d3b",
    "source": "auto",
    "kind": "phase",
    "key": "phase:dinosaur",
    "title": "Dinosaurs, summer after summer",
    "titleRenamed": false,
    "observation": "\"dinosaur\" appears in memories from 2022, 2023, 2024 — 5 memories in all.",
    "basis": "The word \"dinosaur\" in your captions and writing",
    "match": {
     "word": "dinosaur"
    },
    "memoryIds": [
     "mem_1abb036e9e35bd4c42",
     "mem_07aa9a262ce65175cf",
     "mem_11996f317a0946ad06",
     "mem_a759bf4425339484f5",
     "mem_54bb73709bf8737bb8"
    ],
    "evidence": {
     "count": 5,
     "fromYear": 2022,
     "toYear": 2024
    },
    "status": "proposed",
    "requiresFollowPersonId": null,
    "seenCount": 5,
    "miniStory": null,
    "filmIncluded": false,
    "excludedIds": [],
    "sample": true,
    "createdAt": "2026-10-30T13:58:15.530Z",
    "updatedAt": "2026-10-30T19:55:51.476Z",
    "growthCount": 0
   },
   {
    "id": "thr_790fb3598ad328b530",
    "familyId": "fam_b44fd40e9d36256d3b",
    "source": "auto",
    "kind": "phase",
    "key": "phase:sample",
    "title": "The Summer of Samples",
    "titleRenamed": false,
    "observation": "\"sample\" appears in 4 memories in Summer 2023.",
    "basis": "The word \"sample\" in your captions and writing",
    "match": {
     "word": "sample"
    },
    "memoryIds": [
     "mem_9d856062922a6d7c23",
     "mem_03b668adf5f32cdca7",
     "mem_d849f11ecb2e5d21da",
     "mem_46d04bf203fed1ff5d"
    ],
    "evidence": {
     "count": 4,
     "fromYear": 2023,
     "toYear": 2023
    },
    "status": "followed",
    "requiresFollowPersonId": null,
    "seenCount": 4,
    "miniStory": null,
    "filmIncluded": false,
    "excludedIds": [],
    "sample": true,
    "createdAt": "2026-10-30T13:58:15.530Z",
    "updatedAt": "2026-10-30T19:55:51.476Z",
    "growthCount": 0
   },
   {
    "id": "thr_75d1b7ba7e5803409b",
    "familyId": "fam_b44fd40e9d36256d3b",
    "source": "auto",
    "kind": "phase",
    "key": "phase:photo",
    "title": "The Summer of Photos",
    "titleRenamed": false,
    "observation": "\"photo\" appears in 3 memories in Summer 2023.",
    "basis": "The word \"photo\" in your captions and writing",
    "match": {
     "word": "photo"
    },
    "memoryIds": [
     "mem_9d856062922a6d7c23",
     "mem_03b668adf5f32cdca7",
     "mem_46d04bf203fed1ff5d"
    ],
    "evidence": {
     "count": 3,
     "fromYear": 2023,
     "toYear": 2023
    },
    "status": "proposed",
    "requiresFollowPersonId": null,
    "seenCount": 0,
    "miniStory": null,
    "filmIncluded": false,
    "excludedIds": [],
    "sample": true,
    "createdAt": "2026-10-30T13:58:15.530Z",
    "updatedAt": "2026-10-30T19:55:51.476Z",
    "growthCount": 3
   },
   {
    "id": "thr_21706836a6d36b71fb",
    "familyId": "fam_b44fd40e9d36256d3b",
    "source": "auto",
    "kind": "co_appearance",
    "key": "co:per_04a1327dc4ed158c3c+per_aa070d4d417e870984",
    "title": "Milo & Rooney, together",
    "titleRenamed": false,
    "observation": "Milo and Rooney appear together in 6 memories.",
    "basis": "These people appearing together in your memories",
    "match": {
     "personIds": [
      "per_04a1327dc4ed158c3c",
      "per_aa070d4d417e870984"
     ]
    },
    "memoryIds": [
     "mem_8de7b390ec7055d50b",
     "mem_11996f317a0946ad06",
     "mem_d849f11ecb2e5d21da",
     "mem_46d04bf203fed1ff5d",
     "mem_54bb73709bf8737bb8",
     "mem_bc60dba1f2ba10df2b"
    ],
    "evidence": {
     "count": 6,
     "fromYear": 2022,
     "toYear": 2024
    },
    "status": "proposed",
    "requiresFollowPersonId": null,
    "seenCount": 6,
    "miniStory": null,
    "filmIncluded": false,
    "excludedIds": [],
    "sample": true,
    "createdAt": "2026-10-30T13:58:15.530Z",
    "updatedAt": "2026-10-30T19:55:51.476Z",
    "growthCount": 0
   },
   {
    "id": "thr_809c64de93204e7425",
    "familyId": "fam_b44fd40e9d36256d3b",
    "source": "auto",
    "kind": "co_appearance",
    "key": "co:per_aa070d4d417e870984+per_aae84005dd4d3217b0",
    "title": "Rooney & Grandma June, together",
    "titleRenamed": false,
    "observation": "Rooney and Grandma June appear together in 2 memories.",
    "basis": "These people appearing together in your memories",
    "match": {
     "personIds": [
      "per_aa070d4d417e870984",
      "per_aae84005dd4d3217b0"
     ]
    },
    "memoryIds": [
     "mem_a759bf4425339484f5",
     "mem_bc60dba1f2ba10df2b"
    ],
    "evidence": {
     "count": 2,
     "fromYear": 2023,
     "toYear": 2024
    },
    "status": "proposed",
    "requiresFollowPersonId": null,
    "seenCount": 0,
    "miniStory": null,
    "filmIncluded": false,
    "excludedIds": [],
    "sample": true,
    "createdAt": "2026-10-30T13:58:15.530Z",
    "updatedAt": "2026-10-30T19:55:51.476Z",
    "growthCount": 2
   }
  ]
 },
 "GET /api/families/fam_b44fd40e9d36256d3b/threads/thr_21706836a6d36b71fb": {
  "thread": {
   "id": "thr_21706836a6d36b71fb",
   "familyId": "fam_b44fd40e9d36256d3b",
   "source": "auto",
   "kind": "co_appearance",
   "key": "co:per_04a1327dc4ed158c3c+per_aa070d4d417e870984",
   "title": "Milo & Rooney, together",
   "titleRenamed": false,
   "observation": "Milo and Rooney appear together in 6 memories.",
   "basis": "These people appearing together in your memories",
   "match": {
    "personIds": [
     "per_04a1327dc4ed158c3c",
     "per_aa070d4d417e870984"
    ]
   },
   "memoryIds": [
    "mem_8de7b390ec7055d50b",
    "mem_11996f317a0946ad06",
    "mem_d849f11ecb2e5d21da",
    "mem_46d04bf203fed1ff5d",
    "mem_54bb73709bf8737bb8",
    "mem_bc60dba1f2ba10df2b"
   ],
   "evidence": {
    "count": 6,
    "fromYear": 2022,
    "toYear": 2024
   },
   "status": "proposed",
   "requiresFollowPersonId": null,
   "seenCount": 6,
   "miniStory": null,
   "filmIncluded": false,
   "excludedIds": [],
   "sample": true,
   "createdAt": "2026-10-30T13:58:15.530Z",
   "updatedAt": "2026-10-30T19:55:51.480Z",
   "growthCount": 0
  },
  "items": [
   {
    "id": "mem_8de7b390ec7055d50b",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Milo roars back",
    "storyText": "Milo learned to roar from Rooney and did it at the dinner table, at bath time, and once at the grocery store.",
    "takenAt": "2022-08-05T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
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
    "id": "mem_11996f317a0946ad06",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Dinosaur summer, again",
    "storyText": "The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.",
    "takenAt": "2023-07-14T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
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
    "id": "mem_d849f11ecb2e5d21da",
    "type": "video",
    "src": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-view.mp4",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-hero2.mp4",
    "poster": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-poster.jpg",
    "caption": "Park day, filmed · sample video",
    "storyText": "",
    "takenAt": "2023-07-22T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
    ],
    "durationSec": 9,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_46d04bf203fed1ff5d",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-p11.jpg",
    "poster": null,
    "caption": "Cake, approved · sample photo",
    "storyText": "",
    "takenAt": "2023-07-29T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
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
    "id": "mem_54bb73709bf8737bb8",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Three summers of dinosaurs",
    "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
    "takenAt": "2024-07-18T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
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
    "id": "mem_bc60dba1f2ba10df2b",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "An ordinary Wednesday",
    "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
    "takenAt": "2024-10-30T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
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
 "GET /api/families/fam_b44fd40e9d36256d3b/threads/thr_75d1b7ba7e5803409b": {
  "thread": {
   "id": "thr_75d1b7ba7e5803409b",
   "familyId": "fam_b44fd40e9d36256d3b",
   "source": "auto",
   "kind": "phase",
   "key": "phase:photo",
   "title": "The Summer of Photos",
   "titleRenamed": false,
   "observation": "\"photo\" appears in 3 memories in Summer 2023.",
   "basis": "The word \"photo\" in your captions and writing",
   "match": {
    "word": "photo"
   },
   "memoryIds": [
    "mem_9d856062922a6d7c23",
    "mem_03b668adf5f32cdca7",
    "mem_46d04bf203fed1ff5d"
   ],
   "evidence": {
    "count": 3,
    "fromYear": 2023,
    "toYear": 2023
   },
   "status": "proposed",
   "requiresFollowPersonId": null,
   "seenCount": 3,
   "miniStory": null,
   "filmIncluded": false,
   "excludedIds": [],
   "sample": true,
   "createdAt": "2026-10-30T13:58:15.530Z",
   "updatedAt": "2026-10-30T19:55:51.483Z",
   "growthCount": 0
  },
  "items": [
   {
    "id": "mem_9d856062922a6d7c23",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-p2.jpg",
    "poster": null,
    "caption": "Pool afternoon · sample photo",
    "storyText": "",
    "takenAt": "2023-07-14T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984"
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
    "id": "mem_03b668adf5f32cdca7",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-p15.jpg",
    "poster": null,
    "caption": "Filming in the park · sample photo",
    "storyText": "",
    "takenAt": "2023-07-22T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984"
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
    "id": "mem_46d04bf203fed1ff5d",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-p11.jpg",
    "poster": null,
    "caption": "Cake, approved · sample photo",
    "storyText": "",
    "takenAt": "2023-07-29T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
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
 "GET /api/families/fam_b44fd40e9d36256d3b/threads/thr_790fb3598ad328b530": {
  "thread": {
   "id": "thr_790fb3598ad328b530",
   "familyId": "fam_b44fd40e9d36256d3b",
   "source": "auto",
   "kind": "phase",
   "key": "phase:sample",
   "title": "The Summer of Samples",
   "titleRenamed": false,
   "observation": "\"sample\" appears in 4 memories in Summer 2023.",
   "basis": "The word \"sample\" in your captions and writing",
   "match": {
    "word": "sample"
   },
   "memoryIds": [
    "mem_9d856062922a6d7c23",
    "mem_03b668adf5f32cdca7",
    "mem_d849f11ecb2e5d21da",
    "mem_46d04bf203fed1ff5d"
   ],
   "evidence": {
    "count": 4,
    "fromYear": 2023,
    "toYear": 2023
   },
   "status": "followed",
   "requiresFollowPersonId": null,
   "seenCount": 4,
   "miniStory": null,
   "filmIncluded": false,
   "excludedIds": [],
   "sample": true,
   "createdAt": "2026-10-30T13:58:15.530Z",
   "updatedAt": "2026-10-30T19:55:51.489Z",
   "growthCount": 0
  },
  "items": [
   {
    "id": "mem_9d856062922a6d7c23",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_9d856062922a6d7c23-p2.jpg",
    "poster": null,
    "caption": "Pool afternoon · sample photo",
    "storyText": "",
    "takenAt": "2023-07-14T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984"
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
    "id": "mem_03b668adf5f32cdca7",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_03b668adf5f32cdca7-p15.jpg",
    "poster": null,
    "caption": "Filming in the park · sample photo",
    "storyText": "",
    "takenAt": "2023-07-22T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984"
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
    "id": "mem_d849f11ecb2e5d21da",
    "type": "video",
    "src": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-view.mp4",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-hero2.mp4",
    "poster": "media/fam_b44fd40e9d36256d3b/mem_d849f11ecb2e5d21da-poster.jpg",
    "caption": "Park day, filmed · sample video",
    "storyText": "",
    "takenAt": "2023-07-22T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
    ],
    "durationSec": 9,
    "sample": true,
    "saved": false,
    "savedAt": null,
    "audience": "den",
    "audiencePeople": null,
    "reactions": [],
    "commentCount": 0
   },
   {
    "id": "mem_46d04bf203fed1ff5d",
    "type": "photo",
    "src": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-web.jpg",
    "originalSrc": "media/fam_b44fd40e9d36256d3b/mem_46d04bf203fed1ff5d-p11.jpg",
    "poster": null,
    "caption": "Cake, approved · sample photo",
    "storyText": "",
    "takenAt": "2023-07-29T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
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
 "GET /api/families/fam_b44fd40e9d36256d3b/threads/thr_809c64de93204e7425": {
  "thread": {
   "id": "thr_809c64de93204e7425",
   "familyId": "fam_b44fd40e9d36256d3b",
   "source": "auto",
   "kind": "co_appearance",
   "key": "co:per_aa070d4d417e870984+per_aae84005dd4d3217b0",
   "title": "Rooney & Grandma June, together",
   "titleRenamed": false,
   "observation": "Rooney and Grandma June appear together in 2 memories.",
   "basis": "These people appearing together in your memories",
   "match": {
    "personIds": [
     "per_aa070d4d417e870984",
     "per_aae84005dd4d3217b0"
    ]
   },
   "memoryIds": [
    "mem_a759bf4425339484f5",
    "mem_bc60dba1f2ba10df2b"
   ],
   "evidence": {
    "count": 2,
    "fromYear": 2023,
    "toYear": 2024
   },
   "status": "proposed",
   "requiresFollowPersonId": null,
   "seenCount": 2,
   "miniStory": null,
   "filmIncluded": false,
   "excludedIds": [],
   "sample": true,
   "createdAt": "2026-10-30T13:58:15.530Z",
   "updatedAt": "2026-10-30T19:55:51.493Z",
   "growthCount": 0
  },
  "items": [
   {
    "id": "mem_a759bf4425339484f5",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Dinosaur cake",
    "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
    "takenAt": "2023-07-29T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_aae84005dd4d3217b0"
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
    "id": "mem_bc60dba1f2ba10df2b",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "An ordinary Wednesday",
    "storyText": "Nothing happened. Pancakes, a lost shoe, a song in the car. These are the days we would give anything to have back.",
    "takenAt": "2024-10-30T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c",
     "per_aae84005dd4d3217b0"
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
 "GET /api/families/fam_b44fd40e9d36256d3b/threads/thr_f8df9044ce1c6f3fed": {
  "thread": {
   "id": "thr_f8df9044ce1c6f3fed",
   "familyId": "fam_b44fd40e9d36256d3b",
   "source": "auto",
   "kind": "phase",
   "key": "phase:dinosaur",
   "title": "Dinosaurs, summer after summer",
   "titleRenamed": false,
   "observation": "\"dinosaur\" appears in memories from 2022, 2023, 2024 — 5 memories in all.",
   "basis": "The word \"dinosaur\" in your captions and writing",
   "match": {
    "word": "dinosaur"
   },
   "memoryIds": [
    "mem_1abb036e9e35bd4c42",
    "mem_07aa9a262ce65175cf",
    "mem_11996f317a0946ad06",
    "mem_a759bf4425339484f5",
    "mem_54bb73709bf8737bb8"
   ],
   "evidence": {
    "count": 5,
    "fromYear": 2022,
    "toYear": 2024
   },
   "status": "proposed",
   "requiresFollowPersonId": null,
   "seenCount": 5,
   "miniStory": null,
   "filmIncluded": false,
   "excludedIds": [],
   "sample": true,
   "createdAt": "2026-10-30T13:58:15.530Z",
   "updatedAt": "2026-10-30T19:55:51.495Z",
   "growthCount": 0
  },
  "items": [
   {
    "id": "mem_1abb036e9e35bd4c42",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Dinosaur phase begins",
    "storyText": "Rooney found a dinosaur book at the library and would not put it down. She named every dinosaur on the walk home.",
    "takenAt": "2022-07-10T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984"
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
    "id": "mem_07aa9a262ce65175cf",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Dinosaur drawing on the fridge",
    "storyText": "Rooney drew a dinosaur with a spiky back and a lopsided smile. It went straight on the fridge and never came down.",
    "takenAt": "2022-07-22T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984"
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
    "id": "mem_11996f317a0946ad06",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Dinosaur summer, again",
    "storyText": "The dinosaur phase returned. Rooney taught Milo the names this time, in order, and corrected him gently.",
    "takenAt": "2023-07-14T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
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
    "id": "mem_a759bf4425339484f5",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Dinosaur cake",
    "storyText": "Grandma June made a dinosaur cake nobody was allowed to cut for a full hour because it was too good to ruin.",
    "takenAt": "2023-07-29T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_aae84005dd4d3217b0"
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
    "id": "mem_54bb73709bf8737bb8",
    "type": "writing",
    "src": null,
    "originalSrc": null,
    "poster": null,
    "caption": "Three summers of dinosaurs",
    "storyText": "Rooney, now six, gave Milo a lecture on dinosaurs at the kitchen table. The drawing from 2022 is still on the fridge.",
    "takenAt": "2024-07-18T15:00:00.000Z",
    "peopleIds": [
     "per_aa070d4d417e870984",
     "per_04a1327dc4ed158c3c"
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
      "joinedAt": "2026-10-30T13:58:10.808Z"
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
 }
};
