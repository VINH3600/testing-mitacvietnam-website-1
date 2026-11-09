/* Design B — "Field Ops": dark tactical HUD, amber signal colour, interactive stress-test readouts. */
(function () {
  const { C, t, esc, ui, icon } = GR;
  const state = { filter: 'all', dev: 'b360' };
  const NAV = [['test', { vi: 'Kiểm chứng', en: 'Proof' }], ['products', C.ui.navProducts], ['solutions', C.ui.navSolutions], ['sectors', C.ui.navSectors], ['about', C.ui.navAbout], ['contact', C.ui.navContact]];

  // Microcopy specific to this design.
  const L = {
    online: { vi: 'Sẵn sàng hỗ trợ', en: 'Standing by' },
    testTitle: { vi: 'Kiểm chứng trong điều kiện khắc nghiệt', en: 'Proven where it gets rough' },
    testLead: { vi: 'Chọn một thiết bị để xem giới hạn đã được chứng nhận theo thông số chính hãng.', en: 'Pick a device to see its certified limits, taken from the official spec sheets.' },
    thermal: { vi: 'Dải nhiệt độ hoạt động', en: 'Operating temperature' },
    drop: { vi: 'Chiều cao rơi', en: 'Drop height' },
    ingress: { vi: 'Chống bụi & nước', en: 'Dust & water ingress' },
    bright: { vi: 'Độ sáng màn hình', en: 'Screen brightness' },
    vnHeat: { vi: 'Nắng nóng VN', en: 'VN heatwave' },
    office: { vi: 'Laptop phổ thông', en: 'Typical laptop' },
    desk: { vi: 'Mặt bàn 0,75 m', en: 'Desk 0.75 m' },
    na: { vi: 'Chưa công bố — xem datasheet', en: 'Not published — see datasheet' },
    dust: { 5: { vi: 'Chống bụi', en: 'Dust-protected' }, 6: { vi: 'Kín bụi hoàn toàn', en: 'Fully dust-tight' } },
    water: { 3: { vi: 'Chống nước phun, mưa', en: 'Spraying water, rain' }, 6: { vi: 'Chống tia nước áp lực mạnh', en: 'Powerful water jets' }, 7: { vi: 'Ngâm nước tới 1 m', en: 'Immersion to 1 m' } },
    solTitle: { vi: 'Từ hiện trường đến trung tâm dữ liệu', en: 'From the field to the core' },
    link: { vi: 'Liên kết dữ liệu 4G LTE · Wi-Fi 7', en: 'Data link 4G LTE · Wi-Fi 7' },
    field: { vi: 'Hiện trường', en: 'Field' },
    core: { vi: 'Lõi & biên', en: 'Core & edge' },
    dossier: { vi: 'Hồ sơ đơn vị', en: 'Company dossier' },
    legal: { vi: 'Pháp nhân', en: 'Legal name' },
    est: { vi: 'Thành lập', en: 'Established' },
    hq: { vi: 'Trụ sở', en: 'Headquarters' },
    group: { vi: 'Tập đoàn', en: 'Group' },
    phase: { vi: 'Giai đoạn', en: 'Phase' },
  };

  const num = (v) => (GR.lang() === 'vi' ? String(v).replace('.', ',') : String(v));
  const tag = (n, label) => `<p class="tag"><span>[ ${String(n).padStart(2, '0')} ]</span> ${esc(label)}</p>`;

  const topbar = () => `
    <div class="topbar">
      <div class="wrap topbar-in">
        <span>GRC VN</span><span class="hide-s">HCMC ${esc(C.company.coords)}</span><span class="hide-s">MST ${esc(C.company.taxCode)}</span>
        <span class="live"><i></i>${esc(t(L.online))} · <a href="${GR.telHref()}">${esc(C.company.phoneDisplay)}</a></span>
      </div>
    </div>`;

  const header = () => `
    <header class="hdr">
      <div class="wrap hdr-in">
        <a class="logo" href="#top" aria-label="${esc(C.company.brand)}"><span class="logo-b">GRC</span><span class="logo-s">/</span><span class="logo-v">VN</span><small>General Resources Vietnam</small></a>
        <nav class="nav" id="nav" aria-label="Main">
          ${NAV.map(([id, l], i) => `<a href="#${id}"><em>0${i + 1}</em>${esc(t(l))}</a>`).join('')}
          <div class="nav-tools">${GR.langToggle('lang')}<a class="btn btn-amber" href="#contact">${esc(ui('getQuote'))}</a></div>
        </nav>
        <button class="burger" id="burger" type="button" aria-expanded="false" aria-controls="nav" aria-label="${esc(ui('menu'))}">${icon('menu', 'i-open')}${icon('close', 'i-close')}</button>
      </div>
    </header>`;

  const hero = () => {
    const b = GR.product('b360').metrics;
    return `
    <section class="hero" id="top">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="wrap hero-in">
        <div class="hero-copy">
          <p class="eyebrow" data-reveal>// ${esc(t(C.hero.eyebrow))}</p>
          <h1 data-reveal>${esc(t(C.hero.short))}</h1>
          <p class="lead" data-reveal>${esc(t(C.hero.lead))}</p>
          <div class="cta" data-reveal>
            <a class="btn btn-amber" href="#contact">${esc(ui('getQuote'))} ${icon('arrow')}</a>
            <a class="btn btn-ghost" href="#test">${esc(t({ vi: 'Xem thông số kiểm chứng', en: 'See the proof' }))}</a>
          </div>
        </div>
      </div>
      <div class="wrap readout" data-reveal>
        ${[
          ['INGRESS', 'IP' + b.ip, 100],
          ['DROP', b.drop + ' M', (b.drop / 2) * 100],
          ['TEMP', `${b.tmin} / +${b.tmax} °C`, 76],
          ['DISPLAY', b.nits.toLocaleString('en') + ' NITS', (b.nits / 1500) * 100],
        ].map(([k, v, pct]) => `<div class="ro"><span class="ro-k">${k}</span><span class="ro-v">${v}</span><span class="ro-bar"><i style="width:${pct}%"></i></span></div>`).join('')}
        <div class="ro ro-dev"><span class="ro-k">REF</span><span class="ro-v">GETAC B360 G3</span><span class="ro-k">MIL-STD-810H · 461G</span></div>
      </div>
    </section>`;
  };

  const ticker = () => {
    const items = ['MIL-STD-810H', 'MIL-STD-461G', 'IP66', 'ANSI/UL 121201 C1D2', 'ATEX / IECEx ZONE 2', 'LUMIBOND® 1,400 NITS', 'NEBS', 'OCP', 'AMD INSTINCT™ MI355X', 'INTEL® XEON® 6', 'WI-FI 7', 'BUMPER-TO-BUMPER 3Y'];
    const row = items.map((x) => `<span>${x}</span><b>◆</b>`).join('');
    return `<div class="ticker" aria-hidden="true"><div class="ticker-track">${row}${row}</div></div>`;
  };

  /* ---------- stress-test visualisation ---------- */
  const rugged = () => C.products.filter((p) => p.brand === 'Getac');

  function thermal(m) {
    const lo = -40, hi = 80, pos = (v) => ((v - lo) / (hi - lo)) * 100;
    const has = m.tmin != null && m.tmax != null;
    const ticks = [-40, -20, 0, 20, 40, 60, 80].map((v) => `<span style="left:${pos(v)}%">${v}°</span>`).join('');
    return `
      <div class="gauge">
        <div class="g-head"><span>${esc(t(L.thermal))}</span><b>${has ? `${m.tmin}°C → +${m.tmax}°C` : esc(t(L.na))}</b></div>
        <div class="thermo">
          <div class="thermo-track"><i class="thermo-band ${has ? '' : 'off'}" style="left:${has ? pos(m.tmin) : 50}%;width:${has ? pos(m.tmax) - pos(m.tmin) : 0}%"></i>
            <span class="thermo-ref" style="left:${pos(40)}%"><em>${esc(t(L.vnHeat))} 40°</em></span>
            <span class="thermo-ref zero" style="left:${pos(0)}%"></span>
          </div>
          <div class="thermo-ticks">${ticks}</div>
        </div>
      </div>`;
  }

  function drop(m) {
    const has = m.drop != null;
    const pct = has ? (m.drop / 2) * 100 : 0;
    const marks = [0, 0.5, 1, 1.5, 2].map((v) => `<span style="bottom:${(v / 2) * 100}%">${v.toFixed(1)} m</span>`).join('');
    return `
      <div class="gauge">
        <div class="g-head"><span>${esc(t(L.drop))}</span><b>${has ? num(m.drop) + ' m' : esc(t(L.na))}</b></div>
        <div class="dropviz">
          <div class="ruler">${marks}</div>
          <div class="drop-stage">
            <span class="desk" style="bottom:${(0.75 / 2) * 100}%"><em>${esc(t(L.desk))}</em></span>
            <svg class="person" viewBox="0 0 40 175" aria-hidden="true"><circle cx="20" cy="12" r="10"/><rect x="8" y="26" width="24" height="70" rx="10"/><rect x="9" y="90" width="9" height="85" rx="4"/><rect x="22" y="90" width="9" height="85" rx="4"/></svg>
            <span class="drop-line" style="bottom:${pct}%"><i></i><b>${has ? num(m.drop) + ' m' : ''}</b></span>
            <span class="drop-path" style="height:${pct}%"></span>
          </div>
        </div>
      </div>`;
  }

  function ingress(m) {
    const has = m.ip != null;
    const d = has ? Math.floor(m.ip / 10) : 0, w = has ? m.ip % 10 : 0;
    const seg = (n, max) => Array.from({ length: max }, (_, i) => `<i class="${i < n ? 'on' : ''}"></i>`).join('');
    return `
      <div class="gauge">
        <div class="g-head"><span>${esc(t(L.ingress))}</span><b>${has ? 'IP' + m.ip : esc(t(L.na))}</b></div>
        <div class="ipviz">
          <div class="ip-row"><span class="ip-d">${d}</span><div><div class="seg">${seg(d, 6)}</div><p>${esc(t(L.dust[d] || ''))}</p></div></div>
          <div class="ip-row"><span class="ip-d">${w}</span><div><div class="seg">${seg(w, 8)}</div><p>${esc(t(L.water[w] || ''))}</p></div></div>
        </div>
      </div>`;
  }

  function bright(m) {
    const has = m.nits != null;
    const max = 1500;
    return `
      <div class="gauge">
        <div class="g-head"><span>${esc(t(L.bright))}</span><b>${has ? m.nits.toLocaleString('en') + ' nits' : esc(t(L.na))}</b></div>
        <div class="barviz">
          <div class="bar-row"><span>${esc(GR.product(state.dev).name.replace('Getac ', ''))}</span><div class="bar"><i style="width:${has ? (m.nits / max) * 100 : 0}%"></i></div></div>
          <div class="bar-row ref"><span>${esc(t(L.office))}</span><div class="bar"><i style="width:${(300 / max) * 100}%"></i></div><em>~300</em></div>
        </div>
      </div>`;
  }

  const testPanel = () => {
    const p = GR.product(state.dev);
    const m = p.metrics;
    return `
      <div class="test-dev">
        <div class="test-img"><img src="${esc(p.image)}" alt="${esc(p.name)}"></div>
        <div>
          <p class="mono dim">${esc(p.brand.toUpperCase())}${p.gen ? ' · ' + esc(p.gen) : ''}</p>
          <h3>${esc(p.name)}</h3>
          <p class="test-tag">${esc(t(p.tagline))}</p>
          <p class="mono">${p.badges.map(esc).join(' · ')}${m.kg ? ' · ' + m.kg + ' KG' : ''}</p>
          <button class="btn btn-ghost btn-sm" type="button" data-product="${p.id}">${esc(ui('details'))} ${icon('arrow')}</button>
        </div>
      </div>
      <div class="gauges">${thermal(m)}${drop(m)}${ingress(m)}${bright(m)}</div>`;
  };

  const test = () => `
    <section class="sec" id="test">
      <div class="wrap">
        <div class="sec-head" data-reveal>${tag(1, t(NAV[0][1]))}<h2>${esc(t(L.testTitle))}</h2><p class="sec-lead">${esc(t(L.testLead))}</p></div>
        <div class="dev-pick" role="tablist" data-reveal>
          ${rugged().map((p) => `<button type="button" role="tab" data-dev="${p.id}" aria-selected="${p.id === state.dev}">${esc(p.name.replace('Getac ', ''))}</button>`).join('')}
        </div>
        <div class="panel test-panel" id="test-panel" data-reveal>${testPanel()}</div>
      </div>
    </section>`;

  /* ---------- catalogue ---------- */
  const specLines = (p) => {
    const m = p.metrics;
    const rows = [];
    if (m.ip) rows.push(['IP', 'IP' + m.ip]);
    if (m.drop) rows.push(['DROP', m.drop + ' M']);
    if (m.tmin != null) rows.push(['TEMP', `${m.tmin}/+${m.tmax}°C`]);
    if (m.nits) rows.push(['NITS', m.nits.toLocaleString('en')]);
    if (m.kg) rows.push(['MASS', m.kg + ' KG']);
    if (!rows.length) {
      Object.entries(p.specs).slice(0, 4).forEach(([k, v]) => rows.push([k.toUpperCase(), t(v)]));
    }
    return rows.map(([k, v]) => `<div class="sl"><span>${esc(k)}</span><i></i><b>${esc(v)}</b></div>`).join('');
  };

  const card = (p, i) => `
    <article class="card" data-reveal>
      <button class="card-media" type="button" data-product="${p.id}" aria-label="${esc(p.name)} — ${esc(ui('details'))}">
        <span class="card-code">IMG-${String(i + 1).padStart(2, '0')} // ${esc(p.id.toUpperCase())}</span>
        <img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">
      </button>
      <div class="card-body">
        <p class="mono dim">${esc(p.brand.toUpperCase())}${p.gen ? ' · ' + esc(p.gen) : ''} · ${esc(t(C.categories.find((c) => c.id === p.category).label)).toUpperCase()}</p>
        <h3>${esc(p.name)}</h3>
        <p class="card-tag">${esc(t(p.tagline))}</p>
        <div class="speclines">${specLines(p)}</div>
        <div class="card-actions">
          <button type="button" class="btn btn-ghost btn-sm" data-product="${p.id}">${esc(ui('details'))}</button>
          <button type="button" class="btn btn-amber btn-sm" data-quote-id="${p.id}">${esc(ui('getQuote'))}</button>
        </div>
      </div>
    </article>`;

  const filtered = () => C.products.filter((p) => state.filter === 'all' || p.category === state.filter);

  const products = () => `
    <section class="sec sec-alt" id="products">
      <div class="wrap">
        <div class="sec-head row" data-reveal>
          <div>${tag(2, ui('navProducts'))}<h2>${esc(ui('productsTitle'))}</h2></div>
          <div class="seg-ctl" role="tablist">
            ${[['all', ui('all')], ...C.categories.map((c) => [c.id, t(c.label)])].map(([id, label]) =>
              `<button type="button" role="tab" data-filter="${id}" aria-selected="${state.filter === id}">${esc(label)}</button>`).join('')}
          </div>
        </div>
        <div class="grid" id="grid">${filtered().map(card).join('')}</div>
      </div>
    </section>`;

  const solutions = () => {
    const [f, s] = C.pillars;
    const col = (p, label) => `
      <div class="panel pillar" data-reveal>
        <p class="mono amber">${esc(t(label)).toUpperCase()} // ${esc(p.brand.toUpperCase())}</p>
        <div class="pillar-img"><img src="${esc(p.image)}" alt="" loading="lazy"></div>
        <h3>${esc(t(p.title))}</h3>
        <p>${esc(t(p.body))}</p>
        <ul class="ptags">${(p.tags[GR.lang()] || p.tags.vi).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
        <a class="more" href="#products" data-go-filter="${p.id === 'server' ? 'server' : 'all'}">${esc(ui('explore'))} ${icon('arrow')}</a>
      </div>`;
    return `
    <section class="sec" id="solutions">
      <div class="wrap">
        <div class="sec-head" data-reveal>${tag(3, ui('navSolutions'))}<h2>${esc(t(L.solTitle))}</h2></div>
        <div class="link-grid">
          ${col(f, L.field)}
          <div class="datalink" aria-hidden="true">
            <span>${esc(t(L.link))}</span>
          </div>
          ${col(s, L.core)}
        </div>
        <div class="feats">
          ${C.features.map((x, i) => `<div class="feat" data-reveal><span class="mono amber">0${i + 1}</span>${icon(x.icon)}<h4>${esc(t(x.title))}</h4><p>${esc(t(x.body))}</p></div>`).join('')}
        </div>
      </div>
    </section>`;
  };

  const sectors = () => `
    <section class="sec sec-alt" id="sectors">
      <div class="wrap">
        <div class="sec-head" data-reveal>${tag(4, ui('navSectors'))}<h2>${esc(ui('sectorsTitle'))}</h2></div>
        <div class="sectors">
          ${C.sectors.map((s, i) => `
            <article class="sector" data-reveal>
              <div class="sector-img"><img src="${esc(s.image)}" alt="" loading="lazy"><span class="mono">SEC-${String(i + 1).padStart(2, '0')}</span></div>
              <div class="sector-body">
                <h3>${esc(t(s.title))}</h3>
                <p>${esc(t(s.body))}</p>
                <div class="chips">${s.products.map((id) => { const p = GR.product(id); return p ? `<button type="button" data-product="${p.id}">${esc(p.name.replace(/^(Getac|MiTAC) /, ''))}</button>` : ''; }).join('')}</div>
              </div>
            </article>`).join('')}
        </div>
      </div>
    </section>`;

  const about = () => {
    const c = C.company;
    const rows = [[L.legal, t(c.legalName)], ['MST', c.taxCode], [L.est, c.established], [L.hq, t(c.address)], [L.group, 'GRC Group — Taiwan · Hong Kong · Vietnam · Thailand']];
    return `
    <section class="sec" id="about">
      <div class="wrap">
        <div class="sec-head" data-reveal>${tag(5, t(L.dossier))}<h2>${esc(t(C.about.title))}</h2></div>
        <div class="about">
          <div data-reveal>
            <p class="about-body">${esc(t(C.about.body))}</p>
            <ul class="pts">${C.about.points.map((x) => `<li>${icon('check')}${esc(t(x))}</li>`).join('')}</ul>
          </div>
          <dl class="panel dossier" data-reveal>
            ${rows.map(([k, v]) => `<div><dt>${esc(typeof k === 'string' ? k : t(k))}</dt><dd>${esc(v)}</dd></div>`).join('')}
          </dl>
        </div>
        <div class="stats">
          ${C.stats.map((s) => `<div class="stat" data-reveal><b>${s.static ? esc(s.value) : `<span data-count="${s.value}">${s.value}</span>`}${esc(s.suffix || '')}</b><p>${esc(t(s.label))}</p></div>`).join('')}
        </div>
      </div>
    </section>`;
  };

  const services = () => `
    <section class="sec sec-alt" id="services">
      <div class="wrap">
        <div class="sec-head" data-reveal>${tag(6, ui('navServices'))}<h2>${esc(ui('servicesTitle'))}</h2></div>
        <ol class="phases">
          ${C.services.map((s, i) => `<li class="phase" data-reveal><span class="mono amber">${esc(t(L.phase)).toUpperCase()} 0${i + 1}</span><h3>${esc(t(s.title))}</h3><p>${esc(t(s.body))}</p></li>`).join('')}
        </ol>
      </div>
    </section>`;

  const contact = () => {
    const c = C.company;
    return `
    <section class="sec" id="contact">
      <div class="wrap">
        <div class="sec-head" data-reveal>${tag(7, ui('navContact'))}<h2>${esc(ui('contactTitle'))}</h2><p class="sec-lead">${esc(ui('contactLead'))}</p></div>
        <div class="contact">
          <div class="contact-info" data-reveal>
            <div class="panel info">
              <div><span class="mono dim">${esc(ui('address')).toUpperCase()}</span><p>${esc(t(c.address))}</p></div>
              <div><span class="mono dim">${esc(ui('phone')).toUpperCase()}</span><p><a href="${GR.telHref()}">${esc(c.phoneDisplay)}</a></p></div>
              <div><span class="mono dim">${esc(ui('email')).toUpperCase()}</span><p><a href="${GR.mailHref()}">${esc(c.email)}</a></p></div>
              <div><span class="mono dim">GRID</span><p class="mono">${esc(c.coords)}</p></div>
            </div>
            <div class="map"><iframe title="Google Maps" src="${GR.mapsEmbed()}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><span class="map-tag mono">HQ // ${esc(ui('directions')).toUpperCase()} <a href="${GR.mapsLink()}" target="_blank" rel="noopener">↗</a></span></div>
          </div>
          <form class="panel form" data-quote data-reveal>
            <div class="form-grid">${GR.formFields()}</div>
            <button class="btn btn-amber btn-block" type="submit">${esc(ui('submit'))} ${icon('arrow')}</button>
            <p class="gr-status" data-status role="status" aria-live="polite"></p>
          </form>
        </div>
      </div>
    </section>`;
  };

  const footer = () => `
    <footer class="ftr">
      <div class="wrap ftr-in">
        <a class="logo" href="#top"><span class="logo-b">GRC</span><span class="logo-s">/</span><span class="logo-v">VN</span></a>
        <p class="mono">© ${GR.year} ${esc(t(C.company.legalName)).toUpperCase()} · MST ${esc(C.company.taxCode)}</p>
        <p class="mono dim">${esc(ui('trademarks'))}</p>
      </div>
    </footer>`;

  function renderGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = filtered().map(card).join('');
    document.querySelectorAll('[data-filter]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.filter === state.filter)));
    GR.reveal(grid);
  }

  function render() {
    document.getElementById('app').innerHTML =
      GR.demoSwitcher('v2') + topbar() + header() + '<main>' + hero() + ticker() + test() + products() + solutions() + sectors() + about() + services() + contact() + '</main>' +
      footer() + GR.fab();
    GR.bindNav(document.getElementById('burger'), document.getElementById('nav'));
  }

  document.addEventListener('click', (e) => {
    const d = e.target.closest('[data-dev]');
    if (d) {
      state.dev = d.dataset.dev;
      document.getElementById('test-panel').innerHTML = testPanel();
      document.querySelectorAll('[data-dev]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.dev === state.dev)));
      return;
    }
    const f = e.target.closest('[data-filter]');
    if (f) { state.filter = f.dataset.filter; renderGrid(); return; }
    const g = e.target.closest('[data-go-filter]');
    if (g) { state.filter = g.dataset.goFilter; renderGrid(); }
  });

  window.addEventListener('scroll', () => {
    const h = document.querySelector('.hdr');
    if (h) h.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  GR.mount(render);
})();
