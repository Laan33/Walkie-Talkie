(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Gs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Js(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=fe(r)?Fl(r):Js(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(fe(t))return t;if(ne(t))return t}}const xl=/;(?![^(]*\))/g,Ll=/:([^]+)/,Ul=/\/\*.*?\*\//gs;function Fl(t){const e={};return t.replace(Ul,"").split(xl).forEach(n=>{if(n){const r=n.split(Ll);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xr(t){let e="";if(fe(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const r=xr(t[n]);r&&(e+=r+" ")}else if(ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $l="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bl=Gs($l);function ca(t){return!!t||t===""}function jl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Lr(t[r],e[r]);return n}function Lr(t,e){if(t===e)return!0;let n=Di(t),r=Di(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Dn(t),r=Dn(e),n||r)return t===e;if(n=U(t),r=U(e),n||r)return n&&r?jl(t,e):!1;if(n=ne(t),r=ne(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Lr(t[o],e[o]))return!1}}return String(t)===String(e)}function Hl(t,e){return t.findIndex(n=>Lr(n,e))}const Wy=t=>fe(t)?t:t==null?"":U(t)||ne(t)&&(t.toString===fa||!B(t.toString))?JSON.stringify(t,la,2):String(t),la=(t,e)=>e&&e.__v_isRef?la(t,e.value):on(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Fr(e)?{[`Set(${e.size})`]:[...e.values()]}:ne(e)&&!U(e)&&!da(e)?String(e):e,se={},sn=[],$e=()=>{},Vl=()=>!1,Wl=/^on[^a-z]/,Ur=t=>Wl.test(t),Ys=t=>t.startsWith("onUpdate:"),ve=Object.assign,Xs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zl=Object.prototype.hasOwnProperty,K=(t,e)=>zl.call(t,e),U=Array.isArray,on=t=>zn(t)==="[object Map]",Fr=t=>zn(t)==="[object Set]",Di=t=>zn(t)==="[object Date]",B=t=>typeof t=="function",fe=t=>typeof t=="string",Dn=t=>typeof t=="symbol",ne=t=>t!==null&&typeof t=="object",ua=t=>ne(t)&&B(t.then)&&B(t.catch),fa=Object.prototype.toString,zn=t=>fa.call(t),Kl=t=>zn(t).slice(8,-1),da=t=>zn(t)==="[object Object]",Qs=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,lr=Gs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$r=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ql=/-(\w)/g,Qe=$r(t=>t.replace(ql,(e,n)=>n?n.toUpperCase():"")),Gl=/\B([A-Z])/g,gn=$r(t=>t.replace(Gl,"-$1").toLowerCase()),Br=$r(t=>t.charAt(0).toUpperCase()+t.slice(1)),rs=$r(t=>t?`on${Br(t)}`:""),Mn=(t,e)=>!Object.is(t,e),ur=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},br=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ir=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mi;const Jl=()=>Mi||(Mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Le;class Yl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Le,!e&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Le;try{return Le=this,e()}finally{Le=n}}}on(){Le=this}off(){Le=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Xl(t,e=Le){e&&e.active&&e.effects.push(t)}function Ql(){return Le}const Zs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ha=t=>(t.w&At)>0,pa=t=>(t.n&At)>0,Zl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=At},eu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ha(s)&&!pa(s)?s.delete(t):e[n++]=s,s.w&=~At,s.n&=~At}e.length=n}},ws=new WeakMap;let En=0,At=1;const Es=30;let Ue;const Bt=Symbol(""),Ts=Symbol("");class ei{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Xl(this,r)}run(){if(!this.active)return this.fn();let e=Ue,n=wt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ue,Ue=this,wt=!0,At=1<<++En,En<=Es?Zl(this):Ni(this),this.fn()}finally{En<=Es&&eu(this),At=1<<--En,Ue=this.parent,wt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ue===this?this.deferStop=!0:this.active&&(Ni(this),this.onStop&&this.onStop(),this.active=!1)}}function Ni(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let wt=!0;const ga=[];function mn(){ga.push(wt),wt=!1}function _n(){const t=ga.pop();wt=t===void 0?!0:t}function Te(t,e,n){if(wt&&Ue){let r=ws.get(t);r||ws.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Zs()),ma(s)}}function ma(t,e){let n=!1;En<=Es?pa(t)||(t.n|=At,n=!ha(t)):n=!t.has(Ue),n&&(t.add(Ue),Ue.deps.push(t))}function ct(t,e,n,r,s,i){const o=ws.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t)){const c=Number(r);o.forEach((l,f)=>{(f==="length"||f>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?Qs(n)&&a.push(o.get("length")):(a.push(o.get(Bt)),on(t)&&a.push(o.get(Ts)));break;case"delete":U(t)||(a.push(o.get(Bt)),on(t)&&a.push(o.get(Ts)));break;case"set":on(t)&&a.push(o.get(Bt));break}if(a.length===1)a[0]&&Ss(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ss(Zs(c))}}function Ss(t,e){const n=U(t)?t:[...t];for(const r of n)r.computed&&xi(r);for(const r of n)r.computed||xi(r)}function xi(t,e){(t!==Ue||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const tu=Gs("__proto__,__v_isRef,__isVue"),_a=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dn)),nu=ti(),ru=ti(!1,!0),su=ti(!0),Li=iu();function iu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)Te(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){mn();const r=q(this)[e].apply(this,n);return _n(),r}}),t}function ou(t){const e=q(this);return Te(e,"has",t),e.hasOwnProperty(t)}function ti(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?wu:wa:e?Ia:ba).get(r))return r;const o=U(r);if(!t){if(o&&K(Li,s))return Reflect.get(Li,s,i);if(s==="hasOwnProperty")return ou}const a=Reflect.get(r,s,i);return(Dn(s)?_a.has(s):tu(s))||(t||Te(r,"get",s),e)?a:ye(a)?o&&Qs(s)?a:a.value:ne(a)?t?Ea(a):Kn(a):a}}const au=ya(),cu=ya(!0);function ya(t=!1){return function(n,r,s,i){let o=n[r];if(fn(o)&&ye(o)&&!ye(s))return!1;if(!t&&(!wr(s)&&!fn(s)&&(o=q(o),s=q(s)),!U(n)&&ye(o)&&!ye(s)))return o.value=s,!0;const a=U(n)&&Qs(r)?Number(r)<n.length:K(n,r),c=Reflect.set(n,r,s,i);return n===q(i)&&(a?Mn(s,o)&&ct(n,"set",r,s):ct(n,"add",r,s)),c}}function lu(t,e){const n=K(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&ct(t,"delete",e,void 0),r}function uu(t,e){const n=Reflect.has(t,e);return(!Dn(e)||!_a.has(e))&&Te(t,"has",e),n}function fu(t){return Te(t,"iterate",U(t)?"length":Bt),Reflect.ownKeys(t)}const va={get:nu,set:au,deleteProperty:lu,has:uu,ownKeys:fu},du={get:su,set(t,e){return!0},deleteProperty(t,e){return!0}},hu=ve({},va,{get:ru,set:cu}),ni=t=>t,jr=t=>Reflect.getPrototypeOf(t);function nr(t,e,n=!1,r=!1){t=t.__v_raw;const s=q(t),i=q(e);n||(e!==i&&Te(s,"get",e),Te(s,"get",i));const{has:o}=jr(s),a=r?ni:n?ii:Nn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function rr(t,e=!1){const n=this.__v_raw,r=q(n),s=q(t);return e||(t!==s&&Te(r,"has",t),Te(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function sr(t,e=!1){return t=t.__v_raw,!e&&Te(q(t),"iterate",Bt),Reflect.get(t,"size",t)}function Ui(t){t=q(t);const e=q(this);return jr(e).has.call(e,t)||(e.add(t),ct(e,"add",t,t)),this}function Fi(t,e){e=q(e);const n=q(this),{has:r,get:s}=jr(n);let i=r.call(n,t);i||(t=q(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Mn(e,o)&&ct(n,"set",t,e):ct(n,"add",t,e),this}function $i(t){const e=q(this),{has:n,get:r}=jr(e);let s=n.call(e,t);s||(t=q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ct(e,"delete",t,void 0),i}function Bi(){const t=q(this),e=t.size!==0,n=t.clear();return e&&ct(t,"clear",void 0,void 0),n}function ir(t,e){return function(r,s){const i=this,o=i.__v_raw,a=q(o),c=e?ni:t?ii:Nn;return!t&&Te(a,"iterate",Bt),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function or(t,e,n){return function(...r){const s=this.__v_raw,i=q(s),o=on(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?ni:e?ii:Nn;return!e&&Te(i,"iterate",c?Ts:Bt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function dt(t){return function(...e){return t==="delete"?!1:this}}function pu(){const t={get(i){return nr(this,i)},get size(){return sr(this)},has:rr,add:Ui,set:Fi,delete:$i,clear:Bi,forEach:ir(!1,!1)},e={get(i){return nr(this,i,!1,!0)},get size(){return sr(this)},has:rr,add:Ui,set:Fi,delete:$i,clear:Bi,forEach:ir(!1,!0)},n={get(i){return nr(this,i,!0)},get size(){return sr(this,!0)},has(i){return rr.call(this,i,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:ir(!0,!1)},r={get(i){return nr(this,i,!0,!0)},get size(){return sr(this,!0)},has(i){return rr.call(this,i,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:ir(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=or(i,!1,!1),n[i]=or(i,!0,!1),e[i]=or(i,!1,!0),r[i]=or(i,!0,!0)}),[t,n,e,r]}const[gu,mu,_u,yu]=pu();function ri(t,e){const n=e?t?yu:_u:t?mu:gu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const vu={get:ri(!1,!1)},bu={get:ri(!1,!0)},Iu={get:ri(!0,!1)},ba=new WeakMap,Ia=new WeakMap,wa=new WeakMap,wu=new WeakMap;function Eu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tu(t){return t.__v_skip||!Object.isExtensible(t)?0:Eu(Kl(t))}function Kn(t){return fn(t)?t:si(t,!1,va,vu,ba)}function Su(t){return si(t,!1,hu,bu,Ia)}function Ea(t){return si(t,!0,du,Iu,wa)}function si(t,e,n,r,s){if(!ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Tu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function an(t){return fn(t)?an(t.__v_raw):!!(t&&t.__v_isReactive)}function fn(t){return!!(t&&t.__v_isReadonly)}function wr(t){return!!(t&&t.__v_isShallow)}function Ta(t){return an(t)||fn(t)}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function Sa(t){return br(t,"__v_skip",!0),t}const Nn=t=>ne(t)?Kn(t):t,ii=t=>ne(t)?Ea(t):t;function Aa(t){wt&&Ue&&(t=q(t),ma(t.dep||(t.dep=Zs())))}function Ra(t,e){t=q(t);const n=t.dep;n&&Ss(n)}function ye(t){return!!(t&&t.__v_isRef===!0)}function Ca(t){return ka(t,!1)}function Au(t){return ka(t,!0)}function ka(t,e){return ye(t)?t:new Ru(t,e)}class Ru{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:q(e),this._value=n?e:Nn(e)}get value(){return Aa(this),this._value}set value(e){const n=this.__v_isShallow||wr(e)||fn(e);e=n?e:q(e),Mn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Nn(e),Ra(this))}}function jt(t){return ye(t)?t.value:t}const Cu={get:(t,e,n)=>jt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ye(s)&&!ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Oa(t){return an(t)?t:new Proxy(t,Cu)}var Pa;class ku{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Pa]=!1,this._dirty=!0,this.effect=new ei(e,()=>{this._dirty||(this._dirty=!0,Ra(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=q(this);return Aa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Pa="__v_isReadonly";function Ou(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=$e):(r=t.get,s=t.set),new ku(r,s,i||!s,n)}function Et(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Hr(i,e,n)}return s}function Oe(t,e,n,r){if(B(t)){const i=Et(t,e,n,r);return i&&ua(i)&&i.catch(o=>{Hr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Oe(t[i],e,n,r));return s}function Hr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Et(c,null,10,[t,o,a]);return}}Pu(t,n,s,r)}function Pu(t,e,n,r=!0){console.error(t)}let xn=!1,As=!1;const _e=[];let Ge=0;const cn=[];let rt=null,Nt=0;const Da=Promise.resolve();let oi=null;function Ma(t){const e=oi||Da;return t?e.then(this?t.bind(this):t):e}function Du(t){let e=Ge+1,n=_e.length;for(;e<n;){const r=e+n>>>1;Ln(_e[r])<t?e=r+1:n=r}return e}function ai(t){(!_e.length||!_e.includes(t,xn&&t.allowRecurse?Ge+1:Ge))&&(t.id==null?_e.push(t):_e.splice(Du(t.id),0,t),Na())}function Na(){!xn&&!As&&(As=!0,oi=Da.then(La))}function Mu(t){const e=_e.indexOf(t);e>Ge&&_e.splice(e,1)}function Nu(t){U(t)?cn.push(...t):(!rt||!rt.includes(t,t.allowRecurse?Nt+1:Nt))&&cn.push(t),Na()}function ji(t,e=xn?Ge+1:0){for(;e<_e.length;e++){const n=_e[e];n&&n.pre&&(_e.splice(e,1),e--,n())}}function xa(t){if(cn.length){const e=[...new Set(cn)];if(cn.length=0,rt){rt.push(...e);return}for(rt=e,rt.sort((n,r)=>Ln(n)-Ln(r)),Nt=0;Nt<rt.length;Nt++)rt[Nt]();rt=null,Nt=0}}const Ln=t=>t.id==null?1/0:t.id,xu=(t,e)=>{const n=Ln(t)-Ln(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function La(t){As=!1,xn=!0,_e.sort(xu);const e=$e;try{for(Ge=0;Ge<_e.length;Ge++){const n=_e[Ge];n&&n.active!==!1&&Et(n,null,14)}}finally{Ge=0,_e.length=0,xa(),xn=!1,oi=null,(_e.length||cn.length)&&La()}}function Lu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||se;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||se;p&&(s=n.map(m=>fe(m)?m.trim():m)),h&&(s=n.map(Ir))}let a,c=r[a=rs(e)]||r[a=rs(Qe(e))];!c&&i&&(c=r[a=rs(gn(e))]),c&&Oe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Oe(l,t,6,s)}}function Ua(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const f=Ua(l,e,!0);f&&(a=!0,ve(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ne(t)&&r.set(t,null),null):(U(i)?i.forEach(c=>o[c]=null):ve(o,i),ne(t)&&r.set(t,o),o)}function Vr(t,e){return!t||!Ur(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,gn(e))||K(t,e))}let Ae=null,Wr=null;function Er(t){const e=Ae;return Ae=t,Wr=t&&t.type.__scopeId||null,e}function Uu(t){Wr=t}function Fu(){Wr=null}function gt(t,e=Ae,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Xi(-1);const i=Er(e);let o;try{o=t(...s)}finally{Er(i),r._d&&Xi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ss(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:m,ctx:T,inheritAttrs:A}=t;let x,k;const L=Er(t);try{if(n.shapeFlag&4){const V=s||r;x=qe(f.call(V,V,h,i,m,p,T)),k=c}else{const V=e;x=qe(V.length>1?V(i,{attrs:c,slots:a,emit:l}):V(i,null)),k=e.props?c:$u(c)}}catch(V){Rn.length=0,Hr(V,t,1),x=he(Be)}let P=x;if(k&&A!==!1){const V=Object.keys(k),{shapeFlag:X}=P;V.length&&X&7&&(o&&V.some(Ys)&&(k=Bu(k,o)),P=Rt(P,k))}return n.dirs&&(P=Rt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),x=P,Er(L),x}const $u=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ur(n))&&((e||(e={}))[n]=t[n]);return e},Bu=(t,e)=>{const n={};for(const r in t)(!Ys(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ju(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Hi(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Vr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Hi(r,o,l):!0:!!o;return!1}function Hi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Vr(n,i))return!0}return!1}function Hu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Vu=t=>t.__isSuspense;function Wu(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Nu(t)}function fr(t,e){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[t]=e}}function at(t,e,n=!1){const r=ae||Ae;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r.proxy):e}}const ar={};function dr(t,e,n){return Fa(t,e,n)}function Fa(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=se){const a=Ql()===(ae==null?void 0:ae.scope)?ae:null;let c,l=!1,f=!1;if(ye(t)?(c=()=>t.value,l=wr(t)):an(t)?(c=()=>t,r=!0):U(t)?(f=!0,l=t.some(P=>an(P)||wr(P)),c=()=>t.map(P=>{if(ye(P))return P.value;if(an(P))return Ft(P);if(B(P))return Et(P,a,2)})):B(t)?e?c=()=>Et(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Oe(t,a,3,[p])}:c=$e,e&&r){const P=c;c=()=>Ft(P())}let h,p=P=>{h=k.onStop=()=>{Et(P,a,4)}},m;if(Fn)if(p=$e,e?n&&Oe(e,a,3,[c(),f?[]:void 0,p]):c(),s==="sync"){const P=jf();m=P.__watcherHandles||(P.__watcherHandles=[])}else return $e;let T=f?new Array(t.length).fill(ar):ar;const A=()=>{if(k.active)if(e){const P=k.run();(r||l||(f?P.some((V,X)=>Mn(V,T[X])):Mn(P,T)))&&(h&&h(),Oe(e,a,3,[P,T===ar?void 0:f&&T[0]===ar?[]:T,p]),T=P)}else k.run()};A.allowRecurse=!!e;let x;s==="sync"?x=A:s==="post"?x=()=>Ee(A,a&&a.suspense):(A.pre=!0,a&&(A.id=a.uid),x=()=>ai(A));const k=new ei(c,x);e?n?A():T=k.run():s==="post"?Ee(k.run.bind(k),a&&a.suspense):k.run();const L=()=>{k.stop(),a&&a.scope&&Xs(a.scope.effects,k)};return m&&m.push(L),L}function zu(t,e,n){const r=this.proxy,s=fe(t)?t.includes(".")?$a(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=ae;dn(this);const a=Fa(s,i.bind(r),n);return o?dn(o):Ht(),a}function $a(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ft(t,e){if(!ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ye(t))Ft(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)Ft(t[n],e);else if(Fr(t)||on(t))t.forEach(n=>{Ft(n,e)});else if(da(t))for(const n in t)Ft(t[n],e);return t}function Ku(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wa(()=>{t.isMounted=!0}),za(()=>{t.isUnmounting=!0}),t}const Ce=[Function,Array],qu={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ce,onEnter:Ce,onAfterEnter:Ce,onEnterCancelled:Ce,onBeforeLeave:Ce,onLeave:Ce,onAfterLeave:Ce,onLeaveCancelled:Ce,onBeforeAppear:Ce,onAppear:Ce,onAfterAppear:Ce,onAppearCancelled:Ce},setup(t,{slots:e}){const n=Mf(),r=Ku();let s;return()=>{const i=e.default&&ja(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const A of i)if(A.type!==Be){o=A;break}}const a=q(t),{mode:c}=a;if(r.isLeaving)return is(o);const l=Vi(o);if(!l)return is(o);const f=Rs(l,a,r,n);Cs(l,f);const h=n.subTree,p=h&&Vi(h);let m=!1;const{getTransitionKey:T}=l.type;if(T){const A=T();s===void 0?s=A:A!==s&&(s=A,m=!0)}if(p&&p.type!==Be&&(!xt(l,p)||m)){const A=Rs(p,a,r,n);if(Cs(p,A),c==="out-in")return r.isLeaving=!0,A.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},is(o);c==="in-out"&&l.type!==Be&&(A.delayLeave=(x,k,L)=>{const P=Ba(r,p);P[String(p.key)]=p,x._leaveCb=()=>{k(),x._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=L})}return o}}},Gu=qu;function Ba(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Rs(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:m,onLeaveCancelled:T,onBeforeAppear:A,onAppear:x,onAfterAppear:k,onAppearCancelled:L}=e,P=String(t.key),V=Ba(n,t),X=(j,re)=>{j&&Oe(j,r,9,re)},ce=(j,re)=>{const Q=re[1];X(j,re),U(j)?j.every(ge=>ge.length<=1)&&Q():j.length<=1&&Q()},de={mode:i,persisted:o,beforeEnter(j){let re=a;if(!n.isMounted)if(s)re=A||a;else return;j._leaveCb&&j._leaveCb(!0);const Q=V[P];Q&&xt(t,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),X(re,[j])},enter(j){let re=c,Q=l,ge=f;if(!n.isMounted)if(s)re=x||c,Q=k||l,ge=L||f;else return;let me=!1;const De=j._enterCb=tt=>{me||(me=!0,tt?X(ge,[j]):X(Q,[j]),de.delayedLeave&&de.delayedLeave(),j._enterCb=void 0)};re?ce(re,[j,De]):De()},leave(j,re){const Q=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return re();X(h,[j]);let ge=!1;const me=j._leaveCb=De=>{ge||(ge=!0,re(),De?X(T,[j]):X(m,[j]),j._leaveCb=void 0,V[Q]===t&&delete V[Q])};V[Q]=t,p?ce(p,[j,me]):me()},clone(j){return Rs(j,e,n,r)}};return de}function is(t){if(zr(t))return t=Rt(t),t.children=null,t}function Vi(t){return zr(t)?t.children?t.children[0]:void 0:t}function Cs(t,e){t.shapeFlag&6&&t.component?Cs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ja(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ke?(o.patchFlag&128&&s++,r=r.concat(ja(o.children,e,a))):(e||o.type!==Be)&&r.push(a!=null?Rt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ha(t){return B(t)?{setup:t,name:t.name}:t}const hr=t=>!!t.type.__asyncLoader,zr=t=>t.type.__isKeepAlive;function Ju(t,e){Va(t,"a",e)}function Yu(t,e){Va(t,"da",e)}function Va(t,e,n=ae){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Kr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)zr(s.parent.vnode)&&Xu(r,e,n,s),s=s.parent}}function Xu(t,e,n,r){const s=Kr(e,t,r,!0);Ka(()=>{Xs(r[e],s)},n)}function Kr(t,e,n=ae,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;mn(),dn(n);const a=Oe(e,n,t,o);return Ht(),_n(),a});return r?s.unshift(i):s.push(i),i}}const ft=t=>(e,n=ae)=>(!Fn||t==="sp")&&Kr(t,(...r)=>e(...r),n),Qu=ft("bm"),Wa=ft("m"),Zu=ft("bu"),ef=ft("u"),za=ft("bum"),Ka=ft("um"),tf=ft("sp"),nf=ft("rtg"),rf=ft("rtc");function sf(t,e=ae){Kr("ec",t,e)}function zy(t,e){const n=Ae;if(n===null)return t;const r=Jr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=se]=e[i];o&&(B(o)&&(o={mounted:o,updated:o}),o.deep&&Ft(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function kt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(mn(),Oe(c,n,8,[t.el,a,t,e]),_n())}}const qa="components";function Ga(t,e){return af(qa,t,!0,e)||t}const of=Symbol();function af(t,e,n=!0,r=!1){const s=Ae||ae;if(s){const i=s.type;if(t===qa){const a=Ff(i,!1);if(a&&(a===e||a===Qe(e)||a===Br(Qe(e))))return i}const o=Wi(s[t]||i[t],e)||Wi(s.appContext[t],e);return!o&&r?i:o}}function Wi(t,e){return t&&(t[e]||t[Qe(e)]||t[Br(Qe(e))])}function Ky(t,e,n,r){let s;const i=n&&n[r];if(U(t)||fe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ks=t=>t?oc(t)?Jr(t)||t.proxy:ks(t.parent):null,An=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ks(t.parent),$root:t=>ks(t.root),$emit:t=>t.emit,$options:t=>ci(t),$forceUpdate:t=>t.f||(t.f=()=>ai(t.update)),$nextTick:t=>t.n||(t.n=Ma.bind(t.proxy)),$watch:t=>zu.bind(t)}),os=(t,e)=>t!==se&&!t.__isScriptSetup&&K(t,e),cf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(os(r,e))return o[e]=1,r[e];if(s!==se&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==se&&K(n,e))return o[e]=4,n[e];Os&&(o[e]=0)}}const f=An[e];let h,p;if(f)return e==="$attrs"&&Te(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==se&&K(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return os(s,e)?(s[e]=n,!0):r!==se&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==se&&K(t,o)||os(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(An,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Os=!0;function lf(t){const e=ci(t),n=t.proxy,r=t.ctx;Os=!1,e.beforeCreate&&zi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:m,updated:T,activated:A,deactivated:x,beforeDestroy:k,beforeUnmount:L,destroyed:P,unmounted:V,render:X,renderTracked:ce,renderTriggered:de,errorCaptured:j,serverPrefetch:re,expose:Q,inheritAttrs:ge,components:me,directives:De,filters:tt}=e;if(l&&uf(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const J=o[Z];B(J)&&(r[Z]=J.bind(n))}if(s){const Z=s.call(n,n);ne(Z)&&(t.data=Kn(Z))}if(Os=!0,i)for(const Z in i){const J=i[Z],Me=B(J)?J.bind(n,n):B(J.get)?J.get.bind(n,n):$e,Ct=!B(J)&&B(J.set)?J.set.bind(n):$e,Ne=ke({get:Me,set:Ct});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:we=>Ne.value=we})}if(a)for(const Z in a)Ja(a[Z],r,n,Z);if(c){const Z=B(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(J=>{fr(J,Z[J])})}f&&zi(f,t,"c");function le(Z,J){U(J)?J.forEach(Me=>Z(Me.bind(n))):J&&Z(J.bind(n))}if(le(Qu,h),le(Wa,p),le(Zu,m),le(ef,T),le(Ju,A),le(Yu,x),le(sf,j),le(rf,ce),le(nf,de),le(za,L),le(Ka,V),le(tf,re),U(Q))if(Q.length){const Z=t.exposed||(t.exposed={});Q.forEach(J=>{Object.defineProperty(Z,J,{get:()=>n[J],set:Me=>n[J]=Me})})}else t.exposed||(t.exposed={});X&&t.render===$e&&(t.render=X),ge!=null&&(t.inheritAttrs=ge),me&&(t.components=me),De&&(t.directives=De)}function uf(t,e,n=$e,r=!1){U(t)&&(t=Ps(t));for(const s in t){const i=t[s];let o;ne(i)?"default"in i?o=at(i.from||s,i.default,!0):o=at(i.from||s):o=at(i),ye(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function zi(t,e,n){Oe(U(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ja(t,e,n,r){const s=r.includes(".")?$a(n,r):()=>n[r];if(fe(t)){const i=e[t];B(i)&&dr(s,i)}else if(B(t))dr(s,t.bind(n));else if(ne(t))if(U(t))t.forEach(i=>Ja(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&dr(s,i,t)}}function ci(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Tr(c,l,o,!0)),Tr(c,e,o)),ne(e)&&i.set(e,c),c}function Tr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Tr(t,i,n,!0),s&&s.forEach(o=>Tr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ff[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ff={data:Ki,props:Pt,emits:Pt,methods:Pt,computed:Pt,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Pt,directives:Pt,watch:hf,provide:Ki,inject:df};function Ki(t,e){return e?t?function(){return ve(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function df(t,e){return Pt(Ps(t),Ps(e))}function Ps(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function Pt(t,e){return t?ve(ve(Object.create(null),t),e):e}function hf(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const r in e)n[r]=Ie(t[r],e[r]);return n}function pf(t,e,n,r=!1){const s={},i={};br(i,Gr,1),t.propsDefaults=Object.create(null),Ya(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Su(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function gf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=q(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Vr(t.emitsOptions,p))continue;const m=e[p];if(c)if(K(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const T=Qe(p);s[T]=Ds(c,a,T,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{Ya(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!K(e,h)&&((f=gn(h))===h||!K(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=Ds(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!K(e,h))&&(delete i[h],l=!0)}l&&ct(t,"set","$attrs")}function Ya(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(lr(c))continue;const l=e[c];let f;s&&K(s,f=Qe(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Vr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=q(n),l=a||se;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Ds(s,c,h,l[h],t,!K(l,h))}}return o}function Ds(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&B(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(dn(s),r=l[n]=c.call(null,e),Ht())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===gn(n))&&(r=!0))}return r}function Xa(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const f=h=>{c=!0;const[p,m]=Xa(h,e,!0);ve(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return ne(t)&&r.set(t,sn),sn;if(U(i))for(let f=0;f<i.length;f++){const h=Qe(i[f]);qi(h)&&(o[h]=se)}else if(i)for(const f in i){const h=Qe(f);if(qi(h)){const p=i[f],m=o[h]=U(p)||B(p)?{type:p}:Object.assign({},p);if(m){const T=Yi(Boolean,m.type),A=Yi(String,m.type);m[0]=T>-1,m[1]=A<0||T<A,(T>-1||K(m,"default"))&&a.push(h)}}}const l=[o,a];return ne(t)&&r.set(t,l),l}function qi(t){return t[0]!=="$"}function Gi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ji(t,e){return Gi(t)===Gi(e)}function Yi(t,e){return U(e)?e.findIndex(n=>Ji(n,t)):B(e)&&Ji(e,t)?0:-1}const Qa=t=>t[0]==="_"||t==="$stable",li=t=>U(t)?t.map(qe):[qe(t)],mf=(t,e,n)=>{if(e._n)return e;const r=gt((...s)=>li(e(...s)),n);return r._c=!1,r},Za=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Qa(s))continue;const i=t[s];if(B(i))e[s]=mf(s,i,r);else if(i!=null){const o=li(i);e[s]=()=>o}}},ec=(t,e)=>{const n=li(e);t.slots.default=()=>n},_f=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=q(e),br(e,"_",n)):Za(e,t.slots={})}else t.slots={},e&&ec(t,e);br(t.slots,Gr,1)},yf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=se;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ve(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Za(e,s)),o=e}else e&&(ec(t,e),o={default:1});if(i)for(const a in s)!Qa(a)&&!(a in o)&&delete s[a]};function tc(){return{app:null,config:{isNativeTag:Vl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vf=0;function bf(t,e){return function(r,s=null){B(r)||(r=Object.assign({},r)),s!=null&&!ne(s)&&(s=null);const i=tc(),o=new Set;let a=!1;const c=i.app={_uid:vf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hf,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(c,...f)):B(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=he(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Jr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function Ms(t,e,n,r,s=!1){if(U(t)){t.forEach((p,m)=>Ms(p,e&&(U(e)?e[m]:e),n,r,s));return}if(hr(r)&&!s)return;const i=r.shapeFlag&4?Jr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===se?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(fe(l)?(f[l]=null,K(h,l)&&(h[l]=null)):ye(l)&&(l.value=null)),B(c))Et(c,a,12,[o,f]);else{const p=fe(c),m=ye(c);if(p||m){const T=()=>{if(t.f){const A=p?K(h,c)?h[c]:f[c]:c.value;s?U(A)&&Xs(A,i):U(A)?A.includes(i)||A.push(i):p?(f[c]=[i],K(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,K(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(f[t.k]=o))};o?(T.id=-1,Ee(T,n)):T()}}}const Ee=Wu;function If(t){return wf(t)}function wf(t,e){const n=Jl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:m=$e,insertStaticContent:T}=t,A=(u,d,g,_=null,v=null,w=null,R=!1,I=null,E=!!d.dynamicChildren)=>{if(u===d)return;u&&!xt(u,d)&&(_=S(u),we(u,v,w,!0),u=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:b,ref:M,shapeFlag:O}=d;switch(b){case qr:x(u,d,g,_);break;case Be:k(u,d,g,_);break;case pr:u==null&&L(d,g,_,R);break;case Ke:me(u,d,g,_,v,w,R,I,E);break;default:O&1?X(u,d,g,_,v,w,R,I,E):O&6?De(u,d,g,_,v,w,R,I,E):(O&64||O&128)&&b.process(u,d,g,_,v,w,R,I,E,z)}M!=null&&v&&Ms(M,u&&u.ref,w,d||u,!d)},x=(u,d,g,_)=>{if(u==null)r(d.el=a(d.children),g,_);else{const v=d.el=u.el;d.children!==u.children&&l(v,d.children)}},k=(u,d,g,_)=>{u==null?r(d.el=c(d.children||""),g,_):d.el=u.el},L=(u,d,g,_)=>{[u.el,u.anchor]=T(u.children,d,g,_,u.el,u.anchor)},P=({el:u,anchor:d},g,_)=>{let v;for(;u&&u!==d;)v=p(u),r(u,g,_),u=v;r(d,g,_)},V=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},X=(u,d,g,_,v,w,R,I,E)=>{R=R||d.type==="svg",u==null?ce(d,g,_,v,w,R,I,E):re(u,d,v,w,R,I,E)},ce=(u,d,g,_,v,w,R,I)=>{let E,b;const{type:M,props:O,shapeFlag:N,transition:$,dirs:W}=u;if(E=u.el=o(u.type,w,O&&O.is,O),N&8?f(E,u.children):N&16&&j(u.children,E,null,_,v,w&&M!=="foreignObject",R,I),W&&kt(u,null,_,"created"),de(E,u,u.scopeId,R,_),O){for(const Y in O)Y!=="value"&&!lr(Y)&&i(E,Y,null,O[Y],w,u.children,_,v,C);"value"in O&&i(E,"value",null,O.value),(b=O.onVnodeBeforeMount)&&ze(b,_,u)}W&&kt(u,null,_,"beforeMount");const ee=(!v||v&&!v.pendingBranch)&&$&&!$.persisted;ee&&$.beforeEnter(E),r(E,d,g),((b=O&&O.onVnodeMounted)||ee||W)&&Ee(()=>{b&&ze(b,_,u),ee&&$.enter(E),W&&kt(u,null,_,"mounted")},v)},de=(u,d,g,_,v)=>{if(g&&m(u,g),_)for(let w=0;w<_.length;w++)m(u,_[w]);if(v){let w=v.subTree;if(d===w){const R=v.vnode;de(u,R,R.scopeId,R.slotScopeIds,v.parent)}}},j=(u,d,g,_,v,w,R,I,E=0)=>{for(let b=E;b<u.length;b++){const M=u[b]=I?mt(u[b]):qe(u[b]);A(null,M,d,g,_,v,w,R,I)}},re=(u,d,g,_,v,w,R)=>{const I=d.el=u.el;let{patchFlag:E,dynamicChildren:b,dirs:M}=d;E|=u.patchFlag&16;const O=u.props||se,N=d.props||se;let $;g&&Ot(g,!1),($=N.onVnodeBeforeUpdate)&&ze($,g,d,u),M&&kt(d,u,g,"beforeUpdate"),g&&Ot(g,!0);const W=v&&d.type!=="foreignObject";if(b?Q(u.dynamicChildren,b,I,g,_,W,w):R||J(u,d,I,null,g,_,W,w,!1),E>0){if(E&16)ge(I,d,O,N,g,_,v);else if(E&2&&O.class!==N.class&&i(I,"class",null,N.class,v),E&4&&i(I,"style",O.style,N.style,v),E&8){const ee=d.dynamicProps;for(let Y=0;Y<ee.length;Y++){const ue=ee[Y],xe=O[ue],Xt=N[ue];(Xt!==xe||ue==="value")&&i(I,ue,xe,Xt,v,u.children,g,_,C)}}E&1&&u.children!==d.children&&f(I,d.children)}else!R&&b==null&&ge(I,d,O,N,g,_,v);(($=N.onVnodeUpdated)||M)&&Ee(()=>{$&&ze($,g,d,u),M&&kt(d,u,g,"updated")},_)},Q=(u,d,g,_,v,w,R)=>{for(let I=0;I<d.length;I++){const E=u[I],b=d[I],M=E.el&&(E.type===Ke||!xt(E,b)||E.shapeFlag&70)?h(E.el):g;A(E,b,M,null,_,v,w,R,!0)}},ge=(u,d,g,_,v,w,R)=>{if(g!==_){if(g!==se)for(const I in g)!lr(I)&&!(I in _)&&i(u,I,g[I],null,R,d.children,v,w,C);for(const I in _){if(lr(I))continue;const E=_[I],b=g[I];E!==b&&I!=="value"&&i(u,I,b,E,R,d.children,v,w,C)}"value"in _&&i(u,"value",g.value,_.value)}},me=(u,d,g,_,v,w,R,I,E)=>{const b=d.el=u?u.el:a(""),M=d.anchor=u?u.anchor:a("");let{patchFlag:O,dynamicChildren:N,slotScopeIds:$}=d;$&&(I=I?I.concat($):$),u==null?(r(b,g,_),r(M,g,_),j(d.children,g,M,v,w,R,I,E)):O>0&&O&64&&N&&u.dynamicChildren?(Q(u.dynamicChildren,N,g,v,w,R,I),(d.key!=null||v&&d===v.subTree)&&nc(u,d,!0)):J(u,d,g,M,v,w,R,I,E)},De=(u,d,g,_,v,w,R,I,E)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?v.ctx.activate(d,g,_,R,E):tt(d,g,_,v,w,R,E):bn(u,d,E)},tt=(u,d,g,_,v,w,R)=>{const I=u.component=Df(u,_,v);if(zr(u)&&(I.ctx.renderer=z),Nf(I),I.asyncDep){if(v&&v.registerDep(I,le),!u.el){const E=I.subTree=he(Be);k(null,E,d,g)}return}le(I,u,d,g,v,w,R)},bn=(u,d,g)=>{const _=d.component=u.component;if(ju(u,d,g))if(_.asyncDep&&!_.asyncResolved){Z(_,d,g);return}else _.next=d,Mu(_.update),_.update();else d.el=u.el,_.vnode=d},le=(u,d,g,_,v,w,R)=>{const I=()=>{if(u.isMounted){let{next:M,bu:O,u:N,parent:$,vnode:W}=u,ee=M,Y;Ot(u,!1),M?(M.el=W.el,Z(u,M,R)):M=W,O&&ur(O),(Y=M.props&&M.props.onVnodeBeforeUpdate)&&ze(Y,$,M,W),Ot(u,!0);const ue=ss(u),xe=u.subTree;u.subTree=ue,A(xe,ue,h(xe.el),S(xe),u,v,w),M.el=ue.el,ee===null&&Hu(u,ue.el),N&&Ee(N,v),(Y=M.props&&M.props.onVnodeUpdated)&&Ee(()=>ze(Y,$,M,W),v)}else{let M;const{el:O,props:N}=d,{bm:$,m:W,parent:ee}=u,Y=hr(d);if(Ot(u,!1),$&&ur($),!Y&&(M=N&&N.onVnodeBeforeMount)&&ze(M,ee,d),Ot(u,!0),O&&H){const ue=()=>{u.subTree=ss(u),H(O,u.subTree,u,v,null)};Y?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ue()):ue()}else{const ue=u.subTree=ss(u);A(null,ue,g,_,u,v,w),d.el=ue.el}if(W&&Ee(W,v),!Y&&(M=N&&N.onVnodeMounted)){const ue=d;Ee(()=>ze(M,ee,ue),v)}(d.shapeFlag&256||ee&&hr(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&Ee(u.a,v),u.isMounted=!0,d=g=_=null}},E=u.effect=new ei(I,()=>ai(b),u.scope),b=u.update=()=>E.run();b.id=u.uid,Ot(u,!0),b()},Z=(u,d,g)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,gf(u,d.props,_,g),yf(u,d.children,g),mn(),ji(),_n()},J=(u,d,g,_,v,w,R,I,E=!1)=>{const b=u&&u.children,M=u?u.shapeFlag:0,O=d.children,{patchFlag:N,shapeFlag:$}=d;if(N>0){if(N&128){Ct(b,O,g,_,v,w,R,I,E);return}else if(N&256){Me(b,O,g,_,v,w,R,I,E);return}}$&8?(M&16&&C(b,v,w),O!==b&&f(g,O)):M&16?$&16?Ct(b,O,g,_,v,w,R,I,E):C(b,v,w,!0):(M&8&&f(g,""),$&16&&j(O,g,_,v,w,R,I,E))},Me=(u,d,g,_,v,w,R,I,E)=>{u=u||sn,d=d||sn;const b=u.length,M=d.length,O=Math.min(b,M);let N;for(N=0;N<O;N++){const $=d[N]=E?mt(d[N]):qe(d[N]);A(u[N],$,g,null,v,w,R,I,E)}b>M?C(u,v,w,!0,!1,O):j(d,g,_,v,w,R,I,E,O)},Ct=(u,d,g,_,v,w,R,I,E)=>{let b=0;const M=d.length;let O=u.length-1,N=M-1;for(;b<=O&&b<=N;){const $=u[b],W=d[b]=E?mt(d[b]):qe(d[b]);if(xt($,W))A($,W,g,null,v,w,R,I,E);else break;b++}for(;b<=O&&b<=N;){const $=u[O],W=d[N]=E?mt(d[N]):qe(d[N]);if(xt($,W))A($,W,g,null,v,w,R,I,E);else break;O--,N--}if(b>O){if(b<=N){const $=N+1,W=$<M?d[$].el:_;for(;b<=N;)A(null,d[b]=E?mt(d[b]):qe(d[b]),g,W,v,w,R,I,E),b++}}else if(b>N)for(;b<=O;)we(u[b],v,w,!0),b++;else{const $=b,W=b,ee=new Map;for(b=W;b<=N;b++){const Se=d[b]=E?mt(d[b]):qe(d[b]);Se.key!=null&&ee.set(Se.key,b)}let Y,ue=0;const xe=N-W+1;let Xt=!1,ki=0;const In=new Array(xe);for(b=0;b<xe;b++)In[b]=0;for(b=$;b<=O;b++){const Se=u[b];if(ue>=xe){we(Se,v,w,!0);continue}let We;if(Se.key!=null)We=ee.get(Se.key);else for(Y=W;Y<=N;Y++)if(In[Y-W]===0&&xt(Se,d[Y])){We=Y;break}We===void 0?we(Se,v,w,!0):(In[We-W]=b+1,We>=ki?ki=We:Xt=!0,A(Se,d[We],g,null,v,w,R,I,E),ue++)}const Oi=Xt?Ef(In):sn;for(Y=Oi.length-1,b=xe-1;b>=0;b--){const Se=W+b,We=d[Se],Pi=Se+1<M?d[Se+1].el:_;In[b]===0?A(null,We,g,Pi,v,w,R,I,E):Xt&&(Y<0||b!==Oi[Y]?Ne(We,g,Pi,2):Y--)}}},Ne=(u,d,g,_,v=null)=>{const{el:w,type:R,transition:I,children:E,shapeFlag:b}=u;if(b&6){Ne(u.component.subTree,d,g,_);return}if(b&128){u.suspense.move(d,g,_);return}if(b&64){R.move(u,d,g,z);return}if(R===Ke){r(w,d,g);for(let O=0;O<E.length;O++)Ne(E[O],d,g,_);r(u.anchor,d,g);return}if(R===pr){P(u,d,g);return}if(_!==2&&b&1&&I)if(_===0)I.beforeEnter(w),r(w,d,g),Ee(()=>I.enter(w),v);else{const{leave:O,delayLeave:N,afterLeave:$}=I,W=()=>r(w,d,g),ee=()=>{O(w,()=>{W(),$&&$()})};N?N(w,W,ee):ee()}else r(w,d,g)},we=(u,d,g,_=!1,v=!1)=>{const{type:w,props:R,ref:I,children:E,dynamicChildren:b,shapeFlag:M,patchFlag:O,dirs:N}=u;if(I!=null&&Ms(I,null,g,u,!0),M&256){d.ctx.deactivate(u);return}const $=M&1&&N,W=!hr(u);let ee;if(W&&(ee=R&&R.onVnodeBeforeUnmount)&&ze(ee,d,u),M&6)y(u.component,g,_);else{if(M&128){u.suspense.unmount(g,_);return}$&&kt(u,null,d,"beforeUnmount"),M&64?u.type.remove(u,d,g,v,z,_):b&&(w!==Ke||O>0&&O&64)?C(b,d,g,!1,!0):(w===Ke&&O&384||!v&&M&16)&&C(E,d,g),_&&Yt(u)}(W&&(ee=R&&R.onVnodeUnmounted)||$)&&Ee(()=>{ee&&ze(ee,d,u),$&&kt(u,null,d,"unmounted")},g)},Yt=u=>{const{type:d,el:g,anchor:_,transition:v}=u;if(d===Ke){tr(g,_);return}if(d===pr){V(u);return}const w=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,E=()=>R(g,w);I?I(u.el,w,E):E()}else w()},tr=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},y=(u,d,g)=>{const{bum:_,scope:v,update:w,subTree:R,um:I}=u;_&&ur(_),v.stop(),w&&(w.active=!1,we(R,u,d,g)),I&&Ee(I,d),Ee(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},C=(u,d,g,_=!1,v=!1,w=0)=>{for(let R=w;R<u.length;R++)we(u[R],d,g,_,v)},S=u=>u.shapeFlag&6?S(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),D=(u,d,g)=>{u==null?d._vnode&&we(d._vnode,null,null,!0):A(d._vnode||null,u,d,null,null,null,g),ji(),xa(),d._vnode=u},z={p:A,um:we,m:Ne,r:Yt,mt:tt,mc:j,pc:J,pbc:Q,n:S,o:t};let oe,H;return e&&([oe,H]=e(z)),{render:D,hydrate:oe,createApp:bf(D,oe)}}function Ot({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function nc(t,e,n=!1){const r=t.children,s=e.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=mt(s[i]),a.el=o.el),n||nc(o,a)),a.type===qr&&(a.el=o.el)}}function Ef(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Tf=t=>t.__isTeleport,Ke=Symbol(void 0),qr=Symbol(void 0),Be=Symbol(void 0),pr=Symbol(void 0),Rn=[];let Fe=null;function st(t=!1){Rn.push(Fe=t?null:[])}function Sf(){Rn.pop(),Fe=Rn[Rn.length-1]||null}let Un=1;function Xi(t){Un+=t}function rc(t){return t.dynamicChildren=Un>0?Fe||sn:null,Sf(),Un>0&&Fe&&Fe.push(t),t}function sc(t,e,n,r,s,i){return rc(ie(t,e,n,r,s,i,!0))}function Dt(t,e,n,r,s){return rc(he(t,e,n,r,s,!0))}function Ns(t){return t?t.__v_isVNode===!0:!1}function xt(t,e){return t.type===e.type&&t.key===e.key}const Gr="__vInternal",ic=({key:t})=>t??null,gr=({ref:t,ref_key:e,ref_for:n})=>t!=null?fe(t)||ye(t)||B(t)?{i:Ae,r:t,k:e,f:!!n}:t:null;function ie(t,e=null,n=null,r=0,s=null,i=t===Ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ic(e),ref:e&&gr(e),scopeId:Wr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ae};return a?(ui(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),Un>0&&!o&&Fe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Fe.push(c),c}const he=Af;function Af(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===of)&&(t=Be),Ns(t)){const a=Rt(t,e,!0);return n&&ui(a,n),Un>0&&!i&&Fe&&(a.shapeFlag&6?Fe[Fe.indexOf(t)]=a:Fe.push(a)),a.patchFlag|=-2,a}if($f(t)&&(t=t.__vccOpts),e){e=Rf(e);let{class:a,style:c}=e;a&&!fe(a)&&(e.class=xr(a)),ne(c)&&(Ta(c)&&!U(c)&&(c=ve({},c)),e.style=Js(c))}const o=fe(t)?1:Vu(t)?128:Tf(t)?64:ne(t)?4:B(t)?2:0;return ie(t,e,n,r,s,o,i,!0)}function Rf(t){return t?Ta(t)||Gr in t?ve({},t):t:null}function Rt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?kf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ic(a),ref:e&&e.ref?n&&s?U(s)?s.concat(gr(e)):[s,gr(e)]:gr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rt(t.ssContent),ssFallback:t.ssFallback&&Rt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Cf(t=" ",e=0){return he(qr,null,t,e)}function qy(t,e){const n=he(pr,null,t);return n.staticCount=e,n}function Qt(t="",e=!1){return e?(st(),Dt(Be,null,t)):he(Be,null,t)}function qe(t){return t==null||typeof t=="boolean"?he(Be):U(t)?he(Ke,null,t.slice()):typeof t=="object"?mt(t):he(qr,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rt(t)}function ui(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ui(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Gr in e)?e._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),r&64?(n=16,e=[Cf(e)]):n=8);t.children=e,t.shapeFlag|=n}function kf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xr([e.class,r.class]));else if(s==="style")e.style=Js([e.style,r.style]);else if(Ur(s)){const i=e[s],o=r[s];o&&i!==o&&!(U(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ze(t,e,n,r=null){Oe(t,e,7,[n,r])}const Of=tc();let Pf=0;function Df(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Of,i={uid:Pf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xa(r,s),emitsOptions:Ua(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Lu.bind(null,i),t.ce&&t.ce(i),i}let ae=null;const Mf=()=>ae||Ae,dn=t=>{ae=t,t.scope.on()},Ht=()=>{ae&&ae.scope.off(),ae=null};function oc(t){return t.vnode.shapeFlag&4}let Fn=!1;function Nf(t,e=!1){Fn=e;const{props:n,children:r}=t.vnode,s=oc(t);pf(t,n,s,e),_f(t,r);const i=s?xf(t,e):void 0;return Fn=!1,i}function xf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Sa(new Proxy(t.ctx,cf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Uf(t):null;dn(t),mn();const i=Et(r,t,0,[t.props,s]);if(_n(),Ht(),ua(i)){if(i.then(Ht,Ht),e)return i.then(o=>{Qi(t,o,e)}).catch(o=>{Hr(o,t,0)});t.asyncDep=i}else Qi(t,i,e)}else ac(t,e)}function Qi(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ne(e)&&(t.setupState=Oa(e)),ac(t,n)}let Zi;function ac(t,e,n){const r=t.type;if(!t.render){if(!e&&Zi&&!r.render){const s=r.template||ci(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ve(ve({isCustomElement:i,delimiters:a},o),c);r.render=Zi(s,l)}}t.render=r.render||$e}dn(t),mn(),lf(t),_n(),Ht()}function Lf(t){return new Proxy(t.attrs,{get(e,n){return Te(t,"get","$attrs"),e[n]}})}function Uf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Lf(t))},slots:t.slots,emit:t.emit,expose:e}}function Jr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Oa(Sa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in An)return An[n](t)},has(e,n){return n in e||n in An}}))}function Ff(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function $f(t){return B(t)&&"__vccOpts"in t}const ke=(t,e)=>Ou(t,e,Fn);function cc(t,e,n){const r=arguments.length;return r===2?ne(e)&&!U(e)?Ns(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ns(n)&&(n=[n]),he(t,e,n))}const Bf=Symbol(""),jf=()=>at(Bf),Hf="3.2.47",Vf="http://www.w3.org/2000/svg",Lt=typeof document<"u"?document:null,eo=Lt&&Lt.createElement("template"),Wf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Lt.createElementNS(Vf,t):Lt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Lt.createTextNode(t),createComment:t=>Lt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Lt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{eo.innerHTML=r?`<svg>${t}</svg>`:t;const a=eo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function zf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Kf(t,e,n){const r=t.style,s=fe(n);if(n&&!s){if(e&&!fe(e))for(const i in e)n[i]==null&&xs(r,i,"");for(const i in n)xs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const to=/\s*!important$/;function xs(t,e,n){if(U(n))n.forEach(r=>xs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=qf(t,e);to.test(n)?t.setProperty(gn(r),n.replace(to,""),"important"):t[r]=n}}const no=["Webkit","Moz","ms"],as={};function qf(t,e){const n=as[e];if(n)return n;let r=Qe(e);if(r!=="filter"&&r in t)return as[e]=r;r=Br(r);for(let s=0;s<no.length;s++){const i=no[s]+r;if(i in t)return as[e]=i}return e}const ro="http://www.w3.org/1999/xlink";function Gf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ro,e.slice(6,e.length)):t.setAttributeNS(ro,e,n);else{const i=Bl(e);n==null||i&&!ca(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Jf(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ca(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ut(t,e,n,r){t.addEventListener(e,n,r)}function Yf(t,e,n,r){t.removeEventListener(e,n,r)}function Xf(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Qf(e);if(r){const l=i[e]=td(r,s);Ut(t,a,l,c)}else o&&(Yf(t,a,o,c),i[e]=void 0)}}const so=/(?:Once|Passive|Capture)$/;function Qf(t){let e;if(so.test(t)){e={};let r;for(;r=t.match(so);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gn(t.slice(2)),e]}let cs=0;const Zf=Promise.resolve(),ed=()=>cs||(Zf.then(()=>cs=0),cs=Date.now());function td(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(nd(r,n.value),e,5,[r])};return n.value=t,n.attached=ed(),n}function nd(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const io=/^on[a-z]/,rd=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?zf(t,r,s):e==="style"?Kf(t,n,r):Ur(e)?Ys(e)||Xf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sd(t,e,r,s))?Jf(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Gf(t,e,r,s))};function sd(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&io.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||io.test(e)&&fe(n)?!1:e in t}const id={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Gu.props;const Sr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>ur(e,n):e};function od(t){t.target.composing=!0}function oo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gy={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Sr(s);const i=r||s.props&&s.props.type==="number";Ut(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ir(a)),t._assign(a)}),n&&Ut(t,"change",()=>{t.value=t.value.trim()}),e||(Ut(t,"compositionstart",od),Ut(t,"compositionend",oo),Ut(t,"change",oo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Sr(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ir(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Jy={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Fr(e);Ut(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ir(Ar(o)):Ar(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Sr(r)},mounted(t,{value:e}){ao(t,e)},beforeUpdate(t,e,n){t._assign=Sr(n)},updated(t,{value:e}){ao(t,e)}};function ao(t,e){const n=t.multiple;if(!(n&&!U(e)&&!Fr(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Ar(i);if(n)U(e)?i.selected=Hl(e,o)>-1:i.selected=e.has(o);else if(Lr(Ar(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ar(t){return"_value"in t?t._value:t.value}const ad=ve({patchProp:rd},Wf);let co;function cd(){return co||(co=If(ad))}const ld=(...t)=>{const e=cd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ud(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ud(t){return fe(t)?document.querySelector(t):t}const fd="/assets/logo-03d6d6da.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[f],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new hd;const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const T=l<<6&192|h;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pd=function(t){const e=lc(t);return uc.encodeByteArray(e,!0)},fc=function(t){return pd(t).replace(/\./g,"")},dc=function(t){try{return uc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=()=>gd().__FIREBASE_DEFAULTS__,_d=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dc(t[1]);return e&&JSON.parse(e)},fi=()=>{try{return md()||_d()||yd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hc=t=>{var e,n;return(n=(e=fi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yy=t=>{const e=hc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},vd=()=>{var t;return(t=fi())===null||t===void 0?void 0:t.config},pc=t=>{var e;return(e=fi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Id(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function gc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ed(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mc(){try{return typeof indexedDB=="object"}catch{return!1}}function _c(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Td(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="FirebaseError";class et extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sd,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jt.prototype.create)}}class Jt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ad(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new et(s,a,r)}}function Ad(t,e){return t.replace(Rd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rd=/\{\$([^}]+)}/g;function Cd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $n(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(lo(i)&&lo(o)){if(!$n(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function lo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Tn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Sn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kd(t,e){const n=new Od(t,e);return n.subscribe.bind(n)}class Od{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ls),s.error===void 0&&(s.error=ls),s.complete===void 0&&(s.complete=ls);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ls(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=1e3,Md=2,Nd=4*60*60*1e3,xd=.5;function uo(t,e=Dd,n=Md){const r=e*Math.pow(n,t),s=Math.round(xd*r*(Math.random()-.5)*2);return Math.min(Nd,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t){return t&&t._delegate?t._delegate:t}class Ze{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fd(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ud(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ud(t){return t===Mt?void 0:t}function Fd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ld(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Bd={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},jd=te.INFO,Hd={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Vd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Hd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class di{constructor(e){this.name=e,this._logLevel=jd,this._logHandler=Vd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Wd=(t,e)=>e.some(n=>t instanceof n);let fo,ho;function zd(){return fo||(fo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kd(){return ho||(ho=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yc=new WeakMap,Ls=new WeakMap,vc=new WeakMap,us=new WeakMap,hi=new WeakMap;function qd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yc.set(n,t)}).catch(()=>{}),hi.set(e,t),e}function Gd(t){if(Ls.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ls.set(t,e)}let Us={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ls.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jd(t){Us=t(Us)}function Yd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fs(this),e,...n);return vc.set(r,e.sort?e.sort():[e]),Tt(r)}:Kd().includes(t)?function(...e){return t.apply(fs(this),e),Tt(yc.get(this))}:function(...e){return Tt(t.apply(fs(this),e))}}function Xd(t){return typeof t=="function"?Yd(t):(t instanceof IDBTransaction&&Gd(t),Wd(t,zd())?new Proxy(t,Us):t)}function Tt(t){if(t instanceof IDBRequest)return qd(t);if(us.has(t))return us.get(t);const e=Xd(t);return e!==t&&(us.set(t,e),hi.set(e,t)),e}const fs=t=>hi.get(t);function bc(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Tt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Qd=["get","getKey","getAll","getAllKeys","count"],Zd=["put","add","delete","clear"],ds=new Map;function po(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ds.get(e))return ds.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Zd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Qd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ds.set(e,i),i}Jd(t=>({...t,get:(e,n,r)=>po(e,n)||t.get(e,n,r),has:(e,n)=>!!po(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(th(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function th(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fs="@firebase/app",go="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new di("@firebase/app"),nh="@firebase/app-compat",rh="@firebase/analytics-compat",sh="@firebase/analytics",ih="@firebase/app-check-compat",oh="@firebase/app-check",ah="@firebase/auth",ch="@firebase/auth-compat",lh="@firebase/database",uh="@firebase/database-compat",fh="@firebase/functions",dh="@firebase/functions-compat",hh="@firebase/installations",ph="@firebase/installations-compat",gh="@firebase/messaging",mh="@firebase/messaging-compat",_h="@firebase/performance",yh="@firebase/performance-compat",vh="@firebase/remote-config",bh="@firebase/remote-config-compat",Ih="@firebase/storage",wh="@firebase/storage-compat",Eh="@firebase/firestore",Th="@firebase/firestore-compat",Sh="firebase",Ah="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="[DEFAULT]",Rh={[Fs]:"fire-core",[nh]:"fire-core-compat",[sh]:"fire-analytics",[rh]:"fire-analytics-compat",[oh]:"fire-app-check",[ih]:"fire-app-check-compat",[ah]:"fire-auth",[ch]:"fire-auth-compat",[lh]:"fire-rtdb",[uh]:"fire-rtdb-compat",[fh]:"fire-fn",[dh]:"fire-fn-compat",[hh]:"fire-iid",[ph]:"fire-iid-compat",[gh]:"fire-fcm",[mh]:"fire-fcm-compat",[_h]:"fire-perf",[yh]:"fire-perf-compat",[vh]:"fire-rc",[bh]:"fire-rc-compat",[Ih]:"fire-gcs",[wh]:"fire-gcs-compat",[Eh]:"fire-fst",[Th]:"fire-fst-compat","fire-js":"fire-js",[Sh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Map,Bs=new Map;function Ch(t,e){try{t.container.addComponent(e)}catch(n){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(Bs.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;Bs.set(e,t);for(const n of Rr.values())Ch(n,t);return!0}function yn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new Jt("app","Firebase",kh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=Ah;function Ic(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$s,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw St.create("bad-app-name",{appName:String(s)});if(n||(n=vd()),!n)throw St.create("no-options");const i=Rr.get(s);if(i){if($n(n,i.options)&&$n(r,i.config))return i;throw St.create("duplicate-app",{appName:s})}const o=new $d(s);for(const c of Bs.values())o.addComponent(c);const a=new Oh(n,r,o);return Rr.set(s,a),a}function wc(t=$s){const e=Rr.get(t);if(!e&&t===$s)return Ic();if(!e)throw St.create("no-app",{appName:t});return e}function Je(t,e,n){var r;let s=(r=Rh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(a.join(" "));return}lt(new Ze(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="firebase-heartbeat-database",Dh=1,Bn="firebase-heartbeat-store";let hs=null;function Ec(){return hs||(hs=bc(Ph,Dh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bn)}}}).catch(t=>{throw St.create("idb-open",{originalErrorMessage:t.message})})),hs}async function Mh(t){try{return(await Ec()).transaction(Bn).objectStore(Bn).get(Tc(t))}catch(e){if(e instanceof et)Wt.warn(e.message);else{const n=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(n.message)}}}async function mo(t,e){try{const r=(await Ec()).transaction(Bn,"readwrite");return await r.objectStore(Bn).put(e,Tc(t)),r.done}catch(n){if(n instanceof et)Wt.warn(n.message);else{const r=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wt.warn(r.message)}}}function Tc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=1024,xh=30*24*60*60*1e3;class Lh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_o();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=xh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_o(),{heartbeatsToSend:n,unsentEntries:r}=Uh(this._heartbeatsCache.heartbeats),s=fc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function _o(){return new Date().toISOString().substring(0,10)}function Uh(t,e=Nh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mc()?_c().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yo(t){return fc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t){lt(new Ze("platform-logger",e=>new eh(e),"PRIVATE")),lt(new Ze("heartbeat",e=>new Lh(e),"PRIVATE")),Je(Fs,go,t),Je(Fs,go,"esm2017"),Je("fire-js","")}$h("");var Bh="firebase",jh="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je(Bh,jh,"app");const Sc="@firebase/installations",pi="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=1e4,Rc=`w:${pi}`,Cc="FIS_v2",Hh="https://firebaseinstallations.googleapis.com/v1",Vh=60*60*1e3,Wh="installations",zh="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},zt=new Jt(Wh,zh,Kh);function kc(t){return t instanceof et&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc({projectId:t}){return`${Hh}/projects/${t}/installations`}function Pc(t){return{token:t.token,requestStatus:2,expiresIn:Gh(t.expiresIn),creationTime:Date.now()}}async function Dc(t,e){const r=(await e.json()).error;return zt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Mc({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function qh(t,{refreshToken:e}){const n=Mc(t);return n.append("Authorization",Jh(e)),n}async function Nc(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Gh(t){return Number(t.replace("s","000"))}function Jh(t){return`${Cc} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Oc(t),s=Mc(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Cc,appId:t.appId,sdkVersion:Rc},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Nc(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Pc(l.authToken)}}else throw await Dc("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=/^[cdef][\w-]{21}$/,js="";function Zh(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ep(t);return Qh.test(n)?n:js}catch{return js}}function ep(t){return Xh(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new Map;function Uc(t,e){const n=Xr(t);Fc(n,e),tp(n,e)}function Fc(t,e){const n=Lc.get(t);if(n)for(const r of n)r(e)}function tp(t,e){const n=np();n&&n.postMessage({key:t,fid:e}),rp()}let $t=null;function np(){return!$t&&"BroadcastChannel"in self&&($t=new BroadcastChannel("[Firebase] FID Change"),$t.onmessage=t=>{Fc(t.data.key,t.data.fid)}),$t}function rp(){Lc.size===0&&$t&&($t.close(),$t=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="firebase-installations-database",ip=1,Kt="firebase-installations-store";let ps=null;function gi(){return ps||(ps=bc(sp,ip,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kt)}}})),ps}async function Cr(t,e){const n=Xr(t),s=(await gi()).transaction(Kt,"readwrite"),i=s.objectStore(Kt),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Uc(t,e.fid),e}async function $c(t){const e=Xr(t),r=(await gi()).transaction(Kt,"readwrite");await r.objectStore(Kt).delete(e),await r.done}async function Qr(t,e){const n=Xr(t),s=(await gi()).transaction(Kt,"readwrite"),i=s.objectStore(Kt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Uc(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t){let e;const n=await Qr(t.appConfig,r=>{const s=op(r),i=ap(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===js?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function op(t){const e=t||{fid:Zh(),registrationStatus:0};return Bc(e)}function ap(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(zt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=cp(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:lp(t)}:{installationEntry:e}}async function cp(t,e){try{const n=await Yh(t,e);return Cr(t.appConfig,n)}catch(n){throw kc(n)&&n.customData.serverCode===409?await $c(t.appConfig):await Cr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function lp(t){let e=await vo(t.appConfig);for(;e.registrationStatus===1;)await xc(100),e=await vo(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mi(t);return r||n}return e}function vo(t){return Qr(t,e=>{if(!e)throw zt.create("installation-not-found");return Bc(e)})}function Bc(t){return up(t)?{fid:t.fid,registrationStatus:0}:t}function up(t){return t.registrationStatus===1&&t.registrationTime+Ac<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fp({appConfig:t,heartbeatServiceProvider:e},n){const r=dp(t,n),s=qh(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Rc,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Nc(()=>fetch(r,a));if(c.ok){const l=await c.json();return Pc(l)}else throw await Dc("Generate Auth Token",c)}function dp(t,{fid:e}){return`${Oc(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e=!1){let n;const r=await Qr(t.appConfig,i=>{if(!jc(i))throw zt.create("not-registered");const o=i.authToken;if(!e&&gp(o))return i;if(o.requestStatus===1)return n=hp(t,e),i;{if(!navigator.onLine)throw zt.create("app-offline");const a=_p(i);return n=pp(t,a),a}});return n?await n:r.authToken}async function hp(t,e){let n=await bo(t.appConfig);for(;n.authToken.requestStatus===1;)await xc(100),n=await bo(t.appConfig);const r=n.authToken;return r.requestStatus===0?_i(t,e):r}function bo(t){return Qr(t,e=>{if(!jc(e))throw zt.create("not-registered");const n=e.authToken;return yp(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function pp(t,e){try{const n=await fp(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Cr(t.appConfig,r),n}catch(n){if(kc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await $c(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Cr(t.appConfig,r)}throw n}}function jc(t){return t!==void 0&&t.registrationStatus===2}function gp(t){return t.requestStatus===2&&!mp(t)}function mp(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Vh}function _p(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function yp(t){return t.requestStatus===1&&t.requestTime+Ac<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(t){const e=t,{installationEntry:n,registrationPromise:r}=await mi(e);return r?r.catch(console.error):_i(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(t,e=!1){const n=t;return await Ip(n),(await _i(n,e)).token}async function Ip(t){const{registrationPromise:e}=await mi(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t){if(!t||!t.options)throw gs("App Configuration");if(!t.name)throw gs("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw gs(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function gs(t){return zt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="installations",Ep="installations-internal",Tp=t=>{const e=t.getProvider("app").getImmediate(),n=wp(e),r=yn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Sp=t=>{const e=t.getProvider("app").getImmediate(),n=yn(e,Hc).getImmediate();return{getId:()=>vp(n),getToken:s=>bp(n,s)}};function Ap(){lt(new Ze(Hc,Tp,"PUBLIC")),lt(new Ze(Ep,Sp,"PRIVATE"))}Ap();Je(Sc,pi);Je(Sc,pi,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="analytics",Rp="firebase_id",Cp="origin",kp=60*1e3,Op="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new di("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Pp(t,e){const n=document.createElement("script");n.src=`${Vc}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Dp(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Mp(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Wc(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Re.error(a)}t("config",s,i)}async function Np(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Wc(n);for(const c of o){const l=a.find(h=>h.measurementId===c),f=l&&e[l.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Re.error(i)}}function xp(t,e,n,r){async function s(i,o,a){try{i==="event"?await Np(t,e,n,o,a):i==="config"?await Mp(t,e,n,r,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Re.error(c)}}return s}function Lp(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=xp(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Up(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Vc)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Pe=new Jt("analytics","Analytics",Fp);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=30,Bp=1e3;class jp{constructor(e={},n=Bp){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const zc=new jp;function Hp(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Vp(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Hp(r)},i=Op.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Pe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Wp(t,e=zc,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Pe.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Pe.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new qp;return setTimeout(async()=>{a.abort()},n!==void 0?n:kp),Kc({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Kc(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=zc){var i;const{appId:o,measurementId:a}=t;try{await zp(r,e)}catch(c){if(a)return Re.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Vp(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Kp(l)){if(s.deleteThrottleMetadata(o),a)return Re.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const f=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?uo(n,s.intervalMillis,$p):uo(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,h),Re.debug(`Calling attemptFetch again in ${f} millis`),Kc(t,h,r,s)}}function zp(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Pe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Kp(t){if(!(t instanceof et)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class qp{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Gp(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp(){if(mc())try{await _c()}catch(t){return Re.warn(Pe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Re.warn(Pe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Yp(t,e,n,r,s,i,o){var a;const c=Wp(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Re.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Re.error(m)),e.push(c);const l=Jp().then(m=>{if(m)return r.getId()}),[f,h]=await Promise.all([c,l]);Up(i)||Pp(i,f.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[Cp]="firebase",p.update=!0,h!=null&&(p[Rp]=h),s("config",f.measurementId,p),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.app=e}_delete(){return delete Cn[this.app.options.appId],Promise.resolve()}}let Cn={},Io=[];const wo={};let ms="dataLayer",Qp="gtag",Eo,qc,To=!1;function Zp(){const t=[];if(gc()&&t.push("This is a browser extension environment."),Td()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Pe.create("invalid-analytics-context",{errorInfo:e});Re.warn(n.message)}}function eg(t,e,n){Zp();const r=t.options.appId;if(!r)throw Pe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Re.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Pe.create("no-api-key");if(Cn[r]!=null)throw Pe.create("already-exists",{id:r});if(!To){Dp(ms);const{wrappedGtag:i,gtagCore:o}=Lp(Cn,Io,wo,ms,Qp);qc=i,Eo=o,To=!0}return Cn[r]=Yp(t,Io,wo,e,Eo,ms,n),new Xp(t)}function tg(t=wc()){t=Ve(t);const e=yn(t,kr);return e.isInitialized()?e.getImmediate():ng(t)}function ng(t,e={}){const n=yn(t,kr);if(n.isInitialized()){const s=n.getImmediate();if($n(e,n.getOptions()))return s;throw Pe.create("already-initialized")}return n.initialize({options:e})}function rg(t,e,n,r){t=Ve(t),Gp(qc,Cn[t.app.options.appId],e,n,r).catch(s=>Re.error(s))}const So="@firebase/analytics",Ao="0.9.4";function sg(){lt(new Ze(kr,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return eg(r,s,n)},"PUBLIC")),lt(new Ze("analytics-internal",t,"PRIVATE")),Je(So,Ao),Je(So,Ao,"esm2017");function t(e){try{const n=e.getProvider(kr).getImmediate();return{logEvent:(r,s,i)=>rg(n,r,s,i)}}catch(n){throw Pe.create("interop-component-reg-failed",{reason:n})}}}sg();const ig={apiKey:"AIzaSyDOLEFhtkX2Vra0ZKMWc9qDRRAOhDUhEBA",authDomain:"walkie-talkie-f57ce.firebaseapp.com",databaseURL:"https://walkie-talkie-f57ce-default-rtdb.europe-west1.firebasedatabase.app",projectId:"walkie-talkie-f57ce",storageBucket:"walkie-talkie-f57ce.appspot.com",messagingSenderId:"13384004136",appId:"1:13384004136:web:cb86f68ccffd3652f33b1d",measurementId:"G-DZ0WRV77SG"},Hs=Ic(ig);tg(Hs);function yi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Gc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const og=Gc,Jc=new Jt("auth","Firebase",Gc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new di("@firebase/auth");function mr(t,...e){Ro.logLevel<=te.ERROR&&Ro.error(`Auth (${Yr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,...e){throw vi(t,...e)}function Ye(t,...e){return vi(t,...e)}function ag(t,e,n){const r=Object.assign(Object.assign({},og()),{[e]:n});return new Jt("auth","Firebase",r).create(e,{appName:t.name})}function vi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jc.create(t,...e)}function F(t,e,...n){if(!t)throw vi(e,...n)}function it(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mr(e),new Error(e)}function ut(t,e){t||it(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Map;function ot(t){ut(t instanceof Function,"Expected a class definition");let e=Co.get(t);return e?(ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Co.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t,e){const n=yn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if($n(i,e??{}))return s;je(s,"already-initialized")}return n.initialize({options:e})}function lg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ug(){return ko()==="http:"||ko()==="https:"}function ko(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ug()||gc()||"connection"in navigator)?navigator.onLine:!0}function dg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ut(n>e,"Short delay should be less than long delay!"),this.isMobile=Id()||wd()}get(){return fg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t,e){ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=new Gn(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yn(t,e,n,r,s={}){return Xc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=qn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Yc.fetch()(Qc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Xc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hg),e);try{const s=new gg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw cr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw cr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw cr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw cr(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ag(t,f,l);je(t,f)}}catch(s){if(s instanceof et)throw s;je(t,"internal-error",{message:String(s)})}}async function Xn(t,e,n,r,s={}){const i=await Yn(t,e,n,r,s);return"mfaPendingCredential"in i&&je(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Qc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?bi(t.config,s):`${t.config.apiScheme}://${s}`}class gg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),pg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ye(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(t,e){return Yn(t,"POST","/v1/accounts:delete",e)}async function _g(t,e){return Yn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yg(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),s=Ii(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:kn(_s(s.auth_time)),issuedAtTime:kn(_s(s.iat)),expirationTime:kn(_s(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _s(t){return Number(t)*1e3}function Ii(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mr("JWT malformed, contained fewer than 3 sections"),null;try{const s=dc(n);return s?JSON.parse(s):(mr("Failed to decode base64 JWT payload"),null)}catch(s){return mr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vg(t){const e=Ii(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof et&&bg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kn(this.lastLoginAt),this.creationTime=kn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t){var e;const n=t.auth,r=await t.getIdToken(),s=await jn(t,_g(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Tg(i.providerUserInfo):[],a=Eg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Zc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function wg(t){const e=Ve(t);await Or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Eg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Tg(t){return t.map(e=>{var{providerId:n}=e,r=yi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(t,e){const n=await Xc(t,{},async()=>{const r=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Qc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Yc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Sg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Hn;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hn,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=yi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ig(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await jn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yg(this,e)}reload(){return wg(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Or(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jn(this,mg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:P,emailVerified:V,isAnonymous:X,providerData:ce,stsTokenManager:de}=n;F(P&&de,e,"internal-error");const j=Hn.fromJSON(this.name,de);F(typeof P=="string",e,"internal-error"),ht(h,e.name),ht(p,e.name),F(typeof V=="boolean",e,"internal-error"),F(typeof X=="boolean",e,"internal-error"),ht(m,e.name),ht(T,e.name),ht(A,e.name),ht(x,e.name),ht(k,e.name),ht(L,e.name);const re=new Vt({uid:P,auth:e,email:p,emailVerified:V,displayName:h,isAnonymous:X,photoURL:T,phoneNumber:m,tenantId:A,stsTokenManager:j,createdAt:k,lastLoginAt:L});return ce&&Array.isArray(ce)&&(re.providerData=ce.map(Q=>Object.assign({},Q))),x&&(re._redirectEventId=x),re}static async _fromIdTokenResponse(e,n,r=!1){const s=new Hn;s.updateFromServerResponse(n);const i=new Vt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Or(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}el.type="NONE";const Oo=el;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t,e,n){return`firebase:${t}:${e}:${n}`}class ln{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_r(this.userKey,s.apiKey,i),this.fullPersistenceKey=_r("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ln(ot(Oo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ot(Oo);const o=_r(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=Vt._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ln(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ln(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(il(e))return"Blackberry";if(ol(e))return"Webos";if(wi(e))return"Safari";if((e.includes("chrome/")||nl(e))&&!e.includes("edge/"))return"Chrome";if(sl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tl(t=be()){return/firefox\//i.test(t)}function wi(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nl(t=be()){return/crios\//i.test(t)}function rl(t=be()){return/iemobile/i.test(t)}function sl(t=be()){return/android/i.test(t)}function il(t=be()){return/blackberry/i.test(t)}function ol(t=be()){return/webos/i.test(t)}function Zr(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ag(t=be()){var e;return Zr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rg(){return Ed()&&document.documentMode===10}function al(t=be()){return Zr(t)||sl(t)||ol(t)||il(t)||/windows phone/i.test(t)||rl(t)}function Cg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t,e=[]){let n;switch(t){case"Browser":n=Po(be());break;case"Worker":n=`${Po(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Do(this),this.idTokenSubscription=new Do(this),this.beforeStateQueue=new kg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ln.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Or(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ve(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ot(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await ln.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Qn(t){return Ve(t)}class Do{constructor(e){this.auth=e,this.observer=null,this.addObserver=kd(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Pg(t,e,n){const r=Qn(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ll(e),{host:o,port:a}=Dg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Mg()}function ll(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Dg(t){const e=ll(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Mo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Mo(o)}}}function Mo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Mg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,n){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}async function Ng(t,e){return Yn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(t,e){return Xn(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lg(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function Ug(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Ei{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Vn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return xg(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Lg(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Ng(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ug(e,{idToken:n,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(t,e){return Xn(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="http://localhost";class qt extends Ei{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=yi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new qt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return un(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,un(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,un(e,n)}buildRequest(){const e={requestUri:Fg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bg(t){const e=Tn(Sn(t)).link,n=e?Tn(Sn(e)).deep_link_id:null,r=Tn(Sn(t)).deep_link_id;return(r?Tn(Sn(r)).link:null)||r||n||e||t}class Ti{constructor(e){var n,r,s,i,o,a;const c=Tn(Sn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=$g((s=c.mode)!==null&&s!==void 0?s:null);F(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Bg(e);try{return new Ti(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.providerId=vn.PROVIDER_ID}static credential(e,n){return Vn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ti.parseLink(n);return F(r,"argument-error"),Vn._fromEmailAndCode(e,r.code,r.tenantId)}}vn.PROVIDER_ID="password";vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends ul{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Zn{constructor(){super("facebook.com")}static credential(e){return qt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Zn{constructor(){super("github.com")}static credential(e){return qt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Zn{constructor(){super("twitter.com")}static credential(e,n){return qt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return It.credential(n,r)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(t,e){return Xn(t,"POST","/v1/accounts:signUp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Vt._fromIdTokenResponse(e,r,s),o=No(r);return new Gt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=No(r);return new Gt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function No(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends et{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Pr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Pr(e,n,r,s)}}function fl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pr._fromErrorAndOperation(t,i,e,r):i})}async function Hg(t,e,n=!1){const r=await jn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await jn(t,fl(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=Ii(i.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),Gt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&je(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(t,e,n=!1){const r="signIn",s=await fl(t,r,e),i=await Gt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Wg(t,e){return dl(Qn(t),e)}async function Xy(t,e,n){const r=Qn(t),s=await jg(r,{returnSecureToken:!0,email:e,password:n}),i=await Gt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Qy(t,e,n){return Wg(Ve(t),vn.credential(e,n))}function zg(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function Kg(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function qg(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function Gg(t){return Ve(t).signOut()}const Dr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dr,"1"),this.storage.removeItem(Dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(){const t=be();return wi(t)||Zr(t)}const Yg=1e3,Xg=10;class pl extends hl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Jg()&&Cg(),this.fallbackToPolling=al(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Rg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Xg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Yg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pl.type="LOCAL";const Qg=pl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends hl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gl.type="SESSION";const ml=gl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new es(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Zg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}es.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Si("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function tm(t){Xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function nm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sm(){return _l()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="firebaseLocalStorageDb",im=1,Mr="firebaseLocalStorage",vl="fbase_key";class er{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ts(t,e){return t.transaction([Mr],e?"readwrite":"readonly").objectStore(Mr)}function om(){const t=indexedDB.deleteDatabase(yl);return new er(t).toPromise()}function Ws(){const t=indexedDB.open(yl,im);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mr,{keyPath:vl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mr)?e(r):(r.close(),await om(),e(await Ws()))})})}async function xo(t,e,n){const r=ts(t,!0).put({[vl]:e,value:n});return new er(r).toPromise()}async function am(t,e){const n=ts(t,!1).get(e),r=await new er(n).toPromise();return r===void 0?null:r.value}function Lo(t,e){const n=ts(t,!0).delete(e);return new er(n).toPromise()}const cm=800,lm=3;class bl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ws(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _l()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=es._getInstance(sm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nm(),!this.activeServiceWorker)return;this.sender=new em(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ws();return await xo(e,Dr,"1"),await Lo(e,Dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>am(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ts(s,!1).getAll();return new er(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bl.type="LOCAL";const um=bl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ye("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",fm().appendChild(r)})}function hm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Gn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e){return e?ot(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Ei{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return un(e,this._buildIdpRequest())}_linkToIdToken(e,n){return un(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return un(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gm(t){return dl(t.auth,new Ai(t),t.bypassAuthState)}function mm(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Vg(n,new Ai(t),t.bypassAuthState)}async function _m(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Hg(n,new Ai(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gm;case"linkViaPopup":case"linkViaRedirect":return _m;case"reauthViaPopup":case"reauthViaRedirect":return mm;default:je(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=new Gn(2e3,1e4);class rn extends Il{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=Si();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ym.get())};e()}}rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="pendingRedirect",yr=new Map;class bm extends Il{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yr.get(this.auth._key());if(!e){try{const r=await Im(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yr.set(this.auth._key(),e)}return this.bypassAuthState||yr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Im(t,e){const n=Tm(e),r=Em(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wm(t,e){yr.set(t._key(),e)}function Em(t){return ot(t._redirectPersistence)}function Tm(t){return _r(vm,t.config.apiKey,t.name)}async function Sm(t,e,n=!1){const r=Qn(t),s=pm(r,e),o=await new bm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=10*60*1e3;class Rm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Am&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uo(e))}saveEventToCache(e){this.cachedEventUids.add(Uo(e)),this.lastProcessedEventTime=Date.now()}}function Uo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Cm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function km(t,e={}){return Yn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pm=/^https?/;async function Dm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await km(t);for(const n of e)try{if(Mm(n))return}catch{}je(t,"unauthorized-domain")}function Mm(t){const e=Vs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Pm.test(n))return!1;if(Om.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new Gn(3e4,6e4);function Fo(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xm(t){return new Promise((e,n)=>{var r,s,i;function o(){Fo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fo(),n(Ye(t,"network-request-failed"))},timeout:Nm.get()})}if(!((s=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Xe().gapi)===null||i===void 0)&&i.load)o();else{const a=hm("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(Ye(t,"network-request-failed"))},dm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw vr=null,e})}let vr=null;function Lm(t){return vr=vr||xm(t),vr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new Gn(5e3,15e3),Fm="__/auth/iframe",$m="emulator/auth/iframe",Bm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hm(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bi(e,$m):`https://${t.config.authDomain}/${Fm}`,r={apiKey:e.apiKey,appName:t.name,v:Yr},s=jm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qn(r).slice(1)}`}async function Vm(t){const e=await Lm(t),n=Xe().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:Hm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ye(t,"network-request-failed"),a=Xe().setTimeout(()=>{i(o)},Um.get());function c(){Xe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zm=500,Km=600,qm="_blank",Gm="http://localhost";class $o{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jm(t,e,n,r=zm,s=Km){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Wm),{width:r.toString(),height:s.toString(),top:i,left:o}),l=be().toLowerCase();n&&(a=nl(l)?qm:n),tl(l)&&(e=e||Gm,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[m,T])=>`${p}${m}=${T},`,"");if(Ag(l)&&a!=="_self")return Ym(e||"",a),new $o(null);const h=window.open(e||"",a,f);F(h,t,"popup-blocked");try{h.focus()}catch{}return new $o(h)}function Ym(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="__/auth/handler",Qm="emulator/auth/handler";function Bo(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yr,eventId:s};if(e instanceof ul){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Zn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Zm(t)}?${qn(a).slice(1)}`}function Zm({config:t}){return t.emulator?bi(t,Qm):`https://${t.authDomain}/${Xm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="webStorageSupport";class e_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ml,this._completeRedirectFn=Sm,this._overrideRedirectResult=wm}async _openPopup(e,n,r,s){var i;ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Bo(e,n,r,Vs(),s);return Jm(e,o,Si())}async _openRedirect(e,n,r,s){return await this._originValidation(e),tm(Bo(e,n,r,Vs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ut(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Vm(e),r=new Rm(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ys,{type:ys},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ys];o!==void 0&&n(!!o),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Dm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return al()||wi()||Zr()}}const t_=e_;var jo="@firebase/auth",Ho="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function s_(t){lt(new Ze("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{F(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cl(t)},f=new Og(a,c,l);return lg(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),lt(new Ze("auth-internal",e=>{const n=Qn(e.getProvider("auth").getImmediate());return(r=>new n_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(jo,Ho,r_(t)),Je(jo,Ho,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=5*60,o_=pc("authIdTokenMaxAge")||i_;let Vo=null;const a_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>o_)return;const s=n==null?void 0:n.token;Vo!==s&&(Vo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Wo(t=wc()){const e=yn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cg(t,{popupRedirectResolver:t_,persistence:[um,Qg,ml]}),r=pc("authTokenSyncURL");if(r){const i=a_(r);Kg(n,i,()=>i(n.currentUser)),zg(n,o=>i(o))}const s=hc("auth");return s&&Pg(n,`http://${s}`),n}s_("Browser");const c_=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},pe=t=>(Uu("data-v-d0158432"),t=t(),Fu(),t),l_={class:"logo"},u_=["src"],f_=pe(()=>ie("span",{class:"material-icons"},"keyboard_double_arrow_right",-1)),d_=[f_],h_=pe(()=>ie("h3",null,"Menu",-1)),p_={class:"menu"},g_=pe(()=>ie("span",{class:"material-icons"},"home",-1)),m_=pe(()=>ie("span",{class:"text"},"Home",-1)),__=pe(()=>ie("span",{class:"material-icons"},"description",-1)),y_=pe(()=>ie("span",{class:"text"},"Registration",-1)),v_=pe(()=>ie("span",{class:"material-icons"},"login",-1)),b_=pe(()=>ie("span",{class:"text"},"Login",-1)),I_=pe(()=>ie("span",{class:"material-icons"},"key",-1)),w_=pe(()=>ie("span",{class:"text"},"Secure",-1)),E_=pe(()=>ie("span",{class:"material-icons"},"apps",-1)),T_=pe(()=>ie("span",{class:"text"},"App",-1)),S_=pe(()=>ie("span",{class:"material-icons"},"logout",-1)),A_=pe(()=>ie("span",{class:"text"},"Logout",-1)),R_=pe(()=>ie("div",{class:"flex"},null,-1)),C_={class:"menu"},k_=pe(()=>ie("span",{class:"material-icons"},"settings",-1)),O_=pe(()=>ie("span",{class:"text"},"Settings",-1)),P_={name:"Navigation",data(){return{isLoggedIn:!1}},created(){const t=Wo(Hs);qg(t,e=>{e?(console.log(e),console.log(e.uid),this.isLoggedIn=!0):this.isLoggedIn=!1})},methods:{logout(){Gg(Wo(Hs)).then(()=>{this.$router.push("/")})}}},D_=Object.assign(P_,{setup(t){const e=Ca(localStorage.getItem("is_expanded")==="true"),n=()=>{e.value=!e.value,localStorage.setItem("is_expanded",e.value)};return(r,s)=>{const i=Ga("router-link");return st(),sc("aside",{class:xr(`${e.value?"is-expanded":""}`)},[ie("div",l_,[ie("img",{src:jt(fd),alt:"Vue"},null,8,u_)]),ie("div",{class:"menu-toggle-wrap"},[ie("button",{class:"menu-toggle",onClick:n},d_)]),h_,ie("div",p_,[r.isLoggedIn?Qt("",!0):(st(),Dt(i,{key:0,to:"/",class:"button"},{default:gt(()=>[g_,m_]),_:1})),r.isLoggedIn?Qt("",!0):(st(),Dt(i,{key:1,to:"/registration",class:"button"},{default:gt(()=>[__,y_]),_:1})),r.isLoggedIn?Qt("",!0):(st(),Dt(i,{key:2,to:"/login",class:"button"},{default:gt(()=>[v_,b_]),_:1})),r.isLoggedIn?(st(),Dt(i,{key:3,to:"/secure",class:"button"},{default:gt(()=>[I_,w_]),_:1})):Qt("",!0),r.isLoggedIn?(st(),Dt(i,{key:4,to:"/app",class:"button"},{default:gt(()=>[E_,T_]),_:1})):Qt("",!0),r.isLoggedIn?(st(),Dt(i,{key:5,to:"/secure",class:"button",onClick:r.logout},{default:gt(()=>[S_,A_]),_:1},8,["onClick"])):Qt("",!0)]),R_,ie("div",C_,[he(i,{to:"/settings",class:"button"},{default:gt(()=>[k_,O_]),_:1})])],2)}}}),M_=c_(D_,[["__scopeId","data-v-d0158432"]]);const N_={class:"app"},x_={__name:"App",setup(t){return(e,n)=>{const r=Ga("router-view");return st(),sc("div",N_,[he(M_),he(r)])}}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const nn=typeof window<"u";function L_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const G=Object.assign;function vs(t,e){const n={};for(const r in e){const s=e[r];n[r]=He(s)?s.map(t):t(s)}return n}const On=()=>{},He=Array.isArray,U_=/\/$/,F_=t=>t.replace(U_,"");function bs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=H_(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function $_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function B_(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hn(e.matched[r],n.matched[s])&&El(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function El(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!j_(t[n],e[n]))return!1;return!0}function j_(t,e){return He(t)?Ko(t,e):He(e)?Ko(e,t):t===e}function Ko(t,e){return He(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function H_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Wn;(function(t){t.pop="pop",t.push="push"})(Wn||(Wn={}));var Pn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Pn||(Pn={}));function V_(t){if(!t)if(nn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),F_(t)}const W_=/^[^#]+#/;function z_(t,e){return t.replace(W_,"#")+e}function K_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ns=()=>({left:window.pageXOffset,top:window.pageYOffset});function q_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=K_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function qo(t,e){return(history.state?history.state.position-e:-1)+t}const zs=new Map;function G_(t,e){zs.set(t,e)}function J_(t){const e=zs.get(t);return zs.delete(t),e}let Y_=()=>location.protocol+"//"+location.host;function Tl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),zo(c,"")}return zo(n,t)+r+s}function X_(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Tl(t,location),T=n.value,A=e.value;let x=0;if(p){if(n.value=m,e.value=p,o&&o===T){o=null;return}x=A?p.position-A.position:0}else r(m);s.forEach(k=>{k(n.value,T,{delta:x,type:Wn.pop,direction:x?x>0?Pn.forward:Pn.back:Pn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const T=s.indexOf(p);T>-1&&s.splice(T,1)};return i.push(m),m}function f(){const{history:p}=window;p.state&&p.replaceState(G({},p.state,{scroll:ns()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function Go(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ns():null}}function Q_(t){const{history:e,location:n}=window,r={value:Tl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Y_()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[f?"replace":"assign"](p)}}function o(c,l){const f=G({},e.state,Go(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=G({},s.value,e.state,{forward:c,scroll:ns()});i(f.current,f,!0);const h=G({},Go(r.value,c,null),{position:f.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Z_(t){t=V_(t);const e=Q_(t),n=X_(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=G({location:"",base:t,go:r,createHref:z_.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ey(t){return typeof t=="string"||t&&typeof t=="object"}function Sl(t){return typeof t=="string"||typeof t=="symbol"}const pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Al=Symbol("");var Jo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Jo||(Jo={}));function pn(t,e){return G(new Error,{type:t,[Al]:!0},e)}function nt(t,e){return t instanceof Error&&Al in t&&(e==null||!!(t.type&e))}const Yo="[^/]+?",ty={sensitive:!1,strict:!1,start:!0,end:!0},ny=/[.+*?^${}()[\]/\\]/g;function ry(t,e){const n=G({},ty,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(ny,"\\$&"),m+=40;else if(p.type===1){const{value:T,repeatable:A,optional:x,regexp:k}=p;i.push({name:T,repeatable:A,optional:x});const L=k||Yo;if(L!==Yo){m+=10;try{new RegExp(`(${L})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${T}" (${L}): `+V.message)}}let P=A?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(P=x&&l.length<2?`(?:/${P})`:"/"+P),x&&(P+="?"),s+=P,m+=20,x&&(m+=-8),A&&(m+=-20),L===".*"&&(m+=-50)}f.push(m)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const m=f[p]||"",T=i[p-1];h[T.name]=m&&T.repeatable?m.split("/"):m}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const m of p)if(m.type===0)f+=m.value;else if(m.type===1){const{value:T,repeatable:A,optional:x}=m,k=T in l?l[T]:"";if(He(k)&&!A)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const L=He(k)?k.join("/"):k;if(!L)if(x)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${T}"`);f+=L}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function sy(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function iy(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=sy(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xo(r))return 1;if(Xo(s))return-1}return s.length-r.length}function Xo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const oy={type:0,value:""},ay=/[a-zA-Z0-9_]/;function cy(t){if(!t)return[[]];if(t==="/")return[[oy]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:ay.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function ly(t,e,n){const r=ry(cy(t.path),n),s=G(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function uy(t,e){const n=[],r=new Map;e=ea({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const m=!p,T=fy(f);T.aliasOf=p&&p.record;const A=ea(e,f),x=[T];if("alias"in f){const P=typeof f.alias=="string"?[f.alias]:f.alias;for(const V of P)x.push(G({},T,{components:p?p.record.components:T.components,path:V,aliasOf:p?p.record:T}))}let k,L;for(const P of x){const{path:V}=P;if(h&&V[0]!=="/"){const X=h.record.path,ce=X[X.length-1]==="/"?"":"/";P.path=h.record.path+(V&&ce+V)}if(k=ly(P,h,A),p?p.alias.push(k):(L=L||k,L!==k&&L.alias.push(k),m&&f.name&&!Zo(k)&&o(f.name)),T.children){const X=T.children;for(let ce=0;ce<X.length;ce++)i(X[ce],k,p&&p.children[ce])}p=p||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return L?()=>{o(L)}:On}function o(f){if(Sl(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&iy(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Rl(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!Zo(f)&&r.set(f.record.name,f)}function l(f,h){let p,m={},T,A;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw pn(1,{location:f});A=p.record.name,m=G(Qo(h.params,p.keys.filter(L=>!L.optional).map(L=>L.name)),f.params&&Qo(f.params,p.keys.map(L=>L.name))),T=p.stringify(m)}else if("path"in f)T=f.path,p=n.find(L=>L.re.test(T)),p&&(m=p.parse(T),A=p.record.name);else{if(p=h.name?r.get(h.name):n.find(L=>L.re.test(h.path)),!p)throw pn(1,{location:f,currentLocation:h});A=p.record.name,m=G({},h.params,f.params),T=p.stringify(m)}const x=[];let k=p;for(;k;)x.unshift(k.record),k=k.parent;return{name:A,path:T,params:m,matched:x,meta:hy(x)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Qo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function fy(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:dy(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function dy(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Zo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hy(t){return t.reduce((e,n)=>G(e,n.meta),{})}function ea(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Rl(t,e){return e.children.some(n=>n===t||Rl(t,n))}const Cl=/#/g,py=/&/g,gy=/\//g,my=/=/g,_y=/\?/g,kl=/\+/g,yy=/%5B/g,vy=/%5D/g,Ol=/%5E/g,by=/%60/g,Pl=/%7B/g,Iy=/%7C/g,Dl=/%7D/g,wy=/%20/g;function Ri(t){return encodeURI(""+t).replace(Iy,"|").replace(yy,"[").replace(vy,"]")}function Ey(t){return Ri(t).replace(Pl,"{").replace(Dl,"}").replace(Ol,"^")}function Ks(t){return Ri(t).replace(kl,"%2B").replace(wy,"+").replace(Cl,"%23").replace(py,"%26").replace(by,"`").replace(Pl,"{").replace(Dl,"}").replace(Ol,"^")}function Ty(t){return Ks(t).replace(my,"%3D")}function Sy(t){return Ri(t).replace(Cl,"%23").replace(_y,"%3F")}function Ay(t){return t==null?"":Sy(t).replace(gy,"%2F")}function Nr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Ry(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(kl," "),o=i.indexOf("="),a=Nr(o<0?i:i.slice(0,o)),c=o<0?null:Nr(i.slice(o+1));if(a in e){let l=e[a];He(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ta(t){let e="";for(let n in t){const r=t[n];if(n=Ty(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(He(r)?r.map(i=>i&&Ks(i)):[r&&Ks(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Cy(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=He(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ky=Symbol(""),na=Symbol(""),Ci=Symbol(""),Ml=Symbol(""),qs=Symbol("");function wn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function _t(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(pn(4,{from:n,to:e})):h instanceof Error?a(h):ey(h)?a(pn(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function Is(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Oy(a)){const l=(a.__vccOpts||a)[e];l&&s.push(_t(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=L_(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&_t(p,n,r,i,o)()}))}}return s}function Oy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ra(t){const e=at(Ci),n=at(Ml),r=ke(()=>e.resolve(jt(t.to))),s=ke(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(hn.bind(null,f));if(p>-1)return p;const m=sa(c[l-2]);return l>1&&sa(f)===m&&h[h.length-1].path!==m?h.findIndex(hn.bind(null,c[l-2])):p}),i=ke(()=>s.value>-1&&Ny(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&El(n.params,r.value.params));function a(c={}){return My(c)?e[jt(t.replace)?"replace":"push"](jt(t.to)).catch(On):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Py=Ha({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ra,setup(t,{slots:e}){const n=Kn(ra(t)),{options:r}=at(Ci),s=ke(()=>({[ia(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ia(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:cc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Dy=Py;function My(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ny(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!He(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function sa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ia=(t,e,n)=>t??e??n,xy=Ha({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=at(qs),s=ke(()=>t.route||r.value),i=at(na,0),o=ke(()=>{let l=jt(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),a=ke(()=>s.value.matched[o.value]);fr(na,ke(()=>o.value+1)),fr(ky,a),fr(qs,s);const c=Ca();return dr(()=>[c.value,a.value,t.name],([l,f,h],[p,m,T])=>{f&&(f.instances[h]=l,m&&m!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),l&&f&&(!m||!hn(f,m)||!p)&&(f.enterCallbacks[h]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return oa(n.default,{Component:p,route:l});const m=h.props[f],T=m?m===!0?l.params:typeof m=="function"?m(l):m:null,x=cc(p,G({},T,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return oa(n.default,{Component:x,route:l})||x}}});function oa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ly=xy;function Uy(t){const e=uy(t.routes,t),n=t.parseQuery||Ry,r=t.stringifyQuery||ta,s=t.history,i=wn(),o=wn(),a=wn(),c=Au(pt);let l=pt;nn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=vs.bind(null,y=>""+y),h=vs.bind(null,Ay),p=vs.bind(null,Nr);function m(y,C){let S,D;return Sl(y)?(S=e.getRecordMatcher(y),D=C):D=y,e.addRoute(D,S)}function T(y){const C=e.getRecordMatcher(y);C&&e.removeRoute(C)}function A(){return e.getRoutes().map(y=>y.record)}function x(y){return!!e.getRecordMatcher(y)}function k(y,C){if(C=G({},C||c.value),typeof y=="string"){const u=bs(n,y,C.path),d=e.resolve({path:u.path},C),g=s.createHref(u.fullPath);return G(u,d,{params:p(d.params),hash:Nr(u.hash),redirectedFrom:void 0,href:g})}let S;if("path"in y)S=G({},y,{path:bs(n,y.path,C.path).path});else{const u=G({},y.params);for(const d in u)u[d]==null&&delete u[d];S=G({},y,{params:h(y.params)}),C.params=h(C.params)}const D=e.resolve(S,C),z=y.hash||"";D.params=f(p(D.params));const oe=$_(r,G({},y,{hash:Ey(z),path:D.path})),H=s.createHref(oe);return G({fullPath:oe,hash:z,query:r===ta?Cy(y.query):y.query||{}},D,{redirectedFrom:void 0,href:H})}function L(y){return typeof y=="string"?bs(n,y,c.value.path):G({},y)}function P(y,C){if(l!==y)return pn(8,{from:C,to:y})}function V(y){return de(y)}function X(y){return V(G(L(y),{replace:!0}))}function ce(y){const C=y.matched[y.matched.length-1];if(C&&C.redirect){const{redirect:S}=C;let D=typeof S=="function"?S(y):S;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=L(D):{path:D},D.params={}),G({query:y.query,hash:y.hash,params:"path"in D?{}:y.params},D)}}function de(y,C){const S=l=k(y),D=c.value,z=y.state,oe=y.force,H=y.replace===!0,u=ce(S);if(u)return de(G(L(u),{state:typeof u=="object"?G({},z,u.state):z,force:oe,replace:H}),C||S);const d=S;d.redirectedFrom=C;let g;return!oe&&B_(r,D,S)&&(g=pn(16,{to:d,from:D}),Ct(D,D,!0,!1)),(g?Promise.resolve(g):re(d,D)).catch(_=>nt(_)?nt(_,2)?_:Me(_):Z(_,d,D)).then(_=>{if(_){if(nt(_,2))return de(G({replace:H},L(_.to),{state:typeof _.to=="object"?G({},z,_.to.state):z,force:oe}),C||d)}else _=ge(d,D,!0,H,z);return Q(d,D,_),_})}function j(y,C){const S=P(y,C);return S?Promise.reject(S):Promise.resolve()}function re(y,C){let S;const[D,z,oe]=Fy(y,C);S=Is(D.reverse(),"beforeRouteLeave",y,C);for(const u of D)u.leaveGuards.forEach(d=>{S.push(_t(d,y,C))});const H=j.bind(null,y,C);return S.push(H),Zt(S).then(()=>{S=[];for(const u of i.list())S.push(_t(u,y,C));return S.push(H),Zt(S)}).then(()=>{S=Is(z,"beforeRouteUpdate",y,C);for(const u of z)u.updateGuards.forEach(d=>{S.push(_t(d,y,C))});return S.push(H),Zt(S)}).then(()=>{S=[];for(const u of y.matched)if(u.beforeEnter&&!C.matched.includes(u))if(He(u.beforeEnter))for(const d of u.beforeEnter)S.push(_t(d,y,C));else S.push(_t(u.beforeEnter,y,C));return S.push(H),Zt(S)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),S=Is(oe,"beforeRouteEnter",y,C),S.push(H),Zt(S))).then(()=>{S=[];for(const u of o.list())S.push(_t(u,y,C));return S.push(H),Zt(S)}).catch(u=>nt(u,8)?u:Promise.reject(u))}function Q(y,C,S){for(const D of a.list())D(y,C,S)}function ge(y,C,S,D,z){const oe=P(y,C);if(oe)return oe;const H=C===pt,u=nn?history.state:{};S&&(D||H?s.replace(y.fullPath,G({scroll:H&&u&&u.scroll},z)):s.push(y.fullPath,z)),c.value=y,Ct(y,C,S,H),Me()}let me;function De(){me||(me=s.listen((y,C,S)=>{if(!tr.listening)return;const D=k(y),z=ce(D);if(z){de(G(z,{replace:!0}),D).catch(On);return}l=D;const oe=c.value;nn&&G_(qo(oe.fullPath,S.delta),ns()),re(D,oe).catch(H=>nt(H,12)?H:nt(H,2)?(de(H.to,D).then(u=>{nt(u,20)&&!S.delta&&S.type===Wn.pop&&s.go(-1,!1)}).catch(On),Promise.reject()):(S.delta&&s.go(-S.delta,!1),Z(H,D,oe))).then(H=>{H=H||ge(D,oe,!1),H&&(S.delta&&!nt(H,8)?s.go(-S.delta,!1):S.type===Wn.pop&&nt(H,20)&&s.go(-1,!1)),Q(D,oe,H)}).catch(On)}))}let tt=wn(),bn=wn(),le;function Z(y,C,S){Me(y);const D=bn.list();return D.length?D.forEach(z=>z(y,C,S)):console.error(y),Promise.reject(y)}function J(){return le&&c.value!==pt?Promise.resolve():new Promise((y,C)=>{tt.add([y,C])})}function Me(y){return le||(le=!y,De(),tt.list().forEach(([C,S])=>y?S(y):C()),tt.reset()),y}function Ct(y,C,S,D){const{scrollBehavior:z}=t;if(!nn||!z)return Promise.resolve();const oe=!S&&J_(qo(y.fullPath,0))||(D||!S)&&history.state&&history.state.scroll||null;return Ma().then(()=>z(y,C,oe)).then(H=>H&&q_(H)).catch(H=>Z(H,y,C))}const Ne=y=>s.go(y);let we;const Yt=new Set,tr={currentRoute:c,listening:!0,addRoute:m,removeRoute:T,hasRoute:x,getRoutes:A,resolve:k,options:t,push:V,replace:X,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:bn.add,isReady:J,install(y){const C=this;y.component("RouterLink",Dy),y.component("RouterView",Ly),y.config.globalProperties.$router=C,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>jt(c)}),nn&&!we&&c.value===pt&&(we=!0,V(s.location).catch(z=>{}));const S={};for(const z in pt)S[z]=ke(()=>c.value[z]);y.provide(Ci,C),y.provide(Ml,Kn(S)),y.provide(qs,c);const D=y.unmount;Yt.add(y),y.unmount=function(){Yt.delete(y),Yt.size<1&&(l=pt,me&&me(),me=null,c.value=pt,we=!1,le=!1),D()}}};return tr}function Zt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Fy(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>hn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>hn(l,c))||s.push(c))}return[n,r,s]}const $y="modulepreload",By=function(t){return"/"+t},aa={},en=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=By(i),i in aa)return;aa[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":$y,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},jy=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function tn(t){return()=>jy(Object.assign({"../pages/App.vue":()=>en(()=>import("./App-f5947a5b.js"),["assets/App-f5947a5b.js","assets/index.esm2017-efba12bd.js","assets/App-b65db852.css"]),"../pages/Blog.vue":()=>en(()=>import("./Blog-a13634fc.js"),["assets/Blog-a13634fc.js","assets/index.esm2017-efba12bd.js","assets/Blog-cb76ed11.css"]),"../pages/Home.vue":()=>en(()=>import("./Home-9f099cdc.js"),["assets/Home-9f099cdc.js","assets/Home-8db3ee79.css"]),"../pages/Login.vue":()=>en(()=>import("./Login-cee7626e.js"),["assets/Login-cee7626e.js","assets/Login-3513d372.css"]),"../pages/Registration.vue":()=>en(()=>import("./Registration-9eaa041d.js"),["assets/Registration-9eaa041d.js","assets/Registration-468ad2d0.css"]),"../pages/Secure.vue":()=>en(()=>import("./Secure-065dd22a.js"),["assets/Secure-065dd22a.js","assets/index.esm2017-efba12bd.js","assets/Secure-4eca70e3.css"])}),`../pages/${t}.vue`)}const Hy=[{path:"/",component:tn("Home")},{path:"/blog",component:tn("Blog")},{path:"/registration",component:tn("Registration")},{path:"/login",component:tn("Login")},{path:"/secure",component:tn("Secure")},{path:"/app",component:tn("App")}];let Vy=Uy({history:Z_(),routes:Hy});const Nl=ld(x_);Nl.use(Vy);Nl.mount("#app");export{et as A,Ze as C,Ke as F,c_ as _,st as a,ie as b,sc as c,Cf as d,Jy as e,Ky as f,Wo as g,Qt as h,Hs as i,Fu as j,qy as k,Dt as l,Xy as m,lt as n,qg as o,Uu as p,Je as q,Kn as r,Qy as s,Wy as t,yn as u,Gy as v,zy as w,Ve as x,Yy as y,wc as z};
