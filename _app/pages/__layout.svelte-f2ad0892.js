import{S as q,i as B,s as L,e as y,c as M,b as u,D as G,f as w,E as A,d as g,F as K,k as z,a as E,n as I,G as k,H as S,I as W,t as T,j as X,g as C,m as Y,o as Z,J as tt,K as et,L as lt,x as O,u as R,v as st,A as at,M as rt}from"../chunks/vendor-98287fb1.js";import{w as D}from"../chunks/stores-450b2fab.js";function U(c,t,r){const s=c.slice();return s[0]=t[r],s[2]=r,s}function V(c,t,r){const s=c.slice();return s[0]=t[r],s[2]=r,s}function F(c,t,r){const s=c.slice();return s[0]=t[r],s[2]=r,s}function J(c){let t,r,s;return{c(){t=y("img"),this.h()},l(o){t=M(o,"IMG",{class:!0,style:!0,src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){u(t,"class","bubble svelte-1iczzom"),u(t,"style",r=`--delay: ${c[2]*3+Math.floor(Math.random()*15)}s;
        --w: ${Math.floor(Math.random()*5)}vw;
        --x: ${Math.random()*95}vw;
    `),G(t.src,s="bubble.svg")||u(t,"src",s),u(t,"alt","bubble"),u(t,"width","50"),u(t,"height","50")},m(o,a){w(o,t,a)},p:A,d(o){o&&g(t)}}}function P(c){let t,r,s,o;return{c(){t=y("img"),this.h()},l(a){t=M(a,"IMG",{class:!0,style:!0,src:!0,alt:!0,width:!0}),this.h()},h(){u(t,"class",r=""+(K("fish "+(Math.random()<.5?"left":"right"))+" svelte-1iczzom")),u(t,"style",s=`--delay: ${c[2]*3+Math.floor(Math.random()*15)}s;
        --w: ${50+Math.floor(Math.random()*50)}px;
        --y: ${5+Math.random()*90}vh;
    `),G(t.src,o="fish.svg")||u(t,"src",o),u(t,"alt","fish"),u(t,"width","50")},m(a,_){w(a,t,_)},p:A,d(a){a&&g(t)}}}function Q(c){let t,r,s,o;return{c(){t=y("img"),this.h()},l(a){t=M(a,"IMG",{class:!0,style:!0,src:!0,alt:!0,width:!0}),this.h()},h(){u(t,"class",r=""+(K("shark "+(Math.random()<.5?"left":"right"))+" svelte-1iczzom")),u(t,"style",s=`--delay: ${5+c[2]*3+Math.floor(Math.random()*15)}s;
        --w: ${90+Math.floor(Math.random()*100)}px;
        --y: ${5+Math.random()*90}vh;
    `),G(t.src,o="shark.svg")||u(t,"src",o),u(t,"alt","fish"),u(t,"width","100")},m(a,_){w(a,t,_)},p:A,d(a){a&&g(t)}}}function nt(c){let t,r,s,o,a,_,v=Array(11),i=[];for(let l=0;l<v.length;l+=1)i[l]=J(F(c,v,l));let $=Array(7),f=[];for(let l=0;l<$.length;l+=1)f[l]=P(V(c,$,l));let p=Array(2),d=[];for(let l=0;l<p.length;l+=1)d[l]=Q(U(c,p,l));return{c(){t=y("article");for(let l=0;l<i.length;l+=1)i[l].c();r=z();for(let l=0;l<f.length;l+=1)f[l].c();s=z();for(let l=0;l<d.length;l+=1)d[l].c();o=z(),a=y("img"),this.h()},l(l){t=M(l,"ARTICLE",{class:!0});var h=E(t);for(let e=0;e<i.length;e+=1)i[e].l(h);r=I(h);for(let e=0;e<f.length;e+=1)f[e].l(h);s=I(h);for(let e=0;e<d.length;e+=1)d[e].l(h);o=I(h),a=M(h,"IMG",{class:!0,style:!0,src:!0,alt:!0,width:!0}),h.forEach(g),this.h()},h(){u(a,"class",""+(K("whale "+(Math.random()<.5?"left":"right"))+" svelte-1iczzom")),u(a,"style",`--delay: ${15+Math.floor(Math.random()*15)}s;
    --w: ${150+Math.floor(Math.random()*150)}px;
    --y: ${5+Math.random()*90}vh;
`),G(a.src,_="whale.svg")||u(a,"src",_),u(a,"alt","fish"),u(a,"width","100"),u(t,"class","water svelte-1iczzom")},m(l,h){w(l,t,h);for(let e=0;e<i.length;e+=1)i[e].m(t,null);k(t,r);for(let e=0;e<f.length;e+=1)f[e].m(t,null);k(t,s);for(let e=0;e<d.length;e+=1)d[e].m(t,null);k(t,o),k(t,a)},p(l,[h]){if(h&0){v=Array(11);let e;for(e=0;e<v.length;e+=1){const m=F(l,v,e);i[e]?i[e].p(m,h):(i[e]=J(m),i[e].c(),i[e].m(t,r))}for(;e<i.length;e+=1)i[e].d(1);i.length=v.length}if(h&0){$=Array(7);let e;for(e=0;e<$.length;e+=1){const m=V(l,$,e);f[e]?f[e].p(m,h):(f[e]=P(m),f[e].c(),f[e].m(t,s))}for(;e<f.length;e+=1)f[e].d(1);f.length=$.length}if(h&0){p=Array(2);let e;for(e=0;e<p.length;e+=1){const m=U(l,p,e);d[e]?d[e].p(m,h):(d[e]=Q(m),d[e].c(),d[e].m(t,o))}for(;e<d.length;e+=1)d[e].d(1);d.length=p.length}},i:A,o:A,d(l){l&&g(t),S(i,l),S(f,l),S(d,l)}}}class ct extends q{constructor(t){super();B(this,t,null,nt,L,{})}}function ot(c){const t=c.length;return t<10?c:c.substring(0,8)+"..."+c.substring(t-4,t)}function it(c){let t,r,s,o;return{c(){t=y("button"),r=T("Keplr Connect"),this.h()},l(a){t=M(a,"BUTTON",{class:!0});var _=E(t);r=C(_,"Keplr Connect"),_.forEach(g),this.h()},h(){u(t,"class","btn btn-dark")},m(a,_){w(a,t,_),k(t,r),s||(o=rt(t,"click",c[4]),s=!0)},p:A,d(a){a&&g(t),s=!1,o()}}}function ht(c){let t,r=ot(D.address)+"",s;return{c(){t=y("button"),s=T(r),this.h()},l(o){t=M(o,"BUTTON",{class:!0});var a=E(t);s=C(a,r),a.forEach(g),this.h()},h(){u(t,"class","btn btn-dark")},m(o,a){w(o,t,a),k(t,s)},p:A,d(o){o&&g(t)}}}function ut(c){let t,r,s,o,a,_,v,i,$,f,p;function d(n,b){return n[0]?ht:it}let l=d(c),h=l(c);const e=c[3].default,m=W(e,c,c[2],null);return f=new ct({}),{c(){t=y("header"),r=y("div"),s=y("a"),o=T("Secret Hunters"),a=z(),_=y("div"),h.c(),v=z(),i=y("main"),m&&m.c(),$=z(),X(f.$$.fragment),this.h()},l(n){t=M(n,"HEADER",{class:!0});var b=E(t);r=M(b,"DIV",{class:!0});var x=E(r);s=M(x,"A",{href:!0,class:!0});var H=E(s);o=C(H,"Secret Hunters"),H.forEach(g),a=I(x),_=M(x,"DIV",{});var j=E(_);h.l(j),j.forEach(g),x.forEach(g),b.forEach(g),v=I(n),i=M(n,"MAIN",{class:!0});var N=E(i);m&&m.l(N),N.forEach(g),$=I(n),Y(f.$$.fragment,n),this.h()},h(){u(s,"href","/"),u(s,"class","navbar-brand"),u(r,"class","container-fluid"),u(t,"class","navbar navbar-dark bg-dark svelte-uynmmd"),u(i,"class","container svelte-uynmmd")},m(n,b){w(n,t,b),k(t,r),k(r,s),k(s,o),k(r,a),k(r,_),h.m(_,null),w(n,v,b),w(n,i,b),m&&m.m(i,null),w(n,$,b),Z(f,n,b),p=!0},p(n,[b]){l===(l=d(n))&&h?h.p(n,b):(h.d(1),h=l(n),h&&(h.c(),h.m(_,null))),m&&m.p&&(!p||b&4)&&tt(m,e,n,n[2],p?lt(e,n[2],b,null):et(n[2]),null)},i(n){p||(O(m,n),O(f.$$.fragment,n),p=!0)},o(n){R(m,n),R(f.$$.fragment,n),p=!1},d(n){n&&g(t),h.d(),n&&g(v),n&&g(i),m&&m.d(n),n&&g($),st(f,n)}}}function ft(c,t,r){let{$$slots:s={},$$scope:o}=t,a;const _=()=>{D.setupKeplr().then(()=>r(0,a=D.connected)).catch(i=>{console.error(i)})};at(()=>{localStorage.getItem("connected")==="true"&&_()});const v=()=>_();return c.$$set=i=>{"$$scope"in i&&r(2,o=i.$$scope)},[a,_,o,s,v]}class dt extends q{constructor(t){super();B(this,t,ft,ut,L,{})}}export{dt as default};
