import{d as k,j as g,k as p,o,a,m as f,v as h,u as s,g as r,f as m,h as i,b as c,t,e as d,R as K,F as _}from"./vendor.js";import{u as w}from"./uiStore.js";import{_ as u}from"./AnchorElement.vue_vue_type_script_setup_true_lang.js";import{T as b}from"./TitleBlock.js";import{_ as y}from"./PlaceholderBlock.vue_vue_type_script_setup_true_lang.js";import{_ as P}from"./_plugin-vue_export-helper.js";const M={class:"project-titles grid grid-cols-5 w-5/6 mx-auto"},S={key:0},B={key:1},C={key:2},D={key:3},F={key:4},E={key:0},H={key:1},N={key:2},T={key:3},V={key:4},z=k({__name:"ProjectHeader",props:{featureKey:null},setup(l){const j=w(),v=g(),n=p(()=>j.isMobileMode),$=p(()=>v.value?"#f8f8f8":"#000000");return(e,I)=>(o(),a(_,null,[f(r(y,{height:"20px"},null,512),[[h,!s(n)]]),f(m("div",M,[r(u,{class:d(["title",{"title-highlight":l.featureKey==="all"}]),href:"/projects","route-name":"projects",title:e.$t("project-all-full"),mode:"h5"},{default:i(()=>[c(t(e.$t("project-all")),1)]),_:1},8,["class","title"]),r(u,{class:d(["title",{"title-highlight":l.featureKey==="top-level"}]),href:"/top-level-projects","route-name":"top-level-projects",title:e.$t("project-top-level-full"),mode:"h5"},{default:i(()=>[c(t(e.$t("project-top-level")),1)]),_:1},8,["class","title"]),r(u,{class:d(["title",{"title-highlight":l.featureKey==="archived"}]),href:"/archived-projects","route-name":"archived-projects",title:e.$t("project-archived-full"),mode:"h5"},{default:i(()=>[c(t(e.$t("project-archived")),1)]),_:1},8,["class","title"]),r(u,{class:d(["title",{"title-highlight":l.featureKey==="maturity-model"}]),href:"/project-maturity-model","route-name":"project-maturity-model",title:e.$t("project-maturity-model"),mode:"h5"},{default:i(()=>[c(t(e.$t("project-maturity-model")),1)]),_:1},8,["class","title"]),r(u,{class:"title",href:"https://contribute.ncc.work/project-join-ncc",target:"_blank",title:e.$t("project-how-to-join-us"),mode:"classic"},{default:i(()=>[c(t(e.$t("project-contribute"))+" ",1),r(s(K),{class:"title-arrow",theme:"filled",size:"18",fill:s($)},null,8,["fill"])]),_:1},8,["title"])],512),[[h,!s(n)]]),f(m("div",null,[r(b,{"with-placeholder":!1,"is-font-black":!0},{default:i(()=>[l.featureKey==="all"?(o(),a("span",S,t(e.$t("project-all-full")),1)):l.featureKey==="top-level"?(o(),a("span",B,t(e.$t("project-top-level-full")),1)):l.featureKey==="archived"?(o(),a("span",C,t(e.$t("project-archived-full")),1)):l.featureKey==="maturity-model"?(o(),a("span",D,t(e.$t("project-maturity-model-full")),1)):(o(),a("span",F,"FeatureKey is Error"))]),_:1})],512),[[h,s(n)]]),m("div",{class:d(["p-5 mx-auto",{"project-desc":!s(n)}])},[l.featureKey==="all"?(o(),a("span",E,t(e.$t("project-all-desc")),1)):l.featureKey==="top-level"?(o(),a("span",H,t(e.$t("project-top-level-desc")),1)):l.featureKey==="archived"?(o(),a("span",N,t(e.$t("project-archived-desc")),1)):l.featureKey==="maturity-model"?(o(),a("span",T,t(e.$t("project-maturity-model-desc")),1)):(o(),a("span",V,"FeatureKey is Error"))],2),r(y,{height:"20px"})],64))}});const L=P(z,[["__scopeId","data-v-f74c6ddd"]]);export{L as P};
