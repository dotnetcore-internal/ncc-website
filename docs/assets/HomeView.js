import{c as N}from"./usePageToolkits.js";import{u as C}from"./useEmitter.js";import{u as S}from"./uiStore.js";import{a as x}from"./axios.js";import{T as w}from"./TitleBlock.js";import{L as B}from"./LeftRightLayout.js";import{T as g,M}from"./MemberProjects.js";import{A as T}from"./ArticleAsGrid.js";import{d as m,a0 as F,x as z,y as H,o as c,a as _,e as t,f as o,g as n,h as i,t as a,F as k,a1 as I,z as A,a2 as D,r as P,a3 as $,u as v,p as V,i as q}from"./vendor.js";import{_ as p}from"./PlaceholderBlock.vue_vue_type_script_setup_true_lang.js";import{_ as f}from"./_plugin-vue_export-helper.js";import{P as W}from"./ProjectStatBlock.js";import"./useProjectToolkits.js";import"./useResource.js";import"./AnchorElement.vue_vue_type_script_setup_true_lang.js";import"./ContentModels.js";const E=async function(e,s,l=()=>{}){await x.get(`/api/news/latest-news.${e}.json`).then(function(h){s(h.data)}).catch(l)},G={class:"bg-white dark:bg-black"},O={class:"responsive-width py-5 pb-16"},R={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"},J=m({__name:"LatestNews",setup(e){const s=S(),l=C(),h=F([]),L=r=>{h.length=0;for(const u of r)h.push(u)},b=async r=>{const u=r!=null?r:s.locale;await E(u,d=>{L(d.data)})};return z(async()=>{await b(),l.on("toChangeLocale",async r=>{await b(r.locale)})}),H(()=>{l.off("toChangeLocale")}),(r,u)=>(c(),_("div",G,[t("div",O,[o(B,null,{left:n(()=>[o(w,{"h1-mode":"false","color-mode":"auto","with-horizontal-rule":!1,"is-font-black":!1},{default:n(()=>[i(a(r.$t("media-latest-from-ncc")),1)]),_:1})]),right:n(()=>[o(g,{href:"/news","route-name":"news",title:"News",mode:"h5",class:"m-7 mt-9","class-value":"leading-7"},{default:n(()=>[i(a(r.$t("media-latest-news")),1)]),_:1})]),_:1}),t("div",R,[(c(!0),_(k,null,I(h,d=>(c(),A(T,{id:d.id,key:d.id,image:d.img,date:new Date(d.date),"title-tip":d.title,"base-url":"/news"},{default:n(()=>[i(a(d.title),1)]),_:2},1032,["id","image","date","title-tip"]))),128))])])]))}}),U="/images/partners/jetbrains.svg",Y="/images/partners/myget.svg",K="/images/partners/oreilly.png",Q="/images/partners/material-theme.png",X={class:"bg-gray-200/50 dark:bg-purple-900/10 dark:text-white"},Z={class:"responsive-width"},ee=D('<a href="https://www.jetbrains.com/?from=.NETCoreCommunity(NCC)" target="_blank" title="JetBrains" class="partner-item" data-v-1504de5f><img src="'+U+'" alt="JetBrains" class="w-full h-full" data-v-1504de5f></a><a href="https://www.myget.org/" target="_blank" title="MyGet" class="partner-item" data-v-1504de5f><img src="'+Y+'" alt="MyGet" class="w-full h-full" data-v-1504de5f></a><a href="https://www.oreilly.com/pub/cpc/323206" target="_blank" title="MyGet" class="partner-item" data-v-1504de5f><img src="'+K+'" alt="O&#39;REILLY" class="w-full h-full" data-v-1504de5f></a><a href="https://www.material-theme.com/" target="_blank" title="MyGet" class="partner-item" data-v-1504de5f><img src="'+Q+'" alt="Material Theme" class="w-full h-full" data-v-1504de5f></a>',4),te=m({__name:"PartnersAndSponsors",setup(e){return(s,l)=>(c(),_("div",X,[t("div",Z,[o(w,{"h1-mode":"false","color-mode":"auto","with-horizontal-rule":!0,"is-font-black":!1},{default:n(()=>[i(a(s.$t("our-partners-title")),1)]),_:1}),ee,o(p,{height:"1.25rem"})])]))}});const se=f(te,[["__scopeId","data-v-1504de5f"]]),oe={class:"bg-gray-900 dark:bg-fuchsia-900/20 text-white"},ae={class:"responsive-width"},ie={class:"lg:text-3xl md:text-2xl sm:text-lg font-light italic px-5 pb-10"},ne=t("br",null,null,-1),re=t("br",null,null,-1),le=m({__name:"Slogan",setup(e){return(s,l)=>(c(),_("div",oe,[t("div",ae,[o(w,{"h1-mode":"false","color-mode":"dark","with-horizontal-rule":!0,"is-font-black":!1},{default:n(()=>[i(a(s.$t("our-slogan-title")),1)]),_:1}),t("div",ie,[i(a(s.$t("our-slogan-part1")),1),ne,i(" "+a(s.$t("our-slogan-part2")),1),re,i(" "+a(s.$t("our-slogan-part3")),1)])])]))}});const ce={},de={class:"section-head"};function _e(e,s){return c(),_("span",de,[P(e.$slots,"default",{},void 0,!0)])}const y=f(ce,[["render",_e],["__scopeId","data-v-c032ad9d"]]),me={class:"bg-white dark:bg-black pb-16"},he={class:"responsive-width grid grid-cols-1 lg:grid-cols-2 pb-10"},ue={class:"independently-operated-by"},ge=["innerHTML"],pe=m({__name:"BloomingFlowers",setup(e){return(s,l)=>(c(),_("div",me,[t("div",he,[o(y,null,{default:n(()=>[i(a(s.$t("home.growing-for-ecosystem")),1)]),_:1}),t("div",ue,[t("span",{innerHTML:s.$t("home.independently-operated-by")},null,8,ge)])]),o(W)]))}});const fe=f(pe,[["__scopeId","data-v-53755ffd"]]),we=$("arrow-right",!0,function(e){return o("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[o("path",{d:"M41.9999 24H5.99994",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),o("path",{d:"M30 12L42 24L30 36",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),be=$("arrow-right-down",!0,function(e){return o("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[o("path",{d:"M37 19V37H19",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),o("path",{d:"M11.5439 11.5439L36.9997 36.9997",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),ve="/images/logo-seq.gray-white.png",j=e=>(V("data-v-0d15d2dd"),e=e(),q(),e),ke={class:"section-join-us pt-10"},$e={class:"responsive-width grid grid-cols-1 lg:grid-cols-2 pb-10"},ye=j(()=>t("br",null,null,-1)),je={class:"responsive-width grid grid-cols-1 lg:grid-cols-3 gap-4"},Le={class:"join-card become-a-member"},Ne={class:"join-card-title"},Ce={class:"card-first-line"},Se={class:"card-bottom"},xe={class:"join-card become-a-contributor"},Be={class:"join-card-title"},Me={class:"card-first-line"},Te={class:"card-bottom"},Fe={class:"join-card as-an-end-user"},ze={class:"join-card-title"},He={class:"card-first-line"},Ie={class:"card-bottom"},Ae={class:"responsive-width grid grid-cols-1 lg:grid-cols-8 py-5"},De={class:"text-4xl lg:col-start-4 lg:col-span-4 text-center lg:text-left"},Pe={class:"inline-block align-middle ml-10"},Ve=j(()=>t("img",{src:ve,alt:"NCC",class:"about-ncc-logo"},null,-1)),qe=m({__name:"TeamOfDreamers",setup(e){return(s,l)=>(c(),_("div",ke,[t("div",$e,[o(y,null,{default:n(()=>[i(a(s.$t("home.embrace-net"))+" ",1),ye,i(" "+a(s.$t("home.join-the-dreamers"))+" ",1),o(v(be),{class:"inline-block align-middle",theme:"outline",size:"48",fill:"#FFF"})]),_:1})]),t("div",je,[t("div",Le,[t("div",Ne,a(s.$t("home.as-a-member")),1),t("p",Ce,a(s.$t("home.as-a-member-q")),1),t("p",null,a(s.$t("home.as-a-member-a")),1),o(p,{height:"90px"}),t("div",Se,[o(g,{href:"/about/join","route-name":"about/join",target:"_blank",class:"join-btn"},{default:n(()=>[i(a(s.$t("home.as-a-member-b")),1)]),_:1})])]),t("div",xe,[t("div",Be,a(s.$t("home.as-a-contributor")),1),t("p",Me,a(s.$t("home.as-a-contributor-q")),1),t("p",null,a(s.$t("home.as-a-contributor-a")),1),o(p,{height:"90px"}),t("div",Te,[o(g,{href:"https://contribute.ncc.work",target:"_blank",mode:"classic",class:"join-btn"},{default:n(()=>[i(a(s.$t("home.as-a-contributor-b")),1)]),_:1})])]),t("div",Fe,[t("div",ze,a(s.$t("home.as-an-end-user")),1),t("p",He,a(s.$t("home.as-an-end-user-q")),1),t("p",null,a(s.$t("home.as-an-end-user-a")),1),o(p,{height:"90px"}),t("div",Ie,[o(g,{href:"/community-online","route-name":"community-online",target:"_blank",class:"join-btn"},{default:n(()=>[i(a(s.$t("home.as-an-end-user-b")),1)]),_:1})])])]),t("div",Ae,[t("div",De,[i(" New to NCC ? "),o(v(we),{class:"inline-block align-middle",theme:"outline",size:"36",fill:"#FFF"}),t("div",Pe,[Ve,o(g,{href:"/about/who-we-are","route-name":"about/who-we-are",target:"_blank",class:"about-ncc"},{default:n(()=>[i(" About NCC ")]),_:1})])])])]))}});const We=f(qe,[["__scopeId","data-v-0d15d2dd"]]),Ee=t("div",{class:"responsive-width text-2xl text-black dark:text-white h-40"},"Home",-1),nt=m({__name:"HomeView",setup(e){return N("Home"),(s,l)=>(c(),_(k,null,[Ee,o(fe),o(We),o(J),o(M,{"display-more-btn":!0}),o(se),o(le)],64))}});export{nt as default};
