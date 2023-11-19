import{a3 as D,f as n,d as $,l as M,j as _,k as m,o as h,a as f,e as o,b as u,u as c,m as W,v as z,F as x,a1 as L,z as U,g as V,h as p,t as g,w as b,Z as B}from"./vendor.js";import{A as T}from"./ArticleCard.js";import{_ as j}from"./_plugin-vue_export-helper.js";const N=D("grid-nine",!1,function(e){return n("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[n("rect",{x:"5",y:"5",width:"38",height:"38",rx:"2",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),n("path",{d:"M5 18H43",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap},null),n("path",{d:"M5 30H43",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap},null),n("path",{d:"M17 5V43",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap},null),n("path",{d:"M30 5V43",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap},null)])}),P=D("vertical-tidy-up",!1,function(e){return n("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[n("rect",{x:"8",y:"7",width:"32",height:"6",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),n("rect",{x:"8",y:"21",width:"32",height:"6",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),n("rect",{x:"8",y:"35",width:"32",height:"6",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),H={class:"flex justify-center mb-4"},S={class:"group-btn cursor-pointer"},F={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},E=$({__name:"ArticleCards",props:{articles:null,defaultDisplayMode:{default:"grid"},baseUrl:null},setup(e){const a=M(e.defaultDisplayMode),w=k=>{a.value=k},C=_(),s=m(()=>C.value?"#f8f8f8":"#000000"),d=k=>a.value===k?"filled":"outline";return(k,v)=>(h(),f(x,null,[o("div",H,[o("div",S,[o("button",{onClick:v[0]||(v[0]=l=>w("grid")),class:u(["group-btn-text",{"group-btn-current":a.value==="grid"}])},[n(c(N),{class:"sort-btn-icon",theme:d("grid"),size:"16",fill:c(s)},null,8,["theme","fill"])],2),o("button",{onClick:v[1]||(v[1]=l=>w("list")),class:u(["group-btn-text",{"group-btn-current":a.value==="list"}])},[n(c(P),{class:"sort-btn-icon",theme:d("list"),size:"16",fill:c(s)},null,8,["theme","fill"])],2)])]),W(o("div",F,[(h(!0),f(x,null,L(e.articles,l=>(h(),U(T,{key:l.id,id:l.id,image:l.img,date:new Date(l.date),"title-tip":l.title,"base-url":e.baseUrl},{default:V(()=>[p(g(l.title),1)]),_:2},1032,["id","image","date","title-tip","base-url"]))),128))],512),[[z,a.value==="grid"]])],64))}});const re=j(E,[["__scopeId","data-v-9f70c8c7"]]),G=["onClick","href"],O=["onClick","href"],Z={key:0},q=["onClick","href"],J={key:1},K=["onClick","href"],Q=["onClick","href"],R=$({__name:"ArticleNav",props:{descriptor:null,previous:null,next:null,first:null,last:null,go:null,baseUrl:null,useTitle:{default:""},hiddenIfBtnDisabled:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!0}},setup(e){const t=e,a=m(()=>t.descriptor.current>1),w=m(()=>t.descriptor.current<t.descriptor.total),C=m(()=>{const r=[];if(t.descriptor.total<=5)for(let i=1;i<=t.descriptor.total;i++)r.push(i);else if(t.descriptor.current<=2)for(let i=1;i<=5;i++)r.push(i);else if(t.descriptor.current>=t.descriptor.total-1)for(let i=t.descriptor.total-4;i<=t.descriptor.total;i++)r.push(i);else for(let i=t.descriptor.current-2;i<=t.descriptor.current+2;i++)r.push(i);return r}),s=r=>t.baseUrl?r===1?`${t.baseUrl}`:`${t.baseUrl}/page/${r}`:"javascript:;",d=r=>{window.history.pushState({},t.useTitle,r)},k=()=>{d(s(1)),t.first()},v=()=>{d(s(t.descriptor.total)),t.last()},l=()=>{d(s(t.descriptor.current-1)),t.previous()},A=()=>{d(s(t.descriptor.current+1)),t.next()},I=r=>{d(s(r)),t.go(r)};return(r,i)=>(h(),f("div",{class:u(["article-pagination",{"justify-center":e.alignCenter}])},[o("a",{onClick:b(k,["prevent"]),href:s(1),class:u({disabled:e.descriptor.current===1,conceal:e.descriptor.current===1&&e.hiddenIfBtnDisabled})},g(r.$t("page.first")),11,G),o("a",{onClick:b(l,["prevent"]),href:s(e.descriptor.current-1),class:u({disabled:!c(a),conceal:!c(a)&&e.hiddenIfBtnDisabled})},g(r.$t("page.previous")),11,O),e.descriptor.current>3?(h(),f("span",Z,"...")):B("",!0),(h(!0),f(x,null,L(c(C),y=>(h(),f("a",{onClick:b(X=>I(y),["prevent"]),href:s(y),class:u({active:e.descriptor.current===y}),key:y},g(y),11,q))),128)),e.descriptor.current<e.descriptor.total-2?(h(),f("span",J,"...")):B("",!0),o("a",{onClick:b(A,["prevent"]),href:s(e.descriptor.current+1),class:u({disabled:!c(w),conceal:!c(w)&&e.hiddenIfBtnDisabled})},g(r.$t("page.next")),11,K),o("a",{onClick:b(v,["prevent"]),href:s(e.descriptor.total),class:u({disabled:e.descriptor.current===e.descriptor.total,conceal:e.descriptor.current===e.descriptor.total&&e.hiddenIfBtnDisabled})},g(r.$t("page.last")),11,Q)],2))}});const ie=j(R,[["__scopeId","data-v-dcd521cd"]]);export{re as A,ie as a};
