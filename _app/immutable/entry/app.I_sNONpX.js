var S=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var i=(r,e,t)=>(S(r,e,"read from private field"),t?t.call(r):e.get(r)),k=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},T=(r,e,t,n)=>(S(r,e,"write to private field"),n?n.call(r,t):e.set(r,t),t);import{C as F,a as M,x,D as N,u as W,y as E,B as R,F as G,p as H,w as P}from"../chunks/runtime.FnY2WV3q.js";import{A as J,z as K,v as C,B as L,c as p,C as Q,p as I,d as y,s as V,b as X,o as Y,x as D,w as Z,D as $,E as O,t as j}from"../chunks/disclose-version.WhGS-OEU.js";import{o as ee}from"../chunks/main-client.ayjoVHb0.js";function te(r){return class extends re{constructor(e){super({component:r,...e})}}}var f,m;class re{constructor(e){k(this,f,{});k(this,m,void 0);T(this,m,J(e.component,{target:e.target,props:{...e.props,$$events:i(this,f)},context:e.context,intro:e.intro,recover:e.recover}));for(const t of Object.keys(i(this,m)))t==="$set"||t==="$destroy"||F(this,t,{get(){return i(this,m)[t]},set(n){i(this,m)[t]=n},enumerable:!0})}$set(e){i(this,m).$set(e)}$on(e,t){i(this,f)[e]=i(this,f)[e]||[];const n=(...c)=>t.call(this,...c);return i(this,f)[e].push(n),()=>{i(this,f)[e]=i(this,f)[e].filter(c=>c!==n)}}$destroy(){i(this,m).$destroy()}}f=new WeakMap,m=new WeakMap;const se="modulepreload",oe=function(r,e){return new URL(r,e).href},U={},b=function(e,t,n){let c=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link");c=Promise.all(t.map(s=>{if(s=oe(s,n),s in U)return;U[s]=!0;const _=s.endsWith(".css"),g=_?'[rel="stylesheet"]':"";if(!!n)for(let o=l.length-1;o>=0;o--){const a=l[o];if(a.href===s&&(!_||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${g}`))return;const u=document.createElement("link");if(u.rel=_?"stylesheet":se,_||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),_)return new Promise((o,a)=>{u.addEventListener("load",o),u.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${s}`)))})}))}return c.then(()=>e()).catch(l=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l})},me={};var ne=j('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),ae=j("<!> <!>",!0);function ie(r,e){M(e,!0);let t=x(e,"components",11,()=>[]),n=x(e,"data_0",3,null),c=x(e,"data_1",3,null);N(()=>e.stores.page.set(e.page)),W(()=>{e.stores,e.page,e.constructors,t(),e.form,n(),c(),e.stores.page.notify()});let l=P(!1),s=P(!1),_=P(null);ee(()=>{const o=e.stores.page.subscribe(()=>{E(l)&&(R(s,!0),G().then(()=>{R(_,K(document.title||"untitled page"))}))});return R(l,!0),o});var g=Y(r,!0,ae),w=y(g),u=V(V(w,!0));C(w,()=>e.constructors[1],o=>{var a=D(o),h=y(a);L(h,()=>e.constructors[0],v=>{O(v(h,{get data(){return n()},children:(d,ce)=>{var A=D(d),B=y(A);L(B,()=>e.constructors[1],q=>{O(q(B,{get data(){return c()},get form(){return e.form}}),z=>t()[1]=z)}),p(d,A)}}),d=>t()[0]=d)}),p(o,a)},o=>{var a=D(o),h=y(a);L(h,()=>e.constructors[0],v=>{O(v(h,{get data(){return n()},get form(){return e.form}}),d=>t()[0]=d)}),p(o,a)}),C(u,()=>E(l),o=>{var a=Z(o,!0,ne),h=X(a);C(h,()=>E(s),v=>{var d=$(v);Q(d,()=>E(_)),I(v,d)},null),I(o,a)},null),p(r,g),H()}const _e=te(ie),he=[()=>b(()=>import("../nodes/0.tEpIWKVm.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>b(()=>import("../nodes/1.7Fex8IOh.js"),__vite__mapDeps([6,1,2,3]),import.meta.url),()=>b(()=>import("../nodes/2.GgYZsOYH.js"),__vite__mapDeps([7,1,2,4,3]),import.meta.url),()=>b(()=>import("../nodes/3.FGiu5H7r.js"),__vite__mapDeps([8,1,2]),import.meta.url)],ve=[],ge={"/":[2],"/about-me":[-4]},Ee={handleError:({error:r})=>{console.error(r)},reroute:()=>{}};export{ge as dictionary,Ee as hooks,me as matchers,he as nodes,_e as root,ve as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.tEpIWKVm.js","../chunks/disclose-version.WhGS-OEU.js","../chunks/runtime.FnY2WV3q.js","../chunks/entry.8bUDZ4xL.js","../chunks/main-client.ayjoVHb0.js","../assets/0.e7ZPQapW.css","../nodes/1.7Fex8IOh.js","../nodes/2.GgYZsOYH.js","../nodes/3.FGiu5H7r.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
