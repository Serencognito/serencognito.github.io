import{c as r,u as l,g as u,i as _,a as p}from"./runtime.ccL_vF5I.js";function g(n){if(r===null)throw new Error("onMount can only be used during component initialisation.");r.r?l(()=>{const t=p(n);if(typeof t=="function")return t}):v(r).m.push(n)}function b(n){return u().get(n)}function h(n,t){return u().set(n,t),t}function m(n,t,{bubbles:e=!1,cancelable:a=!1}={}){return new CustomEvent(n,{detail:t,bubbles:e,cancelable:a})}function w(){const n=r;if(n===null)throw new Error("createEventDispatcher can only be used during component initialisation.");return(t,e,a)=>{var c;const o=(c=n.s.$$events)==null?void 0:c[t];if(o){const i=_(o)?o.slice():[o],s=m(t,e,a);for(const f of i)f.call(n.a,s);return!s.defaultPrevented}return!0}}function v(n){return n.u??(n.u={a:[],b:[],m:[]})}export{w as c,b as g,g as o,h as s};