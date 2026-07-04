function Bu(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const l in n)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(n,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>n[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=r(l);fetch(l.href,i)}})();function Vu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nc={exports:{}},Ia={},ac={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sn=Symbol.for("react.element"),Wu=Symbol.for("react.portal"),Ju=Symbol.for("react.fragment"),Hu=Symbol.for("react.strict_mode"),Yu=Symbol.for("react.profiler"),Qu=Symbol.for("react.provider"),Ku=Symbol.for("react.context"),Gu=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),qu=Symbol.for("react.memo"),Zu=Symbol.for("react.lazy"),Ls=Symbol.iterator;function em(e){return e===null||typeof e!="object"?null:(e=Ls&&e[Ls]||e["@@iterator"],typeof e=="function"?e:null)}var lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ic=Object.assign,sc={};function Pr(e,t,r){this.props=e,this.context=t,this.refs=sc,this.updater=r||lc}Pr.prototype.isReactComponent={};Pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function oc(){}oc.prototype=Pr.prototype;function Pi(e,t,r){this.props=e,this.context=t,this.refs=sc,this.updater=r||lc}var Ri=Pi.prototype=new oc;Ri.constructor=Pi;ic(Ri,Pr.prototype);Ri.isPureReactComponent=!0;var Ms=Array.isArray,cc=Object.prototype.hasOwnProperty,_i={current:null},dc={key:!0,ref:!0,__self:!0,__source:!0};function uc(e,t,r){var n,l={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)cc.call(t,n)&&!dc.hasOwnProperty(n)&&(l[n]=t[n]);var o=arguments.length-2;if(o===1)l.children=r;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];l.children=c}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)l[n]===void 0&&(l[n]=o[n]);return{$$typeof:Sn,type:e,key:i,ref:s,props:l,_owner:_i.current}}function tm(e,t){return{$$typeof:Sn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Li(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sn}function rm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ts=/\/+/g;function nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rm(""+e.key):t.toString(36)}function Xn(e,t,r,n,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Sn:case Wu:s=!0}}if(s)return s=e,l=l(s),e=n===""?"."+nl(s,0):n,Ms(l)?(r="",e!=null&&(r=e.replace(Ts,"$&/")+"/"),Xn(l,t,r,"",function(d){return d})):l!=null&&(Li(l)&&(l=tm(l,r+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(Ts,"$&/")+"/")+e)),t.push(l)),1;if(s=0,n=n===""?".":n+":",Ms(e))for(var o=0;o<e.length;o++){i=e[o];var c=n+nl(i,o);s+=Xn(i,t,r,c,l)}else if(c=em(e),typeof c=="function")for(e=c.call(e),o=0;!(i=e.next()).done;)i=i.value,c=n+nl(i,o++),s+=Xn(i,t,r,c,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Tn(e,t,r){if(e==null)return e;var n=[],l=0;return Xn(e,n,"","",function(i){return t.call(r,i,l++)}),n}function nm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},qn={transition:null},am={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:qn,ReactCurrentOwner:_i};function mc(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:Tn,forEach:function(e,t,r){Tn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Tn(e,function(){t++}),t},toArray:function(e){return Tn(e,function(t){return t})||[]},only:function(e){if(!Li(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=Pr;T.Fragment=Ju;T.Profiler=Yu;T.PureComponent=Pi;T.StrictMode=Hu;T.Suspense=Xu;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=am;T.act=mc;T.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ic({},e.props),l=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=_i.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)cc.call(t,c)&&!dc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];n.children=o}return{$$typeof:Sn,type:e.type,key:l,ref:i,props:n,_owner:s}};T.createContext=function(e){return e={$$typeof:Ku,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qu,_context:e},e.Consumer=e};T.createElement=uc;T.createFactory=function(e){var t=uc.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Gu,render:e}};T.isValidElement=Li;T.lazy=function(e){return{$$typeof:Zu,_payload:{_status:-1,_result:e},_init:nm}};T.memo=function(e,t){return{$$typeof:qu,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=qn.transition;qn.transition={};try{e()}finally{qn.transition=t}};T.unstable_act=mc;T.useCallback=function(e,t){return fe.current.useCallback(e,t)};T.useContext=function(e){return fe.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};T.useEffect=function(e,t){return fe.current.useEffect(e,t)};T.useId=function(){return fe.current.useId()};T.useImperativeHandle=function(e,t,r){return fe.current.useImperativeHandle(e,t,r)};T.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return fe.current.useMemo(e,t)};T.useReducer=function(e,t,r){return fe.current.useReducer(e,t,r)};T.useRef=function(e){return fe.current.useRef(e)};T.useState=function(e){return fe.current.useState(e)};T.useSyncExternalStore=function(e,t,r){return fe.current.useSyncExternalStore(e,t,r)};T.useTransition=function(){return fe.current.useTransition()};T.version="18.3.1";ac.exports=T;var w=ac.exports;const pc=Vu(w),lm=Bu({__proto__:null,default:pc},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im=w,sm=Symbol.for("react.element"),om=Symbol.for("react.fragment"),cm=Object.prototype.hasOwnProperty,dm=im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,um={key:!0,ref:!0,__self:!0,__source:!0};function fc(e,t,r){var n,l={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)cm.call(t,n)&&!um.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)l[n]===void 0&&(l[n]=t[n]);return{$$typeof:sm,type:e,key:i,ref:s,props:l,_owner:dm.current}}Ia.Fragment=om;Ia.jsx=fc;Ia.jsxs=fc;nc.exports=Ia;var a=nc.exports,_l={},hc={exports:{}},ze={},gc={exports:{}},vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,_){var M=z.length;z.push(_);e:for(;0<M;){var Y=M-1>>>1,ee=z[Y];if(0<l(ee,_))z[Y]=_,z[M]=ee,M=Y;else break e}}function r(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var _=z[0],M=z.pop();if(M!==_){z[0]=M;e:for(var Y=0,ee=z.length,Ln=ee>>>1;Y<Ln;){var Tt=2*(Y+1)-1,rl=z[Tt],It=Tt+1,Mn=z[It];if(0>l(rl,M))It<ee&&0>l(Mn,rl)?(z[Y]=Mn,z[It]=M,Y=It):(z[Y]=rl,z[Tt]=M,Y=Tt);else if(It<ee&&0>l(Mn,M))z[Y]=Mn,z[It]=M,Y=It;else break e}}return _}function l(z,_){var M=z.sortIndex-_.sortIndex;return M!==0?M:z.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var c=[],d=[],m=1,p=null,g=3,b=!1,x=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var _=r(d);_!==null;){if(_.callback===null)n(d);else if(_.startTime<=z)n(d),_.sortIndex=_.expirationTime,t(c,_);else break;_=r(d)}}function y(z){if(v=!1,h(z),!x)if(r(c)!==null)x=!0,Xe(k);else{var _=r(d);_!==null&&ct(y,_.startTime-z)}}function k(z,_){x=!1,v&&(v=!1,f(P),P=-1),b=!0;var M=g;try{for(h(_),p=r(c);p!==null&&(!(p.expirationTime>_)||z&&!Z());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,g=p.priorityLevel;var ee=Y(p.expirationTime<=_);_=e.unstable_now(),typeof ee=="function"?p.callback=ee:p===r(c)&&n(c),h(_)}else n(c);p=r(c)}if(p!==null)var Ln=!0;else{var Tt=r(d);Tt!==null&&ct(y,Tt.startTime-_),Ln=!1}return Ln}finally{p=null,g=M,b=!1}}var S=!1,C=null,P=-1,A=5,R=-1;function Z(){return!(e.unstable_now()-R<A)}function Oe(){if(C!==null){var z=e.unstable_now();R=z;var _=!0;try{_=C(!0,z)}finally{_?ge():(S=!1,C=null)}}else S=!1}var ge;if(typeof u=="function")ge=function(){u(Oe)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,ne=F.port2;F.port1.onmessage=Oe,ge=function(){ne.postMessage(null)}}else ge=function(){j(Oe,0)};function Xe(z){C=z,S||(S=!0,ge())}function ct(z,_){P=j(function(){z(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){x||b||(x=!0,Xe(k))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var M=g;g=_;try{return z()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,_){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var M=g;g=z;try{return _()}finally{g=M}},e.unstable_scheduleCallback=function(z,_,M){var Y=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Y+M:Y):M=Y,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=M+ee,z={id:m++,callback:_,priorityLevel:z,startTime:M,expirationTime:ee,sortIndex:-1},M>Y?(z.sortIndex=M,t(d,z),r(c)===null&&z===r(d)&&(v?(f(P),P=-1):v=!0,ct(y,M-Y))):(z.sortIndex=ee,t(c,z),x||b||(x=!0,Xe(k))),z},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(z){var _=g;return function(){var M=g;g=_;try{return z.apply(this,arguments)}finally{g=M}}}})(vc);gc.exports=vc;var mm=gc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=w,Ce=mm;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yc=new Set,an={};function Xt(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(an[e]=t,e=0;e<t.length;e++)yc.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ll=Object.prototype.hasOwnProperty,fm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Is={},Os={};function hm(e){return Ll.call(Os,e)?!0:Ll.call(Is,e)?!1:fm.test(e)?Os[e]=!0:(Is[e]=!0,!1)}function gm(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vm(e,t,r,n){if(t===null||typeof t>"u"||gm(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,r,n,l,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Mi=/[\-:]([a-z])/g;function Ti(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Mi,Ti);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Mi,Ti);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Mi,Ti);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ii(e,t,r,n){var l=ie.hasOwnProperty(t)?ie[t]:null;(l!==null?l.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vm(t,r,l,n)&&(r=null),n||l===null?hm(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,n=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ot=pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,In=Symbol.for("react.element"),rr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),Oi=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),xc=Symbol.for("react.provider"),wc=Symbol.for("react.context"),Ai=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),Il=Symbol.for("react.suspense_list"),Di=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),bc=Symbol.for("react.offscreen"),As=Symbol.iterator;function Ir(e){return e===null||typeof e!="object"?null:(e=As&&e[As]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,al;function Vr(e){if(al===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);al=t&&t[1]||""}return`
`+al+e}var ll=!1;function il(e,t){if(!e||ll)return"";ll=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=n.stack.split(`
`),s=l.length-1,o=i.length-1;1<=s&&0<=o&&l[s]!==i[o];)o--;for(;1<=s&&0<=o;s--,o--)if(l[s]!==i[o]){if(s!==1||o!==1)do if(s--,o--,0>o||l[s]!==i[o]){var c=`
`+l[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=o);break}}}finally{ll=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Vr(e):""}function ym(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=il(e.type,!1),e;case 11:return e=il(e.type.render,!1),e;case 1:return e=il(e.type,!0),e;default:return""}}function Ol(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case rr:return"Portal";case Ml:return"Profiler";case Oi:return"StrictMode";case Tl:return"Suspense";case Il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wc:return(e.displayName||"Context")+".Consumer";case xc:return(e._context.displayName||"Context")+".Provider";case Ai:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Di:return t=e.displayName||null,t!==null?t:Ol(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return Ol(e(t))}catch{}}return null}function xm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ol(t);case 8:return t===Oi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wm(e){var t=jc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function On(e){e._valueTracker||(e._valueTracker=wm(e))}function kc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=jc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Al(e,t){var r=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ds(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=zt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nc(e,t){t=t.checked,t!=null&&Ii(e,"checked",t,!1)}function Dl(e,t){Nc(e,t);var r=zt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Fl(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fs(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Fl(e,t,r){(t!=="number"||ca(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Wr=Array.isArray;function fr(e,t,r,n){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&n&&(e[r].defaultSelected=!0)}else{for(r=""+zt(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Us(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(N(92));if(Wr(r)){if(1<r.length)throw Error(N(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:zt(r)}}function Sc(e,t){var r=zt(t.value),n=zt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function $s(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $l(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var An,zc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(An=An||document.createElement("div"),An.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=An.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ln(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bm=["Webkit","ms","Moz","O"];Object.keys(Yr).forEach(function(e){bm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yr[t]=Yr[e]})});function Ec(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Yr.hasOwnProperty(e)&&Yr[e]?(""+t).trim():t+"px"}function Pc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,l=Ec(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,l):e[r]=l}}var jm=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bl(e,t){if(t){if(jm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wl=null;function Fi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,hr=null,gr=null;function Bs(e){if(e=En(e)){if(typeof Jl!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Ua(t),Jl(e.stateNode,e.type,t))}}function Rc(e){hr?gr?gr.push(e):gr=[e]:hr=e}function _c(){if(hr){var e=hr,t=gr;if(gr=hr=null,Bs(e),t)for(e=0;e<t.length;e++)Bs(t[e])}}function Lc(e,t){return e(t)}function Mc(){}var sl=!1;function Tc(e,t,r){if(sl)return e(t,r);sl=!0;try{return Lc(e,t,r)}finally{sl=!1,(hr!==null||gr!==null)&&(Mc(),_c())}}function sn(e,t){var r=e.stateNode;if(r===null)return null;var n=Ua(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,t,typeof r));return r}var Hl=!1;if(at)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Hl=!1}function km(e,t,r,n,l,i,s,o,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(m){this.onError(m)}}var Qr=!1,da=null,ua=!1,Yl=null,Nm={onError:function(e){Qr=!0,da=e}};function Sm(e,t,r,n,l,i,s,o,c){Qr=!1,da=null,km.apply(Nm,arguments)}function Cm(e,t,r,n,l,i,s,o,c){if(Sm.apply(this,arguments),Qr){if(Qr){var d=da;Qr=!1,da=null}else throw Error(N(198));ua||(ua=!0,Yl=d)}}function qt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ic(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vs(e){if(qt(e)!==e)throw Error(N(188))}function zm(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var r=e,n=t;;){var l=r.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){r=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===r)return Vs(l),e;if(i===n)return Vs(l),t;i=i.sibling}throw Error(N(188))}if(r.return!==n.return)r=l,n=i;else{for(var s=!1,o=l.child;o;){if(o===r){s=!0,r=l,n=i;break}if(o===n){s=!0,n=l,r=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===r){s=!0,r=i,n=l;break}if(o===n){s=!0,n=i,r=l;break}o=o.sibling}if(!s)throw Error(N(189))}}if(r.alternate!==n)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:t}function Oc(e){return e=zm(e),e!==null?Ac(e):null}function Ac(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ac(e);if(t!==null)return t;e=e.sibling}return null}var Dc=Ce.unstable_scheduleCallback,Ws=Ce.unstable_cancelCallback,Em=Ce.unstable_shouldYield,Pm=Ce.unstable_requestPaint,Q=Ce.unstable_now,Rm=Ce.unstable_getCurrentPriorityLevel,Ui=Ce.unstable_ImmediatePriority,Fc=Ce.unstable_UserBlockingPriority,ma=Ce.unstable_NormalPriority,_m=Ce.unstable_LowPriority,Uc=Ce.unstable_IdlePriority,Oa=null,Ke=null;function Lm(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Oa,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Im,Mm=Math.log,Tm=Math.LN2;function Im(e){return e>>>=0,e===0?32:31-(Mm(e)/Tm|0)|0}var Dn=64,Fn=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pa(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,l=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var o=s&~l;o!==0?n=Jr(o):(i&=s,i!==0&&(n=Jr(i)))}else s=r&~l,s!==0?n=Jr(s):i!==0&&(n=Jr(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&l)&&(l=n&-n,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ve(t),l=1<<r,n|=e[r],t&=~l;return n}function Om(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Am(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Ve(i),o=1<<s,c=l[s];c===-1?(!(o&r)||o&n)&&(l[s]=Om(o,t)):c<=t&&(e.expiredLanes|=o),i&=~o}}function Ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $c(){var e=Dn;return Dn<<=1,!(Dn&4194240)&&(Dn=64),e}function ol(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Cn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=r}function Dm(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Ve(r),i=1<<l;t[l]=0,n[l]=-1,e[l]=-1,r&=~i}}function $i(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ve(r),l=1<<n;l&t|e[n]&t&&(e[n]|=t),r&=~l}}var O=0;function Bc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vc,Bi,Wc,Jc,Hc,Kl=!1,Un=[],yt=null,xt=null,wt=null,on=new Map,cn=new Map,pt=[],Fm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Js(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":on.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cn.delete(t.pointerId)}}function Ar(e,t,r,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=En(t),t!==null&&Bi(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Um(e,t,r,n,l){switch(t){case"focusin":return yt=Ar(yt,e,t,r,n,l),!0;case"dragenter":return xt=Ar(xt,e,t,r,n,l),!0;case"mouseover":return wt=Ar(wt,e,t,r,n,l),!0;case"pointerover":var i=l.pointerId;return on.set(i,Ar(on.get(i)||null,e,t,r,n,l)),!0;case"gotpointercapture":return i=l.pointerId,cn.set(i,Ar(cn.get(i)||null,e,t,r,n,l)),!0}return!1}function Yc(e){var t=$t(e.target);if(t!==null){var r=qt(t);if(r!==null){if(t=r.tag,t===13){if(t=Ic(r),t!==null){e.blockedOn=t,Hc(e.priority,function(){Wc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Gl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Wl=n,r.target.dispatchEvent(n),Wl=null}else return t=En(r),t!==null&&Bi(t),e.blockedOn=r,!1;t.shift()}return!0}function Hs(e,t,r){Zn(e)&&r.delete(t)}function $m(){Kl=!1,yt!==null&&Zn(yt)&&(yt=null),xt!==null&&Zn(xt)&&(xt=null),wt!==null&&Zn(wt)&&(wt=null),on.forEach(Hs),cn.forEach(Hs)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Kl||(Kl=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,$m)))}function dn(e){function t(l){return Dr(l,e)}if(0<Un.length){Dr(Un[0],e);for(var r=1;r<Un.length;r++){var n=Un[r];n.blockedOn===e&&(n.blockedOn=null)}}for(yt!==null&&Dr(yt,e),xt!==null&&Dr(xt,e),wt!==null&&Dr(wt,e),on.forEach(t),cn.forEach(t),r=0;r<pt.length;r++)n=pt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<pt.length&&(r=pt[0],r.blockedOn===null);)Yc(r),r.blockedOn===null&&pt.shift()}var vr=ot.ReactCurrentBatchConfig,fa=!0;function Bm(e,t,r,n){var l=O,i=vr.transition;vr.transition=null;try{O=1,Vi(e,t,r,n)}finally{O=l,vr.transition=i}}function Vm(e,t,r,n){var l=O,i=vr.transition;vr.transition=null;try{O=4,Vi(e,t,r,n)}finally{O=l,vr.transition=i}}function Vi(e,t,r,n){if(fa){var l=Gl(e,t,r,n);if(l===null)yl(e,t,n,ha,r),Js(e,n);else if(Um(l,e,t,r,n))n.stopPropagation();else if(Js(e,n),t&4&&-1<Fm.indexOf(e)){for(;l!==null;){var i=En(l);if(i!==null&&Vc(i),i=Gl(e,t,r,n),i===null&&yl(e,t,n,ha,r),i===l)break;l=i}l!==null&&n.stopPropagation()}else yl(e,t,n,null,r)}}var ha=null;function Gl(e,t,r,n){if(ha=null,e=Fi(n),e=$t(e),e!==null)if(t=qt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ic(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ha=e,null}function Qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rm()){case Ui:return 1;case Fc:return 4;case ma:case _m:return 16;case Uc:return 536870912;default:return 16}default:return 16}}var ht=null,Wi=null,ea=null;function Kc(){if(ea)return ea;var e,t=Wi,r=t.length,n,l="value"in ht?ht.value:ht.textContent,i=l.length;for(e=0;e<r&&t[e]===l[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===l[i-n];n++);return ea=l.slice(e,1<n?1-n:void 0)}function ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $n(){return!0}function Ys(){return!1}function Ee(e){function t(r,n,l,i,s){this._reactName=r,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$n:Ys,this.isPropagationStopped=Ys,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),t}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=Ee(Rr),zn=J({},Rr,{view:0,detail:0}),Wm=Ee(zn),cl,dl,Fr,Aa=J({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(cl=e.screenX-Fr.screenX,dl=e.screenY-Fr.screenY):dl=cl=0,Fr=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:dl}}),Qs=Ee(Aa),Jm=J({},Aa,{dataTransfer:0}),Hm=Ee(Jm),Ym=J({},zn,{relatedTarget:0}),ul=Ee(Ym),Qm=J({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Km=Ee(Qm),Gm=J({},Rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xm=Ee(Gm),qm=J({},Rr,{data:0}),Ks=Ee(qm),Zm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ep={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tp[e])?!!t[e]:!1}function Hi(){return rp}var np=J({},zn,{key:function(e){if(e.key){var t=Zm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ep[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hi,charCode:function(e){return e.type==="keypress"?ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ap=Ee(np),lp=J({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gs=Ee(lp),ip=J({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hi}),sp=Ee(ip),op=J({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cp=Ee(op),dp=J({},Aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),up=Ee(dp),mp=[9,13,27,32],Yi=at&&"CompositionEvent"in window,Kr=null;at&&"documentMode"in document&&(Kr=document.documentMode);var pp=at&&"TextEvent"in window&&!Kr,Gc=at&&(!Yi||Kr&&8<Kr&&11>=Kr),Xs=" ",qs=!1;function Xc(e,t){switch(e){case"keyup":return mp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function fp(e,t){switch(e){case"compositionend":return qc(t);case"keypress":return t.which!==32?null:(qs=!0,Xs);case"textInput":return e=t.data,e===Xs&&qs?null:e;default:return null}}function hp(e,t){if(ar)return e==="compositionend"||!Yi&&Xc(e,t)?(e=Kc(),ea=Wi=ht=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gc&&t.locale!=="ko"?null:t.data;default:return null}}var gp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gp[e.type]:t==="textarea"}function Zc(e,t,r,n){Rc(n),t=ga(t,"onChange"),0<t.length&&(r=new Ji("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Gr=null,un=null;function vp(e){dd(e,0)}function Da(e){var t=sr(e);if(kc(t))return e}function yp(e,t){if(e==="change")return t}var ed=!1;if(at){var ml;if(at){var pl="oninput"in document;if(!pl){var eo=document.createElement("div");eo.setAttribute("oninput","return;"),pl=typeof eo.oninput=="function"}ml=pl}else ml=!1;ed=ml&&(!document.documentMode||9<document.documentMode)}function to(){Gr&&(Gr.detachEvent("onpropertychange",td),un=Gr=null)}function td(e){if(e.propertyName==="value"&&Da(un)){var t=[];Zc(t,un,e,Fi(e)),Tc(vp,t)}}function xp(e,t,r){e==="focusin"?(to(),Gr=t,un=r,Gr.attachEvent("onpropertychange",td)):e==="focusout"&&to()}function wp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Da(un)}function bp(e,t){if(e==="click")return Da(t)}function jp(e,t){if(e==="input"||e==="change")return Da(t)}function kp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:kp;function mn(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var l=r[n];if(!Ll.call(t,l)||!Je(e[l],t[l]))return!1}return!0}function ro(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function no(e,t){var r=ro(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ro(r)}}function rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nd(){for(var e=window,t=ca();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ca(e.document)}return t}function Qi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Np(e){var t=nd(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&rd(r.ownerDocument.documentElement,r)){if(n!==null&&Qi(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,i=Math.min(n.start,l);n=n.end===void 0?i:Math.min(n.end,l),!e.extend&&i>n&&(l=n,n=i,i=l),l=no(r,i);var s=no(r,n);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sp=at&&"documentMode"in document&&11>=document.documentMode,lr=null,Xl=null,Xr=null,ql=!1;function ao(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ql||lr==null||lr!==ca(n)||(n=lr,"selectionStart"in n&&Qi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Xr&&mn(Xr,n)||(Xr=n,n=ga(Xl,"onSelect"),0<n.length&&(t=new Ji("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=lr)))}function Bn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ir={animationend:Bn("Animation","AnimationEnd"),animationiteration:Bn("Animation","AnimationIteration"),animationstart:Bn("Animation","AnimationStart"),transitionend:Bn("Transition","TransitionEnd")},fl={},ad={};at&&(ad=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function Fa(e){if(fl[e])return fl[e];if(!ir[e])return e;var t=ir[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in ad)return fl[e]=t[r];return e}var ld=Fa("animationend"),id=Fa("animationiteration"),sd=Fa("animationstart"),od=Fa("transitionend"),cd=new Map,lo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){cd.set(e,t),Xt(t,[e])}for(var hl=0;hl<lo.length;hl++){var gl=lo[hl],Cp=gl.toLowerCase(),zp=gl[0].toUpperCase()+gl.slice(1);Pt(Cp,"on"+zp)}Pt(ld,"onAnimationEnd");Pt(id,"onAnimationIteration");Pt(sd,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(od,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ep=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function io(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Cm(n,t,void 0,e),e.currentTarget=null}function dd(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==i&&l.isPropagationStopped())break e;io(l,o,d),i=c}else for(s=0;s<n.length;s++){if(o=n[s],c=o.instance,d=o.currentTarget,o=o.listener,c!==i&&l.isPropagationStopped())break e;io(l,o,d),i=c}}}if(ua)throw e=Yl,ua=!1,Yl=null,e}function U(e,t){var r=t[ni];r===void 0&&(r=t[ni]=new Set);var n=e+"__bubble";r.has(n)||(ud(t,e,2,!1),r.add(n))}function vl(e,t,r){var n=0;t&&(n|=4),ud(r,e,n,t)}var Vn="_reactListening"+Math.random().toString(36).slice(2);function pn(e){if(!e[Vn]){e[Vn]=!0,yc.forEach(function(r){r!=="selectionchange"&&(Ep.has(r)||vl(r,!1,e),vl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vn]||(t[Vn]=!0,vl("selectionchange",!1,t))}}function ud(e,t,r,n){switch(Qc(t)){case 1:var l=Bm;break;case 4:l=Vm;break;default:l=Vi}r=l.bind(null,t,r,e),l=void 0,!Hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function yl(e,t,r,n,l){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;s=s.return}for(;o!==null;){if(s=$t(o),s===null)return;if(c=s.tag,c===5||c===6){n=i=s;continue e}o=o.parentNode}}n=n.return}Tc(function(){var d=i,m=Fi(r),p=[];e:{var g=cd.get(e);if(g!==void 0){var b=Ji,x=e;switch(e){case"keypress":if(ta(r)===0)break e;case"keydown":case"keyup":b=ap;break;case"focusin":x="focus",b=ul;break;case"focusout":x="blur",b=ul;break;case"beforeblur":case"afterblur":b=ul;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=sp;break;case ld:case id:case sd:b=Km;break;case od:b=cp;break;case"scroll":b=Wm;break;case"wheel":b=up;break;case"copy":case"cut":case"paste":b=Xm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Gs}var v=(t&4)!==0,j=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var u=d,h;u!==null;){h=u;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,f!==null&&(y=sn(u,f),y!=null&&v.push(fn(u,y,h)))),j)break;u=u.return}0<v.length&&(g=new b(g,x,null,r,m),p.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",g&&r!==Wl&&(x=r.relatedTarget||r.fromElement)&&($t(x)||x[lt]))break e;if((b||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,b?(x=r.relatedTarget||r.toElement,b=d,x=x?$t(x):null,x!==null&&(j=qt(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(b=null,x=d),b!==x)){if(v=Qs,y="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=Gs,y="onPointerLeave",f="onPointerEnter",u="pointer"),j=b==null?g:sr(b),h=x==null?g:sr(x),g=new v(y,u+"leave",b,r,m),g.target=j,g.relatedTarget=h,y=null,$t(m)===d&&(v=new v(f,u+"enter",x,r,m),v.target=h,v.relatedTarget=j,y=v),j=y,b&&x)t:{for(v=b,f=x,u=0,h=v;h;h=er(h))u++;for(h=0,y=f;y;y=er(y))h++;for(;0<u-h;)v=er(v),u--;for(;0<h-u;)f=er(f),h--;for(;u--;){if(v===f||f!==null&&v===f.alternate)break t;v=er(v),f=er(f)}v=null}else v=null;b!==null&&so(p,g,b,v,!1),x!==null&&j!==null&&so(p,j,x,v,!0)}}e:{if(g=d?sr(d):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var k=yp;else if(Zs(g))if(ed)k=jp;else{k=wp;var S=xp}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=bp);if(k&&(k=k(e,d))){Zc(p,k,r,m);break e}S&&S(e,g,d),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&Fl(g,"number",g.value)}switch(S=d?sr(d):window,e){case"focusin":(Zs(S)||S.contentEditable==="true")&&(lr=S,Xl=d,Xr=null);break;case"focusout":Xr=Xl=lr=null;break;case"mousedown":ql=!0;break;case"contextmenu":case"mouseup":case"dragend":ql=!1,ao(p,r,m);break;case"selectionchange":if(Sp)break;case"keydown":case"keyup":ao(p,r,m)}var C;if(Yi)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ar?Xc(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(Gc&&r.locale!=="ko"&&(ar||P!=="onCompositionStart"?P==="onCompositionEnd"&&ar&&(C=Kc()):(ht=m,Wi="value"in ht?ht.value:ht.textContent,ar=!0)),S=ga(d,P),0<S.length&&(P=new Ks(P,e,null,r,m),p.push({event:P,listeners:S}),C?P.data=C:(C=qc(r),C!==null&&(P.data=C)))),(C=pp?fp(e,r):hp(e,r))&&(d=ga(d,"onBeforeInput"),0<d.length&&(m=new Ks("onBeforeInput","beforeinput",null,r,m),p.push({event:m,listeners:d}),m.data=C))}dd(p,t)})}function fn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ga(e,t){for(var r=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=sn(e,r),i!=null&&n.unshift(fn(e,i,l)),i=sn(e,t),i!=null&&n.push(fn(e,i,l))),e=e.return}return n}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function so(e,t,r,n,l){for(var i=t._reactName,s=[];r!==null&&r!==n;){var o=r,c=o.alternate,d=o.stateNode;if(c!==null&&c===n)break;o.tag===5&&d!==null&&(o=d,l?(c=sn(r,i),c!=null&&s.unshift(fn(r,c,o))):l||(c=sn(r,i),c!=null&&s.push(fn(r,c,o)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var Pp=/\r\n?/g,Rp=/\u0000|\uFFFD/g;function oo(e){return(typeof e=="string"?e:""+e).replace(Pp,`
`).replace(Rp,"")}function Wn(e,t,r){if(t=oo(t),oo(e)!==t&&r)throw Error(N(425))}function va(){}var Zl=null,ei=null;function ti(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ri=typeof setTimeout=="function"?setTimeout:void 0,_p=typeof clearTimeout=="function"?clearTimeout:void 0,co=typeof Promise=="function"?Promise:void 0,Lp=typeof queueMicrotask=="function"?queueMicrotask:typeof co<"u"?function(e){return co.resolve(null).then(e).catch(Mp)}:ri;function Mp(e){setTimeout(function(){throw e})}function xl(e,t){var r=t,n=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(n===0){e.removeChild(l),dn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=l}while(r);dn(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Qe="__reactFiber$"+_r,hn="__reactProps$"+_r,lt="__reactContainer$"+_r,ni="__reactEvents$"+_r,Tp="__reactListeners$"+_r,Ip="__reactHandles$"+_r;function $t(e){var t=e[Qe];if(t)return t;for(var r=e.parentNode;r;){if(t=r[lt]||r[Qe]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=uo(e);e!==null;){if(r=e[Qe])return r;e=uo(e)}return t}e=r,r=e.parentNode}return null}function En(e){return e=e[Qe]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Ua(e){return e[hn]||null}var ai=[],or=-1;function Rt(e){return{current:e}}function $(e){0>or||(e.current=ai[or],ai[or]=null,or--)}function D(e,t){or++,ai[or]=e.current,e.current=t}var Et={},ue=Rt(Et),xe=Rt(!1),Ht=Et;function jr(e,t){var r=e.type.contextTypes;if(!r)return Et;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in r)l[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function we(e){return e=e.childContextTypes,e!=null}function ya(){$(xe),$(ue)}function mo(e,t,r){if(ue.current!==Et)throw Error(N(168));D(ue,t),D(xe,r)}function md(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var l in n)if(!(l in t))throw Error(N(108,xm(e)||"Unknown",l));return J({},r,n)}function xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Et,Ht=ue.current,D(ue,e),D(xe,xe.current),!0}function po(e,t,r){var n=e.stateNode;if(!n)throw Error(N(169));r?(e=md(e,t,Ht),n.__reactInternalMemoizedMergedChildContext=e,$(xe),$(ue),D(ue,e)):$(xe),D(xe,r)}var Ze=null,$a=!1,wl=!1;function pd(e){Ze===null?Ze=[e]:Ze.push(e)}function Op(e){$a=!0,pd(e)}function _t(){if(!wl&&Ze!==null){wl=!0;var e=0,t=O;try{var r=Ze;for(O=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ze=null,$a=!1}catch(l){throw Ze!==null&&(Ze=Ze.slice(e+1)),Dc(Ui,_t),l}finally{O=t,wl=!1}}return null}var cr=[],dr=0,wa=null,ba=0,Re=[],_e=0,Yt=null,tt=1,rt="";function Dt(e,t){cr[dr++]=ba,cr[dr++]=wa,wa=e,ba=t}function fd(e,t,r){Re[_e++]=tt,Re[_e++]=rt,Re[_e++]=Yt,Yt=e;var n=tt;e=rt;var l=32-Ve(n)-1;n&=~(1<<l),r+=1;var i=32-Ve(t)+l;if(30<i){var s=l-l%5;i=(n&(1<<s)-1).toString(32),n>>=s,l-=s,tt=1<<32-Ve(t)+l|r<<l|n,rt=i+e}else tt=1<<i|r<<l|n,rt=e}function Ki(e){e.return!==null&&(Dt(e,1),fd(e,1,0))}function Gi(e){for(;e===wa;)wa=cr[--dr],cr[dr]=null,ba=cr[--dr],cr[dr]=null;for(;e===Yt;)Yt=Re[--_e],Re[_e]=null,rt=Re[--_e],Re[_e]=null,tt=Re[--_e],Re[_e]=null}var Se=null,Ne=null,B=!1,$e=null;function hd(e,t){var r=Le(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function fo(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,Ne=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Yt!==null?{id:tt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Le(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Se=e,Ne=null,!0):!1;default:return!1}}function li(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ii(e){if(B){var t=Ne;if(t){var r=t;if(!fo(e,t)){if(li(e))throw Error(N(418));t=bt(r.nextSibling);var n=Se;t&&fo(e,t)?hd(n,r):(e.flags=e.flags&-4097|2,B=!1,Se=e)}}else{if(li(e))throw Error(N(418));e.flags=e.flags&-4097|2,B=!1,Se=e}}}function ho(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Jn(e){if(e!==Se)return!1;if(!B)return ho(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ti(e.type,e.memoizedProps)),t&&(t=Ne)){if(li(e))throw gd(),Error(N(418));for(;t;)hd(e,t),t=bt(t.nextSibling)}if(ho(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ne=bt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Se?bt(e.stateNode.nextSibling):null;return!0}function gd(){for(var e=Ne;e;)e=bt(e.nextSibling)}function kr(){Ne=Se=null,B=!1}function Xi(e){$e===null?$e=[e]:$e.push(e)}var Ap=ot.ReactCurrentBatchConfig;function Ur(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var n=r.stateNode}if(!n)throw Error(N(147,e));var l=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var o=l.refs;s===null?delete o[i]:o[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function Hn(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function go(e){var t=e._init;return t(e._payload)}function vd(e){function t(f,u){if(e){var h=f.deletions;h===null?(f.deletions=[u],f.flags|=16):h.push(u)}}function r(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function n(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=St(f,u),f.index=0,f.sibling=null,f}function i(f,u,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<u?(f.flags|=2,u):h):(f.flags|=2,u)):(f.flags|=1048576,u)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,u,h,y){return u===null||u.tag!==6?(u=zl(h,f.mode,y),u.return=f,u):(u=l(u,h),u.return=f,u)}function c(f,u,h,y){var k=h.type;return k===nr?m(f,u,h.props.children,y,h.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ut&&go(k)===u.type)?(y=l(u,h.props),y.ref=Ur(f,u,h),y.return=f,y):(y=oa(h.type,h.key,h.props,null,f.mode,y),y.ref=Ur(f,u,h),y.return=f,y)}function d(f,u,h,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=El(h,f.mode,y),u.return=f,u):(u=l(u,h.children||[]),u.return=f,u)}function m(f,u,h,y,k){return u===null||u.tag!==7?(u=Jt(h,f.mode,y,k),u.return=f,u):(u=l(u,h),u.return=f,u)}function p(f,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=zl(""+u,f.mode,h),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case In:return h=oa(u.type,u.key,u.props,null,f.mode,h),h.ref=Ur(f,null,u),h.return=f,h;case rr:return u=El(u,f.mode,h),u.return=f,u;case ut:var y=u._init;return p(f,y(u._payload),h)}if(Wr(u)||Ir(u))return u=Jt(u,f.mode,h,null),u.return=f,u;Hn(f,u)}return null}function g(f,u,h,y){var k=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:o(f,u,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case In:return h.key===k?c(f,u,h,y):null;case rr:return h.key===k?d(f,u,h,y):null;case ut:return k=h._init,g(f,u,k(h._payload),y)}if(Wr(h)||Ir(h))return k!==null?null:m(f,u,h,y,null);Hn(f,h)}return null}function b(f,u,h,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(h)||null,o(u,f,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case In:return f=f.get(y.key===null?h:y.key)||null,c(u,f,y,k);case rr:return f=f.get(y.key===null?h:y.key)||null,d(u,f,y,k);case ut:var S=y._init;return b(f,u,h,S(y._payload),k)}if(Wr(y)||Ir(y))return f=f.get(h)||null,m(u,f,y,k,null);Hn(u,y)}return null}function x(f,u,h,y){for(var k=null,S=null,C=u,P=u=0,A=null;C!==null&&P<h.length;P++){C.index>P?(A=C,C=null):A=C.sibling;var R=g(f,C,h[P],y);if(R===null){C===null&&(C=A);break}e&&C&&R.alternate===null&&t(f,C),u=i(R,u,P),S===null?k=R:S.sibling=R,S=R,C=A}if(P===h.length)return r(f,C),B&&Dt(f,P),k;if(C===null){for(;P<h.length;P++)C=p(f,h[P],y),C!==null&&(u=i(C,u,P),S===null?k=C:S.sibling=C,S=C);return B&&Dt(f,P),k}for(C=n(f,C);P<h.length;P++)A=b(C,f,P,h[P],y),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?P:A.key),u=i(A,u,P),S===null?k=A:S.sibling=A,S=A);return e&&C.forEach(function(Z){return t(f,Z)}),B&&Dt(f,P),k}function v(f,u,h,y){var k=Ir(h);if(typeof k!="function")throw Error(N(150));if(h=k.call(h),h==null)throw Error(N(151));for(var S=k=null,C=u,P=u=0,A=null,R=h.next();C!==null&&!R.done;P++,R=h.next()){C.index>P?(A=C,C=null):A=C.sibling;var Z=g(f,C,R.value,y);if(Z===null){C===null&&(C=A);break}e&&C&&Z.alternate===null&&t(f,C),u=i(Z,u,P),S===null?k=Z:S.sibling=Z,S=Z,C=A}if(R.done)return r(f,C),B&&Dt(f,P),k;if(C===null){for(;!R.done;P++,R=h.next())R=p(f,R.value,y),R!==null&&(u=i(R,u,P),S===null?k=R:S.sibling=R,S=R);return B&&Dt(f,P),k}for(C=n(f,C);!R.done;P++,R=h.next())R=b(C,f,P,R.value,y),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?P:R.key),u=i(R,u,P),S===null?k=R:S.sibling=R,S=R);return e&&C.forEach(function(Oe){return t(f,Oe)}),B&&Dt(f,P),k}function j(f,u,h,y){if(typeof h=="object"&&h!==null&&h.type===nr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case In:e:{for(var k=h.key,S=u;S!==null;){if(S.key===k){if(k=h.type,k===nr){if(S.tag===7){r(f,S.sibling),u=l(S,h.props.children),u.return=f,f=u;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ut&&go(k)===S.type){r(f,S.sibling),u=l(S,h.props),u.ref=Ur(f,S,h),u.return=f,f=u;break e}r(f,S);break}else t(f,S);S=S.sibling}h.type===nr?(u=Jt(h.props.children,f.mode,y,h.key),u.return=f,f=u):(y=oa(h.type,h.key,h.props,null,f.mode,y),y.ref=Ur(f,u,h),y.return=f,f=y)}return s(f);case rr:e:{for(S=h.key;u!==null;){if(u.key===S)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){r(f,u.sibling),u=l(u,h.children||[]),u.return=f,f=u;break e}else{r(f,u);break}else t(f,u);u=u.sibling}u=El(h,f.mode,y),u.return=f,f=u}return s(f);case ut:return S=h._init,j(f,u,S(h._payload),y)}if(Wr(h))return x(f,u,h,y);if(Ir(h))return v(f,u,h,y);Hn(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(r(f,u.sibling),u=l(u,h),u.return=f,f=u):(r(f,u),u=zl(h,f.mode,y),u.return=f,f=u),s(f)):r(f,u)}return j}var Nr=vd(!0),yd=vd(!1),ja=Rt(null),ka=null,ur=null,qi=null;function Zi(){qi=ur=ka=null}function es(e){var t=ja.current;$(ja),e._currentValue=t}function si(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function yr(e,t){ka=e,qi=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(qi!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(ka===null)throw Error(N(308));ur=e,ka.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Bt=null;function ts(e){Bt===null?Bt=[e]:Bt.push(e)}function xd(e,t,r,n){var l=t.interleaved;return l===null?(r.next=r,ts(t)):(r.next=l.next,l.next=r),t.interleaved=r,it(e,n)}function it(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var mt=!1;function rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,I&2){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,it(e,r)}return l=n.interleaved,l===null?(t.next=t,ts(n)):(t.next=l.next,l.next=t),n.interleaved=t,it(e,r)}function ra(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,$i(e,r)}}function vo(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var l=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?l=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?l=i=t:i=i.next=t}else l=i=t;r={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Na(e,t,r,n){var l=e.updateQueue;mt=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var c=o,d=c.next;c.next=null,s===null?i=d:s.next=d,s=c;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==s&&(o===null?m.firstBaseUpdate=d:o.next=d,m.lastBaseUpdate=c))}if(i!==null){var p=l.baseState;s=0,m=d=c=null,o=i;do{var g=o.lane,b=o.eventTime;if((n&g)===g){m!==null&&(m=m.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,v=o;switch(g=t,b=r,v.tag){case 1:if(x=v.payload,typeof x=="function"){p=x.call(b,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(b,p,g):x,g==null)break e;p=J({},p,g);break e;case 2:mt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[o]:g.push(o))}else b={eventTime:b,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(d=m=b,c=p):m=m.next=b,s|=g;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;g=o,o=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(m===null&&(c=p),l.baseState=c,l.firstBaseUpdate=d,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Kt|=s,e.lanes=s,e.memoizedState=p}}function yo(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],l=n.callback;if(l!==null){if(n.callback=null,n=r,typeof l!="function")throw Error(N(191,l));l.call(n)}}}var Pn={},Ge=Rt(Pn),gn=Rt(Pn),vn=Rt(Pn);function Vt(e){if(e===Pn)throw Error(N(174));return e}function ns(e,t){switch(D(vn,t),D(gn,e),D(Ge,Pn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$l(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$l(t,e)}$(Ge),D(Ge,t)}function Sr(){$(Ge),$(gn),$(vn)}function bd(e){Vt(vn.current);var t=Vt(Ge.current),r=$l(t,e.type);t!==r&&(D(gn,e),D(Ge,r))}function as(e){gn.current===e&&($(Ge),$(gn))}var V=Rt(0);function Sa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bl=[];function ls(){for(var e=0;e<bl.length;e++)bl[e]._workInProgressVersionPrimary=null;bl.length=0}var na=ot.ReactCurrentDispatcher,jl=ot.ReactCurrentBatchConfig,Qt=0,W=null,X=null,te=null,Ca=!1,qr=!1,yn=0,Dp=0;function se(){throw Error(N(321))}function is(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Je(e[r],t[r]))return!1;return!0}function ss(e,t,r,n,l,i){if(Qt=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,na.current=e===null||e.memoizedState===null?Bp:Vp,e=r(n,l),qr){i=0;do{if(qr=!1,yn=0,25<=i)throw Error(N(301));i+=1,te=X=null,t.updateQueue=null,na.current=Wp,e=r(n,l)}while(qr)}if(na.current=za,t=X!==null&&X.next!==null,Qt=0,te=X=W=null,Ca=!1,t)throw Error(N(300));return e}function os(){var e=yn!==0;return yn=0,e}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?W.memoizedState=te=e:te=te.next=e,te}function Ie(){if(X===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=te===null?W.memoizedState:te.next;if(t!==null)te=t,X=e;else{if(e===null)throw Error(N(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},te===null?W.memoizedState=te=e:te=te.next=e}return te}function xn(e,t){return typeof t=="function"?t(e):t}function kl(e){var t=Ie(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=X,l=n.baseQueue,i=r.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}n.baseQueue=l=i,r.pending=null}if(l!==null){i=l.next,n=n.baseState;var o=s=null,c=null,d=i;do{var m=d.lane;if((Qt&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=p,s=n):c=c.next=p,W.lanes|=m,Kt|=m}d=d.next}while(d!==null&&d!==i);c===null?s=n:c.next=o,Je(n,t.memoizedState)||(ye=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){l=e;do i=l.lane,W.lanes|=i,Kt|=i,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Nl(e){var t=Ie(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=r.dispatch,l=r.pending,i=t.memoizedState;if(l!==null){r.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);Je(i,t.memoizedState)||(ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function jd(){}function kd(e,t){var r=W,n=Ie(),l=t(),i=!Je(n.memoizedState,l);if(i&&(n.memoizedState=l,ye=!0),n=n.queue,cs(Cd.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||te!==null&&te.memoizedState.tag&1){if(r.flags|=2048,wn(9,Sd.bind(null,r,n,l,t),void 0,null),re===null)throw Error(N(349));Qt&30||Nd(r,t,l)}return l}function Nd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Sd(e,t,r,n){t.value=r,t.getSnapshot=n,zd(t)&&Ed(e)}function Cd(e,t,r){return r(function(){zd(t)&&Ed(e)})}function zd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Je(e,r)}catch{return!0}}function Ed(e){var t=it(e,1);t!==null&&We(t,e,1,-1)}function xo(e){var t=Ye();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:e},t.queue=e,e=e.dispatch=$p.bind(null,W,e),[t.memoizedState,e]}function wn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Pd(){return Ie().memoizedState}function aa(e,t,r,n){var l=Ye();W.flags|=e,l.memoizedState=wn(1|t,r,void 0,n===void 0?null:n)}function Ba(e,t,r,n){var l=Ie();n=n===void 0?null:n;var i=void 0;if(X!==null){var s=X.memoizedState;if(i=s.destroy,n!==null&&is(n,s.deps)){l.memoizedState=wn(t,r,i,n);return}}W.flags|=e,l.memoizedState=wn(1|t,r,i,n)}function wo(e,t){return aa(8390656,8,e,t)}function cs(e,t){return Ba(2048,8,e,t)}function Rd(e,t){return Ba(4,2,e,t)}function _d(e,t){return Ba(4,4,e,t)}function Ld(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Md(e,t,r){return r=r!=null?r.concat([e]):null,Ba(4,4,Ld.bind(null,t,e),r)}function ds(){}function Td(e,t){var r=Ie();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&is(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Id(e,t){var r=Ie();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&is(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Od(e,t,r){return Qt&21?(Je(r,t)||(r=$c(),W.lanes|=r,Kt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=r)}function Fp(e,t){var r=O;O=r!==0&&4>r?r:4,e(!0);var n=jl.transition;jl.transition={};try{e(!1),t()}finally{O=r,jl.transition=n}}function Ad(){return Ie().memoizedState}function Up(e,t,r){var n=Nt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Dd(e))Fd(t,r);else if(r=xd(e,t,r,n),r!==null){var l=pe();We(r,e,n,l),Ud(r,t,n)}}function $p(e,t,r){var n=Nt(e),l={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Dd(e))Fd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,o=i(s,r);if(l.hasEagerState=!0,l.eagerState=o,Je(o,s)){var c=t.interleaved;c===null?(l.next=l,ts(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}r=xd(e,t,l,n),r!==null&&(l=pe(),We(r,e,n,l),Ud(r,t,n))}}function Dd(e){var t=e.alternate;return e===W||t!==null&&t===W}function Fd(e,t){qr=Ca=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ud(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,$i(e,r)}}var za={readContext:Te,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Bp={readContext:Te,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:wo,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,aa(4194308,4,Ld.bind(null,t,e),r)},useLayoutEffect:function(e,t){return aa(4194308,4,e,t)},useInsertionEffect:function(e,t){return aa(4,2,e,t)},useMemo:function(e,t){var r=Ye();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ye();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Up.bind(null,W,e),[n.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:xo,useDebugValue:ds,useDeferredValue:function(e){return Ye().memoizedState=e},useTransition:function(){var e=xo(!1),t=e[0];return e=Fp.bind(null,e[1]),Ye().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=W,l=Ye();if(B){if(r===void 0)throw Error(N(407));r=r()}else{if(r=t(),re===null)throw Error(N(349));Qt&30||Nd(n,t,r)}l.memoizedState=r;var i={value:r,getSnapshot:t};return l.queue=i,wo(Cd.bind(null,n,i,e),[e]),n.flags|=2048,wn(9,Sd.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Ye(),t=re.identifierPrefix;if(B){var r=rt,n=tt;r=(n&~(1<<32-Ve(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=yn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Dp++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vp={readContext:Te,useCallback:Td,useContext:Te,useEffect:cs,useImperativeHandle:Md,useInsertionEffect:Rd,useLayoutEffect:_d,useMemo:Id,useReducer:kl,useRef:Pd,useState:function(){return kl(xn)},useDebugValue:ds,useDeferredValue:function(e){var t=Ie();return Od(t,X.memoizedState,e)},useTransition:function(){var e=kl(xn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:jd,useSyncExternalStore:kd,useId:Ad,unstable_isNewReconciler:!1},Wp={readContext:Te,useCallback:Td,useContext:Te,useEffect:cs,useImperativeHandle:Md,useInsertionEffect:Rd,useLayoutEffect:_d,useMemo:Id,useReducer:Nl,useRef:Pd,useState:function(){return Nl(xn)},useDebugValue:ds,useDeferredValue:function(e){var t=Ie();return X===null?t.memoizedState=e:Od(t,X.memoizedState,e)},useTransition:function(){var e=Nl(xn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:jd,useSyncExternalStore:kd,useId:Ad,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function oi(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:J({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Va={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=pe(),l=Nt(e),i=nt(n,l);i.payload=t,r!=null&&(i.callback=r),t=jt(e,i,l),t!==null&&(We(t,e,l,n),ra(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=pe(),l=Nt(e),i=nt(n,l);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=jt(e,i,l),t!==null&&(We(t,e,l,n),ra(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=pe(),n=Nt(e),l=nt(r,n);l.tag=2,t!=null&&(l.callback=t),t=jt(e,l,n),t!==null&&(We(t,e,n,r),ra(t,e,n))}};function bo(e,t,r,n,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!mn(r,n)||!mn(l,i):!0}function $d(e,t,r){var n=!1,l=Et,i=t.contextType;return typeof i=="object"&&i!==null?i=Te(i):(l=we(t)?Ht:ue.current,n=t.contextTypes,i=(n=n!=null)?jr(e,l):Et),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Va,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function jo(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Va.enqueueReplaceState(t,t.state,null)}function ci(e,t,r,n){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},rs(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Te(i):(i=we(t)?Ht:ue.current,l.context=jr(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(oi(e,t,i,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Va.enqueueReplaceState(l,l.state,null),Na(e,r,l,n),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,t){try{var r="",n=t;do r+=ym(n),n=n.return;while(n);var l=r}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Sl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function di(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Jp=typeof WeakMap=="function"?WeakMap:Map;function Bd(e,t,r){r=nt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Pa||(Pa=!0,wi=n),di(e,t)},r}function Vd(e,t,r){r=nt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=t.value;r.payload=function(){return n(l)},r.callback=function(){di(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){di(e,t),typeof n!="function"&&(kt===null?kt=new Set([this]):kt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function ko(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Jp;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(r)||(l.add(r),e=lf.bind(null,e,t,r),t.then(e,e))}function No(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function So(e,t,r,n,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=nt(-1,1),t.tag=2,jt(r,t,1))),r.lanes|=1),e)}var Hp=ot.ReactCurrentOwner,ye=!1;function me(e,t,r,n){t.child=e===null?yd(t,null,r,n):Nr(t,e.child,r,n)}function Co(e,t,r,n,l){r=r.render;var i=t.ref;return yr(t,l),n=ss(e,t,r,n,i,l),r=os(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,st(e,t,l)):(B&&r&&Ki(t),t.flags|=1,me(e,t,n,l),t.child)}function zo(e,t,r,n,l){if(e===null){var i=r.type;return typeof i=="function"&&!ys(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Wd(e,t,i,n,l)):(e=oa(r.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:mn,r(s,n)&&e.ref===t.ref)return st(e,t,l)}return t.flags|=1,e=St(i,n),e.ref=t.ref,e.return=t,t.child=e}function Wd(e,t,r,n,l){if(e!==null){var i=e.memoizedProps;if(mn(i,n)&&e.ref===t.ref)if(ye=!1,t.pendingProps=n=i,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,st(e,t,l)}return ui(e,t,r,n,l)}function Jd(e,t,r){var n=t.pendingProps,l=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(pr,ke),ke|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(pr,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,D(pr,ke),ke|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,D(pr,ke),ke|=n;return me(e,t,l,r),t.child}function Hd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ui(e,t,r,n,l){var i=we(r)?Ht:ue.current;return i=jr(t,i),yr(t,l),r=ss(e,t,r,n,i,l),n=os(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,st(e,t,l)):(B&&n&&Ki(t),t.flags|=1,me(e,t,r,l),t.child)}function Eo(e,t,r,n,l){if(we(r)){var i=!0;xa(t)}else i=!1;if(yr(t,l),t.stateNode===null)la(e,t),$d(t,r,n),ci(t,r,n,l),n=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var c=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=Te(d):(d=we(r)?Ht:ue.current,d=jr(t,d));var m=r.getDerivedStateFromProps,p=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==n||c!==d)&&jo(t,s,n,d),mt=!1;var g=t.memoizedState;s.state=g,Na(t,n,s,l),c=t.memoizedState,o!==n||g!==c||xe.current||mt?(typeof m=="function"&&(oi(t,r,m,n),c=t.memoizedState),(o=mt||bo(t,r,o,n,g,c,d))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),s.props=n,s.state=c,s.context=d,n=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,wd(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:Fe(t.type,o),s.props=d,p=t.pendingProps,g=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=Te(c):(c=we(r)?Ht:ue.current,c=jr(t,c));var b=r.getDerivedStateFromProps;(m=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==p||g!==c)&&jo(t,s,n,c),mt=!1,g=t.memoizedState,s.state=g,Na(t,n,s,l);var x=t.memoizedState;o!==p||g!==x||xe.current||mt?(typeof b=="function"&&(oi(t,r,b,n),x=t.memoizedState),(d=mt||bo(t,r,d,n,g,x,c)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,x,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,x,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),s.props=n,s.state=x,s.context=c,n=d):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return mi(e,t,r,n,i,l)}function mi(e,t,r,n,l,i){Hd(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return l&&po(t,r,!1),st(e,t,i);n=t.stateNode,Hp.current=t;var o=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=Nr(t,e.child,null,i),t.child=Nr(t,null,o,i)):me(e,t,o,i),t.memoizedState=n.state,l&&po(t,r,!0),t.child}function Yd(e){var t=e.stateNode;t.pendingContext?mo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mo(e,t.context,!1),ns(e,t.containerInfo)}function Po(e,t,r,n,l){return kr(),Xi(l),t.flags|=256,me(e,t,r,n),t.child}var pi={dehydrated:null,treeContext:null,retryLane:0};function fi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qd(e,t,r){var n=t.pendingProps,l=V.current,i=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(V,l&1),e===null)return ii(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Ha(s,n,0,null),e=Jt(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=fi(r),t.memoizedState=pi,e):us(t,s));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return Yp(e,t,s,n,o,l,r);if(i){i=n.fallback,s=t.mode,l=e.child,o=l.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&t.child!==l?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=St(l,c),n.subtreeFlags=l.subtreeFlags&14680064),o!==null?i=St(o,i):(i=Jt(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?fi(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=pi,n}return i=e.child,e=i.sibling,n=St(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function us(e,t){return t=Ha({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yn(e,t,r,n){return n!==null&&Xi(n),Nr(t,e.child,null,r),e=us(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yp(e,t,r,n,l,i,s){if(r)return t.flags&256?(t.flags&=-257,n=Sl(Error(N(422))),Yn(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,l=t.mode,n=Ha({mode:"visible",children:n.children},l,0,null),i=Jt(i,l,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&Nr(t,e.child,null,s),t.child.memoizedState=fi(s),t.memoizedState=pi,i);if(!(t.mode&1))return Yn(e,t,s,null);if(l.data==="$!"){if(n=l.nextSibling&&l.nextSibling.dataset,n)var o=n.dgst;return n=o,i=Error(N(419)),n=Sl(i,n,void 0),Yn(e,t,s,n)}if(o=(s&e.childLanes)!==0,ye||o){if(n=re,n!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(n.suspendedLanes|s)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,it(e,l),We(n,e,l,-1))}return vs(),n=Sl(Error(N(421))),Yn(e,t,s,n)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=sf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ne=bt(l.nextSibling),Se=t,B=!0,$e=null,e!==null&&(Re[_e++]=tt,Re[_e++]=rt,Re[_e++]=Yt,tt=e.id,rt=e.overflow,Yt=t),t=us(t,n.children),t.flags|=4096,t)}function Ro(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),si(e.return,t,r)}function Cl(e,t,r,n,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=l)}function Kd(e,t,r){var n=t.pendingProps,l=n.revealOrder,i=n.tail;if(me(e,t,n.children,r),n=V.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ro(e,r,t);else if(e.tag===19)Ro(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(D(V,n),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&Sa(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),Cl(t,!1,l,r,i);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Sa(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}Cl(t,!0,r,null,i);break;case"together":Cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function la(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Kt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,r=St(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=St(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Qp(e,t,r){switch(t.tag){case 3:Yd(t),kr();break;case 5:bd(t);break;case 1:we(t.type)&&xa(t);break;case 4:ns(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,l=t.memoizedProps.value;D(ja,n._currentValue),n._currentValue=l;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(D(V,V.current&1),t.flags|=128,null):r&t.child.childLanes?Qd(e,t,r):(D(V,V.current&1),e=st(e,t,r),e!==null?e.sibling:null);D(V,V.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Kd(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(V,V.current),n)break;return null;case 22:case 23:return t.lanes=0,Jd(e,t,r)}return st(e,t,r)}var Gd,hi,Xd,qd;Gd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};hi=function(){};Xd=function(e,t,r,n){var l=e.memoizedProps;if(l!==n){e=t.stateNode,Vt(Ge.current);var i=null;switch(r){case"input":l=Al(e,l),n=Al(e,n),i=[];break;case"select":l=J({},l,{value:void 0}),n=J({},n,{value:void 0}),i=[];break;case"textarea":l=Ul(e,l),n=Ul(e,n),i=[];break;default:typeof l.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=va)}Bl(r,n);var s;r=null;for(d in l)if(!n.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var o=l[d];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(an.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in n){var c=n[d];if(o=l!=null?l[d]:void 0,n.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(s in o)!o.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&o[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(i||(i=[]),i.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(an.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&U("scroll",e),i||o===c||(i=[])):(i=i||[]).push(d,c))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};qd=function(e,t,r,n){r!==n&&(t.flags|=4)};function $r(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags&14680064,n|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Kp(e,t,r){var n=t.pendingProps;switch(Gi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return we(t.type)&&ya(),oe(t),null;case 3:return n=t.stateNode,Sr(),$(xe),$(ue),ls(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Jn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(ki($e),$e=null))),hi(e,t),oe(t),null;case 5:as(t);var l=Vt(vn.current);if(r=t.type,e!==null&&t.stateNode!=null)Xd(e,t,r,n,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(N(166));return oe(t),null}if(e=Vt(Ge.current),Jn(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[Qe]=t,n[hn]=i,e=(t.mode&1)!==0,r){case"dialog":U("cancel",n),U("close",n);break;case"iframe":case"object":case"embed":U("load",n);break;case"video":case"audio":for(l=0;l<Hr.length;l++)U(Hr[l],n);break;case"source":U("error",n);break;case"img":case"image":case"link":U("error",n),U("load",n);break;case"details":U("toggle",n);break;case"input":Ds(n,i),U("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},U("invalid",n);break;case"textarea":Us(n,i),U("invalid",n)}Bl(r,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var o=i[s];s==="children"?typeof o=="string"?n.textContent!==o&&(i.suppressHydrationWarning!==!0&&Wn(n.textContent,o,e),l=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Wn(n.textContent,o,e),l=["children",""+o]):an.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&U("scroll",n)}switch(r){case"input":On(n),Fs(n,i,!0);break;case"textarea":On(n),$s(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=va)}n=l,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Qe]=t,e[hn]=n,Gd(e,t,!1,!1),t.stateNode=e;e:{switch(s=Vl(r,n),r){case"dialog":U("cancel",e),U("close",e),l=n;break;case"iframe":case"object":case"embed":U("load",e),l=n;break;case"video":case"audio":for(l=0;l<Hr.length;l++)U(Hr[l],e);l=n;break;case"source":U("error",e),l=n;break;case"img":case"image":case"link":U("error",e),U("load",e),l=n;break;case"details":U("toggle",e),l=n;break;case"input":Ds(e,n),l=Al(e,n),U("invalid",e);break;case"option":l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=J({},n,{value:void 0}),U("invalid",e);break;case"textarea":Us(e,n),l=Ul(e,n),U("invalid",e);break;default:l=n}Bl(r,l),o=l;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?Pc(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&zc(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&ln(e,c):typeof c=="number"&&ln(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(an.hasOwnProperty(i)?c!=null&&i==="onScroll"&&U("scroll",e):c!=null&&Ii(e,i,c,s))}switch(r){case"input":On(e),Fs(e,n,!1);break;case"textarea":On(e),$s(e);break;case"option":n.value!=null&&e.setAttribute("value",""+zt(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?fr(e,!!n.multiple,i,!1):n.defaultValue!=null&&fr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=va)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)qd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(N(166));if(r=Vt(vn.current),Vt(Ge.current),Jn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Qe]=t,(i=n.nodeValue!==r)&&(e=Se,e!==null))switch(e.tag){case 3:Wn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wn(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Qe]=t,t.stateNode=n}return oe(t),null;case 13:if($(V),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Ne!==null&&t.mode&1&&!(t.flags&128))gd(),kr(),t.flags|=98560,i=!1;else if(i=Jn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Qe]=t}else kr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else $e!==null&&(ki($e),$e=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?q===0&&(q=3):vs())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return Sr(),hi(e,t),e===null&&pn(t.stateNode.containerInfo),oe(t),null;case 10:return es(t.type._context),oe(t),null;case 17:return we(t.type)&&ya(),oe(t),null;case 19:if($(V),i=t.memoizedState,i===null)return oe(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)$r(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Sa(e),s!==null){for(t.flags|=128,$r(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return D(V,V.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>zr&&(t.flags|=128,n=!0,$r(i,!1),t.lanes=4194304)}else{if(!n)if(e=Sa(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),$r(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!B)return oe(t),null}else 2*Q()-i.renderingStartTime>zr&&r!==1073741824&&(t.flags|=128,n=!0,$r(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,r=V.current,D(V,n?r&1|2:r&1),t):(oe(t),null);case 22:case 23:return gs(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?ke&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Gp(e,t){switch(Gi(t),t.tag){case 1:return we(t.type)&&ya(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),$(xe),$(ue),ls(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return as(t),null;case 13:if($(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(V),null;case 4:return Sr(),null;case 10:return es(t.type._context),null;case 22:case 23:return gs(),null;case 24:return null;default:return null}}var Qn=!1,de=!1,Xp=typeof WeakSet=="function"?WeakSet:Set,E=null;function mr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){H(e,t,n)}else r.current=null}function gi(e,t,r){try{r()}catch(n){H(e,t,n)}}var _o=!1;function qp(e,t){if(Zl=fa,e=nd(),Qi(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,o=-1,c=-1,d=0,m=0,p=e,g=null;t:for(;;){for(var b;p!==r||l!==0&&p.nodeType!==3||(o=s+l),p!==i||n!==0&&p.nodeType!==3||(c=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(b=p.firstChild)!==null;)g=p,p=b;for(;;){if(p===e)break t;if(g===r&&++d===l&&(o=s),g===i&&++m===n&&(c=s),(b=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=b}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ei={focusedElem:e,selectionRange:r},fa=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,j=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Fe(t.type,v),j);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(y){H(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return x=_o,_o=!1,x}function Zr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&gi(t,r,i)}l=l.next}while(l!==n)}}function Wa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function vi(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Zd(e){var t=e.alternate;t!==null&&(e.alternate=null,Zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[hn],delete t[ni],delete t[Tp],delete t[Ip])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function eu(e){return e.tag===5||e.tag===3||e.tag===4}function Lo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||eu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yi(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=va));else if(n!==4&&(e=e.child,e!==null))for(yi(e,t,r),e=e.sibling;e!==null;)yi(e,t,r),e=e.sibling}function xi(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(xi(e,t,r),e=e.sibling;e!==null;)xi(e,t,r),e=e.sibling}var ae=null,Ue=!1;function dt(e,t,r){for(r=r.child;r!==null;)tu(e,t,r),r=r.sibling}function tu(e,t,r){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Oa,r)}catch{}switch(r.tag){case 5:de||mr(r,t);case 6:var n=ae,l=Ue;ae=null,dt(e,t,r),ae=n,Ue=l,ae!==null&&(Ue?(e=ae,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ae.removeChild(r.stateNode));break;case 18:ae!==null&&(Ue?(e=ae,r=r.stateNode,e.nodeType===8?xl(e.parentNode,r):e.nodeType===1&&xl(e,r),dn(e)):xl(ae,r.stateNode));break;case 4:n=ae,l=Ue,ae=r.stateNode.containerInfo,Ue=!0,dt(e,t,r),ae=n,Ue=l;break;case 0:case 11:case 14:case 15:if(!de&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){l=n=n.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&gi(r,t,s),l=l.next}while(l!==n)}dt(e,t,r);break;case 1:if(!de&&(mr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){H(r,t,o)}dt(e,t,r);break;case 21:dt(e,t,r);break;case 22:r.mode&1?(de=(n=de)||r.memoizedState!==null,dt(e,t,r),de=n):dt(e,t,r);break;default:dt(e,t,r)}}function Mo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Xp),t.forEach(function(n){var l=of.bind(null,e,n);r.has(n)||(r.add(n),n.then(l,l))})}}function Ae(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var l=r[n];try{var i=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:ae=o.stateNode,Ue=!1;break e;case 3:ae=o.stateNode.containerInfo,Ue=!0;break e;case 4:ae=o.stateNode.containerInfo,Ue=!0;break e}o=o.return}if(ae===null)throw Error(N(160));tu(i,s,l),ae=null,Ue=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(d){H(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ru(t,e),t=t.sibling}function ru(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),He(e),n&4){try{Zr(3,e,e.return),Wa(3,e)}catch(v){H(e,e.return,v)}try{Zr(5,e,e.return)}catch(v){H(e,e.return,v)}}break;case 1:Ae(t,e),He(e),n&512&&r!==null&&mr(r,r.return);break;case 5:if(Ae(t,e),He(e),n&512&&r!==null&&mr(r,r.return),e.flags&32){var l=e.stateNode;try{ln(l,"")}catch(v){H(e,e.return,v)}}if(n&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&Nc(l,i),Vl(o,s);var d=Vl(o,i);for(s=0;s<c.length;s+=2){var m=c[s],p=c[s+1];m==="style"?Pc(l,p):m==="dangerouslySetInnerHTML"?zc(l,p):m==="children"?ln(l,p):Ii(l,m,p,d)}switch(o){case"input":Dl(l,i);break;case"textarea":Sc(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?fr(l,!!i.multiple,b,!1):g!==!!i.multiple&&(i.defaultValue!=null?fr(l,!!i.multiple,i.defaultValue,!0):fr(l,!!i.multiple,i.multiple?[]:"",!1))}l[hn]=i}catch(v){H(e,e.return,v)}}break;case 6:if(Ae(t,e),He(e),n&4){if(e.stateNode===null)throw Error(N(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(v){H(e,e.return,v)}}break;case 3:if(Ae(t,e),He(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{dn(t.containerInfo)}catch(v){H(e,e.return,v)}break;case 4:Ae(t,e),He(e);break;case 13:Ae(t,e),He(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(fs=Q())),n&4&&Mo(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(de=(d=de)||m,Ae(t,e),de=d):Ae(t,e),He(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(E=e,m=e.child;m!==null;){for(p=E=m;E!==null;){switch(g=E,b=g.child,g.tag){case 0:case 11:case 14:case 15:Zr(4,g,g.return);break;case 1:mr(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){H(n,r,v)}}break;case 5:mr(g,g.return);break;case 22:if(g.memoizedState!==null){Io(p);continue}}b!==null?(b.return=g,E=b):Io(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Ec("display",s))}catch(v){H(e,e.return,v)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(v){H(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ae(t,e),He(e),n&4&&Mo(e);break;case 21:break;default:Ae(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(eu(r)){var n=r;break e}r=r.return}throw Error(N(160))}switch(n.tag){case 5:var l=n.stateNode;n.flags&32&&(ln(l,""),n.flags&=-33);var i=Lo(e);xi(e,i,l);break;case 3:case 4:var s=n.stateNode.containerInfo,o=Lo(e);yi(e,o,s);break;default:throw Error(N(161))}}catch(c){H(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zp(e,t,r){E=e,nu(e)}function nu(e,t,r){for(var n=(e.mode&1)!==0;E!==null;){var l=E,i=l.child;if(l.tag===22&&n){var s=l.memoizedState!==null||Qn;if(!s){var o=l.alternate,c=o!==null&&o.memoizedState!==null||de;o=Qn;var d=de;if(Qn=s,(de=c)&&!d)for(E=l;E!==null;)s=E,c=s.child,s.tag===22&&s.memoizedState!==null?Oo(l):c!==null?(c.return=s,E=c):Oo(l);for(;i!==null;)E=i,nu(i),i=i.sibling;E=l,Qn=o,de=d}To(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,E=i):To(e)}}function To(e){for(;E!==null;){var t=E;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Wa(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!de)if(r===null)n.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Fe(t.type,r.memoizedProps);n.componentDidUpdate(l,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&yo(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}yo(t,s,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&dn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}de||t.flags&512&&vi(t)}catch(g){H(t,t.return,g)}}if(t===e){E=null;break}if(r=t.sibling,r!==null){r.return=t.return,E=r;break}E=t.return}}function Io(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var r=t.sibling;if(r!==null){r.return=t.return,E=r;break}E=t.return}}function Oo(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Wa(4,t)}catch(c){H(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var l=t.return;try{n.componentDidMount()}catch(c){H(t,l,c)}}var i=t.return;try{vi(t)}catch(c){H(t,i,c)}break;case 5:var s=t.return;try{vi(t)}catch(c){H(t,s,c)}}}catch(c){H(t,t.return,c)}if(t===e){E=null;break}var o=t.sibling;if(o!==null){o.return=t.return,E=o;break}E=t.return}}var ef=Math.ceil,Ea=ot.ReactCurrentDispatcher,ms=ot.ReactCurrentOwner,Me=ot.ReactCurrentBatchConfig,I=0,re=null,G=null,le=0,ke=0,pr=Rt(0),q=0,bn=null,Kt=0,Ja=0,ps=0,en=null,ve=null,fs=0,zr=1/0,qe=null,Pa=!1,wi=null,kt=null,Kn=!1,gt=null,Ra=0,tn=0,bi=null,ia=-1,sa=0;function pe(){return I&6?Q():ia!==-1?ia:ia=Q()}function Nt(e){return e.mode&1?I&2&&le!==0?le&-le:Ap.transition!==null?(sa===0&&(sa=$c()),sa):(e=O,e!==0||(e=window.event,e=e===void 0?16:Qc(e.type)),e):1}function We(e,t,r,n){if(50<tn)throw tn=0,bi=null,Error(N(185));Cn(e,r,n),(!(I&2)||e!==re)&&(e===re&&(!(I&2)&&(Ja|=r),q===4&&ft(e,le)),be(e,n),r===1&&I===0&&!(t.mode&1)&&(zr=Q()+500,$a&&_t()))}function be(e,t){var r=e.callbackNode;Am(e,t);var n=pa(e,e===re?le:0);if(n===0)r!==null&&Ws(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ws(r),t===1)e.tag===0?Op(Ao.bind(null,e)):pd(Ao.bind(null,e)),Lp(function(){!(I&6)&&_t()}),r=null;else{switch(Bc(n)){case 1:r=Ui;break;case 4:r=Fc;break;case 16:r=ma;break;case 536870912:r=Uc;break;default:r=ma}r=uu(r,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function au(e,t){if(ia=-1,sa=0,I&6)throw Error(N(327));var r=e.callbackNode;if(xr()&&e.callbackNode!==r)return null;var n=pa(e,e===re?le:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=_a(e,n);else{t=n;var l=I;I|=2;var i=iu();(re!==e||le!==t)&&(qe=null,zr=Q()+500,Wt(e,t));do try{nf();break}catch(o){lu(e,o)}while(!0);Zi(),Ea.current=i,I=l,G!==null?t=0:(re=null,le=0,t=q)}if(t!==0){if(t===2&&(l=Ql(e),l!==0&&(n=l,t=ji(e,l))),t===1)throw r=bn,Wt(e,0),ft(e,n),be(e,Q()),r;if(t===6)ft(e,n);else{if(l=e.current.alternate,!(n&30)&&!tf(l)&&(t=_a(e,n),t===2&&(i=Ql(e),i!==0&&(n=i,t=ji(e,i))),t===1))throw r=bn,Wt(e,0),ft(e,n),be(e,Q()),r;switch(e.finishedWork=l,e.finishedLanes=n,t){case 0:case 1:throw Error(N(345));case 2:Ft(e,ve,qe);break;case 3:if(ft(e,n),(n&130023424)===n&&(t=fs+500-Q(),10<t)){if(pa(e,0)!==0)break;if(l=e.suspendedLanes,(l&n)!==n){pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ri(Ft.bind(null,e,ve,qe),t);break}Ft(e,ve,qe);break;case 4:if(ft(e,n),(n&4194240)===n)break;for(t=e.eventTimes,l=-1;0<n;){var s=31-Ve(n);i=1<<s,s=t[s],s>l&&(l=s),n&=~i}if(n=l,n=Q()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ef(n/1960))-n,10<n){e.timeoutHandle=ri(Ft.bind(null,e,ve,qe),n);break}Ft(e,ve,qe);break;case 5:Ft(e,ve,qe);break;default:throw Error(N(329))}}}return be(e,Q()),e.callbackNode===r?au.bind(null,e):null}function ji(e,t){var r=en;return e.current.memoizedState.isDehydrated&&(Wt(e,t).flags|=256),e=_a(e,t),e!==2&&(t=ve,ve=r,t!==null&&ki(t)),e}function ki(e){ve===null?ve=e:ve.push.apply(ve,e)}function tf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var l=r[n],i=l.getSnapshot;l=l.value;try{if(!Je(i(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~ps,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ve(t),n=1<<r;e[r]=-1,t&=~n}}function Ao(e){if(I&6)throw Error(N(327));xr();var t=pa(e,0);if(!(t&1))return be(e,Q()),null;var r=_a(e,t);if(e.tag!==0&&r===2){var n=Ql(e);n!==0&&(t=n,r=ji(e,n))}if(r===1)throw r=bn,Wt(e,0),ft(e,t),be(e,Q()),r;if(r===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,ve,qe),be(e,Q()),null}function hs(e,t){var r=I;I|=1;try{return e(t)}finally{I=r,I===0&&(zr=Q()+500,$a&&_t())}}function Gt(e){gt!==null&&gt.tag===0&&!(I&6)&&xr();var t=I;I|=1;var r=Me.transition,n=O;try{if(Me.transition=null,O=1,e)return e()}finally{O=n,Me.transition=r,I=t,!(I&6)&&_t()}}function gs(){ke=pr.current,$(pr)}function Wt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,_p(r)),G!==null)for(r=G.return;r!==null;){var n=r;switch(Gi(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ya();break;case 3:Sr(),$(xe),$(ue),ls();break;case 5:as(n);break;case 4:Sr();break;case 13:$(V);break;case 19:$(V);break;case 10:es(n.type._context);break;case 22:case 23:gs()}r=r.return}if(re=e,G=e=St(e.current,null),le=ke=t,q=0,bn=null,ps=Ja=Kt=0,ve=en=null,Bt!==null){for(t=0;t<Bt.length;t++)if(r=Bt[t],n=r.interleaved,n!==null){r.interleaved=null;var l=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=l,n.next=s}r.pending=n}Bt=null}return e}function lu(e,t){do{var r=G;try{if(Zi(),na.current=za,Ca){for(var n=W.memoizedState;n!==null;){var l=n.queue;l!==null&&(l.pending=null),n=n.next}Ca=!1}if(Qt=0,te=X=W=null,qr=!1,yn=0,ms.current=null,r===null||r.return===null){q=1,bn=t,G=null;break}e:{var i=e,s=r.return,o=r,c=t;if(t=le,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=o,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var b=No(s);if(b!==null){b.flags&=-257,So(b,s,o,i,t),b.mode&1&&ko(i,d,t),t=b,c=d;var x=t.updateQueue;if(x===null){var v=new Set;v.add(c),t.updateQueue=v}else x.add(c);break e}else{if(!(t&1)){ko(i,d,t),vs();break e}c=Error(N(426))}}else if(B&&o.mode&1){var j=No(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),So(j,s,o,i,t),Xi(Cr(c,o));break e}}i=c=Cr(c,o),q!==4&&(q=2),en===null?en=[i]:en.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Bd(i,c,t);vo(i,f);break e;case 1:o=c;var u=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(kt===null||!kt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Vd(i,o,t);vo(i,y);break e}}i=i.return}while(i!==null)}ou(r)}catch(k){t=k,G===r&&r!==null&&(G=r=r.return);continue}break}while(!0)}function iu(){var e=Ea.current;return Ea.current=za,e===null?za:e}function vs(){(q===0||q===3||q===2)&&(q=4),re===null||!(Kt&268435455)&&!(Ja&268435455)||ft(re,le)}function _a(e,t){var r=I;I|=2;var n=iu();(re!==e||le!==t)&&(qe=null,Wt(e,t));do try{rf();break}catch(l){lu(e,l)}while(!0);if(Zi(),I=r,Ea.current=n,G!==null)throw Error(N(261));return re=null,le=0,q}function rf(){for(;G!==null;)su(G)}function nf(){for(;G!==null&&!Em();)su(G)}function su(e){var t=du(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?ou(e):G=t,ms.current=null}function ou(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Gp(r,t),r!==null){r.flags&=32767,G=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,G=null;return}}else if(r=Kp(r,t,ke),r!==null){G=r;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);q===0&&(q=5)}function Ft(e,t,r){var n=O,l=Me.transition;try{Me.transition=null,O=1,af(e,t,r,n)}finally{Me.transition=l,O=n}return null}function af(e,t,r,n){do xr();while(gt!==null);if(I&6)throw Error(N(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Dm(e,i),e===re&&(G=re=null,le=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Kn||(Kn=!0,uu(ma,function(){return xr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Me.transition,Me.transition=null;var s=O;O=1;var o=I;I|=4,ms.current=null,qp(e,r),ru(r,e),Np(ei),fa=!!Zl,ei=Zl=null,e.current=r,Zp(r),Pm(),I=o,O=s,Me.transition=i}else e.current=r;if(Kn&&(Kn=!1,gt=e,Ra=l),i=e.pendingLanes,i===0&&(kt=null),Lm(r.stateNode),be(e,Q()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],n(l.value,{componentStack:l.stack,digest:l.digest});if(Pa)throw Pa=!1,e=wi,wi=null,e;return Ra&1&&e.tag!==0&&xr(),i=e.pendingLanes,i&1?e===bi?tn++:(tn=0,bi=e):tn=0,_t(),null}function xr(){if(gt!==null){var e=Bc(Ra),t=Me.transition,r=O;try{if(Me.transition=null,O=16>e?16:e,gt===null)var n=!1;else{if(e=gt,gt=null,Ra=0,I&6)throw Error(N(331));var l=I;for(I|=4,E=e.current;E!==null;){var i=E,s=i.child;if(E.flags&16){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(E=d;E!==null;){var m=E;switch(m.tag){case 0:case 11:case 15:Zr(8,m,i)}var p=m.child;if(p!==null)p.return=m,E=p;else for(;E!==null;){m=E;var g=m.sibling,b=m.return;if(Zd(m),m===d){E=null;break}if(g!==null){g.return=b,E=g;break}E=b}}}var x=i.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}E=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,E=s;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Zr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,E=f;break e}E=i.return}}var u=e.current;for(E=u;E!==null;){s=E;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,E=h;else e:for(s=u;E!==null;){if(o=E,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Wa(9,o)}}catch(k){H(o,o.return,k)}if(o===s){E=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,E=y;break e}E=o.return}}if(I=l,_t(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Oa,e)}catch{}n=!0}return n}finally{O=r,Me.transition=t}}return!1}function Do(e,t,r){t=Cr(r,t),t=Bd(e,t,1),e=jt(e,t,1),t=pe(),e!==null&&(Cn(e,1,t),be(e,t))}function H(e,t,r){if(e.tag===3)Do(e,e,r);else for(;t!==null;){if(t.tag===3){Do(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(kt===null||!kt.has(n))){e=Cr(r,e),e=Vd(t,e,1),t=jt(t,e,1),e=pe(),t!==null&&(Cn(t,1,e),be(t,e));break}}t=t.return}}function lf(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&r,re===e&&(le&r)===r&&(q===4||q===3&&(le&130023424)===le&&500>Q()-fs?Wt(e,0):ps|=r),be(e,t)}function cu(e,t){t===0&&(e.mode&1?(t=Fn,Fn<<=1,!(Fn&130023424)&&(Fn=4194304)):t=1);var r=pe();e=it(e,t),e!==null&&(Cn(e,t,r),be(e,r))}function sf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),cu(e,r)}function of(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(N(314))}n!==null&&n.delete(t),cu(e,r)}var du;du=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ye=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ye=!1,Qp(e,t,r);ye=!!(e.flags&131072)}else ye=!1,B&&t.flags&1048576&&fd(t,ba,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;la(e,t),e=t.pendingProps;var l=jr(t,ue.current);yr(t,r),l=ss(null,t,n,e,l,r);var i=os();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(n)?(i=!0,xa(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,rs(t),l.updater=Va,t.stateNode=l,l._reactInternals=t,ci(t,n,e,r),t=mi(null,t,n,!0,i,r)):(t.tag=0,B&&i&&Ki(t),me(null,t,l,r),t=t.child),t;case 16:n=t.elementType;e:{switch(la(e,t),e=t.pendingProps,l=n._init,n=l(n._payload),t.type=n,l=t.tag=df(n),e=Fe(n,e),l){case 0:t=ui(null,t,n,e,r);break e;case 1:t=Eo(null,t,n,e,r);break e;case 11:t=Co(null,t,n,e,r);break e;case 14:t=zo(null,t,n,Fe(n.type,e),r);break e}throw Error(N(306,n,""))}return t;case 0:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Fe(n,l),ui(e,t,n,l,r);case 1:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Fe(n,l),Eo(e,t,n,l,r);case 3:e:{if(Yd(t),e===null)throw Error(N(387));n=t.pendingProps,i=t.memoizedState,l=i.element,wd(e,t),Na(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Cr(Error(N(423)),t),t=Po(e,t,n,r,l);break e}else if(n!==l){l=Cr(Error(N(424)),t),t=Po(e,t,n,r,l);break e}else for(Ne=bt(t.stateNode.containerInfo.firstChild),Se=t,B=!0,$e=null,r=yd(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(kr(),n===l){t=st(e,t,r);break e}me(e,t,n,r)}t=t.child}return t;case 5:return bd(t),e===null&&ii(t),n=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,ti(n,l)?s=null:i!==null&&ti(n,i)&&(t.flags|=32),Hd(e,t),me(e,t,s,r),t.child;case 6:return e===null&&ii(t),null;case 13:return Qd(e,t,r);case 4:return ns(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Nr(t,null,n,r):me(e,t,n,r),t.child;case 11:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Fe(n,l),Co(e,t,n,l,r);case 7:return me(e,t,t.pendingProps,r),t.child;case 8:return me(e,t,t.pendingProps.children,r),t.child;case 12:return me(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,l=t.pendingProps,i=t.memoizedProps,s=l.value,D(ja,n._currentValue),n._currentValue=s,i!==null)if(Je(i.value,s)){if(i.children===l.children&&!xe.current){t=st(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){s=i.child;for(var c=o.firstContext;c!==null;){if(c.context===n){if(i.tag===1){c=nt(-1,r&-r),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),si(i.return,r,t),o.lanes|=r;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(N(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),si(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}me(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,n=t.pendingProps.children,yr(t,r),l=Te(l),n=n(l),t.flags|=1,me(e,t,n,r),t.child;case 14:return n=t.type,l=Fe(n,t.pendingProps),l=Fe(n.type,l),zo(e,t,n,l,r);case 15:return Wd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Fe(n,l),la(e,t),t.tag=1,we(n)?(e=!0,xa(t)):e=!1,yr(t,r),$d(t,n,l),ci(t,n,l,r),mi(null,t,n,!0,e,r);case 19:return Kd(e,t,r);case 22:return Jd(e,t,r)}throw Error(N(156,t.tag))};function uu(e,t){return Dc(e,t)}function cf(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,r,n){return new cf(e,t,r,n)}function ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function df(e){if(typeof e=="function")return ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ai)return 11;if(e===Di)return 14}return 2}function St(e,t){var r=e.alternate;return r===null?(r=Le(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function oa(e,t,r,n,l,i){var s=2;if(n=e,typeof e=="function")ys(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case nr:return Jt(r.children,l,i,t);case Oi:s=8,l|=8;break;case Ml:return e=Le(12,r,t,l|2),e.elementType=Ml,e.lanes=i,e;case Tl:return e=Le(13,r,t,l),e.elementType=Tl,e.lanes=i,e;case Il:return e=Le(19,r,t,l),e.elementType=Il,e.lanes=i,e;case bc:return Ha(r,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xc:s=10;break e;case wc:s=9;break e;case Ai:s=11;break e;case Di:s=14;break e;case ut:s=16,n=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Le(s,r,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Jt(e,t,r,n){return e=Le(7,e,n,t),e.lanes=r,e}function Ha(e,t,r,n){return e=Le(22,e,n,t),e.elementType=bc,e.lanes=r,e.stateNode={isHidden:!1},e}function zl(e,t,r){return e=Le(6,e,null,t),e.lanes=r,e}function El(e,t,r){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function uf(e,t,r,n,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=n,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function xs(e,t,r,n,l,i,s,o,c){return e=new uf(e,t,r,o,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Le(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},rs(i),e}function mf(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function mu(e){if(!e)return Et;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var r=e.type;if(we(r))return md(e,r,t)}return t}function pu(e,t,r,n,l,i,s,o,c){return e=xs(r,n,!0,e,l,i,s,o,c),e.context=mu(null),r=e.current,n=pe(),l=Nt(r),i=nt(n,l),i.callback=t??null,jt(r,i,l),e.current.lanes=l,Cn(e,l,n),be(e,n),e}function Ya(e,t,r,n){var l=t.current,i=pe(),s=Nt(l);return r=mu(r),t.context===null?t.context=r:t.pendingContext=r,t=nt(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=jt(l,t,s),e!==null&&(We(e,l,s,i),ra(e,l,s)),s}function La(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ws(e,t){Fo(e,t),(e=e.alternate)&&Fo(e,t)}function pf(){return null}var fu=typeof reportError=="function"?reportError:function(e){console.error(e)};function bs(e){this._internalRoot=e}Qa.prototype.render=bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Ya(e,t,null,null)};Qa.prototype.unmount=bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){Ya(null,e,null,null)}),t[lt]=null}};function Qa(e){this._internalRoot=e}Qa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pt.length&&t!==0&&t<pt[r].priority;r++);pt.splice(r,0,e),r===0&&Yc(e)}};function js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uo(){}function ff(e,t,r,n,l){if(l){if(typeof n=="function"){var i=n;n=function(){var d=La(s);i.call(d)}}var s=pu(t,n,e,0,null,!1,!1,"",Uo);return e._reactRootContainer=s,e[lt]=s.current,pn(e.nodeType===8?e.parentNode:e),Gt(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof n=="function"){var o=n;n=function(){var d=La(c);o.call(d)}}var c=xs(e,0,!1,null,null,!1,!1,"",Uo);return e._reactRootContainer=c,e[lt]=c.current,pn(e.nodeType===8?e.parentNode:e),Gt(function(){Ya(t,c,r,n)}),c}function Ga(e,t,r,n,l){var i=r._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var o=l;l=function(){var c=La(s);o.call(c)}}Ya(t,s,e,l)}else s=ff(r,t,e,l,n);return La(s)}Vc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Jr(t.pendingLanes);r!==0&&($i(t,r|1),be(t,Q()),!(I&6)&&(zr=Q()+500,_t()))}break;case 13:Gt(function(){var n=it(e,1);if(n!==null){var l=pe();We(n,e,1,l)}}),ws(e,1)}};Bi=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var r=pe();We(t,e,134217728,r)}ws(e,134217728)}};Wc=function(e){if(e.tag===13){var t=Nt(e),r=it(e,t);if(r!==null){var n=pe();We(r,e,t,n)}ws(e,t)}};Jc=function(){return O};Hc=function(e,t){var r=O;try{return O=e,t()}finally{O=r}};Jl=function(e,t,r){switch(t){case"input":if(Dl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var l=Ua(n);if(!l)throw Error(N(90));kc(n),Dl(n,l)}}}break;case"textarea":Sc(e,r);break;case"select":t=r.value,t!=null&&fr(e,!!r.multiple,t,!1)}};Lc=hs;Mc=Gt;var hf={usingClientEntryPoint:!1,Events:[En,sr,Ua,Rc,_c,hs]},Br={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gf={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Oc(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||pf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gn.isDisabled&&Gn.supportsFiber)try{Oa=Gn.inject(gf),Ke=Gn}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hf;ze.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!js(t))throw Error(N(200));return mf(e,t,null,r)};ze.createRoot=function(e,t){if(!js(e))throw Error(N(299));var r=!1,n="",l=fu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=xs(e,1,!1,null,null,r,!1,n,l),e[lt]=t.current,pn(e.nodeType===8?e.parentNode:e),new bs(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Oc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Gt(e)};ze.hydrate=function(e,t,r){if(!Ka(t))throw Error(N(200));return Ga(null,e,t,!0,r)};ze.hydrateRoot=function(e,t,r){if(!js(e))throw Error(N(405));var n=r!=null&&r.hydratedSources||null,l=!1,i="",s=fu;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=pu(t,null,e,1,r??null,l,!1,i,s),e[lt]=t.current,pn(e),n)for(e=0;e<n.length;e++)r=n[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Qa(t)};ze.render=function(e,t,r){if(!Ka(t))throw Error(N(200));return Ga(null,e,t,!1,r)};ze.unmountComponentAtNode=function(e){if(!Ka(e))throw Error(N(40));return e._reactRootContainer?(Gt(function(){Ga(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};ze.unstable_batchedUpdates=hs;ze.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ka(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Ga(e,t,r,!1,n)};ze.version="18.3.1-next-f1338f8080-20240426";function hu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hu)}catch(e){console.error(e)}}hu(),hc.exports=ze;var vf=hc.exports,$o=vf;_l.createRoot=$o.createRoot,_l.hydrateRoot=$o.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jn(){return jn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},jn.apply(null,arguments)}var vt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vt||(vt={}));const Bo="popstate";function yf(e){e===void 0&&(e={});function t(n,l){let{pathname:i,search:s,hash:o}=n.location;return Ni("",{pathname:i,search:s,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(n,l){return typeof l=="string"?l:Ma(l)}return wf(t,r,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ks(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xf(){return Math.random().toString(36).substr(2,8)}function Vo(e,t){return{usr:e.state,key:e.key,idx:t}}function Ni(e,t,r,n){return r===void 0&&(r=null),jn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Lr(t):t,{state:r,key:t&&t.key||n||xf()})}function Ma(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Lr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function wf(e,t,r,n){n===void 0&&(n={});let{window:l=document.defaultView,v5Compat:i=!1}=n,s=l.history,o=vt.Pop,c=null,d=m();d==null&&(d=0,s.replaceState(jn({},s.state,{idx:d}),""));function m(){return(s.state||{idx:null}).idx}function p(){o=vt.Pop;let j=m(),f=j==null?null:j-d;d=j,c&&c({action:o,location:v.location,delta:f})}function g(j,f){o=vt.Push;let u=Ni(v.location,j,f);d=m()+1;let h=Vo(u,d),y=v.createHref(u);try{s.pushState(h,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(y)}i&&c&&c({action:o,location:v.location,delta:1})}function b(j,f){o=vt.Replace;let u=Ni(v.location,j,f);d=m();let h=Vo(u,d),y=v.createHref(u);s.replaceState(h,"",y),i&&c&&c({action:o,location:v.location,delta:0})}function x(j){let f=l.location.origin!=="null"?l.location.origin:l.location.href,u=typeof j=="string"?j:Ma(j);return u=u.replace(/ $/,"%20"),K(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let v={get action(){return o},get location(){return e(l,s)},listen(j){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(Bo,p),c=j,()=>{l.removeEventListener(Bo,p),c=null}},createHref(j){return t(l,j)},createURL:x,encodeLocation(j){let f=x(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:b,go(j){return s.go(j)}};return v}var Wo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wo||(Wo={}));function bf(e,t,r){return r===void 0&&(r="/"),jf(e,t,r)}function jf(e,t,r,n){let l=typeof t=="string"?Lr(t):t,i=Ns(l.pathname||"/",r);if(i==null)return null;let s=gu(e);kf(s);let o=null,c=If(i);for(let d=0;o==null&&d<s.length;++d)o=Lf(s[d],c);return o}function gu(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let l=(i,s,o)=>{let c={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(K(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=Ct([n,c.relativePath]),m=r.concat(c);i.children&&i.children.length>0&&(K(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),gu(i.children,t,m,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:Rf(d,i.index),routesMeta:m})};return e.forEach((i,s)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))l(i,s);else for(let c of vu(i.path))l(i,s,c)}),t}function vu(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,l=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return l?[i,""]:[i];let s=vu(n.join("/")),o=[];return o.push(...s.map(c=>c===""?i:[i,c].join("/"))),l&&o.push(...s),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function kf(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:_f(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Nf=/^:[\w-]+$/,Sf=3,Cf=2,zf=1,Ef=10,Pf=-2,Jo=e=>e==="*";function Rf(e,t){let r=e.split("/"),n=r.length;return r.some(Jo)&&(n+=Pf),t&&(n+=Cf),r.filter(l=>!Jo(l)).reduce((l,i)=>l+(Nf.test(i)?Sf:i===""?zf:Ef),n)}function _f(e,t){return e.length===t.length&&e.slice(0,-1).every((n,l)=>n===t[l])?e[e.length-1]-t[t.length-1]:0}function Lf(e,t,r){let{routesMeta:n}=e,l={},i="/",s=[];for(let o=0;o<n.length;++o){let c=n[o],d=o===n.length-1,m=i==="/"?t:t.slice(i.length)||"/",p=Mf({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),g=c.route;if(!p)return null;Object.assign(l,p.params),s.push({params:l,pathname:Ct([i,p.pathname]),pathnameBase:Uf(Ct([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=Ct([i,p.pathnameBase]))}return s}function Mf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Tf(e.path,e.caseSensitive,e.end),l=t.match(r);if(!l)return null;let i=l[0],s=i.replace(/(.)\/+$/,"$1"),o=l.slice(1);return{params:n.reduce((d,m,p)=>{let{paramName:g,isOptional:b}=m;if(g==="*"){let v=o[p]||"";s=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const x=o[p];return b&&!x?d[g]=void 0:d[g]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:s,pattern:e}}function Tf(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),ks(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,c)=>(n.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),n]}function If(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ks(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ns(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Of=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Af=e=>Of.test(e);function Df(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:l=""}=typeof e=="string"?Lr(e):e,i;if(r)if(Af(r))i=r;else{if(r.includes("//")){let s=r;r=yu(r),ks(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?i=Ho(r.substring(1),"/"):i=Ho(r,t)}else i=t;return{pathname:i,search:$f(n),hash:Bf(l)}}function Ho(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function Pl(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ff(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Ss(e,t){let r=Ff(e);return t?r.map((n,l)=>l===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Cs(e,t,r,n){n===void 0&&(n=!1);let l;typeof e=="string"?l=Lr(e):(l=jn({},e),K(!l.pathname||!l.pathname.includes("?"),Pl("?","pathname","search",l)),K(!l.pathname||!l.pathname.includes("#"),Pl("#","pathname","hash",l)),K(!l.search||!l.search.includes("#"),Pl("#","search","hash",l)));let i=e===""||l.pathname==="",s=i?"/":l.pathname,o;if(s==null)o=r;else{let p=t.length-1;if(!n&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),p-=1;l.pathname=g.join("/")}o=p>=0?t[p]:"/"}let c=Df(l,o),d=s&&s!=="/"&&s.endsWith("/"),m=(i||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}const yu=e=>e.replace(/\/\/+/g,"/"),Ct=e=>yu(e.join("/")),Uf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$f=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Vf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const xu=["post","put","patch","delete"];new Set(xu);const Wf=["get",...xu];new Set(Wf);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kn(){return kn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},kn.apply(null,arguments)}const zs=w.createContext(null),Jf=w.createContext(null),Lt=w.createContext(null),Xa=w.createContext(null),Mt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),wu=w.createContext(null);function Hf(e,t){let{relative:r}=t===void 0?{}:t;Mr()||K(!1);let{basename:n,navigator:l}=w.useContext(Lt),{hash:i,pathname:s,search:o}=ju(e,{relative:r}),c=s;return n!=="/"&&(c=s==="/"?n:Ct([n,s])),l.createHref({pathname:c,search:o,hash:i})}function Mr(){return w.useContext(Xa)!=null}function Tr(){return Mr()||K(!1),w.useContext(Xa).location}function bu(e){w.useContext(Lt).static||w.useLayoutEffect(e)}function Zt(){let{isDataRoute:e}=w.useContext(Mt);return e?lh():Yf()}function Yf(){Mr()||K(!1);let e=w.useContext(zs),{basename:t,future:r,navigator:n}=w.useContext(Lt),{matches:l}=w.useContext(Mt),{pathname:i}=Tr(),s=JSON.stringify(Ss(l,r.v7_relativeSplatPath)),o=w.useRef(!1);return bu(()=>{o.current=!0}),w.useCallback(function(d,m){if(m===void 0&&(m={}),!o.current)return;if(typeof d=="number"){n.go(d);return}let p=Cs(d,JSON.parse(s),i,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Ct([t,p.pathname])),(m.replace?n.replace:n.push)(p,m.state,m)},[t,n,s,i,e])}function ju(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=w.useContext(Lt),{matches:l}=w.useContext(Mt),{pathname:i}=Tr(),s=JSON.stringify(Ss(l,n.v7_relativeSplatPath));return w.useMemo(()=>Cs(e,JSON.parse(s),i,r==="path"),[e,s,i,r])}function Qf(e,t){return Kf(e,t)}function Kf(e,t,r,n){Mr()||K(!1);let{navigator:l}=w.useContext(Lt),{matches:i}=w.useContext(Mt),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=Tr(),m;if(t){var p;let j=typeof t=="string"?Lr(t):t;c==="/"||(p=j.pathname)!=null&&p.startsWith(c)||K(!1),m=j}else m=d;let g=m.pathname||"/",b=g;if(c!=="/"){let j=c.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let x=bf(e,{pathname:b}),v=eh(x&&x.map(j=>Object.assign({},j,{params:Object.assign({},o,j.params),pathname:Ct([c,l.encodeLocation?l.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Ct([c,l.encodeLocation?l.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),i,r,n);return t&&v?w.createElement(Xa.Provider,{value:{location:kn({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:vt.Pop}},v):v}function Gf(){let e=ah(),t=Vf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),r?w.createElement("pre",{style:l},r):null,null)}const Xf=w.createElement(Gf,null);class qf extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?w.createElement(Mt.Provider,{value:this.props.routeContext},w.createElement(wu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zf(e){let{routeContext:t,match:r,children:n}=e,l=w.useContext(zs);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),w.createElement(Mt.Provider,{value:t},n)}function eh(e,t,r,n){var l;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var i;if(!r)return null;if(r.errors)e=r.matches;else if((i=n)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,o=(l=r)==null?void 0:l.errors;if(o!=null){let m=s.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);m>=0||K(!1),s=s.slice(0,Math.min(s.length,m+1))}let c=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let m=0;m<s.length;m++){let p=s[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:g,errors:b}=r,x=p.route.loader&&g[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||x){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((m,p,g)=>{let b,x=!1,v=null,j=null;r&&(b=o&&p.route.id?o[p.route.id]:void 0,v=p.route.errorElement||Xf,c&&(d<0&&g===0?(ih("route-fallback"),x=!0,j=null):d===g&&(x=!0,j=p.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,g+1)),u=()=>{let h;return b?h=v:x?h=j:p.route.Component?h=w.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=m,w.createElement(Zf,{match:p,routeContext:{outlet:m,matches:f,isDataRoute:r!=null},children:h})};return r&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?w.createElement(qf,{location:r.location,revalidation:r.revalidation,component:v,error:b,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var ku=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ku||{}),Nu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Nu||{});function th(e){let t=w.useContext(zs);return t||K(!1),t}function rh(e){let t=w.useContext(Jf);return t||K(!1),t}function nh(e){let t=w.useContext(Mt);return t||K(!1),t}function Su(e){let t=nh(),r=t.matches[t.matches.length-1];return r.route.id||K(!1),r.route.id}function ah(){var e;let t=w.useContext(wu),r=rh(),n=Su();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function lh(){let{router:e}=th(ku.UseNavigateStable),t=Su(Nu.UseNavigateStable),r=w.useRef(!1);return bu(()=>{r.current=!0}),w.useCallback(function(l,i){i===void 0&&(i={}),r.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,kn({fromRouteId:t},i)))},[e,t])}const Yo={};function ih(e,t,r){Yo[e]||(Yo[e]=!0)}function sh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function rn(e){let{to:t,replace:r,state:n,relative:l}=e;Mr()||K(!1);let{future:i,static:s}=w.useContext(Lt),{matches:o}=w.useContext(Mt),{pathname:c}=Tr(),d=Zt(),m=Cs(t,Ss(o,i.v7_relativeSplatPath),c,l==="path"),p=JSON.stringify(m);return w.useEffect(()=>d(JSON.parse(p),{replace:r,state:n,relative:l}),[d,p,l,r,n]),null}function De(e){K(!1)}function oh(e){let{basename:t="/",children:r=null,location:n,navigationType:l=vt.Pop,navigator:i,static:s=!1,future:o}=e;Mr()&&K(!1);let c=t.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:c,navigator:i,static:s,future:kn({v7_relativeSplatPath:!1},o)}),[c,o,i,s]);typeof n=="string"&&(n=Lr(n));let{pathname:m="/",search:p="",hash:g="",state:b=null,key:x="default"}=n,v=w.useMemo(()=>{let j=Ns(m,c);return j==null?null:{location:{pathname:j,search:p,hash:g,state:b,key:x},navigationType:l}},[c,m,p,g,b,x,l]);return v==null?null:w.createElement(Lt.Provider,{value:d},w.createElement(Xa.Provider,{children:r,value:v}))}function ch(e){let{children:t,location:r}=e;return Qf(Si(t),r)}new Promise(()=>{});function Si(e,t){t===void 0&&(t=[]);let r=[];return w.Children.forEach(e,(n,l)=>{if(!w.isValidElement(n))return;let i=[...t,l];if(n.type===w.Fragment){r.push.apply(r,Si(n.props.children,i));return}n.type!==De&&K(!1),!n.props.index||!n.props.children||K(!1);let s={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Si(n.props.children,i)),r.push(s)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ci(){return Ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ci.apply(null,arguments)}function dh(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function uh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mh(e,t){return e.button===0&&(!t||t==="_self")&&!uh(e)}const ph=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],fh="6";try{window.__reactRouterVersion=fh}catch{}const hh="startTransition",Qo=lm[hh];function gh(e){let{basename:t,children:r,future:n,window:l}=e,i=w.useRef();i.current==null&&(i.current=yf({window:l,v5Compat:!0}));let s=i.current,[o,c]=w.useState({action:s.action,location:s.location}),{v7_startTransition:d}=n||{},m=w.useCallback(p=>{d&&Qo?Qo(()=>c(p)):c(p)},[c,d]);return w.useLayoutEffect(()=>s.listen(m),[s,m]),w.useEffect(()=>sh(n),[n]),w.createElement(oh,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:s,future:n})}const vh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,et=w.forwardRef(function(t,r){let{onClick:n,relative:l,reloadDocument:i,replace:s,state:o,target:c,to:d,preventScrollReset:m,viewTransition:p}=t,g=dh(t,ph),{basename:b}=w.useContext(Lt),x,v=!1;if(typeof d=="string"&&yh.test(d)&&(x=d,vh))try{let h=new URL(window.location.href),y=d.startsWith("//")?new URL(h.protocol+d):new URL(d),k=Ns(y.pathname,b);y.origin===h.origin&&k!=null?d=k+y.search+y.hash:v=!0}catch{}let j=Hf(d,{relative:l}),f=xh(d,{replace:s,state:o,target:c,preventScrollReset:m,relative:l,viewTransition:p});function u(h){n&&n(h),h.defaultPrevented||f(h)}return w.createElement("a",Ci({},g,{href:x||j,onClick:v||i?n:u,ref:r,target:c}))});var Ko;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ko||(Ko={}));var Go;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Go||(Go={}));function xh(e,t){let{target:r,replace:n,state:l,preventScrollReset:i,relative:s,viewTransition:o}=t===void 0?{}:t,c=Zt(),d=Tr(),m=ju(e,{relative:s});return w.useCallback(p=>{if(mh(p,r)){p.preventDefault();let g=n!==void 0?n:Ma(d)===Ma(m);c(e,{replace:g,state:l,preventScrollReset:i,relative:s,viewTransition:o})}},[d,c,m,n,l,r,e,i,s,o])}const Cu=w.createContext(null),wh=({children:e})=>{const[t,r]=w.useState(null),[n,l]=w.useState(!0);w.useEffect(()=>{const m=localStorage.getItem("currentUser");if(m)try{r(JSON.parse(m))}catch(p){console.error("Failed to parse current user",p),localStorage.removeItem("currentUser")}l(!1)},[]);const i={name:"Admin",surname:"User",email:"admin@example.com",password:"Admin@12345",role:"admin"},s=()=>{try{const m=JSON.parse(localStorage.getItem("users")||"[]");m.some(g=>{var b;return((b=g.email)==null?void 0:b.toLowerCase())===i.email.toLowerCase()})||(m.push({name:i.name,surname:i.surname,email:i.email,password:i.password,role:i.role}),localStorage.setItem("users",JSON.stringify(m)))}catch{}};w.useEffect(()=>{s();const m=localStorage.getItem("currentUser");if(m)try{r(JSON.parse(m))}catch(p){console.error("Failed to parse current user",p),localStorage.removeItem("currentUser")}l(!1)},[]);const o=(m,p)=>{if(s(),m.toLowerCase()===i.email.toLowerCase()&&p===i.password){const x={name:i.name,surname:i.surname,email:i.email,role:i.role};return localStorage.setItem("currentUser",JSON.stringify(x)),r(x),{success:!0,message:"Logged in successfully!"}}const b=JSON.parse(localStorage.getItem("users")||"[]").find(x=>x.email.toLowerCase()===m.toLowerCase()&&x.password===p);if(b){const x={name:b.name,surname:b.surname,email:b.email,role:b.role};return localStorage.setItem("currentUser",JSON.stringify(x)),r(x),{success:!0,message:"Logged in successfully!"}}return{success:!1,message:"Invalid email or password."}},c=(m,p,g,b,x)=>{if(x==="admin")return{success:!1,message:"Admin accounts are pre-created. Please contact support."};const v=JSON.parse(localStorage.getItem("users")||"[]");if(v.some(u=>u.email.toLowerCase()===g.toLowerCase()))return{success:!1,message:"Email is already registered."};const f={name:m,surname:p,email:g,password:b,role:x};return v.push(f),localStorage.setItem("users",JSON.stringify(v)),{success:!0,message:"Registration successful! You can now log in."}},d=()=>{localStorage.removeItem("currentUser"),r(null)};return a.jsx(Cu.Provider,{value:{user:t,loading:n,login:o,register:c,logout:d},children:!n&&e})},Pe=()=>{const e=w.useContext(Cu);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},qa=e=>{switch(e){case"admin":return"/admin-dashboard";case"employer":return"/employer-dashboard";case"candidate":return"/candidate-dashboard";default:return"/login"}},Ot=({children:e,requiredRole:t,allowedRoles:r})=>{const{user:n}=Pe();if(!n)return a.jsx(rn,{to:"/login",replace:!0});const l=qa(n.role);return t&&n.role!==t?a.jsx(rn,{to:l,replace:!0}):r&&!r.includes(n.role)?a.jsx(rn,{to:l,replace:!0}):e};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zu=(...e)=>e.filter((t,r,n)=>!!t&&n.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:l="",children:i,iconNode:s,...o},c)=>w.createElement("svg",{ref:c,...jh,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:zu("lucide",l),...o},[...s.map(([d,m])=>w.createElement(d,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(e,t)=>{const r=w.forwardRef(({className:n,...l},i)=>w.createElement(kh,{ref:i,iconNode:t,className:zu(`lucide-${bh(e)}`,n),...l}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=L("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=L("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=L("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=L("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=L("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=L("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=L("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=L("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=L("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=L("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=L("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=L("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=L("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=L("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=L("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=L("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=L("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=L("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=L("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=L("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=L("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=L("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=L("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=L("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=L("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=L("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=L("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=L("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=L("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=L("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=L("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=L("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=L("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=L("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=L("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=L("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=L("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=L("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=L("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=L("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),At=()=>{const{user:e,logout:t}=Pe(),r=Tr(),n=i=>r.pathname===i,l=qa(e==null?void 0:e.role);return a.jsxs("nav",{className:"navbar-container",children:[a.jsxs("div",{className:"navbar-inner",children:[a.jsxs(et,{to:l,className:"navbar-logo",children:[a.jsx(Th,{className:"logo-icon",size:24}),a.jsxs("span",{className:"logo-text",children:["CareerPilot",a.jsx("span",{className:"logo-accent",children:"AI"})]})]}),a.jsx("div",{className:"navbar-links",children:(e==null?void 0:e.role)==="admin"?a.jsxs(et,{to:"/admin-dashboard",className:`nav-link ${n("/admin-dashboard")?"active":""}`,children:[a.jsx(Zo,{size:18}),a.jsx("span",{children:"Admin Dashboard"})]}):a.jsxs(a.Fragment,{children:[a.jsxs(et,{to:l,className:`nav-link ${n(l)?"active":""}`,children:[a.jsx(Zo,{size:18}),a.jsx("span",{children:"Dashboard"})]}),(e==null?void 0:e.role)==="employer"&&a.jsxs(et,{to:"/create-job",className:`nav-link ${n("/create-job")?"active":""}`,children:[a.jsx(zh,{size:18}),a.jsx("span",{children:"Create Job"})]}),a.jsxs(et,{to:"/view-jobs",className:`nav-link ${n("/view-jobs")?"active":""}`,children:[a.jsx(je,{size:18}),a.jsx("span",{children:"View Jobs"})]}),a.jsxs(et,{to:"/profile",className:`nav-link ${n("/profile")?"active":""}`,children:[a.jsx(Nn,{size:18}),a.jsx("span",{children:"Profile"})]})]})}),e&&a.jsxs("div",{className:"navbar-user-section",children:[a.jsxs("div",{className:"user-profile",children:[a.jsx("div",{className:"user-avatar",children:a.jsx(Nn,{size:16})}),a.jsxs("span",{className:"user-name",children:[e.name," ",e.surname]})]}),a.jsxs("button",{onClick:t,className:"logout-btn",title:"Sign Out",children:[a.jsx(Rh,{size:18}),a.jsx("span",{children:"Logout"})]})]})]}),a.jsx("style",{children:`
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
      `})]})},Ah=()=>{const{login:e,user:t}=Pe(),r=Zt(),[n,l]=w.useState({email:"",password:""}),[i,s]=w.useState({}),[o,c]=w.useState(""),[d,m]=w.useState(!1),p=()=>{const x={};return n.email?/\S+@\S+\.\S+/.test(n.email)||(x.email="Please enter a valid email address"):x.email="Email is required",n.password||(x.password="Password is required"),s(x),Object.keys(x).length===0},g=x=>{const{name:v,value:j}=x.target;l(f=>({...f,[v]:j})),i[v]&&s(f=>({...f,[v]:""})),c("")},b=async x=>{x.preventDefault(),p()&&(m(!0),c(""),setTimeout(()=>{const v=e(n.email,n.password);if(m(!1),v.success){const j=JSON.parse(localStorage.getItem("currentUser")||"{}");r(qa(j.role))}else c(v.message)},800))};return a.jsxs("div",{className:"auth-page-container",children:[a.jsx("div",{className:"glow-circle top-right"}),a.jsx("div",{className:"glow-circle bottom-left"}),a.jsxs("div",{className:"auth-card-wrapper animate-slide-up",children:[a.jsxs("div",{className:"auth-header",children:[a.jsx("div",{className:"auth-logo",children:"🚀"}),a.jsx("h1",{className:"auth-title",children:"Welcome Back"}),a.jsx("p",{className:"auth-subtitle",children:"Sign in to manage your CVs & track your job progress"})]}),o&&a.jsxs("div",{className:"alert alert-error",children:[a.jsx(ce,{size:18}),a.jsx("span",{children:o})]}),a.jsxs("form",{onSubmit:b,className:"auth-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"email",children:"Email Address"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(_u,{className:"input-icon",size:18}),a.jsx("input",{type:"email",id:"email",name:"email",className:`form-input has-icon ${i.email?"is-invalid":""}`,placeholder:"you@example.com",value:n.email,onChange:g})]}),i.email&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),i.email]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"password",children:"Password"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(Ta,{className:"input-icon",size:18}),a.jsx("input",{type:"password",id:"password",name:"password",className:`form-input has-icon ${i.password?"is-invalid":""}`,placeholder:"••••••••",value:n.password,onChange:g})]}),i.password&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),i.password]})]}),a.jsx("button",{type:"submit",className:"btn btn-primary auth-submit-btn",disabled:d,children:d?a.jsx("span",{className:"spinner"}):a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"Sign In"}),a.jsx(Be,{size:18})]})})]}),a.jsxs("div",{className:"auth-footer",children:[a.jsx("span",{children:"Don't have an account?"})," ",a.jsx(et,{to:"/register",className:"auth-link",children:"Create an Account"})]})]}),a.jsx("style",{children:`
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
      `})]})},Dh=()=>{const{register:e}=Pe(),t=Zt(),[r,n]=w.useState({name:"",surname:"",email:"",password:"",confirmPassword:"",role:""}),[l,i]=w.useState({}),[s,o]=w.useState(""),[c,d]=w.useState(""),[m,p]=w.useState(!1),g=()=>{const v={};return r.name.trim()||(v.name="First name is required"),r.surname.trim()||(v.surname="Surname is required"),r.role||(v.role="Please select a role"),r.email?/\S+@\S+\.\S+/.test(r.email)||(v.email="Please enter a valid email address"):v.email="Email is required",r.password?r.password.length<8?v.password="Password must be at least 8 characters long":/[A-Z]/.test(r.password)?/[!@#$%^&*(),.?":{}|<>]/.test(r.password)||(v.password="Password must contain at least one special character"):v.password="Password must contain at least one capital letter":v.password="Password is required",r.password!==r.confirmPassword&&(v.confirmPassword="Passwords do not match"),i(v),Object.keys(v).length===0},b=v=>{const{name:j,value:f}=v.target;n(u=>({...u,[j]:f})),l[j]&&i(u=>({...u,[j]:""})),o("")},x=async v=>{v.preventDefault(),g()&&(p(!0),o(""),d(""),setTimeout(()=>{const j=e(r.name,r.surname,r.email,r.password,r.role);p(!1),j.success?(d(j.message),n({name:"",surname:"",email:"",password:"",confirmPassword:"",role:""}),setTimeout(()=>{t("/login")},2200)):o(j.message)},800))};return a.jsxs("div",{className:"auth-page-container",children:[a.jsx("div",{className:"glow-circle top-right"}),a.jsx("div",{className:"glow-circle bottom-left"}),a.jsxs("div",{className:"auth-card-wrapper animate-slide-up",children:[a.jsxs("div",{className:"auth-header",children:[a.jsx("div",{className:"auth-logo",children:"🚀"}),a.jsx("h1",{className:"auth-title",children:"Create Account"}),a.jsx("p",{className:"auth-subtitle",children:"Join CareerPilot and select your role to get started"})]}),s&&a.jsxs("div",{className:"alert alert-error",children:[a.jsx(ce,{size:18}),a.jsx("span",{children:s})]}),c&&a.jsxs("div",{className:"alert alert-success",children:[a.jsx(Ru,{size:18}),a.jsx("span",{children:c})]}),a.jsxs("form",{onSubmit:x,className:"auth-form",children:[a.jsxs("div",{className:"form-row-double",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"name",children:"Name"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(Nn,{className:"input-icon",size:18}),a.jsx("input",{type:"text",id:"name",name:"name",className:`form-input has-icon ${l.name?"is-invalid":""}`,placeholder:"John",value:r.name,onChange:b})]}),l.name&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),l.name]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"surname",children:"Surname"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(Nn,{className:"input-icon",size:18}),a.jsx("input",{type:"text",id:"surname",name:"surname",className:`form-input has-icon ${l.surname?"is-invalid":""}`,placeholder:"Doe",value:r.surname,onChange:b})]}),l.surname&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),l.surname]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Select Your Role"}),a.jsxs("div",{className:"role-selection",children:[a.jsxs("div",{className:`role-card ${r.role==="candidate"?"selected":""}`,onClick:()=>b({target:{name:"role",value:"candidate"}}),children:[a.jsx(Iu,{className:"role-icon",size:24}),a.jsx("h3",{className:"role-title",children:"Candidate"}),a.jsx("p",{className:"role-description",children:"Search for jobs and build your career"})]}),a.jsxs("div",{className:`role-card ${r.role==="employer"?"selected":""}`,onClick:()=>b({target:{name:"role",value:"employer"}}),children:[a.jsx(je,{className:"role-icon",size:24}),a.jsx("h3",{className:"role-title",children:"Employer"}),a.jsx("p",{className:"role-description",children:"Post jobs and find talent"})]})]}),l.role&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),l.role]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"email",children:"Email Address"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(_u,{className:"input-icon",size:18}),a.jsx("input",{type:"email",id:"email",name:"email",className:`form-input has-icon ${l.email?"is-invalid":""}`,placeholder:"john.doe@example.com",value:r.email,onChange:b})]}),l.email&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),l.email]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"password",children:"Password"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(Ta,{className:"input-icon",size:18}),a.jsx("input",{type:"password",id:"password",name:"password",className:`form-input has-icon ${l.password?"is-invalid":""}`,placeholder:"8+ chars, 1 capital, 1 special char",value:r.password,onChange:b})]}),l.password&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),l.password]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"confirmPassword",children:"Confirm Password"}),a.jsxs("div",{className:"form-input-wrapper",children:[a.jsx(Ta,{className:"input-icon",size:18}),a.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",className:`form-input has-icon ${l.confirmPassword?"is-invalid":""}`,placeholder:"Confirm password",value:r.confirmPassword,onChange:b})]}),l.confirmPassword&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),l.confirmPassword]})]}),a.jsx("button",{type:"submit",className:"btn btn-primary auth-submit-btn",disabled:m||!!c,children:m?a.jsx("span",{className:"spinner"}):a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"Register"}),a.jsx(Be,{size:18})]})})]}),a.jsxs("div",{className:"auth-footer",children:[a.jsx("span",{children:"Already have an account?"})," ",a.jsx(et,{to:"/login",className:"auth-link",children:"Log In"})]})]}),a.jsx("style",{children:`
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
      `})]})},Fh=()=>{const{user:e}=Pe(),[t,r]=w.useState({cvCount:2,applicationsSubmitted:4});w.useEffect(()=>{},[]);const n=["Tailor your CV's keywords to match the specific job listing for better recruiter match rates.","Keep your resume to 2 pages maximum. Focus on recent results and metrics over descriptions.","Quantify your accomplishments (e.g. 'Boosted sales by 20%' instead of 'Responsible for sales')."],l=n[new Date().getDay()%n.length];return a.jsxs("div",{className:"dashboard-wrapper animate-fade-in",children:[a.jsx("header",{className:"dashboard-header",children:a.jsxs("div",{children:[a.jsxs("h1",{className:"welcome-text",children:["Welcome back, ",a.jsxs("span",{className:"highlight-text",children:[e==null?void 0:e.name," ",e==null?void 0:e.surname]})]}),a.jsx("p",{className:"welcome-sub",children:"Here is what is happening with your career progress today."})]})}),a.jsxs("section",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card glass-card",children:[a.jsx("div",{className:"stat-icon-wrapper purple",children:a.jsx(Er,{size:24})}),a.jsxs("div",{className:"stat-info",children:[a.jsx("span",{className:"stat-label",children:"AI CVs Generated"}),a.jsx("h2",{className:"stat-value",children:t.cvCount})]})]}),a.jsxs("div",{className:"stat-card glass-card",children:[a.jsx("div",{className:"stat-icon-wrapper green",children:a.jsx(el,{size:24})}),a.jsxs("div",{className:"stat-info",children:[a.jsx("span",{className:"stat-label",children:"Applications Submitted"}),a.jsx("h2",{className:"stat-value",children:t.applicationsSubmitted})]})]})]}),a.jsxs("div",{className:"dashboard-grid",children:[a.jsxs("div",{className:"grid-main glass-card",children:[a.jsx("h3",{className:"section-title",children:"Quick Actions"}),a.jsx("div",{className:"actions-list",children:a.jsxs(et,{to:"/view-jobs",className:"action-row",children:[a.jsxs("div",{className:"action-meta",children:[a.jsx("h4",{className:"action-title",children:"View and manage jobs list"}),a.jsx("p",{className:"action-description",children:"Browse active careers, track application status, and review details."})]}),a.jsx(Be,{size:20,className:"action-arrow"})]})})]}),a.jsxs("div",{className:"grid-sidebar glass-card",children:[a.jsxs("div",{className:"sidebar-header",children:[a.jsx(Pu,{size:20,className:"sidebar-icon"}),a.jsx("h3",{className:"sidebar-title",children:"Daily Career Tip"})]}),a.jsxs("p",{className:"tip-content",children:['"',l,'"']}),a.jsx("div",{className:"badge badge-success tip-badge",children:"PRO TIP"})]})]}),a.jsx("style",{children:`
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
      `})]})},Uh=()=>{const{user:e}=Pe(),[t,r]=w.useState(!0),[n,l]=w.useState(null),[i,s]=w.useState(null),[o,c]=w.useState(null),[d,m]=w.useState(null),[p,g]=w.useState([]),[b,x]=w.useState([]),v=w.useMemo(()=>e==null?void 0:e.email,[e]);w.useEffect(()=>{v&&(async()=>{r(!0);try{const h=localStorage.getItem(`profile_${v}`),y=localStorage.getItem(`jobs_${v}`),k=localStorage.getItem(`hustles_${v}`),S=localStorage.getItem(`careerPath_${v}`);h&&l(JSON.parse(h)),y&&s(JSON.parse(y)),k&&c(JSON.parse(k)),S&&m(JSON.parse(S));const C=localStorage.getItem(`uploaded_cvs_${v}`),P=localStorage.getItem(`generated_cvs_${v}`),A=localStorage.getItem(`cv_${v}`),R=localStorage.getItem(`generatedCv_${v}`),Z=Oe=>{if(!Oe)return[];try{const ge=JSON.parse(Oe);return Array.isArray(ge)?ge:ge&&typeof ge=="object"?[ge]:[]}catch{return[{fileName:String(Oe),createdAt:null}]}};g(Z(C)||(A?Z(A):[])),x(Z(P)||(R?Z(R):[]))}catch(h){console.error("Failed to load profile page data",h)}finally{r(!1)}})()},[v]);const j=({title:u,icon:h,children:y})=>a.jsxs("section",{className:"profile-section",children:[a.jsxs("div",{className:"profile-section-title",children:[h,a.jsx("h3",{children:u})]}),a.jsx("div",{className:"profile-section-body",children:y})]}),f=(u,h)=>{const y=(u==null?void 0:u.fileName)||(u==null?void 0:u.name)||(u==null?void 0:u.filename)||`CV ${h+1}`,k=(u==null?void 0:u.createdAt)||(u==null?void 0:u.date)||null,S=(u==null?void 0:u.url)||(u==null?void 0:u.downloadUrl)||null;return a.jsxs("div",{className:"cv-item",children:[a.jsxs("div",{className:"cv-meta",children:[a.jsx("div",{className:"cv-icon",children:a.jsx(Er,{size:18})}),a.jsxs("div",{className:"cv-text",children:[a.jsx("div",{className:"cv-name",children:y}),a.jsx("div",{className:"cv-sub",children:k?new Date(k).toLocaleString():"—"})]})]}),S?a.jsxs("a",{className:"cv-download",href:S,target:"_blank",rel:"noreferrer",children:[a.jsx(qo,{size:16}),a.jsx("span",{children:"Download"})]}):a.jsxs("div",{className:"cv-download disabled",title:"No download URL available",children:[a.jsx(qo,{size:16}),a.jsx("span",{children:"Unavailable"})]})]},h)};return t?a.jsxs("div",{className:"profile-page",children:[a.jsxs("div",{className:"loading-state",children:[a.jsx("div",{className:"spinner"}),a.jsx("p",{children:"Loading your profile..."})]}),a.jsx("style",{children:`
          .profile-page { padding: 2rem; max-width: 1200px; margin: 0 auto; }
          .loading-state { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; color: var(--text-secondary); }
          .spinner { width: 42px; height: 42px; border: 3px solid rgba(99, 102, 241, 0.3); border-top-color: var(--color-primary); border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 1rem; }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):a.jsxs("div",{className:"profile-page",children:[a.jsx("header",{className:"profile-hero",children:a.jsxs("div",{className:"profile-hero-left",children:[a.jsx("div",{className:"profile-hero-icon",children:a.jsx(Nn,{size:20})}),a.jsxs("div",{children:[a.jsx("h1",{className:"profile-hero-title",children:"Your Profile"}),a.jsx("p",{className:"profile-hero-sub",children:"Uploaded CVs, generated CVs, and your career information."})]})]})}),a.jsxs("div",{className:"profile-grid",children:[a.jsx(j,{title:"Uploaded CV",icon:a.jsx(Tu,{size:18}),children:p.length?a.jsx("div",{className:"cv-list",children:p.map(f)}):a.jsxs("div",{className:"empty-panel",children:[a.jsx("p",{children:"No uploaded CV found."}),a.jsx("p",{className:"muted",children:"Upload/update your CV from the dashboard."})]})}),a.jsx(j,{title:"Generated CVs",icon:a.jsx(Pu,{size:18}),children:b.length?a.jsx("div",{className:"cv-list",children:b.map(f)}):a.jsxs("div",{className:"empty-panel",children:[a.jsx("p",{children:"No generated CVs found."}),a.jsx("p",{className:"muted",children:"Generate CVs using the CV builder flow (if enabled)."})]})}),a.jsx(j,{title:"Other Information",icon:a.jsx(je,{size:18}),children:n?a.jsxs("div",{className:"other-info",children:[a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Name"}),a.jsx("span",{className:"other-value",children:n.name||`${(e==null?void 0:e.name)||""} ${(e==null?void 0:e.surname)||""}`.trim()})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Experience"}),a.jsx("span",{className:"other-value",children:n.experience||"—"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Dominant Sector"}),a.jsx("span",{className:"other-value",children:n.dominantSector||"—"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Work Style"}),a.jsx("span",{className:"other-value",children:n.workStyle||"—"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Payment Preference"}),a.jsx("span",{className:"other-value",children:n.preferredPayment||"—"})]}),a.jsx("div",{className:"other-divider"}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Matched Jobs"}),a.jsx("span",{className:"other-value",children:Array.isArray(i)?i.length:"0"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"Side Hustles"}),a.jsx("span",{className:"other-value",children:Array.isArray(o)?o.length:"0"})]}),a.jsxs("div",{className:"other-info-row",children:[a.jsx("span",{className:"other-label",children:"5-Year Plan Steps"}),a.jsx("span",{className:"other-value",children:Array.isArray(d)?d.length:"0"})]}),Array.isArray(n.skills)&&n.skills.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"other-divider"}),a.jsxs("div",{className:"skills-mini",children:[a.jsx("div",{className:"skills-mini-title",children:"Top Skills"}),a.jsx("div",{className:"skills-mini-grid",children:n.skills.slice(0,10).map((u,h)=>a.jsxs("div",{className:"skill-chip",children:[a.jsx("span",{className:"skill-chip-name",children:u.name}),a.jsxs("span",{className:"skill-chip-level",children:[u.level,"%"]})]},h))})]})]})]}):a.jsxs("div",{className:"empty-panel",children:[a.jsx("p",{children:"No profile data found."}),a.jsx("p",{className:"muted",children:"Complete onboarding to see your profile and skills."})]})})]}),a.jsx("style",{children:`
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
      `})]})},$h=({employerId:e="default-employer",candidateEmail:t,employerName:r})=>{const n=w.useMemo(()=>`thread_${t||"anonymous"}__${e||"default-employer"}`,[t,e]),l=r||"Employer",[i,s]=w.useState(!1),[o,c]=w.useState(""),[d,m]=w.useState(!1),[p,g]=w.useState([]),b=w.useMemo(()=>[{label:"Request interview time",text:"Thanks! Please share your availability (dates + timezone) and we’ll propose interview slots."},{label:"Ask about compensation",text:"Thanks for your question. We can discuss compensation after we confirm the role fit and next steps."},{label:"Follow up on portfolio",text:"Great—please send your portfolio/GitHub link(s). We’ll review them and get back to you."},{label:"Confirm receipt",text:"Thanks! We’ve received your message and will get back to you shortly."}],[]),x=w.useRef(null);w.useEffect(()=>{try{const k=localStorage.getItem(n);k&&g(JSON.parse(k))}catch{}},[n]),w.useEffect(()=>{try{localStorage.setItem(n,JSON.stringify(p))}catch{}},[p,n]),w.useEffect(()=>{var k;(k=x.current)==null||k.scrollIntoView({behavior:"smooth"})},[p,d]);const v=(k,S)=>{g(C=>[...C,{id:`${Date.now()}_${Math.random().toString(16).slice(2)}`,type:k,text:S,createdAt:new Date().toISOString()}])},j=async()=>{const k=o.trim();!k||d||(v("candidate",k),c(""),m(!0))};w.useEffect(()=>{if(!d)return;const k=setTimeout(()=>{m(!1)},650);return()=>clearTimeout(k)},[d]);const f=k=>{k.key==="Enter"&&!k.shiftKey&&(k.preventDefault(),j())},u=k=>{if(d)return;m(!0);const S=setTimeout(()=>{v("employer",k),m(!1)},650);return()=>clearTimeout(S)},h=()=>{g([]),c("");try{localStorage.removeItem(n)}catch{}},y=p.length>0;return a.jsxs(a.Fragment,{children:[!i&&a.jsx("div",{style:{position:"fixed",bottom:"2rem",right:"2rem",zIndex:1e3},children:a.jsxs("button",{className:"employer-chat-toggle",onClick:()=>s(!0),"aria-label":"Message Employer",title:"Message Employer",type:"button",children:[a.jsx(Lu,{size:24}),a.jsx("span",{className:"toggle-label",children:"Message Employer"})]})}),i&&a.jsxs("div",{className:"employer-chat-window",role:"dialog","aria-label":"Employer chat",children:[a.jsxs("div",{className:"employer-chat-header",children:[a.jsxs("div",{className:"employer-chat-title",children:[a.jsx("span",{className:"employer-chat-dot"}),a.jsxs("div",{children:[a.jsx("div",{className:"employer-chat-name",children:l}),a.jsx("div",{className:"employer-chat-sub",children:"In-app conversation"})]})]}),a.jsx("button",{className:"employer-chat-close",onClick:()=>s(!1),title:"Close",type:"button",children:a.jsx(Rn,{size:18})})]}),a.jsxs("div",{className:"employer-chat-messages",children:[!y&&a.jsxs("div",{className:"employer-chat-empty",children:[a.jsx("div",{className:"employer-chat-empty-title",children:"Start the conversation"}),a.jsx("div",{className:"employer-chat-empty-sub",children:"Send a message to your employer about your application."})]}),p.map(k=>a.jsx("div",{className:`employer-chat-bubble ${k.type}`,children:a.jsx("div",{className:"employer-chat-bubble-text",children:k.text})},k.id)),d&&a.jsx("div",{className:"employer-chat-bubble employer",children:a.jsx("div",{className:"employer-chat-typing",children:"Typing…"})}),a.jsx("div",{ref:x})]}),a.jsxs("div",{className:"employer-chat-presets",children:[a.jsxs("div",{className:"employer-chat-presets-title",children:[a.jsx(Tu,{size:16}),a.jsx("span",{children:"Employer reply (demo)"})]}),a.jsxs("div",{className:"employer-chat-presets-grid",children:[b.map(k=>a.jsx("button",{type:"button",className:"employer-chat-preset",onClick:()=>u(k.text),disabled:d,title:k.label,children:k.label},k.label)),a.jsx("button",{type:"button",className:"employer-chat-preset employer-chat-preset-secondary",onClick:h,disabled:d||p.length===0,title:"Clear conversation",children:"Clear"})]})]}),a.jsxs("div",{className:"employer-chat-input",children:[a.jsx("textarea",{className:"employer-chat-textarea",placeholder:"Write your message...",value:o,onChange:k=>c(k.target.value),onKeyPress:f,rows:1}),a.jsx("button",{className:"employer-chat-send",onClick:j,disabled:!o.trim()||d,type:"button","aria-label":"Send",title:"Send",children:a.jsx(Za,{size:18})})]})]}),a.jsx("style",{children:`
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
      `})]})},Bh=()=>{const e=Zt(),[t,r]=w.useState({title:"",company:"",location:"",type:"Full-time",salary:"",description:""}),[n,l]=w.useState({}),[i,s]=w.useState(!1),[o,c]=w.useState(!1),d=()=>{const g={};return t.title.trim()||(g.title="Job title is required"),t.company.trim()||(g.company="Company name is required"),t.location.trim()||(g.location="Location is required"),t.salary.trim()||(g.salary="Salary/Compensation is required"),t.description.trim()||(g.description="Job description is required"),l(g),Object.keys(g).length===0},m=g=>{const{name:b,value:x}=g.target;r(v=>({...v,[b]:x})),n[b]&&l(v=>({...v,[b]:""}))},p=g=>{g.preventDefault(),d()&&(c(!0),setTimeout(()=>{const b=JSON.parse(localStorage.getItem("jobs")||"[]"),x={id:Date.now(),...t,status:"Active",createdAt:new Date().toLocaleDateString()};b.unshift(x),localStorage.setItem("jobs",JSON.stringify(b)),c(!1),s(!0),r({title:"",company:"",location:"",type:"Full-time",salary:"",description:""}),setTimeout(()=>{e("/view-jobs")},1500)},800))};return a.jsxs("div",{className:"create-job-wrapper animate-fade-in",children:[a.jsxs("header",{className:"page-header",children:[a.jsxs("button",{onClick:()=>e("/"),className:"back-btn",children:[a.jsx(Nh,{size:18}),a.jsx("span",{children:"Back to Dashboard"})]}),a.jsx("h1",{className:"page-title",children:"Create Job Listing"}),a.jsx("p",{className:"page-subtitle",children:"Publish a new career opportunity to the database"})]}),i&&a.jsxs("div",{className:"alert alert-success",children:[a.jsx(Ru,{size:18}),a.jsx("span",{children:"Job listing created successfully! Redirecting to jobs board..."})]}),a.jsx("div",{className:"form-card glass-card",children:a.jsxs("form",{onSubmit:p,children:[a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"title",children:"Job Title"}),a.jsx("input",{type:"text",id:"title",name:"title",className:`form-input ${n.title?"is-invalid":""}`,placeholder:"Software Engineer",value:t.title,onChange:m}),n.title&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),n.title]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"company",children:"Company"}),a.jsx("input",{type:"text",id:"company",name:"company",className:`form-input ${n.company?"is-invalid":""}`,placeholder:"e.g. Vodacom, Discovery Ltd",value:t.company,onChange:m}),n.company&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),n.company]})]})]}),a.jsxs("div",{className:"form-row-triple",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"location",children:"Location"}),a.jsx("input",{type:"text",id:"location",name:"location",className:`form-input ${n.location?"is-invalid":""}`,placeholder:"Sandton, Johannesburg / Remote (SA)",value:t.location,onChange:m}),n.location&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),n.location]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"type",children:"Job Type"}),a.jsxs("select",{id:"type",name:"type",className:"form-input select-input",value:t.type,onChange:m,children:[a.jsx("option",{value:"Full-time",children:"Full-time"}),a.jsx("option",{value:"Part-time",children:"Part-time"}),a.jsx("option",{value:"Contract",children:"Contract"}),a.jsx("option",{value:"Internship",children:"Internship"}),a.jsx("option",{value:"Remote",children:"Remote Only"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"salary",children:"Salary / Compensation"}),a.jsx("input",{type:"text",id:"salary",name:"salary",className:`form-input ${n.salary?"is-invalid":""}`,placeholder:"e.g. R450,000 - R650,000 p.a.",value:t.salary,onChange:m}),n.salary&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),n.salary]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"description",children:"Job Description"}),a.jsx("textarea",{id:"description",name:"description",rows:"6",className:`form-input textarea-input ${n.description?"is-invalid":""}`,placeholder:"Outline the responsibilities, requirements, and benefits of the role...",value:t.description,onChange:m}),n.description&&a.jsxs("span",{className:"form-error-msg",children:[a.jsx(ce,{size:14}),n.description]})]}),a.jsxs("div",{className:"form-actions",children:[a.jsx("button",{type:"button",onClick:()=>e("/"),className:"btn btn-secondary cancel-btn",disabled:o,children:"Cancel"}),a.jsx("button",{type:"submit",className:"btn btn-primary submit-btn",disabled:o||i,children:o?a.jsx("span",{className:"spinner"}):a.jsxs(a.Fragment,{children:[a.jsx(Rs,{size:18}),a.jsx("span",{children:"Publish Job Listing"})]})})]})]})}),a.jsx("style",{children:`
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
      `})]})},Ut=[{id:1,title:"Senior Frontend Engineer",company:"Discovery Ltd",location:"Sandton, Johannesburg (Hybrid)",type:"Full-time",salary:"R850,000 - R1,100,000 p.a.",description:"Lead frontend architecture for digital insurance products. Requires JavaScript, React, and modern web development experience.",status:"Active",createdAt:"2026-06-28"},{id:2,title:"Lead UX Designer",company:"Naked Insurance",location:"Cape Town (Remote)",type:"Remote",salary:"R720,000 - R950,000 p.a.",description:"Shape customer-facing insurance experiences. Requires 5+ years of UI/UX design, Figma, and design systems experience.",status:"Active",createdAt:"2026-06-29"},{id:3,title:"Construction Site Supervisor",company:"Murray & Roberts",location:"Johannesburg, Gauteng",type:"Full-time",salary:"R420,000 - R580,000 p.a.",description:"Supervise construction crews, enforce safety protocols, read blueprints, and manage power tools on active building sites.",status:"Active",createdAt:"2026-06-30"},{id:4,title:"Marketing Coordinator",company:"Takealot",location:"Cape Town, Western Cape",type:"Full-time",salary:"R320,000 - R450,000 p.a.",description:"Manage social media campaigns, content marketing, SEO strategy, and client communication for e-commerce growth.",status:"Active",createdAt:"2026-07-01"},{id:5,title:"Python Data Analyst",company:"Standard Bank",location:"Johannesburg, Gauteng",type:"Full-time",salary:"R550,000 - R750,000 p.a.",description:"Analyse financial datasets, build Python dashboards, and support data-driven decision making across retail banking.",status:"Active",createdAt:"2026-07-01"},{id:6,title:"Full Stack Developer",company:"Yoco",location:"Cape Town (Hybrid)",type:"Full-time",salary:"R600,000 - R820,000 p.a.",description:"Build payment products for SMEs using JavaScript, React, Node, and cloud infrastructure. Fintech experience a plus.",status:"Active",createdAt:"2026-07-02"},{id:7,title:"Warehouse Operations Lead",company:"Pick n Pay",location:"Durban, KwaZulu-Natal",type:"Full-time",salary:"R280,000 - R380,000 p.a.",description:"Oversee warehouse logistics, forklift operations, inventory control, and team safety compliance in a high-volume distribution centre.",status:"Active",createdAt:"2026-07-02"},{id:8,title:"Sales Consultant",company:"Vodacom",location:"Pretoria, Gauteng",type:"Full-time",salary:"R240,000 - R360,000 p.a. + commission",description:"Drive B2B and consumer sales, manage client relationships, and exceed revenue targets in the telecommunications sector.",status:"Active",createdAt:"2026-07-03"},{id:9,title:"Registered Nurse",company:"Netcare",location:"Johannesburg, Gauteng",type:"Full-time",salary:"R350,000 - R480,000 p.a.",description:"Deliver patient care in a busy hospital ward. Requires valid SANC registration and strong clinical communication skills.",status:"Active",createdAt:"2026-07-03"},{id:10,title:"Digital Marketing Specialist",company:"Woolworths",location:"Remote (South Africa)",type:"Remote",salary:"R380,000 - R520,000 p.a.",description:"Plan and execute digital campaigns, manage social media content, and analyse marketing performance across retail channels.",status:"Active",createdAt:"2026-07-03"},{id:11,title:"Financial Accountant",company:"PwC South Africa",location:"Sandton, Johannesburg",type:"Full-time",salary:"R450,000 - R620,000 p.a.",description:"Prepare financial statements, manage bookkeeping processes, and support audit engagements for corporate clients.",status:"Active",createdAt:"2026-07-04"},{id:12,title:"DevOps Engineer",company:"MTN",location:"Johannesburg (Hybrid)",type:"Full-time",salary:"R700,000 - R950,000 p.a.",description:"Maintain cloud infrastructure, automate deployments with Docker and AWS, and support high-availability telco systems.",status:"Active",createdAt:"2026-07-04"},{id:13,title:"Customer Support Agent",company:"Capitec Bank",location:"Stellenbosch, Western Cape",type:"Full-time",salary:"R180,000 - R260,000 p.a.",description:"Handle customer enquiries via phone and chat, resolve banking issues, and deliver excellent client service daily.",status:"Active",createdAt:"2026-07-04"},{id:14,title:"Project Manager",company:"Sanlam",location:"Bellville, Cape Town",type:"Contract",salary:"R650 - R950 per hour",description:"Lead agile project delivery for insurance product launches. Requires project management, scrum, and stakeholder leadership.",status:"Active",createdAt:"2026-07-04"}],Vh=new Set(Ut.map(e=>e.id));function Wh(){try{const e=localStorage.getItem("jobs");let t=[];if(e){const r=JSON.parse(e),n=r.some(l=>{var i;return(i=l.salary)==null?void 0:i.includes("$")});if(t=r.filter(l=>!Vh.has(l.id)),!r.length||n||r.length<Ut.length){const l=[...Ut,...t];return localStorage.setItem("jobs",JSON.stringify(l)),l}return r}return localStorage.setItem("jobs",JSON.stringify(Ut)),Ut}catch{return localStorage.setItem("jobs",JSON.stringify(Ut)),Ut}}function tl(){return Wh()}const Jh=()=>{const e=Zt(),{user:t}=Pe(),[r,n]=w.useState([]);w.useEffect(()=>{n(tl())},[]);const l=s=>{const o=r.filter(c=>c.id!==s);localStorage.setItem("jobs",JSON.stringify(o)),n(o)},i=s=>{switch(s){case"Full-time":return"badge-fulltime";case"Remote":return"badge-remote";case"Contract":return"badge-contract";default:return"badge-other"}};return a.jsxs("div",{className:"view-jobs-wrapper animate-fade-in",children:[a.jsxs("header",{className:"page-header",children:[a.jsx("h1",{className:"page-title",children:"Active Job Listings"}),a.jsx("p",{className:"page-subtitle",children:"Track, update, and manage candidate opportunities"})]}),a.jsxs("div",{className:"table-actions",children:[a.jsxs("span",{className:"results-count",children:[r.length," Listings Found"]}),(t==null?void 0:t.role)==="employer"&&a.jsxs("button",{onClick:()=>e("/create-job"),className:"btn btn-primary add-job-btn",children:[a.jsx(Rs,{size:18}),a.jsx("span",{children:"Add New Job"})]})]}),r.length===0?a.jsxs("div",{className:"empty-state glass-card",children:[a.jsx(je,{size:48,className:"empty-icon"}),a.jsx("h3",{children:"No Job Listings Found"}),(t==null?void 0:t.role)==="employer"?a.jsxs(a.Fragment,{children:[a.jsx("p",{children:"Get started by creating your first job listing today."}),a.jsx("button",{onClick:()=>e("/create-job"),className:"btn btn-primary empty-btn",children:"Create Job"})]}):a.jsx("p",{children:"Check back later for new job opportunities."})]}):a.jsx("div",{className:"jobs-list",children:r.map(s=>a.jsxs("div",{className:"job-card glass-card",children:[a.jsxs("div",{className:"job-card-header",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"job-title",children:s.title}),a.jsx("span",{className:"job-company",children:s.company})]}),a.jsxs("div",{className:"job-meta-badges",children:[a.jsx("span",{className:`badge ${i(s.type)}`,children:s.type}),a.jsx("span",{className:"badge badge-success",children:s.status})]})]}),a.jsx("p",{className:"job-description",children:s.description}),a.jsxs("div",{className:"job-card-footer",children:[a.jsxs("div",{className:"job-meta-details",children:[a.jsxs("div",{className:"meta-item",children:[a.jsx(Ps,{size:16}),a.jsx("span",{children:s.location})]}),a.jsxs("div",{className:"meta-item",children:[a.jsx(Es,{size:16}),a.jsx("span",{children:s.salary})]}),a.jsxs("div",{className:"meta-item",children:[a.jsx(Ch,{size:16}),a.jsxs("span",{children:["Added ",s.createdAt]})]})]}),(t==null?void 0:t.role)==="employer"&&a.jsxs("button",{onClick:()=>l(s.id),className:"delete-job-btn",title:"Delete Listing",children:[a.jsx(Ei,{size:18}),a.jsx("span",{children:"Delete"})]})]})]},s.id))}),a.jsx("style",{children:`
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
      `})]})},Ou=[{name:"JavaScript",keywords:["javascript","js","react","node","frontend","web developer"]},{name:"Python",keywords:["python","django","flask","data science","machine learning"]},{name:"Project Management",keywords:["project management","pm","agile","scrum","leadership"]},{name:"UI/UX Design",keywords:["ui","ux","design","figma","wireframe","user experience"]},{name:"Forklift Operation",keywords:["forklift","warehouse","logistics"]},{name:"Power Tools",keywords:["power tools","construction","carpentry","building"]},{name:"Blueprint Reading",keywords:["blueprint","technical drawing","architectural"]},{name:"Safety Protocols",keywords:["safety","osha","hazard","compliance"]},{name:"Customer Service",keywords:["customer service","client","support","communication"]},{name:"Sales",keywords:["sales","revenue","negotiation","closing deals"]},{name:"Marketing",keywords:["marketing","social media","seo","content","campaign"]},{name:"Accounting",keywords:["accounting","bookkeeping","finance","excel","quickbooks"]},{name:"Team Leadership",keywords:["team lead","supervisor","management","mentor"]},{name:"Time Management",keywords:["time management","deadline","organized","efficient"]},{name:"SQL & Databases",keywords:["sql","database","postgres","mysql","data"]},{name:"Cloud Computing",keywords:["aws","azure","cloud","devops","docker"]}],Hh=[{sector:"Technology",keywords:["software","developer","engineer","programming","tech","it","javascript","python"]},{sector:"Construction & Trades",keywords:["construction","forklift","blueprint","carpentry","trades","building"]},{sector:"Design & Creative",keywords:["design","creative","ux","ui","graphic","brand"]},{sector:"Business & Finance",keywords:["finance","accounting","business","sales","marketing"]},{sector:"Healthcare",keywords:["healthcare","nurse","medical","patient","clinical"]},{sector:"Logistics & Operations",keywords:["warehouse","logistics","supply chain","operations"]}],Yh=[{title:"Freelance Web Projects",platform:"Upwork",earnings:"R8,000–R35,000/mo",timeCommitment:"5–10 hrs/week",skills:["JavaScript","UI/UX Design"]},{title:"Weekend Construction Gigs",platform:"TaskRabbit",earnings:"R3,500–R10,000/weekend",timeCommitment:"Weekends",skills:["Power Tools","Blueprint Reading"]},{title:"Online Tutoring",platform:"Preply",earnings:"R250–R650/hr",timeCommitment:"3–6 hrs/week",skills:["Customer Service","Time Management"]},{title:"Social Media Management",platform:"Fiverr",earnings:"R5,000–R25,000/mo",timeCommitment:"4–8 hrs/week",skills:["Marketing","Customer Service"]},{title:"Warehouse Shift Work",platform:"Indeed Flex",earnings:"R120–R180/hr",timeCommitment:"Flexible shifts",skills:["Forklift Operation","Safety Protocols"]},{title:"Data Entry & Admin",platform:"Remote.co",earnings:"R90–R150/hr",timeCommitment:"Part-time",skills:["Accounting","Time Management"]},{title:"UX Design Contracts",platform:"Toptal",earnings:"R800–R1,800/hr",timeCommitment:"Project-based",skills:["UI/UX Design","Project Management"]},{title:"Cloud Consulting",platform:"Contra",earnings:"R950–R2,200/hr",timeCommitment:"Evenings",skills:["Cloud Computing","Python"]}],ec={Technology:[{year:"Year 1",title:"Junior Developer",salary:"R350k–R480k p.a.",icon:"💻"},{year:"Year 2",title:"Mid-Level Engineer",salary:"R480k–R720k p.a.",icon:"🚀"},{year:"Year 3",title:"Senior Developer",salary:"R720k–R950k p.a.",icon:"⭐"},{year:"Year 4",title:"Tech Lead",salary:"R900k–R1.2m p.a.",icon:"🎯"},{year:"Year 5",title:"Engineering Manager",salary:"R1.1m–R1.5m p.a.",icon:"👑"}],"Construction & Trades":[{year:"Year 1",title:"Skilled Tradesperson",salary:"R220k–R320k p.a.",icon:"🔧"},{year:"Year 2",title:"Site Supervisor",salary:"R320k–R450k p.a.",icon:"📋"},{year:"Year 3",title:"Project Coordinator",salary:"R400k–R550k p.a.",icon:"🏗️"},{year:"Year 4",title:"Construction Manager",salary:"R550k–R750k p.a.",icon:"🎯"},{year:"Year 5",title:"Operations Director",salary:"R750k–R950k p.a.",icon:"👑"}],"Design & Creative":[{year:"Year 1",title:"Junior Designer",salary:"R280k–R380k p.a.",icon:"🎨"},{year:"Year 2",title:"Product Designer",salary:"R400k–R550k p.a.",icon:"✨"},{year:"Year 3",title:"Senior UX Designer",salary:"R550k–R750k p.a.",icon:"⭐"},{year:"Year 4",title:"Design Lead",salary:"R700k–R900k p.a.",icon:"🎯"},{year:"Year 5",title:"Head of Design",salary:"R850k–R1.1m p.a.",icon:"👑"}],"Business & Finance":[{year:"Year 1",title:"Analyst / Associate",salary:"R300k–R420k p.a.",icon:"📊"},{year:"Year 2",title:"Account Manager",salary:"R420k–R550k p.a.",icon:"🤝"},{year:"Year 3",title:"Senior Consultant",salary:"R550k–R750k p.a.",icon:"⭐"},{year:"Year 4",title:"Department Lead",salary:"R700k–R950k p.a.",icon:"🎯"},{year:"Year 5",title:"Director",salary:"R900k–R1.2m p.a.",icon:"👑"}],default:[{year:"Year 1",title:"Entry-Level Specialist",salary:"R240k–R350k p.a.",icon:"🌱"},{year:"Year 2",title:"Experienced Professional",salary:"R350k–R480k p.a.",icon:"📈"},{year:"Year 3",title:"Senior Specialist",salary:"R480k–R650k p.a.",icon:"⭐"},{year:"Year 4",title:"Team Lead",salary:"R600k–R800k p.a.",icon:"🎯"},{year:"Year 5",title:"Department Manager",salary:"R750k–R1m p.a.",icon:"👑"}]};function _n(e){return(e||"").toLowerCase()}function Au(e){const t=_n(e),r=[];return Ou.forEach(({name:n,keywords:l})=>{const i=l.filter(s=>t.includes(s)).length;if(i>0){const s=Math.min(95,60+i*12+Math.floor(Math.random()*8));r.push({name:n,level:s})}}),r.length===0?[{name:"Communication",level:75},{name:"Problem Solving",level:70},{name:"Time Management",level:72},{name:"Teamwork",level:78}]:r.sort((n,l)=>l.level-n.level).slice(0,8)}function Du(e){const t=_n(e);let r={sector:"General Professional",score:0};return Hh.forEach(({sector:n,keywords:l})=>{const i=l.filter(s=>t.includes(s)).length;i>r.score&&(r={sector:n,score:i})}),r.sector}function Qh(e){const t=_n(e);return/remote|work from home|wfh|distributed/.test(t)?"Remote-first":/gig|contract|freelance|part-time|weekend/.test(t)?"Gig Economy":/hybrid/.test(t)?"Hybrid":"Full-time Employment"}function Kh(e){const t=_n(e);return/hourly|per hour|\/hr/.test(t)?"Hourly rate":/project|per project|contract basis/.test(t)?"Per-project basis":/salary|annual|yearly/.test(t)?"Annual salary (ZAR)":/gig|freelance/.test(t)?"Flexible / gig-based":"Competitive salary (ZAR)"}function Fu(e,t){const r=Au(e),n=Du(e);return{name:t,dominantSector:n,workStyle:Qh(e),skills:r,experience:e.trim(),preferredPayment:Kh(e),lastUpdated:new Date().toISOString()}}function Uu(e,t){const r=`${e.name} ${t}`,n=Au(r),l=Du(r);return{name:t,dominantSector:l,workStyle:"Full-time Employment",skills:n,experience:`CV uploaded: ${e.name} (${Math.round(e.size/1024)} KB)`,preferredPayment:"Competitive salary (ZAR)",uploadedFile:e.name,lastUpdated:new Date().toISOString()}}function Gh(e,t,r){var n;if(t.method==="text"&&((n=t.rawText)!=null&&n.trim()))return{...Fu(`${(e==null?void 0:e.experience)||""}
${t.rawText}`,r),experience:t.rawText.trim()};if(t.method==="upload"&&t.file){const l=Uu(t.file,r);return{...e,...l,skills:l.skills.length?l.skills:e==null?void 0:e.skills}}return e}function Xh(e,t){const r=_n(`${e.title} ${e.company} ${e.description} ${e.type}`),n=t.map(d=>d.name.toLowerCase());let l=0;const i=[];t.forEach(d=>{var b;const m=d.name.toLowerCase().split(/\s+/);(((b=Ou.find(x=>x.name===d.name))==null?void 0:b.keywords)||m).some(x=>r.includes(x))||r.includes(d.name.toLowerCase())?l++:i.push(d.name)});const s=t.length?Math.round(l/t.length*100):50,o=n.some(d=>r.includes(d))?10:0;return{matchPercentage:Math.min(98,Math.max(35,s+o)),missingSkills:i.slice(0,3)}}function qh(e){var r;const t=tl();return!t.length||!((r=e==null?void 0:e.skills)!=null&&r.length)?[]:t.map(n=>{const{matchPercentage:l,missingSkills:i}=Xh(n,e.skills);return{id:n.id,title:n.title,company:n.company,location:n.location,salary:n.salary,type:n.type,description:n.description,matchPercentage:l,missingSkills:i}}).sort((n,l)=>l.matchPercentage-n.matchPercentage).slice(0,6)}function Zh(e){var r;if(!((r=e==null?void 0:e.skills)!=null&&r.length))return[];const t=e.skills.map(n=>n.name);return Yh.filter(n=>n.skills.some(l=>t.includes(l))).slice(0,4).map((n,l)=>({id:`hustle-${l+1}`,title:n.title,platform:n.platform,earnings:n.earnings,timeCommitment:n.timeCommitment,skillsUsed:n.skills.filter(i=>t.includes(i)),description:`Earn extra income using your ${n.skills.filter(i=>t.includes(i)).join(" & ")} skills on ${n.platform}.`}))}function eg(e){const t=(e==null?void 0:e.dominantSector)||"default";return ec[t]||ec.default}function tg(e,{profile:t,matchedJobs:r,sideHustles:n,careerPath:l}){t&&localStorage.setItem(`profile_${e}`,JSON.stringify(t)),r&&localStorage.setItem(`jobs_${e}`,JSON.stringify(r)),n&&localStorage.setItem(`hustles_${e}`,JSON.stringify(n)),l&&localStorage.setItem(`careerPath_${e}`,JSON.stringify(l))}function rg(e){const t=qh(e),r=Zh(e),n=eg(e);return{matchedJobs:t,sideHustles:r,careerPath:n}}function _s(e){try{return JSON.parse(localStorage.getItem(`applications_${e}`)||"[]")}catch{return[]}}function ng(e,t){const r=_s(e);if(r.some(l=>l.jobId===t.id))return r;const n=[{jobId:t.id,title:t.title,company:t.company,appliedAt:new Date().toISOString(),status:"Applied"},...r];return localStorage.setItem(`applications_${e}`,JSON.stringify(n)),n}function $u(e){try{return JSON.parse(localStorage.getItem(`saved_hustles_${e}`)||"[]")}catch{return[]}}function ag(e,t){const r=$u(e);if(r.some(l=>l.id===t.id))return r;const n=[{id:t.id,title:t.title,platform:t.platform,savedAt:new Date().toISOString()},...r];return localStorage.setItem(`saved_hustles_${e}`,JSON.stringify(n)),n}function lg(e){const t=_s(e);return{total:t.length,recent:t.slice(0,3)}}const ig=({onComplete:e})=>{const{user:t}=Pe(),[r,n]=w.useState(1),[l,i]=w.useState(""),[s,o]=w.useState(null),[c,d]=w.useState(""),[m,p]=w.useState(!1),g=x=>{const v=x.target.files[0];v&&v.type==="application/pdf"&&o(v)},b=()=>{p(!0),setTimeout(()=>{const x=`${(t==null?void 0:t.name)||""} ${(t==null?void 0:t.surname)||""}`.trim()||"Candidate",v=l==="upload"?Uu(s,x):Fu(c,x);p(!1),e(v)},1500)};return a.jsxs("div",{className:"onboarding-container",children:[a.jsxs("div",{className:"onboarding-card",children:[r===1&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"onboarding-header",children:[a.jsx("h1",{className:"onboarding-title",children:"Let's Build Your Profile"}),a.jsx("p",{className:"onboarding-subtitle",children:"Choose how you'd like to share your experience"})]}),a.jsxs("div",{className:"method-selection",children:[a.jsxs("div",{className:`method-card ${l==="upload"?"selected":""}`,onClick:()=>i("upload"),children:[a.jsx("div",{className:"method-icon",children:a.jsx(nn,{size:32})}),a.jsx("h3",{className:"method-title",children:"Upload CV"}),a.jsx("p",{className:"method-description",children:"I have a PDF resume ready to upload"})]}),a.jsxs("div",{className:`method-card ${l==="text"?"selected":""}`,onClick:()=>i("text"),children:[a.jsx("div",{className:"method-icon",children:a.jsx(Er,{size:32})}),a.jsx("h3",{className:"method-title",children:"Tell Us About Yourself"}),a.jsx("p",{className:"method-description",children:"I'll describe my experience in my own words"})]})]}),l&&a.jsxs("button",{className:"btn btn-primary btn-large",onClick:()=>n(2),children:["Continue",a.jsx(Be,{size:18})]})]}),r===2&&l==="upload"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"onboarding-header",children:[a.jsx("h1",{className:"onboarding-title",children:"Upload Your CV"}),a.jsx("p",{className:"onboarding-subtitle",children:"We'll extract your skills and experience automatically"})]}),a.jsxs("div",{className:"upload-area",children:[a.jsx("input",{type:"file",id:"cv-upload",accept:".pdf",onChange:g,className:"file-input"}),a.jsxs("label",{htmlFor:"cv-upload",className:"upload-label",children:[a.jsx(nn,{size:48}),a.jsx("p",{className:"upload-text",children:s?s.name:"Click to upload or drag and drop"}),a.jsx("p",{className:"upload-hint",children:"PDF files only (max 5MB)"})]}),s&&a.jsxs("div",{className:"file-success",children:[a.jsx(zi,{size:16}),a.jsx("span",{children:"File selected successfully"})]})]}),a.jsxs("div",{className:"onboarding-actions",children:[a.jsx("button",{className:"btn btn-secondary",onClick:()=>n(1),children:"Back"}),a.jsxs("button",{className:"btn btn-primary",onClick:b,disabled:!s||m,children:[m?"Processing...":"Generate Profile",a.jsx(Be,{size:18})]})]})]}),r===2&&l==="text"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"onboarding-header",children:[a.jsx("h1",{className:"onboarding-title",children:"Tell Us About Yourself"}),a.jsx("p",{className:"onboarding-subtitle",children:"What do you do, what tools do you use, and how do you usually get paid?"})]}),a.jsxs("div",{className:"text-input-area",children:[a.jsx("textarea",{className:"text-area",placeholder:"Example: I've been working in construction for 5 years. I'm skilled in operating forklifts, using power tools, and reading blueprints. I usually work on contract basis and get paid per project. I'm looking for more stable work but open to gigs on weekends...",value:c,onChange:x=>d(x.target.value),rows:8}),a.jsxs("div",{className:"char-count",children:[c.length," characters"]})]}),a.jsxs("div",{className:"onboarding-actions",children:[a.jsx("button",{className:"btn btn-secondary",onClick:()=>n(1),children:"Back"}),a.jsxs("button",{className:"btn btn-primary",onClick:b,disabled:!c.trim()||m,children:[m?"Processing...":"Generate Profile",a.jsx(Be,{size:18})]})]})]})]}),a.jsx("style",{children:`
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
      `})]})},sg=({profile:e,onUpdateProfile:t})=>{const[r,n]=w.useState(!1),[l,i]=w.useState(""),[s,o]=w.useState(null),[c,d]=w.useState(""),[m,p]=w.useState(!1),g=v=>{const j=v.target.files[0];j&&j.type==="application/pdf"&&o(j)},b=()=>{p(!0),setTimeout(()=>{t({method:l,file:s,rawText:c}),p(!1),n(!1),o(null),d(""),i("")},1500)};if(!e)return a.jsx("div",{className:"profile-skills-container empty-state",children:a.jsxs("div",{className:"empty-content",children:[a.jsx(Xo,{size:48}),a.jsx("h3",{children:"No Profile Data"}),a.jsx("p",{children:"Complete the onboarding to see your profile and skills"})]})});const x=e;return a.jsxs("div",{className:"profile-skills-container",children:[a.jsxs("div",{className:"profile-header",children:[a.jsx("div",{className:"profile-avatar",children:a.jsx("span",{className:"avatar-initials",children:x.name.split(" ").map(v=>v[0]).join("")})}),a.jsxs("div",{className:"profile-info",children:[a.jsx("h2",{className:"profile-name",children:x.name}),a.jsx("p",{className:"profile-experience",children:x.experience}),x.lastUpdated&&a.jsxs("p",{className:"profile-updated",children:["Last updated: ",new Date(x.lastUpdated).toLocaleDateString()]})]}),a.jsxs("button",{className:"update-profile-btn",onClick:()=>n(!0),title:"Update Profile",children:[a.jsx(nn,{size:18}),a.jsx("span",{children:"Update CV"})]})]}),a.jsxs("div",{className:"profile-highlights",children:[a.jsxs("div",{className:"highlight-card",children:[a.jsx("div",{className:"highlight-icon",children:a.jsx(Ih,{size:24})}),a.jsxs("div",{className:"highlight-content",children:[a.jsx("p",{className:"highlight-label",children:"Dominant Sector"}),a.jsx("h3",{className:"highlight-value",children:x.dominantSector})]})]}),a.jsxs("div",{className:"highlight-card",children:[a.jsx("div",{className:"highlight-icon",children:a.jsx(je,{size:24})}),a.jsxs("div",{className:"highlight-content",children:[a.jsx("p",{className:"highlight-label",children:"Work Style"}),a.jsx("h3",{className:"highlight-value",children:x.workStyle})]})]}),a.jsxs("div",{className:"highlight-card",children:[a.jsx("div",{className:"highlight-icon",children:a.jsx(Oh,{size:24})}),a.jsxs("div",{className:"highlight-content",children:[a.jsx("p",{className:"highlight-label",children:"Payment Preference"}),a.jsx("h3",{className:"highlight-value",children:x.preferredPayment})]})]})]}),a.jsxs("div",{className:"skills-section",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(Xo,{size:20}),"Your Discovered Skills"]}),a.jsx("div",{className:"skills-grid",children:x.skills.map((v,j)=>a.jsxs("div",{className:"skill-item",children:[a.jsxs("div",{className:"skill-header",children:[a.jsx("span",{className:"skill-name",children:v.name}),a.jsxs("span",{className:"skill-percentage",children:[v.level,"%"]})]}),a.jsx("div",{className:"skill-bar",children:a.jsx("div",{className:"skill-progress",style:{width:`${v.level}%`}})})]},j))})]}),a.jsx("style",{children:`
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
      `}),r&&a.jsx("div",{className:"update-modal-overlay",onClick:v=>v.target===v.currentTarget&&n(!1),children:a.jsxs("div",{className:"update-modal",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{className:"modal-title",children:"Update Your Profile"}),a.jsx("button",{className:"modal-close-btn",onClick:()=>n(!1),children:a.jsx(Rn,{size:20})})]}),l?a.jsxs(a.Fragment,{children:[l==="upload"&&a.jsxs("div",{className:"update-upload-area",children:[a.jsx("input",{type:"file",id:"update-cv-upload",accept:".pdf",onChange:g,className:"update-file-input"}),a.jsxs("label",{htmlFor:"update-cv-upload",className:"update-upload-label",children:[a.jsx(nn,{size:32}),a.jsx("p",{style:{margin:"0.5rem 0 0.25rem",color:"var(--text-primary)",fontWeight:"500"},children:s?s.name:"Click to upload new CV"}),a.jsx("p",{style:{margin:0,color:"var(--text-muted)",fontSize:"0.8rem"},children:"PDF files only (max 5MB)"})]})]}),l==="text"&&a.jsx("div",{className:"update-upload-area",children:a.jsx("textarea",{className:"update-text-area",placeholder:"Add new skills, experience, or update your current role description...",value:c,onChange:v=>d(v.target.value),rows:5})}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"modal-btn-cancel",onClick:()=>{i(""),o(null),d("")},children:"Back"}),a.jsx("button",{className:"modal-btn-submit",onClick:b,disabled:m||l==="upload"&&!s||l==="text"&&!c.trim(),children:m?"Updating...":"Update Profile"})]})]}):a.jsxs("div",{className:"update-method-selection",children:[a.jsxs("div",{className:`update-method-card ${l==="upload"?"selected":""}`,onClick:()=>i("upload"),children:[a.jsx("div",{className:"update-method-icon",children:a.jsx(nn,{size:24})}),a.jsx("h4",{className:"update-method-title",children:"Upload New CV"}),a.jsx("p",{className:"update-method-description",children:"Replace your current CV with a new PDF"})]}),a.jsxs("div",{className:`update-method-card ${l==="text"?"selected":""}`,onClick:()=>i("text"),children:[a.jsx("div",{className:"update-method-icon",children:a.jsx(Er,{size:24})}),a.jsx("h4",{className:"update-method-title",children:"Update Experience"}),a.jsx("p",{className:"update-method-description",children:"Add new skills and experience details"})]})]})]})})]})},og=({userEmail:e,matchedJobs:t,sideHustles:r,careerPath:n,applications:l,onApplicationsChange:i,onRefreshMatches:s,hasProfile:o})=>{var h;const[c,d]=w.useState(null),[m,p]=w.useState(()=>$u(e)),[g,b]=w.useState(null),x=new Set(l.map(y=>y.jobId)),v=y=>{if(!e||x.has(y.id))return;const k=ng(e,y);i(k)},j=y=>{if(!e)return;const k=ag(e,y);p(k),d(null)},f=new Set(m.map(y=>y.id));return o?(t==null?void 0:t.length)>0||(r==null?void 0:r.length)>0||(n==null?void 0:n.length)>0?a.jsxs("div",{className:"job-matcher-container",children:[l.length>0&&a.jsxs("div",{className:"matcher-section full-width applications-section",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(Za,{size:20}),"Your Applications (",l.length,")"]}),a.jsx("div",{className:"applications-list",children:l.map(y=>a.jsxs("div",{className:"application-item",children:[a.jsxs("div",{className:"application-info",children:[a.jsx("span",{className:"application-title",children:y.title}),a.jsx("span",{className:"application-company",children:y.company})]}),a.jsxs("div",{className:"application-meta",children:[a.jsx("span",{className:"application-status",children:y.status}),a.jsx("span",{className:"application-date",children:new Date(y.appliedAt).toLocaleDateString()})]})]},y.jobId))})]}),(t==null?void 0:t.length)>0&&a.jsxs("div",{className:"matcher-section",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(je,{size:20}),"Matched Jobs For You"]}),a.jsx("div",{className:"jobs-list",children:t.map(y=>{var C;const k=x.has(y.id),S=g===y.id;return a.jsxs("div",{className:`job-card ${k?"applied":""}`,children:[a.jsxs("div",{className:"job-header",children:[a.jsxs("div",{className:"job-match-badge",children:[a.jsxs("span",{className:"match-percentage",children:[y.matchPercentage,"%"]}),a.jsx("span",{className:"match-label",children:"Match"})]}),a.jsx("span",{className:"job-type",children:y.type})]}),a.jsx("h4",{className:"job-title",children:y.title}),a.jsx("p",{className:"job-company",children:y.company}),a.jsxs("div",{className:"job-details",children:[a.jsxs("span",{className:"job-detail",children:[a.jsx(Ps,{size:14}),y.location]}),a.jsxs("span",{className:"job-detail",children:[a.jsx(Es,{size:14}),y.salary]})]}),((C=y.missingSkills)==null?void 0:C.length)>0&&a.jsxs("div",{className:"missing-skills",children:[a.jsx(ce,{size:14,className:"alert-icon"}),a.jsxs("span",{className:"missing-text",children:["Skills to develop: ",y.missingSkills.join(", ")]})]}),S&&y.description&&a.jsx("p",{className:"job-description",children:y.description}),a.jsxs("div",{className:"job-actions",children:[a.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>b(S?null:y.id),children:S?"Hide Details":"View Details"}),a.jsx("button",{type:"button",className:`btn btn-sm ${k?"btn-applied":"btn-primary"}`,onClick:()=>v(y),disabled:k,children:k?a.jsxs(a.Fragment,{children:[a.jsx(zi,{size:14}),"Applied"]}):"Apply Now"})]})]},y.id)})})]}),(r==null?void 0:r.length)>0&&a.jsxs("div",{className:"matcher-section",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(DollarSign,{size:20}),"Gig Opportunities"]}),a.jsx("div",{className:"hustles-list",children:r.map(y=>{var S;const k=f.has(y.id);return a.jsxs("div",{className:`hustle-card ${k?"saved":""}`,children:[a.jsxs("div",{className:"hustle-header",children:[a.jsx("h4",{className:"hustle-title",children:y.title}),a.jsx("span",{className:"hustle-earnings",children:y.earnings})]}),a.jsxs("p",{className:"hustle-platform",children:["via ",y.platform]}),a.jsx("div",{className:"hustle-details",children:a.jsxs("span",{className:"hustle-detail",children:[a.jsx(Eh,{size:14}),y.timeCommitment]})}),a.jsx("div",{className:"hustle-skills",children:(S=y.skillsUsed)==null?void 0:S.map((C,P)=>a.jsx("span",{className:"skill-tag",children:C},P))}),a.jsx("button",{type:"button",className:`btn btn-sm ${k?"btn-applied":"btn-secondary"}`,onClick:()=>d(y),children:k?a.jsxs(a.Fragment,{children:[a.jsx(zi,{size:14}),"Saved"]}):"Learn More"})]},y.id)})})]}),(n==null?void 0:n.length)>0&&a.jsxs("div",{className:"matcher-section full-width",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(el,{size:20}),"Your 5-Year Career Path"]}),a.jsx("div",{className:"career-timeline",children:n.map((y,k)=>a.jsxs("div",{className:"timeline-item",children:[a.jsxs("div",{className:"timeline-marker",children:[a.jsx("span",{className:"timeline-icon",children:y.icon}),k<n.length-1&&a.jsx("div",{className:"timeline-line"})]}),a.jsxs("div",{className:"timeline-content",children:[a.jsx("span",{className:"timeline-year",children:y.year}),a.jsx("h4",{className:"timeline-title",children:y.title}),a.jsx("span",{className:"timeline-salary",children:y.salary})]})]},k))})]}),c&&a.jsx("div",{className:"hustle-modal-overlay",onClick:y=>y.target===y.currentTarget&&d(null),children:a.jsxs("div",{className:"hustle-modal",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:c.title}),a.jsx("button",{type:"button",className:"modal-close",onClick:()=>d(null),children:a.jsx(Rn,{size:20})})]}),a.jsxs("div",{className:"modal-body",children:[a.jsxs("div",{className:"modal-detail-row",children:[a.jsx("span",{className:"modal-label",children:"Platform"}),a.jsx("span",{children:c.platform})]}),a.jsxs("div",{className:"modal-detail-row",children:[a.jsx("span",{className:"modal-label",children:"Earnings"}),a.jsx("span",{className:"earnings-highlight",children:c.earnings})]}),a.jsxs("div",{className:"modal-detail-row",children:[a.jsx("span",{className:"modal-label",children:"Time Commitment"}),a.jsx("span",{children:c.timeCommitment})]}),a.jsxs("div",{className:"modal-detail-row",children:[a.jsx("span",{className:"modal-label",children:"Skills Used"}),a.jsx("div",{className:"hustle-skills",children:(h=c.skillsUsed)==null?void 0:h.map((y,k)=>a.jsx("span",{className:"skill-tag",children:y},k))})]}),c.description&&a.jsx("p",{className:"modal-description",children:c.description})]}),a.jsxs("div",{className:"modal-actions",children:[!f.has(c.id)&&a.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>j(c),children:[a.jsx(Ph,{size:14}),"Save Interest"]}),a.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>d(null),children:"Close"})]})]})}),a.jsx("style",{children:`
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
      `})]}):a.jsx("div",{className:"job-matcher-container empty-state",children:a.jsxs("div",{className:"empty-content",children:[a.jsx(je,{size:48}),a.jsx("h3",{children:"No Job Matches Yet"}),a.jsx("p",{children:"No platform jobs found to match against. Ask an employer to post jobs, then refresh."}),a.jsx("button",{type:"button",className:"btn btn-primary btn-sm refresh-empty-btn",onClick:s,children:"Refresh Matches"})]})}):a.jsx("div",{className:"job-matcher-container empty-state",children:a.jsxs("div",{className:"empty-content",children:[a.jsx(je,{size:48}),a.jsx("h3",{children:"No Profile Yet"}),a.jsx("p",{children:"Complete onboarding to see personalized job matches and opportunities"})]})})},cg=()=>{var ge;const{user:e}=Pe(),[t,r]=w.useState(!1),[n,l]=w.useState(!1),[i,s]=w.useState(!0),[o,c]=w.useState(null),[d,m]=w.useState([]),[p,g]=w.useState([]),[b,x]=w.useState([]),[v,j]=w.useState([]),[f,u]=w.useState(!1),[h,y]=w.useState(null),k=F=>{y(F),setTimeout(()=>y(null),3e3)},S=w.useCallback(F=>{const ne=rg(F);return m(ne.matchedJobs),g(ne.sideHustles),x(ne.careerPath),tg(e==null?void 0:e.email,{profile:F,...ne}),ne},[e==null?void 0:e.email]),C=w.useCallback(async()=>{if(e!=null&&e.email){s(!0);try{const F=localStorage.getItem(`profile_${e.email}`),ne=localStorage.getItem(`jobs_${e.email}`),Xe=localStorage.getItem(`hustles_${e.email}`),ct=localStorage.getItem(`careerPath_${e.email}`);let z=F?JSON.parse(F):null;c(z),j(_s(e.email)),ne&&m(JSON.parse(ne)),Xe&&g(JSON.parse(Xe)),ct&&x(JSON.parse(ct)),z&&!ne&&S(z)}catch(F){console.error("Error loading user data:",F)}finally{s(!1)}}},[e==null?void 0:e.email,S]);w.useEffect(()=>{const F=localStorage.getItem(`onboarding_${e==null?void 0:e.email}`);r(!!F),l(!F),F?C():s(!1)},[e,C]);const P=F=>{localStorage.setItem(`onboarding_${e==null?void 0:e.email}`,"completed");const ne=S(F);c(F),r(!0),l(!1),k(`Profile created! Found ${ne.matchedJobs.length} job matches.`)},A=async F=>{try{const ne=`${(e==null?void 0:e.name)||""} ${(e==null?void 0:e.surname)||""}`.trim()||"Candidate",Xe=Gh(o,F,ne),ct=S(Xe);c(Xe),k(`Profile updated! ${ct.matchedJobs.length} jobs re-matched.`)}catch(ne){console.error("Error updating profile:",ne)}},R=()=>{o&&(u(!0),setTimeout(()=>{const F=S(o);k(`Matches refreshed! ${F.matchedJobs.length} jobs found.`),u(!1)},800))},Z=F=>{j(F)},Oe=lg(e==null?void 0:e.email);return i?a.jsxs("div",{className:"dashboard-container",children:[a.jsxs("div",{className:"loading-state",children:[a.jsx("div",{className:"spinner"}),a.jsx("p",{children:"Loading your dashboard..."})]}),a.jsx("style",{children:`
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
        `})]}):a.jsxs("div",{className:"dashboard-container",children:[h&&a.jsx("div",{className:"toast-notification",children:h}),n?a.jsx(ig,{onComplete:P}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"dashboard-header",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"dashboard-title",children:["Welcome, ",e==null?void 0:e.name,"!"]}),a.jsx("p",{className:"dashboard-subtitle",children:"Your personalized career dashboard"})]}),a.jsxs("button",{type:"button",className:"refresh-btn",onClick:R,disabled:f,children:[a.jsx(Mh,{size:16,className:f?"spinning":""}),f?"Refreshing...":"Refresh Matches"]})]}),a.jsxs("div",{className:"stats-row",children:[a.jsxs("div",{className:"mini-stat",children:[a.jsx(je,{size:18}),a.jsx("span",{className:"mini-stat-value",children:d.length}),a.jsx("span",{className:"mini-stat-label",children:"Job Matches"})]}),a.jsxs("div",{className:"mini-stat",children:[a.jsx(Za,{size:18}),a.jsx("span",{className:"mini-stat-value",children:Oe.total}),a.jsx("span",{className:"mini-stat-label",children:"Applications"})]}),a.jsxs("div",{className:"mini-stat",children:[a.jsx("span",{className:"mini-stat-value",children:((ge=o==null?void 0:o.skills)==null?void 0:ge.length)||0}),a.jsx("span",{className:"mini-stat-label",children:"Skills Discovered"})]}),a.jsxs("div",{className:"mini-stat",children:[a.jsx("span",{className:"mini-stat-value",children:p.length}),a.jsx("span",{className:"mini-stat-label",children:"Gig Opportunities"})]})]}),a.jsxs("div",{className:"dashboard-content",children:[a.jsx("div",{className:"main-section",children:a.jsx(sg,{profile:o,onUpdateProfile:A})}),a.jsx("div",{className:"main-section",children:a.jsx(og,{userEmail:e==null?void 0:e.email,matchedJobs:d,sideHustles:p,careerPath:b,applications:v,onApplicationsChange:Z,onRefreshMatches:R,hasProfile:!!o})})]})]}),a.jsx("style",{children:`
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
      `})]})},Rl=[{name:"Thabo Mokoena",job:"Senior Frontend Engineer",time:"2 hours ago",badge:"New"},{name:"Lerato Ndlovu",job:"Lead UX Designer",time:"5 hours ago",badge:null},{name:"Sipho Dlamini",job:"Full Stack Developer",time:"1 day ago",badge:"Hot"},{name:"Nomsa Khumalo",job:"Digital Marketing Specialist",time:"1 day ago",badge:null},{name:"James van der Merwe",job:"DevOps Engineer",time:"2 days ago",badge:null}],dg=()=>{const{user:e}=Pe(),t=Zt(),n=w.useMemo(()=>tl(),[]).filter(l=>l.status==="Active"||!l.status);return a.jsxs("div",{className:"dashboard-container",children:[a.jsxs("div",{className:"dashboard-header",children:[a.jsxs("h1",{className:"dashboard-title",children:["Welcome, ",e==null?void 0:e.name,"!"]}),a.jsx("p",{className:"dashboard-subtitle",children:"Manage your job postings and find top talent across South Africa"})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(je,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:n.length}),a.jsx("p",{className:"stat-label",children:"Active Jobs"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(wr,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:Rl.length*12}),a.jsx("p",{className:"stat-label",children:"Total Applicants"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(Er,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:Rl.length}),a.jsx("p",{className:"stat-label",children:"New Applications"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(el,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:"92%"}),a.jsx("p",{className:"stat-label",children:"Response Rate"})]})]})]}),a.jsxs("div",{className:"dashboard-sections",children:[a.jsxs("div",{className:"dashboard-section",children:[a.jsx("h2",{className:"section-title",children:"Quick Actions"}),a.jsxs("div",{className:"action-grid",children:[a.jsxs("button",{type:"button",className:"action-card",onClick:()=>t("/create-job"),children:[a.jsx(Rs,{size:24}),a.jsx("span",{children:"Post New Job"}),a.jsx(Be,{size:16,className:"action-arrow"})]}),a.jsxs("button",{type:"button",className:"action-card",onClick:()=>t("/view-jobs"),children:[a.jsx(je,{size:24}),a.jsx("span",{children:"Manage Jobs"}),a.jsx(Be,{size:16,className:"action-arrow"})]}),a.jsxs("button",{type:"button",className:"action-card",onClick:()=>t("/view-jobs"),children:[a.jsx(wr,{size:24}),a.jsx("span",{children:"View Applicants"}),a.jsx(Be,{size:16,className:"action-arrow"})]}),a.jsxs("button",{type:"button",className:"action-card",onClick:()=>t("/create-job"),children:[a.jsx(Er,{size:24}),a.jsx("span",{children:"Job Templates"}),a.jsx(Be,{size:16,className:"action-arrow"})]})]})]}),a.jsxs("div",{className:"dashboard-section",children:[a.jsx("h2",{className:"section-title",children:"Recent Applications"}),a.jsx("div",{className:"applicant-list",children:Rl.map(l=>a.jsxs("div",{className:"applicant-card",children:[a.jsxs("div",{className:"applicant-header",children:[a.jsx("h3",{className:"applicant-name",children:l.name}),l.badge&&a.jsx("span",{className:"applicant-badge",children:l.badge})]}),a.jsxs("p",{className:"applicant-position",children:["Applied for: ",l.job]}),a.jsx("p",{className:"applicant-time",children:l.time}),a.jsxs("div",{className:"applicant-actions",children:[a.jsx("button",{type:"button",className:"btn btn-primary btn-sm",children:"View Profile"}),a.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",children:"Message"})]})]},l.name))})]})]}),a.jsx("div",{className:"dashboard-sections",children:a.jsxs("div",{className:"dashboard-section full-width",children:[a.jsxs("h2",{className:"section-title",children:["Active Job Listings (",n.length,")"]}),a.jsx("div",{className:"jobs-grid",children:n.map(l=>a.jsxs("div",{className:"job-listing-card",children:[a.jsxs("div",{className:"job-listing-header",children:[a.jsx("h3",{className:"job-listing-title",children:l.title}),a.jsx("span",{className:"job-listing-type",children:l.type})]}),a.jsx("p",{className:"job-listing-company",children:l.company}),a.jsxs("div",{className:"job-listing-meta",children:[a.jsxs("span",{children:[a.jsx(Ps,{size:14})," ",l.location]}),a.jsxs("span",{children:[a.jsx(Es,{size:14})," ",l.salary]})]}),a.jsx("p",{className:"job-listing-desc",children:l.description})]},l.id))})]})}),a.jsx("style",{children:`
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

        .dashboard-subtitle { color: var(--text-secondary); font-size: 1rem; }

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

        .stat-label { color: var(--text-secondary); font-size: 0.875rem; margin: 0; }

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

        .action-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .action-card svg:first-child { color: var(--color-primary); }
        .action-arrow { margin-left: auto; color: var(--text-muted); }

        .applicant-list { display: flex; flex-direction: column; gap: 1rem; max-height: 420px; overflow-y: auto; }

        .applicant-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .applicant-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .applicant-name { font-size: 1rem; font-weight: 600; margin: 0; color: var(--text-primary); }

        .applicant-badge {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .applicant-position { color: var(--text-secondary); font-size: 0.875rem; margin: 0 0 0.25rem; }
        .applicant-time { color: var(--text-muted); font-size: 0.8rem; margin: 0 0 0.75rem; }
        .applicant-actions { display: flex; gap: 0.5rem; }

        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
          max-height: 520px;
          overflow-y: auto;
        }

        .job-listing-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .job-listing-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .job-listing-title { font-size: 1rem; font-weight: 600; margin: 0; color: var(--text-primary); }

        .job-listing-type {
          background: rgba(99, 102, 241, 0.15);
          color: var(--color-primary);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.7rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .job-listing-company { color: var(--text-secondary); font-size: 0.875rem; margin: 0 0 0.75rem; }

        .job-listing-meta {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          margin-bottom: 0.75rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .job-listing-meta span {
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .job-listing-meta svg { color: var(--color-primary); }

        .job-listing-desc {
          color: var(--text-secondary);
          font-size: 0.8rem;
          line-height: 1.4;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .btn-sm { padding: 0.5rem 1rem; font-size: 0.875rem; }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
        }

        .btn-secondary:hover { background: rgba(255, 255, 255, 0.15); }
      `})]})};function tc(){const e=JSON.parse(localStorage.getItem("users")||"[]"),t=tl(),r=e.filter(m=>m.role==="candidate"),n=e.filter(m=>m.role==="employer"),l=e.filter(m=>m.role==="admin");let i=0,s=0;e.forEach(m=>{localStorage.getItem(`onboarding_${m.email}`)&&i++,localStorage.getItem(`profile_${m.email}`)&&s++});const o=t.filter(m=>m.status==="Active"||!m.status),c=e.map(({name:m,surname:p,email:g,role:b})=>({name:m,surname:p,email:g,role:b,hasProfile:!!localStorage.getItem(`profile_${g}`),hasOnboarding:!!localStorage.getItem(`onboarding_${g}`)})),d=[...c.map(m=>({id:`user-${m.email}`,type:"user",text:`User registered: ${m.name} ${m.surname} (${m.role})`,time:null})),...t.map(m=>({id:`job-${m.id}`,type:"job",text:`Job posted: ${m.title} at ${m.company}`,time:m.createdAt||null}))].slice(0,8);return{users:c,jobs:t,recentActivity:d,stats:{totalUsers:e.length,candidates:r.length,employers:n.length,admins:l.length,activeJobs:o.length,totalJobs:t.length,onboardedCandidates:i,profilesCreated:s}}}function ug(e){const r=JSON.parse(localStorage.getItem("users")||"[]").filter(n=>n.email.toLowerCase()!==e.toLowerCase()||n.role==="admin");localStorage.setItem("users",JSON.stringify(r))}function mg(e){const t=JSON.parse(localStorage.getItem("jobs")||"[]");localStorage.setItem("jobs",JSON.stringify(t.filter(r=>r.id!==e)))}const rc=[{id:"users",label:"Manage Users",icon:wr},{id:"jobs",label:"Review Jobs",icon:je},{id:"security",label:"Security Settings",icon:Mu},{id:"analytics",label:"View Analytics",icon:Eu}],pg=e=>{switch(e){case"admin":return"role-badge admin";case"employer":return"role-badge employer";default:return"role-badge candidate"}},fg=()=>{const{user:e}=Pe(),[t,r]=w.useState(()=>tc()),[n,l]=w.useState(null),i=w.useCallback(()=>{r(tc())},[]),s=j=>{l(f=>f===j?null:j)},o=j=>{window.confirm(`Remove user ${j}? This cannot be undone.`)&&(ug(j),i())},c=j=>{window.confirm("Remove this job listing?")&&(mg(j),i())},{stats:d,users:m,jobs:p,recentActivity:g}=t,b=()=>{switch(n){case"users":return a.jsxs("div",{className:"panel-content",children:[a.jsxs("div",{className:"panel-header",children:[a.jsx("h3",{children:"Registered Users"}),a.jsxs("span",{className:"panel-count",children:[m.length," total"]})]}),m.length===0?a.jsx("p",{className:"panel-empty",children:"No users registered yet."}):a.jsx("div",{className:"data-table-wrapper",children:a.jsxs("table",{className:"data-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Name"}),a.jsx("th",{children:"Email"}),a.jsx("th",{children:"Role"}),a.jsx("th",{children:"Profile"}),a.jsx("th",{})]})}),a.jsx("tbody",{children:m.map(j=>a.jsxs("tr",{children:[a.jsxs("td",{children:[j.name," ",j.surname]}),a.jsx("td",{children:j.email}),a.jsx("td",{children:a.jsx("span",{className:pg(j.role),children:j.role})}),a.jsx("td",{children:j.hasProfile?"Complete":j.hasOnboarding?"Onboarded":"—"}),a.jsx("td",{children:j.role!=="admin"&&a.jsx("button",{type:"button",className:"icon-btn danger",onClick:()=>o(j.email),title:"Remove user",children:a.jsx(Ei,{size:16})})})]},j.email))})]})})]});case"jobs":return a.jsxs("div",{className:"panel-content",children:[a.jsxs("div",{className:"panel-header",children:[a.jsx("h3",{children:"Job Listings"}),a.jsxs("span",{className:"panel-count",children:[p.length," total"]})]}),p.length===0?a.jsx("p",{className:"panel-empty",children:"No jobs posted yet."}):a.jsx("div",{className:"data-table-wrapper",children:a.jsxs("table",{className:"data-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Title"}),a.jsx("th",{children:"Company"}),a.jsx("th",{children:"Location"}),a.jsx("th",{children:"Type"}),a.jsx("th",{children:"Salary"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Posted"}),a.jsx("th",{})]})}),a.jsx("tbody",{children:p.map(j=>a.jsxs("tr",{children:[a.jsx("td",{children:j.title}),a.jsx("td",{children:j.company}),a.jsx("td",{children:j.location}),a.jsx("td",{children:j.type}),a.jsx("td",{children:j.salary||"—"}),a.jsx("td",{children:a.jsx("span",{className:"status-badge",children:j.status||"Active"})}),a.jsx("td",{children:j.createdAt||"—"}),a.jsx("td",{children:a.jsx("button",{type:"button",className:"icon-btn danger",onClick:()=>c(j.id),title:"Remove job",children:a.jsx(Ei,{size:16})})})]},j.id))})]})})]});case"security":return a.jsxs("div",{className:"panel-content",children:[a.jsx("div",{className:"panel-header",children:a.jsx("h3",{children:"Security Overview"})}),a.jsxs("div",{className:"security-grid",children:[a.jsxs("div",{className:"security-card",children:[a.jsx(Ta,{size:20}),a.jsxs("div",{children:[a.jsx("p",{className:"security-label",children:"Admin Account"}),a.jsx("p",{className:"security-value",children:e==null?void 0:e.email})]})]}),a.jsxs("div",{className:"security-card",children:[a.jsx(Mu,{size:20}),a.jsxs("div",{children:[a.jsx("p",{className:"security-label",children:"Admin Accounts"}),a.jsxs("p",{className:"security-value",children:[d.admins," protected"]})]})]}),a.jsxs("div",{className:"security-card",children:[a.jsx(wr,{size:20}),a.jsxs("div",{children:[a.jsx("p",{className:"security-label",children:"Total Accounts"}),a.jsxs("p",{className:"security-value",children:[d.totalUsers," registered"]})]})]}),a.jsxs("div",{className:"security-card",children:[a.jsx(Iu,{size:20}),a.jsxs("div",{children:[a.jsx("p",{className:"security-label",children:"Role Distribution"}),a.jsxs("p",{className:"security-value",children:[d.candidates," candidates · ",d.employers," employers"]})]})]})]}),a.jsxs("div",{className:"security-notes",children:[a.jsx("h4",{children:"Platform Policies"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Admin accounts cannot be created via registration."}),a.jsx("li",{children:"Admin accounts cannot be removed from the user list."}),a.jsx("li",{children:"User passwords are stored locally for this demo only."}),a.jsx("li",{children:"Session is managed via browser localStorage."})]})]})]});case"analytics":return a.jsxs("div",{className:"panel-content",children:[a.jsx("div",{className:"panel-header",children:a.jsx("h3",{children:"Platform Analytics"})}),a.jsxs("div",{className:"analytics-grid",children:[a.jsxs("div",{className:"analytics-card",children:[a.jsx("p",{className:"analytics-label",children:"Candidates"}),a.jsx("p",{className:"analytics-value",children:d.candidates}),a.jsxs("p",{className:"analytics-meta",children:[d.onboardedCandidates," onboarded"]})]}),a.jsxs("div",{className:"analytics-card",children:[a.jsx("p",{className:"analytics-label",children:"Employers"}),a.jsx("p",{className:"analytics-value",children:d.employers}),a.jsxs("p",{className:"analytics-meta",children:[d.totalJobs," jobs posted"]})]}),a.jsxs("div",{className:"analytics-card",children:[a.jsx("p",{className:"analytics-label",children:"Active Jobs"}),a.jsx("p",{className:"analytics-value",children:d.activeJobs}),a.jsxs("p",{className:"analytics-meta",children:["of ",d.totalJobs," total"]})]}),a.jsxs("div",{className:"analytics-card",children:[a.jsx("p",{className:"analytics-label",children:"Profiles Created"}),a.jsx("p",{className:"analytics-value",children:d.profilesCreated}),a.jsx("p",{className:"analytics-meta",children:"across all users"})]})]}),a.jsxs("div",{className:"analytics-breakdown",children:[a.jsx("h4",{children:"User Breakdown"}),a.jsxs("div",{className:"breakdown-bars",children:[a.jsxs("div",{className:"breakdown-row",children:[a.jsx("span",{children:"Candidates"}),a.jsx("div",{className:"breakdown-bar-track",children:a.jsx("div",{className:"breakdown-bar fill-candidate",style:{width:d.totalUsers?`${d.candidates/d.totalUsers*100}%`:"0%"}})}),a.jsx("span",{className:"breakdown-count",children:d.candidates})]}),a.jsxs("div",{className:"breakdown-row",children:[a.jsx("span",{children:"Employers"}),a.jsx("div",{className:"breakdown-bar-track",children:a.jsx("div",{className:"breakdown-bar fill-employer",style:{width:d.totalUsers?`${d.employers/d.totalUsers*100}%`:"0%"}})}),a.jsx("span",{className:"breakdown-count",children:d.employers})]}),a.jsxs("div",{className:"breakdown-row",children:[a.jsx("span",{children:"Admins"}),a.jsx("div",{className:"breakdown-bar-track",children:a.jsx("div",{className:"breakdown-bar fill-admin",style:{width:d.totalUsers?`${d.admins/d.totalUsers*100}%`:"0%"}})}),a.jsx("span",{className:"breakdown-count",children:d.admins})]})]})]})]});default:return null}},x=rc.find(j=>j.id===n),v=x==null?void 0:x.icon;return a.jsxs("div",{className:"dashboard-container",children:[a.jsxs("div",{className:"dashboard-header",children:[a.jsx("h1",{className:"dashboard-title",children:"Admin Dashboard"}),a.jsxs("p",{className:"dashboard-subtitle",children:["Welcome, ",e==null?void 0:e.name,"! Monitor platform insights and user activity"]})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(wr,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:d.totalUsers}),a.jsx("p",{className:"stat-label",children:"Total Users"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(je,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:d.activeJobs}),a.jsx("p",{className:"stat-label",children:"Active Jobs"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(Eu,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:d.profilesCreated}),a.jsx("p",{className:"stat-label",children:"Profiles Created"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(el,{size:32})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{className:"stat-value",children:d.onboardedCandidates}),a.jsx("p",{className:"stat-label",children:"Onboarded Candidates"})]})]})]}),a.jsxs("div",{className:"dashboard-sections",children:[a.jsxs("div",{className:"dashboard-section",children:[a.jsx("h2",{className:"section-title",children:"Platform Overview"}),a.jsxs("div",{className:"overview-grid",children:[a.jsxs("div",{className:"overview-item",children:[a.jsx("div",{className:"overview-label",children:"Candidates"}),a.jsx("div",{className:"overview-value",children:d.candidates})]}),a.jsxs("div",{className:"overview-item",children:[a.jsx("div",{className:"overview-label",children:"Employers"}),a.jsx("div",{className:"overview-value",children:d.employers})]}),a.jsxs("div",{className:"overview-item",children:[a.jsx("div",{className:"overview-label",children:"Jobs Posted"}),a.jsx("div",{className:"overview-value",children:d.totalJobs})]}),a.jsxs("div",{className:"overview-item",children:[a.jsx("div",{className:"overview-label",children:"Admins"}),a.jsx("div",{className:"overview-value",children:d.admins})]})]})]}),a.jsxs("div",{className:"dashboard-section",children:[a.jsx("h2",{className:"section-title",children:"Quick Actions"}),a.jsx("div",{className:"action-grid",children:rc.map(({id:j,label:f,icon:u})=>a.jsxs("button",{type:"button",className:`action-card ${n===j?"active":""}`,onClick:()=>s(j),children:[a.jsx(u,{size:24}),a.jsx("span",{children:f}),a.jsx(Be,{size:16,className:"action-arrow"})]},j))})]})]}),n&&a.jsx("div",{className:"dashboard-sections",children:a.jsxs("div",{className:"dashboard-section full-width data-panel",children:[a.jsxs("div",{className:"data-panel-toolbar",children:[a.jsxs("h2",{className:"section-title panel-title",children:[v&&a.jsx(v,{size:20}),x==null?void 0:x.label]}),a.jsxs("button",{type:"button",className:"close-panel-btn",onClick:()=>l(null),children:[a.jsx(Rn,{size:18}),"Close"]})]}),b()]})}),a.jsx("div",{className:"dashboard-sections",children:a.jsxs("div",{className:"dashboard-section full-width",children:[a.jsx("h2",{className:"section-title",children:"Recent Activity"}),a.jsx("div",{className:"activity-list",children:g.length===0?a.jsx("p",{className:"panel-empty",children:"No activity recorded yet."}):g.map(j=>a.jsxs("div",{className:"activity-item",children:[a.jsx("div",{className:"activity-icon",children:j.type==="job"?a.jsx(je,{size:16}):a.jsx(wr,{size:16})}),a.jsxs("div",{className:"activity-content",children:[a.jsx("p",{className:"activity-text",children:j.text}),j.time&&a.jsx("p",{className:"activity-time",children:j.time})]})]},j.id))})]})}),a.jsx("style",{children:`
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
      `})]})},tr=({userProfile:e,onSendMessage:t,initialMessage:r})=>{const[n,l]=w.useState(!1),[i,s]=w.useState(!1),[o,c]=w.useState(r?[{id:1,type:"bot",text:r}]:[{id:1,type:"bot",text:"Hi! I'm your AI Career Coach. I can help you with job applications, salary negotiations, skill development, and career planning. What would you like to know?"}]),[d,m]=w.useState(""),[p,g]=w.useState(!1),b=w.useRef(null),x=()=>{var u;(u=b.current)==null||u.scrollIntoView({behavior:"smooth"})};w.useEffect(()=>{x()},[o,p]);const v=async()=>{if(!d.trim())return;const u={id:o.length+1,type:"user",text:d};c(y=>[...y,u]);const h=d;if(m(""),g(!0),t)try{const y=await t(h,e),k={id:o.length+2,type:"bot",text:y||"I'm processing your request. Please try again in a moment."};c(S=>[...S,k])}catch{const k={id:o.length+2,type:"bot",text:"Sorry, I encountered an error. Please try again."};c(S=>[...S,k])}else g(!1)},j=u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),v())},f=["How do I negotiate my salary?","What skills should I learn next?","How can I improve my resume?","What should I expect in interviews?"];return a.jsxs(a.Fragment,{children:[!n&&a.jsxs("button",{className:"coach-toggle",onClick:()=>l(!0),children:[a.jsx(Lu,{size:24}),a.jsx("span",{className:"toggle-label",children:"Career Coach"})]}),n&&a.jsxs("div",{className:`coach-window ${i?"minimized":""}`,children:[a.jsxs("div",{className:"coach-header",children:[a.jsxs("div",{className:"coach-info",children:[a.jsx("div",{className:"coach-avatar",children:a.jsx(Sh,{size:20})}),a.jsxs("div",{children:[a.jsx("h4",{className:"coach-name",children:"AI Career Coach"}),a.jsx("span",{className:"coach-status",children:"Online"})]})]}),a.jsxs("div",{className:"coach-controls",children:[a.jsx("button",{className:"control-btn",onClick:()=>s(!i),title:i?"Expand":"Minimize",children:i?a.jsx(_h,{size:18}):a.jsx(Lh,{size:18})}),a.jsx("button",{className:"control-btn close-btn",onClick:()=>l(!1),title:"Close",children:a.jsx(Rn,{size:18})})]})]}),!i&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"coach-messages",children:[o.map(u=>a.jsx("div",{className:`message ${u.type}`,children:a.jsx("div",{className:"message-content",children:u.text})},u.id)),p&&a.jsx("div",{className:"message bot typing",children:a.jsxs("div",{className:"typing-indicator",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})}),a.jsx("div",{ref:b})]}),o.length<=2&&a.jsxs("div",{className:"suggested-questions",children:[a.jsx("p",{className:"suggested-label",children:"Try asking:"}),a.jsx("div",{className:"suggested-buttons",children:f.map((u,h)=>a.jsx("button",{className:"suggested-btn",onClick:()=>{m(u),v()},children:u},h))})]}),a.jsxs("div",{className:"coach-input",children:[a.jsx("textarea",{className:"message-input",placeholder:"Ask me anything about your career...",value:d,onChange:u=>m(u.target.value),onKeyPress:j,rows:1}),a.jsx("button",{className:"send-btn",onClick:v,disabled:!d.trim()||p,children:a.jsx(Za,{size:18})})]})]})]}),a.jsx("style",{children:`
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
      `})]})},hg=()=>{const{user:e}=Pe();return a.jsx(rn,{to:qa(e==null?void 0:e.role),replace:!0})},gg=()=>{const{user:e}=Pe(),t=w.useMemo(()=>e==null?void 0:e.email,[e]),[r,n]=w.useState(null);w.useEffect(()=>{if(t)try{const i=localStorage.getItem(`profile_${t}`);n(i?JSON.parse(i):null)}catch{n(null)}},[t]);const l=async()=>new Promise(i=>{setTimeout(()=>{i("I'm here to help with your career questions. This demo coach uses a placeholder backend response.")},500)});return a.jsxs(ch,{children:[a.jsx(De,{path:"/login",element:a.jsx(Ah,{})}),a.jsx(De,{path:"/register",element:a.jsx(Dh,{})}),a.jsx(De,{path:"/",element:a.jsx(Ot,{allowedRoles:["candidate"],children:a.jsxs("div",{className:"app-container",children:[a.jsx(At,{}),a.jsx("main",{className:"main-content",children:a.jsx(Fh,{})}),a.jsx(tr,{userProfile:r,onSendMessage:l}),a.jsx($h,{candidateEmail:e==null?void 0:e.email,employerId:"default-employer"})]})})}),a.jsx(De,{path:"/create-job",element:a.jsx(Ot,{requiredRole:"employer",children:a.jsxs("div",{className:"app-container",children:[a.jsx(At,{}),a.jsx("main",{className:"main-content",children:a.jsx(Bh,{})}),a.jsx(tr,{userProfile:r,onSendMessage:l})]})})}),a.jsx(De,{path:"/view-jobs",element:a.jsx(Ot,{allowedRoles:["candidate","employer"],children:a.jsxs("div",{className:"app-container",children:[a.jsx(At,{}),a.jsx("main",{className:"main-content",children:a.jsx(Jh,{})}),a.jsx(tr,{userProfile:r,onSendMessage:l})]})})}),a.jsx(De,{path:"/candidate-dashboard",element:a.jsx(Ot,{requiredRole:"candidate",children:a.jsxs("div",{className:"app-container",children:[a.jsx(At,{}),a.jsx("main",{className:"main-content",children:a.jsx(cg,{})}),a.jsx(tr,{userProfile:r,onSendMessage:l})]})})}),a.jsx(De,{path:"/employer-dashboard",element:a.jsx(Ot,{requiredRole:"employer",children:a.jsxs("div",{className:"app-container",children:[a.jsx(At,{}),a.jsx("main",{className:"main-content",children:a.jsx(dg,{})}),a.jsx(tr,{userProfile:r,onSendMessage:l})]})})}),a.jsx(De,{path:"/admin-dashboard",element:a.jsx(Ot,{requiredRole:"admin",children:a.jsxs("div",{className:"app-container",children:[a.jsx(At,{}),a.jsx("main",{className:"main-content",children:a.jsx(fg,{})})]})})}),a.jsx(De,{path:"/profile",element:a.jsx(Ot,{allowedRoles:["candidate","employer"],children:a.jsxs("div",{className:"app-container",children:[a.jsx(At,{}),a.jsx("main",{className:"main-content",children:a.jsx(Uh,{})}),a.jsx(tr,{userProfile:r,onSendMessage:l})]})})}),a.jsx(De,{path:"*",element:e?a.jsx(hg,{}):a.jsx(rn,{to:"/login",replace:!0})})]})};function vg(){return a.jsx(gh,{children:a.jsx(wh,{children:a.jsx(gg,{})})})}_l.createRoot(document.getElementById("root")).render(a.jsx(pc.StrictMode,{children:a.jsx(vg,{})}));
