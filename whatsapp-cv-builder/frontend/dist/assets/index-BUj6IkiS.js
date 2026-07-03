function wd(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const l in n)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(n,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>n[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=r(l);fetch(l.href,i)}})();function jd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vo={exports:{}},Cl={},Bo={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xn=Symbol.for("react.element"),kd=Symbol.for("react.portal"),Nd=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),Sd=Symbol.for("react.profiler"),Cd=Symbol.for("react.provider"),zd=Symbol.for("react.context"),Ed=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),_d=Symbol.for("react.memo"),Ld=Symbol.for("react.lazy"),js=Symbol.iterator;function Td(e){return e===null||typeof e!="object"?null:(e=js&&e[js]||e["@@iterator"],typeof e=="function"?e:null)}var Wo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ho=Object.assign,Qo={};function Nr(e,t,r){this.props=e,this.context=t,this.refs=Qo,this.updater=r||Wo}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jo(){}Jo.prototype=Nr.prototype;function wi(e,t,r){this.props=e,this.context=t,this.refs=Qo,this.updater=r||Wo}var ji=wi.prototype=new Jo;ji.constructor=wi;Ho(ji,Nr.prototype);ji.isPureReactComponent=!0;var ks=Array.isArray,Yo=Object.prototype.hasOwnProperty,ki={current:null},Ko={key:!0,ref:!0,__self:!0,__source:!0};function Go(e,t,r){var n,l={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Yo.call(t,n)&&!Ko.hasOwnProperty(n)&&(l[n]=t[n]);var o=arguments.length-2;if(o===1)l.children=r;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];l.children=c}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)l[n]===void 0&&(l[n]=o[n]);return{$$typeof:xn,type:e,key:i,ref:s,props:l,_owner:ki.current}}function Md(e,t){return{$$typeof:xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ni(e){return typeof e=="object"&&e!==null&&e.$$typeof===xn}function Rd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ns=/\/+/g;function Jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rd(""+e.key):t.toString(36)}function Bn(e,t,r,n,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case xn:case kd:s=!0}}if(s)return s=e,l=l(s),e=n===""?"."+Jl(s,0):n,ks(l)?(r="",e!=null&&(r=e.replace(Ns,"$&/")+"/"),Bn(l,t,r,"",function(d){return d})):l!=null&&(Ni(l)&&(l=Md(l,r+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(Ns,"$&/")+"/")+e)),t.push(l)),1;if(s=0,n=n===""?".":n+":",ks(e))for(var o=0;o<e.length;o++){i=e[o];var c=n+Jl(i,o);s+=Bn(i,t,r,c,l)}else if(c=Td(e),typeof c=="function")for(e=c.call(e),o=0;!(i=e.next()).done;)i=i.value,c=n+Jl(i,o++),s+=Bn(i,t,r,c,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Cn(e,t,r){if(e==null)return e;var n=[],l=0;return Bn(e,n,"","",function(i){return t.call(r,i,l++)}),n}function Id(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Wn={transition:null},Od={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Wn,ReactCurrentOwner:ki};function Xo(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Cn,forEach:function(e,t,r){Cn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Cn(e,function(){t++}),t},toArray:function(e){return Cn(e,function(t){return t})||[]},only:function(e){if(!Ni(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Nr;R.Fragment=Nd;R.Profiler=Sd;R.PureComponent=wi;R.StrictMode=bd;R.Suspense=Pd;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Od;R.act=Xo;R.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Ho({},e.props),l=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ki.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)Yo.call(t,c)&&!Ko.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];n.children=o}return{$$typeof:xn,type:e.type,key:l,ref:i,props:n,_owner:s}};R.createContext=function(e){return e={$$typeof:zd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cd,_context:e},e.Consumer=e};R.createElement=Go;R.createFactory=function(e){var t=Go.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Ed,render:e}};R.isValidElement=Ni;R.lazy=function(e){return{$$typeof:Ld,_payload:{_status:-1,_result:e},_init:Id}};R.memo=function(e,t){return{$$typeof:_d,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Wn.transition;Wn.transition={};try{e()}finally{Wn.transition=t}};R.unstable_act=Xo;R.useCallback=function(e,t){return fe.current.useCallback(e,t)};R.useContext=function(e){return fe.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};R.useEffect=function(e,t){return fe.current.useEffect(e,t)};R.useId=function(){return fe.current.useId()};R.useImperativeHandle=function(e,t,r){return fe.current.useImperativeHandle(e,t,r)};R.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return fe.current.useMemo(e,t)};R.useReducer=function(e,t,r){return fe.current.useReducer(e,t,r)};R.useRef=function(e){return fe.current.useRef(e)};R.useState=function(e){return fe.current.useState(e)};R.useSyncExternalStore=function(e,t,r){return fe.current.useSyncExternalStore(e,t,r)};R.useTransition=function(){return fe.current.useTransition()};R.version="18.3.1";Bo.exports=R;var w=Bo.exports;const Zo=jd(w),Fd=wd({__proto__:null,default:Zo},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd=w,Ud=Symbol.for("react.element"),Ad=Symbol.for("react.fragment"),$d=Object.prototype.hasOwnProperty,Vd=Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bd={key:!0,ref:!0,__self:!0,__source:!0};function qo(e,t,r){var n,l={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)$d.call(t,n)&&!Bd.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)l[n]===void 0&&(l[n]=t[n]);return{$$typeof:Ud,type:e,key:i,ref:s,props:l,_owner:Vd.current}}Cl.Fragment=Ad;Cl.jsx=qo;Cl.jsxs=qo;Vo.exports=Cl;var a=Vo.exports,ja={},ec={exports:{}},be={},tc={exports:{}},rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,_){var T=z.length;z.push(_);e:for(;0<T;){var Q=T-1>>>1,Z=z[Q];if(0<l(Z,_))z[Q]=_,z[T]=Z,T=Q;else break e}}function r(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var _=z[0],T=z.pop();if(T!==_){z[0]=T;e:for(var Q=0,Z=z.length,bn=Z>>>1;Q<bn;){var _t=2*(Q+1)-1,Ql=z[_t],Lt=_t+1,Sn=z[Lt];if(0>l(Ql,T))Lt<Z&&0>l(Sn,Ql)?(z[Q]=Sn,z[Lt]=T,Q=Lt):(z[Q]=Ql,z[_t]=T,Q=_t);else if(Lt<Z&&0>l(Sn,T))z[Q]=Sn,z[Lt]=T,Q=Lt;else break e}}return _}function l(z,_){var T=z.sortIndex-_.sortIndex;return T!==0?T:z.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var c=[],d=[],h=1,m=null,g=3,y=!1,x=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var _=r(d);_!==null;){if(_.callback===null)n(d);else if(_.startTime<=z)n(d),_.sortIndex=_.expirationTime,t(c,_);else break;_=r(d)}}function j(z){if(v=!1,p(z),!x)if(r(c)!==null)x=!0,Wl(b);else{var _=r(d);_!==null&&Hl(j,_.startTime-z)}}function b(z,_){x=!1,v&&(v=!1,f(P),P=-1),y=!0;var T=g;try{for(p(_),m=r(c);m!==null&&(!(m.expirationTime>_)||z&&!le());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,g=m.priorityLevel;var Z=Q(m.expirationTime<=_);_=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===r(c)&&n(c),p(_)}else n(c);m=r(c)}if(m!==null)var bn=!0;else{var _t=r(d);_t!==null&&Hl(j,_t.startTime-_),bn=!1}return bn}finally{m=null,g=T,y=!1}}var S=!1,E=null,P=-1,A=5,L=-1;function le(){return!(e.unstable_now()-L<A)}function Ye(){if(E!==null){var z=e.unstable_now();L=z;var _=!0;try{_=E(!0,z)}finally{_?Me():(S=!1,E=null)}}else S=!1}var Me;if(typeof u=="function")Me=function(){u(Ye)};else if(typeof MessageChannel<"u"){var ws=new MessageChannel,xd=ws.port2;ws.port1.onmessage=Ye,Me=function(){xd.postMessage(null)}}else Me=function(){k(Ye,0)};function Wl(z){E=z,S||(S=!0,Me())}function Hl(z,_){P=k(function(){z(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Wl(b))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var T=g;g=_;try{return z()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,_){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var T=g;g=z;try{return _()}finally{g=T}},e.unstable_scheduleCallback=function(z,_,T){var Q=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Q+T:Q):T=Q,z){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=T+Z,z={id:h++,callback:_,priorityLevel:z,startTime:T,expirationTime:Z,sortIndex:-1},T>Q?(z.sortIndex=T,t(d,z),r(c)===null&&z===r(d)&&(v?(f(P),P=-1):v=!0,Hl(j,T-Q))):(z.sortIndex=Z,t(c,z),x||y||(x=!0,Wl(b))),z},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(z){var _=g;return function(){var T=g;g=_;try{return z.apply(this,arguments)}finally{g=T}}}})(rc);tc.exports=rc;var Wd=tc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd=w,Ne=Wd;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nc=new Set,Zr={};function Jt(e,t){hr(e,t),hr(e+"Capture",t)}function hr(e,t){for(Zr[e]=t,e=0;e<t.length;e++)nc.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ka=Object.prototype.hasOwnProperty,Qd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bs={},Ss={};function Jd(e){return ka.call(Ss,e)?!0:ka.call(bs,e)?!1:Qd.test(e)?Ss[e]=!0:(bs[e]=!0,!1)}function Yd(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kd(e,t,r,n){if(t===null||typeof t>"u"||Yd(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,r,n,l,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var bi=/[\-:]([a-z])/g;function Si(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bi,Si);ne[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bi,Si);ne[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bi,Si);ne[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ci(e,t,r,n){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kd(t,r,l,n)&&(r=null),n||l===null?Jd(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,n=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var lt=Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zn=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),zi=Symbol.for("react.strict_mode"),Na=Symbol.for("react.profiler"),lc=Symbol.for("react.provider"),ac=Symbol.for("react.context"),Ei=Symbol.for("react.forward_ref"),ba=Symbol.for("react.suspense"),Sa=Symbol.for("react.suspense_list"),Pi=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),ic=Symbol.for("react.offscreen"),Cs=Symbol.iterator;function _r(e){return e===null||typeof e!="object"?null:(e=Cs&&e[Cs]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Yl;function Dr(e){if(Yl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Yl=t&&t[1]||""}return`
`+Yl+e}var Kl=!1;function Gl(e,t){if(!e||Kl)return"";Kl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=n.stack.split(`
`),s=l.length-1,o=i.length-1;1<=s&&0<=o&&l[s]!==i[o];)o--;for(;1<=s&&0<=o;s--,o--)if(l[s]!==i[o]){if(s!==1||o!==1)do if(s--,o--,0>o||l[s]!==i[o]){var c=`
`+l[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=o);break}}}finally{Kl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Dr(e):""}function Gd(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=Gl(e.type,!1),e;case 11:return e=Gl(e.type.render,!1),e;case 1:return e=Gl(e.type,!0),e;default:return""}}function Ca(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Gt:return"Portal";case Na:return"Profiler";case zi:return"StrictMode";case ba:return"Suspense";case Sa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ac:return(e.displayName||"Context")+".Consumer";case lc:return(e._context.displayName||"Context")+".Provider";case Ei:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pi:return t=e.displayName||null,t!==null?t:Ca(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return Ca(e(t))}catch{}}return null}function Xd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ca(t);case 8:return t===zi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zd(e){var t=sc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function En(e){e._valueTracker||(e._valueTracker=Zd(e))}function oc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=sc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function za(e,t){var r=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function zs(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Nt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cc(e,t){t=t.checked,t!=null&&Ci(e,"checked",t,!1)}function Ea(e,t){cc(e,t);var r=Nt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pa(e,t.type,r):t.hasOwnProperty("defaultValue")&&Pa(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Es(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Pa(e,t,r){(t!=="number"||tl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Ur=Array.isArray;function cr(e,t,r,n){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Nt(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function _a(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ps(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(N(92));if(Ur(r)){if(1<r.length)throw Error(N(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Nt(r)}}function uc(e,t){var r=Nt(t.value),n=Nt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function _s(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function La(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pn,fc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pn=Pn||document.createElement("div"),Pn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qd=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){qd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vr[t]=Vr[e]})});function pc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+t).trim():t+"px"}function mc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,l=pc(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,l):e[r]=l}}var ef=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ta(e,t){if(t){if(ef[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Ma(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ra=null;function _i(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,ur=null,dr=null;function Ls(e){if(e=kn(e)){if(typeof Ia!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Ll(t),Ia(e.stateNode,e.type,t))}}function hc(e){ur?dr?dr.push(e):dr=[e]:ur=e}function gc(){if(ur){var e=ur,t=dr;if(dr=ur=null,Ls(e),t)for(e=0;e<t.length;e++)Ls(t[e])}}function vc(e,t){return e(t)}function yc(){}var Xl=!1;function xc(e,t,r){if(Xl)return e(t,r);Xl=!0;try{return vc(e,t,r)}finally{Xl=!1,(ur!==null||dr!==null)&&(yc(),gc())}}function en(e,t){var r=e.stateNode;if(r===null)return null;var n=Ll(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,t,typeof r));return r}var Oa=!1;if(et)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{Oa=!1}function tf(e,t,r,n,l,i,s,o,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(h){this.onError(h)}}var Br=!1,rl=null,nl=!1,Fa=null,rf={onError:function(e){Br=!0,rl=e}};function nf(e,t,r,n,l,i,s,o,c){Br=!1,rl=null,tf.apply(rf,arguments)}function lf(e,t,r,n,l,i,s,o,c){if(nf.apply(this,arguments),Br){if(Br){var d=rl;Br=!1,rl=null}else throw Error(N(198));nl||(nl=!0,Fa=d)}}function Yt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function wc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ts(e){if(Yt(e)!==e)throw Error(N(188))}function af(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var r=e,n=t;;){var l=r.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){r=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===r)return Ts(l),e;if(i===n)return Ts(l),t;i=i.sibling}throw Error(N(188))}if(r.return!==n.return)r=l,n=i;else{for(var s=!1,o=l.child;o;){if(o===r){s=!0,r=l,n=i;break}if(o===n){s=!0,n=l,r=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===r){s=!0,r=i,n=l;break}if(o===n){s=!0,n=i,r=l;break}o=o.sibling}if(!s)throw Error(N(189))}}if(r.alternate!==n)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:t}function jc(e){return e=af(e),e!==null?kc(e):null}function kc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kc(e);if(t!==null)return t;e=e.sibling}return null}var Nc=Ne.unstable_scheduleCallback,Ms=Ne.unstable_cancelCallback,sf=Ne.unstable_shouldYield,of=Ne.unstable_requestPaint,J=Ne.unstable_now,cf=Ne.unstable_getCurrentPriorityLevel,Li=Ne.unstable_ImmediatePriority,bc=Ne.unstable_UserBlockingPriority,ll=Ne.unstable_NormalPriority,uf=Ne.unstable_LowPriority,Sc=Ne.unstable_IdlePriority,zl=null,He=null;function df(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(zl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:mf,ff=Math.log,pf=Math.LN2;function mf(e){return e>>>=0,e===0?32:31-(ff(e)/pf|0)|0}var _n=64,Ln=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function al(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,l=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var o=s&~l;o!==0?n=Ar(o):(i&=s,i!==0&&(n=Ar(i)))}else s=r&~l,s!==0?n=Ar(s):i!==0&&(n=Ar(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&l)&&(l=n&-n,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ue(t),l=1<<r,n|=e[r],t&=~l;return n}function hf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Ue(i),o=1<<s,c=l[s];c===-1?(!(o&r)||o&n)&&(l[s]=hf(o,t)):c<=t&&(e.expiredLanes|=o),i&=~o}}function Da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cc(){var e=_n;return _n<<=1,!(_n&4194240)&&(_n=64),e}function Zl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function wn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=r}function vf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Ue(r),i=1<<l;t[l]=0,n[l]=-1,e[l]=-1,r&=~i}}function Ti(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ue(r),l=1<<n;l&t|e[n]&t&&(e[n]|=t),r&=~l}}var O=0;function zc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ec,Mi,Pc,_c,Lc,Ua=!1,Tn=[],mt=null,ht=null,gt=null,tn=new Map,rn=new Map,ot=[],yf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rs(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":tn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rn.delete(t.pointerId)}}function Tr(e,t,r,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=kn(t),t!==null&&Mi(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function xf(e,t,r,n,l){switch(t){case"focusin":return mt=Tr(mt,e,t,r,n,l),!0;case"dragenter":return ht=Tr(ht,e,t,r,n,l),!0;case"mouseover":return gt=Tr(gt,e,t,r,n,l),!0;case"pointerover":var i=l.pointerId;return tn.set(i,Tr(tn.get(i)||null,e,t,r,n,l)),!0;case"gotpointercapture":return i=l.pointerId,rn.set(i,Tr(rn.get(i)||null,e,t,r,n,l)),!0}return!1}function Tc(e){var t=Ft(e.target);if(t!==null){var r=Yt(t);if(r!==null){if(t=r.tag,t===13){if(t=wc(r),t!==null){e.blockedOn=t,Lc(e.priority,function(){Pc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ra=n,r.target.dispatchEvent(n),Ra=null}else return t=kn(r),t!==null&&Mi(t),e.blockedOn=r,!1;t.shift()}return!0}function Is(e,t,r){Hn(e)&&r.delete(t)}function wf(){Ua=!1,mt!==null&&Hn(mt)&&(mt=null),ht!==null&&Hn(ht)&&(ht=null),gt!==null&&Hn(gt)&&(gt=null),tn.forEach(Is),rn.forEach(Is)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ua||(Ua=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,wf)))}function nn(e){function t(l){return Mr(l,e)}if(0<Tn.length){Mr(Tn[0],e);for(var r=1;r<Tn.length;r++){var n=Tn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(mt!==null&&Mr(mt,e),ht!==null&&Mr(ht,e),gt!==null&&Mr(gt,e),tn.forEach(t),rn.forEach(t),r=0;r<ot.length;r++)n=ot[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<ot.length&&(r=ot[0],r.blockedOn===null);)Tc(r),r.blockedOn===null&&ot.shift()}var fr=lt.ReactCurrentBatchConfig,il=!0;function jf(e,t,r,n){var l=O,i=fr.transition;fr.transition=null;try{O=1,Ri(e,t,r,n)}finally{O=l,fr.transition=i}}function kf(e,t,r,n){var l=O,i=fr.transition;fr.transition=null;try{O=4,Ri(e,t,r,n)}finally{O=l,fr.transition=i}}function Ri(e,t,r,n){if(il){var l=Aa(e,t,r,n);if(l===null)oa(e,t,n,sl,r),Rs(e,n);else if(xf(l,e,t,r,n))n.stopPropagation();else if(Rs(e,n),t&4&&-1<yf.indexOf(e)){for(;l!==null;){var i=kn(l);if(i!==null&&Ec(i),i=Aa(e,t,r,n),i===null&&oa(e,t,n,sl,r),i===l)break;l=i}l!==null&&n.stopPropagation()}else oa(e,t,n,null,r)}}var sl=null;function Aa(e,t,r,n){if(sl=null,e=_i(n),e=Ft(e),e!==null)if(t=Yt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=wc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return sl=e,null}function Mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cf()){case Li:return 1;case bc:return 4;case ll:case uf:return 16;case Sc:return 536870912;default:return 16}default:return 16}}var dt=null,Ii=null,Qn=null;function Rc(){if(Qn)return Qn;var e,t=Ii,r=t.length,n,l="value"in dt?dt.value:dt.textContent,i=l.length;for(e=0;e<r&&t[e]===l[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===l[i-n];n++);return Qn=l.slice(e,1<n?1-n:void 0)}function Jn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mn(){return!0}function Os(){return!1}function Se(e){function t(r,n,l,i,s){this._reactName=r,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Mn:Os,this.isPropagationStopped=Os,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Mn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Mn)},persist:function(){},isPersistent:Mn}),t}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oi=Se(br),jn=W({},br,{view:0,detail:0}),Nf=Se(jn),ql,ea,Rr,El=W({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rr&&(Rr&&e.type==="mousemove"?(ql=e.screenX-Rr.screenX,ea=e.screenY-Rr.screenY):ea=ql=0,Rr=e),ql)},movementY:function(e){return"movementY"in e?e.movementY:ea}}),Fs=Se(El),bf=W({},El,{dataTransfer:0}),Sf=Se(bf),Cf=W({},jn,{relatedTarget:0}),ta=Se(Cf),zf=W({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Ef=Se(zf),Pf=W({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_f=Se(Pf),Lf=W({},br,{data:0}),Ds=Se(Lf),Tf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function If(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rf[e])?!!t[e]:!1}function Fi(){return If}var Of=W({},jn,{key:function(e){if(e.key){var t=Tf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fi,charCode:function(e){return e.type==="keypress"?Jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ff=Se(Of),Df=W({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Us=Se(Df),Uf=W({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fi}),Af=Se(Uf),$f=W({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vf=Se($f),Bf=W({},El,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wf=Se(Bf),Hf=[9,13,27,32],Di=et&&"CompositionEvent"in window,Wr=null;et&&"documentMode"in document&&(Wr=document.documentMode);var Qf=et&&"TextEvent"in window&&!Wr,Ic=et&&(!Di||Wr&&8<Wr&&11>=Wr),As=" ",$s=!1;function Oc(e,t){switch(e){case"keyup":return Hf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function Jf(e,t){switch(e){case"compositionend":return Fc(t);case"keypress":return t.which!==32?null:($s=!0,As);case"textInput":return e=t.data,e===As&&$s?null:e;default:return null}}function Yf(e,t){if(Zt)return e==="compositionend"||!Di&&Oc(e,t)?(e=Rc(),Qn=Ii=dt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ic&&t.locale!=="ko"?null:t.data;default:return null}}var Kf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kf[e.type]:t==="textarea"}function Dc(e,t,r,n){hc(n),t=ol(t,"onChange"),0<t.length&&(r=new Oi("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Hr=null,ln=null;function Gf(e){Kc(e,0)}function Pl(e){var t=tr(e);if(oc(t))return e}function Xf(e,t){if(e==="change")return t}var Uc=!1;if(et){var ra;if(et){var na="oninput"in document;if(!na){var Bs=document.createElement("div");Bs.setAttribute("oninput","return;"),na=typeof Bs.oninput=="function"}ra=na}else ra=!1;Uc=ra&&(!document.documentMode||9<document.documentMode)}function Ws(){Hr&&(Hr.detachEvent("onpropertychange",Ac),ln=Hr=null)}function Ac(e){if(e.propertyName==="value"&&Pl(ln)){var t=[];Dc(t,ln,e,_i(e)),xc(Gf,t)}}function Zf(e,t,r){e==="focusin"?(Ws(),Hr=t,ln=r,Hr.attachEvent("onpropertychange",Ac)):e==="focusout"&&Ws()}function qf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(ln)}function ep(e,t){if(e==="click")return Pl(t)}function tp(e,t){if(e==="input"||e==="change")return Pl(t)}function rp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:rp;function an(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var l=r[n];if(!ka.call(t,l)||!$e(e[l],t[l]))return!1}return!0}function Hs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qs(e,t){var r=Hs(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Hs(r)}}function $c(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$c(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vc(){for(var e=window,t=tl();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=tl(e.document)}return t}function Ui(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function np(e){var t=Vc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&$c(r.ownerDocument.documentElement,r)){if(n!==null&&Ui(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,i=Math.min(n.start,l);n=n.end===void 0?i:Math.min(n.end,l),!e.extend&&i>n&&(l=n,n=i,i=l),l=Qs(r,i);var s=Qs(r,n);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lp=et&&"documentMode"in document&&11>=document.documentMode,qt=null,$a=null,Qr=null,Va=!1;function Js(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Va||qt==null||qt!==tl(n)||(n=qt,"selectionStart"in n&&Ui(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Qr&&an(Qr,n)||(Qr=n,n=ol($a,"onSelect"),0<n.length&&(t=new Oi("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=qt)))}function Rn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var er={animationend:Rn("Animation","AnimationEnd"),animationiteration:Rn("Animation","AnimationIteration"),animationstart:Rn("Animation","AnimationStart"),transitionend:Rn("Transition","TransitionEnd")},la={},Bc={};et&&(Bc=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function _l(e){if(la[e])return la[e];if(!er[e])return e;var t=er[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Bc)return la[e]=t[r];return e}var Wc=_l("animationend"),Hc=_l("animationiteration"),Qc=_l("animationstart"),Jc=_l("transitionend"),Yc=new Map,Ys="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){Yc.set(e,t),Jt(t,[e])}for(var aa=0;aa<Ys.length;aa++){var ia=Ys[aa],ap=ia.toLowerCase(),ip=ia[0].toUpperCase()+ia.slice(1);St(ap,"on"+ip)}St(Wc,"onAnimationEnd");St(Hc,"onAnimationIteration");St(Qc,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(Jc,"onTransitionEnd");hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sp=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function Ks(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,lf(n,t,void 0,e),e.currentTarget=null}function Kc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==i&&l.isPropagationStopped())break e;Ks(l,o,d),i=c}else for(s=0;s<n.length;s++){if(o=n[s],c=o.instance,d=o.currentTarget,o=o.listener,c!==i&&l.isPropagationStopped())break e;Ks(l,o,d),i=c}}}if(nl)throw e=Fa,nl=!1,Fa=null,e}function D(e,t){var r=t[Ja];r===void 0&&(r=t[Ja]=new Set);var n=e+"__bubble";r.has(n)||(Gc(t,e,2,!1),r.add(n))}function sa(e,t,r){var n=0;t&&(n|=4),Gc(r,e,n,t)}var In="_reactListening"+Math.random().toString(36).slice(2);function sn(e){if(!e[In]){e[In]=!0,nc.forEach(function(r){r!=="selectionchange"&&(sp.has(r)||sa(r,!1,e),sa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[In]||(t[In]=!0,sa("selectionchange",!1,t))}}function Gc(e,t,r,n){switch(Mc(t)){case 1:var l=jf;break;case 4:l=kf;break;default:l=Ri}r=l.bind(null,t,r,e),l=void 0,!Oa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function oa(e,t,r,n,l){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;s=s.return}for(;o!==null;){if(s=Ft(o),s===null)return;if(c=s.tag,c===5||c===6){n=i=s;continue e}o=o.parentNode}}n=n.return}xc(function(){var d=i,h=_i(r),m=[];e:{var g=Yc.get(e);if(g!==void 0){var y=Oi,x=e;switch(e){case"keypress":if(Jn(r)===0)break e;case"keydown":case"keyup":y=Ff;break;case"focusin":x="focus",y=ta;break;case"focusout":x="blur",y=ta;break;case"beforeblur":case"afterblur":y=ta;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Af;break;case Wc:case Hc:case Qc:y=Ef;break;case Jc:y=Vf;break;case"scroll":y=Nf;break;case"wheel":y=Wf;break;case"copy":case"cut":case"paste":y=_f;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Us}var v=(t&4)!==0,k=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var u=d,p;u!==null;){p=u;var j=p.stateNode;if(p.tag===5&&j!==null&&(p=j,f!==null&&(j=en(u,f),j!=null&&v.push(on(u,j,p)))),k)break;u=u.return}0<v.length&&(g=new y(g,x,null,r,h),m.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&r!==Ra&&(x=r.relatedTarget||r.fromElement)&&(Ft(x)||x[tt]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=r.relatedTarget||r.toElement,y=d,x=x?Ft(x):null,x!==null&&(k=Yt(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=d),y!==x)){if(v=Fs,j="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=Us,j="onPointerLeave",f="onPointerEnter",u="pointer"),k=y==null?g:tr(y),p=x==null?g:tr(x),g=new v(j,u+"leave",y,r,h),g.target=k,g.relatedTarget=p,j=null,Ft(h)===d&&(v=new v(f,u+"enter",x,r,h),v.target=p,v.relatedTarget=k,j=v),k=j,y&&x)t:{for(v=y,f=x,u=0,p=v;p;p=Kt(p))u++;for(p=0,j=f;j;j=Kt(j))p++;for(;0<u-p;)v=Kt(v),u--;for(;0<p-u;)f=Kt(f),p--;for(;u--;){if(v===f||f!==null&&v===f.alternate)break t;v=Kt(v),f=Kt(f)}v=null}else v=null;y!==null&&Gs(m,g,y,v,!1),x!==null&&k!==null&&Gs(m,k,x,v,!0)}}e:{if(g=d?tr(d):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var b=Xf;else if(Vs(g))if(Uc)b=tp;else{b=qf;var S=Zf}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=ep);if(b&&(b=b(e,d))){Dc(m,b,r,h);break e}S&&S(e,g,d),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&Pa(g,"number",g.value)}switch(S=d?tr(d):window,e){case"focusin":(Vs(S)||S.contentEditable==="true")&&(qt=S,$a=d,Qr=null);break;case"focusout":Qr=$a=qt=null;break;case"mousedown":Va=!0;break;case"contextmenu":case"mouseup":case"dragend":Va=!1,Js(m,r,h);break;case"selectionchange":if(lp)break;case"keydown":case"keyup":Js(m,r,h)}var E;if(Di)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Zt?Oc(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(Ic&&r.locale!=="ko"&&(Zt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Zt&&(E=Rc()):(dt=h,Ii="value"in dt?dt.value:dt.textContent,Zt=!0)),S=ol(d,P),0<S.length&&(P=new Ds(P,e,null,r,h),m.push({event:P,listeners:S}),E?P.data=E:(E=Fc(r),E!==null&&(P.data=E)))),(E=Qf?Jf(e,r):Yf(e,r))&&(d=ol(d,"onBeforeInput"),0<d.length&&(h=new Ds("onBeforeInput","beforeinput",null,r,h),m.push({event:h,listeners:d}),h.data=E))}Kc(m,t)})}function on(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ol(e,t){for(var r=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=en(e,r),i!=null&&n.unshift(on(e,i,l)),i=en(e,t),i!=null&&n.push(on(e,i,l))),e=e.return}return n}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gs(e,t,r,n,l){for(var i=t._reactName,s=[];r!==null&&r!==n;){var o=r,c=o.alternate,d=o.stateNode;if(c!==null&&c===n)break;o.tag===5&&d!==null&&(o=d,l?(c=en(r,i),c!=null&&s.unshift(on(r,c,o))):l||(c=en(r,i),c!=null&&s.push(on(r,c,o)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var op=/\r\n?/g,cp=/\u0000|\uFFFD/g;function Xs(e){return(typeof e=="string"?e:""+e).replace(op,`
`).replace(cp,"")}function On(e,t,r){if(t=Xs(t),Xs(e)!==t&&r)throw Error(N(425))}function cl(){}var Ba=null,Wa=null;function Ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qa=typeof setTimeout=="function"?setTimeout:void 0,up=typeof clearTimeout=="function"?clearTimeout:void 0,Zs=typeof Promise=="function"?Promise:void 0,dp=typeof queueMicrotask=="function"?queueMicrotask:typeof Zs<"u"?function(e){return Zs.resolve(null).then(e).catch(fp)}:Qa;function fp(e){setTimeout(function(){throw e})}function ca(e,t){var r=t,n=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(n===0){e.removeChild(l),nn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=l}while(r);nn(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),We="__reactFiber$"+Sr,cn="__reactProps$"+Sr,tt="__reactContainer$"+Sr,Ja="__reactEvents$"+Sr,pp="__reactListeners$"+Sr,mp="__reactHandles$"+Sr;function Ft(e){var t=e[We];if(t)return t;for(var r=e.parentNode;r;){if(t=r[tt]||r[We]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=qs(e);e!==null;){if(r=e[We])return r;e=qs(e)}return t}e=r,r=e.parentNode}return null}function kn(e){return e=e[We]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Ll(e){return e[cn]||null}var Ya=[],rr=-1;function Ct(e){return{current:e}}function U(e){0>rr||(e.current=Ya[rr],Ya[rr]=null,rr--)}function F(e,t){rr++,Ya[rr]=e.current,e.current=t}var bt={},ce=Ct(bt),ve=Ct(!1),Vt=bt;function gr(e,t){var r=e.type.contextTypes;if(!r)return bt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in r)l[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ye(e){return e=e.childContextTypes,e!=null}function ul(){U(ve),U(ce)}function eo(e,t,r){if(ce.current!==bt)throw Error(N(168));F(ce,t),F(ve,r)}function Xc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var l in n)if(!(l in t))throw Error(N(108,Xd(e)||"Unknown",l));return W({},r,n)}function dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,Vt=ce.current,F(ce,e),F(ve,ve.current),!0}function to(e,t,r){var n=e.stateNode;if(!n)throw Error(N(169));r?(e=Xc(e,t,Vt),n.__reactInternalMemoizedMergedChildContext=e,U(ve),U(ce),F(ce,e)):U(ve),F(ve,r)}var Ge=null,Tl=!1,ua=!1;function Zc(e){Ge===null?Ge=[e]:Ge.push(e)}function hp(e){Tl=!0,Zc(e)}function zt(){if(!ua&&Ge!==null){ua=!0;var e=0,t=O;try{var r=Ge;for(O=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ge=null,Tl=!1}catch(l){throw Ge!==null&&(Ge=Ge.slice(e+1)),Nc(Li,zt),l}finally{O=t,ua=!1}}return null}var nr=[],lr=0,fl=null,pl=0,Ce=[],ze=0,Bt=null,Xe=1,Ze="";function It(e,t){nr[lr++]=pl,nr[lr++]=fl,fl=e,pl=t}function qc(e,t,r){Ce[ze++]=Xe,Ce[ze++]=Ze,Ce[ze++]=Bt,Bt=e;var n=Xe;e=Ze;var l=32-Ue(n)-1;n&=~(1<<l),r+=1;var i=32-Ue(t)+l;if(30<i){var s=l-l%5;i=(n&(1<<s)-1).toString(32),n>>=s,l-=s,Xe=1<<32-Ue(t)+l|r<<l|n,Ze=i+e}else Xe=1<<i|r<<l|n,Ze=e}function Ai(e){e.return!==null&&(It(e,1),qc(e,1,0))}function $i(e){for(;e===fl;)fl=nr[--lr],nr[lr]=null,pl=nr[--lr],nr[lr]=null;for(;e===Bt;)Bt=Ce[--ze],Ce[ze]=null,Ze=Ce[--ze],Ce[ze]=null,Xe=Ce[--ze],Ce[ze]=null}var ke=null,je=null,$=!1,De=null;function eu(e,t){var r=Ee(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ro(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,je=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Bt!==null?{id:Xe,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ee(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ke=e,je=null,!0):!1;default:return!1}}function Ka(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ga(e){if($){var t=je;if(t){var r=t;if(!ro(e,t)){if(Ka(e))throw Error(N(418));t=vt(r.nextSibling);var n=ke;t&&ro(e,t)?eu(n,r):(e.flags=e.flags&-4097|2,$=!1,ke=e)}}else{if(Ka(e))throw Error(N(418));e.flags=e.flags&-4097|2,$=!1,ke=e}}}function no(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Fn(e){if(e!==ke)return!1;if(!$)return no(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ha(e.type,e.memoizedProps)),t&&(t=je)){if(Ka(e))throw tu(),Error(N(418));for(;t;)eu(e,t),t=vt(t.nextSibling)}if(no(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){je=vt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}je=null}}else je=ke?vt(e.stateNode.nextSibling):null;return!0}function tu(){for(var e=je;e;)e=vt(e.nextSibling)}function vr(){je=ke=null,$=!1}function Vi(e){De===null?De=[e]:De.push(e)}var gp=lt.ReactCurrentBatchConfig;function Ir(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var n=r.stateNode}if(!n)throw Error(N(147,e));var l=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var o=l.refs;s===null?delete o[i]:o[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function Dn(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lo(e){var t=e._init;return t(e._payload)}function ru(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function r(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function n(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=jt(f,u),f.index=0,f.sibling=null,f}function i(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,u,p,j){return u===null||u.tag!==6?(u=va(p,f.mode,j),u.return=f,u):(u=l(u,p),u.return=f,u)}function c(f,u,p,j){var b=p.type;return b===Xt?h(f,u,p.props.children,j,p.key):u!==null&&(u.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===it&&lo(b)===u.type)?(j=l(u,p.props),j.ref=Ir(f,u,p),j.return=f,j):(j=el(p.type,p.key,p.props,null,f.mode,j),j.ref=Ir(f,u,p),j.return=f,j)}function d(f,u,p,j){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=ya(p,f.mode,j),u.return=f,u):(u=l(u,p.children||[]),u.return=f,u)}function h(f,u,p,j,b){return u===null||u.tag!==7?(u=$t(p,f.mode,j,b),u.return=f,u):(u=l(u,p),u.return=f,u)}function m(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=va(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case zn:return p=el(u.type,u.key,u.props,null,f.mode,p),p.ref=Ir(f,null,u),p.return=f,p;case Gt:return u=ya(u,f.mode,p),u.return=f,u;case it:var j=u._init;return m(f,j(u._payload),p)}if(Ur(u)||_r(u))return u=$t(u,f.mode,p,null),u.return=f,u;Dn(f,u)}return null}function g(f,u,p,j){var b=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:o(f,u,""+p,j);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case zn:return p.key===b?c(f,u,p,j):null;case Gt:return p.key===b?d(f,u,p,j):null;case it:return b=p._init,g(f,u,b(p._payload),j)}if(Ur(p)||_r(p))return b!==null?null:h(f,u,p,j,null);Dn(f,p)}return null}function y(f,u,p,j,b){if(typeof j=="string"&&j!==""||typeof j=="number")return f=f.get(p)||null,o(u,f,""+j,b);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case zn:return f=f.get(j.key===null?p:j.key)||null,c(u,f,j,b);case Gt:return f=f.get(j.key===null?p:j.key)||null,d(u,f,j,b);case it:var S=j._init;return y(f,u,p,S(j._payload),b)}if(Ur(j)||_r(j))return f=f.get(p)||null,h(u,f,j,b,null);Dn(u,j)}return null}function x(f,u,p,j){for(var b=null,S=null,E=u,P=u=0,A=null;E!==null&&P<p.length;P++){E.index>P?(A=E,E=null):A=E.sibling;var L=g(f,E,p[P],j);if(L===null){E===null&&(E=A);break}e&&E&&L.alternate===null&&t(f,E),u=i(L,u,P),S===null?b=L:S.sibling=L,S=L,E=A}if(P===p.length)return r(f,E),$&&It(f,P),b;if(E===null){for(;P<p.length;P++)E=m(f,p[P],j),E!==null&&(u=i(E,u,P),S===null?b=E:S.sibling=E,S=E);return $&&It(f,P),b}for(E=n(f,E);P<p.length;P++)A=y(E,f,P,p[P],j),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?P:A.key),u=i(A,u,P),S===null?b=A:S.sibling=A,S=A);return e&&E.forEach(function(le){return t(f,le)}),$&&It(f,P),b}function v(f,u,p,j){var b=_r(p);if(typeof b!="function")throw Error(N(150));if(p=b.call(p),p==null)throw Error(N(151));for(var S=b=null,E=u,P=u=0,A=null,L=p.next();E!==null&&!L.done;P++,L=p.next()){E.index>P?(A=E,E=null):A=E.sibling;var le=g(f,E,L.value,j);if(le===null){E===null&&(E=A);break}e&&E&&le.alternate===null&&t(f,E),u=i(le,u,P),S===null?b=le:S.sibling=le,S=le,E=A}if(L.done)return r(f,E),$&&It(f,P),b;if(E===null){for(;!L.done;P++,L=p.next())L=m(f,L.value,j),L!==null&&(u=i(L,u,P),S===null?b=L:S.sibling=L,S=L);return $&&It(f,P),b}for(E=n(f,E);!L.done;P++,L=p.next())L=y(E,f,P,L.value,j),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?P:L.key),u=i(L,u,P),S===null?b=L:S.sibling=L,S=L);return e&&E.forEach(function(Ye){return t(f,Ye)}),$&&It(f,P),b}function k(f,u,p,j){if(typeof p=="object"&&p!==null&&p.type===Xt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case zn:e:{for(var b=p.key,S=u;S!==null;){if(S.key===b){if(b=p.type,b===Xt){if(S.tag===7){r(f,S.sibling),u=l(S,p.props.children),u.return=f,f=u;break e}}else if(S.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===it&&lo(b)===S.type){r(f,S.sibling),u=l(S,p.props),u.ref=Ir(f,S,p),u.return=f,f=u;break e}r(f,S);break}else t(f,S);S=S.sibling}p.type===Xt?(u=$t(p.props.children,f.mode,j,p.key),u.return=f,f=u):(j=el(p.type,p.key,p.props,null,f.mode,j),j.ref=Ir(f,u,p),j.return=f,f=j)}return s(f);case Gt:e:{for(S=p.key;u!==null;){if(u.key===S)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){r(f,u.sibling),u=l(u,p.children||[]),u.return=f,f=u;break e}else{r(f,u);break}else t(f,u);u=u.sibling}u=ya(p,f.mode,j),u.return=f,f=u}return s(f);case it:return S=p._init,k(f,u,S(p._payload),j)}if(Ur(p))return x(f,u,p,j);if(_r(p))return v(f,u,p,j);Dn(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(r(f,u.sibling),u=l(u,p),u.return=f,f=u):(r(f,u),u=va(p,f.mode,j),u.return=f,f=u),s(f)):r(f,u)}return k}var yr=ru(!0),nu=ru(!1),ml=Ct(null),hl=null,ar=null,Bi=null;function Wi(){Bi=ar=hl=null}function Hi(e){var t=ml.current;U(ml),e._currentValue=t}function Xa(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function pr(e,t){hl=e,Bi=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(Bi!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(hl===null)throw Error(N(308));ar=e,hl.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var Dt=null;function Qi(e){Dt===null?Dt=[e]:Dt.push(e)}function lu(e,t,r,n){var l=t.interleaved;return l===null?(r.next=r,Qi(t)):(r.next=l.next,l.next=r),t.interleaved=r,rt(e,n)}function rt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var st=!1;function Ji(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function au(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,I&2){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,rt(e,r)}return l=n.interleaved,l===null?(t.next=t,Qi(n)):(t.next=l.next,l.next=t),n.interleaved=t,rt(e,r)}function Yn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ti(e,r)}}function ao(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var l=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?l=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?l=i=t:i=i.next=t}else l=i=t;r={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function gl(e,t,r,n){var l=e.updateQueue;st=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var c=o,d=c.next;c.next=null,s===null?i=d:s.next=d,s=c;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=d:o.next=d,h.lastBaseUpdate=c))}if(i!==null){var m=l.baseState;s=0,h=d=c=null,o=i;do{var g=o.lane,y=o.eventTime;if((n&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,v=o;switch(g=t,y=r,v.tag){case 1:if(x=v.payload,typeof x=="function"){m=x.call(y,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(y,m,g):x,g==null)break e;m=W({},m,g);break e;case 2:st=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[o]:g.push(o))}else y={eventTime:y,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(d=h=y,c=m):h=h.next=y,s|=g;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;g=o,o=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(h===null&&(c=m),l.baseState=c,l.firstBaseUpdate=d,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Ht|=s,e.lanes=s,e.memoizedState=m}}function io(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],l=n.callback;if(l!==null){if(n.callback=null,n=r,typeof l!="function")throw Error(N(191,l));l.call(n)}}}var Nn={},Qe=Ct(Nn),un=Ct(Nn),dn=Ct(Nn);function Ut(e){if(e===Nn)throw Error(N(174));return e}function Yi(e,t){switch(F(dn,t),F(un,e),F(Qe,Nn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:La(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=La(t,e)}U(Qe),F(Qe,t)}function xr(){U(Qe),U(un),U(dn)}function iu(e){Ut(dn.current);var t=Ut(Qe.current),r=La(t,e.type);t!==r&&(F(un,e),F(Qe,r))}function Ki(e){un.current===e&&(U(Qe),U(un))}var V=Ct(0);function vl(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var da=[];function Gi(){for(var e=0;e<da.length;e++)da[e]._workInProgressVersionPrimary=null;da.length=0}var Kn=lt.ReactCurrentDispatcher,fa=lt.ReactCurrentBatchConfig,Wt=0,B=null,G=null,q=null,yl=!1,Jr=!1,fn=0,vp=0;function ae(){throw Error(N(321))}function Xi(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!$e(e[r],t[r]))return!1;return!0}function Zi(e,t,r,n,l,i){if(Wt=i,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Kn.current=e===null||e.memoizedState===null?jp:kp,e=r(n,l),Jr){i=0;do{if(Jr=!1,fn=0,25<=i)throw Error(N(301));i+=1,q=G=null,t.updateQueue=null,Kn.current=Np,e=r(n,l)}while(Jr)}if(Kn.current=xl,t=G!==null&&G.next!==null,Wt=0,q=G=B=null,yl=!1,t)throw Error(N(300));return e}function qi(){var e=fn!==0;return fn=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?B.memoizedState=q=e:q=q.next=e,q}function Te(){if(G===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=q===null?B.memoizedState:q.next;if(t!==null)q=t,G=e;else{if(e===null)throw Error(N(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},q===null?B.memoizedState=q=e:q=q.next=e}return q}function pn(e,t){return typeof t=="function"?t(e):t}function pa(e){var t=Te(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=G,l=n.baseQueue,i=r.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}n.baseQueue=l=i,r.pending=null}if(l!==null){i=l.next,n=n.baseState;var o=s=null,c=null,d=i;do{var h=d.lane;if((Wt&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var m={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=m,s=n):c=c.next=m,B.lanes|=h,Ht|=h}d=d.next}while(d!==null&&d!==i);c===null?s=n:c.next=o,$e(n,t.memoizedState)||(he=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){l=e;do i=l.lane,B.lanes|=i,Ht|=i,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ma(e){var t=Te(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=r.dispatch,l=r.pending,i=t.memoizedState;if(l!==null){r.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);$e(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function su(){}function ou(e,t){var r=B,n=Te(),l=t(),i=!$e(n.memoizedState,l);if(i&&(n.memoizedState=l,he=!0),n=n.queue,es(du.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||q!==null&&q.memoizedState.tag&1){if(r.flags|=2048,mn(9,uu.bind(null,r,n,l,t),void 0,null),ee===null)throw Error(N(349));Wt&30||cu(r,t,l)}return l}function cu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function uu(e,t,r,n){t.value=r,t.getSnapshot=n,fu(t)&&pu(e)}function du(e,t,r){return r(function(){fu(t)&&pu(e)})}function fu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!$e(e,r)}catch{return!0}}function pu(e){var t=rt(e,1);t!==null&&Ae(t,e,1,-1)}function so(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:e},t.queue=e,e=e.dispatch=wp.bind(null,B,e),[t.memoizedState,e]}function mn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function mu(){return Te().memoizedState}function Gn(e,t,r,n){var l=Be();B.flags|=e,l.memoizedState=mn(1|t,r,void 0,n===void 0?null:n)}function Ml(e,t,r,n){var l=Te();n=n===void 0?null:n;var i=void 0;if(G!==null){var s=G.memoizedState;if(i=s.destroy,n!==null&&Xi(n,s.deps)){l.memoizedState=mn(t,r,i,n);return}}B.flags|=e,l.memoizedState=mn(1|t,r,i,n)}function oo(e,t){return Gn(8390656,8,e,t)}function es(e,t){return Ml(2048,8,e,t)}function hu(e,t){return Ml(4,2,e,t)}function gu(e,t){return Ml(4,4,e,t)}function vu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yu(e,t,r){return r=r!=null?r.concat([e]):null,Ml(4,4,vu.bind(null,t,e),r)}function ts(){}function xu(e,t){var r=Te();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Xi(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function wu(e,t){var r=Te();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Xi(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function ju(e,t,r){return Wt&21?($e(r,t)||(r=Cc(),B.lanes|=r,Ht|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=r)}function yp(e,t){var r=O;O=r!==0&&4>r?r:4,e(!0);var n=fa.transition;fa.transition={};try{e(!1),t()}finally{O=r,fa.transition=n}}function ku(){return Te().memoizedState}function xp(e,t,r){var n=wt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Nu(e))bu(t,r);else if(r=lu(e,t,r,n),r!==null){var l=de();Ae(r,e,n,l),Su(r,t,n)}}function wp(e,t,r){var n=wt(e),l={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Nu(e))bu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,o=i(s,r);if(l.hasEagerState=!0,l.eagerState=o,$e(o,s)){var c=t.interleaved;c===null?(l.next=l,Qi(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}r=lu(e,t,l,n),r!==null&&(l=de(),Ae(r,e,n,l),Su(r,t,n))}}function Nu(e){var t=e.alternate;return e===B||t!==null&&t===B}function bu(e,t){Jr=yl=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Su(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ti(e,r)}}var xl={readContext:Le,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},jp={readContext:Le,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:oo,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Gn(4194308,4,vu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Gn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gn(4,2,e,t)},useMemo:function(e,t){var r=Be();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Be();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=xp.bind(null,B,e),[n.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:so,useDebugValue:ts,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=so(!1),t=e[0];return e=yp.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=B,l=Be();if($){if(r===void 0)throw Error(N(407));r=r()}else{if(r=t(),ee===null)throw Error(N(349));Wt&30||cu(n,t,r)}l.memoizedState=r;var i={value:r,getSnapshot:t};return l.queue=i,oo(du.bind(null,n,i,e),[e]),n.flags|=2048,mn(9,uu.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Be(),t=ee.identifierPrefix;if($){var r=Ze,n=Xe;r=(n&~(1<<32-Ue(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=fn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=vp++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kp={readContext:Le,useCallback:xu,useContext:Le,useEffect:es,useImperativeHandle:yu,useInsertionEffect:hu,useLayoutEffect:gu,useMemo:wu,useReducer:pa,useRef:mu,useState:function(){return pa(pn)},useDebugValue:ts,useDeferredValue:function(e){var t=Te();return ju(t,G.memoizedState,e)},useTransition:function(){var e=pa(pn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:su,useSyncExternalStore:ou,useId:ku,unstable_isNewReconciler:!1},Np={readContext:Le,useCallback:xu,useContext:Le,useEffect:es,useImperativeHandle:yu,useInsertionEffect:hu,useLayoutEffect:gu,useMemo:wu,useReducer:ma,useRef:mu,useState:function(){return ma(pn)},useDebugValue:ts,useDeferredValue:function(e){var t=Te();return G===null?t.memoizedState=e:ju(t,G.memoizedState,e)},useTransition:function(){var e=ma(pn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:su,useSyncExternalStore:ou,useId:ku,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Za(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:W({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Rl={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=de(),l=wt(e),i=qe(n,l);i.payload=t,r!=null&&(i.callback=r),t=yt(e,i,l),t!==null&&(Ae(t,e,l,n),Yn(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=de(),l=wt(e),i=qe(n,l);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=yt(e,i,l),t!==null&&(Ae(t,e,l,n),Yn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=de(),n=wt(e),l=qe(r,n);l.tag=2,t!=null&&(l.callback=t),t=yt(e,l,n),t!==null&&(Ae(t,e,n,r),Yn(t,e,n))}};function co(e,t,r,n,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!an(r,n)||!an(l,i):!0}function Cu(e,t,r){var n=!1,l=bt,i=t.contextType;return typeof i=="object"&&i!==null?i=Le(i):(l=ye(t)?Vt:ce.current,n=t.contextTypes,i=(n=n!=null)?gr(e,l):bt),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rl,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function uo(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Rl.enqueueReplaceState(t,t.state,null)}function qa(e,t,r,n){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},Ji(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Le(i):(i=ye(t)?Vt:ce.current,l.context=gr(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Za(e,t,i,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Rl.enqueueReplaceState(l,l.state,null),gl(e,r,l,n),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function wr(e,t){try{var r="",n=t;do r+=Gd(n),n=n.return;while(n);var l=r}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ha(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ei(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var bp=typeof WeakMap=="function"?WeakMap:Map;function zu(e,t,r){r=qe(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){jl||(jl=!0,ui=n),ei(e,t)},r}function Eu(e,t,r){r=qe(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=t.value;r.payload=function(){return n(l)},r.callback=function(){ei(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){ei(e,t),typeof n!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function fo(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new bp;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(r)||(l.add(r),e=Dp.bind(null,e,t,r),t.then(e,e))}function po(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mo(e,t,r,n,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=qe(-1,1),t.tag=2,yt(r,t,1))),r.lanes|=1),e)}var Sp=lt.ReactCurrentOwner,he=!1;function ue(e,t,r,n){t.child=e===null?nu(t,null,r,n):yr(t,e.child,r,n)}function ho(e,t,r,n,l){r=r.render;var i=t.ref;return pr(t,l),n=Zi(e,t,r,n,i,l),r=qi(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,nt(e,t,l)):($&&r&&Ai(t),t.flags|=1,ue(e,t,n,l),t.child)}function go(e,t,r,n,l){if(e===null){var i=r.type;return typeof i=="function"&&!cs(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Pu(e,t,i,n,l)):(e=el(r.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:an,r(s,n)&&e.ref===t.ref)return nt(e,t,l)}return t.flags|=1,e=jt(i,n),e.ref=t.ref,e.return=t,t.child=e}function Pu(e,t,r,n,l){if(e!==null){var i=e.memoizedProps;if(an(i,n)&&e.ref===t.ref)if(he=!1,t.pendingProps=n=i,(e.lanes&l)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,nt(e,t,l)}return ti(e,t,r,n,l)}function _u(e,t,r){var n=t.pendingProps,l=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(sr,we),we|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(sr,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,F(sr,we),we|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,F(sr,we),we|=n;return ue(e,t,l,r),t.child}function Lu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ti(e,t,r,n,l){var i=ye(r)?Vt:ce.current;return i=gr(t,i),pr(t,l),r=Zi(e,t,r,n,i,l),n=qi(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,nt(e,t,l)):($&&n&&Ai(t),t.flags|=1,ue(e,t,r,l),t.child)}function vo(e,t,r,n,l){if(ye(r)){var i=!0;dl(t)}else i=!1;if(pr(t,l),t.stateNode===null)Xn(e,t),Cu(t,r,n),qa(t,r,n,l),n=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var c=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=Le(d):(d=ye(r)?Vt:ce.current,d=gr(t,d));var h=r.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==n||c!==d)&&uo(t,s,n,d),st=!1;var g=t.memoizedState;s.state=g,gl(t,n,s,l),c=t.memoizedState,o!==n||g!==c||ve.current||st?(typeof h=="function"&&(Za(t,r,h,n),c=t.memoizedState),(o=st||co(t,r,o,n,g,c,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),s.props=n,s.state=c,s.context=d,n=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,au(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:Oe(t.type,o),s.props=d,m=t.pendingProps,g=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=Le(c):(c=ye(r)?Vt:ce.current,c=gr(t,c));var y=r.getDerivedStateFromProps;(h=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==m||g!==c)&&uo(t,s,n,c),st=!1,g=t.memoizedState,s.state=g,gl(t,n,s,l);var x=t.memoizedState;o!==m||g!==x||ve.current||st?(typeof y=="function"&&(Za(t,r,y,n),x=t.memoizedState),(d=st||co(t,r,d,n,g,x,c)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,x,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,x,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),s.props=n,s.state=x,s.context=c,n=d):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return ri(e,t,r,n,i,l)}function ri(e,t,r,n,l,i){Lu(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return l&&to(t,r,!1),nt(e,t,i);n=t.stateNode,Sp.current=t;var o=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=yr(t,e.child,null,i),t.child=yr(t,null,o,i)):ue(e,t,o,i),t.memoizedState=n.state,l&&to(t,r,!0),t.child}function Tu(e){var t=e.stateNode;t.pendingContext?eo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&eo(e,t.context,!1),Yi(e,t.containerInfo)}function yo(e,t,r,n,l){return vr(),Vi(l),t.flags|=256,ue(e,t,r,n),t.child}var ni={dehydrated:null,treeContext:null,retryLane:0};function li(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mu(e,t,r){var n=t.pendingProps,l=V.current,i=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F(V,l&1),e===null)return Ga(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Fl(s,n,0,null),e=$t(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=li(r),t.memoizedState=ni,e):rs(t,s));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return Cp(e,t,s,n,o,l,r);if(i){i=n.fallback,s=t.mode,l=e.child,o=l.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&t.child!==l?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=jt(l,c),n.subtreeFlags=l.subtreeFlags&14680064),o!==null?i=jt(o,i):(i=$t(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?li(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=ni,n}return i=e.child,e=i.sibling,n=jt(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function rs(e,t){return t=Fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Un(e,t,r,n){return n!==null&&Vi(n),yr(t,e.child,null,r),e=rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cp(e,t,r,n,l,i,s){if(r)return t.flags&256?(t.flags&=-257,n=ha(Error(N(422))),Un(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,l=t.mode,n=Fl({mode:"visible",children:n.children},l,0,null),i=$t(i,l,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&yr(t,e.child,null,s),t.child.memoizedState=li(s),t.memoizedState=ni,i);if(!(t.mode&1))return Un(e,t,s,null);if(l.data==="$!"){if(n=l.nextSibling&&l.nextSibling.dataset,n)var o=n.dgst;return n=o,i=Error(N(419)),n=ha(i,n,void 0),Un(e,t,s,n)}if(o=(s&e.childLanes)!==0,he||o){if(n=ee,n!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(n.suspendedLanes|s)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,rt(e,l),Ae(n,e,l,-1))}return os(),n=ha(Error(N(421))),Un(e,t,s,n)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Up.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,je=vt(l.nextSibling),ke=t,$=!0,De=null,e!==null&&(Ce[ze++]=Xe,Ce[ze++]=Ze,Ce[ze++]=Bt,Xe=e.id,Ze=e.overflow,Bt=t),t=rs(t,n.children),t.flags|=4096,t)}function xo(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Xa(e.return,t,r)}function ga(e,t,r,n,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=l)}function Ru(e,t,r){var n=t.pendingProps,l=n.revealOrder,i=n.tail;if(ue(e,t,n.children,r),n=V.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xo(e,r,t);else if(e.tag===19)xo(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(F(V,n),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&vl(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),ga(t,!1,l,r,i);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&vl(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}ga(t,!0,r,null,i);break;case"together":ga(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Ht|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,r=jt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=jt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function zp(e,t,r){switch(t.tag){case 3:Tu(t),vr();break;case 5:iu(t);break;case 1:ye(t.type)&&dl(t);break;case 4:Yi(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,l=t.memoizedProps.value;F(ml,n._currentValue),n._currentValue=l;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(F(V,V.current&1),t.flags|=128,null):r&t.child.childLanes?Mu(e,t,r):(F(V,V.current&1),e=nt(e,t,r),e!==null?e.sibling:null);F(V,V.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Ru(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(V,V.current),n)break;return null;case 22:case 23:return t.lanes=0,_u(e,t,r)}return nt(e,t,r)}var Iu,ai,Ou,Fu;Iu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ai=function(){};Ou=function(e,t,r,n){var l=e.memoizedProps;if(l!==n){e=t.stateNode,Ut(Qe.current);var i=null;switch(r){case"input":l=za(e,l),n=za(e,n),i=[];break;case"select":l=W({},l,{value:void 0}),n=W({},n,{value:void 0}),i=[];break;case"textarea":l=_a(e,l),n=_a(e,n),i=[];break;default:typeof l.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=cl)}Ta(r,n);var s;r=null;for(d in l)if(!n.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var o=l[d];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Zr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in n){var c=n[d];if(o=l!=null?l[d]:void 0,n.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(s in o)!o.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&o[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(i||(i=[]),i.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&D("scroll",e),i||o===c||(i=[])):(i=i||[]).push(d,c))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Fu=function(e,t,r,n){r!==n&&(t.flags|=4)};function Or(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags&14680064,n|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Ep(e,t,r){var n=t.pendingProps;switch($i(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ye(t.type)&&ul(),ie(t),null;case 3:return n=t.stateNode,xr(),U(ve),U(ce),Gi(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(pi(De),De=null))),ai(e,t),ie(t),null;case 5:Ki(t);var l=Ut(dn.current);if(r=t.type,e!==null&&t.stateNode!=null)Ou(e,t,r,n,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(N(166));return ie(t),null}if(e=Ut(Qe.current),Fn(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[We]=t,n[cn]=i,e=(t.mode&1)!==0,r){case"dialog":D("cancel",n),D("close",n);break;case"iframe":case"object":case"embed":D("load",n);break;case"video":case"audio":for(l=0;l<$r.length;l++)D($r[l],n);break;case"source":D("error",n);break;case"img":case"image":case"link":D("error",n),D("load",n);break;case"details":D("toggle",n);break;case"input":zs(n,i),D("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},D("invalid",n);break;case"textarea":Ps(n,i),D("invalid",n)}Ta(r,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var o=i[s];s==="children"?typeof o=="string"?n.textContent!==o&&(i.suppressHydrationWarning!==!0&&On(n.textContent,o,e),l=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&On(n.textContent,o,e),l=["children",""+o]):Zr.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&D("scroll",n)}switch(r){case"input":En(n),Es(n,i,!0);break;case"textarea":En(n),_s(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=cl)}n=l,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[We]=t,e[cn]=n,Iu(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ma(r,n),r){case"dialog":D("cancel",e),D("close",e),l=n;break;case"iframe":case"object":case"embed":D("load",e),l=n;break;case"video":case"audio":for(l=0;l<$r.length;l++)D($r[l],e);l=n;break;case"source":D("error",e),l=n;break;case"img":case"image":case"link":D("error",e),D("load",e),l=n;break;case"details":D("toggle",e),l=n;break;case"input":zs(e,n),l=za(e,n),D("invalid",e);break;case"option":l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=W({},n,{value:void 0}),D("invalid",e);break;case"textarea":Ps(e,n),l=_a(e,n),D("invalid",e);break;default:l=n}Ta(r,l),o=l;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?mc(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&fc(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&qr(e,c):typeof c=="number"&&qr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Zr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&D("scroll",e):c!=null&&Ci(e,i,c,s))}switch(r){case"input":En(e),Es(e,n,!1);break;case"textarea":En(e),_s(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Nt(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?cr(e,!!n.multiple,i,!1):n.defaultValue!=null&&cr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=cl)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Fu(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(N(166));if(r=Ut(dn.current),Ut(Qe.current),Fn(t)){if(n=t.stateNode,r=t.memoizedProps,n[We]=t,(i=n.nodeValue!==r)&&(e=ke,e!==null))switch(e.tag){case 3:On(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&On(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[We]=t,t.stateNode=n}return ie(t),null;case 13:if(U(V),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&je!==null&&t.mode&1&&!(t.flags&128))tu(),vr(),t.flags|=98560,i=!1;else if(i=Fn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[We]=t}else vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else De!==null&&(pi(De),De=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):os())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return xr(),ai(e,t),e===null&&sn(t.stateNode.containerInfo),ie(t),null;case 10:return Hi(t.type._context),ie(t),null;case 17:return ye(t.type)&&ul(),ie(t),null;case 19:if(U(V),i=t.memoizedState,i===null)return ie(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)Or(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=vl(e),s!==null){for(t.flags|=128,Or(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return F(V,V.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>jr&&(t.flags|=128,n=!0,Or(i,!1),t.lanes=4194304)}else{if(!n)if(e=vl(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Or(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!$)return ie(t),null}else 2*J()-i.renderingStartTime>jr&&r!==1073741824&&(t.flags|=128,n=!0,Or(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,r=V.current,F(V,n?r&1|2:r&1),t):(ie(t),null);case 22:case 23:return ss(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?we&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Pp(e,t){switch($i(t),t.tag){case 1:return ye(t.type)&&ul(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xr(),U(ve),U(ce),Gi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ki(t),null;case 13:if(U(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(V),null;case 4:return xr(),null;case 10:return Hi(t.type._context),null;case 22:case 23:return ss(),null;case 24:return null;default:return null}}var An=!1,oe=!1,_p=typeof WeakSet=="function"?WeakSet:Set,C=null;function ir(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){H(e,t,n)}else r.current=null}function ii(e,t,r){try{r()}catch(n){H(e,t,n)}}var wo=!1;function Lp(e,t){if(Ba=il,e=Vc(),Ui(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,o=-1,c=-1,d=0,h=0,m=e,g=null;t:for(;;){for(var y;m!==r||l!==0&&m.nodeType!==3||(o=s+l),m!==i||n!==0&&m.nodeType!==3||(c=s+n),m.nodeType===3&&(s+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===e)break t;if(g===r&&++d===l&&(o=s),g===i&&++h===n&&(c=s),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Wa={focusedElem:e,selectionRange:r},il=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,k=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Oe(t.type,v),k);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(j){H(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return x=wo,wo=!1,x}function Yr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ii(t,r,i)}l=l.next}while(l!==n)}}function Il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function si(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Du(e){var t=e.alternate;t!==null&&(e.alternate=null,Du(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[cn],delete t[Ja],delete t[pp],delete t[mp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uu(e){return e.tag===5||e.tag===3||e.tag===4}function jo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oi(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=cl));else if(n!==4&&(e=e.child,e!==null))for(oi(e,t,r),e=e.sibling;e!==null;)oi(e,t,r),e=e.sibling}function ci(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ci(e,t,r),e=e.sibling;e!==null;)ci(e,t,r),e=e.sibling}var te=null,Fe=!1;function at(e,t,r){for(r=r.child;r!==null;)Au(e,t,r),r=r.sibling}function Au(e,t,r){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(zl,r)}catch{}switch(r.tag){case 5:oe||ir(r,t);case 6:var n=te,l=Fe;te=null,at(e,t,r),te=n,Fe=l,te!==null&&(Fe?(e=te,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):te.removeChild(r.stateNode));break;case 18:te!==null&&(Fe?(e=te,r=r.stateNode,e.nodeType===8?ca(e.parentNode,r):e.nodeType===1&&ca(e,r),nn(e)):ca(te,r.stateNode));break;case 4:n=te,l=Fe,te=r.stateNode.containerInfo,Fe=!0,at(e,t,r),te=n,Fe=l;break;case 0:case 11:case 14:case 15:if(!oe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){l=n=n.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&ii(r,t,s),l=l.next}while(l!==n)}at(e,t,r);break;case 1:if(!oe&&(ir(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){H(r,t,o)}at(e,t,r);break;case 21:at(e,t,r);break;case 22:r.mode&1?(oe=(n=oe)||r.memoizedState!==null,at(e,t,r),oe=n):at(e,t,r);break;default:at(e,t,r)}}function ko(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new _p),t.forEach(function(n){var l=Ap.bind(null,e,n);r.has(n)||(r.add(n),n.then(l,l))})}}function Re(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var l=r[n];try{var i=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:te=o.stateNode,Fe=!1;break e;case 3:te=o.stateNode.containerInfo,Fe=!0;break e;case 4:te=o.stateNode.containerInfo,Fe=!0;break e}o=o.return}if(te===null)throw Error(N(160));Au(i,s,l),te=null,Fe=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(d){H(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$u(t,e),t=t.sibling}function $u(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Ve(e),n&4){try{Yr(3,e,e.return),Il(3,e)}catch(v){H(e,e.return,v)}try{Yr(5,e,e.return)}catch(v){H(e,e.return,v)}}break;case 1:Re(t,e),Ve(e),n&512&&r!==null&&ir(r,r.return);break;case 5:if(Re(t,e),Ve(e),n&512&&r!==null&&ir(r,r.return),e.flags&32){var l=e.stateNode;try{qr(l,"")}catch(v){H(e,e.return,v)}}if(n&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&cc(l,i),Ma(o,s);var d=Ma(o,i);for(s=0;s<c.length;s+=2){var h=c[s],m=c[s+1];h==="style"?mc(l,m):h==="dangerouslySetInnerHTML"?fc(l,m):h==="children"?qr(l,m):Ci(l,h,m,d)}switch(o){case"input":Ea(l,i);break;case"textarea":uc(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?cr(l,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?cr(l,!!i.multiple,i.defaultValue,!0):cr(l,!!i.multiple,i.multiple?[]:"",!1))}l[cn]=i}catch(v){H(e,e.return,v)}}break;case 6:if(Re(t,e),Ve(e),n&4){if(e.stateNode===null)throw Error(N(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(v){H(e,e.return,v)}}break;case 3:if(Re(t,e),Ve(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{nn(t.containerInfo)}catch(v){H(e,e.return,v)}break;case 4:Re(t,e),Ve(e);break;case 13:Re(t,e),Ve(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(as=J())),n&4&&ko(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(oe=(d=oe)||h,Re(t,e),oe=d):Re(t,e),Ve(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(m=C=h;C!==null;){switch(g=C,y=g.child,g.tag){case 0:case 11:case 14:case 15:Yr(4,g,g.return);break;case 1:ir(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){H(n,r,v)}}break;case 5:ir(g,g.return);break;case 22:if(g.memoizedState!==null){bo(m);continue}}y!==null?(y.return=g,C=y):bo(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=m.stateNode,c=m.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=pc("display",s))}catch(v){H(e,e.return,v)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(v){H(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Re(t,e),Ve(e),n&4&&ko(e);break;case 21:break;default:Re(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Uu(r)){var n=r;break e}r=r.return}throw Error(N(160))}switch(n.tag){case 5:var l=n.stateNode;n.flags&32&&(qr(l,""),n.flags&=-33);var i=jo(e);ci(e,i,l);break;case 3:case 4:var s=n.stateNode.containerInfo,o=jo(e);oi(e,o,s);break;default:throw Error(N(161))}}catch(c){H(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tp(e,t,r){C=e,Vu(e)}function Vu(e,t,r){for(var n=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&n){var s=l.memoizedState!==null||An;if(!s){var o=l.alternate,c=o!==null&&o.memoizedState!==null||oe;o=An;var d=oe;if(An=s,(oe=c)&&!d)for(C=l;C!==null;)s=C,c=s.child,s.tag===22&&s.memoizedState!==null?So(l):c!==null?(c.return=s,C=c):So(l);for(;i!==null;)C=i,Vu(i),i=i.sibling;C=l,An=o,oe=d}No(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):No(e)}}function No(e){for(;C!==null;){var t=C;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Il(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!oe)if(r===null)n.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Oe(t.type,r.memoizedProps);n.componentDidUpdate(l,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&io(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}io(t,s,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&nn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}oe||t.flags&512&&si(t)}catch(g){H(t,t.return,g)}}if(t===e){C=null;break}if(r=t.sibling,r!==null){r.return=t.return,C=r;break}C=t.return}}function bo(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var r=t.sibling;if(r!==null){r.return=t.return,C=r;break}C=t.return}}function So(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Il(4,t)}catch(c){H(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var l=t.return;try{n.componentDidMount()}catch(c){H(t,l,c)}}var i=t.return;try{si(t)}catch(c){H(t,i,c)}break;case 5:var s=t.return;try{si(t)}catch(c){H(t,s,c)}}}catch(c){H(t,t.return,c)}if(t===e){C=null;break}var o=t.sibling;if(o!==null){o.return=t.return,C=o;break}C=t.return}}var Mp=Math.ceil,wl=lt.ReactCurrentDispatcher,ns=lt.ReactCurrentOwner,Pe=lt.ReactCurrentBatchConfig,I=0,ee=null,K=null,re=0,we=0,sr=Ct(0),X=0,hn=null,Ht=0,Ol=0,ls=0,Kr=null,me=null,as=0,jr=1/0,Ke=null,jl=!1,ui=null,xt=null,$n=!1,ft=null,kl=0,Gr=0,di=null,Zn=-1,qn=0;function de(){return I&6?J():Zn!==-1?Zn:Zn=J()}function wt(e){return e.mode&1?I&2&&re!==0?re&-re:gp.transition!==null?(qn===0&&(qn=Cc()),qn):(e=O,e!==0||(e=window.event,e=e===void 0?16:Mc(e.type)),e):1}function Ae(e,t,r,n){if(50<Gr)throw Gr=0,di=null,Error(N(185));wn(e,r,n),(!(I&2)||e!==ee)&&(e===ee&&(!(I&2)&&(Ol|=r),X===4&&ct(e,re)),xe(e,n),r===1&&I===0&&!(t.mode&1)&&(jr=J()+500,Tl&&zt()))}function xe(e,t){var r=e.callbackNode;gf(e,t);var n=al(e,e===ee?re:0);if(n===0)r!==null&&Ms(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ms(r),t===1)e.tag===0?hp(Co.bind(null,e)):Zc(Co.bind(null,e)),dp(function(){!(I&6)&&zt()}),r=null;else{switch(zc(n)){case 1:r=Li;break;case 4:r=bc;break;case 16:r=ll;break;case 536870912:r=Sc;break;default:r=ll}r=Gu(r,Bu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Bu(e,t){if(Zn=-1,qn=0,I&6)throw Error(N(327));var r=e.callbackNode;if(mr()&&e.callbackNode!==r)return null;var n=al(e,e===ee?re:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Nl(e,n);else{t=n;var l=I;I|=2;var i=Hu();(ee!==e||re!==t)&&(Ke=null,jr=J()+500,At(e,t));do try{Op();break}catch(o){Wu(e,o)}while(!0);Wi(),wl.current=i,I=l,K!==null?t=0:(ee=null,re=0,t=X)}if(t!==0){if(t===2&&(l=Da(e),l!==0&&(n=l,t=fi(e,l))),t===1)throw r=hn,At(e,0),ct(e,n),xe(e,J()),r;if(t===6)ct(e,n);else{if(l=e.current.alternate,!(n&30)&&!Rp(l)&&(t=Nl(e,n),t===2&&(i=Da(e),i!==0&&(n=i,t=fi(e,i))),t===1))throw r=hn,At(e,0),ct(e,n),xe(e,J()),r;switch(e.finishedWork=l,e.finishedLanes=n,t){case 0:case 1:throw Error(N(345));case 2:Ot(e,me,Ke);break;case 3:if(ct(e,n),(n&130023424)===n&&(t=as+500-J(),10<t)){if(al(e,0)!==0)break;if(l=e.suspendedLanes,(l&n)!==n){de(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Qa(Ot.bind(null,e,me,Ke),t);break}Ot(e,me,Ke);break;case 4:if(ct(e,n),(n&4194240)===n)break;for(t=e.eventTimes,l=-1;0<n;){var s=31-Ue(n);i=1<<s,s=t[s],s>l&&(l=s),n&=~i}if(n=l,n=J()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Mp(n/1960))-n,10<n){e.timeoutHandle=Qa(Ot.bind(null,e,me,Ke),n);break}Ot(e,me,Ke);break;case 5:Ot(e,me,Ke);break;default:throw Error(N(329))}}}return xe(e,J()),e.callbackNode===r?Bu.bind(null,e):null}function fi(e,t){var r=Kr;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=Nl(e,t),e!==2&&(t=me,me=r,t!==null&&pi(t)),e}function pi(e){me===null?me=e:me.push.apply(me,e)}function Rp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var l=r[n],i=l.getSnapshot;l=l.value;try{if(!$e(i(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~ls,t&=~Ol,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ue(t),n=1<<r;e[r]=-1,t&=~n}}function Co(e){if(I&6)throw Error(N(327));mr();var t=al(e,0);if(!(t&1))return xe(e,J()),null;var r=Nl(e,t);if(e.tag!==0&&r===2){var n=Da(e);n!==0&&(t=n,r=fi(e,n))}if(r===1)throw r=hn,At(e,0),ct(e,t),xe(e,J()),r;if(r===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ot(e,me,Ke),xe(e,J()),null}function is(e,t){var r=I;I|=1;try{return e(t)}finally{I=r,I===0&&(jr=J()+500,Tl&&zt())}}function Qt(e){ft!==null&&ft.tag===0&&!(I&6)&&mr();var t=I;I|=1;var r=Pe.transition,n=O;try{if(Pe.transition=null,O=1,e)return e()}finally{O=n,Pe.transition=r,I=t,!(I&6)&&zt()}}function ss(){we=sr.current,U(sr)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,up(r)),K!==null)for(r=K.return;r!==null;){var n=r;switch($i(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ul();break;case 3:xr(),U(ve),U(ce),Gi();break;case 5:Ki(n);break;case 4:xr();break;case 13:U(V);break;case 19:U(V);break;case 10:Hi(n.type._context);break;case 22:case 23:ss()}r=r.return}if(ee=e,K=e=jt(e.current,null),re=we=t,X=0,hn=null,ls=Ol=Ht=0,me=Kr=null,Dt!==null){for(t=0;t<Dt.length;t++)if(r=Dt[t],n=r.interleaved,n!==null){r.interleaved=null;var l=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=l,n.next=s}r.pending=n}Dt=null}return e}function Wu(e,t){do{var r=K;try{if(Wi(),Kn.current=xl,yl){for(var n=B.memoizedState;n!==null;){var l=n.queue;l!==null&&(l.pending=null),n=n.next}yl=!1}if(Wt=0,q=G=B=null,Jr=!1,fn=0,ns.current=null,r===null||r.return===null){X=1,hn=t,K=null;break}e:{var i=e,s=r.return,o=r,c=t;if(t=re,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=o,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=po(s);if(y!==null){y.flags&=-257,mo(y,s,o,i,t),y.mode&1&&fo(i,d,t),t=y,c=d;var x=t.updateQueue;if(x===null){var v=new Set;v.add(c),t.updateQueue=v}else x.add(c);break e}else{if(!(t&1)){fo(i,d,t),os();break e}c=Error(N(426))}}else if($&&o.mode&1){var k=po(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),mo(k,s,o,i,t),Vi(wr(c,o));break e}}i=c=wr(c,o),X!==4&&(X=2),Kr===null?Kr=[i]:Kr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=zu(i,c,t);ao(i,f);break e;case 1:o=c;var u=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(xt===null||!xt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var j=Eu(i,o,t);ao(i,j);break e}}i=i.return}while(i!==null)}Ju(r)}catch(b){t=b,K===r&&r!==null&&(K=r=r.return);continue}break}while(!0)}function Hu(){var e=wl.current;return wl.current=xl,e===null?xl:e}function os(){(X===0||X===3||X===2)&&(X=4),ee===null||!(Ht&268435455)&&!(Ol&268435455)||ct(ee,re)}function Nl(e,t){var r=I;I|=2;var n=Hu();(ee!==e||re!==t)&&(Ke=null,At(e,t));do try{Ip();break}catch(l){Wu(e,l)}while(!0);if(Wi(),I=r,wl.current=n,K!==null)throw Error(N(261));return ee=null,re=0,X}function Ip(){for(;K!==null;)Qu(K)}function Op(){for(;K!==null&&!sf();)Qu(K)}function Qu(e){var t=Ku(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?Ju(e):K=t,ns.current=null}function Ju(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Pp(r,t),r!==null){r.flags&=32767,K=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(r=Ep(r,t,we),r!==null){K=r;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function Ot(e,t,r){var n=O,l=Pe.transition;try{Pe.transition=null,O=1,Fp(e,t,r,n)}finally{Pe.transition=l,O=n}return null}function Fp(e,t,r,n){do mr();while(ft!==null);if(I&6)throw Error(N(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(vf(e,i),e===ee&&(K=ee=null,re=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||$n||($n=!0,Gu(ll,function(){return mr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var s=O;O=1;var o=I;I|=4,ns.current=null,Lp(e,r),$u(r,e),np(Wa),il=!!Ba,Wa=Ba=null,e.current=r,Tp(r),of(),I=o,O=s,Pe.transition=i}else e.current=r;if($n&&($n=!1,ft=e,kl=l),i=e.pendingLanes,i===0&&(xt=null),df(r.stateNode),xe(e,J()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],n(l.value,{componentStack:l.stack,digest:l.digest});if(jl)throw jl=!1,e=ui,ui=null,e;return kl&1&&e.tag!==0&&mr(),i=e.pendingLanes,i&1?e===di?Gr++:(Gr=0,di=e):Gr=0,zt(),null}function mr(){if(ft!==null){var e=zc(kl),t=Pe.transition,r=O;try{if(Pe.transition=null,O=16>e?16:e,ft===null)var n=!1;else{if(e=ft,ft=null,kl=0,I&6)throw Error(N(331));var l=I;for(I|=4,C=e.current;C!==null;){var i=C,s=i.child;if(C.flags&16){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(C=d;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:Yr(8,h,i)}var m=h.child;if(m!==null)m.return=h,C=m;else for(;C!==null;){h=C;var g=h.sibling,y=h.return;if(Du(h),h===d){C=null;break}if(g!==null){g.return=y,C=g;break}C=y}}}var x=i.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}C=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,C=s;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,C=f;break e}C=i.return}}var u=e.current;for(C=u;C!==null;){s=C;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,C=p;else e:for(s=u;C!==null;){if(o=C,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Il(9,o)}}catch(b){H(o,o.return,b)}if(o===s){C=null;break e}var j=o.sibling;if(j!==null){j.return=o.return,C=j;break e}C=o.return}}if(I=l,zt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(zl,e)}catch{}n=!0}return n}finally{O=r,Pe.transition=t}}return!1}function zo(e,t,r){t=wr(r,t),t=zu(e,t,1),e=yt(e,t,1),t=de(),e!==null&&(wn(e,1,t),xe(e,t))}function H(e,t,r){if(e.tag===3)zo(e,e,r);else for(;t!==null;){if(t.tag===3){zo(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(xt===null||!xt.has(n))){e=wr(r,e),e=Eu(t,e,1),t=yt(t,e,1),e=de(),t!==null&&(wn(t,1,e),xe(t,e));break}}t=t.return}}function Dp(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&r,ee===e&&(re&r)===r&&(X===4||X===3&&(re&130023424)===re&&500>J()-as?At(e,0):ls|=r),xe(e,t)}function Yu(e,t){t===0&&(e.mode&1?(t=Ln,Ln<<=1,!(Ln&130023424)&&(Ln=4194304)):t=1);var r=de();e=rt(e,t),e!==null&&(wn(e,t,r),xe(e,r))}function Up(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Yu(e,r)}function Ap(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(N(314))}n!==null&&n.delete(t),Yu(e,r)}var Ku;Ku=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)he=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return he=!1,zp(e,t,r);he=!!(e.flags&131072)}else he=!1,$&&t.flags&1048576&&qc(t,pl,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Xn(e,t),e=t.pendingProps;var l=gr(t,ce.current);pr(t,r),l=Zi(null,t,n,e,l,r);var i=qi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(n)?(i=!0,dl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ji(t),l.updater=Rl,t.stateNode=l,l._reactInternals=t,qa(t,n,e,r),t=ri(null,t,n,!0,i,r)):(t.tag=0,$&&i&&Ai(t),ue(null,t,l,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Xn(e,t),e=t.pendingProps,l=n._init,n=l(n._payload),t.type=n,l=t.tag=Vp(n),e=Oe(n,e),l){case 0:t=ti(null,t,n,e,r);break e;case 1:t=vo(null,t,n,e,r);break e;case 11:t=ho(null,t,n,e,r);break e;case 14:t=go(null,t,n,Oe(n.type,e),r);break e}throw Error(N(306,n,""))}return t;case 0:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Oe(n,l),ti(e,t,n,l,r);case 1:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Oe(n,l),vo(e,t,n,l,r);case 3:e:{if(Tu(t),e===null)throw Error(N(387));n=t.pendingProps,i=t.memoizedState,l=i.element,au(e,t),gl(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=wr(Error(N(423)),t),t=yo(e,t,n,r,l);break e}else if(n!==l){l=wr(Error(N(424)),t),t=yo(e,t,n,r,l);break e}else for(je=vt(t.stateNode.containerInfo.firstChild),ke=t,$=!0,De=null,r=nu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(vr(),n===l){t=nt(e,t,r);break e}ue(e,t,n,r)}t=t.child}return t;case 5:return iu(t),e===null&&Ga(t),n=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,Ha(n,l)?s=null:i!==null&&Ha(n,i)&&(t.flags|=32),Lu(e,t),ue(e,t,s,r),t.child;case 6:return e===null&&Ga(t),null;case 13:return Mu(e,t,r);case 4:return Yi(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=yr(t,null,n,r):ue(e,t,n,r),t.child;case 11:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Oe(n,l),ho(e,t,n,l,r);case 7:return ue(e,t,t.pendingProps,r),t.child;case 8:return ue(e,t,t.pendingProps.children,r),t.child;case 12:return ue(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,l=t.pendingProps,i=t.memoizedProps,s=l.value,F(ml,n._currentValue),n._currentValue=s,i!==null)if($e(i.value,s)){if(i.children===l.children&&!ve.current){t=nt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){s=i.child;for(var c=o.firstContext;c!==null;){if(c.context===n){if(i.tag===1){c=qe(-1,r&-r),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Xa(i.return,r,t),o.lanes|=r;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(N(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),Xa(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ue(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,n=t.pendingProps.children,pr(t,r),l=Le(l),n=n(l),t.flags|=1,ue(e,t,n,r),t.child;case 14:return n=t.type,l=Oe(n,t.pendingProps),l=Oe(n.type,l),go(e,t,n,l,r);case 15:return Pu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Oe(n,l),Xn(e,t),t.tag=1,ye(n)?(e=!0,dl(t)):e=!1,pr(t,r),Cu(t,n,l),qa(t,n,l,r),ri(null,t,n,!0,e,r);case 19:return Ru(e,t,r);case 22:return _u(e,t,r)}throw Error(N(156,t.tag))};function Gu(e,t){return Nc(e,t)}function $p(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,r,n){return new $p(e,t,r,n)}function cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vp(e){if(typeof e=="function")return cs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ei)return 11;if(e===Pi)return 14}return 2}function jt(e,t){var r=e.alternate;return r===null?(r=Ee(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function el(e,t,r,n,l,i){var s=2;if(n=e,typeof e=="function")cs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Xt:return $t(r.children,l,i,t);case zi:s=8,l|=8;break;case Na:return e=Ee(12,r,t,l|2),e.elementType=Na,e.lanes=i,e;case ba:return e=Ee(13,r,t,l),e.elementType=ba,e.lanes=i,e;case Sa:return e=Ee(19,r,t,l),e.elementType=Sa,e.lanes=i,e;case ic:return Fl(r,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lc:s=10;break e;case ac:s=9;break e;case Ei:s=11;break e;case Pi:s=14;break e;case it:s=16,n=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ee(s,r,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function $t(e,t,r,n){return e=Ee(7,e,n,t),e.lanes=r,e}function Fl(e,t,r,n){return e=Ee(22,e,n,t),e.elementType=ic,e.lanes=r,e.stateNode={isHidden:!1},e}function va(e,t,r){return e=Ee(6,e,null,t),e.lanes=r,e}function ya(e,t,r){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bp(e,t,r,n,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=n,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function us(e,t,r,n,l,i,s,o,c){return e=new Bp(e,t,r,o,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ji(i),e}function Wp(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Xu(e){if(!e)return bt;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var r=e.type;if(ye(r))return Xc(e,r,t)}return t}function Zu(e,t,r,n,l,i,s,o,c){return e=us(r,n,!0,e,l,i,s,o,c),e.context=Xu(null),r=e.current,n=de(),l=wt(r),i=qe(n,l),i.callback=t??null,yt(r,i,l),e.current.lanes=l,wn(e,l,n),xe(e,n),e}function Dl(e,t,r,n){var l=t.current,i=de(),s=wt(l);return r=Xu(r),t.context===null?t.context=r:t.pendingContext=r,t=qe(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=yt(l,t,s),e!==null&&(Ae(e,l,s,i),Yn(e,l,s)),s}function bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Eo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ds(e,t){Eo(e,t),(e=e.alternate)&&Eo(e,t)}function Hp(){return null}var qu=typeof reportError=="function"?reportError:function(e){console.error(e)};function fs(e){this._internalRoot=e}Ul.prototype.render=fs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Dl(e,t,null,null)};Ul.prototype.unmount=fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qt(function(){Dl(null,e,null,null)}),t[tt]=null}};function Ul(e){this._internalRoot=e}Ul.prototype.unstable_scheduleHydration=function(e){if(e){var t=_c();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ot.length&&t!==0&&t<ot[r].priority;r++);ot.splice(r,0,e),r===0&&Tc(e)}};function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Po(){}function Qp(e,t,r,n,l){if(l){if(typeof n=="function"){var i=n;n=function(){var d=bl(s);i.call(d)}}var s=Zu(t,n,e,0,null,!1,!1,"",Po);return e._reactRootContainer=s,e[tt]=s.current,sn(e.nodeType===8?e.parentNode:e),Qt(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof n=="function"){var o=n;n=function(){var d=bl(c);o.call(d)}}var c=us(e,0,!1,null,null,!1,!1,"",Po);return e._reactRootContainer=c,e[tt]=c.current,sn(e.nodeType===8?e.parentNode:e),Qt(function(){Dl(t,c,r,n)}),c}function $l(e,t,r,n,l){var i=r._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var o=l;l=function(){var c=bl(s);o.call(c)}}Dl(t,s,e,l)}else s=Qp(r,t,e,l,n);return bl(s)}Ec=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ar(t.pendingLanes);r!==0&&(Ti(t,r|1),xe(t,J()),!(I&6)&&(jr=J()+500,zt()))}break;case 13:Qt(function(){var n=rt(e,1);if(n!==null){var l=de();Ae(n,e,1,l)}}),ds(e,1)}};Mi=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var r=de();Ae(t,e,134217728,r)}ds(e,134217728)}};Pc=function(e){if(e.tag===13){var t=wt(e),r=rt(e,t);if(r!==null){var n=de();Ae(r,e,t,n)}ds(e,t)}};_c=function(){return O};Lc=function(e,t){var r=O;try{return O=e,t()}finally{O=r}};Ia=function(e,t,r){switch(t){case"input":if(Ea(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var l=Ll(n);if(!l)throw Error(N(90));oc(n),Ea(n,l)}}}break;case"textarea":uc(e,r);break;case"select":t=r.value,t!=null&&cr(e,!!r.multiple,t,!1)}};vc=is;yc=Qt;var Jp={usingClientEntryPoint:!1,Events:[kn,tr,Ll,hc,gc,is]},Fr={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yp={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jc(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||Hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vn.isDisabled&&Vn.supportsFiber)try{zl=Vn.inject(Yp),He=Vn}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp;be.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ps(t))throw Error(N(200));return Wp(e,t,null,r)};be.createRoot=function(e,t){if(!ps(e))throw Error(N(299));var r=!1,n="",l=qu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=us(e,1,!1,null,null,r,!1,n,l),e[tt]=t.current,sn(e.nodeType===8?e.parentNode:e),new fs(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=jc(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Qt(e)};be.hydrate=function(e,t,r){if(!Al(t))throw Error(N(200));return $l(null,e,t,!0,r)};be.hydrateRoot=function(e,t,r){if(!ps(e))throw Error(N(405));var n=r!=null&&r.hydratedSources||null,l=!1,i="",s=qu;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=Zu(t,null,e,1,r??null,l,!1,i,s),e[tt]=t.current,sn(e),n)for(e=0;e<n.length;e++)r=n[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Ul(t)};be.render=function(e,t,r){if(!Al(t))throw Error(N(200));return $l(null,e,t,!1,r)};be.unmountComponentAtNode=function(e){if(!Al(e))throw Error(N(40));return e._reactRootContainer?(Qt(function(){$l(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};be.unstable_batchedUpdates=is;be.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Al(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return $l(e,t,r,!1,n)};be.version="18.3.1-next-f1338f8080-20240426";function ed(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ed)}catch(e){console.error(e)}}ed(),ec.exports=be;var Kp=ec.exports,_o=Kp;ja.createRoot=_o.createRoot,ja.hydrateRoot=_o.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gn(){return gn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},gn.apply(null,arguments)}var pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pt||(pt={}));const Lo="popstate";function Gp(e){e===void 0&&(e={});function t(n,l){let{pathname:i,search:s,hash:o}=n.location;return mi("",{pathname:i,search:s,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(n,l){return typeof l=="string"?l:Sl(l)}return Zp(t,r,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ms(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Xp(){return Math.random().toString(36).substr(2,8)}function To(e,t){return{usr:e.state,key:e.key,idx:t}}function mi(e,t,r,n){return r===void 0&&(r=null),gn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Cr(t):t,{state:r,key:t&&t.key||n||Xp()})}function Sl(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Cr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Zp(e,t,r,n){n===void 0&&(n={});let{window:l=document.defaultView,v5Compat:i=!1}=n,s=l.history,o=pt.Pop,c=null,d=h();d==null&&(d=0,s.replaceState(gn({},s.state,{idx:d}),""));function h(){return(s.state||{idx:null}).idx}function m(){o=pt.Pop;let k=h(),f=k==null?null:k-d;d=k,c&&c({action:o,location:v.location,delta:f})}function g(k,f){o=pt.Push;let u=mi(v.location,k,f);d=h()+1;let p=To(u,d),j=v.createHref(u);try{s.pushState(p,"",j)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;l.location.assign(j)}i&&c&&c({action:o,location:v.location,delta:1})}function y(k,f){o=pt.Replace;let u=mi(v.location,k,f);d=h();let p=To(u,d),j=v.createHref(u);s.replaceState(p,"",j),i&&c&&c({action:o,location:v.location,delta:0})}function x(k){let f=l.location.origin!=="null"?l.location.origin:l.location.href,u=typeof k=="string"?k:Sl(k);return u=u.replace(/ $/,"%20"),Y(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let v={get action(){return o},get location(){return e(l,s)},listen(k){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(Lo,m),c=k,()=>{l.removeEventListener(Lo,m),c=null}},createHref(k){return t(l,k)},createURL:x,encodeLocation(k){let f=x(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:y,go(k){return s.go(k)}};return v}var Mo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mo||(Mo={}));function qp(e,t,r){return r===void 0&&(r="/"),em(e,t,r)}function em(e,t,r,n){let l=typeof t=="string"?Cr(t):t,i=hs(l.pathname||"/",r);if(i==null)return null;let s=td(e);tm(s);let o=null,c=pm(i);for(let d=0;o==null&&d<s.length;++d)o=um(s[d],c);return o}function td(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let l=(i,s,o)=>{let c={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(Y(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=kt([n,c.relativePath]),h=r.concat(c);i.children&&i.children.length>0&&(Y(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),td(i.children,t,h,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:om(d,i.index),routesMeta:h})};return e.forEach((i,s)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))l(i,s);else for(let c of rd(i.path))l(i,s,c)}),t}function rd(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,l=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return l?[i,""]:[i];let s=rd(n.join("/")),o=[];return o.push(...s.map(c=>c===""?i:[i,c].join("/"))),l&&o.push(...s),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function tm(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:cm(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const rm=/^:[\w-]+$/,nm=3,lm=2,am=1,im=10,sm=-2,Ro=e=>e==="*";function om(e,t){let r=e.split("/"),n=r.length;return r.some(Ro)&&(n+=sm),t&&(n+=lm),r.filter(l=>!Ro(l)).reduce((l,i)=>l+(rm.test(i)?nm:i===""?am:im),n)}function cm(e,t){return e.length===t.length&&e.slice(0,-1).every((n,l)=>n===t[l])?e[e.length-1]-t[t.length-1]:0}function um(e,t,r){let{routesMeta:n}=e,l={},i="/",s=[];for(let o=0;o<n.length;++o){let c=n[o],d=o===n.length-1,h=i==="/"?t:t.slice(i.length)||"/",m=dm({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},h),g=c.route;if(!m)return null;Object.assign(l,m.params),s.push({params:l,pathname:kt([i,m.pathname]),pathnameBase:ym(kt([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=kt([i,m.pathnameBase]))}return s}function dm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=fm(e.path,e.caseSensitive,e.end),l=t.match(r);if(!l)return null;let i=l[0],s=i.replace(/(.)\/+$/,"$1"),o=l.slice(1);return{params:n.reduce((d,h,m)=>{let{paramName:g,isOptional:y}=h;if(g==="*"){let v=o[m]||"";s=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const x=o[m];return y&&!x?d[g]=void 0:d[g]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:s,pattern:e}}function fm(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),ms(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,c)=>(n.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),n]}function pm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ms(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const mm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hm=e=>mm.test(e);function gm(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:l=""}=typeof e=="string"?Cr(e):e,i;if(r)if(hm(r))i=r;else{if(r.includes("//")){let s=r;r=nd(r),ms(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?i=Io(r.substring(1),"/"):i=Io(r,t)}else i=t;return{pathname:i,search:xm(n),hash:wm(l)}}function Io(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function xa(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function gs(e,t){let r=vm(e);return t?r.map((n,l)=>l===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function vs(e,t,r,n){n===void 0&&(n=!1);let l;typeof e=="string"?l=Cr(e):(l=gn({},e),Y(!l.pathname||!l.pathname.includes("?"),xa("?","pathname","search",l)),Y(!l.pathname||!l.pathname.includes("#"),xa("#","pathname","hash",l)),Y(!l.search||!l.search.includes("#"),xa("#","search","hash",l)));let i=e===""||l.pathname==="",s=i?"/":l.pathname,o;if(s==null)o=r;else{let m=t.length-1;if(!n&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;l.pathname=g.join("/")}o=m>=0?t[m]:"/"}let c=gm(l,o),d=s&&s!=="/"&&s.endsWith("/"),h=(i||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||h)&&(c.pathname+="/"),c}const nd=e=>e.replace(/\/\/+/g,"/"),kt=e=>nd(e.join("/")),ym=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function jm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ld=["post","put","patch","delete"];new Set(ld);const km=["get",...ld];new Set(km);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vn(){return vn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},vn.apply(null,arguments)}const ys=w.createContext(null),Nm=w.createContext(null),Et=w.createContext(null),Vl=w.createContext(null),Pt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),ad=w.createContext(null);function bm(e,t){let{relative:r}=t===void 0?{}:t;zr()||Y(!1);let{basename:n,navigator:l}=w.useContext(Et),{hash:i,pathname:s,search:o}=sd(e,{relative:r}),c=s;return n!=="/"&&(c=s==="/"?n:kt([n,s])),l.createHref({pathname:c,search:o,hash:i})}function zr(){return w.useContext(Vl)!=null}function Er(){return zr()||Y(!1),w.useContext(Vl).location}function id(e){w.useContext(Et).static||w.useLayoutEffect(e)}function Pr(){let{isDataRoute:e}=w.useContext(Pt);return e?Fm():Sm()}function Sm(){zr()||Y(!1);let e=w.useContext(ys),{basename:t,future:r,navigator:n}=w.useContext(Et),{matches:l}=w.useContext(Pt),{pathname:i}=Er(),s=JSON.stringify(gs(l,r.v7_relativeSplatPath)),o=w.useRef(!1);return id(()=>{o.current=!0}),w.useCallback(function(d,h){if(h===void 0&&(h={}),!o.current)return;if(typeof d=="number"){n.go(d);return}let m=vs(d,JSON.parse(s),i,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:kt([t,m.pathname])),(h.replace?n.replace:n.push)(m,h.state,h)},[t,n,s,i,e])}function sd(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=w.useContext(Et),{matches:l}=w.useContext(Pt),{pathname:i}=Er(),s=JSON.stringify(gs(l,n.v7_relativeSplatPath));return w.useMemo(()=>vs(e,JSON.parse(s),i,r==="path"),[e,s,i,r])}function Cm(e,t){return zm(e,t)}function zm(e,t,r,n){zr()||Y(!1);let{navigator:l}=w.useContext(Et),{matches:i}=w.useContext(Pt),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=Er(),h;if(t){var m;let k=typeof t=="string"?Cr(t):t;c==="/"||(m=k.pathname)!=null&&m.startsWith(c)||Y(!1),h=k}else h=d;let g=h.pathname||"/",y=g;if(c!=="/"){let k=c.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=qp(e,{pathname:y}),v=Tm(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},o,k.params),pathname:kt([c,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:kt([c,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,r,n);return t&&v?w.createElement(Vl.Provider,{value:{location:vn({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:pt.Pop}},v):v}function Em(){let e=Om(),t=jm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),r?w.createElement("pre",{style:l},r):null,null)}const Pm=w.createElement(Em,null);class _m extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?w.createElement(Pt.Provider,{value:this.props.routeContext},w.createElement(ad.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lm(e){let{routeContext:t,match:r,children:n}=e,l=w.useContext(ys);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),w.createElement(Pt.Provider,{value:t},n)}function Tm(e,t,r,n){var l;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var i;if(!r)return null;if(r.errors)e=r.matches;else if((i=n)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,o=(l=r)==null?void 0:l.errors;if(o!=null){let h=s.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);h>=0||Y(!1),s=s.slice(0,Math.min(s.length,h+1))}let c=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<s.length;h++){let m=s[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=h),m.route.id){let{loaderData:g,errors:y}=r,x=m.route.loader&&g[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||x){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((h,m,g)=>{let y,x=!1,v=null,k=null;r&&(y=o&&m.route.id?o[m.route.id]:void 0,v=m.route.errorElement||Pm,c&&(d<0&&g===0?(Dm("route-fallback"),x=!0,k=null):d===g&&(x=!0,k=m.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,g+1)),u=()=>{let p;return y?p=v:x?p=k:m.route.Component?p=w.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,w.createElement(Lm,{match:m,routeContext:{outlet:h,matches:f,isDataRoute:r!=null},children:p})};return r&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?w.createElement(_m,{location:r.location,revalidation:r.revalidation,component:v,error:y,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var od=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(od||{}),cd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cd||{});function Mm(e){let t=w.useContext(ys);return t||Y(!1),t}function Rm(e){let t=w.useContext(Nm);return t||Y(!1),t}function Im(e){let t=w.useContext(Pt);return t||Y(!1),t}function ud(e){let t=Im(),r=t.matches[t.matches.length-1];return r.route.id||Y(!1),r.route.id}function Om(){var e;let t=w.useContext(ad),r=Rm(),n=ud();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function Fm(){let{router:e}=Mm(od.UseNavigateStable),t=ud(cd.UseNavigateStable),r=w.useRef(!1);return id(()=>{r.current=!0}),w.useCallback(function(l,i){i===void 0&&(i={}),r.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,vn({fromRouteId:t},i)))},[e,t])}const Oo={};function Dm(e,t,r){Oo[e]||(Oo[e]=!0)}function Um(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function dd(e){let{to:t,replace:r,state:n,relative:l}=e;zr()||Y(!1);let{future:i,static:s}=w.useContext(Et),{matches:o}=w.useContext(Pt),{pathname:c}=Er(),d=Pr(),h=vs(t,gs(o,i.v7_relativeSplatPath),c,l==="path"),m=JSON.stringify(h);return w.useEffect(()=>d(JSON.parse(m),{replace:r,state:n,relative:l}),[d,m,l,r,n]),null}function Ie(e){Y(!1)}function Am(e){let{basename:t="/",children:r=null,location:n,navigationType:l=pt.Pop,navigator:i,static:s=!1,future:o}=e;zr()&&Y(!1);let c=t.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:c,navigator:i,static:s,future:vn({v7_relativeSplatPath:!1},o)}),[c,o,i,s]);typeof n=="string"&&(n=Cr(n));let{pathname:h="/",search:m="",hash:g="",state:y=null,key:x="default"}=n,v=w.useMemo(()=>{let k=hs(h,c);return k==null?null:{location:{pathname:k,search:m,hash:g,state:y,key:x},navigationType:l}},[c,h,m,g,y,x,l]);return v==null?null:w.createElement(Et.Provider,{value:d},w.createElement(Vl.Provider,{children:r,value:v}))}function $m(e){let{children:t,location:r}=e;return Cm(hi(t),r)}new Promise(()=>{});function hi(e,t){t===void 0&&(t=[]);let r=[];return w.Children.forEach(e,(n,l)=>{if(!w.isValidElement(n))return;let i=[...t,l];if(n.type===w.Fragment){r.push.apply(r,hi(n.props.children,i));return}n.type!==Ie&&Y(!1),!n.props.index||!n.props.children||Y(!1);let s={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=hi(n.props.children,i)),r.push(s)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},gi.apply(null,arguments)}function Vm(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function Bm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wm(e,t){return e.button===0&&(!t||t==="_self")&&!Bm(e)}const Hm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Qm="6";try{window.__reactRouterVersion=Qm}catch{}const Jm="startTransition",Fo=Fd[Jm];function Ym(e){let{basename:t,children:r,future:n,window:l}=e,i=w.useRef();i.current==null&&(i.current=Gp({window:l,v5Compat:!0}));let s=i.current,[o,c]=w.useState({action:s.action,location:s.location}),{v7_startTransition:d}=n||{},h=w.useCallback(m=>{d&&Fo?Fo(()=>c(m)):c(m)},[c,d]);return w.useLayoutEffect(()=>s.listen(h),[s,h]),w.useEffect(()=>Um(n),[n]),w.createElement(Am,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:s,future:n})}const Km=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ut=w.forwardRef(function(t,r){let{onClick:n,relative:l,reloadDocument:i,replace:s,state:o,target:c,to:d,preventScrollReset:h,viewTransition:m}=t,g=Vm(t,Hm),{basename:y}=w.useContext(Et),x,v=!1;if(typeof d=="string"&&Gm.test(d)&&(x=d,Km))try{let p=new URL(window.location.href),j=d.startsWith("//")?new URL(p.protocol+d):new URL(d),b=hs(j.pathname,y);j.origin===p.origin&&b!=null?d=b+j.search+j.hash:v=!0}catch{}let k=bm(d,{relative:l}),f=Xm(d,{replace:s,state:o,target:c,preventScrollReset:h,relative:l,viewTransition:m});function u(p){n&&n(p),p.defaultPrevented||f(p)}return w.createElement("a",gi({},g,{href:x||k,onClick:v||i?n:u,ref:r,target:c}))});var Do;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Do||(Do={}));var Uo;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Uo||(Uo={}));function Xm(e,t){let{target:r,replace:n,state:l,preventScrollReset:i,relative:s,viewTransition:o}=t===void 0?{}:t,c=Pr(),d=Er(),h=sd(e,{relative:s});return w.useCallback(m=>{if(Wm(m,r)){m.preventDefault();let g=n!==void 0?n:Sl(d)===Sl(h);c(e,{replace:g,state:l,preventScrollReset:i,relative:s,viewTransition:o})}},[d,c,h,n,l,r,e,i,s,o])}const fd=w.createContext(null),Zm=({children:e})=>{const[t,r]=w.useState(null),[n,l]=w.useState(!0);w.useEffect(()=>{const c=localStorage.getItem("currentUser");if(c)try{r(JSON.parse(c))}catch(d){console.error("Failed to parse current user",d),localStorage.removeItem("currentUser")}l(!1)},[]);const i=(c,d)=>{const m=JSON.parse(localStorage.getItem("users")||"[]").find(g=>g.email.toLowerCase()===c.toLowerCase()&&g.password===d);if(m){const g={name:m.name,surname:m.surname,email:m.email,role:m.role};return localStorage.setItem("currentUser",JSON.stringify(g)),r(g),{success:!0,message:"Logged in successfully!"}}else return{success:!1,message:"Invalid email or password."}},s=(c,d,h,m,g)=>{const y=JSON.parse(localStorage.getItem("users")||"[]");if(y.some(k=>k.email.toLowerCase()===h.toLowerCase()))return{success:!1,message:"Email is already registered."};const v={name:c,surname:d,email:h,password:m,role:g};return y.push(v),localStorage.setItem("users",JSON.stringify(y)),{success:!0,message:"Registration successful! You can now log in."}},o=()=>{localStorage.removeItem("currentUser"),r(null)};return a.jsx(fd.Provider,{value:{user:t,loading:n,login:i,register:s,logout:o},children:!n&&e})},Je=()=>{const e=w.useContext(fd);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},Tt=({children:e})=>{const{user:t}=Je();return t?e:a.jsx(dd,{to:"/login",replace:!0})};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pd=(...e)=>e.filter((t,r,n)=>!!t&&n.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var eh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:l="",children:i,iconNode:s,...o},c)=>w.createElement("svg",{ref:c,...eh,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:pd("lucide",l),...o},[...s.map(([d,h])=>w.createElement(d,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(e,t)=>{const r=w.forwardRef(({className:n,...l},i)=>w.createElement(th,{ref:i,iconNode:t,className:pd(`lucide-${qm(e)}`,n),...l}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=M("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=M("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=M("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=M("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=M("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=M("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=M("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=M("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=M("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=M("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=M("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=M("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=M("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=M("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=M("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=M("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=M("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=M("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=M("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=M("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=M("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=M("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=M("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=M("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=M("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=M("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=M("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=M("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=M("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=M("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=M("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=M("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=M("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=M("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=M("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=M("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=M("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=M("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Mt=()=>{const{user:e,logout:t}=Je(),r=Er(),n=l=>r.pathname===l;return a.jsxs("nav",{className:"navbar-container",children:[a.jsxs("div",{className:"navbar-inner",children:[a.jsxs(ut,{to:"/",className:"navbar-logo",children:[a.jsx(ph,{className:"logo-icon",size:24}),a.jsxs("span",{className:"logo-text",children:["CareerPilot",a.jsx("span",{className:"logo-accent",children:"AI"})]})]}),a.jsxs("div",{className:"navbar-links",children:[a.jsxs(ut,{to:"/",className:`nav-link ${n("/")?"active":""}`,children:[a.jsx(oh,{size:18}),a.jsx("span",{children:"Dashboard"})]}),(e==null?void 0:e.role)==="employer"&&a.jsxs(ut,{to:"/create-job",className:`nav-link ${n("/create-job")?"active":""}`,children:[a.jsx(ih,{size:18}),a.jsx("span",{children:"Create Job"})]}),a.jsxs(ut,{to:"/view-jobs",className:`nav-link ${n("/view-jobs")?"active":""}`,children:[a.jsx(_e,{size:18}),a.jsx("span",{children:"View Jobs"})]}),a.jsxs(ut,{to:"/profile",className:`nav-link ${n("/profile")?"active":""}`,children:[a.jsx(yn,{size:18}),a.jsx("span",{children:"Profile"})]})]}),e&&a.jsxs("div",{className:"navbar-user-section",children:[a.jsxs("div",{className:"user-profile",children:[a.jsx("div",{className:"user-avatar",children:a.jsx(yn,{size:16})}),a.jsxs("span",{className:"user-name",children:[e.name," ",e.surname]})]}),a.jsxs("button",{onClick:t,className:"logout-btn",title:"Sign Out",children:[a.jsx(ch,{size:18}),a.jsx("span",{children:"Logout"})]})]})]}),a.jsx("style",{children:`
        .navbar-container {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(11, 15, 25, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-glass);
          padding: 0.75rem 1.5rem;
        }

        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .logo-icon {
          color: var(--color-primary);
        }

        .logo-accent {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-link.active {
          color: var(--text-primary);
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .navbar-user-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.375rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid var(--border-glass);
        }

        .user-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
        }

        .user-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          background: transparent;
          border: 1px solid rgba(244, 63, 94, 0.2);
          color: #f87171;
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .logout-btn:hover {
          background: rgba(244, 63, 94, 0.1);
          color: #fda4af;
          border-color: rgba(244, 63, 94, 0.4);
        }

        @media (max-width: 768px) {
          .navbar-inner {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }
          
          .navbar-links {
            justify-content: center;
          }

          .navbar-user-section {
            justify-content: space-between;
          }
        }
      `})]})},wh=()=>{const{login:e,user:t}=Je(),r=Pr(),[n,l]=w.useState({email:"",password:""}),[i,s]=w.useState({}),[o,c]=w.useState(""),[d,h]=w.useState(!1),m=()=>{const x={};return n.email?/\S+@\S+\.\S+/.test(n.email)||(x.email="Please enter a valid email address"):x.email="Email is required",n.password||(x.password="Password is required"),s(x),Object.keys(x).length===0},g=x=>{const{name:v,value:k}=x.target;l(f=>({...f,[v]:k})),i[v]&&s(f=>({...f,[v]:""})),c("")},y=async x=>{x.preventDefault(),m()&&(h(!0),c(""),setTimeout(()=>{const v=e(n.email,n.password);if(h(!1),v.success){const k=JSON.parse(localStorage.getItem("currentUser")||"{}"),f=k.role==="candidate"?"/candidate-dashboard":k.role==="employer"?"/employer-dashboard":k.role==="admin"?"/admin-dashboard":"/";r(f)}else c(v.message)},800))};return a.jsxs("div",{className:"auth-page-container",children:[a.jsx("div",{className:"glow-circle top-right"}),a.jsx("div",{className:"glow-circle bottom-left"}),a.jsxs("div",{className:"auth-card-wrapper animate-slide-up",children:[a.jsxs("div",{className:"auth-header",children:[a.jsx("div",{className:"auth-logo",children:"🚀"}),a.jsx("h1",{className:"auth-title",children:"Welcome Back"}),a.jsx("p",{className:"auth-subtitle",children:"Sign in to manage your CVs & track your job progress"})]}),o&&a.jsxs("div",{className:"alert alert-error",children:[a.jsx(se,{size:18}),a.jsx("span",{children:o})]}),a.jsxs("form",{onSubmit:y,className:"auth-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"email",children:"Email Address"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(gd,{className:"input-icon",size:18}),a.jsx("input",{type:"email",id:"email",name:"email",className:`form-input has-icon ${i.email?"is-invalid":""}`,placeholder:"you@example.com",value:n.email,onChange:g})]}),i.email&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(se,{size:14}),i.email]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"password",children:"Password"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(yi,{className:"input-icon",size:18}),a.jsx("input",{type:"password",id:"password",name:"password",className:`form-input has-icon ${i.password?"is-invalid":""}`,placeholder:"••••••••",value:n.password,onChange:g})]}),i.password&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(se,{size:14}),i.password]})]}),a.jsx("button",{type:"submit",className:"btn btn-primary auth-submit-btn",disabled:d,children:d?a.jsx("span",{className:"spinner"}):a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"Sign In"}),a.jsx(ge,{size:18})]})})]}),a.jsxs("div",{className:"auth-footer",children:[a.jsx("span",{children:"Don't have an account?"})," ",a.jsx(ut,{to:"/register",className:"auth-link",children:"Create an Account"})]})]}),a.jsx("style",{children:`
        .auth-page-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        /* Ambient glows */
        .glow-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          z-index: 0;
          pointer-events: none;
        }

        .glow-circle.top-right {
          top: -10%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: var(--color-primary);
        }

        .glow-circle.bottom-left {
          bottom: -10%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: var(--color-secondary);
        }

        .auth-card-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 440px;
          background: var(--bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 3rem 2.5rem;
          box-shadow: var(--shadow-glass);
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .auth-logo {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: inline-block;
          animation: float 4s ease-in-out infinite;
        }

        .auth-title {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .auth-subtitle {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .auth-form {
          margin-bottom: 2rem;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          transition: color var(--transition-fast);
          pointer-events: none;
        }

        .form-input.has-icon {
          padding-left: 2.75rem;
        }

        .form-input.is-invalid {
          border-color: rgba(244, 63, 94, 0.4);
        }

        .form-input.is-invalid:focus {
          box-shadow: 0 0 0 3px rgba(244, 63, 94, 0.2);
        }

        .form-input:focus + .input-icon {
          color: var(--color-primary);
        }

        .auth-submit-btn {
          margin-top: 1.75rem;
          height: 48px;
        }

        .auth-footer {
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-secondary);
          border-top: 1px solid var(--border-glass);
          padding-top: 1.5rem;
        }

        .auth-link {
          font-weight: 600;
          color: var(--color-primary);
          transition: color var(--transition-fast);
        }

        .auth-link:hover {
          color: var(--color-primary-hover);
        }

        /* Spinner for submissions */
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes float-shadow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(0.85); }
        }
      `})]})},jh=()=>{const{register:e}=Je(),t=Pr(),[r,n]=w.useState({name:"",surname:"",email:"",password:"",confirmPassword:"",role:""}),[l,i]=w.useState({}),[s,o]=w.useState(""),[c,d]=w.useState(""),[h,m]=w.useState(!1),g=()=>{const v={};return r.name.trim()||(v.name="First name is required"),r.surname.trim()||(v.surname="Surname is required"),r.role||(v.role="Please select a role"),r.email?/\S+@\S+\.\S+/.test(r.email)||(v.email="Please enter a valid email address"):v.email="Email is required",r.password?r.password.length<8?v.password="Password must be at least 8 characters long":/[A-Z]/.test(r.password)?/[!@#$%^&*(),.?":{}|<>]/.test(r.password)||(v.password="Password must contain at least one special character"):v.password="Password must contain at least one capital letter":v.password="Password is required",r.password!==r.confirmPassword&&(v.confirmPassword="Passwords do not match"),i(v),Object.keys(v).length===0},y=v=>{const{name:k,value:f}=v.target;n(u=>({...u,[k]:f})),l[k]&&i(u=>({...u,[k]:""})),o("")},x=async v=>{v.preventDefault(),g()&&(m(!0),o(""),d(""),setTimeout(()=>{const k=e(r.name,r.surname,r.email,r.password,r.role);m(!1),k.success?(d(k.message),n({name:"",surname:"",email:"",password:"",confirmPassword:"",role:""}),setTimeout(()=>{t("/login")},2200)):o(k.message)},800))};return a.jsxs("div",{className:"auth-page-container",children:[a.jsx("div",{className:"glow-circle top-right"}),a.jsx("div",{className:"glow-circle bottom-left"}),a.jsxs("div",{className:"auth-card-wrapper animate-slide-up",children:[a.jsxs("div",{className:"auth-header",children:[a.jsx("div",{className:"auth-logo",children:"🚀"}),a.jsx("h1",{className:"auth-title",children:"Create Account"}),a.jsx("p",{className:"auth-subtitle",children:"Join CareerPilot and select your role to get started"})]}),s&&a.jsxs("div",{className:"alert alert-error",children:[a.jsx(se,{size:18}),a.jsx("span",{children:s})]}),c&&a.jsxs("div",{className:"alert alert-success",children:[a.jsx(hd,{size:18}),a.jsx("span",{children:c})]}),a.jsxs("form",{onSubmit:x,className:"auth-form",children:[a.jsxs("div",{className:"form-row-double",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"name",children:"Name"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(yn,{className:"input-icon",size:18}),a.jsx("input",{type:"text",id:"name",name:"name",className:`form-input has-icon ${l.name?"is-invalid":""}`,placeholder:"John",value:r.name,onChange:y})]}),l.name&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(se,{size:14}),l.name]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"surname",children:"Surname"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(yn,{className:"input-icon",size:18}),a.jsx("input",{type:"text",id:"surname",name:"surname",className:`form-input has-icon ${l.surname?"is-invalid":""}`,placeholder:"Doe",value:r.surname,onChange:y})]}),l.surname&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(se,{size:14}),l.surname]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Select Your Role"}),a.jsxs("div",{className:"role-selection",children:[a.jsxs("div",{className:`role-card ${r.role==="candidate"?"selected":""}`,onClick:()=>y({target:{name:"role",value:"candidate"}}),children:[a.jsx(yh,{className:"role-icon",size:24}),a.jsx("h3",{className:"role-title",children:"Candidate"}),a.jsx("p",{className:"role-description",children:"Search for jobs and build your career"})]}),a.jsxs("div",{className:`role-card ${r.role==="employer"?"selected":""}`,onClick:()=>y({target:{name:"role",value:"employer"}}),children:[a.jsx(_e,{className:"role-icon",size:24}),a.jsx("h3",{className:"role-title",children:"Employer"}),a.jsx("p",{className:"role-description",children:"Post jobs and find talent"})]}),a.jsxs("div",{className:`role-card ${r.role==="admin"?"selected":""}`,onClick:()=>y({target:{name:"role",value:"admin"}}),children:[a.jsx(xi,{className:"role-icon",size:24}),a.jsx("h3",{className:"role-title",children:"Admin"}),a.jsx("p",{className:"role-description",children:"Oversee app insights and users"})]})]}),l.role&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(se,{size:14}),l.role]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"email",children:"Email Address"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(gd,{className:"input-icon",size:18}),a.jsx("input",{type:"email",id:"email",name:"email",className:`form-input has-icon ${l.email?"is-invalid":""}`,placeholder:"john.doe@example.com",value:r.email,onChange:y})]}),l.email&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(se,{size:14}),l.email]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"password",children:"Password"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(yi,{className:"input-icon",size:18}),a.jsx("input",{type:"password",id:"password",name:"password",className:`form-input has-icon ${l.password?"is-invalid":""}`,placeholder:"8+ chars, 1 capital, 1 special char",value:r.password,onChange:y})]}),l.password&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(se,{size:14}),l.password]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"confirmPassword",children:"Confirm Password"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(yi,{className:"input-icon",size:18}),a.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",className:`form-input has-icon ${l.confirmPassword?"is-invalid":""}`,placeholder:"Confirm password",value:r.confirmPassword,onChange:y})]}),l.confirmPassword&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(se,{size:14}),l.confirmPassword]})]}),a.jsx("button",{type:"submit",className:"btn btn-primary auth-submit-btn",disabled:h||!!c,children:h?a.jsx("span",{className:"spinner"}):a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"Register"}),a.jsx(ge,{size:18})]})})]}),a.jsxs("div",{className:"auth-footer",children:[a.jsx("span",{children:"Already have an account?"})," ",a.jsx(ut,{to:"/login",className:"auth-link",children:"Log In"})]})]}),a.jsx("style",{children:`
        .auth-page-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        /* Ambient glows */
        .glow-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          z-index: 0;
          pointer-events: none;
        }

        .glow-circle.top-right {
          top: -10%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: var(--color-primary);
        }

        .glow-circle.bottom-left {
          bottom: -10%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: var(--color-secondary);
        }

        .auth-card-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 500px;
          background: var(--bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          box-shadow: var(--shadow-glass);
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .auth-logo {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          display: inline-block;
          animation: float 4s ease-in-out infinite;
        }

        .auth-title {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .auth-subtitle {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .auth-form {
          margin-bottom: 1.5rem;
        }

        .form-row-double {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .form-row-double {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          transition: color var(--transition-fast);
          pointer-events: none;
        }

        .form-input.has-icon {
          padding-left: 2.75rem;
        }

        .form-input.is-invalid {
          border-color: rgba(244, 63, 94, 0.4);
        }

        .form-input.is-invalid:focus {
          box-shadow: 0 0 0 3px rgba(244, 63, 94, 0.2);
        }

        .form-input:focus + .input-icon {
          color: var(--color-primary);
        }

        .auth-submit-btn {
          margin-top: 1.5rem;
          height: 48px;
        }

        .auth-footer {
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-secondary);
          border-top: 1px solid var(--border-glass);
          padding-top: 1.25rem;
        }

        .auth-link {
          font-weight: 600;
          color: var(--color-primary);
          transition: color var(--transition-fast);
        }

        .auth-link:hover {
          color: var(--color-primary-hover);
        }

        /* Spinner for submissions */
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* Role selection styles */
        .role-selection {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 600px) {
          .role-selection {
            grid-template-columns: 1fr;
          }
        }

        .role-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: center;
        }

        .role-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .role-card.selected {
          background: rgba(99, 102, 241, 0.15);
          border-color: var(--color-primary);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }

        .role-icon {
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          transition: color var(--transition-fast);
        }

        .role-card:hover .role-icon,
        .role-card.selected .role-icon {
          color: var(--color-primary);
        }

        .role-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .role-description {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.3;
        }
      `})]})},kh=()=>{const{user:e}=Je(),[t,r]=w.useState({cvCount:2,applicationsSubmitted:4});w.useEffect(()=>{},[]);const n=["Tailor your CV's keywords to match the specific job listing for better recruiter match rates.","Keep your resume to 2 pages maximum. Focus on recent results and metrics over descriptions.","Quantify your accomplishments (e.g. 'Boosted sales by 20%' instead of 'Responsible for sales')."],l=n[new Date().getDay()%n.length];return a.jsxs("div",{className:"dashboard-wrapper animate-fade-in",children:[a.jsx("header",{className:"dashboard-header",children:a.jsxs("div",{children:[a.jsxs("h1",{className:"welcome-text",children:["Welcome back, ",a.jsxs("span",{className:"highlight-text",children:[e==null?void 0:e.name," ",e==null?void 0:e.surname]})]}),a.jsx("p",{className:"welcome-sub",children:"Here is what is happening with your career progress today."})]})}),a.jsxs("section",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card glass-card",children:[a.jsx("div",{className:"stat-icon-wrapper purple",children:a.jsx(kr,{size:24})}),a.jsxs("div",{className:"stat-info",children:[a.jsx("span",{className:"stat-label",children:"AI CVs Generated"}),a.jsx("h2",{className:"stat-value",children:t.cvCount})]})]}),a.jsxs("div",{className:"stat-card glass-card",children:[a.jsx("div",{className:"stat-icon-wrapper green",children:a.jsx(Bl,{size:24})}),a.jsxs("div",{className:"stat-info",children:[a.jsx("span",{className:"stat-label",children:"Applications Submitted"}),a.jsx("h2",{className:"stat-value",children:t.applicationsSubmitted})]})]})]}),a.jsxs("div",{className:"dashboard-grid",children:[a.jsxs("div",{className:"grid-main glass-card",children:[a.jsx("h3",{className:"section-title",children:"Quick Actions"}),a.jsx("div",{className:"actions-list",children:a.jsxs(ut,{to:"/view-jobs",className:"action-row",children:[a.jsxs("div",{className:"action-meta",children:[a.jsx("h4",{className:"action-title",children:"View and manage jobs list"}),a.jsx("p",{className:"action-description",children:"Browse active careers, track application status, and review details."})]}),a.jsx(ge,{size:20,className:"action-arrow"})]})})]}),a.jsxs("div",{className:"grid-sidebar glass-card",children:[a.jsxs("div",{className:"sidebar-header",children:[a.jsx(md,{size:20,className:"sidebar-icon"}),a.jsx("h3",{className:"sidebar-title",children:"Daily Career Tip"})]}),a.jsxs("p",{className:"tip-content",children:['"',l,'"']}),a.jsx("div",{className:"badge badge-success tip-badge",children:"PRO TIP"})]})]}),a.jsx("style",{children:`
        .dashboard-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .dashboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .welcome-text {
          font-size: 2.25rem;
          margin-bottom: 0.25rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .highlight-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        .welcome-sub {
          color: var(--text-secondary);
          font-size: 1rem;
        }



        /* Stats grid styling */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.75rem 2rem;
        }

        .stat-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
        }

        .stat-icon-wrapper.purple {
          background: rgba(99, 102, 241, 0.15);
          color: #818cf8;
          border: 1px solid rgba(99, 102, 241, 0.25);
        }

        .stat-icon-wrapper.blue {
          background: rgba(6, 182, 212, 0.15);
          color: #22d3ee;
          border: 1px solid rgba(6, 182, 212, 0.25);
        }

        .stat-icon-wrapper.green {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        /* Main Dashboard layouts */
        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 900px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .create-job-btn {
            width: 100%;
          }
        }

        .section-title {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 0.75rem;
        }

        .actions-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .action-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .action-row:hover {
          background: rgba(99, 102, 241, 0.05);
          border-color: rgba(99, 102, 241, 0.2);
          transform: translateX(4px);
        }

        .action-meta {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .action-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .action-description {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .action-arrow {
          color: var(--text-muted);
          transition: color var(--transition-fast), transform var(--transition-fast);
        }

        .action-row:hover .action-arrow {
          color: var(--color-primary);
          transform: translateX(2px);
        }

        /* Sidebar styling */
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          color: var(--color-secondary);
        }

        .sidebar-title {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .tip-content {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 1.25rem;
        }

        .tip-badge {
          align-self: flex-start;
        }
      `})]})},Nh=()=>{const{user:e}=Je(),[t,r]=w.useState(!0),[n,l]=w.useState(null),[i,s]=w.useState(null),[o,c]=w.useState(null),[d,h]=w.useState(null),[m,g]=w.useState([]),[y,x]=w.useState([]),v=w.useMemo(()=>e==null?void 0:e.email,[e]);w.useEffect(()=>{v&&(async()=>{r(!0);try{const p=localStorage.getItem(`profile_${v}`),j=localStorage.getItem(`jobs_${v}`),b=localStorage.getItem(`hustles_${v}`),S=localStorage.getItem(`careerPath_${v}`);p&&l(JSON.parse(p)),j&&s(JSON.parse(j)),b&&c(JSON.parse(b)),S&&h(JSON.parse(S));const E=localStorage.getItem(`uploaded_cvs_${v}`),P=localStorage.getItem(`generated_cvs_${v}`),A=localStorage.getItem(`cv_${v}`),L=localStorage.getItem(`generatedCv_${v}`),le=Ye=>{if(!Ye)return[];try{const Me=JSON.parse(Ye);return Array.isArray(Me)?Me:Me&&typeof Me=="object"?[Me]:[]}catch{return[{fileName:String(Ye),createdAt:null}]}};g(le(E)||(A?le(A):[])),x(le(P)||(L?le(L):[]))}catch(p){console.error("Failed to load profile page data",p)}finally{r(!1)}})()},[v]);const k=({title:u,icon:p,children:j})=>a.jsxs("section",{className:"profile-section",children:[a.jsxs("div",{className:"profile-section-title",children:[p,a.jsx("h3",{children:u})]}),a.jsx("div",{className:"profile-section-body",children:j})]}),f=(u,p)=>{const j=(u==null?void 0:u.fileName)||(u==null?void 0:u.name)||(u==null?void 0:u.filename)||`CV ${p+1}`,b=(u==null?void 0:u.createdAt)||(u==null?void 0:u.date)||null,S=(u==null?void 0:u.url)||(u==null?void 0:u.downloadUrl)||null;return a.jsxs("div",{className:"cv-item",children:[a.jsxs("div",{className:"cv-meta",children:[a.jsx("div",{className:"cv-icon",children:a.jsx(kr,{size:18})}),a.jsxs("div",{className:"cv-text",children:[a.jsx("div",{className:"cv-name",children:j}),a.jsx("div",{className:"cv-sub",children:b?new Date(b).toLocaleString():"—"})]})]}),S?a.jsxs("a",{className:"cv-download",href:S,target:"_blank",rel:"noreferrer",children:[a.jsx($o,{size:16}),a.jsx("span",{children:"Download"})]}):a.jsxs("div",{className:"cv-download disabled",title:"No download URL available",children:[a.jsx($o,{size:16}),a.jsx("span",{children:"Unavailable"})]})]},p)};return t?a.jsxs("div",{className:"profile-page",children:[a.jsxs("div",{className:"loading-state",children:[a.jsx("div",{className:"spinner"}),a.jsx("p",{children:"Loading your profile..."})]}),a.jsx("style",{children:`
          .profile-page { padding: 2rem; max-width: 1200px; margin: 0 auto; }
          .loading-state { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; color: var(--text-secondary); }
          .spinner { width: 42px; height: 42px; border: 3px solid rgba(99, 102, 241, 0.3); border-top-color: var(--color-primary); border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 1rem; }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):a.jsxs("div",{className:"profile-page",children:[a.jsx("header",{className:"profile-hero",children:a.jsxs("div",{className:"profile-hero-left",children:[a.jsx("div",{className:"profile-hero-icon",children:a.jsx(yn,{size:20})}),a.jsxs("div",{children:[a.jsx("h1",{className:"profile-hero-title",children:"Your Profile"}),a.jsx("p",{className:"profile-hero-sub",children:"Uploaded CVs, generated CVs, and your career information."})]})]})}),a.jsxs("div",{className:"profile-grid",children:[a.jsx(k,{title:"Uploaded CV",icon:a.jsx(hh,{size:18}),children:m.length?a.jsx("div",{className:"cv-list",children:m.map(f)}):a.jsxs("div",{className:"empty-panel",children:[a.jsx("p",{children:"No uploaded CV found."}),a.jsx("p",{className:"muted",children:"Upload/update your CV from the dashboard."})]})}),a.jsx(k,{title:"Generated CVs",icon:a.jsx(md,{size:18}),children:y.length?a.jsx("div",{className:"cv-list",children:y.map(f)}):a.jsxs("div",{className:"empty-panel",children:[a.jsx("p",{children:"No generated CVs found."}),a.jsx("p",{className:"muted",children:"Generate CVs using the CV builder flow (if enabled)."})]})}),a.jsx(k,{title:"Other Information",icon:a.jsx(_e,{size:18}),children:n?a.jsxs("div",{className:"other-info",children:[a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Name"}),a.jsx("span",{className:"other-value",children:n.name||`${(e==null?void 0:e.name)||""} ${(e==null?void 0:e.surname)||""}`.trim()})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Experience"}),a.jsx("span",{className:"other-value",children:n.experience||"—"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Dominant Sector"}),a.jsx("span",{className:"other-value",children:n.dominantSector||"—"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Work Style"}),a.jsx("span",{className:"other-value",children:n.workStyle||"—"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Payment Preference"}),a.jsx("span",{className:"other-value",children:n.preferredPayment||"—"})]}),a.jsx("div",{className:"other-divider"}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Matched Jobs"}),a.jsx("span",{className:"other-value",children:Array.isArray(i)?i.length:"0"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Side Hustles"}),a.jsx("span",{className:"other-value",children:Array.isArray(o)?o.length:"0"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"5-Year Plan Steps"}),a.jsx("span",{className:"other-value",children:Array.isArray(d)?d.length:"0"})]}),Array.isArray(n.skills)&&n.skills.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"other-divider"}),a.jsxs("div",{className:"skills-mini",children:[a.jsx("div",{className:"skills-mini-title",children:"Top Skills"}),a.jsx("div",{className:"skills-mini-grid",children:n.skills.slice(0,10).map((u,p)=>a.jsxs("div",{className:"skill-chip",children:[a.jsx("span",{className:"skill-chip-name",children:u.name}),a.jsxs("span",{className:"skill-chip-level",children:[u.level,"%"]})]},p))})]})]})]}):a.jsxs("div",{className:"empty-panel",children:[a.jsx("p",{children:"No profile data found."}),a.jsx("p",{className:"muted",children:"Complete onboarding to see your profile and skills."})]})})]}),a.jsx("style",{children:`
        .profile-page { padding: 2rem; max-width: 1200px; margin: 0 auto; }

        .profile-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.75rem;
        }

        .profile-hero-left { display: flex; align-items: center; gap: 1rem; }
        .profile-hero-icon {
          width: 44px; height: 44px; border-radius: 14px;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex; align-items: center; justify-content: center;
          color: white;
        }

        .profile-hero-title { font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin: 0; }
        .profile-hero-sub { color: var(--text-secondary); margin: 0.25rem 0 0; font-size: 0.95rem; }

        .profile-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 980px) {
          .profile-grid { grid-template-columns: 1fr 1fr; }
          .profile-grid > :nth-child(3) { grid-column: 1 / -1; }
        }

        .profile-section {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
        }

        .profile-section-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .profile-section-title svg { color: var(--color-primary); }
        .profile-section-title h3 { margin: 0; font-size: 1.1rem; font-weight: 800; color: var(--text-primary); }

        .profile-section-body { }

        .empty-panel {
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-md);
          padding: 1rem;
          color: var(--text-secondary);
        }

        .muted { color: var(--text-muted); margin-top: 0.25rem; font-size: 0.9rem; }

        .cv-list { display: flex; flex-direction: column; gap: 0.75rem; }

        .cv-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.95rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-glass);
          background: rgba(255, 255, 255, 0.02);
        }

        .cv-meta { display: flex; align-items: center; gap: 0.8rem; min-width: 0; }

        .cv-icon {
          width: 38px; height: 38px; border-radius: 14px;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.25);
          display: flex; align-items: center; justify-content: center;
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .cv-text { min-width: 0; }
        .cv-name { font-weight: 700; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .cv-sub { color: var(--text-muted); font-size: 0.85rem; margin-top: 0.15rem; }

        .cv-download {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .cv-download.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .other-info { display: flex; flex-direction: column; gap: 0.75rem; }
        .other-info-row { display: flex; gap: 1rem; justify-content: space-between; }
        .other-label { color: var(--text-muted); font-weight: 600; }
        .other-value { color: var(--text-primary); font-weight: 700; text-align: right; max-width: 65%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .other-divider { height: 1px; background: var(--border-glass); margin: 0.5rem 0; }

        .skills-mini-title { font-weight: 800; margin-bottom: 0.5rem; color: var(--text-primary); }
        .skills-mini-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.5rem; }
        .skill-chip { background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 0.6rem; display: flex; justify-content: space-between; gap: 0.5rem; }
        .skill-chip-name { color: var(--text-primary); font-weight: 700; font-size: 0.85rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .skill-chip-level { color: var(--color-primary); font-weight: 900; font-size: 0.85rem; }
      `})]})},bh=()=>{const e=Pr(),[t,r]=w.useState({title:"",company:"",location:"",type:"Full-time",salary:"",description:""}),[n,l]=w.useState({}),[i,s]=w.useState(!1),[o,c]=w.useState(!1),d=()=>{const g={};return t.title.trim()||(g.title="Job title is required"),t.company.trim()||(g.company="Company name is required"),t.location.trim()||(g.location="Location is required"),t.salary.trim()||(g.salary="Salary/Compensation is required"),t.description.trim()||(g.description="Job description is required"),l(g),Object.keys(g).length===0},h=g=>{const{name:y,value:x}=g.target;r(v=>({...v,[y]:x})),n[y]&&l(v=>({...v,[y]:""}))},m=g=>{g.preventDefault(),d()&&(c(!0),setTimeout(()=>{const y=JSON.parse(localStorage.getItem("jobs")||"[]"),x={id:Date.now(),...t,status:"Active",createdAt:new Date().toLocaleDateString()};y.unshift(x),localStorage.setItem("jobs",JSON.stringify(y)),c(!1),s(!0),r({title:"",company:"",location:"",type:"Full-time",salary:"",description:""}),setTimeout(()=>{e("/view-jobs")},1500)},800))};return a.jsxs("div",{className:"create-job-wrapper animate-fade-in",children:[a.jsxs("header",{className:"page-header",children:[a.jsxs("button",{onClick:()=>e("/"),className:"back-btn",children:[a.jsx(rh,{size:18}),a.jsx("span",{children:"Back to Dashboard"})]}),a.jsx("h1",{className:"page-title",children:"Create Job Listing"}),a.jsx("p",{className:"page-subtitle",children:"Publish a new career opportunity to the database"})]}),i&&a.jsxs("div",{className:"alert alert-success",children:[a.jsx(hd,{size:18}),a.jsx("span",{children:"Job listing created successfully! Redirecting to jobs board..."})]}),a.jsx("div",{className:"form-card glass-card",children:a.jsxs("form",{onSubmit:m,children:[a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"title",children:"Job Title"}),a.jsx("input",{type:"text",id:"title",name:"title",className:`form-input ${n.title?"is-invalid":""}`,placeholder:"Software Engineer",value:t.title,onChange:h}),n.title&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(se,{size:14}),n.title]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"company",children:"Company"}),a.jsx("input",{type:"text",id:"company",name:"company",className:`form-input ${n.company?"is-invalid":""}`,placeholder:"Google",value:t.company,onChange:h}),n.company&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(se,{size:14}),n.company]})]})]}),a.jsxs("div",{className:"form-row-triple",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"location",children:"Location"}),a.jsx("input",{type:"text",id:"location",name:"location",className:`form-input ${n.location?"is-invalid":""}`,placeholder:"Remote / San Francisco, CA",value:t.location,onChange:h}),n.location&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(se,{size:14}),n.location]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"type",children:"Job Type"}),a.jsxs("select",{id:"type",name:"type",className:"form-input select-input",value:t.type,onChange:h,children:[a.jsx("option",{value:"Full-time",children:"Full-time"}),a.jsx("option",{value:"Part-time",children:"Part-time"}),a.jsx("option",{value:"Contract",children:"Contract"}),a.jsx("option",{value:"Internship",children:"Internship"}),a.jsx("option",{value:"Remote",children:"Remote Only"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"salary",children:"Salary / Compensation"}),a.jsx("input",{type:"text",id:"salary",name:"salary",className:`form-input ${n.salary?"is-invalid":""}`,placeholder:"e.g. $120,000 - $140,000",value:t.salary,onChange:h}),n.salary&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(se,{size:14}),n.salary]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"description",children:"Job Description"}),a.jsx("textarea",{id:"description",name:"description",rows:"6",className:`form-input textarea-input ${n.description?"is-invalid":""}`,placeholder:"Outline the responsibilities, requirements, and benefits of the role...",value:t.description,onChange:h}),n.description&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(se,{size:14}),n.description]})]}),a.jsxs("div",{className:"form-actions",children:[a.jsx("button",{type:"button",onClick:()=>e("/"),className:"btn btn-secondary cancel-btn",disabled:o,children:"Cancel"}),a.jsx("button",{type:"submit",className:"btn btn-primary submit-btn",disabled:o||i,children:o?a.jsx("span",{className:"spinner"}):a.jsxs(a.Fragment,{children:[a.jsx(xs,{size:18}),a.jsx("span",{children:"Publish Job Listing"})]})})]})]})}),a.jsx("style",{children:`
        .create-job-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .page-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-start;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: color var(--transition-fast);
          margin-bottom: 0.5rem;
          padding: 0;
        }

        .back-btn:hover {
          color: var(--text-primary);
        }

        .page-title {
          font-size: 2rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-subtitle {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .form-card {
          padding: 2.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .form-row-triple {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
        }

        @media (max-width: 768px) {
          .form-row, .form-row-triple {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }

        .select-input {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.25rem;
          padding-right: 2.5rem;
        }

        .textarea-input {
          resize: vertical;
          min-height: 120px;
        }

        .form-input.is-invalid {
          border-color: rgba(244, 63, 94, 0.4);
        }

        .form-input.is-invalid:focus {
          box-shadow: 0 0 0 3px rgba(244, 63, 94, 0.2);
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 2rem;
          border-top: 1px solid var(--border-glass);
          padding-top: 1.75rem;
        }

        .cancel-btn, .submit-btn {
          width: auto;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `})]})},Sh=()=>{const e=Pr(),{user:t}=Je(),[r,n]=w.useState([]);w.useEffect(()=>{const s=localStorage.getItem("jobs");if(s)n(JSON.parse(s));else{const o=[{id:1,title:"Senior Frontend Engineer",company:"Stripe",location:"San Francisco, CA (Hybrid)",type:"Full-time",salary:"$165,000 - $190,000",description:"Looking for a product-minded engineer to lead frontend architecture for payments UI.",status:"Active",createdAt:"2026-07-01"},{id:2,title:"Lead UX Designer",company:"Linear",location:"Remote (US/Europe)",type:"Remote",salary:"$140,000 - $160,000",description:"Shape the next generation of software tracking tools. Requires 5+ years of design systems experience.",status:"Active",createdAt:"2026-07-02"}];localStorage.setItem("jobs",JSON.stringify(o)),n(o)}},[]);const l=s=>{const o=r.filter(c=>c.id!==s);localStorage.setItem("jobs",JSON.stringify(o)),n(o)},i=s=>{switch(s){case"Full-time":return"badge-fulltime";case"Remote":return"badge-remote";case"Contract":return"badge-contract";default:return"badge-other"}};return a.jsxs("div",{className:"view-jobs-wrapper animate-fade-in",children:[a.jsxs("header",{className:"page-header",children:[a.jsx("h1",{className:"page-title",children:"Active Job Listings"}),a.jsx("p",{className:"page-subtitle",children:"Track, update, and manage candidate opportunities"})]}),a.jsxs("div",{className:"table-actions",children:[a.jsxs("span",{className:"results-count",children:[r.length," Listings Found"]}),(t==null?void 0:t.role)==="employer"&&a.jsxs("button",{onClick:()=>e("/create-job"),className:"btn btn-primary add-job-btn",children:[a.jsx(xs,{size:18}),a.jsx("span",{children:"Add New Job"})]})]}),r.length===0?a.jsxs("div",{className:"empty-state glass-card",children:[a.jsx(_e,{size:48,className:"empty-icon"}),a.jsx("h3",{children:"No Job Listings Found"}),(t==null?void 0:t.role)==="employer"?a.jsxs(a.Fragment,{children:[a.jsx("p",{children:"Get started by creating your first job listing today."}),a.jsx("button",{onClick:()=>e("/create-job"),className:"btn btn-primary empty-btn",children:"Create Job"})]}):a.jsx("p",{children:"Check back later for new job opportunities."})]}):a.jsx("div",{className:"jobs-list",children:r.map(s=>a.jsxs("div",{className:"job-card glass-card",children:[a.jsxs("div",{className:"job-card-header",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"job-title",children:s.title}),a.jsx("span",{className:"job-company",children:s.company})]}),a.jsxs("div",{className:"job-meta-badges",children:[a.jsx("span",{className:`badge ${i(s.type)}`,children:s.type}),a.jsx("span",{className:"badge badge-success",children:s.status})]})]}),a.jsx("p",{className:"job-description",children:s.description}),a.jsxs("div",{className:"job-card-footer",children:[a.jsxs("div",{className:"job-meta-details",children:[a.jsxs("div",{className:"meta-item",children:[a.jsx(vd,{size:16}),a.jsx("span",{children:s.location})]}),a.jsxs("div",{className:"meta-item",children:[a.jsx(vi,{size:16}),a.jsx("span",{children:s.salary})]}),a.jsxs("div",{className:"meta-item",children:[a.jsx(lh,{size:16}),a.jsxs("span",{children:["Added ",s.createdAt]})]})]}),(t==null?void 0:t.role)==="employer"&&a.jsxs("button",{onClick:()=>l(s.id),className:"delete-job-btn",title:"Delete Listing",children:[a.jsx(vh,{size:18}),a.jsx("span",{children:"Delete"})]})]})]},s.id))}),a.jsx("style",{children:`
        .view-jobs-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .page-header {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .page-title {
          font-size: 2rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-subtitle {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .table-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .results-count {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .add-job-btn {
          width: auto;
        }

        .jobs-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .job-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .job-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }

        .job-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .job-company {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-secondary);
        }

        .job-meta-badges {
          display: flex;
          gap: 0.5rem;
        }

        .badge-fulltime {
          background: rgba(99, 102, 241, 0.15);
          color: #818cf8;
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .badge-remote {
          background: rgba(6, 182, 212, 0.15);
          color: #22d3ee;
          border: 1px solid rgba(6, 182, 212, 0.3);
        }

        .badge-contract {
          background: rgba(245, 158, 11, 0.15);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .badge-other {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid var(--border-glass);
        }

        .job-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .job-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          border-top: 1px solid var(--border-glass);
          padding-top: 1.25rem;
          margin-top: 0.25rem;
        }

        .job-meta-details {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .delete-job-btn {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .delete-job-btn:hover {
          color: #f87171;
          background: rgba(244, 63, 94, 0.08);
        }

        /* Empty state styling */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
          gap: 1rem;
        }

        .empty-icon {
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .empty-btn {
          width: auto;
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .job-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          
          .job-card-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 1.25rem;
          }

          .job-meta-details {
            gap: 0.75rem 1.25rem;
          }

          .delete-job-btn {
            justify-content: center;
            border: 1px solid rgba(244, 63, 94, 0.2);
            color: #f87171;
            padding: 0.5rem;
          }
        }
      `})]})},Ch=({onComplete:e})=>{const[t,r]=w.useState(1),[n,l]=w.useState(""),[i,s]=w.useState(null),[o,c]=w.useState(""),[d,h]=w.useState(!1),m=y=>{const x=y.target.files[0];x&&x.type==="application/pdf"&&s(x)},g=()=>{h(!0),setTimeout(()=>{h(!1),e({name:"User",dominantSector:"Manual Labor",workStyle:"Gig Economy",skills:[{name:"Forklift Operation",level:90},{name:"Power Tools",level:85},{name:"Blueprint Reading",level:75},{name:"Safety Protocols",level:95},{name:"Team Leadership",level:70},{name:"Time Management",level:80}],experience:n==="upload"?"CV uploaded and processed":o,preferredPayment:"Per-project basis"})},2e3)};return a.jsxs("div",{className:"onboarding-container",children:[a.jsxs("div",{className:"onboarding-card",children:[t===1&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"onboarding-header",children:[a.jsx("h1",{className:"onboarding-title",children:"Let's Build Your Profile"}),a.jsx("p",{className:"onboarding-subtitle",children:"Choose how you'd like to share your experience"})]}),a.jsxs("div",{className:"method-selection",children:[a.jsxs("div",{className:`method-card ${n==="upload"?"selected":""}`,onClick:()=>l("upload"),children:[a.jsx("div",{className:"method-icon",children:a.jsx(Xr,{size:32})}),a.jsx("h3",{className:"method-title",children:"Upload CV"}),a.jsx("p",{className:"method-description",children:"I have a PDF resume ready to upload"})]}),a.jsxs("div",{className:`method-card ${n==="text"?"selected":""}`,onClick:()=>l("text"),children:[a.jsx("div",{className:"method-icon",children:a.jsx(kr,{size:32})}),a.jsx("h3",{className:"method-title",children:"Tell Us About Yourself"}),a.jsx("p",{className:"method-description",children:"I'll describe my experience in my own words"})]})]}),n&&a.jsxs("button",{className:"btn btn-primary btn-large",onClick:()=>r(2),children:["Continue",a.jsx(ge,{size:18})]})]}),t===2&&n==="upload"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"onboarding-header",children:[a.jsx("h1",{className:"onboarding-title",children:"Upload Your CV"}),a.jsx("p",{className:"onboarding-subtitle",children:"We'll extract your skills and experience automatically"})]}),a.jsxs("div",{className:"upload-area",children:[a.jsx("input",{type:"file",id:"cv-upload",accept:".pdf",onChange:m,className:"file-input"}),a.jsxs("label",{htmlFor:"cv-upload",className:"upload-label",children:[a.jsx(Xr,{size:48}),a.jsx("p",{className:"upload-text",children:i?i.name:"Click to upload or drag and drop"}),a.jsx("p",{className:"upload-hint",children:"PDF files only (max 5MB)"})]}),i&&a.jsxs("div",{className:"file-success",children:[a.jsx(ah,{size:16}),a.jsx("span",{children:"File selected successfully"})]})]}),a.jsxs("div",{className:"onboarding-actions",children:[a.jsx("button",{className:"btn btn-secondary",onClick:()=>r(1),children:"Back"}),a.jsxs("button",{className:"btn btn-primary",onClick:g,disabled:!i||d,children:[d?"Processing...":"Generate Profile",a.jsx(ge,{size:18})]})]})]}),t===2&&n==="text"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"onboarding-header",children:[a.jsx("h1",{className:"onboarding-title",children:"Tell Us About Yourself"}),a.jsx("p",{className:"onboarding-subtitle",children:"What do you do, what tools do you use, and how do you usually get paid?"})]}),a.jsxs("div",{className:"text-input-area",children:[a.jsx("textarea",{className:"text-area",placeholder:"Example: I've been working in construction for 5 years. I'm skilled in operating forklifts, using power tools, and reading blueprints. I usually work on contract basis and get paid per project. I'm looking for more stable work but open to gigs on weekends...",value:o,onChange:y=>c(y.target.value),rows:8}),a.jsxs("div",{className:"char-count",children:[o.length," characters"]})]}),a.jsxs("div",{className:"onboarding-actions",children:[a.jsx("button",{className:"btn btn-secondary",onClick:()=>r(1),children:"Back"}),a.jsxs("button",{className:"btn btn-primary",onClick:g,disabled:!o.trim()||d,children:[d?"Processing...":"Generate Profile",a.jsx(ge,{size:18})]})]})]})]}),a.jsx("style",{children:`
        .onboarding-container {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .onboarding-card {
          width: 100%;
          max-width: 600px;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
        }

        .onboarding-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .onboarding-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .onboarding-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .method-selection {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 480px) {
          .method-selection {
            grid-template-columns: 1fr;
          }
        }

        .method-card {
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 2rem 1.5rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: center;
        }

        .method-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
          transform: translateY(-4px);
        }

        .method-card.selected {
          background: rgba(99, 102, 241, 0.15);
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .method-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 1rem;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .method-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .method-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.4;
        }

        .upload-area {
          margin-bottom: 2rem;
        }

        .file-input {
          display: none;
        }

        .upload-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
          border: 2px dashed var(--border-glass);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-fast);
          background: rgba(255, 255, 255, 0.02);
        }

        .upload-label:hover {
          border-color: var(--color-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .upload-label svg {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .upload-text {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .upload-hint {
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        .file-success {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-md);
          color: #10b981;
          font-size: 0.875rem;
        }

        .text-input-area {
          margin-bottom: 2rem;
        }

        .text-area {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 1rem;
          line-height: 1.5;
          resize: vertical;
          font-family: inherit;
        }

        .text-area:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .text-area::placeholder {
          color: var(--text-muted);
        }

        .char-count {
          text-align: right;
          color: var(--text-muted);
          font-size: 0.8rem;
          margin-top: 0.5rem;
        }

        .onboarding-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }

        .btn-large {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border: none;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `})]})},zh=({profile:e,onUpdateProfile:t})=>{const[r,n]=w.useState(!1),[l,i]=w.useState(""),[s,o]=w.useState(null),[c,d]=w.useState(""),[h,m]=w.useState(!1),g=v=>{const k=v.target.files[0];k&&k.type==="application/pdf"&&o(k)},y=()=>{m(!0),setTimeout(()=>{t({method:l,file:s,rawText:c}),m(!1),n(!1),o(null),d(""),i("")},1500)};if(!e)return a.jsx("div",{className:"profile-skills-container empty-state",children:a.jsxs("div",{className:"empty-content",children:[a.jsx(Ao,{size:48}),a.jsx("h3",{children:"No Profile Data"}),a.jsx("p",{children:"Complete the onboarding to see your profile and skills"})]})});const x=e;return a.jsxs("div",{className:"profile-skills-container",children:[a.jsxs("div",{className:"profile-header",children:[a.jsx("div",{className:"profile-avatar",children:a.jsx("span",{className:"avatar-initials",children:x.name.split(" ").map(v=>v[0]).join("")})}),a.jsxs("div",{className:"profile-info",children:[a.jsx("h2",{className:"profile-name",children:x.name}),a.jsx("p",{className:"profile-experience",children:x.experience})]}),a.jsxs("button",{className:"update-profile-btn",onClick:()=>n(!0),title:"Update Profile",children:[a.jsx(Xr,{size:18}),a.jsx("span",{children:"Update CV"})]})]}),a.jsxs("div",{className:"profile-highlights",children:[a.jsxs("div",{className:"highlight-card",children:[a.jsx("div",{className:"highlight-icon",children:a.jsx(gh,{size:24})}),a.jsxs("div",{className:"highlight-content",children:[a.jsx("p",{className:"highlight-label",children:"Dominant Sector"}),a.jsx("h3",{className:"highlight-value",children:x.dominantSector})]})]}),a.jsxs("div",{className:"highlight-card",children:[a.jsx("div",{className:"highlight-icon",children:a.jsx(_e,{size:24})}),a.jsxs("div",{className:"highlight-content",children:[a.jsx("p",{className:"highlight-label",children:"Work Style"}),a.jsx("h3",{className:"highlight-value",children:x.workStyle})]})]}),a.jsxs("div",{className:"highlight-card",children:[a.jsx("div",{className:"highlight-icon",children:a.jsx(xh,{size:24})}),a.jsxs("div",{className:"highlight-content",children:[a.jsx("p",{className:"highlight-label",children:"Payment Preference"}),a.jsx("h3",{className:"highlight-value",children:x.preferredPayment})]})]})]}),a.jsxs("div",{className:"skills-section",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(Ao,{size:20}),"Your Discovered Skills"]}),a.jsx("div",{className:"skills-grid",children:x.skills.map((v,k)=>a.jsxs("div",{className:"skill-item",children:[a.jsxs("div",{className:"skill-header",children:[a.jsx("span",{className:"skill-name",children:v.name}),a.jsxs("span",{className:"skill-percentage",children:[v.level,"%"]})]}),a.jsx("div",{className:"skill-bar",children:a.jsx("div",{className:"skill-progress",style:{width:`${v.level}%`}})})]},k))})]}),a.jsx("style",{children:`
        .profile-skills-container {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 2rem;
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .profile-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
        }

        .profile-info h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: var(--text-primary);
        }

        .profile-experience {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }

        .profile-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .highlight-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .highlight-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .highlight-label {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin: 0 0 0.25rem 0;
        }

        .highlight-value {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
        }

        .skills-section {
          margin-top: 2rem;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .section-title svg {
          color: var(--color-primary);
        }

        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skill-item {
          background: rgba(255, 255, 255, 0.02);
          border-radius: var(--radius-md);
          padding: 1rem;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        .skill-percentage {
          font-weight: 700;
          color: var(--color-primary);
          font-size: 0.9rem;
        }

        .skill-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border-radius: 9999px;
          transition: width 0.5s ease;
        }

        @media (max-width: 768px) {
          .profile-header {
            flex-direction: column;
            text-align: center;
          }

          .profile-highlights {
            grid-template-columns: 1fr;
          }
        }

        .empty-state {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
        }

        .empty-content {
          text-align: center;
          color: var(--text-muted);
        }

        .empty-content svg {
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }

        .empty-content p {
          font-size: 0.9rem;
          margin: 0;
        }

        .update-profile-btn {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border: none;
          color: white;
          padding: 0.625rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .update-profile-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        @media (max-width: 768px) {
          .update-profile-btn {
            margin-left: 0;
            margin-top: 1rem;
            width: 100%;
            justify-content: center;
          }

          .profile-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .update-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1rem;
        }

        .update-modal {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 2rem;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .modal-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
        }

        .modal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .update-method-selection {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .update-method-card {
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: center;
        }

        .update-method-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
        }

        .update-method-card.selected {
          background: rgba(99, 102, 241, 0.15);
          border-color: var(--color-primary);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }

        .update-method-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 0.75rem;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .update-method-title {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .update-method-description {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .update-upload-area {
          margin-bottom: 1.5rem;
        }

        .update-file-input {
          display: none;
        }

        .update-upload-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          border: 2px dashed var(--border-glass);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          background: rgba(255, 255, 255, 0.02);
        }

        .update-upload-label:hover {
          border-color: var(--color-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .update-upload-label svg {
          color: var(--color-primary);
          margin-bottom: 0.75rem;
        }

        .update-text-area {
          width: 100%;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 0.9rem;
          line-height: 1.5;
          resize: vertical;
          font-family: inherit;
          min-height: 120px;
        }

        .update-text-area:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .update-text-area::placeholder {
          color: var(--text-muted);
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 1.5rem;
        }

        .modal-btn-cancel {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          padding: 0.625rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .modal-btn-cancel:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .modal-btn-submit {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border: none;
          color: white;
          padding: 0.625rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .modal-btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .modal-btn-submit:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}),r&&a.jsx("div",{className:"update-modal-overlay",onClick:v=>v.target===v.currentTarget&&n(!1),children:a.jsxs("div",{className:"update-modal",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{className:"modal-title",children:"Update Your Profile"}),a.jsx("button",{className:"modal-close-btn",onClick:()=>n(!1),children:a.jsx(yd,{size:20})})]}),l?a.jsxs(a.Fragment,{children:[l==="upload"&&a.jsxs("div",{className:"update-upload-area",children:[a.jsx("input",{type:"file",id:"update-cv-upload",accept:".pdf",onChange:g,className:"update-file-input"}),a.jsxs("label",{htmlFor:"update-cv-upload",className:"update-upload-label",children:[a.jsx(Xr,{size:32}),a.jsx("p",{style:{margin:"0.5rem 0 0.25rem",color:"var(--text-primary)",fontWeight:"500"},children:s?s.name:"Click to upload new CV"}),a.jsx("p",{style:{margin:0,color:"var(--text-muted)",fontSize:"0.8rem"},children:"PDF files only (max 5MB)"})]})]}),l==="text"&&a.jsx("div",{className:"update-upload-area",children:a.jsx("textarea",{className:"update-text-area",placeholder:"Add new skills, experience, or update your current role description...",value:c,onChange:v=>d(v.target.value),rows:5})}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"modal-btn-cancel",onClick:()=>{i(""),o(null),d("")},children:"Back"}),a.jsx("button",{className:"modal-btn-submit",onClick:y,disabled:h||l==="upload"&&!s||l==="text"&&!c.trim(),children:h?"Updating...":"Update Profile"})]})]}):a.jsxs("div",{className:"update-method-selection",children:[a.jsxs("div",{className:`update-method-card ${l==="upload"?"selected":""}`,onClick:()=>i("upload"),children:[a.jsx("div",{className:"update-method-icon",children:a.jsx(Xr,{size:24})}),a.jsx("h4",{className:"update-method-title",children:"Upload New CV"}),a.jsx("p",{className:"update-method-description",children:"Replace your current CV with a new PDF"})]}),a.jsxs("div",{className:`update-method-card ${l==="text"?"selected":""}`,onClick:()=>i("text"),children:[a.jsx("div",{className:"update-method-icon",children:a.jsx(kr,{size:24})}),a.jsx("h4",{className:"update-method-title",children:"Update Experience"}),a.jsx("p",{className:"update-method-description",children:"Add new skills and experience details"})]})]})]})})]})},Eh=({matchedJobs:e,sideHustles:t,careerPath:r})=>!e&&!t&&!r?a.jsx("div",{className:"job-matcher-container empty-state",children:a.jsxs("div",{className:"empty-content",children:[a.jsx(_e,{size:48}),a.jsx("h3",{children:"No Job Matches Yet"}),a.jsx("p",{children:"Complete your profile to see personalized job matches and opportunities"})]})}):a.jsxs("div",{className:"job-matcher-container",children:[e&&e.length>0&&a.jsxs("div",{className:"matcher-section",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(_e,{size:20}),"Matched Jobs For You"]}),a.jsx("div",{className:"jobs-list",children:e.map(n=>a.jsxs("div",{className:"job-card",children:[a.jsxs("div",{className:"job-header",children:[a.jsxs("div",{className:"job-match-badge",children:[a.jsxs("span",{className:"match-percentage",children:[n.matchPercentage,"%"]}),a.jsx("span",{className:"match-label",children:"Match"})]}),a.jsx("span",{className:"job-type",children:n.type})]}),a.jsx("h4",{className:"job-title",children:n.title}),a.jsx("p",{className:"job-company",children:n.company}),a.jsxs("div",{className:"job-details",children:[a.jsxs("span",{className:"job-detail",children:[a.jsx(vd,{size:14}),n.location]}),a.jsxs("span",{className:"job-detail",children:[a.jsx(vi,{size:14}),n.salary]})]}),n.missingSkills&&n.missingSkills.length>0&&a.jsxs("div",{className:"missing-skills",children:[a.jsx(se,{size:14,className:"alert-icon"}),a.jsxs("span",{className:"missing-text",children:["Missing: ",n.missingSkills.join(", ")]})]}),a.jsx("button",{className:"btn btn-primary btn-sm",children:"Apply Now"})]},n.id))})]}),t&&t.length>0&&a.jsxs("div",{className:"matcher-section",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(vi,{size:20}),"Gig Opportunities"]}),a.jsx("div",{className:"hustles-list",children:t.map(n=>a.jsxs("div",{className:"hustle-card",children:[a.jsxs("div",{className:"hustle-header",children:[a.jsx("h4",{className:"hustle-title",children:n.title}),a.jsx("span",{className:"hustle-earnings",children:n.earnings})]}),a.jsxs("p",{className:"hustle-platform",children:["via ",n.platform]}),a.jsx("div",{className:"hustle-details",children:a.jsxs("span",{className:"hustle-detail",children:[a.jsx(sh,{size:14}),n.timeCommitment]})}),a.jsx("div",{className:"hustle-skills",children:n.skillsUsed&&n.skillsUsed.map((l,i)=>a.jsx("span",{className:"skill-tag",children:l},i))}),a.jsx("button",{className:"btn btn-secondary btn-sm",children:"Learn More"})]},n.id))})]}),r&&r.length>0&&a.jsxs("div",{className:"matcher-section full-width",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(Bl,{size:20}),"Your 5-Year Career Path"]}),a.jsx("div",{className:"career-timeline",children:r.map((n,l)=>a.jsxs("div",{className:"timeline-item",children:[a.jsxs("div",{className:"timeline-marker",children:[a.jsx("span",{className:"timeline-icon",children:n.icon}),l<r.length-1&&a.jsx("div",{className:"timeline-line"})]}),a.jsxs("div",{className:"timeline-content",children:[a.jsx("span",{className:"timeline-year",children:n.year}),a.jsx("h4",{className:"timeline-title",children:n.title}),a.jsx("span",{className:"timeline-salary",children:n.salary})]})]},l))})]}),a.jsx("style",{children:`
        .job-matcher-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .job-matcher-container {
            grid-template-columns: 1fr;
          }
        }

        .matcher-section {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
        }

        .matcher-section.full-width {
          grid-column: 1 / -1;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .section-title svg {
          color: var(--color-primary);
        }

        .jobs-list,
        .hustles-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .job-card,
        .hustle-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          transition: all var(--transition-fast);
        }

        .job-card:hover,
        .hustle-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .job-match-badge {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
        }

        .match-percentage {
          font-weight: 700;
          font-size: 0.9rem;
          color: white;
        }

        .match-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .job-type {
          background: rgba(99, 102, 241, 0.15);
          color: var(--color-primary);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .job-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: var(--text-primary);
        }

        .job-company {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0 0 0.75rem 0;
        }

        .job-details {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .job-detail {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .job-detail svg {
          color: var(--color-primary);
        }

        .missing-skills {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1rem;
        }

        .alert-icon {
          color: #f59e0b;
        }

        .missing-text {
          color: #f59e0b;
          font-size: 0.85rem;
        }

        .hustle-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .hustle-title {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
        }

        .hustle-earnings {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 700;
        }

        .hustle-platform {
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin: 0 0 0.5rem 0;
        }

        .hustle-details {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .hustle-detail {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .hustle-detail svg {
          color: var(--color-primary);
        }

        .hustle-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .skill-tag {
          background: rgba(99, 102, 241, 0.15);
          color: var(--color-primary);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 500;
        }

        .career-timeline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .timeline-item {
          display: flex;
          gap: 1rem;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timeline-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .timeline-line {
          flex: 1;
          width: 2px;
          background: linear-gradient(180deg, var(--color-primary) 0%, transparent 100%);
          margin: 0.5rem 0;
        }

        .timeline-content {
          flex: 1;
        }

        .timeline-year {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .timeline-title {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
          color: var(--text-primary);
        }

        .timeline-salary {
          color: #10b981;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          width: 100%;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border: none;
          color: white;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .empty-state {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          grid-column: 1 / -1;
        }

        .empty-content {
          text-align: center;
          color: var(--text-muted);
        }

        .empty-content svg {
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }

        .empty-content p {
          font-size: 0.9rem;
          margin: 0;
        }
      `})]}),Ph=()=>{const{user:e}=Je(),[t,r]=w.useState(!1),[n,l]=w.useState(!1),[i,s]=w.useState(!0),[o,c]=w.useState(null),[d,h]=w.useState(null),[m,g]=w.useState(null),[y,x]=w.useState(null);w.useEffect(()=>{const u=localStorage.getItem(`onboarding_${e==null?void 0:e.email}`);r(!!u),l(!u),u?v():s(!1)},[e]);const v=async()=>{s(!0);try{const u=localStorage.getItem(`profile_${e==null?void 0:e.email}`),p=localStorage.getItem(`jobs_${e==null?void 0:e.email}`),j=localStorage.getItem(`hustles_${e==null?void 0:e.email}`),b=localStorage.getItem(`careerPath_${e==null?void 0:e.email}`);u&&c(JSON.parse(u)),p&&h(JSON.parse(p)),j&&g(JSON.parse(j)),b&&x(JSON.parse(b))}catch(u){console.error("Error loading user data:",u)}finally{s(!1)}},k=u=>{localStorage.setItem(`onboarding_${e==null?void 0:e.email}`,"completed"),localStorage.setItem(`profile_${e==null?void 0:e.email}`,JSON.stringify(u)),c(u),r(!0),l(!1),v()},f=async u=>{var p;try{const j={...o,experience:u.method==="upload"?"CV updated: "+(((p=u.file)==null?void 0:p.name)||"New file uploaded"):u.rawText||o.experience,lastUpdated:new Date().toISOString()};c(j),localStorage.setItem(`profile_${e==null?void 0:e.email}`,JSON.stringify(j)),v()}catch(j){console.error("Error updating profile:",j)}};return i?a.jsxs("div",{className:"dashboard-container",children:[a.jsxs("div",{className:"loading-state",children:[a.jsx("div",{className:"spinner"}),a.jsx("p",{children:"Loading your dashboard..."})]}),a.jsx("style",{children:`
          .dashboard-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }

          .loading-state {
            text-align: center;
            color: var(--text-secondary);
          }

          .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(99, 102, 241, 0.3);
            border-top-color: var(--color-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `})]}):a.jsxs("div",{className:"dashboard-container",children:[n?a.jsx(Ch,{onComplete:k}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"dashboard-header",children:[a.jsxs("h1",{className:"dashboard-title",children:["Welcome, ",e==null?void 0:e.name,"!"]}),a.jsx("p",{className:"dashboard-subtitle",children:"Your personalized career dashboard"})]}),a.jsxs("div",{className:"dashboard-content",children:[a.jsx("div",{className:"main-section",children:a.jsx(zh,{profile:o,onUpdateProfile:f})}),a.jsx("div",{className:"main-section",children:a.jsx(Eh,{matchedJobs:d,sideHustles:m,careerPath:y})})]})]}),a.jsx("style",{children:`
        .dashboard-container {
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .dashboard-header {
          margin-bottom: 2rem;
        }

        .dashboard-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dashboard-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .dashboard-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .main-section {
          width: 100%;
        }

        @media (max-width: 768px) {
          .dashboard-container {
            padding: 1rem;
          }

          .dashboard-title {
            font-size: 1.5rem;
          }
        }
      `})]})},_h=()=>{const{user:e}=Je();return a.jsxs("div",{className:"dashboard-container",children:[a.jsxs("div",{className:"dashboard-header",children:[a.jsxs("h1",{className:"dashboard-title",children:["Welcome, ",e==null?void 0:e.name,"!"]}),a.jsx("p",{className:"dashboard-subtitle",children:"Manage your job postings and find top talent"})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(_e,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:"8"}),a.jsx("p",{className:"stat-label",children:"Active Jobs"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(or,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:"156"}),a.jsx("p",{className:"stat-label",children:"Total Applicants"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(kr,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:"24"}),a.jsx("p",{className:"stat-label",children:"New Applications"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(Bl,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:"92%"}),a.jsx("p",{className:"stat-label",children:"Response Rate"})]})]})]}),a.jsxs("div",{className:"dashboard-sections",children:[a.jsxs("div",{className:"dashboard-section",children:[a.jsx("h2",{className:"section-title",children:"Quick Actions"}),a.jsxs("div",{className:"action-grid",children:[a.jsxs("button",{className:"action-card",children:[a.jsx(xs,{size:24}),a.jsx("span",{children:"Post New Job"}),a.jsx(ge,{size:16,className:"action-arrow"})]}),a.jsxs("button",{className:"action-card",children:[a.jsx(_e,{size:24}),a.jsx("span",{children:"Manage Jobs"}),a.jsx(ge,{size:16,className:"action-arrow"})]}),a.jsxs("button",{className:"action-card",children:[a.jsx(or,{size:24}),a.jsx("span",{children:"View Applicants"}),a.jsx(ge,{size:16,className:"action-arrow"})]}),a.jsxs("button",{className:"action-card",children:[a.jsx(kr,{size:24}),a.jsx("span",{children:"Job Templates"}),a.jsx(ge,{size:16,className:"action-arrow"})]})]})]}),a.jsxs("div",{className:"dashboard-section",children:[a.jsx("h2",{className:"section-title",children:"Recent Applications"}),a.jsxs("div",{className:"applicant-list",children:[a.jsxs("div",{className:"applicant-card",children:[a.jsxs("div",{className:"applicant-header",children:[a.jsx("h3",{className:"applicant-name",children:"John Smith"}),a.jsx("span",{className:"applicant-badge",children:"New"})]}),a.jsx("p",{className:"applicant-position",children:"Applied for: Senior Frontend Developer"}),a.jsx("p",{className:"applicant-time",children:"2 hours ago"}),a.jsxs("div",{className:"applicant-actions",children:[a.jsx("button",{className:"btn btn-primary btn-sm",children:"View Profile"}),a.jsx("button",{className:"btn btn-secondary btn-sm",children:"Message"})]})]}),a.jsxs("div",{className:"applicant-card",children:[a.jsx("div",{className:"applicant-header",children:a.jsx("h3",{className:"applicant-name",children:"Sarah Johnson"})}),a.jsx("p",{className:"applicant-position",children:"Applied for: UX Designer"}),a.jsx("p",{className:"applicant-time",children:"5 hours ago"}),a.jsxs("div",{className:"applicant-actions",children:[a.jsx("button",{className:"btn btn-primary btn-sm",children:"View Profile"}),a.jsx("button",{className:"btn btn-secondary btn-sm",children:"Message"})]})]}),a.jsxs("div",{className:"applicant-card",children:[a.jsxs("div",{className:"applicant-header",children:[a.jsx("h3",{className:"applicant-name",children:"Michael Chen"}),a.jsx("span",{className:"applicant-badge",children:"Hot"})]}),a.jsx("p",{className:"applicant-position",children:"Applied for: Product Manager"}),a.jsx("p",{className:"applicant-time",children:"1 day ago"}),a.jsxs("div",{className:"applicant-actions",children:[a.jsx("button",{className:"btn btn-primary btn-sm",children:"View Profile"}),a.jsx("button",{className:"btn btn-secondary btn-sm",children:"Message"})]})]})]})]})]}),a.jsx("style",{children:`
        .dashboard-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-header {
          margin-bottom: 2rem;
        }

        .dashboard-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dashboard-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform var(--transition-fast);
        }

        .stat-card:hover {
          transform: translateY(-4px);
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .stat-content h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0;
          color: var(--text-primary);
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }

        .dashboard-sections {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .dashboard-sections {
            grid-template-columns: 1fr;
          }
        }

        .dashboard-section {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .action-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .action-grid {
            grid-template-columns: 1fr;
          }
        }

        .action-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .action-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .action-card svg:first-child {
          color: var(--color-primary);
        }

        .action-arrow {
          margin-left: auto;
          color: var(--text-muted);
        }

        .applicant-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .applicant-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          transition: all var(--transition-fast);
        }

        .applicant-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
        }

        .applicant-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .applicant-name {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
        }

        .applicant-badge {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .applicant-position {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0 0 0.25rem 0;
        }

        .applicant-time {
          color: var(--text-muted);
          font-size: 0.8rem;
          margin: 0 0 0.75rem 0;
        }

        .applicant-actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      `})]})},Lh=()=>{const{user:e}=Je();return a.jsxs("div",{className:"dashboard-container",children:[a.jsxs("div",{className:"dashboard-header",children:[a.jsx("h1",{className:"dashboard-title",children:"Admin Dashboard"}),a.jsxs("p",{className:"dashboard-subtitle",children:["Welcome, ",e==null?void 0:e.name,"! Monitor platform insights and user activity"]})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(or,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:"1,247"}),a.jsx("p",{className:"stat-label",children:"Total Users"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(_e,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:"342"}),a.jsx("p",{className:"stat-label",children:"Active Jobs"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(wa,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:"89"}),a.jsx("p",{className:"stat-label",children:"Daily Active Users"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(Bl,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:"+23%"}),a.jsx("p",{className:"stat-label",children:"Growth Rate"})]})]})]}),a.jsxs("div",{className:"dashboard-sections",children:[a.jsxs("div",{className:"dashboard-section",children:[a.jsx("h2",{className:"section-title",children:"Platform Overview"}),a.jsxs("div",{className:"overview-grid",children:[a.jsxs("div",{className:"overview-item",children:[a.jsx("div",{className:"overview-label",children:"Candidates"}),a.jsx("div",{className:"overview-value",children:"856"}),a.jsx("div",{className:"overview-change positive",children:"+12%"})]}),a.jsxs("div",{className:"overview-item",children:[a.jsx("div",{className:"overview-label",children:"Employers"}),a.jsx("div",{className:"overview-value",children:"391"}),a.jsx("div",{className:"overview-change positive",children:"+8%"})]}),a.jsxs("div",{className:"overview-item",children:[a.jsx("div",{className:"overview-label",children:"Jobs Posted"}),a.jsx("div",{className:"overview-value",children:"1,892"}),a.jsx("div",{className:"overview-change positive",children:"+15%"})]}),a.jsxs("div",{className:"overview-item",children:[a.jsx("div",{className:"overview-label",children:"Applications"}),a.jsx("div",{className:"overview-value",children:"4,567"}),a.jsx("div",{className:"overview-change positive",children:"+22%"})]})]})]}),a.jsxs("div",{className:"dashboard-section",children:[a.jsx("h2",{className:"section-title",children:"Quick Actions"}),a.jsxs("div",{className:"action-grid",children:[a.jsxs("button",{className:"action-card",children:[a.jsx(or,{size:24}),a.jsx("span",{children:"Manage Users"}),a.jsx(ge,{size:16,className:"action-arrow"})]}),a.jsxs("button",{className:"action-card",children:[a.jsx(_e,{size:24}),a.jsx("span",{children:"Review Jobs"}),a.jsx(ge,{size:16,className:"action-arrow"})]}),a.jsxs("button",{className:"action-card",children:[a.jsx(xi,{size:24}),a.jsx("span",{children:"Security Settings"}),a.jsx(ge,{size:16,className:"action-arrow"})]}),a.jsxs("button",{className:"action-card",children:[a.jsx(wa,{size:24}),a.jsx("span",{children:"View Analytics"}),a.jsx(ge,{size:16,className:"action-arrow"})]})]})]})]}),a.jsx("div",{className:"dashboard-sections",children:a.jsxs("div",{className:"dashboard-section full-width",children:[a.jsx("h2",{className:"section-title",children:"Recent Activity"}),a.jsxs("div",{className:"activity-list",children:[a.jsxs("div",{className:"activity-item",children:[a.jsx("div",{className:"activity-icon",children:a.jsx(or,{size:16})}),a.jsxs("div",{className:"activity-content",children:[a.jsx("p",{className:"activity-text",children:"New user registration: Jane Doe (Candidate)"}),a.jsx("p",{className:"activity-time",children:"5 minutes ago"})]})]}),a.jsxs("div",{className:"activity-item",children:[a.jsx("div",{className:"activity-icon",children:a.jsx(_e,{size:16})}),a.jsxs("div",{className:"activity-content",children:[a.jsx("p",{className:"activity-text",children:"New job posted: Senior Developer at TechCorp"}),a.jsx("p",{className:"activity-time",children:"15 minutes ago"})]})]}),a.jsxs("div",{className:"activity-item",children:[a.jsx("div",{className:"activity-icon",children:a.jsx(xi,{size:16})}),a.jsxs("div",{className:"activity-content",children:[a.jsx("p",{className:"activity-text",children:"Security alert: Multiple failed login attempts"}),a.jsx("p",{className:"activity-time",children:"1 hour ago"})]})]}),a.jsxs("div",{className:"activity-item",children:[a.jsx("div",{className:"activity-icon",children:a.jsx(or,{size:16})}),a.jsxs("div",{className:"activity-content",children:[a.jsx("p",{className:"activity-text",children:"Employer account approved: InnovateTech"}),a.jsx("p",{className:"activity-time",children:"2 hours ago"})]})]}),a.jsxs("div",{className:"activity-item",children:[a.jsx("div",{className:"activity-icon",children:a.jsx(wa,{size:16})}),a.jsxs("div",{className:"activity-content",children:[a.jsx("p",{className:"activity-text",children:"System backup completed successfully"}),a.jsx("p",{className:"activity-time",children:"3 hours ago"})]})]})]})]})}),a.jsx("style",{children:`
        .dashboard-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-header {
          margin-bottom: 2rem;
        }

        .dashboard-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dashboard-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform var(--transition-fast);
        }

        .stat-card:hover {
          transform: translateY(-4px);
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .stat-content h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0;
          color: var(--text-primary);
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }

        .dashboard-sections {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .dashboard-sections {
            grid-template-columns: 1fr;
          }
        }

        .dashboard-section {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
        }

        .dashboard-section.full-width {
          grid-column: 1 / -1;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .overview-grid {
            grid-template-columns: 1fr;
          }
        }

        .overview-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1rem;
          text-align: center;
        }

        .overview-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .overview-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .overview-change {
          font-size: 0.8rem;
          font-weight: 600;
        }

        .overview-change.positive {
          color: #10b981;
        }

        .overview-change.negative {
          color: #ef4444;
        }

        .action-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .action-grid {
            grid-template-columns: 1fr;
          }
        }

        .action-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .action-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .action-card svg:first-child {
          color: var(--color-primary);
        }

        .action-arrow {
          margin-left: auto;
          color: var(--text-muted);
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .activity-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .activity-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
        }

        .activity-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .activity-content {
          flex: 1;
        }

        .activity-text {
          color: var(--text-primary);
          font-size: 0.9rem;
          margin: 0 0 0.25rem 0;
        }

        .activity-time {
          color: var(--text-muted);
          font-size: 0.8rem;
          margin: 0;
        }
      `})]})},Rt=({userProfile:e,onSendMessage:t,initialMessage:r})=>{const[n,l]=w.useState(!1),[i,s]=w.useState(!1),[o,c]=w.useState(r?[{id:1,type:"bot",text:r}]:[{id:1,type:"bot",text:"Hi! I'm your AI Career Coach. I can help you with job applications, salary negotiations, skill development, and career planning. What would you like to know?"}]),[d,h]=w.useState(""),[m,g]=w.useState(!1),y=w.useRef(null),x=()=>{var u;(u=y.current)==null||u.scrollIntoView({behavior:"smooth"})};w.useEffect(()=>{x()},[o,m]);const v=async()=>{if(!d.trim())return;const u={id:o.length+1,type:"user",text:d};c(j=>[...j,u]);const p=d;if(h(""),g(!0),t)try{const j=await t(p,e),b={id:o.length+2,type:"bot",text:j||"I'm processing your request. Please try again in a moment."};c(S=>[...S,b])}catch{const b={id:o.length+2,type:"bot",text:"Sorry, I encountered an error. Please try again."};c(S=>[...S,b])}else g(!1)},k=u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),v())},f=["How do I negotiate my salary?","What skills should I learn next?","How can I improve my resume?","What should I expect in interviews?"];return a.jsxs(a.Fragment,{children:[!n&&a.jsxs("button",{className:"coach-toggle",onClick:()=>l(!0),children:[a.jsx(dh,{size:24}),a.jsx("span",{className:"toggle-label",children:"Career Coach"})]}),n&&a.jsxs("div",{className:`coach-window ${i?"minimized":""}`,children:[a.jsxs("div",{className:"coach-header",children:[a.jsxs("div",{className:"coach-info",children:[a.jsx("div",{className:"coach-avatar",children:a.jsx(nh,{size:20})}),a.jsxs("div",{children:[a.jsx("h4",{className:"coach-name",children:"AI Career Coach"}),a.jsx("span",{className:"coach-status",children:"Online"})]})]}),a.jsxs("div",{className:"coach-controls",children:[a.jsx("button",{className:"control-btn",onClick:()=>s(!i),title:i?"Expand":"Minimize",children:i?a.jsx(uh,{size:18}):a.jsx(fh,{size:18})}),a.jsx("button",{className:"control-btn close-btn",onClick:()=>l(!1),title:"Close",children:a.jsx(yd,{size:18})})]})]}),!i&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"coach-messages",children:[o.map(u=>a.jsx("div",{className:`message ${u.type}`,children:a.jsx("div",{className:"message-content",children:u.text})},u.id)),m&&a.jsx("div",{className:"message bot typing",children:a.jsxs("div",{className:"typing-indicator",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})}),a.jsx("div",{ref:y})]}),o.length<=2&&a.jsxs("div",{className:"suggested-questions",children:[a.jsx("p",{className:"suggested-label",children:"Try asking:"}),a.jsx("div",{className:"suggested-buttons",children:f.map((u,p)=>a.jsx("button",{className:"suggested-btn",onClick:()=>{h(u),v()},children:u},p))})]}),a.jsxs("div",{className:"coach-input",children:[a.jsx("textarea",{className:"message-input",placeholder:"Ask me anything about your career...",value:d,onChange:u=>h(u.target.value),onKeyPress:k,rows:1}),a.jsx("button",{className:"send-btn",onClick:v,disabled:!d.trim()||m,children:a.jsx(mh,{size:18})})]})]})]}),a.jsx("style",{children:`
        .coach-toggle {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border: none;
          border-radius: 9999px;
          padding: 1rem 1.5rem;
          color: white;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
          transition: all var(--transition-fast);
          z-index: 1000;
        }

        .coach-toggle:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(99, 102, 241, 0.5);
        }

        .toggle-label {
          font-size: 0.95rem;
        }

        .coach-window {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 400px;
          max-height: 600px;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .coach-window.minimized {
          max-height: auto;
        }

        @media (max-width: 480px) {
          .coach-window {
            width: calc(100% - 2rem);
            right: 1rem;
            bottom: 1rem;
            max-height: 80vh;
          }

          .coach-toggle {
            right: 1rem;
            bottom: 1rem;
          }
        }

        .coach-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--border-glass);
          background: rgba(99, 102, 241, 0.1);
        }

        .coach-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .coach-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .coach-name {
          font-size: 0.95rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
        }

        .coach-status {
          font-size: 0.75rem;
          color: #10b981;
        }

        .coach-controls {
          display: flex;
          gap: 0.5rem;
        }

        .control-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .close-btn:hover {
          background: rgba(244, 63, 94, 0.2);
          color: #f87171;
        }

        .coach-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 300px;
          max-height: 400px;
        }

        .message {
          display: flex;
          max-width: 85%;
        }

        .message.bot {
          align-self: flex-start;
        }

        .message.user {
          align-self: flex-end;
          margin-left: auto;
        }

        .message-content {
          padding: 0.875rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .message.bot .message-content {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
        }

        .message.user .message-content {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          color: white;
        }

        .typing-indicator {
          display: flex;
          gap: 0.25rem;
          padding: 0.875rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          width: fit-content;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-primary);
          animation: typing 1.4s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }

        .suggested-questions {
          padding: 0 1.25rem 1rem;
          border-top: 1px solid var(--border-glass);
        }

        .suggested-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .suggested-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .suggested-btn {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: var(--color-primary);
          padding: 0.625rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }

        .suggested-btn:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: var(--color-primary);
        }

        .coach-input {
          display: flex;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          border-top: 1px solid var(--border-glass);
          background: rgba(255, 255, 255, 0.02);
        }

        .message-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          resize: none;
          font-family: inherit;
          min-height: 44px;
          max-height: 120px;
        }

        .message-input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .message-input::placeholder {
          color: var(--text-muted);
        }

        .send-btn {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border: none;
          border-radius: var(--radius-md);
          padding: 0.75rem;
          color: white;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .send-btn:hover:not(:disabled) {
          transform: scale(1.05);
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `})]})};function Th(){return a.jsx(Ym,{children:a.jsx(Zm,{children:a.jsxs($m,{children:[a.jsx(Ie,{path:"/login",element:a.jsx(wh,{})}),a.jsx(Ie,{path:"/register",element:a.jsx(jh,{})}),a.jsx(Ie,{path:"/",element:a.jsx(Tt,{children:a.jsxs("div",{className:"app-container",children:[a.jsx(Mt,{}),a.jsx("main",{className:"main-content",children:a.jsx(kh,{})}),a.jsx(Rt,{userProfile:null,onSendMessage:async()=>"AI Coach is not configured yet."})]})})}),a.jsx(Ie,{path:"/create-job",element:a.jsx(Tt,{children:a.jsxs("div",{className:"app-container",children:[a.jsx(Mt,{}),a.jsx("main",{className:"main-content",children:a.jsx(bh,{})}),a.jsx(Rt,{userProfile:null,onSendMessage:async()=>"AI Coach is not configured yet."})]})})}),a.jsx(Ie,{path:"/view-jobs",element:a.jsx(Tt,{children:a.jsxs("div",{className:"app-container",children:[a.jsx(Mt,{}),a.jsx("main",{className:"main-content",children:a.jsx(Sh,{})}),a.jsx(Rt,{userProfile:null,onSendMessage:async()=>"AI Coach is not configured yet."})]})})}),a.jsx(Ie,{path:"/candidate-dashboard",element:a.jsx(Tt,{children:a.jsxs("div",{className:"app-container",children:[a.jsx(Mt,{}),a.jsx("main",{className:"main-content",children:a.jsx(Ph,{})}),a.jsx(Rt,{userProfile:null,onSendMessage:async()=>"AI Coach is not configured yet."})]})})}),a.jsx(Ie,{path:"/employer-dashboard",element:a.jsx(Tt,{children:a.jsxs("div",{className:"app-container",children:[a.jsx(Mt,{}),a.jsx("main",{className:"main-content",children:a.jsx(_h,{})}),a.jsx(Rt,{userProfile:null,onSendMessage:async()=>"AI Coach is not configured yet."})]})})}),a.jsx(Ie,{path:"/admin-dashboard",element:a.jsx(Tt,{children:a.jsxs("div",{className:"app-container",children:[a.jsx(Mt,{}),a.jsx("main",{className:"main-content",children:a.jsx(Lh,{})}),a.jsx(Rt,{userProfile:null,onSendMessage:async()=>"AI Coach is not configured yet."})]})})}),a.jsx(Ie,{path:"/profile",element:a.jsx(Tt,{children:a.jsxs("div",{className:"app-container",children:[a.jsx(Mt,{}),a.jsx("main",{className:"main-content",children:a.jsx(Nh,{})}),a.jsx(Rt,{userProfile:null,onSendMessage:async()=>"AI Coach is not configured yet."})]})})}),a.jsx(Ie,{path:"*",element:a.jsx(dd,{to:"/",replace:!0})})]})})})}ja.createRoot(document.getElementById("root")).render(a.jsx(Zo.StrictMode,{children:a.jsx(Th,{})}));
