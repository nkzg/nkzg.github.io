import{t as b,a as _}from"../chunks/disclose-version.C7yHqsKP.js";import{b as A,a4 as $,a5 as k,a6 as E,a7 as T,h as w,e as Z,t as g,a8 as S,V as C,Z as c,W as x,Y as F,a9 as M,a0 as O}from"../chunks/runtime.Dxok9MYU.js";import{h as P}from"../chunks/svelte-head.BZrGu8t-.js";import{a as i}from"../chunks/attributes.CaPm3nup.js";import{b as n}from"../chunks/paths.SfOSLd5v.js";function R(t,e,...r){var s=t,a=E,o;A(()=>{a!==(a=e())&&(o&&(T(o),o=null),o=k(()=>a(s,...r)))},$),w&&(s=Z)}function p(t,e,r,s){var a=t.__attributes??(t.__attributes={});w&&(a[e]=t.getAttribute(e)),a[e]!==(a[e]=r)&&(r==null?t.removeAttribute(e):typeof r!="string"&&V(t).includes(e)?t[e]=r:t.setAttribute(e,r))}var y=new Map;function V(t){var e=y.get(t.nodeName);if(e)return e;y.set(t.nodeName,e=[]);for(var r,s=g(t),a=Element.prototype;a!==s;){r=S(s);for(var o in r)r[o].set&&e.push(o);s=g(s)}return e}const z=!0,H=Object.freeze(Object.defineProperty({__proto__:null,prerender:z},Symbol.toStringTag,{value:"Module"}));var I=b('<meta name="description"> <meta property="og:title"> <meta property="og:description"> <meta property="og:type" content="website">',1),W=b(`<header class="text-xl font-freight font-bold italic mt-[calc(5vh+5vw)] mx-12 text-primary-100"><nav class="flex w-full sm:w-3/4 md:w-[420px]"><ul class="flex flex-wrap gap-y-1 space-x-0.5"><li class="flex"><a${i("href",`${n}/`)} class="flex items-center"><img src="/favico.ico" alt="Icon" class="h-[calc(1.875rem+2px)] w-[calc(1.875rem+2px)] mr-0.5 hover:filter hover:hue-rotate-[65deg] hover:saturate-[0.8] hover:brightness-[1.3]"></a></li> <li class="border-dense-dotted flex justify-center"><a${i("href",`${n}/projects`)} class="px-3 py-1 hover:text-primary-300">projects</a></li> <li class="border-dense-dotted flex justify-center"><a${i("href",`${n}/thoughts`)} class="px-3 py-1 hover:text-primary-300">thoughts</a></li> <li class="border-dense-dotted flex justify-center"><a${i("href",`${n}/favorites`)} class="px-3 py-1 hover:text-primary-300">favorites</a></li> <li class="border-dense-dotted flex justify-center"><a${i("href",`${n}/Nick_Zhong_CV.pdf`)} target="_blank" rel="noopener noreferrer" class="px-3 py-1 hover:text-primary-300">resume</a></li></ul></nav></header> <!>`,1);function J(t,e){var l,f,d,h;C(e,!0);const r=((f=(l=e.data)==null?void 0:l.seo)==null?void 0:f.title)||"Nick Zhong",s=((h=(d=e.data)==null?void 0:d.seo)==null?void 0:h.description)||"A personal website for Nick Zhong";var a=W();P(j=>{var m=I();M.title=r;var v=x(m);p(v,"content",s);var u=c(v,2);p(u,"content",r);var N=c(u,2);p(N,"content",s),O(2),_(j,m)});var o=c(x(a),2);R(o,()=>e.children),_(t,a),F()}export{J as component,H as universal};
