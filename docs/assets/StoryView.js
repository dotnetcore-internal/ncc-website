import{d as A,a0 as c,k as n,x as C,y as B,z as i,g as l,M as S,o as m,f,h as T,t as V,u as q,Z as L,a5 as R}from"./vendor.js";import{u as U}from"./uiStore.js";import{u as z}from"./useEmitter.js";import{c as D}from"./usePageToolkits.js";import{q as E}from"./QueryPagedStoryApi.js";import{B as I}from"./BodyBlock.js";import{T as M}from"./TitleBlock.js";import{A as O}from"./ArticleCards.js";import{A as Z}from"./ArticleNav.js";import"./axios.js";import"./_plugin-vue_export-helper.js";import"./PlaceholderBlock.vue_vue_type_script_setup_true_lang.js";import"./ContentModels.js";import"./AnchorElement.vue_vue_type_script_setup_true_lang.js";import"./ArticleAsGrid.js";const st=A({__name:"StoryView",setup($){D("story","i18n");const p=S(),d=R(),y=U(),u=z(),s=c([]),t=c({current:1,total:1}),g=(e,r)=>{s.length=0;for(const a of e)s.push(a);t.current=r.current,t.total=r.total},b=()=>t.current>=t.total?t.total:t.current<=0?1:t.current,P=()=>t.current<=1?1:t.current>t.total?t.total:t.current-1,h=()=>t.current>=t.total?t.total:t.current<=0?1:t.current+1,w=n(()=>t.current<t.total&&t.current>1),N=n(()=>t.current<t.total&&t.current>0),v=n(()=>t.total>1),o=async(e,r)=>{await E(e,r!=null?r:y.locale,a=>{g(a.list,a._page)},()=>{d.push({path:"/404"})})},_=async()=>{w.value&&await o(P())},x=async()=>{N.value&&await o(h())};return C(async()=>{const e=p.params.pageNo,r=parseInt(e!=null?e:"1");u.on("toChangeLocale",async a=>{const k=a;await o(b(),k.locale)}),await o(r)}),B(()=>{u.off("toChangeLocale")}),(e,r)=>(m(),i(I,null,{default:l(()=>[f(M,{"is-font-black":!1,"is-font-bold":!0},{default:l(()=>[T(V(e.$t("story")),1)]),_:1}),f(O,{articles:s,"default-display-mode":"card","base-url":"/about/story","enable-block-mode":!1,"enable-grid-mode":!1,"enable-list-mode":!1},null,8,["articles"]),q(v)?(m(),i(Z,{key:0,descriptor:t,previous:async()=>await _(),next:async()=>await x(),first:async()=>await o(1),last:async()=>await o(t.total),go:async a=>await o(a),"hidden-if-btn-disabled":!0,"base-url":"/about/story"},null,8,["descriptor","previous","next","first","last","go"])):L("",!0)]),_:1}))}});export{st as default};
