import{_ as f}from"./preload-helper.js";import{d as h,a5 as v,k as u,x as k,y as E,o as x,z as T,a6 as L,u as w,a7 as g}from"./vendor.js";import{u as B}from"./useEmitter.js";import{u as R}from"./uiStore.js";const S=h({__name:"MarkdownRenderer",props:{source:null,i18n:{type:Boolean,default:!1},fallbackLocale:{default:"en"},includeFileExtension:{type:Boolean,default:!0},fileExtension:{default:".md"},retryTimeout:null,redirectTo404:{type:Boolean,default:!0}},setup(l){const t=l,m=g(),i=B(),d=R(),o=v(null),p=u(()=>t.i18n?`.${d.locale}`:""),_=u(()=>t.i18n?`.${t.fallbackLocale}`:""),c=u(()=>t.includeFileExtension?t.fileExtension:""),r=async(n,e,a=!1)=>{n.length===0?o.value="":(!e||e.length===0?e=p.value:e.startsWith(".")||(e=`.${e}`),f(()=>import("@/content/"+t.source+e+c.value),[]).then(s=>{o.value=s.default}).catch(()=>{!e||e.length===0?e=_.value:e.startsWith(".")||(e=`.${e}`),f(()=>import("../../content/"+t.source+e+c.value),[]).then(s=>{o.value=s.default}).catch(()=>{!a&&t.retryTimeout?y(t.retryTimeout,n,e):t.redirectTo404&&m.replace("/404")})}))},y=async(n,e,a)=>{setTimeout(async()=>{await r(e,a,!0)},n)};return k(async()=>{await r(t.source),i.on("toChangeLocale",async n=>{if(!t.i18n)return;const e=n;await r(t.source,e.locale)})}),E(()=>{i.off("toChangeLocale")}),(n,e)=>(x(),T(L(w(o)),{key:n.name}))}});export{S as _};
