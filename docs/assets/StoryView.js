import{d as x,a0 as i,k as n,x as A,y as C,z as c,h as l,M as B,o as m,g as f,b as T,t as V,u as q,Z as L,a5 as R}from"./vendor.js";import{u as U}from"./uiStore.js";import{u as z}from"./useEmitter.js";import{c as D}from"./usePageToolkits.js";import{q as E}from"./QueryPagedStoryApi.js";import{B as I}from"./BodyBlock.js";import{T as O}from"./TitleBlock.js";import{A as Z}from"./ArticleCards.js";import{A as $}from"./ArticleNav.js";import"./axios.js";import"./_plugin-vue_export-helper.js";import"./PlaceholderBlock.vue_vue_type_script_setup_true_lang.js";import"./AnchorElement.vue_vue_type_script_setup_true_lang.js";import"./ArticleAsGrid.js";import"./ContentModels.js";const st=x({__name:"StoryView",setup(j){D("story","i18n");const p=B(),d=R(),y=U(),u=z(),s=i([]),t=i({current:1,total:1,name:"",nameSeries:[]}),g=(a,e)=>{s.length=0;for(const r of a)s.push(r);if(t.current=e.current,t.total=e.total,t.name=e.name,t.nameSeries=[],e.nameSeries)for(const r of e.nameSeries)t.nameSeries.push(r)},b=()=>t.current>=t.total?t.total:t.current<=0?1:t.current,h=()=>t.current<=1?1:t.current>t.total?t.total:t.current-1,P=()=>t.current>=t.total?t.total:t.current<=0?1:t.current+1,w=n(()=>t.current<t.total&&t.current>1),N=n(()=>t.current<t.total&&t.current>0),v=n(()=>t.total>1),o=async(a,e)=>{await E(a,e!=null?e:y.locale,r=>{g(r.list,r._page)},()=>{d.push({path:"/404"})})},S=async()=>{w.value&&await o(h())},_=async()=>{N.value&&await o(P())};return A(async()=>{const a=p.params.pageNo,e=parseInt(a!=null?a:"1");u.on("toChangeLocale",async r=>{const k=r;await o(b(),k.locale)}),await o(e)}),C(()=>{u.off("toChangeLocale")}),(a,e)=>(m(),c(I,null,{default:l(()=>[f(O,{"is-font-black":!1,"is-font-bold":!0},{default:l(()=>[T(V(a.$t("story")),1)]),_:1}),f(Z,{articles:s,"default-display-mode":"card","base-url":"/about/story","enable-block-mode":!1,"enable-pure-block-mode":!1,"enable-grid-mode":!1,"enable-list-mode":!1},null,8,["articles"]),q(v)?(m(),c($,{key:0,descriptor:t,previous:async()=>await S(),next:async()=>await _(),first:async()=>await o(1),last:async()=>await o(t.total),go:async r=>await o(r),"hidden-if-btn-disabled":!0,"base-url":"/about/story"},null,8,["descriptor","previous","next","first","last","go"])):L("",!0)]),_:1}))}});export{st as default};
