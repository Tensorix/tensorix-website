import { Resvg } from '@resvg/resvg-js';
const svg=await Bun.file(new URL('./social.svg',import.meta.url)).text();
const renderer=new Resvg(svg,{font:{fontFiles:[new URL('../public/assets/manrope-bold.ttf',import.meta.url).pathname,new URL('../public/assets/manrope-regular.ttf',import.meta.url).pathname],defaultFontFamily:'Manrope'}});
await Bun.write(new URL('../public/assets/social.png',import.meta.url),renderer.render().asPng());
