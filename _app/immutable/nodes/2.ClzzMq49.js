import{r as G,h as H,e as I,f as g,g as _,a as c,i as J,j as z,k as K,l as M,t as N,m as h,n as R,p as Q,q as C,u as O,c as L,s as i,o as P,b as B,d as f,v as T,w as U,x as V,y as W}from"../chunks/disclose-version.C_anvAsj.js";import{e as k,d as S,p as F,f as u,r as X,h as Y,j as Z}from"../chunks/runtime.DQCk18DS.js";import{e as b}from"../chunks/editors-list.svelte.B0v9KKgs.js";var $=J("<svg><!></svg>");function ee(s,e){const r=G(e,["children","$$slots","$$events"]);k(e,!1),S();var d=_(s,!0,$),o=c(d);H(o,()=>'<path fill="currentColor" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"/>',!0),I(d,()=>[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r],!1,""),g(s,d),F()}var te=f('<span class="group flex w-fit items-center justify-between gap-2 whitespace-nowrap" tabindex="0" role="menuitem"><!> <span class="break-inside-avoid text-nowrap"> </span> <button class="flex h-6 w-6 items-center justify-center rounded hover:bg-surface-400/25"><!></button></span>'),re=f('<li class="crumb hover:text-surface-800-100-token"> </li> <li class="crumb-separator" aria-hidden="">&rsaquo;</li>',!0),ae=f('<!> <li class="crumb hover:text-surface-800-100-token"> </li>',!0),ie=f('<section id="editor" class="p-3"><div id="openFiles" class="grid scroll-m-6 grid-flow-col gap-4 overflow-x-scroll scrollbar-none hover:scrollbar-thin"></div> <ol class="breadcrumb overflow-x-scroll whitespace-nowrap scrollbar-none hover:scrollbar-thin"><!></ol></section>');function se(s,e){k(e,!0);let r=Z(()=>b.activeEditor==e.editor);const d=a=>a===e.editor.activeFile;function o(a){e.editor.closeFile(a)}var l=_(s,!0,ie),v=c(l),y=i(i(v,!0)),E=c(y);z(v,()=>e.editor.openFiles,73,(a,t,p)=>{var n=_(a,!0,te),m=c(n),x=i(i(m,!0)),j=c(x),A=i(i(x,!0)),w=c(A);K(n,"text-teal-300",()=>d(u(t))),X(()=>{M(n,"opacity-50",!Y(r)),N(j,u(t).name)}),h("click",n,()=>e.editor.openFile(u(t)),!1),h("keypress",n,()=>e.editor.openFile(u(t)),!1),R(m,()=>u(t).icon,q=>{q(m,{get style(){return u(t).iconStyle}})}),h("click",A,Q(()=>o(u(t))),!1),ee(w,{class:"invisible h-5 w-5 group-hover:visible"}),g(a,n)},null),C(E,()=>e.editor.activeFile,a=>{var t=P(a,!0,ae),p=B(t),n=i(i(p,!0)),m=c(n);O(m,()=>e.editor.activeFile.name),z(p,()=>e.editor.activeFile.path||[],65,(x,j,A)=>{var w=P(x,!0,re),q=B(w),D=c(q);O(D,()=>u(j)),L(x,w)},null),L(a,t)},null),g(s,l),F()}var oe=f('<section id="editor-root" class="overflow-x-scroll" role="menu"><div class="cursor-pointer"><!></div> <!></section>');function le(s,e){k(e,!0);var r=_(s,!0,oe);T(r,"tabindex",0);var d=c(r),o=c(d),l=i(i(d,!0));h("click",r,()=>b.setActiveEditor(e.editor),!1),h("keydown",r,()=>b.setActiveEditor(e.editor),!1),se(o,{get editor(){return e.editor}}),R(l,()=>{var v;return(v=e.editor.activeFile)==null?void 0:v.component},v=>{v(l,{})}),g(s,r),F()}var ne=f('<div class="border-surface-500-400-token mr-4 border-l-[0.2px] border-opacity-15"></div>'),ce=f('<div class="flex"><!> <!></div>'),de=f('<section id="editors"></section>'),ve=f("<p>Open a file</p>");function _e(s,e){k(e,!1),S();var r=W(s),d=B(r);C(d,()=>b.editors.length>0,o=>{var l=_(o,!0,de);U(l,()=>`grid h-screen grid-cols-${V(b.editors.length)}`),z(l,()=>b.editors,9,(v,y,E)=>{var a=_(v,!0,ce),t=c(a),p=i(i(t,!0));C(t,()=>u(E)!=0,n=>{var m=_(n,!0,ne);g(n,m)},null),le(p,{get editor(){return u(y)}}),g(v,a)},null),g(o,l)},o=>{var l=_(o,!0,ve);g(o,l)}),L(s,r),F()}export{_e as component};