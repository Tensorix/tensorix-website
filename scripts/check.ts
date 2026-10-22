import { join } from 'node:path';
const root=join(import.meta.dir,'..','public');
const html=await Bun.file(join(root,'index.html')).text();
for(const [,p]of html.matchAll(/(?:src|href)="(\/[^"#]*)"/g)){if(p==='/' )continue;if(!(await Bun.file(join(root,p)).exists()))throw new Error('Missing asset '+p);}
for(const [,id]of html.matchAll(/href="#([^"]+)"/g)){if(!html.includes(`id="${id}"`))throw new Error('Missing anchor '+id);}
for(const match of html.matchAll(/<[^>]+data-en="[^"]*"[^>]*>/g)){if(!match[0].includes('data-zh='))throw new Error('Missing translation');}
for(const phrase of ['一人团队','独立维护','由我发起','solo founder','one-person','independently maintained'])if(html.includes(phrase))throw new Error('Disallowed public copy');
for(const file of ['404.html','robots.txt','sitemap.xml','_headers','assets/social.png'])if(!(await Bun.file(join(root,file)).exists()))throw new Error('Missing '+file);
const build=await Bun.build({entrypoints:[join(root,'app.js')],target:'browser',write:false});if(!build.success)throw new Error('Browser JS failed compilation');
console.log('Assets, anchors, translations, public-copy boundaries, SEO files and browser JavaScript verified.');
