import{a3 as M,f as d,d as W,k as g,o as l,a as i,z as w,g as T,e as s,u as n,t as a,Z as $,l as _,j as F,m as p,v,b as j,F as m,a1 as B,p as E,i as O}from"./vendor.js";import{s as G,f as y,a as S,g as Z,b as q}from"./useProjectToolkits.js";import{_ as J}from"./AnchorElement.vue_vue_type_script_setup_true_lang.js";import{_ as D}from"./_plugin-vue_export-helper.js";const K=M("alphabetical-sorting",!0,function(t){return d("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[d("path",{d:"M36 4V43.5",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),d("path",{d:"M7 28H23L7 44H23",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),d("path",{d:"M7 20L15.2759 4L23 20",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),d("path",{d:"M44 36L36 44L28 36",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),N=M("alphabetical-sorting-two",!0,function(t){return d("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[d("path",{d:"M36 4V43.5",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),d("path",{d:"M7 4H23L7 20H23",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),d("path",{d:"M7 44L15.2759 28L23 44",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),d("path",{d:"M44 36L36 44L28 36",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),Q=["title"],R=["src","title","alt"],U={class:"block text-lg text-center leading-7 px-5 pt-2"},X={key:0,class:"tip archived"},Y={key:1,class:"tip toplevel"},tt={key:2,class:"tip incubation"},et={key:3,class:"tip labs"},ot={key:4,class:"tip translation"},st={key:5,class:"tip external"},lt={key:1},at=["src","title","alt"],rt={class:"block text-lg text-center leading-7 px-5 pt-2"},nt={class:"tip other"},it=W({__name:"ProjectCard",props:{project:null},setup(t){const e=t,k=g(()=>{let o=e.project.logo;return!o&&o.length===0&&(o=`/images/projects/${e.project.id}.png`),o}),u=g(()=>e.project.name),c=g(()=>{let o="";switch(e.project.status){case"top-level":o=" (Top-Level)";break;case"archived":o=" (Archived)";break;case"incubation":o=" (Incubation)";break;case"labs":o=" (Lab)";break}return`${u.value}${o}`});return(o,x)=>(l(),i("div",{class:"block card hover:scale-105 transition-all ease-in-out duration-500",title:n(c)},[t.project.status!=="other"?(l(),w(J,{key:0,href:`/projects/${t.project.id}`,title:n(c),mode:"classic"},{default:T(()=>[s("img",{class:"mx-auto p-4",src:n(k),title:n(c),width:"100",alt:t.project.name},null,8,R),s("span",U,a(n(u)),1),t.project.status==="archived"?(l(),i("span",X,a(o.$t("project-archived")),1)):t.project.status==="top-level"?(l(),i("span",Y,a(o.$t("project-top-level")),1)):t.project.status==="incubation"?(l(),i("span",tt,a(o.$t("project-incubation")),1)):t.project.status==="labs"?(l(),i("span",et,a(o.$t("project-laboratory")),1)):t.project.status==="translation"?(l(),i("span",ot,a(o.$t("project-translation")),1)):$("",!0),t.project.external?(l(),i("span",st,a(o.$t("project-external")),1)):$("",!0)]),_:1},8,["href","title"])):(l(),i("span",lt,[s("img",{class:"mx-auto p-4",src:n(k),title:n(c),width:"100",alt:t.project.name},null,8,at),s("span",rt,a(n(u)),1),s("span",nt,a(o.$t("project-other")),1)]))],8,Q))}});const z=D(it,[["__scopeId","data-v-9c4a06ce"]]),ct=t=>(E("data-v-d82d2d19"),t=t(),O(),t),ut={class:"group-btn cursor-pointer relative float-left"},dt={class:"pl-3 text-xs align-middle"},kt=["title"],ht=["title"],ft=ct(()=>s("div",{class:"clear-both"},null,-1)),gt={key:0,class:"project-group-title"},pt={key:1,class:"project-group-title"},vt={class:"grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 gap-7"},bt={class:"grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 gap-7"},jt=W({__name:"ProjectCards",props:{models:null,catalogues:null,for:{default:"all"},forWhenGroup:{default:"full"},box:{type:Boolean,default:!1},enableSort:{type:Boolean,default:!0},enableGroupedByCatalogue:{type:Boolean,default:!1},enableGroupByStatus:{type:Boolean,default:!1},enableGroupByLetter:{type:Boolean,default:!1},groupedAsDefault:{default:"catalogue"},sortAsDefault:{default:"asc"}},setup(t){const e=t,k=_(e.enableSort===!1&&(e.enableGroupedByCatalogue||e.enableGroupByStatus||e.enableGroupByLetter)),u=_(e.groupedAsDefault),c=_(e.sortAsDefault),o=g(()=>k.value?e.forWhenGroup:e.for),x=g(()=>G(y(e.models,o.value),c.value)),I=g(()=>u.value==="catalogue"?S(y(e.models,"full")):u.value==="letter"?Z(y(e.models,"full")):u.value==="status"?q(y(e.models,"full")):S(y(e.models,"full"))),L=r=>{if(r){u.value=r,k.value=!0;return}else k.value=!1},A=()=>{c.value=c.value==="asc"?"desc":"asc"},V=g(()=>{const r=e.enableSort?1:0,f=e.enableGroupedByCatalogue?1:0,h=e.enableGroupByStatus?1:0,b=e.enableGroupByLetter?1:0;return r+f+h+b>=2}),H=F(),C=g(()=>H.value?"#f8f8f8":"#000000");return(r,f)=>(l(),i(m,null,[p(s("div",null,[s("div",ut,[s("span",dt,a(r.$t("grouped-by")),1),s("button",{onClick:f[0]||(f[0]=h=>L()),class:j(["group-btn-text",{"group-btn-current":!k.value}])},a(r.$t("grouped-by-none")),3),s("button",{onClick:f[1]||(f[1]=h=>L("catalogue")),class:j(["group-btn-text",{"group-btn-current":k.value&&u.value==="catalogue"}])},a(r.$t("grouped-by-category")),3),s("button",{onClick:f[2]||(f[2]=h=>L("status")),class:j(["group-btn-text",{"group-btn-current":k.value&&u.value==="status"}])},a(r.$t("grouped-by-status")),3)]),s("div",{onClick:A,class:"sort-btn cursor-pointer relative float-right"},[p(d(n(K),{class:"sort-btn-icon",theme:"filled",size:"16",fill:n(C),title:r.$t("sort-z-to-a")},null,8,["fill","title"]),[[v,c.value==="desc"]]),p(d(n(N),{class:"sort-btn-icon",theme:"filled",size:"16",fill:n(C),title:r.$t("sort-a-to-z")},null,8,["fill","title"]),[[v,c.value==="asc"]]),p(s("span",{class:"sort-btn-text",title:r.$t("sort-z-to-a")},a(r.$t("sort-z-to-a")),9,kt),[[v,c.value==="desc"]]),p(s("span",{class:"sort-btn-text",title:r.$t("sort-a-to-z")},a(r.$t("sort-a-to-z")),9,ht),[[v,c.value==="asc"]])]),ft],512),[[v,n(V)]]),p(s("div",null,[(l(!0),i(m,null,B(n(I),(h,b)=>(l(),i("div",{key:b,class:j({"content-paper":t.box,"rounded-3xl":t.box})},[u.value==="catalogue"?(l(),i("div",gt,a(t.catalogues?t.catalogues[b]:b),1)):$("",!0),u.value==="status"?(l(),i("div",pt,a(r.$t(`project-${b}`)),1)):$("",!0),s("div",vt,[(l(!0),i(m,null,B(n(G)(h,c.value),P=>(l(),w(z,{project:P,key:P.id},null,8,["project"]))),128))])],2))),128))],512),[[v,k.value]]),p(s("div",{class:j({"content-paper":t.box,"rounded-3xl":t.box})},[s("div",bt,[(l(!0),i(m,null,B(n(x),h=>(l(),w(z,{project:h,key:h.id},null,8,["project"]))),128))])],2),[[v,!k.value]])],64))}});const _t=D(jt,[["__scopeId","data-v-d82d2d19"]]);export{_t as P};
