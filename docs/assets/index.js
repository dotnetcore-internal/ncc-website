import{c as ue,n as O,d as y,o as p,a as b,r as _,t as s,b as D,w as T,u as i,e,f as o,g as a,h as c,p as U,i as G,j as X,k as N,l as C,m as M,v as L,H as he,C as me,T as K,F as R,q as W,s as E,x as le,y as fe,z as F,U as pe,D as _e,A as $e,R as j,B as be,E as ge,G as ve,W as ye,I as ke,J as we,K as je,L as Ce,M as ae,N as Me,O as Le,P as ze}from"./vendor.js";import{g as I,u as ne,l as Te,s as Ne,a as Ie,r as ie,b as Se}from"./usePageToolkits.js";import{g as qe,u as Pe}from"./useResource.js";import{u as B}from"./uiStore.js";import{_ as u}from"./AnchorElement.vue_vue_type_script_setup_true_lang.js";import{_ as S}from"./_plugin-vue_export-helper.js";import{T as Fe,_ as Re}from"./TitleBlock.js";import{_ as q}from"./PlaceholderBlock.vue_vue_type_script_setup_true_lang.js";import{L as A}from"./LeftRightLayout.js";import{u as ce}from"./useEmitter.js";import{_ as Be}from"./official-wechat-account-qrcode.js";import"./preload-helper.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))r(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function d(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerpolicy&&(h.referrerPolicy=m.referrerpolicy),m.crossorigin==="use-credentials"?h.credentials="include":m.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(m){if(m.ep)return;m.ep=!0;const h=d(m);fetch(m.href,h)}})();const He="20231104002",Oe=n=>{if(n===null)return!0;const t=Number.parseInt(n!=null?n:"0"),d=Number.parseInt(He);return t<d};function Ee(n={locale:"en"}){const t=ue(n);return re(t,n.locale),t}function re(n,t){var d;n.mode==="legacy"?n.global.locale=t:n.global.locale.value=t,(d=document.querySelector("html"))==null||d.setAttribute("lang",t)}async function ee(n,t,d){const r=d==="/"?"_common":d.replace(/\//g,"_"),m=`/locales/${t}/t_${r}.json`,h=qe(d,t);return h&&!Oe(h[r].version)?se(t)?n.global.mergeLocaleMessage(t,h):(te(t),n.global.setLocaleMessage(t,h)):await fetch(m).then(f=>f.json()).then(f=>{se(t)?n.global.mergeLocaleMessage(t,f):(te(t),n.global.setLocaleMessage(t,f)),Pe(d,t,f)}).catch(f=>{console.log(f),t="en"}),De(d,t),O()}const Q=[];function te(n){Q.includes(n)||Q.push(n)}function se(n){return Q.includes(n)}const J=[];function De(n,t){J.includes(`${t}#${n}`)||J.push(`${t}#${n}`)}function oe(n,t){return J.includes(`${t}#${n}`)}const Ae=n=>{const t=/^(\/news\/|\/announcements\/|\/weekly\/|\/projects\/|\/rules\/|\/story\/)/,d=n.match(t);return d?d[0].replace(/\/$/,""):null},Ue=n=>{switch(n.trim()){case"/":case"/all-ncc":case"/wechat-open-ncc":case"/conduct":case"/faq":case"/about/who-we-are":case"/about/join":case"/about/contact":case"/people/project-management-committee":case"/people/technical-oversight-committee":case"/projects":case"/top-level-projects":case"/archived-projects":case"/project-maturity-model":case"/community-online":case"/brand-guidelines":case"/participation-guidelines":case"/website-source-code-usage-guidelines":case"/news":case"/announcements":case"/weekly":case"/rules":case"/story":return!0;default:return!1}},Ge=n=>{const t=/^(\/news|\/announcements|\/weekly|\/projects|\/rules|\/story)/;return!!n.match(t)},Ke=n=>Ue(n)||Ge(n);function Ve(n){const t=Ae(n);return t||n}const de=async(n,t,d)=>{if(Ke(d)){const r=Ve(d);oe(r,t)||await ee(n,t,r)}oe("/",t)||await ee(n,t,"/"),re(n,t)},We=""+new URL("../images/logo.black.png",import.meta.url).href,Qe={key:0},Je={key:1},Ye={key:0},Xe={key:1},Y=y({__name:"JoinUsButton",props:{mode:{default:"inline-block"},needRefresh:{type:Boolean,default:!1}},setup(n){const t=n;return(d,r)=>n.needRefresh?(p(),b("a",{key:0,href:"/about/join",class:D(["text-white text-sm font-bold text-center px-9 py-2 rounded-full bg-gradient-to-br from-pink-700 to-purple-700",{block:t.mode==="block","inline-block":t.mode==="inline-block"}])},[d.$slots.default?(p(),b("span",Qe,[_(d.$slots,"default")])):(p(),b("span",Je,s(d.$t("join-at-header-default")),1))],2)):(p(),b("a",{key:1,href:"/about/join",onClick:r[0]||(r[0]=T(m=>i(I)("about/join"),["prevent"])),class:D(["text-white text-sm font-bold text-center px-9 py-2 rounded-full bg-gradient-to-br from-pink-700 to-purple-700",{block:t.mode==="block","inline-block":t.mode==="inline-block"}])},[d.$slots.default?(p(),b("span",Ye,[_(d.$slots,"default")])):(p(),b("span",Xe,s(d.$t("join-at-header-default")),1))],2))}}),V=n=>(U("data-v-35c1bb59"),n=n(),G(),n),Ze={class:"p-5 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4"},xe={class:"nav-about-us"},et={class:"nav-title"},tt={class:"nav-item"},st={class:"nav-item"},ot={class:"nav-item"},lt={class:"nav-item"},at={class:"nav-item"},nt=V(()=>e("hr",{class:"my-5 w-5 border-white/50"},null,-1)),it={class:"nav-item"},ct={class:"nav-projects"},rt={class:"nav-title"},dt={class:"nav-item"},ut={class:"nav-item"},ht={class:"nav-item"},mt={class:"nav-item"},ft={class:"nav-item"},pt=V(()=>e("hr",{class:"my-5 w-5 border-white/50"},null,-1)),_t={class:"nav-item"},$t={class:"nav-item"},bt={class:"nav-Learning"},gt={class:"nav-title"},vt={class:"nav-community"},yt={class:"nav-title"},kt={class:"nav-item"},wt={class:"nav-item"},jt={class:"nav-item"},Ct={class:"nav-item"},Mt={class:"nav-item"},Lt=V(()=>e("hr",{class:"my-5 w-5 border-white/50"},null,-1)),zt={class:"nav-item"},Tt={class:"nav-item"},Nt={class:"nav-resource"},It={class:"nav-title"},St={class:"nav-item"},qt={class:"nav-item"},Pt={class:"nav-item"},Ft={class:"nav-item"},Rt={class:"nav-item"},Bt=V(()=>e("hr",{class:"my-5 w-5 border-white/50"},null,-1)),Ht={class:"nav-item"},Ot={class:"nav-item"},Et={class:"nav-resource"},Dt=y({__name:"NavigationResources",setup(n){return(t,d)=>(p(),b("div",Ze,[e("div",xe,[e("span",et,s(t.$t("about-us")),1),e("span",tt,[o(u,{href:"/about/who-we-are","route-name":"about/who-we-are",title:t.$t("who-we-are")},{default:a(()=>[c(s(t.$t("who-we-are")),1)]),_:1},8,["title"])]),e("span",st,[o(u,{href:"/people/project-management-committee","route-name":"people/project-management-committee",title:t.$t("pmc")},{default:a(()=>[c(s(t.$t("pmc")),1)]),_:1},8,["title"])]),e("span",ot,[o(u,{href:"/conduct","route-name":"conduct",title:t.$t("code-of-conduct")},{default:a(()=>[c(s(t.$t("code-of-conduct")),1)]),_:1},8,["title"])]),e("span",lt,[o(u,{href:"/about/story","route-name":"about/story",title:t.$t("story")},{default:a(()=>[c(s(t.$t("story")),1)]),_:1},8,["title"])]),e("span",at,[o(u,{href:"/about/faq","route-name":"about/faq",title:t.$t("faq")},{default:a(()=>[c(s(t.$t("faq")),1)]),_:1},8,["title"])]),nt,e("span",it,[o(u,{href:"/about/contact","route-name":"about/contact",title:t.$t("contact-us")},{default:a(()=>[c(s(t.$t("contact-us")),1)]),_:1},8,["title"])])]),e("div",ct,[e("span",rt,s(t.$t("projects")),1),e("span",dt,[o(u,{href:"https://contribute.ncc.work",title:t.$t("project-contribute"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(t.$t("project-contribute")),1)]),_:1},8,["title"])]),e("span",ut,[o(u,{href:"https://landscape.ncc.work",title:t.$t("project-landscape"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(t.$t("project-landscape")),1)]),_:1},8,["title"])]),e("span",ht,[o(u,{href:"https://tools.ncc.work",title:t.$t("project-tools"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(t.$t("project-tools")),1)]),_:1},8,["title"])]),e("span",mt,[o(u,{href:"/projects","route-name":"projects",title:t.$t("project-member-full")},{default:a(()=>[c(s(t.$t("project-member")),1)]),_:1},8,["title"])]),e("span",ft,[o(u,{href:"/archived-projects","route-name":"archived-projects",title:t.$t("project-archived-full")},{default:a(()=>[c(s(t.$t("project-archived-full")),1)]),_:1},8,["title"])]),pt,e("span",_t,[o(u,{href:"/project-maturity-model","route-name":"project-maturity-model",title:t.$t("project-maturity-model-full")},{default:a(()=>[c(s(t.$t("project-maturity-model-full")),1)]),_:1},8,["title"])]),e("span",$t,[o(u,{href:"https://contribute.ncc.work/project-join-ncc",title:t.$t("project-how-to-join-us"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(t.$t("project-how-to-join-us")),1)]),_:1},8,["title"])])]),e("div",bt,[e("span",gt,s(t.$t("learning")),1)]),e("div",vt,[e("span",yt,s(t.$t("community")),1),e("span",kt,[o(u,{href:"https://events.ncc.work",title:t.$t("community-events"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(t.$t("community-events")),1)]),_:1},8,["title"])]),e("span",wt,[o(u,{href:"https://events.ncc.work/meetups",title:t.$t("community-meetups"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(t.$t("community-meetups")),1)]),_:1},8,["title"])]),e("span",jt,[o(u,{href:"https://2f.ncc.work",title:t.$t("community-2f"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(t.$t("community-2f")),1)]),_:1},8,["title"])]),e("span",Ct,[o(u,{href:"/community-online","route-name":"community-online",title:t.$t("community.online")},{default:a(()=>[c(s(t.$t("community-online")),1)]),_:1},8,["title"])]),e("span",Mt,[o(u,{href:"https://glossary.ncc.work",title:t.$t("glossary"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(t.$t("glossary")),1)]),_:1},8,["title"])]),Lt,e("span",zt,[o(u,{href:"/participation-guidelines","route-name":"participation-guidelines",title:t.$t("community-participation")},{default:a(()=>[c(s(t.$t("community-participation")),1)]),_:1},8,["title"])]),e("span",Tt,[o(u,{href:"/rules","route-name":"rules",title:t.$t("community-rules")},{default:a(()=>[c(s(t.$t("community-rules")),1)]),_:1},8,["title"])])]),e("div",Nt,[e("span",It,s(t.$t("resources-and-media")),1),e("span",St,[o(u,{href:"/news","route-name":"news",title:t.$t("media-news")},{default:a(()=>[c(s(t.$t("media-news")),1)]),_:1},8,["title"])]),e("span",qt,[o(u,{href:"/weekly","route-name":"weekly",title:t.$t("media-weekly")},{default:a(()=>[c(s(t.$t("media-weekly")),1)]),_:1},8,["title"])]),e("span",Pt,[o(u,{href:"/announcements","route-name":"announcements",title:t.$t("media-announcements")},{default:a(()=>[c(s(t.$t("media-announcements")),1)]),_:1},8,["title"])]),e("span",Ft,[o(u,{href:"/brand-guidelines","route-name":"brand-guidelines",title:t.$t("media-brand")},{default:a(()=>[c(s(t.$t("media-brand")),1)]),_:1},8,["title"])]),e("span",Rt,[o(u,{href:"https://github.com/dotnetcore/ncc-artwork",title:t.$t("media-logos"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(t.$t("media-logos")),1)]),_:1},8,["title"])]),Bt,e("span",Ht,[o(u,{href:"https://github.com/dotnetcore",title:"NCC@GitHub",target:"_blank",mode:"classic"},{default:a(()=>[c("NCC@GitHub")]),_:1})]),e("span",Ot,[o(u,{href:"https://gitee.com/dotnetcore",title:"NCC@Gitee",target:"_blank",mode:"classic"},{default:a(()=>[c("NCC@Gitee")]),_:1})])]),e("div",Et,[o(Y,null,{default:a(()=>[c(s(t.$t("join-at-footer")),1)]),_:1})])]))}});const At=S(Dt,[["__scopeId","data-v-35c1bb59"]]),Ut={class:"responsive-width"},Gt={class:"inline-block align-top"},Kt=["src"],Vt={class:"ml-5 inline-block"},Wt={class:"mx-auto mt-6"},Qt={class:"responsive-width"},Jt={class:"inline-block align-top mt-2 ml-4"},Yt=["src"],Xt={id:"mobile-menu"},Zt={class:"fixed top-20 left-0 right-0 bottom-0 overflow-scroll"},xt={class:"responsive-width"},es={class:"title-ul"},ts={class:"px-10"},ss={class:"text-lg"},os=y({__name:"TitleFrame",setup(n){const t=B(),d=X(),r=N(()=>d.value?"/images/logo-header-dark.png":"/images/logo-header-light.png"),m=N(()=>d.value?"#f8f8f8":"#000000"),h=N(()=>t.isMobileMode?"bg-white dark:bg-black":"backdrop-blur-md bg-white/75 dark:bg-black/75"),f=C(!1),l=()=>{f.value?ne():Te(),f.value=!f.value};return(z,k)=>(p(),b(R,null,[e("header",{class:D([i(h),"h-20 w-full shadow-md fixed left-0 top-0 right-0 z-50"])},[M(e("div",Ut,[o(A,null,{left:a(()=>[e("div",Gt,[e("a",{href:"/app/public",onClick:k[0]||(k[0]=T(v=>i(I)("home"),["prevent"])),title:".NET Core Community"},[e("img",{src:i(r),width:"180",alt:"NCC"},null,8,Kt)])]),e("div",Vt,[_(z.$slots,"default",{},void 0,!0)])]),right:a(()=>[e("div",Wt,[o(Y,null,{default:a(()=>[c(s(z.$t("join-at-header-desktop")),1)]),_:1})])]),_:3})],512),[[L,!i(t).isMobileMode]]),M(e("div",Qt,[o(A,null,{left:a(()=>[e("div",Jt,[e("a",{href:"/",onClick:k[1]||(k[1]=T(v=>i(I)("home"),["prevent"])),title:".NET Core Community"},[e("img",{src:i(r),width:"140",alt:"NCC"},null,8,Yt)])])]),right:a(()=>[e("div",{class:"mr-8 mt-8 cursor-pointer",onClick:l},[M(o(i(he),{theme:"filled",size:"28",fill:i(m)},null,8,["fill"]),[[L,!f.value]]),M(o(i(me),{theme:"filled",size:"28",fill:i(m)},null,8,["fill"]),[[L,f.value]])])]),_:1})],512),[[L,i(t).isMobileMode]])],2),o(K,{"enter-active-class":"animate__animated animate__fadeIn animate__faster","leave-active-class":"animate__animated animate__fadeOut animate__faster"},{default:a(()=>[M(e("div",Xt,[e("div",Zt,[e("div",xt,[e("ul",es,[_(z.$slots,"default",{},void 0,!0)]),e("div",ts,[o(Y,{mode:"block","need-refresh":!0},{default:a(()=>[e("span",ss,s(z.$t("join-at-header-mobile")),1)]),_:1})])])])],512),[[L,i(t).isMobileMode&&f.value]])]),_:3})],64))}});const ls=S(os,[["__scopeId","data-v-3f90b2bb"]]),as=n=>(U("data-v-8c9379c5"),n=n(),G(),n),ns=as(()=>e("div",{class:"w-full h-0.5 bg-purple-600/40"},null,-1)),is={class:"responsive-width h-full"},cs={class:"grid grid-cols-3 h-full"},rs={class:"col1 h-full block pr-6"},ds={class:"col2 h-full block pr-3"},us={class:"col3 h-full block border-l-2 border-gray-200/40 dark:border-white/10 pl-3"},hs=y({__name:"TitleContentForDesktop",props:{featureKey:null},setup(n){const t=n,d=ce(),r=C(null),m=C(null),{isOutside:h}=W(r),{isOutside:f}=W(m),l=C(null),z=$=>{$===t.featureKey&&(l.value=!0),O(()=>{l.value=null})},k=C(!0),v=C(!0);E(h,$=>{let w=200;$&&(w=500),setTimeout(()=>{O(()=>{k.value=$})},w)}),E(f,$=>{let w=200;$&&(w=500),setTimeout(()=>{O(()=>{v.value=$})},w)});const g=N(()=>l.value?!1:!k.value||!v.value);return E(g,$=>{$&&d.emit("toSelectHeaderPanelFor",{featureKey:t.featureKey})}),le(()=>{d.on("toSelectHeaderPanelFor",$=>{const w=$;w.featureKey!==t.featureKey&&z(w.featureKey)})}),fe(()=>{d.off("toSelectHeaderPanelFor")}),($,w)=>(p(),b(R,null,[e("a",{href:"#",onClick:w[0]||(w[0]=T(()=>{},["prevent"])),class:D(["block-title text-gray-500 text-sm text-center z-50",{"border-b-4":i(g),"border-purple-800":i(g),"dark:border-purple-500":i(g),"text-purple-700":i(g),"dark:text-purple-100":i(g)}]),ref_key:"itemTarget",ref:r},[_($.$slots,"default",{},void 0,!0)],2),o(K,{"enter-active-class":"animate__animated animate__fadeIn animate__faster"},{default:a(()=>[M(e("div",{class:"block-body",ref_key:"panelTarget",ref:m},[ns,e("div",is,[e("div",cs,[e("div",rs,[_($.$slots,"col1",{},void 0,!0),o(q,{height:"1.25rem"})]),e("div",ds,[_($.$slots,"col2",{},void 0,!0),o(q,{height:"1.25rem"})]),e("div",us,[_($.$slots,"col3",{},void 0,!0),o(q,{height:"1.25rem"})])])])],512),[[L,i(g)]])]),_:3})],64))}});const ms=S(hs,[["__scopeId","data-v-8c9379c5"]]),fs={class:"title-li-item"},ps={class:"m-3"},_s={class:"block-body-mobile"},$s={class:"responsive-width"},bs={class:"col1"},gs={class:"col2"},vs={class:"col3"},ys=y({__name:"TitleContentForMobile",setup(n){const t=X(),d=C(!1),r=N(()=>t.value?"#f8f8f8":"#000000"),m=()=>{d.value=!d.value};return(h,f)=>(p(),b("li",fs,[e("div",{onClick:m,class:"cursor-pointer"},[o(A,null,{left:a(()=>[_(h.$slots,"default",{},void 0,!0)]),right:a(()=>[e("div",ps,[d.value?(p(),F(i(pe),{key:0,theme:"filled",size:"16",fill:i(r),class:"mobile-control-icon"},null,8,["fill"])):(p(),F(i(_e),{key:1,theme:"filled",size:"16",fill:i(r),class:"mobile-control-icon"},null,8,["fill"]))])]),_:3})]),M(e("div",_s,[e("div",$s,[e("div",bs,[_(h.$slots,"col1",{},void 0,!0)]),e("div",gs,[_(h.$slots,"col2",{},void 0,!0)]),e("div",vs,[_(h.$slots,"col3",{},void 0,!0)])])],512),[[L,d.value]])]))}});const ks=S(ys,[["__scopeId","data-v-4ab7a8cf"]]),P=y({__name:"TitleContentBlock",props:{featureKey:null},setup(n){const t=n,d=B();return(r,m)=>i(d).isMobileMode?(p(),F(ks,{key:0},{default:a(()=>[_(r.$slots,"default")]),col1:a(()=>[_(r.$slots,"col1")]),col2:a(()=>[_(r.$slots,"col2")]),col3:a(()=>[_(r.$slots,"col3")]),_:3})):(p(),F(ms,{key:1,"feature-key":t.featureKey},{default:a(()=>[_(r.$slots,"default")]),col1:a(()=>[_(r.$slots,"col1")]),col2:a(()=>[_(r.$slots,"col2")]),col3:a(()=>[_(r.$slots,"col3")]),_:3},8,["feature-key"]))}}),ws={class:"header-title"},js={class:"header-sub-title"},Cs={class:"header-content"},Ms={class:"header-content"},Ls={class:"header-sub-title header-sub-title-secondary"},zs={class:"header-content"},Ts={class:"header-content"},Ns={class:"header-sub-title header-sub-title-secondary"},Is={class:"header-content"},Ss={class:"header-title"},qs={class:"header-sub-title"},Ps={class:"header-content"},Fs={class:"header-content"},Rs={class:"header-content"},Bs={class:"header-content"},Hs={class:"header-sub-title header-sub-title-secondary"},Os={class:"header-content"},Es={class:"header-content"},Ds={class:"header-content"},As={class:"header-sub-title header-sub-title-secondary"},Us={class:"header-content"},Gs={class:"header-content"},Ks={class:"header-content"},Vs={class:"header-title"},Ws={class:"header-sub-title"},Qs={class:"header-sub-title header-sub-title-secondary"},Js={class:"header-sub-title header-sub-title-secondary"},Ys={class:"header-title"},Xs={class:"header-sub-title"},Zs={class:"header-content"},xs={class:"header-content"},eo={class:"header-content"},to={class:"header-sub-title header-sub-title-secondary"},so={class:"header-content"},oo={class:"header-content"},lo={class:"header-content"},ao={class:"header-sub-title header-sub-title-secondary"},no={class:"header-content"},io={class:"header-title"},co={class:"header-sub-title"},ro={class:"header-content"},uo={class:"header-content"},ho={class:"header-content"},mo={class:"header-sub-title header-sub-title-secondary"},fo={class:"header-content"},po={class:"header-content"},_o=y({__name:"HeaderTitle",setup(n){be(l=>({"7aa11206":i(f)}));const t=B(),{width:d}=$e(),r=l=>{l<1024?(t.setMobileMode(!0),ne()):t.setMobileMode(!1)};E(d,l=>{r(l)});const m=X(),h=N(()=>m.value?"#f8f8f8":"#000000"),f=N(()=>t.isMobileMode?"2px":"0");return le(()=>{r(d.value)}),(l,z)=>(p(),F(ls,null,{default:a(()=>[o(P,{"feature-key":"about"},{col1:a(()=>[e("ul",null,[e("li",js,s(l.$t("about-block-discover-ncc")),1),e("li",Cs,[o(u,{href:"/about/who-we-are",title:l.$t("who-we-are"),mode:"classic"},{default:a(()=>[c(s(l.$t("who-we-are"))+" ",1),e("span",null,s(l.$t("who-we-are-desc")),1)]),_:1},8,["title"])]),e("li",Ms,[o(u,{href:"/people/project-management-committee",title:l.$t("pmc"),mode:"classic"},{default:a(()=>[c(s(l.$t("pmc"))+" ",1),e("span",null,s(l.$t("pmc-desc")),1)]),_:1},8,["title"])])])]),col2:a(()=>[e("ul",null,[e("li",Ls,s(l.$t("about-block-additional-info")),1),e("li",zs,[o(u,{href:"/conduct",title:l.$t("code-of-conduct"),mode:"classic"},{default:a(()=>[c(s(l.$t("code-of-conduct")),1)]),_:1},8,["title"])]),e("li",Ts,[o(u,{href:"/about/faq",title:l.$t("faq"),mode:"classic"},{default:a(()=>[c(s(l.$t("faq")),1)]),_:1},8,["title"])])])]),col3:a(()=>[e("ul",null,[e("li",Ns,s(l.$t("about-block-featured-reads")),1),e("li",Is,[o(u,{href:"/about/story",title:l.$t("story"),mode:"classic"},{default:a(()=>[c(s(l.$t("story"))+" ",1),e("span",null,s(l.$t("story-desc")),1)]),_:1},8,["title"])])])]),default:a(()=>[e("span",ws,s(l.$t("about")),1)]),_:1}),o(P,{"feature-key":"projects"},{col1:a(()=>[e("ul",null,[e("li",qs,s(l.$t("projects-block-ncc-projects")),1),e("li",Ps,[o(u,{href:"/projects",title:l.$t("project-all-full"),mode:"classic"},{default:a(()=>[c(s(l.$t("project-all"))+" ",1),e("span",null,s(l.$t("project-all-desc")),1)]),_:1},8,["title"])]),e("li",Fs,[o(u,{href:"/top-level-projects",title:l.$t("project-top-level-full"),mode:"classic"},{default:a(()=>[c(s(l.$t("project-top-level"))+" ",1),e("span",null,s(l.$t("project-top-level-desc")),1)]),_:1},8,["title"])]),e("li",Rs,[o(u,{href:"/archived-projects",title:l.$t("project-archived-full"),mode:"classic"},{default:a(()=>[c(s(l.$t("project-archived"))+" ",1),e("span",null,s(l.$t("project-archived-desc")),1)]),_:1},8,["title"])]),e("li",Bs,[o(u,{href:"/project-maturity-model",title:l.$t("project-maturity-model-full"),mode:"classic"},{default:a(()=>[c(s(l.$t("project-maturity-model"))+" ",1),e("span",null,s(l.$t("project-maturity-model-desc")),1)]),_:1},8,["title"])])])]),col2:a(()=>[e("ul",null,[e("li",Hs,s(l.$t("projects-block-get-involved")),1),e("li",Os,[o(u,{href:"https://contribute.ncc.work",title:l.$t("project-contribute"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(l.$t("project-contribute"))+" ",1),o(i(j),{class:"header-content-arrow",theme:"filled",size:"24",fill:i(h)},null,8,["fill"]),e("span",null,s(l.$t("project-contribute-desc")),1)]),_:1},8,["title"])]),e("li",Es,[o(u,{href:"https://landscape.ncc.work",title:l.$t("project-landscape"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(l.$t("project-landscape"))+" ",1),o(i(j),{class:"header-content-arrow",theme:"filled",size:"24",fill:i(h)},null,8,["fill"]),e("span",null,s(l.$t("project-landscape-desc")),1)]),_:1},8,["title"])]),e("li",Ds,[o(u,{href:"https://contribute.ncc.work/project-join-ncc",title:l.$t("project-how-to-join-us"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(l.$t("project-how-to-join-us"))+" ",1),o(i(j),{class:"header-content-arrow",theme:"filled",size:"24",fill:i(h)},null,8,["fill"])]),_:1},8,["title"])])])]),col3:a(()=>[e("ul",null,[e("li",As,s(l.$t("projects-block-tools-resources")),1),e("li",Us,[o(u,{href:"https://tools.ncc.work",title:l.$t("project-tools"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(l.$t("project-tools"))+" ",1),o(i(j),{class:"header-content-arrow",theme:"filled",size:"24",fill:i(h)},null,8,["fill"])]),_:1},8,["title"])]),e("li",Gs,[o(u,{href:"https://github.com/dotnetcore",title:"NCC@GitHub",target:"_blank",mode:"classic"},{default:a(()=>[c(" NCC@GitHub "),o(i(j),{class:"header-content-arrow",theme:"filled",size:"24",fill:i(h)},null,8,["fill"])]),_:1})]),e("li",Ks,[o(u,{href:"https://gitee.com/dotnetcore",title:"NCC@Gitee",target:"_blank",mode:"classic"},{default:a(()=>[c(" NCC@Gitee "),o(i(j),{class:"header-content-arrow",theme:"filled",size:"24",fill:i(h)},null,8,["fill"])]),_:1})])])]),default:a(()=>[e("span",Ss,s(l.$t("projects")),1)]),_:1}),o(P,{"feature-key":"learning"},{col1:a(()=>[e("ul",null,[e("li",Ws,s(l.$t("learning-block-applying")),1)])]),col2:a(()=>[e("ul",null,[e("li",Qs,s(l.$t("learning-block-additional-info")),1)])]),col3:a(()=>[e("ul",null,[e("li",Js,s(l.$t("learning-block-featured-reads")),1)])]),default:a(()=>[e("span",Vs,s(l.$t("learning")),1)]),_:1}),o(P,{"feature-key":"community"},{col1:a(()=>[e("ul",null,[e("li",Xs,s(l.$t("community-block-take-part")),1),e("li",Zs,[o(u,{href:"https://events.ncc.work",title:l.$t("community-events"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(l.$t("community-events"))+" ",1),o(i(j),{class:"header-content-arrow",theme:"filled",size:"24",fill:i(h)},null,8,["fill"]),e("span",null,s(l.$t("community-events-desc")),1)]),_:1},8,["title"])]),e("li",xs,[o(u,{href:"https://events.ncc.work/meetups",title:l.$t("community-meetups"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(l.$t("community-meetups"))+" ",1),o(i(j),{class:"header-content-arrow",theme:"filled",size:"24",fill:i(h)},null,8,["fill"]),e("span",null,s(l.$t("community-meetups-desc")),1)]),_:1},8,["title"])]),e("li",eo,[o(u,{href:"https://2f.ncc.work",title:l.$t("community-2f"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(l.$t("community-2f"))+" ",1),o(i(j),{class:"header-content-arrow",theme:"filled",size:"24",fill:i(h)},null,8,["fill"]),e("span",null,s(l.$t("community-2f-desc")),1)]),_:1},8,["title"])])])]),col2:a(()=>[e("ul",null,[e("li",to,s(l.$t("community-block-content")),1),e("li",so,[o(u,{href:"/community-online",title:l.$t("community-online"),mode:"classic"},{default:a(()=>[c(s(l.$t("community-online"))+" ",1),e("span",null,s(l.$t("community-online-desc")),1)]),_:1},8,["title"])]),e("li",oo,[o(u,{href:"/participation-guidelines",title:l.$t("community-participation"),mode:"classic"},{default:a(()=>[c(s(l.$t("community-participation"))+" ",1),e("span",null,s(l.$t("community-participation-desc")),1)]),_:1},8,["title"])]),e("li",lo,[o(u,{href:"/rules",title:l.$t("community-rules"),mode:"classic"},{default:a(()=>[c(s(l.$t("community-rules"))+" ",1),e("span",null,s(l.$t("community-rules-desc")),1)]),_:1},8,["title"])])])]),col3:a(()=>[e("ul",null,[e("li",ao,s(l.$t("community-block-resources")),1),e("li",no,[o(u,{href:"https://glossary.ncc.work",title:l.$t("glossary"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(l.$t("glossary"))+" ",1),o(i(j),{class:"header-content-arrow",theme:"filled",size:"24",fill:i(h)},null,8,["fill"]),e("span",null,s(l.$t("glossary-desc")),1)]),_:1},8,["title"])])])]),default:a(()=>[e("span",Ys,s(l.$t("community")),1)]),_:1}),o(P,{"feature-key":"resource"},{col1:a(()=>[e("ul",null,[e("li",co,s(l.$t("media-block-news")),1),e("li",ro,[o(u,{href:"/news",title:l.$t("media-news"),mode:"classic"},{default:a(()=>[c(s(l.$t("media-news"))+" ",1),e("span",null,s(l.$t("media-news-desc")),1)]),_:1},8,["title"])]),e("li",uo,[o(u,{href:"/weekly",title:l.$t("media-weekly"),mode:"classic"},{default:a(()=>[c(s(l.$t("media-weekly"))+" ",1),e("span",null,s(l.$t("media-weekly-desc")),1)]),_:1},8,["title"])]),e("li",ho,[o(u,{href:"/announcements",title:l.$t("media-announcements"),mode:"classic"},{default:a(()=>[c(s(l.$t("media-announcements"))+" ",1),e("span",null,s(l.$t("media-announcements-desc")),1)]),_:1},8,["title"])])])]),col2:a(()=>[e("ul",null,[e("li",mo,s(l.$t("media-block-resources")),1),e("li",fo,[o(u,{href:"/brand-guidelines",title:l.$t("media-brand"),mode:"classic"},{default:a(()=>[c(s(l.$t("media-brand")),1)]),_:1},8,["title"])]),e("li",po,[o(u,{href:"https://github.com/dotnetcore/ncc-artwork",title:l.$t("media-logos"),target:"_blank",mode:"classic"},{default:a(()=>[c(s(l.$t("media-logos"))+" ",1),o(i(j),{class:"header-content-arrow",theme:"filled",size:"24",fill:i(h)},null,8,["fill"])]),_:1},8,["title"])])])]),col3:a(()=>[]),default:a(()=>[e("span",io,s(l.$t("resources-and-media")),1)]),_:1})]),_:1}))}});const $o=S(_o,[["__scopeId","data-v-31c4237a"]]),bo=["title"],go=["title"],vo=["width","height"],yo=e("path",{d:"M625.727964 666.847792q9.151997 9.151997 0 17.727994-35.423989 35.423989-113.727964 35.423989t-113.727964-35.423989q-9.151997-8.575997 0-17.727994 3.423999-3.423999 8.575997-3.423999t8.575997 3.423999q27.423991 27.999991 96.57597 27.999991 68.575979 0 96.57597-27.999991 3.423999-3.423999 8.575997-3.423999t8.575997 3.423999zM450.272019 563.423824q0 21.151993-14.847995 35.999989t-35.999989 14.847995-36.287989-14.847995-15.135995-35.999989q0-21.727993 15.135995-36.575989t36.287989-14.847995 35.999989 15.135995 14.847995 36.287989zM675.999949 563.423824q0 21.151993-15.135995 35.999989t-36.287989 14.847995-35.999989-14.847995-14.847995-35.999989 14.847995-36.287989 35.999989-15.135995 36.287989 14.847995 15.135995 36.575989zM819.423904 494.847845q0-27.999991-19.999994-47.999985t-48.575985-19.999994-49.151985 20.575994q-74.271977-51.423984-177.727944-54.847983l35.999989-161.727949 114.271964 25.727992q0 21.151993 14.847995 35.999989t35.999989 14.847995 36.287989-15.135995 15.135995-36.287989-15.135995-36.287989-36.287989-15.135995q-30.84799 0-45.727986 28.575991l-126.271961-27.999991q-10.847997-2.847999-14.271996 9.151997l-39.423988 178.271944q-102.847968 3.999999-176.575945 55.423983-19.999994-21.151993-49.727984-21.151993-28.575991 0-48.575985 19.999994t-19.999994 47.999985q0 19.999994 10.559997 36.575989t28.287991 25.151992q-3.423999 15.423995-3.423999 31.99999 0 81.151975 79.999975 138.847957t192.57594 57.727982q113.151965 0 193.15194-57.727982t79.999975-138.847957q0-18.271994-3.999999-32.57599 17.151995-8.575997 27.423991-24.863992t10.271997-36.287989zM1023.99984 511.99984q0 103.999968-40.575987 198.847938t-109.151966 163.423949-163.423949 109.151966-198.847938 40.575987-198.847938-40.575987-163.423949-109.151966-109.151966-163.423949-40.575987-198.847938 40.575987-198.847938 109.151966-163.423949 163.423949-109.151966 198.847938-40.575987 198.847938 40.575987 163.423949 109.151966 109.151966 163.423949 40.575987 198.847938z","p-id":"4567","data-spm-anchor-id":"a313x.search_index.0.i4.73f13a81QDVP27",class:"selected",fill:"#ffffff"},null,-1),ko=[yo],wo=["title"],jo=["title"],Co=["width","height"],Mo=e("path",{d:"M512 992C246.896 992 32 777.104 32 512S246.896 32 512 32s480 214.896 480 480-214.896 480-480 480z m242.952-533.328H482.383a23.712 23.712 0 0 0-23.71 23.712l-0.025 59.256c0 13.08 10.608 23.712 23.688 23.712h165.96c13.104 0 23.712 10.608 23.712 23.688v11.856a71.112 71.112 0 0 1-71.112 71.112H375.68a23.712 23.712 0 0 1-23.688-23.712V423.128a71.112 71.112 0 0 1 71.088-71.112h331.824a23.712 23.712 0 0 0 23.688-23.712l0.072-59.256a23.712 23.712 0 0 0-23.688-23.712H423.08a177.769 177.769 0 0 0-177.769 177.792v331.825c0 13.104 10.609 23.712 23.713 23.712h349.632A159.984 159.984 0 0 0 778.64 618.681V482.36a23.712 23.712 0 0 0-23.712-23.688z",fill:"#ffffff","p-id":"5597","data-spm-anchor-id":"a313x.search_index.0.i8.73f13a81QDVP27",class:"selected"},null,-1),Lo=[Mo],zo={class:"absolute bottom-16 right-12 w-52 rounded-2xl overflow-hidden"},To=e("img",{src:Be,alt:"NCC WeChat QR Code"},null,-1),No=[To],Io=["title"],So=["title"],qo=y({__name:"FooterPendant",setup(n){let t=C(26);const d=C(null),{isOutside:r}=W(d);return(m,h)=>(p(),b(R,null,[e("a",{href:"https://twitter.com/ncc_community",title:m.$t("social-twitter-tip"),target:"_blank",class:"align-middle inline-block mx-2"},[o(i(ge),{theme:"filled",size:i(t),fill:"#ffffff"},null,8,["size"])],8,bo),e("a",{href:"https://reddit.com/r/TheNCC",title:m.$t("social-reddit-tip"),target:"_blank",class:"align-middle inline-block mx-2"},[(p(),b("svg",{t:"1698644520030",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4566","data-spm-anchor-id":"a313x.search_index.0.i5.73f13a81QDVP27",width:i(t),height:i(t)},ko,8,vo))],8,go),e("a",{href:"https://github.com/dotnetcore",title:m.$t("social-github-tip"),target:"_blank",class:"align-middle inline-block mx-2"},[o(i(ve),{theme:"filled",size:i(t),fill:"#ffffff"},null,8,["size"])],8,wo),e("a",{href:"https://gitee.com/dotnetcore",title:m.$t("social-gitee-tip"),target:"_blank",class:"align-middle inline-block mx-2"},[(p(),b("svg",{t:"1698644918070",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5596",width:i(t),height:i(t)},Lo,8,Co))],8,jo),o(K,{"enter-active-class":"animate__animated animate__fadeIn animate__faster","leave-active-class":"animate__animated animate__fadeOut animate__faster"},{default:a(()=>[M(e("div",zo,No,512),[[L,!i(r)]])]),_:1}),e("a",{ref_key:"qrCodeBoxRef",ref:d,href:"/wechat-open-ncc",onClick:h[0]||(h[0]=T(f=>i(I)("wechat-open-ncc"),["prevent"])),title:m.$t("social-wechat-tip"),target:"_blank",class:"align-middle inline-block mx-2"},[o(i(ye),{theme:"filled",size:i(t),fill:"#ffffff"},null,8,["size"])],8,Io),e("a",{href:"https://t.me/ncc_radio",title:m.$t("social-telegram-radio-tip"),target:"_blank",class:"align-middle inline-block mx-2"},[o(i(ke),{theme:"filled",size:i(t),fill:"#ffffff"},null,8,["size"])],8,So)],64))}}),Po=n=>(U("data-v-275785f4"),n=n(),G(),n),Fo={class:"p-5 py-7 pr-0 mx-auto align-middle float-right cursor-pointer relative"},Ro={class:"text-lg text-center"},Bo={class:"columns-1"},Ho=Po(()=>e("div",{class:"clear-both"},null,-1)),Oo={class:"fixed left-0 top-0 right-0 bottom-0 z-40"},Eo=y({__name:"FooterLocale",setup(n){const t=Ce("$i18n"),d=ae(),r=B(),m=ce(),h=C(null),f=C(!1);we(h,()=>l());const l=()=>{f.value=!1},z=()=>{f.value=!f.value},k=async v=>{l(),await de(t,v,d.path),r.setLocale(v),m.emit("toChangeLocale",{locale:v}),Ne(v)};return(v,g)=>(p(),b(R,null,[e("div",Fo,[o(K,{"enter-active-class":"animate__animated animate__fadeIn animate__faster","leave-active-class":"animate__animated animate__fadeOut animate__faster"},{default:a(()=>[M(e("div",{ref_key:"target",ref:h,class:"languages-box"},[o(Fe,{"h1-mode":"false","color-mode":"light","with-horizontal-rule":!1,"with-placeholder":!0,"is-font-black":!1},{default:a(()=>[e("div",Ro,s(v.$t("i18n-switch-title")),1)]),_:1}),e("div",Bo,[e("span",{class:"languages-item",onClick:g[0]||(g[0]=$=>k("zh"))},"中文（简体）"),e("span",{class:"languages-item",onClick:g[1]||(g[1]=$=>k("zh-tw"))},"中文（正体）"),e("span",{class:"languages-item",onClick:g[2]||(g[2]=$=>k("en"))},"English")])],512),[[L,f.value]])]),_:1}),o(i(je),{theme:"outline",size:"24",fill:"#f8f8f8",strokeWidth:2,onClick:z,title:v.$t("i18n-switch-tip")},null,8,["title"])]),Ho,M(e("div",Oo,null,512),[[L,f.value]])],64))}});const Do=S(Eo,[["__scopeId","data-v-275785f4"]]),Z=n=>(U("data-v-ef27fe62"),n=n(),G(),n),Ao={class:"copyright"},Uo={class:"leading-6"},Go=Z(()=>e("br",null,null,-1)),Ko={class:"leading-6"},Vo=["innerHTML"],Wo=["innerHTML"],Qo=Z(()=>e("br",null,null,-1)),Jo=Z(()=>e("br",null,null,-1)),Yo={class:"pr-2 leading-6"},Xo={class:"px-2 leading-6"},Zo=["title"],xo={class:"pl-2 leading-6"},el=y({__name:"FooterCopyright",setup(n){const t=ae(),d=()=>{localStorage.clear()};return(r,m)=>(p(),b("div",Ao,[e("span",Uo,s(r.$t("copyright")),1),Go,e("span",Ko,[c(s(r.$t("footer-note-part1"))+" ",1),_(r.$slots,"maintain-by",{},void 0,!0),c(" "+s(r.$t("footer-note-part2"))+" ",1),e("span",{class:"dev",innerHTML:r.$t("footer-note-part3")},null,8,Vo),e("span",{class:"dev",innerHTML:r.$t("footer-note-part4")},null,8,Wo),c(" "+s(r.$t("footer-note-part5")),1)]),Qo,Jo,e("span",Yo,[o(u,{mode:"classic",href:"https://github.com/dotnetcore/ncc-website/issues/new?title=Your+issue&projects=dotnetcore/ncc-website/1&body=From+URL%3A+https%3A%2F%2Fncc.work"+i(t).path.replace(/\//g,"%2F"),target:"_blank",title:r.$t("submit-website-bug")},{default:a(()=>[c(s(r.$t("submit-website-bug")),1)]),_:1},8,["href","title"])]),c(" | "),e("span",Xo,[e("span",{onClick:d,title:r.$t("clear-all-cache"),class:"cursor-pointer"},s(r.$t("clear-all-cache")),9,Zo)]),c(" | "),e("span",xo,s(r.$t("we-love-os")),1)]))}});const tl=S(el,[["__scopeId","data-v-ef27fe62"]]),sl=""+new URL("../images/logo-seq.wire-black.png",import.meta.url).href,ol={class:"p-5 py-7 mx-auto align-middle float-right"},ll=e("img",{src:sl,width:"24",alt:"NCC"},null,-1),al=[ll],nl=y({__name:"FooterNccLogo",setup(n){return(t,d)=>(p(),b("div",ol,[e("a",{href:"/app/public",onClick:d[0]||(d[0]=T(r=>i(I)("home"),["prevent"]))},al)]))}}),il={class:"mt-24 min-h-75vh"},cl={class:"bg-black text-white relative"},rl={class:"responsive-width"},dl={class:"p-5"},ul={class:"inline-block align-middle"},hl=e("img",{src:We,width:"220",alt:"NCC"},null,-1),ml=[hl],fl=e("div",{class:"clear-both"},null,-1),pl={class:"pb-2.5 px-5"},_l={class:"text-xl font-bold"},$l=e("br",null,null,-1),bl=e("div",{class:"clear-both"},null,-1),gl={class:"p-5 inline-block align-middle"},vl={class:"p-5"},yl=e("div",{class:"clear-both"},null,-1),kl=y({__name:"App",setup(n){const t=B(),d=Ie("locale",r=>r==null||r==="",()=>"en");return t.setLocale(d!=null?d:"en"),(r,m)=>(p(),b(R,null,[o($o),e("div",il,[o(i(Me))]),e("footer",cl,[e("div",rl,[o(q,{height:"90px"}),o(At),o(q,{height:"1.25rem"}),e("div",dl,[e("div",ul,[e("a",{href:"/",onClick:m[0]||(m[0]=T(h=>i(I)("home"),["prevent"])),title:".NET Core Community"},ml)])]),fl,M(e("div",pl,[c(s(r.$t("footer-we-part1"))+" ",1),e("span",_l,s(r.$t("footer-we-part2")),1),c(s(r.$t("footer-we-part3"))+" ",1),$l,c(" "+s(r.$t("footer-we-part4")),1)],512),[[L,!i(t).isMobileMode]]),bl,o(A,null,{left:a(()=>[e("div",gl,[e("a",{href:"/all-ncc",onClick:m[1]||(m[1]=T(h=>i(I)("all-ncc"),["prevent"])),class:"text-white font-bold border p-2 px-5"},s(r.$t("all-ncc")),1)])]),right:a(()=>[e("div",vl,[o(qo)])]),_:1}),o(Re,{colorMode:"dark"}),o(tl,null,{"maintain-by":a(()=>[o(u,{href:"/",title:".NET Core Community",mode:"classic",class:"underline hover:underline underline-offset-4"},{default:a(()=>[c("NCC")]),_:1})]),_:1}),o(nl),o(Do),yl,o(q,{height:"90px","bg-color":"bg-black"})])])],64))}});const x=Ee();ie.beforeEach(async(n,t,d)=>{const r=Se();return await de(x,r,n.path),d()});const H=Le(kl);H.use(ze());H.use(x);H.provide("$i18n",x);H.use(ie);H.mount("#App");
