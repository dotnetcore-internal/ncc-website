import{s as u}from"./usePageToolkits.js";import{T as p,_ as g}from"./TitleBlock.js";import{u as f,L as w}from"./LeftRightLayout.js";import{T as v,M as b}from"./MemberProjects.js";import{_ as $}from"./AnchorElement.vue_vue_type_script_setup_true_lang.js";import{d as i,o as c,c as d,b as s,e as o,a as t,r as k,t as a,$ as y,f as l,a0 as x,F as C}from"./vendor.js";import{_ as N}from"./_plugin-vue_export-helper.js";import"./useProjectToolkits.js";const T={class:"rounded-lg shadow-md overflow-hidden m-4 transition-all ease-in-out duration-500 hover:scale-105"},S=t("img",{src:"https://www.cncf.io/wp-content/uploads/2023/11/Single-Template-4-1-590x310.png"},null,-1),L={class:"block px-5 py-7 text-lg font-bold"},B={class:"block px-5 py-7 text-sm text-gray-500"},m=i({__name:"LatestNewsBlock",props:{image:null,date:null},setup(r){const e=f(),n=(_,h)=>y(_,h,{locales:e}).value;return(_,h)=>(c(),d("div",T,[s($,{class:"block w-full h-4/5"},{default:o(()=>[S,t("span",L,[k(_.$slots,"default")])]),_:3}),t("span",B,a(n(r.date,_.$t("_common.date-format"))),1)]))}}),M={class:"bg-white dark:bg-black"},D={class:"responsive-width py-5 pb-16"},E={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"},R=i({__name:"LatestNews",setup(r){return(e,n)=>(c(),d("div",M,[t("div",D,[s(w,null,{left:o(()=>[s(p,{"h1-mode":"false","color-mode":"auto","with-horizontal-rule":!1,"is-font-black":!1},{default:o(()=>[l(a(e.$t("media-latest-from-ncc")),1)]),_:1})]),right:o(()=>[s(v,{href:"/news","route-name":"news",title:"News",mode:"h5","class-value":"leading-7"},{default:o(()=>[l(a(e.$t("media-latest-news")),1)]),_:1})]),_:1}),t("div",E,[s(m,{image:"https://www.cncf.io/wp-content/uploads/2023/11/Single-Template-4-1-590x310.png",date:new Date},{default:o(()=>[l(" NCC 参加了 .NET Conf China 2023 ")]),_:1},8,["date"]),s(m,{image:"https://www.cncf.io/wp-content/uploads/2023/11/Single-Template-4-1-590x310.png",date:new Date},{default:o(()=>[l(" NCC 参加了 .NET Conf China 2023 ")]),_:1},8,["date"]),s(m,{image:"https://www.cncf.io/wp-content/uploads/2023/11/Single-Template-4-1-590x310.png",date:new Date},{default:o(()=>[l(" NCC 参加了 .NET Conf China 2023 ")]),_:1},8,["date"])])])]))}}),j=""+new URL("../images/partners/jetbrains.svg",import.meta.url).href,U=""+new URL("../images/partners/myget.svg",import.meta.url).href,V=""+new URL("../images/partners/oreilly.png",import.meta.url).href,G=""+new URL("../images/partners/material-theme.png",import.meta.url).href,P={class:"bg-gray-200/50 dark:bg-purple-900/10 dark:text-white"},z={class:"responsive-width"},A=x('<a href="https://www.jetbrains.com/?from=.NETCoreCommunity(NCC)" target="_blank" title="JetBrains" class="partner-item" data-v-7dd6cc4c><img src="'+j+'" alt="JetBrains" class="w-full h-full" data-v-7dd6cc4c></a><a href="https://www.myget.org/" target="_blank" title="MyGet" class="partner-item" data-v-7dd6cc4c><img src="'+U+'" alt="MyGet" class="w-full h-full" data-v-7dd6cc4c></a><a href="https://www.oreilly.com/pub/cpc/323206" target="_blank" title="MyGet" class="partner-item" data-v-7dd6cc4c><img src="'+V+'" alt="O&#39;REILLY" class="w-full h-full" data-v-7dd6cc4c></a><a href="https://www.material-theme.com/" target="_blank" title="MyGet" class="partner-item" data-v-7dd6cc4c><img src="'+G+'" alt="Material Theme" class="w-full h-full" data-v-7dd6cc4c></a>',4),F=i({__name:"PartnersAndSponsors",setup(r){return(e,n)=>(c(),d("div",P,[t("div",z,[s(p,{"h1-mode":"false","color-mode":"auto","with-horizontal-rule":!0,"is-font-black":!1},{default:o(()=>[l(a(e.$t("our-partners-title")),1)]),_:1}),A,s(g,{height:"1.25rem"})])]))}});const H=N(F,[["__scopeId","data-v-7dd6cc4c"]]),I={class:"bg-gray-900 dark:bg-fuchsia-900/20 text-white"},J={class:"responsive-width"},O={class:"lg:text-3xl md:text-2xl sm:text-lg font-light italic px-5 pb-10"},Y=t("br",null,null,-1),q=t("br",null,null,-1),K=i({__name:"Slogan",setup(r){return(e,n)=>(c(),d("div",I,[t("div",J,[s(p,{"h1-mode":"false","color-mode":"dark","with-horizontal-rule":!0,"is-font-black":!1},{default:o(()=>[l(a(e.$t("our-slogan-title")),1)]),_:1}),t("div",O,[l(a(e.$t("our-slogan-part1")),1),Y,l(" "+a(e.$t("our-slogan-part2")),1),q,l(" "+a(e.$t("our-slogan-part3")),1)])])]))}}),Q=t("div",{class:"responsive-width text-2xl text-black dark:text-white h-40"},"Home",-1),W={class:"bg-white dark:bg-black h-40"},X={class:"responsive-width"},Z=t("hr",null,null,-1),tt={class:"bg-white dark:bg-black h-40"},et={class:"responsive-width"},st=t("hr",null,null,-1),at={class:"bg-white dark:bg-black h-40"},ot={class:"responsive-width"},lt=t("hr",null,null,-1),ht=i({__name:"HomeView",setup(r){return u("Home"),(e,n)=>(c(),d(C,null,[Q,t("div",W,[t("div",X,[t("h1",null,a(e.$t("project-growing-for-ecosystem")),1),Z])]),t("div",tt,[t("div",et,[t("h1",null,a(e.$t("community-embrace-join")),1),st])]),t("div",at,[t("div",ot,[t("h1",null,a(e.$t("community-together-with-us")),1),lt])]),s(R),s(b,{"display-more-btn":!0}),s(H),s(K)],64))}});export{ht as default};
