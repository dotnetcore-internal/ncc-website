import{u as i}from"./useEmitter.js";import{u as c}from"./uiStore.js";import{c as p}from"./usePageToolkits.js";import{l as m}from"./useProjectToolkits.js";import{B as f}from"./BodyBlock.js";import{M as u}from"./MemberProjects.js";import{P as d}from"./ProjectHeader.js";import{P as _}from"./ProjectCards.js";import{_ as h}from"./PlaceholderBlock.vue_vue_type_script_setup_true_lang.js";import{d as j,a0 as y,x as g,y as v,a as P,f as e,g as l,F as x,o as B,h as C,t as k}from"./vendor.js";import"./preload-helper.js";import"./useResource.js";import"./axios.js";import"./_plugin-vue_export-helper.js";import"./LeftRightLayout.js";import"./TitleBlock.js";import"./AnchorElement.vue_vue_type_script_setup_true_lang.js";const I=j({__name:"TopLevelView",setup(w){const n=c(),a=i(),t=y([]),s=o=>{t.length=0;for(const r of o)t.push(r)};return p("project-top-level-full","i18n"),g(async()=>{a.on("toChangeLocale",async o=>{await m(o.locale,s)}),await m(n.locale,s)}),v(()=>{a.off("toChangeLocale")}),(o,r)=>(B(),P(x,null,[e(f,null,{default:l(()=>[e(d,{"feature-key":"top-level"}),e(_,{models:t,for:"top-level"},null,8,["models"])]),_:1}),e(h,{height:"90px"}),e(u,{models:t},{default:l(()=>[C(k(o.$t("our-projects-title-by-name")),1)]),_:1},8,["models"])],64))}});export{I as default};
