if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const t=e=>s(e,r),f={module:{uri:r},exports:o,require:t};i[r]=Promise.all(c.map((e=>f[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-Cx_eQX2f.js",revision:null},{url:"assets/index-uovhcfWt.css",revision:null},{url:"index.html",revision:"70bdc2357bbb65df2c55725fd4f10c6a"},{url:"registerSW.js",revision:"1ce33ad5b06cb82cc1b74bc63e702281"},{url:"favicon.ico",revision:"8cfa2da816fab460dcfac8bcceccd47d"},{url:"apple-touch-icon.png",revision:"b0465bb650f4079a8b1c5f7a62251079"},{url:"manifest.webmanifest",revision:"79bef6ae1af8c32644549fa3d8ccaeb4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
