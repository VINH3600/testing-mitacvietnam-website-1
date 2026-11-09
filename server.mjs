// Static file server for the GRCVN demo sites (grcvn.vxid.io -> 127.0.0.1:5210).
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';

const ROOT = resolve(new URL('./site', import.meta.url).pathname);
const PORT = Number(process.env.PORT || 5210);
const HOST = '127.0.0.1';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
};

async function resolveFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const target = normalize(join(ROOT, decoded));
  if (target !== ROOT && !target.startsWith(ROOT + '/')) return null;
  try {
    const s = await stat(target);
    if (s.isDirectory()) {
      const index = join(target, 'index.html');
      await stat(index);
      return index;
    }
    return target;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405).end();
    return;
  }
  // Directory URLs without a trailing slash break relative asset paths.
  const path = req.url.split('?')[0];
  if (/^\/(v1|v2|v3|ai)$/.test(path)) {
    res.writeHead(301, { Location: path + '/' }).end();
    return;
  }
  const file = await resolveFile(req.url);
  if (!file) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
    return;
  }
  const type = TYPES[extname(file)] || 'application/octet-stream';
  const body = await readFile(file);
  res.writeHead(200, {
    'Content-Type': type,
    'Cache-Control': type.startsWith('image/') ? 'public, max-age=86400' : 'no-cache',
    // Demo only: keep search engines away until the real launch.
    'X-Robots-Tag': 'noindex, nofollow',
    'X-Content-Type-Options': 'nosniff',
  });
  res.end(req.method === 'HEAD' ? undefined : body);
}).listen(PORT, HOST, () => {
  console.log(`grcvn demo serving ${ROOT} on http://${HOST}:${PORT}`);
});
