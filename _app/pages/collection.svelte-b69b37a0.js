import{S as J,i as Y,s as Z,e as g,k as S,c as k,a as b,d,n as j,b as h,f as E,G as I,x as C,t as N,g as T,M as R,E as V,Q as M,R as H,u as O,w as x,A as $,T as A,D as w,U,V as W,r as ee,W as te,X as z,l as B,H as le,h as se}from"../chunks/vendor-98287fb1.js";import{t as re,w as K}from"../chunks/stores-450b2fab.js";import{S as D}from"../chunks/types-5217267d.js";function P(n,e,t){const l=n.slice();return l[12]=e[t],l[14]=t,l}function ie(n){let e;function t(i,r){return i[0]===D.Error?ue:i[0]===D.NotConnected?ae:i[0]===D.Loading?oe:ce}let l=t(n),s=l(n);return{c(){e=g("div"),s.c(),this.h()},l(i){e=k(i,"DIV",{class:!0,style:!0});var r=b(e);s.l(r),r.forEach(d),this.h()},h(){h(e,"class","d-flex align-items-center justify-content-center"),z(e,"color","black"),z(e,"height","100px")},m(i,r){E(i,e,r),s.m(e,null)},p(i,r){l===(l=t(i))&&s?s.p(i,r):(s.d(1),s=l(i),s&&(s.c(),s.m(e,null)))},d(i){i&&d(e),s.d()}}}function ne(n){let e,t=n[3],l=[];for(let s=0;s<t.length;s+=1)l[s]=Q(P(n,t,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=B()},l(s){for(let i=0;i<l.length;i+=1)l[i].l(s);e=B()},m(s,i){for(let r=0;r<l.length;r+=1)l[r].m(s,i);E(s,e,i)},p(s,i){if(i&72){t=s[3];let r;for(r=0;r<t.length;r+=1){const a=P(s,t,r);l[r]?l[r].p(a,i):(l[r]=Q(a),l[r].c(),l[r].m(e.parentNode,e))}for(;r<l.length;r+=1)l[r].d(1);l.length=t.length}},d(s){le(l,s),s&&d(e)}}}function ce(n){let e;return{c(){e=N("No tokens")},l(t){e=T(t,"No tokens")},m(t,l){E(t,e,l)},p:V,d(t){t&&d(e)}}}function oe(n){let e;return{c(){e=N("Loading")},l(t){e=T(t,"Loading")},m(t,l){E(t,e,l)},p:V,d(t){t&&d(e)}}}function ae(n){let e;return{c(){e=N("Not Connected")},l(t){e=T(t,"Not Connected")},m(t,l){E(t,e,l)},p:V,d(t){t&&d(e)}}}function ue(n){let e,t;return{c(){e=g("span"),t=N(n[4]),this.h()},l(l){e=k(l,"SPAN",{class:!0});var s=b(e);t=T(s,n[4]),s.forEach(d),this.h()},h(){h(e,"class","color-warning")},m(l,s){E(l,e,s),I(e,t)},p(l,s){s&16&&se(t,l[4])},d(l){l&&d(e)}}}function Q(n){let e,t,l,s,i,r,a;function f(...c){return n[9](n[14],...c)}return{c(){e=g("div"),t=g("div"),l=g("img"),i=S(),this.h()},l(c){e=k(c,"DIV",{class:!0});var o=b(e);t=k(o,"DIV",{class:!0});var u=b(t);l=k(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(d),i=j(o),o.forEach(d),this.h()},h(){h(l,"class","card-img svelte-etxq59"),w(l.src,s=n[12].image)||h(l,"src",s),h(l,"alt","fish pic"),h(t,"class","card bg-dark text-white"),h(e,"class","card-wrapper mx-5 my-2 svelte-etxq59")},m(c,o){E(c,e,o),I(e,t),I(t,l),I(e,i),r||(a=R(l,"click",f),r=!0)},p(c,o){n=c,o&8&&!w(l.src,s=n[12].image)&&h(l,"src",s)},d(c){c&&d(e),r=!1,a()}}}function X(n){let e,t,l,s,i,r,a;function f(p,_){return p[1]?de:fe}let c=f(n),o=c(n),u=n[0]===D.Ready&&n[3].length>1&&F(n);return{c(){e=g("section"),t=g("div"),l=g("div"),s=g("div"),o.c(),i=S(),u&&u.c(),this.h()},l(p){e=k(p,"SECTION",{class:!0});var _=b(e);t=k(_,"DIV",{class:!0});var v=b(t);l=k(v,"DIV",{id:!0});var m=b(l);s=k(m,"DIV",{class:!0});var y=b(s);o.l(y),y.forEach(d),m.forEach(d),v.forEach(d),i=j(_),u&&u.l(_),_.forEach(d),this.h()},h(){h(s,"class","card rounded bg-dark text-white"),h(l,"id","eater"),h(t,"class","col-4 col-sm-3 col-md-2"),h(e,"class","row justify-content-around mt-5")},m(p,_){E(p,e,_),I(e,t),I(t,l),I(l,s),o.m(s,null),I(e,i),u&&u.m(e,null),a=!0},p(p,_){c===(c=f(p))&&o?o.p(p,_):(o.d(1),o=c(p),o&&(o.c(),C(o,1),o.m(s,null))),p[0]===D.Ready&&p[3].length>1?u?(u.p(p,_),_&9&&C(u,1)):(u=F(p),u.c(),C(u,1),u.m(e,null)):u&&(u.d(1),u=null)},i(p){a||(C(o),C(u),M(()=>{r||(r=H(e,A,{delay:100,duration:800},!0)),r.run(1)}),a=!0)},o(p){r||(r=H(e,A,{delay:100,duration:800},!1)),r.run(0),a=!1},d(p){p&&d(e),o.d(),u&&u.d(),p&&r&&r.end()}}}function fe(n){let e;return{c(){e=g("div"),this.h()},l(t){e=k(t,"DIV",{class:!0}),b(e).forEach(d),this.h()},h(){h(e,"class","empty-card svelte-etxq59")},m(t,l){E(t,e,l)},p:V,i:V,o:V,d(t){t&&d(e)}}}function de(n){let e,t,l,s,i;return{c(){e=g("img"),this.h()},l(r){e=k(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){h(e,"class","card-img svelte-etxq59"),w(e.src,t=n[1].image)||h(e,"src",t),h(e,"alt","eater pic"),U(e,"hunting",n[0]===D.Loading)},m(r,a){E(r,e,a),s||(i=R(e,"click",n[10]),s=!0)},p(r,a){a&2&&!w(e.src,t=r[1].image)&&h(e,"src",t),a&1&&U(e,"hunting",r[0]===D.Loading)},i(r){l||M(()=>{l=W(e,n[7],{}),l.start()})},o:V,d(r){r&&d(e),s=!1,i()}}}function F(n){let e,t,l,s,i,r,a,f,c,o;function u(v,m){return v[2]?he:_e}let p=u(n),_=p(n);return{c(){e=g("div"),t=g("button"),l=N("Hunt"),i=S(),r=g("div"),a=g("div"),f=g("div"),_.c(),this.h()},l(v){e=k(v,"DIV",{class:!0});var m=b(e);t=k(m,"BUTTON",{class:!0});var y=b(t);l=T(y,"Hunt"),y.forEach(d),m.forEach(d),i=j(v),r=k(v,"DIV",{class:!0});var q=b(r);a=k(q,"DIV",{id:!0});var L=b(a);f=k(L,"DIV",{class:!0});var G=b(f);_.l(G),G.forEach(d),L.forEach(d),q.forEach(d),this.h()},h(){h(t,"class","btn btn-dark"),t.disabled=s=!n[5],h(e,"class","col-1 d-flex justify-content-center align-items-end"),h(f,"class","card rounded bg-dark text-white"),h(a,"id","food"),h(r,"class","col-4 col-sm-3 col-md-2")},m(v,m){E(v,e,m),I(e,t),I(t,l),E(v,i,m),E(v,r,m),I(r,a),I(a,f),_.m(f,null),c||(o=R(t,"click",n[8]),c=!0)},p(v,m){m&32&&s!==(s=!v[5])&&(t.disabled=s),p===(p=u(v))&&_?_.p(v,m):(_.d(1),_=p(v),_&&(_.c(),C(_,1),_.m(f,null)))},i(v){C(_)},o:V,d(v){v&&d(e),v&&d(i),v&&d(r),_.d(),c=!1,o()}}}function _e(n){let e;return{c(){e=g("div"),this.h()},l(t){e=k(t,"DIV",{class:!0}),b(e).forEach(d),this.h()},h(){h(e,"class","empty-card svelte-etxq59")},m(t,l){E(t,e,l)},p:V,i:V,o:V,d(t){t&&d(e)}}}function he(n){let e,t,l,s,i;return{c(){e=g("img"),this.h()},l(r){e=k(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){h(e,"class","card-img"),w(e.src,t=n[2].image)||h(e,"src",t),h(e,"alt","food pic")},m(r,a){E(r,e,a),s||(i=R(e,"click",n[11]),s=!0)},p(r,a){a&4&&!w(e.src,t=r[2].image)&&h(e,"src",t)},i(r){l||M(()=>{l=W(e,n[7],{}),l.start()})},o:V,d(r){r&&d(e),s=!1,i()}}}function me(n){let e,t,l,s,i;function r(o,u){return o[3].length>0?ne:ie}let a=r(n),f=a(n),c=n[3]&&n[3].length>0&&X(n);return{c(){e=g("article"),t=g("section"),l=g("div"),f.c(),s=S(),c&&c.c(),this.h()},l(o){e=k(o,"ARTICLE",{class:!0});var u=b(e);t=k(u,"SECTION",{class:!0});var p=b(t);l=k(p,"DIV",{class:!0});var _=b(l);f.l(_),_.forEach(d),p.forEach(d),s=j(u),c&&c.l(u),u.forEach(d),this.h()},h(){h(l,"class","horizontal-scroll rounded my-2 svelte-etxq59"),h(t,"class","my-3"),h(e,"class","d-flex flex-column justify-content-center mt-3 mb-5")},m(o,u){E(o,e,u),I(e,t),I(t,l),f.m(l,null),I(e,s),c&&c.m(e,null),i=!0},p(o,[u]){a===(a=r(o))&&f?f.p(o,u):(f.d(1),f=a(o),f&&(f.c(),f.m(l,null))),o[3]&&o[3].length>0?c?(c.p(o,u),u&8&&C(c,1)):(c=X(o),c.c(),C(c,1),c.m(e,null)):c&&(ee(),O(c,1,1,()=>{c=null}),x())},i(o){i||(C(c),i=!0)},o(o){O(c),i=!1},d(o){o&&d(e),f.d(),c&&c.d()}}}function pe(n,e,t){let l,s=[],i=D.NotConnected,r="";$(async()=>{try{await re(()=>!K.connected,"Couldn't find Keplr",3e3)}catch(m){t(0,i=D.Error),t(4,r=m.message),console.error(m);return}t(0,i=D.Loading),K.getTokens().then(m=>{t(3,s=m),t(0,i=D.Ready)})});let a=null,f=null;const c=(m,y)=>{a===s[y]?t(1,a=null):f===s[y]?t(2,f=null):a===null?t(1,a=s[y]):s.length>1&&f===null&&t(2,f=s[y])};function o(m,y){const q=getComputedStyle(m).transform.replace("none","");return{delay:y.delay||30,duration:y.duration||400,easing:y.easing||te,css:L=>`transform: ${q} scale(${L})`}}const u=()=>{t(0,i=D.Loading),setTimeout(()=>{t(3,s=s.filter(m=>m.id!==f.id)),t(2,f=null),t(0,i=D.Ready)},6e3)},p=(m,y)=>c(y,m),_=m=>c(m,a.id),v=m=>c(m,f.id);return n.$$.update=()=>{n.$$.dirty&7&&t(5,l=a&&f&&a.level>=f.level&&i===D.Ready)},[i,a,f,s,r,l,c,o,u,p,_,v]}class be extends J{constructor(e){super();Y(this,e,pe,me,Z,{})}}export{be as default};
