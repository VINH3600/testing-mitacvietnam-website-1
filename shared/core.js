/* Shared runtime for every GRCVN demo design.
 * Content lives in shared/content.js (window.GRCVN). Each design's app.js
 * renders it with its own markup and calls into window.GR for language,
 * the quote form, product dialogs, the mobile menu and scroll reveal. */
(function () {
  const C = window.GRCVN;
  const LANG_KEY = 'grcvn-lang';
  const listeners = [];

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { /* private mode or blocked storage: language just won't persist */ }
    return null;
  }

  function initialLang() {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'vi' || q === 'en') return q;
    const saved = store(LANG_KEY);
    if (saved === 'vi' || saved === 'en') return saved;
    const nav = (navigator.language || 'vi').toLowerCase();
    return nav.startsWith('vi') ? 'vi' : 'en';
  }

  let lang = initialLang();

  // A bilingual value is {vi, en}; an empty English string falls back to Vietnamese.
  function t(v) {
    if (v == null) return '';
    if (typeof v === 'object' && !Array.isArray(v)) return v[lang] || v.vi || '';
    return String(v);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  const ui = (key) => t(C.ui[key]);
  const product = (id) => C.products.find((p) => p.id === id);
  const telHref = () => 'tel:' + C.company.phone.replace(/[^+\d]/g, '');
  const mailHref = () => 'mailto:' + C.company.email;
  const mapsLink = () => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(C.company.mapQuery);
  const mapsEmbed = () => 'https://www.google.com/maps?q=' + encodeURIComponent(C.company.mapQuery) + '&hl=' + lang + '&z=16&output=embed';

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    store(LANG_KEY, next);
    document.documentElement.lang = next;
    document.documentElement.classList.add('gr-relang');
    listeners.forEach((fn) => fn(lang));
  }

  function applyHead() {
    document.documentElement.lang = lang;
    document.title = t(C.seo.title);
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t(C.seo.description));
  }

  /* ---------- language toggle ---------- */
  function langToggle(className) {
    return `<div class="${className || 'gr-lang'}" role="group" aria-label="Language">` +
      ['vi', 'en'].map((l) => `<button type="button" data-lang="${l}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join('') +
      '</div>';
  }
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-lang]');
    if (b) setLang(b.dataset.lang);
  });

  /* ---------- mobile menu ---------- */
  // Called again after every re-render; document-level listeners are only added once.
  let navSet = null;
  function bindNav(toggle, menu) {
    document.body.classList.remove('gr-menu-open');
    if (!toggle || !menu) return;
    navSet = (open) => {
      if (open) {
        // The header's backdrop-filter makes it the panel's containing block, so offset by the header's own height;
        // cap the panel to the space left below the header (a demo bar or top bar can push the header down).
        const hdr = toggle.closest('header');
        menu.style.top = hdr.offsetHeight + 'px';
        menu.style.maxHeight = (window.innerHeight - Math.max(0, hdr.getBoundingClientRect().bottom)) + 'px';
      }
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('open', open);
      document.body.classList.toggle('gr-menu-open', open);
    };
    toggle.addEventListener('click', () => navSet(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) navSet(false); });
    if (bindNav.once) return;
    bindNav.once = true;
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && navSet) navSet(false); });
    window.matchMedia('(min-width: 961px)').addEventListener('change', (m) => { if (m.matches && navSet) navSet(false); });
  }

  /* ---------- scroll reveal ---------- */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const io = ('IntersectionObserver' in window && !reduceMotion)
    ? new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    : null;

  function reveal(root) {
    (root || document).querySelectorAll('[data-reveal]:not(.in)').forEach((el, i) => {
      if (!io || document.documentElement.classList.contains('gr-relang')) { el.classList.add('in'); return; }
      el.style.setProperty('--d', (i % 6) * 70 + 'ms');
      io.observe(el);
    });
  }

  /* ---------- count-up numbers ---------- */
  function countUp(root) {
    (root || document).querySelectorAll('[data-count]').forEach((el) => {
      const end = parseFloat(el.dataset.count);
      if (reduceMotion || !('IntersectionObserver' in window) || el.dataset.done) { el.textContent = el.dataset.count; return; }
      const obs = new IntersectionObserver(([en]) => {
        if (!en.isIntersecting) return;
        obs.disconnect();
        el.dataset.done = '1';
        const start = performance.now();
        const dur = 1400;
        const step = (now) => {
          const k = Math.min(1, (now - start) / dur);
          el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }, { threshold: 0.6 });
      obs.observe(el);
    });
  }

  /* ---------- product dialog ---------- */
  let dialog;
  function openDialog(html, className) {
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.addEventListener('click', (e) => {
        if (e.target === dialog || e.target.closest('[data-close]')) dialog.close();
      });
      dialog.addEventListener('close', () => document.body.classList.remove('gr-dialog-open'));
      document.body.appendChild(dialog);
    }
    dialog.className = 'gr-dialog ' + (className || '');
    dialog.innerHTML = html;
    document.body.classList.add('gr-dialog-open');
    dialog.showModal();
    dialog.scrollTop = 0;
  }
  function closeDialog() { if (dialog && dialog.open) dialog.close(); }

  /* ---------- quote form ---------- */
  function quote(productId) {
    closeDialog();
    const p = product(productId);
    const form = document.querySelector('form[data-quote]');
    if (!form) return;
    if (p) {
      form.elements.interest.value = p.brand === 'MiTAC' ? 'server' : 'rugged';
      form.elements.message.value = ui('quoteFor') + ' ' + p.name + '.\n';
    }
    document.getElementById('contact').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    setTimeout(() => form.elements.name.focus({ preventScroll: true }), 600);
  }

  function formFields(opts) {
    const o = opts || {};
    const field = (name, type, label, extra) => `
      <label class="gr-field ${o.fieldClass || ''} ${extra && extra.full ? 'full' : ''}">
        <span>${esc(label)}${extra && extra.optional ? '' : ' *'}</span>
        <input name="${name}" type="${type}" ${extra && extra.optional ? '' : 'required'} autocomplete="${extra && extra.ac || 'on'}">
      </label>`;
    return `
      ${field('name', 'text', ui('fName'), { ac: 'name' })}
      ${field('company', 'text', ui('fCompany'), { ac: 'organization', optional: true })}
      ${field('phone', 'tel', ui('fPhone'), { ac: 'tel' })}
      ${field('email', 'email', ui('fEmail'), { ac: 'email' })}
      <label class="gr-field full ${o.fieldClass || ''}">
        <span>${esc(ui('fInterest'))} *</span>
        <select name="interest" required>
          <option value="" disabled selected>${esc(ui('fChoose'))}</option>
          ${C.interests.map((i) => `<option value="${i.id}">${esc(t(i.label))}</option>`).join('')}
        </select>
      </label>
      <label class="gr-field full ${o.fieldClass || ''}">
        <span>${esc(ui('fMessage'))}</span>
        <textarea name="message" rows="4" placeholder="${esc(ui('fMessageHint'))}"></textarea>
      </label>
      <label class="gr-consent full">
        <input type="checkbox" name="consent" required>
        <span>${esc(ui('fConsent'))}</span>
      </label>
      <input type="text" name="botcheck" class="gr-hp" tabindex="-1" autocomplete="off" aria-hidden="true">`;
  }

  function bindForm(form) {
    if (!form || form.dataset.bound) return;
    form.dataset.bound = '1';
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = form.querySelector('[data-status]');
      const btn = form.querySelector('[type="submit"]');
      const data = Object.fromEntries(new FormData(form));
      if (data.botcheck) return;
      btn.disabled = true;
      status.className = 'gr-status sending';
      status.textContent = ui('sending');
      try {
        if (C.form.web3formsKey) {
          const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
              access_key: C.form.web3formsKey,
              subject: '[Website] ' + (data.interest || '') + ' – ' + data.name,
              from_name: 'grcvn website',
              ...data,
              language: lang,
            }),
          });
          const out = await res.json();
          if (!out.success) throw new Error(out.message || 'send failed');
        } else {
          // No form endpoint configured yet: behave like a successful send so the demo can be walked through.
          await new Promise((r) => setTimeout(r, 800));
        }
        form.reset();
        status.className = 'gr-status ok';
        status.textContent = ui('sent') + (C.form.web3formsKey ? '' : ' ' + ui('demoNote'));
      } catch (err) {
        status.className = 'gr-status err';
        status.textContent = ui('sendFail') + ' ' + C.company.phoneDisplay;
      } finally {
        btn.disabled = false;
      }
    });
  }

  /* ---------- floating contact buttons ---------- */
  function fab() {
    const c = C.company;
    const items = [
      `<a class="gr-fab-btn call" href="${telHref()}" aria-label="${esc(ui('call'))} ${esc(c.phoneDisplay)}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>
        <span>${esc(c.phoneDisplay)}</span></a>`,
    ];
    if (c.zalo) {
      items.unshift(`<a class="gr-fab-btn zalo" href="https://zalo.me/${esc(c.zalo)}" target="_blank" rel="noopener" aria-label="Zalo">
        <b>Zalo</b><span>${esc(ui('chatZalo'))}</span></a>`);
    }
    return `<div class="gr-fab">${items.join('')}</div>`;
  }

  /* ---------- icons (stroke icons, inherit currentColor) ---------- */
  const ICONS = {
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    edge: '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    pin: '<path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    doc: '<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  };
  const icon = (name, cls) => `<svg class="ico ${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

  /* ---------- product dialog content (styled per design) ---------- */
  function productDialog(p) {
    const specs = Object.entries(p.specs).map(([k, v]) =>
      `<div class="pd-row"><dt>${esc(t(C.specLabels[k]))}</dt><dd>${esc(t(v))}</dd></div>`).join('');
    const uses = (p.uses[lang] || p.uses.vi).map((u) => `<li>${icon('check')}${esc(u)}</li>`).join('');
    return `
      <button class="pd-close" type="button" data-close aria-label="${esc(ui('close'))}">${icon('close')}</button>
      <div class="pd">
        <div class="pd-media"><img src="${esc(p.image)}" alt="${esc(p.name)}"></div>
        <div class="pd-body">
          <p class="pd-brand">${esc(p.brand)}${p.gen ? ' · ' + esc(p.gen) : ''}</p>
          <h2 class="pd-name">${esc(p.name)}</h2>
          <p class="pd-tagline">${esc(t(p.tagline))}</p>
          <h3 class="pd-h">${esc(ui('keySpecs'))}</h3>
          <dl class="pd-specs">${specs}</dl>
          <h3 class="pd-h">${esc(ui('useCases'))}</h3>
          <ul class="pd-uses">${uses}</ul>
          <div class="pd-actions">
            <button type="button" class="pd-quote" data-quote-id="${esc(p.id)}">${esc(ui('quoteThis'))}</button>
            <a class="pd-link" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(ui('datasheet'))} ${icon('external')}</a>
          </div>
        </div>
      </div>`;
  }
  function openProduct(id, className) {
    const p = product(id);
    if (p) openDialog(productDialog(p), className);
  }
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-product]');
    if (el && !e.target.closest('[data-quote-id]')) { e.preventDefault(); openProduct(el.dataset.product); }
  });

  /* ---------- demo switcher (remove at launch) ---------- */
  function demoSwitcher(current) {
    const names = { v1: 'A', v2: 'B', v3: 'C' };
    return `<nav class="gr-demo" aria-label="Demo">
      <a href="../" class="gr-demo-home">Demo</a>
      <a href="../ai/" ${current === 'ai' ? 'aria-current="page"' : ''}>AI</a>
      ${Object.entries(names).map(([k, n]) => `<a href="../${k}/" ${k === current ? 'aria-current="page"' : ''}>${n}</a>`).join('')}
    </nav>`;
  }

  /* ---------- structured data ---------- */
  function jsonLd() {
    const c = C.company;
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: c.legalName.en,
      alternateName: [c.legalName.vi, c.shortName],
      taxID: c.taxCode,
      telephone: c.phone,
      email: c.email,
      address: { '@type': 'PostalAddress', streetAddress: c.address.en, addressLocality: 'Ho Chi Minh City', addressCountry: 'VN' },
    });
    document.head.appendChild(s);
  }

  function mount(render) {
    const run = () => {
      applyHead();
      render();
      reveal();
      countUp();
      bindForm(document.querySelector('form[data-quote]'));
    };
    listeners.push(run);
    jsonLd();
    run();
  }

  // Product cards and buttons use data attributes so every design gets the same behaviour.
  document.addEventListener('click', (e) => {
    const q = e.target.closest('[data-quote-id]');
    if (q) { e.preventDefault(); quote(q.dataset.quoteId); return; }
  });

  window.GR = {
    C, t, esc, ui, product, lang: () => lang, setLang, onLang: (fn) => listeners.push(fn),
    telHref, mailHref, mapsLink, mapsEmbed, langToggle, bindNav, reveal, countUp,
    openDialog, closeDialog, openProduct, quote, formFields, fab, mount, icon, demoSwitcher,
    year: new Date().getFullYear(),
  };
})();
