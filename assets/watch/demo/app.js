/* Roon app — Phase 2 vanilla JS SPA (zero deps).
   Talks ONLY to the Phase-2 contract API (app-v2/PHASE2-CONTRACT.md)
   plus the pre-existing API in SPEC §6. No fake data anywhere. */
'use strict';

/* ================= helpers ================= */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const listOf = (x, keys) => { if (Array.isArray(x)) return x; if (x && typeof x === 'object') { for (const k of (keys || [])) if (Array.isArray(x[k])) return x[k]; for (const k of Object.keys(x)) if (Array.isArray(x[k])) return x[k]; } return []; };
const num = (n) => Number(n || 0).toLocaleString('en-US');
const isSampleFamily = (f) => !!(f && (f.sample || f.isSample || f.is_sample));
const EMOJI = ['❤️', '🥹', '😂', '🌟'];
const FREE_CEILING_LINE = "Your first chapter is done — Roon keeps writing when you start your plan.";
const NO_PROVIDER_LINE = "Text delivery turns on when messaging keys are added — share this link yourself for now";
const STRIPE_OFF_LINE = "Billing isn't switched on yet — nothing was charged, and nothing about your plan changed.";
function fmtDate(v, opts) { if (!v) return ''; const d = new Date(v); if (isNaN(d)) return String(v); return d.toLocaleDateString('en-US', opts || { month: 'short', day: 'numeric', year: 'numeric' }); }
function fmtDay(v) { return fmtDate(v, { month: 'long', day: 'numeric', year: 'numeric' }); }
function yearOf(v) { const d = new Date(v); return isNaN(d) ? '' : String(d.getFullYear()); }
function monthYear(v) { return fmtDate(v, { month: 'long', year: 'numeric' }); }
function firstName(name) { return String(name || '').trim().split(/\s+/)[0] || ''; }
function pronoun(p) { const r = String((p && p.relationship) || '').toLowerCase(); if (/daughter|sister|mother|grandmother|grandma|aunt|niece|wife/.test(r)) return { subj: 'her', poss: 'her' }; if (/son|brother|father|grandfather|grandpa|uncle|nephew|husband/.test(r)) return { subj: 'his', poss: 'his' }; return { subj: 'their', poss: 'their' }; }
function postureWords(p) { if (!p) return ''; if (p.posture === 'remembering') return 'Remembering'; if (p.posture === 'together') return 'Our life together'; return 'Growing up'; }
function initialOf(name) { return (String(name || '?').trim()[0] || '?').toUpperCase(); }
function toast(msg, kind) { const region = $('#toast-region'); const el = document.createElement('div'); el.className = 'toast' + (kind === 'error' ? ' error' : ''); el.innerHTML = '<span>' + esc(msg) + '</span>'; const b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-label', 'Dismiss'); b.textContent = '×'; b.addEventListener('click', () => el.remove()); el.appendChild(b); region.appendChild(el); setTimeout(() => { if (el.parentNode) el.remove(); }, 6500); }
async function copyText(t, okMsg) { try { await navigator.clipboard.writeText(t); toast(okMsg || 'Copied.'); } catch (e) { toast(t); } }

/* ================= API ================= */
async function api(path, opts) {
  opts = opts || {};
  const init = { credentials: 'same-origin', method: opts.method || 'GET', headers: {} };
  if (opts.body instanceof FormData) init.body = opts.body;
  else if (opts.body !== undefined) { init.headers['Content-Type'] = 'application/json'; init.body = JSON.stringify(opts.body); }
  let res;
  try { res = await fetch(path, init); } catch (e) { throw new Error('Could not reach the Roon server. Check your connection and try again.'); }
  const text = await res.text();
  let data = null; try { data = text ? JSON.parse(text) : null; } catch (e) { data = text; }
  if (!res.ok) { const err = new Error((data && data.error) || (typeof data === 'string' && data) || ('Request failed (' + res.status + ')')); err.status = res.status; err.data = data; throw err; }
  return data;
}
const fid = () => encodeURIComponent(state.family.id);
const F = (suffix) => '/api/families/' + fid() + suffix;

/* ================= state ================= */
const state = {
  user: null, families: [], family: null, usage: null, billing: null,
  people: [], memories: [], chapters: [], chaptersMeta: null, prompts: [], promptSettings: null,
  series: [], letters: [], threads: [], interviews: [], guestLinks: [],
  view: 'today', param: null, loadedFor: null, inviteToken: null,
  feedScope: 'all', feedCursor: null, feedLoading: false, feedDone: false, feedMonth: null,
  presented: null, storylines: [], ob: null, findMemories: null,
};

/* ================= sheets (one overlay component) ================= */
let sheetCleanup = null;
function openSheet(html) {
  closeSheet(true);
  const bd = $('#sheet-backdrop'); const sh = $('#sheet');
  sh.innerHTML = '<div class="sheet-grip" aria-hidden="true"></div>' + html;
  bd.hidden = false; document.body.classList.add('locked');
  const first = $('input, textarea, select, button', sh); if (first) first.focus();
}
function closeSheet(silent) {
  $('#sheet-backdrop').hidden = true; document.body.classList.remove('locked');
  if (sheetCleanup) { const fn = sheetCleanup; sheetCleanup = null; try { fn(); } catch (e) {} }
  if (!silent) { /* no-op */ }
}
$('#sheet-backdrop').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeSheet(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeSheet(); closeFind(); } });

/* ================= checkout / upgrade sheets ================= */
async function doCheckout(sku) {
  let res;
  try { res = await api(F('/billing/checkout'), { method: 'POST', body: { sku } }); }
  catch (e) { toast(e.message, 'error'); return null; }
  if (res && res.status === 'stripe_not_configured') { openSheet('<h3>One moment</h3><p class="lead">' + esc(STRIPE_OFF_LINE) + '</p><button type="button" class="btn btn-outline btn-block" data-close-sheet>Okay</button>'); wireCloseSheet(); return res; }
  if (res && res.checkoutUrl) { location.href = res.checkoutUrl; return res; }
  if (res && res.status === 'founding_cohort_full') { toast((res.note || 'The founding cohort is full.') + ' The standard Forever price applies.'); return res; }
  toast((res && res.note) || 'That didn\'t go through — nothing was charged.');
  return res;
}
function wireCloseSheet(root) { $$('[data-close-sheet]', root || $('#sheet')).forEach((b) => b.addEventListener('click', closeSheet)); }

/* ================= SHARING (SHARING.md §§5,9) =================
   One reusable share sheet for every shareable object Rooney makes:
   chapter / thread / film (by year) / noticing (by key) / interview
   (by prompt id). Entry points are plain buttons carrying data-share-*
   attributes; ONE delegated listener opens the sheet, so entry points
   work in every view (including feed pages inserted later) with no
   per-view wiring. All failures surface as toast / in-sheet errors —
   the sheet never breaks the view behind it. */
function shareScopeLabel(scope) { return { chapter: 'Chapter', thread: 'Thread', film: 'Year Film', noticing: 'Noticing', interview: 'Interview', family: 'Family' }[scope] || 'Share'; }
/* Logo rule (SHARING.md §6a, binding): branding on new share surfaces
   is the canonical artwork lockup image — never a typeset wordmark.
   Share surfaces are light (ivory/cream), so the dark lockup is used.
   The standalone dinosaur mark stays only as a compact glyph elsewhere
   in the app; it is never used as a wordmark substitute here. */
const SHARE_BRAND_HTML = '<img class="share-brand" src="assets/brand/logo-dark.png" alt="Roon">';
function shareSpecAttrs(spec) {
  let a = ' data-share-open="1" data-share-scope="' + esc(spec.scope || '') + '"';
  if (spec.targetId) a += ' data-share-target="' + esc(spec.targetId) + '"';
  if (spec.filmYear) a += ' data-share-year="' + esc(spec.filmYear) + '"';
  if (spec.noticingKey) a += ' data-share-nkey="' + esc(spec.noticingKey) + '"';
  if (spec.objectTitle) a += ' data-share-title="' + esc(spec.objectTitle) + '"';
  return a;
}
function shareBtnHTML(spec, opts) {
  opts = opts || {};
  if (!spec || !spec.scope) return '';
  if ((spec.scope === 'chapter' || spec.scope === 'thread' || spec.scope === 'interview') && !spec.targetId) return '';
  if (spec.scope === 'film' && !spec.filmYear) return '';
  if (spec.scope === 'noticing' && !spec.noticingKey) return '';
  const cls = opts.className || 'btn btn-outline btn-small share-btn';
  const label = opts.label || 'Share';
  return '<button type="button" class="' + cls + '"' + shareSpecAttrs(spec) + '>' + igIconShare() + esc(label) + '</button>';
}
document.addEventListener('click', (e) => {
  const b = e.target && e.target.closest ? e.target.closest('[data-share-open]') : null;
  if (!b) return;
  e.preventDefault(); e.stopPropagation();
  openShareSheet({
    scope: b.dataset.shareScope,
    targetId: b.dataset.shareTarget || undefined,
    filmYear: b.dataset.shareYear ? Number(b.dataset.shareYear) : undefined,
    noticingKey: b.dataset.shareNkey || undefined,
    objectTitle: b.dataset.shareTitle || '',
  });
});
function shareLinkIsLive(l) {
  if (!l || l.revoked) return false;
  if (l.expiresAt && new Date(l.expiresAt).getTime() < Date.now()) return false;
  return true;
}
function shareLinkTarget(l) { return (l && (l.targetId || l.threadId)) || null; }
function shareLinkMatches(l, spec) {
  if (!l || !spec || l.scope !== spec.scope) return false;
  if (spec.scope === 'film') return Number(l.filmYear) === Number(spec.filmYear);
  if (spec.scope === 'noticing') return String(l.noticingKey || '') === String(spec.noticingKey || '');
  if (spec.targetId) return String(shareLinkTarget(l) || '') === String(spec.targetId);
  return true;
}
function shareCounts(l) {
  const r = (l && l.reactions) || {};
  const comments = l && typeof l.comments === 'number' ? l.comments : (l && Array.isArray(l.comments) ? l.comments.length : Number((l && l.comments) || 0));
  return { views: Number((l && l.views) || 0), hearts: Number(r.hearts || 0), total: Number(r.total || 0), comments };
}
async function fetchGuestLinks() {
  const res = await api(F('/guest-links'));
  const list = listOf(res, ['guestLinks', 'links']);
  state.guestLinks = list;
  return list;
}
function upsertGuestLink(link, url) {
  if (!link || !link.id) return;
  const rec = Object.assign({}, link);
  if (url) rec.url = url; else if (link.url) rec.url = link.url;
  const i = state.guestLinks.findIndex((x) => String(x.id) === String(rec.id));
  if (i >= 0) state.guestLinks[i] = Object.assign({}, state.guestLinks[i], rec);
  else state.guestLinks.push(rec);
}
/* Keeper chip — the exact in-place format: "Seen by {views} · {hearts} ❤️".
   Rendered only when a LIVE link exists for the object (even at 0 views);
   hidden entirely when there is no live link. */
function shareChipHTML(spec) {
  const l = (state.guestLinks || []).find((x) => shareLinkIsLive(x) && shareLinkMatches(x, spec));
  if (!l) return '';
  const c = shareCounts(l);
  return '<p class="share-chip-line">Seen by ' + num(c.views) + ' · ' + num(c.hearts) + ' ❤️</p>';
}
async function refreshShareChip(el, spec) {
  if (!el) return;
  try { await fetchGuestLinks(); } catch (e) { /* degrade: no chip, view intact */ }
  if (document.contains(el)) el.innerHTML = shareChipHTML(spec);
}
async function copyTextRobust(t, okMsg) {
  let ok = false;
  try { await navigator.clipboard.writeText(t); ok = true; }
  catch (e) {
    try {
      const ta = document.createElement('textarea');
      ta.value = t; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); ok = document.execCommand('copy'); ta.remove();
    } catch (e2) { ok = false; }
  }
  if (ok) toast(okMsg || 'Link copied.');
  else toast(t);
  return ok;
}
function shareCreateBody(spec) {
  const b = { scope: spec.scope, expiry: '30d', allowReactions: true, allowComments: true };
  if (spec.scope === 'film') b.filmYear = Number(spec.filmYear);
  else if (spec.scope === 'noticing') b.noticingKey = spec.noticingKey;
  else if (spec.targetId) b.targetId = spec.targetId;
  return b;
}
let currentShare = null;
async function openShareSheet(spec) {
  if (!spec || !spec.scope || !state.family) { toast('Nothing to share yet.', 'error'); return; }
  currentShare = { spec: Object.assign({}, spec), link: null, url: '' };
  openSheet('<div class="share-sheet">' + SHARE_BRAND_HTML + '<h3>' + esc(spec.objectTitle || shareScopeLabel(spec.scope)) + '</h3><p class="lead">Getting your link…</p><button type="button" class="btn btn-ghost btn-block" data-close-sheet>Close</button></div>');
  wireCloseSheet();
  let links = null;
  try { links = await fetchGuestLinks(); } catch (e) { links = null; /* degrade: POST a fresh link below */ }
  if ($('#sheet-backdrop').hidden) return;
  try {
    let link = links ? links.find((l) => shareLinkIsLive(l) && shareLinkMatches(l, spec)) : null;
    let url = link ? (link.url || '') : '';
    if (!link) {
      const res = await api(F('/guest-links'), { method: 'POST', body: shareCreateBody(spec) });
      link = (res && res.guestLink) || res;
      url = (res && res.url) || (link && link.url) || '';
      if (link) {
        /* New-link defaults per contract: reactions on, comments on —
           fill them locally if the server record omits the fields. */
        if (link.allowReactions == null) link.allowReactions = true;
        if (link.allowComments == null) link.allowComments = true;
      }
      upsertGuestLink(link, url);
    }
    if (!link) throw new Error('That link came back empty — try again.');
    currentShare = { spec: Object.assign({}, spec), link, url };
    paintShareSheet();
  } catch (e) {
    paintShareError(e.message);
  }
}
function paintShareError(msg) {
  const sh = $('#sheet'); if (!sh || !currentShare) return;
  sh.innerHTML = '<div class="sheet-grip" aria-hidden="true"></div><div class="share-sheet">' + SHARE_BRAND_HTML + '<h3>' + esc(currentShare.spec.objectTitle || shareScopeLabel(currentShare.spec.scope)) + '</h3>' +
    '<p class="lead">That link couldn\'t be made just now.</p><p class="muted">' + esc(msg || '') + '</p>' +
    '<button type="button" class="btn btn-grad btn-block" id="share-retry">Try again</button>' +
    '<button type="button" class="btn btn-ghost btn-block" data-close-sheet>Close</button></div>';
  wireCloseSheet();
  const r = $('#share-retry', sh); if (r) r.addEventListener('click', () => openShareSheet(currentShare.spec));
}
function paintShareRevoked() {
  const sh = $('#sheet'); if (!sh || !currentShare) return;
  sh.innerHTML = '<div class="sheet-grip" aria-hidden="true"></div><div class="share-sheet">' + SHARE_BRAND_HTML + '<h3>' + esc(currentShare.spec.objectTitle || shareScopeLabel(currentShare.spec.scope)) + '</h3>' +
    '<p class="lead">Sharing has stopped for this one.</p><p class="muted">Anyone who had the link now sees a calm page saying it is no longer live.</p>' +
    '<button type="button" class="btn btn-grad btn-block" id="share-again">Share again</button>' +
    '<button type="button" class="btn btn-ghost btn-block" data-close-sheet>Done</button></div>';
  wireCloseSheet();
  const a = $('#share-again', sh); if (a) a.addEventListener('click', () => openShareSheet(currentShare.spec));
}
function paintShareSheet() {
  const sh = $('#sheet'); if (!sh || !currentShare || !currentShare.link) return;
  const spec = currentShare.spec; const link = currentShare.link;
  const url = currentShare.url || link.url || '';
  const c = shareCounts(link);
  const exp = link.expiry || '30d';
  const seg = (val, label) => '<button type="button" class="chip' + (exp === val ? ' is-active' : '') + '" data-share-expiry="' + val + '">' + label + '</button>';
  sh.innerHTML = '<div class="sheet-grip" aria-hidden="true"></div><div class="share-sheet">' +
    SHARE_BRAND_HTML +
    '<h3>' + esc(spec.objectTitle || shareScopeLabel(spec.scope)) + '</h3>' +
    '<p class="muted" style="margin:0 0 12px">Anyone with this link can see this — no account needed. You can stop sharing any time.</p>' +
    (url ? '<p class="share-url" title="' + esc(url) + '">' + esc(url) + '</p>' : '<p class="form-error">That link came back empty — close this and try again.</p>') +
    '<p class="share-counts">Seen by ' + num(c.views) + ' · ' + num(c.hearts) + ' ❤️ · ' + num(c.total) + ' reactions</p>' +
    shareScopeListHTML(spec) +
    '<div class="share-main-actions">' +
    (navigator.share ? '<button type="button" class="btn btn-grad" id="share-native">Share…</button>' : '') +
    '<button type="button" class="btn btn-outline" id="share-copy">Copy link</button></div>' +
    '<p class="share-label">Link lasts</p>' +
    '<div class="share-seg-row" role="group" aria-label="How long this link lasts">' + seg('7d', '7 days') + seg('30d', '30 days') + seg('never', 'No expiry') + '</div>' +
    '<div class="share-toggles">' +
    '<div class="toggle-row"><span><strong>Reactions</strong><br><span class="muted-small">Guests can react to what they see.</span></span><input type="checkbox" id="share-allow-react"' + (link.allowReactions === false ? '' : ' checked') + ' style="width:22px;height:22px"></div>' +
    '<div class="toggle-row"><span><strong>Comments</strong><br><span class="muted-small">Guests can leave a comment.</span></span><input type="checkbox" id="share-allow-comments"' + (link.allowComments ? ' checked' : '') + ' style="width:22px;height:22px"></div>' +
    '</div>' +
    '<p class="share-label">Share as a card</p>' +
    '<div class="share-card-row"><button type="button" class="btn btn-outline btn-small" data-share-card="portrait">Portrait card</button><button type="button" class="btn btn-outline btn-small" data-share-card="story">Story card</button></div>' +
    '<div class="share-foot"><button type="button" class="btn btn-ghost btn-small btn-danger" id="share-stop">Stop sharing</button><button type="button" class="btn btn-ghost btn-small" data-close-sheet>Done</button></div>' +
    '</div>';
  wireCloseSheet();
  const title = spec.objectTitle || shareScopeLabel(spec.scope);
  const native = $('#share-native', sh);
  if (native) native.addEventListener('click', async () => { try { await navigator.share({ title, text: title + ' — shared from Roon', url }); } catch (e) { /* guest closed the share panel */ } });
  const copy = $('#share-copy', sh);
  if (copy) copy.addEventListener('click', async () => { const ok = await copyTextRobust(url, 'Link copied.'); if (ok) { copy.textContent = 'Copied'; setTimeout(() => { if (copy.isConnected) copy.textContent = 'Copy link'; }, 2200); } });
  $$('[data-share-expiry]', sh).forEach((b) => b.addEventListener('click', () => { if (b.classList.contains('is-active')) return; patchShare({ expiry: b.dataset.shareExpiry }); }));
  const rt = $('#share-allow-react', sh); if (rt) rt.addEventListener('change', () => patchShare({ allowReactions: rt.checked }));
  const ct = $('#share-allow-comments', sh); if (ct) ct.addEventListener('change', () => patchShare({ allowComments: ct.checked }));
  $$('[data-share-card]', sh).forEach((b) => b.addEventListener('click', () => downloadShareCard(b.dataset.shareCard, b)));
  const stop = $('#share-stop', sh); if (stop) stop.addEventListener('click', stopSharing);
}
async function patchShare(patch) {
  if (!currentShare || !currentShare.link) return;
  try {
    const res = await api(F('/guest-links/' + encodeURIComponent(currentShare.link.id)), { method: 'PATCH', body: patch });
    const nl = (res && res.guestLink) || {};
    currentShare.link = Object.assign({}, currentShare.link, nl, patch);
    if (res && res.url) currentShare.url = res.url;
    else if (nl.url) currentShare.url = nl.url;
    upsertGuestLink(currentShare.link, currentShare.url);
    paintShareSheet();
  } catch (e) { toast(e.message, 'error'); paintShareSheet(); }
}
async function stopSharing() {
  if (!currentShare || !currentShare.link) return;
  try {
    await api(F('/guest-links/' + encodeURIComponent(currentShare.link.id)), { method: 'DELETE' });
    currentShare.link = Object.assign({}, currentShare.link, { revoked: true });
    upsertGuestLink(currentShare.link, currentShare.url);
    paintShareRevoked();
  } catch (e) { toast(e.message, 'error'); }
}
async function downloadShareCard(size, btn) {
  if (!currentShare || !currentShare.link) return;
  const old = btn ? btn.textContent : '';
  if (btn) { btn.disabled = true; btn.textContent = 'Preparing…'; }
  try {
    const res = await fetch(F('/shares/' + encodeURIComponent(currentShare.link.id) + '/card?size=' + encodeURIComponent(size)), { credentials: 'same-origin' });
    if (!res.ok) throw new Error('That card couldn\'t be made just now (' + res.status + ').');
    const blob = await res.blob();
    const fileName = 'roon-' + size + '-card.png';
    let shared = false;
    try {
      const file = new File([blob], fileName, { type: blob.type || 'image/png' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: currentShare.spec.objectTitle || 'Shared from Roon' }); shared = true; }
    } catch (e) { shared = false; /* fall through to a download */ }
    if (!shared) {
      const objUrl = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = objUrl; a.download = fileName;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(objUrl), 4000);
      toast('Card saved.');
    }
  } catch (e) { toast(e.message, 'error'); }
  finally { if (btn) { btn.disabled = false; btn.textContent = old; } }
}
function sharedLinkTitle(l) {
  const target = shareLinkTarget(l);
  if (l.scope === 'chapter') { const ch = state.chapters.find((x) => String(x.id) === String(target)); return (ch && ch.title) || 'A chapter'; }
  if (l.scope === 'thread') { const t = state.threads.find((x) => String(x.id) === String(target)); return (t && t.title) || 'A thread'; }
  if (l.scope === 'film') return (l.filmYear ? l.filmYear + ' — the film' : 'The Year Film');
  if (l.scope === 'noticing') { const key = String(l.noticingKey || ''); const idx = key.indexOf(':'); return (idx >= 0 ? key.slice(idx + 1) : key) || 'A noticing'; }
  if (l.scope === 'interview') {
    const iv = state.interviews.find((x) => String(x.promptId) === String(target));
    if (iv && iv.question) return iv.question;
    const p = state.prompts.find((x) => String(x.id) === String(target));
    return p ? promptQuestion(p) : 'An interview invitation';
  }
  if (l.scope === 'family') return 'The whole family story';
  return shareScopeLabel(l.scope);
}

function planSheetHTML() {
  return '<h3>Tell the whole story</h3>' +
    '<p class="lead">$99 a year — or $12 a month ($144 a year). The year saves you $45.</p>' +
    '<div class="price-row"><div><strong>Roon — a year</strong><br><span class="save">Saves $45 a year</span></div><button type="button" class="btn btn-grad btn-small" data-buy="roon_annual">$99/yr</button></div>' +
    '<div class="price-row"><div><strong>Roon — monthly</strong><br><span class="muted-small">$12 a month ($144 a year)</span></div><button type="button" class="btn btn-outline btn-small" data-buy="roon_monthly">$12/mo</button></div>' +
    '<div class="price-row"><div><strong>Forever</strong><br><span class="muted-small">Everything in Roon, for life. One payment of $749 — founding families $599 while the first 200 places last.</span></div><button type="button" class="btn btn-outline btn-small" data-buy="forever">$749 once</button></div>' +
    '<button type="button" class="btn btn-ghost btn-block" data-close-sheet>Not yet</button>';
}
function openPlanSheet() { openSheet(planSheetHTML()); wireSheetBuys(); wireCloseSheet(); }
function storylineSheetHTML(person) {
  const name = person ? firstName(person.name) : 'them';
  return '<h3>One more person Rooney follows</h3>' +
    '<p class="lead">Rooney can start following ' + esc(name) + ' too — $24 a year (or $3 a month; the year saves you $12).</p>' +
    '<div class="price-row"><div><strong>A year</strong><br><span class="save">Saves $12 a year</span></div><button type="button" class="btn btn-grad btn-small" data-buy="extra_storyline_annual">$24/yr</button></div>' +
    '<div class="price-row"><div><strong>Monthly</strong><br><span class="muted-small">$3 a month ($36 a year)</span></div><button type="button" class="btn btn-outline btn-small" data-buy="extra_storyline_monthly">$3/mo</button></div>' +
    '<button type="button" class="btn btn-ghost btn-block" data-close-sheet>Not yet</button>';
}
function openStorylineSheet(person) { openSheet(storylineSheetHTML(person)); wireSheetBuys(); wireCloseSheet(); }
const ROOM_ROWS = [
  { step: 1, name: 'Room', adds: '+25,000 photos and +300 minutes of video', annual: 30, monthly: 3, save: 6, skuA: 'room1_annual', skuM: 'room1_monthly' },
  { step: 2, name: 'More room', adds: '+75,000 photos and +900 minutes of video', annual: 80, monthly: 8, save: 16, skuA: 'room2_annual', skuM: 'room2_monthly' },
  { step: 3, name: 'The vault', adds: '+200,000 photos and +2,400 minutes of video', annual: 150, monthly: 15, save: 30, skuA: 'room3_annual', skuM: 'room3_monthly' },
];
function roomSheetHTML() {
  return '<h3>More room for the story</h3><p class="lead">Room is measured the way you keep memories: photos and minutes of video.</p>' +
    ROOM_ROWS.map((r) => '<div class="price-row"><div><strong>' + esc(r.name) + '</strong> — ' + esc(r.adds) + '<br><span class="save">$' + r.annual + ' a year saves $' + r.save + '</span> <span class="muted-small">· or $' + r.monthly + ' a month</span></div><span style="display:flex;gap:6px;flex-shrink:0"><button type="button" class="btn btn-grad btn-small" data-buy="' + r.skuA + '">$' + r.annual + '/yr</button><button type="button" class="btn btn-outline btn-small" data-buy="' + r.skuM + '">$' + r.monthly + '/mo</button></span></div>').join('') +
    '<button type="button" class="btn btn-ghost btn-block" data-close-sheet>Not yet</button>';
}
function openRoomSheet() { openSheet(roomSheetHTML()); wireSheetBuys(); wireCloseSheet(); }
function openBackfillSheet() {
  openSheet('<h3>Let Rooney keep writing</h3><p class="lead">Rooney tells 2,500 more of your backfill memories — $19, once.</p>' +
    '<button type="button" class="btn btn-grad btn-block" data-buy="deep_backfill">Yes — $19, once</button>' +
    '<button type="button" class="btn btn-ghost btn-block" data-close-sheet>Not yet</button>');
  wireSheetBuys(); wireCloseSheet();
}
function wireSheetBuys() { $$('#sheet [data-buy]').forEach((b) => b.addEventListener('click', async () => { b.disabled = true; b.textContent = 'One moment…'; await doCheckout(b.dataset.buy); })); }

/* ================= auth ================= */
function showAuth() { $('#app-shell').hidden = true; $('#auth-view').hidden = false; const inv = new URLSearchParams(location.search).get('invite') || (location.hash.match(/invite=([A-Za-z0-9_-]+)/) || [])[1]; if (inv) { state.inviteToken = inv; $('#invite-notice').hidden = false; } }
function showApp() { $('#auth-view').hidden = true; $('#app-shell').hidden = false; }
$$('.auth-tab').forEach((tab) => tab.addEventListener('click', () => { const login = tab.id === 'tab-login'; $('#tab-login').classList.toggle('is-active', login); $('#tab-signup').classList.toggle('is-active', !login); $('#tab-login').setAttribute('aria-selected', String(login)); $('#tab-signup').setAttribute('aria-selected', String(!login)); $('#form-login').hidden = !login; $('#form-signup').hidden = login; }));
function formError(form, msg) { const el = $('.form-error', form); if (el) { el.textContent = msg || ''; el.hidden = !msg; } }
async function handleAuth(form, path) {
  formError(form, '');
  const payload = {}; new FormData(form).forEach((v, k) => { payload[k] = v; });
  const btn = $('button[type="submit"]', form); btn.disabled = true; btn.textContent = 'One moment…';
  try { const res = await api(path, { method: 'POST', body: payload }); state.user = (res && (res.user || res)) || state.user; await afterAuth(); }
  catch (e) { formError(form, e.message); }
  finally { btn.disabled = false; btn.textContent = path.endsWith('login') ? 'Sign in' : 'Create account'; }
}
$('#form-login').addEventListener('submit', (e) => { e.preventDefault(); handleAuth(e.currentTarget, '/api/auth/login'); });
$('#form-signup').addEventListener('submit', (e) => { e.preventDefault(); handleAuth(e.currentTarget, '/api/auth/signup'); });
$('#btn-demo').addEventListener('click', async (e) => {
  const btn = e.currentTarget; btn.disabled = true; btn.textContent = 'Opening the sample family…';
  try { const res = await api('/api/auth/login', { method: 'POST', body: { email: 'sample@roon.example', password: 'sample-demo-password' } }); state.user = (res && (res.user || res)) || state.user; await afterAuth(); toast('You\'re exploring the sample family — demo data, labelled Sample everywhere.'); }
  catch (err) { toast('The sample family isn\'t available yet: ' + err.message, 'error'); }
  finally { btn.disabled = false; btn.textContent = 'Explore the sample family'; }
});
async function afterAuth() {
  if (!state.user) { try { const me = await api('/api/me'); state.user = me.user || me; } catch (e) {} }
  showApp();
  await loadFamilies();
  if (state.inviteToken) {
    try { const res = await api('/api/invites/' + encodeURIComponent(state.inviteToken) + '/accept', { method: 'POST', body: {} }); toast('Welcome in — you\'ve joined the family.'); state.inviteToken = null; $('#invite-notice').hidden = true; await loadFamilies(res && (res.familyId || (res.family && res.family.id))); }
    catch (e) { toast('That invite couldn\'t be accepted: ' + e.message, 'error'); state.inviteToken = null; }
  }
  if (!state.families.length) { location.hash = '#/onboarding'; route(); return; }
  if (!location.hash || location.hash === '#') location.hash = '#/';
  route();
}
async function doLogout() { try { await api('/api/auth/logout', { method: 'POST', body: {} }); } catch (e) {} state.user = null; state.families = []; state.family = null; state.loadedFor = null; location.hash = ''; showAuth(); }
$('#btn-logout').addEventListener('click', doLogout);

/* ================= families ================= */
async function loadFamilies(preferId) {
  const res = await api('/api/families');
  state.families = listOf(res, ['families']);
  const wanted = preferId || localStorage.getItem('roon_family');
  const fam = state.families.find((f) => String(f.id) === String(wanted)) || state.families.find((f) => !isSampleFamily(f)) || state.families[0] || null;
  if (fam) await setFamily(fam, true);
}
async function setFamily(fam, silent) {
  state.family = fam; localStorage.setItem('roon_family', fam.id); state.loadedFor = null; state.feedCursor = null; state.feedDone = false; state.feedMonth = null;
  try { const d = await api('/api/families/' + encodeURIComponent(fam.id)); const det = (d && (d.family || d)) || fam; state.family = det; state.usage = (d && d.usage) || null; } catch (e) { state.usage = null; }
  renderChrome();
  if (!silent) route(true);
}
function planKey() { const raw = String((state.family && (state.family.plan || state.family.planKey)) || 'start').toLowerCase(); if (raw.includes('forever')) return 'forever'; if (raw.includes('roon') || raw.includes('paid') || raw.includes('core')) return 'roon'; return 'start'; }
function planName() { return { start: 'Start', roon: 'Roon', forever: 'Forever' }[planKey()]; }
function renderChrome() {
  const fam = state.family;
  $('#sample-banner').hidden = !isSampleFamily(fam);
  const peopleNames = state.people.slice(0, 4).map((p) => p.name).join(' · ');
  $('#rail-family').innerHTML = fam ? '<span class="avatar">' + esc(initialOf(fam.name || 'F')) + '</span><div style="min-width:0"><strong style="font-size:14px;display:block">' + esc(fam.name || 'Our family') + '</strong><span class="muted-small">' + esc(peopleNames || 'Your family story') + '</span>' + (isSampleFamily(fam) ? ' <span class="badge bsample">Sample</span>' : '') + '</div>' : '';
  const u = state.usage; const pres = u && u.presented;
  let line = 'Plan: ' + planName();
  if (pres && pres.room) line += ' · ' + num(pres.room.photosUsed) + ' of ' + num(pres.room.photosCap) + ' photos';
  if (pres && pres.storylines) line += ' · Rooney follows ' + pres.storylines.used + ' of ' + pres.storylines.allowed + ' people';
  $('#plan-line').innerHTML = esc(line) + ' — <a href="#/plan">Plan &amp; room</a>';
  updateQBadge();
}
function updateQBadge() { const n = state.prompts.filter(isPendingPrompt).length; const b = $('#nav-q-count'); if (b) { b.hidden = !n; b.textContent = n ? String(n) : ''; } }

/* ================= routing ================= */
const NAVMAP = { today: 'today', explore: 'explore', story: 'story', chapter: 'story', threads: 'threads', thread: 'threads', questions: 'questions', film: 'film', family: 'family', person: 'family', plan: 'plan', imports: 'family', settings: 'settings', onboarding: 'today', saved: 'family', collections: 'family', collection: 'family', legacy: 'plan' };
function parseRoute() {
  const h = (location.hash || '#/').replace(/^#\/?/, '');
  const parts = h.split('/').filter(Boolean);
  if (!parts.length) return { view: 'today' };
  if (parts[0] === 'story' && parts[1]) return { view: 'chapter', param: decodeURIComponent(parts[1]) };
  if (parts[0] === 'thread' && parts[1]) return { view: 'thread', param: decodeURIComponent(parts[1]) };
  if (parts[0] === 'person' && parts[1]) return { view: 'person', param: decodeURIComponent(parts[1]) };
  if (parts[0] === 'collection' && parts[1]) return { view: 'collection', param: decodeURIComponent(parts[1]) };
  const known = ['explore', 'story', 'threads', 'questions', 'film', 'family', 'plan', 'imports', 'settings', 'onboarding', 'saved', 'collections', 'legacy'];
  return { view: known.includes(parts[0]) ? parts[0] : 'today' };
}
function route(force) {
  if (!state.user) return;
  const r = parseRoute(); state.view = r.view; state.param = r.param || null;
  const nav = NAVMAP[r.view] || 'today';
  $$('[data-nav]').forEach((a) => a.classList.toggle('is-active', a.dataset.nav === nav));
  window.scrollTo({ top: 0 });
  render();
}
window.addEventListener('hashchange', () => route());
$('#btn-rooney-rail').addEventListener('click', () => openRooneySheet());
$('#btn-rooney-mobile').addEventListener('click', () => openRooneySheet());
$('#btn-capture-mobile').addEventListener('click', () => openAddSheet());
$('#btn-add-mobile').addEventListener('click', () => openAddSheet());
const _addRail = $('#btn-add-rail'); if (_addRail) _addRail.addEventListener('click', () => openAddSheet());
const _menuBtn = $('#btn-menu-mobile'); if (_menuBtn) _menuBtn.addEventListener('click', () => openMenuSheet());
$('#find-input').addEventListener('focus', () => openFind());
$('#btn-find-mobile').addEventListener('click', () => openFind());

/* ================= data loading ================= */
function settle(p) { return p.then((v) => ({ ok: true, v }), (e) => ({ ok: false, e })); }
async function ensureData() {
  if (!state.family) return false;
  if (state.loadedFor === String(state.family.id)) return true;
  const [people, memories, chapters, prompts, series, letters, threads, interviews, guestLinks, billing] = await Promise.all([
    settle(api(F('/people'))), settle(api(F('/memories'))), settle(api(F('/chapters'))),
    settle(api(F('/prompts'))), settle(api(F('/series'))), settle(api(F('/letters'))),
    settle(api(F('/threads'))), settle(api(F('/interviews'))), settle(api(F('/guest-links'))),
    settle(api(F('/billing'))),
  ]);
  state.people = people.ok ? listOf(people.v, ['people']) : [];
  state.memories = memories.ok ? listOf(memories.v, ['memories']) : [];
  state.chapters = chapters.ok ? listOf(chapters.v, ['chapters']) : [];
  state.chaptersMeta = chapters.ok && chapters.v && !Array.isArray(chapters.v) ? chapters.v : null;
  state.prompts = prompts.ok ? listOf(prompts.v, ['prompts']) : [];
  state.promptSettings = prompts.ok && prompts.v && prompts.v.settings ? prompts.v.settings : state.promptSettings;
  state.series = series.ok ? listOf(series.v, ['series']) : [];
  state.letters = letters.ok ? listOf(letters.v, ['letters']) : [];
  state.threads = threads.ok ? listOf(threads.v, ['threads']) : [];
  state.interviews = interviews.ok ? listOf(interviews.v, ['interviews']) : [];
  state.guestLinks = guestLinks.ok ? listOf(guestLinks.v, ['guestLinks', 'links']) : [];
  state.billing = billing.ok ? billing.v : null;
  try { const d = await api('/api/families/' + fid()); state.usage = (d && d.usage) || state.usage; if (d && d.family) state.family = d.family; } catch (e) {}
  state.loadedFor = String(state.family.id);
  renderChrome();
  return true;
}
async function refreshData() { state.loadedFor = null; await ensureData(); }
function personById(id) { return state.people.find((p) => String(p.id) === String(id)) || null; }
function personName(id) { const p = personById(id); return p ? p.name : ''; }
function isPendingPrompt(p) { if (p.status) return String(p.status).toLowerCase() === 'pending'; return !p.answeredAt && !(p.answers && p.answers.length); }
function promptQuestion(p) { return p.question || p.text || p.title || 'Rooney has a question for you'; }
function promptWhy(p) { const w = String(p.why || p.whyLine || p.reason || ''); if (!w) return ''; if (/^[a-z][a-z_]*:[a-z0-9-]+$/.test(w.trim())) return ''; return w; }
function promptPersonId(p) { return p.personId || (p.peopleIds && p.peopleIds[0]) || (p.personIds && p.personIds[0]) || null; }
function isWeeklyOne(p) { const t = String(p.type || p.kind || '').toLowerCase(); return t.includes('weekly') || /favorite photo this week|favourite photo this week|weekly one/i.test(promptQuestion(p)); }
function chapterRange(ch) { const a = ch.startDate || ch.startAt || (ch.dateRange && ch.dateRange.start); const b = ch.endDate || ch.endAt || (ch.dateRange && ch.dateRange.end); if (a || b) { const fa = a ? fmtDate(a, { month: 'short', year: 'numeric' }) : ''; const fb = b ? fmtDate(b, { month: 'short', year: 'numeric' }) : ''; if (fa && fb && fa === fb) return fa; return [fa, fb].filter(Boolean).join(' — '); } return ch.rangeLabel || ''; }
function chapterMemories(ch) { const ids = ch.memoryIds || []; const embedded = (ch.memories || []).filter((m) => m && typeof m === 'object'); if (embedded.length) return embedded; return ids.map((id) => state.memories.find((m) => String(m.id) === String(id))).filter(Boolean); }
function threadEvidenceLine(t) { const e = t.evidence || {}; const c = e.count != null ? e.count : (t.memoryIds || []).length; let s = num(c) + ' moment' + (c === 1 ? '' : 's'); if (e.fromYear && e.toYear) s += ' · ' + e.fromYear + (e.toYear !== e.fromYear ? ' — ' + e.toYear : ''); return s; }
function presented() { return (state.usage && state.usage.presented) || state.presented || null; }
function isStartPlan() { return planKey() === 'start'; }
function startWeekOneEnded() { if (!isStartPlan() || !state.family || !state.family.createdAt) return false; return (Date.now() - new Date(state.family.createdAt).getTime()) > 7 * 86400000; }
async function render() {
  const root = $('#view-root'); if (!root) return;
  /* Phase 3C: the current view name is exposed for the desktop-only
     per-surface column rules in styles.css. No mobile rule reads it. */
  root.setAttribute('data-view', state.view);
  if (state.view === 'onboarding') { renderOnboarding(root); return; }
  if (!state.family) { root.innerHTML = '<div class="empty"><h3>No family yet</h3><p><a href="#/onboarding">Start your family\'s story →</a></p></div>'; return; }
  await ensureData();
  const v = state.view;
  if (v === 'today') renderToday(root);
  else if (v === 'explore') renderExplore(root);
  else if (v === 'story') renderStory(root);
  else if (v === 'chapter') renderChapter(root, state.param);
  else if (v === 'threads') renderThreads(root);
  else if (v === 'thread') renderThreadDetail(root, state.param);
  else if (v === 'questions') renderQuestions(root);
  else if (v === 'film') renderFilm(root);
  else if (v === 'family') renderFamily(root);
  else if (v === 'person') renderPerson(root, state.param);
  else if (v === 'plan') renderPlan(root);
  else if (v === 'imports') renderImports(root);
  else if (v === 'settings') renderSettings(root);
  else if (v === 'saved') renderSaved(root);
  else if (v === 'collections') renderCollections(root);
  else if (v === 'collection') renderCollection(root, state.param);
  else if (v === 'legacy') renderLegacy(root);
  else renderToday(root);
}

/* ================= media rendering ================= */
function mediaSrc(m) { if (!m) return ''; if (m.src) return m.src; if (m.renditionRef) return m.renditionRef; if (m.fileRef) return m.fileRef; return ''; }
function mediaOriginal(m) { return (m && (m.originalSrc || m.fileRef)) || mediaSrc(m); }
function fmtDuration(sec) {
  const s = Math.round(Number(sec) || 0);
  if (!s) return '';
  const h = Math.floor(s / 3600); const min = Math.floor((s % 3600) / 60); const rem = s % 60;
  return h ? h + ':' + String(min).padStart(2, '0') + ':' + String(rem).padStart(2, '0') : min + ':' + String(rem).padStart(2, '0');
}
function mediaHTML(m, opts) {
  opts = opts || {};
  const src = mediaSrc(m);
  if (m.type === 'photo') return src ? '<img src="' + esc(src) + '" alt="' + esc(m.caption || 'Photo') + '" loading="lazy">' : '';
  if (m.type === 'video') return src ? '<video controls playsinline preload="metadata"' + (m.poster ? ' poster="' + esc(m.poster) + '"' : '') + ' src="' + esc(src) + '"></video>' : '';
  if (m.type === 'voice') {
    /* Visual audio card — NO fake waveform (the server provides no sample
       data, so a waveform would be decoration pretending to be data).
       The one line on this card is the playback-progress track: it only
       moves with real timeupdate events from the audio element itself. */
    const dur = fmtDuration(m.durationSec);
    const people = (m.peopleIds || []).map(personName).filter(Boolean).join(', ');
    const meta = [fmtDay(m.takenAt), people].filter(Boolean).join(' · ');
    return '<div class="voice-card" data-voice-card>' +
      '<button type="button" class="voice-play" data-voice-toggle aria-label="Play this voice note" aria-pressed="false"' + (src ? '' : ' disabled') + '>▶</button>' +
      '<div class="voice-main">' +
      '<p class="voice-title">' + esc(m.caption || 'A voice note') + '</p>' +
      '<p class="voice-meta">' + (meta ? esc(meta) + ' · ' : '') + '<span data-voice-duration' + (dur ? '' : ' data-voice-duration-pending="1"') + '>' + esc(dur || 'Voice note') + '</span></p>' +
      '<div class="voice-track" aria-hidden="true"><i data-voice-progress></i></div>' +
      (src ? '<audio controls preload="metadata" src="' + esc(src) + '" class="voice-audio" data-voice-audio aria-label="Voice note player"></audio>' : '<p class="muted-small" style="margin:0">This voice note has no playable file attached.</p>') +
      (m.storyText ? '<p class="voice-transcript">' + esc(m.storyText) + '</p>' : '') +
      '</div></div>';
  }
  return '<p class="body">' + esc(m.storyText || m.caption || '') + '</p>';
}
/* Voice-card wiring — one delegated set of listeners for every voice card
   on every surface (feed, chapter reader, thread items, ask previews).
   Media events don't bubble, so they are heard in the capture phase. */
document.addEventListener('click', (e) => {
  const btn = e.target && e.target.closest ? e.target.closest('[data-voice-toggle]') : null;
  if (!btn) return;
  const wrap = btn.closest('[data-voice-card]'); const audio = wrap && wrap.querySelector('audio[data-voice-audio]');
  if (!audio) return;
  if (audio.paused) { const played = audio.play(); if (played && played.catch) played.catch(() => {}); } else audio.pause();
});
function syncVoiceCard(audio) {
  const wrap = audio.closest('[data-voice-card]'); if (!wrap) return;
  const btn = wrap.querySelector('[data-voice-toggle]');
  if (btn) { const playing = !audio.paused && !audio.ended; btn.textContent = playing ? '❚❚' : '▶'; btn.setAttribute('aria-pressed', String(playing)); btn.setAttribute('aria-label', playing ? 'Pause this voice note' : 'Play this voice note'); }
  const bar = wrap.querySelector('[data-voice-progress]');
  if (bar) bar.style.width = (audio.duration && isFinite(audio.duration) && audio.currentTime) ? Math.min(100, (audio.currentTime / audio.duration) * 100) + '%' : '0%';
  const durEl = wrap.querySelector('[data-voice-duration-pending]');
  if (durEl && audio.duration && isFinite(audio.duration)) { durEl.textContent = fmtDuration(audio.duration); durEl.removeAttribute('data-voice-duration-pending'); }
}
['play', 'pause', 'ended', 'timeupdate', 'loadedmetadata', 'durationchange'].forEach((evt) => {
  document.addEventListener(evt, (e) => { if (e.target && e.target.matches && e.target.matches('audio[data-voice-audio]')) syncVoiceCard(e.target); }, true);
});
/* ============ Rooney commentary (server lane: commentary {text, basedOn}) ============ */
function commentaryOf() {
  for (let i = 0; i < arguments.length; i++) {
    const o = arguments[i];
    if (o && o.commentary) {
      if (typeof o.commentary === 'string' && o.commentary.trim()) return { text: o.commentary };
      if (o.commentary.text && String(o.commentary.text).trim()) return o.commentary;
    }
  }
  return null;
}
/* basedOn entries are structured trace OBJECTS from the server
   ({type:'date'|...}) — never stringify them raw (that prints
   "[object Object]"). Render a short human label per trace type.
   (Coordinator QA fix, Phase 2.5.) */
const BASED_LABELS = { date: 'the date kept', memory_type: 'the memory itself', people: 'people recorded', family_words: 'your own words', thread: 'its thread', chapter: 'its chapter', same_season_streak: 'season by season', gap: 'the gap before it', anniversary: 'the anniversary', item_types: 'the moments themselves', thread_basis: 'how Rooney found it', growth: 'the thread growing', noticing_evidence: 'the evidence', series: 'series answers', question: 'a question for later' };
function basedLine(basedOn) {
  if (!basedOn) return '';
  const parts = Array.isArray(basedOn) ? basedOn : [basedOn];
  const labels = [];
  for (const b of parts) {
    const label = typeof b === 'string' ? b : (b && BASED_LABELS[b.type]) || '';
    if (label && !labels.includes(label)) labels.push(label);
  }
  return labels.length ? 'From your records: ' + labels.join(' · ') : '';
}
function commentaryHTML() {
  const c = commentaryOf.apply(null, arguments);
  if (!c) return '';
  const based = basedLine(c.basedOn);
  return '<aside class="rooney-note" aria-label="A note from Rooney"><img src="assets/mark-dark.png" alt="" class="rooney-note-mark"><div class="rooney-note-body"><span class="rooney-note-label">Rooney</span><p class="rooney-note-text">' + esc(c.text) + '</p>' + (based ? '<p class="rooney-note-based">' + esc(based) + '</p>' : '') + '</div></aside>';
}
/* ============ visual covers (real photos / video posters only) ============ */
function memById(id) { return state.memories.find((m) => String(m.id) === String(id)) || null; }
function visualSource(m) {
  if (!m) return '';
  if (m.type === 'photo') return mediaSrc(m);
  if (m.type === 'video') return m.poster || m.posterRef || '';
  return '';
}
function visualMemsFromIds(ids, limit) {
  const seen = {}; const out = [];
  (ids || []).forEach((id) => {
    if (seen[String(id)]) return; seen[String(id)] = 1;
    const m = memById(id);
    if (m && visualSource(m)) out.push(m);
  });
  return out.slice(0, limit || 4);
}
function coverMediaHTML(mems, singleSrc) {
  const list = (mems || []).filter((m) => visualSource(m));
  if (!list.length && singleSrc) return '<div class="cover-media cover-single"><img src="' + esc(singleSrc) + '" alt="" loading="lazy"></div>';
  if (!list.length) return '';
  if (list.length === 1) return '<div class="cover-media cover-single"><img src="' + esc(visualSource(list[0])) + '" alt="' + esc(list[0].caption || '') + '" loading="lazy"></div>';
  return '<div class="cover-media cover-collage collage-' + Math.min(4, list.length) + '">' + list.slice(0, 4).map((m) => '<img src="' + esc(visualSource(m)) + '" alt="' + esc(m.caption || '') + '" loading="lazy">').join('') + '</div>';
}
function coverHTML(mems, singleSrc, href, title, sub) {
  const media = coverMediaHTML(mems, singleSrc);
  if (!media) return '';
  const inner = media + (title ? '<div class="cover-scrim"><h3 class="cover-title">' + esc(title) + '</h3>' + (sub ? '<p class="cover-sub">' + esc(sub) + '</p>' : '') + '</div>' : '');
  if (href) return '<a class="cover" href="' + href + '" aria-label="' + esc(title || 'Open') + '">' + inner + '</a>';
  return '<div class="cover">' + inner + '</div>';
}
function isOnThisDay(m) { if (!m || !m.takenAt) return false; const d = new Date(m.takenAt); const now = new Date(); return d.getMonth() === now.getMonth() && d.getDate() === now.getDate() && d.getFullYear() < now.getFullYear(); }
function igIconComment() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.8a8.3 8.3 0 0 1-8.4 8.2c-1.2 0-2.4-.26-3.5-.74L3.5 20.5l1.36-4.9A8.2 8.2 0 1 1 20.5 11.8z"/></svg>'; }
function igIconShare() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5v11.5"/><path d="m7.2 8.2 4.8-4.7 4.8 4.7"/><path d="M5 13.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6.5"/></svg>'; }
function reactionsHTML(targetType, targetId, reactions, opts) {
  const sums = reactions || [];
  /* Den rule (CIRCLE-SPEC §4.1): inside the family, reactions render
     as PEOPLE, never totals — the buttons carry no numbers, and under
     them a quiet line names who reacted: "❤️ Maggie, Grace · 🌟 Ray".
     The only counts in the product are counts of what's kept. */
  const peopleLine = sums.filter((s) => s.people && s.people.length).map((s) => {
    const names = s.people.map((p) => p.name);
    const shown = names.slice(0, 3).join(', ') + (names.length > 3 ? ' and ' + (names.length - 3) + ' more' : '');
    return esc(s.emoji) + ' ' + esc(shown);
  }).join(' · ');
  return '<div class="reactions' + (opts && opts.compact ? ' reactions-compact' : '') + '" data-reactions="' + esc(targetType) + ':' + esc(targetId) + '">' +
    EMOJI.map((e) => { const s = sums.find((x) => x.emoji === e); const mine = s && s.mine; return '<button type="button" class="react-btn' + (mine ? ' mine' : '') + '" data-react="' + e + '" aria-pressed="' + !!mine + '">' + e + '</button>'; }).join('') +
    (peopleLine ? '<span class="react-people">' + peopleLine + '</span>' : '') +
    '</div>';
}
function wireReactions(root, targetType, targetId) {
  $$('[data-react]', root).forEach((b) => b.addEventListener('click', async () => {
    try { const res = await api(F('/reactions'), { method: 'POST', body: { targetType, targetId, emoji: b.dataset.react } }); const wrap = b.closest('[data-reactions]'); if (wrap && res && res.reactions) wrap.outerHTML = reactionsHTML(targetType, targetId, res.reactions), wireReactions(wrap.parentElement, targetType, targetId); }
    catch (e) { toast(e.message, 'error'); }
  }));
}
function commentsHTML(targetType, targetId, count, opts) {
  if (opts && opts.compact) {
    return '<div class="post-comment-wrap"><button type="button" class="comment-toggle comment-toggle-ig" data-comments-toggle="' + esc(targetType) + ':' + esc(targetId) + '" aria-label="' + (count ? 'Read ' + num(count) + ' comment' + (count === 1 ? '' : 's') : 'Add a comment') + '">' + igIconComment() + (count ? '<span>' + num(count) + '</span>' : '') + '</button><div class="comments" data-comments-box hidden></div></div>';
  }
  return '<div><button type="button" class="comment-toggle" data-comments-toggle="' + esc(targetType) + ':' + esc(targetId) + '">' + (count ? num(count) + ' comment' + (count === 1 ? '' : 's') : 'Add a comment') + '</button><div class="comments" data-comments-box hidden></div></div>';
}
function wireComments(root) {
  $$('[data-comments-toggle]', root).forEach((btn) => btn.addEventListener('click', async () => {
    const parts = btn.dataset.commentsToggle.split(':'); const targetType = parts[0]; const targetId = parts.slice(1).join(':');
    const box = btn.parentElement.querySelector('[data-comments-box]');
    if (!box.hidden) { box.hidden = true; return; }
    box.hidden = false; box.innerHTML = '<p class="muted-small">Loading…</p>';
    try {
      const res = await api(F('/comments') + '?targetType=' + encodeURIComponent(targetType) + '&targetId=' + encodeURIComponent(targetId));
      const comments = listOf(res, ['comments']);
      box.innerHTML = (comments.length ? comments.map((c) => '<p class="comment"><b>' + esc(c.authorName || 'Someone') + '</b>' + esc(c.text) + (String(c.authorUserId) === String(state.user && state.user.id) ? ' <button type="button" class="btn btn-ghost btn-small btn-danger" data-del-comment="' + esc(c.id) + '">Delete</button>' : '') + '</p>').join('') : '<p class="muted-small">No comments yet — yours could be the first.</p>') +
        '<form class="comment-form"><input name="text" placeholder="Add a comment…" autocomplete="off"><button class="btn btn-grad btn-small" type="submit">Post</button></form>';
      const form = $('form', box);
      form.addEventListener('submit', async (e) => { e.preventDefault(); const text = new FormData(form).get('text'); if (!String(text || '').trim()) return; try { await api(F('/comments'), { method: 'POST', body: { targetType, targetId, text } }); box.hidden = true; btn.click(); } catch (err) { toast(err.message, 'error'); } });
      $$('[data-del-comment]', box).forEach((d) => d.addEventListener('click', async () => { try { await api('/api/comments/' + encodeURIComponent(d.dataset.delComment), { method: 'DELETE' }); box.hidden = true; btn.click(); } catch (err) { toast(err.message, 'error'); } }));
    } catch (e) { box.innerHTML = '<p class="muted-small">' + esc(e.message) + '</p>'; }
  }));
}
function wireCardInteractions(root) { wireComments(root); }

/* ================= prompt answer doors ================= */
let doorSeq = 0;
function promptDoorsHTML(p, opts) {
  opts = opts || {};
  const id = 'door-' + (++doorSeq) + '-' + String(p.id).replace(/[^a-z0-9]/gi, '');
  const about = promptPersonId(p) ? personName(promptPersonId(p)) : '';
  const why = promptWhy(p);
  return '<article class="card prompt-card" data-prompt="' + esc(p.id) + '">' +
    '<div class="kicker-row"><span class="badge bpink">' + (opts.weekly ? 'Weekly One' : 'Rooney asks') + '</span>' + (about ? '<span class="chip" style="cursor:default">About ' + esc(about) + '</span>' : '') + (p.sample ? '<span class="badge bsample">Sample</span>' : '') + '</div>' +
    '<p class="obs" style="font-size:23px">' + esc(promptQuestion(p)) + '</p>' +
    (why ? '<p class="muted">' + esc(why) + '</p>' : '') +
    '<div class="answer-doors" role="group" aria-label="Answer this question">' +
    '<button type="button" class="btn btn-grad btn-small" data-door="write">Write</button>' +
    '<button type="button" class="btn btn-outline btn-small" data-door="speak">Speak</button>' +
    '<button type="button" class="btn btn-outline btn-small" data-door="photo">Photo</button>' +
    '<button type="button" class="btn btn-ghost btn-small" data-door="skip">Skip</button></div>' +
    '<div class="prompt-invite-row">' + shareBtnHTML({ scope: 'interview', targetId: p.id, objectTitle: promptQuestion(p) }, { label: 'Invite an answer' }) + '</div>' +
    '<div class="answer-box" data-answer-box hidden>' +
    '<div data-door-write hidden><label class="visually-hidden" for="' + id + '-text">Your answer</label><textarea id="' + id + '-text" data-answer-text placeholder="Write it the way you\'d tell it…"></textarea></div>' +
    '<div data-door-speak hidden><label class="field"><span>Choose a voice recording</span><input type="file" data-answer-file accept="audio/*"></label></div>' +
    '<div data-door-photo hidden><label class="field"><span>Choose a photo</span><input type="file" data-answer-file accept="image/*"></label></div>' +
    '<p class="muted-small" data-answer-note hidden></p>' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="btn btn-grad btn-small" data-answer-submit>Keep this answer</button><button type="button" class="btn btn-ghost btn-small" data-answer-cancel>Not now</button></div>' +
    '</div></article>';
}
function wirePromptDoors(root) {
  $$('[data-prompt]', root).forEach((card) => {
    if (card.dataset.wired) return; card.dataset.wired = '1';
    const pid = card.dataset.prompt;
    const box = $('[data-answer-box]', card);
    let file = null;
    $$('[data-door]', card).forEach((b) => b.addEventListener('click', async () => {
      const door = b.dataset.door;
      if (door === 'skip') { b.disabled = true; try { await api('/api/prompts/' + encodeURIComponent(pid) + '/skip', { method: 'POST', body: {} }); toast('Skipped — no guilt. Rooney will ask something else.'); await refreshData(); render(); } catch (e) { toast(e.message, 'error'); b.disabled = false; } return; }
      box.hidden = false;
      ['write', 'speak', 'photo'].forEach((k) => { const sec = $('[data-door-' + k + ']', card); if (sec) sec.hidden = k !== door; });
    }));
    $$('[data-answer-file]', card).forEach((inp) => inp.addEventListener('change', () => { file = inp.files[0] || null; const note = $('[data-answer-note]', card); if (file) { note.hidden = false; note.textContent = 'Attached: ' + file.name; } }));
    const cancel = $('[data-answer-cancel]', card); if (cancel) cancel.addEventListener('click', () => { box.hidden = true; });
    const submit = $('[data-answer-submit]', card);
    if (submit) submit.addEventListener('click', async () => {
      const textEl = $('[data-answer-text]', card); const text = textEl ? textEl.value.trim() : '';
      if (!text && !file) { toast('Write a little, or attach a photo or voice note — even one line is a memory kept.'); return; }
      submit.disabled = true; submit.textContent = 'Keeping…';
      try {
        let memoryId;
        if (file) { const mem = await uploadMemoryFile(file, { source: 'prompt', caption: text || '' }); memoryId = mem && (mem.id || (mem.memory && mem.memory.id)); }
        await api('/api/prompts/' + encodeURIComponent(pid) + '/answer', { method: 'POST', body: { text, memoryId } });
        toast('Kept. Rooney will weave that into the story.');
        await refreshData(); render();
      } catch (e) { toast(e.message, 'error'); submit.disabled = false; submit.textContent = 'Keep this answer'; }
    });
  });
}
async function uploadMemoryFile(file, extra) {
  extra = extra || {};
  const fd = new FormData();
  fd.append('file', file);
  fd.append('type', extra.type || (file.type.startsWith('image/') ? 'photo' : file.type.startsWith('video/') ? 'video' : file.type.startsWith('audio/') ? 'voice' : 'photo'));
  if (extra.caption) fd.append('caption', extra.caption);
  if (extra.storyText) fd.append('storyText', extra.storyText);
  if (extra.takenAt) fd.append('takenAt', extra.takenAt);
  if (extra.source) fd.append('source', extra.source);
  if (extra.importJobId) fd.append('importJobId', extra.importJobId);
  if (extra.peopleIds && extra.peopleIds.length) fd.append('peopleIds', JSON.stringify(extra.peopleIds));
  const res = await api(F('/memories'), { method: 'POST', body: fd });
  return res && (res.memory || res);
}
function peopleCheckboxes(selected, name) {
  name = name || 'people';
  if (!state.people.length) return '<p class="muted-small">No people yet — add them in Family first.</p>';
  return state.people.map((p) => '<label class="checkline"><input type="checkbox" name="' + esc(name) + '" value="' + esc(p.id) + '"' + ((selected || []).map(String).includes(String(p.id)) ? ' checked' : '') + '> ' + esc(p.name) + (p.followed ? ' <span class="muted-small">(Rooney follows ' + pronoun(p).subj + ' story)</span>' : '') + '</label>').join('');
}

/* ================= Phase 2.6 — IG post anatomy (Today feed ONLY) =================
   The feed renders as Instagram-style posts: slim header, media block,
   compact action row, Rooney caption below. Every other view keeps the
   Phase 2.5 rendering — this section is only called from loadFeedPage,
   and all of its styles are scoped under .ig-feed / .post in styles.css.
   Presentation only: commentary strings, gates and payloads untouched. */
function igYearsAgo(dateStr) {
  if (!dateStr) return 0;
  const d = new Date(dateStr); if (isNaN(d)) return 0;
  const now = new Date();
  let y = now.getFullYear() - d.getFullYear();
  if (now < new Date(now.getFullYear(), d.getMonth(), d.getDate())) y--;
  return Math.max(0, y);
}
function igWhoFor(ids) {
  if (state.feedScope && state.feedScope !== 'all') { const n = personName(state.feedScope); if (n) return n; }
  const names = []; (ids || []).forEach((id) => { const n = personName(id); if (n && !names.includes(n)) names.push(n); });
  return names.length ? names.join(', ') : 'Everyone';
}
function igPeopleOfMems(mems) { const ids = []; (mems || []).forEach((m) => (m.peopleIds || []).forEach((id) => { if (!ids.includes(id)) ids.push(id); })); return ids; }
function igLatestDate(mems, fallback) { let best = fallback || null; (mems || []).forEach((m) => { if (m.takenAt && (!best || new Date(m.takenAt) > new Date(best))) best = m.takenAt; }); return best; }
function igMemsFromIds(ids, limit) { const seen = {}; const out = []; (ids || []).forEach((id) => { if (seen[String(id)]) return; seen[String(id)] = 1; const m = memById(id); if (m) out.push(m); }); return out.slice(0, limit || 10); }
function igHeaderHTML(who, dateStr, sample) {
  return '<div class="post-head"><span class="post-who">' + esc(who || 'Everyone') + '</span><span class="post-head-right">' + (sample ? '<span class="post-sample">Sample</span>' : '') + (dateStr ? '<span class="post-my">' + esc(monthYear(dateStr)) + '</span>' : '') + '</span></div>';
}
function igPushText(arr, txt) {
  const t = String(txt || '').trim(); if (!t) return;
  const norm = t.toLowerCase();
  for (const x of arr) { const xn = x.toLowerCase(); if (xn === norm || xn.includes(norm) || norm.includes(xn)) return; }
  arr.push(t);
}
/* v13b caption composition — ONE bold lead per post, never two sources
   stacked: Rooney-built posts lead with their TITLE (the old standing
   "Rooney" author prefix in front of a title that names people read as
   'Rooney Milo & Rooney, together'). Raw posts lead with the "Rooney"
   attribution (opts.author) only when Rooney actually left a note —
   a raw post has no title to collide with. The basedOn trace line
   ("From your records: its thread · the moments themselves · people
   recorded") is system narration and no longer renders in the feed;
   Rooney-built posts carry a plain "Made by Rooney · N moments" tag
   instead. The trace survives on detail surfaces via commentaryHTML. */
function igCaptionHTML(opts) {
  const c = opts.commentaryArgs ? commentaryOf.apply(null, opts.commentaryArgs) : null;
  const texts = []; (opts.texts || []).forEach((t) => igPushText(texts, t));
  if (c && c.text) igPushText(texts, c.text);
  let h = '<div class="post-caption">';
  if (opts.madeBy === 'rooney') {
    const n = opts.momentCount || 0;
    h += '<p class="post-maker">Made by Rooney' + (n > 0 ? ' · ' + n + ' moment' + (n === 1 ? '' : 's') : '') + '</p>';
  }
  if (texts.length || opts.title) {
    const lead = opts.title || (opts.author && texts.length ? opts.author : '');
    const full = ((lead ? lead + ' ' : '') + texts.join(' ')).trim();
    const showMore = full.length > 150;
    h += '<div class="post-cap-wrap"><p class="post-cap-text">' +
      (opts.title ? '<strong class="post-cap-title">' + esc(opts.title) + '</strong>' : (lead ? '<strong class="post-author">' + esc(lead) + '</strong>' : '')) +
      (texts.length ? (lead ? (opts.title ? ' — ' : ' ') : '') + esc(texts.join(' ')) : '') + '</p>' +
      (showMore ? '<button type="button" class="post-more" data-cap-more aria-expanded="false">… more</button>' : '') + '</div>';
  }
  if (opts.family) h += '<p class="post-family-line">' + esc(opts.family) + '</p>';
  if (opts.dateStr) { const yrs = igYearsAgo(opts.dateStr); h += '<p class="post-date">' + esc(fmtDay(opts.dateStr)) + (yrs >= 1 ? ' · ' + yrs + ' year' + (yrs === 1 ? '' : 's') + ' ago' : '') + '</p>'; }
  return h + '</div>';
}
function igActionsHTML(targetType, targetId, reactions, commentCount, shareHref, shareLabel, shareSpec) {
  let inner = '';
  if (targetType) inner += reactionsHTML(targetType, targetId, reactions, { compact: true }) + commentsHTML(targetType, targetId, commentCount || 0, { compact: true });
  let h = '<div class="post-actions"><div class="post-actions-left">' + inner + '</div>';
  if (shareSpec) h += shareBtnHTML(shareSpec, { className: 'post-share-btn share-btn', label: 'Share' });
  if (shareHref) h += '<a class="post-share" href="' + shareHref + '" aria-label="' + esc(shareLabel || 'Open') + '">' + igIconShare() + '</a>';
  return h + '</div>';
}
function igFrameForMem(m) {
  if (m.type === 'photo') { const s = visualSource(m); return s ? '<img src="' + esc(s) + '" alt="' + esc(m.caption || '') + '" loading="lazy" data-natural>' : ''; }
  if (m.type === 'video') { const p = m.poster || m.posterRef; if (p) return '<img src="' + esc(p) + '" alt="' + esc(m.caption || '') + '" loading="lazy" data-natural>'; const s = mediaSrc(m); return s ? '<video src="' + esc(s) + '" preload="metadata" muted playsinline></video>' : ''; }
  if (m.type === 'writing') { const first = String(m.caption || m.storyText || '').split(/\r?\n/).map((x) => x.trim()).filter(Boolean)[0] || 'A piece of writing'; return '<div class="post-text-frame post-text-frame-sm"><p class="post-text-serif">' + esc(first) + '</p></div>'; }
  if (m.type === 'voice') return '<div class="post-text-frame post-text-frame-sm"><span class="post-micro">Voice note</span><p class="post-text-serif">' + esc(m.caption || 'A voice note') + '</p></div>';
  return '<div class="post-text-frame post-text-frame-sm"><p class="post-text-serif">' + esc(m.caption || m.type || 'A moment') + '</p></div>';
}
function igCarouselHTML(mems, href, fallbackTitle) {
  const raw = (mems || []).map((m) => ({ m, html: igFrameForMem(m) })).filter((f) => f.html);
  /* Visual moments lead the carousel (stable order otherwise): a thread
     whose first evidence happens to be a writing shouldn't open on a
     near-empty text frame when it holds real photos. */
  const frames = raw.filter((f) => f.html.indexOf('<div') !== 0).concat(raw.filter((f) => f.html.indexOf('<div') === 0));
  if (!frames.length) {
    if (!fallbackTitle) return '';
    const single = '<div class="post-media"><div class="post-text-frame"><p class="post-text-serif">' + esc(fallbackTitle) + '</p></div></div>';
    return href ? '<a class="post-media-link" href="' + href + '">' + single + '</a>' : single;
  }
  if (frames.length === 1) {
    const single = '<div class="post-media" data-clamp-media>' + frames[0].html + '</div>';
    return href ? '<a class="post-media-link" href="' + href + '">' + single + '</a>' : single;
  }
  const slides = frames.map((f) => href ? '<a class="post-slide" href="' + href + '" data-clamp-slide>' + f.html + '</a>' : '<div class="post-slide" data-clamp-slide>' + f.html + '</div>').join('');
  const dots = frames.map((_, i) => '<i' + (i === 0 ? ' class="on"' : '') + '></i>').join('');
  return '<div class="post-carousel" data-carousel><div class="post-track">' + slides + '</div><div class="post-dots" data-dots aria-hidden="true">' + dots + '</div></div>';
}
/* Moments rework (2026-10-30, Jeff: 'exactly like instagram — full width
   images and videos and caption below — thats it'): the feed no longer
   emits carousels. Every post carries ONE media item — the memory set's
   strongest visual (a photo first, then a video's poster frame). The
   rest of a set lives in Story / the thread detail, one tap away via
   the media link. A video as the chosen item renders as a real <video>
   that plays INLINE in the feed (never wrapped in a link). */
function igSingleMediaHTML(mems, href, fallbackTitle) {
  const list = mems || [];
  const visuals = list.filter((m) => visualSource(m));
  const pick = visuals.find((m) => m.type === 'photo') || visuals[0] || null;
  if (!pick) {
    const framed = list.map((m) => ({ m, html: igFrameForMem(m) })).find((f) => f.html);
    if (framed) {
      const single = '<div class="post-media" data-clamp-media>' + framed.html + '</div>';
      return href ? '<a class="post-media-link" href="' + href + '">' + single + '</a>' : single;
    }
    if (!fallbackTitle) return '';
    const single = '<div class="post-media"><div class="post-text-frame"><p class="post-text-serif">' + esc(fallbackTitle) + '</p></div></div>';
    return href ? '<a class="post-media-link" href="' + href + '">' + single + '</a>' : single;
  }
  if (pick.type === 'video') {
    const src = mediaSrc(pick); const poster = pick.poster || pick.posterRef || '';
    const v = '<video controls playsinline preload="metadata"' + (poster ? ' poster="' + esc(poster) + '"' : '') + (src ? ' src="' + esc(src) + '"' : '') + '></video>';
    return '<div class="post-media" data-clamp-media>' + v + '</div>';
  }
  const single = '<div class="post-media" data-clamp-media><img src="' + esc(visualSource(pick)) + '" alt="' + esc(pick.caption || '') + '" loading="lazy" data-natural></div>';
  return href ? '<a class="post-media-link" href="' + href + '">' + single + '</a>' : single;
}
function igFeedCardHTML(card) {
  const k = card.kind;
  if (k === 'media') {
    const m = card.memory || {};
    const who = igWhoFor(m.peopleIds);
    if (m.type === 'writing') {
      const raw = String(m.storyText || ''); const cap = String(m.caption || '');
      let title = '', body = '';
      if (cap && raw && cap !== raw) { title = cap; body = raw; }
      else { const lines = String(raw || cap).split(/\r?\n/).map((s) => s.trim()).filter(Boolean); title = lines[0] || ''; body = lines.slice(1).join('\n'); }
      return '<article class="post" data-kind="writing">' + igHeaderHTML(who, m.takenAt, m.sample) +
        '<div class="post-media"><div class="post-text-frame"><p class="post-text-serif">' + esc(title) + '</p></div></div>' +
        igActionsHTML('memory', m.id, m.reactions, m.commentCount, '', '') +
        igCaptionHTML({ texts: [], commentaryArgs: [card, m], author: 'Rooney', family: body, dateStr: m.takenAt }) + '</article>';
    }
    if (m.type === 'voice') {
      return '<article class="post" data-kind="voice">' + igHeaderHTML(who, m.takenAt, m.sample) +
        '<div class="post-voice-frame">' + mediaHTML(m) + '</div>' +
        igActionsHTML('memory', m.id, m.reactions, m.commentCount, '', '') +
        igCaptionHTML({ texts: [], commentaryArgs: [card, m], author: 'Rooney', family: '', dateStr: m.takenAt }) + '</article>';
    }
    return '<article class="post" data-kind="' + esc(m.type || 'media') + '">' + igHeaderHTML(who, m.takenAt, m.sample) +
      '<div class="post-media" data-clamp-media>' + mediaHTML(m) + '</div>' +
      igActionsHTML('memory', m.id, m.reactions, m.commentCount, '', '') +
      igCaptionHTML({ texts: [], commentaryArgs: [card, m], author: 'Rooney', family: m.caption || '', dateStr: m.takenAt }) + '</article>';
  }
  if (k === 'chapter') {
    const ch = card.chapter || {}; const mems = chapterMemories(ch);
    const href = '#/story/' + encodeURIComponent(ch.id);
    let media = igSingleMediaHTML(mems, href, ch.title || 'Untitled chapter');
    if (!mems.length && typeof card.thumb === 'string' && card.thumb) media = '<a class="post-media-link" href="' + href + '"><div class="post-media" data-clamp-media><img src="' + esc(card.thumb) + '" alt="" loading="lazy" data-natural></div></a>';
    const dateStr = ch.endDate || ch.startDate || igLatestDate(mems);
    return '<article class="post" data-kind="chapter">' + igHeaderHTML(igWhoFor(igPeopleOfMems(mems)), dateStr, ch.sample) + media +
      igActionsHTML('chapter', ch.id, ch.reactions, ch.commentCount, href, 'Open this chapter', { scope: 'chapter', targetId: ch.id, objectTitle: ch.title || 'Untitled chapter' }) +
      igCaptionHTML({ title: ch.title || 'Untitled chapter', texts: [ch.summary || ''], commentaryArgs: [card, ch], madeBy: 'rooney', momentCount: (ch.memoryIds || []).length || mems.length, dateStr }) + '</article>';
  }
  if (k === 'thread' || k === 'growth') {
    const t = card.thread || {}; const mems = igMemsFromIds(t.memoryIds, 10);
    const href = '#/thread/' + encodeURIComponent(t.id);
    const dateStr = igLatestDate(mems);
    const texts = [];
    if (k === 'growth') { const n = card.newCount || t.growthCount || 0; if (n) texts.push(n + ' new moment' + (n === 1 ? '' : 's') + ' joined this thread.'); }
    texts.push(t.observation || '');
    return '<article class="post" data-kind="' + k + '">' + igHeaderHTML(igWhoFor(igPeopleOfMems(mems)), dateStr, t.sample) +
      igSingleMediaHTML(mems, href, t.title || 'A thread') +
      igActionsHTML('thread', t.id, t.reactions, t.commentCount, href, 'Open this thread', { scope: 'thread', targetId: t.id, objectTitle: t.title || 'A thread' }) +
      igCaptionHTML({ title: t.title || 'A thread', texts, commentaryArgs: [card, t], madeBy: 'rooney', momentCount: (t.memoryIds || []).length || mems.length, dateStr }) + '</article>';
  }
  if (k === 'proposal') {
    const t = card.thread || {}; const mems = igMemsFromIds(t.memoryIds, 10);
    const href = '#/thread/' + encodeURIComponent(t.id);
    const dateStr = igLatestDate(mems);
    let extra = '';
    if (t.requiresFollowPersonId) { const p = personById(t.requiresFollowPersonId); extra = '<div class="post-actions"><div class="post-follow-btns"><span class="post-note-line">Follow ' + esc(p ? firstName(p.name) : 'their') + "'s story to keep this going.</span>" + '<button type="button" class="btn btn-grad btn-small" data-requires-follow="' + esc(t.requiresFollowPersonId) + '">Follow ' + esc(p ? firstName(p.name) : 'their') + "'s story</button></div>" + '<a class="post-share" href="' + href + '" aria-label="Open this thread">' + igIconShare() + '</a></div>'; }
    else extra = '<div class="post-actions"><div class="post-follow-btns"><button type="button" class="btn btn-grad btn-small" data-follow-thread="' + esc(t.id) + '">Follow</button><button type="button" class="btn btn-outline btn-small" data-dismiss-thread="' + esc(t.id) + '">Not for me</button></div>' + '<a class="post-share" href="' + href + '" aria-label="Open this thread">' + igIconShare() + '</a></div>';
    return '<article class="post" data-kind="proposal">' + igHeaderHTML(igWhoFor(igPeopleOfMems(mems)), dateStr, t.sample) +
      igSingleMediaHTML(mems, href, t.title || 'A thread') + extra +
      igCaptionHTML({ title: t.title || '', texts: [t.observation || ''], commentaryArgs: [card, t], madeBy: 'rooney', momentCount: (t.memoryIds || []).length || mems.length, dateStr }) + '</article>';
  }
  if (k === 'film') {
    const fy = card.filmYear || card.year || (card.film && card.film.year) || '';
    if (!fy) return '';
    const mems = igMemsFromIds(card.memoryIds || (card.film && card.film.memoryIds), 10);
    const href = '#/film';
    const dateStr = igLatestDate(mems);
    const title = fy + ' — the film';
    return '<article class="post" data-kind="film">' + igHeaderHTML(igWhoFor(igPeopleOfMems(mems)), dateStr, card.sample) +
      igSingleMediaHTML(mems, href, title) +
      igActionsHTML('', '', null, 0, href, 'Watch the Year Film', { scope: 'film', filmYear: Number(fy), objectTitle: title }) +
      igCaptionHTML({ title, texts: [card.line || (card.film && card.film.line) || ''], commentaryArgs: [card], madeBy: 'rooney', momentCount: (card.memoryIds || (card.film && card.film.memoryIds) || []).length || mems.length, dateStr }) + '</article>';
  }
  if (k === 'noticing') {
    const n = card.noticing || {}; const mems = igMemsFromIds(n.evidenceMemoryIds || n.memoryIds, 10);
    const dateStr = igLatestDate(mems);
    return '<article class="post" data-kind="noticing">' + igHeaderHTML(igWhoFor(igPeopleOfMems(mems)), dateStr, n.sample || mems.some((m) => m.sample)) +
      igSingleMediaHTML(mems, '', '') +
      igCaptionHTML({ title: n.title || n.text || n.summary || '', texts: [n.detail || n.body || ''], commentaryArgs: [card, n], madeBy: 'rooney', momentCount: (n.evidenceMemoryIds || n.memoryIds || []).length || mems.length, dateStr }) + '</article>';
  }
  if (k === 'hero') {
    const thread = card.thread || null; const n = card.noticing || null;
    const evIds = (thread && thread.memoryIds) || (n && (n.evidenceMemoryIds || n.memoryIds)) || card.evidenceMemoryIds || [];
    const mems = igMemsFromIds(evIds, 10);
    const href = card.threadId ? '#/thread/' + encodeURIComponent(card.threadId) : '';
    const dateStr = igLatestDate(mems);
    return '<article class="post" data-kind="hero">' + igHeaderHTML(igWhoFor(igPeopleOfMems(mems)), dateStr, (thread && thread.sample) || (n && n.sample) || mems.some((m) => m.sample)) +
      igSingleMediaHTML(mems, href, (thread && thread.title) || '') +
      (href && thread ? igActionsHTML('thread', thread.id, thread.reactions, thread.commentCount, href, 'See the photos', { scope: 'thread', targetId: thread.id, objectTitle: thread.title || 'A thread' }) : (href ? igActionsHTML('', '', null, 0, href, 'See the photos') : '')) +
      igCaptionHTML({ title: (thread && thread.title) || '', texts: [card.observation || (thread && thread.observation) || (n && (n.title || n.text)) || ''], commentaryArgs: [card, thread, n], madeBy: 'rooney', momentCount: evIds.length || mems.length, dateStr }) + '</article>';
  }
  if (k === 'prompt') {
    if (!card.prompt) return '';
    const p = card.prompt; const weekly = isWeeklyOne(p);
    const gist = weekly ? "This week's pick" : promptQuestion(p);
    const doors = promptDoorsHTML(p, { weekly });
    const note = igCaptionHTML({ texts: [], commentaryArgs: [card], dateStr: p.createdAt });
    return '<article class="post prompt-strip-post" data-kind="prompt"><button type="button" class="prompt-strip" data-strip-toggle aria-expanded="false"><span class="strip-label">' + (weekly ? 'Weekly One' : 'Rooney asks') + '</span><span class="strip-gist">' + esc(gist) + '</span>' + (p.sample ? '<span class="post-sample">Sample</span>' : '') + '<span class="strip-go">Answer</span></button>' +
      '<div class="prompt-expand" data-strip-panel hidden>' + doors + note + '</div></article>';
  }
  return '';
}
function igClampRatio(w, h) { if (!w || !h) return 0; return Math.min(1.91, Math.max(0.8, w / h)); }
function wireIgPosts(root) {
  $$('[data-carousel]', root).forEach((car) => {
    if (car.dataset.wired) return; car.dataset.wired = '1';
    const track = $('.post-track', car); const dots = $$('[data-dots] i', car);
    if (track && dots.length) {
      let raf = 0;
      track.addEventListener('scroll', () => { if (raf) return; raf = requestAnimationFrame(() => { raf = 0; const idx = Math.max(0, Math.min(dots.length - 1, Math.round(track.scrollLeft / Math.max(1, track.clientWidth)))); dots.forEach((d, i) => d.classList.toggle('on', i === idx)); }); }, { passive: true });
    }
    const firstImg = track ? $('.post-slide img', car) : null;
    const applyRatio = () => { if (firstImg && firstImg.naturalWidth) { const r = igClampRatio(firstImg.naturalWidth, firstImg.naturalHeight); if (r) $$('[data-clamp-slide]', car).forEach((s) => { s.style.aspectRatio = String(r); }); } };
    if (firstImg) { if (firstImg.complete && firstImg.naturalWidth) applyRatio(); else firstImg.addEventListener('load', applyRatio, { once: true }); }
  });
  $$('[data-clamp-media] img, [data-clamp-media] video', root).forEach((el) => {
    if (el.dataset.clamped) return; el.dataset.clamped = '1';
    const applyImg = () => { const r = igClampRatio(el.naturalWidth, el.naturalHeight); if (r) el.style.aspectRatio = String(r); };
    const applyVid = () => { const r = igClampRatio(el.videoWidth, el.videoHeight); if (r) el.style.aspectRatio = String(r); };
    if (el.tagName === 'IMG') { if (el.complete && el.naturalWidth) applyImg(); else el.addEventListener('load', applyImg, { once: true }); }
    else { if (el.videoWidth) applyVid(); else el.addEventListener('loadedmetadata', applyVid, { once: true }); }
  });
  $$('[data-cap-more]', root).forEach((b) => { if (b.dataset.wired) return; b.dataset.wired = '1'; b.addEventListener('click', () => { const cap = b.closest('.post-caption'); if (cap) cap.classList.add('expanded'); b.hidden = true; b.setAttribute('aria-expanded', 'true'); }); });
  $$('[data-strip-toggle]', root).forEach((b) => { if (b.dataset.wired) return; b.dataset.wired = '1'; b.addEventListener('click', () => { const panel = b.parentElement ? b.parentElement.querySelector('[data-strip-panel]') : null; if (!panel) return; panel.hidden = !panel.hidden; b.setAttribute('aria-expanded', String(!panel.hidden)); }); });
  if ('IntersectionObserver' in window) $$('.post', root).forEach((p) => {
    if (p.dataset.seen) return; p.dataset.seen = '1';
    if (p.getBoundingClientRect().top > window.innerHeight) {
      p.classList.add('pre-enter');
      const io = new IntersectionObserver((es) => { es.forEach((e) => { if (e.isIntersecting) { p.classList.remove('pre-enter'); io.disconnect(); } }); }, { rootMargin: '240px' });
      io.observe(p);
    }
  });
}

/* ================= TODAY (feed) ================= */
function evidenceThumbs(memoryIds, limit) {
  const mems = (memoryIds || []).map((id) => state.memories.find((m) => String(m.id) === String(id))).filter((m) => m && m.type === 'photo' && mediaSrc(m)).slice(0, limit || 4);
  if (!mems.length) return '';
  return '<div class="evidence-grid">' + mems.map((m) => '<img src="' + esc(mediaSrc(m)) + '" alt="' + esc(m.caption || 'Moment') + '" loading="lazy">').join('') + '</div>';
}
function yearStripHTML(memoryIds) {
  const byYear = {};
  (memoryIds || []).forEach((id) => { const m = state.memories.find((x) => String(x.id) === String(id)); if (m && m.type === 'photo' && mediaSrc(m)) { const y = yearOf(m.takenAt); if (y && !byYear[y]) byYear[y] = m; } });
  const years = Object.keys(byYear).sort().slice(-5);
  if (years.length < 2) return '';
  return '<div class="year-strip">' + years.map((y) => '<figure><img src="' + esc(mediaSrc(byYear[y])) + '" alt="" loading="lazy"><figcaption>' + esc(y) + '</figcaption></figure>').join('') + '</div>';
}
function threadCardInner(t, badgeLabel, opts) {
  opts = opts || {};
  const href = '#/thread/' + encodeURIComponent(t.id);
  const visuals = visualMemsFromIds(t.memoryIds, 4);
  const cover = coverHTML(visuals, '', href, visuals.length ? (t.title || 'A thread') : '', visuals.length ? threadEvidenceLine(t) : '');
  return cover +
    '<div class="kicker-row">' + (badgeLabel ? '<span class="badge bpink">' + esc(badgeLabel) + '</span>' : '') + (opts.growthLabel ? '<span class="badge growth-badge">' + esc(opts.growthLabel) + '</span>' : (t.growthCount ? '<span class="badge growth-badge">' + t.growthCount + ' new</span>' : '')) + '<span class="muted-small">' + esc(threadEvidenceLine(t)) + '</span>' + (t.sample ? '<span class="badge bsample">Sample</span>' : '') + '</div>' +
    (visuals.length ? '' : '<h3 class="dsp" style="font-size:24px;margin:0 0 6px">' + esc(t.title || 'A thread') + '</h3>') +
    (t.observation ? '<p class="obs" style="font-size:21px">“' + esc(t.observation) + '”</p>' : '') +
    commentaryHTML(opts.card || null, t) +
    '<p style="margin:10px 0 0;display:flex;gap:10px;align-items:center;flex-wrap:wrap"><a href="' + href + '">See the thread lined up →</a>' + shareBtnHTML({ scope: 'thread', targetId: t.id, objectTitle: t.title || 'A thread' }, { className: 'btn btn-ghost btn-small share-btn' }) + '</p>';
}
function writingBodyHTML(m) {
  /* A writing memory as a finished story card: when the family's words run
     to more than one line, the first line stands as the title and the rest
     is the body — the words themselves are never altered. */
  const text = String(m.storyText || m.caption || '');
  const lines = text.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  if (lines.length > 1) return '<h3 class="writing-title">' + esc(lines[0]) + '</h3><p class="body">' + esc(lines.slice(1).join('\n')) + '</p>';
  return '<p class="body">' + esc(text) + '</p>';
}
function feedCardHTML(card) {
  const k = card.kind;
  if (k === 'hero') {
    const obs = card.observation || (card.thread && card.thread.observation) || (card.noticing && (card.noticing.title || card.noticing.text)) || '';
    const evIds = (card.thread && card.thread.memoryIds) || (card.noticing && card.noticing.evidenceMemoryIds) || card.evidenceMemoryIds || (card.noticing && card.noticing.memoryIds) || [];
    const ev = card.evidence || (card.thread && card.thread.evidence) || null;
    const evLine = ev && ev.count != null ? num(ev.count) + ' moments' + (ev.fromYear ? ' · ' + ev.fromYear + (ev.toYear && ev.toYear !== ev.fromYear ? ' — ' + ev.toYear : '') : '') : '';
    const threadId = card.threadId || (card.thread && card.thread.id);
    const visuals = visualMemsFromIds(evIds, 4);
    /* Observation sits BELOW the big visual — it is long serif text and an
       overlay would hurt readability; the evidence line stays visible. */
    return '<article class="card feed-card media-card">' + coverHTML(visuals, '', threadId ? '#/thread/' + encodeURIComponent(threadId) : '', '', '') +
      '<div class="kicker-row"><span class="badge bpink">Rooney noticed</span>' + (evLine ? '<span class="muted-small">' + esc(evLine) + '</span>' : '') + '</div>' +
      '<p class="obs">' + esc(obs) + '</p>' + commentaryHTML(card, card.thread, card.noticing) +
      (threadId ? '<a class="btn btn-grad" href="#/thread/' + encodeURIComponent(threadId) + '">See the photos</a>' : '') + '</article>';
  }
  if (k === 'growth') { const t = card.thread || {}; return '<article class="card feed-card media-card">' + threadCardInner(t, '', { growthLabel: (card.newCount || t.growthCount || '') + ' new moments joined this thread', card }) + '</article>'; }
  if (k === 'prompt') {
    if (!card.prompt) return '';
    const html = promptDoorsHTML(card.prompt, { weekly: isWeeklyOne(card.prompt) });
    const note = commentaryHTML(card);
    return note ? html.replace(/<\/article>$/, note + '</article>') : html;
  }
  if (k === 'chapter') {
    const ch = card.chapter || {}; const mems = chapterMemories(ch);
    const thumbSrc = typeof card.thumb === 'string' ? card.thumb : (card.thumb && (card.thumb.src || card.thumb.poster)) || (ch.thumb && (typeof ch.thumb === 'string' ? ch.thumb : (ch.thumb.src || ch.thumb.poster))) || '';
    const visuals = mems.filter((m) => visualSource(m));
    const metaLine = [chapterRange(ch), mems.length ? mems.length + ' moment' + (mems.length === 1 ? '' : 's') : ''].filter(Boolean).join(' · ');
    /* Whole cover links to the story; title rides a gradient scrim at the
       bottom of the cover, range + count sit directly under it. With no
       usable photo the card falls back to a plain title below. */
    const cover = coverHTML(visuals, thumbSrc, '#/story/' + encodeURIComponent(ch.id), visuals.length || thumbSrc ? (ch.title || 'Untitled chapter') : '', visuals.length || thumbSrc ? metaLine : '');
    return '<article class="card feed-card media-card">' + cover +
      '<div class="kicker-row"><span class="badge bsoft">Chapter</span><span class="muted-small">' + esc(metaLine) + '</span>' + (ch.sample ? '<span class="badge bsample">Sample</span>' : '') + '</div>' +
      (cover ? '' : '<h3 class="dsp" style="font-size:25px;margin:0 0 6px">' + esc(ch.title || 'Untitled chapter') + '</h3>') +
      (ch.summary ? '<p class="muted">' + esc(ch.summary) + '</p>' : '') +
      commentaryHTML(card, ch) +
      '<p style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><a href="#/story/' + encodeURIComponent(ch.id) + '">Read the chapter →</a>' + shareBtnHTML({ scope: 'chapter', targetId: ch.id, objectTitle: ch.title || 'Untitled chapter' }, { className: 'btn btn-ghost btn-small share-btn' }) + '</p>' +
      reactionsHTML('chapter', ch.id, ch.reactions) + commentsHTML('chapter', ch.id, ch.commentCount || 0) + '</article>';
  }
  if (k === 'thread') { const t = card.thread || {}; return '<article class="card feed-card media-card">' + threadCardInner(t, 'Thread', { card }) + reactionsHTML('thread', t.id, t.reactions) + commentsHTML('thread', t.id, t.commentCount || 0) + '</article>'; }
  if (k === 'proposal') {
    const t = card.thread || {};
    const visuals = visualMemsFromIds(t.memoryIds, 4);
    const cover = coverHTML(visuals, '', '#/thread/' + encodeURIComponent(t.id), visuals.length ? (t.title || '') : '', visuals.length ? threadEvidenceLine(t) : '');
    if (t.requiresFollowPersonId) { const p = personById(t.requiresFollowPersonId); return '<article class="card feed-card media-card">' + cover + '<div class="kicker-row"><span class="badge bpink">Rooney is watching</span><span class="muted-small">' + esc(threadEvidenceLine(t)) + '</span></div><p class="obs" style="font-size:22px">“' + esc(t.observation || t.title || '') + '”</p>' + commentaryHTML(card, t) + '<p class="muted">Follow ' + esc(p ? firstName(p.name) : 'their') + "'s story to keep this going.</p>" + '<button type="button" class="btn btn-grad btn-small" data-requires-follow="' + esc(t.requiresFollowPersonId) + '">Follow ' + esc(p ? firstName(p.name) : 'their') + "'s story</button></article>"; }
    return '<article class="card feed-card media-card">' + cover + '<div class="kicker-row"><span class="badge bpink">Rooney is watching</span><span class="muted-small">' + esc(threadEvidenceLine(t)) + '</span></div>' +
      '<p class="obs" style="font-size:22px">“' + esc(t.observation || t.title || '') + '”</p>' + commentaryHTML(card, t) +
      '<div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="btn btn-grad btn-small" data-follow-thread="' + esc(t.id) + '">Follow</button><button type="button" class="btn btn-outline btn-small" data-dismiss-thread="' + esc(t.id) + '">Not for me</button></div></article>';
  }
  if (k === 'noticing') {
    const n = card.noticing || {};
    const visuals = visualMemsFromIds(n.evidenceMemoryIds || n.memoryIds, 4);
    return '<article class="card feed-card media-card">' + coverHTML(visuals, '', '', '', '') + '<div class="kicker-row"><span class="badge bpink">Rooney noticed</span></div><p class="obs" style="font-size:22px">' + esc(n.title || n.text || n.summary || '') + '</p>' + (n.detail || n.body ? '<p class="muted">' + esc(n.detail || n.body) + '</p>' : '') + commentaryHTML(card, n) + '</article>';
  }
  if (k === 'media') {
    const m = card.memory || {};
    const otd = isOnThisDay(m);
    if (m.type === 'writing') return '<article class="card feed-card writing-card"><div class="kicker-row">' + (otd ? '<span class="on-this-day">On this day</span>' : '<span class="badge bsoft">Writing</span>') + '<span class="muted-small">' + esc(fmtDay(m.takenAt)) + '</span>' + (m.sample ? '<span class="badge bsample">Sample</span>' : '') + '</div><div class="writing-panel">' + writingBodyHTML(m) + '</div>' + (m.caption && m.storyText && m.caption !== m.storyText ? '<p class="muted-small">' + esc(m.caption) + '</p>' : '') + commentaryHTML(card, m) + reactionsHTML('memory', m.id, m.reactions) + commentsHTML('memory', m.id, m.commentCount || 0) + '</article>';
    const isVoice = m.type === 'voice';
    return '<article class="card feed-card media-card">' + (m.type === 'photo' || m.type === 'video' ? '<div class="media-full">' + mediaHTML(m) + '</div>' : mediaHTML(m)) +
      '<div class="kicker-row">' + (otd ? '<span class="on-this-day">On this day · ' + esc(yearOf(m.takenAt)) + '</span>' : '') + '<span class="muted-small">' + esc(fmtDay(m.takenAt)) + ((m.peopleIds || []).length ? ' · ' + esc(m.peopleIds.map(personName).filter(Boolean).join(', ')) : '') + '</span>' + (m.sample ? '<span class="badge bsample">Sample</span>' : '') + '</div>' +
      /* The family's own caption stays plain and unlabelled-as-Rooney; for
         voice the caption is the voice card's own title, so it isn't
         repeated here. Rooney's words live only in the note block below. */
      (!isVoice && m.caption ? '<p class="family-caption" style="margin:0 0 4px">' + esc(m.caption) + '</p>' : '') +
      commentaryHTML(card, m) +
      reactionsHTML('memory', m.id, m.reactions) + commentsHTML('memory', m.id, m.commentCount || 0) + '</article>';
  }
  return '';
}
function wireFeedCards(root) {
  wirePromptDoors(root); wireComments(root);
  $$('[data-reactions]', root).forEach((wrap) => { const parts = (wrap.getAttribute('data-reactions') || '').split(':'); wireReactions(wrap, parts[0], parts.slice(1).join(':')); });
  $$('[data-follow-thread]', root).forEach((b) => b.addEventListener('click', async () => { b.disabled = true; try { await api(F('/threads/' + encodeURIComponent(b.dataset.followThread) + '/follow'), { method: 'POST', body: {} }); toast('Following — Rooney will keep pulling this thread.'); await refreshData(); render(); } catch (e) { if (e.data && e.data.code === 'thread_limit') { closeSheet(); openPlanSheet(); } else toast(e.message, 'error'); b.disabled = false; } }));
  $$('[data-dismiss-thread]', root).forEach((b) => b.addEventListener('click', async () => { b.disabled = true; try { await api(F('/threads/' + encodeURIComponent(b.dataset.dismissThread) + '/dismiss'), { method: 'POST', body: {} }); await refreshData(); render(); } catch (e) { toast(e.message, 'error'); b.disabled = false; } }));
  $$('[data-requires-follow]', root).forEach((b) => b.addEventListener('click', () => { const p = personById(b.dataset.requiresFollow); openStorylineSheet(p); }));
  wireIgPosts(root);
}
/* ================= TODAY = THE DAILY COVER (Phase 3) =================
   Cover-moment selection (deterministic choice, documented here): the
   hero card's moments are resolved via state.memories and ordered
   PHOTOS first (thread/record order within each type), then videos.
   The cover is the first photo, else the first video. The strip shows
   up to 3 more media moments in that same order. The "+N" tile counts
   only media moments that actually resolved (resolved media minus
   shown) — never the raw evidence count, which can include writing/
   voice moments and ids that no longer resolve. If the hero carries no
   usable photo/video moment, the chain falls to the latest chapter,
   then the latest photo memory, then the shoebox empty state. */
function mediaMomentsInOrder(list) {
  const photos = list.filter((m) => m.type === 'photo' && mediaSrc(m));
  const videos = list.filter((m) => m.type === 'video' && (m.poster || mediaSrc(m)));
  return photos.concat(videos);
}
function threadCoverMoments(t) {
  return mediaMomentsInOrder((t.memoryIds || []).map((id) => memById(id)).filter(Boolean));
}
function noticingCoverMoments(n) {
  if (!n) return [];
  const ids = n.evidenceMemoryIds || n.memoryIds || (n.memoryId ? [n.memoryId] : []);
  return mediaMomentsInOrder(ids.map((id) => memById(id)).filter(Boolean));
}
function destinationForMemory(m) {
  const ch = state.chapters.find((c) => (c.memoryIds || []).map(String).includes(String(m.id)));
  if (ch) return '#/story/' + encodeURIComponent(ch.id);
  const th = state.threads.find((t) => (t.memoryIds || []).map(String).includes(String(m.id)));
  if (th) return '#/thread/' + encodeURIComponent(th.id);
  return '';
}
function todayCoverMediaHTML(m) {
  if (m.type === 'video' && !m.poster) return '<video class="today-cover-img" src="' + esc(mediaSrc(m)) + '" preload="metadata" muted playsinline></video>';
  const src = m.type === 'video' ? m.poster : mediaSrc(m);
  return '<img class="today-cover-img" src="' + esc(src) + '" alt="' + esc(m.caption || '') + '">';
}
function todayCoverTileHTML(m) {
  if (m.type === 'video' && !m.poster) return '<span class="today-cover-tile today-cover-tile-video"><span class="today-cover-play">▶</span></span>';
  const src = m.type === 'video' ? (m.poster || mediaSrc(m)) : mediaSrc(m);
  return '<span class="today-cover-tile">' + (src ? '<img src="' + esc(src) + '" alt="" loading="lazy">' : '') + (m.type === 'video' ? '<span class="today-cover-play">▶</span>' : '') + '</span>';
}
function todayCoverHTML(o) {
  const strip = (o.strip || []).map(todayCoverTileHTML).join('') + (o.remaining > 0 ? '<span class="today-cover-tile today-cover-plus">+' + o.remaining + '</span>' : '');
  const inner = todayCoverMediaHTML(o.cover) + '<span class="today-cover-label">Today</span>' +
    (o.sample ? '<span class="today-cover-sample">Sample</span>' : '') +
    '<div class="today-cover-text"><p class="today-cover-line">' + esc(o.line) + '</p>' +
    (o.cap ? '<p class="today-cover-cap">' + esc(o.cap) + '</p>' : '') +
    '<p class="today-cover-date">' + esc(o.dateLine) + '</p>' +
    '<div class="today-cover-strip">' + strip + '</div></div>';
  if (o.href) return '<a class="today-cover" href="' + o.href + '">' + inner + '</a>';
  return '<div class="today-cover">' + inner + '</div>';
}
/* Fit the Today cover to the ACTUAL available region on phones: the
   bottom nav is fixed, and above the cover sit the mobile header and
   (for sample families) the sample banner — whose height varies with
   text wrapping, so no CSS calc can be right in both banner states.
   The cover's height is therefore set from measured rects: its bottom
   lands exactly on the nav's top edge, banner visible or hidden.
   Desktop is untouched — the bottom nav is display:none there and
   this no-ops. The stylesheet's mobile calc() is the no-JS fallback. */
function fitTodayCover() {
  const cover = $('.today-cover'); if (!cover) return;
  const nav = $('.bottom-nav');
  /* Desktop (Phase 3C): no bottom nav, so the cover's height comes
     from the desktop panel rule, never from this measurement. Clear
     any inline height a mobile-width pass left behind, then no-op. */
  if (!nav || getComputedStyle(nav).display === 'none') { cover.style.height = ''; return; }
  const navTop = nav.getBoundingClientRect().top;
  if (!navTop) return;
  const coverDocTop = cover.getBoundingClientRect().top + window.scrollY;
  const h = Math.round(navTop - coverDocTop);
  if (h > 200) cover.style.height = h + 'px';
}
window.addEventListener('resize', () => { if (state.view === 'today') fitTodayCover(); });
async function renderToday(root) {
  root.innerHTML = '<div class="today-cover-wrap"><div class="skeleton" aria-label="Loading"></div></div>';
  const wrap = $('.today-cover-wrap', root);
  let hero = null;
  try {
    /* Same daily-hero rule as the feed: scope 'all', page 1, limit 4 —
       pickHero on the server does the daily rotation for both. */
    const res = await api(F('/feed') + '?scope=all&limit=4');
    hero = (res.cards || []).find((c) => c.kind === 'hero') || null;
  } catch (e) { hero = null; }
  const todayLine = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  if (hero) {
    const thread = hero.thread || null;
    const noticing = hero.noticing || null;
    let moments = [], line = '', cap = '', href = '';
    if (thread) {
      moments = threadCoverMoments(thread);
      line = thread.title || '';
      cap = (commentaryOf(hero, thread) || {}).text || thread.observation || '';
      href = '#/thread/' + encodeURIComponent(thread.id);
    } else if (noticing) {
      moments = noticingCoverMoments(noticing);
      line = hero.observation || noticing.title || noticing.text || '';
      cap = (commentaryOf(hero, noticing) || {}).text || noticing.detail || '';
      /* A noticing has no detail page of its own, so its cover is
         rendered without a link rather than pointing somewhere wrong. */
      href = '';
    }
    if (moments.length) {
      const cover = moments[0];
      const strip = moments.slice(1, 4);
      wrap.innerHTML = todayCoverHTML({ cover, strip, remaining: moments.length - 1 - strip.length, line, cap, dateLine: todayLine, href, sample: !!cover.sample });
      /* Share the object the cover represents: the hero's thread, its
         noticing (by type:title key), or — defensively — its chapter. */
      let todayShareSpec = null;
      if (thread) todayShareSpec = { scope: 'thread', targetId: thread.id, objectTitle: thread.title || 'A thread' };
      else if (noticing) todayShareSpec = { scope: 'noticing', noticingKey: (noticing.type || '') + ':' + (noticing.title || ''), objectTitle: noticing.title || line || 'A moment Rooney noticed' };
      else if (hero.chapter) todayShareSpec = { scope: 'chapter', targetId: hero.chapter.id, objectTitle: hero.chapter.title || 'Untitled chapter' };
      if (todayShareSpec) wrap.insertAdjacentHTML('beforeend', shareBtnHTML(todayShareSpec, { className: 'today-share-btn share-btn', label: 'Share' }));
      fitTodayCover();
      return;
    }
    /* Hero exists but carries no usable photo/video moment — fall
       through to the chapter/photo chain rather than a text-only
       "cover" pretending to be the day's moment. */
  }
  /* Fallback 1: the latest chapter (last in the Your-story list order). */
  const latestChapter = state.chapters.length ? state.chapters[state.chapters.length - 1] : null;
  if (latestChapter) {
    const ordered = mediaMomentsInOrder(chapterMemories(latestChapter));
    if (ordered.length) {
      const cover = ordered[0];
      const strip = ordered.slice(1, 4);
      wrap.innerHTML = todayCoverHTML({ cover, strip, remaining: ordered.length - 1 - strip.length, line: latestChapter.title || 'Untitled chapter', cap: latestChapter.summary || '', dateLine: chapterRange(latestChapter) || todayLine, href: '#/story/' + encodeURIComponent(latestChapter.id), sample: !!cover.sample });
      wrap.insertAdjacentHTML('beforeend', shareBtnHTML({ scope: 'chapter', targetId: latestChapter.id, objectTitle: latestChapter.title || 'Untitled chapter' }, { className: 'today-share-btn share-btn', label: 'Share' }));
      fitTodayCover();
      return;
    }
  }
  /* Fallback 2: the latest photo memory, lined with its own caption —
     the family's own words. */
  const allMedia = mediaMomentsInOrder(state.memories).slice().sort((a, b) => new Date(b.takenAt || b.createdAt || 0) - new Date(a.takenAt || a.createdAt || 0));
  const coverPhoto = allMedia.find((m) => m.type === 'photo') || null;
  if (coverPhoto) {
    const strip = allMedia.filter((m) => String(m.id) !== String(coverPhoto.id)).slice(0, 3);
    wrap.innerHTML = todayCoverHTML({ cover: coverPhoto, strip, remaining: Math.max(0, allMedia.length - 1 - strip.length), line: coverPhoto.caption || 'A moment kept', cap: '', dateLine: fmtDay(coverPhoto.takenAt) || todayLine, href: destinationForMemory(coverPhoto), sample: !!coverPhoto.sample });
    fitTodayCover();
    return;
  }
  /* Fallback 3: the existing shoebox empty state. */
  wrap.innerHTML = '<div class="empty"><img src="assets/mark-dark.png" class="empty-mark" alt=""><h3>Open the shoebox</h3><p>Your camera roll already holds the story. Bring in what you already have and Rooney will start telling it back — chapters, threads, the things nobody noticed.</p><a class="btn btn-grad" href="#/imports">Bring in photos</a></div>';
}

/* ================= MOMENTS = THE FEED (renamed from Explore, 2026-10-30) =================
   Jeff's rule: the feed scrolls and feels exactly like Instagram —
   full-width images and videos, caption below, that's it. Posts start
   immediately under ONE slim sticky bar (the Moments name + the
   Everyone⇄person filter, demoted from a pill row that ate the first
   screen); the date line and the Ask Rooney pill are gone from the
   flow (Ask Rooney lives on its own tab/sheet). The month filter bar,
   driven by state.feedMonth ('YYYY-MM' or null), is set by the Family
   timeline rows. Route/view id stays 'explore'; every user-facing
   label says Moments. */
function monthLabel(key) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const parts = String(key || '').split('-');
  const mi = parseInt(parts[1], 10) - 1;
  return (months[mi] || parts[1] || '') + ' ' + (parts[0] || '');
}
/* Phase 3C — Explore's desktop-only right context column. REAL DATA
   ONLY, built once per renderExplore entry from the same state and
   helpers the views themselves use (threadEvidenceLine for thread
   counts, isPendingPrompt + promptQuestion for questions, tagged-
   memory counts for people — the Family circles' own rule). Each
   card is omitted entirely when its data is empty; if all three are
   empty the aside itself is omitted. The column is family-wide, so
   feed pagination and scope changes (which never re-run this) leave
   it untouched. CSS hides it below 1200px. */
function exploreContextHTML() {
  const cards = [];
  const followedThreads = state.threads.filter((t) => t.status === 'followed').slice(0, 4);
  if (followedThreads.length) {
    cards.push('<section class="ctx-card"><h3 class="ctx-title">Threads Rooney is following</h3>' +
      followedThreads.map((t) => {
        const strongest = threadStrongestMoment(t);
        const thumb = strongest ? '<img src="' + esc(visualSource(strongest)) + '" alt="" loading="lazy">' : '<img src="assets/mark-dark.png" alt="" class="ctx-thumb-mark">';
        return '<a class="ctx-row" href="#/thread/' + encodeURIComponent(t.id) + '"><span class="ctx-thumb">' + thumb + '</span><span class="ctx-row-main"><span class="ctx-name">' + esc(t.title || 'A thread') + '</span><span class="ctx-meta">' + esc(threadEvidenceLine(t)) + '</span></span></a>';
      }).join('') + '</section>');
  }
  const pending = state.prompts.filter(isPendingPrompt);
  if (pending.length) {
    cards.push('<a class="ctx-card ctx-card-link" href="#/questions"><h3 class="ctx-title">Questions waiting</h3>' +
      '<p class="ctx-count">' + pending.length + ' waiting</p>' +
      '<p class="ctx-q-text">' + esc(promptQuestion(pending[0])) + '</p></a>');
  }
  const followedPeople = state.people.filter((p) => p.followed);
  if (followedPeople.length) {
    cards.push('<section class="ctx-card"><a class="ctx-title ctx-title-link" href="#/family">Your people</a>' +
      followedPeople.map((p) => {
        const tagged = state.memories.filter((m) => (m.peopleIds || []).map(String).includes(String(p.id)));
        const recentPhoto = tagged.filter((m) => m.type === 'photo' && mediaSrc(m)).slice().sort((a, b) => new Date(b.takenAt || b.createdAt || 0) - new Date(a.takenAt || a.createdAt || 0))[0] || null;
        const dot = recentPhoto ? '<img src="' + esc(mediaSrc(recentPhoto)) + '" alt="">' : '<span class="ctx-person-initial">' + esc(initialOf(p.name)) + '</span>';
        return '<a class="ctx-row" href="#/person/' + encodeURIComponent(p.id) + '"><span class="ctx-person-dot">' + dot + '</span><span class="ctx-row-main"><span class="ctx-name">' + esc(p.name) + '</span><span class="ctx-meta">' + num(tagged.length) + ' memor' + (tagged.length === 1 ? 'y' : 'ies') + '</span></span></a>';
      }).join('') + '</section>');
  }
  if (!cards.length) return '';
  return '<aside class="explore-context" aria-label="More of your story">' + cards.join('') + '</aside>';
}
function renderExplore(root) {
  state.feedCursor = null; state.feedDone = false;
  let filterBar = '';
  if (state.feedMonth) {
    const n = state.memories.filter((m) => String(m.takenAt || m.createdAt || '').slice(0, 7) === state.feedMonth).length;
    filterBar = '<div class="explore-filter"><span><strong>' + esc(monthLabel(state.feedMonth)) + '</strong> <span class="meta-inline">· ' + num(n) + ' memor' + (n === 1 ? 'y' : 'ies') + '</span></span><button type="button" class="btn btn-outline btn-small" id="explore-clear-month">Clear</button></div>';
  }
  root.innerHTML = '<div class="explore-layout"><div class="today-wrap ig-feed">' +
    '<div class="explore-bar"><span class="explore-bar-title">Moments</span><div class="scope-row" id="scope-row"></div></div>' +
    filterBar +
    '<div id="feed-stream"><div class="skeleton" aria-label="Loading"></div></div><div class="feed-more" id="feed-more"></div></div>' + exploreContextHTML() + '</div>';
  const clear = $('#explore-clear-month', root);
  if (clear) clear.addEventListener('click', () => { state.feedMonth = null; state.feedCursor = null; state.feedDone = false; renderExplore(root); });
  renderScopeRow(root);
  loadFeedPage(root, true);
}
function renderScopeRow(root) {
  const row = $('#scope-row', root); if (!row) return;
  const followed = state.people.filter((p) => p.followed);
  const storylines = (state.storylines && state.storylines.length) ? state.storylines : followed.map((p) => ({ personId: p.id, name: p.name, posture: p.posture }));
  row.innerHTML = '<button type="button" class="chip' + (state.feedScope === 'all' ? ' is-active' : '') + '" data-scope="all">Everyone</button>' +
    storylines.map((s) => '<button type="button" class="chip' + (String(state.feedScope) === String(s.personId) ? ' is-active' : '') + '" data-scope="' + esc(s.personId) + '">' + esc(firstName(s.name)) + "'s story</button>").join('');
  $$('[data-scope]', row).forEach((b) => b.addEventListener('click', () => { state.feedScope = b.dataset.scope; state.feedCursor = null; state.feedDone = false; renderScopeRow(root); const stream = $('#feed-stream', root); if (stream) stream.innerHTML = '<div class="skeleton"></div>'; loadFeedPage(root, true); }));
}
async function loadFeedPage(root, first) {
  if (state.feedLoading || state.feedDone) return;
  state.feedLoading = true;
  const more = $('#feed-more', root); if (more) more.textContent = 'Loading…';
  try {
    const q = '?scope=' + encodeURIComponent(state.feedScope) + '&limit=12' + (state.feedMonth ? '&month=' + encodeURIComponent(state.feedMonth) : '') + (state.feedCursor ? '&cursor=' + encodeURIComponent(state.feedCursor) : '');
    const res = await api(F('/feed') + q);
    if (res.presented) { state.presented = res.presented; if (state.usage) state.usage.presented = res.presented; }
    if (res.storylines) state.storylines = res.storylines;
    if (first) renderScopeRow(root);
    const stream = $('#feed-stream', root); if (!stream) return;
    if (first) stream.innerHTML = '';
    let prefix = '';
    if (first) {
      const pres = res.presented || presented();
      if (pres && pres.processing && pres.processing.state === 'catching_up') {
        prefix += '<div class="card feed-notice"><div class="kicker-row"><span class="badge bpink">Still writing</span></div><p style="margin:0 0 10px">Rooney is still writing — she\'s catching up over the next few days. ' + num(pres.processing.toldCount) + ' of ' + num(pres.processing.storedCount) + ' memories told so far.</p><button type="button" class="btn btn-outline btn-small" id="feed-backfill">Have Rooney tell 2,500 more — $19, once</button></div>';
      }
      if (!state.memories.length && !(res.cards || []).length) {
        prefix += '<div class="empty"><img src="assets/mark-dark.png" class="empty-mark" alt=""><h3>Open the shoebox</h3><p>Your camera roll already holds the story. Bring in what you already have and Rooney will start telling it back — chapters, threads, the things nobody noticed.</p><a class="btn btn-grad" href="#/imports">Bring in photos</a></div>';
      }
      if (state.feedMonth && !(res.cards || []).length) {
        prefix += '<div class="empty"><h3>Nothing in ' + esc(monthLabel(state.feedMonth)) + ' yet</h3><p>No moments from that month are in the story.</p></div>';
      }
    }
    const cardsHtml = (res.cards || []).map(igFeedCardHTML).join('');
    stream.insertAdjacentHTML('beforeend', prefix + cardsHtml);
    wireFeedCards(stream);
    const bf = $('#feed-backfill', stream); if (bf) bf.addEventListener('click', openBackfillSheet);
    state.feedCursor = res.nextCursor || null;
    state.feedDone = !res.nextCursor;
    if (more) more.textContent = state.feedDone ? ((res.cards || []).length || !first ? 'That\'s everything for now — Rooney keeps watching.' : '') : 'Scroll for more';
    if (!state.feedDone) watchFeedMore(root);
  } catch (e) {
    const stream = $('#feed-stream', root);
    if (stream && first) stream.innerHTML = '<div class="empty"><h3>Your feed couldn\'t load</h3><p>' + esc(e.message) + '</p></div>';
    if (more) more.textContent = '';
  } finally { state.feedLoading = false; }
}
let feedObserver = null;
function watchFeedMore(root) {
  const more = $('#feed-more', root); if (!more) return;
  if (feedObserver) feedObserver.disconnect();
  if (!('IntersectionObserver' in window)) { more.innerHTML = '<button type="button" class="btn btn-outline btn-small" id="feed-load-btn">Show more</button>'; const b = $('#feed-load-btn', more); if (b) b.addEventListener('click', () => loadFeedPage(root, false)); return; }
  feedObserver = new IntersectionObserver((entries) => { if (entries.some((en) => en.isIntersecting)) loadFeedPage(root, false); }, { rootMargin: '600px' });
  feedObserver.observe(more);
}

/* ================= Rooney sheet ================= */
const ASK_EXAMPLES = ['every birthday cake', 'first days of school', 'the dog in every year', "everything at Grandma's table", 'all the firsts'];
function askPreviewHTML(preview) {
  const byYear = {};
  (preview.items || []).forEach((m) => { const y = yearOf(m.takenAt) || 'Undated'; (byYear[y] = byYear[y] || []).push(m); });
  return '<div style="margin-top:16px"><h3 class="dsp" style="font-size:23px">' + esc(preview.suggestedTitle || 'Your thread') + '</h3>' +
    '<p class="muted">' + esc(preview.basis || '') + (preview.count != null ? ' · ' + num(preview.count) + ' moments' + (preview.fromYear ? ', ' + preview.fromYear + (preview.toYear && preview.toYear !== preview.fromYear ? ' — ' + preview.toYear : '') : '') : '') + '</p>' +
    (preview.searchedNote ? '<p class="muted-small">Rooney searched ' + esc(preview.searchedNote) + '.</p>' : '') +
    Object.keys(byYear).sort().map((y) => '<p style="margin:10px 0 4px"><strong>' + esc(y) + '</strong></p><div class="evidence-grid">' + byYear[y].slice(0, 4).map((m) => m.type === 'photo' && mediaSrc(m) ? '<img src="' + esc(mediaSrc(m)) + '" alt="" loading="lazy">' : '<span class="chip" style="cursor:default">' + esc(m.caption || m.type) + ' · ' + esc(fmtDate(m.takenAt, { month: 'short', day: 'numeric' })) + '</span>').join('') + '</div>').join('') +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px"><button type="button" class="btn btn-grad btn-small" id="ask-keep">Keep this thread</button><button type="button" class="btn btn-outline btn-small" id="ask-show">Just show me</button></div>' +
    '<div id="ask-show-area"></div></div>';
}
async function runAsk(query, area, statusEl) {
  if (statusEl) statusEl.textContent = 'Rooney is looking through your photos, videos, voice notes and words…';
  try {
    const res = await api(F('/threads/ask'), { method: 'POST', body: { query } });
    if (statusEl) statusEl.textContent = '';
    if (!res.preview) {
      area.innerHTML = '<div style="margin-top:16px"><p>Rooney looked — through ' + esc(res.searchedNote || 'your captions and writing, the people in them, and their dates') + ' — and couldn\'t find that yet. Nothing was invented to fill the gap.</p>' +
        '<p class="muted">Want Rooney to ask about it? She\'ll put the question to the family, and the answers become the start of this thread.</p>' +
        '<button type="button" class="btn btn-grad btn-small" id="ask-makeprompt">Ask the family about it</button></div>';
      const mp = $('#ask-makeprompt', area);
      if (mp) mp.addEventListener('click', async () => {
        mp.disabled = true;
        try { await api(F('/prompts/guest'), { method: 'POST', body: { text: 'Tell the story of ' + query + ' — what do you remember?' } }); toast('Done — Rooney will ask about it. Find it in Questions.'); closeSheet(); await refreshData(); }
        catch (e) { toast(e.message, 'error'); mp.disabled = false; }
      });
      return;
    }
    area.innerHTML = askPreviewHTML(res.preview);
    const keep = $('#ask-keep', area); const show = $('#ask-show', area);
    if (keep) keep.addEventListener('click', async () => {
      keep.disabled = true; keep.textContent = 'Keeping…';
      try { const created = await api(F('/threads'), { method: 'POST', body: { askQuery: query } }); const t = created && (created.thread || created); toast('Thread kept — Rooney is following it now.'); closeSheet(); await refreshData(); if (t && t.id) location.hash = '#/thread/' + encodeURIComponent(t.id); else location.hash = '#/threads'; }
      catch (e) { if (e.data && e.data.code === 'thread_limit') { openPlanSheet(); } else if (e.data && e.data.code === 'ask_unresolved') { toast('Rooney couldn\'t find that on a second look — nothing was kept.', 'error'); } else toast(e.message, 'error'); keep.disabled = false; keep.textContent = 'Keep this thread'; }
    });
    if (show) show.addEventListener('click', () => {
      const sa = $('#ask-show-area', area);
      sa.innerHTML = '<div style="margin-top:12px">' + (res.preview.items || []).map((m) => '<div class="card" style="padding:14px">' + mediaHTML(m) + '<p class="muted-small" style="margin:6px 0 0">' + esc(m.caption || '') + ' · ' + esc(fmtDay(m.takenAt)) + '</p></div>').join('') + '<p class="muted-small">Shown, not kept — Rooney won\'t follow this unless you keep the thread.</p></div>';
    });
  } catch (e) { if (statusEl) statusEl.textContent = ''; area.innerHTML = '<p style="margin-top:14px">' + esc(e.message) + '</p>'; }
}
function askBlockHTML(idPrefix) {
  return '<label class="field"><span>Ask Rooney for a thread</span></label><div class="ask-row"><input id="' + idPrefix + '-input" type="text" placeholder="Ask Rooney to pull a thread…" autocomplete="off"><button type="button" class="btn btn-grad" id="' + idPrefix + '-go">Pull this thread</button></div>' +
    '<div class="chip-row"><span class="muted-small" style="font-weight:600">Try:</span>' + ASK_EXAMPLES.map((x) => '<button type="button" class="chip" data-ask-chip="' + esc(x) + '">' + esc(x) + '</button>').join('') + '</div>' +
    '<p class="muted-small" id="' + idPrefix + '-status" role="status"></p><div id="' + idPrefix + '-result"></div>';
}
function wireAskBlock(prefix) {
  const input = $('#' + prefix + '-input'); const go = $('#' + prefix + '-go'); const area = $('#' + prefix + '-result'); const status = $('#' + prefix + '-status');
  const run = () => { const q = input.value.trim(); if (!q) { toast('Tell Rooney what to look for — a thing, a person, a place.'); return; } runAsk(q, area, status); };
  if (go) go.addEventListener('click', run);
  if (input) input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
  $$('[data-ask-chip]').forEach((c) => { if (c.closest('#sheet') || prefix === 'ask') c.addEventListener('click', () => { input.value = c.dataset.askChip; run(); }); });
}
/* Small 1.6-stroke icons shared by the talk screen and the Questions
   featured doors. */
function svgMicIcon() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0"/><path d="M12 17.5V21"/></svg>'; }
function svgPhotoIcon() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l2-2.5h6L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.5" r="3.4"/></svg>'; }
function svgPenIcon() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16.5 4.5 19.5 7.5 9 18H6v-3z"/><path d="m14.5 6.5 3 3"/></svg>'; }
function svgChevronIcon() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9.5 5 7 7-7 7"/></svg>'; }
function openRooneySheet(mode) {
  const pendingList = state.prompts.filter(isPendingPrompt);
  const pending = pendingList.length;
  const firstPending = pendingList[0] || null;
  /* Talk-screen headline: a pending prompt's real question if one is
     waiting (the first in the list), else the standing question. */
  const headline = firstPending ? promptQuestion(firstPending) : 'What do you remember about this day?';
  openSheet(
    '<div class="talk-sheet"><div class="talk-head"><h3 class="talk-headline">' + esc(headline) + '</h3><p class="talk-sub">I can turn your photos, videos and notes into a story.</p><img src="assets/mark-dark.png" alt="" class="talk-mark"></div>' +
    /* Board order: headline → subline → the big real mark → suggestion
       chips centered under the mark → the talk action row LAST (photo /
       mic / write). The failure note sits directly under the talk row so
       it is seen where the tap happened. */
    '<div class="talk-chips"><p class="talk-chips-label">Ask for a thread</p><div class="chip-row" style="margin-top:0">' + ASK_EXAMPLES.map((x) => '<button type="button" class="chip" data-ask-chip="' + esc(x) + '">' + esc(x) + '</button>').join('') + (firstPending ? '<button type="button" class="chip" id="talk-pending-chip">Answer Rooney\'s question →</button>' : '') + '</div></div>' +
    '<div class="talk-row">' +
    '<button type="button" class="talk-side" id="talk-photo" aria-label="Add a photo">' + svgPhotoIcon() + '</button>' +
    '<span class="talk-center"><button type="button" class="talk-btn" id="talk-btn" aria-label="Tap to talk" aria-pressed="false">' + svgMicIcon() + '</button><span class="talk-label">Tap to talk</span></span>' +
    '<button type="button" class="talk-side" id="talk-write" aria-label="Write a memory">' + svgPenIcon() + '</button></div>' +
    '<p class="talk-note" id="talk-note" hidden></p>' +
    /* The ask block is unchanged (input, button, preview flow); its own
       "Try:" chip row is hidden in this sheet only — the chips live in
       the labelled row above, so nothing appears twice. */
    '<div class="ask-block-wrap">' + askBlockHTML('ask') + '</div>' +
    '<h3 class="section-title" id="talk-add-title" style="margin-top:26px">Add a memory</h3>' + addMemoryFormHTML('rooney') +
    '<h3 class="section-title">Quick ways in</h3>' +
    '<button type="button" class="quick-row" data-quick="questions"><span>Questions waiting</span><strong>' + pending + ' →</strong></button>' +
    '<button type="button" class="quick-row" data-quick="interview"><span>Start an interview</span><strong>→</strong></button>' +
    '<button type="button" class="quick-row" data-quick="imports"><span>Bring in photos</span><strong>→</strong></button>' +
    '<button type="button" class="btn btn-ghost btn-block" data-close-sheet>Close</button></div>'
  );
  wireCloseSheet(); wireAskBlock('ask'); wireAddMemoryForm('rooney');
  /* ASK_EXAMPLES chips above (data-ask-chip) are wired by wireAskBlock,
     which wires every chip inside the sheet to the ask input. */
  const pendingChip = $('#talk-pending-chip');
  if (pendingChip) pendingChip.addEventListener('click', () => { closeSheet(); location.hash = '#/questions'; });
  /* Side buttons jump into the Add-a-memory form: photo on the left,
     writing on the right — same kind chips the form itself uses. */
  const jumpToAdd = (kind) => {
    const form = $('#rooney-add-form'); if (!form) return;
    const chip = form.querySelector('[data-add-kind="' + kind + '"]'); if (chip) chip.click();
    const title = $('#talk-add-title'); if (title) title.scrollIntoView();
    const field = kind === 'write' ? form.querySelector('textarea[name="storyText"]') : form.querySelector('input[name="file"]');
    if (field) { try { field.focus({ preventScroll: true }); } catch (e) {} }
  };
  const photoBtn = $('#talk-photo'); if (photoBtn) photoBtn.addEventListener('click', () => jumpToAdd('media'));
  const writeBtn = $('#talk-write'); if (writeBtn) writeBtn.addEventListener('click', () => jumpToAdd('write'));
  /* Voice — REAL SpeechRecognition only, when the browser provides it.
     There is no simulated listening state: the pulse class is added on
     a real recognition start and cleared on its real onend/onerror.
     A final transcript is put in the ask input and run through the
     same handler wireAskBlock bound (the ask button's click). */
  const talkBtn = $('#talk-btn'); const talkNote = $('#talk-note');
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recog = null; let asked = false;
  /* Per-session voice state (Fix round): gotTranscript is set when a
     FINAL result arrives; the failure note shows only when a session
     really started, produced no final transcript, ran no ask, and was
     not stopped deliberately by the user. It never appears after a
     successful ask. The absent-API note above is a different text for
     a different situation — the two are never conflated. */
  let sessActive = false; let sessGot = false; let sessStopped = false;
  const showVoiceFailNote = () => {
    if (talkNote) { talkNote.hidden = false; talkNote.textContent = "Voice didn't work just now — typing works just as well."; }
    const inp = $('#ask-input'); if (inp) inp.focus();
  };
  if (talkBtn) talkBtn.addEventListener('click', () => {
    if (!SR) {
      if (talkNote) { talkNote.hidden = false; talkNote.textContent = "Voice isn't available in this browser — typing works just as well."; }
      const inp = $('#ask-input'); if (inp) inp.focus();
      return;
    }
    if (recog) { sessStopped = true; try { recog.stop(); } catch (e) {} return; }
    recog = new SR(); recog.lang = 'en-US'; recog.interimResults = true; recog.continuous = false;
    sessActive = false; sessGot = false; sessStopped = false;
    if (talkNote) talkNote.hidden = true;
    recog.onresult = (ev) => {
      let interim = ''; let fin = '';
      for (let i = ev.resultIndex; i < ev.results.length; i++) { const r = ev.results[i]; if (r.isFinal) fin += r[0].transcript; else interim += r[0].transcript; }
      const inp = $('#ask-input'); if (!inp) return;
      if (fin) sessGot = true;
      if (fin && !asked) { asked = true; inp.value = fin.trim(); const go = $('#ask-go'); if (go) go.click(); }
      else if (interim) inp.value = interim;
    };
    const clearListening = () => { recog = null; talkBtn.classList.remove('is-listening'); talkBtn.setAttribute('aria-pressed', 'false'); };
    recog.onend = () => {
      const wasActive = sessActive; sessActive = false; clearListening();
      if (wasActive && !sessGot && !asked && !sessStopped) showVoiceFailNote();
    };
    recog.onerror = () => { clearListening(); if (!asked && !sessStopped) showVoiceFailNote(); };
    try { recog.start(); sessActive = true; talkBtn.classList.add('is-listening'); talkBtn.setAttribute('aria-pressed', 'true'); }
    catch (e) { clearListening(); showVoiceFailNote(); }
  });
  $$('#sheet [data-quick]').forEach((b) => b.addEventListener('click', () => { const q = b.dataset.quick; closeSheet(); if (q === 'questions') location.hash = '#/questions'; else if (q === 'imports') location.hash = '#/imports'; else if (q === 'interview') { location.hash = '#/questions'; setTimeout(() => { const el = $('#interviews-block'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 350); } }));
  if (mode === 'add') { const el = $('#talk-add-title'); if (el) el.scrollIntoView(); }
  const inp = $('#ask-input'); if (inp && mode !== 'add') inp.focus();
}
function addMemoryFormHTML(prefix) {
  return '<form id="' + prefix + '-add-form">' +
    '<div class="chip-row" style="margin:0 0 12px"><button type="button" class="chip is-active" data-add-kind="media">Photo / Video</button><button type="button" class="chip" data-add-kind="voice">Voice</button><button type="button" class="chip" data-add-kind="write">Write</button></div>' +
    '<div data-add-sec="media"><label class="field"><span>Photo or video file</span><input type="file" name="file" accept="image/*,video/*"></label></div>' +
    '<div data-add-sec="voice" hidden><label class="field"><span>Voice recording file</span><input type="file" name="voiceFile" accept="audio/*"></label></div>' +
    '<div data-add-sec="write" hidden><label class="field"><span>Write it down</span><textarea name="storyText" placeholder="Tell it the way you\'d tell it at the table…"></textarea></label></div>' +
    '<label class="field"><span>Caption</span><input name="caption" placeholder="What is this? Who\'s in it?"></label>' +
    '<label class="field"><span>When was this?</span><input type="date" name="takenAt" value="' + new Date().toISOString().slice(0, 10) + '"></label>' +
    '<fieldset style="border:none;padding:0;margin:0 0 12px"><legend class="field" style="margin:0"><span>Who is in it?</span></legend>' + peopleCheckboxes([], 'addpeople') + '</fieldset>' +
    '<p class="form-error" role="alert" hidden></p>' +
    '<button type="submit" class="btn btn-grad btn-block">Keep this memory</button></form>';
}
function wireAddMemoryForm(prefix) {
  const form = $('#' + prefix + '-add-form'); if (!form) return;
  let kind = 'media';
  $$('[data-add-kind]', form).forEach((c) => c.addEventListener('click', () => { kind = c.dataset.addKind; $$('[data-add-kind]', form).forEach((x) => x.classList.toggle('is-active', x === c)); ['media', 'voice', 'write'].forEach((k) => { const sec = $('[data-add-sec="' + k + '"]', form); if (sec) sec.hidden = k !== kind; }); }));
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const peopleIds = $$('input[name="addpeople"]:checked', form).map((i) => i.value);
    const btn = $('button[type="submit"]', form); btn.disabled = true; btn.textContent = 'Keeping…';
    try {
      if (kind === 'write') {
        const storyText = String(fd.get('storyText') || '').trim();
        if (!storyText && !String(fd.get('caption') || '').trim()) throw new Error('Write a line or two first — even one sentence is a memory kept.');
        await api(F('/memories'), { method: 'POST', body: { type: 'writing', caption: fd.get('caption'), storyText, takenAt: fd.get('takenAt') || undefined, source: 'manual', peopleIds } });
      } else {
        const file = kind === 'voice' ? (form.querySelector('input[name="voiceFile"]').files[0] || null) : (form.querySelector('input[name="file"]').files[0] || null);
        if (!file) throw new Error(kind === 'voice' ? 'Choose a voice recording file first.' : 'Choose a photo or video file first.');
        await uploadMemoryFile(file, { caption: fd.get('caption'), storyText: '', takenAt: fd.get('takenAt') || undefined, source: 'manual', peopleIds });
      }
      toast('Kept. It\'s part of the story now.');
      closeSheet(); await refreshData(); render();
    } catch (err) { formError(form, err.message); btn.disabled = false; btn.textContent = 'Keep this memory'; }
  });
}


/* ================= ADD SHEET + MENU SHEET + SETTINGS (Phase 3B) =================
   Add is capture/connect only: the three memory kinds swap the sheet
   body to the EXISTING add-memory form (same markup + wiring), with
   that kind's chip clicked so the right section shows preselected.
   The Connect rows go to the real Imports view — no fake connection
   states anywhere. */
function openAddSheet(kind) {
  if (kind) {
    openSheet('<h3>Add to your story</h3>' + addMemoryFormHTML('addsheet') + '<button type="button" class="btn btn-ghost btn-block" data-close-sheet>Close</button>');
    wireCloseSheet(); wireAddMemoryForm('addsheet');
    const form = $('#addsheet-add-form');
    if (form) { const chip = form.querySelector('[data-add-kind="' + kind + '"]'); if (chip) chip.click(); }
    return;
  }
  openSheet('<h3>Add to your story</h3>' +
    '<button type="button" class="quick-row" data-add-kind-pick="media"><span>Photo or video</span><strong>→</strong></button>' +
    '<button type="button" class="quick-row" data-add-kind-pick="voice"><span>Voice note</span><strong>→</strong></button>' +
    '<button type="button" class="quick-row" data-add-kind-pick="write"><span>Write</span><strong>→</strong></button>' +
    '<div class="add-divider" aria-hidden="true"></div>' +
    '<button type="button" class="quick-row" data-add-connect><span>Connect Google Photos</span><strong>→</strong></button>' +
    '<button type="button" class="quick-row" data-add-connect><span>Connect Apple Photos</span><strong>→</strong></button>' +
    '<button type="button" class="btn btn-ghost btn-block" data-close-sheet>Close</button>');
  wireCloseSheet();
  $$('#sheet [data-add-kind-pick]').forEach((b) => b.addEventListener('click', () => openAddSheet(b.dataset.addKindPick)));
  $$('#sheet [data-add-connect]').forEach((b) => b.addEventListener('click', () => { closeSheet(); location.hash = '#/imports'; }));
}
function openMenuSheet() {
  const rows = [['Today', '#/'], ['Questions', '#/questions'], ['Saved', '#/saved'], ['Your collections', '#/collections'], ['Family & people', '#/family'], ['Who this story goes to', '#/legacy'], ['Plan & room', '#/plan'], ['Year Film', '#/film'], ['Help & settings', '#/settings']];
  /* Family switcher (feed-source rulings): you can keep your own
     Roon and sit in other people's Dens. Each family is its own
     archive — switching moves you between them; nothing ever blends. */
  const fams = state.families || [];
  const switcher = fams.length > 1
    ? '<p class="meta-line" style="margin:14px 0 6px">Your families</p>' + fams.map((f) => '<button type="button" class="quick-row" data-menu-family="' + esc(f.id) + '"><span>' + esc(f.name || 'A family') + (isSampleFamily(f) ? ' · Sample' : '') + '</span>' + (state.family && String(f.id) === String(state.family.id) ? '<strong>You’re here</strong>' : '<strong>→</strong>') + '</button>').join('')
    : '';
  openSheet('<h3>Menu</h3>' + rows.map((r) => '<button type="button" class="quick-row" data-menu-go="' + esc(r[1]) + '"><span>' + esc(r[0]) + '</span><strong>→</strong></button>').join('') +
    switcher +
    '<button type="button" class="btn btn-ghost btn-block" data-close-sheet>Close</button>');
  wireCloseSheet();
  $$('#sheet [data-menu-go]').forEach((b) => b.addEventListener('click', () => { const h = b.dataset.menuGo; closeSheet(); location.hash = h; }));
  $$('#sheet [data-menu-family]').forEach((b) => b.addEventListener('click', async () => {
    const fam = (state.families || []).find((f) => String(f.id) === String(b.dataset.menuFamily));
    closeSheet();
    if (fam && (!state.family || String(fam.id) !== String(state.family.id))) { await setFamily(fam); location.hash = '#/'; route(true); }
  }));
}
/* Settings — ONLY real things: who is signed in, the two real
   destinations (question settings live on Questions; plan on Plan),
   the real export endpoint, and sign out. No toggles, no dead rows. */
function renderSettings(root) {
  const u = state.user || {};
  root.innerHTML = '<h1 class="dsp settings-title">Help &amp; settings</h1>' +
    '<div class="card settings-card"><p class="meta-line" style="margin-bottom:4px">Signed in as</p><p style="margin:0"><strong>' + esc(u.name || 'Your account') + '</strong>' + (u.email ? '<br><span class="muted-small">' + esc(u.email) + '</span>' : '') + '</p></div>' +
    '<a class="quiet-row settings-row" href="#/questions"><span><strong>Question times &amp; settings</strong><br><span class="muted-small">When Rooney asks, and how often.</span></span><span>→</span></a>' +
    '<a class="quiet-row settings-row" href="#/plan"><span><strong>Plan &amp; room</strong><br><span class="muted-small">Your plan, room and billing.</span></span><span>→</span></a>' +
    '<a class="quiet-row settings-row" href="' + F('/export') + '"><span><strong>Export everything</strong><br><span class="muted-small">Every original, your story as a page, and all the data — a ZIP.</span></span><span>⬇</span></a>' +
    '<a class="quiet-row settings-row" href="#/legacy"><span><strong>Who this story goes to</strong><br><span class="muted-small">Name who keeps the story going if you can\'t.</span></span><span>→</span></a>' +
    '<div id="resurface-settings"></div>' +
    '<div id="den-prefs-settings"></div>' +
    '<p style="margin-top:18px"><button type="button" class="btn btn-outline" id="settings-logout">Sign out</button></p>';
  const lo = $('#settings-logout', root); if (lo) lo.addEventListener('click', doLogout);
  fillResurfacingSettings(root);
  fillDenPrefs(root);
}

/* ================= STORY ================= */
function seriesHTML(personFilter) {
  const list = state.series.filter((s) => !personFilter || String(s.personId) === String(personFilter));
  const withAnswers = list.filter((s) => (s.answers || []).length);
  if (!withAnswers.length) return '';
  return '<h2 class="section-title">Series — the same question, across the years</h2>' + withAnswers.map((s) => {
    const answers = (s.answers || []).slice().sort((a, b) => new Date(a.answeredAt || a.scheduledFor || 0) - new Date(b.answeredAt || b.scheduledFor || 0));
    return '<div class="card"><p class="eyeb" style="margin-bottom:4px">For ' + esc(s.personName || personName(s.personId)) + '</p><h3 class="dsp" style="font-size:22px;margin:0 0 12px">“' + esc(s.question) + '”</h3><div class="series-grid">' +
      answers.map((a) => { const mem = a.memoryId ? state.memories.find((m) => String(m.id) === String(a.memoryId)) : null; return '<div class="series-cell"><span class="yr">' + esc(yearOf(a.answeredAt || a.scheduledFor) || '') + '</span>' + (mem && mem.type === 'photo' && mediaSrc(mem) ? '<img src="' + esc(mediaSrc(mem)) + '" alt="" loading="lazy" style="width:100%;height:110px;object-fit:cover;border-radius:10px;margin:8px 0">' : '') + '<p style="margin:6px 0 0">' + esc(a.text || (mem ? (mem.caption || '') : '')) + '</p></div>'; }).join('') + '</div></div>';
  }).join('');
}
function lettersSectionHTML(personFilter) {
  if (isStartPlan()) return ''; /* Letters are paid-only: on Start, render NOTHING. */
  const letters = state.letters.filter((l) => !personFilter || String(l.toPersonId) === String(personFilter));
  return '<h2 class="section-title">Letters — written now, opened later</h2>' +
    (letters.length ? letters.map((l) => l.sealed && !l.due
      ? '<div class="card"><div class="kicker-row"><span class="badge bsoft">Sealed</span>' + (l.sample ? '<span class="badge bsample">Sample</span>' : '') + '</div><p class="dsp" style="font-size:21px;margin:0">A letter for ' + esc(l.toPersonName || 'someone') + ' — opens ' + esc(fmtDay(l.deliverOn)) + '</p><p class="muted-small">From ' + esc(l.authorName || '') + (l.title ? ' · “' + esc(l.title) + '”' : '') + '</p></div>'
      : '<div class="card"><div class="kicker-row"><span class="badge bpink">' + (l.due ? 'Ready to read' : 'Letter') + '</span>' + (l.sample ? '<span class="badge bsample">Sample</span>' : '') + '</div><p class="dsp" style="font-size:21px;margin:0 0 8px">For ' + esc(l.toPersonName || 'someone') + (l.title ? ' — ' + esc(l.title) : '') + '</p>' + (l.body ? '<p style="white-space:pre-wrap;line-height:1.7">' + esc(l.body) + '</p>' : '<p class="muted">' + esc(l.note || '') + '</p>') + '</div>').join('')
      : '<div class="empty"><h3>No letters yet</h3><p>Write one now, seal it, and it opens on the day you choose.</p></div>') +
    '<div class="card"><h3 class="dsp" style="font-size:22px;margin:0 0 12px">Write a letter</h3><form id="letter-form">' +
    '<label class="field"><span>For</span><select name="toPersonId">' + state.people.map((p) => '<option value="' + esc(p.id) + '"' + (personFilter && String(personFilter) === String(p.id) ? ' selected' : '') + '>' + esc(p.name) + '</option>').join('') + '</select></label>' +
    '<label class="field"><span>Opens on</span><input type="date" name="deliverOn" required></label>' +
    '<label class="field"><span>Title (optional)</span><input name="title" placeholder="For the day you…"></label>' +
    '<label class="field"><span>The letter</span><textarea name="body" required placeholder="Write it the way you\'d say it if you were right there…"></textarea></label>' +
    '<p class="form-error" role="alert" hidden></p><button type="submit" class="btn btn-grad">Seal this letter</button></form></div>';
}
function wireLetterForm(root) {
  const form = $('#letter-form', root); if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); const fd = new FormData(form);
    const btn = $('button[type="submit"]', form); btn.disabled = true;
    try { await api(F('/letters'), { method: 'POST', body: { toPersonId: fd.get('toPersonId'), deliverOn: fd.get('deliverOn'), title: fd.get('title'), body: fd.get('body') } }); toast('Sealed. It will open on the day you chose.'); await refreshData(); render(); }
    catch (err) { if (err.data && err.data.code === 'plan_gate') openPlanSheet(); else formError(form, err.message); btn.disabled = false; }
  });
}
function renderStory(root) {
  const testRun = state.chaptersMeta && state.chaptersMeta.testRun;
  const hiddenN = (state.chaptersMeta && state.chaptersMeta.hiddenChapters) || 0;
  let html = '<p class="meta-line">Prompt · remind · see</p><h1 class="dsp">Your story</h1><p class="lead">Chapters Rooney assembles from your own words, photos and dates. She never invents a memory — every line traces back to something your family gave her.</p>';
  if (!state.chapters.length) {
    html += '<div class="empty"><img src="assets/mark-dark.png" class="empty-mark" alt=""><h3>No chapters yet — that\'s where bringing in photos comes in</h3><p>Chapters name themselves from what your family already has. Bring in a pile of photos and Rooney drafts the first one from your own captions and dates.</p><a class="btn btn-grad" href="#/imports">Bring in photos</a></div>';
  } else {
    html += state.chapters.map((ch) => { const mems = chapterMemories(ch); const cover = mems.find((m) => m.type === 'photo' && mediaSrc(m)); return '<a class="toc-row" href="#/story/' + encodeURIComponent(ch.id) + '">' + (cover ? '<img src="' + esc(mediaSrc(cover)) + '" alt="" loading="lazy">' : '') + '<span style="min-width:0"><h3>' + esc(ch.title || 'Untitled chapter') + '</h3><span class="muted-small">' + esc(chapterRange(ch)) + (mems.length ? ' · ' + mems.length + ' moments' : '') + '</span>' + (ch.sample ? ' <span class="badge bsample">Sample</span>' : '') + '</span></a>'; }).join('');
    if (testRun) html += '<div class="card" style="background:var(--pink);border-color:transparent"><p style="margin:0 0 10px"><strong>' + esc(FREE_CEILING_LINE) + '</strong>' + (hiddenN ? ' ' + hiddenN + ' more chapter' + (hiddenN === 1 ? ' is' : 's are') + ' already taking shape.' : '') + '</p><button type="button" class="btn btn-grad btn-small" id="story-plan-btn">Start your plan</button></div>';
    html += '<p><button type="button" class="btn btn-outline btn-small" id="btn-rebuild">Ask Rooney to re-draft chapters</button> <span class="muted-small">Re-drafting re-clusters your memories by time, people and your own words.</span></p>';
  }
  html += seriesHTML(null);
  html += '<div class="film-stage"><p class="eyeb" style="color:#F2BAE8">Family night</p><h2 class="dsp" style="color:#fff">Your year, as a film</h2><p style="color:rgba(255,255,255,.75);line-height:1.6;max-width:520px">The year\'s photos in date order, your chapters and captions as the words on screen. Made to be watched together.</p><a class="btn btn-grad" href="#/film">Watch the Year Film</a></div>';
  html += lettersSectionHTML(null);
  root.innerHTML = html;
  const rb = $('#btn-rebuild', root); if (rb) rb.addEventListener('click', async () => { rb.disabled = true; rb.textContent = 'Rooney is reading…'; try { const res = await api(F('/chapters/rebuild'), { method: 'POST', body: {} }); if (res && res.chapters) { state.chapters = res.chapters; state.chaptersMeta = res; } state.loadedFor = null; await ensureData(); render(); toast('Chapters re-drafted from your memories.'); } catch (e) { toast(e.message, 'error'); rb.disabled = false; rb.textContent = 'Ask Rooney to re-draft chapters'; } });
  const pb = $('#story-plan-btn', root); if (pb) pb.addEventListener('click', openPlanSheet);
  wireLetterForm(root);
}
function chapterGridTileHTML(m) {
  if (m.type === 'photo' && mediaSrc(m)) return '<button type="button" class="ch-grid-tile" data-ch-mem="' + esc(m.id) + '" aria-label="' + esc(m.caption || 'Photo') + '"><img src="' + esc(mediaSrc(m)) + '" alt="" loading="lazy"></button>';
  if (m.type === 'video') {
    const dur = m.durationSec ? fmtDuration(m.durationSec) : '';
    return '<button type="button" class="ch-grid-tile" data-ch-mem="' + esc(m.id) + '" aria-label="' + esc(m.caption || 'Video') + '">' + (m.poster ? '<img src="' + esc(m.poster) + '" alt="" loading="lazy">' : '') + '<span class="ch-grid-play">▶</span>' + (dur ? '<span class="ch-grid-dur">' + esc(dur) + '</span>' : '') + '</button>';
  }
  /* Voice / writing tiles: a bone tile, a small glyph, and a real
     snippet of the family's own caption/words (Meta voice). */
  const glyph = m.type === 'voice' ? '♪' : '✎';
  const snippet = String(m.caption || m.storyText || m.type || '').replace(/\s+/g, ' ').trim().slice(0, 48);
  return '<button type="button" class="ch-grid-tile ch-grid-text" data-ch-mem="' + esc(m.id) + '"><span class="ch-grid-glyph">' + glyph + '</span><span class="ch-grid-snippet">' + esc(snippet) + '</span></button>';
}
function chapterMemoryFigureHTML(m) {
  return '<figure class="reader-memory">' + mediaHTML(m) + '<figcaption>' + esc(m.caption || m.storyText || '') + '<br><span>' + esc(fmtDay(m.takenAt)) + ((m.peopleIds || []).length ? ' · ' + esc(m.peopleIds.map(personName).filter(Boolean).join(', ')) : '') + '</span></figcaption>' + reactionsHTML('memory', m.id, m.reactions) + commentsHTML('memory', m.id, m.commentCount || 0) + '</figure>';
}
function renderChapter(root, chapterId) {
  const ch = state.chapters.find((c) => String(c.id) === String(chapterId));
  if (!ch) { root.innerHTML = '<div class="empty"><h3>That chapter isn\'t here</h3><p>It may have been re-drafted. <a href="#/story">See all chapters</a>.</p></div>'; return; }
  const mems = chapterMemories(ch).slice().sort((a, b) => new Date(a.takenAt || a.createdAt || 0) - new Date(b.takenAt || b.createdAt || 0));
  /* Chapter N = the chapter's 1-based index in state.chapters order —
     the same order the Your-story list shows. */
  const chapterN = state.chapters.findIndex((c) => String(c.id) === String(chapterId)) + 1;
  const range = chapterRange(ch);
  const coverMem = mems.find((m) => m.type === 'photo' && mediaSrc(m));
  let header = '';
  if (coverMem) {
    header = '<div class="ch-cover"><img src="' + esc(mediaSrc(coverMem)) + '" alt=""><a class="ch-back" href="#/story" aria-label="All chapters"><span class="ch-back-circle" aria-hidden="true">‹</span></a><div class="ch-cover-scrim"><p class="ch-cover-meta">Chapter ' + chapterN + '</p><h1 class="ch-cover-title">' + esc(ch.title || 'Untitled chapter') + '</h1>' + (range ? '<p class="ch-cover-range">' + esc(range) + '</p>' : '') + '</div></div>';
  } else {
    header = '<p style="margin:0 0 10px"><a href="#/story">← All chapters</a></p><p class="meta-line">Chapter ' + chapterN + '</p><h1 class="dsp">' + esc(ch.title || 'Untitled chapter') + '</h1>' + (range ? '<p class="meta-line">' + esc(range) + '</p>' : '');
  }
  root.innerHTML = header +
    '<div class="ch-white-card">' +
    (ch.narrative ? '<div class="chapter-body"><p class="chapter-narrative">' + esc(ch.narrative) + '</p><p class="meta-line" style="margin-top:10px">Written by Rooney from your family\'s own words, captions and dates — nothing invented. The memories below are the evidence.</p></div>' : '<div class="empty"><h3>Rooney hasn\'t written this one yet</h3><p>Add captions or answer a question about this time, and the chapter fills in with your own words.</p></div>') +
    '<p style="margin:14px 0 0;display:flex;gap:8px;flex-wrap:wrap;align-items:center"><button type="button" class="btn btn-outline btn-small" id="btn-rename-chapter">Rename chapter</button><button type="button" class="btn btn-outline btn-small" id="btn-ch-audience">Who can see this: ' + audienceWords(ch.audience) + '</button>' + shareBtnHTML({ scope: 'chapter', targetId: ch.id, objectTitle: ch.title || 'Untitled chapter' }) + '</p><div data-share-chip></div>' +
    '<div class="ch-reactions">' + reactionsHTML('chapter', ch.id, ch.reactions) + commentsHTML('chapter', ch.id, ch.commentCount || 0) + '</div></div>' +
    '<h2 class="section-title">The memories in this chapter</h2>' +
    '<div id="chapter-grid"></div><div id="chapter-detail"></div>';
  /* Moments grid: 3 columns, square crops. First 11 tiles plus a real
     "+N" tile as the 12th; the +N expands in place to all moments.
     Tapping a tile renders that memory at readable size in the detail
     section directly under the grid (same figure markup as the old
     reader, with its reactions/comments wiring). */
  const gridEl = $('#chapter-grid', root);
  const detailEl = $('#chapter-detail', root);
  let gridExpanded = false;
  const paintGrid = () => {
    if (!mems.length) { gridEl.innerHTML = '<div class="empty"><p>No memories are attached to this chapter yet.</p></div>'; return; }
    const shown = gridExpanded ? mems : mems.slice(0, 11);
    const remaining = mems.length - shown.length;
    gridEl.innerHTML = '<div class="ch-grid">' + shown.map(chapterGridTileHTML).join('') + (remaining > 0 ? '<button type="button" class="ch-grid-tile ch-grid-plus" data-ch-expand>+' + remaining + '</button>' : '') + '</div>';
    const exp = $('[data-ch-expand]', gridEl);
    if (exp) exp.addEventListener('click', () => { gridExpanded = true; paintGrid(); });
    $$('[data-ch-mem]', gridEl).forEach((b) => b.addEventListener('click', () => {
      const m = memById(b.dataset.chMem); if (!m) return;
      detailEl.innerHTML = chapterMemoryFigureHTML(m);
      wireComments(detailEl);
      $$('[data-reactions]', detailEl).forEach((wrap) => { const parts = (wrap.getAttribute('data-reactions') || '').split(':'); wireReactions(wrap, parts[0], parts.slice(1).join(':')); });
      detailEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }));
  };
  paintGrid();
  wireComments(root);
  refreshShareChip($('[data-share-chip]', root), { scope: 'chapter', targetId: ch.id });
  $$('[data-reactions]', root).forEach((wrap) => { const parts = (wrap.getAttribute('data-reactions') || '').split(':'); wireReactions(wrap, parts[0], parts.slice(1).join(':')); });
  $('#btn-rename-chapter', root).addEventListener('click', () => {
    openSheet('<h3>Rename chapter</h3><form id="rename-form"><label class="field"><span>Chapter title</span><input name="title" required value="' + esc(ch.title || '') + '"></label><p class="form-error" role="alert" hidden></p><button class="btn btn-grad btn-block" type="submit">Save title</button><button type="button" class="btn btn-ghost btn-block" data-close-sheet>Cancel</button></form>');
    wireCloseSheet();
    $('#rename-form').addEventListener('submit', async (e) => { e.preventDefault(); try { await api('/api/chapters/' + encodeURIComponent(ch.id), { method: 'PATCH', body: { title: new FormData(e.currentTarget).get('title') } }); closeSheet(); await refreshData(); render(); toast('Chapter renamed.'); } catch (err) { formError(e.currentTarget, err.message); } });
  });
  /* C4: who may see this chapter (the audience picker). The
     chapter's moments keep their own settings — both apply. */
  const chab = $('#btn-ch-audience', root);
  if (chab) chab.addEventListener('click', () => openAudienceSheet('chapter', ch));
}

/* ================= THREADS ================= */
/* Thread rows (board composition). Strongest moment = the first photo
   among the thread's resolved media moments ordered by takenAt DESC;
   fallback: the first video poster in the same order; fallback: a bone
   tile with Jeff's mark. The mini-strip uses the same DESC order. */
function threadResolvedMediaDesc(t) {
  return (t.memoryIds || []).map((id) => memById(id)).filter((m) => m && visualSource(m))
    .slice().sort((a, b) => new Date(b.takenAt || b.createdAt || 0) - new Date(a.takenAt || a.createdAt || 0));
}
function threadStrongestMoment(t) {
  const media = threadResolvedMediaDesc(t);
  return media.find((m) => m.type === 'photo') || media.find((m) => m.type === 'video') || null;
}
function threadRowThumbHTML(t, cls) {
  const strongest = threadStrongestMoment(t);
  return '<span class="thread-row-thumb' + (cls ? ' ' + cls : '') + '">' + (strongest ? '<img src="' + esc(visualSource(strongest)) + '" alt="" loading="lazy">' : '<img src="assets/mark-dark.png" alt="" class="mark">') + '</span>';
}
function threadRowStripHTML(t) {
  const strip = threadResolvedMediaDesc(t).slice(0, 4);
  if (!strip.length) return '';
  return '<span class="thread-row-strip">' + strip.map((m) => '<img src="' + esc(visualSource(m)) + '" alt="" loading="lazy">').join('') + '</span>';
}
function threadRowHTML(t) {
  const href = '#/thread/' + encodeURIComponent(t.id);
  return '<a class="thread-row" href="' + href + '">' + threadRowThumbHTML(t) +
    '<span class="thread-row-main"><span class="thread-row-title">' + esc(t.title || 'A thread') + '</span>' +
    '<span class="thread-row-meta">' + esc(threadEvidenceLine(t)) + (t.growthCount ? ' · ' + t.growthCount + ' new moment' + (t.growthCount === 1 ? '' : 's') : '') + (t.sample ? ' <span class="post-sample">Sample</span>' : '') + '</span>' +
    threadRowStripHTML(t) +
    '<span class="thread-row-shareline">' + shareBtnHTML({ scope: 'thread', targetId: t.id, objectTitle: t.title || 'A thread' }, { className: 'btn btn-ghost btn-small share-btn' }) + '</span></span>' +
    '<span class="thread-row-chev">' + svgChevronIcon() + '</span></a>';
}
function threadProposalRowHTML(t) {
  const href = '#/thread/' + encodeURIComponent(t.id);
  let actions = '';
  if (t.requiresFollowPersonId) {
    const p = personById(t.requiresFollowPersonId);
    actions = '<span class="post-note-line">Follow ' + esc(p ? firstName(p.name) : 'their') + "'s story to keep this going.</span>" +
      '<button type="button" class="btn btn-grad btn-small" data-requires-follow="' + esc(t.requiresFollowPersonId) + '">Follow ' + esc(p ? firstName(p.name) : 'their') + "'s story</button>";
  } else {
    actions = '<button type="button" class="btn btn-grad btn-small" data-follow-thread="' + esc(t.id) + '">Follow</button><button type="button" class="btn btn-outline btn-small" data-dismiss-thread="' + esc(t.id) + '">Not for me</button>';
  }
  return '<div class="thread-row thread-row-proposal">' + threadRowThumbHTML(t) +
    '<span class="thread-row-main"><a class="thread-row-title" href="' + href + '">' + esc(t.title || 'A thread') + '</a>' +
    '<span class="thread-row-meta">' + esc(threadEvidenceLine(t)) + (t.growthCount ? ' · ' + t.growthCount + ' new moment' + (t.growthCount === 1 ? '' : 's') : '') + (t.sample ? ' <span class="post-sample">Sample</span>' : '') + '</span>' +
    threadRowStripHTML(t) +
    '<span class="thread-row-actions">' + actions + shareBtnHTML({ scope: 'thread', targetId: t.id, objectTitle: t.title || 'A thread' }, { className: 'btn btn-ghost btn-small share-btn' }) + '</span></span></div>';
}
function renderThreads(root) {
  const following = state.threads.filter((t) => t.status === 'followed');
  const proposals = state.threads.filter((t) => t.status === 'proposed' || !t.status);
  /* Board order: header (Meta + H1 + ONE-line lead), then the followed
     ROWS lead the screen — the ask card sits below them, proposals last. */
  root.innerHTML = '<h1 class="dsp threads-title">Threads</h1>' +
    '<p class="threads-sub">The recurring stories that make up your family\'s journey.</p>' +
    (following.length ? following.map(threadRowHTML).join('') : '<div class="empty"><h3>No threads followed yet</h3><p>Follow something Rooney is watching below, or ask her for a thread.</p></div>') +
    '<h2 class="section-title">Rooney is watching</h2><p class="muted" style="margin-top:-6px">Rooney found these on her own, from what you\'ve already kept.</p>' +
    (proposals.length ? proposals.map(threadProposalRowHTML).join('') : '<div class="empty"><h3>Nothing new right now</h3><p>As your story grows, patterns surface here — with the memories as proof.</p></div>') +
    '<div class="ask-card ask-card-compact"><p class="meta-line" style="margin-bottom:8px">Ask for a thread</p>' + askBlockHTML('threads') + '</div>';
  wireAskBlock('threads');
  /* Wires the proposal rows' Follow / Dismiss / follow-person buttons
     to the same endpoints the old proposal cards used. */
  wireFeedCards(root);
}
function renderThreadDetail(root, threadId) {
  const t = state.threads.find((x) => String(x.id) === String(threadId));
  if (!t) { root.innerHTML = '<div class="skeleton"></div>'; loadThreadDetail(threadId); return; }
  paintThreadDetail(root, t, null);
}
async function loadThreadDetail(threadId) {
  try { const res = await api(F('/threads/' + encodeURIComponent(threadId))); const t = (res && (res.thread || res)) || null; if (t) { const idx = state.threads.findIndex((x) => String(x.id) === String(t.id)); if (idx >= 0) state.threads[idx] = Object.assign({}, state.threads[idx], t); else state.threads.push(t); paintThreadDetail($('#view-root'), t, (res && res.items) || []); } }
  catch (e) { $('#view-root').innerHTML = '<div class="empty"><h3>That thread couldn\'t load</h3><p>' + esc(e.message) + '</p><p><a href="#/threads">All threads →</a></p></div>'; }
}
function paintThreadDetail(root, t, items) {
  const list = items || [];
  const byYear = {};
  list.forEach((m) => { const y = yearOf(m.takenAt) || 'Undated'; (byYear[y] = byYear[y] || []).push(m); });
  root.innerHTML = '<p style="margin:0 0 10px"><a href="#/threads">← All threads</a></p>' +
    '<div class="kicker-row">' + (t.status === 'followed' ? '<span class="badge bpink">Following</span>' : '<span class="badge bsoft">Rooney is watching</span>') + (t.growthCount ? '<span class="badge growth-badge">' + t.growthCount + ' new moments joined since you last looked</span>' : '') + '<span class="muted-small">' + esc(threadEvidenceLine(t)) + '</span>' + (t.sample ? '<span class="badge bsample">Sample</span>' : '') + '</div>' +
    '<h1 class="dsp" id="thread-title">' + esc(t.title || 'A thread') + '</h1>' +
    (t.observation ? '<p class="obs" style="font-family:var(--font-display);font-size:24px;line-height:1.35">“' + esc(t.observation) + '”</p>' : '') +
    (t.basis ? '<p class="muted">How Rooney found it: ' + esc(t.basis) + '</p>' : '') +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;margin:12px 0">' +
    (t.status !== 'followed' ? '<button type="button" class="btn btn-grad btn-small" id="td-follow">Follow this thread</button>' : '<button type="button" class="btn btn-outline btn-small" id="td-unfollow">Stop following</button>') +
    '<button type="button" class="btn btn-outline btn-small" id="td-rename">Rename</button>' + shareBtnHTML({ scope: 'thread', targetId: t.id, objectTitle: t.title || 'A thread' }) + '</div>' +
    '<div data-share-chip></div>' +
    (t.miniStory
      ? '<div class="card"><p class="eyeb">The mini-story</p><h3 class="dsp" style="font-size:23px;margin:0 0 8px">' + esc(t.miniStory.title || t.title || '') + '</h3><p style="white-space:pre-wrap;line-height:1.7">' + esc(t.miniStory.text || '') + '</p><p class="muted-small">' + esc(t.miniStory.sourceLine || '') + '</p></div>'
      : '<div class="card"><p style="margin:0 0 10px">This thread can become a written mini-story — assembled only from these moments and your own words.</p><button type="button" class="btn btn-grad btn-small" id="td-ministory">Ask Rooney to write this thread</button></div>') +
    '<div class="card"><div class="toggle-row"><span><strong>Include in the Year Film</strong><br><span class="muted-small">This thread\'s photos close the film.</span></span><input type="checkbox" id="td-film" ' + (t.filmIncluded ? 'checked' : '') + ' style="width:22px;height:22px"></div></div>' +
    '<div class="card">' + reactionsHTML('thread', t.id, t.reactions) + commentsHTML('thread', t.id, t.commentCount || 0) + '</div>' +
    (items === null ? '<div class="skeleton"></div>' : (list.length ? Object.keys(byYear).sort().map((y) => '<div class="year-group"><h3>' + esc(y) + '</h3><div class="item-grid">' + byYear[y].map((m) => '<div class="item-cell" data-item="' + esc(m.id) + '"><button type="button" class="item-remove" data-remove-item="' + esc(m.id) + '" aria-label="Remove from this thread">✕</button>' + (m.type === 'photo' || m.type === 'video' ? mediaHTML(m) : '<div style="padding:12px">' + mediaHTML(m) + '</div>') + '<p class="cap">' + esc(m.caption || m.type) + ' · ' + esc(fmtDate(m.takenAt, { month: 'short', day: 'numeric' })) + '</p></div>').join('') + '</div></div>').join('') : '<div class="empty"><p>No moments are in this thread yet.</p></div>'));
  wireComments(root);
  $$('[data-reactions]', root).forEach((wrap) => { const parts = (wrap.getAttribute('data-reactions') || '').split(':'); wireReactions(wrap, parts[0], parts.slice(1).join(':')); });
  const followBtn = $('#td-follow', root); if (followBtn) followBtn.addEventListener('click', async () => { try { await api(F('/threads/' + encodeURIComponent(t.id) + '/follow'), { method: 'POST', body: {} }); toast('Following this thread.'); await refreshData(); loadThreadDetail(t.id); } catch (e) { if (e.data && e.data.code === 'thread_limit') openPlanSheet(); else toast(e.message, 'error'); } });
  const unfollowBtn = $('#td-unfollow', root); if (unfollowBtn) unfollowBtn.addEventListener('click', async () => { try { await api(F('/threads/' + encodeURIComponent(t.id) + '/unfollow'), { method: 'POST', body: {} }); await refreshData(); loadThreadDetail(t.id); } catch (e) { toast(e.message, 'error'); } });
  const renameBtn = $('#td-rename', root); if (renameBtn) renameBtn.addEventListener('click', () => {
    openSheet('<h3>Rename this thread</h3><form id="td-rename-form"><label class="field"><span>Thread name</span><input name="title" required value="' + esc(t.title || '') + '"></label><p class="form-error" role="alert" hidden></p><button class="btn btn-grad btn-block" type="submit">Save name</button><button type="button" class="btn btn-ghost btn-block" data-close-sheet>Cancel</button></form>');
    wireCloseSheet();
    $('#td-rename-form').addEventListener('submit', async (e) => { e.preventDefault(); try { const res = await api(F('/threads/' + encodeURIComponent(t.id)), { method: 'PATCH', body: { title: new FormData(e.currentTarget).get('title') } }); const nt = (res && (res.thread || res)) || t; closeSheet(); await refreshData(); paintThreadDetail(root, Object.assign({}, t, nt), list); toast('Thread renamed.'); } catch (err) { formError(e.currentTarget, err.message); } });
  });
  const filmToggle = $('#td-film', root); if (filmToggle) filmToggle.addEventListener('change', async () => { try { await api(F('/threads/' + encodeURIComponent(t.id)), { method: 'PATCH', body: { filmIncluded: filmToggle.checked } }); toast(filmToggle.checked ? 'This thread will close the Year Film.' : 'Removed from the Year Film.'); } catch (e) { toast(e.message, 'error'); filmToggle.checked = !filmToggle.checked; } });
  const msBtn = $('#td-ministory', root); if (msBtn) msBtn.addEventListener('click', async () => {
    if (isStartPlan()) { openPlanSheet(); return; }
    msBtn.disabled = true; msBtn.textContent = 'Rooney is writing…';
    try { const res = await api(F('/threads/' + encodeURIComponent(t.id) + '/ministory'), { method: 'POST', body: {} }); const nt = (res && (res.thread || res)) || t; if (nt.miniStory) t.miniStory = nt.miniStory; await refreshData(); paintThreadDetail(root, t, list); }
    catch (e) { if (e.data && (e.data.code === 'plan_gate')) openPlanSheet(); else toast(e.message, 'error'); msBtn.disabled = false; msBtn.textContent = 'Ask Rooney to write this thread'; }
  });
  $$('[data-remove-item]', root).forEach((b) => b.addEventListener('click', async () => { try { await api(F('/threads/' + encodeURIComponent(t.id) + '/remove-item'), { method: 'POST', body: { memoryId: b.dataset.removeItem } }); const cell = b.closest('[data-item]'); if (cell) cell.remove(); toast('Removed from this thread — the memory itself is untouched.'); } catch (e) { toast(e.message, 'error'); } }));
  refreshShareChip($('[data-share-chip]', root), { scope: 'thread', targetId: t.id });
  if (items === null) loadThreadDetail(t.id);
}

/* ================= QUESTIONS ================= */
function renderQuestions(root) {
  const pending = state.prompts.filter(isPendingPrompt);
  /* FEATURED (board choice, documented): the pending Weekly One if one
     exists, else the first pending prompt. */
  const featured = pending.find(isWeeklyOne) || pending[0] || null;
  const remaining = featured ? pending.filter((p) => p !== featured) : [];
  /* Previous questions: newest answer first, by the last answer's
     answeredAt (descending). */
  const lastAnswerAt = (p) => { const ans = (p.answers || []); const last = ans[ans.length - 1] || {}; return last.answeredAt ? new Date(last.answeredAt).getTime() : 0; };
  const answered = state.prompts.filter((p) => !isPendingPrompt(p)).slice().sort((a, b) => lastAnswerAt(b) - lastAnswerAt(a));
  let html = '<p class="meta-line">Rooney asks, so it isn\'t lost</p><h1 class="dsp">Questions</h1><p class="lead">Specific questions nobody thinks to record. They never expire — answer today, or in a month. No streaks, no guilt.</p>';
  if (featured) {
    /* Related photo: only if the prompt record references a memory
       that resolves to a real photo in state.memories — the record's
       reference fields are checked in this order (sourceMemoryId is
       the field the engine actually writes). No reference, no photo —
       never a placeholder. */
    const refId = [featured.sourceMemoryId, featured.memoryId, featured.contextMemoryId, featured.anchorMemoryId].find((id) => { if (!id) return false; const m = memById(id); return !!(m && m.type === 'photo' && mediaSrc(m)); });
    let doors = promptDoorsHTML(featured, { weekly: isWeeklyOne(featured) });
    if (refId) {
      const pm = memById(refId);
      doors = doors.replace('<div class="answer-doors"', '<div class="q-featured-photo"><img src="' + esc(mediaSrc(pm)) + '" alt="' + esc(pm.caption || '') + '" loading="lazy"></div><div class="answer-doors"');
    }
    html += '<div class="q-featured-card"><p class="q-label-row">' + (isWeeklyOne(featured) ? '<span class="q-dot" aria-hidden="true"></span>This week\'s question' : 'A question for you') + '</p><div class="q-featured">' + doors + '</div></div>';
  } else {
    html += '<div class="empty"><img src="assets/mark-dark.png" class="empty-mark" alt=""><h3>All caught up — for now</h3><p>Rooney asks a few times a week, at the times you choose below. Nothing is waiting, and nothing ever expires.</p></div>';
  }
  if (remaining.length) {
    /* "Also waiting" — CHOICE (documented): the remaining prompts are
       the existing promptDoorsHTML cards inside a compact list
       (.q-compact reduces padding and the question to 18px Display),
       rather than tap-to-expand rows — the doors stay one tap away
       everywhere on this screen, no hidden state. */
    html += '<h2 class="section-title">Also waiting</h2><div class="q-compact-list">' + remaining.map((p) => '<div class="q-compact">' + promptDoorsHTML(p, { weekly: isWeeklyOne(p) }) + '</div>').join('') + '</div>';
  }
  if (answered.length) {
    html += '<h2 class="q-prev-header">Previous questions</h2><div class="q-prev-list">' + answered.map((p) => {
      const ans = (p.answers || []); const last = ans[ans.length - 1] || {};
      const am = last.memoryId ? memById(last.memoryId) : null;
      const thumb = (am && am.type === 'photo' && mediaSrc(am)) ? '<img class="q-prev-thumb" src="' + esc(mediaSrc(am)) + '" alt="" loading="lazy">' : '';
      const meta = [last.answeredAt ? fmtDay(last.answeredAt) : '', last.answeredByName || ''].filter(Boolean).join(' · ');
      return '<div class="q-prev-row"><span class="q-prev-main"><span class="q-prev-meta">' + esc(meta) + '</span><span class="q-prev-q">' + esc(promptQuestion(p)) + '</span>' + (last.text ? '<span class="q-prev-a">' + esc(last.text) + '</span>' : '') + '</span>' + thumb + '</div>';
    }).join('') + '</div>';
  }
  if (startWeekOneEnded()) html += '<div class="card" style="background:var(--pink);border-color:transparent"><p style="margin:0 0 10px"><strong>Your first week of questions has finished — Roon keeps asking when you start your plan.</strong></p><button type="button" class="btn btn-grad btn-small" id="q-plan-btn">Start your plan</button></div>';
  html += '<p class="muted">Series answers gather side-by-side in your <a href="#/story">Story</a> — the same question, across the years.</p>';
  html += interviewsHTML();
  html += promptSettingsHTML();
  root.innerHTML = html;
  wirePromptDoors(root);
  /* Featured door icons: prepended post-render, so the doors builder
     (and its wiring, which keys off [data-prompt] / [data-door]) is
     untouched; the listeners live on the buttons themselves. */
  $$('.q-featured [data-door]', root).forEach((b) => {
    const d = b.dataset.door;
    const icon = d === 'write' ? svgPenIcon() : d === 'speak' ? svgMicIcon() : d === 'photo' ? svgPhotoIcon() : '';
    if (icon) b.insertAdjacentHTML('afterbegin', '<span class="q-door-icon">' + icon + '</span>');
  });
  const qp = $('#q-plan-btn', root); if (qp) qp.addEventListener('click', openPlanSheet);
  wireInterviews(root); wirePromptSettings(root);
}
function interviewsHTML() {
  const list = state.interviews;
  return '<div id="interviews-block"><h2 class="section-title">Interviews — ask them their stories</h2>' +
    '<div class="card"><p style="margin:0 0 12px">Pick a person, and Rooney frames one good question — anchored to a photo, if you choose one. They answer by voice or writing on a simple link, no account needed.</p>' +
    '<form id="interview-form"><label class="field"><span>Ask</span><select name="personId">' + state.people.map((p) => '<option value="' + esc(p.id) + '">' + esc(p.name) + '</option>').join('') + '</select></label>' +
    '<label class="field"><span>Anchor photo (optional)</span><select name="memoryId"><option value="">No photo — a question from Rooney\'s bank</option>' + state.memories.filter((m) => m.type === 'photo').slice(0, 60).map((m) => '<option value="' + esc(m.id) + '">' + esc((m.caption || 'Photo') + ' · ' + fmtDate(m.takenAt)) + '</option>').join('') + '</select></label>' +
    '<label class="field"><span>Who may see the answers</span><select name="audience"><option value="den">The Den — everyone in the family</option><option value="private">Just me</option></select></label>' +
    '<p class="form-error" role="alert" hidden></p><button type="submit" class="btn btn-grad">Start the interview</button><div id="interview-result" style="margin-top:12px"></div></form></div>' +
    (list.length ? list.map((iv) => {
      const answers = iv.answers || (iv.prompt && iv.prompt.answers) || [];
      const status = iv.status || (answers.length ? 'answered' : 'awaiting');
      return '<div class="card"><div class="kicker-row"><span class="badge ' + (status === 'answered' ? 'bpink' : 'bsoft') + '">' + (status === 'answered' ? 'Answered' : 'Waiting for their answer') + '</span>' + (iv.audience === 'private' ? '<span class="badge bsoft">Just me</span>' : '') + (iv.sample ? '<span class="badge bsample">Sample</span>' : '') + '</div>' +
        '<p class="dsp" style="font-size:21px;margin:0 0 6px">For ' + esc(iv.personName || personName(iv.personId)) + '</p>' +
        (iv.question ? '<p style="margin:0 0 8px">“' + esc(iv.question) + '”</p>' : '') +
        answers.map((a) => '<p style="margin:0 0 6px">' + esc(a.text || '') + ' <span class="muted-small">— ' + esc(a.answeredByName || 'via link') + '</span></p>').join('') +
        /* Interview sharing goes through the share sheet (interview
           scope, target = the interview's prompt id) — it replaces the
           old raw reply-link copy row. */
        ((iv.promptId || (iv.prompt && iv.prompt.id)) ? '<p style="margin:10px 0 0">' + shareBtnHTML({ scope: 'interview', targetId: iv.promptId || iv.prompt.id, objectTitle: iv.question || 'An interview question' }, { label: 'Invite an answer' }) + '</p>' : '') +
        '</div>';
    }).join('') : '<p class="muted">No interviews yet — your first one is above.</p>') + '</div>';
}
function wireInterviews(root) {
  const form = $('#interview-form', root); if (!form) return;
  $$('[data-copy]', root).forEach((b) => b.addEventListener('click', () => copyText(b.dataset.copy, 'Interview link copied.')));
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); const fd = new FormData(form);
    const btn = $('button[type="submit"]', form); btn.disabled = true; btn.textContent = 'Framing the question…';
    try {
      const body = { personId: fd.get('personId') }; const mid = fd.get('memoryId'); if (mid) body.memoryId = mid; const aud = fd.get('audience'); if (aud) body.audience = aud;
      const res = await api(F('/interviews'), { method: 'POST', body });
      const iv = (res && res.interview) || {};
      const out = $('#interview-result', form);
      out.innerHTML = '<div class="card" style="margin:0;background:var(--bone)"><p style="margin:0 0 6px"><strong>Rooney\'s question for ' + esc(iv.personName || personName(body.personId)) + ':</strong></p><p style="margin:0 0 10px">“' + esc(iv.question || '') + '”</p>' +
        (iv.promptId ? '<p style="margin:0">' + shareBtnHTML({ scope: 'interview', targetId: iv.promptId, objectTitle: iv.question || 'An interview question' }, { label: 'Invite an answer' }) + '</p>' : '') + '</div>';
      toast('Interview started.');
      state.loadedFor = null;
    } catch (err) { if (err.data && err.data.code === 'interview_limit') openPlanSheet(); else formError(form, err.message); }
    finally { btn.disabled = false; btn.textContent = 'Start the interview'; }
  });
}
function promptSettingsHTML() {
  const s = state.promptSettings || { days: [1, 3, 5], time: '19:00', perWeek: 3, phone: '' };
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return '<h2 class="section-title">When Rooney asks</h2><div class="card"><form id="ps-form">' +
    '<fieldset style="border:none;padding:0;margin:0 0 12px"><legend class="field" style="margin:0"><span>Days</span></legend><div style="display:flex;gap:6px;flex-wrap:wrap">' +
    dayNames.map((d, i) => '<label class="chip' + ((s.days || []).includes(i) ? ' is-active' : '') + '" style="cursor:pointer"><input type="checkbox" name="days" value="' + i + '"' + ((s.days || []).includes(i) ? ' checked' : '') + ' class="visually-hidden"> ' + d + '</label>').join('') + '</div></fieldset>' +
    '<label class="field"><span>Time of day</span><input type="time" name="time" value="' + esc(s.time || '19:00') + '"></label>' +
    '<label class="field"><span>Questions per week</span><select name="perWeek">' + [1, 2, 3, 4, 5].map((n) => '<option value="' + n + '"' + (Number(s.perWeek) === n ? ' selected' : '') + '>' + n + ' per week</option>').join('') + '</select></label>' +
    '<label class="field"><span>Phone for text questions (optional)</span><input type="tel" name="phone" value="' + esc(s.phone || '') + '" placeholder="+1…"></label>' +
    '<p class="muted-small">Texts are recorded honestly: until messaging keys are added, they show as queued — nothing is ever marked sent that wasn\'t.</p>' +
    '<p class="form-error" role="alert" hidden></p><button type="submit" class="btn btn-grad">Save question settings</button></form></div>';
}
function wirePromptSettings(root) {
  const form = $('#ps-form', root); if (!form) return;
  $$('input[name="days"]', form).forEach((cb) => cb.addEventListener('change', () => cb.closest('label').classList.toggle('is-active', cb.checked)));
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); const fd = new FormData(form);
    const payload = { days: $$('input[name="days"]:checked', form).map((i) => Number(i.value)), time: fd.get('time'), perWeek: Number(fd.get('perWeek')), phone: fd.get('phone') };
    try { const res = await api(F('/prompt-settings'), { method: 'PATCH', body: payload }); state.promptSettings = (res && res.settings) || payload; toast('Saved — Rooney will ask on your rhythm.'); }
    catch (err) { formError(form, err.message); }
  });
}

/* ================= FILM ================= */
const filmState = { items: [], idx: 0, timer: null, playing: false, year: null };
function renderFilm(root) {
  const years = Array.from(new Set(state.memories.filter((m) => m.takenAt).map((m) => yearOf(m.takenAt)))).filter(Boolean).sort().reverse();
  const threads = state.threads.filter((t) => t.status === 'followed');
  const wantedThread = new URLSearchParams(location.hash.split('?')[1] || '').get('thread') || '';
  root.innerHTML = '<p class="eyeb">January\'s gift, any day of the year</p><h1 class="dsp">Your year, as a film</h1><p class="lead">Plays from your photos — in date order, with your chapters and your own captions as the words on screen.</p>' +
    '<div class="card"><div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end">' +
    '<label class="field" style="margin:0;flex:1;min-width:150px"><span>Year</span><select id="film-year">' + (years.length ? years.map((y) => '<option value="' + esc(y) + '">' + esc(y) + '</option>').join('') : '<option value="">No photos yet</option>') + '</select></label>' +
    '<label class="field" style="margin:0;flex:1;min-width:180px"><span>Close with a thread (optional)</span><select id="film-thread"><option value="">No thread</option>' + threads.map((t) => '<option value="' + esc(t.id) + '"' + (wantedThread === String(t.id) ? ' selected' : '') + '>' + esc(t.title || 'Thread') + '</option>').join('') + '</select></label>' +
    '<button type="button" class="btn btn-grad" id="film-play">▶ Watch together</button>' +
    '<button type="button" class="btn btn-outline share-btn" id="film-share">' + igIconShare() + 'Share</button></div>' +
    '<div data-share-chip></div>' +
    '<div id="film-msg" style="margin-top:12px"></div></div>' +
    '<div class="film-stage"><p class="eyeb" style="color:#F2BAE8">Family night mode</p><p style="color:rgba(255,255,255,.78);line-height:1.65;margin:0;max-width:540px">Press play and put the phone down. The film crossfades through the year, chapter titles appear as intertitles, and a followed thread can close the night. Fullscreen is “Watch together.”</p></div>';
  const playBtn = $('#film-play', root);
  if (playBtn) playBtn.addEventListener('click', () => loadFilm($('#film-year', root).value, $('#film-thread', root).value));
  /* Share the film for the year currently chosen in the picker — the
     spec is read at tap time, so changing the year retargets both the
     share button and the keeper chip. */
  const filmShareBtn = $('#film-share', root);
  if (filmShareBtn) filmShareBtn.addEventListener('click', () => {
    const y = $('#film-year', root) ? $('#film-year', root).value : '';
    if (!y) { toast('Bring in some photos first — the film is made of them.'); return; }
    openShareSheet({ scope: 'film', filmYear: Number(y), objectTitle: y + ' — the film' });
  });
  const filmYearSel = $('#film-year', root);
  if (filmYearSel) {
    if (filmYearSel.value) refreshShareChip($('[data-share-chip]', root), { scope: 'film', filmYear: Number(filmYearSel.value) });
    filmYearSel.addEventListener('change', () => {
      const slot = $('[data-share-chip]', root);
      if (slot) slot.innerHTML = filmYearSel.value ? shareChipHTML({ scope: 'film', filmYear: Number(filmYearSel.value) }) : '';
    });
  }
  if (wantedThread && years.length) loadFilm(years[0], wantedThread);
}
async function loadFilm(year, threadId) {
  const msg = $('#film-msg'); if (!year) { if (msg) msg.innerHTML = '<p class="muted">Bring in some photos first — the film is made of them.</p>'; return; }
  if (msg) msg.innerHTML = '<p class="muted-small">Gathering ' + esc(year) + '…</p>';
  try {
    const res = await api(F('/film/' + encodeURIComponent(year)) + (threadId ? '?thread=' + encodeURIComponent(threadId) : ''));
    const items = (res && (res.film || res.items)) || [];
    if (msg) msg.innerHTML = '';
    if (!items.length) { if (msg) msg.innerHTML = '<p class="muted">No photos from ' + esc(year) + ' yet.</p>'; return; }
    startFilmPlayer(items, year);
  } catch (e) {
    if (e.data && e.data.code === 'plan_gate') { if (msg) msg.innerHTML = '<div class="card" style="background:var(--pink);border-color:transparent;margin:0"><p style="margin:0 0 10px"><strong>The Year Film is part of the plan</strong> — Start is a test run: your first chapter, on Roon. The film, letters and the full story arrive when you start your plan.</p><button type="button" class="btn btn-grad btn-small" id="film-plan-btn">Start your plan</button></div>'; const b = $('#film-plan-btn'); if (b) b.addEventListener('click', openPlanSheet); }
    else if (msg) msg.innerHTML = '<p>' + esc(e.message) + '</p>';
  }
}
function startFilmPlayer(items, year) {
  filmState.items = items; filmState.idx = 0; filmState.playing = true; filmState.year = year;
  const player = $('#film-player');
  player.innerHTML = '<div class="film-stage-area" id="film-area"><div class="film-frame" id="film-frame-a"></div><div class="film-frame" id="film-frame-b" style="opacity:0"></div><div class="film-intertitle" id="film-inter" hidden><p></p></div><p class="film-caption" id="film-cap"></p></div>' +
    '<div class="film-controls"><button type="button" class="btn btn-small" id="fp-toggle">❚❚ Pause</button><div class="film-progress"><i id="fp-bar" style="width:0%"></i></div><span id="fp-count" style="font-size:13px"></span><button type="button" class="btn btn-small" id="fp-fs">Watch together (fullscreen)</button><button type="button" class="btn btn-small" id="fp-exit">Exit film</button></div>';
  player.hidden = false; document.body.classList.add('locked');
  showFilmFrame(0, true);
  filmState.timer = setInterval(() => { if (filmState.playing) showFilmFrame(filmState.idx + 1, false); }, 4200);
  $('#fp-toggle').addEventListener('click', (e) => { filmState.playing = !filmState.playing; e.currentTarget.textContent = filmState.playing ? '❚❚ Pause' : '▶ Play'; });
  $('#fp-exit').addEventListener('click', stopFilmPlayer);
  $('#fp-fs').addEventListener('click', () => { const area = $('#film-area'); if (area && area.requestFullscreen) area.requestFullscreen().catch(() => {}); else if (player.requestFullscreen) player.requestFullscreen().catch(() => {}); });
}
function showFilmFrame(idx, first) {
  const items = filmState.items; if (!items.length) return;
  if (idx >= items.length) { stopFilmPlayer(); toast('That was ' + (filmState.year || 'the year') + ' — every photo really yours.'); return; }
  filmState.idx = idx;
  const item = items[idx];
  const inter = $('#film-inter'); const cap = $('#film-cap');
  const showInter = item.intertitle && (first || !items[idx - 1] || items[idx - 1].intertitle !== item.intertitle);
  if (showInter && inter) { inter.hidden = false; $('p', inter).textContent = item.intertitle; } else if (inter) inter.hidden = true;
  const a = $('#film-frame-a'); const b = $('#film-frame-b');
  const src = item.src || item.renditionRef || item.fileRef || '';
  const active = (!first && a.style.opacity !== '0') ? b : a; const other = active === a ? b : a;
  active.innerHTML = src ? '<img src="' + esc(src) + '" alt="">' : '';
  active.style.opacity = '1'; other.style.opacity = '0';
  if (cap) cap.textContent = item.caption || item.storyText || '';
  const bar = $('#fp-bar'); if (bar) bar.style.width = Math.round(((idx + 1) / items.length) * 100) + '%';
  const count = $('#fp-count'); if (count) count.textContent = (idx + 1) + ' / ' + items.length;
}
function stopFilmPlayer() { if (filmState.timer) clearInterval(filmState.timer); filmState.timer = null; filmState.playing = false; const p = $('#film-player'); p.hidden = true; p.innerHTML = ''; document.body.classList.remove('locked'); if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); }

/* ================= FAMILY ================= */
function personCardHTML(p) {
  const pn = pronoun(p);
  const chaptersIn = state.chapters.filter((ch) => chapterMemories(ch).some((m) => (m.peopleIds || []).map(String).includes(String(p.id)))).length;
  return '<div class="card person-card" data-person-card="' + esc(p.id) + '"><span class="person-avatar">' + esc(initialOf(p.name)) + '</span><div style="flex:1;min-width:0">' +
    '<p style="margin:0"><a href="#/person/' + encodeURIComponent(p.id) + '" style="font-weight:700;font-size:17px;color:var(--ink);text-decoration:none">' + esc(p.name) + '</a>' + (p.sample ? ' <span class="badge bsample">Sample</span>' : '') + '</p>' +
    '<p class="muted-small" style="margin:2px 0">' + esc(p.relationship || '') + (chaptersIn ? ' · in ' + chaptersIn + ' chapter' + (chaptersIn === 1 ? '' : 's') : '') + '</p>' +
    (p.followed ? '<p style="margin:4px 0"><span class="badge bpink">Rooney follows ' + pn.subj + ' story</span> <span class="muted-small">' + esc(postureWords(p)) + (p.posture === 'remembering' && p.diedOn ? ' · died ' + esc(fmtDay(p.diedOn)) : '') + '</span></p>' : '<p class="muted-small" style="margin:4px 0">In photos and the story — Rooney isn\'t following ' + pn.poss + ' storyline yet.</p>') +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">' +
    (p.followed ? '<button type="button" class="btn btn-outline btn-small" data-unfollow-person="' + esc(p.id) + '">Unfollow</button>' : '<button type="button" class="btn btn-grad btn-small" data-follow-person="' + esc(p.id) + '">Follow ' + pn.poss + ' story</button>') +
    '<button type="button" class="btn btn-ghost btn-small" data-edit-person="' + esc(p.id) + '">Edit</button>' +
    '<a class="btn btn-ghost btn-small" href="#/person/' + encodeURIComponent(p.id) + '">Their page →</a></div></div></div>';
}
function editPersonSheet(p) {
  p = p || {};
  openSheet('<h3>' + (p.id ? 'Edit ' + esc(firstName(p.name)) : 'Add a person') + '</h3><form id="person-form">' +
    '<label class="field"><span>Name</span><input name="name" required value="' + esc(p.name || '') + '"></label>' +
    '<label class="field"><span>Relationship</span><input name="relationship" value="' + esc(p.relationship || '') + '" placeholder="Daughter, Grandfather, partner…"></label>' +
    '<label class="field"><span>Birthdate (optional)</span><input type="date" name="birthdate" value="' + esc(p.birthdate ? String(p.birthdate).slice(0, 10) : '') + '"></label>' +
    '<label class="field"><span>How Rooney follows them</span><select name="posture"><option value="growing"' + (p.posture === 'growing' || !p.posture ? ' selected' : '') + '>Growing up</option><option value="together"' + (p.posture === 'together' ? ' selected' : '') + '>Our life together</option><option value="remembering"' + (p.posture === 'remembering' ? ' selected' : '') + '>Remembering</option></select></label>' +
    '<div id="died-wrap" ' + (p.posture === 'remembering' ? '' : 'hidden') + '><label class="field"><span>Died on (optional)</span><input type="date" name="diedOn" value="' + esc(p.diedOn ? String(p.diedOn).slice(0, 10) : '') + '"></label></div>' +
    '<label class="field"><span>New moments with them start as</span><select name="defaultAudience"><option value=""' + (p.defaultAudience !== 'private' && p.defaultAudience !== 'den' ? ' selected' : '') + '>No preference — the usual rule</option><option value="private"' + (p.defaultAudience === 'private' ? ' selected' : '') + '>Just me</option><option value="den"' + (p.defaultAudience === 'den' ? ' selected' : '') + '>Shared with the Den</option></select></label>' +
    '<p class="form-error" role="alert" hidden></p>' +
    '<button type="submit" class="btn btn-grad btn-block">' + (p.id ? 'Save' : 'Add person') + '</button><button type="button" class="btn btn-ghost btn-block" data-close-sheet>Cancel</button></form>');
  wireCloseSheet();
  const postureSel = $('#person-form select[name="posture"]');
  postureSel.addEventListener('change', () => { $('#died-wrap').hidden = postureSel.value !== 'remembering'; });
  $('#person-form').addEventListener('submit', async (e) => {
    e.preventDefault(); const form = e.currentTarget; const fd = new FormData(form);
    const payload = { name: fd.get('name'), relationship: fd.get('relationship'), birthdate: fd.get('birthdate') || null, posture: fd.get('posture'), diedOn: fd.get('posture') === 'remembering' ? (fd.get('diedOn') || null) : null, defaultAudience: fd.get('defaultAudience') || null };
    try {
      if (p.id) await api('/api/people/' + encodeURIComponent(p.id), { method: 'PATCH', body: payload });
      else await api(F('/people'), { method: 'POST', body: payload });
      closeSheet(); await refreshData(); render(); toast(p.id ? 'Saved.' : 'Added to the story.');
    } catch (err) { formError(form, err.message); }
  });
}
async function setFollowed(p, followed) {
  try { await api('/api/people/' + encodeURIComponent(p.id), { method: 'PATCH', body: { followed } }); await refreshData(); render(); toast(followed ? 'Rooney is following ' + firstName(p.name) + "'s story now." : 'Rooney stopped following — ' + firstName(p.name) + ' stays in the story and in photos.'); }
  catch (e) { if (e.data && e.data.code === 'storyline_limit') openStorylineSheet(p); else toast(e.message, 'error'); }
}
function renderFamily(root) {
  const fam = state.family;
  const members = (fam && fam.members) || [];
  const pres = presented();
  /* PEOPLE CIRCLES (board composition): followed people first. The
     circle image is the person's most recent PHOTO moment (takenAt
     DESC); the fallback is a bone disc with their initial. The count
     under the name is the real count of memories tagged with them. */
  const circleHTML = (p) => {
    const tagged = state.memories.filter((m) => (m.peopleIds || []).map(String).includes(String(p.id)));
    const recentPhoto = tagged.filter((m) => m.type === 'photo' && mediaSrc(m)).slice().sort((a, b) => new Date(b.takenAt || b.createdAt || 0) - new Date(a.takenAt || a.createdAt || 0))[0] || null;
    const img = recentPhoto ? '<img src="' + esc(mediaSrc(recentPhoto)) + '" alt="">' : '<span class="fam-circle-initial">' + esc(initialOf(p.name)) + '</span>';
    return '<a class="fam-circle" href="#/person/' + encodeURIComponent(p.id) + '"><span class="fam-circle-img">' + img + '</span><span class="fam-circle-name">' + esc(p.name) + '</span><span class="fam-circle-count">' + num(tagged.length) + ' memor' + (tagged.length === 1 ? 'y' : 'ies') + '</span></a>';
  };
  /* FAMILY TIMELINE: memories grouped by month key (takenAt, else
     createdAt), newest month first. A memory with neither date has no
     month and is left out. The row strip shows up to 4 media thumbs
     (photo, or video poster with a play glyph), most recent first;
     "+N" counts the remaining media thumbs in that month. */
  const byMonth = {};
  state.memories.forEach((m) => { const key = String(m.takenAt || m.createdAt || '').slice(0, 7); if (!/^\d{4}-\d{2}$/.test(key)) return; (byMonth[key] = byMonth[key] || []).push(m); });
  const monthKeys = Object.keys(byMonth).sort().reverse();
  const timelineHTML = monthKeys.map((key) => {
    const list = byMonth[key];
    const media = list.filter((m) => (m.type === 'photo' && mediaSrc(m)) || (m.type === 'video' && m.poster)).slice().sort((a, b) => new Date(b.takenAt || b.createdAt || 0) - new Date(a.takenAt || a.createdAt || 0));
    const thumbs = media.slice(0, 4).map((m) => '<span class="timeline-thumb">' + (m.type === 'photo' ? '<img src="' + esc(mediaSrc(m)) + '" alt="" loading="lazy">' : '<img src="' + esc(m.poster) + '" alt="" loading="lazy"><span class="timeline-play">▶</span>') + '</span>').join('');
    const more = media.length - 4;
    return '<button type="button" class="timeline-row" data-timeline-month="' + esc(key) + '"><span class="timeline-dot" aria-hidden="true"></span><span class="timeline-left"><span class="timeline-month">' + esc(monthLabel(key)) + '</span><span class="timeline-count">' + num(list.length) + ' memor' + (list.length === 1 ? 'y' : 'ies') + '</span></span><span class="timeline-strip">' + thumbs + (more > 0 ? '<span class="timeline-more">+' + more + '</span>' : '') + '</span></button>';
  }).join('');
  let html = '<h1 class="dsp family-title">Family</h1><p class="family-sub">The people and memories that make up our story.</p>';
  html += '<div class="fam-circles">' + state.people.filter((p) => p.followed).map(circleHTML).join('') + '<button type="button" class="fam-circle fam-circle-add" id="fam-circle-add"><span class="fam-circle-img fam-circle-add-img">+</span><span class="fam-circle-name">Add</span><span class="fam-circle-count">&nbsp;</span></button></div>';
  /* The people row on Today is the keeper's arrangement (Den model):
     storylines first, in the order set here. Owner-only controls. */
  const iAmOwnerEarly = !!state.user && members.some((m) => m.userId === state.user.id && m.role === 'owner');
  if (iAmOwnerEarly && state.people.some((p) => p.followed)) {
    const orderIds = ((fam && fam.peopleRowOrder) || []).map(String);
    const followedOrdered = state.people.filter((p) => p.followed).slice().sort((a, b) => {
      const ia = orderIds.indexOf(String(a.id)), ib = orderIds.indexOf(String(b.id));
      return (ia < 0 ? 9999 : ia) - (ib < 0 ? 9999 : ib);
    });
    html += '<div class="card" id="row-order-card"><p style="margin:0 0 8px"><strong>The row on Today</strong><br><span class="muted-small">Your people, in the order they appear on the home screen. Rooney’s storylines lead the row.</span></p>' +
      followedOrdered.map((p, i) => '<p style="margin:0 0 6px;display:flex;gap:8px;align-items:center"><span style="flex:1"><strong>' + esc(p.name) + '</strong></span>' +
        '<button type="button" class="btn btn-ghost btn-small" data-row-move="-1" data-row-id="' + esc(p.id) + '"' + (i === 0 ? ' disabled' : '') + ' aria-label="Move earlier">↑</button>' +
        '<button type="button" class="btn btn-ghost btn-small" data-row-move="1" data-row-id="' + esc(p.id) + '"' + (i === followedOrdered.length - 1 ? ' disabled' : '') + ' aria-label="Move later">↓</button></p>').join('') + '</div>';
  }
  html += '<h2 class="fam-timeline-header">Family timeline</h2>' + (timelineHTML ? '<div class="timeline-list">' + timelineHTML + '</div>' : '<div class="empty"><p>No dated memories yet — the timeline appears as memories arrive.</p></div>');
  /* Everyone stays reachable and manageable below the circles: the
     full person list (followed people appear in both — the circles
     are the board composition, this list is the manager). The old
     separate "Add a person" row is replaced by the Add circle above. */
  html += '<h2 class="section-title">Everyone in the story</h2>' + (state.people.length ? state.people.map(personCardHTML).join('') : '<div class="empty"><h3>No people yet</h3><p>Add the people Rooney writes about — a child, a partner, a grandparent, someone you\'re remembering.</p></div>');
  const iAmOwner = !!state.user && members.some((m) => m.userId === state.user.id && m.role === 'owner');
  const roleWords = (r) => r === 'owner' ? 'Owner' : r === 'viewer' ? 'Watches and reacts — can\'t add or change things' : 'Can add photos and answer questions';
  html += '<h2 class="section-title">Who can add photos</h2><div class="card">' +
    members.map((m) => '<p style="margin:0 0 8px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><strong>' + esc(m.name || m.email || 'A family member') + '</strong> <span class="badge bsoft">' + esc(roleWords(m.role)) + '</span>' +
      (iAmOwner && m.role !== 'owner' && m.userId ? '<select data-member-role="' + esc(m.userId) + '" aria-label="Change what they can do"><option value="contributor"' + (m.role !== 'viewer' ? ' selected' : '') + '>Can add photos and answer questions</option><option value="viewer"' + (m.role === 'viewer' ? ' selected' : '') + '>Watches and reacts only</option></select><button type="button" class="btn btn-ghost btn-small btn-danger" data-member-remove="' + esc(m.userId) + '" data-member-name="' + esc(m.name || m.email || 'This person') + '">Remove</button>' : '') +
      '</p>').join('') +
    '<label class="field" style="margin:10px 0 0"><span>The next person you invite will</span><select id="fam-invite-role"><option value="contributor">Add photos and answer questions</option><option value="viewer">Watch and react — no adding or changing</option></select></label>' +
    '<button type="button" class="btn btn-outline btn-small" id="fam-invite" style="margin-top:10px">Invite someone</button><div id="invite-out" style="margin-top:10px"></div>' +
    '<p class="muted-small">Contributors use the locked words, always: “Can add photos and answer questions.”</p>' +
    /* Den model: the owner issues, anyone may suggest. Suggestions
       wait for the owner's one-tap OK — nothing is sent until then. */
    '<div id="den-proposals" style="margin-top:14px"></div><div id="den-suggest" style="margin-top:10px"></div></div>';
  html += '<h2 class="section-title">Answering by text</h2><div class="card">' +
    '<p style="margin:0 0 6px">Interviews started: <strong>' + state.interviews.length + '</strong> · answered: <strong>' + state.interviews.filter((iv) => iv.status === 'answered' || (iv.answers || []).length).length + '</strong></p>' +
    '<p class="muted-small" style="margin:0">Interview and question links work with no account. ' + esc(NO_PROVIDER_LINE) + '. Guest view links are below — view-only, and revocable.</p></div>';
  html += '<h2 class="section-title">Quiet corners</h2>' +
    '<a class="quiet-row" href="#/saved"><span><strong>Saved</strong><br><span class="muted-small">The moments you kept aside — all in one place.</span></span><span>→</span></a>' +
    '<a class="quiet-row" href="#/collections"><span><strong>Your collections</strong><br><span class="muted-small">Groups of moments you put together yourself.</span></span><span>→</span></a>' +
    '<a class="quiet-row" href="#/plan"><span><strong>Plan &amp; room</strong><br><span class="muted-small">' + esc(planName()) + (pres && pres.room ? ' · ' + num(pres.room.photosUsed) + ' of ' + num(pres.room.photosCap) + ' photos' : '') + '</span></span><span>→</span></a>' +
    '<a class="quiet-row" href="#/imports"><span><strong>Bring in photos</strong><br><span class="muted-small">Backfill — give Roon what you already have.</span></span><span>→</span></a>' +
    '<div class="card">' + SHARE_BRAND_HTML + '<p style="margin:0 0 10px"><strong>Shared links</strong><br><span class="muted-small">Read-only pages for family who don\'t have Roon. Everything you share — a chapter, a thread, the film, an interview, or the whole story — lives here, with who has seen it. Every link is revocable.</span></p>' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="btn btn-outline btn-small" id="guest-family">Create family link</button><label class="field" style="margin:0"><span class="visually-hidden">Thread for guest link</span><select id="guest-thread-sel"><option value="">Choose a thread…</option>' + state.threads.filter((t) => t.status === 'followed').map((t) => '<option value="' + esc(t.id) + '">' + esc(t.title || 'Thread') + '</option>').join('') + '</select></label><button type="button" class="btn btn-outline btn-small" id="guest-thread">Create thread link</button></div>' +
    '<div id="guest-list" style="margin-top:12px">' + guestLinksHTML() + '</div></div>' +
    '<a class="quiet-row" href="' + F('/export') + '"><span><strong>Export everything</strong><br><span class="muted-small">Every original, your story as a page, and all the data — a ZIP. Always free, never held back.</span></span><span>⬇</span></a>' +
    '<p><button type="button" class="btn btn-ghost btn-small" id="fam-new-family">+ Start another family</button></p>';
  root.innerHTML = html;
  wireFamily(root);
}
/* Shared links — every guest link, with its object title resolved
   against the loaded family data, its live/expires/revoked state, and
   the real keeper counts (views · hearts · comments) from GET
   guest-links. Revoke confirms inline, in the row. */
function guestLinksHTML() {
  if (!state.guestLinks.length) return '<p class="muted">Nothing shared yet — share a chapter, a thread, or the film and it will live here.</p>';
  return state.guestLinks.map((g) => {
    const live = shareLinkIsLive(g);
    const expired = !g.revoked && !live;
    const stateTxt = g.revoked ? 'Revoked' : expired ? 'Expired' : (g.expiresAt ? 'Live · Expires ' + fmtDay(g.expiresAt) : 'Live · No expiry');
    const c = shareCounts(g);
    return '<div class="shared-link"><div class="shared-link-main"><strong>' + esc(sharedLinkTitle(g)) + '</strong>' +
      '<span class="muted-small">' + esc(stateTxt) + ' · ' + num(c.views) + ' views · ' + num(c.hearts) + ' ❤️ · ' + num(c.comments) + ' comments</span></div>' +
      '<div class="shared-link-actions">' +
      (g.url ? '<button type="button" class="btn btn-ghost btn-small" data-copy="' + esc(g.url) + '">Copy</button>' : '') +
      (live ? '<button type="button" class="btn btn-ghost btn-small btn-danger" data-revoke-ask="' + esc(g.id) + '">Revoke</button>' : '') +
      '<span class="shared-revoke-confirm" data-revoke-box hidden><span>Revoke this link?</span><button type="button" class="btn btn-ghost btn-small btn-danger" data-revoke-yes="' + esc(g.id) + '">Yes, revoke</button><button type="button" class="btn btn-ghost btn-small" data-revoke-no>Keep</button></span>' +
      '</div></div>';
  }).join('');
}
function wireFamily(root) {
  $$('[data-follow-person]', root).forEach((b) => b.addEventListener('click', () => setFollowed(personById(b.dataset.followPerson), true)));
  $$('[data-unfollow-person]', root).forEach((b) => b.addEventListener('click', () => setFollowed(personById(b.dataset.unfollowPerson), false)));
  $$('[data-edit-person]', root).forEach((b) => b.addEventListener('click', () => editPersonSheet(personById(b.dataset.editPerson))));
  const add = $('#fam-add-person', root); if (add) add.addEventListener('click', () => editPersonSheet(null));
  const circleAdd = $('#fam-circle-add', root); if (circleAdd) circleAdd.addEventListener('click', () => editPersonSheet(null));
  $$('[data-timeline-month]', root).forEach((b) => b.addEventListener('click', () => { state.feedMonth = b.dataset.timelineMonth; state.feedScope = 'all'; state.feedCursor = null; state.feedDone = false; location.hash = '#/explore'; }));
  const invite = $('#fam-invite', root);
  if (invite) invite.addEventListener('click', async () => { invite.disabled = true; try { const roleSel = $('#fam-invite-role', root); const res = await api(F('/invite'), { method: 'POST', body: { role: roleSel ? roleSel.value : 'contributor' } }); const url = (res && (res.inviteUrl || res.url)) || ''; $('#invite-out', root).innerHTML = '<p class="muted-small" style="word-break:break-all">Share this invite link: <strong>' + esc(url) + '</strong> <button type="button" class="btn btn-ghost btn-small" id="invite-copy">Copy</button></p>'; const c = $('#invite-copy', root); if (c) c.addEventListener('click', () => copyText(url, 'Invite link copied.')); } catch (e) { toast(e.message, 'error'); } finally { invite.disabled = false; } });
  /* C5: the owner can move a member between adding and watching. */
  $$('[data-member-role]', root).forEach((sel) => sel.addEventListener('change', async () => {
    sel.disabled = true;
    try { await api(F('/members/' + encodeURIComponent(sel.dataset.memberRole)), { method: 'PATCH', body: { role: sel.value } }); await refreshData(); render(); toast('Updated — that is what they can do now.'); }
    catch (e) { toast(e.message, 'error'); sel.disabled = false; }
  }));
  /* Den model: removal ends access at once; what they added stays,
     with their name on it — the rule is printed before it happens. */
  $$('[data-member-remove]', root).forEach((b) => b.addEventListener('click', () => {
    const uid = b.dataset.memberRemove; const nm = b.dataset.memberName;
    openSheet('<h3>Remove ' + esc(nm) + ' from the Den?</h3><p class="muted">Their access ends right away, everywhere. Everything they added stays in the story, with their name on it — their comments stay too, unless you hide them. Nothing is deleted.</p><p><button type="button" class="btn btn-grad btn-block" id="member-remove-yes">Remove them</button></p><button type="button" class="btn btn-ghost btn-block" data-close-sheet>Keep them</button>');
    wireCloseSheet();
    $('#member-remove-yes').addEventListener('click', async () => {
      try { await api(F('/members/' + encodeURIComponent(uid)), { method: 'DELETE' }); closeSheet(); await refreshData(); render(); toast('Removed — their access has ended, and what they added stays in the story.'); }
      catch (e) { toast(e.message, 'error'); }
    });
  }));
  const mkGuest = async (scope, threadId) => { try { const body = { scope }; if (threadId) body.threadId = threadId; const res = await api(F('/guest-links'), { method: 'POST', body }); const url = (res && res.url) || (res && res.guestLink && res.guestLink.url) || ''; await refreshData(); render(); if (url) toast('Guest link created — copy it from the list below.'); } catch (e) { toast(e.message, 'error'); } };
  const gf = $('#guest-family', root); if (gf) gf.addEventListener('click', () => mkGuest('family'));
  const gt = $('#guest-thread', root); if (gt) gt.addEventListener('click', () => { const sel = $('#guest-thread-sel', root); if (!sel.value) { toast('Choose a followed thread first.'); return; } mkGuest('thread', sel.value); });
  $$('[data-copy]', root).forEach((b) => b.addEventListener('click', () => copyText(b.dataset.copy, 'Link copied.')));
  $$('[data-revoke-ask]', root).forEach((b) => b.addEventListener('click', () => { const row = b.closest('.shared-link'); const box = row ? $('[data-revoke-box]', row) : null; if (box) box.hidden = false; b.hidden = true; }));
  $$('[data-revoke-no]', root).forEach((b) => b.addEventListener('click', () => { const row = b.closest('.shared-link'); const box = row ? $('[data-revoke-box]', row) : null; if (box) box.hidden = true; const ask = row ? $('[data-revoke-ask]', row) : null; if (ask) ask.hidden = false; }));
  $$('[data-revoke-yes]', root).forEach((b) => b.addEventListener('click', async () => { b.disabled = true; try { await api(F('/guest-links/' + encodeURIComponent(b.dataset.revokeYes)), { method: 'DELETE' }); await refreshData(); render(); toast('Link revoked — it no longer opens.'); } catch (e) { toast(e.message, 'error'); b.disabled = false; } }));
  const nf = $('#fam-new-family', root); if (nf) nf.addEventListener('click', () => { location.hash = '#/onboarding'; });
  /* People-row arrangement: swap in the full followed order and save. */
  $$('[data-row-move]', root).forEach((b) => b.addEventListener('click', async () => {
    const orderIds = (((state.family || {}).peopleRowOrder) || []).map(String);
    const followed = state.people.filter((p) => p.followed).slice().sort((a, c) => {
      const ia = orderIds.indexOf(String(a.id)), ic = orderIds.indexOf(String(c.id));
      return (ia < 0 ? 9999 : ia) - (ic < 0 ? 9999 : ic);
    }).map((p) => String(p.id));
    const i = followed.indexOf(String(b.dataset.rowId));
    const j = i + parseInt(b.dataset.rowMove, 10);
    if (i < 0 || j < 0 || j >= followed.length) return;
    const tmp = followed[i]; followed[i] = followed[j]; followed[j] = tmp;
    b.disabled = true;
    try { await api(F('/people-row'), { method: 'PATCH', body: { order: followed } }); await refreshData(); render(); toast('Row updated — that’s the order on Today now.'); }
    catch (e) { toast(e.message, 'error'); b.disabled = false; }
  }));
  /* Den suggestions: members propose, the owner settles. The list is
     fetched fresh (it is not part of the family snapshot). */
  const iAmOwner2 = !!state.user && ((state.family || {}).members || []).some((m) => m.userId === state.user.id && m.role === 'owner');
  const paintProposals = async () => {
    const box = $('#den-proposals', root); const sg = $('#den-suggest', root);
    let props = [];
    try { const res = await api(F('/invite-proposals')); props = listOf(res, ['proposals']); } catch (e) { return; }
    if (box) {
      const pend = props.filter((p) => p.status === 'pending');
      if (iAmOwner2) {
        box.innerHTML = pend.length
          ? '<p style="margin:0 0 8px"><strong>Suggested for the Den</strong><br><span class="muted-small">Anyone in the Den can suggest someone. Nothing is sent until you say yes.</span></p>' + pend.map((p) => '<p style="margin:0 0 8px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><strong>' + esc(p.name) + '</strong> <span class="badge bsoft">' + (p.role === 'viewer' ? 'Watches and reacts' : 'Can add photos') + '</span> <span class="muted-small">suggested by ' + esc(p.proposedByName || 'a member') + '</span><button type="button" class="btn btn-grad btn-small" data-prop-approve="' + esc(p.id) + '">Approve &amp; get the invite link</button><button type="button" class="btn btn-ghost btn-small" data-prop-decline="' + esc(p.id) + '">Not now</button></p>').join('') + '<div id="prop-invite-out"></div>'
          : '<p class="muted-small" style="margin:0">No suggestions waiting. Anyone in the Den can suggest someone — their name lands here for your OK.</p>';
      } else {
        const mine = props.filter((p) => p.status !== 'approved');
        box.innerHTML = mine.length ? '<p style="margin:0 0 6px"><strong>Your suggestions</strong></p>' + mine.map((p) => '<p class="muted-small" style="margin:0 0 4px">' + esc(p.name) + ' — ' + (p.status === 'pending' ? 'waiting for the owner’s OK' : 'the owner let this one go') + '</p>').join('') : '';
      }
      $$('[data-prop-approve]', box).forEach((b) => b.addEventListener('click', async () => {
        b.disabled = true;
        try {
          const res = await api(F('/invite-proposals/' + encodeURIComponent(b.dataset.propApprove) + '/approve'), { method: 'POST', body: {} });
          const out = $('#prop-invite-out', root);
          if (out && res && res.inviteUrl) out.innerHTML = '<p class="muted-small" style="word-break:break-all">Approved — share this invite link: <strong>' + esc(res.inviteUrl) + '</strong> <button type="button" class="btn btn-ghost btn-small" id="prop-invite-copy">Copy</button></p>';
          const c = $('#prop-invite-copy', root); if (c) c.addEventListener('click', () => copyText(res.inviteUrl, 'Invite link copied.'));
          await paintProposals();
        } catch (e) { toast(e.message, 'error'); b.disabled = false; }
      }));
      $$('[data-prop-decline]', box).forEach((b) => b.addEventListener('click', async () => {
        b.disabled = true;
        try { await api(F('/invite-proposals/' + encodeURIComponent(b.dataset.propDecline) + '/decline'), { method: 'POST', body: {} }); await paintProposals(); }
        catch (e) { toast(e.message, 'error'); b.disabled = false; }
      }));
    }
    if (sg && !iAmOwner2) {
      sg.innerHTML = '<form id="den-suggest-form"><label class="field" style="margin:0 0 8px"><span>Suggest someone for the Den</span><input name="name" placeholder="Their name" autocomplete="off"></label>' +
        '<label class="field" style="margin:0 0 8px"><span>They would</span><select name="role"><option value="contributor">Add photos and answer questions</option><option value="viewer">Watch and react — no adding or changing</option></select></label>' +
        '<button type="submit" class="btn btn-outline btn-small">Send the suggestion</button> <span class="muted-small">The owner decides — nothing is sent to them yet.</span></form>';
      const form = $('#den-suggest-form', sg);
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const name = String(fd.get('name') || '').trim();
        if (!name) { toast('A name is enough to suggest someone.'); return; }
        try { await api(F('/invite-proposals'), { method: 'POST', body: { name, role: fd.get('role') } }); toast('Suggested — it’s with the owner now.'); await paintProposals(); }
        catch (err) { toast(err.message, 'error'); }
      });
    }
  };
  paintProposals();
}

/* ================= PERSON VIEW ================= */
function renderPerson(root, personId) {
  const p = personById(personId);
  if (!p) { root.innerHTML = '<div class="empty"><h3>That person isn\'t in this family</h3><p><a href="#/family">Back to Family →</a></p></div>'; return; }
  const mine = state.memories.filter((m) => (m.peopleIds || []).map(String).includes(String(p.id)));
  const chapters = state.chapters.filter((ch) => chapterMemories(ch).some((m) => (m.peopleIds || []).map(String).includes(String(p.id))) || String(ch.title || '').includes(p.name));
  const threads = state.threads.filter((t) => (t.match && String(t.match.personId) === String(p.id)) || (t.memoryIds || []).some((id) => { const m = state.memories.find((x) => String(x.id) === String(id)); return m && (m.peopleIds || []).map(String).includes(String(p.id)); }));
  const letters = state.letters.filter((l) => String(l.toPersonId) === String(p.id));
  /* Profile as a story home (CIRCLE-SPEC §2): a cover moment with the
     name set over it, then ONE identity line in archive counts —
     moments kept, stories told, since when. Never applause counts:
     there is no number on this page that measures attention. */
  const coverMem = mine.filter((m) => (m.type === 'photo' && mediaSrc(m)) || (m.type === 'video' && m.poster)).slice().sort((a, b) => new Date(b.takenAt || b.createdAt || 0) - new Date(a.takenAt || a.createdAt || 0))[0] || null;
  const coverSrc = coverMem ? (coverMem.type === 'photo' ? mediaSrc(coverMem) : coverMem.poster) : '';
  const years = mine.map((m) => new Date(m.takenAt || m.createdAt || 0).getFullYear()).filter((y) => y > 1900 && y < 3000);
  const sinceYear = years.length ? Math.min(...years) : (p.birthdate ? new Date(p.birthdate).getFullYear() : null);
  const identityLine = num(mine.length) + ' moment' + (mine.length === 1 ? '' : 's') + ' · ' + num(chapters.length) + ' stor' + (chapters.length === 1 ? 'y' : 'ies') + (sinceYear ? ' · since ' + sinceYear : '');
  root.innerHTML = '<p style="margin:0 0 10px"><a href="#/family">← Family</a></p>' +
    '<div class="profile-cover">' + (coverSrc ? '<img src="' + esc(coverSrc) + '" alt="">' : '<span class="profile-cover-fallback">' + esc(initialOf(p.name)) + '</span>') +
    '<div class="profile-cover-scrim"><h1 class="dsp">' + esc(p.name) + '</h1><p>' + esc(p.relationship || '') + (p.followed ? ' · Rooney follows ' + pronoun(p).subj + ' story — ' + esc(postureWords(p)) : ' · Rooney isn\'t following ' + pronoun(p).poss + ' storyline') + '</p></div></div>' +
    '<p class="profile-counts">' + esc(identityLine) + '</p>' +
    '<p style="margin:14px 0"><a class="btn btn-outline btn-small" href="#/explore" data-scoped="' + esc(p.id) + '">See ' + esc(firstName(p.name)) + "'s story in Moments</a> " +
    '<button type="button" class="btn btn-outline btn-small" id="pv-ask">Ask about ' + esc(firstName(p.name)) + '</button> ' +
    (p.followed ? '<button type="button" class="btn btn-ghost btn-small" id="pv-unfollow">Unfollow</button>' : '<button type="button" class="btn btn-grad btn-small" id="pv-follow">Follow ' + pronoun(p).poss + ' story</button>') +
    ' <button type="button" class="btn btn-ghost btn-small" id="pv-edit">Edit</button>' +
    ' <button type="button" class="btn btn-ghost btn-small" id="pv-mute">' + (p.resurfaceMuted ? 'Let On This Day show them again' : 'Keep them out of On This Day') + '</button>' +
    ' <button type="button" class="btn btn-ghost btn-small" id="pv-den">' + (p.denVisible === false ? 'Bring this storyline back into the Den' : 'Take this storyline out of the Den') + '</button></p>' +
    '<h2 class="section-title">Their chapters</h2>' + (chapters.length ? chapters.map((ch) => '<a class="toc-row" href="#/story/' + encodeURIComponent(ch.id) + '"><span><h3>' + esc(ch.title || 'Untitled chapter') + '</h3><span class="muted-small">' + esc(chapterRange(ch)) + '</span></span></a>').join('') : '<div class="empty"><p>No chapters centre on ' + esc(firstName(p.name)) + ' yet.</p></div>') +
    '<h2 class="section-title">Their threads</h2>' + (threads.length ? threads.map((t) => '<div class="card feed-card media-card">' + threadCardInner(t, t.status === 'followed' ? 'Following' : 'Watching') + '</div>').join('') : '<div class="empty"><p>No threads yet — Rooney is watching.</p></div>') +
    seriesHTML(p.id) +
    (isStartPlan() ? '' : '<h2 class="section-title">Letters for ' + esc(firstName(p.name)) + '</h2>' + (letters.length ? letters.map((l) => l.sealed && !l.due ? '<div class="card"><p class="dsp" style="font-size:20px;margin:0">A letter for ' + esc(l.toPersonName || p.name) + ' — opens ' + esc(fmtDay(l.deliverOn)) + '</p></div>' : '<div class="card"><p class="dsp" style="font-size:20px;margin:0 0 6px">' + esc(l.title || 'A letter') + '</p>' + (l.body ? '<p style="white-space:pre-wrap;line-height:1.7;margin:0">' + esc(l.body) + '</p>' : '<p class="muted" style="margin:0">' + esc(l.note || '') + '</p>') + '</div>').join('') : '<div class="empty"><p>No letters for ' + esc(firstName(p.name)) + ' yet — write one from the Story page.</p></div>')) +
    '<h2 class="section-title">Moments with ' + esc(firstName(p.name)) + '</h2>' + (mine.length ? '<div class="item-grid">' + mine.slice(0, 24).map((m) => '<div class="item-cell">' + (m.type === 'photo' || m.type === 'video' ? mediaHTML(m) : '<div style="padding:12px">' + mediaHTML(m) + '</div>') + '<p class="cap">' + esc(m.caption || m.type) + ' · ' + esc(fmtDate(m.takenAt, { month: 'short', year: 'numeric' })) + '</p></div>').join('') + '</div>' : '<div class="empty"><p>No moments tagged with ' + esc(firstName(p.name)) + ' yet.</p></div>');
  const scoped = $('[data-scoped]', root); if (scoped) scoped.addEventListener('click', (e) => { e.preventDefault(); state.feedScope = String(p.id); state.feedCursor = null; state.feedDone = false; location.hash = '#/explore'; if (state.view === 'explore') render(); });
  /* Ask about them: the profile's engine — one tap starts an
     interview about this person (with their strongest recent photo
     when there is one), and the answer lands back on this page. */
  const ask = $('#pv-ask', root); if (ask) ask.addEventListener('click', async () => {
    ask.disabled = true;
    try {
      const body = { personId: p.id };
      const recentPhoto = mine.filter((m) => m.type === 'photo').slice().sort((a, b) => new Date(b.takenAt || b.createdAt || 0) - new Date(a.takenAt || a.createdAt || 0))[0];
      if (recentPhoto) body.memoryId = recentPhoto.id;
      await api(F('/interviews'), { method: 'POST', body });
      toast('Rooney is asking about ' + firstName(p.name) + ' — it’s waiting in Questions.');
      location.hash = '#/questions';
    } catch (e) { toast(e.message, 'error'); ask.disabled = false; }
  });
  const f = $('#pv-follow', root); if (f) f.addEventListener('click', () => setFollowed(p, true));
  const uf = $('#pv-unfollow', root); if (uf) uf.addEventListener('click', () => setFollowed(p, false));
  const ed = $('#pv-edit', root); if (ed) ed.addEventListener('click', () => editPersonSheet(p));
  /* C3: one tap keeps every moment with this person out of On This
     Day (they stay everywhere else — nothing is hidden or deleted). */
  const pm = $('#pv-mute', root); if (pm) pm.addEventListener('click', async () => {
    const next = !p.resurfaceMuted; pm.disabled = true;
    try { await api('/api/people/' + encodeURIComponent(p.id), { method: 'PATCH', body: { resurfaceMuted: next } }); await refreshData(); render(); toast(next ? 'On This Day will leave ' + firstName(p.name) + "'s moments alone." : firstName(p.name) + "'s moments can come back in On This Day."); }
    catch (e) { toast(e.message, 'error'); pm.disabled = false; }
  });
  /* Archive vs Story: the per-storyline Den toggle — every moment
     with this person stops (or resumes) resolving for Den members. */
  const pd = $('#pv-den', root); if (pd) pd.addEventListener('click', async () => {
    const next = p.denVisible === false; pd.disabled = true;
    try { await api('/api/people/' + encodeURIComponent(p.id), { method: 'PATCH', body: { denVisible: next } }); await refreshData(); render(); toast(next ? firstName(p.name) + "'s moments are in the Den again." : firstName(p.name) + "'s moments are out of the Den — only you see them now."); }
    catch (e) { toast(e.message, 'error'); pd.disabled = false; }
  });
}

/* ================= PLAN ================= */
function renderPlan(root) {
  const pres = presented();
  const billing = state.billing || {};
  const room = (pres && pres.room) || { photosUsed: (state.usage && state.usage.counts ? state.usage.counts.photo : 0), photosCap: 2500, videoMinutesUsed: (state.usage && state.usage.videoMinutes) || 0, videoMinutesCap: 30 };
  const story = (pres && pres.storylines) || { used: state.people.filter((p) => p.followed).length, allowed: { start: 1, roon: 3, forever: 5 }[planKey()] };
  const followed = state.people.filter((p) => p.followed);
  const photoPct = room.photosCap ? Math.min(100, Math.round((room.photosUsed / room.photosCap) * 100)) : 0;
  const statusWords = billing.billingStatus === 'stripe_not_configured' || !billing.configured ? 'Billing isn\'t switched on yet — plan changes are recorded, never charged.' : (billing.billingStatus ? 'Billing status: ' + String(billing.billingStatus).replace(/_/g, ' ') + '.' : '');
  const checkouts = billing.checkouts || [];
  root.innerHTML = '<p class="eyeb">Yours, always</p><h1 class="dsp">Plan &amp; room</h1>' +
    '<div class="card"><div class="kicker-row"><span class="badge bpink">' + esc(planName()) + '</span>' + (isSampleFamily(state.family) ? '<span class="badge bsample">Sample</span>' : '') + '</div>' +
    '<p class="lead" style="margin-bottom:6px">' + (planKey() === 'start' ? 'Start is a test run — your first chapter, on Roon.' : planKey() === 'forever' ? 'Everything in Roon, for life.' : 'The whole family, for one price.') + '</p>' +
    '<p class="muted-small">' + esc(statusWords) + '</p>' +
    '<h3 class="dsp" style="font-size:21px;margin:18px 0 0">Room</h3>' +
    '<p style="margin:4px 0 0">' + num(room.photosUsed) + ' of ' + num(room.photosCap) + ' photos</p><div class="meter"><i style="width:' + photoPct + '%"></i></div>' +
    '<p class="muted" style="margin:0">' + num(room.videoMinutesUsed) + ' of ' + num(room.videoMinutesCap) + ' minutes of video</p>' +
    '<h3 class="dsp" style="font-size:21px;margin:20px 0 0">People Rooney follows</h3>' +
    '<div class="faces">' + followed.map((p) => '<span class="face" title="' + esc(p.name) + '">' + esc(initialOf(p.name)) + '</span>').join('') + Array.from({ length: Math.max(0, (story.allowed || 0) - (story.used || 0)) }).map(() => '<span class="face empty-face">·</span>').join('') + '</div>' +
    '<p style="margin:0">' + (story.used || 0) + ' of ' + (story.allowed || 0) + ' people Rooney follows' + (followed.length ? ' — ' + esc(followed.map((p) => firstName(p.name)).join(', ')) : '') + '</p>' +
    '<div style="margin-top:20px;display:flex;gap:8px;flex-wrap:wrap">' +
    (planKey() === 'start' ? '<button type="button" class="btn btn-grad" id="plan-start-btn">Tell the whole story — $99 a year</button>' : '<a class="btn btn-grad" href="' + F('/export') + '">Export everything</a>') +
    '<button type="button" class="btn btn-outline" id="plan-room-btn">More room</button></div>' +
    '<p class="muted-small">Nothing is ever held hostage — export is always free, and your memories are never deleted for reaching a line. Upgrades buy more room and more following, never the return of your own past.</p></div>' +
    '<h2 class="section-title">Billing</h2><div class="card">' +
    (checkouts.length ? checkouts.map((c) => '<p style="margin:0 0 8px">' + esc(c.sku || '') + ' — ' + esc(String(c.status || '').replace(/_/g, ' ')) + (c.amountCents != null ? ' · $' + (c.amountCents / 100).toLocaleString('en-US') : '') + ' <span class="muted-small">' + esc(fmtDay(c.createdAt)) + '</span></p>').join('') : '<p class="muted" style="margin:0">No checkouts yet. When billing is switched on, everything Roon has recorded about payments will show here, plainly.</p>') +
    (billing.configured === false ? '<p class="muted-small">' + esc(STRIPE_OFF_LINE) + '</p>' : '') + '</div>';
  const sb = $('#plan-start-btn', root); if (sb) sb.addEventListener('click', openPlanSheet);
  const rb2 = $('#plan-room-btn', root); if (rb2) rb2.addEventListener('click', openRoomSheet);
}

/* ================= IMPORTS ================= */
async function renderImports(root) {
  root.innerHTML = '<p class="eyeb">Give Roon what you already have</p><h1 class="dsp">Bring in photos</h1><p class="lead">Your camera roll already holds the story. Bring it in, review Rooney\'s day-by-day suggestions, and approve only what belongs. Nothing is ever imported without your say-so.</p><div id="imports-body"><div class="skeleton"></div></div>';
  let jobs = [];
  try { const res = await api(F('/imports')); jobs = listOf(res, ['imports']); } catch (e) { $('#imports-body', root).innerHTML = '<div class="empty"><p>' + esc(e.message) + '</p></div>'; return; }
  paintImports(root, jobs);
}
function paintImports(root, jobs) {
  const body = $('#imports-body', root); if (!body) return;
  body.innerHTML =
    '<div class="card"><h3 class="dsp" style="font-size:22px;margin:0 0 10px">Start an import</h3>' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="btn btn-grad btn-small" data-new-import="bulk_upload">Upload a batch</button><button type="button" class="btn btn-outline btn-small" data-new-import="takeout">Takeout / folder export</button><button type="button" class="btn btn-outline btn-small" data-new-import="google_photos">Google Photos</button><button type="button" class="btn btn-outline btn-small" data-new-import="icloud">iCloud</button></div>' +
    '<div id="import-provider-note" style="margin-top:10px"></div></div>' +
    (jobs.length ? jobs.map((j) => importJobHTML(j)).join('') : '<div class="empty"><h3>No imports yet</h3><p>Start with any batch — even twenty photos is enough for a first chapter.</p></div>');
  $$('[data-new-import]', body).forEach((b) => b.addEventListener('click', async () => {
    b.disabled = true;
    try { const res = await api(F('/imports'), { method: 'POST', body: { source: b.dataset.newImport } }); const job = (res && res.import) || res; if (job && job.providerNote) { const n = $('#import-provider-note', body); if (n) n.innerHTML = '<p class="muted" style="background:var(--bone);border-radius:12px;padding:12px 14px">' + esc(job.providerNote) + '</p>'; } await renderImports(root); }
    catch (e) { toast(e.message, 'error'); b.disabled = false; }
  }));
  wireImportJobs(body);
}
function importJobHTML(j) {
  const pendingMems = state.memories.filter((m) => String(m.importJobId) === String(j.id) && m.reviewState === 'pending');
  const suggestions = j.suggestions || [];
  return '<div class="card" data-job="' + esc(j.id) + '"><div class="kicker-row"><span class="badge bsoft">' + esc(String(j.source || '').replace(/_/g, ' ')) + '</span><span class="badge bpink">' + esc(String(j.status || '').replace(/_/g, ' ')) + '</span><span class="muted-small">' + (j.counts ? num(j.counts.total) + ' brought in · ' + num(j.counts.pending) + ' waiting for your decision' : '') + '</span></div>' +
    (j.providerNote ? '<p class="muted">' + esc(j.providerNote) + '</p>' : '') +
    (j.status !== 'completed' && j.status !== 'provider_not_configured' ? '<label class="field"><span>Add files to this import</span><input type="file" multiple accept="image/*,video/*,audio/*" data-job-upload="' + esc(j.id) + '"></label><p class="muted-small" data-job-upload-note></p>' : '') +
    suggestions.map((s) => { const dayMems = pendingMems.filter((m) => String(m.takenAt || '').slice(0, 10) === s.day); return '<div class="day-group"><strong>' + esc(fmtDay(s.day)) + '</strong> <span class="muted-small">' + esc(s.label || (s.count + ' items')) + '</span>' + (dayMems.length ? '<div class="import-thumbs">' + dayMems.slice(0, 8).map((m) => m.type === 'photo' && mediaSrc(m) ? '<img src="' + esc(mediaSrc(m)) + '" alt="" loading="lazy">' : '').join('') + '</div>' : '') +
      '<div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="btn btn-grad btn-small" data-approve-day="' + esc(j.id) + ':' + esc(s.day) + '">Approve this day</button><button type="button" class="btn btn-outline btn-small" data-reject-day="' + esc(j.id) + ':' + esc(s.day) + '">Remove this day</button></div>' +
      (dayMems.length ? '<div style="margin-top:8px">' + dayMems.map((m) => '<span style="display:inline-flex;gap:6px;align-items:center;margin:0 8px 6px 0;font-size:13px"><span>' + esc(m.caption || m.type) + '</span><button type="button" class="btn btn-ghost btn-small" data-approve-item="' + esc(j.id) + ':' + esc(m.id) + '">Keep</button><button type="button" class="btn btn-ghost btn-small btn-danger" data-reject-item="' + esc(j.id) + ':' + esc(m.id) + '">Remove</button></span>').join('') + '</div>' : '') + '</div>'; }).join('') +
    (j.status !== 'completed' && j.status !== 'provider_not_configured' ? '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px"><button type="button" class="btn btn-grad btn-small" data-approve-all="' + esc(j.id) + '">Approve all</button><button type="button" class="btn btn-outline btn-small" data-reject-all="' + esc(j.id) + '">Remove all</button><button type="button" class="btn btn-outline btn-small" data-complete="' + esc(j.id) + '">Complete this import</button></div><p class="muted-small" data-job-note></p>' : '') +
    '</div>';
}
function wireImportJobs(body) {
  $$('[data-job-upload]', body).forEach((inp) => inp.addEventListener('change', async () => {
    const jobId = inp.dataset.jobUpload; const files = Array.from(inp.files || []); if (!files.length) return;
    const note = inp.closest('.card').querySelector('[data-job-upload-note]');
    let done = 0;
    for (const f of files) { try { await uploadMemoryFile(f, { importJobId: jobId }); } catch (e) { toast('One file didn\'t upload: ' + e.message, 'error'); } done++; if (note) note.textContent = 'Uploaded ' + done + ' of ' + files.length + '…'; }
    toast('Batch uploaded — review the days below and approve what belongs.');
    await refreshData(); renderImports($('#view-root'));
  }));
  const act = async (jobId, action, payload, btn) => { btn.disabled = true; try { await api(F('/imports/' + encodeURIComponent(jobId) + '/' + action), { method: 'POST', body: payload || {} }); await refreshData(); renderImports($('#view-root')); } catch (e) { toast(e.message, 'error'); btn.disabled = false; } };
  $$('[data-approve-all]', body).forEach((b) => b.addEventListener('click', () => act(b.dataset.approveAll, 'approve', { all: true }, b)));
  $$('[data-reject-all]', body).forEach((b) => b.addEventListener('click', () => act(b.dataset.rejectAll, 'reject', { all: true }, b)));
  $$('[data-complete]', body).forEach((b) => b.addEventListener('click', () => act(b.dataset.complete, 'complete', {}, b)));
  $$('[data-approve-day]', body).forEach((b) => b.addEventListener('click', () => { const parts = b.dataset.approveDay.split(':'); act(parts[0], 'approve', { day: parts.slice(1).join(':') }, b); }));
  $$('[data-reject-day]', body).forEach((b) => b.addEventListener('click', () => { const parts = b.dataset.rejectDay.split(':'); act(parts[0], 'reject', { day: parts.slice(1).join(':') }, b); }));
  $$('[data-approve-item]', body).forEach((b) => b.addEventListener('click', () => { const parts = b.dataset.approveItem.split(':'); act(parts[0], 'approve', { memoryIds: [parts.slice(1).join(':')] }, b); }));
  $$('[data-reject-item]', body).forEach((b) => b.addEventListener('click', () => { const parts = b.dataset.rejectItem.split(':'); act(parts[0], 'reject', { memoryIds: [parts.slice(1).join(':')] }, b); }));
}

/* ================= ONBOARDING ================= */
function obStepsHTML(step) { return '<div class="ob-steps">' + [1, 2, 3, 4, 5].map((n) => '<i class="' + (n <= step ? 'on' : '') + '"></i>').join('') + '</div>'; }
async function renderOnboarding(root) {
  if (!state.ob) state.ob = { step: state.family ? 2 : 1, draftPeople: [], followPicks: {} };
  const ob = state.ob;
  if (ob.step === 1 || !state.family) {
    root.innerHTML = obStepsHTML(1) + '<p class="eyeb">Welcome to Roon</p><h1 class="dsp">Name your family</h1><p class="lead">This is how Rooney will talk about you — “The Rimmer Family”, “The House on Maple Street”, whatever feels like home.</p>' +
      '<form id="ob-family-form" class="card"><label class="field"><span>Family name</span><input name="name" required placeholder="e.g. The Rimmer Family"></label><p class="form-error" role="alert" hidden></p><button class="btn btn-grad btn-block" type="submit">That\'s us</button></form>';
    $('#ob-family-form', root).addEventListener('submit', async (e) => { e.preventDefault(); try { const res = await api('/api/families', { method: 'POST', body: { name: new FormData(e.currentTarget).get('name') } }); await loadFamilies(res && (res.id || (res.family && res.family.id))); state.ob.step = 2; render(); } catch (err) { formError(e.currentTarget, err.message); } });
    return;
  }
  await ensureData();
  if (ob.step === 2) {
    root.innerHTML = obStepsHTML(2) + '<p class="eyeb">Step two</p><h1 class="dsp">Who\'s in the story?</h1><p class="lead">Add the people in your photos — children, partners, grandparents, anyone who belongs. You can always add more.</p>' +
      (state.people.length ? state.people.map((p) => '<div class="card person-card"><span class="person-avatar">' + esc(initialOf(p.name)) + '</span><div><strong>' + esc(p.name) + '</strong><br><span class="muted-small">' + esc(p.relationship || '') + '</span></div></div>').join('') : '') +
      '<form id="ob-person-form" class="card"><label class="field"><span>Name</span><input name="name" required placeholder="Their name"></label><label class="field"><span>Relationship</span><input name="relationship" placeholder="Daughter, Grandfather, partner…"></label><label class="field"><span>Birthdate (optional)</span><input type="date" name="birthdate"></label><p class="form-error" role="alert" hidden></p><button class="btn btn-outline btn-block" type="submit">Add this person</button></form>' +
      '<button type="button" class="btn btn-grad btn-block" id="ob-next-2" ' + (state.people.length ? '' : 'disabled') + '>Continue — who should Rooney follow?</button>';
    $('#ob-person-form', root).addEventListener('submit', async (e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); try { await api(F('/people'), { method: 'POST', body: { name: fd.get('name'), relationship: fd.get('relationship'), birthdate: fd.get('birthdate') || null } }); await refreshData(); render(); } catch (err) { formError(e.currentTarget, err.message); } });
    const nx = $('#ob-next-2', root); if (nx) nx.addEventListener('click', () => { state.ob.step = 3; render(); });
    return;
  }
  if (ob.step === 3) {
    const picks = state.ob.followPicks;
    root.innerHTML = obStepsHTML(3) + '<p class="eyeb">The heart of it</p><h1 class="dsp">Who should Rooney <em class="gt">follow?</em></h1><p class="lead">Everyone can appear in photos. Following is different: Rooney builds that person\'s storyline — their chapters, their threads, questions asked about them. On Start, Rooney follows one person; the plan follows three.</p>' +
      state.people.map((p) => { const pick = picks[p.id] || (p.followed ? { followed: true, posture: p.posture || 'growing' } : null); return '<div class="card"><div style="display:flex;gap:12px;align-items:center"><span class="person-avatar">' + esc(initialOf(p.name)) + '</span><div><strong>' + esc(p.name) + '</strong><br><span class="muted-small">' + esc(p.relationship || '') + '</span></div><span style="margin-left:auto"><button type="button" class="btn ' + (pick && pick.followed ? 'btn-grad' : 'btn-outline') + ' btn-small" data-ob-follow="' + esc(p.id) + '">' + (pick && pick.followed ? 'Following ✓' : 'Follow') + '</button></span></div>' +
        (pick && pick.followed ? '<div class="chip-row"><span class="muted-small" style="font-weight:600">Their story is:</span>' + [['growing', 'Growing up'], ['together', 'Our life together'], ['remembering', 'Remembering']].map((pair) => '<button type="button" class="chip' + ((pick.posture || 'growing') === pair[0] ? ' is-active' : '') + '" data-ob-posture="' + esc(p.id) + ':' + pair[0] + '">' + pair[1] + '</button>').join('') + '</div>' : '') + '</div>'; }).join('') +
      '<p class="form-error" id="ob-follow-error" hidden></p><button type="button" class="btn btn-grad btn-block" id="ob-next-3">Continue — bring in the past</button>';
    $$('[data-ob-follow]', root).forEach((b) => b.addEventListener('click', () => { const id = b.dataset.obFollow; const cur = state.ob.followPicks[id]; state.ob.followPicks[id] = { followed: !(cur && cur.followed), posture: (cur && cur.posture) || 'growing' }; render(); }));
    $$('[data-ob-posture]', root).forEach((b) => b.addEventListener('click', () => { const parts = b.dataset.obPosture.split(':'); const id = parts[0]; state.ob.followPicks[id] = { followed: true, posture: parts.slice(1).join(':') }; render(); }));
    $('#ob-next-3', root).addEventListener('click', async (e) => {
      const btn = e.currentTarget; btn.disabled = true;
      for (const p of state.people) {
        const pick = state.ob.followPicks[p.id];
        const want = !!(pick && pick.followed);
        try {
          if (want) await api('/api/people/' + encodeURIComponent(p.id), { method: 'PATCH', body: { followed: true, posture: pick.posture || 'growing' } });
          else if (!want && p.followed) await api('/api/people/' + encodeURIComponent(p.id), { method: 'PATCH', body: { followed: false } });
          else if (want && p.followed && pick.posture && pick.posture !== p.posture) await api('/api/people/' + encodeURIComponent(p.id), { method: 'PATCH', body: { posture: pick.posture } });
        } catch (err) {
          if (err.data && err.data.code === 'storyline_limit') { const er = $('#ob-follow-error', root); if (er) { er.hidden = false; er.textContent = 'On Start, Rooney follows one person — ' + firstName(p.name) + ' would be one more. You can follow everyone on the plan, or change who the one is.'; } openStorylineSheet(p); btn.disabled = false; return; }
          toast(err.message, 'error'); btn.disabled = false; return;
        }
      }
      state.ob.step = 4; await refreshData(); render();
    });
    return;
  }
  if (ob.step === 4) {
    root.innerHTML = obStepsHTML(4) + '<p class="eyeb">The wedge</p><h1 class="dsp">Bring in the past</h1><p class="lead">Roon starts from what you already have. Upload a first batch — Rooney sorts by date and drafts your first chapter from your own captions and dates.</p>' +
      '<div class="card"><label class="field"><span>Choose photos, videos &amp; voice notes</span><input type="file" id="ob-upload" multiple accept="image/*,video/*,audio/*"></label><p class="muted-small" id="ob-upload-note">Or do this properly later in Bring in photos — bigger batches, reviewed day by day.</p></div>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="btn btn-grad" id="ob-next-4" disabled>See Rooney write</button><button type="button" class="btn btn-outline" id="ob-skip-4">Skip for now</button></div>';
    const inp = $('#ob-upload', root);
    inp.addEventListener('change', async () => { const files = Array.from(inp.files || []); if (!files.length) return; const note = $('#ob-upload-note', root); let done = 0; for (const f of files) { try { await uploadMemoryFile(f, { source: 'backfill' }); } catch (e) { toast('One file didn\'t upload: ' + e.message, 'error'); } done++; note.textContent = 'Kept ' + done + ' of ' + files.length + '…'; } note.textContent = done + ' memories kept. Rooney has what she needs.'; $('#ob-next-4', root).disabled = false; await refreshData(); });
    $('#ob-next-4', root).addEventListener('click', () => { state.ob.step = 5; render(); });
    $('#ob-skip-4', root).addEventListener('click', () => { state.ob.step = 5; render(); });
    return;
  }
  /* step 5 — Rooney is writing (REAL counts only) */
  await refreshData();
  try { await api(F('/chapters/rebuild'), { method: 'POST', body: {} }); state.loadedFor = null; await ensureData(); } catch (e) {}
  const firstChapter = state.chapters[0] || null;
  const pres = presented();
  root.innerHTML = obStepsHTML(5) + '<p class="eyeb">Rooney is writing</p><h1 class="dsp">From your own words, <em class="gt">only</em></h1>' +
    '<div class="card"><ul class="check-list">' +
    '<li><span>' + (state.memories.length ? '✓' : '…') + '</span><span><strong>' + num(state.memories.length) + ' memories in</strong> — sorted by date, people attached.</span></li>' +
    '<li><span>' + (state.people.filter((p) => p.followed).length ? '✓' : '…') + '</span><span><strong>' + num(state.people.filter((p) => p.followed).length) + ' storyline' + (state.people.filter((p) => p.followed).length === 1 ? '' : 's') + ' being followed</strong> — chapters and threads gather around them.</span></li>' +
    '<li><span>' + (firstChapter ? '✓' : '…') + '</span><span>' + (firstChapter ? '<strong>Chapter One is ready:</strong> “' + esc(firstChapter.title || '') + '”' : 'Your first chapter needs a few dated memories — bring in a batch and it appears here, named from your own captions.') + '</span></li>' +
    (pres && pres.processing ? '<li><span>' + (pres.processing.state === 'caught_up' ? '✓' : '…') + '</span><span>' + num(pres.processing.toldCount) + ' of ' + num(pres.processing.storedCount) + ' memories told' + (pres.processing.state === 'catching_up' ? ' — Rooney is still writing, catching up over the next few days.' : '.') + '</span></li>' : '') +
    '</ul></div>' +
    (firstChapter ? '<a class="toc-row" href="#/story/' + encodeURIComponent(firstChapter.id) + '"><span><h3>Read Chapter One — ' + esc(firstChapter.title || '') + '</h3><span class="muted-small">' + esc(chapterRange(firstChapter)) + '</span></span></a>' : '') +
    '<button type="button" class="btn btn-grad btn-block" id="ob-finish">Take me to Today</button>';
  $('#ob-finish', root).addEventListener('click', () => { state.ob = null; state.feedScope = 'all'; location.hash = '#/'; route(true); });
}

/* ================= FIND ================= */
async function openFind() {
  const ov = $('#find-overlay'); ov.hidden = false; document.body.classList.add('locked');
  const inp = $('#find-overlay-input'); inp.value = ''; $('#find-results').innerHTML = '<p class="muted">Type a word from a caption, a person\'s name, or a date like 2023 or “June 2024”.</p>';
  inp.focus();
  if (!state.findMemories) { try { const res = await api(F('/memories')); state.findMemories = listOf(res, ['memories']); } catch (e) { state.findMemories = state.memories; } }
}
function closeFind() { const ov = $('#find-overlay'); if (ov) ov.hidden = true; if ($('#sheet-backdrop').hidden) document.body.classList.remove('locked'); }
$('#btn-find-close').addEventListener('click', closeFind);
/* C7: Find is server-backed now — one search over captions, your
   words, transcripts, names on moments, chapter titles and thread
   titles, with every result labelled by where the match was found.
   (Replaces the old client-side filter over /memories.) Ask Rooney
   sits beside the results, ready to gather them into a thread. */
let findTimer = null;
$('#find-overlay-input').addEventListener('input', (e) => {
  const q = e.target.value.trim();
  const box = $('#find-results');
  if (!q) { box.innerHTML = '<p class="muted">Type a word from a caption, a person\'s name, or a date.</p>'; return; }
  box.innerHTML = '<p class="muted">Looking…</p>';
  clearTimeout(findTimer);
  findTimer = setTimeout(async () => {
    let res = null;
    try { res = await api(F('/find') + '?q=' + encodeURIComponent(q)); } catch (err) { box.innerHTML = '<p class="muted">' + esc(err.message) + '</p>'; return; }
    const mems = (res && res.memories) || [];
    const people = (res && res.people) || [];
    const chapters = (res && res.chapters) || [];
    const threadsF = (res && res.threads) || [];
    if (!mems.length && !people.length && !chapters.length && !threadsF.length) {
      box.innerHTML = '<p class="muted">Nothing matches “' + esc(q) + '” yet — Rooney only finds what your family has actually kept.</p>' +
        '<div class="card" style="margin-top:12px"><p style="margin:0 0 8px"><strong>Ask Rooney to gather “' + esc(q) + '”</strong></p>' + askBlockHTML('find-ask') + '</div>';
      wireAskBlock('find-ask');
      const fi = $('#find-ask-input'); if (fi) fi.value = q;
      return;
    }
    let html = '';
    if (people.length) html += '<h3 class="find-group-title">People</h3>' + people.map((p) => '<a class="find-result" href="#/person/' + encodeURIComponent(p.id) + '"><span class="person-avatar">' + esc(initialOf(p.name)) + '</span><span><strong>' + esc(p.name) + '</strong><br><span class="muted-small">' + esc(p.relationship || '') + '</span></span></a>').join('');
    if (mems.length) html += '<h3 class="find-group-title">Moments</h3>' + mems.map((m) => { const ch = state.chapters.find((c) => (c.memoryIds || []).map(String).includes(String(m.id))); const th = state.threads.find((t) => (t.memoryIds || []).map(String).includes(String(m.id))); const href = ch ? '#/story/' + encodeURIComponent(ch.id) : (th ? '#/thread/' + encodeURIComponent(th.id) : '#/family'); return '<a class="find-result" href="' + href + '">' + (m.type === 'photo' && mediaSrc(m) ? '<img src="' + esc(mediaSrc(m)) + '" alt="" loading="lazy">' : '') + '<span><strong>' + esc(m.caption || m.storyText || m.type) + '</strong><br><span class="muted-small">' + esc(fmtDay(m.takenAt)) + ((m.peopleIds || []).length ? ' · ' + esc(m.peopleIds.map(personName).filter(Boolean).join(', ')) : '') + '</span> ' + (m.matchLabel ? '<span class="find-source">' + esc(m.matchLabel) + '</span>' : '') + '</span></a>'; }).join('');
    if (chapters.length) html += '<h3 class="find-group-title">Chapters Rooney wrote</h3>' + chapters.map((c) => '<a class="find-result" href="#/story/' + encodeURIComponent(c.id) + '"><span><strong>' + esc(c.title || 'Untitled chapter') + '</strong><br><span class="muted-small">Chapter</span></span></a>').join('');
    if (threadsF.length) html += '<h3 class="find-group-title">Threads Rooney follows</h3>' + threadsF.map((t) => '<a class="find-result" href="#/thread/' + encodeURIComponent(t.id) + '"><span><strong>' + esc(t.title || 'A thread') + '</strong><br><span class="muted-small">' + esc(threadEvidenceLine(t)) + '</span></span></a>').join('');
    html += '<div class="card" style="margin-top:14px"><p style="margin:0 0 8px"><strong>Want these gathered into one thread?</strong></p>' + askBlockHTML('find-ask') + '</div>';
    box.innerHTML = html;
    wireAskBlock('find-ask');
    const fi2 = $('#find-ask-input'); if (fi2) fi2.value = q;
    $$('.find-result', box).forEach((a) => a.addEventListener('click', closeFind));
  }, 250);
});

/* ================= C1–C7 (additive block) =================
   Save & return, your collections, On This Day controls, who can
   see what, watching-only members, who the story goes to, and the
   server-backed Find. Everything here is additive: new views, new
   sheets, and small controls hung on existing posts — the feed
   itself is untouched. */
function myMemberRole() { const mem = ((state.family && state.family.members) || []).find((x) => state.user && x.userId === state.user.id); return mem ? mem.role : null; }
function iAmViewer() { return myMemberRole() === 'viewer'; }
function iAmOwner() { return myMemberRole() === 'owner'; }
function applyRoleChrome() { document.body.classList.toggle('is-viewer', iAmViewer()); }
async function loadCollections(force) {
  if (!force && state.collectionsCache) return state.collectionsCache;
  const res = await api(F('/collections'));
  state.collectionsCache = (res && res.collections) || [];
  return state.collectionsCache;
}
function memberName(userId) { const mem = ((state.family && state.family.members) || []).find((x) => x.userId === userId); return mem ? (mem.name || mem.email || 'A keeper') : 'A keeper'; }
function patchMemoryLocal(id, patch) { const m = memById(id); if (m) Object.assign(m, patch); if (state.findMemories) { const fm = state.findMemories.find((x) => String(x.id) === String(id)); if (fm) Object.assign(fm, patch); } }

/* ---- C2: Saved ---- */
async function renderSaved(root) {
  root.innerHTML = '<p class="eyeb">Kept aside</p><h1 class="dsp">Saved</h1><p class="lead">The moments you kept aside, all in one place. Tap Save on any moment in Moments and it waits for you here.</p><div id="saved-body"><div class="skeleton"></div></div>';
  let data = null;
  try { data = await api(F('/saved')); } catch (e) { $('#saved-body', root).innerHTML = '<div class="empty"><p>' + esc(e.message) + '</p></div>'; return; }
  const mems = (data && data.memories) || [];
  const body = $('#saved-body', root); if (!body) return;
  if (!mems.length) { body.innerHTML = '<div class="empty"><h3>Nothing saved yet</h3><p>Open Moments, tap <strong>Save</strong> on a photo, a video, a piece of writing or a voice note, and it will be here when you come back.</p><a class="btn btn-grad" href="#/explore">Go to Moments</a></div>'; return; }
  body.innerHTML = '<p class="muted-small" style="margin:0 0 6px">' + num(mems.length) + ' saved moment' + (mems.length === 1 ? '' : 's') + ' — most recently saved first.</p>' + mems.map((m) => igFeedCardHTML({ kind: 'media', memory: m })).join('');
  wireFeedCards(body);
}

/* ---- C1: Your collections ---- */
function collectionCardHTML(c) {
  const cover = c.cover;
  const thumb = cover && cover.type === 'photo' && mediaSrc(cover) ? '<img src="' + esc(mediaSrc(cover)) + '" alt="" loading="lazy">' : (cover && cover.type === 'video' && cover.poster ? '<img src="' + esc(cover.poster) + '" alt="" loading="lazy">' : '');
  return '<a class="collection-card" href="#/collection/' + encodeURIComponent(c.id) + '"><span class="collection-thumb">' + thumb + '</span><span class="collection-meta"><strong>' + esc(c.name) + '</strong><span class="muted-small">' + num(c.count) + ' moment' + (c.count === 1 ? '' : 's') + ' · put together by ' + esc(memberName(c.createdBy)) + '</span></span><span>→</span></a>';
}
async function renderCollections(root) {
  root.innerHTML = '<p class="eyeb">Your way of organising</p><h1 class="dsp">Your collections</h1><p class="lead">Groups of moments you put together yourself — a holiday, a person, a year of the garden. They sit beside the chapters and threads Rooney makes; these ones are yours.</p><p><button type="button" class="btn btn-grad" id="col-new">New collection</button></p><div id="collections-body"><div class="skeleton"></div></div>' +
    '<h2 class="section-title">Rooney made these</h2>' +
    (state.chapters.length ? state.chapters.map((ch) => '<a class="toc-row" href="#/story/' + encodeURIComponent(ch.id) + '"><span style="min-width:0"><h3>' + esc(ch.title || 'Untitled chapter') + '</h3><span class="muted-small">Chapter · ' + esc(chapterRange(ch)) + '</span></span></a>').join('') : '<p class="muted">No chapters yet.</p>') +
    (state.threads.filter((t) => t.status === 'followed').length ? state.threads.filter((t) => t.status === 'followed').map((t) => '<a class="toc-row" href="#/thread/' + encodeURIComponent(t.id) + '"><span style="min-width:0"><h3>' + esc(t.title || 'A thread') + '</h3><span class="muted-small">Thread · ' + esc(threadEvidenceLine(t)) + '</span></span></a>').join('') : '');
  const nb = $('#col-new', root); if (nb) nb.addEventListener('click', () => openNewCollectionSheet(null));
  let cols = [];
  try { cols = await loadCollections(true); } catch (e) { $('#collections-body', root).innerHTML = '<div class="empty"><p>' + esc(e.message) + '</p></div>'; return; }
  const body = $('#collections-body', root); if (!body) return;
  body.innerHTML = cols.length ? cols.map(collectionCardHTML).join('') : '<div class="empty"><h3>No collections yet</h3><p>Make your first one — or tap the ••• on any moment in Moments and choose “Add to a collection”.</p></div>';
}
function openNewCollectionSheet(prefillMemoryId) {
  openSheet('<h3>New collection</h3><form id="col-new-form"><label class="field"><span>Name it</span><input name="name" required maxlength="80" placeholder="Summer at the lake, Milo\'s firsts…"></label><p class="form-error" role="alert" hidden></p><button type="submit" class="btn btn-grad btn-block">Create collection</button><button type="button" class="btn btn-ghost btn-block" data-close-sheet>Cancel</button></form>');
  wireCloseSheet();
  $('#col-new-form').addEventListener('submit', async (e) => {
    e.preventDefault(); const form = e.currentTarget;
    try {
      const res = await api(F('/collections'), { method: 'POST', body: { name: new FormData(form).get('name'), memoryIds: prefillMemoryId ? [prefillMemoryId] : [] } });
      state.collectionsCache = null; closeSheet();
      const c = res && res.collection;
      toast(prefillMemoryId ? 'Collection made — that moment is in it.' : 'Collection made.');
      if (c && c.id) location.hash = '#/collection/' + encodeURIComponent(c.id); else if (state.view === 'collections') render();
    } catch (err) { formError(form, err.message); }
  });
}
async function renderCollection(root, collectionId) {
  root.innerHTML = '<div class="skeleton"></div>';
  let data = null;
  try { data = await api(F('/collections/' + encodeURIComponent(collectionId))); } catch (e) { root.innerHTML = '<div class="empty"><h3>That collection isn\'t here</h3><p>' + esc(e.message) + '</p><p><a href="#/collections">All your collections →</a></p></div>'; return; }
  const col = data.collection; const items = col.items || [];
  const canManage = col.createdBy === (state.user && state.user.id) || iAmOwner();
  root.innerHTML = '<p style="margin:0 0 10px"><a href="#/collections">← Your collections</a></p>' +
    '<h1 class="dsp" style="margin-bottom:4px">' + esc(col.name) + '</h1>' +
    '<p class="muted" style="margin:0 0 6px">' + num(items.length) + ' moment' + (items.length === 1 ? '' : 's') + ' · put together by ' + esc(memberName(col.createdBy)) + ' · in the order you left them</p>' +
    (canManage ? '<p style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0 4px"><button type="button" class="btn btn-outline btn-small" id="col-rename">Rename</button><button type="button" class="btn btn-outline btn-small" id="col-add">Add moments</button><button type="button" class="btn btn-ghost btn-small btn-danger" id="col-delete">Delete collection</button></p>' : '') +
    '<div id="collection-items">' + (items.length ? items.map((m, i) => '<div class="collection-item">' + igFeedCardHTML({ kind: 'media', memory: m }) + (canManage ? '<div class="collection-manage"><button type="button" class="btn btn-ghost btn-small" data-col-up="' + esc(m.id) + '"' + (i === 0 ? ' disabled' : '') + '>Move up</button><button type="button" class="btn btn-ghost btn-small" data-col-down="' + esc(m.id) + '"' + (i === items.length - 1 ? ' disabled' : '') + '>Move down</button><button type="button" class="btn btn-ghost btn-small" data-col-remove="' + esc(m.id) + '">Take out</button></div>' : '') + '</div>').join('') : '<div class="empty"><h3>Nothing in here yet</h3><p>Add moments with the button above, or from the ••• menu on any moment in Moments.</p></div>') + '</div>';
  wireFeedCards($('#collection-items', root));
  if (!canManage) return;
  const ids = items.map((m) => m.id);
  const saveOrder = async (newIds) => { try { await api(F('/collections/' + encodeURIComponent(col.id)), { method: 'PATCH', body: { memoryIds: newIds } }); state.collectionsCache = null; render(); } catch (e) { toast(e.message, 'error'); } };
  $$('[data-col-up]', root).forEach((b) => b.addEventListener('click', () => { const i = ids.indexOf(b.dataset.colUp); if (i > 0) { const n = ids.slice(); const t = n[i - 1]; n[i - 1] = n[i]; n[i] = t; saveOrder(n); } }));
  $$('[data-col-down]', root).forEach((b) => b.addEventListener('click', () => { const i = ids.indexOf(b.dataset.colDown); if (i >= 0 && i < ids.length - 1) { const n = ids.slice(); const t = n[i + 1]; n[i + 1] = n[i]; n[i] = t; saveOrder(n); } }));
  $$('[data-col-remove]', root).forEach((b) => b.addEventListener('click', async () => { b.disabled = true; try { await api(F('/collections/' + encodeURIComponent(col.id) + '/items/' + encodeURIComponent(b.dataset.colRemove)), { method: 'DELETE' }); state.collectionsCache = null; toast('Taken out — the moment itself is untouched.'); render(); } catch (e) { toast(e.message, 'error'); b.disabled = false; } }));
  const rn = $('#col-rename', root); if (rn) rn.addEventListener('click', () => {
    openSheet('<h3>Rename collection</h3><form id="col-rename-form"><label class="field"><span>Name</span><input name="name" required maxlength="80" value="' + esc(col.name) + '"></label><p class="form-error" role="alert" hidden></p><button type="submit" class="btn btn-grad btn-block">Save name</button><button type="button" class="btn btn-ghost btn-block" data-close-sheet>Cancel</button></form>');
    wireCloseSheet();
    $('#col-rename-form').addEventListener('submit', async (e) => { e.preventDefault(); try { await api(F('/collections/' + encodeURIComponent(col.id)), { method: 'PATCH', body: { name: new FormData(e.currentTarget).get('name') } }); state.collectionsCache = null; closeSheet(); render(); toast('Renamed.'); } catch (err) { formError(e.currentTarget, err.message); } });
  });
  const del = $('#col-delete', root); if (del) del.addEventListener('click', () => {
    openSheet('<h3>Delete this collection?</h3><p class="muted">The collection goes away. Every moment in it stays exactly where it was — nothing is deleted from your story.</p><p><button type="button" class="btn btn-grad btn-block" id="col-delete-yes">Delete the collection</button></p><button type="button" class="btn btn-ghost btn-block" data-close-sheet>Keep it</button>');
    wireCloseSheet();
    $('#col-delete-yes').addEventListener('click', async () => { try { await api(F('/collections/' + encodeURIComponent(col.id)), { method: 'DELETE' }); state.collectionsCache = null; closeSheet(); location.hash = '#/collections'; toast('Collection deleted — the moments are all still in your story.'); } catch (e) { toast(e.message, 'error'); } });
  });
  const add = $('#col-add', root); if (add) add.addEventListener('click', () => openAddMomentsSheet(col, ids));
}
function openAddMomentsSheet(col, currentIds) {
  const candidates = state.memories.filter((m) => !currentIds.map(String).includes(String(m.id)));
  openSheet('<h3>Add moments to “' + esc(col.name) + '”</h3>' + (candidates.length ? '<form id="col-add-form"><div class="col-pick-list">' + candidates.map((m) => '<label class="col-pick"><input type="checkbox" name="mid" value="' + esc(m.id) + '"><span><strong>' + esc(m.caption || m.storyText || m.type) + '</strong><br><span class="muted-small">' + esc(fmtDay(m.takenAt)) + '</span></span></label>').join('') + '</div><p class="form-error" role="alert" hidden></p><button type="submit" class="btn btn-grad btn-block">Add the ticked moments</button></form>' : '<p class="muted">Every moment you can see is already in here.</p>') + '<button type="button" class="btn btn-ghost btn-block" data-close-sheet>Close</button>');
  wireCloseSheet();
  const form = $('#col-add-form'); if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const chosen = $$('input[name="mid"]:checked', form).map((i) => i.value);
    if (!chosen.length) { formError(form, 'Tick at least one moment.'); return; }
    try { await api(F('/collections/' + encodeURIComponent(col.id) + '/items'), { method: 'POST', body: { memoryIds: chosen } }); state.collectionsCache = null; closeSheet(); render(); toast('Added.'); }
    catch (err) { formError(form, err.message); }
  });
}
function openCollectionPicker(memoryId) {
  (async () => {
    let cols = [];
    try { cols = await loadCollections(true); } catch (e) { toast(e.message, 'error'); return; }
    openSheet('<h3>Add to a collection</h3>' + (cols.length ? cols.map((c) => '<button type="button" class="quick-row" data-pick-col="' + esc(c.id) + '"><span>' + esc(c.name) + '</span><strong>' + num(c.count) + '</strong></button>').join('') : '<p class="muted">No collections yet — make the first one.</p>') + '<button type="button" class="quick-row" id="pick-new-col"><span>New collection…</span><strong>+</strong></button><button type="button" class="btn btn-ghost btn-block" data-close-sheet>Close</button>');
    wireCloseSheet();
    $$('#sheet [data-pick-col]').forEach((b) => b.addEventListener('click', async () => { b.disabled = true; try { await api(F('/collections/' + encodeURIComponent(b.dataset.pickCol) + '/items'), { method: 'POST', body: { memoryIds: [memoryId] } }); state.collectionsCache = null; closeSheet(); toast('Added to the collection.'); } catch (e) { toast(e.message, 'error'); b.disabled = false; } }));
    const nc = $('#pick-new-col'); if (nc) nc.addEventListener('click', () => openNewCollectionSheet(memoryId));
  })();
}

/* ---- C2/C3/C4: the per-moment menu + post controls ---- */
async function toggleSave(memoryId, btn) {
  const m = memById(memoryId); if (!m) return;
  const next = !m.saved;
  if (btn) btn.disabled = true;
  try {
    const res = await api('/api/memories/' + encodeURIComponent(memoryId), { method: 'PATCH', body: { saved: next } });
    const saved = res && res.memory ? !!res.memory.saved : next;
    patchMemoryLocal(memoryId, { saved, savedAt: res && res.memory ? res.memory.savedAt : (saved ? new Date().toISOString() : null) });
    $$('[data-save-mem="' + CSS.escape(memoryId) + '"]').forEach((b) => { b.classList.toggle('is-saved', saved); b.setAttribute('aria-pressed', String(saved)); b.textContent = saved ? 'Saved' : 'Save'; b.disabled = false; });
    toast(saved ? 'Saved — find it any time under Saved.' : 'Taken off your saved list.');
    if (!saved && state.view === 'saved') render();
  } catch (e) { toast(e.message, 'error'); if (btn) btn.disabled = false; }
}
function openMomentMenu(memoryId) {
  const m = memById(memoryId); if (!m) return;
  const muted = !!m.resurfaceMuted;
  openSheet('<h3>This moment</h3>' +
    '<button type="button" class="quick-row" data-mm="save"><span>' + (m.saved ? 'Saved — tap to unsave' : 'Save this moment') + '</span><strong>' + (m.saved ? '✓' : '') + '</strong></button>' +
    '<button type="button" class="quick-row" data-mm="collect"><span>Add to a collection</span><strong>→</strong></button>' +
    '<button type="button" class="quick-row" data-mm="audience"><span>Who can see this: ' + audienceWords(m.audience) + '</span><strong>Change</strong></button>' +
    '<button type="button" class="quick-row" data-mm="mute"><span>' + (muted ? 'Let On This Day show this again' : 'Keep this out of On This Day') + '</span><strong>' + (muted ? '✓' : '') + '</strong></button>' +
    '<p class="muted-small" style="margin:10px 2px 0">Keeping a moment out of On This Day never hides or deletes it — it stays in Moments, chapters and search.</p>' +
    '<button type="button" class="btn btn-ghost btn-block" data-close-sheet>Close</button>');
  wireCloseSheet();
  $$('#sheet [data-mm]').forEach((b) => b.addEventListener('click', async () => {
    const act = b.dataset.mm;
    if (act === 'save') { closeSheet(); toggleSave(memoryId, null); return; }
    if (act === 'collect') { openCollectionPicker(memoryId); return; }
    if (act === 'audience') { openAudienceSheet('memory', m); return; }
    b.disabled = true;
    try {
      if (act === 'mute') { const next = !muted; await api('/api/memories/' + encodeURIComponent(memoryId), { method: 'PATCH', body: { resurfaceMuted: next } }); patchMemoryLocal(memoryId, { resurfaceMuted: next }); closeSheet(); toast(next ? 'On This Day will leave this moment alone.' : 'This moment can come back in On This Day.'); }
    } catch (e) { toast(e.message, 'error'); b.disabled = false; }
  }));
}
/* Who can see a thing, in the locked plain words. */
function audienceWords(a) { return a === 'private' ? 'Just me' : a === 'people' ? 'Specific people' : 'The Den'; }
function audienceOfClient(m) { const a = m && m.audience; if (a === 'private' || a === 'owners') return 'private'; if (a === 'people') return 'people'; return 'den'; }
/* The audience picker — one sheet for moments and chapters. Saving
   takes effect everywhere at once (audiences resolve at read time),
   so unsharing is just this, backwards. */
function openAudienceSheet(kind, obj) {
  const cur = audienceOfClient(obj);
  const others = ((state.family && state.family.members) || []).filter((mm) => mm.userId && (!state.user || mm.userId !== state.user.id));
  const named = new Set((obj.audiencePeople || []).map(String));
  openSheet('<h3>Who can see this</h3><form id="aud-form">' +
    '<label class="col-pick"><input type="radio" name="aud" value="private"' + (cur === 'private' ? ' checked' : '') + '><span><strong>Just me</strong><br><span class="muted-small">Only you' + (kind === 'memory' ? ' — and whoever added it' : '') + '. Not in the Den, never in a share.</span></span></label>' +
    '<label class="col-pick"><input type="radio" name="aud" value="den"' + (cur === 'den' ? ' checked' : '') + '><span><strong>The Den</strong><br><span class="muted-small">Everyone in this family can see it — this is the shared story.</span></span></label>' +
    '<label class="col-pick"><input type="radio" name="aud" value="people"' + (cur === 'people' ? ' checked' : '') + '><span><strong>Specific people</strong><br><span class="muted-small">You, plus the people you tick below.</span></span></label>' +
    '<div id="aud-people" style="margin:6px 0 0 26px">' + (others.length ? others.map((mm) => '<label class="col-pick"><input type="checkbox" name="who" value="' + esc(mm.userId) + '"' + (named.has(String(mm.userId)) ? ' checked' : '') + '><span>' + esc(mm.name || mm.email || 'A family member') + '</span></label>').join('') : '<p class="muted-small">No one else is in this family yet — invite someone from the Family page.</p>') + '</div>' +
    '<p class="form-error" role="alert" hidden></p><button type="submit" class="btn btn-grad btn-block">Save</button><button type="button" class="btn btn-ghost btn-block" data-close-sheet>Cancel</button></form>');
  wireCloseSheet();
  const form = $('#aud-form');
  const syncPeople = () => { const sel = form.querySelector('input[name="aud"]:checked'); $('#aud-people').style.opacity = sel && sel.value === 'people' ? '1' : '.45'; };
  $$('input[name="aud"]', form).forEach((r) => r.addEventListener('change', syncPeople)); syncPeople();
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const aud = new FormData(form).get('aud');
    const who = $$('input[name="who"]:checked', form).map((i) => i.value);
    if (aud === 'people' && !who.length) { formError(form, 'Tick at least one person — or choose Just me.'); return; }
    try {
      if (kind === 'memory') { await api('/api/memories/' + encodeURIComponent(obj.id), { method: 'PATCH', body: { audience: aud, audiencePeople: aud === 'people' ? who : undefined } }); patchMemoryLocal(obj.id, { audience: aud, audiencePeople: aud === 'people' ? who : null }); }
      else { await api('/api/chapters/' + encodeURIComponent(obj.id), { method: 'PATCH', body: { audience: aud, audiencePeople: aud === 'people' ? who : undefined } }); }
      closeSheet(); toast('Saved — that is who can see it now.');
      if (kind === 'chapter' || (aud === 'private' && !iAmOwner())) { await refreshData(); render(); }
    } catch (err) { formError(form, err.message); }
  });
}
/* Hang a Save button + ••• menu on every memory post and chapter
   figure, without touching the feed's own rendering: posts carry
   their memory id in [data-reactions="memory:<id>"]. Idempotent —
   the holder is marked, so re-renders and reaction swaps are safe. */
function decorateMomentPosts() {
  const root = $('#view-root'); if (!root) return;
  applyRoleChrome();
  if (iAmViewer()) return;
  $$('[data-reactions^="memory:"]', root).forEach((wrap) => {
    const holder = wrap.closest('.post') || wrap.closest('.reader-memory');
    if (!holder || holder.dataset.cDecorated) return;
    const mid = (wrap.getAttribute('data-reactions') || '').slice('memory:'.length);
    const m = memById(mid); if (!m) return;
    holder.dataset.cDecorated = '1';
    const group = document.createElement('div');
    group.className = 'post-actions-right';
    group.innerHTML = '<button type="button" class="post-save-btn' + (m.saved ? ' is-saved' : '') + '" data-save-mem="' + esc(mid) + '" aria-pressed="' + !!m.saved + '">' + (m.saved ? 'Saved' : 'Save') + '</button>' +
      '<button type="button" class="moment-menu-btn" data-menu-mem="' + esc(mid) + '" aria-label="More for this moment">•••</button>';
    const actions = $('.post-actions', holder);
    if (actions) actions.appendChild(group); else holder.appendChild(group);
  });
}
document.addEventListener('click', (e) => {
  const sv = e.target.closest('[data-save-mem]'); if (sv) { toggleSave(sv.dataset.saveMem, sv); return; }
  const mn = e.target.closest('[data-menu-mem]'); if (mn) openMomentMenu(mn.dataset.menuMem);
});
const _viewRootEl = $('#view-root');
if (_viewRootEl) { new MutationObserver(() => decorateMomentPosts()).observe(_viewRootEl, { childList: true, subtree: true }); }

/* ---- C3: On This Day controls (Settings) ---- */
async function fillResurfacingSettings(root) {
  const box = $('#resurface-settings', root); if (!box) return;
  let s = null;
  try { s = await api(F('/resurfacing')); } catch (e) { box.innerHTML = ''; return; }
  const r = (s && s.resurfacing) || {};
  const mutedMems = (r.mutedMemoryIds || []).map((id) => memById(id)).filter(Boolean);
  const mutedPeople = (r.mutedPeopleIds || []).map((id) => personById(id)).filter(Boolean);
  const periods = r.periods || [];
  box.innerHTML = '<h2 class="section-title">On This Day</h2><div class="card">' +
    '<p style="margin:0 0 10px">On This Day brings older moments back to the top of Moments. Some days that\'s a gift; some days it isn\'t. You say which — nothing here hides or deletes anything.</p>' +
    (r.paused
      ? '<p style="margin:0 0 10px"><strong>On This Day is paused</strong>' + (r.pauseUntil ? ' until ' + esc(fmtDay(r.pauseUntil)) : ' until you turn it back on') + '.</p><button type="button" class="btn btn-grad btn-small" id="rs-resume">Turn On This Day back on</button>'
      : '<p style="display:flex;gap:8px;flex-wrap:wrap;margin:0"><button type="button" class="btn btn-outline btn-small" id="rs-pause-week">Pause for a week</button><button type="button" class="btn btn-outline btn-small" id="rs-pause-open">Pause until I turn it back on</button></p>') +
    (mutedMems.length ? '<h3 class="dsp" style="font-size:18px;margin:18px 0 6px">Moments kept out</h3>' + mutedMems.map((m) => '<p class="rs-row"><span>' + esc(m.caption || m.storyText || m.type) + ' <span class="muted-small">' + esc(fmtDay(m.takenAt)) + '</span></span><button type="button" class="btn btn-ghost btn-small" data-rs-unmute-mem="' + esc(m.id) + '">Bring back</button></p>').join('') : '') +
    (mutedPeople.length ? '<h3 class="dsp" style="font-size:18px;margin:18px 0 6px">People kept out</h3>' + mutedPeople.map((p) => '<p class="rs-row"><span>' + esc(p.name) + '</span><button type="button" class="btn btn-ghost btn-small" data-rs-unmute-person="' + esc(p.id) + '">Bring back</button></p>').join('') : '') +
    '<h3 class="dsp" style="font-size:18px;margin:18px 0 6px">A stretch of time to leave alone</h3>' +
    (periods.length ? periods.map((pd) => '<p class="rs-row"><span>' + esc(pd.from) + ' to ' + esc(pd.to) + '</span><button type="button" class="btn btn-ghost btn-small" data-rs-del-period="' + esc(pd.id) + '">Remove</button></p>').join('') : '<p class="muted-small" style="margin:0 0 8px">None set.</p>') +
    '<form id="rs-period-form" style="display:flex;gap:8px;flex-wrap:wrap;align-items:end"><label class="field" style="margin:0"><span>From</span><input type="date" name="from" required></label><label class="field" style="margin:0"><span>To</span><input type="date" name="to" required></label><button type="submit" class="btn btn-outline btn-small">Leave this time alone</button></form>' +
    '<p class="muted-small" style="margin:10px 0 0">You can also keep a single moment out from its ••• menu in Moments, or a whole person from their page.</p></div>';
  const again = () => fillResurfacingSettings(root);
  const resume = $('#rs-resume', box); if (resume) resume.addEventListener('click', async () => { try { await api(F('/resurfacing/resume'), { method: 'POST', body: {} }); toast('On This Day is back on.'); again(); } catch (e) { toast(e.message, 'error'); } });
  const pw = $('#rs-pause-week', box); if (pw) pw.addEventListener('click', async () => { try { await api(F('/resurfacing/pause'), { method: 'POST', body: { until: new Date(Date.now() + 7 * 86400000).toISOString() } }); toast('Paused for a week.'); again(); } catch (e) { toast(e.message, 'error'); } });
  const po = $('#rs-pause-open', box); if (po) po.addEventListener('click', async () => { try { await api(F('/resurfacing/pause'), { method: 'POST', body: {} }); toast('Paused until you turn it back on.'); again(); } catch (e) { toast(e.message, 'error'); } });
  $$('[data-rs-unmute-mem]', box).forEach((b) => b.addEventListener('click', async () => { try { await api('/api/memories/' + encodeURIComponent(b.dataset.rsUnmuteMem), { method: 'PATCH', body: { resurfaceMuted: false } }); patchMemoryLocal(b.dataset.rsUnmuteMem, { resurfaceMuted: false }); again(); } catch (e) { toast(e.message, 'error'); } }));
  $$('[data-rs-unmute-person]', box).forEach((b) => b.addEventListener('click', async () => { try { await api('/api/people/' + encodeURIComponent(b.dataset.rsUnmutePerson), { method: 'PATCH', body: { resurfaceMuted: false } }); await refreshData(); again(); } catch (e) { toast(e.message, 'error'); } }));
  $$('[data-rs-del-period]', box).forEach((b) => b.addEventListener('click', async () => { try { await api(F('/resurfacing/periods/' + encodeURIComponent(b.dataset.rsDelPeriod)), { method: 'DELETE' }); again(); } catch (e) { toast(e.message, 'error'); } }));
  const pf = $('#rs-period-form', box); if (pf) pf.addEventListener('submit', async (e) => { e.preventDefault(); const fd = new FormData(pf); try { await api(F('/resurfacing/periods'), { method: 'POST', body: { from: fd.get('from'), to: fd.get('to') } }); toast('That stretch of time will be left alone.'); again(); } catch (err) { toast(err.message, 'error'); } });
}

/* ---- C6: Who this story goes to ---- */
async function renderLegacy(root) {
  root.innerHTML = '<p class="eyeb">Yours, always</p><h1 class="dsp">Who this story goes to</h1><div id="legacy-body"><div class="skeleton"></div></div>';
  let data = null;
  try { data = await api(F('/legacy')); } catch (e) { $('#legacy-body', root).innerHTML = '<div class="empty"><p>' + esc(e.message) + '</p></div>'; return; }
  const body = $('#legacy-body', root); if (!body) return;
  const what = '<div class="card"><h3 class="dsp" style="font-size:20px;margin:0 0 8px">What happens, in plain words</h3>' + ((data.whatHappens || []).map((line) => '<p style="margin:0 0 6px">' + esc(line) + '</p>').join('')) + '</div>';
  if (!data.planHasLegacy) {
    body.innerHTML = '<p class="lead">One day this story should pass to someone you trust — someone who can add to it, keep it safe, and hand it on again. Naming that person is part of Forever.</p>' + what + '<p style="margin-top:14px"><a class="btn btn-grad" href="#/plan">See Forever on your plan</a></p>';
    return;
  }
  if (data.ownerOnly) {
    body.innerHTML = '<p class="lead">Naming who keeps this story going is the family owner\'s job — only they can see or change the names.</p>' + what;
    return;
  }
  const d = data.designation;
  const heirVal = (i, k) => (d && d.heirs && d.heirs[i] ? esc(d.heirs[i][k] || '') : '');
  body.innerHTML = what +
    (d && d.confirmationDue ? '<div class="card" style="background:var(--pink);border-color:transparent"><p style="margin:0 0 10px"><strong>Still right?</strong> It has been over a year since these names were confirmed. If they are still the right people, say so — it takes one tap.</p><button type="button" class="btn btn-grad btn-small" id="legacy-confirm">This is still right</button></div>' : '') +
    '<div class="card"><h3 class="dsp" style="font-size:20px;margin:0 0 10px">' + (d ? 'The names on record' : 'Name who keeps the story') + '</h3><form id="legacy-form">' +
    '<label class="field"><span>The person who takes over first</span><input name="sName" required value="' + (d ? esc(d.successorName || '') : '') + '" placeholder="Their full name"></label>' +
    '<label class="field"><span>Their email</span><input name="sEmail" type="email" required value="' + (d ? esc(d.successorEmail || '') : '') + '" placeholder="name@example.com"></label>' +
    '<label class="field"><span>Next in line (optional)</span><input name="h1Name" value="' + heirVal(0, 'name') + '" placeholder="Full name"></label>' +
    '<label class="field"><span>Their email</span><input name="h1Email" type="email" value="' + heirVal(0, 'email') + '" placeholder="name@example.com"></label>' +
    '<label class="field"><span>And then (optional)</span><input name="h2Name" value="' + heirVal(1, 'name') + '" placeholder="Full name"></label>' +
    '<label class="field"><span>Their email</span><input name="h2Email" type="email" value="' + heirVal(1, 'email') + '" placeholder="name@example.com"></label>' +
    '<p class="form-error" role="alert" hidden></p><button type="submit" class="btn btn-grad">' + (d ? 'Save these names' : 'Save') + '</button>' +
    (d ? ' <button type="button" class="btn btn-ghost btn-danger" id="legacy-remove">Remove these names</button>' : '') +
    '</form>' + (d && d.confirmedAt ? '<p class="muted-small" style="margin:10px 0 0">Last confirmed ' + esc(fmtDay(d.confirmedAt)) + '.</p>' : '') + '</div>';
  const form = $('#legacy-form', body);
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); const fd = new FormData(form);
    const heirs = [];
    if (String(fd.get('h1Name') || '').trim() || String(fd.get('h1Email') || '').trim()) heirs.push({ name: fd.get('h1Name'), email: fd.get('h1Email') });
    if (String(fd.get('h2Name') || '').trim() || String(fd.get('h2Email') || '').trim()) heirs.push({ name: fd.get('h2Name'), email: fd.get('h2Email') });
    try { await api(F('/legacy'), { method: 'PUT', body: { successor: { name: fd.get('sName'), email: fd.get('sEmail') }, heirs } }); toast('Saved — and confirmed as of today.'); render(); }
    catch (err) { formError(form, err.message); }
  });
  const cf = $('#legacy-confirm', body); if (cf) cf.addEventListener('click', async () => { cf.disabled = true; try { await api(F('/legacy/confirm'), { method: 'POST', body: {} }); toast('Confirmed — still right.'); render(); } catch (e) { toast(e.message, 'error'); cf.disabled = false; } });
  const rm = $('#legacy-remove', body); if (rm) rm.addEventListener('click', async () => { rm.disabled = true; try { await api(F('/legacy'), { method: 'DELETE' }); toast('Removed. You can name someone again any time.'); render(); } catch (e) { toast(e.message, 'error'); rm.disabled = false; } });
}

/* ---- Archive vs Story: the keeper's auto-share preference ---- */
async function fillDenPrefs(root) {
  const box = $('#den-prefs-settings', root); if (!box) return;
  if (!iAmOwner()) { box.innerHTML = ''; return; }
  let prefs = null;
  try { prefs = await api(F('/den-prefs')); } catch (e) { box.innerHTML = ''; return; }
  const on = !!(prefs && prefs.autoShareNew);
  box.innerHTML = '<h2 class="section-title">Sharing with your Den</h2><div class="card">' +
    '<p style="margin:0 0 10px">Your archive is yours. New moments start as <strong>Just me</strong> — the Den sees the shared story, never the raw archive — and you choose what to share, moment by moment, from each moment\'s ••• menu.</p>' +
    '<p style="margin:0 0 10px">If you\'d rather most things were shared as they arrive, turn this on: <strong>new moments will be shared with the Den automatically</strong>. You can still make any single moment Just me, any time.</p>' +
    '<button type="button" class="btn ' + (on ? 'btn-grad' : 'btn-outline') + ' btn-small" id="den-pref-toggle">' + (on ? 'On — new moments are shared with the Den' : 'Off — new moments start as Just me') + '</button></div>';
  const t = $('#den-pref-toggle', box);
  if (t) t.addEventListener('click', async () => {
    t.disabled = true;
    try { const res = await api(F('/den-prefs'), { method: 'POST', body: { autoShareNew: !on } }); toast(res && res.autoShareNew ? 'On — new moments will be shared with the Den.' : 'Off — new moments start as Just me.'); fillDenPrefs(root); }
    catch (e) { toast(e.message, 'error'); t.disabled = false; }
  });
}

/* ---- Ruling (5): the share sheet names what's inside ---- */
function shareScopeListHTML(spec) {
  let mems = [];
  if (!spec) return '';
  if (spec.scope === 'chapter') { const ch = state.chapters.find((c) => String(c.id) === String(spec.targetId)); if (ch) mems = chapterMemories(ch); }
  else if (spec.scope === 'thread') { const t = state.threads.find((x) => String(x.id) === String(spec.targetId)); if (t) mems = (t.memoryIds || []).map(memById).filter(Boolean); }
  else if (spec.scope === 'film') { mems = state.memories.filter((m) => m.type === 'photo' && new Date(m.takenAt).getFullYear() === Number(spec.filmYear)); }
  else if (spec.scope === 'family') { mems = state.memories.filter((m) => audienceOfClient(m) === 'den'); }
  else return '';
  mems = mems.filter((m) => audienceOfClient(m) !== 'private' && m.reviewState !== 'pending');
  if (spec.scope === 'family') mems = mems.filter((m) => audienceOfClient(m) === 'den');
  if (!mems.length) return '<p class="share-label">What\'s inside</p><p class="muted-small" style="margin:0 0 10px">Nothing the link can show right now — moments set to “Just me” are never inside a share.</p>';
  const shown = mems.slice(0, 12);
  return '<p class="share-label">What\'s inside — ' + num(mems.length) + ' moment' + (mems.length === 1 ? '' : 's') + '</p><div class="share-scope-list">' +
    shown.map((m) => '<p class="share-scope-row">' + esc(m.caption || m.storyText || m.type) + ' <span class="muted-small">' + esc(fmtDay(m.takenAt)) + '</span></p>').join('') +
    (mems.length > shown.length ? '<p class="muted-small" style="margin:4px 0 0">…and ' + num(mems.length - shown.length) + ' more</p>' : '') +
    '<p class="muted-small" style="margin:6px 0 0">Moments set to “Just me” are never inside a share.</p></div>';
}

/* ================= boot ================= */
(async function boot() {
  const params = new URLSearchParams(location.search);
  const invite = params.get('invite');
  if (invite) state.inviteToken = invite;
  try { const me = await api('/api/me'); state.user = me.user || me; await afterAuth(); }
  catch (e) { showAuth(); }
})();
