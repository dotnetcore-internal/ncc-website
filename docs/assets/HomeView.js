import{g as S,c as x}from"./usePageToolkits.js";import{u as B}from"./useEmitter.js";import{u as M}from"./uiStore.js";import{a as T}from"./axios.js";import{T as k,_ as z}from"./TitleBlock.js";import{L as A}from"./LeftRightLayout.js";import{_ as d}from"./PlaceholderBlock.vue_vue_type_script_setup_true_lang.js";import{T as f,M as F}from"./MemberProjects.js";import{A as I}from"./ArticleAsGrid.js";import{d as u,a0 as H,x as D,y as W,o as n,a as l,g as t,f as e,h as c,b as i,t as a,F as L,a1 as G,z as P,a2 as R,r as b,a3 as C,u as w,p as V,i as q,e as j,w as E}from"./vendor.js";import{_ as g}from"./_plugin-vue_export-helper.js";import{P as O}from"./ProjectStatBlock.js";import"./useProjectToolkits.js";import"./useResource.js";import"./AnchorElement.vue_vue_type_script_setup_true_lang.js";import"./ContentModels.js";const J="/images/material/community.webp",U=async function(s,o,r=()=>{}){await T.get(`/api/news/latest-news.${s}.json`).then(function(h){o(h.data)}).catch(r)},Y={class:"bg-white-black"},K={class:"responsive-width py-5 pb-16"},Q={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"},X=u({__name:"LatestNews",setup(s){const o=M(),r=B(),h=H([]),$=_=>{h.length=0;for(const p of _)h.push(p)},y=async _=>{const p=_!=null?_:o.locale;await U(p,m=>{$(m.data)})};return D(async()=>{await y(),r.on("toChangeLocale",async _=>{await y(_.locale)})}),W(()=>{r.off("toChangeLocale")}),(_,p)=>(n(),l("div",Y,[t(d,{height:"3rem"}),e("div",K,[t(A,null,{left:c(()=>[t(k,{"h1-mode":"false","color-mode":"auto","with-horizontal-rule":!1,"is-font-black":!1},{default:c(()=>[i(a(_.$t("media-latest-from-ncc")),1)]),_:1})]),right:c(()=>[t(f,{href:"/news","route-name":"news",title:"News",mode:"h5",class:"m-7 mt-9","class-value":"leading-7"},{default:c(()=>[i(a(_.$t("media-latest-news")),1)]),_:1})]),_:1}),e("div",Q,[(n(!0),l(L,null,G(h,m=>(n(),P(I,{id:m.id,key:m.id,image:m.img,date:new Date(m.date),"title-tip":m.title,"base-url":"/news"},{default:c(()=>[i(a(m.title),1)]),_:2},1032,["id","image","date","title-tip"]))),128))])]),t(d,{height:"2.5rem"})]))}}),Z="/images/partners/jetbrains.svg",ee="/images/partners/myget.svg",te="/images/partners/oreilly.png",se="/images/partners/material-theme.png",oe={class:"bg-gray-200/50 dark:bg-purple-900/10 dark:text-white"},ae={class:"responsive-width"},ie=R('<a href="https://www.jetbrains.com/?from=.NETCoreCommunity(NCC)" target="_blank" title="JetBrains" class="partner-item" data-v-567578b7><img src="'+Z+'" alt="JetBrains" class="w-full h-full" data-v-567578b7></a><a href="https://www.myget.org/" target="_blank" title="MyGet" class="partner-item" data-v-567578b7><img src="'+ee+'" alt="MyGet" class="w-full h-full" data-v-567578b7></a><a href="https://www.oreilly.com/pub/cpc/323206" target="_blank" title="MyGet" class="partner-item" data-v-567578b7><img src="'+te+'" alt="O&#39;REILLY" class="w-full h-full" data-v-567578b7></a><a href="https://www.material-theme.com/" target="_blank" title="MyGet" class="partner-item" data-v-567578b7><img src="'+se+'" alt="Material Theme" class="w-full h-full" data-v-567578b7></a>',4),ne=u({__name:"PartnersAndSponsors",setup(s){return(o,r)=>(n(),l("div",oe,[t(d,{height:"2rem"}),e("div",ae,[t(k,{"h1-mode":"false","color-mode":"auto","with-horizontal-rule":!0,"is-font-black":!1},{default:c(()=>[i(a(o.$t("our-partners-title")),1)]),_:1}),ie]),t(d,{height:"3.5rem"})]))}});const re=g(ne,[["__scopeId","data-v-567578b7"]]),le={class:"bg-gray-900 dark:bg-fuchsia-900/20 text-white"},ce={class:"responsive-width"},de={class:"lg:text-4xl md:text-2xl sm:text-lg font-light italic px-5 pb-10"},_e=e("br",null,null,-1),he=e("br",null,null,-1),me=u({__name:"Slogan",setup(s){return(o,r)=>(n(),l("div",le,[t(d,{height:"2rem"}),e("div",ce,[t(k,{"h1-mode":"false","color-mode":"dark","with-horizontal-rule":!0,"is-font-black":!1},{default:c(()=>[i(a(o.$t("our-slogan-title")),1)]),_:1}),e("div",de,[i(a(o.$t("our-slogan-part1")),1),_e,i(" "+a(o.$t("our-slogan-part2")),1),he,i(" "+a(o.$t("our-slogan-part3")),1)])]),t(d,{height:"2rem"})]))}});const ue={},pe={class:"section-head"};function fe(s,o){return n(),l("span",pe,[b(s.$slots,"default",{},void 0,!0)])}const N=g(ue,[["render",fe],["__scopeId","data-v-c032ad9d"]]),ge={class:"bg-white-black pb-16"},be={class:"responsive-width grid grid-cols-1 lg:grid-cols-2 pb-10"},we={class:"independently-operated-by"},ke=["innerHTML"],ve=u({__name:"BloomingFlowers",setup(s){return(o,r)=>(n(),l("div",ge,[t(d,{height:"2rem"}),e("div",be,[t(N,null,{default:c(()=>[i(a(o.$t("home.growing-for-ecosystem")),1)]),_:1}),e("div",we,[e("span",{innerHTML:o.$t("home.independently-operated-by")},null,8,ke)])]),t(O),t(d,{height:"2.5rem"})]))}});const $e=g(ve,[["__scopeId","data-v-8f81d344"]]),ye=C("arrow-right",!0,function(s){return t("svg",{width:s.size,height:s.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M41.9999 24H5.99994",stroke:s.colors[0],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null),t("path",{d:"M30 12L42 24L30 36",stroke:s.colors[0],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null)])}),je=C("arrow-right-down",!0,function(s){return t("svg",{width:s.size,height:s.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M37 19V37H19",stroke:s.colors[0],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null),t("path",{d:"M11.5439 11.5439L36.9997 36.9997",stroke:s.colors[0],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null)])}),Le="/images/logo-seq.gray-white.png",v=s=>(V("data-v-ffe90cf7"),s=s(),q(),s),Ce={class:"section-join-us pt-10 relative"},Ne=v(()=>e("div",{class:"absolute left-0 right-0 top-0 bottom-0 bg-black/20 dark:bg-black/60"},null,-1)),Se={class:"responsive-width grid grid-cols-1 lg:grid-cols-2 pb-10 relative"},xe=v(()=>e("br",null,null,-1)),Be={class:"responsive-width grid grid-cols-1 lg:grid-cols-3 gap-4 relative"},Me={class:"join-card become-a-member"},Te={class:"join-card-title"},ze={class:"card-first-line"},Ae={class:"card-bottom"},Fe={class:"join-card become-a-contributor"},Ie={class:"join-card-title"},He={class:"card-first-line"},De={class:"card-bottom"},We={class:"join-card as-an-end-user"},Ge={class:"join-card-title"},Pe={class:"card-first-line"},Re={class:"card-bottom"},Ve={class:"responsive-width grid grid-cols-1 lg:grid-cols-8 py-5 relative"},qe={class:"text-4xl lg:col-start-4 lg:col-span-4 text-center lg:text-left"},Ee={class:"inline-block align-middle ml-10"},Oe=v(()=>e("img",{src:Le,alt:"NCC",class:"about-ncc-logo"},null,-1)),Je=u({__name:"TeamOfDreamers",setup(s){return(o,r)=>(n(),l("div",Ce,[Ne,e("div",Se,[t(N,null,{default:c(()=>[i(a(o.$t("home.embrace-net"))+" ",1),xe,i(" "+a(o.$t("home.join-the-dreamers"))+" ",1),t(w(je),{class:"inline-block align-middle",theme:"outline",size:"48",fill:"#FFF"})]),_:1})]),e("div",Be,[e("div",Me,[e("div",Te,a(o.$t("home.as-a-member")),1),e("p",ze,a(o.$t("home.as-a-member-q")),1),e("p",null,a(o.$t("home.as-a-member-a")),1),t(d,{height:"90px"}),e("div",Ae,[t(f,{href:"/about/join","route-name":"about/join",target:"_blank",class:"join-btn"},{default:c(()=>[i(a(o.$t("home.as-a-member-b")),1)]),_:1})])]),e("div",Fe,[e("div",Ie,a(o.$t("home.as-a-contributor")),1),e("p",He,a(o.$t("home.as-a-contributor-q")),1),e("p",null,a(o.$t("home.as-a-contributor-a")),1),t(d,{height:"90px"}),e("div",De,[t(f,{href:"https://contribute.ncc.work",target:"_blank",mode:"classic",class:"join-btn"},{default:c(()=>[i(a(o.$t("home.as-a-contributor-b")),1)]),_:1})])]),e("div",We,[e("div",Ge,a(o.$t("home.as-an-end-user")),1),e("p",Pe,a(o.$t("home.as-an-end-user-q")),1),e("p",null,a(o.$t("home.as-an-end-user-a")),1),t(d,{height:"90px"}),e("div",Re,[t(f,{href:"/community-online","route-name":"community-online",target:"_blank",class:"join-btn"},{default:c(()=>[i(a(o.$t("home.as-an-end-user-b")),1)]),_:1})])])]),e("div",Ve,[e("div",qe,[i(" New to NCC ? "),t(w(ye),{class:"inline-block align-middle",theme:"outline",size:"36",fill:"#FFF"}),e("div",Ee,[Oe,t(f,{href:"/about/who-we-are","route-name":"about/who-we-are",target:"_blank",class:"about-ncc"},{default:c(()=>[i(" About NCC ")]),_:1})])])])]))}});const Ue=g(Je,[["__scopeId","data-v-ffe90cf7"]]),Ye={key:0},Ke={key:1},Qe={key:0},Xe={key:1},Ze=u({__name:"WhoWeAreButton",props:{mode:{default:"inline-block"},needRefresh:{type:Boolean,default:!0}},setup(s){const o=s;return(r,h)=>s.needRefresh?(n(),l("a",{key:0,href:"/about/who-we-are",class:j(["text-white font-bold text-center px-9 py-3 rounded-full bg-gradient-to-br from-pink-700 to-purple-700",{block:o.mode==="block","inline-block":o.mode==="inline-block"}])},[r.$slots.default?(n(),l("span",Ye,[b(r.$slots,"default")])):(n(),l("span",Ke,"About NCC"))],2)):(n(),l("a",{key:1,href:"/about/who-we-are",onClick:h[0]||(h[0]=E($=>w(S)("about/who-we-are"),["prevent"])),class:j(["text-white font-bold text-center px-9 py-3 rounded-full bg-gradient-to-br from-pink-700 to-purple-700",{block:o.mode==="block","inline-block":o.mode==="inline-block"}])},[r.$slots.default?(n(),l("span",Qe,[b(r.$slots,"default")])):(n(),l("span",Xe,"About NCC"))],2))}}),et={class:"-mt-24 relative home-first"},tt=e("div",{class:"home-first-image"},[e("img",{src:J,alt:"Do Something Greater"})],-1),st={class:"home-first-mask"},ot={class:"responsive-width"},at=e("div",{class:"home-first-text"},[e("p",{class:"py-2 font-black uppercase"}," Make"),e("p",{class:"py-2 font-black"},".NET Stack"),e("p",null,[i(" Greater "),e("span",{class:"underline underline-offset-8"},"Together")])],-1),it={class:"text-white text-2xl w-2/3 p-5 mt-4 drop-shadow-lg"},nt={class:"p-5"},yt=u({__name:"HomeView",setup(s){return x("Home"),(o,r)=>(n(),l(L,null,[e("div",et,[tt,e("div",st,[e("div",ot,[at,e("div",it,a(o.$t("who-we-are-desc")),1),t(z,{"color-mode":"always-dark"}),e("div",nt,[t(Ze)])])])]),t($e),t(Ue),t(X),t(F,{"display-more-btn":!0}),t(re),t(me)],64))}});export{yt as default};
