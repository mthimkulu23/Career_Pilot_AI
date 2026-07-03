function Du(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const l in n)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(n,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>n[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=r(l);fetch(l.href,i)}})();function Fu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zo={exports:{}},Ra={},ec={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nn=Symbol.for("react.element"),Au=Symbol.for("react.portal"),Bu=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),Wu=Symbol.for("react.profiler"),Hu=Symbol.for("react.provider"),Ju=Symbol.for("react.context"),Yu=Symbol.for("react.forward_ref"),Qu=Symbol.for("react.suspense"),Ku=Symbol.for("react.memo"),Xu=Symbol.for("react.lazy"),Es=Symbol.iterator;function Gu(e){return e===null||typeof e!="object"?null:(e=Es&&e[Es]||e["@@iterator"],typeof e=="function"?e:null)}var tc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rc=Object.assign,nc={};function zr(e,t,r){this.props=e,this.context=t,this.refs=nc,this.updater=r||tc}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ac(){}ac.prototype=zr.prototype;function zi(e,t,r){this.props=e,this.context=t,this.refs=nc,this.updater=r||tc}var Ei=zi.prototype=new ac;Ei.constructor=zi;rc(Ei,zr.prototype);Ei.isPureReactComponent=!0;var Ps=Array.isArray,lc=Object.prototype.hasOwnProperty,Pi={current:null},ic={key:!0,ref:!0,__self:!0,__source:!0};function sc(e,t,r){var n,l={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)lc.call(t,n)&&!ic.hasOwnProperty(n)&&(l[n]=t[n]);var o=arguments.length-2;if(o===1)l.children=r;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];l.children=c}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)l[n]===void 0&&(l[n]=o[n]);return{$$typeof:Nn,type:e,key:i,ref:s,props:l,_owner:Pi.current}}function qu(e,t){return{$$typeof:Nn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _i(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nn}function Zu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var _s=/\/+/g;function tl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zu(""+e.key):t.toString(36)}function Xn(e,t,r,n,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Nn:case Au:s=!0}}if(s)return s=e,l=l(s),e=n===""?"."+tl(s,0):n,Ps(l)?(r="",e!=null&&(r=e.replace(_s,"$&/")+"/"),Xn(l,t,r,"",function(d){return d})):l!=null&&(_i(l)&&(l=qu(l,r+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(_s,"$&/")+"/")+e)),t.push(l)),1;if(s=0,n=n===""?".":n+":",Ps(e))for(var o=0;o<e.length;o++){i=e[o];var c=n+tl(i,o);s+=Xn(i,t,r,c,l)}else if(c=Gu(e),typeof c=="function")for(e=c.call(e),o=0;!(i=e.next()).done;)i=i.value,c=n+tl(i,o++),s+=Xn(i,t,r,c,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Tn(e,t,r){if(e==null)return e;var n=[],l=0;return Xn(e,n,"","",function(i){return t.call(r,i,l++)}),n}function em(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Gn={transition:null},tm={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Gn,ReactCurrentOwner:Pi};function oc(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Tn,forEach:function(e,t,r){Tn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Tn(e,function(){t++}),t},toArray:function(e){return Tn(e,function(t){return t})||[]},only:function(e){if(!_i(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=zr;R.Fragment=Bu;R.Profiler=Wu;R.PureComponent=zi;R.StrictMode=Vu;R.Suspense=Qu;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tm;R.act=oc;R.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=rc({},e.props),l=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Pi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)lc.call(t,c)&&!ic.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];n.children=o}return{$$typeof:Nn,type:e.type,key:l,ref:i,props:n,_owner:s}};R.createContext=function(e){return e={$$typeof:Ju,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hu,_context:e},e.Consumer=e};R.createElement=sc;R.createFactory=function(e){var t=sc.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Yu,render:e}};R.isValidElement=_i;R.lazy=function(e){return{$$typeof:Xu,_payload:{_status:-1,_result:e},_init:em}};R.memo=function(e,t){return{$$typeof:Ku,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Gn.transition;Gn.transition={};try{e()}finally{Gn.transition=t}};R.unstable_act=oc;R.useCallback=function(e,t){return fe.current.useCallback(e,t)};R.useContext=function(e){return fe.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};R.useEffect=function(e,t){return fe.current.useEffect(e,t)};R.useId=function(){return fe.current.useId()};R.useImperativeHandle=function(e,t,r){return fe.current.useImperativeHandle(e,t,r)};R.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return fe.current.useMemo(e,t)};R.useReducer=function(e,t,r){return fe.current.useReducer(e,t,r)};R.useRef=function(e){return fe.current.useRef(e)};R.useState=function(e){return fe.current.useState(e)};R.useSyncExternalStore=function(e,t,r){return fe.current.useSyncExternalStore(e,t,r)};R.useTransition=function(){return fe.current.useTransition()};R.version="18.3.1";ec.exports=R;var w=ec.exports;const cc=Fu(w),rm=Du({__proto__:null,default:cc},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm=w,am=Symbol.for("react.element"),lm=Symbol.for("react.fragment"),im=Object.prototype.hasOwnProperty,sm=nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,om={key:!0,ref:!0,__self:!0,__source:!0};function dc(e,t,r){var n,l={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)im.call(t,n)&&!om.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)l[n]===void 0&&(l[n]=t[n]);return{$$typeof:am,type:e,key:i,ref:s,props:l,_owner:sm.current}}Ra.Fragment=lm;Ra.jsx=dc;Ra.jsxs=dc;Zo.exports=Ra;var a=Zo.exports,El={},uc={exports:{}},ze={},mc={exports:{}},pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,L){var T=z.length;z.push(L);e:for(;0<T;){var Y=T-1>>>1,ee=z[Y];if(0<l(ee,L))z[Y]=L,z[T]=ee,T=Y;else break e}}function r(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var L=z[0],T=z.pop();if(T!==L){z[0]=T;e:for(var Y=0,ee=z.length,Ln=ee>>>1;Y<Ln;){var Rt=2*(Y+1)-1,el=z[Rt],It=Rt+1,Mn=z[It];if(0>l(el,T))It<ee&&0>l(Mn,el)?(z[Y]=Mn,z[It]=T,Y=It):(z[Y]=el,z[Rt]=T,Y=Rt);else if(It<ee&&0>l(Mn,T))z[Y]=Mn,z[It]=T,Y=It;else break e}}return L}function l(z,L){var T=z.sortIndex-L.sortIndex;return T!==0?T:z.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var c=[],d=[],m=1,p=null,g=3,j=!1,x=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var L=r(d);L!==null;){if(L.callback===null)n(d);else if(L.startTime<=z)n(d),L.sortIndex=L.expirationTime,t(c,L);else break;L=r(d)}}function y(z){if(v=!1,h(z),!x)if(r(c)!==null)x=!0,Ge(k);else{var L=r(d);L!==null&&ct(y,L.startTime-z)}}function k(z,L){x=!1,v&&(v=!1,f(P),P=-1),j=!0;var T=g;try{for(h(L),p=r(c);p!==null&&(!(p.expirationTime>L)||z&&!Z());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,g=p.priorityLevel;var ee=Y(p.expirationTime<=L);L=e.unstable_now(),typeof ee=="function"?p.callback=ee:p===r(c)&&n(c),h(L)}else n(c);p=r(c)}if(p!==null)var Ln=!0;else{var Rt=r(d);Rt!==null&&ct(y,Rt.startTime-L),Ln=!1}return Ln}finally{p=null,g=T,j=!1}}var S=!1,C=null,P=-1,O=5,_=-1;function Z(){return!(e.unstable_now()-_<O)}function $e(){if(C!==null){var z=e.unstable_now();_=z;var L=!0;try{L=C(!0,z)}finally{L?ge():(S=!1,C=null)}}else S=!1}var ge;if(typeof u=="function")ge=function(){u($e)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,ne=D.port2;D.port1.onmessage=$e,ge=function(){ne.postMessage(null)}}else ge=function(){b($e,0)};function Ge(z){C=z,S||(S=!0,ge())}function ct(z,L){P=b(function(){z(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){x||j||(x=!0,Ge(k))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var T=g;g=L;try{return z()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,L){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var T=g;g=z;try{return L()}finally{g=T}},e.unstable_scheduleCallback=function(z,L,T){var Y=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Y+T:Y):T=Y,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=T+ee,z={id:m++,callback:L,priorityLevel:z,startTime:T,expirationTime:ee,sortIndex:-1},T>Y?(z.sortIndex=T,t(d,z),r(c)===null&&z===r(d)&&(v?(f(P),P=-1):v=!0,ct(y,T-Y))):(z.sortIndex=ee,t(c,z),x||j||(x=!0,Ge(k))),z},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(z){var L=g;return function(){var T=g;g=L;try{return z.apply(this,arguments)}finally{g=T}}}})(pc);mc.exports=pc;var cm=mc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm=w,Ce=cm;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fc=new Set,nn={};function Xt(e,t){xr(e,t),xr(e+"Capture",t)}function xr(e,t){for(nn[e]=t,e=0;e<t.length;e++)fc.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pl=Object.prototype.hasOwnProperty,um=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ls={},Ms={};function mm(e){return Pl.call(Ms,e)?!0:Pl.call(Ls,e)?!1:um.test(e)?Ms[e]=!0:(Ls[e]=!0,!1)}function pm(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fm(e,t,r,n){if(t===null||typeof t>"u"||pm(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,r,n,l,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Li=/[\-:]([a-z])/g;function Mi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Li,Mi);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Li,Mi);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Li,Mi);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ti(e,t,r,n){var l=ie.hasOwnProperty(t)?ie[t]:null;(l!==null?l.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fm(t,r,l,n)&&(r=null),n||l===null?mm(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,n=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ot=dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rn=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),Ri=Symbol.for("react.strict_mode"),_l=Symbol.for("react.profiler"),hc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),Ii=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Ml=Symbol.for("react.suspense_list"),$i=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),vc=Symbol.for("react.offscreen"),Ts=Symbol.iterator;function Rr(e){return e===null||typeof e!="object"?null:(e=Ts&&e[Ts]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,rl;function Br(e){if(rl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var nl=!1;function al(e,t){if(!e||nl)return"";nl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=n.stack.split(`
`),s=l.length-1,o=i.length-1;1<=s&&0<=o&&l[s]!==i[o];)o--;for(;1<=s&&0<=o;s--,o--)if(l[s]!==i[o]){if(s!==1||o!==1)do if(s--,o--,0>o||l[s]!==i[o]){var c=`
`+l[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=o);break}}}finally{nl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Br(e):""}function hm(e){switch(e.tag){case 5:return Br(e.type);case 16:return Br("Lazy");case 13:return Br("Suspense");case 19:return Br("SuspenseList");case 0:case 2:case 15:return e=al(e.type,!1),e;case 11:return e=al(e.type.render,!1),e;case 1:return e=al(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case _l:return"Profiler";case Ri:return"StrictMode";case Ll:return"Suspense";case Ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gc:return(e.displayName||"Context")+".Consumer";case hc:return(e._context.displayName||"Context")+".Provider";case Ii:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $i:return t=e.displayName||null,t!==null?t:Tl(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return Tl(e(t))}catch{}}return null}function gm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(t);case 8:return t===Ri?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vm(e){var t=yc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function In(e){e._valueTracker||(e._valueTracker=vm(e))}function xc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=yc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rl(e,t){var r=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Rs(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=zt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wc(e,t){t=t.checked,t!=null&&Ti(e,"checked",t,!1)}function Il(e,t){wc(e,t);var r=zt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$l(e,t.type,r):t.hasOwnProperty("defaultValue")&&$l(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Is(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function $l(e,t,r){(t!=="number"||oa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Vr=Array.isArray;function mr(e,t,r,n){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&n&&(e[r].defaultSelected=!0)}else{for(r=""+zt(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $s(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(N(92));if(Vr(r)){if(1<r.length)throw Error(N(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:zt(r)}}function jc(e,t){var r=zt(t.value),n=zt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Os(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ul(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $n,kc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($n=$n||document.createElement("div"),$n.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$n.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function an(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ym=["Webkit","ms","Moz","O"];Object.keys(Jr).forEach(function(e){ym.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jr[t]=Jr[e]})});function Nc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Jr.hasOwnProperty(e)&&Jr[e]?(""+t).trim():t+"px"}function Sc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,l=Nc(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,l):e[r]=l}}var xm=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dl(e,t){if(t){if(xm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Al=null;function Oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,pr=null,fr=null;function Us(e){if(e=zn(e)){if(typeof Bl!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Da(t),Bl(e.stateNode,e.type,t))}}function Cc(e){pr?fr?fr.push(e):fr=[e]:pr=e}function zc(){if(pr){var e=pr,t=fr;if(fr=pr=null,Us(e),t)for(e=0;e<t.length;e++)Us(t[e])}}function Ec(e,t){return e(t)}function Pc(){}var ll=!1;function _c(e,t,r){if(ll)return e(t,r);ll=!0;try{return Ec(e,t,r)}finally{ll=!1,(pr!==null||fr!==null)&&(Pc(),zc())}}function ln(e,t){var r=e.stateNode;if(r===null)return null;var n=Da(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,t,typeof r));return r}var Vl=!1;if(at)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Vl=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Vl=!1}function wm(e,t,r,n,l,i,s,o,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(m){this.onError(m)}}var Yr=!1,ca=null,da=!1,Wl=null,jm={onError:function(e){Yr=!0,ca=e}};function bm(e,t,r,n,l,i,s,o,c){Yr=!1,ca=null,wm.apply(jm,arguments)}function km(e,t,r,n,l,i,s,o,c){if(bm.apply(this,arguments),Yr){if(Yr){var d=ca;Yr=!1,ca=null}else throw Error(N(198));da||(da=!0,Wl=d)}}function Gt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ds(e){if(Gt(e)!==e)throw Error(N(188))}function Nm(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var r=e,n=t;;){var l=r.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){r=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===r)return Ds(l),e;if(i===n)return Ds(l),t;i=i.sibling}throw Error(N(188))}if(r.return!==n.return)r=l,n=i;else{for(var s=!1,o=l.child;o;){if(o===r){s=!0,r=l,n=i;break}if(o===n){s=!0,n=l,r=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===r){s=!0,r=i,n=l;break}if(o===n){s=!0,n=i,r=l;break}o=o.sibling}if(!s)throw Error(N(189))}}if(r.alternate!==n)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:t}function Mc(e){return e=Nm(e),e!==null?Tc(e):null}function Tc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tc(e);if(t!==null)return t;e=e.sibling}return null}var Rc=Ce.unstable_scheduleCallback,Fs=Ce.unstable_cancelCallback,Sm=Ce.unstable_shouldYield,Cm=Ce.unstable_requestPaint,Q=Ce.unstable_now,zm=Ce.unstable_getCurrentPriorityLevel,Ui=Ce.unstable_ImmediatePriority,Ic=Ce.unstable_UserBlockingPriority,ua=Ce.unstable_NormalPriority,Em=Ce.unstable_LowPriority,$c=Ce.unstable_IdlePriority,Ia=null,Ke=null;function Pm(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Ia,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Mm,_m=Math.log,Lm=Math.LN2;function Mm(e){return e>>>=0,e===0?32:31-(_m(e)/Lm|0)|0}var On=64,Un=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ma(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,l=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var o=s&~l;o!==0?n=Wr(o):(i&=s,i!==0&&(n=Wr(i)))}else s=r&~l,s!==0?n=Wr(s):i!==0&&(n=Wr(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&l)&&(l=n&-n,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ve(t),l=1<<r,n|=e[r],t&=~l;return n}function Tm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rm(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Ve(i),o=1<<s,c=l[s];c===-1?(!(o&r)||o&n)&&(l[s]=Tm(o,t)):c<=t&&(e.expiredLanes|=o),i&=~o}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oc(){var e=On;return On<<=1,!(On&4194240)&&(On=64),e}function il(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Sn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=r}function Im(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Ve(r),i=1<<l;t[l]=0,n[l]=-1,e[l]=-1,r&=~i}}function Di(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ve(r),l=1<<n;l&t|e[n]&t&&(e[n]|=t),r&=~l}}var $=0;function Uc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dc,Fi,Fc,Ac,Bc,Jl=!1,Dn=[],yt=null,xt=null,wt=null,sn=new Map,on=new Map,pt=[],$m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function As(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":sn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":on.delete(t.pointerId)}}function $r(e,t,r,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=zn(t),t!==null&&Fi(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Om(e,t,r,n,l){switch(t){case"focusin":return yt=$r(yt,e,t,r,n,l),!0;case"dragenter":return xt=$r(xt,e,t,r,n,l),!0;case"mouseover":return wt=$r(wt,e,t,r,n,l),!0;case"pointerover":var i=l.pointerId;return sn.set(i,$r(sn.get(i)||null,e,t,r,n,l)),!0;case"gotpointercapture":return i=l.pointerId,on.set(i,$r(on.get(i)||null,e,t,r,n,l)),!0}return!1}function Vc(e){var t=Ft(e.target);if(t!==null){var r=Gt(t);if(r!==null){if(t=r.tag,t===13){if(t=Lc(r),t!==null){e.blockedOn=t,Bc(e.priority,function(){Fc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Al=n,r.target.dispatchEvent(n),Al=null}else return t=zn(r),t!==null&&Fi(t),e.blockedOn=r,!1;t.shift()}return!0}function Bs(e,t,r){qn(e)&&r.delete(t)}function Um(){Jl=!1,yt!==null&&qn(yt)&&(yt=null),xt!==null&&qn(xt)&&(xt=null),wt!==null&&qn(wt)&&(wt=null),sn.forEach(Bs),on.forEach(Bs)}function Or(e,t){e.blockedOn===t&&(e.blockedOn=null,Jl||(Jl=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Um)))}function cn(e){function t(l){return Or(l,e)}if(0<Dn.length){Or(Dn[0],e);for(var r=1;r<Dn.length;r++){var n=Dn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(yt!==null&&Or(yt,e),xt!==null&&Or(xt,e),wt!==null&&Or(wt,e),sn.forEach(t),on.forEach(t),r=0;r<pt.length;r++)n=pt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<pt.length&&(r=pt[0],r.blockedOn===null);)Vc(r),r.blockedOn===null&&pt.shift()}var hr=ot.ReactCurrentBatchConfig,pa=!0;function Dm(e,t,r,n){var l=$,i=hr.transition;hr.transition=null;try{$=1,Ai(e,t,r,n)}finally{$=l,hr.transition=i}}function Fm(e,t,r,n){var l=$,i=hr.transition;hr.transition=null;try{$=4,Ai(e,t,r,n)}finally{$=l,hr.transition=i}}function Ai(e,t,r,n){if(pa){var l=Yl(e,t,r,n);if(l===null)gl(e,t,n,fa,r),As(e,n);else if(Om(l,e,t,r,n))n.stopPropagation();else if(As(e,n),t&4&&-1<$m.indexOf(e)){for(;l!==null;){var i=zn(l);if(i!==null&&Dc(i),i=Yl(e,t,r,n),i===null&&gl(e,t,n,fa,r),i===l)break;l=i}l!==null&&n.stopPropagation()}else gl(e,t,n,null,r)}}var fa=null;function Yl(e,t,r,n){if(fa=null,e=Oi(n),e=Ft(e),e!==null)if(t=Gt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Lc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fa=e,null}function Wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zm()){case Ui:return 1;case Ic:return 4;case ua:case Em:return 16;case $c:return 536870912;default:return 16}default:return 16}}var ht=null,Bi=null,Zn=null;function Hc(){if(Zn)return Zn;var e,t=Bi,r=t.length,n,l="value"in ht?ht.value:ht.textContent,i=l.length;for(e=0;e<r&&t[e]===l[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===l[i-n];n++);return Zn=l.slice(e,1<n?1-n:void 0)}function ea(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fn(){return!0}function Vs(){return!1}function Ee(e){function t(r,n,l,i,s){this._reactName=r,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Fn:Vs,this.isPropagationStopped=Vs,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Fn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Fn)},persist:function(){},isPersistent:Fn}),t}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=Ee(Er),Cn=H({},Er,{view:0,detail:0}),Am=Ee(Cn),sl,ol,Ur,$a=H({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(sl=e.screenX-Ur.screenX,ol=e.screenY-Ur.screenY):ol=sl=0,Ur=e),sl)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),Ws=Ee($a),Bm=H({},$a,{dataTransfer:0}),Vm=Ee(Bm),Wm=H({},Cn,{relatedTarget:0}),cl=Ee(Wm),Hm=H({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),Jm=Ee(Hm),Ym=H({},Er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qm=Ee(Ym),Km=H({},Er,{data:0}),Hs=Ee(Km),Xm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qm[e])?!!t[e]:!1}function Wi(){return Zm}var ep=H({},Cn,{key:function(e){if(e.key){var t=Xm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ea(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wi,charCode:function(e){return e.type==="keypress"?ea(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ea(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tp=Ee(ep),rp=H({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Js=Ee(rp),np=H({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wi}),ap=Ee(np),lp=H({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),ip=Ee(lp),sp=H({},$a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),op=Ee(sp),cp=[9,13,27,32],Hi=at&&"CompositionEvent"in window,Qr=null;at&&"documentMode"in document&&(Qr=document.documentMode);var dp=at&&"TextEvent"in window&&!Qr,Jc=at&&(!Hi||Qr&&8<Qr&&11>=Qr),Ys=" ",Qs=!1;function Yc(e,t){switch(e){case"keyup":return cp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function up(e,t){switch(e){case"compositionend":return Qc(t);case"keypress":return t.which!==32?null:(Qs=!0,Ys);case"textInput":return e=t.data,e===Ys&&Qs?null:e;default:return null}}function mp(e,t){if(rr)return e==="compositionend"||!Hi&&Yc(e,t)?(e=Hc(),Zn=Bi=ht=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jc&&t.locale!=="ko"?null:t.data;default:return null}}var pp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pp[e.type]:t==="textarea"}function Kc(e,t,r,n){Cc(n),t=ha(t,"onChange"),0<t.length&&(r=new Vi("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Kr=null,dn=null;function fp(e){id(e,0)}function Oa(e){var t=lr(e);if(xc(t))return e}function hp(e,t){if(e==="change")return t}var Xc=!1;if(at){var dl;if(at){var ul="oninput"in document;if(!ul){var Xs=document.createElement("div");Xs.setAttribute("oninput","return;"),ul=typeof Xs.oninput=="function"}dl=ul}else dl=!1;Xc=dl&&(!document.documentMode||9<document.documentMode)}function Gs(){Kr&&(Kr.detachEvent("onpropertychange",Gc),dn=Kr=null)}function Gc(e){if(e.propertyName==="value"&&Oa(dn)){var t=[];Kc(t,dn,e,Oi(e)),_c(fp,t)}}function gp(e,t,r){e==="focusin"?(Gs(),Kr=t,dn=r,Kr.attachEvent("onpropertychange",Gc)):e==="focusout"&&Gs()}function vp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oa(dn)}function yp(e,t){if(e==="click")return Oa(t)}function xp(e,t){if(e==="input"||e==="change")return Oa(t)}function wp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:wp;function un(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var l=r[n];if(!Pl.call(t,l)||!He(e[l],t[l]))return!1}return!0}function qs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zs(e,t){var r=qs(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=qs(r)}}function qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zc(){for(var e=window,t=oa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=oa(e.document)}return t}function Ji(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jp(e){var t=Zc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&qc(r.ownerDocument.documentElement,r)){if(n!==null&&Ji(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,i=Math.min(n.start,l);n=n.end===void 0?i:Math.min(n.end,l),!e.extend&&i>n&&(l=n,n=i,i=l),l=Zs(r,i);var s=Zs(r,n);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bp=at&&"documentMode"in document&&11>=document.documentMode,nr=null,Ql=null,Xr=null,Kl=!1;function eo(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Kl||nr==null||nr!==oa(n)||(n=nr,"selectionStart"in n&&Ji(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Xr&&un(Xr,n)||(Xr=n,n=ha(Ql,"onSelect"),0<n.length&&(t=new Vi("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=nr)))}function An(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ar={animationend:An("Animation","AnimationEnd"),animationiteration:An("Animation","AnimationIteration"),animationstart:An("Animation","AnimationStart"),transitionend:An("Transition","TransitionEnd")},ml={},ed={};at&&(ed=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function Ua(e){if(ml[e])return ml[e];if(!ar[e])return e;var t=ar[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in ed)return ml[e]=t[r];return e}var td=Ua("animationend"),rd=Ua("animationiteration"),nd=Ua("animationstart"),ad=Ua("transitionend"),ld=new Map,to="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){ld.set(e,t),Xt(t,[e])}for(var pl=0;pl<to.length;pl++){var fl=to[pl],kp=fl.toLowerCase(),Np=fl[0].toUpperCase()+fl.slice(1);Pt(kp,"on"+Np)}Pt(td,"onAnimationEnd");Pt(rd,"onAnimationIteration");Pt(nd,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(ad,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function ro(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,km(n,t,void 0,e),e.currentTarget=null}function id(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==i&&l.isPropagationStopped())break e;ro(l,o,d),i=c}else for(s=0;s<n.length;s++){if(o=n[s],c=o.instance,d=o.currentTarget,o=o.listener,c!==i&&l.isPropagationStopped())break e;ro(l,o,d),i=c}}}if(da)throw e=Wl,da=!1,Wl=null,e}function F(e,t){var r=t[ei];r===void 0&&(r=t[ei]=new Set);var n=e+"__bubble";r.has(n)||(sd(t,e,2,!1),r.add(n))}function hl(e,t,r){var n=0;t&&(n|=4),sd(r,e,n,t)}var Bn="_reactListening"+Math.random().toString(36).slice(2);function mn(e){if(!e[Bn]){e[Bn]=!0,fc.forEach(function(r){r!=="selectionchange"&&(Sp.has(r)||hl(r,!1,e),hl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bn]||(t[Bn]=!0,hl("selectionchange",!1,t))}}function sd(e,t,r,n){switch(Wc(t)){case 1:var l=Dm;break;case 4:l=Fm;break;default:l=Ai}r=l.bind(null,t,r,e),l=void 0,!Vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function gl(e,t,r,n,l){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;s=s.return}for(;o!==null;){if(s=Ft(o),s===null)return;if(c=s.tag,c===5||c===6){n=i=s;continue e}o=o.parentNode}}n=n.return}_c(function(){var d=i,m=Oi(r),p=[];e:{var g=ld.get(e);if(g!==void 0){var j=Vi,x=e;switch(e){case"keypress":if(ea(r)===0)break e;case"keydown":case"keyup":j=tp;break;case"focusin":x="focus",j=cl;break;case"focusout":x="blur",j=cl;break;case"beforeblur":case"afterblur":j=cl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=ap;break;case td:case rd:case nd:j=Jm;break;case ad:j=ip;break;case"scroll":j=Am;break;case"wheel":j=op;break;case"copy":case"cut":case"paste":j=Qm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Js}var v=(t&4)!==0,b=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var u=d,h;u!==null;){h=u;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,f!==null&&(y=ln(u,f),y!=null&&v.push(pn(u,y,h)))),b)break;u=u.return}0<v.length&&(g=new j(g,x,null,r,m),p.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",g&&r!==Al&&(x=r.relatedTarget||r.fromElement)&&(Ft(x)||x[lt]))break e;if((j||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,j?(x=r.relatedTarget||r.toElement,j=d,x=x?Ft(x):null,x!==null&&(b=Gt(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(j=null,x=d),j!==x)){if(v=Ws,y="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=Js,y="onPointerLeave",f="onPointerEnter",u="pointer"),b=j==null?g:lr(j),h=x==null?g:lr(x),g=new v(y,u+"leave",j,r,m),g.target=b,g.relatedTarget=h,y=null,Ft(m)===d&&(v=new v(f,u+"enter",x,r,m),v.target=h,v.relatedTarget=b,y=v),b=y,j&&x)t:{for(v=j,f=x,u=0,h=v;h;h=qt(h))u++;for(h=0,y=f;y;y=qt(y))h++;for(;0<u-h;)v=qt(v),u--;for(;0<h-u;)f=qt(f),h--;for(;u--;){if(v===f||f!==null&&v===f.alternate)break t;v=qt(v),f=qt(f)}v=null}else v=null;j!==null&&no(p,g,j,v,!1),x!==null&&b!==null&&no(p,b,x,v,!0)}}e:{if(g=d?lr(d):window,j=g.nodeName&&g.nodeName.toLowerCase(),j==="select"||j==="input"&&g.type==="file")var k=hp;else if(Ks(g))if(Xc)k=xp;else{k=vp;var S=gp}else(j=g.nodeName)&&j.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=yp);if(k&&(k=k(e,d))){Kc(p,k,r,m);break e}S&&S(e,g,d),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&$l(g,"number",g.value)}switch(S=d?lr(d):window,e){case"focusin":(Ks(S)||S.contentEditable==="true")&&(nr=S,Ql=d,Xr=null);break;case"focusout":Xr=Ql=nr=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,eo(p,r,m);break;case"selectionchange":if(bp)break;case"keydown":case"keyup":eo(p,r,m)}var C;if(Hi)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else rr?Yc(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(Jc&&r.locale!=="ko"&&(rr||P!=="onCompositionStart"?P==="onCompositionEnd"&&rr&&(C=Hc()):(ht=m,Bi="value"in ht?ht.value:ht.textContent,rr=!0)),S=ha(d,P),0<S.length&&(P=new Hs(P,e,null,r,m),p.push({event:P,listeners:S}),C?P.data=C:(C=Qc(r),C!==null&&(P.data=C)))),(C=dp?up(e,r):mp(e,r))&&(d=ha(d,"onBeforeInput"),0<d.length&&(m=new Hs("onBeforeInput","beforeinput",null,r,m),p.push({event:m,listeners:d}),m.data=C))}id(p,t)})}function pn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ha(e,t){for(var r=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=ln(e,r),i!=null&&n.unshift(pn(e,i,l)),i=ln(e,t),i!=null&&n.push(pn(e,i,l))),e=e.return}return n}function qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function no(e,t,r,n,l){for(var i=t._reactName,s=[];r!==null&&r!==n;){var o=r,c=o.alternate,d=o.stateNode;if(c!==null&&c===n)break;o.tag===5&&d!==null&&(o=d,l?(c=ln(r,i),c!=null&&s.unshift(pn(r,c,o))):l||(c=ln(r,i),c!=null&&s.push(pn(r,c,o)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var Cp=/\r\n?/g,zp=/\u0000|\uFFFD/g;function ao(e){return(typeof e=="string"?e:""+e).replace(Cp,`
`).replace(zp,"")}function Vn(e,t,r){if(t=ao(t),ao(e)!==t&&r)throw Error(N(425))}function ga(){}var Xl=null,Gl=null;function ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,Ep=typeof clearTimeout=="function"?clearTimeout:void 0,lo=typeof Promise=="function"?Promise:void 0,Pp=typeof queueMicrotask=="function"?queueMicrotask:typeof lo<"u"?function(e){return lo.resolve(null).then(e).catch(_p)}:Zl;function _p(e){setTimeout(function(){throw e})}function vl(e,t){var r=t,n=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(n===0){e.removeChild(l),cn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=l}while(r);cn(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function io(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Pr,fn="__reactProps$"+Pr,lt="__reactContainer$"+Pr,ei="__reactEvents$"+Pr,Lp="__reactListeners$"+Pr,Mp="__reactHandles$"+Pr;function Ft(e){var t=e[Qe];if(t)return t;for(var r=e.parentNode;r;){if(t=r[lt]||r[Qe]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=io(e);e!==null;){if(r=e[Qe])return r;e=io(e)}return t}e=r,r=e.parentNode}return null}function zn(e){return e=e[Qe]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Da(e){return e[fn]||null}var ti=[],ir=-1;function _t(e){return{current:e}}function A(e){0>ir||(e.current=ti[ir],ti[ir]=null,ir--)}function U(e,t){ir++,ti[ir]=e.current,e.current=t}var Et={},ue=_t(Et),xe=_t(!1),Ht=Et;function wr(e,t){var r=e.type.contextTypes;if(!r)return Et;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in r)l[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function we(e){return e=e.childContextTypes,e!=null}function va(){A(xe),A(ue)}function so(e,t,r){if(ue.current!==Et)throw Error(N(168));U(ue,t),U(xe,r)}function od(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var l in n)if(!(l in t))throw Error(N(108,gm(e)||"Unknown",l));return H({},r,n)}function ya(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Et,Ht=ue.current,U(ue,e),U(xe,xe.current),!0}function oo(e,t,r){var n=e.stateNode;if(!n)throw Error(N(169));r?(e=od(e,t,Ht),n.__reactInternalMemoizedMergedChildContext=e,A(xe),A(ue),U(ue,e)):A(xe),U(xe,r)}var Ze=null,Fa=!1,yl=!1;function cd(e){Ze===null?Ze=[e]:Ze.push(e)}function Tp(e){Fa=!0,cd(e)}function Lt(){if(!yl&&Ze!==null){yl=!0;var e=0,t=$;try{var r=Ze;for($=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ze=null,Fa=!1}catch(l){throw Ze!==null&&(Ze=Ze.slice(e+1)),Rc(Ui,Lt),l}finally{$=t,yl=!1}}return null}var sr=[],or=0,xa=null,wa=0,_e=[],Le=0,Jt=null,tt=1,rt="";function Ut(e,t){sr[or++]=wa,sr[or++]=xa,xa=e,wa=t}function dd(e,t,r){_e[Le++]=tt,_e[Le++]=rt,_e[Le++]=Jt,Jt=e;var n=tt;e=rt;var l=32-Ve(n)-1;n&=~(1<<l),r+=1;var i=32-Ve(t)+l;if(30<i){var s=l-l%5;i=(n&(1<<s)-1).toString(32),n>>=s,l-=s,tt=1<<32-Ve(t)+l|r<<l|n,rt=i+e}else tt=1<<i|r<<l|n,rt=e}function Yi(e){e.return!==null&&(Ut(e,1),dd(e,1,0))}function Qi(e){for(;e===xa;)xa=sr[--or],sr[or]=null,wa=sr[--or],sr[or]=null;for(;e===Jt;)Jt=_e[--Le],_e[Le]=null,rt=_e[--Le],_e[Le]=null,tt=_e[--Le],_e[Le]=null}var Se=null,Ne=null,B=!1,Ae=null;function ud(e,t){var r=Me(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function co(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,Ne=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Jt!==null?{id:tt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Me(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Se=e,Ne=null,!0):!1;default:return!1}}function ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ni(e){if(B){var t=Ne;if(t){var r=t;if(!co(e,t)){if(ri(e))throw Error(N(418));t=jt(r.nextSibling);var n=Se;t&&co(e,t)?ud(n,r):(e.flags=e.flags&-4097|2,B=!1,Se=e)}}else{if(ri(e))throw Error(N(418));e.flags=e.flags&-4097|2,B=!1,Se=e}}}function uo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Wn(e){if(e!==Se)return!1;if(!B)return uo(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ql(e.type,e.memoizedProps)),t&&(t=Ne)){if(ri(e))throw md(),Error(N(418));for(;t;)ud(e,t),t=jt(t.nextSibling)}if(uo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ne=jt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Se?jt(e.stateNode.nextSibling):null;return!0}function md(){for(var e=Ne;e;)e=jt(e.nextSibling)}function jr(){Ne=Se=null,B=!1}function Ki(e){Ae===null?Ae=[e]:Ae.push(e)}var Rp=ot.ReactCurrentBatchConfig;function Dr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var n=r.stateNode}if(!n)throw Error(N(147,e));var l=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var o=l.refs;s===null?delete o[i]:o[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function Hn(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mo(e){var t=e._init;return t(e._payload)}function pd(e){function t(f,u){if(e){var h=f.deletions;h===null?(f.deletions=[u],f.flags|=16):h.push(u)}}function r(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function n(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=St(f,u),f.index=0,f.sibling=null,f}function i(f,u,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<u?(f.flags|=2,u):h):(f.flags|=2,u)):(f.flags|=1048576,u)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,u,h,y){return u===null||u.tag!==6?(u=Sl(h,f.mode,y),u.return=f,u):(u=l(u,h),u.return=f,u)}function c(f,u,h,y){var k=h.type;return k===tr?m(f,u,h.props.children,y,h.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ut&&mo(k)===u.type)?(y=l(u,h.props),y.ref=Dr(f,u,h),y.return=f,y):(y=sa(h.type,h.key,h.props,null,f.mode,y),y.ref=Dr(f,u,h),y.return=f,y)}function d(f,u,h,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=Cl(h,f.mode,y),u.return=f,u):(u=l(u,h.children||[]),u.return=f,u)}function m(f,u,h,y,k){return u===null||u.tag!==7?(u=Wt(h,f.mode,y,k),u.return=f,u):(u=l(u,h),u.return=f,u)}function p(f,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Sl(""+u,f.mode,h),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Rn:return h=sa(u.type,u.key,u.props,null,f.mode,h),h.ref=Dr(f,null,u),h.return=f,h;case er:return u=Cl(u,f.mode,h),u.return=f,u;case ut:var y=u._init;return p(f,y(u._payload),h)}if(Vr(u)||Rr(u))return u=Wt(u,f.mode,h,null),u.return=f,u;Hn(f,u)}return null}function g(f,u,h,y){var k=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:o(f,u,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Rn:return h.key===k?c(f,u,h,y):null;case er:return h.key===k?d(f,u,h,y):null;case ut:return k=h._init,g(f,u,k(h._payload),y)}if(Vr(h)||Rr(h))return k!==null?null:m(f,u,h,y,null);Hn(f,h)}return null}function j(f,u,h,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(h)||null,o(u,f,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Rn:return f=f.get(y.key===null?h:y.key)||null,c(u,f,y,k);case er:return f=f.get(y.key===null?h:y.key)||null,d(u,f,y,k);case ut:var S=y._init;return j(f,u,h,S(y._payload),k)}if(Vr(y)||Rr(y))return f=f.get(h)||null,m(u,f,y,k,null);Hn(u,y)}return null}function x(f,u,h,y){for(var k=null,S=null,C=u,P=u=0,O=null;C!==null&&P<h.length;P++){C.index>P?(O=C,C=null):O=C.sibling;var _=g(f,C,h[P],y);if(_===null){C===null&&(C=O);break}e&&C&&_.alternate===null&&t(f,C),u=i(_,u,P),S===null?k=_:S.sibling=_,S=_,C=O}if(P===h.length)return r(f,C),B&&Ut(f,P),k;if(C===null){for(;P<h.length;P++)C=p(f,h[P],y),C!==null&&(u=i(C,u,P),S===null?k=C:S.sibling=C,S=C);return B&&Ut(f,P),k}for(C=n(f,C);P<h.length;P++)O=j(C,f,P,h[P],y),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?P:O.key),u=i(O,u,P),S===null?k=O:S.sibling=O,S=O);return e&&C.forEach(function(Z){return t(f,Z)}),B&&Ut(f,P),k}function v(f,u,h,y){var k=Rr(h);if(typeof k!="function")throw Error(N(150));if(h=k.call(h),h==null)throw Error(N(151));for(var S=k=null,C=u,P=u=0,O=null,_=h.next();C!==null&&!_.done;P++,_=h.next()){C.index>P?(O=C,C=null):O=C.sibling;var Z=g(f,C,_.value,y);if(Z===null){C===null&&(C=O);break}e&&C&&Z.alternate===null&&t(f,C),u=i(Z,u,P),S===null?k=Z:S.sibling=Z,S=Z,C=O}if(_.done)return r(f,C),B&&Ut(f,P),k;if(C===null){for(;!_.done;P++,_=h.next())_=p(f,_.value,y),_!==null&&(u=i(_,u,P),S===null?k=_:S.sibling=_,S=_);return B&&Ut(f,P),k}for(C=n(f,C);!_.done;P++,_=h.next())_=j(C,f,P,_.value,y),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?P:_.key),u=i(_,u,P),S===null?k=_:S.sibling=_,S=_);return e&&C.forEach(function($e){return t(f,$e)}),B&&Ut(f,P),k}function b(f,u,h,y){if(typeof h=="object"&&h!==null&&h.type===tr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Rn:e:{for(var k=h.key,S=u;S!==null;){if(S.key===k){if(k=h.type,k===tr){if(S.tag===7){r(f,S.sibling),u=l(S,h.props.children),u.return=f,f=u;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ut&&mo(k)===S.type){r(f,S.sibling),u=l(S,h.props),u.ref=Dr(f,S,h),u.return=f,f=u;break e}r(f,S);break}else t(f,S);S=S.sibling}h.type===tr?(u=Wt(h.props.children,f.mode,y,h.key),u.return=f,f=u):(y=sa(h.type,h.key,h.props,null,f.mode,y),y.ref=Dr(f,u,h),y.return=f,f=y)}return s(f);case er:e:{for(S=h.key;u!==null;){if(u.key===S)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){r(f,u.sibling),u=l(u,h.children||[]),u.return=f,f=u;break e}else{r(f,u);break}else t(f,u);u=u.sibling}u=Cl(h,f.mode,y),u.return=f,f=u}return s(f);case ut:return S=h._init,b(f,u,S(h._payload),y)}if(Vr(h))return x(f,u,h,y);if(Rr(h))return v(f,u,h,y);Hn(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(r(f,u.sibling),u=l(u,h),u.return=f,f=u):(r(f,u),u=Sl(h,f.mode,y),u.return=f,f=u),s(f)):r(f,u)}return b}var br=pd(!0),fd=pd(!1),ja=_t(null),ba=null,cr=null,Xi=null;function Gi(){Xi=cr=ba=null}function qi(e){var t=ja.current;A(ja),e._currentValue=t}function ai(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function gr(e,t){ba=e,Xi=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(Xi!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(ba===null)throw Error(N(308));cr=e,ba.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var At=null;function Zi(e){At===null?At=[e]:At.push(e)}function hd(e,t,r,n){var l=t.interleaved;return l===null?(r.next=r,Zi(t)):(r.next=l.next,l.next=r),t.interleaved=r,it(e,n)}function it(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var mt=!1;function es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,I&2){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,it(e,r)}return l=n.interleaved,l===null?(t.next=t,Zi(n)):(t.next=l.next,l.next=t),n.interleaved=t,it(e,r)}function ta(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Di(e,r)}}function po(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var l=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?l=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?l=i=t:i=i.next=t}else l=i=t;r={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ka(e,t,r,n){var l=e.updateQueue;mt=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var c=o,d=c.next;c.next=null,s===null?i=d:s.next=d,s=c;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==s&&(o===null?m.firstBaseUpdate=d:o.next=d,m.lastBaseUpdate=c))}if(i!==null){var p=l.baseState;s=0,m=d=c=null,o=i;do{var g=o.lane,j=o.eventTime;if((n&g)===g){m!==null&&(m=m.next={eventTime:j,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,v=o;switch(g=t,j=r,v.tag){case 1:if(x=v.payload,typeof x=="function"){p=x.call(j,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(j,p,g):x,g==null)break e;p=H({},p,g);break e;case 2:mt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[o]:g.push(o))}else j={eventTime:j,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(d=m=j,c=p):m=m.next=j,s|=g;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;g=o,o=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(m===null&&(c=p),l.baseState=c,l.firstBaseUpdate=d,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Qt|=s,e.lanes=s,e.memoizedState=p}}function fo(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],l=n.callback;if(l!==null){if(n.callback=null,n=r,typeof l!="function")throw Error(N(191,l));l.call(n)}}}var En={},Xe=_t(En),hn=_t(En),gn=_t(En);function Bt(e){if(e===En)throw Error(N(174));return e}function ts(e,t){switch(U(gn,t),U(hn,e),U(Xe,En),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ul(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ul(t,e)}A(Xe),U(Xe,t)}function kr(){A(Xe),A(hn),A(gn)}function vd(e){Bt(gn.current);var t=Bt(Xe.current),r=Ul(t,e.type);t!==r&&(U(hn,e),U(Xe,r))}function rs(e){hn.current===e&&(A(Xe),A(hn))}var V=_t(0);function Na(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xl=[];function ns(){for(var e=0;e<xl.length;e++)xl[e]._workInProgressVersionPrimary=null;xl.length=0}var ra=ot.ReactCurrentDispatcher,wl=ot.ReactCurrentBatchConfig,Yt=0,W=null,G=null,te=null,Sa=!1,Gr=!1,vn=0,Ip=0;function se(){throw Error(N(321))}function as(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!He(e[r],t[r]))return!1;return!0}function ls(e,t,r,n,l,i){if(Yt=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ra.current=e===null||e.memoizedState===null?Dp:Fp,e=r(n,l),Gr){i=0;do{if(Gr=!1,vn=0,25<=i)throw Error(N(301));i+=1,te=G=null,t.updateQueue=null,ra.current=Ap,e=r(n,l)}while(Gr)}if(ra.current=Ca,t=G!==null&&G.next!==null,Yt=0,te=G=W=null,Sa=!1,t)throw Error(N(300));return e}function is(){var e=vn!==0;return vn=0,e}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?W.memoizedState=te=e:te=te.next=e,te}function Ie(){if(G===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=te===null?W.memoizedState:te.next;if(t!==null)te=t,G=e;else{if(e===null)throw Error(N(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},te===null?W.memoizedState=te=e:te=te.next=e}return te}function yn(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=Ie(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=G,l=n.baseQueue,i=r.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}n.baseQueue=l=i,r.pending=null}if(l!==null){i=l.next,n=n.baseState;var o=s=null,c=null,d=i;do{var m=d.lane;if((Yt&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=p,s=n):c=c.next=p,W.lanes|=m,Qt|=m}d=d.next}while(d!==null&&d!==i);c===null?s=n:c.next=o,He(n,t.memoizedState)||(ye=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){l=e;do i=l.lane,W.lanes|=i,Qt|=i,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function bl(e){var t=Ie(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=r.dispatch,l=r.pending,i=t.memoizedState;if(l!==null){r.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);He(i,t.memoizedState)||(ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function yd(){}function xd(e,t){var r=W,n=Ie(),l=t(),i=!He(n.memoizedState,l);if(i&&(n.memoizedState=l,ye=!0),n=n.queue,ss(bd.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||te!==null&&te.memoizedState.tag&1){if(r.flags|=2048,xn(9,jd.bind(null,r,n,l,t),void 0,null),re===null)throw Error(N(349));Yt&30||wd(r,t,l)}return l}function wd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function jd(e,t,r,n){t.value=r,t.getSnapshot=n,kd(t)&&Nd(e)}function bd(e,t,r){return r(function(){kd(t)&&Nd(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!He(e,r)}catch{return!0}}function Nd(e){var t=it(e,1);t!==null&&We(t,e,1,-1)}function ho(e){var t=Ye();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:e},t.queue=e,e=e.dispatch=Up.bind(null,W,e),[t.memoizedState,e]}function xn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Sd(){return Ie().memoizedState}function na(e,t,r,n){var l=Ye();W.flags|=e,l.memoizedState=xn(1|t,r,void 0,n===void 0?null:n)}function Aa(e,t,r,n){var l=Ie();n=n===void 0?null:n;var i=void 0;if(G!==null){var s=G.memoizedState;if(i=s.destroy,n!==null&&as(n,s.deps)){l.memoizedState=xn(t,r,i,n);return}}W.flags|=e,l.memoizedState=xn(1|t,r,i,n)}function go(e,t){return na(8390656,8,e,t)}function ss(e,t){return Aa(2048,8,e,t)}function Cd(e,t){return Aa(4,2,e,t)}function zd(e,t){return Aa(4,4,e,t)}function Ed(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pd(e,t,r){return r=r!=null?r.concat([e]):null,Aa(4,4,Ed.bind(null,t,e),r)}function os(){}function _d(e,t){var r=Ie();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&as(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Ld(e,t){var r=Ie();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&as(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Md(e,t,r){return Yt&21?(He(r,t)||(r=Oc(),W.lanes|=r,Qt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=r)}function $p(e,t){var r=$;$=r!==0&&4>r?r:4,e(!0);var n=wl.transition;wl.transition={};try{e(!1),t()}finally{$=r,wl.transition=n}}function Td(){return Ie().memoizedState}function Op(e,t,r){var n=Nt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Rd(e))Id(t,r);else if(r=hd(e,t,r,n),r!==null){var l=pe();We(r,e,n,l),$d(r,t,n)}}function Up(e,t,r){var n=Nt(e),l={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Rd(e))Id(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,o=i(s,r);if(l.hasEagerState=!0,l.eagerState=o,He(o,s)){var c=t.interleaved;c===null?(l.next=l,Zi(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}r=hd(e,t,l,n),r!==null&&(l=pe(),We(r,e,n,l),$d(r,t,n))}}function Rd(e){var t=e.alternate;return e===W||t!==null&&t===W}function Id(e,t){Gr=Sa=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function $d(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Di(e,r)}}var Ca={readContext:Re,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Dp={readContext:Re,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:go,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,na(4194308,4,Ed.bind(null,t,e),r)},useLayoutEffect:function(e,t){return na(4194308,4,e,t)},useInsertionEffect:function(e,t){return na(4,2,e,t)},useMemo:function(e,t){var r=Ye();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ye();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Op.bind(null,W,e),[n.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:ho,useDebugValue:os,useDeferredValue:function(e){return Ye().memoizedState=e},useTransition:function(){var e=ho(!1),t=e[0];return e=$p.bind(null,e[1]),Ye().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=W,l=Ye();if(B){if(r===void 0)throw Error(N(407));r=r()}else{if(r=t(),re===null)throw Error(N(349));Yt&30||wd(n,t,r)}l.memoizedState=r;var i={value:r,getSnapshot:t};return l.queue=i,go(bd.bind(null,n,i,e),[e]),n.flags|=2048,xn(9,jd.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Ye(),t=re.identifierPrefix;if(B){var r=rt,n=tt;r=(n&~(1<<32-Ve(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=vn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Ip++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fp={readContext:Re,useCallback:_d,useContext:Re,useEffect:ss,useImperativeHandle:Pd,useInsertionEffect:Cd,useLayoutEffect:zd,useMemo:Ld,useReducer:jl,useRef:Sd,useState:function(){return jl(yn)},useDebugValue:os,useDeferredValue:function(e){var t=Ie();return Md(t,G.memoizedState,e)},useTransition:function(){var e=jl(yn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:yd,useSyncExternalStore:xd,useId:Td,unstable_isNewReconciler:!1},Ap={readContext:Re,useCallback:_d,useContext:Re,useEffect:ss,useImperativeHandle:Pd,useInsertionEffect:Cd,useLayoutEffect:zd,useMemo:Ld,useReducer:bl,useRef:Sd,useState:function(){return bl(yn)},useDebugValue:os,useDeferredValue:function(e){var t=Ie();return G===null?t.memoizedState=e:Md(t,G.memoizedState,e)},useTransition:function(){var e=bl(yn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:yd,useSyncExternalStore:xd,useId:Td,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function li(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:H({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ba={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=pe(),l=Nt(e),i=nt(n,l);i.payload=t,r!=null&&(i.callback=r),t=bt(e,i,l),t!==null&&(We(t,e,l,n),ta(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=pe(),l=Nt(e),i=nt(n,l);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=bt(e,i,l),t!==null&&(We(t,e,l,n),ta(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=pe(),n=Nt(e),l=nt(r,n);l.tag=2,t!=null&&(l.callback=t),t=bt(e,l,n),t!==null&&(We(t,e,n,r),ta(t,e,n))}};function vo(e,t,r,n,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!un(r,n)||!un(l,i):!0}function Od(e,t,r){var n=!1,l=Et,i=t.contextType;return typeof i=="object"&&i!==null?i=Re(i):(l=we(t)?Ht:ue.current,n=t.contextTypes,i=(n=n!=null)?wr(e,l):Et),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ba,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function yo(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ba.enqueueReplaceState(t,t.state,null)}function ii(e,t,r,n){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},es(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Re(i):(i=we(t)?Ht:ue.current,l.context=wr(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(li(e,t,i,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ba.enqueueReplaceState(l,l.state,null),ka(e,r,l,n),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t){try{var r="",n=t;do r+=hm(n),n=n.return;while(n);var l=r}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function kl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function si(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Bp=typeof WeakMap=="function"?WeakMap:Map;function Ud(e,t,r){r=nt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ea||(Ea=!0,vi=n),si(e,t)},r}function Dd(e,t,r){r=nt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=t.value;r.payload=function(){return n(l)},r.callback=function(){si(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){si(e,t),typeof n!="function"&&(kt===null?kt=new Set([this]):kt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function xo(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Bp;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(r)||(l.add(r),e=rf.bind(null,e,t,r),t.then(e,e))}function wo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jo(e,t,r,n,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=nt(-1,1),t.tag=2,bt(r,t,1))),r.lanes|=1),e)}var Vp=ot.ReactCurrentOwner,ye=!1;function me(e,t,r,n){t.child=e===null?fd(t,null,r,n):br(t,e.child,r,n)}function bo(e,t,r,n,l){r=r.render;var i=t.ref;return gr(t,l),n=ls(e,t,r,n,i,l),r=is(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,st(e,t,l)):(B&&r&&Yi(t),t.flags|=1,me(e,t,n,l),t.child)}function ko(e,t,r,n,l){if(e===null){var i=r.type;return typeof i=="function"&&!gs(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Fd(e,t,i,n,l)):(e=sa(r.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:un,r(s,n)&&e.ref===t.ref)return st(e,t,l)}return t.flags|=1,e=St(i,n),e.ref=t.ref,e.return=t,t.child=e}function Fd(e,t,r,n,l){if(e!==null){var i=e.memoizedProps;if(un(i,n)&&e.ref===t.ref)if(ye=!1,t.pendingProps=n=i,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,st(e,t,l)}return oi(e,t,r,n,l)}function Ad(e,t,r){var n=t.pendingProps,l=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(ur,ke),ke|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(ur,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,U(ur,ke),ke|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,U(ur,ke),ke|=n;return me(e,t,l,r),t.child}function Bd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function oi(e,t,r,n,l){var i=we(r)?Ht:ue.current;return i=wr(t,i),gr(t,l),r=ls(e,t,r,n,i,l),n=is(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,st(e,t,l)):(B&&n&&Yi(t),t.flags|=1,me(e,t,r,l),t.child)}function No(e,t,r,n,l){if(we(r)){var i=!0;ya(t)}else i=!1;if(gr(t,l),t.stateNode===null)aa(e,t),Od(t,r,n),ii(t,r,n,l),n=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var c=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=Re(d):(d=we(r)?Ht:ue.current,d=wr(t,d));var m=r.getDerivedStateFromProps,p=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==n||c!==d)&&yo(t,s,n,d),mt=!1;var g=t.memoizedState;s.state=g,ka(t,n,s,l),c=t.memoizedState,o!==n||g!==c||xe.current||mt?(typeof m=="function"&&(li(t,r,m,n),c=t.memoizedState),(o=mt||vo(t,r,o,n,g,c,d))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),s.props=n,s.state=c,s.context=d,n=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,gd(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:De(t.type,o),s.props=d,p=t.pendingProps,g=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=Re(c):(c=we(r)?Ht:ue.current,c=wr(t,c));var j=r.getDerivedStateFromProps;(m=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==p||g!==c)&&yo(t,s,n,c),mt=!1,g=t.memoizedState,s.state=g,ka(t,n,s,l);var x=t.memoizedState;o!==p||g!==x||xe.current||mt?(typeof j=="function"&&(li(t,r,j,n),x=t.memoizedState),(d=mt||vo(t,r,d,n,g,x,c)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,x,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,x,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),s.props=n,s.state=x,s.context=c,n=d):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return ci(e,t,r,n,i,l)}function ci(e,t,r,n,l,i){Bd(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return l&&oo(t,r,!1),st(e,t,i);n=t.stateNode,Vp.current=t;var o=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=br(t,e.child,null,i),t.child=br(t,null,o,i)):me(e,t,o,i),t.memoizedState=n.state,l&&oo(t,r,!0),t.child}function Vd(e){var t=e.stateNode;t.pendingContext?so(e,t.pendingContext,t.pendingContext!==t.context):t.context&&so(e,t.context,!1),ts(e,t.containerInfo)}function So(e,t,r,n,l){return jr(),Ki(l),t.flags|=256,me(e,t,r,n),t.child}var di={dehydrated:null,treeContext:null,retryLane:0};function ui(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wd(e,t,r){var n=t.pendingProps,l=V.current,i=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(V,l&1),e===null)return ni(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Ha(s,n,0,null),e=Wt(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ui(r),t.memoizedState=di,e):cs(t,s));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return Wp(e,t,s,n,o,l,r);if(i){i=n.fallback,s=t.mode,l=e.child,o=l.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&t.child!==l?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=St(l,c),n.subtreeFlags=l.subtreeFlags&14680064),o!==null?i=St(o,i):(i=Wt(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?ui(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=di,n}return i=e.child,e=i.sibling,n=St(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function cs(e,t){return t=Ha({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jn(e,t,r,n){return n!==null&&Ki(n),br(t,e.child,null,r),e=cs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wp(e,t,r,n,l,i,s){if(r)return t.flags&256?(t.flags&=-257,n=kl(Error(N(422))),Jn(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,l=t.mode,n=Ha({mode:"visible",children:n.children},l,0,null),i=Wt(i,l,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&br(t,e.child,null,s),t.child.memoizedState=ui(s),t.memoizedState=di,i);if(!(t.mode&1))return Jn(e,t,s,null);if(l.data==="$!"){if(n=l.nextSibling&&l.nextSibling.dataset,n)var o=n.dgst;return n=o,i=Error(N(419)),n=kl(i,n,void 0),Jn(e,t,s,n)}if(o=(s&e.childLanes)!==0,ye||o){if(n=re,n!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(n.suspendedLanes|s)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,it(e,l),We(n,e,l,-1))}return hs(),n=kl(Error(N(421))),Jn(e,t,s,n)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=nf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ne=jt(l.nextSibling),Se=t,B=!0,Ae=null,e!==null&&(_e[Le++]=tt,_e[Le++]=rt,_e[Le++]=Jt,tt=e.id,rt=e.overflow,Jt=t),t=cs(t,n.children),t.flags|=4096,t)}function Co(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ai(e.return,t,r)}function Nl(e,t,r,n,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=l)}function Hd(e,t,r){var n=t.pendingProps,l=n.revealOrder,i=n.tail;if(me(e,t,n.children,r),n=V.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Co(e,r,t);else if(e.tag===19)Co(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(U(V,n),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&Na(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),Nl(t,!1,l,r,i);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Na(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}Nl(t,!0,r,null,i);break;case"together":Nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Qt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,r=St(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=St(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Hp(e,t,r){switch(t.tag){case 3:Vd(t),jr();break;case 5:vd(t);break;case 1:we(t.type)&&ya(t);break;case 4:ts(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,l=t.memoizedProps.value;U(ja,n._currentValue),n._currentValue=l;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(U(V,V.current&1),t.flags|=128,null):r&t.child.childLanes?Wd(e,t,r):(U(V,V.current&1),e=st(e,t,r),e!==null?e.sibling:null);U(V,V.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Hd(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(V,V.current),n)break;return null;case 22:case 23:return t.lanes=0,Ad(e,t,r)}return st(e,t,r)}var Jd,mi,Yd,Qd;Jd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};mi=function(){};Yd=function(e,t,r,n){var l=e.memoizedProps;if(l!==n){e=t.stateNode,Bt(Xe.current);var i=null;switch(r){case"input":l=Rl(e,l),n=Rl(e,n),i=[];break;case"select":l=H({},l,{value:void 0}),n=H({},n,{value:void 0}),i=[];break;case"textarea":l=Ol(e,l),n=Ol(e,n),i=[];break;default:typeof l.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ga)}Dl(r,n);var s;r=null;for(d in l)if(!n.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var o=l[d];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(nn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in n){var c=n[d];if(o=l!=null?l[d]:void 0,n.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(s in o)!o.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&o[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(i||(i=[]),i.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(nn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&F("scroll",e),i||o===c||(i=[])):(i=i||[]).push(d,c))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Qd=function(e,t,r,n){r!==n&&(t.flags|=4)};function Fr(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags&14680064,n|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Jp(e,t,r){var n=t.pendingProps;switch(Qi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return we(t.type)&&va(),oe(t),null;case 3:return n=t.stateNode,kr(),A(xe),A(ue),ns(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(wi(Ae),Ae=null))),mi(e,t),oe(t),null;case 5:rs(t);var l=Bt(gn.current);if(r=t.type,e!==null&&t.stateNode!=null)Yd(e,t,r,n,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(N(166));return oe(t),null}if(e=Bt(Xe.current),Wn(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[Qe]=t,n[fn]=i,e=(t.mode&1)!==0,r){case"dialog":F("cancel",n),F("close",n);break;case"iframe":case"object":case"embed":F("load",n);break;case"video":case"audio":for(l=0;l<Hr.length;l++)F(Hr[l],n);break;case"source":F("error",n);break;case"img":case"image":case"link":F("error",n),F("load",n);break;case"details":F("toggle",n);break;case"input":Rs(n,i),F("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},F("invalid",n);break;case"textarea":$s(n,i),F("invalid",n)}Dl(r,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var o=i[s];s==="children"?typeof o=="string"?n.textContent!==o&&(i.suppressHydrationWarning!==!0&&Vn(n.textContent,o,e),l=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Vn(n.textContent,o,e),l=["children",""+o]):nn.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&F("scroll",n)}switch(r){case"input":In(n),Is(n,i,!0);break;case"textarea":In(n),Os(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=ga)}n=l,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Qe]=t,e[fn]=n,Jd(e,t,!1,!1),t.stateNode=e;e:{switch(s=Fl(r,n),r){case"dialog":F("cancel",e),F("close",e),l=n;break;case"iframe":case"object":case"embed":F("load",e),l=n;break;case"video":case"audio":for(l=0;l<Hr.length;l++)F(Hr[l],e);l=n;break;case"source":F("error",e),l=n;break;case"img":case"image":case"link":F("error",e),F("load",e),l=n;break;case"details":F("toggle",e),l=n;break;case"input":Rs(e,n),l=Rl(e,n),F("invalid",e);break;case"option":l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=H({},n,{value:void 0}),F("invalid",e);break;case"textarea":$s(e,n),l=Ol(e,n),F("invalid",e);break;default:l=n}Dl(r,l),o=l;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?Sc(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&kc(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&an(e,c):typeof c=="number"&&an(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(nn.hasOwnProperty(i)?c!=null&&i==="onScroll"&&F("scroll",e):c!=null&&Ti(e,i,c,s))}switch(r){case"input":In(e),Is(e,n,!1);break;case"textarea":In(e),Os(e);break;case"option":n.value!=null&&e.setAttribute("value",""+zt(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?mr(e,!!n.multiple,i,!1):n.defaultValue!=null&&mr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ga)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Qd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(N(166));if(r=Bt(gn.current),Bt(Xe.current),Wn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Qe]=t,(i=n.nodeValue!==r)&&(e=Se,e!==null))switch(e.tag){case 3:Vn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vn(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Qe]=t,t.stateNode=n}return oe(t),null;case 13:if(A(V),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Ne!==null&&t.mode&1&&!(t.flags&128))md(),jr(),t.flags|=98560,i=!1;else if(i=Wn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Qe]=t}else jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else Ae!==null&&(wi(Ae),Ae=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?q===0&&(q=3):hs())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return kr(),mi(e,t),e===null&&mn(t.stateNode.containerInfo),oe(t),null;case 10:return qi(t.type._context),oe(t),null;case 17:return we(t.type)&&va(),oe(t),null;case 19:if(A(V),i=t.memoizedState,i===null)return oe(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)Fr(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Na(e),s!==null){for(t.flags|=128,Fr(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return U(V,V.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>Sr&&(t.flags|=128,n=!0,Fr(i,!1),t.lanes=4194304)}else{if(!n)if(e=Na(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!B)return oe(t),null}else 2*Q()-i.renderingStartTime>Sr&&r!==1073741824&&(t.flags|=128,n=!0,Fr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,r=V.current,U(V,n?r&1|2:r&1),t):(oe(t),null);case 22:case 23:return fs(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?ke&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Yp(e,t){switch(Qi(t),t.tag){case 1:return we(t.type)&&va(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),A(xe),A(ue),ns(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rs(t),null;case 13:if(A(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(V),null;case 4:return kr(),null;case 10:return qi(t.type._context),null;case 22:case 23:return fs(),null;case 24:return null;default:return null}}var Yn=!1,de=!1,Qp=typeof WeakSet=="function"?WeakSet:Set,E=null;function dr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){J(e,t,n)}else r.current=null}function pi(e,t,r){try{r()}catch(n){J(e,t,n)}}var zo=!1;function Kp(e,t){if(Xl=pa,e=Zc(),Ji(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,o=-1,c=-1,d=0,m=0,p=e,g=null;t:for(;;){for(var j;p!==r||l!==0&&p.nodeType!==3||(o=s+l),p!==i||n!==0&&p.nodeType!==3||(c=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(j=p.firstChild)!==null;)g=p,p=j;for(;;){if(p===e)break t;if(g===r&&++d===l&&(o=s),g===i&&++m===n&&(c=s),(j=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=j}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Gl={focusedElem:e,selectionRange:r},pa=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,b=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:De(t.type,v),b);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(y){J(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return x=zo,zo=!1,x}function qr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&pi(t,r,i)}l=l.next}while(l!==n)}}function Va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function fi(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Kd(e){var t=e.alternate;t!==null&&(e.alternate=null,Kd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[fn],delete t[ei],delete t[Lp],delete t[Mp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xd(e){return e.tag===5||e.tag===3||e.tag===4}function Eo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hi(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ga));else if(n!==4&&(e=e.child,e!==null))for(hi(e,t,r),e=e.sibling;e!==null;)hi(e,t,r),e=e.sibling}function gi(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(gi(e,t,r),e=e.sibling;e!==null;)gi(e,t,r),e=e.sibling}var ae=null,Fe=!1;function dt(e,t,r){for(r=r.child;r!==null;)Gd(e,t,r),r=r.sibling}function Gd(e,t,r){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Ia,r)}catch{}switch(r.tag){case 5:de||dr(r,t);case 6:var n=ae,l=Fe;ae=null,dt(e,t,r),ae=n,Fe=l,ae!==null&&(Fe?(e=ae,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ae.removeChild(r.stateNode));break;case 18:ae!==null&&(Fe?(e=ae,r=r.stateNode,e.nodeType===8?vl(e.parentNode,r):e.nodeType===1&&vl(e,r),cn(e)):vl(ae,r.stateNode));break;case 4:n=ae,l=Fe,ae=r.stateNode.containerInfo,Fe=!0,dt(e,t,r),ae=n,Fe=l;break;case 0:case 11:case 14:case 15:if(!de&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){l=n=n.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&pi(r,t,s),l=l.next}while(l!==n)}dt(e,t,r);break;case 1:if(!de&&(dr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){J(r,t,o)}dt(e,t,r);break;case 21:dt(e,t,r);break;case 22:r.mode&1?(de=(n=de)||r.memoizedState!==null,dt(e,t,r),de=n):dt(e,t,r);break;default:dt(e,t,r)}}function Po(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Qp),t.forEach(function(n){var l=af.bind(null,e,n);r.has(n)||(r.add(n),n.then(l,l))})}}function Oe(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var l=r[n];try{var i=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:ae=o.stateNode,Fe=!1;break e;case 3:ae=o.stateNode.containerInfo,Fe=!0;break e;case 4:ae=o.stateNode.containerInfo,Fe=!0;break e}o=o.return}if(ae===null)throw Error(N(160));Gd(i,s,l),ae=null,Fe=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(d){J(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qd(t,e),t=t.sibling}function qd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Je(e),n&4){try{qr(3,e,e.return),Va(3,e)}catch(v){J(e,e.return,v)}try{qr(5,e,e.return)}catch(v){J(e,e.return,v)}}break;case 1:Oe(t,e),Je(e),n&512&&r!==null&&dr(r,r.return);break;case 5:if(Oe(t,e),Je(e),n&512&&r!==null&&dr(r,r.return),e.flags&32){var l=e.stateNode;try{an(l,"")}catch(v){J(e,e.return,v)}}if(n&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&wc(l,i),Fl(o,s);var d=Fl(o,i);for(s=0;s<c.length;s+=2){var m=c[s],p=c[s+1];m==="style"?Sc(l,p):m==="dangerouslySetInnerHTML"?kc(l,p):m==="children"?an(l,p):Ti(l,m,p,d)}switch(o){case"input":Il(l,i);break;case"textarea":jc(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var j=i.value;j!=null?mr(l,!!i.multiple,j,!1):g!==!!i.multiple&&(i.defaultValue!=null?mr(l,!!i.multiple,i.defaultValue,!0):mr(l,!!i.multiple,i.multiple?[]:"",!1))}l[fn]=i}catch(v){J(e,e.return,v)}}break;case 6:if(Oe(t,e),Je(e),n&4){if(e.stateNode===null)throw Error(N(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(v){J(e,e.return,v)}}break;case 3:if(Oe(t,e),Je(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{cn(t.containerInfo)}catch(v){J(e,e.return,v)}break;case 4:Oe(t,e),Je(e);break;case 13:Oe(t,e),Je(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ms=Q())),n&4&&Po(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(de=(d=de)||m,Oe(t,e),de=d):Oe(t,e),Je(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(E=e,m=e.child;m!==null;){for(p=E=m;E!==null;){switch(g=E,j=g.child,g.tag){case 0:case 11:case 14:case 15:qr(4,g,g.return);break;case 1:dr(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){J(n,r,v)}}break;case 5:dr(g,g.return);break;case 22:if(g.memoizedState!==null){Lo(p);continue}}j!==null?(j.return=g,E=j):Lo(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Nc("display",s))}catch(v){J(e,e.return,v)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(v){J(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Oe(t,e),Je(e),n&4&&Po(e);break;case 21:break;default:Oe(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Xd(r)){var n=r;break e}r=r.return}throw Error(N(160))}switch(n.tag){case 5:var l=n.stateNode;n.flags&32&&(an(l,""),n.flags&=-33);var i=Eo(e);gi(e,i,l);break;case 3:case 4:var s=n.stateNode.containerInfo,o=Eo(e);hi(e,o,s);break;default:throw Error(N(161))}}catch(c){J(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xp(e,t,r){E=e,Zd(e)}function Zd(e,t,r){for(var n=(e.mode&1)!==0;E!==null;){var l=E,i=l.child;if(l.tag===22&&n){var s=l.memoizedState!==null||Yn;if(!s){var o=l.alternate,c=o!==null&&o.memoizedState!==null||de;o=Yn;var d=de;if(Yn=s,(de=c)&&!d)for(E=l;E!==null;)s=E,c=s.child,s.tag===22&&s.memoizedState!==null?Mo(l):c!==null?(c.return=s,E=c):Mo(l);for(;i!==null;)E=i,Zd(i),i=i.sibling;E=l,Yn=o,de=d}_o(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,E=i):_o(e)}}function _o(e){for(;E!==null;){var t=E;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Va(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!de)if(r===null)n.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:De(t.type,r.memoizedProps);n.componentDidUpdate(l,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&fo(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}fo(t,s,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&cn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}de||t.flags&512&&fi(t)}catch(g){J(t,t.return,g)}}if(t===e){E=null;break}if(r=t.sibling,r!==null){r.return=t.return,E=r;break}E=t.return}}function Lo(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var r=t.sibling;if(r!==null){r.return=t.return,E=r;break}E=t.return}}function Mo(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Va(4,t)}catch(c){J(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var l=t.return;try{n.componentDidMount()}catch(c){J(t,l,c)}}var i=t.return;try{fi(t)}catch(c){J(t,i,c)}break;case 5:var s=t.return;try{fi(t)}catch(c){J(t,s,c)}}}catch(c){J(t,t.return,c)}if(t===e){E=null;break}var o=t.sibling;if(o!==null){o.return=t.return,E=o;break}E=t.return}}var Gp=Math.ceil,za=ot.ReactCurrentDispatcher,ds=ot.ReactCurrentOwner,Te=ot.ReactCurrentBatchConfig,I=0,re=null,X=null,le=0,ke=0,ur=_t(0),q=0,wn=null,Qt=0,Wa=0,us=0,Zr=null,ve=null,ms=0,Sr=1/0,qe=null,Ea=!1,vi=null,kt=null,Qn=!1,gt=null,Pa=0,en=0,yi=null,la=-1,ia=0;function pe(){return I&6?Q():la!==-1?la:la=Q()}function Nt(e){return e.mode&1?I&2&&le!==0?le&-le:Rp.transition!==null?(ia===0&&(ia=Oc()),ia):(e=$,e!==0||(e=window.event,e=e===void 0?16:Wc(e.type)),e):1}function We(e,t,r,n){if(50<en)throw en=0,yi=null,Error(N(185));Sn(e,r,n),(!(I&2)||e!==re)&&(e===re&&(!(I&2)&&(Wa|=r),q===4&&ft(e,le)),je(e,n),r===1&&I===0&&!(t.mode&1)&&(Sr=Q()+500,Fa&&Lt()))}function je(e,t){var r=e.callbackNode;Rm(e,t);var n=ma(e,e===re?le:0);if(n===0)r!==null&&Fs(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Fs(r),t===1)e.tag===0?Tp(To.bind(null,e)):cd(To.bind(null,e)),Pp(function(){!(I&6)&&Lt()}),r=null;else{switch(Uc(n)){case 1:r=Ui;break;case 4:r=Ic;break;case 16:r=ua;break;case 536870912:r=$c;break;default:r=ua}r=su(r,eu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function eu(e,t){if(la=-1,ia=0,I&6)throw Error(N(327));var r=e.callbackNode;if(vr()&&e.callbackNode!==r)return null;var n=ma(e,e===re?le:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=_a(e,n);else{t=n;var l=I;I|=2;var i=ru();(re!==e||le!==t)&&(qe=null,Sr=Q()+500,Vt(e,t));do try{ef();break}catch(o){tu(e,o)}while(!0);Gi(),za.current=i,I=l,X!==null?t=0:(re=null,le=0,t=q)}if(t!==0){if(t===2&&(l=Hl(e),l!==0&&(n=l,t=xi(e,l))),t===1)throw r=wn,Vt(e,0),ft(e,n),je(e,Q()),r;if(t===6)ft(e,n);else{if(l=e.current.alternate,!(n&30)&&!qp(l)&&(t=_a(e,n),t===2&&(i=Hl(e),i!==0&&(n=i,t=xi(e,i))),t===1))throw r=wn,Vt(e,0),ft(e,n),je(e,Q()),r;switch(e.finishedWork=l,e.finishedLanes=n,t){case 0:case 1:throw Error(N(345));case 2:Dt(e,ve,qe);break;case 3:if(ft(e,n),(n&130023424)===n&&(t=ms+500-Q(),10<t)){if(ma(e,0)!==0)break;if(l=e.suspendedLanes,(l&n)!==n){pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Zl(Dt.bind(null,e,ve,qe),t);break}Dt(e,ve,qe);break;case 4:if(ft(e,n),(n&4194240)===n)break;for(t=e.eventTimes,l=-1;0<n;){var s=31-Ve(n);i=1<<s,s=t[s],s>l&&(l=s),n&=~i}if(n=l,n=Q()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Gp(n/1960))-n,10<n){e.timeoutHandle=Zl(Dt.bind(null,e,ve,qe),n);break}Dt(e,ve,qe);break;case 5:Dt(e,ve,qe);break;default:throw Error(N(329))}}}return je(e,Q()),e.callbackNode===r?eu.bind(null,e):null}function xi(e,t){var r=Zr;return e.current.memoizedState.isDehydrated&&(Vt(e,t).flags|=256),e=_a(e,t),e!==2&&(t=ve,ve=r,t!==null&&wi(t)),e}function wi(e){ve===null?ve=e:ve.push.apply(ve,e)}function qp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var l=r[n],i=l.getSnapshot;l=l.value;try{if(!He(i(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~us,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ve(t),n=1<<r;e[r]=-1,t&=~n}}function To(e){if(I&6)throw Error(N(327));vr();var t=ma(e,0);if(!(t&1))return je(e,Q()),null;var r=_a(e,t);if(e.tag!==0&&r===2){var n=Hl(e);n!==0&&(t=n,r=xi(e,n))}if(r===1)throw r=wn,Vt(e,0),ft(e,t),je(e,Q()),r;if(r===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dt(e,ve,qe),je(e,Q()),null}function ps(e,t){var r=I;I|=1;try{return e(t)}finally{I=r,I===0&&(Sr=Q()+500,Fa&&Lt())}}function Kt(e){gt!==null&&gt.tag===0&&!(I&6)&&vr();var t=I;I|=1;var r=Te.transition,n=$;try{if(Te.transition=null,$=1,e)return e()}finally{$=n,Te.transition=r,I=t,!(I&6)&&Lt()}}function fs(){ke=ur.current,A(ur)}function Vt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ep(r)),X!==null)for(r=X.return;r!==null;){var n=r;switch(Qi(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&va();break;case 3:kr(),A(xe),A(ue),ns();break;case 5:rs(n);break;case 4:kr();break;case 13:A(V);break;case 19:A(V);break;case 10:qi(n.type._context);break;case 22:case 23:fs()}r=r.return}if(re=e,X=e=St(e.current,null),le=ke=t,q=0,wn=null,us=Wa=Qt=0,ve=Zr=null,At!==null){for(t=0;t<At.length;t++)if(r=At[t],n=r.interleaved,n!==null){r.interleaved=null;var l=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=l,n.next=s}r.pending=n}At=null}return e}function tu(e,t){do{var r=X;try{if(Gi(),ra.current=Ca,Sa){for(var n=W.memoizedState;n!==null;){var l=n.queue;l!==null&&(l.pending=null),n=n.next}Sa=!1}if(Yt=0,te=G=W=null,Gr=!1,vn=0,ds.current=null,r===null||r.return===null){q=1,wn=t,X=null;break}e:{var i=e,s=r.return,o=r,c=t;if(t=le,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=o,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var j=wo(s);if(j!==null){j.flags&=-257,jo(j,s,o,i,t),j.mode&1&&xo(i,d,t),t=j,c=d;var x=t.updateQueue;if(x===null){var v=new Set;v.add(c),t.updateQueue=v}else x.add(c);break e}else{if(!(t&1)){xo(i,d,t),hs();break e}c=Error(N(426))}}else if(B&&o.mode&1){var b=wo(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),jo(b,s,o,i,t),Ki(Nr(c,o));break e}}i=c=Nr(c,o),q!==4&&(q=2),Zr===null?Zr=[i]:Zr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ud(i,c,t);po(i,f);break e;case 1:o=c;var u=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(kt===null||!kt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Dd(i,o,t);po(i,y);break e}}i=i.return}while(i!==null)}au(r)}catch(k){t=k,X===r&&r!==null&&(X=r=r.return);continue}break}while(!0)}function ru(){var e=za.current;return za.current=Ca,e===null?Ca:e}function hs(){(q===0||q===3||q===2)&&(q=4),re===null||!(Qt&268435455)&&!(Wa&268435455)||ft(re,le)}function _a(e,t){var r=I;I|=2;var n=ru();(re!==e||le!==t)&&(qe=null,Vt(e,t));do try{Zp();break}catch(l){tu(e,l)}while(!0);if(Gi(),I=r,za.current=n,X!==null)throw Error(N(261));return re=null,le=0,q}function Zp(){for(;X!==null;)nu(X)}function ef(){for(;X!==null&&!Sm();)nu(X)}function nu(e){var t=iu(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?au(e):X=t,ds.current=null}function au(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Yp(r,t),r!==null){r.flags&=32767,X=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,X=null;return}}else if(r=Jp(r,t,ke),r!==null){X=r;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);q===0&&(q=5)}function Dt(e,t,r){var n=$,l=Te.transition;try{Te.transition=null,$=1,tf(e,t,r,n)}finally{Te.transition=l,$=n}return null}function tf(e,t,r,n){do vr();while(gt!==null);if(I&6)throw Error(N(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Im(e,i),e===re&&(X=re=null,le=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Qn||(Qn=!0,su(ua,function(){return vr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Te.transition,Te.transition=null;var s=$;$=1;var o=I;I|=4,ds.current=null,Kp(e,r),qd(r,e),jp(Gl),pa=!!Xl,Gl=Xl=null,e.current=r,Xp(r),Cm(),I=o,$=s,Te.transition=i}else e.current=r;if(Qn&&(Qn=!1,gt=e,Pa=l),i=e.pendingLanes,i===0&&(kt=null),Pm(r.stateNode),je(e,Q()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],n(l.value,{componentStack:l.stack,digest:l.digest});if(Ea)throw Ea=!1,e=vi,vi=null,e;return Pa&1&&e.tag!==0&&vr(),i=e.pendingLanes,i&1?e===yi?en++:(en=0,yi=e):en=0,Lt(),null}function vr(){if(gt!==null){var e=Uc(Pa),t=Te.transition,r=$;try{if(Te.transition=null,$=16>e?16:e,gt===null)var n=!1;else{if(e=gt,gt=null,Pa=0,I&6)throw Error(N(331));var l=I;for(I|=4,E=e.current;E!==null;){var i=E,s=i.child;if(E.flags&16){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(E=d;E!==null;){var m=E;switch(m.tag){case 0:case 11:case 15:qr(8,m,i)}var p=m.child;if(p!==null)p.return=m,E=p;else for(;E!==null;){m=E;var g=m.sibling,j=m.return;if(Kd(m),m===d){E=null;break}if(g!==null){g.return=j,E=g;break}E=j}}}var x=i.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}E=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,E=s;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,E=f;break e}E=i.return}}var u=e.current;for(E=u;E!==null;){s=E;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,E=h;else e:for(s=u;E!==null;){if(o=E,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Va(9,o)}}catch(k){J(o,o.return,k)}if(o===s){E=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,E=y;break e}E=o.return}}if(I=l,Lt(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Ia,e)}catch{}n=!0}return n}finally{$=r,Te.transition=t}}return!1}function Ro(e,t,r){t=Nr(r,t),t=Ud(e,t,1),e=bt(e,t,1),t=pe(),e!==null&&(Sn(e,1,t),je(e,t))}function J(e,t,r){if(e.tag===3)Ro(e,e,r);else for(;t!==null;){if(t.tag===3){Ro(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(kt===null||!kt.has(n))){e=Nr(r,e),e=Dd(t,e,1),t=bt(t,e,1),e=pe(),t!==null&&(Sn(t,1,e),je(t,e));break}}t=t.return}}function rf(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&r,re===e&&(le&r)===r&&(q===4||q===3&&(le&130023424)===le&&500>Q()-ms?Vt(e,0):us|=r),je(e,t)}function lu(e,t){t===0&&(e.mode&1?(t=Un,Un<<=1,!(Un&130023424)&&(Un=4194304)):t=1);var r=pe();e=it(e,t),e!==null&&(Sn(e,t,r),je(e,r))}function nf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),lu(e,r)}function af(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(N(314))}n!==null&&n.delete(t),lu(e,r)}var iu;iu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ye=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ye=!1,Hp(e,t,r);ye=!!(e.flags&131072)}else ye=!1,B&&t.flags&1048576&&dd(t,wa,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;aa(e,t),e=t.pendingProps;var l=wr(t,ue.current);gr(t,r),l=ls(null,t,n,e,l,r);var i=is();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(n)?(i=!0,ya(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,es(t),l.updater=Ba,t.stateNode=l,l._reactInternals=t,ii(t,n,e,r),t=ci(null,t,n,!0,i,r)):(t.tag=0,B&&i&&Yi(t),me(null,t,l,r),t=t.child),t;case 16:n=t.elementType;e:{switch(aa(e,t),e=t.pendingProps,l=n._init,n=l(n._payload),t.type=n,l=t.tag=sf(n),e=De(n,e),l){case 0:t=oi(null,t,n,e,r);break e;case 1:t=No(null,t,n,e,r);break e;case 11:t=bo(null,t,n,e,r);break e;case 14:t=ko(null,t,n,De(n.type,e),r);break e}throw Error(N(306,n,""))}return t;case 0:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:De(n,l),oi(e,t,n,l,r);case 1:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:De(n,l),No(e,t,n,l,r);case 3:e:{if(Vd(t),e===null)throw Error(N(387));n=t.pendingProps,i=t.memoizedState,l=i.element,gd(e,t),ka(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Nr(Error(N(423)),t),t=So(e,t,n,r,l);break e}else if(n!==l){l=Nr(Error(N(424)),t),t=So(e,t,n,r,l);break e}else for(Ne=jt(t.stateNode.containerInfo.firstChild),Se=t,B=!0,Ae=null,r=fd(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(jr(),n===l){t=st(e,t,r);break e}me(e,t,n,r)}t=t.child}return t;case 5:return vd(t),e===null&&ni(t),n=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,ql(n,l)?s=null:i!==null&&ql(n,i)&&(t.flags|=32),Bd(e,t),me(e,t,s,r),t.child;case 6:return e===null&&ni(t),null;case 13:return Wd(e,t,r);case 4:return ts(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=br(t,null,n,r):me(e,t,n,r),t.child;case 11:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:De(n,l),bo(e,t,n,l,r);case 7:return me(e,t,t.pendingProps,r),t.child;case 8:return me(e,t,t.pendingProps.children,r),t.child;case 12:return me(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,l=t.pendingProps,i=t.memoizedProps,s=l.value,U(ja,n._currentValue),n._currentValue=s,i!==null)if(He(i.value,s)){if(i.children===l.children&&!xe.current){t=st(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){s=i.child;for(var c=o.firstContext;c!==null;){if(c.context===n){if(i.tag===1){c=nt(-1,r&-r),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),ai(i.return,r,t),o.lanes|=r;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(N(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),ai(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}me(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,n=t.pendingProps.children,gr(t,r),l=Re(l),n=n(l),t.flags|=1,me(e,t,n,r),t.child;case 14:return n=t.type,l=De(n,t.pendingProps),l=De(n.type,l),ko(e,t,n,l,r);case 15:return Fd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:De(n,l),aa(e,t),t.tag=1,we(n)?(e=!0,ya(t)):e=!1,gr(t,r),Od(t,n,l),ii(t,n,l,r),ci(null,t,n,!0,e,r);case 19:return Hd(e,t,r);case 22:return Ad(e,t,r)}throw Error(N(156,t.tag))};function su(e,t){return Rc(e,t)}function lf(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,r,n){return new lf(e,t,r,n)}function gs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sf(e){if(typeof e=="function")return gs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ii)return 11;if(e===$i)return 14}return 2}function St(e,t){var r=e.alternate;return r===null?(r=Me(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function sa(e,t,r,n,l,i){var s=2;if(n=e,typeof e=="function")gs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case tr:return Wt(r.children,l,i,t);case Ri:s=8,l|=8;break;case _l:return e=Me(12,r,t,l|2),e.elementType=_l,e.lanes=i,e;case Ll:return e=Me(13,r,t,l),e.elementType=Ll,e.lanes=i,e;case Ml:return e=Me(19,r,t,l),e.elementType=Ml,e.lanes=i,e;case vc:return Ha(r,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hc:s=10;break e;case gc:s=9;break e;case Ii:s=11;break e;case $i:s=14;break e;case ut:s=16,n=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Me(s,r,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Wt(e,t,r,n){return e=Me(7,e,n,t),e.lanes=r,e}function Ha(e,t,r,n){return e=Me(22,e,n,t),e.elementType=vc,e.lanes=r,e.stateNode={isHidden:!1},e}function Sl(e,t,r){return e=Me(6,e,null,t),e.lanes=r,e}function Cl(e,t,r){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function of(e,t,r,n,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=n,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function vs(e,t,r,n,l,i,s,o,c){return e=new of(e,t,r,o,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Me(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},es(i),e}function cf(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ou(e){if(!e)return Et;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var r=e.type;if(we(r))return od(e,r,t)}return t}function cu(e,t,r,n,l,i,s,o,c){return e=vs(r,n,!0,e,l,i,s,o,c),e.context=ou(null),r=e.current,n=pe(),l=Nt(r),i=nt(n,l),i.callback=t??null,bt(r,i,l),e.current.lanes=l,Sn(e,l,n),je(e,n),e}function Ja(e,t,r,n){var l=t.current,i=pe(),s=Nt(l);return r=ou(r),t.context===null?t.context=r:t.pendingContext=r,t=nt(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=bt(l,t,s),e!==null&&(We(e,l,s,i),ta(e,l,s)),s}function La(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Io(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ys(e,t){Io(e,t),(e=e.alternate)&&Io(e,t)}function df(){return null}var du=typeof reportError=="function"?reportError:function(e){console.error(e)};function xs(e){this._internalRoot=e}Ya.prototype.render=xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Ja(e,t,null,null)};Ya.prototype.unmount=xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kt(function(){Ja(null,e,null,null)}),t[lt]=null}};function Ya(e){this._internalRoot=e}Ya.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ac();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pt.length&&t!==0&&t<pt[r].priority;r++);pt.splice(r,0,e),r===0&&Vc(e)}};function ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $o(){}function uf(e,t,r,n,l){if(l){if(typeof n=="function"){var i=n;n=function(){var d=La(s);i.call(d)}}var s=cu(t,n,e,0,null,!1,!1,"",$o);return e._reactRootContainer=s,e[lt]=s.current,mn(e.nodeType===8?e.parentNode:e),Kt(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof n=="function"){var o=n;n=function(){var d=La(c);o.call(d)}}var c=vs(e,0,!1,null,null,!1,!1,"",$o);return e._reactRootContainer=c,e[lt]=c.current,mn(e.nodeType===8?e.parentNode:e),Kt(function(){Ja(t,c,r,n)}),c}function Ka(e,t,r,n,l){var i=r._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var o=l;l=function(){var c=La(s);o.call(c)}}Ja(t,s,e,l)}else s=uf(r,t,e,l,n);return La(s)}Dc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Wr(t.pendingLanes);r!==0&&(Di(t,r|1),je(t,Q()),!(I&6)&&(Sr=Q()+500,Lt()))}break;case 13:Kt(function(){var n=it(e,1);if(n!==null){var l=pe();We(n,e,1,l)}}),ys(e,1)}};Fi=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var r=pe();We(t,e,134217728,r)}ys(e,134217728)}};Fc=function(e){if(e.tag===13){var t=Nt(e),r=it(e,t);if(r!==null){var n=pe();We(r,e,t,n)}ys(e,t)}};Ac=function(){return $};Bc=function(e,t){var r=$;try{return $=e,t()}finally{$=r}};Bl=function(e,t,r){switch(t){case"input":if(Il(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var l=Da(n);if(!l)throw Error(N(90));xc(n),Il(n,l)}}}break;case"textarea":jc(e,r);break;case"select":t=r.value,t!=null&&mr(e,!!r.multiple,t,!1)}};Ec=ps;Pc=Kt;var mf={usingClientEntryPoint:!1,Events:[zn,lr,Da,Cc,zc,ps]},Ar={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pf={bundleType:Ar.bundleType,version:Ar.version,rendererPackageName:Ar.rendererPackageName,rendererConfig:Ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ar.findFiberByHostInstance||df,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kn.isDisabled&&Kn.supportsFiber)try{Ia=Kn.inject(pf),Ke=Kn}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mf;ze.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ws(t))throw Error(N(200));return cf(e,t,null,r)};ze.createRoot=function(e,t){if(!ws(e))throw Error(N(299));var r=!1,n="",l=du;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=vs(e,1,!1,null,null,r,!1,n,l),e[lt]=t.current,mn(e.nodeType===8?e.parentNode:e),new xs(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Mc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Kt(e)};ze.hydrate=function(e,t,r){if(!Qa(t))throw Error(N(200));return Ka(null,e,t,!0,r)};ze.hydrateRoot=function(e,t,r){if(!ws(e))throw Error(N(405));var n=r!=null&&r.hydratedSources||null,l=!1,i="",s=du;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=cu(t,null,e,1,r??null,l,!1,i,s),e[lt]=t.current,mn(e),n)for(e=0;e<n.length;e++)r=n[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Ya(t)};ze.render=function(e,t,r){if(!Qa(t))throw Error(N(200));return Ka(null,e,t,!1,r)};ze.unmountComponentAtNode=function(e){if(!Qa(e))throw Error(N(40));return e._reactRootContainer?(Kt(function(){Ka(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};ze.unstable_batchedUpdates=ps;ze.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Qa(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Ka(e,t,r,!1,n)};ze.version="18.3.1-next-f1338f8080-20240426";function uu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uu)}catch(e){console.error(e)}}uu(),uc.exports=ze;var ff=uc.exports,Oo=ff;El.createRoot=Oo.createRoot,El.hydrateRoot=Oo.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jn(){return jn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},jn.apply(null,arguments)}var vt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vt||(vt={}));const Uo="popstate";function hf(e){e===void 0&&(e={});function t(n,l){let{pathname:i,search:s,hash:o}=n.location;return ji("",{pathname:i,search:s,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(n,l){return typeof l=="string"?l:Ma(l)}return vf(t,r,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function js(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gf(){return Math.random().toString(36).substr(2,8)}function Do(e,t){return{usr:e.state,key:e.key,idx:t}}function ji(e,t,r,n){return r===void 0&&(r=null),jn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_r(t):t,{state:r,key:t&&t.key||n||gf()})}function Ma(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function _r(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function vf(e,t,r,n){n===void 0&&(n={});let{window:l=document.defaultView,v5Compat:i=!1}=n,s=l.history,o=vt.Pop,c=null,d=m();d==null&&(d=0,s.replaceState(jn({},s.state,{idx:d}),""));function m(){return(s.state||{idx:null}).idx}function p(){o=vt.Pop;let b=m(),f=b==null?null:b-d;d=b,c&&c({action:o,location:v.location,delta:f})}function g(b,f){o=vt.Push;let u=ji(v.location,b,f);d=m()+1;let h=Do(u,d),y=v.createHref(u);try{s.pushState(h,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(y)}i&&c&&c({action:o,location:v.location,delta:1})}function j(b,f){o=vt.Replace;let u=ji(v.location,b,f);d=m();let h=Do(u,d),y=v.createHref(u);s.replaceState(h,"",y),i&&c&&c({action:o,location:v.location,delta:0})}function x(b){let f=l.location.origin!=="null"?l.location.origin:l.location.href,u=typeof b=="string"?b:Ma(b);return u=u.replace(/ $/,"%20"),K(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let v={get action(){return o},get location(){return e(l,s)},listen(b){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(Uo,p),c=b,()=>{l.removeEventListener(Uo,p),c=null}},createHref(b){return t(l,b)},createURL:x,encodeLocation(b){let f=x(b);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:j,go(b){return s.go(b)}};return v}var Fo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fo||(Fo={}));function yf(e,t,r){return r===void 0&&(r="/"),xf(e,t,r)}function xf(e,t,r,n){let l=typeof t=="string"?_r(t):t,i=bs(l.pathname||"/",r);if(i==null)return null;let s=mu(e);wf(s);let o=null,c=Mf(i);for(let d=0;o==null&&d<s.length;++d)o=Pf(s[d],c);return o}function mu(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let l=(i,s,o)=>{let c={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(K(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=Ct([n,c.relativePath]),m=r.concat(c);i.children&&i.children.length>0&&(K(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),mu(i.children,t,m,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:zf(d,i.index),routesMeta:m})};return e.forEach((i,s)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))l(i,s);else for(let c of pu(i.path))l(i,s,c)}),t}function pu(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,l=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return l?[i,""]:[i];let s=pu(n.join("/")),o=[];return o.push(...s.map(c=>c===""?i:[i,c].join("/"))),l&&o.push(...s),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function wf(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Ef(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const jf=/^:[\w-]+$/,bf=3,kf=2,Nf=1,Sf=10,Cf=-2,Ao=e=>e==="*";function zf(e,t){let r=e.split("/"),n=r.length;return r.some(Ao)&&(n+=Cf),t&&(n+=kf),r.filter(l=>!Ao(l)).reduce((l,i)=>l+(jf.test(i)?bf:i===""?Nf:Sf),n)}function Ef(e,t){return e.length===t.length&&e.slice(0,-1).every((n,l)=>n===t[l])?e[e.length-1]-t[t.length-1]:0}function Pf(e,t,r){let{routesMeta:n}=e,l={},i="/",s=[];for(let o=0;o<n.length;++o){let c=n[o],d=o===n.length-1,m=i==="/"?t:t.slice(i.length)||"/",p=_f({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),g=c.route;if(!p)return null;Object.assign(l,p.params),s.push({params:l,pathname:Ct([i,p.pathname]),pathnameBase:Of(Ct([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=Ct([i,p.pathnameBase]))}return s}function _f(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Lf(e.path,e.caseSensitive,e.end),l=t.match(r);if(!l)return null;let i=l[0],s=i.replace(/(.)\/+$/,"$1"),o=l.slice(1);return{params:n.reduce((d,m,p)=>{let{paramName:g,isOptional:j}=m;if(g==="*"){let v=o[p]||"";s=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const x=o[p];return j&&!x?d[g]=void 0:d[g]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:s,pattern:e}}function Lf(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),js(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,c)=>(n.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),n]}function Mf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return js(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function bs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Tf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rf=e=>Tf.test(e);function If(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:l=""}=typeof e=="string"?_r(e):e,i;if(r)if(Rf(r))i=r;else{if(r.includes("//")){let s=r;r=fu(r),js(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?i=Bo(r.substring(1),"/"):i=Bo(r,t)}else i=t;return{pathname:i,search:Uf(n),hash:Df(l)}}function Bo(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function zl(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $f(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function ks(e,t){let r=$f(e);return t?r.map((n,l)=>l===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Ns(e,t,r,n){n===void 0&&(n=!1);let l;typeof e=="string"?l=_r(e):(l=jn({},e),K(!l.pathname||!l.pathname.includes("?"),zl("?","pathname","search",l)),K(!l.pathname||!l.pathname.includes("#"),zl("#","pathname","hash",l)),K(!l.search||!l.search.includes("#"),zl("#","search","hash",l)));let i=e===""||l.pathname==="",s=i?"/":l.pathname,o;if(s==null)o=r;else{let p=t.length-1;if(!n&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),p-=1;l.pathname=g.join("/")}o=p>=0?t[p]:"/"}let c=If(l,o),d=s&&s!=="/"&&s.endsWith("/"),m=(i||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}const fu=e=>e.replace(/\/\/+/g,"/"),Ct=e=>fu(e.join("/")),Of=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Uf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Df=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ff(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hu=["post","put","patch","delete"];new Set(hu);const Af=["get",...hu];new Set(Af);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bn(){return bn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},bn.apply(null,arguments)}const Ss=w.createContext(null),Bf=w.createContext(null),Mt=w.createContext(null),Xa=w.createContext(null),Tt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),gu=w.createContext(null);function Vf(e,t){let{relative:r}=t===void 0?{}:t;Lr()||K(!1);let{basename:n,navigator:l}=w.useContext(Mt),{hash:i,pathname:s,search:o}=yu(e,{relative:r}),c=s;return n!=="/"&&(c=s==="/"?n:Ct([n,s])),l.createHref({pathname:c,search:o,hash:i})}function Lr(){return w.useContext(Xa)!=null}function Mr(){return Lr()||K(!1),w.useContext(Xa).location}function vu(e){w.useContext(Mt).static||w.useLayoutEffect(e)}function Tr(){let{isDataRoute:e}=w.useContext(Tt);return e?rh():Wf()}function Wf(){Lr()||K(!1);let e=w.useContext(Ss),{basename:t,future:r,navigator:n}=w.useContext(Mt),{matches:l}=w.useContext(Tt),{pathname:i}=Mr(),s=JSON.stringify(ks(l,r.v7_relativeSplatPath)),o=w.useRef(!1);return vu(()=>{o.current=!0}),w.useCallback(function(d,m){if(m===void 0&&(m={}),!o.current)return;if(typeof d=="number"){n.go(d);return}let p=Ns(d,JSON.parse(s),i,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Ct([t,p.pathname])),(m.replace?n.replace:n.push)(p,m.state,m)},[t,n,s,i,e])}function yu(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=w.useContext(Mt),{matches:l}=w.useContext(Tt),{pathname:i}=Mr(),s=JSON.stringify(ks(l,n.v7_relativeSplatPath));return w.useMemo(()=>Ns(e,JSON.parse(s),i,r==="path"),[e,s,i,r])}function Hf(e,t){return Jf(e,t)}function Jf(e,t,r,n){Lr()||K(!1);let{navigator:l}=w.useContext(Mt),{matches:i}=w.useContext(Tt),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=Mr(),m;if(t){var p;let b=typeof t=="string"?_r(t):t;c==="/"||(p=b.pathname)!=null&&p.startsWith(c)||K(!1),m=b}else m=d;let g=m.pathname||"/",j=g;if(c!=="/"){let b=c.replace(/^\//,"").split("/");j="/"+g.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=yf(e,{pathname:j}),v=Gf(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},o,b.params),pathname:Ct([c,l.encodeLocation?l.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:Ct([c,l.encodeLocation?l.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,r,n);return t&&v?w.createElement(Xa.Provider,{value:{location:bn({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:vt.Pop}},v):v}function Yf(){let e=th(),t=Ff(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),r?w.createElement("pre",{style:l},r):null,null)}const Qf=w.createElement(Yf,null);class Kf extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?w.createElement(Tt.Provider,{value:this.props.routeContext},w.createElement(gu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xf(e){let{routeContext:t,match:r,children:n}=e,l=w.useContext(Ss);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),w.createElement(Tt.Provider,{value:t},n)}function Gf(e,t,r,n){var l;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var i;if(!r)return null;if(r.errors)e=r.matches;else if((i=n)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,o=(l=r)==null?void 0:l.errors;if(o!=null){let m=s.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);m>=0||K(!1),s=s.slice(0,Math.min(s.length,m+1))}let c=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let m=0;m<s.length;m++){let p=s[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:g,errors:j}=r,x=p.route.loader&&g[p.route.id]===void 0&&(!j||j[p.route.id]===void 0);if(p.route.lazy||x){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((m,p,g)=>{let j,x=!1,v=null,b=null;r&&(j=o&&p.route.id?o[p.route.id]:void 0,v=p.route.errorElement||Qf,c&&(d<0&&g===0?(nh("route-fallback"),x=!0,b=null):d===g&&(x=!0,b=p.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,g+1)),u=()=>{let h;return j?h=v:x?h=b:p.route.Component?h=w.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=m,w.createElement(Xf,{match:p,routeContext:{outlet:m,matches:f,isDataRoute:r!=null},children:h})};return r&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?w.createElement(Kf,{location:r.location,revalidation:r.revalidation,component:v,error:j,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var xu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xu||{}),wu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wu||{});function qf(e){let t=w.useContext(Ss);return t||K(!1),t}function Zf(e){let t=w.useContext(Bf);return t||K(!1),t}function eh(e){let t=w.useContext(Tt);return t||K(!1),t}function ju(e){let t=eh(),r=t.matches[t.matches.length-1];return r.route.id||K(!1),r.route.id}function th(){var e;let t=w.useContext(gu),r=Zf(),n=ju();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function rh(){let{router:e}=qf(xu.UseNavigateStable),t=ju(wu.UseNavigateStable),r=w.useRef(!1);return vu(()=>{r.current=!0}),w.useCallback(function(l,i){i===void 0&&(i={}),r.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,bn({fromRouteId:t},i)))},[e,t])}const Vo={};function nh(e,t,r){Vo[e]||(Vo[e]=!0)}function ah(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function tn(e){let{to:t,replace:r,state:n,relative:l}=e;Lr()||K(!1);let{future:i,static:s}=w.useContext(Mt),{matches:o}=w.useContext(Tt),{pathname:c}=Mr(),d=Tr(),m=Ns(t,ks(o,i.v7_relativeSplatPath),c,l==="path"),p=JSON.stringify(m);return w.useEffect(()=>d(JSON.parse(p),{replace:r,state:n,relative:l}),[d,p,l,r,n]),null}function Ue(e){K(!1)}function lh(e){let{basename:t="/",children:r=null,location:n,navigationType:l=vt.Pop,navigator:i,static:s=!1,future:o}=e;Lr()&&K(!1);let c=t.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:c,navigator:i,static:s,future:bn({v7_relativeSplatPath:!1},o)}),[c,o,i,s]);typeof n=="string"&&(n=_r(n));let{pathname:m="/",search:p="",hash:g="",state:j=null,key:x="default"}=n,v=w.useMemo(()=>{let b=bs(m,c);return b==null?null:{location:{pathname:b,search:p,hash:g,state:j,key:x},navigationType:l}},[c,m,p,g,j,x,l]);return v==null?null:w.createElement(Mt.Provider,{value:d},w.createElement(Xa.Provider,{children:r,value:v}))}function ih(e){let{children:t,location:r}=e;return Hf(bi(t),r)}new Promise(()=>{});function bi(e,t){t===void 0&&(t=[]);let r=[];return w.Children.forEach(e,(n,l)=>{if(!w.isValidElement(n))return;let i=[...t,l];if(n.type===w.Fragment){r.push.apply(r,bi(n.props.children,i));return}n.type!==Ue&&K(!1),!n.props.index||!n.props.children||K(!1);let s={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=bi(n.props.children,i)),r.push(s)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ki.apply(null,arguments)}function sh(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function oh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ch(e,t){return e.button===0&&(!t||t==="_self")&&!oh(e)}const dh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],uh="6";try{window.__reactRouterVersion=uh}catch{}const mh="startTransition",Wo=rm[mh];function ph(e){let{basename:t,children:r,future:n,window:l}=e,i=w.useRef();i.current==null&&(i.current=hf({window:l,v5Compat:!0}));let s=i.current,[o,c]=w.useState({action:s.action,location:s.location}),{v7_startTransition:d}=n||{},m=w.useCallback(p=>{d&&Wo?Wo(()=>c(p)):c(p)},[c,d]);return w.useLayoutEffect(()=>s.listen(m),[s,m]),w.useEffect(()=>ah(n),[n]),w.createElement(lh,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:s,future:n})}const fh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,et=w.forwardRef(function(t,r){let{onClick:n,relative:l,reloadDocument:i,replace:s,state:o,target:c,to:d,preventScrollReset:m,viewTransition:p}=t,g=sh(t,dh),{basename:j}=w.useContext(Mt),x,v=!1;if(typeof d=="string"&&hh.test(d)&&(x=d,fh))try{let h=new URL(window.location.href),y=d.startsWith("//")?new URL(h.protocol+d):new URL(d),k=bs(y.pathname,j);y.origin===h.origin&&k!=null?d=k+y.search+y.hash:v=!0}catch{}let b=Vf(d,{relative:l}),f=gh(d,{replace:s,state:o,target:c,preventScrollReset:m,relative:l,viewTransition:p});function u(h){n&&n(h),h.defaultPrevented||f(h)}return w.createElement("a",ki({},g,{href:x||b,onClick:v||i?n:u,ref:r,target:c}))});var Ho;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ho||(Ho={}));var Jo;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Jo||(Jo={}));function gh(e,t){let{target:r,replace:n,state:l,preventScrollReset:i,relative:s,viewTransition:o}=t===void 0?{}:t,c=Tr(),d=Mr(),m=yu(e,{relative:s});return w.useCallback(p=>{if(ch(p,r)){p.preventDefault();let g=n!==void 0?n:Ma(d)===Ma(m);c(e,{replace:g,state:l,preventScrollReset:i,relative:s,viewTransition:o})}},[d,c,m,n,l,r,e,i,s,o])}const bu=w.createContext(null),vh=({children:e})=>{const[t,r]=w.useState(null),[n,l]=w.useState(!0);w.useEffect(()=>{const m=localStorage.getItem("currentUser");if(m)try{r(JSON.parse(m))}catch(p){console.error("Failed to parse current user",p),localStorage.removeItem("currentUser")}l(!1)},[]);const i={name:"Admin",surname:"User",email:"admin@example.com",password:"Admin@12345",role:"admin"},s=()=>{try{const m=JSON.parse(localStorage.getItem("users")||"[]");m.some(g=>{var j;return((j=g.email)==null?void 0:j.toLowerCase())===i.email.toLowerCase()})||(m.push({name:i.name,surname:i.surname,email:i.email,password:i.password,role:i.role}),localStorage.setItem("users",JSON.stringify(m)))}catch{}};w.useEffect(()=>{s();const m=localStorage.getItem("currentUser");if(m)try{r(JSON.parse(m))}catch(p){console.error("Failed to parse current user",p),localStorage.removeItem("currentUser")}l(!1)},[]);const o=(m,p)=>{if(s(),m.toLowerCase()===i.email.toLowerCase()&&p===i.password){const x={name:i.name,surname:i.surname,email:i.email,role:i.role};return localStorage.setItem("currentUser",JSON.stringify(x)),r(x),{success:!0,message:"Logged in successfully!"}}const j=JSON.parse(localStorage.getItem("users")||"[]").find(x=>x.email.toLowerCase()===m.toLowerCase()&&x.password===p);if(j){const x={name:j.name,surname:j.surname,email:j.email,role:j.role};return localStorage.setItem("currentUser",JSON.stringify(x)),r(x),{success:!0,message:"Logged in successfully!"}}return{success:!1,message:"Invalid email or password."}},c=(m,p,g,j,x)=>{if(x==="admin")return{success:!1,message:"Admin accounts are pre-created. Please contact support."};const v=JSON.parse(localStorage.getItem("users")||"[]");if(v.some(u=>u.email.toLowerCase()===g.toLowerCase()))return{success:!1,message:"Email is already registered."};const f={name:m,surname:p,email:g,password:j,role:x};return v.push(f),localStorage.setItem("users",JSON.stringify(v)),{success:!0,message:"Registration successful! You can now log in."}},d=()=>{localStorage.removeItem("currentUser"),r(null)};return a.jsx(bu.Provider,{value:{user:t,loading:n,login:o,register:c,logout:d},children:!n&&e})},Pe=()=>{const e=w.useContext(bu);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},Ga=e=>{switch(e){case"admin":return"/admin-dashboard";case"employer":return"/employer-dashboard";case"candidate":return"/candidate-dashboard";default:return"/login"}},$t=({children:e,requiredRole:t,allowedRoles:r})=>{const{user:n}=Pe();if(!n)return a.jsx(tn,{to:"/login",replace:!0});const l=Ga(n.role);return t&&n.role!==t?a.jsx(tn,{to:l,replace:!0}):r&&!r.includes(n.role)?a.jsx(tn,{to:l,replace:!0}):e};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ku=(...e)=>e.filter((t,r,n)=>!!t&&n.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:l="",children:i,iconNode:s,...o},c)=>w.createElement("svg",{ref:c,...xh,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:ku("lucide",l),...o},[...s.map(([d,m])=>w.createElement(d,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(e,t)=>{const r=w.forwardRef(({className:n,...l},i)=>w.createElement(wh,{ref:i,iconNode:t,className:ku(`lucide-${yh(e)}`,n),...l}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=M("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=M("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=M("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=M("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=M("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=M("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=M("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=M("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=M("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=M("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=M("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=M("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=M("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=M("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=M("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=M("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=M("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=M("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=M("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=M("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=M("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=M("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=M("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=M("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=M("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=M("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=M("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=M("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=M("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=M("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=M("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=M("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=M("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=M("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=M("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=M("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=M("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=M("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=M("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=M("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Ot=()=>{const{user:e,logout:t}=Pe(),r=Mr(),n=i=>r.pathname===i,l=Ga(e==null?void 0:e.role);return a.jsxs("nav",{className:"navbar-container",children:[a.jsxs("div",{className:"navbar-inner",children:[a.jsxs(et,{to:l,className:"navbar-logo",children:[a.jsx(Lh,{className:"logo-icon",size:24}),a.jsxs("span",{className:"logo-text",children:["CareerPilot",a.jsx("span",{className:"logo-accent",children:"AI"})]})]}),a.jsx("div",{className:"navbar-links",children:(e==null?void 0:e.role)==="admin"?a.jsxs(et,{to:"/admin-dashboard",className:`nav-link ${n("/admin-dashboard")?"active":""}`,children:[a.jsx(Ko,{size:18}),a.jsx("span",{children:"Admin Dashboard"})]}):a.jsxs(a.Fragment,{children:[a.jsxs(et,{to:l,className:`nav-link ${n(l)?"active":""}`,children:[a.jsx(Ko,{size:18}),a.jsx("span",{children:"Dashboard"})]}),(e==null?void 0:e.role)==="employer"&&a.jsxs(et,{to:"/create-job",className:`nav-link ${n("/create-job")?"active":""}`,children:[a.jsx(Nh,{size:18}),a.jsx("span",{children:"Create Job"})]}),a.jsxs(et,{to:"/view-jobs",className:`nav-link ${n("/view-jobs")?"active":""}`,children:[a.jsx(be,{size:18}),a.jsx("span",{children:"View Jobs"})]}),a.jsxs(et,{to:"/profile",className:`nav-link ${n("/profile")?"active":""}`,children:[a.jsx(kn,{size:18}),a.jsx("span",{children:"Profile"})]})]})}),e&&a.jsxs("div",{className:"navbar-user-section",children:[a.jsxs("div",{className:"user-profile",children:[a.jsx("div",{className:"user-avatar",children:a.jsx(kn,{size:16})}),a.jsxs("span",{className:"user-name",children:[e.name," ",e.surname]})]}),a.jsxs("button",{onClick:t,className:"logout-btn",title:"Sign Out",children:[a.jsx(zh,{size:18}),a.jsx("span",{children:"Logout"})]})]})]}),a.jsx("style",{children:`
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
      `})]})},Rh=()=>{const{login:e,user:t}=Pe(),r=Tr(),[n,l]=w.useState({email:"",password:""}),[i,s]=w.useState({}),[o,c]=w.useState(""),[d,m]=w.useState(!1),p=()=>{const x={};return n.email?/\S+@\S+\.\S+/.test(n.email)||(x.email="Please enter a valid email address"):x.email="Email is required",n.password||(x.password="Password is required"),s(x),Object.keys(x).length===0},g=x=>{const{name:v,value:b}=x.target;l(f=>({...f,[v]:b})),i[v]&&s(f=>({...f,[v]:""})),c("")},j=async x=>{x.preventDefault(),p()&&(m(!0),c(""),setTimeout(()=>{const v=e(n.email,n.password);if(m(!1),v.success){const b=JSON.parse(localStorage.getItem("currentUser")||"{}");r(Ga(b.role))}else c(v.message)},800))};return a.jsxs("div",{className:"auth-page-container",children:[a.jsx("div",{className:"glow-circle top-right"}),a.jsx("div",{className:"glow-circle bottom-left"}),a.jsxs("div",{className:"auth-card-wrapper animate-slide-up",children:[a.jsxs("div",{className:"auth-header",children:[a.jsx("div",{className:"auth-logo",children:"🚀"}),a.jsx("h1",{className:"auth-title",children:"Welcome Back"}),a.jsx("p",{className:"auth-subtitle",children:"Sign in to manage your CVs & track your job progress"})]}),o&&a.jsxs("div",{className:"alert alert-error",children:[a.jsx(ce,{size:18}),a.jsx("span",{children:o})]}),a.jsxs("form",{onSubmit:j,className:"auth-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"email",children:"Email Address"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(zu,{className:"input-icon",size:18}),a.jsx("input",{type:"email",id:"email",name:"email",className:`form-input has-icon ${i.email?"is-invalid":""}`,placeholder:"you@example.com",value:n.email,onChange:g})]}),i.email&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),i.email]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"password",children:"Password"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(Ta,{className:"input-icon",size:18}),a.jsx("input",{type:"password",id:"password",name:"password",className:`form-input has-icon ${i.password?"is-invalid":""}`,placeholder:"••••••••",value:n.password,onChange:g})]}),i.password&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),i.password]})]}),a.jsx("button",{type:"submit",className:"btn btn-primary auth-submit-btn",disabled:d,children:d?a.jsx("span",{className:"spinner"}):a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"Sign In"}),a.jsx(Be,{size:18})]})})]}),a.jsxs("div",{className:"auth-footer",children:[a.jsx("span",{children:"Don't have an account?"})," ",a.jsx(et,{to:"/register",className:"auth-link",children:"Create an Account"})]})]}),a.jsx("style",{children:`
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
      `})]})},Ih=()=>{const{register:e}=Pe(),t=Tr(),[r,n]=w.useState({name:"",surname:"",email:"",password:"",confirmPassword:"",role:""}),[l,i]=w.useState({}),[s,o]=w.useState(""),[c,d]=w.useState(""),[m,p]=w.useState(!1),g=()=>{const v={};return r.name.trim()||(v.name="First name is required"),r.surname.trim()||(v.surname="Surname is required"),r.role||(v.role="Please select a role"),r.email?/\S+@\S+\.\S+/.test(r.email)||(v.email="Please enter a valid email address"):v.email="Email is required",r.password?r.password.length<8?v.password="Password must be at least 8 characters long":/[A-Z]/.test(r.password)?/[!@#$%^&*(),.?":{}|<>]/.test(r.password)||(v.password="Password must contain at least one special character"):v.password="Password must contain at least one capital letter":v.password="Password is required",r.password!==r.confirmPassword&&(v.confirmPassword="Passwords do not match"),i(v),Object.keys(v).length===0},j=v=>{const{name:b,value:f}=v.target;n(u=>({...u,[b]:f})),l[b]&&i(u=>({...u,[b]:""})),o("")},x=async v=>{v.preventDefault(),g()&&(p(!0),o(""),d(""),setTimeout(()=>{const b=e(r.name,r.surname,r.email,r.password,r.role);p(!1),b.success?(d(b.message),n({name:"",surname:"",email:"",password:"",confirmPassword:"",role:""}),setTimeout(()=>{t("/login")},2200)):o(b.message)},800))};return a.jsxs("div",{className:"auth-page-container",children:[a.jsx("div",{className:"glow-circle top-right"}),a.jsx("div",{className:"glow-circle bottom-left"}),a.jsxs("div",{className:"auth-card-wrapper animate-slide-up",children:[a.jsxs("div",{className:"auth-header",children:[a.jsx("div",{className:"auth-logo",children:"🚀"}),a.jsx("h1",{className:"auth-title",children:"Create Account"}),a.jsx("p",{className:"auth-subtitle",children:"Join CareerPilot and select your role to get started"})]}),s&&a.jsxs("div",{className:"alert alert-error",children:[a.jsx(ce,{size:18}),a.jsx("span",{children:s})]}),c&&a.jsxs("div",{className:"alert alert-success",children:[a.jsx(Cu,{size:18}),a.jsx("span",{children:c})]}),a.jsxs("form",{onSubmit:x,className:"auth-form",children:[a.jsxs("div",{className:"form-row-double",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"name",children:"Name"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(kn,{className:"input-icon",size:18}),a.jsx("input",{type:"text",id:"name",name:"name",className:`form-input has-icon ${l.name?"is-invalid":""}`,placeholder:"John",value:r.name,onChange:j})]}),l.name&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),l.name]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"surname",children:"Surname"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(kn,{className:"input-icon",size:18}),a.jsx("input",{type:"text",id:"surname",name:"surname",className:`form-input has-icon ${l.surname?"is-invalid":""}`,placeholder:"Doe",value:r.surname,onChange:j})]}),l.surname&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),l.surname]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Select Your Role"}),a.jsxs("div",{className:"role-selection",children:[a.jsxs("div",{className:`role-card ${r.role==="candidate"?"selected":""}`,onClick:()=>j({target:{name:"role",value:"candidate"}}),children:[a.jsx(Mu,{className:"role-icon",size:24}),a.jsx("h3",{className:"role-title",children:"Candidate"}),a.jsx("p",{className:"role-description",children:"Search for jobs and build your career"})]}),a.jsxs("div",{className:`role-card ${r.role==="employer"?"selected":""}`,onClick:()=>j({target:{name:"role",value:"employer"}}),children:[a.jsx(be,{className:"role-icon",size:24}),a.jsx("h3",{className:"role-title",children:"Employer"}),a.jsx("p",{className:"role-description",children:"Post jobs and find talent"})]})]}),l.role&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),l.role]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"email",children:"Email Address"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(zu,{className:"input-icon",size:18}),a.jsx("input",{type:"email",id:"email",name:"email",className:`form-input has-icon ${l.email?"is-invalid":""}`,placeholder:"john.doe@example.com",value:r.email,onChange:j})]}),l.email&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),l.email]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"password",children:"Password"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(Ta,{className:"input-icon",size:18}),a.jsx("input",{type:"password",id:"password",name:"password",className:`form-input has-icon ${l.password?"is-invalid":""}`,placeholder:"8+ chars, 1 capital, 1 special char",value:r.password,onChange:j})]}),l.password&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),l.password]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"confirmPassword",children:"Confirm Password"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(Ta,{className:"input-icon",size:18}),a.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",className:`form-input has-icon ${l.confirmPassword?"is-invalid":""}`,placeholder:"Confirm password",value:r.confirmPassword,onChange:j})]}),l.confirmPassword&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),l.confirmPassword]})]}),a.jsx("button",{type:"submit",className:"btn btn-primary auth-submit-btn",disabled:m||!!c,children:m?a.jsx("span",{className:"spinner"}):a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"Register"}),a.jsx(Be,{size:18})]})})]}),a.jsxs("div",{className:"auth-footer",children:[a.jsx("span",{children:"Already have an account?"})," ",a.jsx(et,{to:"/login",className:"auth-link",children:"Log In"})]})]}),a.jsx("style",{children:`
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
      `})]})},$h=()=>{const{user:e}=Pe(),[t,r]=w.useState({cvCount:2,applicationsSubmitted:4});w.useEffect(()=>{},[]);const n=["Tailor your CV's keywords to match the specific job listing for better recruiter match rates.","Keep your resume to 2 pages maximum. Focus on recent results and metrics over descriptions.","Quantify your accomplishments (e.g. 'Boosted sales by 20%' instead of 'Responsible for sales')."],l=n[new Date().getDay()%n.length];return a.jsxs("div",{className:"dashboard-wrapper animate-fade-in",children:[a.jsx("header",{className:"dashboard-header",children:a.jsxs("div",{children:[a.jsxs("h1",{className:"welcome-text",children:["Welcome back, ",a.jsxs("span",{className:"highlight-text",children:[e==null?void 0:e.name," ",e==null?void 0:e.surname]})]}),a.jsx("p",{className:"welcome-sub",children:"Here is what is happening with your career progress today."})]})}),a.jsxs("section",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card glass-card",children:[a.jsx("div",{className:"stat-icon-wrapper purple",children:a.jsx(Cr,{size:24})}),a.jsxs("div",{className:"stat-info",children:[a.jsx("span",{className:"stat-label",children:"AI CVs Generated"}),a.jsx("h2",{className:"stat-value",children:t.cvCount})]})]}),a.jsxs("div",{className:"stat-card glass-card",children:[a.jsx("div",{className:"stat-icon-wrapper green",children:a.jsx(Za,{size:24})}),a.jsxs("div",{className:"stat-info",children:[a.jsx("span",{className:"stat-label",children:"Applications Submitted"}),a.jsx("h2",{className:"stat-value",children:t.applicationsSubmitted})]})]})]}),a.jsxs("div",{className:"dashboard-grid",children:[a.jsxs("div",{className:"grid-main glass-card",children:[a.jsx("h3",{className:"section-title",children:"Quick Actions"}),a.jsx("div",{className:"actions-list",children:a.jsxs(et,{to:"/view-jobs",className:"action-row",children:[a.jsxs("div",{className:"action-meta",children:[a.jsx("h4",{className:"action-title",children:"View and manage jobs list"}),a.jsx("p",{className:"action-description",children:"Browse active careers, track application status, and review details."})]}),a.jsx(Be,{size:20,className:"action-arrow"})]})})]}),a.jsxs("div",{className:"grid-sidebar glass-card",children:[a.jsxs("div",{className:"sidebar-header",children:[a.jsx(Su,{size:20,className:"sidebar-icon"}),a.jsx("h3",{className:"sidebar-title",children:"Daily Career Tip"})]}),a.jsxs("p",{className:"tip-content",children:['"',l,'"']}),a.jsx("div",{className:"badge badge-success tip-badge",children:"PRO TIP"})]})]}),a.jsx("style",{children:`
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
      `})]})},Oh=()=>{const{user:e}=Pe(),[t,r]=w.useState(!0),[n,l]=w.useState(null),[i,s]=w.useState(null),[o,c]=w.useState(null),[d,m]=w.useState(null),[p,g]=w.useState([]),[j,x]=w.useState([]),v=w.useMemo(()=>e==null?void 0:e.email,[e]);w.useEffect(()=>{v&&(async()=>{r(!0);try{const h=localStorage.getItem(`profile_${v}`),y=localStorage.getItem(`jobs_${v}`),k=localStorage.getItem(`hustles_${v}`),S=localStorage.getItem(`careerPath_${v}`);h&&l(JSON.parse(h)),y&&s(JSON.parse(y)),k&&c(JSON.parse(k)),S&&m(JSON.parse(S));const C=localStorage.getItem(`uploaded_cvs_${v}`),P=localStorage.getItem(`generated_cvs_${v}`),O=localStorage.getItem(`cv_${v}`),_=localStorage.getItem(`generatedCv_${v}`),Z=$e=>{if(!$e)return[];try{const ge=JSON.parse($e);return Array.isArray(ge)?ge:ge&&typeof ge=="object"?[ge]:[]}catch{return[{fileName:String($e),createdAt:null}]}};g(Z(C)||(O?Z(O):[])),x(Z(P)||(_?Z(_):[]))}catch(h){console.error("Failed to load profile page data",h)}finally{r(!1)}})()},[v]);const b=({title:u,icon:h,children:y})=>a.jsxs("section",{className:"profile-section",children:[a.jsxs("div",{className:"profile-section-title",children:[h,a.jsx("h3",{children:u})]}),a.jsx("div",{className:"profile-section-body",children:y})]}),f=(u,h)=>{const y=(u==null?void 0:u.fileName)||(u==null?void 0:u.name)||(u==null?void 0:u.filename)||`CV ${h+1}`,k=(u==null?void 0:u.createdAt)||(u==null?void 0:u.date)||null,S=(u==null?void 0:u.url)||(u==null?void 0:u.downloadUrl)||null;return a.jsxs("div",{className:"cv-item",children:[a.jsxs("div",{className:"cv-meta",children:[a.jsx("div",{className:"cv-icon",children:a.jsx(Cr,{size:18})}),a.jsxs("div",{className:"cv-text",children:[a.jsx("div",{className:"cv-name",children:y}),a.jsx("div",{className:"cv-sub",children:k?new Date(k).toLocaleString():"—"})]})]}),S?a.jsxs("a",{className:"cv-download",href:S,target:"_blank",rel:"noreferrer",children:[a.jsx(Qo,{size:16}),a.jsx("span",{children:"Download"})]}):a.jsxs("div",{className:"cv-download disabled",title:"No download URL available",children:[a.jsx(Qo,{size:16}),a.jsx("span",{children:"Unavailable"})]})]},h)};return t?a.jsxs("div",{className:"profile-page",children:[a.jsxs("div",{className:"loading-state",children:[a.jsx("div",{className:"spinner"}),a.jsx("p",{children:"Loading your profile..."})]}),a.jsx("style",{children:`
          .profile-page { padding: 2rem; max-width: 1200px; margin: 0 auto; }
          .loading-state { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; color: var(--text-secondary); }
          .spinner { width: 42px; height: 42px; border: 3px solid rgba(99, 102, 241, 0.3); border-top-color: var(--color-primary); border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 1rem; }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):a.jsxs("div",{className:"profile-page",children:[a.jsx("header",{className:"profile-hero",children:a.jsxs("div",{className:"profile-hero-left",children:[a.jsx("div",{className:"profile-hero-icon",children:a.jsx(kn,{size:20})}),a.jsxs("div",{children:[a.jsx("h1",{className:"profile-hero-title",children:"Your Profile"}),a.jsx("p",{className:"profile-hero-sub",children:"Uploaded CVs, generated CVs, and your career information."})]})]})}),a.jsxs("div",{className:"profile-grid",children:[a.jsx(b,{title:"Uploaded CV",icon:a.jsx(Lu,{size:18}),children:p.length?a.jsx("div",{className:"cv-list",children:p.map(f)}):a.jsxs("div",{className:"empty-panel",children:[a.jsx("p",{children:"No uploaded CV found."}),a.jsx("p",{className:"muted",children:"Upload/update your CV from the dashboard."})]})}),a.jsx(b,{title:"Generated CVs",icon:a.jsx(Su,{size:18}),children:j.length?a.jsx("div",{className:"cv-list",children:j.map(f)}):a.jsxs("div",{className:"empty-panel",children:[a.jsx("p",{children:"No generated CVs found."}),a.jsx("p",{className:"muted",children:"Generate CVs using the CV builder flow (if enabled)."})]})}),a.jsx(b,{title:"Other Information",icon:a.jsx(be,{size:18}),children:n?a.jsxs("div",{className:"other-info",children:[a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Name"}),a.jsx("span",{className:"other-value",children:n.name||`${(e==null?void 0:e.name)||""} ${(e==null?void 0:e.surname)||""}`.trim()})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Experience"}),a.jsx("span",{className:"other-value",children:n.experience||"—"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Dominant Sector"}),a.jsx("span",{className:"other-value",children:n.dominantSector||"—"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Work Style"}),a.jsx("span",{className:"other-value",children:n.workStyle||"—"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Payment Preference"}),a.jsx("span",{className:"other-value",children:n.preferredPayment||"—"})]}),a.jsx("div",{className:"other-divider"}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Matched Jobs"}),a.jsx("span",{className:"other-value",children:Array.isArray(i)?i.length:"0"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Side Hustles"}),a.jsx("span",{className:"other-value",children:Array.isArray(o)?o.length:"0"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"5-Year Plan Steps"}),a.jsx("span",{className:"other-value",children:Array.isArray(d)?d.length:"0"})]}),Array.isArray(n.skills)&&n.skills.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"other-divider"}),a.jsxs("div",{className:"skills-mini",children:[a.jsx("div",{className:"skills-mini-title",children:"Top Skills"}),a.jsx("div",{className:"skills-mini-grid",children:n.skills.slice(0,10).map((u,h)=>a.jsxs("div",{className:"skill-chip",children:[a.jsx("span",{className:"skill-chip-name",children:u.name}),a.jsxs("span",{className:"skill-chip-level",children:[u.level,"%"]})]},h))})]})]})]}):a.jsxs("div",{className:"empty-panel",children:[a.jsx("p",{children:"No profile data found."}),a.jsx("p",{className:"muted",children:"Complete onboarding to see your profile and skills."})]})})]}),a.jsx("style",{children:`
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
      `})]})},Uh=({employerId:e="default-employer",candidateEmail:t,employerName:r})=>{const n=w.useMemo(()=>`thread_${t||"anonymous"}__${e||"default-employer"}`,[t,e]),l=r||"Employer",[i,s]=w.useState(!1),[o,c]=w.useState(""),[d,m]=w.useState(!1),[p,g]=w.useState([]),j=w.useMemo(()=>[{label:"Request interview time",text:"Thanks! Please share your availability (dates + timezone) and we’ll propose interview slots."},{label:"Ask about compensation",text:"Thanks for your question. We can discuss compensation after we confirm the role fit and next steps."},{label:"Follow up on portfolio",text:"Great—please send your portfolio/GitHub link(s). We’ll review them and get back to you."},{label:"Confirm receipt",text:"Thanks! We’ve received your message and will get back to you shortly."}],[]),x=w.useRef(null);w.useEffect(()=>{try{const k=localStorage.getItem(n);k&&g(JSON.parse(k))}catch{}},[n]),w.useEffect(()=>{try{localStorage.setItem(n,JSON.stringify(p))}catch{}},[p,n]),w.useEffect(()=>{var k;(k=x.current)==null||k.scrollIntoView({behavior:"smooth"})},[p,d]);const v=(k,S)=>{g(C=>[...C,{id:`${Date.now()}_${Math.random().toString(16).slice(2)}`,type:k,text:S,createdAt:new Date().toISOString()}])},b=async()=>{const k=o.trim();!k||d||(v("candidate",k),c(""),m(!0))};w.useEffect(()=>{if(!d)return;const k=setTimeout(()=>{m(!1)},650);return()=>clearTimeout(k)},[d]);const f=k=>{k.key==="Enter"&&!k.shiftKey&&(k.preventDefault(),b())},u=k=>{if(d)return;m(!0);const S=setTimeout(()=>{v("employer",k),m(!1)},650);return()=>clearTimeout(S)},h=()=>{g([]),c("");try{localStorage.removeItem(n)}catch{}},y=p.length>0;return a.jsxs(a.Fragment,{children:[!i&&a.jsx("div",{style:{position:"fixed",bottom:"2rem",right:"2rem",zIndex:1e3},children:a.jsxs("button",{className:"employer-chat-toggle",onClick:()=>s(!0),"aria-label":"Message Employer",title:"Message Employer",type:"button",children:[a.jsx(Pu,{size:24}),a.jsx("span",{className:"toggle-label",children:"Message Employer"})]})}),i&&a.jsxs("div",{className:"employer-chat-window",role:"dialog","aria-label":"Employer chat",children:[a.jsxs("div",{className:"employer-chat-header",children:[a.jsxs("div",{className:"employer-chat-title",children:[a.jsx("span",{className:"employer-chat-dot"}),a.jsxs("div",{children:[a.jsx("div",{className:"employer-chat-name",children:l}),a.jsx("div",{className:"employer-chat-sub",children:"In-app conversation"})]})]}),a.jsx("button",{className:"employer-chat-close",onClick:()=>s(!1),title:"Close",type:"button",children:a.jsx(Pn,{size:18})})]}),a.jsxs("div",{className:"employer-chat-messages",children:[!y&&a.jsxs("div",{className:"employer-chat-empty",children:[a.jsx("div",{className:"employer-chat-empty-title",children:"Start the conversation"}),a.jsx("div",{className:"employer-chat-empty-sub",children:"Send a message to your employer about your application."})]}),p.map(k=>a.jsx("div",{className:`employer-chat-bubble ${k.type}`,children:a.jsx("div",{className:"employer-chat-bubble-text",children:k.text})},k.id)),d&&a.jsx("div",{className:"employer-chat-bubble employer",children:a.jsx("div",{className:"employer-chat-typing",children:"Typing…"})}),a.jsx("div",{ref:x})]}),a.jsxs("div",{className:"employer-chat-presets",children:[a.jsxs("div",{className:"employer-chat-presets-title",children:[a.jsx(Lu,{size:16}),a.jsx("span",{children:"Employer reply (demo)"})]}),a.jsxs("div",{className:"employer-chat-presets-grid",children:[j.map(k=>a.jsx("button",{type:"button",className:"employer-chat-preset",onClick:()=>u(k.text),disabled:d,title:k.label,children:k.label},k.label)),a.jsx("button",{type:"button",className:"employer-chat-preset employer-chat-preset-secondary",onClick:h,disabled:d||p.length===0,title:"Clear conversation",children:"Clear"})]})]}),a.jsxs("div",{className:"employer-chat-input",children:[a.jsx("textarea",{className:"employer-chat-textarea",placeholder:"Write your message...",value:o,onChange:k=>c(k.target.value),onKeyPress:f,rows:1}),a.jsx("button",{className:"employer-chat-send",onClick:b,disabled:!o.trim()||d,type:"button","aria-label":"Send",title:"Send",children:a.jsx(qa,{size:18})})]})]}),a.jsx("style",{children:`
        .employer-chat-toggle {
          position: fixed;
          bottom: 7.5rem;
          right: 2rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 9999px;
          padding: 0.95rem 1.25rem;
          color: var(--text-primary);
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 8px 26px rgba(0,0,0,0.25);
          z-index: 1000;
          transition: transform var(--transition-fast);
        }
        .employer-chat-toggle:hover { transform: translateY(-2px); }
        .toggle-label { font-size: 0.95rem; color: var(--text-primary); }

        .employer-chat-window {
          position: fixed;
          bottom: 7.5rem;
          right: 2rem;
          width: 460px;
          max-width: calc(100vw - 2rem);
          height: 640px;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          overflow: hidden;
        }

        .employer-chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--border-glass);
          background: rgba(16,185,129,0.12);
        }

        .employer-chat-title { display: flex; align-items: center; gap: 0.8rem; }
        .employer-chat-dot {
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background: #10b981;
          box-shadow: 0 0 0 4px rgba(16,185,129,0.15);
        }
        .employer-chat-name { font-weight: 900; color: var(--text-primary); font-size: 0.95rem; }
        .employer-chat-sub { color: var(--text-muted); font-size: 0.8rem; margin-top: 0.1rem; }

        .employer-chat-close {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--radius-sm);
        }
        .employer-chat-close:hover { background: rgba(255,255,255,0.08); color: var(--text-primary); }

        .employer-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1rem 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .employer-chat-empty {
          margin-top: 4rem;
          text-align: center;
          color: var(--text-muted);
        }
        .employer-chat-empty-title { font-weight: 900; color: var(--text-primary); font-size: 1rem; }
        .employer-chat-empty-sub { margin-top: 0.4rem; font-size: 0.9rem; }

        .employer-chat-bubble {
          max-width: 85%;
          padding: 0.65rem 0.85rem;
          border-radius: 16px;
          border: 1px solid var(--border-glass);
          background: rgba(255,255,255,0.03);
        }
        .employer-chat-bubble.candidate {
          align-self: flex-end;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border-color: rgba(99,102,241,0.35);
          color: white;
        }
        .employer-chat-bubble.employer {
          align-self: flex-start;
          background: rgba(255,255,255,0.04);
        }
        .employer-chat-bubble-text { white-space: pre-wrap; word-break: break-word; font-size: 0.92rem; line-height: 1.45; }

        .employer-chat-typing { color: var(--text-secondary); font-size: 0.9rem; }

        .employer-chat-presets {
          padding: 0.75rem 1.1rem;
          border-top: 1px solid var(--border-glass);
          background: rgba(255,255,255,0.02);
        }
        .employer-chat-presets-title {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-secondary);
          margin-bottom: 0.6rem;
        }
        .employer-chat-presets-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.5rem;
        }
        .employer-chat-preset {
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          padding: 0.55rem 0.7rem;
          border-radius: var(--radius-md);
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 650;
          transition: transform var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
          text-align: left;
        }
        .employer-chat-preset:hover:not(:disabled) {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.07);
          border-color: rgba(99,102,241,0.25);
        }
        .employer-chat-preset:disabled {
          opacity: 0.55;
          cursor: not-allowed;
          transform: none;
        }
        .employer-chat-preset-secondary {
          grid-column: span 2;
          background: rgba(255,255,255,0.03);
          border-color: rgba(239,68,68,0.25);
          color: #fecaca;
        }

        .employer-chat-input {
          padding: 0.9rem 1.1rem;
          border-top: 1px solid var(--border-glass);
          display: flex;
          gap: 0.75rem;
          background: rgba(255,255,255,0.02);
        }

        .employer-chat-textarea {
          flex: 1;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 0.7rem 0.9rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          resize: none;
          font-family: inherit;
          min-height: 44px;
          max-height: 140px;
        }
        .employer-chat-textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
        }

        .employer-chat-send {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast), opacity var(--transition-fast);
        }
        .employer-chat-send:hover:not(:disabled) { transform: scale(1.05); }
        .employer-chat-send:disabled { opacity: 0.55; cursor: not-allowed; }

        @media (max-width: 480px) {
          .employer-chat-toggle,
          .employer-chat-window {
            right: 1rem;
            bottom: 6.5rem;
          }
          .employer-chat-toggle { bottom: 6.5rem; }
          .employer-chat-window { width: calc(100vw - 2rem); height: 66vh; }
          .employer-chat-presets-grid { grid-template-columns: 1fr; }
          .employer-chat-preset-secondary { grid-column: span 1; }
        }
      `})]})},Dh=()=>{const e=Tr(),[t,r]=w.useState({title:"",company:"",location:"",type:"Full-time",salary:"",description:""}),[n,l]=w.useState({}),[i,s]=w.useState(!1),[o,c]=w.useState(!1),d=()=>{const g={};return t.title.trim()||(g.title="Job title is required"),t.company.trim()||(g.company="Company name is required"),t.location.trim()||(g.location="Location is required"),t.salary.trim()||(g.salary="Salary/Compensation is required"),t.description.trim()||(g.description="Job description is required"),l(g),Object.keys(g).length===0},m=g=>{const{name:j,value:x}=g.target;r(v=>({...v,[j]:x})),n[j]&&l(v=>({...v,[j]:""}))},p=g=>{g.preventDefault(),d()&&(c(!0),setTimeout(()=>{const j=JSON.parse(localStorage.getItem("jobs")||"[]"),x={id:Date.now(),...t,status:"Active",createdAt:new Date().toLocaleDateString()};j.unshift(x),localStorage.setItem("jobs",JSON.stringify(j)),c(!1),s(!0),r({title:"",company:"",location:"",type:"Full-time",salary:"",description:""}),setTimeout(()=>{e("/view-jobs")},1500)},800))};return a.jsxs("div",{className:"create-job-wrapper animate-fade-in",children:[a.jsxs("header",{className:"page-header",children:[a.jsxs("button",{onClick:()=>e("/"),className:"back-btn",children:[a.jsx(jh,{size:18}),a.jsx("span",{children:"Back to Dashboard"})]}),a.jsx("h1",{className:"page-title",children:"Create Job Listing"}),a.jsx("p",{className:"page-subtitle",children:"Publish a new career opportunity to the database"})]}),i&&a.jsxs("div",{className:"alert alert-success",children:[a.jsx(Cu,{size:18}),a.jsx("span",{children:"Job listing created successfully! Redirecting to jobs board..."})]}),a.jsx("div",{className:"form-card glass-card",children:a.jsxs("form",{onSubmit:p,children:[a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"title",children:"Job Title"}),a.jsx("input",{type:"text",id:"title",name:"title",className:`form-input ${n.title?"is-invalid":""}`,placeholder:"Software Engineer",value:t.title,onChange:m}),n.title&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),n.title]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"company",children:"Company"}),a.jsx("input",{type:"text",id:"company",name:"company",className:`form-input ${n.company?"is-invalid":""}`,placeholder:"Google",value:t.company,onChange:m}),n.company&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),n.company]})]})]}),a.jsxs("div",{className:"form-row-triple",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"location",children:"Location"}),a.jsx("input",{type:"text",id:"location",name:"location",className:`form-input ${n.location?"is-invalid":""}`,placeholder:"Remote / San Francisco, CA",value:t.location,onChange:m}),n.location&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),n.location]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"type",children:"Job Type"}),a.jsxs("select",{id:"type",name:"type",className:"form-input select-input",value:t.type,onChange:m,children:[a.jsx("option",{value:"Full-time",children:"Full-time"}),a.jsx("option",{value:"Part-time",children:"Part-time"}),a.jsx("option",{value:"Contract",children:"Contract"}),a.jsx("option",{value:"Internship",children:"Internship"}),a.jsx("option",{value:"Remote",children:"Remote Only"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"salary",children:"Salary / Compensation"}),a.jsx("input",{type:"text",id:"salary",name:"salary",className:`form-input ${n.salary?"is-invalid":""}`,placeholder:"e.g. $120,000 - $140,000",value:t.salary,onChange:m}),n.salary&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),n.salary]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"description",children:"Job Description"}),a.jsx("textarea",{id:"description",name:"description",rows:"6",className:`form-input textarea-input ${n.description?"is-invalid":""}`,placeholder:"Outline the responsibilities, requirements, and benefits of the role...",value:t.description,onChange:m}),n.description&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),n.description]})]}),a.jsxs("div",{className:"form-actions",children:[a.jsx("button",{type:"button",onClick:()=>e("/"),className:"btn btn-secondary cancel-btn",disabled:o,children:"Cancel"}),a.jsx("button",{type:"submit",className:"btn btn-primary submit-btn",disabled:o||i,children:o?a.jsx("span",{className:"spinner"}):a.jsxs(a.Fragment,{children:[a.jsx(Cs,{size:18}),a.jsx("span",{children:"Publish Job Listing"})]})})]})]})}),a.jsx("style",{children:`
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
      `})]})},Fh=()=>{const e=Tr(),{user:t}=Pe(),[r,n]=w.useState([]);w.useEffect(()=>{const s=localStorage.getItem("jobs");if(s)n(JSON.parse(s));else{const o=[{id:1,title:"Senior Frontend Engineer",company:"Stripe",location:"San Francisco, CA (Hybrid)",type:"Full-time",salary:"$165,000 - $190,000",description:"Looking for a product-minded engineer to lead frontend architecture for payments UI.",status:"Active",createdAt:"2026-07-01"},{id:2,title:"Lead UX Designer",company:"Linear",location:"Remote (US/Europe)",type:"Remote",salary:"$140,000 - $160,000",description:"Shape the next generation of software tracking tools. Requires 5+ years of design systems experience.",status:"Active",createdAt:"2026-07-02"}];localStorage.setItem("jobs",JSON.stringify(o)),n(o)}},[]);const l=s=>{const o=r.filter(c=>c.id!==s);localStorage.setItem("jobs",JSON.stringify(o)),n(o)},i=s=>{switch(s){case"Full-time":return"badge-fulltime";case"Remote":return"badge-remote";case"Contract":return"badge-contract";default:return"badge-other"}};return a.jsxs("div",{className:"view-jobs-wrapper animate-fade-in",children:[a.jsxs("header",{className:"page-header",children:[a.jsx("h1",{className:"page-title",children:"Active Job Listings"}),a.jsx("p",{className:"page-subtitle",children:"Track, update, and manage candidate opportunities"})]}),a.jsxs("div",{className:"table-actions",children:[a.jsxs("span",{className:"results-count",children:[r.length," Listings Found"]}),(t==null?void 0:t.role)==="employer"&&a.jsxs("button",{onClick:()=>e("/create-job"),className:"btn btn-primary add-job-btn",children:[a.jsx(Cs,{size:18}),a.jsx("span",{children:"Add New Job"})]})]}),r.length===0?a.jsxs("div",{className:"empty-state glass-card",children:[a.jsx(be,{size:48,className:"empty-icon"}),a.jsx("h3",{children:"No Job Listings Found"}),(t==null?void 0:t.role)==="employer"?a.jsxs(a.Fragment,{children:[a.jsx("p",{children:"Get started by creating your first job listing today."}),a.jsx("button",{onClick:()=>e("/create-job"),className:"btn btn-primary empty-btn",children:"Create Job"})]}):a.jsx("p",{children:"Check back later for new job opportunities."})]}):a.jsx("div",{className:"jobs-list",children:r.map(s=>a.jsxs("div",{className:"job-card glass-card",children:[a.jsxs("div",{className:"job-card-header",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"job-title",children:s.title}),a.jsx("span",{className:"job-company",children:s.company})]}),a.jsxs("div",{className:"job-meta-badges",children:[a.jsx("span",{className:`badge ${i(s.type)}`,children:s.type}),a.jsx("span",{className:"badge badge-success",children:s.status})]})]}),a.jsx("p",{className:"job-description",children:s.description}),a.jsxs("div",{className:"job-card-footer",children:[a.jsxs("div",{className:"job-meta-details",children:[a.jsxs("div",{className:"meta-item",children:[a.jsx(Eu,{size:16}),a.jsx("span",{children:s.location})]}),a.jsxs("div",{className:"meta-item",children:[a.jsx(Si,{size:16}),a.jsx("span",{children:s.salary})]}),a.jsxs("div",{className:"meta-item",children:[a.jsx(kh,{size:16}),a.jsxs("span",{children:["Added ",s.createdAt]})]})]}),(t==null?void 0:t.role)==="employer"&&a.jsxs("button",{onClick:()=>l(s.id),className:"delete-job-btn",title:"Delete Listing",children:[a.jsx(Ci,{size:18}),a.jsx("span",{children:"Delete"})]})]})]},s.id))}),a.jsx("style",{children:`
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
      `})]})},Tu=[{name:"JavaScript",keywords:["javascript","js","react","node","frontend","web developer"]},{name:"Python",keywords:["python","django","flask","data science","machine learning"]},{name:"Project Management",keywords:["project management","pm","agile","scrum","leadership"]},{name:"UI/UX Design",keywords:["ui","ux","design","figma","wireframe","user experience"]},{name:"Forklift Operation",keywords:["forklift","warehouse","logistics"]},{name:"Power Tools",keywords:["power tools","construction","carpentry","building"]},{name:"Blueprint Reading",keywords:["blueprint","technical drawing","architectural"]},{name:"Safety Protocols",keywords:["safety","osha","hazard","compliance"]},{name:"Customer Service",keywords:["customer service","client","support","communication"]},{name:"Sales",keywords:["sales","revenue","negotiation","closing deals"]},{name:"Marketing",keywords:["marketing","social media","seo","content","campaign"]},{name:"Accounting",keywords:["accounting","bookkeeping","finance","excel","quickbooks"]},{name:"Team Leadership",keywords:["team lead","supervisor","management","mentor"]},{name:"Time Management",keywords:["time management","deadline","organized","efficient"]},{name:"SQL & Databases",keywords:["sql","database","postgres","mysql","data"]},{name:"Cloud Computing",keywords:["aws","azure","cloud","devops","docker"]}],Ah=[{sector:"Technology",keywords:["software","developer","engineer","programming","tech","it","javascript","python"]},{sector:"Construction & Trades",keywords:["construction","forklift","blueprint","carpentry","trades","building"]},{sector:"Design & Creative",keywords:["design","creative","ux","ui","graphic","brand"]},{sector:"Business & Finance",keywords:["finance","accounting","business","sales","marketing"]},{sector:"Healthcare",keywords:["healthcare","nurse","medical","patient","clinical"]},{sector:"Logistics & Operations",keywords:["warehouse","logistics","supply chain","operations"]}],Bh=[{title:"Freelance Web Projects",platform:"Upwork",earnings:"$500–$2,000/mo",timeCommitment:"5–10 hrs/week",skills:["JavaScript","UI/UX Design"]},{title:"Weekend Construction Gigs",platform:"TaskRabbit",earnings:"$200–$600/weekend",timeCommitment:"Weekends",skills:["Power Tools","Blueprint Reading"]},{title:"Online Tutoring",platform:"Preply",earnings:"$15–$40/hr",timeCommitment:"3–6 hrs/week",skills:["Customer Service","Time Management"]},{title:"Social Media Management",platform:"Fiverr",earnings:"$300–$1,500/mo",timeCommitment:"4–8 hrs/week",skills:["Marketing","Customer Service"]},{title:"Warehouse Shift Work",platform:"Indeed Flex",earnings:"$18–$25/hr",timeCommitment:"Flexible shifts",skills:["Forklift Operation","Safety Protocols"]},{title:"Data Entry & Admin",platform:"Remote.co",earnings:"$12–$20/hr",timeCommitment:"Part-time",skills:["Accounting","Time Management"]},{title:"UX Design Contracts",platform:"Toptal",earnings:"$60–$120/hr",timeCommitment:"Project-based",skills:["UI/UX Design","Project Management"]},{title:"Cloud Consulting",platform:"Contra",earnings:"$75–$150/hr",timeCommitment:"Evenings",skills:["Cloud Computing","Python"]}],Xo={Technology:[{year:"Year 1",title:"Junior Developer",salary:"$55k–$70k",icon:"💻"},{year:"Year 2",title:"Mid-Level Engineer",salary:"$75k–$95k",icon:"🚀"},{year:"Year 3",title:"Senior Developer",salary:"$100k–$130k",icon:"⭐"},{year:"Year 4",title:"Tech Lead",salary:"$120k–$150k",icon:"🎯"},{year:"Year 5",title:"Engineering Manager",salary:"$140k–$180k",icon:"👑"}],"Construction & Trades":[{year:"Year 1",title:"Skilled Tradesperson",salary:"$40k–$55k",icon:"🔧"},{year:"Year 2",title:"Site Supervisor",salary:"$55k–$70k",icon:"📋"},{year:"Year 3",title:"Project Coordinator",salary:"$65k–$80k",icon:"🏗️"},{year:"Year 4",title:"Construction Manager",salary:"$80k–$100k",icon:"🎯"},{year:"Year 5",title:"Operations Director",salary:"$95k–$120k",icon:"👑"}],"Design & Creative":[{year:"Year 1",title:"Junior Designer",salary:"$45k–$60k",icon:"🎨"},{year:"Year 2",title:"Product Designer",salary:"$65k–$85k",icon:"✨"},{year:"Year 3",title:"Senior UX Designer",salary:"$90k–$115k",icon:"⭐"},{year:"Year 4",title:"Design Lead",salary:"$110k–$140k",icon:"🎯"},{year:"Year 5",title:"Head of Design",salary:"$130k–$170k",icon:"👑"}],"Business & Finance":[{year:"Year 1",title:"Analyst / Associate",salary:"$45k–$60k",icon:"📊"},{year:"Year 2",title:"Account Manager",salary:"$60k–$75k",icon:"🤝"},{year:"Year 3",title:"Senior Consultant",salary:"$80k–$100k",icon:"⭐"},{year:"Year 4",title:"Department Lead",salary:"$100k–$130k",icon:"🎯"},{year:"Year 5",title:"Director",salary:"$120k–$160k",icon:"👑"}],default:[{year:"Year 1",title:"Entry-Level Specialist",salary:"$40k–$55k",icon:"🌱"},{year:"Year 2",title:"Experienced Professional",salary:"$55k–$70k",icon:"📈"},{year:"Year 3",title:"Senior Specialist",salary:"$70k–$90k",icon:"⭐"},{year:"Year 4",title:"Team Lead",salary:"$85k–$110k",icon:"🎯"},{year:"Year 5",title:"Department Manager",salary:"$100k–$130k",icon:"👑"}]};function _n(e){return(e||"").toLowerCase()}function Ru(e){const t=_n(e),r=[];return Tu.forEach(({name:n,keywords:l})=>{const i=l.filter(s=>t.includes(s)).length;if(i>0){const s=Math.min(95,60+i*12+Math.floor(Math.random()*8));r.push({name:n,level:s})}}),r.length===0?[{name:"Communication",level:75},{name:"Problem Solving",level:70},{name:"Time Management",level:72},{name:"Teamwork",level:78}]:r.sort((n,l)=>l.level-n.level).slice(0,8)}function Iu(e){const t=_n(e);let r={sector:"General Professional",score:0};return Ah.forEach(({sector:n,keywords:l})=>{const i=l.filter(s=>t.includes(s)).length;i>r.score&&(r={sector:n,score:i})}),r.sector}function Vh(e){const t=_n(e);return/remote|work from home|wfh|distributed/.test(t)?"Remote-first":/gig|contract|freelance|part-time|weekend/.test(t)?"Gig Economy":/hybrid/.test(t)?"Hybrid":"Full-time Employment"}function Wh(e){const t=_n(e);return/hourly|per hour|\/hr/.test(t)?"Hourly rate":/project|per project|contract basis/.test(t)?"Per-project basis":/salary|annual|yearly/.test(t)?"Annual salary":/gig|freelance/.test(t)?"Flexible / gig-based":"Competitive salary"}function $u(e,t){const r=Ru(e),n=Iu(e);return{name:t,dominantSector:n,workStyle:Vh(e),skills:r,experience:e.trim(),preferredPayment:Wh(e),lastUpdated:new Date().toISOString()}}function Ou(e,t){const r=`${e.name} ${t}`,n=Ru(r),l=Iu(r);return{name:t,dominantSector:l,workStyle:"Full-time Employment",skills:n,experience:`CV uploaded: ${e.name} (${Math.round(e.size/1024)} KB)`,preferredPayment:"Competitive salary",uploadedFile:e.name,lastUpdated:new Date().toISOString()}}function Hh(e,t,r){var n;if(t.method==="text"&&((n=t.rawText)!=null&&n.trim()))return{...$u(`${(e==null?void 0:e.experience)||""}
${t.rawText}`,r),experience:t.rawText.trim()};if(t.method==="upload"&&t.file){const l=Ou(t.file,r);return{...e,...l,skills:l.skills.length?l.skills:e==null?void 0:e.skills}}return e}function Jh(){const e=[{id:1,title:"Senior Frontend Engineer",company:"Stripe",location:"San Francisco, CA (Hybrid)",type:"Full-time",salary:"$165,000 - $190,000",description:"Looking for a product-minded engineer to lead frontend architecture for payments UI. Requires JavaScript, React, and web development experience.",status:"Active",createdAt:"2026-07-01"},{id:2,title:"Lead UX Designer",company:"Linear",location:"Remote (US/Europe)",type:"Remote",salary:"$140,000 - $160,000",description:"Shape the next generation of software tracking tools. Requires 5+ years of design systems, UI/UX, and Figma experience.",status:"Active",createdAt:"2026-07-02"},{id:3,title:"Construction Site Supervisor",company:"BuildRight Inc",location:"Austin, TX",type:"Full-time",salary:"$65,000 - $80,000",description:"Supervise construction crews, ensure safety protocols, read blueprints, and manage power tools on active building sites.",status:"Active",createdAt:"2026-07-03"},{id:4,title:"Marketing Coordinator",company:"GrowthLabs",location:"Remote",type:"Remote",salary:"$50,000 - $65,000",description:"Manage social media campaigns, content marketing, SEO strategy, and client communication for B2B SaaS clients.",status:"Active",createdAt:"2026-07-03"}];try{const t=localStorage.getItem("jobs");if(t){const r=JSON.parse(t);if(r.length>0)return r}return localStorage.setItem("jobs",JSON.stringify(e)),e}catch{return e}}function Yh(e,t){const r=_n(`${e.title} ${e.company} ${e.description} ${e.type}`),n=t.map(d=>d.name.toLowerCase());let l=0;const i=[];t.forEach(d=>{var j;const m=d.name.toLowerCase().split(/\s+/);(((j=Tu.find(x=>x.name===d.name))==null?void 0:j.keywords)||m).some(x=>r.includes(x))||r.includes(d.name.toLowerCase())?l++:i.push(d.name)});const s=t.length?Math.round(l/t.length*100):50,o=n.some(d=>r.includes(d))?10:0;return{matchPercentage:Math.min(98,Math.max(35,s+o)),missingSkills:i.slice(0,3)}}function Qh(e){var r;const t=Jh();return!t.length||!((r=e==null?void 0:e.skills)!=null&&r.length)?[]:t.map(n=>{const{matchPercentage:l,missingSkills:i}=Yh(n,e.skills);return{id:n.id,title:n.title,company:n.company,location:n.location,salary:n.salary,type:n.type,description:n.description,matchPercentage:l,missingSkills:i}}).sort((n,l)=>l.matchPercentage-n.matchPercentage).slice(0,6)}function Kh(e){var r;if(!((r=e==null?void 0:e.skills)!=null&&r.length))return[];const t=e.skills.map(n=>n.name);return Bh.filter(n=>n.skills.some(l=>t.includes(l))).slice(0,4).map((n,l)=>({id:`hustle-${l+1}`,title:n.title,platform:n.platform,earnings:n.earnings,timeCommitment:n.timeCommitment,skillsUsed:n.skills.filter(i=>t.includes(i)),description:`Earn extra income using your ${n.skills.filter(i=>t.includes(i)).join(" & ")} skills on ${n.platform}.`}))}function Xh(e){const t=(e==null?void 0:e.dominantSector)||"default";return Xo[t]||Xo.default}function Gh(e,{profile:t,matchedJobs:r,sideHustles:n,careerPath:l}){t&&localStorage.setItem(`profile_${e}`,JSON.stringify(t)),r&&localStorage.setItem(`jobs_${e}`,JSON.stringify(r)),n&&localStorage.setItem(`hustles_${e}`,JSON.stringify(n)),l&&localStorage.setItem(`careerPath_${e}`,JSON.stringify(l))}function qh(e){const t=Qh(e),r=Kh(e),n=Xh(e);return{matchedJobs:t,sideHustles:r,careerPath:n}}function zs(e){try{return JSON.parse(localStorage.getItem(`applications_${e}`)||"[]")}catch{return[]}}function Zh(e,t){const r=zs(e);if(r.some(l=>l.jobId===t.id))return r;const n=[{jobId:t.id,title:t.title,company:t.company,appliedAt:new Date().toISOString(),status:"Applied"},...r];return localStorage.setItem(`applications_${e}`,JSON.stringify(n)),n}function Uu(e){try{return JSON.parse(localStorage.getItem(`saved_hustles_${e}`)||"[]")}catch{return[]}}function eg(e,t){const r=Uu(e);if(r.some(l=>l.id===t.id))return r;const n=[{id:t.id,title:t.title,platform:t.platform,savedAt:new Date().toISOString()},...r];return localStorage.setItem(`saved_hustles_${e}`,JSON.stringify(n)),n}function tg(e){const t=zs(e);return{total:t.length,recent:t.slice(0,3)}}const rg=({onComplete:e})=>{const{user:t}=Pe(),[r,n]=w.useState(1),[l,i]=w.useState(""),[s,o]=w.useState(null),[c,d]=w.useState(""),[m,p]=w.useState(!1),g=x=>{const v=x.target.files[0];v&&v.type==="application/pdf"&&o(v)},j=()=>{p(!0),setTimeout(()=>{const x=`${(t==null?void 0:t.name)||""} ${(t==null?void 0:t.surname)||""}`.trim()||"Candidate",v=l==="upload"?Ou(s,x):$u(c,x);p(!1),e(v)},1500)};return a.jsxs("div",{className:"onboarding-container",children:[a.jsxs("div",{className:"onboarding-card",children:[r===1&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"onboarding-header",children:[a.jsx("h1",{className:"onboarding-title",children:"Let's Build Your Profile"}),a.jsx("p",{className:"onboarding-subtitle",children:"Choose how you'd like to share your experience"})]}),a.jsxs("div",{className:"method-selection",children:[a.jsxs("div",{className:`method-card ${l==="upload"?"selected":""}`,onClick:()=>i("upload"),children:[a.jsx("div",{className:"method-icon",children:a.jsx(rn,{size:32})}),a.jsx("h3",{className:"method-title",children:"Upload CV"}),a.jsx("p",{className:"method-description",children:"I have a PDF resume ready to upload"})]}),a.jsxs("div",{className:`method-card ${l==="text"?"selected":""}`,onClick:()=>i("text"),children:[a.jsx("div",{className:"method-icon",children:a.jsx(Cr,{size:32})}),a.jsx("h3",{className:"method-title",children:"Tell Us About Yourself"}),a.jsx("p",{className:"method-description",children:"I'll describe my experience in my own words"})]})]}),l&&a.jsxs("button",{className:"btn btn-primary btn-large",onClick:()=>n(2),children:["Continue",a.jsx(Be,{size:18})]})]}),r===2&&l==="upload"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"onboarding-header",children:[a.jsx("h1",{className:"onboarding-title",children:"Upload Your CV"}),a.jsx("p",{className:"onboarding-subtitle",children:"We'll extract your skills and experience automatically"})]}),a.jsxs("div",{className:"upload-area",children:[a.jsx("input",{type:"file",id:"cv-upload",accept:".pdf",onChange:g,className:"file-input"}),a.jsxs("label",{htmlFor:"cv-upload",className:"upload-label",children:[a.jsx(rn,{size:48}),a.jsx("p",{className:"upload-text",children:s?s.name:"Click to upload or drag and drop"}),a.jsx("p",{className:"upload-hint",children:"PDF files only (max 5MB)"})]}),s&&a.jsxs("div",{className:"file-success",children:[a.jsx(Ni,{size:16}),a.jsx("span",{children:"File selected successfully"})]})]}),a.jsxs("div",{className:"onboarding-actions",children:[a.jsx("button",{className:"btn btn-secondary",onClick:()=>n(1),children:"Back"}),a.jsxs("button",{className:"btn btn-primary",onClick:j,disabled:!s||m,children:[m?"Processing...":"Generate Profile",a.jsx(Be,{size:18})]})]})]}),r===2&&l==="text"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"onboarding-header",children:[a.jsx("h1",{className:"onboarding-title",children:"Tell Us About Yourself"}),a.jsx("p",{className:"onboarding-subtitle",children:"What do you do, what tools do you use, and how do you usually get paid?"})]}),a.jsxs("div",{className:"text-input-area",children:[a.jsx("textarea",{className:"text-area",placeholder:"Example: I've been working in construction for 5 years. I'm skilled in operating forklifts, using power tools, and reading blueprints. I usually work on contract basis and get paid per project. I'm looking for more stable work but open to gigs on weekends...",value:c,onChange:x=>d(x.target.value),rows:8}),a.jsxs("div",{className:"char-count",children:[c.length," characters"]})]}),a.jsxs("div",{className:"onboarding-actions",children:[a.jsx("button",{className:"btn btn-secondary",onClick:()=>n(1),children:"Back"}),a.jsxs("button",{className:"btn btn-primary",onClick:j,disabled:!c.trim()||m,children:[m?"Processing...":"Generate Profile",a.jsx(Be,{size:18})]})]})]})]}),a.jsx("style",{children:`
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
      `})]})},ng=({profile:e,onUpdateProfile:t})=>{const[r,n]=w.useState(!1),[l,i]=w.useState(""),[s,o]=w.useState(null),[c,d]=w.useState(""),[m,p]=w.useState(!1),g=v=>{const b=v.target.files[0];b&&b.type==="application/pdf"&&o(b)},j=()=>{p(!0),setTimeout(()=>{t({method:l,file:s,rawText:c}),p(!1),n(!1),o(null),d(""),i("")},1500)};if(!e)return a.jsx("div",{className:"profile-skills-container empty-state",children:a.jsxs("div",{className:"empty-content",children:[a.jsx(Yo,{size:48}),a.jsx("h3",{children:"No Profile Data"}),a.jsx("p",{children:"Complete the onboarding to see your profile and skills"})]})});const x=e;return a.jsxs("div",{className:"profile-skills-container",children:[a.jsxs("div",{className:"profile-header",children:[a.jsx("div",{className:"profile-avatar",children:a.jsx("span",{className:"avatar-initials",children:x.name.split(" ").map(v=>v[0]).join("")})}),a.jsxs("div",{className:"profile-info",children:[a.jsx("h2",{className:"profile-name",children:x.name}),a.jsx("p",{className:"profile-experience",children:x.experience}),x.lastUpdated&&a.jsxs("p",{className:"profile-updated",children:["Last updated: ",new Date(x.lastUpdated).toLocaleDateString()]})]}),a.jsxs("button",{className:"update-profile-btn",onClick:()=>n(!0),title:"Update Profile",children:[a.jsx(rn,{size:18}),a.jsx("span",{children:"Update CV"})]})]}),a.jsxs("div",{className:"profile-highlights",children:[a.jsxs("div",{className:"highlight-card",children:[a.jsx("div",{className:"highlight-icon",children:a.jsx(Mh,{size:24})}),a.jsxs("div",{className:"highlight-content",children:[a.jsx("p",{className:"highlight-label",children:"Dominant Sector"}),a.jsx("h3",{className:"highlight-value",children:x.dominantSector})]})]}),a.jsxs("div",{className:"highlight-card",children:[a.jsx("div",{className:"highlight-icon",children:a.jsx(be,{size:24})}),a.jsxs("div",{className:"highlight-content",children:[a.jsx("p",{className:"highlight-label",children:"Work Style"}),a.jsx("h3",{className:"highlight-value",children:x.workStyle})]})]}),a.jsxs("div",{className:"highlight-card",children:[a.jsx("div",{className:"highlight-icon",children:a.jsx(Th,{size:24})}),a.jsxs("div",{className:"highlight-content",children:[a.jsx("p",{className:"highlight-label",children:"Payment Preference"}),a.jsx("h3",{className:"highlight-value",children:x.preferredPayment})]})]})]}),a.jsxs("div",{className:"skills-section",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(Yo,{size:20}),"Your Discovered Skills"]}),a.jsx("div",{className:"skills-grid",children:x.skills.map((v,b)=>a.jsxs("div",{className:"skill-item",children:[a.jsxs("div",{className:"skill-header",children:[a.jsx("span",{className:"skill-name",children:v.name}),a.jsxs("span",{className:"skill-percentage",children:[v.level,"%"]})]}),a.jsx("div",{className:"skill-bar",children:a.jsx("div",{className:"skill-progress",style:{width:`${v.level}%`}})})]},b))})]}),a.jsx("style",{children:`
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

        .profile-updated {
          color: var(--text-muted);
          font-size: 0.75rem;
          margin: 0.25rem 0 0;
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
      `}),r&&a.jsx("div",{className:"update-modal-overlay",onClick:v=>v.target===v.currentTarget&&n(!1),children:a.jsxs("div",{className:"update-modal",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{className:"modal-title",children:"Update Your Profile"}),a.jsx("button",{className:"modal-close-btn",onClick:()=>n(!1),children:a.jsx(Pn,{size:20})})]}),l?a.jsxs(a.Fragment,{children:[l==="upload"&&a.jsxs("div",{className:"update-upload-area",children:[a.jsx("input",{type:"file",id:"update-cv-upload",accept:".pdf",onChange:g,className:"update-file-input"}),a.jsxs("label",{htmlFor:"update-cv-upload",className:"update-upload-label",children:[a.jsx(rn,{size:32}),a.jsx("p",{style:{margin:"0.5rem 0 0.25rem",color:"var(--text-primary)",fontWeight:"500"},children:s?s.name:"Click to upload new CV"}),a.jsx("p",{style:{margin:0,color:"var(--text-muted)",fontSize:"0.8rem"},children:"PDF files only (max 5MB)"})]})]}),l==="text"&&a.jsx("div",{className:"update-upload-area",children:a.jsx("textarea",{className:"update-text-area",placeholder:"Add new skills, experience, or update your current role description...",value:c,onChange:v=>d(v.target.value),rows:5})}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"modal-btn-cancel",onClick:()=>{i(""),o(null),d("")},children:"Back"}),a.jsx("button",{className:"modal-btn-submit",onClick:j,disabled:m||l==="upload"&&!s||l==="text"&&!c.trim(),children:m?"Updating...":"Update Profile"})]})]}):a.jsxs("div",{className:"update-method-selection",children:[a.jsxs("div",{className:`update-method-card ${l==="upload"?"selected":""}`,onClick:()=>i("upload"),children:[a.jsx("div",{className:"update-method-icon",children:a.jsx(rn,{size:24})}),a.jsx("h4",{className:"update-method-title",children:"Upload New CV"}),a.jsx("p",{className:"update-method-description",children:"Replace your current CV with a new PDF"})]}),a.jsxs("div",{className:`update-method-card ${l==="text"?"selected":""}`,onClick:()=>i("text"),children:[a.jsx("div",{className:"update-method-icon",children:a.jsx(Cr,{size:24})}),a.jsx("h4",{className:"update-method-title",children:"Update Experience"}),a.jsx("p",{className:"update-method-description",children:"Add new skills and experience details"})]})]})]})})]})},ag=({userEmail:e,matchedJobs:t,sideHustles:r,careerPath:n,applications:l,onApplicationsChange:i,onRefreshMatches:s,hasProfile:o})=>{var h;const[c,d]=w.useState(null),[m,p]=w.useState(()=>Uu(e)),[g,j]=w.useState(null),x=new Set(l.map(y=>y.jobId)),v=y=>{if(!e||x.has(y.id))return;const k=Zh(e,y);i(k)},b=y=>{if(!e)return;const k=eg(e,y);p(k),d(null)},f=new Set(m.map(y=>y.id));return o?(t==null?void 0:t.length)>0||(r==null?void 0:r.length)>0||(n==null?void 0:n.length)>0?a.jsxs("div",{className:"job-matcher-container",children:[l.length>0&&a.jsxs("div",{className:"matcher-section full-width applications-section",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(qa,{size:20}),"Your Applications (",l.length,")"]}),a.jsx("div",{className:"applications-list",children:l.map(y=>a.jsxs("div",{className:"application-item",children:[a.jsxs("div",{className:"application-info",children:[a.jsx("span",{className:"application-title",children:y.title}),a.jsx("span",{className:"application-company",children:y.company})]}),a.jsxs("div",{className:"application-meta",children:[a.jsx("span",{className:"application-status",children:y.status}),a.jsx("span",{className:"application-date",children:new Date(y.appliedAt).toLocaleDateString()})]})]},y.jobId))})]}),(t==null?void 0:t.length)>0&&a.jsxs("div",{className:"matcher-section",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(be,{size:20}),"Matched Jobs For You"]}),a.jsx("div",{className:"jobs-list",children:t.map(y=>{var C;const k=x.has(y.id),S=g===y.id;return a.jsxs("div",{className:`job-card ${k?"applied":""}`,children:[a.jsxs("div",{className:"job-header",children:[a.jsxs("div",{className:"job-match-badge",children:[a.jsxs("span",{className:"match-percentage",children:[y.matchPercentage,"%"]}),a.jsx("span",{className:"match-label",children:"Match"})]}),a.jsx("span",{className:"job-type",children:y.type})]}),a.jsx("h4",{className:"job-title",children:y.title}),a.jsx("p",{className:"job-company",children:y.company}),a.jsxs("div",{className:"job-details",children:[a.jsxs("span",{className:"job-detail",children:[a.jsx(Eu,{size:14}),y.location]}),a.jsxs("span",{className:"job-detail",children:[a.jsx(Si,{size:14}),y.salary]})]}),((C=y.missingSkills)==null?void 0:C.length)>0&&a.jsxs("div",{className:"missing-skills",children:[a.jsx(ce,{size:14,className:"alert-icon"}),a.jsxs("span",{className:"missing-text",children:["Skills to develop: ",y.missingSkills.join(", ")]})]}),S&&y.description&&a.jsx("p",{className:"job-description",children:y.description}),a.jsxs("div",{className:"job-actions",children:[a.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>j(S?null:y.id),children:S?"Hide Details":"View Details"}),a.jsx("button",{type:"button",className:`btn btn-sm ${k?"btn-applied":"btn-primary"}`,onClick:()=>v(y),disabled:k,children:k?a.jsxs(a.Fragment,{children:[a.jsx(Ni,{size:14}),"Applied"]}):"Apply Now"})]})]},y.id)})})]}),(r==null?void 0:r.length)>0&&a.jsxs("div",{className:"matcher-section",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(Si,{size:20}),"Gig Opportunities"]}),a.jsx("div",{className:"hustles-list",children:r.map(y=>{var S;const k=f.has(y.id);return a.jsxs("div",{className:`hustle-card ${k?"saved":""}`,children:[a.jsxs("div",{className:"hustle-header",children:[a.jsx("h4",{className:"hustle-title",children:y.title}),a.jsx("span",{className:"hustle-earnings",children:y.earnings})]}),a.jsxs("p",{className:"hustle-platform",children:["via ",y.platform]}),a.jsx("div",{className:"hustle-details",children:a.jsxs("span",{className:"hustle-detail",children:[a.jsx(Sh,{size:14}),y.timeCommitment]})}),a.jsx("div",{className:"hustle-skills",children:(S=y.skillsUsed)==null?void 0:S.map((C,P)=>a.jsx("span",{className:"skill-tag",children:C},P))}),a.jsx("button",{type:"button",className:`btn btn-sm ${k?"btn-applied":"btn-secondary"}`,onClick:()=>d(y),children:k?a.jsxs(a.Fragment,{children:[a.jsx(Ni,{size:14}),"Saved"]}):"Learn More"})]},y.id)})})]}),(n==null?void 0:n.length)>0&&a.jsxs("div",{className:"matcher-section full-width",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(Za,{size:20}),"Your 5-Year Career Path"]}),a.jsx("div",{className:"career-timeline",children:n.map((y,k)=>a.jsxs("div",{className:"timeline-item",children:[a.jsxs("div",{className:"timeline-marker",children:[a.jsx("span",{className:"timeline-icon",children:y.icon}),k<n.length-1&&a.jsx("div",{className:"timeline-line"})]}),a.jsxs("div",{className:"timeline-content",children:[a.jsx("span",{className:"timeline-year",children:y.year}),a.jsx("h4",{className:"timeline-title",children:y.title}),a.jsx("span",{className:"timeline-salary",children:y.salary})]})]},k))})]}),c&&a.jsx("div",{className:"hustle-modal-overlay",onClick:y=>y.target===y.currentTarget&&d(null),children:a.jsxs("div",{className:"hustle-modal",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:c.title}),a.jsx("button",{type:"button",className:"modal-close",onClick:()=>d(null),children:a.jsx(Pn,{size:20})})]}),a.jsxs("div",{className:"modal-body",children:[a.jsxs("div",{className:"modal-detail-row",children:[a.jsx("span",{className:"modal-label",children:"Platform"}),a.jsx("span",{children:c.platform})]}),a.jsxs("div",{className:"modal-detail-row",children:[a.jsx("span",{className:"modal-label",children:"Earnings"}),a.jsx("span",{className:"earnings-highlight",children:c.earnings})]}),a.jsxs("div",{className:"modal-detail-row",children:[a.jsx("span",{className:"modal-label",children:"Time Commitment"}),a.jsx("span",{children:c.timeCommitment})]}),a.jsxs("div",{className:"modal-detail-row",children:[a.jsx("span",{className:"modal-label",children:"Skills Used"}),a.jsx("div",{className:"hustle-skills",children:(h=c.skillsUsed)==null?void 0:h.map((y,k)=>a.jsx("span",{className:"skill-tag",children:y},k))})]}),c.description&&a.jsx("p",{className:"modal-description",children:c.description})]}),a.jsxs("div",{className:"modal-actions",children:[!f.has(c.id)&&a.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>b(c),children:[a.jsx(Ch,{size:14}),"Save Interest"]}),a.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>d(null),children:"Close"})]})]})}),a.jsx("style",{children:`
        .job-matcher-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .job-matcher-container { grid-template-columns: 1fr; }
        }

        .matcher-section {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
        }

        .matcher-section.full-width { grid-column: 1 / -1; }

        .section-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .section-title svg { color: var(--color-primary); }

        .jobs-list, .hustles-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .job-card, .hustle-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          transition: all var(--transition-fast);
        }

        .job-card:hover, .hustle-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .job-card.applied, .hustle-card.saved {
          border-color: rgba(16, 185, 129, 0.3);
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

        .match-percentage { font-weight: 700; font-size: 0.9rem; color: white; }
        .match-label { font-size: 0.75rem; color: rgba(255, 255, 255, 0.9); }

        .job-type {
          background: rgba(99, 102, 241, 0.15);
          color: var(--color-primary);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .job-title { font-size: 1.1rem; font-weight: 600; margin: 0 0 0.5rem; color: var(--text-primary); }
        .job-company { color: var(--text-secondary); font-size: 0.9rem; margin: 0 0 0.75rem; }

        .job-details { display: flex; gap: 1rem; margin-bottom: 0.75rem; flex-wrap: wrap; }

        .job-detail {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .job-detail svg { color: var(--color-primary); }

        .job-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0 0 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: var(--radius-sm);
        }

        .missing-skills {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          margin-bottom: 0.75rem;
        }

        .alert-icon { color: #f59e0b; }
        .missing-text { color: #f59e0b; font-size: 0.85rem; }

        .job-actions {
          display: flex;
          gap: 0.5rem;
        }

        .hustle-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .hustle-title { font-size: 1rem; font-weight: 600; margin: 0; color: var(--text-primary); }

        .hustle-earnings {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .hustle-platform { color: var(--text-secondary); font-size: 0.85rem; margin: 0 0 0.5rem; }
        .hustle-details { display: flex; gap: 1rem; margin-bottom: 0.75rem; }

        .hustle-detail {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .hustle-detail svg { color: var(--color-primary); }

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

        .applications-list { display: flex; flex-direction: column; gap: 0.75rem; }

        .application-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.875rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          gap: 1rem;
        }

        .application-info { display: flex; flex-direction: column; gap: 0.125rem; }
        .application-title { font-weight: 600; color: var(--text-primary); font-size: 0.9rem; }
        .application-company { color: var(--text-secondary); font-size: 0.8rem; }
        .application-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 0.125rem; }

        .application-status {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          padding: 0.15rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .application-date { color: var(--text-muted); font-size: 0.75rem; }

        .career-timeline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .timeline-item { display: flex; gap: 1rem; }

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

        .timeline-year { color: var(--text-muted); font-size: 0.8rem; font-weight: 600; margin-bottom: 0.25rem; }
        .timeline-title { font-size: 1rem; font-weight: 600; margin: 0 0 0.25rem; color: var(--text-primary); }
        .timeline-salary { color: #10b981; font-weight: 700; font-size: 0.9rem; }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
          flex: 1;
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

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-secondary:hover { background: rgba(255, 255, 255, 0.15); }

        .btn-applied {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: default;
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

        .empty-content { text-align: center; color: var(--text-muted); }
        .empty-content svg { margin-bottom: 1rem; opacity: 0.5; }
        .empty-content h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-secondary); }
        .empty-content p { font-size: 0.9rem; margin: 0 0 1rem; max-width: 360px; }

        .refresh-empty-btn { margin: 0 auto; max-width: 200px; }

        .hustle-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1rem;
        }

        .hustle-modal {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          max-width: 480px;
          width: 100%;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .modal-header h3 { margin: 0; font-size: 1.15rem; color: var(--text-primary); }

        .modal-close {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.25rem;
        }

        .modal-body { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.25rem; }

        .modal-detail-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .modal-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .earnings-highlight { color: #34d399; font-weight: 700; }

        .modal-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0.5rem 0 0;
        }

        .modal-actions {
          display: flex;
          gap: 0.75rem;
        }
      `})]}):a.jsx("div",{className:"job-matcher-container empty-state",children:a.jsxs("div",{className:"empty-content",children:[a.jsx(be,{size:48}),a.jsx("h3",{children:"No Job Matches Yet"}),a.jsx("p",{children:"No platform jobs found to match against. Ask an employer to post jobs, then refresh."}),a.jsx("button",{type:"button",className:"btn btn-primary btn-sm refresh-empty-btn",onClick:s,children:"Refresh Matches"})]})}):a.jsx("div",{className:"job-matcher-container empty-state",children:a.jsxs("div",{className:"empty-content",children:[a.jsx(be,{size:48}),a.jsx("h3",{children:"No Profile Yet"}),a.jsx("p",{children:"Complete onboarding to see personalized job matches and opportunities"})]})})},lg=()=>{var ge;const{user:e}=Pe(),[t,r]=w.useState(!1),[n,l]=w.useState(!1),[i,s]=w.useState(!0),[o,c]=w.useState(null),[d,m]=w.useState([]),[p,g]=w.useState([]),[j,x]=w.useState([]),[v,b]=w.useState([]),[f,u]=w.useState(!1),[h,y]=w.useState(null),k=D=>{y(D),setTimeout(()=>y(null),3e3)},S=w.useCallback(D=>{const ne=qh(D);return m(ne.matchedJobs),g(ne.sideHustles),x(ne.careerPath),Gh(e==null?void 0:e.email,{profile:D,...ne}),ne},[e==null?void 0:e.email]),C=w.useCallback(async()=>{if(e!=null&&e.email){s(!0);try{const D=localStorage.getItem(`profile_${e.email}`),ne=localStorage.getItem(`jobs_${e.email}`),Ge=localStorage.getItem(`hustles_${e.email}`),ct=localStorage.getItem(`careerPath_${e.email}`);let z=D?JSON.parse(D):null;c(z),b(zs(e.email)),ne&&m(JSON.parse(ne)),Ge&&g(JSON.parse(Ge)),ct&&x(JSON.parse(ct)),z&&!ne&&S(z)}catch(D){console.error("Error loading user data:",D)}finally{s(!1)}}},[e==null?void 0:e.email,S]);w.useEffect(()=>{const D=localStorage.getItem(`onboarding_${e==null?void 0:e.email}`);r(!!D),l(!D),D?C():s(!1)},[e,C]);const P=D=>{localStorage.setItem(`onboarding_${e==null?void 0:e.email}`,"completed");const ne=S(D);c(D),r(!0),l(!1),k(`Profile created! Found ${ne.matchedJobs.length} job matches.`)},O=async D=>{try{const ne=`${(e==null?void 0:e.name)||""} ${(e==null?void 0:e.surname)||""}`.trim()||"Candidate",Ge=Hh(o,D,ne),ct=S(Ge);c(Ge),k(`Profile updated! ${ct.matchedJobs.length} jobs re-matched.`)}catch(ne){console.error("Error updating profile:",ne)}},_=()=>{o&&(u(!0),setTimeout(()=>{const D=S(o);k(`Matches refreshed! ${D.matchedJobs.length} jobs found.`),u(!1)},800))},Z=D=>{b(D)},$e=tg(e==null?void 0:e.email);return i?a.jsxs("div",{className:"dashboard-container",children:[a.jsxs("div",{className:"loading-state",children:[a.jsx("div",{className:"spinner"}),a.jsx("p",{children:"Loading your dashboard..."})]}),a.jsx("style",{children:`
          .dashboard-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }
          .loading-state { text-align: center; color: var(--text-secondary); }
          .spinner {
            width: 40px; height: 40px;
            border: 3px solid rgba(99, 102, 241, 0.3);
            border-top-color: var(--color-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):a.jsxs("div",{className:"dashboard-container",children:[h&&a.jsx("div",{className:"toast-notification",children:h}),n?a.jsx(rg,{onComplete:P}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"dashboard-header",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"dashboard-title",children:["Welcome, ",e==null?void 0:e.name,"!"]}),a.jsx("p",{className:"dashboard-subtitle",children:"Your personalized career dashboard"})]}),a.jsxs("button",{type:"button",className:"refresh-btn",onClick:_,disabled:f,children:[a.jsx(_h,{size:16,className:f?"spinning":""}),f?"Refreshing...":"Refresh Matches"]})]}),a.jsxs("div",{className:"stats-row",children:[a.jsxs("div",{className:"mini-stat",children:[a.jsx(be,{size:18}),a.jsx("span",{className:"mini-stat-value",children:d.length}),a.jsx("span",{className:"mini-stat-label",children:"Job Matches"})]}),a.jsxs("div",{className:"mini-stat",children:[a.jsx(qa,{size:18}),a.jsx("span",{className:"mini-stat-value",children:$e.total}),a.jsx("span",{className:"mini-stat-label",children:"Applications"})]}),a.jsxs("div",{className:"mini-stat",children:[a.jsx("span",{className:"mini-stat-value",children:((ge=o==null?void 0:o.skills)==null?void 0:ge.length)||0}),a.jsx("span",{className:"mini-stat-label",children:"Skills Discovered"})]}),a.jsxs("div",{className:"mini-stat",children:[a.jsx("span",{className:"mini-stat-value",children:p.length}),a.jsx("span",{className:"mini-stat-label",children:"Gig Opportunities"})]})]}),a.jsxs("div",{className:"dashboard-content",children:[a.jsx("div",{className:"main-section",children:a.jsx(ng,{profile:o,onUpdateProfile:O})}),a.jsx("div",{className:"main-section",children:a.jsx(ag,{userEmail:e==null?void 0:e.email,matchedJobs:d,sideHustles:p,careerPath:j,applications:v,onApplicationsChange:Z,onRefreshMatches:_,hasProfile:!!o})})]})]}),a.jsx("style",{children:`
        .dashboard-container {
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .toast-notification {
          position: fixed;
          top: 5rem;
          right: 1.5rem;
          z-index: 3000;
          background: rgba(16, 185, 129, 0.95);
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 500;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .dashboard-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.5rem;
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

        .refresh-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: var(--text-primary);
          padding: 0.625rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .refresh-btn:hover:not(:disabled) {
          background: rgba(99, 102, 241, 0.25);
          transform: translateY(-1px);
        }

        .refresh-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .spinning { animation: spin 1s linear infinite; }

        @keyframes spin { to { transform: rotate(360deg); } }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .mini-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1rem;
        }

        .mini-stat svg { color: var(--color-primary); margin-bottom: 0.25rem; }

        .mini-stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .mini-stat-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .dashboard-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .main-section { width: 100%; }

        @media (max-width: 768px) {
          .dashboard-container { padding: 1rem; }
          .dashboard-title { font-size: 1.5rem; }
          .dashboard-header { flex-direction: column; }
          .refresh-btn { width: 100%; justify-content: center; }
        }
      `})]})},ig=()=>{const{user:e}=Pe();return a.jsxs("div",{className:"dashboard-container",children:[a.jsxs("div",{className:"dashboard-header",children:[a.jsxs("h1",{className:"dashboard-title",children:["Welcome, ",e==null?void 0:e.name,"!"]}),a.jsx("p",{className:"dashboard-subtitle",children:"Manage your job postings and find top talent"})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(be,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:"8"}),a.jsx("p",{className:"stat-label",children:"Active Jobs"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(yr,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:"156"}),a.jsx("p",{className:"stat-label",children:"Total Applicants"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(Cr,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:"24"}),a.jsx("p",{className:"stat-label",children:"New Applications"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(Za,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:"92%"}),a.jsx("p",{className:"stat-label",children:"Response Rate"})]})]})]}),a.jsxs("div",{className:"dashboard-sections",children:[a.jsxs("div",{className:"dashboard-section",children:[a.jsx("h2",{className:"section-title",children:"Quick Actions"}),a.jsxs("div",{className:"action-grid",children:[a.jsxs("button",{className:"action-card",children:[a.jsx(Cs,{size:24}),a.jsx("span",{children:"Post New Job"}),a.jsx(Be,{size:16,className:"action-arrow"})]}),a.jsxs("button",{className:"action-card",children:[a.jsx(be,{size:24}),a.jsx("span",{children:"Manage Jobs"}),a.jsx(Be,{size:16,className:"action-arrow"})]}),a.jsxs("button",{className:"action-card",children:[a.jsx(yr,{size:24}),a.jsx("span",{children:"View Applicants"}),a.jsx(Be,{size:16,className:"action-arrow"})]}),a.jsxs("button",{className:"action-card",children:[a.jsx(Cr,{size:24}),a.jsx("span",{children:"Job Templates"}),a.jsx(Be,{size:16,className:"action-arrow"})]})]})]}),a.jsxs("div",{className:"dashboard-section",children:[a.jsx("h2",{className:"section-title",children:"Recent Applications"}),a.jsxs("div",{className:"applicant-list",children:[a.jsxs("div",{className:"applicant-card",children:[a.jsxs("div",{className:"applicant-header",children:[a.jsx("h3",{className:"applicant-name",children:"John Smith"}),a.jsx("span",{className:"applicant-badge",children:"New"})]}),a.jsx("p",{className:"applicant-position",children:"Applied for: Senior Frontend Developer"}),a.jsx("p",{className:"applicant-time",children:"2 hours ago"}),a.jsxs("div",{className:"applicant-actions",children:[a.jsx("button",{className:"btn btn-primary btn-sm",children:"View Profile"}),a.jsx("button",{className:"btn btn-secondary btn-sm",children:"Message"})]})]}),a.jsxs("div",{className:"applicant-card",children:[a.jsx("div",{className:"applicant-header",children:a.jsx("h3",{className:"applicant-name",children:"Sarah Johnson"})}),a.jsx("p",{className:"applicant-position",children:"Applied for: UX Designer"}),a.jsx("p",{className:"applicant-time",children:"5 hours ago"}),a.jsxs("div",{className:"applicant-actions",children:[a.jsx("button",{className:"btn btn-primary btn-sm",children:"View Profile"}),a.jsx("button",{className:"btn btn-secondary btn-sm",children:"Message"})]})]}),a.jsxs("div",{className:"applicant-card",children:[a.jsxs("div",{className:"applicant-header",children:[a.jsx("h3",{className:"applicant-name",children:"Michael Chen"}),a.jsx("span",{className:"applicant-badge",children:"Hot"})]}),a.jsx("p",{className:"applicant-position",children:"Applied for: Product Manager"}),a.jsx("p",{className:"applicant-time",children:"1 day ago"}),a.jsxs("div",{className:"applicant-actions",children:[a.jsx("button",{className:"btn btn-primary btn-sm",children:"View Profile"}),a.jsx("button",{className:"btn btn-secondary btn-sm",children:"Message"})]})]})]})]})]}),a.jsx("style",{children:`
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
      `})]})};function Go(){const e=JSON.parse(localStorage.getItem("users")||"[]"),t=JSON.parse(localStorage.getItem("jobs")||"[]"),r=e.filter(m=>m.role==="candidate"),n=e.filter(m=>m.role==="employer"),l=e.filter(m=>m.role==="admin");let i=0,s=0;e.forEach(m=>{localStorage.getItem(`onboarding_${m.email}`)&&i++,localStorage.getItem(`profile_${m.email}`)&&s++});const o=t.filter(m=>m.status==="Active"||!m.status),c=e.map(({name:m,surname:p,email:g,role:j})=>({name:m,surname:p,email:g,role:j,hasProfile:!!localStorage.getItem(`profile_${g}`),hasOnboarding:!!localStorage.getItem(`onboarding_${g}`)})),d=[...c.map(m=>({id:`user-${m.email}`,type:"user",text:`User registered: ${m.name} ${m.surname} (${m.role})`,time:null})),...t.map(m=>({id:`job-${m.id}`,type:"job",text:`Job posted: ${m.title} at ${m.company}`,time:m.createdAt||null}))].slice(0,8);return{users:c,jobs:t,recentActivity:d,stats:{totalUsers:e.length,candidates:r.length,employers:n.length,admins:l.length,activeJobs:o.length,totalJobs:t.length,onboardedCandidates:i,profilesCreated:s}}}function sg(e){const r=JSON.parse(localStorage.getItem("users")||"[]").filter(n=>n.email.toLowerCase()!==e.toLowerCase()||n.role==="admin");localStorage.setItem("users",JSON.stringify(r))}function og(e){const t=JSON.parse(localStorage.getItem("jobs")||"[]");localStorage.setItem("jobs",JSON.stringify(t.filter(r=>r.id!==e)))}const qo=[{id:"users",label:"Manage Users",icon:yr},{id:"jobs",label:"Review Jobs",icon:be},{id:"security",label:"Security Settings",icon:_u},{id:"analytics",label:"View Analytics",icon:Nu}],cg=e=>{switch(e){case"admin":return"role-badge admin";case"employer":return"role-badge employer";default:return"role-badge candidate"}},dg=()=>{const{user:e}=Pe(),[t,r]=w.useState(()=>Go()),[n,l]=w.useState(null),i=w.useCallback(()=>{r(Go())},[]),s=b=>{l(f=>f===b?null:b)},o=b=>{window.confirm(`Remove user ${b}? This cannot be undone.`)&&(sg(b),i())},c=b=>{window.confirm("Remove this job listing?")&&(og(b),i())},{stats:d,users:m,jobs:p,recentActivity:g}=t,j=()=>{switch(n){case"users":return a.jsxs("div",{className:"panel-content",children:[a.jsxs("div",{className:"panel-header",children:[a.jsx("h3",{children:"Registered Users"}),a.jsxs("span",{className:"panel-count",children:[m.length," total"]})]}),m.length===0?a.jsx("p",{className:"panel-empty",children:"No users registered yet."}):a.jsx("div",{className:"data-table-wrapper",children:a.jsxs("table",{className:"data-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Name"}),a.jsx("th",{children:"Email"}),a.jsx("th",{children:"Role"}),a.jsx("th",{children:"Profile"}),a.jsx("th",{})]})}),a.jsx("tbody",{children:m.map(b=>a.jsxs("tr",{children:[a.jsxs("td",{children:[b.name," ",b.surname]}),a.jsx("td",{children:b.email}),a.jsx("td",{children:a.jsx("span",{className:cg(b.role),children:b.role})}),a.jsx("td",{children:b.hasProfile?"Complete":b.hasOnboarding?"Onboarded":"—"}),a.jsx("td",{children:b.role!=="admin"&&a.jsx("button",{type:"button",className:"icon-btn danger",onClick:()=>o(b.email),title:"Remove user",children:a.jsx(Ci,{size:16})})})]},b.email))})]})})]});case"jobs":return a.jsxs("div",{className:"panel-content",children:[a.jsxs("div",{className:"panel-header",children:[a.jsx("h3",{children:"Job Listings"}),a.jsxs("span",{className:"panel-count",children:[p.length," total"]})]}),p.length===0?a.jsx("p",{className:"panel-empty",children:"No jobs posted yet."}):a.jsx("div",{className:"data-table-wrapper",children:a.jsxs("table",{className:"data-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Title"}),a.jsx("th",{children:"Company"}),a.jsx("th",{children:"Location"}),a.jsx("th",{children:"Type"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Posted"}),a.jsx("th",{})]})}),a.jsx("tbody",{children:p.map(b=>a.jsxs("tr",{children:[a.jsx("td",{children:b.title}),a.jsx("td",{children:b.company}),a.jsx("td",{children:b.location}),a.jsx("td",{children:b.type}),a.jsx("td",{children:a.jsx("span",{className:"status-badge",children:b.status||"Active"})}),a.jsx("td",{children:b.createdAt||"—"}),a.jsx("td",{children:a.jsx("button",{type:"button",className:"icon-btn danger",onClick:()=>c(b.id),title:"Remove job",children:a.jsx(Ci,{size:16})})})]},b.id))})]})})]});case"security":return a.jsxs("div",{className:"panel-content",children:[a.jsx("div",{className:"panel-header",children:a.jsx("h3",{children:"Security Overview"})}),a.jsxs("div",{className:"security-grid",children:[a.jsxs("div",{className:"security-card",children:[a.jsx(Ta,{size:20}),a.jsxs("div",{children:[a.jsx("p",{className:"security-label",children:"Admin Account"}),a.jsx("p",{className:"security-value",children:e==null?void 0:e.email})]})]}),a.jsxs("div",{className:"security-card",children:[a.jsx(_u,{size:20}),a.jsxs("div",{children:[a.jsx("p",{className:"security-label",children:"Admin Accounts"}),a.jsxs("p",{className:"security-value",children:[d.admins," protected"]})]})]}),a.jsxs("div",{className:"security-card",children:[a.jsx(yr,{size:20}),a.jsxs("div",{children:[a.jsx("p",{className:"security-label",children:"Total Accounts"}),a.jsxs("p",{className:"security-value",children:[d.totalUsers," registered"]})]})]}),a.jsxs("div",{className:"security-card",children:[a.jsx(Mu,{size:20}),a.jsxs("div",{children:[a.jsx("p",{className:"security-label",children:"Role Distribution"}),a.jsxs("p",{className:"security-value",children:[d.candidates," candidates · ",d.employers," employers"]})]})]})]}),a.jsxs("div",{className:"security-notes",children:[a.jsx("h4",{children:"Platform Policies"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Admin accounts cannot be created via registration."}),a.jsx("li",{children:"Admin accounts cannot be removed from the user list."}),a.jsx("li",{children:"User passwords are stored locally for this demo only."}),a.jsx("li",{children:"Session is managed via browser localStorage."})]})]})]});case"analytics":return a.jsxs("div",{className:"panel-content",children:[a.jsx("div",{className:"panel-header",children:a.jsx("h3",{children:"Platform Analytics"})}),a.jsxs("div",{className:"analytics-grid",children:[a.jsxs("div",{className:"analytics-card",children:[a.jsx("p",{className:"analytics-label",children:"Candidates"}),a.jsx("p",{className:"analytics-value",children:d.candidates}),a.jsxs("p",{className:"analytics-meta",children:[d.onboardedCandidates," onboarded"]})]}),a.jsxs("div",{className:"analytics-card",children:[a.jsx("p",{className:"analytics-label",children:"Employers"}),a.jsx("p",{className:"analytics-value",children:d.employers}),a.jsxs("p",{className:"analytics-meta",children:[d.totalJobs," jobs posted"]})]}),a.jsxs("div",{className:"analytics-card",children:[a.jsx("p",{className:"analytics-label",children:"Active Jobs"}),a.jsx("p",{className:"analytics-value",children:d.activeJobs}),a.jsxs("p",{className:"analytics-meta",children:["of ",d.totalJobs," total"]})]}),a.jsxs("div",{className:"analytics-card",children:[a.jsx("p",{className:"analytics-label",children:"Profiles Created"}),a.jsx("p",{className:"analytics-value",children:d.profilesCreated}),a.jsx("p",{className:"analytics-meta",children:"across all users"})]})]}),a.jsxs("div",{className:"analytics-breakdown",children:[a.jsx("h4",{children:"User Breakdown"}),a.jsxs("div",{className:"breakdown-bars",children:[a.jsxs("div",{className:"breakdown-row",children:[a.jsx("span",{children:"Candidates"}),a.jsx("div",{className:"breakdown-bar-track",children:a.jsx("div",{className:"breakdown-bar fill-candidate",style:{width:d.totalUsers?`${d.candidates/d.totalUsers*100}%`:"0%"}})}),a.jsx("span",{className:"breakdown-count",children:d.candidates})]}),a.jsxs("div",{className:"breakdown-row",children:[a.jsx("span",{children:"Employers"}),a.jsx("div",{className:"breakdown-bar-track",children:a.jsx("div",{className:"breakdown-bar fill-employer",style:{width:d.totalUsers?`${d.employers/d.totalUsers*100}%`:"0%"}})}),a.jsx("span",{className:"breakdown-count",children:d.employers})]}),a.jsxs("div",{className:"breakdown-row",children:[a.jsx("span",{children:"Admins"}),a.jsx("div",{className:"breakdown-bar-track",children:a.jsx("div",{className:"breakdown-bar fill-admin",style:{width:d.totalUsers?`${d.admins/d.totalUsers*100}%`:"0%"}})}),a.jsx("span",{className:"breakdown-count",children:d.admins})]})]})]})]});default:return null}},x=qo.find(b=>b.id===n),v=x==null?void 0:x.icon;return a.jsxs("div",{className:"dashboard-container",children:[a.jsxs("div",{className:"dashboard-header",children:[a.jsx("h1",{className:"dashboard-title",children:"Admin Dashboard"}),a.jsxs("p",{className:"dashboard-subtitle",children:["Welcome, ",e==null?void 0:e.name,"! Monitor platform insights and user activity"]})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(yr,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:d.totalUsers}),a.jsx("p",{className:"stat-label",children:"Total Users"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(be,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:d.activeJobs}),a.jsx("p",{className:"stat-label",children:"Active Jobs"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(Nu,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:d.profilesCreated}),a.jsx("p",{className:"stat-label",children:"Profiles Created"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(Za,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:d.onboardedCandidates}),a.jsx("p",{className:"stat-label",children:"Onboarded Candidates"})]})]})]}),a.jsxs("div",{className:"dashboard-sections",children:[a.jsxs("div",{className:"dashboard-section",children:[a.jsx("h2",{className:"section-title",children:"Platform Overview"}),a.jsxs("div",{className:"overview-grid",children:[a.jsxs("div",{className:"overview-item",children:[a.jsx("div",{className:"overview-label",children:"Candidates"}),a.jsx("div",{className:"overview-value",children:d.candidates})]}),a.jsxs("div",{className:"overview-item",children:[a.jsx("div",{className:"overview-label",children:"Employers"}),a.jsx("div",{className:"overview-value",children:d.employers})]}),a.jsxs("div",{className:"overview-item",children:[a.jsx("div",{className:"overview-label",children:"Jobs Posted"}),a.jsx("div",{className:"overview-value",children:d.totalJobs})]}),a.jsxs("div",{className:"overview-item",children:[a.jsx("div",{className:"overview-label",children:"Admins"}),a.jsx("div",{className:"overview-value",children:d.admins})]})]})]}),a.jsxs("div",{className:"dashboard-section",children:[a.jsx("h2",{className:"section-title",children:"Quick Actions"}),a.jsx("div",{className:"action-grid",children:qo.map(({id:b,label:f,icon:u})=>a.jsxs("button",{type:"button",className:`action-card ${n===b?"active":""}`,onClick:()=>s(b),children:[a.jsx(u,{size:24}),a.jsx("span",{children:f}),a.jsx(Be,{size:16,className:"action-arrow"})]},b))})]})]}),n&&a.jsx("div",{className:"dashboard-sections",children:a.jsxs("div",{className:"dashboard-section full-width data-panel",children:[a.jsxs("div",{className:"data-panel-toolbar",children:[a.jsxs("h2",{className:"section-title panel-title",children:[v&&a.jsx(v,{size:20}),x==null?void 0:x.label]}),a.jsxs("button",{type:"button",className:"close-panel-btn",onClick:()=>l(null),children:[a.jsx(Pn,{size:18}),"Close"]})]}),j()]})}),a.jsx("div",{className:"dashboard-sections",children:a.jsxs("div",{className:"dashboard-section full-width",children:[a.jsx("h2",{className:"section-title",children:"Recent Activity"}),a.jsx("div",{className:"activity-list",children:g.length===0?a.jsx("p",{className:"panel-empty",children:"No activity recorded yet."}):g.map(b=>a.jsxs("div",{className:"activity-item",children:[a.jsx("div",{className:"activity-icon",children:b.type==="job"?a.jsx(be,{size:16}):a.jsx(yr,{size:16})}),a.jsxs("div",{className:"activity-content",children:[a.jsx("p",{className:"activity-text",children:b.text}),b.time&&a.jsx("p",{className:"activity-time",children:b.time})]})]},b.id))})]})}),a.jsx("style",{children:`
        .dashboard-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-header { margin-bottom: 2rem; }

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

        .stat-card:hover { transform: translateY(-4px); }

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
          .dashboard-sections { grid-template-columns: 1fr; }
        }

        .dashboard-section {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
        }

        .dashboard-section.full-width { grid-column: 1 / -1; }

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
          .overview-grid { grid-template-columns: 1fr; }
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
        }

        .action-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .action-grid { grid-template-columns: 1fr; }
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

        .action-card:hover,
        .action-card.active {
          background: rgba(99, 102, 241, 0.1);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .action-card svg:first-child { color: var(--color-primary); }
        .action-arrow { margin-left: auto; color: var(--text-muted); }

        .data-panel { padding-top: 1rem; }

        .data-panel-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .panel-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0;
        }

        .close-panel-btn {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          background: transparent;
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
          padding: 0.4rem 0.75rem;
          border-radius: var(--radius-md);
          cursor: pointer;
          font-size: 0.85rem;
          transition: all var(--transition-fast);
        }

        .close-panel-btn:hover {
          color: var(--text-primary);
          border-color: var(--color-primary);
        }

        .panel-content { margin-top: 0.5rem; }

        .panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .panel-header h3 {
          margin: 0;
          font-size: 1rem;
          color: var(--text-primary);
        }

        .panel-count {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .panel-empty {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }

        .data-table-wrapper { overflow-x: auto; }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }

        .data-table th,
        .data-table td {
          padding: 0.75rem 1rem;
          text-align: left;
          border-bottom: 1px solid var(--border-glass);
        }

        .data-table th {
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .data-table td { color: var(--text-primary); }

        .role-badge {
          display: inline-block;
          padding: 0.2rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: capitalize;
        }

        .role-badge.admin { background: rgba(244, 63, 94, 0.15); color: #f87171; }
        .role-badge.employer { background: rgba(6, 182, 212, 0.15); color: #22d3ee; }
        .role-badge.candidate { background: rgba(99, 102, 241, 0.15); color: #818cf8; }

        .status-badge {
          display: inline-block;
          padding: 0.2rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
        }

        .icon-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.25rem;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .icon-btn.danger:hover {
          color: #f87171;
          background: rgba(244, 63, 94, 0.1);
        }

        .security-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .security-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
        }

        .security-card svg { color: var(--color-primary); flex-shrink: 0; margin-top: 0.125rem; }

        .security-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin: 0 0 0.25rem;
        }

        .security-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .security-notes h4 {
          font-size: 0.9rem;
          color: var(--text-primary);
          margin: 0 0 0.75rem;
        }

        .security-notes ul {
          margin: 0;
          padding-left: 1.25rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.7;
        }

        .analytics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .analytics-card {
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          text-align: center;
        }

        .analytics-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin: 0 0 0.5rem;
        }

        .analytics-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .analytics-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0.25rem 0 0;
        }

        .analytics-breakdown h4 {
          font-size: 0.9rem;
          color: var(--text-primary);
          margin: 0 0 1rem;
        }

        .breakdown-bars { display: flex; flex-direction: column; gap: 0.75rem; }

        .breakdown-row {
          display: grid;
          grid-template-columns: 90px 1fr 32px;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .breakdown-bar-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 9999px;
          overflow: hidden;
        }

        .breakdown-bar {
          height: 100%;
          border-radius: 9999px;
          transition: width 0.3s ease;
        }

        .fill-candidate { background: #818cf8; }
        .fill-employer { background: #22d3ee; }
        .fill-admin { background: #f87171; }

        .breakdown-count {
          text-align: right;
          font-weight: 600;
          color: var(--text-primary);
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

        .activity-text {
          color: var(--text-primary);
          font-size: 0.9rem;
          margin: 0 0 0.25rem;
        }

        .activity-time {
          color: var(--text-muted);
          font-size: 0.8rem;
          margin: 0;
        }
      `})]})},Zt=({userProfile:e,onSendMessage:t,initialMessage:r})=>{const[n,l]=w.useState(!1),[i,s]=w.useState(!1),[o,c]=w.useState(r?[{id:1,type:"bot",text:r}]:[{id:1,type:"bot",text:"Hi! I'm your AI Career Coach. I can help you with job applications, salary negotiations, skill development, and career planning. What would you like to know?"}]),[d,m]=w.useState(""),[p,g]=w.useState(!1),j=w.useRef(null),x=()=>{var u;(u=j.current)==null||u.scrollIntoView({behavior:"smooth"})};w.useEffect(()=>{x()},[o,p]);const v=async()=>{if(!d.trim())return;const u={id:o.length+1,type:"user",text:d};c(y=>[...y,u]);const h=d;if(m(""),g(!0),t)try{const y=await t(h,e),k={id:o.length+2,type:"bot",text:y||"I'm processing your request. Please try again in a moment."};c(S=>[...S,k])}catch{const k={id:o.length+2,type:"bot",text:"Sorry, I encountered an error. Please try again."};c(S=>[...S,k])}else g(!1)},b=u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),v())},f=["How do I negotiate my salary?","What skills should I learn next?","How can I improve my resume?","What should I expect in interviews?"];return a.jsxs(a.Fragment,{children:[!n&&a.jsxs("button",{className:"coach-toggle",onClick:()=>l(!0),children:[a.jsx(Pu,{size:24}),a.jsx("span",{className:"toggle-label",children:"Career Coach"})]}),n&&a.jsxs("div",{className:`coach-window ${i?"minimized":""}`,children:[a.jsxs("div",{className:"coach-header",children:[a.jsxs("div",{className:"coach-info",children:[a.jsx("div",{className:"coach-avatar",children:a.jsx(bh,{size:20})}),a.jsxs("div",{children:[a.jsx("h4",{className:"coach-name",children:"AI Career Coach"}),a.jsx("span",{className:"coach-status",children:"Online"})]})]}),a.jsxs("div",{className:"coach-controls",children:[a.jsx("button",{className:"control-btn",onClick:()=>s(!i),title:i?"Expand":"Minimize",children:i?a.jsx(Eh,{size:18}):a.jsx(Ph,{size:18})}),a.jsx("button",{className:"control-btn close-btn",onClick:()=>l(!1),title:"Close",children:a.jsx(Pn,{size:18})})]})]}),!i&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"coach-messages",children:[o.map(u=>a.jsx("div",{className:`message ${u.type}`,children:a.jsx("div",{className:"message-content",children:u.text})},u.id)),p&&a.jsx("div",{className:"message bot typing",children:a.jsxs("div",{className:"typing-indicator",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})}),a.jsx("div",{ref:j})]}),o.length<=2&&a.jsxs("div",{className:"suggested-questions",children:[a.jsx("p",{className:"suggested-label",children:"Try asking:"}),a.jsx("div",{className:"suggested-buttons",children:f.map((u,h)=>a.jsx("button",{className:"suggested-btn",onClick:()=>{m(u),v()},children:u},h))})]}),a.jsxs("div",{className:"coach-input",children:[a.jsx("textarea",{className:"message-input",placeholder:"Ask me anything about your career...",value:d,onChange:u=>m(u.target.value),onKeyPress:b,rows:1}),a.jsx("button",{className:"send-btn",onClick:v,disabled:!d.trim()||p,children:a.jsx(qa,{size:18})})]})]})]}),a.jsx("style",{children:`
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
      `})]})},ug=()=>{const{user:e}=Pe();return a.jsx(tn,{to:Ga(e==null?void 0:e.role),replace:!0})},mg=()=>{const{user:e}=Pe(),t=w.useMemo(()=>e==null?void 0:e.email,[e]),[r,n]=w.useState(null);w.useEffect(()=>{if(t)try{const i=localStorage.getItem(`profile_${t}`);n(i?JSON.parse(i):null)}catch{n(null)}},[t]);const l=async()=>new Promise(i=>{setTimeout(()=>{i("I'm here to help with your career questions. This demo coach uses a placeholder backend response.")},500)});return a.jsxs(ih,{children:[a.jsx(Ue,{path:"/login",element:a.jsx(Rh,{})}),a.jsx(Ue,{path:"/register",element:a.jsx(Ih,{})}),a.jsx(Ue,{path:"/",element:a.jsx($t,{allowedRoles:["candidate"],children:a.jsxs("div",{className:"app-container",children:[a.jsx(Ot,{}),a.jsx("main",{className:"main-content",children:a.jsx($h,{})}),a.jsx(Zt,{userProfile:r,onSendMessage:l}),a.jsx(Uh,{candidateEmail:e==null?void 0:e.email,employerId:"default-employer"})]})})}),a.jsx(Ue,{path:"/create-job",element:a.jsx($t,{requiredRole:"employer",children:a.jsxs("div",{className:"app-container",children:[a.jsx(Ot,{}),a.jsx("main",{className:"main-content",children:a.jsx(Dh,{})}),a.jsx(Zt,{userProfile:r,onSendMessage:l})]})})}),a.jsx(Ue,{path:"/view-jobs",element:a.jsx($t,{allowedRoles:["candidate","employer"],children:a.jsxs("div",{className:"app-container",children:[a.jsx(Ot,{}),a.jsx("main",{className:"main-content",children:a.jsx(Fh,{})}),a.jsx(Zt,{userProfile:r,onSendMessage:l})]})})}),a.jsx(Ue,{path:"/candidate-dashboard",element:a.jsx($t,{requiredRole:"candidate",children:a.jsxs("div",{className:"app-container",children:[a.jsx(Ot,{}),a.jsx("main",{className:"main-content",children:a.jsx(lg,{})}),a.jsx(Zt,{userProfile:r,onSendMessage:l})]})})}),a.jsx(Ue,{path:"/employer-dashboard",element:a.jsx($t,{requiredRole:"employer",children:a.jsxs("div",{className:"app-container",children:[a.jsx(Ot,{}),a.jsx("main",{className:"main-content",children:a.jsx(ig,{})}),a.jsx(Zt,{userProfile:r,onSendMessage:l})]})})}),a.jsx(Ue,{path:"/admin-dashboard",element:a.jsx($t,{requiredRole:"admin",children:a.jsxs("div",{className:"app-container",children:[a.jsx(Ot,{}),a.jsx("main",{className:"main-content",children:a.jsx(dg,{})})]})})}),a.jsx(Ue,{path:"/profile",element:a.jsx($t,{allowedRoles:["candidate","employer"],children:a.jsxs("div",{className:"app-container",children:[a.jsx(Ot,{}),a.jsx("main",{className:"main-content",children:a.jsx(Oh,{})}),a.jsx(Zt,{userProfile:r,onSendMessage:l})]})})}),a.jsx(Ue,{path:"*",element:e?a.jsx(ug,{}):a.jsx(tn,{to:"/login",replace:!0})})]})};function pg(){return a.jsx(ph,{children:a.jsx(vh,{children:a.jsx(mg,{})})})}El.createRoot(document.getElementById("root")).render(a.jsx(cc.StrictMode,{children:a.jsx(pg,{})}));
