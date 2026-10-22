import { resolve } from 'node:path';
const root=resolve(import.meta.dir,'public');
Bun.serve({port:4174,async fetch(req){const p=decodeURIComponent(new URL(req.url).pathname);const path=resolve(root,'.'+(p==='/'?'/index.html':p));if(!path.startsWith(root+'/'))return new Response('Forbidden',{status:403});const f=Bun.file(path);return await f.exists()?new Response(f):new Response(Bun.file(root+'/404.html'),{status:404});}});
console.log('Tensorix preview: http://localhost:4174');
