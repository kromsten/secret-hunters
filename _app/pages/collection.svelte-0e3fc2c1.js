import{S as me,i as fe,s as ge,e as p,k as G,c as v,a as I,d as r,n as Y,b as c,D as S,f as x,G as g,M as J,t as ie,g as se,x as z,E as T,H as he,A as _e,Q as pe,R as ae,T as ne}from"../chunks/vendor-7a029297.js";import{w as ce,d as oe}from"../chunks/utils-eebc9ffc.js";var N;(function(l){l[l.Loading=0]="Loading",l[l.Decrypting=1]="Decrypting",l[l.Ready=2]="Ready",l[l.Error=3]="Error",l[l.Minting=4]="Minting",l[l.Minted=5]="Minted",l[l.Updating=6]="Updating"})(N||(N={}));function re(l,e,t){const i=l.slice();return i[18]=e[t],i[20]=t,i}function de(l){let e,t,i,u,k,s,o;function D(...d){return l[5](l[20],...d)}return{c(){e=p("div"),t=p("div"),i=p("img"),k=G(),this.h()},l(d){e=v(d,"DIV",{class:!0});var h=I(e);t=v(h,"DIV",{class:!0});var b=I(t);i=v(b,"IMG",{class:!0,src:!0,alt:!0}),b.forEach(r),k=Y(h),h.forEach(r),this.h()},h(){c(i,"class","card-img svelte-1xyk41y"),S(i.src,u=l[18].image)||c(i,"src",u),c(i,"alt","fish pic"),c(t,"class","card bg-dark text-white"),c(e,"class","card-wrapper mx-5 my-2 svelte-1xyk41y")},m(d,h){x(d,e,h),g(e,t),g(t,i),g(e,k),s||(o=J(i,"click",D),s=!0)},p(d,h){l=d},d(d){d&&r(e),s=!1,o()}}}function ve(l){let e;return{c(){e=p("div"),this.h()},l(t){e=v(t,"DIV",{class:!0}),I(e).forEach(r),this.h()},h(){c(e,"class","empty-card svelte-1xyk41y")},m(t,i){x(t,e,i)},p:T,i:T,o:T,d(t){t&&r(e)}}}function ye(l){let e,t,i,u,k;return{c(){e=p("img"),this.h()},l(s){e=v(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){c(e,"class","card-img"),S(e.src,t=l[0].image)||c(e,"src",t),c(e,"alt","eater pic")},m(s,o){x(s,e,o),u||(k=J(e,"click",l[6]),u=!0)},p(s,o){o&1&&!S(e.src,t=s[0].image)&&c(e,"src",t)},i(s){i||ae(()=>{i=ne(e,l[4],{}),i.start()})},o:T,d(s){s&&r(e),u=!1,k()}}}function ke(l){let e;return{c(){e=p("div"),this.h()},l(t){e=v(t,"DIV",{class:!0}),I(e).forEach(r),this.h()},h(){c(e,"class","empty-card svelte-1xyk41y")},m(t,i){x(t,e,i)},p:T,i:T,o:T,d(t){t&&r(e)}}}function be(l){let e,t,i,u,k;return{c(){e=p("img"),this.h()},l(s){e=v(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){c(e,"class","card-img"),S(e.src,t=l[1].image)||c(e,"src",t),c(e,"alt","food pic")},m(s,o){x(s,e,o),u||(k=J(e,"click",l[7]),u=!0)},p(s,o){o&2&&!S(e.src,t=s[1].image)&&c(e,"src",t)},i(s){i||ae(()=>{i=ne(e,l[4],{}),i.start()})},o:T,d(s){s&&r(e),u=!1,k()}}}function Ee(l){let e,t,i,u,k,s,o,D,d,h,b,O,M,V,B,q,R,C,m,_=l[2],n=[];for(let a=0;a<_.length;a+=1)n[a]=de(re(l,_,a));function j(a,w){return a[0]?ye:ve}let F=j(l),y=F(l);function A(a,w){return a[1]?be:ke}let X=A(l),E=X(l);return{c(){e=p("article"),t=p("section"),i=p("h5"),u=ie("My Fishes"),k=G(),s=p("div");for(let a=0;a<n.length;a+=1)n[a].c();o=G(),D=p("section"),d=p("div"),h=p("div"),b=p("div"),y.c(),O=G(),M=p("div"),V=p("button"),B=ie("Eat"),q=G(),R=p("div"),C=p("div"),m=p("div"),E.c(),this.h()},l(a){e=v(a,"ARTICLE",{class:!0});var w=I(e);t=v(w,"SECTION",{});var f=I(t);i=v(f,"H5",{class:!0});var U=I(i);u=se(U,"My Fishes"),U.forEach(r),k=Y(f),s=v(f,"DIV",{class:!0});var W=I(s);for(let H=0;H<n.length;H+=1)n[H].l(W);W.forEach(r),f.forEach(r),o=Y(w),D=v(w,"SECTION",{class:!0});var L=I(D);d=v(L,"DIV",{class:!0});var P=I(d);h=v(P,"DIV",{id:!0});var Q=I(h);b=v(Q,"DIV",{class:!0});var Z=I(b);y.l(Z),Z.forEach(r),Q.forEach(r),P.forEach(r),O=Y(L),M=v(L,"DIV",{class:!0});var K=I(M);V=v(K,"BUTTON",{class:!0});var $=I(V);B=se($,"Eat"),$.forEach(r),K.forEach(r),q=Y(L),R=v(L,"DIV",{class:!0});var ee=I(R);C=v(ee,"DIV",{id:!0});var te=I(C);m=v(te,"DIV",{class:!0});var le=I(m);E.l(le),le.forEach(r),te.forEach(r),ee.forEach(r),L.forEach(r),w.forEach(r),this.h()},h(){c(i,"class","my-0 my-sm-2"),c(s,"class","horizontal-scroll rounded my-2 svelte-1xyk41y"),c(b,"class","card rounded bg-dark text-white"),c(h,"id","eater"),c(d,"class","col-4 col-sm-3 col-md-2"),c(V,"class","btn btn-outline-light"),c(M,"class","col-1 d-flex justify-content-center align-items-end"),c(m,"class","card rounded bg-dark text-white"),c(C,"id","food"),c(R,"class","col-4 col-sm-3 col-md-2"),c(D,"class","row justify-content-around mt-5"),c(e,"class","d-flex flex-column justify-content-center mt-3 mb-5")},m(a,w){x(a,e,w),g(e,t),g(t,i),g(i,u),g(t,k),g(t,s);for(let f=0;f<n.length;f+=1)n[f].m(s,null);g(e,o),g(e,D),g(D,d),g(d,h),g(h,b),y.m(b,null),g(D,O),g(D,M),g(M,V),g(V,B),g(D,q),g(D,R),g(R,C),g(C,m),E.m(m,null)},p(a,[w]){if(w&12){_=a[2];let f;for(f=0;f<_.length;f+=1){const U=re(a,_,f);n[f]?n[f].p(U,w):(n[f]=de(U),n[f].c(),n[f].m(s,null))}for(;f<n.length;f+=1)n[f].d(1);n.length=_.length}F===(F=j(a))&&y?y.p(a,w):(y.d(1),y=F(a),y&&(y.c(),z(y,1),y.m(b,null))),X===(X=A(a))&&E?E.p(a,w):(E.d(1),E=X(a),E&&(E.c(),z(E,1),E.m(m,null)))},i(a){z(y),z(E)},o:T,d(a){a&&r(e),he(n,a),y.d(),E.d()}}}const ue=20;function Ie(l,e,t){let i=[],u=N.Loading,k=null,s,o;const D=()=>{ce.getTokens().then(m=>{for(const _ of m.token_list.tokens)(i==null?void 0:i.some(n=>n.num===_.toString()))||ce.getToken(_).then(n=>{const j=n.nft_dossier.public_metadata.extension,F=n.nft_dossier.private_metadata.extension.media;setTimeout(()=>{k==null&&(k=0,main_img="data:image/jpg;base64,"+i[k].page)},3e3);const y={num:j.name,pub_image:j.image,rarity:j.attributes[0].value};F.forEach((A,X)=>{X==0?(u=N.Decrypting,oe(A.url,A.authentication.key).then(E=>{y.page=E,u=N.Ready})):A.authentication?oe(A.url,A.authentication.key).then(E=>{y.land=E,u=N.Ready}):y.ticket=A.url}),i=[...i,y]});setTimeout(()=>{u==N.Loading&&(u=N.Ready)},5e3),setTimeout(()=>{Number(o)>=ue&&(o="1"),localStorage.setItem("collection",JSON.stringify(i)),localStorage.setItem("counter",o.toString())},15e3)})};_e(()=>{s=localStorage.getItem("collection"),o=localStorage.getItem("counter"),s&&(s=JSON.parse(s)),o==null?o="1":o=(Number(o)+1).toString(),o!=="1"&&Number(o)<ue&&(s==null?void 0:s.length)>0?(i=s,localStorage.setItem("counter",o),u=N.Ready):D()});const d=[{image:"https://pbs.twimg.com/media/FMcBE6WXMAcVI-u?format=jpg&name=medium",id:"0"},{image:"https://pbs.twimg.com/media/FOdDDFjWYAEaZAh?format=jpg&name=large",id:"1"},{image:"https://pbs.twimg.com/media/FOaRnaSXoAUd-qB?format=jpg&name=large",id:"2"},{image:"https://pbs.twimg.com/media/FOyIu9fXMAUupxJ?format=jpg&name=large",id:"3"},{image:"https://pbs.twimg.com/media/FOuUAPzXoAEpozU?format=jpg&name=large",id:"4"},{image:"https://pbs.twimg.com/media/FNrsrWEVgAA9wHU?format=jpg&name=large",id:"5"},{image:"https://pbs.twimg.com/media/FNQiZBlXIAI_VGO?format=jpg&name=large",id:"6"}];let h=null,b=null,O=null,M=null;const V=(m,_)=>{if(h===d[_])t(0,h=null);else if(b===d[_])t(1,b=null);else if(h===null){t(0,h=d[_]);const{x:n,y:j}=(document==null?void 0:document.getElementById("eater")).getBoundingClientRect();O=m.clientX-n,M=500,console.log("Last X: "+O),console.log("Last Y: "+M)}else if(b===null){t(1,b=d[_]);const{x:n,y:j}=(document==null?void 0:document.getElementById("eater")).getBoundingClientRect();O=m.clientX-n,M=500,console.log("Last X: "+O),console.log("Last Y: "+M)}M=m.clientY};function B(m,_){const n=getComputedStyle(m).transform.replace("none","");return{delay:_.delay||30,duration:_.duration||400,easing:_.easing||pe,css:(j,F)=>`transform: ${n} scale(${j})`}}return[h,b,d,V,B,(m,_)=>V(_,m),m=>V(m,h.id),m=>V(m,b.id)]}class Me extends me{constructor(e){super();fe(this,e,Ie,Ee,ge,{})}}export{Me as default};
