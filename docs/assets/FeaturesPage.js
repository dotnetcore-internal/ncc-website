import{a3 as I,g as a,d as q,l as j,aa as H,ab as J,s as Q,a0 as F,k as U,j as X,x as Y,n as V,y as ee,a as u,f as l,h as te,F as C,p as se,i as oe,M as ne,o as f,e as w,a1 as S,t as $,m as L,v as P,u as h,w as Z}from"./vendor.js";import{u as ie}from"./useEmitter.js";import{u as re}from"./uiStore.js";import{B as le}from"./BodyBlock.js";import{_ as ae}from"./MarkdownWorker.vue_vue_type_script_setup_true_lang.js";import{_ as ce}from"./_plugin-vue_export-helper.js";import"./index2.js";import"./WaveLoading.js";const de=I("down-c",!1,function(s){return a("svg",{width:s.size,height:s.size,viewBox:"0 0 48 48",fill:"none"},[a("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:s.colors[1],stroke:s.colors[0],"stroke-width":s.strokeWidth,"stroke-linejoin":s.strokeLinejoin},null),a("path",{d:"M33 21L24 30L15 21",stroke:s.colors[2],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null)])}),ue=I("up-c",!1,function(s){return a("svg",{width:s.size,height:s.size,viewBox:"0 0 48 48",fill:"none"},[a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",stroke:s.colors[0],"stroke-width":s.strokeWidth},null),a("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:s.colors[1],stroke:s.colors[0],"stroke-width":s.strokeWidth,"stroke-linejoin":s.strokeLinejoin},null),a("path",{d:"M33 27L24 18L15 27",stroke:s.colors[2],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null)])});function fe(s,_){let c=Promise.resolve();return function(...x){c=c.then(()=>{s(...x)}),setTimeout(()=>{c=Promise.resolve()},_)}}const he=s=>(se("data-v-e5f5ebd3"),s=s(),oe(),s),ke={class:"feature-index xl:flex-none"},me=["onClick"],_e={class:"inline-block align-middle"},ve=["href","onClick"],pe={class:"xl:flex-1 overflow-hidden p-4"},ge=["id"],Ce=["id"],we={class:"feature-item-title"},xe=["href","onClick"],be=he(()=>l("div",{class:"feature-end relative"},null,-1)),ye=q({__name:"FeaturesPage",setup(s){const _=ne(),c=ie(),x=re(),B=j(null);H(B,([{isIntersecting:o}])=>{b.value=!o});const{y:K}=J();Q(K,async o=>{fe(()=>{let t=document.getElementsByTagName("section");for(let e=t.length-1;e>=0;e--)if(t[e].offsetTop<o+112){m.value=t[e].id,N(t[e].id);break}},1e3)()});const d=F([]),v=F([]),k=F([]),M=o=>{d.splice(0,d.length,...o),v.length=0;for(let t=0;t<d.length;t++)v.push({id:d[t].id,status:!0})},W=o=>{k.splice(0,k.length,...o)},z=o=>`/api/projects/${_.params.id}/features${o?`.${o}`:`.${x.locale}`}.json`,E=async o=>await fetch(o).then(e=>e.json()),b=j(!1),m=j(""),D=o=>{const t=document.getElementById(`${o}-anchor`);t&&t.scrollIntoView({behavior:"smooth"}),N(o)},O=U(()=>{const o=k.reduce((n,i)=>{const{group:r,...g}=i;return n[r!=null?r:"unclassified-1"]||(n[r!=null?r:"unclassified-1"]=[]),n[r].push(g),n},{}),t=Object.keys(o).sort((n,i)=>{const r=d.find(y=>y.id===n),g=d.find(y=>y.id===i);return r&&g?r.sort-g.sort:0}),e={};for(const n of t){const i=o[n];e[n]||(e[n]=[]);for(const r of i)e[n].push(r)}return e}),G=o=>d.find(t=>t.id===o),p=o=>{var t,e;return(e=(t=v.find(n=>n.id===o))==null?void 0:t.status)!=null?e:!1},T=o=>{const t=v.find(e=>e.id===o);t&&(t.status=!t.status)},N=o=>{var e;const t=(e=k.find(n=>n.id===o))==null?void 0:e.group;t&&!p(t)&&T(t)},A=X(),R=U(()=>A.value?"#f8f8f8":"#000000");return Y(()=>{const o=z();E(o).then(t=>{var e,n;M(t.groups),W(t.features),m.value=(n=(e=t.features[0])==null?void 0:e.id)!=null?n:""}),c.on("toChangeLocale",async t=>{const e=t;await V(()=>{const n=z(e.locale);E(n).then(i=>{M(i.groups),W(i.features)})})}),V(()=>{c.emit("toChangeProjectPaper",{paper:"features"})})}),ee(()=>{c.off("toChangeLocale")}),(o,t)=>(f(),u(C,null,[l("div",{class:"absolute -mt-20 w-0.5 h-0.5 bg-transparent",ref_key:"focusedRef",ref:B},null,512),a(le,{class:"xl:flex overflow-hidden"},{default:te(()=>[l("div",ke,[l("div",{class:w({fixed:b.value,"top-28":b.value})},[(f(!0),u(C,null,S(h(O),(e,n)=>(f(),u("div",{key:n,class:"feature-index-group"},[l("div",{class:w(["feature-index-group-title overflow-hidden",{"feature-index-group-title-hide":G(n).hidden}]),onClick:i=>T(n)},[l("span",_e,$(G(n).title),1),L(a(h(ue),{theme:"outline",size:"16",fill:h(R),class:"inline-block align-middle pl-3",strokeWidth:1},null,8,["fill"]),[[P,p(n)]]),L(a(h(de),{theme:"outline",size:"16",fill:h(R),class:"inline-block align-middle pl-3",strokeWidth:1},null,8,["fill"]),[[P,!p(n)]])],10,me),L(l("ul",null,[(f(!0),u(C,null,S(e,i=>(f(),u("li",{key:i.id,class:w(["feature-index-text",{"!border-pink-500":m.value===i.id}])},[l("a",{href:`#${i.id}`,class:w({"text-pink-500":m.value===i.id,"text-black dark:text-white":m.value!==i.id}),onClick:Z(r=>D(i.id),["prevent"])},$(i.title),11,ve)],2))),128))],512),[[P,p(n)]])]))),128))],2)]),l("div",pe,[(f(!0),u(C,null,S(k,e=>(f(),u("section",{key:e.id,id:e.id,class:"feature-item"},[l("div",{class:"absolute -mt-28 bg-transparent",id:`${e.id}-anchor`},null,8,Ce),l("div",we,[l("a",{href:`#${e.id}`,onClick:Z(n=>D(e.id),["prevent"])},$(e.title),9,xe)]),a(ae,{source:`projects/${h(_).params.id}/features/${e.id}`,i18n:!0,"fallback-locale":"en","include-file-extension":!0,"file-extension":".md","redirect-to404":!1},null,8,["source"])],8,ge))),128))])]),_:1}),be],64))}});const We=ce(ye,[["__scopeId","data-v-e5f5ebd3"]]);export{We as default};
