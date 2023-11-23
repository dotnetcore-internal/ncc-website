import{a3 as S,f as r,d as z,k as m,l as C,x as Y,o as s,a as i,g as B,e as c,u as o,r as W,Z as u,F as _,a1 as L,m as p,v as j,t as x,b as M,a4 as I,p as O,i as P,j as E,h as D,z as T}from"./vendor.js";import{u as H}from"./uiStore.js";import{h as G,g as V,c as N}from"./ContentModels.js";import{_ as F}from"./AnchorElement.vue_vue_type_script_setup_true_lang.js";import{_ as U}from"./_plugin-vue_export-helper.js";import{A as R}from"./ArticleAsGrid.js";const Z=S("align-text-both",!1,function(t){return r("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[r("path",{d:"M42 19H6",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),r("path",{d:"M42 9H6",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),r("path",{d:"M42 29H6",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),r("path",{d:"M42 39H6",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),q=S("grid-nine",!1,function(t){return r("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[r("rect",{x:"5",y:"5",width:"38",height:"38",rx:"2",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),r("path",{d:"M5 18H43",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap},null),r("path",{d:"M5 30H43",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap},null),r("path",{d:"M17 5V43",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap},null),r("path",{d:"M30 5V43",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap},null)])}),J=S("paragraph-rectangle",!0,function(t){return r("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[r("path",{d:"M24 9H42",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),r("path",{d:"M24 19H42",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),r("path",{d:"M6 29H42",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),r("path",{d:"M6 39H42",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),r("rect",{x:"6",y:"9",width:"10",height:"10",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),K=S("vertical-tidy-up",!1,function(t){return r("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[r("rect",{x:"8",y:"7",width:"32",height:"6",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),r("rect",{x:"8",y:"21",width:"32",height:"6",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),r("rect",{x:"8",y:"35",width:"32",height:"6",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),Q={class:"w-full relative"},X=["src","alt"],tt={class:"absolute bottom-0 w-full bg-gradient-to-b from-transparent via-black/30 to-black/90 h-36 lg:h-48 xl:h-64"},et={class:"text-white text-xl lg:text-3xl xl:text-5xl absolute bottom-0 p-5"},at={class:"w-full md:flex dark:bg-black/70 p-5"},st={class:"md:flex-1"},lt={key:0,class:"text-sm font-light text-gray-500"},it={key:0,class:"text-xs mr-1 text-gray-500/50"},ot={key:0,class:"text-xs mx-1 text-gray-500/50"},rt={key:1,class:"text-xs mx-1 text-gray-500/50"},nt={key:2,class:"mr-1.5"},dt=["src","alt"],ut={key:3,class:""},ct={key:0,class:"md:flex-none w-36"},ht={class:"text-sm text-gray-500"},ft=z({__name:"ArticleAsBlock",props:{id:null,image:null,date:null,titleTip:null,url:null,baseUrl:null,author:{default:null},displayAuthorMode:{default:"hide"},displayAuthorBy:{type:Boolean,default:!1},displayDate:{type:Boolean,default:!0},withShadow:{type:Boolean,default:!0}},setup(t){const e=t,h=H(),f=(l,d)=>I(l,d,{locales:h}).value,v=m(()=>{var l;return(l=e.titleTip)!=null?l:""}),A=m(()=>{const l=f(e.date,"YYYY"),d=f(e.date,"MM");return`/content${e.baseUrl}/${l}/${d}/${e.id}/assets/${e.image}`}),w=m(()=>{if(e.url)return e.url;const l=f(e.date,"YYYY"),d=f(e.date,"MM");return`${e.baseUrl}/${l}/${d}/${e.id}`}),y=C(!1),g=l=>{if(y.value)switch(e.displayAuthorMode){case"hide":return!1;case"all":case"all-but-avatar":case"all-but-name":case"all-but-first-avatar":case"all-but-first-name":return!0;case"first":case"first-but-avatar":case"first-but-name":return l===0}return!1},$=l=>{if(y.value)switch(e.displayAuthorMode){case"all":case"all-but-name":case"all-but-first-avatar":return!0;case"all-but-avatar":case"first-but-avatar":return!1;case"first":case"first-but-name":case"all-but-first-name":return l===0}return!1},b=l=>{if(y.value)switch(e.displayAuthorMode){case"all":case"all-but-avatar":return!0;case"all-but-name":case"first-but-name":return!1;case"first":case"first-but-avatar":case"all-but-first-avatar":return l===0;case"all-but-first-name":return l!==0}return!1},n=m(()=>N(e.author));return Y(()=>{y.value=e.displayAuthorMode!=="hide"}),(l,d)=>(s(),i("div",{class:M(["article-block",{"shadow-md":e.withShadow}])},[r(F,{class:"block w-full h-4/5",href:o(w),title:o(v),target:"_blank",mode:"classic"},{default:B(()=>[c("div",Q,[c("img",{src:o(A),alt:o(v),class:"w-full"},null,8,X),c("div",tt,[c("div",et,[W(l.$slots,"default",{},void 0,!0)])])]),c("div",at,[c("div",st,[o(G)(t.author)?(s(),i("span",lt,[t.displayAuthorBy?(s(),i("span",it,"by")):u("",!0),(s(!0),i(_,null,L(o(V)(t.author),(a,k)=>p((s(),i("span",{key:a.id},[k>0&&k<o(n)-1?(s(),i("span",ot,",")):k>0&&k<o(n)?(s(),i("span",rt,"and")):u("",!0),b(k)?(s(),i("span",nt,[c("img",{src:a.avatar,alt:a.name,class:"inline-block w-5 h-5 rounded-full"},null,8,dt)])):u("",!0),$(k)?(s(),i("span",ut,x(a.name),1)):u("",!0)])),[[j,g(k)]])),128))])):u("",!0)]),e.displayDate?(s(),i("div",ct,[c("span",ht,x(f(t.date,l.$t("_common.date-format"))),1)])):u("",!0)])]),_:3},8,["href","title"])],2))}});const yt=U(ft,[["__scopeId","data-v-3745a671"]]),kt={class:"md:flex p-5"},mt={class:"flex-none md:w-72 w-0 overflow-hidden"},bt=["src","alt"],vt={class:"flex-1 p-5 text-lg font-bold"},wt={key:0,class:"block text-sm text-gray-500 font-medium"},gt={key:1},xt={key:2,class:"text-sm font-light text-gray-500"},_t={key:0,class:"text-xs mr-1 text-gray-500/50"},At={key:0,class:"text-xs mx-1 text-gray-500/50"},$t={key:1,class:"text-xs mx-1 text-gray-500/50"},Mt={key:2,class:"mr-1.5"},Bt=["src","alt"],Lt={key:3,class:""},pt=z({__name:"ArticleAsCard",props:{id:null,image:null,date:null,titleTip:null,url:null,baseUrl:null,author:{default:null},displayAuthorMode:{default:"hide"},displayAuthorBy:{type:Boolean,default:!1},displayDate:{type:Boolean,default:!0},withShadow:{type:Boolean,default:!0}},setup(t){const e=t,h=H(),f=(l,d)=>I(l,d,{locales:h}).value,v=m(()=>{var l;return(l=e.titleTip)!=null?l:""}),A=m(()=>{const l=f(e.date,"YYYY"),d=f(e.date,"MM");return`/content${e.baseUrl}/${l}/${d}/${e.id}/assets/${e.image}`}),w=m(()=>{if(e.url)return e.url;const l=f(e.date,"YYYY"),d=f(e.date,"MM");return`${e.baseUrl}/${l}/${d}/${e.id}`}),y=C(!1),g=l=>{if(y.value)switch(e.displayAuthorMode){case"hide":return!1;case"all":case"all-but-avatar":case"all-but-name":case"all-but-first-avatar":case"all-but-first-name":return!0;case"first":case"first-but-avatar":case"first-but-name":return l===0}return!1},$=l=>{if(y.value)switch(e.displayAuthorMode){case"all":case"all-but-name":case"all-but-first-avatar":return!0;case"all-but-avatar":case"first-but-avatar":return!1;case"first":case"first-but-name":case"all-but-first-name":return l===0}return!1},b=l=>{if(y.value)switch(e.displayAuthorMode){case"all":case"all-but-avatar":return!0;case"all-but-name":case"first-but-name":return!1;case"first":case"first-but-avatar":case"all-but-first-avatar":return l===0;case"all-but-first-name":return l!==0}return!1},n=m(()=>N(e.author));return Y(()=>{y.value=e.displayAuthorMode!=="hide"}),(l,d)=>(s(),i("div",{class:M(["article-card",{"shadow-md":t.withShadow,"hover:shadow-lg":t.withShadow}])},[r(F,{class:"block w-full h-4/5",href:o(w),title:o(v),target:"_blank",mode:"classic"},{default:B(()=>[c("div",kt,[c("div",mt,[c("img",{src:o(A),alt:o(v)},null,8,bt)]),c("div",vt,[W(l.$slots,"default",{},void 0,!0),e.displayDate?(s(),i("span",wt,x(f(t.date,l.$t("_common.date-format"))),1)):(s(),i("br",gt)),o(G)(t.author)?(s(),i("span",xt,[t.displayAuthorBy?(s(),i("span",_t,"by")):u("",!0),(s(!0),i(_,null,L(o(V)(t.author),(a,k)=>p((s(),i("span",{key:a.id},[k>0&&k<o(n)-1?(s(),i("span",At,",")):k>0&&k<o(n)?(s(),i("span",$t,"and")):u("",!0),b(k)?(s(),i("span",Mt,[c("img",{src:a.avatar,alt:a.name,class:"inline-block w-5 h-5 rounded-full"},null,8,Bt)])):u("",!0),$(k)?(s(),i("span",Lt,x(a.name),1)):u("",!0)])),[[j,g(k)]])),128))])):u("",!0)])])]),_:3},8,["href","title"])],2))}});const jt=U(pt,[["__scopeId","data-v-bb4e03af"]]),Dt=t=>(O("data-v-b95e24c3"),t=t(),P(),t),Tt={class:"article-list"},St={class:"md:flex"},zt={class:"md:flex-1"},Ct={class:"text-lg font-bold"},Ut=Dt(()=>c("br",null,null,-1)),Yt={key:0,class:"text-sm font-light text-gray-500"},Wt={key:0,class:"text-xs mr-1 text-gray-500/50"},It={key:0,class:"text-xs mx-1 text-gray-500/50"},Ht={key:1,class:"text-xs mx-1 text-gray-500/50"},Gt={key:2,class:"mr-1.5"},Vt=["src","alt"],Nt={key:3,class:""},Ft={key:0,class:"md:flex-none w-full md:w-36 text-right"},Ot={class:"text-sm text-gray-500"},Pt=z({__name:"ArticleAsList",props:{id:null,image:null,date:null,titleTip:null,url:null,baseUrl:null,author:{default:null},displayAuthorMode:{default:"hide"},displayAuthorBy:{type:Boolean,default:!1},displayDate:{type:Boolean,default:!0}},setup(t){const e=t,h=H(),f=(n,l)=>I(n,l,{locales:h}).value,v=m(()=>{var n;return(n=e.titleTip)!=null?n:""}),A=m(()=>{if(e.url)return e.url;const n=f(e.date,"YYYY"),l=f(e.date,"MM");return`${e.baseUrl}/${n}/${l}/${e.id}`}),w=C(!1),y=n=>{if(w.value)switch(e.displayAuthorMode){case"hide":return!1;case"all":case"all-but-avatar":case"all-but-name":case"all-but-first-avatar":case"all-but-first-name":return!0;case"first":case"first-but-avatar":case"first-but-name":return n===0}return!1},g=n=>{if(w.value)switch(e.displayAuthorMode){case"all":case"all-but-name":case"all-but-first-avatar":return!0;case"all-but-avatar":case"first-but-avatar":return!1;case"first":case"first-but-name":case"all-but-first-name":return n===0}return!1},$=n=>{if(w.value)switch(e.displayAuthorMode){case"all":case"all-but-avatar":return!0;case"all-but-name":case"first-but-name":return!1;case"first":case"first-but-avatar":case"all-but-first-avatar":return n===0;case"all-but-first-name":return n!==0}return!1},b=m(()=>N(e.author));return Y(()=>{w.value=e.displayAuthorMode!=="hide"}),(n,l)=>(s(),i("div",Tt,[r(F,{class:"block w-full h-4/5 p-5",href:o(A),title:o(v),target:"_blank",mode:"classic"},{default:B(()=>[c("div",St,[c("div",zt,[c("span",Ct,[W(n.$slots,"default",{},void 0,!0),Ut,o(G)(t.author)?(s(),i("span",Yt,[t.displayAuthorBy?(s(),i("span",Wt,"by")):u("",!0),(s(!0),i(_,null,L(o(V)(t.author),(d,a)=>p((s(),i("span",{key:d.id},[a>0&&a<o(b)-1?(s(),i("span",It,",")):a>0&&a<o(b)?(s(),i("span",Ht,"and")):u("",!0),$(a)?(s(),i("span",Gt,[c("img",{src:d.avatar,alt:d.name,class:"inline-block w-5 h-5 rounded-full"},null,8,Vt)])):u("",!0),g(a)?(s(),i("span",Nt,x(d.name),1)):u("",!0)])),[[j,y(a)]])),128))])):u("",!0)])]),e.displayDate?(s(),i("div",Ft,[c("span",Ot,x(f(t.date,n.$t("_common.date-format"))),1)])):u("",!0)])]),_:3},8,["href","title"])]))}});const Et=U(Pt,[["__scopeId","data-v-b95e24c3"]]),Rt=t=>(O("data-v-6ac9aa5f"),t=t(),P(),t),Zt={key:0,class:"flex justify-center mb-4"},qt=Rt(()=>c("br",null,null,-1)),Jt={key:1,class:"flex justify-center mb-4"},Kt={class:"group-btn cursor-pointer"},Qt={key:2,class:"mb-4"},Xt={key:3},te={key:5},ee={key:6},ae=z({__name:"ArticleCards",props:{articles:null,defaultDisplayMode:{default:"grid"},baseUrl:null,displayAuthorMode:{default:"hide"},displayAuthorBy:{type:Boolean,default:!1},displayDate:{type:Boolean,default:!0},enableCardMode:{type:Boolean,default:!0},enableListMode:{type:Boolean,default:!0},enableGridMode:{type:Boolean,default:!0},enableBlockMode:{type:Boolean,default:!0},limitedItems:{default:0},withShadow:{type:Boolean,default:!0},withScale:{type:Boolean,default:!0},infiniteHorizontalForGrid:{type:Boolean,default:!1}},setup(t){const e=t,h=C(e.defaultDisplayMode),v=[e.enableBlockMode,e.enableListMode,e.enableGridMode,e.enableCardMode].filter(l=>l).length,A=m(()=>v>1),w=m(()=>v===0),y=l=>{h.value=l},g=m(()=>e.limitedItems<=0||e.limitedItems>e.articles.length?e.articles:e.articles.slice(0,e.limitedItems)),$=E(),b=m(()=>$.value?"#f8f8f8":"#000000"),n=l=>h.value===l?"filled":"outline";return(l,d)=>(s(),i(_,null,[o(w)?(s(),i("div",Zt,[D(" 没有任何模式被使用 "),qt,D("No pattern is used ")])):o(A)?(s(),i("div",Jt,[c("div",Kt,[t.enableBlockMode?(s(),i("button",{key:0,onClick:d[0]||(d[0]=a=>y("block")),class:M(["group-btn-text",{"group-btn-current":h.value==="block"}])},[r(o(K),{class:"sort-btn-icon",theme:n("block"),size:"16",fill:o(b)},null,8,["theme","fill"])],2)):u("",!0),t.enableGridMode?(s(),i("button",{key:1,onClick:d[1]||(d[1]=a=>y("grid")),class:M(["group-btn-text",{"group-btn-current":h.value==="grid"}])},[r(o(q),{class:"sort-btn-icon",theme:n("grid"),size:"16",fill:o(b)},null,8,["theme","fill"])],2)):u("",!0),t.enableCardMode?(s(),i("button",{key:2,onClick:d[2]||(d[2]=a=>y("card")),class:M(["group-btn-text",{"group-btn-current":h.value==="card"}])},[r(o(J),{class:"sort-btn-icon",theme:n("card"),size:"16",fill:o(b)},null,8,["theme","fill"])],2)):u("",!0),t.enableListMode?(s(),i("button",{key:3,onClick:d[3]||(d[3]=a=>y("list")),class:M(["group-btn-text",{"group-btn-current":h.value==="list"}])},[r(o(Z),{class:"sort-btn-icon",theme:n("list"),size:"16",fill:o(b)},null,8,["theme","fill"])],2)):u("",!0)])])):(s(),i("div",Qt)),t.enableBlockMode?p((s(),i("div",Xt,[(s(!0),i(_,null,L(o(g),a=>(s(),T(yt,{key:a.id,id:a.id,image:a.img,date:new Date(a.date),author:a==null?void 0:a.author,"title-tip":a.title,"base-url":t.baseUrl,"display-author-mode":t.displayAuthorMode,"display-author-by":t.displayAuthorBy,"display-date":t.displayDate,"with-shadow":t.withShadow},{default:B(()=>[D(x(a.title),1)]),_:2},1032,["id","image","date","author","title-tip","base-url","display-author-mode","display-author-by","display-date","with-shadow"]))),128))],512)),[[j,h.value==="block"]]):u("",!0),t.enableGridMode?p((s(),i("div",{key:4,class:M({"grid-normal":!e.infiniteHorizontalForGrid,"grid-scroll":e.infiniteHorizontalForGrid})},[(s(!0),i(_,null,L(o(g),a=>(s(),T(R,{key:a.id,id:a.id,image:a.img,date:new Date(a.date),author:a==null?void 0:a.author,"title-tip":a.title,"base-url":t.baseUrl,"display-author-mode":t.displayAuthorMode,"display-author-by":t.displayAuthorBy,"display-date":t.displayDate,"with-shadow":t.withShadow,"with-scale":t.withScale,"infinite-horizontal":t.infiniteHorizontalForGrid},{default:B(()=>[D(x(a.title),1)]),_:2},1032,["id","image","date","author","title-tip","base-url","display-author-mode","display-author-by","display-date","with-shadow","with-scale","infinite-horizontal"]))),128))],2)),[[j,h.value==="grid"]]):u("",!0),t.enableCardMode?p((s(),i("div",te,[(s(!0),i(_,null,L(o(g),a=>(s(),T(jt,{key:a.id,id:a.id,image:a.img,date:new Date(a.date),author:a==null?void 0:a.author,"title-tip":a.title,"base-url":t.baseUrl,"display-author-mode":t.displayAuthorMode,"display-author-by":t.displayAuthorBy,"display-date":t.displayDate,"with-shadow":t.withShadow},{default:B(()=>[D(x(a.title),1)]),_:2},1032,["id","image","date","author","title-tip","base-url","display-author-mode","display-author-by","display-date","with-shadow"]))),128))],512)),[[j,h.value==="card"]]):u("",!0),t.enableListMode?p((s(),i("div",ee,[(s(!0),i(_,null,L(o(g),a=>(s(),T(Et,{key:a.id,id:a.id,image:a.img,date:new Date(a.date),author:a==null?void 0:a.author,"title-tip":a.title,"base-url":t.baseUrl,"display-author-mode":t.displayAuthorMode,"display-author-by":t.displayAuthorBy,"display-date":t.displayDate},{default:B(()=>[D(x(a.title),1)]),_:2},1032,["id","image","date","author","title-tip","base-url","display-author-mode","display-author-by","display-date"]))),128))],512)),[[j,h.value==="list"]]):u("",!0)],64))}});const de=U(ae,[["__scopeId","data-v-6ac9aa5f"]]);export{de as A};
