import{d as C,a0 as m,k as f,x as A,y as T,z as d,g as p,M as V,o as w,f as y,h as $,t as q,u as j,Z as L,a7 as R}from"./vendor.js";import{u as S}from"./uiStore.js";import{u as U}from"./useEmitter.js";import{c as z}from"./usePageToolkits.js";import{a as D}from"./axios.js";import{B as E}from"./BodyBlock.js";import{T as I}from"./TitleBlock.js";import{A as M,a as O}from"./ArticleNav.js";import"./preload-helper.js";import"./_plugin-vue_export-helper.js";import"./PlaceholderBlock.vue_vue_type_script_setup_true_lang.js";import"./ArticleCard.js";import"./AnchorElement.vue_vue_type_script_setup_true_lang.js";const Z=async function(e,n,o=()=>{}){await D.get(e).then(function(i){n(i.data)}).catch(o)},F=async function(e,n,o,i=()=>{}){e<1&&(e=1),await G(e-1,n,o,i)},G=async function(e,n,o,i=()=>{}){e<0&&(e=0);const u=e===0?`/api/news/list_${n}.json`:`/api/news/list_${e}_${n}.json`;await Z(u,o,i)},ot=C({__name:"NewsIndexView",setup(e){z("media-news","i18n");const n=V(),o=R(),i=S(),u=U(),l=m([]),t=m({current:1,total:1}),g=(a,r)=>{l.length=0;for(const s of a)l.push(s);t.current=r.current,t.total=r.total},P=()=>t.current>=t.total?t.total:t.current<=0?1:t.current,h=()=>t.current<=1?1:t.current>t.total?t.total:t.current-1,N=()=>t.current>=t.total?t.total:t.current<=0?1:t.current+1,_=f(()=>t.current<t.total&&t.current>1),v=f(()=>t.current<t.total&&t.current>0),x=f(()=>t.total>1),c=async(a,r)=>{await F(a,r!=null?r:i.locale,s=>{g(s.list,s._page)},()=>{o.push({path:"/404"})})},b=async()=>{_.value&&await c(h())},k=async()=>{v.value&&await c(N())};return A(async()=>{const a=n.params.pageNo,r=parseInt(a!=null?a:"1");u.on("toChangeLocale",async s=>{const B=s;await c(P(),B.locale)}),await c(r)}),T(()=>{u.off("toChangeLocale")}),(a,r)=>(w(),d(E,null,{default:p(()=>[y(I,{"is-font-black":!1,"is-font-bold":!0},{default:p(()=>[$(q(a.$t("media-news")),1)]),_:1}),y(M,{articles:l,"default-display-mode":"grid","base-url":"/news"},null,8,["articles"]),j(x)?(w(),d(O,{key:0,descriptor:t,previous:async()=>await b(),next:async()=>await k(),first:async()=>await c(1),last:async()=>await c(t.total),go:async s=>await c(s),"hidden-if-btn-disabled":!0,"base-url":"/news"},null,8,["descriptor","previous","next","first","last","go"])):L("",!0)]),_:1}))}});export{ot as default};
