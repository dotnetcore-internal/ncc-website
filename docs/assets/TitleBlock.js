import{d as f,k as l,a as r,b as d,u as s,o as a,r as k,z as h,Z as p,F as _}from"./vendor.js";import{_ as b}from"./PlaceholderBlock.vue_vue_type_script_setup_true_lang.js";import{_ as B}from"./_plugin-vue_export-helper.js";const w=f({__name:"HorizontalRuleElement",props:{colorMode:{default:"auto"}},setup(t){const e=t,c=l(()=>{switch(e.colorMode){case"dark":case"always-light":return"border-white";case"light":case"always-dark":return"border-black";default:return"border-black dark:border-white"}});return(n,i)=>(a(),r("hr",{class:d(["m-5",s(c)])},null,2))}}),y=f({__name:"TitleBlock",props:{h1Mode:{default:"true"},colorMode:{default:"auto"},withHorizontalRule:{type:Boolean,default:!1},withPlaceholder:{type:Boolean,default:void 0},isFontBold:{type:Boolean,default:!1},isFontBlack:{type:Boolean,default:!0}},setup(t){const e=t,c=l(()=>{switch(e.colorMode){case"dark":case"always-light":return"text-white";case"light":case"always-dark":return"text-black";default:return"text-black dark:text-white"}}),n=l(()=>e.isFontBlack?"font-black":""),i=l(()=>e.isFontBold?"font-bold":""),u=l(()=>`${c.value} ${n.value} ${i.value}`),m=l(()=>{var o;return e.withHorizontalRule?!1:(o=e.withPlaceholder)!=null?o:!0});return(o,g)=>(a(),r(_,null,[t.h1Mode?(a(),r("h1",{key:0,class:d(["title-block text-4xl tracking-tight p-5 pb-0",s(u)])},[k(o.$slots,"default",{},void 0,!0)],2)):(a(),r("div",{key:1,class:d(["title-block text-3xl tracking-tight p-5 pb-0",s(u)])},[k(o.$slots,"default",{},void 0,!0)],2)),t.withHorizontalRule?(a(),h(w,{key:2,colorMode:t.colorMode},null,8,["colorMode"])):s(m)?(a(),h(b,{key:3,height:"1.25rem"})):p("",!0)],64))}});const F=B(y,[["__scopeId","data-v-5a0022b5"]]);export{F as T,w as _};
