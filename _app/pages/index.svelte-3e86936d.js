import{S as R,i as O,s as B,e as b,t as p,k as M,c as h,a as _,g,d as f,n as I,b as i,f as E,G as d,h as X,E as S,O as Y,P as Z,j as L,m as P,o as z,x as N,u as U,v as W}from"../chunks/vendor-98287fb1.js";import"../chunks/stores-450b2fab.js";import{S as tt}from"../chunks/types-5217267d.js";function et(u){let t,a,e,s,m,o;return{c(){t=b("article"),a=b("div"),e=b("h4"),s=p("Time before launch"),m=M(),o=p(u[0]),this.h()},l(n){t=h(n,"ARTICLE",{class:!0});var l=_(t);a=h(l,"DIV",{class:!0});var r=_(a);e=h(r,"H4",{class:!0});var c=_(e);s=g(c,"Time before launch"),c.forEach(f),m=I(r),o=g(r,u[0]),r.forEach(f),l.forEach(f),this.h()},h(){i(e,"class","d-flex"),i(a,"class","card p-4 d-flex flex-column align-items-center svelte-qn5zf4"),i(t,"class","d-flex justify-content-center align-items-center svelte-qn5zf4")},m(n,l){E(n,t,l),d(t,a),d(a,e),d(e,s),d(a,m),d(a,o)},p(n,[l]){l&1&&X(o,n[0])},i:S,o:S,d(n){n&&f(t)}}}function at(u,t,a){let e;const s=n=>{let l=n,r="";if(l/(3600*24)>1){const c=Math.floor(l/(3600*24));l=l-3600*24*c,r=+c+" days"}if(l/3600){const c=Math.floor(l/3600);l-=3600*c,r+=(r.length===0?"":", ")+c+" hours"}if(l/60){const c=Math.floor(l/60);l-=60*c,r+=(r.length===0?"":", ")+c+" minutes"}return r+=(r.length===0?"":", ")+l+" seconds",r};let m=Math.floor((new Date(2022,3,4,18,0)-new Date)/1e3);const o=setInterval(()=>{a(1,m-=1)},1e3);return Y(()=>clearInterval(o)),u.$$.update=()=>{u.$$.dirty&2&&a(0,e=s(m)),u.$$.dirty&2&&m<=0&&clearInterval(o)},[e,m]}class lt extends R{constructor(t){super();O(this,t,at,et,B,{})}}function nt(u){let t,a,e,s,m,o,n,l;return{c(){t=b("h6"),a=p("Success"),e=M(),s=b("div"),m=p(`See your token on 
                        `),o=b("a"),n=p("Collection"),l=p(`
                        Page`),this.h()},l(r){t=h(r,"H6",{});var c=_(t);a=g(c,"Success"),c.forEach(f),e=I(r),s=h(r,"DIV",{});var y=_(s);m=g(y,`See your token on 
                        `),o=h(y,"A",{href:!0});var x=_(o);n=g(x,"Collection"),x.forEach(f),l=g(y,`
                        Page`),y.forEach(f),this.h()},h(){i(o,"href","/collection")},m(r,c){E(r,t,c),d(t,a),E(r,e,c),E(r,s,c),d(s,m),d(s,o),d(o,n),d(s,l)},p:S,d(r){r&&f(t),r&&f(e),r&&f(s)}}}function rt(u){let t;return{c(){t=p(u[0])},l(a){t=g(a,u[0])},m(a,e){E(a,t,e)},p(a,e){e&1&&X(t,a[0])},d(a){a&&f(t)}}}function st(u){let t,a,e,s;function m(l,r){return l[0].length?rt:nt}let o=m(u),n=o(u);return{c(){t=b("div"),a=b("div"),e=b("div"),s=b("div"),n.c(),this.h()},l(l){t=h(l,"DIV",{class:!0,id:!0,"data-bs-keyboard":!0,tabindex:!0,"aria-labelledby":!0,"aria-hidden":!0});var r=_(t);a=h(r,"DIV",{class:!0});var c=_(a);e=h(c,"DIV",{class:!0});var y=_(e);s=h(y,"DIV",{class:!0});var x=_(s);n.l(x),x.forEach(f),y.forEach(f),c.forEach(f),r.forEach(f),this.h()},h(){i(s,"class","modal-body d-flex flex-column justify-content-center align-items-center"),i(e,"class","modal-content "),i(a,"class","modal-dialog modal-dialog-centered"),i(t,"class","modal fade"),i(t,"id","mintDialog"),i(t,"data-bs-keyboard","false"),i(t,"tabindex","-2"),i(t,"aria-labelledby","mintDialogLabel"),i(t,"aria-hidden","true")},m(l,r){E(l,t,r),d(t,a),d(a,e),d(e,s),n.m(s,null),u[2](t)},p(l,[r]){o===(o=m(l))&&n?n.p(l,r):(n.d(1),n=o(l),n&&(n.c(),n.m(s,null)))},i:S,o:S,d(l){l&&f(t),n.d(),u[2](null)}}}function ot(u,t,a){let e,{error:s=""}=t,m;Y(()=>{e&&e.hide()});function o(n){Z[n?"unshift":"push"](()=>{m=n,a(1,m)})}return u.$$set=n=>{"error"in n&&a(0,s=n.error)},u.$$.update=()=>{u.$$.dirty&2&&(e=m?new bootstrap.Modal(m):null)},[s,m,o]}class it extends R{constructor(t){super();O(this,t,ot,st,B,{error:0})}}function ct(u){let t,a,e,s,m,o,n,l,r,c,y,x,$,q,A,k,H,C,T,V;return T=new it({}),{c(){t=b("article"),a=b("div"),e=b("h6"),s=p("Whitelisted (-10%)"),m=M(),o=b("div"),n=b("button"),l=p("Mint 1"),r=M(),c=b("button"),y=p("Mint 3"),x=M(),$=b("button"),q=p("Mint 5"),A=M(),k=b("button"),H=p("Mint 10"),C=M(),L(T.$$.fragment),this.h()},l(v){t=h(v,"ARTICLE",{class:!0});var w=_(t);a=h(w,"DIV",{class:!0});var j=_(a);e=h(j,"H6",{});var G=_(e);s=g(G,"Whitelisted (-10%)"),G.forEach(f),m=I(j),o=h(j,"DIV",{class:!0});var D=_(o);n=h(D,"BUTTON",{type:!0,class:!0,"data-bs-toggle":!0,"data-bs-placement":!0,title:!0});var F=_(n);l=g(F,"Mint 1"),F.forEach(f),r=I(D),c=h(D,"BUTTON",{type:!0,class:!0,"data-bs-toggle":!0,"data-bs-placement":!0,title:!0});var J=_(c);y=g(J,"Mint 3"),J.forEach(f),x=I(D),$=h(D,"BUTTON",{type:!0,class:!0,"data-bs-toggle":!0,"data-bs-placement":!0,title:!0});var K=_($);q=g(K,"Mint 5"),K.forEach(f),A=I(D),k=h(D,"BUTTON",{type:!0,class:!0,"data-bs-toggle":!0,"data-bs-placement":!0,title:!0});var Q=_(k);H=g(Q,"Mint 10"),Q.forEach(f),D.forEach(f),j.forEach(f),w.forEach(f),C=I(v),P(T.$$.fragment,v),this.h()},h(){i(n,"type","button"),i(n,"class","col-5 btn btn-dark"),i(n,"data-bs-toggle","tooltip"),i(n,"data-bs-placement","bottom"),i(n,"title","24 sSCRT"),i(c,"type","button"),i(c,"class","col-5 btn btn-dark"),i(c,"data-bs-toggle","tooltip"),i(c,"data-bs-placement","bottom"),i(c,"title","36 sSCRT"),i($,"type","button"),i($,"class","col-5 btn btn-dark"),i($,"data-bs-toggle","tooltip"),i($,"data-bs-placement","bottom"),i($,"title","49 sSCRT"),i(k,"type","button"),i(k,"class","col-5 btn btn-dark"),i(k,"data-bs-toggle","tooltip"),i(k,"data-bs-placement","bottom"),i(k,"title","52 sSCRT"),i(o,"class","row d-flex gap-2 align-items-center justify-content-center"),i(a,"class","card p-1 py-3 d-flex flex-column align-items-center gap-2 svelte-1c7ugxo"),i(t,"class","d-flex justify-content-center align-items-center m-3 svelte-1c7ugxo")},m(v,w){E(v,t,w),d(t,a),d(a,e),d(e,s),d(a,m),d(a,o),d(o,n),d(n,l),d(o,r),d(o,c),d(c,y),d(o,x),d(o,$),d($,q),d(o,A),d(o,k),d(k,H),E(v,C,w),z(T,v,w),V=!0},p:S,i(v){V||(N(T.$$.fragment,v),V=!0)},o(v){U(T.$$.fragment,v),V=!1},d(v){v&&f(t),v&&f(C),W(T,v)}}}function ut(u){return tt.Ready,[]}class dt extends R{constructor(t){super();O(this,t,ut,ct,B,{})}}function ft(u){let t,a;return t=new dt({}),{c(){L(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,s){z(t,e,s),a=!0},i(e){a||(N(t.$$.fragment,e),a=!0)},o(e){U(t.$$.fragment,e),a=!1},d(e){W(t,e)}}}function mt(u){let t,a;return t=new lt({}),{c(){L(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,s){z(t,e,s),a=!0},i(e){a||(N(t.$$.fragment,e),a=!0)},o(e){U(t.$$.fragment,e),a=!1},d(e){W(t,e)}}}function bt(u){let t,a,e,s;const m=[mt,ft],o=[];function n(l,r){return new Date<new Date(2022,3,4)?0:1}return a=n(),e=o[a]=m[a](u),{c(){t=b("div"),e.c(),this.h()},l(l){t=h(l,"DIV",{class:!0});var r=_(t);e.l(r),r.forEach(f),this.h()},h(){i(t,"class","container svelte-skx6nw")},m(l,r){E(l,t,r),o[a].m(t,null),s=!0},p:S,i(l){s||(N(e),s=!0)},o(l){U(e),s=!1},d(l){l&&f(t),o[a].d()}}}class pt extends R{constructor(t){super();O(this,t,null,bt,B,{})}}export{pt as default};