let e,t,n,l=!1,o=!1,s=!1,r=!1;const c="undefined"!=typeof window?window:{},i=c.CSS,a=c.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},f=(()=>(a.head.attachShadow+"").indexOf("[native")>-1)(),p=e=>Promise.resolve(e),$=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),d=new WeakMap,m=e=>"sc-"+e.o,b={},w=e=>"object"==(e=typeof e)||"function"===e,h=(e,t,...n)=>{let l=null,o=null,s=!1,r=!1,c=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!w(l))&&(l+=""),s&&r?c[c.length-1].s+=l:c.push(s?y(null,l):l),r=s)};if(i(n),t){t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const a=y(e,null);return a.u=t,c.length>0&&(a.p=c),a.$=o,a},y=(e,t)=>({t:0,h:e,s:t,_:null,p:null,u:null,$:null}),_={},k=(e,t,n,l,o,s)=>{if(n!==l){let i=ee(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,o=v(n),s=v(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if(i||"o"!==t[0]||"n"!==t[1]){const c=w(l);if((i||c&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(r){}null==l||!1===l?e.removeAttribute(t):(!i||4&s||o)&&!c&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):ee(c,a)?a.slice(2):a[2]+t.slice(3),n&&u.rel(e,t,n,!1),l&&u.ael(e,t,l,!1)}},j=/\s/,v=e=>e?e.split(j):[],g=(e,t,n,l)=>{const o=11===t._.nodeType&&t._.host?t._.host:t._,s=e&&e.u||b,r=t.u||b;for(l in s)l in r||k(o,l,s[l],void 0,n,t.t);for(l in r)k(o,l,s[l],r[l],n,t.t)},M=(o,r,c,i)=>{let u,f,p,$=r.p[c],d=0;if(l||(s=!0,"slot"===$.h&&(e&&i.classList.add(e+"-s"),$.t|=$.p?2:1)),null!==$.s)u=$._=a.createTextNode($.s);else if(1&$.t)u=$._=a.createTextNode("");else if(u=$._=a.createElement(2&$.t?"slot-fb":$.h),g(null,$,!1),null!=e&&u["s-si"]!==e&&u.classList.add(u["s-si"]=e),$.p)for(d=0;d<$.p.length;++d)f=M(o,$,d,u),f&&u.appendChild(f);return u["s-hn"]=n,3&$.t&&(u["s-sr"]=!0,u["s-cr"]=t,u["s-sn"]=$.$||"",p=o&&o.p&&o.p[c],p&&p.h===$.h&&o._&&R(o._,!1)),u},R=(e,t)=>{u.t|=1;const l=e.childNodes;for(let o=l.length-1;o>=0;o--){const e=l[o];e["s-hn"]!==n&&e["s-ol"]&&(C(e).insertBefore(e,O(e)),e["s-ol"].remove(),e["s-ol"]=void 0,s=!0),t&&R(e,t)}u.t&=-2},S=(e,t,l,o,s,r)=>{let c,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=M(null,l,s,e),c&&(o[s]._=c,i.insertBefore(c,O(t))))},U=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(o=!0,(s=l._)["s-ol"]?s["s-ol"].remove():R(s,!0),s.remove())},L=(e,t)=>e.h===t.h&&("slot"!==e.h||e.$===t.$),O=e=>e&&e["s-ol"]||e,C=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,P=(e,t)=>{const n=t._=e._,l=e.p,o=t.p,s=t.s;let r;null===s?("slot"===t.h||g(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,r=0,c=t.length-1,i=t[0],a=t[c],u=l.length-1,f=l[0],p=l[u];for(;s<=c&&r<=u;)null==i?i=t[++s]:null==a?a=t[--c]:null==f?f=l[++r]:null==p?p=l[--u]:L(i,f)?(P(i,f),i=t[++s],f=l[++r]):L(a,p)?(P(a,p),a=t[--c],p=l[--u]):L(i,p)?("slot"!==i.h&&"slot"!==p.h||R(i._.parentNode,!1),P(i,p),e.insertBefore(i._,a._.nextSibling),i=t[++s],p=l[--u]):L(a,f)?("slot"!==i.h&&"slot"!==p.h||R(a._.parentNode,!1),P(a,f),e.insertBefore(a._,i._),a=t[--c],f=l[++r]):(o=M(t&&t[r],n,r,e),f=l[++r],o&&C(i._).insertBefore(o,O(i._)));s>c?S(e,null==l[u+1]?null:l[u+1]._,n,l,r,u):r>u&&U(t,s,c)})(n,l,t,o):null!==o?(null!==e.s&&(n.textContent=""),S(n,null,t,o,0,o.length-1)):null!==l&&U(l,0,l.length-1)):(r=n["s-cr"])?r.parentNode.textContent=s:e.s!==s&&(n.data=s)},T=e=>{let t,n,l,o,s,r,c=e.childNodes;for(n=0,l=c.length;n<l;n++)if(t=c[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(c[o]["s-hn"]!==t["s-hn"])if(r=c[o].nodeType,""!==s){if(1===r&&s===c[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==c[o].textContent.trim()){t.hidden=!0;break}T(t)}},x=[],A=e=>{let t,n,l,s,r,c,i=0,a=e.childNodes,u=a.length;for(;i<u;i++){if(t=a[i],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,s=t["s-sn"],c=l.length-1;c>=0;c--)n=l[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(E(n,s)?(r=x.find(e=>e.k===n),o=!0,n["s-sn"]=n["s-sn"]||s,r?r.j=t:x.push({j:t,k:n}),n["s-sr"]&&x.map(e=>{E(e.k,n["s-sn"])&&(r=x.find(e=>e.k===n),r&&!e.j&&(e.j=r.j))})):x.some(e=>e.k===n)||x.push({k:n}));1===t.nodeType&&A(t)}},E=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,F=(e,t,n)=>{const l=(e=>X(e).v)(e);return{emit:e=>H(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},H=(e,t,n)=>{const l=new CustomEvent(t,n);return e.dispatchEvent(l),l},N=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.g=t))},W=(e,t)=>{if(e.t|=16,!(4&e.t))return N(e,e.M),fe(()=>q(e,t));e.t|=512},q=(e,t)=>{const n=e.R;return G(void 0,()=>B(e,n,t))},B=(r,c,i)=>{const p=r.v,$=p["s-rc"];i&&(e=>{const t=e.S,n=e.v,l=t.t,o=((e,t)=>{let n=m(t),l=oe.get(n);if(e=11===e.nodeType?e:a,l)if("string"==typeof l){let t,o=d.get(e=e.head||e);o||d.set(e,o=new Set),o.has(n)||(t=a.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(f&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(r),((r,c)=>{const i=r.v,p=r.S,$=r.U||y(null,null),d=(e=>e&&e.h===_)(c)?c:h(null,null,c);if(n=i.tagName,d.h=null,d.t|=4,r.U=d,d._=$._=i.shadowRoot||i,e=i["s-sc"],t=i["s-cr"],l=f&&0!=(1&p.t),o=!1,P($,d),u.t|=1,s){let e,t,n,l,o,s;A(d._);let r=0;for(;r<x.length;r++)e=x[r],t=e.k,t["s-ol"]||(n=a.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(r=0;r<x.length;r++)if(e=x[r],t=e.k,e.j){for(l=e.j.parentNode,o=e.j.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&T(d._),u.t&=-2,x.length=0})(r,V(r,c)),$&&($.map(e=>e()),p["s-rc"]=void 0);{const e=p["s-p"],t=()=>z(r);0===e.length?t():(Promise.all(e).then(t),r.t|=4,e.length=0)}},V=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(n){te(n)}return t},z=e=>{const t=e.v,n=e.M;64&e.t||(e.t|=64,I(t),e.L(t),n||D()),e.g&&(e.g(),e.g=void 0),512&e.t&&ue(()=>W(e,!1)),e.t&=-517},D=()=>{I(a.documentElement),ue(()=>H(c,"appload",{detail:{namespace:"stencilkurso"}}))},G=(e,t)=>e&&e.then?e.then(t):t(),I=e=>e.classList.add("hydrated"),J=(e,t,n)=>{if(t.O){const l=Object.entries(t.O),o=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>X(this).C.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=X(this),s=o.C.get(t),r=o.t,c=o.R;n=((e,t)=>null==e||w(e)?e:1&t?e+"":e)(n,l.O[t][0]),8&r&&void 0!==s||n===s||(o.C.set(t,n),c&&2==(18&r)&&W(o,!1))})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){u.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},K=(e,t={})=>{const n=[],l=t.exclude||[],o=c.customElements,s=a.head,r=s.querySelector("meta[charset]"),i=a.createElement("style"),p=[];let d,b=!0;Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",a.baseURI).href,e.map(e=>e[1].map(t=>{const s={t:t[0],o:t[1],O:t[2],P:t[3]};s.O=t[2],!f&&1&s.t&&(s.t|=8);const r=s.o,c=class extends HTMLElement{constructor(e){super(e),Z(e=this,s),1&s.t&&(f?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){d&&(clearTimeout(d),d=null),b?p.push(this):u.jmp(()=>(e=>{if(0==(1&u.t)){const t=X(e),n=t.S,l=()=>{};if(!(1&t.t)){t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=a.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){N(t,t.M=n);break}}n.O&&Object.entries(n.O).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),ue(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=le(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(J(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(c){te(c)}t.t&=-9,e()}const e=m(n);if(!oe.has(e)&&o.style){const t=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_stencilkurso("./p-8a8f7b57.js").then(t=>t.scopeCss(l,e,!1))),((e,t,n)=>{let l=oe.get(e);$&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,oe.set(e,l)})(e,l,!!(1&n.t)),t()}}const s=t.M,r=()=>W(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n))}l()}})(this))}disconnectedCallback(){u.jmp(()=>{})}forceUpdate(){(()=>{{const e=X(this);e.v.isConnected&&2==(18&e.t)&&W(e,!1)}})()}componentOnReady(){return X(this).T}};s.A=e[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,J(c,s,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),s.insertBefore(i,r?r.nextSibling:s.firstChild),b=!1,p.length?p.map(e=>e.connectedCallback()):u.jmp(()=>d=setTimeout(D,30))},Q=new WeakMap,X=e=>Q.get(e),Y=(e,t)=>Q.set(t.R=e,t),Z=(e,t)=>{const n={t:0,v:e,S:t,C:new Map};return n.T=new Promise(e=>n.L=e),e["s-p"]=[],e["s-rc"]=[],Q.set(e,n)},ee=(e,t)=>t in e,te=e=>console.error(e),ne=new Map,le=e=>{const t=e.o.replace(/-/g,"_"),n=e.A,l=ne.get(n);return l?l[t]:__sc_import_stencilkurso(`./${n}.entry.js`).then(e=>(ne.set(n,e),e[t]),te)},oe=new Map,se=[],re=[],ce=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&u.t?ue(ae):u.raf(ae))},ie=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){te(t)}e.length=0},ae=()=>{ie(se),ie(re),(r=se.length>0)&&u.raf(ae)},ue=e=>p().then(e),fe=ce(re,!0),pe=()=>i&&i.supports&&i.supports("color","var(--c)")?p():__sc_import_stencilkurso("./p-1b2d9a2e.js").then(()=>(u.F=c.__cssshim)?(!1).i():0),$e=()=>{u.F=c.__cssshim;const e=Array.from(a.querySelectorAll("script")).find(e=>/\/stencilkurso(\.esm)?\.js($|\?|#)/.test(e.src)||"stencilkurso"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,c.location.href)).href,de(t.resourcesUrl,e),c.customElements?p(t):__sc_import_stencilkurso("./p-2e1bb10c.js").then(()=>t))},de=(e,t)=>{try{c.__sc_import_stencilkurso=Function("w","return import(w);//"+Math.random())}catch(n){const l=new Map;c.__sc_import_stencilkurso=n=>{const o=new URL(n,e).href;let s=l.get(o);if(!s){const e=a.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.__sc_import_stencilkurso.m = m;`],{type:"application/javascript"})),s=new Promise(t=>{e.onload=()=>{t(c.__sc_import_stencilkurso.m),e.remove()}}),l.set(o,s),a.head.appendChild(e)}return s}}};export{_ as H,pe as a,K as b,F as c,h,$e as p,Y as r}