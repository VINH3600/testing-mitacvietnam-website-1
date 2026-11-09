/* Design A — "Enterprise": light, brand red, photography-led. */
(function () {
  const { C, t, esc, ui, icon } = GR;
  const state = { filter: 'all' };
  const NAV = [['about', 'navAbout'], ['solutions', 'navSolutions'], ['products', 'navProducts'], ['sectors', 'navSectors'], ['services', 'navServices'], ['contact', 'navContact']];

  const logo = () => `
    <a class="logo" href="#top" aria-label="${esc(C.company.brand)}">
      <span class="logo-mark" aria-hidden="true">GRC</span>
      <span class="logo-text"><b>General Resources</b><span>Vietnam</span></span>
    </a>`;

  const header = () => `
    <header class="hdr" id="top">
      <div class="wrap hdr-in">
        ${logo()}
        <nav class="nav" id="nav" aria-label="Main">
          ${NAV.map(([id, k]) => `<a href="#${id}">${esc(ui(k))}</a>`).join('')}
          <div class="nav-tools">${GR.langToggle('lang')}<a class="btn btn-red btn-sm" href="#contact">${esc(ui('getQuote'))}</a></div>
        </nav>
        <button class="burger" id="burger" type="button" aria-expanded="false" aria-controls="nav" aria-label="${esc(ui('menu'))}"><span></span><span></span><span></span></button>
      </div>
    </header>`;

  const hero = () => `
    <section class="hero">
      <div class="wrap hero-in">
        <div class="hero-copy">
          <p class="pill" data-reveal><span class="dot"></span>${esc(t(C.hero.eyebrow))}</p>
          <h1 data-reveal>${esc(t(C.hero.title))}</h1>
          <p class="lead" data-reveal>${esc(t(C.hero.lead))}</p>
          <div class="hero-cta" data-reveal>
            <a class="btn btn-red" href="#contact">${esc(ui('getQuote'))} ${icon('arrow')}</a>
            <a class="btn btn-line" href="#products">${esc(ui('explore'))}</a>
          </div>
          <dl class="hero-facts" data-reveal>
            <div><dt>Getac</dt><dd>${esc(t({ vi: 'Laptop & máy tính bảng siêu bền', en: 'Rugged laptops & tablets' }))}</dd></div>
            <div><dt>MiTAC</dt><dd>${esc(t({ vi: 'Máy chủ AI, biên & doanh nghiệp', en: 'AI, edge & enterprise servers' }))}</dd></div>
          </dl>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="halo"></div>
          <img class="art-main" src="../assets/img/products/getac-b360.webp" alt="" width="1000" height="833">
          <img class="art-sub" src="../assets/img/products/getac-ux10.webp" alt="" width="464" height="315">
          <span class="chip c1">${icon('shield')} IP66</span>
          <span class="chip c2">${icon('check')} MIL-STD-810H</span>
          <span class="chip c3">${icon('sun')} 1.400 nits</span>
        </div>
      </div>
    </section>`;

  const stats = () => `
    <section class="stats" aria-label="GRC Group">
      <div class="wrap stats-in">
        ${C.stats.map((s) => `
          <div class="stat" data-reveal>
            <p class="stat-n">${s.static ? esc(s.value) : `<span data-count="${s.value}">${s.value}</span>`}${esc(s.suffix || '')}</p>
            <p class="stat-l">${esc(t(s.label))}</p>
          </div>`).join('')}
      </div>
    </section>`;

  const solutions = () => `
    <section class="sec" id="solutions">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="kicker">${esc(ui('navSolutions'))}</p>
          <h2>${esc(ui('solutionsTitle'))}</h2>
        </div>
        <div class="pillars">
          ${C.pillars.map((p) => `
            <article class="pillar" data-reveal>
              <div class="pillar-img"><img src="${esc(p.image)}" alt="" loading="lazy"></div>
              <div class="pillar-body">
                <p class="brand-tag">${esc(p.brand)}</p>
                <h3>${esc(t(p.title))}</h3>
                <p>${esc(t(p.body))}</p>
                <ul class="tags">${(p.tags[GR.lang()] || p.tags.vi).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
                <a class="link" href="#products" data-go-filter="${p.id === 'server' ? 'server' : 'all'}">${esc(ui('explore'))} ${icon('arrow')}</a>
              </div>
            </article>`).join('')}
        </div>
      </div>
    </section>`;

  const card = (p) => `
    <article class="card" data-reveal>
      <button class="card-media" type="button" data-product="${p.id}" aria-label="${esc(p.name)} — ${esc(ui('details'))}">
        <img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">
      </button>
      <div class="card-body">
        <p class="card-brand">${esc(p.brand)}${p.gen ? ' · ' + esc(p.gen) : ''}</p>
        <h3>${esc(p.name)}</h3>
        <p class="card-tag">${esc(t(p.tagline))}</p>
        <ul class="badges">${p.badges.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
        <div class="card-actions">
          <button type="button" class="link" data-product="${p.id}">${esc(ui('details'))} ${icon('arrow')}</button>
          <button type="button" class="btn btn-soft btn-sm" data-quote-id="${p.id}">${esc(ui('getQuote'))}</button>
        </div>
      </div>
    </article>`;

  const filtered = () => C.products.filter((p) => state.filter === 'all' || p.category === state.filter);

  const products = () => `
    <section class="sec sec-gray" id="products">
      <div class="wrap">
        <div class="sec-head row" data-reveal>
          <div><p class="kicker">${esc(ui('navProducts'))}</p><h2>${esc(ui('productsTitle'))}</h2></div>
          <div class="tabs" role="tablist">
            ${[['all', ui('all')], ...C.categories.map((c) => [c.id, t(c.label)])].map(([id, label]) =>
              `<button type="button" role="tab" data-filter="${id}" aria-selected="${state.filter === id}">${esc(label)}</button>`).join('')}
          </div>
        </div>
        <div class="grid" id="grid">${filtered().map(card).join('')}</div>
      </div>
    </section>`;

  const features = () => `
    <section class="sec" id="why">
      <div class="wrap">
        <div class="sec-head center" data-reveal><p class="kicker">Getac · MiTAC</p><h2>${esc(ui('whyTitle'))}</h2></div>
        <div class="features">
          ${C.features.map((f) => `
            <div class="feature" data-reveal>
              <span class="feature-ico">${icon(f.icon)}</span>
              <h3>${esc(t(f.title))}</h3>
              <p>${esc(t(f.body))}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>`;

  const sectors = () => `
    <section class="sec sec-gray" id="sectors">
      <div class="wrap">
        <div class="sec-head" data-reveal><p class="kicker">${esc(ui('navSectors'))}</p><h2>${esc(ui('sectorsTitle'))}</h2></div>
        <div class="sectors">
          ${C.sectors.map((s) => `
            <article class="sector" data-reveal>
              <div class="sector-img"><img src="${esc(s.image)}" alt="" loading="lazy"><h3>${esc(t(s.title))}</h3></div>
              <div class="sector-body">
                <p>${esc(t(s.body))}</p>
                <p class="sector-dev">${esc(ui('usedIn'))}</p>
                <div class="sector-chips">${s.products.map((id) => {
                  const p = GR.product(id);
                  return p ? `<button type="button" data-product="${p.id}">${esc(p.name.replace(/^(Getac|MiTAC) /, ''))}</button>` : '';
                }).join('')}</div>
              </div>
            </article>`).join('')}
        </div>
      </div>
    </section>`;

  const about = () => `
    <section class="sec" id="about">
      <div class="wrap about">
        <div class="about-copy" data-reveal>
          <p class="kicker">${esc(ui('navAbout'))}</p>
          <h2>${esc(t(C.about.title))}</h2>
          <p class="about-body">${esc(t(C.about.body))}</p>
          <ul class="checks">${C.about.points.map((x) => `<li>${icon('check')}<span>${esc(t(x))}</span></li>`).join('')}</ul>
        </div>
        <figure class="about-fig" data-reveal>
          <img src="../assets/img/industries/railway.webp" alt="" loading="lazy">
          <figcaption>
            <b>GRC Group</b>
            <span>${esc(t({ vi: 'Thành lập 1980 · Đài Loan', en: 'Founded 1980 · Taiwan' }))}</span>
            <span>Taiwan · Hong Kong · Vietnam · Thailand</span>
          </figcaption>
        </figure>
      </div>
    </section>`;

  const services = () => `
    <section class="sec sec-gray" id="services">
      <div class="wrap">
        <div class="sec-head center" data-reveal><p class="kicker">${esc(ui('navServices'))}</p><h2>${esc(ui('servicesTitle'))}</h2></div>
        <ol class="steps">
          ${C.services.map((s, i) => `
            <li class="step" data-reveal>
              <span class="step-n">${String(i + 1).padStart(2, '0')}</span>
              <h3>${esc(t(s.title))}</h3>
              <p>${esc(t(s.body))}</p>
            </li>`).join('')}
        </ol>
      </div>
    </section>`;

  const contact = () => {
    const c = C.company;
    return `
    <section class="contact" id="contact">
      <div class="wrap contact-in">
        <div class="contact-info" data-reveal>
          <p class="kicker light">${esc(ui('navContact'))}</p>
          <h2>${esc(ui('contactTitle'))}</h2>
          <p class="contact-lead">${esc(ui('contactLead'))}</p>
          <ul class="info">
            <li>${icon('pin')}<div><small>${esc(ui('address'))}</small><span>${esc(t(c.address))}</span></div></li>
            <li>${icon('phone')}<div><small>${esc(ui('phone'))}</small><a href="${GR.telHref()}">${esc(c.phoneDisplay)}</a></div></li>
            <li>${icon('mail')}<div><small>${esc(ui('email'))}</small><a href="${GR.mailHref()}">${esc(c.email)}</a></div></li>
            <li>${icon('doc')}<div><small>${esc(ui('taxCode'))}</small><span>${esc(c.taxCode)}</span></div></li>
          </ul>
          <div class="map"><iframe title="Google Maps" src="${GR.mapsEmbed()}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        </div>
        <form class="form" data-quote data-reveal>
          <div class="form-grid">${GR.formFields()}</div>
          <button class="btn btn-red btn-block" type="submit">${esc(ui('submit'))} ${icon('arrow')}</button>
          <p class="gr-status" data-status role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>`;
  };

  const footer = () => {
    const c = C.company;
    return `
    <footer class="ftr">
      <div class="wrap ftr-in">
        <div class="ftr-brand">${logo()}<p>${esc(t(C.seo.description))}</p></div>
        <div><h4>${esc(ui('navProducts'))}</h4><ul>${C.products.filter((p) => p.featured).map((p) => `<li><button type="button" data-product="${p.id}">${esc(p.name)}</button></li>`).join('')}</ul></div>
        <div><h4>${esc(ui('navSectors'))}</h4><ul>${C.sectors.slice(0, 4).map((s) => `<li><a href="#sectors">${esc(t(s.title))}</a></li>`).join('')}</ul></div>
        <div><h4>${esc(ui('navContact'))}</h4><ul><li><a href="${GR.telHref()}">${esc(c.phoneDisplay)}</a></li><li><a href="${GR.mailHref()}">${esc(c.email)}</a></li><li><a href="${GR.mapsLink()}" target="_blank" rel="noopener">${esc(ui('directions'))}</a></li></ul></div>
      </div>
      <div class="wrap ftr-legal">
        <p>© ${GR.year} ${esc(t(c.legalName))} · ${esc(ui('taxCode'))} ${esc(c.taxCode)}. ${esc(ui('rights'))}</p>
        <p>${esc(ui('trademarks'))}</p>
      </div>
    </footer>`;
  };

  function renderGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = filtered().map(card).join('');
    document.querySelectorAll('[data-filter]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.filter === state.filter)));
    GR.reveal(grid);
  }

  function render() {
    document.getElementById('app').innerHTML =
      GR.demoSwitcher('v1') + header() + '<main>' + hero() + stats() + solutions() + products() + features() + sectors() + about() + services() + contact() + '</main>' +
      footer() + GR.fab();
    GR.bindNav(document.getElementById('burger'), document.getElementById('nav'));
  }

  document.addEventListener('click', (e) => {
    const f = e.target.closest('[data-filter]');
    if (f) { state.filter = f.dataset.filter; renderGrid(); return; }
    const g = e.target.closest('[data-go-filter]');
    if (g) { state.filter = g.dataset.goFilter; renderGrid(); }
  });

  // Header gets a shadow once the page scrolls.
  window.addEventListener('scroll', () => {
    const h = document.querySelector('.hdr');
    if (h) h.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  GR.mount(render);
})();
