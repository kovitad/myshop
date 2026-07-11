/* @ds-bundle: {"format":4,"namespace":"KOVITADWellnessDesignSystem_61cabf","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"ProductCard","sourcePath":"components/display/ProductCard.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"IconTile","sourcePath":"components/icons/Icon.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Toast","sourcePath":"components/overlay/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/overlay/Tooltip.jsx"}],"sourceHashes":{"assets/image-slot.js":"0394ad34f685","components/actions/Button.jsx":"e18a090de4c8","components/actions/IconButton.jsx":"5053309bb375","components/brand/Wordmark.jsx":"7cc371ce29d5","components/display/Badge.jsx":"937e96a5f95b","components/display/Card.jsx":"8994e132477c","components/display/Divider.jsx":"6dd30f112cb1","components/display/ProductCard.jsx":"d43af2754521","components/display/Tag.jsx":"6a347547d6c3","components/forms/Checkbox.jsx":"996254c4bfad","components/forms/Input.jsx":"8576615678c2","components/forms/Radio.jsx":"00b1fffdfcbe","components/forms/Select.jsx":"8a00cae25824","components/forms/Switch.jsx":"a1c4135df1a0","components/icons/Icon.jsx":"be5f83907029","components/navigation/Tabs.jsx":"5d64671cd17f","components/overlay/Dialog.jsx":"6949624545db","components/overlay/Toast.jsx":"4c498376173f","components/overlay/Tooltip.jsx":"aaaacf89e486","ui_kits/kovitad_shop/Article.jsx":"2757cfcfb4f9","ui_kits/kovitad_shop/Home.jsx":"3eca5d3f195a","ui_kits/kovitad_shop/Library.jsx":"184898b54e5f","ui_kits/kovitad_shop/SiteChrome.jsx":"d0465d897060"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KOVITADWellnessDesignSystem_61cabf = window.KOVITADWellnessDesignSystem_61cabf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(0,0,0,.12);border-top-color:rgba(0,0,0,.45);' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/image-slot.js", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 36,
    px: 16,
    fs: 14
  },
  md: {
    h: 44,
    px: 22,
    fs: 15
  },
  lg: {
    h: 52,
    px: 28,
    fs: 16
  }
};

/** KOVITAD pill button. variants: primary | secondary | ghost | chrome | dark */
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  disabled,
  fullWidth,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const variants = {
    primary: {
      background: press ? "var(--green-900)" : hover ? "var(--green-600)" : "var(--green-700)",
      color: "var(--text-on-dark)",
      border: "1px solid transparent",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)"
    },
    secondary: {
      background: hover ? "var(--silver-50)" : "var(--surface-raised)",
      color: "var(--green-700)",
      border: `1px solid var(${hover ? "--border-silver-strong" : "--border-silver"})`,
      boxShadow: "var(--shadow-xs)"
    },
    ghost: {
      background: hover ? "rgba(23,63,53,0.06)" : "transparent",
      color: "var(--green-700)",
      border: "1px solid transparent"
    },
    chrome: {
      background: "var(--grad-chrome)",
      color: "var(--charcoal-800)",
      border: "1px solid var(--silver-400)",
      boxShadow: hover ? "var(--shadow-silver)" : "var(--inset-sheen), var(--shadow-xs)"
    },
    dark: {
      /* for use on green/charcoal surfaces */
      background: hover ? "rgba(238,241,243,0.16)" : "rgba(238,241,243,0.08)",
      color: "var(--text-on-dark)",
      border: "1px solid var(--border-hairline-dark)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    className: variant === "primary" || variant === "chrome" ? "k-shine" : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      borderRadius: "var(--radius-pill)",
      font: `600 ${s.fs}px/1 var(--font-sans)`,
      letterSpacing: "0.01em",
      whiteSpace: "nowrap",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? "translateY(1px)" : "none",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-med) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
      ...variants[variant],
      ...style
    }
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 36,
  md: 44,
  lg: 52
};

/** Round icon-only button. Pass an <Icon/> as children. */
function IconButton({
  variant = "secondary",
  size = "md",
  label,
  children,
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const variants = {
    primary: {
      background: press ? "var(--green-900)" : hover ? "var(--green-600)" : "var(--green-700)",
      color: "var(--text-on-dark)",
      border: "1px solid transparent"
    },
    secondary: {
      background: hover ? "var(--silver-50)" : "var(--surface-raised)",
      color: "var(--green-700)",
      border: `1px solid var(${hover ? "--border-silver-strong" : "--border-silver"})`,
      boxShadow: "var(--shadow-xs)"
    },
    ghost: {
      background: hover ? "rgba(23,63,53,0.06)" : "transparent",
      color: "var(--green-700)",
      border: "1px solid transparent"
    },
    dark: {
      background: hover ? "rgba(238,241,243,0.16)" : "rgba(238,241,243,0.08)",
      color: "var(--text-on-dark)",
      border: "1px solid var(--border-hairline-dark)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: d,
      height: d,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? "translateY(1px)" : "none",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
/** Type-only brand lockup (no final logo exists yet). */
function Wordmark({
  size = "md",
  tone = "light",
  withDomain = true,
  style
}) {
  const sizes = {
    sm: 18,
    md: 24,
    lg: 34,
    xl: 48
  };
  const fs = sizes[size] || sizes.md;
  const color = tone === "dark" ? "var(--text-on-dark)" : "var(--green-700)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: Math.max(2, fs * 0.12),
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `400 ${fs}px/1 var(--font-wordmark)`,
      letterSpacing: "var(--tracking-wordmark)",
      color
    }
  }, "KOVITAD"), withDomain && /*#__PURE__*/React.createElement("span", {
    style: {
      font: `500 ${Math.round(fs * 0.52)}px/1 var(--font-sans)`,
      color: tone === "dark" ? "var(--silver-300)" : "var(--silver-700)",
      letterSpacing: "0.02em"
    }
  }, ".shop"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/** Small status pill. tones: green | silver | ivory | success | warning | danger */
function Badge({
  tone = "green",
  icon,
  children,
  style
}) {
  const tones = {
    green: {
      background: "var(--green-50)",
      color: "var(--green-700)",
      border: "1px solid var(--green-100)"
    },
    silver: {
      background: "var(--grad-chrome-soft)",
      color: "var(--charcoal-700)",
      border: "1px solid var(--silver-300)",
      boxShadow: "var(--inset-sheen)"
    },
    ivory: {
      background: "var(--ivory-300)",
      color: "var(--charcoal-700)",
      border: "1px solid transparent"
    },
    dark: {
      background: "rgba(238,241,243,0.1)",
      color: "var(--silver-200)",
      border: "1px solid var(--border-hairline-dark)"
    },
    success: {
      background: "var(--success-100)",
      color: "var(--success-600)",
      border: "1px solid transparent"
    },
    warning: {
      background: "var(--warning-100)",
      color: "var(--warning-600)",
      border: "1px solid transparent"
    },
    danger: {
      background: "var(--danger-100)",
      color: "var(--danger-600)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      height: 24,
      padding: "0 10px",
      boxSizing: "border-box",
      borderRadius: "var(--radius-pill)",
      font: "600 11px/1 var(--font-sans)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...tones[tone],
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface card. premium=true adds the silver rim + shine hover. */
function Card({
  premium,
  interactive,
  padding = 24,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: premium ? "k-shine" : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--surface-raised)",
      border: premium ? `1px solid var(${lift ? "--border-silver-strong" : "--border-silver"})` : "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      boxShadow: premium ? "var(--shadow-silver)" : lift ? "var(--shadow-md)" : "var(--shadow-sm)",
      padding,
      transform: lift ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
/** Chrome hairline divider, optionally with a centered label. */
function Divider({
  label,
  spacing = 0,
  style
}) {
  const line = {
    flex: 1,
    height: 1,
    background: "linear-gradient(90deg, transparent 0%, var(--silver-300) 25%, var(--silver-100) 50%, var(--silver-300) 75%, transparent 100%)"
  };
  if (!label) {
    return /*#__PURE__*/React.createElement("hr", {
      className: "k-divider",
      style: {
        margin: `${spacing}px 0`,
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      margin: `${spacing}px 0`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: line
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 var(--text-xs)/1 var(--font-sans)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--silver-700)",
      whiteSpace: "nowrap"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: line
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
/** Selectable/removable topic chip. */
function Tag({
  children,
  selected,
  onClick,
  onRemove,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 32,
      padding: "0 14px",
      boxSizing: "border-box",
      borderRadius: "var(--radius-pill)",
      font: "500 var(--text-sm)/1 var(--font-sans)",
      background: selected ? "var(--green-700)" : hover && onClick ? "var(--silver-50)" : "var(--surface-raised)",
      color: selected ? "var(--text-on-dark)" : "var(--text-body)",
      border: `1px solid ${selected ? "var(--green-700)" : hover && onClick ? "var(--border-silver-strong)" : "var(--border-silver)"}`,
      cursor: onClick ? "pointer" : "default",
      whiteSpace: "nowrap",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      padding: 0,
      lineHeight: 1,
      fontSize: 13,
      color: selected ? "var(--silver-300)" : "var(--silver-700)"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Custom checkbox — green fill when checked, silver hairline when not. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      font: "400 var(--text-sm)/1.4 var(--font-sans)",
      color: "var(--text-body)",
      minHeight: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      flex: "none",
      boxSizing: "border-box",
      borderRadius: 6,
      border: `1px solid ${on ? "var(--green-700)" : "var(--border-silver-strong)"}`,
      background: on ? "var(--green-700)" : "var(--surface-raised)",
      boxShadow: on ? "none" : "var(--inset-sheen)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--silver-100)",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L5 8.7L9.5 3.5",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label, help and error states. */
function Input({
  label,
  help,
  error,
  icon,
  type = "text",
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const id = React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      font: "500 var(--text-sm)/1.3 var(--font-sans)",
      color: "var(--text-heading)",
      ...style
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-faint)",
      display: "inline-flex"
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      height: 44,
      padding: icon ? "0 14px 0 42px" : "0 14px",
      borderRadius: "var(--radius-md)",
      border: `1px solid ${error ? "var(--danger-600)" : focus ? "var(--green-500)" : "var(--border-silver)"}`,
      outline: "none",
      boxShadow: focus ? "0 0 0 3px rgba(42,99,85,0.14)" : "var(--inset-sheen)",
      background: "var(--surface-raised)",
      font: "400 var(--text-md)/1 var(--font-sans)",
      color: "var(--text-body)",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      ...inputStyle
    }
  }, rest))), (error || help) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 var(--text-xs)/1.4 var(--font-sans)",
      color: error ? "var(--danger-600)" : "var(--text-muted)"
    }
  }, error || help));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio group. */
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = "column",
  style
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const pick = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: direction,
      gap: direction === "column" ? 10 : 20,
      ...style
    }
  }, options.map(o => {
    const v = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    const on = current === v.value;
    return /*#__PURE__*/React.createElement("label", {
      key: v.value,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer",
        font: "400 var(--text-sm)/1.4 var(--font-sans)",
        color: "var(--text-body)",
        minHeight: 24
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      checked: on,
      onChange: () => pick(v.value),
      style: {
        position: "absolute",
        opacity: 0,
        width: 1,
        height: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 20,
        height: 20,
        flex: "none",
        boxSizing: "border-box",
        borderRadius: "50%",
        border: `1px solid ${on ? "var(--green-700)" : "var(--border-silver-strong)"}`,
        background: "var(--surface-raised)",
        boxShadow: "var(--inset-sheen)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "border-color var(--dur-fast) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "var(--green-700)",
        transform: on ? "scale(1)" : "scale(0)",
        transition: "transform var(--dur-fast) var(--ease-out)"
      }
    })), v.label);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled native select with chrome chevron. */
function Select({
  label,
  options = [],
  help,
  style,
  selectStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const id = React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      font: "500 var(--text-sm)/1.3 var(--font-sans)",
      color: "var(--text-heading)",
      ...style
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      height: 44,
      padding: "0 40px 0 14px",
      borderRadius: "var(--radius-md)",
      border: `1px solid ${focus ? "var(--green-500)" : "var(--border-silver)"}`,
      outline: "none",
      boxShadow: focus ? "0 0 0 3px rgba(42,99,85,0.14)" : "var(--inset-sheen)",
      background: "var(--surface-raised)",
      font: "400 var(--text-md)/1 var(--font-sans)",
      color: "var(--text-body)",
      appearance: "none",
      WebkitAppearance: "none",
      cursor: "pointer",
      transition: "border-color var(--dur-fast) var(--ease-out)",
      ...selectStyle
    }
  }, rest), options.map(o => {
    const v = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v.value,
      value: v.value
    }, v.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--silver-700)",
      fontSize: 11,
      lineHeight: 1
    }
  }, "\u25BE")), help && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 var(--text-xs)/1.4 var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, help));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Toggle switch — chrome track off, forest green on. */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      font: "400 var(--text-sm)/1.4 var(--font-sans)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 44,
      height: 24,
      flex: "none",
      boxSizing: "border-box",
      borderRadius: "var(--radius-pill)",
      border: `1px solid ${on ? "var(--green-700)" : "var(--silver-400)"}`,
      background: on ? "var(--green-700)" : "var(--grad-chrome-soft)",
      position: "relative",
      transition: "background var(--dur-med) var(--ease-out), border-color var(--dur-med) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: on ? 22 : 2,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "#FFFFFF",
      boxShadow: "0 1px 3px rgba(30,40,36,0.25), var(--inset-sheen)",
      transition: "left var(--dur-med) var(--ease-out)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
/** Lucide icon wrapper (CDN UMD build must be loaded on the page). */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = "currentColor",
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const g = window.lucide;
    const host = ref.current;
    if (!g || !host) return;
    host.innerHTML = "";
    const pascal = String(name).split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("");
    const node = g.icons && g.icons[pascal] || g[pascal];
    if (!node) return;
    const el = g.createElement(node);
    el.setAttribute("width", size);
    el.setAttribute("height", size);
    el.setAttribute("stroke-width", strokeWidth);
    host.appendChild(el);
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      flex: "none",
      color,
      verticalAlign: "middle",
      ...style
    }
  });
}

/** Small rounded tile with a chrome-gradient face holding an icon — the brand's icon presentation. */
function IconTile({
  name,
  size = 44,
  iconSize,
  tone = "chrome",
  style
}) {
  const tones = {
    chrome: {
      background: "var(--grad-chrome-soft)",
      border: "1px solid var(--border-silver)",
      color: "var(--green-700)",
      boxShadow: "var(--inset-sheen), var(--shadow-xs)"
    },
    green: {
      background: "var(--green-50)",
      border: "1px solid var(--green-100)",
      color: "var(--green-700)"
    },
    dark: {
      background: "rgba(238,241,243,0.08)",
      border: "1px solid var(--border-hairline-dark)",
      color: "var(--silver-200)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flex: "none",
      borderRadius: "var(--radius-md)",
      ...tones[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: iconSize || Math.round(size * 0.45)
  }));
}
Object.assign(__ds_scope, { Icon, IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/display/ProductCard.jsx
try { (() => {
/** Premium product / ebook card. Provide `image` (url) or it renders a calm placeholder slot. */
function ProductCard({
  kind = "Ebook",
  title,
  description,
  price,
  oldPrice,
  image,
  icon = "book-open",
  premium = true,
  cta = "View details",
  onCta,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: premium ? "k-shine" : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-raised)",
      border: `1px solid var(${hover ? "--border-silver-strong" : "--border-silver"})`,
      borderRadius: "var(--radius-lg)",
      boxShadow: hover ? "var(--shadow-silver), var(--shadow-md)" : "var(--shadow-silver)",
      overflow: "hidden",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4 / 3",
      background: image ? `url(${image}) center/cover` : "var(--grad-green-depth)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, !image && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--radius-md)",
      background: "rgba(238,241,243,0.1)",
      border: "1px solid var(--border-hairline-dark)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--silver-300)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    strokeWidth: 1.5
  })), premium && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "silver",
    style: {
      position: "absolute",
      top: 14,
      left: 14
    }
  }, "Premium")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: 20,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-eyebrow",
    style: {
      color: "var(--silver-700)"
    }
  }, kind), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 var(--text-xl)/var(--leading-snug) var(--font-display)",
      color: "var(--text-heading)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 var(--text-sm)/1.55 var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      marginTop: "auto",
      paddingTop: 12
    }
  }, price !== undefined ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 var(--text-lg)/1 var(--font-sans)",
      color: "var(--text-heading)"
    }
  }, price), oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 var(--text-sm)/1 var(--font-sans)",
      color: "var(--text-faint)",
      textDecoration: "line-through"
    }
  }, oldPrice)) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: onCta
  }, cta))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underline tabs. items: string[] or {id,label}[]. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const norm = items.map(i => typeof i === "string" ? {
    id: i,
    label: i
  } : i);
  const [internal, setInternal] = React.useState(defaultValue ?? (norm[0] && norm[0].id));
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const [hovered, setHovered] = React.useState(null);
  const pick = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, norm.map(t => {
    const on = current === t.id;
    const hov = hovered === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => pick(t.id),
      onMouseEnter: () => setHovered(t.id),
      onMouseLeave: () => setHovered(null),
      style: {
        appearance: "none",
        background: "transparent",
        border: 0,
        cursor: "pointer",
        padding: "12px 14px",
        marginBottom: -1,
        font: `${on ? 600 : 500} var(--text-sm)/1 var(--font-sans)`,
        color: on ? "var(--green-700)" : hov ? "var(--text-body)" : "var(--text-muted)",
        borderBottom: `2px solid ${on ? "var(--green-700)" : hov ? "var(--silver-300)" : "transparent"}`,
        transition: "color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
        whiteSpace: "nowrap"
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
/** Modal dialog with charcoal scrim + blur. Render conditionally: {open && <Dialog …/>} */
function Dialog({
  title,
  onClose,
  width = 480,
  footer,
  children,
  style
}) {
  React.useEffect(() => {
    const onKey = e => e.key === "Escape" && onClose && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => e.target === e.currentTarget && onClose && onClose(),
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(22, 30, 26, 0.45)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    style: {
      width: "100%",
      maxWidth: width,
      maxHeight: "85vh",
      overflow: "auto",
      background: "var(--surface-raised)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-silver)",
      boxShadow: "var(--shadow-lg)",
      padding: 28,
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "600 var(--text-2xl)/var(--leading-snug) var(--font-display)",
      color: "var(--text-heading)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Close",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 var(--text-md)/var(--leading-body) var(--font-sans)",
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      marginTop: 24
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Toast.jsx
try { (() => {
/** Toast notice. Static bar by default; position="fixed" pins bottom-center. */
function Toast({
  tone = "default",
  icon,
  title,
  children,
  position = "static",
  onDismiss,
  style
}) {
  const tones = {
    default: {
      background: "var(--surface-ink)",
      color: "var(--text-on-dark)",
      iconColor: "var(--silver-300)"
    },
    success: {
      background: "var(--green-700)",
      color: "var(--text-on-dark)",
      iconColor: "var(--green-200)"
    },
    danger: {
      background: "#4A2620",
      color: "#F5E3E0",
      iconColor: "#E0A79F"
    }
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 16px",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-hairline-dark)",
      boxShadow: "var(--shadow-lg)",
      font: "500 var(--text-sm)/1.4 var(--font-sans)",
      background: t.background,
      color: t.color,
      ...(position === "fixed" ? {
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 110
      } : {}),
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.iconColor,
      display: "inline-flex"
    }
  }, icon), /*#__PURE__*/React.createElement("span", null, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontWeight: 600
    }
  }, title), children), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: 0,
      background: "transparent",
      color: t.iconColor,
      cursor: "pointer",
      padding: 4,
      marginLeft: 4,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Toast.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tooltip.jsx
try { (() => {
/** Hover tooltip wrapper. */
function Tooltip({
  content,
  side = "top",
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 120,
      ...pos[side],
      background: "var(--surface-ink)",
      color: "var(--text-on-dark)",
      border: "1px solid var(--border-hairline-dark)",
      font: "500 var(--text-xs)/1.4 var(--font-sans)",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      boxShadow: "var(--shadow-md)",
      opacity: show ? 1 : 0,
      transition: "opacity var(--dur-fast) var(--ease-out)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kovitad_shop/Article.jsx
try { (() => {
// KOVITAD.shop — Article reading screen. Bilingual EN/TH.
const ART_COPY = {
  en: {
    tag1: "Sleep",
    tag2: "7 min read",
    title: "Seven quiet habits of good sleepers",
    lede: "None of them involve buying anything. A look at the evening routines research keeps pointing back to — and how to borrow them without turning bedtime into a project.",
    author: "Kovitad",
    byline: "Founder & curator · Updated June 2026",
    save: "Save",
    share: "Share",
    saved: "Saved to your library.",
    copied: "Link copied.",
    p1: ["Ask a hundred good sleepers what they do before bed and you won't hear about gadgets. You'll hear about ", "rhythm", ": the same rough bedtime, the same slow wind-down, most nights of the week. The research on sleep hygiene is unglamorous, and that's exactly why it works."],
    p2: "Light is the strongest lever. Dimming the house an hour before bed — and getting bright light within an hour of waking — does more for most people than any supplement marketed for sleep. It costs nothing and starts working within days.",
    quoteA: "Good sleep is less a skill and more a ",
    quoteW: "schedule",
    quoteB: " you keep gently.",
    p3: "Temperature matters more than most people expect: a cool room and a warm shower beforehand nudge your core temperature in the direction sleep wants it to go. And caffeine's half-life means the espresso at 4pm is still half with you at 10pm — research suggests moving the last cup earlier is one of the highest-leverage changes a light sleeper can make.",
    calloutB: "A note on scope.",
    callout: " This is general education and personal experience, not medical advice. If sleep problems persist, talk to your clinician — persistent insomnia and apnea deserve real care.",
    p4: "The rest of the seven are small: a notebook to park tomorrow's worries, a consistent wake time even after a bad night, keeping the bed for sleep, and treating the occasional rough night as weather — noticed, not fought.",
    tags: ["Sleep", "Evening routine", "Habits"],
    keepReading: "Keep reading",
    browse: "Browse the full library",
    opening: "Opening: ",
    related: [{
      tag: "Nutrition · 12 min",
      t: "Protein after 50: what the research actually says"
    }, {
      tag: "Movement · 6 min",
      t: "The case for the unimpressive walk"
    }]
  },
  th: {
    tag1: "การนอน",
    tag2: "อ่าน 7 นาที",
    title: "7 นิสัยเงียบ ๆ ของคนหลับดี",
    lede: "ไม่มีข้อไหนต้องซื้ออะไรเลย มาดูกิจวัตรยามค่ำที่งานวิจัยชี้ซ้ำ ๆ — และวิธีหยิบมาใช้ โดยไม่ทำให้การนอนกลายเป็นภาระ",
    author: "Kovitad",
    byline: "ผู้ก่อตั้งและผู้คัดสรร · อัปเดตมิถุนายน 2026",
    save: "บันทึก",
    share: "แชร์",
    saved: "บันทึกแล้ว",
    copied: "คัดลอกลิงก์แล้ว",
    p1: ["ลองถามคนหลับดีสักร้อยคนว่าทำอะไรก่อนนอน คุณจะไม่ได้ยินเรื่องอุปกรณ์ แต่จะได้ยินเรื่อง", "จังหวะ", ": เวลานอนใกล้เคียงกันทุกคืน ช่วงผ่อนคลายช้า ๆ แบบเดิม เกือบทุกคืนของสัปดาห์ งานวิจัยเรื่องสุขอนามัยการนอนดูธรรมดา และนั่นคือเหตุผลที่มันได้ผล"],
    p2: "แสงคือคันโยกที่แรงที่สุด หรี่ไฟในบ้านหนึ่งชั่วโมงก่อนนอน — และรับแสงสว่างภายในหนึ่งชั่วโมงหลังตื่น — ช่วยคนส่วนใหญ่ได้มากกว่าอาหารเสริมเพื่อการนอนใด ๆ ไม่มีค่าใช้จ่าย และเห็นผลในไม่กี่วัน",
    quoteA: "การนอนหลับที่ดี ไม่ใช่ทักษะ แต่คือ",
    quoteW: "ตาราง",
    quoteB: "ที่คุณรักษาไว้อย่างอ่อนโยน",
    p3: "อุณหภูมิสำคัญกว่าที่คิด: ห้องที่เย็นและการอาบน้ำอุ่นก่อนนอน ช่วยพาอุณหภูมิร่างกายไปในทิศที่การนอนต้องการ และด้วยครึ่งชีวิตของคาเฟอีน กาแฟตอนสี่โมงเย็นยังอยู่กับคุณครึ่งแก้วตอนสี่ทุ่ม — งานวิจัยชี้ว่าการเลื่อนกาแฟแก้วสุดท้ายให้เร็วขึ้น เป็นการเปลี่ยนแปลงที่คุ้มที่สุดอย่างหนึ่งสำหรับคนหลับยาก",
    calloutB: "ขอบเขตของบทความ",
    callout: " — นี่คือความรู้ทั่วไปและประสบการณ์ส่วนตัว ไม่ใช่คำแนะนำทางการแพทย์ หากปัญหาการนอนยังต่อเนื่อง โปรดปรึกษาแพทย์ — โรคนอนไม่หลับเรื้อรังและภาวะหยุดหายใจขณะหลับควรได้รับการดูแลอย่างจริงจัง",
    p4: "ที่เหลือเป็นเรื่องเล็ก ๆ: สมุดจดไว้พักความกังวลของพรุ่งนี้ ตื่นเวลาเดิมแม้คืนก่อนจะแย่ ใช้เตียงเพื่อการนอนเท่านั้น และมองคืนที่หลับยากเป็นเหมือนสภาพอากาศ — รับรู้ ไม่ต้องต่อสู้",
    tags: ["การนอน", "กิจวัตรยามค่ำ", "นิสัย"],
    keepReading: "อ่านต่อ",
    browse: "ดูคลังความรู้ทั้งหมด",
    opening: "กำลังเปิด: ",
    related: [{
      tag: "โภชนาการ · 12 นาที",
      t: "โปรตีนหลังวัย 50: งานวิจัยบอกอะไรจริง ๆ"
    }, {
      tag: "การเคลื่อนไหว · 6 นาที",
      t: "พลังของการเดินธรรมดา ๆ"
    }]
  }
};
function ArticleScreen({
  onNav,
  onToast,
  lang = "th"
}) {
  const {
    Badge,
    Card,
    Divider,
    Icon,
    IconButton,
    Tag,
    Button
  } = window.KOVITADWellnessDesignSystem_61cabf;
  const c = ART_COPY[lang];
  const th = lang === "th";
  const measure = {
    maxWidth: "var(--container-narrow)",
    margin: "0 auto",
    padding: "0 var(--container-pad)"
  };
  const para = {
    fontSize: 17,
    lineHeight: th ? 1.9 : 1.75,
    color: "var(--text-body)"
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("header", {
    style: {
      ...measure,
      padding: "72px var(--container-pad) 0",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    style: th ? {
      letterSpacing: "0.02em"
    } : undefined
  }, c.tag1), /*#__PURE__*/React.createElement(Badge, {
    tone: "ivory",
    style: th ? {
      letterSpacing: "0.02em"
    } : undefined
  }, c.tag2)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: th ? "clamp(36px, 4.6vw, 48px)" : "clamp(38px, 5vw, 52px)",
      lineHeight: th ? 1.35 : "var(--leading-tight)"
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--text-muted)",
      lineHeight: th ? 1.75 : 1.55
    }
  }, c.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--grad-chrome)",
      border: "1px solid var(--silver-400)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: "600 14px/1 var(--font-sans)",
      color: "var(--green-800)"
    }
  }, "K"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 var(--text-sm)/1.3 var(--font-sans)",
      color: "var(--text-heading)"
    }
  }, c.author), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 var(--text-xs)/1.5 var(--font-sans)",
      color: "var(--text-faint)"
    }
  }, c.byline)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: c.save,
    variant: "ghost",
    size: "sm",
    onClick: () => onToast(c.saved)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark",
    size: 17
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: c.share,
    variant: "ghost",
    size: "sm",
    onClick: () => onToast(c.copied)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "link",
    size: 17
  })))), /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...measure,
      padding: "36px var(--container-pad) 0",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: para
  }, c.p1[0], /*#__PURE__*/React.createElement("em", null, c.p1[1]), c.p1[2]), /*#__PURE__*/React.createElement("p", {
    style: para
  }, c.p2), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: "16px 0",
      padding: "8px 0 8px 28px",
      borderLeft: "2px solid var(--silver-400)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: `600 var(--text-2xl)/${th ? 1.6 : 1.35} var(--font-display)`,
      color: "var(--text-heading)"
    }
  }, c.quoteA, /*#__PURE__*/React.createElement("span", {
    className: "k-silver-text"
  }, c.quoteW), c.quoteB)), /*#__PURE__*/React.createElement("p", {
    style: para
  }, c.p3), /*#__PURE__*/React.createElement(Card, {
    style: {
      background: "var(--green-50)",
      border: "1px solid var(--green-100)",
      boxShadow: "none",
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-600)",
      display: "inline-flex",
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 18
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: `400 var(--text-sm)/${th ? 1.85 : 1.6} var(--font-sans)`,
      color: "var(--green-800)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, c.calloutB), c.callout)), /*#__PURE__*/React.createElement("p", {
    style: para
  }, c.p4), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      paddingTop: 8
    }
  }, c.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...measure,
      padding: "48px var(--container-pad) 72px"
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    label: c.keepReading,
    spacing: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20,
      marginTop: 40
    }
  }, c.related.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.t,
    interactive: true,
    onClick: () => onToast(c.opening + a.t),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-eyebrow",
    style: {
      color: "var(--silver-700)",
      letterSpacing: th ? "0.04em" : "var(--tracking-caps)"
    }
  }, a.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 var(--text-lg)/${th ? 1.6 : 1.35} var(--font-display)`,
      color: "var(--text-heading)"
    }
  }, a.t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    }),
    onClick: () => onNav("Library")
  }, c.browse)))), /*#__PURE__*/React.createElement(NewsletterBand, {
    onToast: onToast,
    lang: lang
  }));
}
Object.assign(window, {
  ArticleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kovitad_shop/Article.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kovitad_shop/Home.jsx
try { (() => {
// KOVITAD.shop — Home screen. Bilingual EN/TH.
const HOME_COPY = {
  en: {
    eyebrow: "Longevity, made practical",
    t1: "Small habits,",
    t2a: "longer ",
    t2w: "health",
    t2b: ".",
    sub: "Evidence-informed guides, articles and tools for eating, moving, sleeping and thinking well — curated by Kovitad.",
    ctaLib: "Browse the library",
    ctaArt: "Start with an article",
    startEyebrow: "Start here",
    startTitle: "Four things worth getting right",
    explore: "Explore",
    topics: [{
      icon: "salad",
      t: "Nutrition",
      d: "Everyday eating for the decades ahead — no fads, no fear."
    }, {
      icon: "footprints",
      t: "Movement",
      d: "Strength and steps that fit a normal week."
    }, {
      icon: "moon",
      t: "Sleep",
      d: "The quiet habits research keeps pointing back to."
    }, {
      icon: "brain",
      t: "Mindset",
      d: "Attention, stress and purpose — trainable, like muscle."
    }],
    divider: "From the library",
    shelfEyebrow: "Ebooks & guides",
    shelfTitle: "Deep dives, kept practical",
    viewAll: "View all",
    kind: "Ebook",
    cta: "View details",
    ebooks: [{
      title: "Eat for the decades ahead",
      d: "A practical, evidence-informed guide to everyday nutrition.",
      price: "฿390",
      old: "฿590",
      icon: "salad"
    }, {
      title: "The unhurried sleep guide",
      d: "24 pages on better evenings — none require buying anything.",
      price: "฿290",
      icon: "moon"
    }, {
      title: "Strong past sixty",
      d: "A gentle strength-training path for late starters.",
      price: "฿390",
      icon: "footprints"
    }],
    artEyebrow: "Latest writing",
    artTitle: "Recent articles",
    articles: [{
      tag: "Sleep · 7 min read",
      t: "Seven quiet habits of good sleepers",
      d: "None of them involve buying anything."
    }, {
      tag: "Nutrition · 12 min read",
      t: "Protein after 50: what the research actually says",
      d: "How much, when, and from what — without the bro-science."
    }, {
      tag: "Mindset · 5 min read",
      t: "Why 'un-retiring' your curiosity matters",
      d: "Learning new things is linked to healthier ageing."
    }]
  },
  th: {
    eyebrow: "อายุยืนแบบทำได้จริง",
    t1: "นิสัยเล็ก ๆ",
    t2a: "สุขภาพที่",
    t2w: "ยืนยาว",
    t2b: "",
    sub: "คู่มือ บทความ และเครื่องมือที่อ้างอิงงานวิจัย เรื่องการกิน การเคลื่อนไหว การนอน และความคิด — คัดสรรโดย Kovitad",
    ctaLib: "ดูคลังความรู้",
    ctaArt: "เริ่มจากบทความ",
    startEyebrow: "เริ่มต้นที่นี่",
    startTitle: "สี่เรื่องสำคัญที่ควรทำให้ดี",
    explore: "ดูเพิ่มเติม",
    topics: [{
      icon: "salad",
      t: "โภชนาการ",
      d: "การกินในทุกวัน เพื่อสุขภาพระยะยาว — ไม่มีสูตรลัด ไม่ต้องกลัว"
    }, {
      icon: "footprints",
      t: "การเคลื่อนไหว",
      d: "ความแข็งแรงและการก้าวเดิน ที่พอดีกับชีวิตประจำสัปดาห์"
    }, {
      icon: "moon",
      t: "การนอน",
      d: "นิสัยเงียบ ๆ ที่งานวิจัยชี้ตรงกันเสมอ"
    }, {
      icon: "brain",
      t: "มายด์เซ็ต",
      d: "สมาธิ ความเครียด และเป้าหมาย — ฝึกได้เหมือนกล้ามเนื้อ"
    }],
    divider: "จากคลังความรู้",
    shelfEyebrow: "อีบุ๊กและคู่มือ",
    shelfTitle: "เจาะลึกแบบใช้ได้จริง",
    viewAll: "ดูทั้งหมด",
    kind: "อีบุ๊ก",
    cta: "ดูรายละเอียด",
    ebooks: [{
      title: "กินดีเพื่อทศวรรษข้างหน้า",
      d: "คู่มือโภชนาการประจำวัน อ้างอิงงานวิจัย ใช้ได้จริง",
      price: "฿390",
      old: "฿590",
      icon: "salad"
    }, {
      title: "คู่มือการนอนแบบไม่เร่งรีบ",
      d: "24 หน้า เรื่องค่ำคืนที่ดีขึ้น — ไม่ต้องซื้ออะไรเพิ่ม",
      price: "฿290",
      icon: "moon"
    }, {
      title: "แข็งแรงหลังหกสิบ",
      d: "เส้นทางฝึกความแข็งแรงอย่างค่อยเป็นค่อยไป สำหรับผู้เริ่มช้า",
      price: "฿390",
      icon: "footprints"
    }],
    artEyebrow: "บทความล่าสุด",
    artTitle: "บทความใหม่",
    articles: [{
      tag: "การนอน · อ่าน 7 นาที",
      t: "7 นิสัยเงียบ ๆ ของคนหลับดี",
      d: "ไม่มีข้อไหนต้องซื้ออะไรเลย"
    }, {
      tag: "โภชนาการ · อ่าน 12 นาที",
      t: "โปรตีนหลังวัย 50: งานวิจัยบอกอะไรจริง ๆ",
      d: "กินเท่าไหร่ เมื่อไหร่ จากแหล่งไหน — ตามหลักฐานจริง"
    }, {
      tag: "มายด์เซ็ต · อ่าน 5 นาที",
      t: "ทำไมความอยากรู้ไม่ควรเกษียณ",
      d: "การเรียนรู้สิ่งใหม่สัมพันธ์กับการสูงวัยอย่างมีคุณภาพ"
    }]
  }
};
function HomeScreen({
  onNav,
  onToast,
  onBuy,
  lang = "th"
}) {
  const {
    Button,
    Icon,
    IconTile,
    ProductCard,
    Card,
    Divider
  } = window.KOVITADWellnessDesignSystem_61cabf;
  const c = HOME_COPY[lang];
  const th = lang === "th";
  const wrap = {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--container-pad)"
  };
  const ctaStyle = {
    textTransform: "uppercase",
    letterSpacing: th ? "0.03em" : "0.14em",
    fontSize: th ? 16 : 14,
    padding: "0 34px"
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "88vh",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      overflow: "hidden",
      background: "var(--grad-green-depth)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "-60%",
      height: "160%"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "home-hero",
    shape: "rect",
    placeholder: th ? "วางรูปหลักของคุณที่นี่ — เวลเนสไทย แสงธรรมชาติ" : "Drop your hero photo — Thai wellness, natural light"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--grad-scrim-hero)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 26,
      padding: "200px 24px 88px",
      maxWidth: 960,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-eyebrow",
    style: {
      color: "var(--silver-200)",
      fontSize: th ? 15 : 13,
      letterSpacing: th ? "0.04em" : "0.22em",
      textShadow: "0 1px 12px rgba(14,33,27,0.5)"
    }
  }, c.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#FFFFFF",
      fontSize: th ? "clamp(44px, 7vw, 76px)" : "clamp(52px, 8vw, var(--text-6xl))",
      lineHeight: th ? 1.22 : 1.04,
      textShadow: "0 2px 28px rgba(14,33,27,0.55)"
    }
  }, c.t1, /*#__PURE__*/React.createElement("br", null), c.t2a, /*#__PURE__*/React.createElement("span", {
    className: "k-silver-text"
  }, c.t2w), c.t2b), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(243,239,228,0.92)",
      fontSize: "var(--text-xl)",
      lineHeight: 1.6,
      maxWidth: 600,
      textShadow: "0 1px 16px rgba(14,33,27,0.5)"
    }
  }, c.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 10,
      flexWrap: "wrap",
      justifyContent: "center",
      pointerEvents: "auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "chrome",
    style: ctaStyle,
    onClick: () => onNav("Library")
  }, c.ctaLib), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "dark",
    style: {
      ...ctaStyle,
      background: "rgba(14,33,27,0.35)",
      backdropFilter: "blur(4px)"
    },
    onClick: () => onNav("Article")
  }, c.ctaArt)))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "88px var(--container-pad)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-eyebrow",
    style: {
      letterSpacing: th ? "0.04em" : "var(--tracking-caps)"
    }
  }, c.startEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-4xl)",
      lineHeight: th ? 1.35 : "var(--leading-tight)"
    }
  }, c.startTitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 20
    }
  }, c.topics.map(x => /*#__PURE__*/React.createElement(Card, {
    key: x.t,
    interactive: true,
    onClick: () => onNav("Article"),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    name: x.icon,
    tone: "chrome"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 var(--text-xl)/${th ? 1.45 : 1.25} var(--font-display)`,
      color: "var(--text-heading)"
    }
  }, x.t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 var(--text-sm)/1.65 var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, x.d), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 var(--text-sm)/1 var(--font-sans)",
      color: "var(--green-600)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      marginTop: "auto"
    }
  }, c.explore, " ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  })))))), /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Divider, {
    label: c.divider
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "56px var(--container-pad) 88px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-eyebrow",
    style: {
      letterSpacing: th ? "0.04em" : "var(--tracking-caps)"
    }
  }, c.shelfEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-4xl)",
      lineHeight: th ? 1.35 : "var(--leading-tight)"
    }
  }, c.shelfTitle)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    }),
    onClick: () => onNav("Library")
  }, c.viewAll)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 24
    }
  }, c.ebooks.map(b => /*#__PURE__*/React.createElement(ProductCard, {
    key: b.title,
    kind: c.kind,
    title: b.title,
    description: b.d,
    price: b.price,
    oldPrice: b.old,
    icon: b.icon,
    cta: c.cta,
    onCta: () => onBuy(b)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--silver-50)",
      borderTop: "1px solid var(--border-hairline)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "80px var(--container-pad)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-eyebrow",
    style: {
      letterSpacing: th ? "0.04em" : "var(--tracking-caps)"
    }
  }, c.artEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-4xl)",
      lineHeight: th ? 1.35 : "var(--leading-tight)"
    }
  }, c.artTitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 20
    }
  }, c.articles.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.t,
    interactive: true,
    onClick: () => onNav("Article"),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-eyebrow",
    style: {
      color: "var(--silver-700)",
      letterSpacing: th ? "0.04em" : "var(--tracking-caps)"
    }
  }, a.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 var(--text-xl)/${th ? 1.5 : 1.3} var(--font-display)`,
      color: "var(--text-heading)"
    }
  }, a.t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 var(--text-sm)/1.65 var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, a.d)))))), /*#__PURE__*/React.createElement(NewsletterBand, {
    onToast: onToast,
    lang: lang
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kovitad_shop/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kovitad_shop/Library.jsx
try { (() => {
// KOVITAD.shop — Library (catalogue) screen. Bilingual EN/TH.
const LIB_COPY = {
  en: {
    eyebrow: "The library",
    title: "Ebooks, guides & tools",
    sub: "Everything is practical, referenced, and written to be used — not just read.",
    tabs: [{
      id: "All",
      label: "All"
    }, {
      id: "Ebook",
      label: "Ebooks"
    }, {
      id: "Guide",
      label: "Guides"
    }, {
      id: "Video course",
      label: "Video courses"
    }, {
      id: "Product",
      label: "Products"
    }],
    topics: [{
      id: "Nutrition",
      label: "Nutrition"
    }, {
      id: "Movement",
      label: "Movement"
    }, {
      id: "Sleep",
      label: "Sleep"
    }, {
      id: "Mindset",
      label: "Mindset"
    }],
    sort: ["Newest", "Most loved", "Price: low to high"],
    empty: "Nothing matches that combination yet. Try removing a filter.",
    counter: (a, b) => a + " of " + b + " items",
    cta: "View details",
    kinds: {
      "Ebook": "Ebook",
      "Guide": "Guide",
      "Video course": "Video course",
      "Product": "Product"
    },
    topicLabels: {
      Nutrition: "Nutrition",
      Movement: "Movement",
      Sleep: "Sleep",
      Mindset: "Mindset"
    },
    items: [{
      kind: "Ebook",
      topic: "Nutrition",
      title: "Eat for the decades ahead",
      d: "Everyday nutrition, evidence-informed.",
      price: "฿390",
      old: "฿590",
      icon: "salad"
    }, {
      kind: "Ebook",
      topic: "Sleep",
      title: "The unhurried sleep guide",
      d: "24 pages on better evenings.",
      price: "฿290",
      icon: "moon"
    }, {
      kind: "Guide",
      topic: "Movement",
      title: "Strong past sixty",
      d: "A gentle strength path for late starters.",
      price: "฿390",
      icon: "footprints"
    }, {
      kind: "Video course",
      topic: "Mindset",
      title: "Attention, rebuilt",
      d: "Six short lessons on focus and calm.",
      price: "฿590",
      icon: "brain"
    }, {
      kind: "Guide",
      topic: "Nutrition",
      title: "The pantry reset",
      d: "A 7-day, low-drama kitchen tune-up.",
      price: "฿190",
      icon: "sprout"
    }, {
      kind: "Product",
      topic: "Sleep",
      title: "Evening wind-down cards",
      d: "30 printed prompts for calmer nights.",
      price: "฿490",
      icon: "moon"
    }]
  },
  th: {
    eyebrow: "คลังความรู้",
    title: "อีบุ๊ก คู่มือ และเครื่องมือ",
    sub: "ทุกชิ้นใช้ได้จริง มีแหล่งอ้างอิง และเขียนมาเพื่อให้ลงมือทำ — ไม่ใช่แค่อ่าน",
    tabs: [{
      id: "All",
      label: "ทั้งหมด"
    }, {
      id: "Ebook",
      label: "อีบุ๊ก"
    }, {
      id: "Guide",
      label: "คู่มือ"
    }, {
      id: "Video course",
      label: "คอร์สวิดีโอ"
    }, {
      id: "Product",
      label: "สินค้า"
    }],
    topics: [{
      id: "Nutrition",
      label: "โภชนาการ"
    }, {
      id: "Movement",
      label: "การเคลื่อนไหว"
    }, {
      id: "Sleep",
      label: "การนอน"
    }, {
      id: "Mindset",
      label: "มายด์เซ็ต"
    }],
    sort: ["ใหม่ล่าสุด", "ยอดนิยม", "ราคา: ต่ำไปสูง"],
    empty: "ยังไม่มีรายการที่ตรงกับตัวกรองนี้ ลองเอาตัวกรองออกดู",
    counter: (a, b) => "แสดง " + a + " จาก " + b + " รายการ",
    cta: "ดูรายละเอียด",
    kinds: {
      "Ebook": "อีบุ๊ก",
      "Guide": "คู่มือ",
      "Video course": "คอร์สวิดีโอ",
      "Product": "สินค้า"
    },
    topicLabels: {
      Nutrition: "โภชนาการ",
      Movement: "การเคลื่อนไหว",
      Sleep: "การนอน",
      Mindset: "มายด์เซ็ต"
    },
    items: [{
      kind: "Ebook",
      topic: "Nutrition",
      title: "กินดีเพื่อทศวรรษข้างหน้า",
      d: "โภชนาการประจำวัน อ้างอิงงานวิจัย",
      price: "฿390",
      old: "฿590",
      icon: "salad"
    }, {
      kind: "Ebook",
      topic: "Sleep",
      title: "คู่มือการนอนแบบไม่เร่งรีบ",
      d: "24 หน้า เรื่องค่ำคืนที่ดีขึ้น",
      price: "฿290",
      icon: "moon"
    }, {
      kind: "Guide",
      topic: "Movement",
      title: "แข็งแรงหลังหกสิบ",
      d: "เส้นทางฝึกความแข็งแรงแบบค่อยเป็นค่อยไป",
      price: "฿390",
      icon: "footprints"
    }, {
      kind: "Video course",
      topic: "Mindset",
      title: "สร้างสมาธิขึ้นใหม่",
      d: "บทเรียนสั้น 6 ตอน เรื่องโฟกัสและความสงบ",
      price: "฿590",
      icon: "brain"
    }, {
      kind: "Guide",
      topic: "Nutrition",
      title: "จัดครัวใหม่ใน 7 วัน",
      d: "ปรับครัวแบบง่าย ๆ ไม่วุ่นวาย ใน 7 วัน",
      price: "฿190",
      icon: "sprout"
    }, {
      kind: "Product",
      topic: "Sleep",
      title: "การ์ดผ่อนคลายยามค่ำ",
      d: "การ์ด 30 ใบ ชวนคืนที่สงบขึ้น",
      price: "฿490",
      icon: "moon"
    }]
  }
};
function LibraryScreen({
  onToast,
  onBuy,
  lang = "th"
}) {
  const {
    Tabs,
    Tag,
    Select,
    ProductCard,
    Divider
  } = window.KOVITADWellnessDesignSystem_61cabf;
  const c = LIB_COPY[lang];
  const th = lang === "th";
  const wrap = {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--container-pad)"
  };
  const [tab, setTab] = React.useState("All");
  const [topics, setTopics] = React.useState([]);
  const toggle = t => setTopics(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t]);
  const shown = c.items.filter(i => (tab === "All" || i.kind === tab) && (topics.length === 0 || topics.includes(i.topic)));
  return /*#__PURE__*/React.createElement("main", {
    style: {
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "72px var(--container-pad) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      maxWidth: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-eyebrow",
    style: {
      letterSpacing: th ? "0.04em" : "var(--tracking-caps)"
    }
  }, c.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-5xl)",
      lineHeight: th ? 1.25 : "var(--leading-tight)"
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, c.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: c.tabs,
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, c.topics.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t.id,
    selected: topics.includes(t.id),
    onClick: () => toggle(t.id)
  }, t.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      width: 190
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: c.sort
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "40px var(--container-pad) 0"
    }
  }, shown.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      padding: "48px 0"
    }
  }, c.empty) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
      gap: 24
    }
  }, shown.map(b => /*#__PURE__*/React.createElement(ProductCard, {
    key: b.title,
    kind: c.kinds[b.kind] + " · " + c.topicLabels[b.topic],
    title: b.title,
    description: b.d,
    price: b.price,
    oldPrice: b.old,
    icon: b.icon,
    premium: b.kind !== "Product",
    cta: c.cta,
    onCta: () => onBuy(b)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    label: c.counter(shown.length, c.items.length)
  }))));
}
Object.assign(window, {
  LibraryScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kovitad_shop/Library.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kovitad_shop/SiteChrome.jsx
try { (() => {
// KOVITAD.shop — shared site chrome (header, footer, newsletter band). Bilingual EN/TH.
function useDS() {
  return window.KOVITADWellnessDesignSystem_61cabf;
}
const CHROME_COPY = {
  en: {
    nav: {
      Home: "Home",
      Library: "Library",
      Article: "Articles"
    },
    signIn: "Sign in",
    search: "Search",
    bag: "Bag",
    nlEyebrow: "The weekly letter",
    nlTitle: "One useful idea, every Sunday",
    nlSub: "What I'm reading, testing, and un-learning about living well for longer. Free, short, no noise.",
    nlBtn: "Subscribe",
    nlNote: "No spam. Unsubscribe any time.",
    nlDone: "You're on the list. See you Sunday.",
    ftTag: "Practical, evidence-informed learning for a longer, more energetic life.",
    ftLearn: "Learn",
    ftTopics: "Topics",
    ftBrand: "KOVITAD",
    ftArticles: "Articles",
    ftEbooks: "Ebooks & guides",
    ftVideos: "Videos",
    ftT1: "Nutrition",
    ftT2: "Movement",
    ftT3: "Sleep",
    ftT4: "Mindset",
    ftAbout: "About",
    ftContact: "Contact",
    ftPrivacy: "Privacy",
    disclaimer: "KOVITAD shares general education and personal experience, not medical advice. Talk to your clinician before changing your health routine. © 2026 KOVITAD.shop"
  },
  th: {
    nav: {
      Home: "หน้าแรก",
      Library: "คลังความรู้",
      Article: "บทความ"
    },
    signIn: "เข้าสู่ระบบ",
    search: "ค้นหา",
    bag: "ตะกร้า",
    nlEyebrow: "จดหมายรายสัปดาห์",
    nlTitle: "หนึ่งไอเดียดี ๆ ทุกวันอาทิตย์",
    nlSub: "สิ่งที่กำลังอ่าน ทดลอง และเรียนรู้ใหม่ เกี่ยวกับการมีชีวิตที่ดีไปอีกนาน — ฟรี สั้น อ่านง่าย",
    nlBtn: "สมัครรับ",
    nlNote: "ไม่มีสแปม ยกเลิกได้ทุกเมื่อ",
    nlDone: "สมัครแล้ว พบกันวันอาทิตย์",
    ftTag: "การเรียนรู้ที่ใช้ได้จริง อ้างอิงงานวิจัย เพื่อชีวิตที่ยืนยาวและมีพลัง",
    ftLearn: "เรียนรู้",
    ftTopics: "หัวข้อ",
    ftBrand: "KOVITAD",
    ftArticles: "บทความ",
    ftEbooks: "อีบุ๊กและคู่มือ",
    ftVideos: "วิดีโอ",
    ftT1: "โภชนาการ",
    ftT2: "การเคลื่อนไหว",
    ftT3: "การนอน",
    ftT4: "มายด์เซ็ต",
    ftAbout: "เกี่ยวกับเรา",
    ftContact: "ติดต่อ",
    ftPrivacy: "ความเป็นส่วนตัว",
    disclaimer: "KOVITAD แบ่งปันความรู้ทั่วไปและประสบการณ์ส่วนตัว ไม่ใช่คำแนะนำทางการแพทย์ โปรดปรึกษาแพทย์ก่อนปรับเปลี่ยนการดูแลสุขภาพของคุณ © 2026 KOVITAD.shop"
  }
};

// Thai script: never wide-track; give display lines extra leading.
const thTrack = (lang, wide) => lang === "th" ? "0.02em" : wide;
function LangToggle({
  lang,
  onLang,
  tone
}) {
  const opts = [{
    id: "th",
    label: "ไทย"
  }, {
    id: "en",
    label: "EN"
  }];
  const overlay = tone === "overlay";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: 2,
      borderRadius: "var(--radius-pill)",
      border: `1px solid ${overlay ? "rgba(238,241,243,0.35)" : "var(--border-silver)"}`,
      background: overlay ? "rgba(14,33,27,0.25)" : "var(--surface-raised)"
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.id,
    type: "button",
    onClick: () => onLang(o.id),
    style: {
      appearance: "none",
      border: 0,
      cursor: "pointer",
      height: 28,
      padding: "0 12px",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      font: `600 12.5px/1 var(--font-sans)`,
      background: lang === o.id ? overlay ? "var(--grad-chrome)" : "var(--green-700)" : "transparent",
      color: lang === o.id ? overlay ? "var(--charcoal-800)" : "var(--text-on-dark)" : overlay ? "rgba(243,239,228,0.85)" : "var(--text-muted)",
      transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)"
    }
  }, o.label)));
}
function SiteHeader({
  active,
  onNav,
  onToast,
  tone = "solid",
  lang = "th",
  onLang
}) {
  const {
    Wordmark,
    Button,
    IconButton,
    Icon
  } = useDS();
  const c = CHROME_COPY[lang];
  const links = ["Home", "Library", "Article"];
  const overlay = tone === "overlay";
  return /*#__PURE__*/React.createElement("header", {
    style: overlay ? {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: "linear-gradient(180deg, rgba(14,33,27,0.45) 0%, rgba(14,33,27,0) 100%)"
    } : {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(247, 242, 232, 0.92)",
      backdropFilter: "saturate(1.2) blur(12px)",
      WebkitBackdropFilter: "saturate(1.2) blur(12px)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-pad)",
      height: overlay ? 84 : 68,
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("Home");
    },
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "md",
    tone: overlay ? "dark" : "light"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 8
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(l);
    },
    style: {
      textDecoration: "none",
      padding: "8px 14px",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      font: `${active === l ? 600 : 500} var(--text-sm)/1 var(--font-sans)`,
      color: overlay ? active === l ? "#FFFFFF" : "rgba(243,239,228,0.82)" : active === l ? "var(--green-700)" : "var(--text-muted)",
      background: active === l ? overlay ? "rgba(238,241,243,0.14)" : "rgba(23,63,53,0.07)" : "transparent",
      transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)"
    }
  }, c.nav[l]))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(LangToggle, {
    lang: lang,
    onLang: onLang,
    tone: tone
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: c.search,
    variant: overlay ? "dark" : "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 19
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: c.bag,
    variant: overlay ? "dark" : "ghost",
    onClick: () => onToast(lang === "th" ? "ตะกร้ายังว่างอยู่" : "Your bag is empty — for now.")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag",
    size: 19
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: overlay ? "chrome" : "primary",
    onClick: () => onToast(lang === "th" ? "ยินดีต้อนรับกลับ" : "Welcome back.")
  }, c.signIn))));
}
function NewsletterBand({
  onToast,
  lang = "th"
}) {
  const {
    Button,
    Input,
    Icon
  } = useDS();
  const c = CHROME_COPY[lang];
  const [email, setEmail] = React.useState("");
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--grad-green-depth)",
      padding: "72px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      margin: "0 auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-eyebrow",
    style: {
      color: "var(--silver-300)",
      letterSpacing: thTrack(lang, "var(--tracking-caps)")
    }
  }, c.nlEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "var(--text-on-dark)",
      fontSize: "var(--text-3xl)",
      lineHeight: lang === "th" ? 1.3 : "var(--leading-tight)"
    }
  }, c.nlTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-on-dark-muted)",
      maxWidth: 460
    }
  }, c.nlSub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      width: "100%",
      maxWidth: 440,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@example.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16
    }),
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "chrome",
    onClick: () => {
      setEmail("");
      onToast(c.nlDone);
    }
  }, c.nlBtn)), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-on-dark-muted)",
      fontSize: "var(--text-xs)",
      opacity: 0.75
    }
  }, c.nlNote)));
}
function SiteFooter({
  onNav,
  lang = "th"
}) {
  const {
    Wordmark,
    Divider
  } = useDS();
  const c = CHROME_COPY[lang];
  const col = {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    font: "400 var(--text-sm)/1.5 var(--font-sans)"
  };
  const link = {
    color: "var(--text-on-dark-muted)",
    textDecoration: "none"
  };
  const head = {
    font: "600 var(--text-xs)/1 var(--font-sans)",
    letterSpacing: thTrack(lang, "var(--tracking-caps)"),
    textTransform: "uppercase",
    color: "var(--silver-500)",
    marginBottom: 4
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-ink)",
      padding: "64px 24px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "md",
    tone: "dark"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-on-dark-muted)",
      fontSize: "var(--text-sm)",
      maxWidth: 300
    }
  }, c.ftTag)), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, c.ftLearn), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("Article");
    }
  }, c.ftArticles), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("Library");
    }
  }, c.ftEbooks), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, c.ftVideos)), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, c.ftTopics), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, c.ftT1), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, c.ftT2), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, c.ftT3), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, c.ftT4)), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, c.ftBrand), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, c.ftAbout), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, c.ftContact), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, c.ftPrivacy))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "40px 0 20px"
    }
  }, /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-on-dark-muted)",
      font: "400 var(--text-xs)/1.7 var(--font-sans)",
      maxWidth: 640
    }
  }, c.disclaimer)));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  NewsletterBand,
  LangToggle,
  CHROME_COPY,
  thTrack
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kovitad_shop/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
