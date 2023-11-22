import{u as ht}from"./uiStore.js";import{l as pt,f as at}from"./useProjectToolkits.js";import{_ as ot}from"./AnchorElement.vue_vue_type_script_setup_true_lang.js";import{d as ut,l as dt,k as st,o as Z,a as ct,h as rt,t as _t,u as J,r as ft,a0 as mt,x as gt,f as W,g as X,e as S,z as lt,p as wt,i as bt}from"./vendor.js";import{_ as yt}from"./_plugin-vue_export-helper.js";var it={},vt={get exports(){return it},set exports(A){it=A}};/*! For license information please see shifty.js.LICENSE.txt */(function(A,z){(function(R,B){A.exports=B()})(self,function(){return function(){var R={55:function(M,s,t){Object.defineProperty(s,"__esModule",{value:!0}),s.setBezierFunction=s.getCubicBezierTransition=void 0;const c=t(188);s.getCubicBezierTransition=(f=.25,j=.25,P=.75,F=.75)=>I=>function(O,y,w,m,v,E){let q=0,$=0,k=0,D=0,T=0,b=0;const V=l=>((q*l+$)*l+k)*l,o=l=>(3*q*l+2*$)*l+k,a=l=>l>=0?l:0-l;return k=3*y,$=3*(m-y)-k,q=1-k-$,b=3*w,T=3*(v-w)-b,D=1-b-T,p=O,d=(l=>1/(200*l))(E),(l=>((D*l+T)*l+b)*l)(((l,u)=>{let r,e,n,i,h,_;for(n=l,_=0;_<8;_++){if(i=V(n)-l,a(i)<u)return n;if(h=o(n),a(h)<1e-6)break;n-=i/h}if(r=0,e=1,n=l,n<r)return r;if(n>e)return e;for(;r<e;){if(i=V(n),a(i-l)<u)return n;l>i?r=n:e=n,n=.5*(e-r)+r}return n})(p,d));var p,d}(I,f,j,P,F,1),s.setBezierFunction=(f,j,P,F,I)=>{const O=(0,s.getCubicBezierTransition)(j,P,F,I);return O.displayName=f,O.x1=j,O.y1=P,O.x2=F,O.y2=I,c.Tweenable.easing[f]=O}},607:function(M,s,t){var c=this&&this.__createBinding||(Object.create?function(y,w,m,v){v===void 0&&(v=m);var E=Object.getOwnPropertyDescriptor(w,m);E&&!("get"in E?!w.__esModule:E.writable||E.configurable)||(E={enumerable:!0,get:function(){return w[m]}}),Object.defineProperty(y,v,E)}:function(y,w,m,v){v===void 0&&(v=m),y[v]=w[m]}),f=this&&this.__exportStar||function(y,w){for(var m in y)m==="default"||Object.prototype.hasOwnProperty.call(w,m)||c(w,y,m)};Object.defineProperty(s,"__esModule",{value:!0}),s.VERSION=s.standardEasingFunctions=s.setBezierFunction=s.Scene=s.interpolate=s.tween=s.Tweenable=s.shouldScheduleUpdate=s.processTweens=void 0;const j=t(188);Object.defineProperty(s,"processTweens",{enumerable:!0,get:function(){return j.processTweens}}),Object.defineProperty(s,"shouldScheduleUpdate",{enumerable:!0,get:function(){return j.shouldScheduleUpdate}}),Object.defineProperty(s,"Tweenable",{enumerable:!0,get:function(){return j.Tweenable}}),Object.defineProperty(s,"tween",{enumerable:!0,get:function(){return j.tween}});var P=t(166);Object.defineProperty(s,"interpolate",{enumerable:!0,get:function(){return P.interpolate}});var F=t(147);Object.defineProperty(s,"Scene",{enumerable:!0,get:function(){return F.Scene}});var I=t(55);Object.defineProperty(s,"setBezierFunction",{enumerable:!0,get:function(){return I.setBezierFunction}});var O=t(64);Object.defineProperty(s,"standardEasingFunctions",{enumerable:!0,get:function(){return O.standardEasingFunctions}}),f(t(699),s),s.VERSION=String("3.0.3")},166:function(M,s,t){Object.defineProperty(s,"__esModule",{value:!0}),s.interpolate=void 0;const c=t(188),f=new c.Tweenable,{filters:j}=c.Tweenable;s.interpolate=(P,F,I,O=c.Tweenable.easing.linear,y=0)=>{const w=Object.assign({},P),m=(0,c.composeEasingObject)(P,O);f._filters.length=0,f.setState({}),f._currentState=w,f._originalState=P,f._targetState=F,f._easing=m;for(const E in j)j[E].doesApply(f)&&f._filters.push(j[E]);f._applyFilter("tweenCreated"),f._applyFilter("beforeTween");const v=(0,c.tweenProps)(I,w,P,F,1,y,m);return f._applyFilter("afterTween"),v}},147:function(M,s){Object.defineProperty(s,"__esModule",{value:!0}),s.Scene=void 0,s.Scene=class{constructor(...t){this._tweenables=[],t.forEach(this.add.bind(this))}get tweenables(){return[...this._tweenables]}get promises(){return this._tweenables.map(t=>t.then())}add(t){return this._tweenables.push(t),t}remove(t){const c=this._tweenables.indexOf(t);return c>-1&&this._tweenables.splice(c,1),t}empty(){return this.tweenables.map(this.remove.bind(this))}get isPlaying(){return this._tweenables.some(({isPlaying:t})=>t)}tween(){return this._tweenables.forEach(t=>t.tween()),this}pause(){return this._tweenables.forEach(t=>t.pause()),this}resume(){return this._tweenables.filter(({hasEnded:t})=>!t).forEach(t=>t.resume()),this}stop(t){return this._tweenables.forEach(c=>c.stop(t)),this}}},64:function(M,s){Object.defineProperty(s,"__esModule",{value:!0}),s.standardEasingFunctions=void 0,s.standardEasingFunctions=Object.freeze({linear:t=>t,easeInQuad:t=>Math.pow(t,2),easeOutQuad:t=>-(Math.pow(t-1,2)-1),easeInOutQuad:t=>(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2),easeInCubic:t=>Math.pow(t,3),easeOutCubic:t=>Math.pow(t-1,3)+1,easeInOutCubic:t=>(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2),easeInQuart:t=>Math.pow(t,4),easeOutQuart:t=>-(Math.pow(t-1,4)-1),easeInOutQuart:t=>(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2),easeInQuint:t=>Math.pow(t,5),easeOutQuint:t=>Math.pow(t-1,5)+1,easeInOutQuint:t=>(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2),easeInSine:t=>1-Math.cos(t*(Math.PI/2)),easeOutSine:t=>Math.sin(t*(Math.PI/2)),easeInOutSine:t=>-.5*(Math.cos(Math.PI*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t)),easeInCirc:t=>-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeOutBounce:t=>t<.36363636363636365?7.5625*t*t:t<.7272727272727273?7.5625*(t-=.5454545454545454)*t+.75:t<.9090909090909091?7.5625*(t-=.8181818181818182)*t+.9375:7.5625*(t-=.9545454545454546)*t+.984375,easeInBack:t=>t*t*(2.70158*t-1.70158),easeOutBack:t=>(t-=1)*t*(2.70158*t+1.70158)+1,easeInOutBack:t=>{let c=1.70158;return(t/=.5)<1?t*t*((1+(c*=1.525))*t-c)*.5:.5*((t-=2)*t*((1+(c*=1.525))*t+c)+2)},elastic:t=>-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1,swingFromTo:t=>{let c=1.70158;return(t/=.5)<1?t*t*((1+(c*=1.525))*t-c)*.5:.5*((t-=2)*t*((1+(c*=1.525))*t+c)+2)},swingFrom:t=>t*t*(2.70158*t-1.70158),swingTo:t=>(t-=1)*t*(2.70158*t+1.70158)+1,bounce:t=>t<.36363636363636365?7.5625*t*t:t<.7272727272727273?7.5625*(t-=.5454545454545454)*t+.75:t<.9090909090909091?7.5625*(t-=.8181818181818182)*t+.9375:7.5625*(t-=.9545454545454546)*t+.984375,bouncePast:t=>t<.36363636363636365?7.5625*t*t:t<.7272727272727273?2-(7.5625*(t-=.5454545454545454)*t+.75):t<.9090909090909091?2-(7.5625*(t-=.8181818181818182)*t+.9375):2-(7.5625*(t-=.9545454545454546)*t+.984375),easeFromTo:t=>(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2),easeFrom:t=>Math.pow(t,4),easeTo:t=>Math.pow(t,.25)})},432:function(M,s,t){Object.defineProperty(s,"__esModule",{value:!0}),s.afterTween=s.beforeTween=s.tweenCreated=s.doesApply=void 0;const c=t(699),f=/(\d|-|\.)/,j=/([^\-0-9.]+)/g,P=/[0-9.-]+/g,F=(()=>{const o=P.source,a=/,\s*/.source;return new RegExp(`rgba?\\(${o}${a}${o}${a}${o}(${a}${o})?\\)`,"g")})(),I=/^.*\(/,O=/#([0-9]|[a-f]){3,6}/gi,y="VAL",w=(o,a)=>o.map((p,d)=>`_${a}_${d}`),m=o=>{let a=o.match(j);return a?(a.length===1||o.charAt(0).match(f))&&a.unshift(""):a=["",""],a.join(y)};function v(o){return parseInt(o,16)}const E=o=>`rgb(${(a=>{if((a=a.replace(/#/,"")).length===3){const[p,d,l]=a.split("");a=p+p+d+d+l+l}return[v(a.substring(0,2)),v(a.substring(2,4)),v(a.substring(4,6))]})(o).join(",")})`,q=(o,a,p)=>{const d=a.match(o);let l=a.replace(o,y);return d&&d.forEach(u=>l=l.replace(y,p(u))),l},$=o=>{for(const a in o){const p=o[a];typeof p=="string"&&p.match(O)&&(o[a]=q(O,p,E))}},k=o=>{var a,p;const d=(a=o.match(P))!==null&&a!==void 0?a:[],l=d.slice(0,3).map(r=>Math.floor(Number(r))),u=(p=o.match(I))===null||p===void 0?void 0:p[0];if(d.length===3)return`${u}${l.join(",")})`;if(d.length===4)return`${u}${l.join(",")},${d[3]})`;throw new Error(`Invalid rgbChunk: ${o}`)},D=o=>{var a;return(a=o.match(P))!==null&&a!==void 0?a:[]},T=(o,a)=>{const p={};return a.forEach(d=>{p[d]=o[d],delete o[d]}),p},b=(o,a)=>a.map(p=>Number(o[p])),V=(o,a)=>(a.forEach(p=>o=o.replace(y,String(+p.toFixed(4)))),o);s.doesApply=o=>{for(const a in o._currentState)if(typeof o._currentState[a]=="string")return!0;return!1},s.tweenCreated=function(o){const{_currentState:a,_originalState:p,_targetState:d}=o;[a,p,d].forEach($),o._tokenData=(l=>{var u;const r={};for(const e in l){const n=l[e];typeof n=="string"&&(r[e]={formatString:m(n),chunkNames:w((u=D(n))===null||u===void 0?void 0:u.map(Number),e)})}return r})(a)},s.beforeTween=function(o){const{_currentState:a,_originalState:p,_targetState:d,_easing:l,_tokenData:u}=o;typeof l!="function"&&u&&((r,e)=>{var n;for(const i in e){const{chunkNames:h}=e[i],_=r[i];if(typeof _=="string"){const g=_.split(" "),N=g[g.length-1];for(let x=0;x<h.length;x++){const C=h[x],Q=(n=g[x])!==null&&n!==void 0?n:N;(0,c.isEasingKey)(Q)&&(r[C]=Q)}}else h.forEach(g=>r[g]=_);delete r[i]}})(l,u),[a,p,d].forEach(r=>((e,n)=>{for(const i in n)D(String(e[i])).forEach((h,_)=>e[n[i].chunkNames[_]]=+h),delete e[i]})(r,u!=null?u:{}))},s.afterTween=function(o){const{_currentState:a,_originalState:p,_targetState:d,_easing:l,_tokenData:u}=o;[a,p,d].forEach(r=>((e,n)=>{for(const i in n){const{chunkNames:h,formatString:_}=n[i],g=V(_,b(T(e,h),h));e[i]=q(F,g,k)}})(r,u!=null?u:{})),typeof l!="function"&&u&&((r,e)=>{for(const n in e){const{chunkNames:i}=e[n],h=r[i[0]];r[n]=typeof h=="string"?i.map(_=>{const g=r[_];return delete r[_],g}).join(" "):h}})(l,u)}},188:function(M,s,t){var c,f=this&&this.__createBinding||(Object.create?function(r,e,n,i){i===void 0&&(i=n);var h=Object.getOwnPropertyDescriptor(e,n);h&&!("get"in h?!e.__esModule:h.writable||h.configurable)||(h={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(r,i,h)}:function(r,e,n,i){i===void 0&&(i=n),r[i]=e[n]}),j=this&&this.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),P=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var n in r)n!=="default"&&Object.prototype.hasOwnProperty.call(r,n)&&f(e,r,n);return j(e,r),e};Object.defineProperty(s,"__esModule",{value:!0}),s.shouldScheduleUpdate=s.tween=s.Tweenable=s.composeEasingObject=s.scheduleUpdate=s.processTweens=s.tweenProps=s.getListTail=s.getListHead=s.resetList=void 0;const F=t(64),I=t(55),O=t(699),y=P(t(432)),w="linear",m=typeof window!="undefined"?window:t.g,v="afterTween",E="beforeTween",q="string",$="function";let k=m.requestAnimationFrame;k||(k=typeof window=="undefined"?setTimeout:window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame||setTimeout);const D=()=>{};let T=null,b=null;s.resetList=()=>{T=b=null},s.getListHead=()=>T,s.getListTail=()=>b,s.tweenProps=(r,e,n,i,h,_,g)=>{var N;let x,C=0;const Q=r<_?0:(r-_)/h;let K;for(const H in e){if(typeof g===$)K=g;else{const G=g[H];K=typeof G===$?G:(N=u.easing[G])!==null&&N!==void 0?N:F.standardEasingFunctions.linear}C=K(Q),x=n[H],e[H]=x+(i[H]-x)*C}return e};const V=(r,e)=>{var n;let i=(n=r._timestamp)!==null&&n!==void 0?n:0;const h=r._currentState,_=r._delay;if(e<i+_)return;let g=r._duration;const N=r._targetState,x=i+_+g;let C=e>x?x:e;r._hasEnded=C>=x;const Q=g-(x-C);if(r._hasEnded)return r._render(N,Q,r._data),r.stop(!0);r._applyFilter(E),C<i+_?i=g=C=1:i+=_,(0,s.tweenProps)(C,h,r._originalState,N,g,i,r._easing),r._applyFilter(v),r._render(h,Q,r._data)};s.processTweens=()=>{let r;const e=u.now();let n=T;for(;n;)r=n._next,V(n,e),n=r};const{now:o}=Date;let a,p=!1;s.scheduleUpdate=()=>{a=o(),p&&k.call(m,s.scheduleUpdate,16.666666666666668),(0,s.processTweens)()},s.composeEasingObject=(r,e=w,n={})=>{if(typeof e===q&&(0,O.isEasingKey)(e))return u.easing[e];if(Array.isArray(e))return(0,I.getCubicBezierTransition)(...e);if(typeof n=="object")if(typeof e===q||typeof e===$)for(const i in r)n[i]=e;else for(const i in r)n[i]=e[i]||w;return n};const d=(()=>{let r,e;return n=>{r=null,e=null,n===T?(T=n._next,T?T._previous=null:b=null):n===b?(b=n._previous,b?b._next=null:T=null):(r=n._previous,e=n._next,r&&(r._next=e),e&&(e._previous=r)),n._previous=n._next=null}})(),l=typeof Promise===$?Promise:null;class u{constructor(e={},n){this[c]="Promise",this._next=null,this._previous=null,this._config={},this._data={},this._delay=0,this._duration=500,this._filters=[],this._timestamp=null,this._hasEnded=!1,this._resolve=null,this._reject=null,this._originalState={},this._targetState={},this._start=D,this._render=D,this._promiseCtor=l,this._promise=null,this._isPlaying=!1,this._pausedAtTime=null,this._easing={},this._currentState=e||{},n&&this.setConfig(n)}_applyFilter(e){var n;for(let i=this._filters.length;i>0;i--){const h=this._filters[i-i];(n=h[e])===null||n===void 0||n.call(h,this)}}tween(e){return this._isPlaying&&this.stop(),!e&&this._config||this.setConfig(e),this._pausedAtTime=null,this._timestamp=u.now(),this._start(this.state,this._data),this._delay&&this._render(this._currentState,0,this._data),this._resume(this._timestamp)}setConfig(e={}){var n;const{_config:i}=this;let h;for(h in e)i[h]=e[h];const{promise:_=this._promiseCtor,start:g=D,finish:N,render:x=D}=i;this._data=i.data||this._data,this._isPlaying=!1,this._pausedAtTime=null,this._delay=e.delay||0,this._start=g,this._render=x,this._duration=i.duration||500,this._promiseCtor=_,N&&(this._resolve=N);const{from:C,to:Q={}}=e,{_currentState:K,_originalState:H,_targetState:G}=this;for(const L in C)K[L]=C[L];let et=!1;for(const L in K){const nt=K[L];et||typeof nt!==q||(et=!0),H[L]=nt,G[L]=(n=Q[L])!==null&&n!==void 0?n:nt}if(this._easing=(0,s.composeEasingObject)(this._currentState,i.easing,this._easing),this._filters.length=0,et){for(const L in u.filters)u.filters[L].doesApply(this)&&this._filters.push(u.filters[L]);this._applyFilter("tweenCreated")}return this}then(e,n){if(!this._promiseCtor)throw new Error("Promise implementation is unavailable");return this._promise=new this._promiseCtor((i,h)=>{this._resolve=i,this._reject=h}),this._promise.then(e,n)}catch(e){return this.then().catch(e)}finally(e){return this.then().finally(e)}get state(){return Object.assign({},this._currentState)}setState(e){this._currentState=e}pause(){return this._isPlaying?(this._pausedAtTime=u.now(),this._isPlaying=!1,d(this),this):this}resume(){return this._resume()}_resume(e=u.now()){return this._timestamp===null?this.tween():(this._isPlaying&&this._promise||(this._pausedAtTime&&(this._timestamp+=e-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,T===null?(T=this,b=this):(this._previous=b,b&&(b._next=this),b=this)),this)}seek(e){var n;e=Math.max(e,0);const i=u.now();return((n=this._timestamp)!==null&&n!==void 0?n:0)+e===0||(this._timestamp=i-e,V(this,i)),this}stop(e=!1){var n;return this._isPlaying?(this._isPlaying=!1,d(this),e&&(this._applyFilter(E),(0,s.tweenProps)(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),this._applyFilter(v),this._applyFilter("afterTweenEnd")),(n=this._resolve)===null||n===void 0||n.call(this,{data:this._data,state:this._currentState,tweenable:this}),this._resolve=null,this._reject=null,this):this}cancel(e=!1){var n;const{_currentState:i,_data:h,_isPlaying:_}=this;return _?((n=this._reject)===null||n===void 0||n.call(this,{data:h,state:i,tweenable:this}),this._resolve=null,this._reject=null,this.stop(e)):this}get isPlaying(){return this._isPlaying}get hasEnded(){return this._hasEnded}data(e=null){return e&&(this._data=Object.assign({},e)),this._data}dispose(){for(const e in this)delete this[e]}}s.Tweenable=u,c=Symbol.toStringTag,u.now=()=>a,u.setScheduleFunction=r=>k=r,u.filters={token:y},u.easing=Object.create(F.standardEasingFunctions),s.tween=function(r={}){return new u({},{}).tween(r)},s.shouldScheduleUpdate=r=>{r&&p||(p=r,r&&(0,s.scheduleUpdate)())},(0,s.shouldScheduleUpdate)(!0)},699:function(M,s,t){Object.defineProperty(s,"__esModule",{value:!0}),s.isEasingKey=void 0;const c=t(188);s.isEasingKey=f=>f in c.Tweenable.easing}},B={};function U(M){var s=B[M];if(s!==void 0)return s.exports;var t=B[M]={exports:{}};return R[M].call(t.exports,t,t.exports,U),t.exports}return U.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(M){if(typeof window=="object")return window}}(),U(607)}()})})(vt);const Y=ut({__name:"AnimateNumber",props:{from:{default:0},to:null,duration:{default:500},delay:null},setup(A){const z=A,R=dt(z.to);it.tween({from:{x:z.from},to:{x:z.to},delay:z.delay,duration:z.duration,easing:"easeOutExpo",render:U=>{R.value=Math.round(Number.parseFloat(U.x))}});const B=st(()=>R.value);return(U,M)=>(Z(),ct("span",null,[rt(_t(J(B)),1),ft(U.$slots,"default")]))}}),tt=A=>(wt("data-v-af646028"),A=A(),bt(),A),St={class:"responsive-width grid lg:grid-cols-4 grid-cols-2 px-6"},jt={class:"number"},Pt=tt(()=>S("span",{class:"desc"},[S("span",{class:""},"Top-Level"),S("span",null,"Projects")],-1)),Ot={class:"number"},Mt=tt(()=>S("span",{class:"desc"},[S("span",{class:""},"Member"),S("span",null,"Projects")],-1)),Et={class:"number-card cursor-default"},Tt={class:"number"},xt=tt(()=>S("span",{class:"desc"},[S("span",{class:""},"NCC"),S("span",null,"Members")],-1)),Ft={class:"number-card cursor-default"},Ct={class:"number"},It=tt(()=>S("span",{class:"desc"},[S("span",{class:""},"NuGet"),S("span",null,"Downloads")],-1)),kt=ut({__name:"ProjectStatBlock",props:{models:null},setup(A){const z=A,R=ht(),B=mt([]),U=t=>{B.length=0;for(const c of t)B.push(c)},M=st(()=>at(B,"top-level").length),s=st(()=>at(B,"full").length);return gt(async()=>{z.models&&z.models.length>0?U(z.models):await pt(R.locale,U)}),(t,c)=>(Z(),ct("div",St,[W(ot,{href:"/top-level-projects",title:t.$t("project-top-level-full"),mode:"classic",class:"number-card block"},{default:X(()=>[S("span",jt,[(Z(),lt(Y,{from:0,to:J(M),duration:"500",key:J(M)},null,8,["to"]))]),Pt]),_:1},8,["title"]),W(ot,{href:"/projects",title:t.$t("project-all-full"),mode:"classic",class:"number-card block"},{default:X(()=>[S("span",Ot,[(Z(),lt(Y,{from:0,to:J(s),duration:"500",key:J(s)},null,8,["to"]))]),Mt]),_:1},8,["title"]),S("div",Et,[S("span",Tt,[W(Y,{from:0,to:100,duration:"3000"},{default:X(()=>[rt("+")]),_:1})]),xt]),S("div",Ft,[S("span",Ct,[W(Y,{from:0,to:100,duration:"3000"},{default:X(()=>[rt("M+")]),_:1})]),It])]))}});const Ut=yt(kt,[["__scopeId","data-v-af646028"]]);export{Ut as P};
