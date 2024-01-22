import{d as B,a0 as f,k as l,x as C,y as S,z as d,h as p,M as T,o as y,g,b as V,t as $,f as q,u as j,Z as L,a5 as R}from"./vendor.js";import{u as U}from"./uiStore.js";import{u as z}from"./useEmitter.js";import{c as D}from"./usePageToolkits.js";import{a as E}from"./axios.js";import{B as I}from"./BodyBlock.js";import{T as O}from"./TitleBlock.js";import{A as Z}from"./ArticleCards.js";import{A as F}from"./ArticleNav.js";import"./_plugin-vue_export-helper.js";import"./PlaceholderBlock.vue_vue_type_script_setup_true_lang.js";import"./AnchorElement.vue_vue_type_script_setup_true_lang.js";import"./ArticleAsGrid.js";import"./ContentModels.js";const G=async function(n,o,s=()=>{}){await E.get(n).then(function(c){o(c.data)}).catch(s)},H=async function(n,o,s,c=()=>{}){n<1&&(n=1),await J(n-1,o,s,c)},J=async function(n,o,s,c=()=>{}){n<0&&(n=0);const u=n===0?`/api/announcements/list_${o}.json`:`/api/announcements/list_${n}_${o}.json`;await G(u,s,c)},K={class:"p-5"},ut=B({__name:"AnnouncementsIndexView",setup(n){D("media-announcements","i18n");const o=T(),s=R(),c=U(),u=z(),m=f([]),t=f({current:1,total:1,name:"",nameSeries:[]}),h=(r,e)=>{m.length=0;for(const a of r)m.push(a);if(t.current=e.current,t.total=e.total,t.name=e.name,t.nameSeries=[],e.nameSeries)for(const a of e.nameSeries)t.nameSeries.push(a)},b=()=>t.current>=t.total?t.total:t.current<=0?1:t.current,P=()=>t.current<=1?1:t.current>t.total?t.total:t.current-1,w=()=>t.current>=t.total?t.total:t.current<=0?1:t.current+1,_=l(()=>t.current>1),v=l(()=>t.current<t.total),A=l(()=>t.total>1),i=async(r,e)=>{await H(r,e!=null?e:c.locale,a=>{h(a.list,a._page)},()=>{s.push({path:"/404"})})},N=async()=>{_.value&&await i(P())},k=async()=>{v.value&&await i(w())};return C(async()=>{const r=o.params.pageNo,e=parseInt(r!=null?r:"1");u.on("toChangeLocale",async a=>{const x=a;await i(b(),x.locale)}),await i(e)}),S(()=>{u.off("toChangeLocale")}),(r,e)=>(y(),d(I,null,{default:p(()=>[g(O,{"is-font-black":!1,"is-font-bold":!0},{default:p(()=>[V($(r.$t("media-announcements")),1)]),_:1}),q("div",K,[g(Z,{articles:m,"default-display-mode":"list","base-url":"/announcements","display-author-mode":"all-but-first-avatar","enable-block-mode":!1,"enable-pure-block-mode":!1,"enable-grid-mode":!1,"enable-card-mode":!1},null,8,["articles"]),j(A)?(y(),d(F,{key:0,descriptor:t,previous:async()=>await N(),next:async()=>await k(),first:async()=>await i(1),last:async()=>await i(t.total),go:async a=>await i(a),"hidden-if-btn-disabled":!0,"base-url":"/announcements"},null,8,["descriptor","previous","next","first","last","go"])):L("",!0)])]),_:1}))}});export{ut as default};
