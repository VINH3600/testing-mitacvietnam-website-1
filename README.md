# GRCVN website

Website for **General Resources Vietnam** (GRC VN): Getac rugged computers and MiTAC servers.
This repo holds the current demo: three design directions sharing one bilingual (VI/EN) content file, plus a plain-language page explaining the AI-readiness plan.

Live demo: https://grcvn.vxid.io (not indexed by search engines)

| Path | What it is |
| --- | --- |
| `/` | Landing page: pick a design, list of info still needed from GRC VN |
| `/v1/` | Design A, Enterprise (light, brand red) |
| `/v2/` | Design B, Field Ops (dark, interactive stress-test charts) |
| `/v3/` | Design C, Blueprint (editorial, animated field → edge → core diagram) |
| `/ai/` | "Website trong thời AI": the 3-step AI plan, written for non-technical readers |

## Run it locally

No build step and no dependencies. Needs Node 18 or newer.

```sh
node server.mjs          # serves ./site on http://127.0.0.1:5210
PORT=8080 node server.mjs
```

Any static file server pointed at `site/` also works. Open the pages over HTTP, not `file://`.

## Where things live

```
server.mjs              tiny static server (adds noindex header for the demo)
site/
  shared/content.js     ALL text, company info and products, bilingual { vi, en }
  shared/core.js        shared runtime: language switch, quote form, product dialog, mobile menu, scroll reveal
  shared/base.css       behaviour-level styles shared by all designs
  v1/ v2/ v3/           one design each: index.html + style.css + app.js (renders from content.js)
  ai/index.html         static AI-plan page (self-contained, no JS needed to read it)
  index.html            landing / design picker
  assets/               product + industry photos (webp), share images, favicon
```

### Editing content

Edit `site/shared/content.js` only; all three designs pick up the change.

- Every text is `{ vi: '...', en: '...' }`. An empty `en` falls back to Vietnamese.
- Lines marked `// XÁC NHẬN` are still waiting for confirmation from GRC VN (email, Zalo, partner status, GRC Group figures, whether the MiTAC Aowanda is still sold).
- Products: `products[]` (specs keyed by `specLabels`, `metrics` feed the charts in designs B and C).
- Setting `company.zalo` turns on the Zalo button. Setting `form.web3formsKey` makes the quote form email the company; without it the form runs in demo mode.

### Product specs

Specs come from the official getac.com and mitaccomputing.com pages (checked October 2026). Re-check against the datasheet before changing them; do not copy specs from AI-generated text.

## Before launch

- Keep one design and delete the other two, the landing page and the demo switcher (`GR.demoSwitcher` in each `app.js`).
- Remove the noindex: `<meta name="robots">` in each page, the `X-Robots-Tag` header in `server.mjs`, and `site/robots.txt`.
- Replace the text logo with the real GRC VN logo.
- Confirm image rights: product and industry photos are taken from Getac, MiTAC and the OCP Marketplace for demo use.
- Pick a domain (grcvn.com belongs to another company).
- Move hosting to a cloud static host (e.g. Cloudflare Pages); the demo currently runs from a personal machine.

## Roadmap (see `/ai/`)

1. **AI-readable site.** Pre-render HTML instead of building pages in the browser, add schema.org JSON-LD for Organization and Products, `llms.txt`, a public `catalog.json`, and one generated page per product. Today the designs render client-side, so crawlers see an empty `<div id="app">`.
2. **24/7 assistant.** Answers only from the approved content file, never quotes prices or promises stock, asks consent before taking contact details, hands leads to sales via Zalo/email.
3. **Agent endpoint.** MCP server / open API (`search_products`, `get_product`, `request_quote`) once there is real demand.
