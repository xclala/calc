if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const s=e=>c(e,o),t={module:{uri:o},exports:d,require:s};i[o]=Promise.all(n.map((e=>t[e]||s(e)))).then((e=>(r(...e),d)))}}define(["./workbox-356a23f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"2ba651bfa28bdcbc18e3d4dbba797f72"},{url:"icon192.png",revision:"9ea3ef78ec6777c4892e60d691489216"},{url:"icon28801800.png",revision:"efd66b6b4f73ba6dac320e85380427fd"},{url:"icon512.png",revision:"10a9953e6825f88cc6f9c4995575c082"},{url:"index.html",revision:"2f3e0c6cdd6603276c97126c2f6848a2"},{url:"manifest.json",revision:"b9d9f0511dcb7ccf7e63914e9d17dbc6"},{url:"qrcode.png",revision:"a7e47987c2d40550ee73ab220849314c"},{url:"README.md",revision:"3a6b429599f7061ebec86d8d8dfbde18"},{url:"unicode.txt",revision:"dd3eaca4335fb2e7d1f7cbe66b6c20d4"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map