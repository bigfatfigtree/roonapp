/* Roon interactive demo — fetch shim (export skin layer).
 *
 * Loaded BEFORE app.js in app.html. Replaces window.fetch with a lookup
 * against the baked response map in demo-data.js (window.ROON_DEMO_DATA),
 * so the unmodified app front-end runs entirely offline against the
 * captured Sample Family data. app.js itself is NOT modified.
 *
 * Behaviour:
 *  - Any request whose normalized key "METHOD path?sortedquery" exists in
 *    the baked map (this includes the captured POST /api/auth/login)
 *    → 200 with the baked JSON.
 *  - POST /api/auth/logout → 200 {} (so "sign out" doesn't error).
 *  - Any other non-GET request (saves, uploads, share cards, replies…)
 *    → 400 {"error":"This is a sample demo — nothing is saved here."}
 *  - Unknown GET under /api/ → 404 {"error":"Not part of the sample demo."}
 *  - Any cross-origin URL → 404 (nothing can phone home).
 *  - Same-origin non-/api/ GETs (static files) pass through to real fetch.
 *  - navigator.sendBeacon is neutralized (no-op returning true).
 *
 * PRE-FONT-DRAFT package: see README.md.
 */
(function () {
  "use strict";

  var DATA = window.ROON_DEMO_DATA || {};
  var realFetch = window.fetch ? window.fetch.bind(window) : null;

  function jsonResponse(status, obj) {
    return new Response(JSON.stringify(obj), {
      status: status,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Normalize to the exact key format used in demo-data.js:
  // "METHOD /path?k=v&k=v" with query params sorted by key then value,
  // values in decoded form (e.g. cursor=MTI= stays "MTI=").
  function normalizeKey(method, url) {
    var pairs = [];
    url.searchParams.forEach(function (value, key) {
      pairs.push([key, value]);
    });
    pairs.sort(function (a, b) {
      if (a[0] !== b[0]) return a[0] < b[0] ? -1 : 1;
      if (a[1] !== b[1]) return a[1] < b[1] ? -1 : 1;
      return 0;
    });
    var qs = pairs.map(function (p) { return p[0] + "=" + p[1]; }).join("&");
    return method.toUpperCase() + " " + url.pathname + (qs ? "?" + qs : "");
  }

  window.fetch = function (input, init) {
    var urlStr = "";
    var method = "GET";

    if (typeof input === "string") {
      urlStr = input;
    } else if (input && typeof input.url === "string") {
      urlStr = input.url;
      if (input.method) method = input.method;
    } else if (input && input.href) {
      urlStr = input.href;
    }
    if (init && init.method) method = init.method;
    method = method.toUpperCase();

    var url;
    try {
      url = new URL(urlStr, window.location.href);
    } catch (e) {
      return Promise.reject(new TypeError("Blocked in sample demo: unparseable URL"));
    }

    // Cross-origin (or non-http(s)) → never leave the demo.
    if (url.origin !== window.location.origin) {
      return Promise.resolve(jsonResponse(404, { error: "Blocked in sample demo." }));
    }

    var path = url.pathname;

    if (path.indexOf("/api/") === 0 || path === "/api") {
      var key = normalizeKey(method, url);
      if (Object.prototype.hasOwnProperty.call(DATA, key)) {
        return Promise.resolve(jsonResponse(200, DATA[key]));
      }
      if (method === "POST" && path === "/api/auth/logout") {
        return Promise.resolve(jsonResponse(200, {}));
      }
      if (method !== "GET") {
        return Promise.resolve(jsonResponse(400, {
          error: "This is a sample demo — nothing is saved here."
        }));
      }
      return Promise.resolve(jsonResponse(404, {
        error: "Not part of the sample demo."
      }));
    }

    // Same-origin, non-API: a local static file — let it load for real.
    if (realFetch) return realFetch(input, init);
    return Promise.resolve(jsonResponse(404, { error: "Not part of the sample demo." }));
  };

  // No telemetry / beacon phone-home from inside the demo.
  if (typeof navigator !== "undefined") {
    try {
      navigator.sendBeacon = function () { return true; };
    } catch (e) { /* non-fatal */ }
  }
})();
