import{d as B,a0 as f,k as m,x as C,y as S,z as d,g as p,M as T,o as y,f as w,h as V,t as $,u as q,Z as j,a5 as L}from"./vendor.js";import{u as R}from"./uiStore.js";import{u as U}from"./useEmitter.js";import{c as z}from"./usePageToolkits.js";import{a as D}from"./axios.js";import{B as E}from"./BodyBlock.js";import{T as I}from"./TitleBlock.js";import{A as O}from"./ArticleCards.js";import{A as Z}from"./ArticleNav.js";import"./_plugin-vue_export-helper.js";import"./PlaceholderBlock.vue_vue_type_script_setup_true_lang.js";import"./ContentModels.js";import"./AnchorElement.vue_vue_type_script_setup_true_lang.js";import"./ArticleAsGrid.js";const F=async function(a,s,o=()=>{}){await D.get(a).then(function(i){s(i.data)}).catch(o)},G=async function(a,s,o,i=()=>{}){a<1&&(a=1),await H(a-1,s,o,i)},H=async function(a,s,o,i=()=>{}){a<0&&(a=0);const u=a===0?`/api/news/list_${s}.json`:`/api/news/list_${a}_${s}.json`;await F(u,o,i)},it=B({__name:"NewsIndexView",setup(a){z("media-news","i18n");const s=T(),o=L(),i=R(),u=U(),l=f([]),t=f({current:1,total:1,name:"",nameSeries:[]}),g=(n,e)=>{l.length=0;for(const r of n)l.push(r);if(t.current=e.current,t.total=e.total,t.name=e.name,t.nameSeries=[],e.nameSeries)for(const r of e.nameSeries)t.nameSeries.push(r)},h=()=>t.current>=t.total?t.total:t.current<=0?1:t.current,b=()=>t.current<=1?1:t.current>t.total?t.total:t.current-1,P=()=>t.current>=t.total?t.total:t.current<=0?1:t.current+1,N=m(()=>t.current<t.total&&t.current>1),_=m(()=>t.current<t.total&&t.current>0),v=m(()=>t.total>1),c=async(n,e)=>{await G(n,e!=null?e:i.locale,r=>{g(r.list,r._page)},()=>{o.push({path:"/404"})})},k=async()=>{N.value&&await c(b())},x=async()=>{_.value&&await c(P())};return C(async()=>{const n=s.params.pageNo,e=parseInt(n!=null?n:"1");u.on("toChangeLocale",async r=>{const A=r;await c(h(),A.locale)}),await c(e)}),S(()=>{u.off("toChangeLocale")}),(n,e)=>(y(),d(E,null,{default:p(()=>[w(I,{"is-font-black":!1,"is-font-bold":!0},{default:p(()=>[V($(n.$t("media-news")),1)]),_:1}),w(O,{articles:l,"default-display-mode":"grid","display-author-mode":"all-but-name","display-author-by":!0,"base-url":"/news","enable-card-mode":!1,"enable-block-mode":!1,"enable-pure-block-mode":!1,"enable-list-mode":!1},null,8,["articles"]),q(v)?(y(),d(Z,{key:0,descriptor:t,previous:async()=>await k(),next:async()=>await x(),first:async()=>await c(1),last:async()=>await c(t.total),go:async r=>await c(r),"hidden-if-btn-disabled":!0,"base-url":"/news"},null,8,["descriptor","previous","next","first","last","go"])):j("",!0)]),_:1}))}});export{it as default};
