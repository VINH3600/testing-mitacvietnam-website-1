/* Design C — "Blueprint": editorial paper layout, technical line drawings and data figures. */
(function () {
  const { C, t, esc, ui, icon } = GR;
  const state = { filter: 'all' };
  const NAV = [['solutions', 'navSolutions'], ['products', 'navProducts'], ['sectors', 'navSectors'], ['about', 'navAbout'], ['services', 'navServices'], ['contact', 'navContact']];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const L = {
    fig1: { vi: 'Hình 1 — Từ hiện trường đến trung tâm dữ liệu', en: 'Fig. 1 — From the field to the data center' },
    field: { vi: 'Hiện trường', en: 'Field' },
    edge: { vi: 'Biên mạng', en: 'Edge' },
    core: { vi: 'Trung tâm dữ liệu', en: 'Data center' },
    radio: { vi: '4G LTE · Wi-Fi 7', en: '4G LTE · Wi-Fi 7' },
    fiber: { vi: 'Cáp quang', en: 'Fiber' },
    tap: { vi: 'Chạm vào thiết bị để xem thông số', en: 'Tap any device for specs' },
    swipe: { vi: 'Vuốt ngang để xem toàn bộ sơ đồ →', en: 'Swipe to see the whole diagram →' },
    swipeChart: { vi: 'Vuốt ngang để xem toàn bộ biểu đồ →', en: 'Swipe to see the whole chart →' },
    compare: { vi: 'Nhẹ hơn hay sáng hơn? So sánh nhanh thiết bị Getac', en: 'Lighter or brighter? Getac devices at a glance' },
    weight: { vi: 'Trọng lượng (kg)', en: 'Weight (kg)' },
    nits: { vi: 'Độ sáng màn hình (nits)', en: 'Screen brightness (nits)' },
    ip66: { vi: 'IP66 — siêu bền toàn diện', en: 'IP66 — fully rugged' },
    ip53: { vi: 'IP53 — bán siêu bền', en: 'IP53 — semi-rugged' },
    quote: { vi: 'Kinh nghiệm kỹ thuật từ hạ tầng metro — nay đứng sau từng thiết bị ở hiện trường.', en: 'Engineering know-how from metro infrastructure — now behind every device in the field.' },
    legal: { vi: 'Pháp nhân', en: 'Legal name' },
    est: { vi: 'Thành lập', en: 'Established' },
    hq: { vi: 'Trụ sở', en: 'Office' },
    sheet: { vi: 'Bảng thông số', en: 'Spec sheet' },
  };
  const num = (v) => (GR.lang() === 'vi' ? String(v).replace('.', ',') : String(v));
  const secHead = (n, key, title, lead) => `
    <header class="sec-head" data-reveal>
      <p class="sec-no"><span>${String(n).padStart(2, '0')}</span>${esc(key)}</p>
      <h2>${esc(title)}</h2>
      ${lead ? `<p class="sec-lead">${esc(lead)}</p>` : ''}
    </header>`;

  const header = () => `
    <header class="hdr">
      <div class="wrap hdr-in">
        <a class="logo" href="#top" aria-label="${esc(C.company.brand)}"><i aria-hidden="true"></i><span>General Resources <em>Vietnam</em></span></a>
        <nav class="nav" id="nav" aria-label="Main">
          ${NAV.map(([id, k], i) => `<a href="#${id}"><small>${String(i + 1).padStart(2, '0')}</small>${esc(ui(k))}</a>`).join('')}
          <div class="nav-tools">${GR.langToggle('lang')}<a class="btn" href="#contact">${esc(ui('getQuote'))} ${icon('arrow')}</a></div>
        </nav>
        <button class="burger" id="burger" type="button" aria-expanded="false" aria-controls="nav" aria-label="${esc(ui('menu'))}"><span></span><span></span></button>
      </div>
    </header>`;

  /* ---------- Fig. 1: field → edge → core ---------- */
  function diagram() {
    const label = (x, y, name, sub, anchor) => `
      <text x="${x}" y="${y}" class="d-name" text-anchor="${anchor || 'middle'}">${esc(name)}</text>
      ${sub ? `<text x="${x}" y="${y + 16}" class="d-sub" text-anchor="${anchor || 'middle'}">${esc(sub)}</text>` : ''}`;
    const paths = [
      ['l1', 'M208 150 C 320 92, 430 88, 528 118'],
      ['l2', 'M352 150 C 420 132, 470 128, 528 134'],
      ['l3', 'M214 316 C 330 296, 440 226, 522 196'],
      ['l4', 'M372 330 C 430 300, 480 250, 526 214'],
      ['l5', 'M548 302 L 600 324'],
      ['l6', 'M744 330 C 800 330, 812 232, 866 232'],
    ];
    const packets = reduceMotion ? '' : paths.map(([id], i) => `
      <circle r="4.5" class="d-packet"><animateMotion dur="${2.4 + (i % 3) * 0.5}s" begin="${i * 0.35}s" repeatCount="indefinite" rotate="auto"><mpath href="#${id}"/></animateMotion></circle>`).join('');
    return `
    <svg class="diagram" viewBox="0 0 1200 470" role="img" aria-label="${esc(t(L.fig1))}">
      <defs>
        <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" class="d-grid"/></pattern>
        <pattern id="bp-grid2" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M100 0H0V100" fill="none" class="d-grid2"/></pattern>
      </defs>
      <rect width="1200" height="470" fill="url(#bp-grid)"/><rect width="1200" height="470" fill="url(#bp-grid2)"/>
      <path d="M412 24V430M790 24V430" class="d-div"/>
      <text x="24" y="44" class="d-zone">01 — ${esc(t(L.field).toUpperCase())}</text>
      <text x="432" y="44" class="d-zone">02 — ${esc(t(L.edge).toUpperCase())}</text>
      <text x="810" y="44" class="d-zone">03 — ${esc(t(L.core).toUpperCase())}</text>

      ${paths.map(([id, d]) => `<path id="${id}" d="${d}" class="d-link ${id === 'l6' || id === 'l5' ? 'wired' : ''}"/>`).join('')}
      <text x="246" y="80" class="d-note">${esc(t(L.radio))}</text>
      <text x="748" y="362" class="d-note">${esc(t(L.fiber))}</text>

      <g class="hot" data-product="b360">
        <rect x="76" y="96" width="124" height="82" rx="4" class="d-dev"/><rect x="84" y="104" width="108" height="66" class="d-screen"/>
        <path d="M64 186H212L222 202H54Z" class="d-dev"/><path d="M110 194h56" class="d-thin"/>
        ${label(138, 228, 'Getac B360', 'IP66 · MIL-STD-810H')}
      </g>
      <g class="hot" data-product="ux10">
        <rect x="246" y="98" width="106" height="76" rx="8" class="d-dev"/><rect x="256" y="106" width="86" height="60" class="d-screen"/>
        ${label(299, 200, 'Getac UX10', '10.1" · 1.15 kg')}
      </g>
      <g class="hot" data-product="zx10">
        <rect x="112" y="284" width="98" height="68" rx="8" class="d-dev"/><rect x="121" y="292" width="80" height="52" class="d-screen"/>
        ${label(161, 378, 'Getac ZX10', 'Android 15')}
      </g>
      <g class="hot" data-product="f120">
        <rect x="262" y="290" width="110" height="78" rx="8" class="d-dev"/><rect x="272" y="298" width="90" height="62" class="d-screen"/>
        ${label(317, 394, 'Getac F120', '12.2" · 1,200 nits')}
      </g>

      <g class="d-tower">
        <path d="M512 304 L534 116 L556 304 M519 244h30 M524 196h20 M528 156h12 M519 244 L548 196 M524 196 L544 156 M549 244 L520 196" class="d-dev"/>
        <rect x="524" y="98" width="6" height="22" class="d-dev"/><rect x="538" y="98" width="6" height="22" class="d-dev"/>
        <path d="M562 104a22 22 0 0 1 0 28M570 96a34 34 0 0 1 0 44M506 104a22 22 0 0 0 0 28M498 96a34 34 0 0 0 0 44" class="d-thin"/>
        <text x="534" y="80" class="d-sub" text-anchor="middle">5G / LTE RAN</text>
      </g>
      <g class="hot" data-product="aowanda">
        <rect x="600" y="304" width="144" height="44" rx="3" class="d-dev"/>
        <path d="M612 316h30M612 326h30M612 336h30M656 316v20M668 316v20M680 316v20M700 326h32" class="d-thin"/>
        ${label(672, 374, 'MiTAC Aowanda', '5G vRAN · MEC')}
      </g>

      <g class="d-rack">
        <rect x="866" y="70" width="230" height="330" rx="4" class="d-dev"/>
        <path d="M882 70v330M1080 70v330" class="d-thin"/>
      </g>
      <g class="hot" data-product="g4826">
        <rect x="890" y="92" width="182" height="72" rx="2" class="d-unit"/><path d="M902 106h36M902 118h36M902 130h36M902 142h36" class="d-thin"/>
        <text x="1058" y="122" class="d-name" text-anchor="end">G4826Z5</text><text x="1058" y="140" class="d-sub" text-anchor="end">AI · 8× MI355X</text>
      </g>
      <g class="hot" data-product="g4520">
        <rect x="890" y="176" width="182" height="72" rx="2" class="d-unit"/><path d="M902 190h36M902 202h36M902 214h36M902 226h36" class="d-thin"/>
        <text x="1058" y="206" class="d-name" text-anchor="end">G4520G6</text><text x="1058" y="224" class="d-sub" text-anchor="end">GPU · Xeon 6</text>
      </g>
      <g class="hot" data-product="r2520">
        <rect x="890" y="260" width="182" height="40" rx="2" class="d-unit"/><path d="M902 272h6M914 272h6M926 272h6M938 272h6M950 272h6M962 272h6M902 286h6M914 286h6M926 286h6M938 286h6M950 286h6M962 286h6" class="d-thin"/>
        <text x="1058" y="284" class="d-name" text-anchor="end">R2520G6</text>
      </g>
      <rect x="890" y="312" width="182" height="20" rx="2" class="d-unit ghost"/><rect x="890" y="340" width="182" height="20" rx="2" class="d-unit ghost"/>
      <text x="981" y="428" class="d-name" text-anchor="middle">MiTAC</text>
      <text x="981" y="444" class="d-sub" text-anchor="middle">AI · HPC · ${esc(t({ vi: 'Ảo hóa', en: 'Virtualisation' }))}</text>

      ${packets}

      <g class="d-title" transform="translate(452 408)">
        <rect width="300" height="44" class="d-dev"/><path d="M168 0v44M0 22h300" class="d-thin"/>
        <text x="10" y="15" class="d-tb">GRC VN · ${esc(t({ vi: 'HÌNH', en: 'FIG.' }))} 1</text><text x="178" y="15" class="d-tb">REV. A · NTS</text>
        <text x="10" y="37" class="d-tb">GENERAL RESOURCES VN</text><text x="178" y="37" class="d-tb">${GR.year}</text>
      </g>
    </svg>`;
  }

  const hero = () => `
    <section class="hero" id="top">
      <div class="wrap">
        <p class="meta" data-reveal><span>GRC VN</span><span>EST. 2017</span><span>HO CHI MINH CITY</span><span>MST ${esc(C.company.taxCode)}</span></p>
        <div class="hero-grid">
          <h1 data-reveal>${esc(t(C.hero.title))}</h1>
          <div class="hero-side" data-reveal>
            <p class="lead">${esc(t(C.hero.lead))}</p>
            <div class="cta">
              <a class="btn btn-ink" href="#contact">${esc(ui('getQuote'))} ${icon('arrow')}</a>
              <a class="btn" href="#products">${esc(ui('explore'))}</a>
            </div>
          </div>
        </div>
        <figure class="fig blueprint" data-reveal>
          <div class="fig-scroll">${diagram()}</div>
          <figcaption><span>${esc(t(L.fig1))}</span><span class="swipe">${esc(t(L.swipe))}</span><span class="hide-s">${esc(t(L.tap))}</span></figcaption>
        </figure>
      </div>
    </section>`;

  const stats = () => `
    <section class="index" aria-label="GRC Group">
      <div class="wrap index-in">
        ${C.stats.map((s, i) => `
          <div class="idx" data-reveal>
            <span class="idx-no">(${String.fromCharCode(97 + i)})</span>
            <b>${s.static ? esc(s.value) : `<span data-count="${s.value}">${s.value}</span>`}${esc(s.suffix || '')}</b>
            <p>${esc(t(s.label))}</p>
          </div>`).join('')}
      </div>
    </section>`;

  const solutions = () => `
    <section class="sec" id="solutions">
      <div class="wrap">
        ${secHead(1, ui('navSolutions'), ui('solutionsTitle'))}
        <div class="pillars">
          ${C.pillars.map((p, i) => `
            <article class="pillar" data-reveal>
              <figure class="fig dim-fig">
                <div class="dim-box"><img src="${esc(p.image)}" alt="" loading="lazy"></div>
                <div class="dim-line"><span>${p.id === 'server' ? '4U · 19"' : num(13.3) + '" · ' + num(2.32) + ' kg'}</span></div>
                <figcaption>${esc(t({ vi: 'Hình', en: 'Fig.' }))} ${i + 2} — ${esc(p.id === 'server' ? 'MiTAC G4826Z5' : 'Getac B360 G3')}</figcaption>
              </figure>
              <p class="brand">${esc(p.brand)}</p>
              <h3>${esc(t(p.title))}</h3>
              <p class="body">${esc(t(p.body))}</p>
              <p class="tags">${(p.tags[GR.lang()] || p.tags.vi).map(esc).join(' / ')}</p>
              <a class="arrow-link" href="#products" data-go-filter="${p.id === 'server' ? 'server' : 'all'}">${esc(ui('explore'))} ${icon('arrow')}</a>
            </article>`).join('')}
        </div>
        <dl class="feature-list">
          ${C.features.map((f, i) => `<div data-reveal><dt><span>${String(i + 1).padStart(2, '0')}</span>${esc(t(f.title))}</dt><dd>${esc(t(f.body))}</dd></div>`).join('')}
        </dl>
      </div>
    </section>`;

  /* ---------- products ---------- */
  const filtered = () => C.products.filter((p) => state.filter === 'all' || p.category === state.filter);
  const sheet = (p, i) => {
    const rows = Object.entries(p.specs).slice(0, 4);
    return `
    <article class="sheet" data-reveal>
      <button type="button" class="sheet-fig" data-product="${p.id}" aria-label="${esc(p.name)} — ${esc(ui('details'))}">
        <span class="sheet-no">${String(i + 1).padStart(2, '0')}</span>
        <img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">
      </button>
      <div class="sheet-body">
        <p class="sheet-brand">${esc(p.brand)}${p.gen ? ' · ' + esc(p.gen) : ''}</p>
        <h3>${esc(p.name.replace(/^(Getac|MiTAC) /, ''))}</h3>
        <p class="sheet-tag">${esc(t(p.tagline))}</p>
        <dl class="sheet-specs">${rows.map(([k, v]) => `<div><dt>${esc(t(C.specLabels[k]))}</dt><dd>${esc(t(v))}</dd></div>`).join('')}</dl>
        <div class="sheet-actions">
          <button type="button" class="arrow-link" data-product="${p.id}">${esc(ui('details'))} ${icon('arrow')}</button>
          <button type="button" class="btn btn-sm" data-quote-id="${p.id}">${esc(ui('getQuote'))}</button>
        </div>
      </div>
    </article>`;
  };

  function scatter() {
    const pts = C.products.filter((p) => p.metrics.kg && p.metrics.nits);
    const W = 640, H = 360, x0 = 64, x1 = 612, y0 = 300, y1 = 36;
    const X = (kg) => x0 + ((kg - 0.5) / 3) * (x1 - x0);
    const Y = (n) => y0 - ((n - 800) / 700) * (y0 - y1);
    const xt = [0.5, 1, 1.5, 2, 2.5, 3, 3.5], yt = [800, 1000, 1200, 1400];
    return `
    <svg class="scatter" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t(L.compare))}">
      ${yt.map((v) => `<path d="M${x0} ${Y(v)}H${x1}" class="s-grid"/><text x="${x0 - 10}" y="${Y(v) + 4}" class="s-tick" text-anchor="end">${v.toLocaleString('en')}</text>`).join('')}
      ${xt.map((v) => `<path d="M${X(v)} ${y0}v6" class="s-axis"/><text x="${X(v)}" y="${y0 + 22}" class="s-tick" text-anchor="middle">${num(v)}</text>`).join('')}
      <path d="M${x0} ${y0}H${x1}" class="s-axis"/>
      <text x="${x1}" y="${H - 6}" class="s-label" text-anchor="end">${esc(t(L.weight))} →</text>
      <text x="${x0 - 50}" y="${y1 - 14}" class="s-label">↑ ${esc(t(L.nits))}</text>
      ${pts.map((p) => {
        const filled = p.metrics.ip >= 66;
        const short = p.name.replace('Getac ', '');
        const right = !['b360', 'f120'].includes(p.id);
        return `<g class="s-pt hot" data-product="${p.id}" tabindex="-1">
          <circle cx="${X(p.metrics.kg)}" cy="${Y(p.metrics.nits)}" r="8" class="${filled ? 'fill' : 'hollow'}"/>
          <text x="${X(p.metrics.kg) + (right ? 14 : -14)}" y="${Y(p.metrics.nits) + 4}" class="s-name" text-anchor="${right ? 'start' : 'end'}">${esc(short)}</text>
        </g>`;
      }).join('')}
    </svg>`;
  }

  const products = () => `
    <section class="sec sec-rule" id="products">
      <div class="wrap">
        ${secHead(2, ui('navProducts'), ui('productsTitle'))}
        <div class="filters" role="tablist" data-reveal>
          ${[['all', ui('all')], ...C.categories.map((c) => [c.id, t(c.label)])].map(([id, label]) =>
            `<button type="button" role="tab" data-filter="${id}" aria-selected="${state.filter === id}">${esc(label)} <sup>${id === 'all' ? C.products.length : C.products.filter((p) => p.category === id).length}</sup></button>`).join('')}
        </div>
        <div class="sheets" id="grid">${filtered().map(sheet).join('')}</div>
        <figure class="fig compare" data-reveal>
          <div class="compare-head">
            <h3>${esc(t(L.compare))}</h3>
            <p class="legend"><span><i class="fill"></i>${esc(t(L.ip66))}</span><span><i class="hollow"></i>${esc(t(L.ip53))}</span></p>
          </div>
          <div class="compare-chart">${scatter()}</div>
          <p class="swipe">${esc(t(L.swipeChart))}</p>
          <figcaption>${esc(t({ vi: 'Hình 4 — Nguồn: getac.com, thông số chính hãng 10/2026. Chạm vào điểm để xem chi tiết.', en: 'Fig. 4 — Source: getac.com official specs, Oct 2026. Tap a dot for details.' }))}</figcaption>
        </figure>
      </div>
    </section>`;

  const sectors = () => `
    <section class="sec sec-rule" id="sectors">
      <div class="wrap">
        ${secHead(3, ui('navSectors'), ui('sectorsTitle'))}
        <ol class="rows">
          ${C.sectors.map((s, i) => `
            <li class="row" data-reveal>
              <span class="row-no">${String(i + 1).padStart(2, '0')}</span>
              <h3>${esc(t(s.title))}</h3>
              <p>${esc(t(s.body))}</p>
              <div class="row-dev">${s.products.map((id) => { const p = GR.product(id); return p ? `<button type="button" data-product="${p.id}">${esc(p.name.replace(/^(Getac|MiTAC) /, ''))}</button>` : ''; }).join('')}</div>
              <div class="row-img"><img src="${esc(s.image)}" alt="" loading="lazy"></div>
            </li>`).join('')}
        </ol>
      </div>
    </section>`;

  const about = () => {
    const c = C.company;
    return `
    <section class="sec sec-rule" id="about">
      <div class="wrap">
        ${secHead(4, ui('navAbout'), t(C.about.title))}
        <blockquote class="pull" data-reveal>“${esc(t(L.quote))}”</blockquote>
        <div class="about">
          <div data-reveal>
            <p class="about-body">${esc(t(C.about.body))}</p>
            <ul class="about-pts">${C.about.points.map((x) => `<li>${esc(t(x))}</li>`).join('')}</ul>
          </div>
          <dl class="facts" data-reveal>
            <div><dt>${esc(t(L.legal))}</dt><dd>${esc(t(c.legalName))}</dd></div>
            <div><dt>${esc(ui('taxCode'))}</dt><dd>${esc(c.taxCode)}</dd></div>
            <div><dt>${esc(t(L.est))}</dt><dd>${esc(c.established)}</dd></div>
            <div><dt>${esc(t(L.hq))}</dt><dd>${esc(t(c.address))}</dd></div>
            <div><dt>GRC Group</dt><dd>Taiwan · Hong Kong · Vietnam · Thailand — 1980</dd></div>
          </dl>
        </div>
      </div>
    </section>`;
  };

  const services = () => `
    <section class="sec sec-rule" id="services">
      <div class="wrap">
        ${secHead(5, ui('navServices'), ui('servicesTitle'))}
        <ol class="steps">
          ${C.services.map((s, i) => `<li data-reveal><span class="step-no">${String(i + 1).padStart(2, '0')}</span><h3>${esc(t(s.title))}</h3><p>${esc(t(s.body))}</p></li>`).join('')}
        </ol>
      </div>
    </section>`;

  const contact = () => {
    const c = C.company;
    return `
    <section class="sec contact" id="contact">
      <div class="wrap">
        ${secHead(6, ui('navContact'), ui('contactTitle'), ui('contactLead'))}
        <div class="contact-grid">
          <form class="form" data-quote data-reveal>
            <div class="form-grid">${GR.formFields()}</div>
            <button class="btn btn-ink btn-lg" type="submit">${esc(ui('submit'))} ${icon('arrow')}</button>
            <p class="gr-status" data-status role="status" aria-live="polite"></p>
          </form>
          <aside class="contact-side" data-reveal>
            <dl class="facts small">
              <div><dt>${esc(ui('phone'))}</dt><dd><a href="${GR.telHref()}">${esc(c.phoneDisplay)}</a></dd></div>
              <div><dt>${esc(ui('email'))}</dt><dd><a href="${GR.mailHref()}">${esc(c.email)}</a></dd></div>
              <div><dt>${esc(ui('address'))}</dt><dd>${esc(t(c.address))}</dd></div>
            </dl>
            <div class="map"><iframe title="Google Maps" src="${GR.mapsEmbed()}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            <a class="arrow-link" href="${GR.mapsLink()}" target="_blank" rel="noopener">${esc(ui('directions'))} ${icon('external')}</a>
          </aside>
        </div>
      </div>
    </section>`;
  };

  const footer = () => `
    <footer class="ftr">
      <div class="wrap">
        <p class="ftr-mark" aria-hidden="true">GRC<span>VN</span></p>
        <div class="ftr-row">
          <p>© ${GR.year} ${esc(t(C.company.legalName))} · ${esc(ui('taxCode'))} ${esc(C.company.taxCode)}</p>
          <p>${esc(ui('trademarks'))}</p>
        </div>
      </div>
    </footer>`;

  function renderGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = filtered().map(sheet).join('');
    document.querySelectorAll('[data-filter]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.filter === state.filter)));
    GR.reveal(grid);
  }

  function render() {
    document.getElementById('app').innerHTML =
      GR.demoSwitcher('v3') + header() + '<main>' + hero() + stats() + solutions() + products() + sectors() + about() + services() + contact() + '</main>' +
      footer() + GR.fab();
    GR.bindNav(document.getElementById('burger'), document.getElementById('nav'));
  }

  document.addEventListener('click', (e) => {
    const f = e.target.closest('[data-filter]');
    if (f) { state.filter = f.dataset.filter; renderGrid(); return; }
    const g = e.target.closest('[data-go-filter]');
    if (g) { state.filter = g.dataset.goFilter; renderGrid(); }
  });

  window.addEventListener('scroll', () => {
    const h = document.querySelector('.hdr');
    if (h) h.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  GR.mount(render);
})();
