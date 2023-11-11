import{P as d,Q as E,K as h,S as v}from"./vendor.js";const R="modulepreload",T=function(e,r){return new URL(e,r).href},u={},t=function(r,i,_){if(!i||i.length===0)return r();const c=document.getElementsByTagName("link");return Promise.all(i.map(o=>{if(o=T(o,_),o in u)return;u[o]=!0;const m=o.endsWith(".css"),l=m?'[rel="stylesheet"]':"";if(!!_)for(let a=c.length-1;a>=0;a--){const p=c[a];if(p.href===o&&(!m||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const n=document.createElement("link");if(n.rel=m?"stylesheet":R,m||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),m)return new Promise((a,p)=>{n.addEventListener("load",a),n.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>r())},L=[{path:"/people/project-management-committee",name:"people/project-management-committee",component:()=>t(()=>import("./ProjectManagementCommitteeView.js"),["./ProjectManagementCommitteeView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)}],P=function(e){return{akaId:e.params.id}},A=[{path:"/projects",name:"projects",component:()=>t(()=>import("./AllProjectsView.js"),["./AllProjectsView.js","./useEmitter.js","./vendor.js","./LeftRightLayout.js","./_plugin-vue_export-helper.js","./useProjectToolkits.js","./BodyBlock.js","./BodyBlock.css","./MemberProjects.js","./TitleBlock.js","./TitleBlock.css","./AnchorElement.vue_vue_type_script_setup_true_lang.js","./MemberProjects.css","./ProjectHeader.js","./ProjectHeader.css","./ProjectCards.js","./ProjectCards.css","./AllProjectsView.css"],import.meta.url)},{path:"/archived-projects",name:"archived-projects",component:()=>t(()=>import("./ArchivedView.js"),["./ArchivedView.js","./useEmitter.js","./vendor.js","./LeftRightLayout.js","./_plugin-vue_export-helper.js","./useProjectToolkits.js","./BodyBlock.js","./BodyBlock.css","./MemberProjects.js","./TitleBlock.js","./TitleBlock.css","./AnchorElement.vue_vue_type_script_setup_true_lang.js","./MemberProjects.css","./ProjectHeader.js","./ProjectHeader.css","./ProjectCards.js","./ProjectCards.css","./ArchivedView.css"],import.meta.url)},{path:"/top-level-projects",name:"top-level-projects",component:()=>t(()=>import("./TopLevelView.js"),["./TopLevelView.js","./useEmitter.js","./vendor.js","./LeftRightLayout.js","./_plugin-vue_export-helper.js","./useProjectToolkits.js","./BodyBlock.js","./BodyBlock.css","./MemberProjects.js","./TitleBlock.js","./TitleBlock.css","./AnchorElement.vue_vue_type_script_setup_true_lang.js","./MemberProjects.css","./ProjectHeader.js","./ProjectHeader.css","./ProjectCards.js","./ProjectCards.css"],import.meta.url)},{path:"/project-maturity-model",name:"project-maturity-model",component:()=>t(()=>import("./ProjectMaturityModelView.js"),["./ProjectMaturityModelView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./MemberProjects.js","./LeftRightLayout.js","./useProjectToolkits.js","./TitleBlock.js","./TitleBlock.css","./AnchorElement.vue_vue_type_script_setup_true_lang.js","./MemberProjects.css","./ProjectHeader.js","./ProjectHeader.css"],import.meta.url)},{path:"/project/not-found",name:"project-not-found",component:()=>t(()=>import("./ProjectNotFound.js"),["./ProjectNotFound.js","./Page404.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./AnchorElement.vue_vue_type_script_setup_true_lang.js","./Page404.css"],import.meta.url)},{path:"/projects/:id",name:"projects/:id",component:()=>t(()=>import("./DetailView.js"),["./DetailView.js","./vendor.js","./useEmitter.js","./LeftRightLayout.js","./_plugin-vue_export-helper.js","./useProjectToolkits.js","./BodyBlock.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css","./AnchorElement.vue_vue_type_script_setup_true_lang.js","./DetailView.css"],import.meta.url),props:P,children:[{path:"metrics",component:()=>t(()=>import("./MetricsPage.js"),["./MetricsPage.js","./useEmitter.js","./vendor.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./BodyBlock.css","./MetricsPage.css"],import.meta.url)},{path:"get-started",component:()=>t(()=>import("./GetStartedPage.js"),["./GetStartedPage.js","./useEmitter.js","./vendor.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./BodyBlock.css","./GetStartedPage.css"],import.meta.url)},{path:"features",component:()=>t(()=>import("./FeaturesPage.js"),["./FeaturesPage.js","./useEmitter.js","./vendor.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./BodyBlock.css","./FeaturesPage.css"],import.meta.url)},{path:"license",component:()=>t(()=>import("./LicensePage.js"),["./LicensePage.js","./useEmitter.js","./vendor.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./BodyBlock.css","./LicensePage.css"],import.meta.url)},{path:"",component:()=>t(()=>import("./GeneralPage.js"),["./GeneralPage.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./GeneralPage.css"],import.meta.url)}]}],D=[{path:"/news",name:"news",component:()=>t(()=>import("./NewsIndexView.js"),["./NewsIndexView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)},{path:"/weekly",name:"weekly",component:()=>t(()=>import("./WeeklyIndexView.js"),["./WeeklyIndexView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)},{path:"/announcements",name:"announcements",component:()=>t(()=>import("./AnnouncementsIndexView.js"),["./AnnouncementsIndexView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)}],I=[{path:"/rules",name:"rules",component:()=>t(()=>import("./RulesIndexView.js"),["./RulesIndexView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)}],O=[{path:"/about/who-we-are",name:"about/who-we-are",component:()=>t(()=>import("./WhoWeAreView.js"),["./WhoWeAreView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)},{path:"/about/join",name:"about/join",component:()=>t(()=>import("./JoinView.js"),["./JoinView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)},{path:"/about/story",name:"about/story",component:()=>t(()=>import("./StoryView.js"),["./StoryView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)},{path:"/about/faq",name:"about/faq",component:()=>t(()=>import("./FaqView.js"),["./FaqView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)},{path:"/about/contact",name:"about/contact",component:()=>t(()=>import("./ContactView.js"),["./ContactView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)}],V=[{path:"/",name:"home",component:()=>t(()=>import("./HomeView.js"),["./HomeView.js","./TitleBlock.js","./vendor.js","./_plugin-vue_export-helper.js","./TitleBlock.css","./LeftRightLayout.js","./MemberProjects.js","./useProjectToolkits.js","./AnchorElement.vue_vue_type_script_setup_true_lang.js","./MemberProjects.css","./HomeView.css"],import.meta.url)},{path:"/all-ncc",name:"all-ncc",component:()=>t(()=>import("./AllNccView.js"),["./AllNccView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css","./AnchorElement.vue_vue_type_script_setup_true_lang.js"],import.meta.url)},{path:"/wechat-open-ncc",name:"wechat-open-ncc",component:()=>t(()=>import("./OpenNccView.js"),["./OpenNccView.js","./official-wechat-account-qrcode.js","./TitleBlock.js","./vendor.js","./_plugin-vue_export-helper.js","./TitleBlock.css","./BodyBlock.js","./BodyBlock.css"],import.meta.url)},{path:"/conduct",name:"conduct",component:()=>t(()=>import("./CodeOfConductView.js"),["./CodeOfConductView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)},{path:"/community-online",name:"community-online",component:()=>t(()=>import("./CommunityOnlineView.js"),["./CommunityOnlineView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)},{path:"/participation-guidelines",name:"participation-guidelines",component:()=>t(()=>import("./ParticipationGuidelinesView.js"),["./ParticipationGuidelinesView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)},{path:"/brand-guidelines",name:"brand-guidelines",component:()=>t(()=>import("./BrandGuidelinesView.js"),["./BrandGuidelinesView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)},{path:"/website-source-code-usage-guidelines",name:"website-source-code-usage-guidelines",component:()=>t(()=>import("./SourceCodeUsageGuidelinesView.js"),["./SourceCodeUsageGuidelinesView.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./TitleBlock.js","./TitleBlock.css"],import.meta.url)},{path:"/:pathMatch(.*)*",name:"all",component:()=>t(()=>import("./Page404.js"),["./Page404.js","./BodyBlock.js","./_plugin-vue_export-helper.js","./vendor.js","./BodyBlock.css","./AnchorElement.vue_vue_type_script_setup_true_lang.js","./Page404.css"],import.meta.url)}],f=V.concat(L,A,D,I,O),y=d({history:E("./"),routes:f}),g=()=>{window.scrollTo({top:0,behavior:"auto"})},k=function(e){g(),y.push({name:e,replace:!1})},s=e=>{v(`${e} | .NET Core Community`)},$=(e,r="i18n")=>{if(r==="i18n"){const{t:i}=h("$i18n").global;s(i(e));return}else s(e)},C=()=>{var e;(e=document.querySelector("body"))==null||e.setAttribute("style","overflow:hidden; height:100%;")},S=()=>{var e;(e=document.querySelector("body"))==null||e.setAttribute("style","overflow:unset; height:auto;")},b=(e,r,i)=>null,q=()=>{let e=b();return e=e!=null?e:"en",e};export{q as a,k as g,C as l,y as r,$ as s,S as u};