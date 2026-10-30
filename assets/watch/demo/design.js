/* =====================================================================
   Roon design layer — the behaviour half of the dark-theater design.
   PERMANENT and load-bearing (v15, 2026-10-30): this used to be the
   v14 premium pass's Variant D, switchable via ?variant=. Jeff
   approved D ('dark theater') and it is now simply THE design — this
   file always runs, for every user, with no toggle. All styling lives
   in styles.css (the --fx-* tokens are the design tokens now). Do NOT
   ship the app without this file: the marketing demo bake includes it
   too, and Today/the viewer are compositions it builds.

   What lives here (things CSS alone cannot do):
   - The full-screen moment viewer (frosted caption card + reaction
     rail down the right side, swipe / arrows to move through the
     feed's moments). It reads the feed's own DOM — captions,
     reactions and share targets are the app's real ones, proxied, never
     re-implemented.
   - The shell: the mobile head becomes a frosted pill (find · add ·
     questions bell · your profile avatar, which opens the same menu
     the ••• button opens). The HTML ships the canonical LIGHT logo
     lockup artwork directly (the design is dark everywhere).
   - Today in the EchoTalk-board composition: Quick Search row, the
     Den people row (real family faces, invite circle first), a glass
     identity pill on the featured cover, and scrolling shelves of
     real threads + stories.
   - Threads: the followed threads become the discovery grid.
   ===================================================================== */
(function () {
  'use strict';

  /* ---------- tiny helpers (self-contained; app.js globals reused when present) ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function appState() { try { return (typeof state !== 'undefined' && state) ? state : null; } catch (e) { return null; } }
  function visualOf(m) { try { return (typeof visualSource === 'function') ? (visualSource(m) || '') : ''; } catch (e) { return ''; } }
  function firstName(name) { return String(name || '').trim().split(/\s+/)[0] || ''; }
  function routeName() { var h = location.hash.replace(/^#\/?/, ''); return h.split('/')[0] || 'today'; }

  function svgSearch() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.6-4.6"/></svg>'; }
  function svgSliders() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><path d="M5 7h9M18 7h1M5 12h3M12 12h7M5 17h11M20 17h-1"/><circle cx="16" cy="7" r="2.1"/><circle cx="10" cy="12" r="2.1"/><circle cx="18" cy="17" r="2.1"/></svg>'; }
  function svgBell() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 16.5v-5.2a6 6 0 0 1 12 0v5.2l1.4 2.7a.6.6 0 0 1-.54.9H5.14a.6.6 0 0 1-.54-.9z"/><path d="M10 21a2.2 2.2 0 0 0 4 0"/></svg>'; }
  function svgX() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>'; }
  function svgChev(dir) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + (dir === 'l' ? 'm14.5 5.5-6.5 6.5 6.5 6.5' : 'm9.5 5.5 6.5 6.5-6.5 6.5') + '"/></svg>'; }
  function svgExpand() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"/></svg>'; }
  function svgComment() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.8a8.3 8.3 0 0 1-8.4 8.2c-1.2 0-2.4-.26-3.5-.74L3.5 20.5l1.36-4.9A8.2 8.2 0 1 1 20.5 11.8z"/></svg>'; }
  function svgShare() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5v11.5"/><path d="m7.2 8.2 4.8-4.7 4.8 4.7"/><path d="M5 13.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6.5"/></svg>'; }

  /* ==================================================================
     FULL-SCREEN MOMENT VIEWER — the lights go down
     ================================================================== */
  var viewer = null, vPosts = [], vIdx = 0, vTouch = null;

  function feedPosts() {
    return $$('#feed-stream .post').filter(function (p) { return !!p.querySelector('.post-media img, .post-media video'); });
  }
  function buildViewer() {
    if (viewer) return viewer;
    var el = document.createElement('div');
    el.className = 'fx-viewer';
    el.hidden = true;
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'Moment, full screen');
    el.innerHTML =
      '<div class="fx-viewer-media"></div>' +
      '<button type="button" class="fx-viewer-close" aria-label="Close">' + svgX() + '</button>' +
      '<div class="fx-viewer-rail"></div>' +
      '<button type="button" class="fx-viewer-nav fx-viewer-prev" aria-label="Previous moment">' + svgChev('l') + '</button>' +
      '<button type="button" class="fx-viewer-nav fx-viewer-next" aria-label="Next moment">' + svgChev('r') + '</button>' +
      '<div class="fx-viewer-card"><p class="fx-viewer-who"></p><div class="fx-viewer-cap"></div><p class="fx-viewer-openwrap"></p></div>';
    document.body.appendChild(el);
    viewer = el;
    $('.fx-viewer-close', el).addEventListener('click', closeViewer);
    $('.fx-viewer-prev', el).addEventListener('click', function () { stepViewer(-1); });
    $('.fx-viewer-next', el).addEventListener('click', function () { stepViewer(1); });
    el.addEventListener('touchstart', function (e) { if (e.touches && e.touches[0]) vTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }, { passive: true });
    el.addEventListener('touchend', function (e) {
      if (!vTouch || !e.changedTouches || !e.changedTouches[0]) return;
      var dy = e.changedTouches[0].clientY - vTouch.y, dx = e.changedTouches[0].clientX - vTouch.x;
      vTouch = null;
      if (Math.abs(dy) > 52 && Math.abs(dy) > Math.abs(dx)) stepViewer(dy < 0 ? 1 : -1);
      else if (Math.abs(dx) > 52) stepViewer(dx < 0 ? 1 : -1);
    }, { passive: true });
    document.addEventListener('keydown', function (e) {
      if (!viewer || viewer.hidden) return;
      if (e.key === 'Escape') closeViewer();
      else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') stepViewer(1);
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') stepViewer(-1);
    });
    return el;
  }
  function openViewer(post) {
    var posts = feedPosts();
    var idx = posts.indexOf(post);
    if (idx < 0) return;
    vPosts = posts; vIdx = idx;
    buildViewer();
    viewer.hidden = false;
    document.body.classList.add('fx-locked');
    renderViewerPost();
  }
  function closeViewer() {
    if (!viewer) return;
    viewer.hidden = true;
    $('.fx-viewer-media', viewer).innerHTML = '';
    document.body.classList.remove('fx-locked');
  }
  function stepViewer(d) {
    var n = vIdx + d;
    if (n < 0 || n >= vPosts.length) return;
    vIdx = n;
    renderViewerPost();
  }
  function renderViewerPost() {
    var post = vPosts[vIdx];
    if (!post) return;
    var mediaBox = $('.fx-viewer-media', viewer);
    var vid = post.querySelector('.post-media video');
    var img = post.querySelector('.post-media img');
    if (vid) {
      var src = vid.currentSrc || vid.getAttribute('src') || '';
      var poster = vid.getAttribute('poster') || '';
      mediaBox.innerHTML = '<video controls playsinline' + (poster ? ' poster="' + esc(poster) + '"' : '') + (src ? ' src="' + esc(src) + '"' : '') + '></video>';
      var nv = $('video', mediaBox);
      if (nv) { var pr = nv.play(); if (pr && pr.catch) pr.catch(function () {}); }
    } else if (img) {
      mediaBox.innerHTML = '<img src="' + esc(img.currentSrc || img.src) + '" alt="' + esc(img.getAttribute('alt') || '') + '">';
    } else {
      mediaBox.innerHTML = '';
    }
    var who = $('.post-who', post), my = $('.post-my', post);
    $('.fx-viewer-who', viewer).textContent = ((who ? who.textContent.trim() : '') + (my ? ' · ' + my.textContent.trim() : '')).trim();
    var capBox = $('.fx-viewer-cap', viewer);
    var cap = $('.post-caption', post);
    if (cap) {
      var clone = cap.cloneNode(true);
      clone.classList.add('expanded');
      var more = $('.post-more', clone); if (more) more.remove();
      capBox.innerHTML = '';
      capBox.appendChild(clone);
    } else capBox.innerHTML = '';
    var openWrap = $('.fx-viewer-openwrap', viewer);
    var link = post.querySelector('a.post-media-link');
    var kind = post.getAttribute('data-kind') || '';
    if (link && link.getAttribute('href')) {
      var label = kind === 'chapter' ? 'Open this chapter' : (kind === 'thread' || kind === 'growth' || kind === 'hero') ? 'Open this thread' : kind === 'film' ? 'Watch the film' : 'Open this moment';
      openWrap.innerHTML = '<a class="fx-viewer-open" href="' + esc(link.getAttribute('href')) + '">' + esc(label) + ' →</a>';
    } else openWrap.innerHTML = '';
    buildRail(post);
    $('.fx-viewer-prev', viewer).disabled = vIdx <= 0;
    $('.fx-viewer-next', viewer).disabled = vIdx >= vPosts.length - 1;
  }
  function railBtn(inner, label) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'fx-rail-btn';
    b.setAttribute('aria-label', label);
    b.innerHTML = inner;
    return b;
  }
  function buildRail(post) {
    var rail = $('.fx-viewer-rail', viewer);
    rail.innerHTML = '';
    $$('.post-actions .react-btn', post).forEach(function (orig) {
      var txt = (orig.textContent || '').trim();
      var m = txt.match(/(\d+)\s*$/);
      var count = m ? m[1] : '';
      var emoji = txt.replace(/\d+\s*$/, '').trim();
      var b = railBtn('<span class="fx-rail-emoji">' + esc(emoji) + '</span>' + (count ? '<span class="fx-rail-count">' + esc(count) + '</span>' : ''), 'React ' + emoji);
      if (orig.classList.contains('mine')) b.classList.add('mine');
      b.addEventListener('click', function () {
        orig.click();
        setTimeout(function () { if (viewer && !viewer.hidden) buildRail(post); }, 450);
      });
      rail.appendChild(b);
    });
    var cToggle = post.querySelector('.comment-toggle-ig');
    if (cToggle) {
      var cSpan = cToggle.querySelector('span');
      var cCount = cSpan ? cSpan.textContent.trim() : '';
      var cb = railBtn('<span class="fx-rail-ico">' + svgComment() + '</span>' + (cCount ? '<span class="fx-rail-count">' + esc(cCount) + '</span>' : ''), 'Comments');
      cb.addEventListener('click', function () {
        closeViewer();
        setTimeout(function () { post.scrollIntoView({ block: 'center' }); cToggle.click(); }, 60);
      });
      rail.appendChild(cb);
    }
    var shareEl = post.querySelector('.post-share-btn') || post.querySelector('.post-share');
    if (shareEl) {
      var sb = railBtn('<span class="fx-rail-ico">' + svgShare() + '</span>', 'Share');
      sb.addEventListener('click', function () { shareEl.click(); });
      rail.appendChild(sb);
    }
  }

  /* Feed media gets an expand affordance; tapping a photo opens the viewer. */
  function decorateFeed() {
    $$('#feed-stream .post').forEach(function (post) {
      var m = $('.post-media', post);
      if (!m || m.dataset.fx) return;
      if (!m.querySelector('img, video')) return;
      m.dataset.fx = '1';
      var s = document.createElement('span');
      s.className = 'fx-expand';
      s.setAttribute('role', 'button');
      s.setAttribute('aria-label', 'View full screen');
      s.innerHTML = svgExpand();
      m.appendChild(s);
    });
  }
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    var ex = t.closest('.fx-expand');
    if (ex) {
      var p1 = ex.closest('.post');
      if (p1) { e.preventDefault(); e.stopPropagation(); openViewer(p1); }
      return;
    }
    var img = t.closest('#feed-stream .post-media img');
    if (img && !(viewer && !viewer.hidden)) {
      var p2 = img.closest('.post');
      if (p2) { e.preventDefault(); openViewer(p2); }
    }
  }, true);

  /* ==================================================================
     Shell: frosted head pill + your avatar
     ================================================================== */
  function buildHead() {
    var actions = $('.mh-actions');
    if (!actions || actions.dataset.fx) return;
    actions.dataset.fx = '1';
    actions.classList.add('fx-pill');
    var bell = document.createElement('button');
    bell.type = 'button';
    bell.className = 'mh-btn fx-bell';
    bell.setAttribute('aria-label', 'Questions waiting for you');
    bell.innerHTML = svgBell() + '<span class="fx-belldot" hidden></span>';
    bell.addEventListener('click', function () { location.hash = '#/questions'; });
    var av = document.createElement('button');
    av.type = 'button';
    av.className = 'fx-avatar';
    av.setAttribute('aria-label', 'Your profile and menu');
    var st = appState();
    var nm = (st && st.user && st.user.name) || 'S';
    av.textContent = (nm.trim().charAt(0) || 'S').toUpperCase();
    av.addEventListener('click', function () { var b = $('#btn-menu-mobile'); if (b) b.click(); });
    actions.appendChild(bell);
    actions.appendChild(av);
    syncBellDot();
  }
  function syncBellDot() {
    var c = $('#nav-q-count'), dot = $('.fx-belldot');
    if (c && dot) dot.hidden = !!c.hidden || !String(c.textContent || '').trim();
  }

  /* ==================================================================
     Today in the EchoTalk composition
     ================================================================== */
  function personFace(p, st) {
    var tagged = (st.memories || []).filter(function (m) {
      return (m.peopleIds || []).map(String).indexOf(String(p.id)) >= 0 && visualOf(m);
    }).sort(function (a, b) { return new Date(b.takenAt || b.createdAt || 0) - new Date(a.takenAt || a.createdAt || 0); });
    return tagged.length ? visualOf(tagged[0]) : '';
  }
  function buildToday() {
    var root = $('#view-root');
    if (!root) return;
    var wrap = $('.today-cover-wrap', root);
    if (!wrap) return;
    var cover = $('.today-cover', wrap);
    if (!cover) return; /* still loading — a later mutation will retry */
    var st = appState();
    if (!st || !st.family || !(st.memories || []).length) return;

    if (!$('.fx-searchrow', root)) {
      var sr = document.createElement('div');
      sr.className = 'fx-searchrow';
      sr.innerHTML = '<button type="button" class="fx-search">' + svgSearch() + '<span>Quick Search</span></button>' +
        '<button type="button" class="fx-orb" aria-label="Ask Rooney">' + svgSliders() + '</button>';
      root.insertBefore(sr, wrap);
      $('.fx-search', sr).addEventListener('click', function () { var b = $('#btn-find-mobile'); if (b) b.click(); });
      $('.fx-orb', sr).addEventListener('click', function () { var b = $('#btn-rooney-mobile'); if (b) b.click(); });
    }
    if (!$('.fx-people', root)) {
      var pr = document.createElement('div');
      pr.className = 'fx-people';
      var ph = '<a class="fx-person" href="#/family"><span class="fx-face fx-face--plus" aria-hidden="true">+</span><span class="fx-pname">Invite</span></a>';
      (st.people || []).forEach(function (p) {
        var face = personFace(p, st);
        ph += '<a class="fx-person" href="#/person/' + encodeURIComponent(p.id) + '"><span class="fx-face">' +
          (face ? '<img src="' + esc(face) + '" alt="" loading="lazy">' : '<span class="fx-face-init">' + esc((firstName(p.name) || '?').charAt(0).toUpperCase()) + '</span>') +
          '</span><span class="fx-pname">' + esc(firstName(p.name)) + '</span></a>';
      });
      pr.innerHTML = ph;
      root.insertBefore(pr, wrap);
    }
    if (!cover.querySelector('.fx-coverpill')) {
      var pill = document.createElement('span');
      pill.className = 'fx-coverpill';
      var moments = (st.memories || []).length, people = (st.people || []).length;
      pill.innerHTML = '<span class="fx-coverpill-mark"><img src="assets/mark-light.png" alt=""></span>' +
        '<span class="fx-coverpill-main"><span class="fx-coverpill-name">' + esc(st.family.name || 'Your family') + '</span>' +
        '<span class="fx-coverpill-sub">' + moments + ' moment' + (moments === 1 ? '' : 's') + ' kept · ' + people + ' ' + (people === 1 ? 'person' : 'people') + '</span></span>';
      cover.appendChild(pill);
    }
    if (!$('.fx-shelves', root)) {
      var shelves = document.createElement('div');
      shelves.className = 'fx-shelves';
      shelves.innerHTML = shelfHTML('Threads Rooney is following', '#/threads', threadCards(st)) + shelfHTML('Stories', '#/story', chapterCards(st));
      root.appendChild(shelves);
    }
  }
  function threadCards(st) {
    var ts = (st.threads || []).slice().sort(function (a, b) {
      return (a.status === 'followed' ? 0 : 1) - (b.status === 'followed' ? 0 : 1);
    }).slice(0, 8);
    return ts.map(function (t) {
      var img = '';
      var mems = (t.memoryIds || []).map(function (id) { return (st.memories || []).find(function (m) { return String(m.id) === String(id); }); }).filter(Boolean);
      for (var i = 0; i < mems.length; i++) { var v = visualOf(mems[i]); if (v) { img = v; break; } }
      var n = (t.evidence && t.evidence.count) || (t.memoryIds || []).length || 0;
      return { href: '#/thread/' + encodeURIComponent(t.id), img: img, title: t.title || 'A thread', meta: n ? n + ' moment' + (n === 1 ? '' : 's') : '' };
    });
  }
  function chapterCards(st) {
    return (st.chapters || []).slice(0, 8).map(function (c) {
      var img = '';
      var mems = [];
      try { if (typeof chapterMemories === 'function') mems = chapterMemories(c) || []; } catch (e) { mems = []; }
      if (!mems.length && c.memoryIds) mems = c.memoryIds.map(function (id) { return (st.memories || []).find(function (m) { return String(m.id) === String(id); }); }).filter(Boolean);
      for (var i = 0; i < mems.length; i++) { var v = visualOf(mems[i]); if (v) { img = v; break; } }
      var yrs = '';
      if (c.startDate && c.endDate) { var y1 = String(c.startDate).slice(0, 4), y2 = String(c.endDate).slice(0, 4); yrs = y1 === y2 ? y1 : y1 + ' – ' + y2; }
      return { href: '#/story/' + encodeURIComponent(c.id), img: img, title: c.title || 'Untitled chapter', meta: yrs };
    });
  }
  function shelfHTML(title, viewAll, cards) {
    if (!cards.length) return '';
    var h = '<section class="fx-shelf"><div class="fx-shelf-head"><h2>' + esc(title) + '</h2><a href="' + esc(viewAll) + '">View All</a></div><div class="fx-shelf-track">';
    cards.forEach(function (c) {
      h += '<a class="fx-card" href="' + esc(c.href) + '"><span class="fx-card-img">' +
        (c.img ? '<img src="' + esc(c.img) + '" alt="" loading="lazy">' : '<span class="fx-card-mark"><img src="assets/mark-light.png" alt=""></span>') +
        '</span><span class="fx-card-title">' + esc(c.title) + '</span>' + (c.meta ? '<span class="fx-card-meta">' + esc(c.meta) + '</span>' : '') + '</a>';
    });
    return h + '</div></section>';
  }

  /* ==================================================================
     Threads as the discovery grid
     ================================================================== */
  function buildThreadsGrid() {
    var root = $('#view-root');
    if (!root || $('.fx-threadgrid', root)) return;
    var rows = $$('#view-root > .thread-row:not(.thread-row-proposal)');
    if (!rows.length) return;
    var grid = document.createElement('div');
    grid.className = 'fx-threadgrid';
    rows[0].parentNode.insertBefore(grid, rows[0]);
    rows.forEach(function (r) { grid.appendChild(r); });
  }

  /* ---------- apply loop: re-run our builders as the app re-renders ---------- */
  var tick = null;
  function apply() {
    buildHead();
    var r = routeName();
    if (r === 'today') buildToday();
    else if (r === 'threads') buildThreadsGrid();
    else if (r === 'explore') decorateFeed();
    syncBellDot();
  }
  function schedule() {
    if (tick) return;
    tick = setTimeout(function () { tick = null; apply(); }, 90);
  }
  window.addEventListener('hashchange', schedule);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', schedule);
  (function arm() {
    var vr = $('#view-root');
    if (vr) {
      new MutationObserver(schedule).observe(vr, { childList: true, subtree: true });
      var sh = $('#app-shell');
      if (sh) new MutationObserver(schedule).observe(sh, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden'] });
    } else setTimeout(arm, 250);
  })();
  schedule();
})();
