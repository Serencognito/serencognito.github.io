import{ah as ct,ai as se,t as ie}from"./runtime.ccL_vF5I.js";new URL("sveltekit-internal://");function ce(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function le(t){return t.split("%25").map(decodeURI).join("%25")}function fe(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function lt({href:t}){return t.split("#")[0]}const ue=["href","pathname","search","toString","toJSON"];function de(t,e,n){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(n(s),a[o](s));e();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of ue)Object.defineProperty(r,a,{get(){return e(),t[a]},enumerable:!0,configurable:!0});return r}const he="/__data.json",pe=".html__data.json";function ge(t){return t.endsWith(".html")?t.replace(/\.html$/,pe):t.replace(/\/$/,"")+he}function me(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function _e(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const $t=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&q.delete(gt(t)),$t(t,e));const q=new Map;function ye(t,e){const n=gt(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&q.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=_e(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,e)}function we(t,e,n){if(q.size>0){const r=gt(t,n),a=q.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);q.delete(r)}}return window.fetch(e,n)}function gt(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${me(...a)}"]`}return r}const ve=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function be(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${ke(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return e.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ft(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ft(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=ve.exec(c),[,h,g,d,m]=u;return e.push({name:d,matcher:m,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ft(c)}).join("")}).join("")}/?$`),params:e}}function Ee(t){return!/^\([^)]+\)$/.test(t)}function ke(t){return t.slice(1).split("/").filter(Ee)}function Se(t,e,n){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<e.length;s+=1){const c=e[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const u=e[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function ft(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ae({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([s,[c,l,u]])=>{const{pattern:h,params:g}=be(s),d={id:s,exec:m=>{const f=h.exec(m);if(f)return Se(f,g,r)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function Dt(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function It(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}const N=[];function tn(t,e){return{subscribe:et(t,e).subscribe}}function Re(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function et(t,e=ct){let n=null;const r=new Set;function a(s){if(Re(t,s)&&(t=s,n)){const c=!N.length;for(const l of r)l[1](),N.push(l,t);if(c){for(let l=0;l<N.length;l+=2)N[l][0](N[l+1]);N.length=0}}}function o(s){a(s(t))}function i(s,c=ct){const l=[s,c];return r.add(l),r.size===1&&(n=e(a,o)||ct),s(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:i}}function en(t){let e;return se(t,n=>e=n)(),e}var Ot;const I=((Ot=globalThis.__sveltekit_17otu6q)==null?void 0:Ot.base)??"/sveltekit-gh-pages";var jt;const Ie=((jt=globalThis.__sveltekit_17otu6q)==null?void 0:jt.assets)??I,Le="1708103983854",Ct="sveltekit:snapshot",Vt="sveltekit:scroll",qt="sveltekit:states",Pe="sveltekit:pageurl",$="sveltekit:history",F="sveltekit:navigation",z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},B=location.origin;function Ft(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function mt(){return{x:pageXOffset,y:pageYOffset}}function O(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Lt={...z,"":z.hover};function Gt(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function Mt(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Gt(t)}}function dt(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!n||!!r||nt(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(n==null?void 0:n.origin)===B&&t.hasAttribute("download");return{url:n,external:a,target:r,download:o}}function Y(t){let e=null,n=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=O(s,"preload-code")),a===null&&(a=O(s,"preload-data")),e===null&&(e=O(s,"keepfocus")),n===null&&(n=O(s,"noscroll")),o===null&&(o=O(s,"reload")),i===null&&(i=O(s,"replacestate")),s=Gt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Lt[r??"off"],preload_data:Lt[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(o),replace_state:c(i)}}function Pt(t){const e=et(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function o(i){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Te(){const{set:t,subscribe:e}=et(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${Ie}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Le;return i&&(t(!0),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function nt(t,e){return t.origin!==B||!t.pathname.startsWith(e)}const Ue=-1,xe=-2,Ne=-3,Oe=-4,je=-5,$e=-6;function De(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(o,i=!1){if(o===Ue)return;if(o===Ne)return NaN;if(o===Oe)return 1/0;if(o===je)return-1/0;if(o===$e)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=e==null?void 0:e[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==xe&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}const Ht=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ht];const Ce=new Set([...Ht]);[...Ce];function Ve(t){return t.filter(e=>e!=null)}class at{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Bt{constructor(e,n){this.status=e,this.location=n}}class _t extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const qe="x-sveltekit-invalidated",Fe="x-sveltekit-trailing-slash";function J(t){return t instanceof at||t instanceof _t?t.status:500}function Ge(t){return t instanceof _t?t.text:"Internal Error"}const x=Dt(Vt)??{},G=Dt(Ct)??{},T={url:Pt({}),page:Pt({}),navigating:et(null),updated:Te()};function yt(t){x[t]=mt()}function Me(t,e){let n=t+1;for(;x[n];)delete x[n],n+=1;for(n=e+1;G[n];)delete G[n],n+=1}function D(t){return location.href=t.href,new Promise(()=>{})}function Tt(){}let rt,ht,W,L,pt,C;const Kt=[],X=[];let P=null;const zt=[],He=[];let j=[],w={branch:[],error:null,url:null},wt=!1,Z=!1,Ut=!0,M=!1,V=!1,Yt=!1,vt=!1,bt,k,A,R,Q;async function nn(t,e,n){var a,o;document.URL!==location.href&&(location.href=location.href),C=t,rt=Ae(t),L=document.documentElement,pt=e,ht=t.nodes[0],W=t.nodes[1],ht(),W(),k=(a=history.state)==null?void 0:a[$],A=(o=history.state)==null?void 0:o[F],k||(k=A=Date.now(),history.replaceState({...history.state,[$]:k,[F]:A},""));const r=x[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Xe(pt,n):Je(location.href,{replaceState:!0}),We()}function Jt(t){X.some(e=>e==null?void 0:e.snapshot)&&(G[t]=X.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Wt(t){var e;(e=G[t])==null||e.forEach((n,r)=>{var a,o;(o=(a=X[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function xt(){yt(k),It(Vt,x),Jt(A),It(Ct,G)}async function Xt(t,e,n,r){return K({type:"goto",url:Ft(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(vt=!0)}})}async function Be(t){return P={id:t.id,promise:Qt(t).then(e=>(e.type==="loaded"&&e.state.error&&(P=null),e))},P.promise}async function ut(t){const e=rt.find(n=>n.exec(te(t)));e&&await Promise.all([...e.layouts,e.leaf].map(n=>n==null?void 0:n[1]()))}function Zt(t,e){var a;w=t.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),R=t.props.page,bt=new C.root({target:e,props:{...t.props,stores:T,components:X},hydrate:!0}),Wt(A);const r={from:null,to:{params:w.params,route:{id:((a=w.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(o=>o(r)),Z=!0}async function tt({url:t,params:e,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(I&&(t.pathname===I||t.pathname===I+"/"))s="always";else for(const d of n)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);t.pathname=ce(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:o},props:{constructors:Ve(n).map(d=>d.node.component),page:R}};i!==void 0&&(c.props.form=i);let l={},u=!R,h=0;for(let d=0;d<Math.max(n.length,w.branch.length);d+=1){const m=n[d],f=w.branch[d];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!w.url||t.href!==w.url.href||w.error!==a||i!==void 0&&i!==R.form||u)&&(c.props.page={error:a,params:e,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:u?l:R.data}),c}async function Et({loader:t,parent:e,url:n,params:r,route:a,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const _ of f){const{href:v}=new URL(_,n);c.dependencies.add(v)}};const m={route:new Proxy(a,{get:(f,_)=>(s&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(s&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:de(n,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,_){let v;f instanceof Request?(v=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):v=f;const S=new URL(v,n);return s&&d(S.href),S.origin===n.origin&&(v=S.href.slice(n.origin.length)),Z?we(v,S.href,_):ye(v,_)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),e()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Nt(t,e,n,r,a,o){if(vt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==w.params[i])return!0;for(const i of a.dependencies)if(Kt.some(s=>s(new URL(i))))return!0;return!1}function kt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function Ke(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),o=e.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}async function Qt({id:t,invalidating:e,url:n,params:r,route:a}){if((P==null?void 0:P.id)===t)return P.promise;const{errors:o,layouts:i,leaf:s}=a,c=[...i,s];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let l=null;const u=w.url?t!==w.url.pathname+w.url.search:!1,h=w.route?a.id!==w.route.id:!1,g=Ke(w.url,n);let d=!1;const m=c.map((p,y)=>{var U;const b=w.branch[y],E=!!(p!=null&&p[0])&&((b==null?void 0:b.loader)!==p[1]||Nt(d,h,u,g,(U=b.server)==null?void 0:U.uses,r));return E&&(d=!0),E});if(m.some(Boolean)){try{l=await ae(n,m)}catch(p){return ot({status:J(p),error:await H(p,{url:n,params:r,route:{id:a.id}}),url:n,route:a})}if(l.type==="redirect")return l}const f=l==null?void 0:l.nodes;let _=!1;const v=c.map(async(p,y)=>{var st;if(!p)return;const b=w.branch[y],E=f==null?void 0:f[y];if((!E||E.type==="skip")&&p[1]===(b==null?void 0:b.loader)&&!Nt(_,h,u,g,(st=b.universal)==null?void 0:st.uses,r))return b;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return Et({loader:p[1],url:n,params:r,route:a,parent:async()=>{var Rt;const At={};for(let it=0;it<y;it+=1)Object.assign(At,(Rt=await v[it])==null?void 0:Rt.data);return At},server_data_node:kt(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?b==null?void 0:b.server:void 0)})});for(const p of v)p.catch(()=>{});const S=[];for(let p=0;p<c.length;p+=1)if(c[p])try{S.push(await v[p])}catch(y){if(y instanceof Bt)return{type:"redirect",location:y.location};let b=J(y),E;if(f!=null&&f.includes(y))b=y.status??b,E=y.error;else if(y instanceof at)E=y.body;else{if(await T.updated.check())return await D(n);E=await H(y,{params:r,url:n,route:{id:a.id}})}const U=await ze(p,S,o);return U?await tt({url:n,params:r,branch:S.slice(0,U.idx).concat(U.node),status:b,error:E,route:a}):await ne(n,{id:a.id},E,b)}else S.push(void 0);return await tt({url:n,params:r,branch:S,status:200,error:null,route:a,form:e?void 0:null})}async function ze(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function ot({status:t,error:e,url:n,route:r}){const a={};let o=null;if(C.server_loads[0]===0)try{const l=await ae(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==B||n.pathname!==location.pathname||wt)&&await D(n)}const s=await Et({loader:ht,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:kt(o)}),c={node:await W(),loader:W,universal:null,server:null,data:null};return await tt({url:n,params:a,branch:[s,c],status:t,error:e,route:null})}function St(t,e){if(!t||nt(t,I))return;let n;try{n=C.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=te(n);for(const a of rt){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:e,route:a,params:fe(o),url:t}}}function te(t){return le(t.slice(I.length)||"/")}function ee({url:t,type:e,intent:n,delta:r}){let a=!1;const o=oe(w,n,t,e);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return M||zt.forEach(s=>s(i)),a?null:o}async function K({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Tt,block:u=Tt}){const h=St(e,!1),g=ee({url:e,type:t,delta:n==null?void 0:n.delta,intent:h});if(!g){u();return}const d=k,m=A;l(),M=!0,Z&&T.navigating.set(g.navigation),Q=c;let f=h&&await Qt(h);if(!f){if(nt(e,I))return await D(e);f=await ne(e,{id:null},await H(new _t(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(h==null?void 0:h.url)||e,Q!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await ot({status:500,error:await H(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return Xt(new URL(f.location,e).href,{},s+1,c),!1;else f.props.page.status>=400&&await T.updated.check()&&await D(e);if(Kt.length=0,vt=!1,yt(d),Jt(m),f.props.page.url.pathname!==e.pathname&&(e.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const p=o?0:1,y={[$]:k+=p,[F]:A+=p,[qt]:i};(o?history.replaceState:history.pushState).call(history,y,"",e),o||Me(k,A)}if(P=null,f.props.page.state=i,Z){w=f.state,f.props.page&&(f.props.page.url=e);const p=(await Promise.all(He.map(y=>y(g.navigation)))).filter(y=>typeof y=="function");if(p.length>0){let y=function(){j=j.filter(b=>!p.includes(b))};p.push(y),j.push(...p)}bt.$set(f.props),Yt=!0}else Zt(f,pt);const{activeElement:_}=document;await ie();const v=n?n.scroll:a?mt():null;if(Ut){const p=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));v?scrollTo(v.x,v.y):p?p.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==_&&document.activeElement!==document.body;!r&&!S&&Ze(),Ut=!0,f.props.page&&(R=f.props.page),M=!1,t==="popstate"&&Wt(A),g.fulfil(void 0),j.forEach(p=>p(g.navigation)),T.navigating.set(null)}async function ne(t,e,n,r){return t.origin===B&&t.pathname===location.pathname&&!wt?await ot({status:r,error:n,url:t,route:e}):await D(t)}function Ye(){let t;L.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(o){r(o.composedPath()[0],1)}L.addEventListener("mousedown",e),L.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(ut(i.target.href),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=Mt(o,L);if(!s)return;const{url:c,external:l,download:u}=dt(s,I);if(l||u)return;const h=Y(s);if(!h.reload)if(i<=h.preload_data){const g=St(c,!1);g&&Be(g)}else i<=h.preload_code&&ut(c.pathname)}function a(){n.disconnect();for(const o of L.querySelectorAll("a")){const{url:i,external:s,download:c}=dt(o,I);if(s||c)continue;const l=Y(o);l.reload||(l.preload_code===z.viewport&&n.observe(o),l.preload_code===z.eager&&ut(i.pathname))}}j.push(a),a()}function H(t,e){if(t instanceof at)return t.body;const n=J(t),r=Ge(t);return C.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function Je(t,e={}){return t=Ft(t),t.origin!==B?Promise.reject(new Error("goto: invalid URL")):Xt(t,e,0)}function We(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(xt(),!M){const a=oe(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};zt.forEach(i=>i(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&xt()}),(e=navigator.connection)!=null&&e.saveData||Ye(),L.addEventListener("click",n=>{var g;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=Mt(n.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:i,download:s}=dt(r,I);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Y(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){ee({url:a,type:"link"})?M=!0:n.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===lt(location)){const[,d]=w.url.href.split("#");if(d===h){n.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(V=!0,yt(k),t(a),!c.replace_state)return;V=!1}n.preventDefault(),K({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(nt(i,I))return;const s=n.target,c=Y(s);if(c.reload)return;n.preventDefault(),n.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),K({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[$]){const a=n.state[$];if(Q={},a===k)return;const o=x[a],i=n.state[qt]??{},s=new URL(n.state[Pe]??location.href),c=n.state[F],l=lt(location)===lt(w.url);if(c===A&&(Yt||l)){t(s),x[k]=mt(),o&&scrollTo(o.x,o.y),i!==R.state&&(R={...R,state:i},bt.$set({page:R})),k=a;return}const h=a-k;await K({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{k=a,A=c},block:()=>{history.go(-h)},nav_token:Q})}else if(!V){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[$]:++k,[F]:A},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&T.navigating.set(null)});function t(n){w.url=n,T.page.set({...R,url:n}),T.page.notify()}}async function Xe(t,{status:e=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){wt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=St(c,!1)||{});let l;try{const u=r.map(async(d,m)=>{const f=i[m];return f!=null&&f.uses&&(f.uses=re(f.uses)),Et({loader:C.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let v=0;v<m;v+=1)Object.assign(_,(await u[v]).data);return _},server_data_node:kt(f)})}),h=await Promise.all(u),g=rt.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let m=0;m<d.length;m++)d[m]||h.splice(m,0,void 0)}l=await tt({url:c,params:a,branch:h,status:e,error:n,form:s,route:g??null})}catch(u){if(u instanceof Bt){await D(new URL(u.location,location.href));return}l=await ot({status:J(u),error:await H(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),Zt(l,t)}async function ae(t,e){var a;const n=new URL(t);n.pathname=ge(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(Fe,"1"),n.searchParams.append(qe,e.map(o=>o?"1":"0").join(""));const r=await $t(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new at(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(g){return De(g,{Promise:d=>new Promise((m,f)=>{i.set(d,{fulfil:m,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const m=u.indexOf(`
`);if(m===-1)break;const f=JSON.parse(u.slice(0,m));if(u=u.slice(m+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=re(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:v,error:S}=f,p=i.get(_);i.delete(_),S?p.reject(l(S)):p.fulfil(l(v))}}}})}function re(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Ze(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function oe(t,e,n,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:o}}export{Je as a,nn as b,en as g,tn as r,T as s,et as w};
