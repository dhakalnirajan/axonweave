var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function ee(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function te(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,te(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),te(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=te(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=te(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return te(ee(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ne(e,t,n){if(e==null)return e;var r=[],i=0;return te(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function re(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var M=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},N={map:ne,forEach:function(e,t,n){ne(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ne(e,function(){t++}),t},toArray:function(e){return ne(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=N,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:re}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,M)}catch(e){M(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),j=Symbol.iterator;function ee(e){return typeof e!=`object`||!e?null:(e=j&&e[j]||e[`@@iterator`],typeof e==`function`?e:null)}var te=Symbol.for(`react.client.reference`);function ne(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?ne(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var re=Array.isArray,M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ae=[],P=-1;function oe(e){return{current:e}}function se(e){0>P||(e.current=ae[P],ae[P]=null,P--)}function F(e,t){P++,ae[P]=e.current,e.current=t}var ce=oe(null),le=oe(null),ue=oe(null),de=oe(null);function fe(e,t){switch(F(ue,t),F(le,e),F(ce,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}se(ce),F(ce,e)}function pe(){se(ce),se(le),se(ue)}function me(e){e.memoizedState!==null&&F(de,e);var t=ce.current,n=Ud(t,e.type);t!==n&&(F(le,e),F(ce,n))}function he(e){le.current===e&&(se(ce),se(le)),de.current===e&&(se(de),Qf._currentValue=ie)}var I,ge;function _e(e){if(I===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||``,ge=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+I+e+ge}var ve=!1;function ye(e,t){if(!e||ve)return``;ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?_e(n):``}function be(e,t){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e(`Lazy`);case 13:return e.child!==t&&t!==null?_e(`Suspense Fallback`):_e(`Suspense`);case 19:return _e(`SuspenseList`);case 0:case 15:return ye(e.type,!1);case 11:return ye(e.type.render,!1);case 1:return ye(e.type,!0);case 31:return _e(`Activity`);default:return``}}function xe(e){try{var t=``,n=null;do t+=be(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Se=Object.prototype.hasOwnProperty,Ce=t.unstable_scheduleCallback,we=t.unstable_cancelCallback,Te=t.unstable_shouldYield,Ee=t.unstable_requestPaint,De=t.unstable_now,Oe=t.unstable_getCurrentPriorityLevel,ke=t.unstable_ImmediatePriority,Ae=t.unstable_UserBlockingPriority,je=t.unstable_NormalPriority,Me=t.unstable_LowPriority,Ne=t.unstable_IdlePriority,Pe=t.log,Fe=t.unstable_setDisableYieldValue,Ie=null,Le=null;function Re(e){if(typeof Pe==`function`&&Fe(e),Le&&typeof Le.setStrictMode==`function`)try{Le.setStrictMode(Ie,e)}catch{}}var ze=Math.clz32?Math.clz32:He,Be=Math.log,Ve=Math.LN2;function He(e){return e>>>=0,e===0?32:31-(Be(e)/Ve|0)|0}var Ue=256,L=262144,We=4194304;function Ge(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ge(n))):i=Ge(o):i=Ge(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ge(n))):i=Ge(o)):i=Ge(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Je(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=We;return We<<=1,!(We&62914560)&&(We=4194304),e}function Xe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ze(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ze(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&$e(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function $e(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ze(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function et(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function tt(e,t){var n=t&-t;return n=n&42?1:nt(n),(n&(e.suspendedLanes|t))===0?n:0}function nt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function it(){var e=N.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function at(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var R=Math.random().toString(36).slice(2),ot=`__reactFiber$`+R,st=`__reactProps$`+R,ct=`__reactContainer$`+R,lt=`__reactEvents$`+R,ut=`__reactListeners$`+R,dt=`__reactHandles$`+R,ft=`__reactResources$`+R,pt=`__reactMarker$`+R;function mt(e){delete e[ot],delete e[st],delete e[lt],delete e[ut],delete e[dt]}function ht(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[ot])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function gt(e){if(e=e[ot]||e[ct]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _t(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function vt(e){var t=e[ft];return t||=e[ft]={hoistableStyles:new Map,hoistableScripts:new Map},t}function z(e){e[pt]=!0}var yt=new Set,bt={};function xt(e,t){St(e,t),St(e+`Capture`,t)}function St(e,t){for(bt[e]=t,e=0;e<t.length;e++)yt.add(t[e])}var Ct=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),wt={},Tt={};function Et(e){return Se.call(Tt,e)?!0:Se.call(wt,e)?!1:Ct.test(e)?Tt[e]=!0:(wt[e]=!0,!1)}function Dt(e,t,n){if(Et(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Ot(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function kt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function At(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function jt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Mt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nt(e){if(!e._valueTracker){var t=jt(e)?`checked`:`value`;e._valueTracker=Mt(e,t,``+e[t])}}function Pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=jt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Ft(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var It=/[\n"\\]/g;function Lt(e){return e.replace(It,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Rt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+At(t)):e.value!==``+At(t)&&(e.value=``+At(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Bt(e,o,At(n)):Bt(e,o,At(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+At(s):e.removeAttribute(`name`)}function zt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Nt(e);return}n=n==null?``:``+At(n),t=t==null?n:``+At(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Nt(e)}function Bt(e,t,n){t===`number`&&Ft(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Vt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+At(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ht(e,t,n){if(t!=null&&(t=``+At(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+At(n)}function Ut(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(re(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=At(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Nt(e)}function Wt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Kt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Gt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function qt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Kt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Kt(e,o,t[o])}function Jt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Yt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Xt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zt(e){return Xt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Qt(){}var $t=null;function en(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tn=null,nn=null;function rn(e){var t=gt(e);if(t&&(e=t.stateNode)){var n=e[st]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Rt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Lt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[st]||null;if(!a)throw Error(i(90));Rt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Pt(r)}break a;case`textarea`:Ht(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}}}var an=!1;function on(e,t,n){if(an)return e(t,n);an=!0;try{return e(t)}finally{if(an=!1,(tn!==null||nn!==null)&&(bu(),tn&&(t=tn,e=nn,nn=tn=null,rn(t),e)))for(t=0;t<e.length;t++)rn(e[t])}}function sn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[st]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var cn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),ln=!1;if(cn)try{var un={};Object.defineProperty(un,"passive",{get:function(){ln=!0}}),window.addEventListener(`test`,un,un),window.removeEventListener(`test`,un,un)}catch{ln=!1}var dn=null,fn=null,pn=null;function mn(){if(pn)return pn;var e,t=fn,n=t.length,r,i=`value`in dn?dn.value:dn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return pn=i.slice(e,1<r?1-r:void 0)}function hn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gn(){return!0}function _n(){return!1}function vn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?gn:_n,this.isPropagationStopped=_n,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},B=vn(yn),bn=h({},yn,{view:0,detail:0}),xn=vn(bn),Sn,Cn,wn,Tn=h({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:In,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==wn&&(wn&&e.type===`mousemove`?(Sn=e.screenX-wn.screenX,Cn=e.screenY-wn.screenY):Cn=Sn=0,wn=e),Sn)},movementY:function(e){return`movementY`in e?e.movementY:Cn}}),En=vn(Tn),Dn=vn(h({},Tn,{dataTransfer:0})),On=vn(h({},bn,{relatedTarget:0})),kn=vn(h({},yn,{animationName:0,elapsedTime:0,pseudoElement:0})),An=vn(h({},yn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),jn=vn(h({},yn,{data:0})),Mn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Nn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Pn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pn[e])?!!t[e]:!1}function In(){return Fn}var Ln=vn(h({},bn,{key:function(e){if(e.key){var t=Mn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=hn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Nn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:In,charCode:function(e){return e.type===`keypress`?hn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?hn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Rn=vn(h({},Tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=vn(h({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:In})),Bn=vn(h({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Vn=vn(h({},Tn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Hn=vn(h({},yn,{newState:0,oldState:0})),Un=[9,13,27,32],Wn=cn&&`CompositionEvent`in window,Gn=null;cn&&`documentMode`in document&&(Gn=document.documentMode);var Kn=cn&&`TextEvent`in window&&!Gn,qn=cn&&(!Wn||Gn&&8<Gn&&11>=Gn),Jn=` `,Yn=!1;function Xn(e,t){switch(e){case`keyup`:return Un.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Zn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Qn=!1;function $n(e,t){switch(e){case`compositionend`:return Zn(t);case`keypress`:return t.which===32?(Yn=!0,Jn):null;case`textInput`:return e=t.data,e===Jn&&Yn?null:e;default:return null}}function er(e,t){if(Qn)return e===`compositionend`||!Wn&&Xn(e,t)?(e=mn(),pn=fn=dn=null,Qn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return qn&&t.locale!==`ko`?null:t.data;default:return null}}var tr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!tr[e.type]:t===`textarea`}function rr(e,t,n,r){tn?nn?nn.push(r):nn=[r]:tn=r,t=Ed(t,`onChange`),0<t.length&&(n=new B(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ir=null,ar=null;function V(e){yd(e,0)}function or(e){if(Pt(_t(e)))return e}function sr(e,t){if(e===`change`)return t}var cr=!1;if(cn){var lr;if(cn){var ur=`oninput`in document;if(!ur){var dr=document.createElement(`div`);dr.setAttribute(`oninput`,`return;`),ur=typeof dr.oninput==`function`}lr=ur}else lr=!1;cr=lr&&(!document.documentMode||9<document.documentMode)}function fr(){ir&&(ir.detachEvent(`onpropertychange`,pr),ar=ir=null)}function pr(e){if(e.propertyName===`value`&&or(ar)){var t=[];rr(t,ar,e,en(e)),on(V,t)}}function mr(e,t,n){e===`focusin`?(fr(),ir=t,ar=n,ir.attachEvent(`onpropertychange`,pr)):e===`focusout`&&fr()}function hr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return or(ar)}function gr(e,t){if(e===`click`)return or(t)}function _r(e,t){if(e===`input`||e===`change`)return or(t)}function vr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var yr=typeof Object.is==`function`?Object.is:vr;function br(e,t){if(yr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Se.call(t,i)||!yr(e[i],t[i]))return!1}return!0}function xr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sr(e,t){var n=xr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=xr(n)}}function Cr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ft(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ft(e.document)}return t}function Tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Er=cn&&`documentMode`in document&&11>=document.documentMode,Dr=null,Or=null,kr=null,Ar=!1;function jr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ar||Dr==null||Dr!==Ft(r)||(r=Dr,`selectionStart`in r&&Tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&br(kr,r)||(kr=r,r=Ed(Or,`onSelect`),0<r.length&&(t=new B(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Dr)))}function Mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Nr={animationend:Mr(`Animation`,`AnimationEnd`),animationiteration:Mr(`Animation`,`AnimationIteration`),animationstart:Mr(`Animation`,`AnimationStart`),transitionrun:Mr(`Transition`,`TransitionRun`),transitionstart:Mr(`Transition`,`TransitionStart`),transitioncancel:Mr(`Transition`,`TransitionCancel`),transitionend:Mr(`Transition`,`TransitionEnd`)},Pr={},Fr={};cn&&(Fr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),`TransitionEvent`in window||delete Nr.transitionend.transition);function Ir(e){if(Pr[e])return Pr[e];if(!Nr[e])return e;var t=Nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fr)return Pr[e]=t[n];return e}var Lr=Ir(`animationend`),Rr=Ir(`animationiteration`),zr=Ir(`animationstart`),Br=Ir(`transitionrun`),Vr=Ir(`transitionstart`),Hr=Ir(`transitioncancel`),Ur=Ir(`transitionend`),Wr=new Map,Gr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Gr.push(`scrollEnd`);function Kr(e,t){Wr.set(e,t),xt(t,[e])}var qr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Jr=[],Yr=0,Xr=0;function Zr(){for(var e=Yr,t=Xr=Yr=0;t<e;){var n=Jr[t];Jr[t++]=null;var r=Jr[t];Jr[t++]=null;var i=Jr[t];Jr[t++]=null;var a=Jr[t];if(Jr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ti(n,i,a)}}function Qr(e,t,n,r){Jr[Yr++]=e,Jr[Yr++]=t,Jr[Yr++]=n,Jr[Yr++]=r,Xr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function $r(e,t,n,r){return Qr(e,t,n,r),ni(e)}function ei(e,t){return Qr(e,null,null,t),ni(e)}function ti(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ze(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ni(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ri={};function ii(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(e,t,n,r){return new ii(e,t,n,r)}function oi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function si(e,t){var n=e.alternate;return n===null?(n=ai(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ci(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function li(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)oi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ce.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=ai(31,n,t,a),e.elementType=k,e.lanes=o,e;case y:return ui(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ai(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ai(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ai(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ai(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ui(e,t,n,r){return e=ai(7,e,r,t),e.lanes=n,e}function di(e,t,n){return e=ai(6,e,null,t),e.lanes=n,e}function fi(e){var t=ai(18,null,null,0);return t.stateNode=e,t}function pi(e,t,n){return t=ai(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mi=new WeakMap;function hi(e,t){if(typeof e==`object`&&e){var n=mi.get(e);return n===void 0?(t={value:e,source:t,stack:xe(t)},mi.set(e,t),t):n}return{value:e,source:t,stack:xe(t)}}var gi=[],_i=0,vi=null,yi=0,bi=[],xi=0,Si=null,Ci=1,wi=``;function Ti(e,t){gi[_i++]=yi,gi[_i++]=vi,vi=e,yi=t}function Ei(e,t,n){bi[xi++]=Ci,bi[xi++]=wi,bi[xi++]=Si,Si=e;var r=Ci;e=wi;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var a=32-ze(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ci=1<<32-ze(t)+i|n<<i|r,wi=a+e}else Ci=1<<a|n<<i|r,wi=e}function Di(e){e.return!==null&&(Ti(e,1),Ei(e,1,0))}function Oi(e){for(;e===vi;)vi=gi[--_i],gi[_i]=null,yi=gi[--_i],gi[_i]=null;for(;e===Si;)Si=bi[--xi],bi[xi]=null,wi=bi[--xi],bi[xi]=null,Ci=bi[--xi],bi[xi]=null}function ki(e,t){bi[xi++]=Ci,bi[xi++]=wi,bi[xi++]=Si,Ci=t.id,wi=t.overflow,Si=e}var Ai=null,ji=null,H=!1,Mi=null,Ni=!1,Pi=Error(i(519));function Fi(e){throw Vi(hi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Pi}function Ii(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ot]=e,t[st]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),zt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Ut(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=Qt),t=!0):t=!1,t||Fi(e,!0)}function Li(e){for(Ai=e.return;Ai;)switch(Ai.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:Ai=Ai.return}}function Ri(e){if(e!==Ai)return!1;if(!H)return Li(e),H=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Wd(e.type,e.memoizedProps)),n=!n),n&&ji&&Fi(e),Li(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ji=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ji=df(e)}else t===27?(t=ji,Qd(e.type)?(e=uf,uf=null,ji=e):ji=t):ji=Ai?lf(e.stateNode.nextSibling):null;return!0}function zi(){ji=Ai=null,H=!1}function Bi(){var e=Mi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Mi=null),e}function Vi(e){Mi===null?Mi=[e]:Mi.push(e)}var Hi=oe(null),Ui=null,Wi=null;function Gi(e,t,n){F(Hi,t._currentValue),t._currentValue=n}function Ki(e){e._currentValue=Hi.current,se(Hi)}function qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ji(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Yi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;yr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===de.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Ji(t,e,n,r),t.flags|=262144}function Xi(e){for(e=e.firstContext;e!==null;){if(!yr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zi(e){Ui=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qi(e){return ea(Ui,e)}function $i(e,t){return Ui===null&&Zi(e),ea(e,t)}function ea(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Wi===null){if(e===null)throw Error(i(308));Wi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wi=Wi.next=t;return n}var ta=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},na=t.unstable_scheduleCallback,ra=t.unstable_NormalPriority,ia={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function aa(){return{controller:new ta,data:new Map,refCount:0}}function oa(e){e.refCount--,e.refCount===0&&na(ra,function(){e.controller.abort()})}var sa=null,ca=0,la=0,ua=null;function da(e,t){if(sa===null){var n=sa=[];ca=0,la=dd(),ua={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ca++,t.then(fa,fa),t}function fa(){if(--ca===0&&sa!==null){ua!==null&&(ua.status=`fulfilled`);var e=sa;sa=null,la=0,ua=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function pa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ma=M.S;M.S=function(e,t){eu=De(),typeof t==`object`&&t&&typeof t.then==`function`&&da(e,t),ma!==null&&ma(e,t)};var ha=oe(null);function ga(){var e=ha.current;return e===null?Rl.pooledCache:e}function _a(e,t){t===null?F(ha,ha.current):F(ha,t.pool)}function va(){var e=ga();return e===null?null:{parent:ia._currentValue,pool:e}}var ya=Error(i(460)),ba=Error(i(474)),xa=Error(i(542)),Sa={then:function(){}};function Ca(e){return e=e.status,e===`fulfilled`||e===`rejected`}function wa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Qt,Qt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Oa(e),e;default:if(typeof t.status==`string`)t.then(Qt,Qt);else{if(e=Rl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Oa(e),e}throw Ea=t,ya}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ea=e,ya):e}}var Ea=null;function Da(){if(Ea===null)throw Error(i(459));var e=Ea;return Ea=null,e}function Oa(e){if(e===ya||e===xa)throw Error(i(483))}var U=null,ka=0;function Aa(e){var t=ka;return ka+=1,U===null&&(U=[]),wa(U,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ma(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=si(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=di(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Ta(i)===t.type)?(t=a(t,n.props),ja(t,n),t.return=e,t):(t=li(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=pi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ui(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=di(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=li(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case v:return t=pi(t,e.mode,n),t.return=e,t;case O:return t=Ta(t),f(e,t,n)}if(re(t)||ee(t))return t=ui(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===C)return f(e,$i(e,t),n);Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Ta(n),p(e,t,n,r)}if(re(n)||ee(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===C)return p(e,t,$i(e,n),r);Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Ta(r),m(e,t,n,r,i)}if(re(r)||ee(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===C)return m(e,t,n,$i(t,r),i);Ma(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),H&&Ti(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return H&&Ti(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),H&&Ti(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),H&&Ti(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return H&&Ti(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),H&&Ti(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Ta(l)===r.type){n(e,r.sibling),c=a(r,o.props),ja(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=ui(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=li(o.type,o.key,o.props,null,e.mode,c),ja(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=pi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Ta(o),b(e,r,o,c)}if(re(o))return h(e,r,o,c);if(ee(o)){if(l=ee(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Aa(o),c);if(o.$$typeof===C)return b(e,r,$i(e,o),c);Ma(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=di(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return U=null,i}catch(t){if(t===ya||t===xa)throw t;var a=ai(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Pa=Na(!0),Fa=Na(!1),Ia=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ni(e),ti(e,null,n),t}return Qr(e,r,t,n),ni(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ua=!1;function Wa(){if(Ua){var e=ua;if(e!==null)throw e}}function Ga(e,t,n,r){Ua=!1;var i=e.updateQueue;Ia=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===la&&(Ua=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ia=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ka(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ka(n[e],t)}var Ja=oe(null),Ya=oe(0);function Xa(e,t){e=Ul,F(Ya,e),F(Ja,t),Ul=e|t.baseLanes}function Za(){F(Ya,Ul),F(Ja,Ja.current)}function Qa(){Ul=Ya.current,se(Ja),se(Ya)}var $a=oe(null),eo=null;function to(e){var t=e.alternate;F(oo,oo.current&1),F($a,e),eo===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(eo=e)}function no(e){F(oo,oo.current),F($a,e),eo===null&&(eo=e)}function ro(e){e.tag===22?(F(oo,oo.current),F($a,e),eo===null&&(eo=e)):io(e)}function io(){F(oo,oo.current),F($a,$a.current)}function ao(e){se($a),eo===e&&(eo=null),se(oo)}var oo=oe(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=0,W=null,G=null,lo=null,uo=!1,fo=!1,po=!1,mo=0,ho=0,go=null,_o=0;function vo(){throw Error(i(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yr(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,a){return co=a,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Is:Ls,po=!1,a=n(r,i),po=!1,fo&&(a=So(t,n,r,i)),xo(e),a}function xo(e){M.H=Fs;var t=G!==null&&G.next!==null;if(co=0,lo=G=W=null,uo=!1,ho=0,go=null,t)throw Error(i(300));e===null||ec||(e=e.dependencies,e!==null&&Xi(e)&&(ec=!0))}function So(e,t,n,r){W=e;var a=0;do{if(fo&&(go=null),ho=0,fo=!1,25<=a)throw Error(i(301));if(a+=1,lo=G=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=Rs,o=t(n,r)}while(fo);return o}function Co(){var e=M.H,t=e.useState()[0];return t=typeof t.then==`function`?Ao(t):t,e=e.useState()[0],(G===null?null:G.memoizedState)!==e&&(W.flags|=1024),t}function wo(){var e=mo!==0;return mo=0,e}function To(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uo=!1}co=0,lo=G=W=null,fo=!1,ho=mo=0,go=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?W.memoizedState=lo=e:lo=lo.next=e,lo}function Oo(){if(G===null){var e=W.alternate;e=e===null?null:e.memoizedState}else e=G.next;var t=lo===null?W.memoizedState:lo.next;if(t!==null)lo=t,G=e;else{if(e===null)throw W.alternate===null?Error(i(467)):Error(i(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},lo===null?W.memoizedState=lo=e:lo=lo.next=e}return lo}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=ho;return ho+=1,go===null&&(go=[]),e=wa(go,e,t),t=W,(lo===null?t.memoizedState:lo.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Is:Ls),e}function jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ao(e);if(e.$$typeof===C)return Qi(e)}throw Error(i(438,String(e)))}function Mo(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=W.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ko(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){return Fo(Oo(),G,e)}function Fo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(co&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===la&&(d=!0);else if((co&p)===p){u=u.next,p===la&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,W.lanes|=p,Gl|=p;f=u.action,po&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,W.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!yr(o,e.memoizedState)&&(ec=!0,d&&(n=ua,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Io(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);yr(o,t.memoizedState)||(ec=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lo(e,t,n){var r=W,a=Oo(),o=H;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!yr((G||a).memoizedState,n);if(s&&(a.memoizedState=n,ec=!0),a=a.queue,ss(Bo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,ns(9,{destroy:void 0},zo.bind(null,r,a,n,t),null),Rl===null)throw Error(i(349));o||co&127||Ro(r,t,n)}return n}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=ko(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yr(e,n)}catch{return!0}}function Ho(e){var t=ei(e,2);t!==null&&hu(t,e,2)}function Uo(e){var t=Do();if(typeof e==`function`){var n=e;if(e=n(),po){Re(!0);try{n()}finally{Re(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function Wo(e,t,n,r){return e.baseState=n,Fo(e,G,typeof r==`function`?r:No)}function Go(e,t,n,r,a){if(Ms(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};M.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ko(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=M.T,o={};M.T=o;try{var s=n(i,r),c=M.S;c!==null&&c(o,s),qo(e,t,s)}catch(n){Yo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),M.T=a}}else try{a=n(i,r),qo(e,t,a)}catch(n){Yo(e,t,n)}}function qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Jo(e,t,n)},function(n){return Yo(e,t,n)}):Jo(e,t,n)}function Jo(e,t,n){t.status=`fulfilled`,t.value=n,Xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ko(e,n)))}function Yo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Xo(t),t=t.next;while(t!==r)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Qo(e,t){if(H){var n=Rl.formState;if(n!==null){a:{var r=W;if(H){if(ji){b:{for(var i=ji,a=Ni;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){ji=lf(i.nextSibling),r=i.data===`F!`;break a}}Fi(r)}r=!1}r&&(t=n[0])}}return n=Do(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},n.queue=r,n=ks.bind(null,W,r),r.dispatch=n,r=Uo(!1),a=js.bind(null,W,!1,r.queue),r=Do(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Go.bind(null,W,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function $o(e){return es(Oo(),G,e)}function es(e,t,n){if(t=Fo(e,t,Zo)[0],e=Po(No)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ao(t)}catch(e){throw e===ya?xa:e}else r=t;t=Oo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(W.flags|=2048,ns(9,{destroy:void 0},ts.bind(null,i,n),null)),[r,a,e]}function ts(e,t){e.action=t}function K(e){var t=Oo(),n=G;if(n!==null)return es(t,n,e);Oo(),t=t.memoizedState,n=Oo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ns(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=W.updateQueue,t===null&&(t=ko(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function rs(){return Oo().memoizedState}function is(e,t,n,r){var i=Do();W.flags|=e,i.memoizedState=ns(1|t,{destroy:void 0},n,r===void 0?null:r)}function as(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=i.memoizedState.inst;G!==null&&r!==null&&yo(r,G.memoizedState.deps)?i.memoizedState=ns(t,a,n,r):(W.flags|=e,i.memoizedState=ns(1|t,a,n,r))}function os(e,t){is(8390656,8,e,t)}function ss(e,t){as(2048,8,e,t)}function cs(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=ko(),W.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ls(e){var t=Oo().memoizedState;return cs({ref:t,nextImpl:e}),function(){if(q&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function us(e,t){return as(4,2,e,t)}function ds(e,t){return as(4,4,e,t)}function fs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ps(e,t,n){n=n==null?null:n.concat([e]),as(4,4,fs.bind(null,t,e),n)}function ms(){}function hs(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gs(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&yo(t,r[1]))return r[0];if(r=e(),po){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r}function _s(e,t,n){return n===void 0||co&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),W.lanes|=e,Gl|=e,n)}function vs(e,t,n,r){return yr(n,t)?n:Ja.current===null?!(co&42)||co&1073741824&&!(Y&261930)?(ec=!0,e.memoizedState=n):(e=mu(),W.lanes|=e,Gl|=e,t):(e=_s(e,n,r),yr(e,t)||(ec=!0),e)}function ys(e,t,n,r,i){var a=N.p;N.p=a!==0&&8>a?a:8;var o=M.T,s={};M.T=s,js(e,!1,t,n);try{var c=i(),l=M.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?As(e,t,pa(c,r),pu(e)):As(e,t,r,pu(e))}catch(n){As(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{N.p=a,o!==null&&s.types!==null&&(o.types=s.types),M.T=o}}function bs(){}function xs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ss(e).queue;ys(e,a,t,ie,n===null?bs:function(){return Cs(e),n(r)})}function Ss(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cs(e){var t=Ss(e);t.next===null&&(t=e.alternate.memoizedState),As(e,t.next.queue,{},pu())}function ws(){return Qi(Qf)}function Ts(){return Oo().memoizedState}function Es(){return Oo().memoizedState}function Ds(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=za(n);var r=Ba(t,e,n);r!==null&&(hu(r,t,n),Va(r,t,n)),t={cache:aa()},e.payload=t;return}t=t.return}}function Os(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ms(e)?Ns(t,n):(n=$r(e,t,n,r),n!==null&&(hu(n,e,r),Ps(n,t,r)))}function ks(e,t,n){As(e,t,n,pu())}function As(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ms(e))Ns(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,yr(s,o))return Qr(e,t,i,0),Rl===null&&Zr(),!1}catch{}if(n=$r(e,t,i,r),n!==null)return hu(n,e,r),Ps(n,t,r),!0}return!1}function js(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ms(e)){if(t)throw Error(i(479))}else t=$r(e,n,r,2),t!==null&&hu(t,e,2)}function Ms(e){var t=e.alternate;return e===W||t!==null&&t===W}function Ns(e,t){fo=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ps(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}var Fs={readContext:Qi,use:jo,useCallback:vo,useContext:vo,useEffect:vo,useImperativeHandle:vo,useLayoutEffect:vo,useInsertionEffect:vo,useMemo:vo,useReducer:vo,useRef:vo,useState:vo,useDebugValue:vo,useDeferredValue:vo,useTransition:vo,useSyncExternalStore:vo,useId:vo,useHostTransitionStatus:vo,useFormState:vo,useActionState:vo,useOptimistic:vo,useMemoCache:vo,useCacheRefresh:vo};Fs.useEffectEvent=vo;var Is={readContext:Qi,use:jo,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:Qi,useEffect:os,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),is(4194308,4,fs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return is(4194308,4,e,t)},useInsertionEffect:function(e,t){is(4,2,e,t)},useMemo:function(e,t){var n=Do();t=t===void 0?null:t;var r=e();if(po){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(n!==void 0){var i=n(t);if(po){Re(!0);try{n(t)}finally{Re(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Os.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Do();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=ks.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ms,useDeferredValue:function(e,t){return _s(Do(),e,t)},useTransition:function(){var e=Uo(!1);return e=ys.bind(null,W,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=W,a=Do();if(H){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Rl===null)throw Error(i(349));Y&127||Ro(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,os(Bo.bind(null,r,o,e),[e]),r.flags|=2048,ns(9,{destroy:void 0},zo.bind(null,r,o,n,t),null),n},useId:function(){var e=Do(),t=Rl.identifierPrefix;if(H){var n=wi,r=Ci;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=mo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=_o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ws,useFormState:Qo,useActionState:Qo,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=js.bind(null,W,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return Do().memoizedState=Ds.bind(null,W)},useEffectEvent:function(e){var t=Do(),n={impl:e};return t.memoizedState=n,function(){if(q&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ls={readContext:Qi,use:jo,useCallback:hs,useContext:Qi,useEffect:ss,useImperativeHandle:ps,useInsertionEffect:us,useLayoutEffect:ds,useMemo:gs,useReducer:Po,useRef:rs,useState:function(){return Po(No)},useDebugValue:ms,useDeferredValue:function(e,t){return vs(Oo(),G.memoizedState,e,t)},useTransition:function(){var e=Po(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Ts,useHostTransitionStatus:ws,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){return Wo(Oo(),G,e,t)},useMemoCache:Mo,useCacheRefresh:Es};Ls.useEffectEvent=ls;var Rs={readContext:Qi,use:jo,useCallback:hs,useContext:Qi,useEffect:ss,useImperativeHandle:ps,useInsertionEffect:us,useLayoutEffect:ds,useMemo:gs,useReducer:Io,useRef:rs,useState:function(){return Io(No)},useDebugValue:ms,useDeferredValue:function(e,t){var n=Oo();return G===null?_s(n,e,t):vs(n,G.memoizedState,e,t)},useTransition:function(){var e=Io(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Ts,useHostTransitionStatus:ws,useFormState:K,useActionState:K,useOptimistic:function(e,t){var n=Oo();return G===null?(n.baseState=e,[e,n.queue.dispatch]):Wo(n,G,e,t)},useMemoCache:Mo,useCacheRefresh:Es};Rs.useEffectEvent=ls;function zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=za(n);r.tag=2,t!=null&&(r.callback=t),t=Ba(e,r,n),t!==null&&(hu(t,e,n),Va(t,e,n))}};function Vs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!br(n,r)||!br(i,a):!0}function Hs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function Us(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ws(e){qr(e)}function Gs(e){console.error(e)}function Ks(e){qr(e)}function qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Js(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){qs(e,t)},n}function Xs(e){return e=za(e),e.tag=3,e}function Zs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Js(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Js(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Qs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Yi(t,n,a,!0),n=$a.current,n!==null){switch(n.tag){case 31:case 13:return eo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Sa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Sa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(H)return t=$a.current,t===null?(r!==Pi&&(t=Error(i(423),{cause:r}),Vi(hi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=hi(r,n),a=Ys(e.stateNode,r,a),Ha(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Pi&&(e=Error(i(422),{cause:r}),Vi(hi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=hi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=hi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ys(n.stateNode,r,e),Ha(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Xs(a),Zs(a,e,n,r),Ha(n,a),!1}n=n.return}while(n!==null);return!1}var $s=Error(i(461)),ec=!1;function tc(e,t,n,r){t.child=e===null?Fa(t,null,n,r):Pa(t,e.child,n,r)}function nc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Zi(t),r=bo(e,t,n,o,a,i),s=wo(),e!==null&&!ec?(To(e,t,i),Ec(e,t,i)):(H&&s&&Di(t),t.flags|=1,tc(e,t,r,i),t.child)}function rc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!oi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ic(e,t,a,r,i)):(e=li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Dc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?br:n,n(o,r)&&e.ref===t.ref)return Ec(e,t,i)}return t.flags|=1,e=si(a,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(br(a,r)&&e.ref===t.ref){if(ec=!1,t.pendingProps=r=a,Dc(e,i))e.flags&131072&&(ec=!0);else return t.lanes=e.lanes,Ec(e,t,i)}}return fc(e,t,n,r,i)}function ac(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return sc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_a(t,a===null?null:a.cachePool),a===null?Za():Xa(t,a),ro(t);else return r=t.lanes=536870912,sc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&_a(t,null),Za(),io(t)):(_a(t,a.cachePool),Xa(t,a),io(t),t.memoizedState=null);return tc(e,t,i,n),t.child}function oc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sc(e,t,n,r,i){var a=ga();return a=a===null?null:{parent:ia._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&_a(t,null),Za(),ro(t),e!==null&&Yi(e,t,r,!0),t.childLanes=i,null}function cc(e,t){return t=xc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function lc(e,t,n){return Pa(t,e.child,null,n),e=cc(t,t.pendingProps),e.flags|=2,ao(t),t.memoizedState=null,e}function uc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(H){if(r.mode===`hidden`)return e=cc(t,r),t.lanes=536870912,oc(null,e);if(no(t),(e=ji)?(e=af(e,Ni),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Si===null?null:{id:Ci,overflow:wi},retryLane:536870912,hydrationErrors:null},n=fi(e),n.return=t,t.child=n,Ai=t,ji=null)):e=null,e===null)throw Fi(t);return t.lanes=536870912,null}return cc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(no(t),a){if(t.flags&256)t.flags&=-257,t=lc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(ec||Yi(e,t,n,!1),a=(n&e.childLanes)!==0,ec||a){if(r=Rl,r!==null&&(s=tt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ei(e,s),hu(r,e,s),$s;Du(),t=lc(e,t,n)}else e=o.treeContext,ji=lf(s.nextSibling),Ai=t,H=!0,Mi=null,Ni=!1,e!==null&&ki(t,e),t=cc(t,r),t.flags|=4096;return t}return e=si(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function dc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function fc(e,t,n,r,i){return Zi(t),n=bo(e,t,n,r,void 0,i),r=wo(),e!==null&&!ec?(To(e,t,i),Ec(e,t,i)):(H&&r&&Di(t),t.flags|=1,tc(e,t,n,i),t.child)}function pc(e,t,n,r,i,a){return Zi(t),t.updateQueue=null,n=So(t,r,n,i),xo(e),r=wo(),e!==null&&!ec?(To(e,t,a),Ec(e,t,a)):(H&&r&&Di(t),t.flags|=1,tc(e,t,n,a),t.child)}function mc(e,t,n,r,i){if(Zi(t),t.stateNode===null){var a=ri,o=n.contextType;typeof o==`object`&&o&&(a=Qi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Bs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},La(t),o=n.contextType,a.context=typeof o==`object`&&o?Qi(o):ri,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(zs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Bs.enqueueReplaceState(a,a.state,null),Ga(t,r,a,i),Wa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Us(n,s);a.props=c;var l=a.context,u=n.contextType;o=ri,typeof u==`object`&&u&&(o=Qi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Hs(t,a,r,o),Ia=!1;var f=t.memoizedState;a.state=f,Ga(t,r,a,i),Wa(),l=t.memoizedState,s||f!==l||Ia?(typeof d==`function`&&(zs(t,n,d,r),l=t.memoizedState),(c=Ia||Vs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ra(e,t),o=t.memoizedProps,u=Us(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ri,typeof l==`object`&&l&&(c=Qi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Hs(t,a,r,c),Ia=!1,f=t.memoizedState,a.state=f,Ga(t,r,a,i),Wa();var p=t.memoizedState;o!==d||f!==p||Ia||e!==null&&e.dependencies!==null&&Xi(e.dependencies)?(typeof s==`function`&&(zs(t,n,s,r),p=t.memoizedState),(u=Ia||Vs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Xi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,dc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Pa(t,e.child,null,i),t.child=Pa(t,null,n,i)):tc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ec(e,t,i),e}function hc(e,t,n,r){return zi(),t.flags|=256,tc(e,t,n,r),t.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _c(e){return{baseLanes:e,cachePool:va()}}function vc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function yc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(oo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(H){if(a?to(t):io(t),(e=ji)?(e=af(e,Ni),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Si===null?null:{id:Ci,overflow:wi},retryLane:536870912,hydrationErrors:null},n=fi(e),n.return=t,t.child=n,Ai=t,ji=null)):e=null,e===null)throw Fi(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(io(t),a=t.mode,c=xc({mode:`hidden`,children:c},a),r=ui(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,oc(null,r)):(to(t),bc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(to(t),t.flags&=-257,t=Sc(e,t,n)):t.memoizedState===null?(io(t),c=r.fallback,a=t.mode,r=xc({mode:`visible`,children:r.children},a),c=ui(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Pa(t,e.child,null,n),r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,t=oc(null,r)):(io(t),t.child=e.child,t.flags|=128,t=null);else if(to(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Vi({value:r,source:null,stack:null}),t=Sc(e,t,n)}else if(ec||Yi(e,t,n,!1),s=(n&e.childLanes)!==0,ec||s){if(s=Rl,s!==null&&(r=tt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ei(e,r),hu(s,e,r),$s;of(c)||Du(),t=Sc(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ji=lf(c.nextSibling),Ai=t,H=!0,Mi=null,Ni=!1,e!==null&&ki(t,e),t=bc(t,r.children),t.flags|=4096);return t}return a?(io(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=si(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ui(c,a,n,null),c.flags|=2):c=si(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,oc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=_c(n):(a=c.cachePool,a===null?a=va():(l=ia._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=vc(e,s,n),t.memoizedState=gc,oc(e.child,r)):(to(t),n=e.child,e=n.sibling,n=si(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function bc(e,t){return t=xc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function xc(e,t){return e=ai(22,e,null,t),e.lanes=0,e}function Sc(e,t,n){return Pa(t,e.child,null,n),e=bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qi(e.return,t,n)}function wc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Tc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=oo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,F(oo,o),tc(e,t,r,n),r=H?yi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cc(e,n,t);else if(e.tag===19)Cc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wc(t,!0,n,null,a,r);break;case`together`:wc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ec(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Yi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=si(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=si(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Xi(e)))}function Oc(e,t,n){switch(t.tag){case 3:fe(t,t.stateNode.containerInfo),Gi(t,ia,e.memoizedState.cache),zi();break;case 27:case 5:me(t);break;case 4:fe(t,t.stateNode.containerInfo);break;case 10:Gi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(to(t),e=Ec(e,t,n),e===null?null:e.sibling):yc(e,t,n):(to(t),t.flags|=128,null);to(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Yi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Tc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(oo,oo.current),r)break;return null;case 22:return t.lanes=0,ac(e,t,n,t.pendingProps);case 24:Gi(t,ia,e.memoizedState.cache)}return Ec(e,t,n)}function kc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ec=!0;else{if(!Dc(e,n)&&!(t.flags&128))return ec=!1,Oc(e,t,n);ec=!!(e.flags&131072)}}else ec=!1,H&&t.flags&1048576&&Ei(t,yi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e==`function`)oi(e)?(r=Us(e,r),t.tag=1,t=mc(null,t,e,r,n)):(t.tag=0,t=fc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=nc(null,t,e,r,n);break a}if(a===D){t.tag=14,t=rc(null,t,e,r,n);break a}}throw t=ne(e)||e,Error(i(306,t,``))}}return t;case 0:return fc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Us(r,t.pendingProps),mc(e,t,r,a,n);case 3:a:{if(fe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ra(e,t),Ga(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Gi(t,ia,r),r!==o.cache&&Ji(t,[ia],n,!0),Wa(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=hc(e,t,r,n);break a}if(r!==a){a=hi(Error(i(424)),t),Vi(a),t=hc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(ji=lf(e.firstChild),Ai=t,H=!0,Mi=null,Ni=!0,n=Fa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(zi(),r===a){t=Ec(e,t,n);break a}tc(e,t,r,n)}t=t.child}return t;case 26:return dc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:H||(n=t.type,e=t.pendingProps,r=Vd(ue.current).createElement(n),r[ot]=t,r[st]=e,Fd(r,n,e),z(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return me(t),e===null&&H&&(r=t.stateNode=pf(t.type,t.pendingProps,ue.current),Ai=t,Ni=!0,a=ji,Qd(t.type)?(uf=a,ji=lf(r.firstChild)):ji=a),tc(e,t,t.pendingProps.children,n),dc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&H&&((a=r=ji)&&(r=nf(r,t.type,t.pendingProps,Ni),r===null?a=!1:(t.stateNode=r,Ai=t,ji=lf(r.firstChild),Ni=!1,a=!0)),a||Fi(t)),me(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=bo(e,t,Co,null,null,n),Qf._currentValue=a),dc(e,t),tc(e,t,r,n),t.child;case 6:return e===null&&H&&((e=n=ji)&&(n=rf(n,t.pendingProps,Ni),n===null?e=!1:(t.stateNode=n,Ai=t,ji=null,e=!0)),e||Fi(t)),null;case 13:return yc(e,t,n);case 4:return fe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pa(t,null,r,n):tc(e,t,r,n),t.child;case 11:return nc(e,t,t.type,t.pendingProps,n);case 7:return tc(e,t,t.pendingProps,n),t.child;case 8:return tc(e,t,t.pendingProps.children,n),t.child;case 12:return tc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Gi(t,t.type,r.value),tc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Zi(t),a=Qi(a),r=r(a),t.flags|=1,tc(e,t,r,n),t.child;case 14:return rc(e,t,t.type,t.pendingProps,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 19:return Tc(e,t,n);case 31:return uc(e,t,n);case 22:return ac(e,t,n,t.pendingProps);case 24:return Zi(t),r=Qi(ia),e===null?(a=ga(),a===null&&(a=Rl,o=aa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},La(t),Gi(t,ia,a)):((e.lanes&n)!==0&&(Ra(e,t),Ga(t,null,null,n),Wa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Gi(t,ia,r),r!==a.cache&&Ji(t,[ia],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Gi(t,ia,r))),tc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ac(e){e.flags|=4}function jc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ea=Sa,ba}}else e.flags&=-16777217}function Mc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Ea=Sa,ba}}function Nc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ye(),e.lanes|=t,Yl|=t)}function Pc(e,t){if(!H)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ic(e,t,n){var r=t.pendingProps;switch(Oi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fc(t),null;case 1:return Fc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ki(ia),pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?Ac(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bi())),Fc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ac(t),o===null?(Fc(t),jc(t,a,null,r,n)):(Fc(t),Mc(t,o))):o?o===e.memoizedState?(Fc(t),t.flags&=-16777217):(Ac(t),Fc(t),Mc(t,o)):(e=e.memoizedProps,e!==r&&Ac(t),Fc(t),jc(t,a,e,r,n)),null;case 27:if(he(t),n=ue.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Fc(t),null}e=ce.current,Ri(t)?Ii(t,e):(e=pf(a,r,n),t.stateNode=e,Ac(t))}return Fc(t),null;case 5:if(he(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Fc(t),null}if(o=ce.current,Ri(t))Ii(t,o);else{var s=Vd(ue.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ot]=t,o[st]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ac(t)}}return Fc(t),jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ue.current,Ri(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ai,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Fi(t,!0)}else e=Vd(e).createTextNode(r),e[ot]=t,t.stateNode=e}return Fc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ri(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ot]=t}else zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fc(t),e=!1}else n=Bi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ao(t),t):(ao(t),null);if(t.flags&128)throw Error(i(558))}return Fc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ot]=t}else zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fc(t),a=!1}else a=Bi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ao(t),t):(ao(t),null)}return ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Nc(t,t.updateQueue),Fc(t),null);case 4:return pe(),e===null&&Sd(t.stateNode.containerInfo),Fc(t),null;case 10:return Ki(t.type),Fc(t),null;case 19:if(se(oo),r=t.memoizedState,r===null)return Fc(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Pc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=so(e),o!==null){for(t.flags|=128,Pc(r,!1),e=o.updateQueue,t.updateQueue=e,Nc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ci(n,e),n=n.sibling;return F(oo,oo.current&1|2),H&&Ti(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&De()>tu&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=so(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Nc(t,e),Pc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!H)return Fc(t),null}else 2*De()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Fc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=De(),e.sibling=null,n=oo.current,F(oo,a?n&1|2:n&1),H&&Ti(t,r.treeForkCount),e);case 22:case 23:return ao(t),Qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Fc(t),t.subtreeFlags&6&&(t.flags|=8192)):Fc(t),n=t.updateQueue,n!==null&&Nc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&se(ha),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ki(ia),Fc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Lc(e,t){switch(Oi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ki(ia),pe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return he(t),null;case 31:if(t.memoizedState!==null){if(ao(t),t.alternate===null)throw Error(i(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(oo),null;case 4:return pe(),null;case 10:return Ki(t.type),null;case 22:case 23:return ao(t),Qa(),e!==null&&se(ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ki(ia),null;case 25:return null;default:return null}}function Rc(e,t){switch(Oi(t),t.tag){case 3:Ki(ia),pe();break;case 26:case 27:case 5:he(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&ao(t);break;case 13:ao(t);break;case 19:se(oo);break;case 10:Ki(t.type);break;case 22:case 23:ao(t),Qa(),e!==null&&se(ha);break;case 24:Ki(ia)}}function zc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Bc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Vc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qa(t,n)}catch(t){Z(e,e.return,t)}}}function Hc(e,t,n){n.props=Us(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Uc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Wc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Gc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Kc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[st]=t}catch(t){Z(e,e.return,t)}}function qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function Jc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qt));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[ot]=e,t[st]=n}catch(t){Z(e,e.return,t)}}var Qc=!1,$c=!1,el=!1,tl=typeof WeakSet==`function`?WeakSet:Set,nl=null;function rl(e,t){if(e=e.containerInfo,zd=sp,e=wr(e),Tr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},sp=!1,nl=t;nl!==null;)if(t=nl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,nl=e;else for(;nl!==null;){switch(t=nl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Us(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,nl=e;break}nl=t.return}}function il(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:yl(e,n),r&4&&zc(5,n);break;case 1:if(yl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Us(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Vc(n),r&512&&Uc(n,n.return);break;case 3:if(yl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Zc(n);case 26:case 5:yl(e,n),t===null&&r&4&&Gc(n),r&512&&Uc(n,n.return);break;case 12:yl(e,n);break;case 31:yl(e,n),r&4&&ul(e,n);break;case 13:yl(e,n),r&4&&dl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||Qc,!r){t=t!==null&&t.memoizedState!==null||$c,i=Qc;var a=$c;Qc=r,($c=t)&&!a?xl(e,n,!!(n.subtreeFlags&8772)):yl(e,n),Qc=i,$c=a}break;case 30:break;default:yl(e,n)}}function al(e){var t=e.alternate;t!==null&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ol=null,sl=!1;function cl(e,t,n){for(n=n.child;n!==null;)ll(e,t,n),n=n.sibling}function ll(e,t,n){if(Le&&typeof Le.onCommitFiberUnmount==`function`)try{Le.onCommitFiberUnmount(Ie,n)}catch{}switch(n.tag){case 26:$c||Wc(n,t),cl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$c||Wc(n,t);var r=ol,i=sl;Qd(n.type)&&(ol=n.stateNode,sl=!1),cl(e,t,n),mf(n.stateNode),ol=r,sl=i;break;case 5:$c||Wc(n,t);case 6:if(r=ol,i=sl,ol=null,cl(e,t,n),ol=r,sl=i,ol!==null){if(sl)try{(ol.nodeType===9?ol.body:ol.nodeName===`HTML`?ol.ownerDocument.body:ol).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{ol.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:ol!==null&&(sl?(e=ol,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):$d(ol,n.stateNode));break;case 4:r=ol,i=sl,ol=n.stateNode.containerInfo,sl=!0,cl(e,t,n),ol=r,sl=i;break;case 0:case 11:case 14:case 15:Bc(2,n,t),$c||Bc(4,n,t),cl(e,t,n);break;case 1:$c||(Wc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Hc(n,t,r)),cl(e,t,n);break;case 21:cl(e,t,n);break;case 22:$c=(r=$c)||n.memoizedState!==null,cl(e,t,n),$c=r;break;default:cl(e,t,n)}}function ul(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function fl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tl),t;default:throw Error(i(435,e.tag))}}function pl(e,t){var n=fl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function ml(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){ol=c.stateNode,sl=!1;break a}break;case 5:ol=c.stateNode,sl=!1;break a;case 3:case 4:ol=c.stateNode.containerInfo,sl=!0;break a}c=c.return}if(ol===null)throw Error(i(160));ll(o,s,a),ol=null,sl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gl(t,e),t=t.sibling}var hl=null;function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ml(t,e),_l(e),r&4&&(Bc(3,e,e.return),zc(3,e),Bc(5,e,e.return));break;case 1:ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),r&64&&Qc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=hl;if(ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[pt]||o[ot]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[ot]=e,z(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ot]=e,z(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=Lf(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Kc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),n!==null&&r&4&&Kc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),e.flags&32){a=e.stateNode;try{Wt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Kc(e,a,n===null?a:n.memoizedProps)),r&1024&&(el=!0);break;case 6:if(ml(t,e),_l(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=hl,hl=_f(t.containerInfo),ml(t,e),hl=a,_l(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}el&&(el=!1,vl(e));break;case 4:r=hl,hl=_f(e.stateNode.containerInfo),ml(t,e),_l(e),hl=r;break;case 12:ml(t,e),_l(e);break;case 31:ml(t,e),_l(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 13:ml(t,e),_l(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=De()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Qc,d=$c;if(Qc=u||a,$c=d||l,ml(t,e),$c=d,Qc=u,_l(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Qc||$c||bl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,pl(e,n))));break;case 19:ml(t,e),_l(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 30:break;case 21:break;default:ml(t,e),_l(e)}}function _l(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Xc(e,Jc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Wt(o,``),n.flags&=-33),Xc(e,Jc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Yc(e,Jc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)il(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bc(4,t,t.return),bl(t);break;case 1:Wc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Hc(t,t.return,n),bl(t);break;case 27:mf(t.stateNode);case 26:case 5:Wc(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function xl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:xl(i,a,n),zc(4,a);break;case 1:if(xl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ka(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Vc(a),Uc(a,a.return);break;case 27:Zc(a);case 26:case 5:xl(i,a,n),n&&r===null&&o&4&&Gc(a),Uc(a,a.return);break;case 12:xl(i,a,n);break;case 31:xl(i,a,n),n&&o&4&&ul(i,a);break;case 13:xl(i,a,n),n&&o&4&&dl(i,a);break;case 22:a.memoizedState===null&&xl(i,a,n),Uc(a,a.return);break;case 30:break;default:xl(i,a,n)}t=t.sibling}}function Sl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&oa(n))}function Cl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oa(e))}function wl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tl(e,t,n,r),t=t.sibling}function Tl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:wl(e,t,n,r),i&2048&&zc(9,t);break;case 1:wl(e,t,n,r);break;case 3:wl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oa(e)));break;case 12:if(i&2048){wl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else wl(e,t,n,r);break;case 31:wl(e,t,n,r);break;case 13:wl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?wl(e,t,n,r):(a._visibility|=2,El(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?wl(e,t,n,r):Dl(e,t),i&2048&&Sl(o,t);break;case 24:wl(e,t,n,r),i&2048&&Cl(t.alternate,t);break;default:wl(e,t,n,r)}}function El(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:El(a,o,s,c,i),zc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,El(a,o,s,c,i)):u._visibility&2?El(a,o,s,c,i):Dl(a,o),i&&l&2048&&Sl(o.alternate,o);break;case 24:El(a,o,s,c,i),i&&l&2048&&Cl(o.alternate,o);break;default:El(a,o,s,c,i)}t=t.sibling}}function Dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Dl(n,r),i&2048&&Sl(r.alternate,r);break;case 24:Dl(n,r),i&2048&&Cl(r.alternate,r);break;default:Dl(n,r)}t=t.sibling}}var Ol=8192;function kl(e,t,n){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)Al(e,t,n),e=e.sibling}function Al(e,t,n){switch(e.tag){case 26:kl(e,t,n),e.flags&Ol&&e.memoizedState!==null&&Gf(n,hl,e.memoizedState,e.memoizedProps);break;case 5:kl(e,t,n);break;case 3:case 4:var r=hl;hl=_f(e.stateNode.containerInfo),kl(e,t,n),hl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ol,Ol=16777216,kl(e,t,n),Ol=r):kl(e,t,n));break;default:kl(e,t,n)}}function jl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ml(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Fl(r,e)}jl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nl(e),e=e.sibling}function Nl(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&Bc(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pl(e)):Ml(e);break;default:Ml(e)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Fl(r,e)}jl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bc(8,t,t.return),Pl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Pl(t));break;default:Pl(t)}e=e.sibling}}function Fl(e,t){for(;nl!==null;){var n=nl;switch(n.tag){case 0:case 11:case 15:Bc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:oa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,nl=r;else a:for(n=e;nl!==null;){r=nl;var i=r.sibling,a=r.return;if(al(r),r===n){nl=null;break a}if(i!==null){i.return=a,nl=i;break a}nl=a}}}var Il={getCacheForType:function(e){var t=Qi(ia),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Qi(ia).controller.signal}},Ll=typeof WeakMap==`function`?WeakMap:Map,q=0,Rl=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return q&2&&Y!==0?Y&-Y:M.T===null?it():dd()}function mu(){if(Jl===0){if(!(Y&536870912)||H){var e=L;L<<=1,!(L&3932160)&&(L=262144),Jl=e}else Jl=536870912}return e=$a.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===Rl&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),Ze(e,n),(!(q&2)||e!==Rl)&&(e===Rl&&(!(q&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(q&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||qe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-De(),10<a)){if(yu(r,t,Jl,!Bl),Ke(r,0,!0)!==0)break a;su=t,r.timeoutHandle=qd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qt},Al(t,a,d);var m=(a&62914560)===a?$l-De():(a&4194048)===a?eu-De():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!yr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ze(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&$e(e,n,t)}function bu(){return q&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Wi=Ui=null,Eo(e),U=null,ka=0,e=J;for(;e!==null;)Rc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),Rl=e,J=n=si(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=qe(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-ze(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Zr(),n}function Cu(e,t){W=null,M.H=Fs,t===ya||t===xa?(t=Da(),X=3):t===ba?(t=Da(),X=4):X=t===$s?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,qs(e,hi(t,e.current)))}function wu(){var e=$a.current;return e===null?!0:(Y&4194048)===Y?eo===null:(Y&62914560)===Y||Y&536870912?e===eo:!1}function Tu(){var e=M.H;return M.H=Fs,e===null?Fs:e}function Eu(){var e=M.A;return M.A=Il,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&$a.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||Rl===null||yu(Rl,Y,Jl,!1)}function Ou(e,t,n){var r=q;q|=2;var i=Tu(),a=Eu();(Rl!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:$a.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Wi=Ui=null,q=r,M.H=i,M.A=a,J===null&&(Rl=null,Y=0,Zr()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=q;q|=2;var r=Tu(),a=Eu();Rl!==e||Y!==t?(nu=null,tu=De()+500,Su(e,t)):Vl=qe(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ca(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||Rl!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Ca(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Wi=Ui=null,M.H=r,M.A=a,q=n,J===null?(Rl=null,Y=0,Zr(),Wl):0}function ju(){for(;J!==null&&!Te();)Mu(J)}function Mu(e){var t=kc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=pc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=pc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Eo(t);default:Rc(n,t),t=J=ci(t,Ul),t=kc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Wi=Ui=null,Eo(t),U=null,ka=0;var i=t.return;try{if(Qs(e,i,t,n,Y)){Wl=1,qs(e,hi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,qs(e,hi(n,e.current)),J=null;return}t.flags&32768?(H||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=$a.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Ic(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Lc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(q&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Xr,Qe(e,n,o,s,c,l),e===Rl&&(J=Rl=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(je,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=M.T,M.T=null,a=N.p,N.p=2,s=q,q|=4;try{rl(e,t,n)}finally{q=s,N.p=a,M.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=q;q|=4;try{gl(t,e);var a=Bd,o=wr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Cr(s.ownerDocument.documentElement,s)){if(c!==null&&Tr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Sr(s,h),v=Sr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!zd,Bd=zd=null}finally{q=i,N.p=r,M.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=q;q|=4;try{il(e,t.alternate,t)}finally{q=i,N.p=r,M.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ee();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),rt(n),t=t.stateNode,Le&&typeof Le.onCommitFiberRoot==`function`)try{Le.onCommitFiberRoot(Ie,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=M.T,i=N.p,N.p=2,M.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{M.T=t,N.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,oa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=rt(su),r=M.T,a=N.p;try{N.p=32>n?32:n,M.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,q&6)throw Error(i(331));var c=q;if(q|=4,Nl(o.current),Tl(o,o.current,s,n),q=c,id(0,!1),Le&&typeof Le.onPostCommitFiberRoot==`function`)try{Le.onPostCommitFiberRoot(Ie,o)}catch{}return!0}finally{N.p=a,M.T=r,Vu(e,t)}}function Wu(e,t,n){t=hi(n,t),t=Ys(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Ze(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=hi(n,e),n=Xs(2),r=Ba(t,n,2),r!==null&&(Zs(n,r,t,e),Ze(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ll;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Rl===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>De()-$l?!(q&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ye()),e=ei(e,t),e!==null&&(Ze(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ce(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ze(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ke(r,r===Rl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||qe(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Kd()&&(e=nd);for(var t=De(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ze(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Je(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Rl,n=Y,n=Ke(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&we(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&we(r),rt(n)){case 2:case 8:n=Ae;break;case 32:n=je;break;case 268435456:n=Ne;break;default:n=je}return r=cd.bind(null,e),n=Ce(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&we(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ke(e,e===Rl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,De()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Xd(function(){q&6?Ce(ke,ad):od()})}function dd(){if(nd===0){var e=la;e===0&&(e=Ue,Ue<<=1,!(Ue&261888)&&(Ue=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Zt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[st]||null).action),o=r.submitter;o&&(t=(t=o[st]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new B(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);xs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),xs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Gr.length;hd++){var gd=Gr[hd];Kr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Kr(Lr,`onAnimationEnd`),Kr(Rr,`onAnimationIteration`),Kr(zr,`onAnimationStart`),Kr(`dblclick`,`onDoubleClick`),Kr(`focusin`,`onFocus`),Kr(`focusout`,`onBlur`),Kr(Br,`onTransitionRun`),Kr(Vr,`onTransitionStart`),Kr(Hr,`onTransitionCancel`),Kr(Ur,`onTransitionEnd`),St(`onMouseEnter`,[`mouseout`,`mouseover`]),St(`onMouseLeave`,[`mouseout`,`mouseover`]),St(`onPointerEnter`,[`pointerout`,`pointerover`]),St(`onPointerLeave`,[`pointerout`,`pointerover`]),xt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),xt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),xt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),xt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){qr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){qr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[lt];n===void 0&&(n=t[lt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,yt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!ln||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ht(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}on(function(){var r=a,i=en(n),s=[];a:{var c=Wr.get(e);if(c!==void 0){var l=B,u=e;switch(e){case`keypress`:if(hn(n)===0)break a;case`keydown`:case`keyup`:l=Ln;break;case`focusin`:u=`focus`,l=On;break;case`focusout`:u=`blur`,l=On;break;case`beforeblur`:case`afterblur`:l=On;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=En;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Dn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=zn;break;case Lr:case Rr:case zr:l=kn;break;case Ur:l=Bn;break;case`scroll`:case`scrollend`:l=xn;break;case`wheel`:l=Vn;break;case`copy`:case`cut`:case`paste`:l=An;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Rn;break;case`toggle`:case`beforetoggle`:l=Hn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=sn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==$t&&(u=n.relatedTarget||n.fromElement)&&(ht(u)||u[ct]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?ht(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=En,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Rn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:_t(l),h=u==null?c:_t(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,ht(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?_t(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=sr;else if(nr(c)){if(cr)v=_r;else{v=hr;var y=mr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Jt(r.elementType)&&(v=sr):v=gr;if(v&&=v(e,r)){rr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Bt(c,`number`,c.value)}switch(y=r?_t(r):window,e){case`focusin`:(nr(y)||y.contentEditable===`true`)&&(Dr=y,Or=r,kr=null);break;case`focusout`:kr=Or=Dr=null;break;case`mousedown`:Ar=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ar=!1,jr(s,n,i);break;case`selectionchange`:if(Er)break;case`keydown`:case`keyup`:jr(s,n,i)}var b;if(Wn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Qn?Xn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(qn&&n.locale!==`ko`&&(Qn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Qn&&(b=mn()):(dn=i,fn=`value`in dn?dn.value:dn.textContent,Qn=!0)),y=Ed(r,x),0<y.length&&(x=new jn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Zn(n),b!==null&&(x.data=b)))),(b=Kn?$n(e,n):er(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new jn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=sn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=sn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=sn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=sn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function Nd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Wt(e,``+r);break;case`className`:Ot(e,`class`,r);break;case`tabIndex`:Ot(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ot(e,n,r);break;case`style`:qt(e,r,o);break;case`data`:if(t!==`object`){Ot(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Zt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Nd(e,t,`name`,a.name,a,null),Nd(e,t,`formEncType`,a.formEncType,a,null),Nd(e,t,`formMethod`,a.formMethod,a,null),Nd(e,t,`formTarget`,a.formTarget,a,null)):(Nd(e,t,`encType`,a.encType,a,null),Nd(e,t,`method`,a.method,a,null),Nd(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Zt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Qt);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Zt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Dt(e,`popover`,r);break;case`xlinkActuate`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Dt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Yt.get(n)||n,Dt(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:qt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Wt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Qt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!bt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[st]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Dt(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Nd(e,t,o,s,n,null)}}a&&Nd(e,t,`srcSet`,n.srcSet,n,null),r&&Nd(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Nd(e,t,r,d,n,null)}}zt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Nd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Vt(e,!!r,n,!0):Vt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Nd(e,t,s,c,n,null)}Ut(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Nd(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Nd(e,t,u,r,n,null)}return;default:if(Jt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Nd(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Nd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Nd(e,t,p,m,r,f)}}Rt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Nd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Nd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Vt(e,!!n,n?[]:``,!1):Vt(e,!!n,t,!0)):Vt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Nd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Nd(e,t,s,a,r,o)}Ht(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Nd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Nd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Nd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Nd(e,t,u,p,r,m)}return;default:if(Jt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Nd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Nd(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e!==Gd&&(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[pt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body)}n=i}while(n);Np(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),mt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[pt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mt(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=N.d;N.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=bu();return e||t}function bf(e){var t=gt(e);t!==null&&t.tag===5&&t.type===`form`?Cs(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=Lt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),z(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Lt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Lt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Lt(n.imageSizes)+`"]`)):i+=`[href="`+Lt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),z(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Lt(r)+`"][href="`+Lt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),z(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=vt(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);z(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,$(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=vt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0},t),(t=hf.get(i))&&zf(e,t),a=n.createElement(`script`),z(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=vt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&zf(e,t),a=n.createElement(`script`),z(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=ue.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=vt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=vt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=vt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+Lt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),z(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Lt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Lt(n.href)+`"]`);if(r)return t.instance=r,z(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),z(r),Fd(r,`style`,a),$(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,z(o),o;r=Nf(n),(a=hf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),z(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,$(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,z(a),a):(r=n,(a=hf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),z(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,$(r,n.precedence,e));return t.instance}function $(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[pt]||a[ot]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,z(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&Rf(r,i),a=a.createElement(`link`),z(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ai(3,null,null,t),e.current=a,a.stateNode=e,t=aa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},La(a),e}function tp(e){return e?(e=ri,e):ri}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ba(e,r,t),n!==null&&(hu(n,e,t),Va(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ei(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=nt(t);var n=ei(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=2,up(e,t,n,r)}finally{N.p=a,M.T=i}}function lp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=8,up(e,t,n,r)}finally{N.p=a,M.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=gt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ge(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ze(o);s.entanglements[1]|=c,o&=~c}rd(a),!(q&6)&&(tu=De()+500,id(0,!1))}}break;case 31:case 13:s=ei(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=en(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=ht(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Oe()){case ke:return 2;case Ae:return 8;case je:case Me:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=gt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=ht(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$t=r,n.target.dispatchEvent(r),$t=null}else return t=gt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=gt(n);a!==null&&(e.splice(t,3),t-=3,xs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[st]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[st]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ct]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=it();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:M,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ie=zp.inject(Rp),Le=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ws,s=Gs,c=Ks;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ct]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=o(((e,t)=>{var n=typeof Element<`u`,r=typeof Map==`function`,i=typeof Set==`function`,a=typeof ArrayBuffer==`function`&&!!ArrayBuffer.isView;function o(e,t){if(e===t)return!0;if(e&&t&&typeof e==`object`&&typeof t==`object`){if(e.constructor!==t.constructor)return!1;var s,c,l;if(Array.isArray(e)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(!o(e[c],t[c]))return!1;return!0}var u;if(r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],t.get(c.value[0])))return!1;return!0}if(i&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(e[c]!==t[c])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf==`function`&&typeof t.valueOf==`function`)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString==`function`&&typeof t.toString==`function`)return e.toString()===t.toString();if(l=Object.keys(e),s=l.length,s!==Object.keys(t).length)return!1;for(c=s;c--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[c]))return!1;if(n&&e instanceof Element)return!1;for(c=s;c--!==0;)if((l[c]!==`_owner`&&l[c]!==`__v`&&l[c]!==`__o`||!e.$$typeof)&&!o(e[l[c]],t[l[c]]))return!1;return!0}return e!==e&&t!==t}t.exports=function(e,t){try{return o(e,t)}catch(e){if((e.message||``).match(/stack|recursion/i))return console.warn(`react-fast-compare cannot handle circular refs`),!1;throw e}}})),v=o(((e,t)=>{t.exports=function(e,t,n,r,i,a,o,s){if(!e){var c;if(t===void 0)c=Error(`Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.`);else{var l=[n,r,i,a,o,s],u=0;c=Error(t.replace(/%s/g,function(){return l[u++]})),c.name=`Invariant Violation`}throw c.framesToPop=1,c}}})),y=o(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),b=g(),x=c(u()),S=c(_()),C=c(v()),w=c(y()),T=(e=>(e.BASE=`base`,e.BODY=`body`,e.HEAD=`head`,e.HTML=`html`,e.LINK=`link`,e.META=`meta`,e.NOSCRIPT=`noscript`,e.SCRIPT=`script`,e.STYLE=`style`,e.TITLE=`title`,e.FRAGMENT=`Symbol(react.fragment)`,e))(T||{}),E={link:{rel:[`amphtml`,`canonical`,`alternate`]},script:{type:[`application/ld+json`]},meta:{charset:``,name:[`generator`,`robots`,`description`],property:[`og:type`,`og:title`,`og:url`,`og:image`,`og:image:alt`,`og:description`,`twitter:url`,`twitter:title`,`twitter:description`,`twitter:image`,`twitter:image:alt`,`twitter:card`,`twitter:site`]}},D=Object.values(T),O={accesskey:`accessKey`,charset:`charSet`,class:`className`,contenteditable:`contentEditable`,contextmenu:`contextMenu`,"http-equiv":`httpEquiv`,itemprop:`itemProp`,tabindex:`tabIndex`},k=Object.entries(O).reduce((e,[t,n])=>(e[n]=t,e),{}),A=`data-rh`,j={DEFAULT_TITLE:`defaultTitle`,DEFER:`defer`,ENCODE_SPECIAL_CHARACTERS:`encodeSpecialCharacters`,ON_CHANGE_CLIENT_STATE:`onChangeClientState`,TITLE_TEMPLATE:`titleTemplate`,PRIORITIZE_SEO_TAGS:`prioritizeSeoTags`},ee=(e,t)=>{for(let n=e.length-1;n>=0;--n){let r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},te=e=>{let t=ee(e,`title`),n=ee(e,j.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join(``)),n&&t)return n.replace(/%s/g,()=>t);let r=ee(e,j.DEFAULT_TITLE);return t||r||void 0},ne=e=>ee(e,j.ON_CHANGE_CLIENT_STATE)||(()=>{}),re=(e,t)=>t.filter(t=>t[e]!==void 0).map(t=>t[e]).reduce((e,t)=>({...e,...t}),{}),M=(e,t)=>t.filter(e=>e.base!==void 0).map(e=>e.base).reverse().reduce((t,n)=>{if(!t.length){let r=Object.keys(n);for(let i=0;i<r.length;i+=1){let a=r[i].toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}}return t},[]),N=e=>console&&typeof console.warn==`function`&&console.warn(e),ie=(e,t,n)=>{let r={};return n.filter(t=>Array.isArray(t[e])?!0:(t[e]!==void 0&&N(`Helmet: ${e} should be of type "Array". Instead found type "${typeof t[e]}"`),!1)).map(t=>t[e]).reverse().reduce((e,n)=>{let i={};n.filter(e=>{let n,a=Object.keys(e);for(let r=0;r<a.length;r+=1){let i=a[r],o=i.toLowerCase();t.indexOf(o)!==-1&&(n!==`rel`||e[n].toLowerCase()!==`canonical`)&&(o!==`rel`||e[o].toLowerCase()!==`stylesheet`)&&(n=o),t.indexOf(i)!==-1&&(i===`innerHTML`||i===`cssText`||i===`itemprop`)&&(n=i)}if(!n||!e[n])return!1;let o=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][o]&&(i[n][o]=!0,!0)}).reverse().forEach(t=>e.push(t));let a=Object.keys(i);for(let e=0;e<a.length;e+=1){let t=a[e],n={...r[t],...i[t]};r[t]=n}return e},[]).reverse()},ae=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},P=e=>({baseTag:M([`href`],e),bodyAttributes:re(`bodyAttributes`,e),defer:ee(e,j.DEFER),encode:ee(e,j.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:re(`htmlAttributes`,e),linkTags:ie(`link`,[`rel`,`href`],e),metaTags:ie(`meta`,[`name`,`charset`,`http-equiv`,`property`,`itemprop`],e),noscriptTags:ie(`noscript`,[`innerHTML`],e),onChangeClientState:ne(e),scriptTags:ie(`script`,[`src`,`innerHTML`],e),styleTags:ie(`style`,[`cssText`],e),title:te(e),titleAttributes:re(`titleAttributes`,e),prioritizeSeoTags:ae(e,j.PRIORITIZE_SEO_TAGS)}),oe=e=>Array.isArray(e)?e.join(``):e,se=(e,t)=>{let n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},F=(e,t)=>Array.isArray(e)?e.reduce((e,n)=>(se(n,t)?e.priority.push(n):e.default.push(n),e),{priority:[],default:[]}):{default:e,priority:[]},ce=(e,t)=>({...e,[t]:void 0}),le=[`noscript`,`script`,`style`],ue=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`),de=e=>Object.keys(e).reduce((t,n)=>{let r=e[n]===void 0?`${n}`:`${n}="${e[n]}"`;return t?`${t} ${r}`:r},``),fe=(e,t,n,r)=>{let i=de(n),a=oe(t);return i?`<${e} ${A}="true" ${i}>${ue(a,r)}</${e}>`:`<${e} ${A}="true">${ue(a,r)}</${e}>`},pe=(e,t,n=!0)=>t.reduce((t,r)=>{let i=r,a=Object.keys(i).filter(e=>e!==`innerHTML`&&e!==`cssText`).reduce((e,t)=>{let r=i[t]===void 0?t:`${t}="${ue(i[t],n)}"`;return e?`${e} ${r}`:r},``),o=i.innerHTML||i.cssText||``;return`${t}<${e} ${A}="true" ${a}${le.indexOf(e)===-1?`/>`:`>${o}</${e}>`}`},``),me=(e,t={})=>Object.keys(e).reduce((t,n)=>{let r=O[n];return t[r||n]=e[n],t},t),he=(e,t,n)=>{let r=me(n,{key:t,[A]:!0});return[x.createElement(`title`,r,t)]},I=(e,t)=>t.map((t,n)=>{let r={key:n,[A]:!0};return Object.keys(t).forEach(e=>{let n=O[e]||e;if(n===`innerHTML`||n===`cssText`){let e=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:e}}else r[n]=t[e]}),x.createElement(e,r)}),ge=(e,t,n=!0)=>{switch(e){case`title`:return{toComponent:()=>he(e,t.title,t.titleAttributes),toString:()=>fe(e,t.title,t.titleAttributes,n)};case`bodyAttributes`:case`htmlAttributes`:return{toComponent:()=>me(t),toString:()=>de(t)};default:return{toComponent:()=>I(e,t),toString:()=>pe(e,t,n)}}},_e=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{let i=F(e,E.meta),a=F(t,E.link),o=F(n,E.script);return{priorityMethods:{toComponent:()=>[...I(`meta`,i.priority),...I(`link`,a.priority),...I(`script`,o.priority)],toString:()=>`${ge(`meta`,i.priority,r)} ${ge(`link`,a.priority,r)} ${ge(`script`,o.priority,r)}`},metaTags:i.default,linkTags:a.default,scriptTags:o.default}},ve=e=>{let{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:a,styleTags:o,title:s=``,titleAttributes:c,prioritizeSeoTags:l}=e,{linkTags:u,metaTags:d,scriptTags:f}=e,p={toComponent:()=>[],toString:()=>``};return l&&({priorityMethods:p,linkTags:u,metaTags:d,scriptTags:f}=_e(e)),{priority:p,base:ge(`base`,t,r),bodyAttributes:ge(`bodyAttributes`,n,r),htmlAttributes:ge(`htmlAttributes`,i,r),link:ge(`link`,u,r),meta:ge(`meta`,d,r),noscript:ge(`noscript`,a,r),script:ge(`script`,f,r),style:ge(`style`,o,r),title:ge(`title`,{title:s,titleAttributes:c},r)}},ye=[],be=!!(typeof window<`u`&&window.document&&window.document.createElement),xe=class{instances=[];canUseDOM=be;context;value={setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?ye:this.instances,add:e=>{(this.canUseDOM?ye:this.instances).push(e)},remove:e=>{let t=(this.canUseDOM?ye:this.instances).indexOf(e);(this.canUseDOM?ye:this.instances).splice(t,1)}}};constructor(e,t){this.context=e,this.canUseDOM=t||!1,t||(e.helmet=ve({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:``,titleAttributes:{}}))}},Se=parseInt(`19.2.8`.split(`.`)[0],10)>=19,Ce=x.createContext({}),we=class e extends x.Component{static canUseDOM=be;helmetData;constructor(t){super(t),this.helmetData=Se?null:new xe(this.props.context||{},e.canUseDOM)}render(){return Se?x.createElement(x.Fragment,null,this.props.children):x.createElement(Ce.Provider,{value:this.helmetData.value},this.props.children)}},Te=(e,t)=>{let n=document.head||document.querySelector(`head`),r=n.querySelectorAll(`${e}[${A}]`),i=[].slice.call(r),a=[],o;return t&&t.length&&t.forEach(t=>{let n=document.createElement(e);for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e)){if(e===`innerHTML`)n.innerHTML=t.innerHTML;else if(e===`cssText`){let e=t.cssText;n.appendChild(document.createTextNode(e))}else{let r=e,i=t[r]===void 0?``:t[r];n.setAttribute(e,i)}}n.setAttribute(A,`true`),i.some((e,t)=>(o=t,n.isEqualNode(e)))?i.splice(o,1):a.push(n)}),i.forEach(e=>e.parentNode?.removeChild(e)),a.forEach(e=>n.appendChild(e)),{oldTags:i,newTags:a}},Ee=(e,t)=>{let n=document.getElementsByTagName(e)[0];if(!n)return;let r=n.getAttribute(A),i=r?r.split(`,`):[],a=[...i],o=Object.keys(t);for(let e of o){let r=t[e]||``;n.getAttribute(e)!==r&&n.setAttribute(e,r),i.indexOf(e)===-1&&i.push(e);let o=a.indexOf(e);o!==-1&&a.splice(o,1)}for(let e=a.length-1;e>=0;--e)n.removeAttribute(a[e]);i.length===a.length?n.removeAttribute(A):n.getAttribute(A)!==o.join(`,`)&&n.setAttribute(A,o.join(`,`))},De=(e,t)=>{e!==void 0&&document.title!==e&&(document.title=oe(e)),Ee(`title`,t)},Oe=(e,t)=>{let{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:a,metaTags:o,noscriptTags:s,onChangeClientState:c,scriptTags:l,styleTags:u,title:d,titleAttributes:f}=e;Ee(`body`,r),Ee(`html`,i),De(d,f);let p={baseTag:Te(`base`,n),linkTags:Te(`link`,a),metaTags:Te(`meta`,o),noscriptTags:Te(`noscript`,s),scriptTags:Te(`script`,l),styleTags:Te(`style`,u)},m={},h={};Object.keys(p).forEach(e=>{let{newTags:t,oldTags:n}=p[e];t.length&&(m[e]=t),n.length&&(h[e]=p[e].oldTags)}),t&&t(),c(e,m,h)},ke=null,Ae=e=>{ke&&cancelAnimationFrame(ke),e.defer?ke=requestAnimationFrame(()=>{Oe(e,()=>{ke=null})}):(Oe(e),ke=null)},je=class extends x.Component{rendered=!1;shouldComponentUpdate(e){return!(0,w.default)(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){let{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){let{helmetInstances:e,setHelmet:t}=this.props.context,n=null,r=P(e.get().map(e=>{let{context:t,...n}=e.props;return n}));we.canUseDOM?Ae(r):ve&&(n=ve(r)),t(n)}init(){if(this.rendered)return;this.rendered=!0;let{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Me=[],Ne=e=>{let t={};for(let n of Object.keys(e))t[k[n]||n]=e[n];return t},Pe=e=>{let t={};for(let n of Object.keys(e)){let r=O[n];t[r||n]=e[n]}return t},Fe=(e,t)=>{if(!be)return;let n=document.getElementsByTagName(e)[0];if(!n)return;let r=`data-rh-managed`,i=n.getAttribute(r),a=i?i.split(`,`):[],o=Object.keys(t);for(let e of a)o.includes(e)||n.removeAttribute(e);for(let e of o){let r=t[e];r==null||r===!1?n.removeAttribute(e):r===!0?n.setAttribute(e,``):n.setAttribute(e,String(r))}o.length>0?n.setAttribute(r,o.join(`,`)):n.removeAttribute(r)},Ie=()=>{let e={},t={};for(let n of Me){let{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(e,Ne(r)),i&&Object.assign(t,Ne(i))}Fe(`html`,e),Fe(`body`,t)},Le=class extends x.Component{componentDidMount(){Me.push(this),Ie()}componentDidUpdate(){Ie()}componentWillUnmount(){let e=Me.indexOf(this);e!==-1&&Me.splice(e,1),Ie()}resolveTitle(){let{title:e,titleTemplate:t,defaultTitle:n}=this.props;return e&&t?t.replace(/%s/g,()=>Array.isArray(e)?e.join(``):e):e||n||void 0}renderTitle(){let e=this.resolveTitle();if(e===void 0)return null;let t=this.props.titleAttributes||{};return x.createElement(`title`,Pe(t),e)}renderBase(){let{base:e}=this.props;return e?x.createElement(`base`,Pe(e)):null}renderMeta(){let{meta:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>x.createElement(`meta`,{key:t,...Pe(e)}))}renderLink(){let{link:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>x.createElement(`link`,{key:t,...Pe(e)}))}renderScript(){let{script:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{innerHTML:n,...r}=e,i=Pe(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),x.createElement(`script`,{key:t,...i})})}renderStyle(){let{style:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{cssText:n,...r}=e,i=Pe(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),x.createElement(`style`,{key:t,...i})})}renderNoscript(){let{noscript:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{innerHTML:n,...r}=e,i=Pe(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),x.createElement(`noscript`,{key:t,...i})})}render(){return x.createElement(x.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},Re=class extends x.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(e){return!(0,S.default)(ce(this.props,`helmetData`),ce(e,`helmetData`))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case`script`:case`noscript`:return{innerHTML:t};case`style`:return{cssText:t};default:throw Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case`title`:return{...t,[e.type]:r,titleAttributes:{...n}};case`body`:return{...t,bodyAttributes:{...n}};case`html`:return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(t=>{n={...n,[t]:e[t]}}),n}warnOnInvalidChildren(e,t){return(0,C.default)(D.some(t=>e.type===t),typeof e.type==`function`?`You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.`:`Only elements types ${D.join(`, `)} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),(0,C.default)(!t||typeof t==`string`||Array.isArray(t)&&!t.some(e=>typeof e!=`string`),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return x.Children.forEach(e,e=>{if(!e||!e.props)return;let{children:r,...i}=e.props,a=Object.keys(i).reduce((e,t)=>(e[k[t]||t]=i[t],e),{}),{type:o}=e;switch(typeof o==`symbol`?o=o.toString():this.warnOnInvalidChildren(e,r),o){case`Symbol(react.fragment)`:t=this.mapChildrenToProps(r,t);break;case`link`:case`meta`:case`noscript`:case`script`:case`style`:n=this.flattenArrayTypeChildren(e,n,a,r);break;default:t=this.mapObjectTypeChildren(e,t,a,r)}}),this.mapArrayTypeChildrenToProps(n,t)}render(){let{children:e,...t}=this.props,n={...t},{helmetData:r}=t;return e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof xe)&&(r=new xe(r.context,!0),delete n.helmetData),Se?x.createElement(Le,{...n}):r?x.createElement(je,{...n,context:r.value}):x.createElement(Ce.Consumer,null,e=>x.createElement(je,{...n,context:e}))}};function ze(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Be=ze();function Ve(e){Be=e}var He={exec:()=>null};function Ue(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function L(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(Ge.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var We=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),Ge={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Ue(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Ue(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Ue(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:Ue(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:Ue(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:Ue(e=>RegExp(`^ {0,${e}}>`))},Ke=/^(?:[ \t]*(?:\n|$))+/,qe=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Je=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ye=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Xe=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ze=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Qe=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,$e=L(Qe).replace(/bull/g,Ze).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),et=L(Qe).replace(/bull/g,Ze).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),tt=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,nt=/^[^\n]+/,rt=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,it=L(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,rt).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),at=L(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Ze).getRegex(),R=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,ot=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,st=L(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,ot).replace(`tag`,R).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ct=e=>L(tt).replace(`hr`,Ye).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,R).getRegex(),lt=ct(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),ut=ct(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),dt={blockquote:L(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,ut).getRegex(),code:qe,def:it,fences:Je,heading:Xe,hr:Ye,html:st,lheading:$e,list:at,newline:Ke,paragraph:lt,table:He,text:nt},ft=L(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,Ye).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,R).getRegex(),pt={...dt,lheading:et,table:ft,paragraph:L(tt).replace(`hr`,Ye).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,ft).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,R).getRegex()},mt={...dt,html:L(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,ot).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:He,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:L(tt).replace(`hr`,Ye).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,$e).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},ht=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,gt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,_t=/^( {2,}|\\)\n(?!\s*$)/,vt=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,z=/[\p{P}\p{S}]/u,yt=/[\s\p{P}\p{S}]/u,bt=/[^\s\p{P}\p{S}]/u,xt=L(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,yt).getRegex(),St=/[\p{Pi}\p{Ps}"']/u,Ct=/(?!~)[\p{P}\p{S}]/u,wt=/(?!~)[\s\p{P}\p{S}]/u,Tt=/(?:[^\s\p{P}\p{S}]|~)/u,Et=L(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,We?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Dt=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Ot=L(Dt,`u`).replace(/punct/g,z).getRegex(),kt=L(Dt,`u`).replace(/punct/g,Ct).getRegex(),At=L(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,St).replace(/punct/g,z).getRegex(),jt=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Mt=L(jt,`gu`).replace(/notPunctSpace/g,bt).replace(/punctSpace/g,yt).replace(/punct/g,z).getRegex(),Nt=L(jt,`gu`).replace(/notPunctSpace/g,Tt).replace(/punctSpace/g,wt).replace(/punct/g,Ct).getRegex(),Pt=L(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,bt).replace(/punctSpace/g,yt).replace(/punct/g,z).getRegex(),Ft=L(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,bt).replace(/punctSpace/g,yt).replace(/punct/g,z).getRegex(),It=L(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,bt).replace(/punctSpace/g,yt).replace(/punct/g,z).getRegex(),Lt=L(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,z).getRegex(),Rt=L(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,bt).replace(/punctSpace/g,yt).replace(/punct/g,z).getRegex(),zt=L(/\\(punct)/,`gu`).replace(/punct/g,z).getRegex(),Bt=L(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Vt=L(ot).replace(`(?:-->|$)`,`-->`).getRegex(),Ht=L(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Vt).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ut=L(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,/\[(?:\\[\s\S]|[^\[\]\\])*\]/).getRegex(),Wt=L(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,Ut).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Gt=L(/^!?\[(label)\]\[(ref)\]/).replace(`label`,Ut).replace(`ref`,rt).getRegex(),Kt=L(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,rt).getRegex(),qt=L(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Gt).replace(`nolink`,Kt).getRegex(),Jt=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Yt={_backpedal:He,anyPunctuation:zt,autolink:Bt,blockSkip:Et,br:_t,code:gt,del:He,delLDelim:He,delRDelim:He,emStrongLDelim:Ot,emStrongRDelimAst:Mt,emStrongRDelimUnd:Ft,escape:ht,link:Wt,nolink:Kt,punctuation:xt,reflink:Gt,reflinkSearch:qt,tag:Ht,text:vt,url:He},Xt={...Yt,emStrongLDelim:At,emStrongRDelimAst:Pt,emStrongRDelimUnd:It,link:L(/^!?\[(label)\]\((.*?)\)/).replace(`label`,Ut).getRegex(),reflink:L(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,Ut).getRegex()},Zt={...Yt,emStrongRDelimAst:Nt,emStrongLDelim:kt,delLDelim:Lt,delRDelim:Rt,url:L(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,Jt).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:L(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,Jt).getRegex()},Qt={...Zt,br:L(_t).replace(`{2,}`,`*`).getRegex(),text:L(Zt.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},$t={normal:dt,gfm:pt,pedantic:mt},en={normal:Yt,gfm:Zt,breaks:Qt,pedantic:Xt},tn={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},nn=e=>tn[e];function rn(e,t){if(t){if(Ge.escapeTest.test(e))return e.replace(Ge.escapeReplace,nn)}else if(Ge.escapeTestNoEncode.test(e))return e.replace(Ge.escapeReplaceNoEncode,nn);return e}function an(e){try{e=encodeURI(e).replace(Ge.percentDecode,`%`)}catch{return null}return e}function on(e,t){let n=e.replace(Ge.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(Ge.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(Ge.slashPipe,`|`);return n}function sn(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function cn(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&Ge.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function ln(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function un(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function dn(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`;r.state.inLink=!0;let l=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let d=r.inlineTokens(s),f=r.state.linkEmitted;if(r.state.linkEmitted=l,r.state.inLink=!1,!c){if(f){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:d}}function fn(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}var pn=class{options;rules;lexer;constructor(e){this.options=e||Be}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:cn(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=fn(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=sn(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:sn(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:sn(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=sn(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o=0;for(;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s,n=`${n}
${a}`,r=r.substring(0,r.length-t.text.length)+s.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=un(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of i.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=cn(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:sn(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=on(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:sn(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(on(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:sn(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=sn(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=ln(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),dn(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return dn(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},mn=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Be,this.options.tokenizer=this.options.tokenizer||new pn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let t={other:Ge,block:$t.normal,inline:en.normal};this.options.pedantic?(t.block=$t.pedantic,t.inline=en.pedantic):this.options.gfm&&(t.block=$t.gfm,t.inline=this.options.breaks?en.breaks:en.gfm),this.tokenizer.rules=t}static get rules(){return{block:$t,inline:en}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(Ge.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Ge.tabCharGlobal,`    `).replace(Ge.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(e.charAt(0)!==`!`&&Object.hasOwn(this.tokens.links,e.slice(n+1,-1))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,t=n=>{let r=n.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,n.slice(r+1,-1)))return n;if(r>1&&n.charAt(0)!==`!`){let i=n.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,t)+`][`+`a`.repeat(n.length-r-2)+`]`}return`[`+`a`.repeat(n.length-2)+`]`};n=n.replace(e,t)}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,e=>`+`.repeat(e.length)),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},hn=class{options;parser;constructor(e){this.options=e||Be}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(Ge.notSpaceStart)?.[0],i=e?e.replace(Ge.endingNewline,``)+`
`:``;return r?`<pre><code class="language-`+rn(r)+`">`+(n?i:rn(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:rn(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${rn(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?rn(n,!0):this.parser.parseInline(r),o=an(e);if(o===null)return a;e=rn(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+rn(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=an(e);if(i===null)return rn(n);e=i;let a=`<img src="${rn(e)}" alt="${rn(n)}"`;return t&&(a+=` title="${rn(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:rn(e.text)}},gn=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},_n=class e{options;renderer;textRenderer;constructor(e){this.options=e||Be,this.options.renderer=this.options.renderer||new hn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new gn}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},vn=class{options;block;constructor(e){this.options=e||Be}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?mn.lex:mn.lexInline}provideParser(e=this.block){return e?_n.parse:_n.parseInline}},yn=new class{defaults=ze();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=_n;Renderer=hn;TextRenderer=gn;Lexer=mn;Tokenizer=pn;Hooks=vn;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new hn(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new pn(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new vn;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=vn.passThroughHooks.has(n)?e=>{if(this.defaults.async&&vn.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return mn.lex(e,t??this.defaults)}parser(e,t){return _n.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?mn.lex:mn.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?_n.parse:_n.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?mn.lex:mn.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?_n.parse:_n.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+rn(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function B(e,t){return yn.parse(e,t)}B.options=B.setOptions=function(e){return yn.setOptions(e),B.defaults=yn.defaults,Ve(B.defaults),B},B.getDefaults=ze,B.defaults=Be;function bn(...e){return yn.use(...e),B.defaults=yn.defaults,Ve(B.defaults),B}B.use=bn,B.walkTokens=function(e,t){return yn.walkTokens(e,t)},B.parseInline=yn.parseInline,B.Parser=_n,B.parser=_n.parse,B.Renderer=hn,B.TextRenderer=gn,B.Lexer=mn,B.lexer=mn.lex,B.Tokenizer=pn,B.Hooks=vn,B.parse=B,B.options,B.setOptions,B.walkTokens,B.parseInline,_n.parse,mn.lex;function xn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Sn(e){if(Array.isArray(e))return e}function Cn(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function wn(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tn(e,t){return Sn(e)||Cn(e,t)||En(e,t)||wn()}function En(e,t){if(e){if(typeof e==`string`)return xn(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?xn(e,t):void 0}}var Dn=Object.entries,On=Object.setPrototypeOf,kn=Object.isFrozen,An=Object.getPrototypeOf,jn=Object.getOwnPropertyDescriptor,Mn=Object.freeze,Nn=Object.seal,Pn=Object.create,Fn=typeof Reflect<`u`&&Reflect,In=Fn.apply,Ln=Fn.construct;Mn||=function(e){return e},Nn||=function(e){return e},In||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},Ln||=function(e){return new e(...[...arguments].slice(1))};var Rn=ir(Array.prototype.forEach),zn=ir(Array.prototype.lastIndexOf),Bn=ir(Array.prototype.pop),Vn=ir(Array.prototype.push),Hn=ir(Array.prototype.splice),Un=Array.isArray,Wn=ir(String.prototype.toLowerCase),Gn=ir(String.prototype.toString),Kn=ir(String.prototype.match),qn=ir(String.prototype.replace),Jn=ir(String.prototype.indexOf),Yn=ir(String.prototype.trim),Xn=ir(Number.prototype.toString),Zn=ir(Boolean.prototype.toString),Qn=typeof BigInt>`u`?null:ir(BigInt.prototype.toString),$n=typeof Symbol>`u`?null:ir(Symbol.prototype.toString),er=ir(Object.prototype.hasOwnProperty),tr=ir(Object.prototype.toString),nr=ir(RegExp.prototype.test),rr=ar(TypeError);function ir(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return In(e,t,n)}}function ar(e){return function(){return Ln(e,[...arguments])}}function V(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Wn;if(On&&On(e,null),!Un(t))return e;let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(kn(t)||(t[r]=e),i=e)}e[i]=!0}return e}function or(e){for(let t=0;t<e.length;t++)er(e,t)||(e[t]=null);return e}function sr(e){let t=Pn(null);for(let r of Dn(e)){var n=Tn(r,2);let i=n[0],a=n[1];er(e,i)&&(t[i]=Un(a)?or(a):a&&typeof a==`object`&&a.constructor===Object?sr(a):a)}return t}function cr(e){switch(typeof e){case`string`:return e;case`number`:return Xn(e);case`boolean`:return Zn(e);case`bigint`:return Qn?Qn(e):`0`;case`symbol`:return $n?$n(e):`Symbol()`;case`undefined`:return tr(e);case`function`:case`object`:{if(e===null)return tr(e);let t=e,n=lr(t,`toString`);if(typeof n==`function`){let e=n(t);return typeof e==`string`?e:tr(e)}return tr(e)}default:return tr(e)}}function lr(e,t){for(;e!==null;){let n=jn(e,t);if(n){if(n.get)return ir(n.get);if(typeof n.value==`function`)return ir(n.value)}e=An(e)}function n(){return null}return n}function ur(e){try{return nr(e,``),!0}catch{return!1}}var dr=Mn(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),fr=Mn(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),pr=Mn([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),mr=Mn([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),hr=Mn(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),gr=Mn([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),_r=Mn([`#text`]),vr=Mn(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(`.`)),yr=Mn(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),br=Mn(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),xr=Mn([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),Sr=Nn(/{{[\w\W]*|^[\w\W]*}}/g),Cr=Nn(/<%[\w\W]*|^[\w\W]*%>/g),wr=Nn(/\${[\w\W]*/g),Tr=Nn(/^data-[\-\w.\u00B7-\uFFFF]+$/),Er=Nn(/^aria-[\-\w]+$/),Dr=Nn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Or=Nn(/^(?:\w+script|data):/i),kr=Nn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ar=Nn(/^html$/i),jr=Nn(/^[a-z][.\w]*(-[.\w]+)+$/i),Mr=Nn(/<[/\w!]/g),Nr=Nn(/<[/\w]/g),Pr=Nn(/<\/no(script|embed|frames)/i),Fr=Nn(/\/>/i),Ir={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Lr=[`style`,`script`,`xmp`,`iframe`,`noembed`,`noframes`,`plaintext`,`noscript`],Rr=Mn(V({},Lr)),zr=function(){let e={};return Rn(Lr,t=>{e[t]=Nn(RegExp(`</`+t+`(?=[\\t\\n\\f\\r />])`,`i`))}),Mn(e)}(),Br=function(){return typeof window>`u`?null:window},Vr=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},Hr=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Ur=function(e,t,n,r){return er(e,t)&&Un(e[t])?V(r.base?sr(r.base):{},e[t],r.transform):n},Wr=function(e,t,n){let r=er(e,t)?e[t]:void 0;return r&&typeof r==`object`?sr(r):n()};function Gr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Br(),t=e=>Gr(e);if(t.version=`3.4.15`,t.removed=[],!e||!e.document||e.document.nodeType!==Ir.document||!e.Element)return t.isSupported=!1,t;let n=e.document,r=n,i=r.currentScript;e.DocumentFragment;let a=e.HTMLTemplateElement,o=e.Node,s=e.Element,c=e.NodeFilter;e.NamedNodeMap===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;let l=e.DOMParser,u=e.trustedTypes,d=s.prototype,f=lr(d,`cloneNode`),p=lr(d,`remove`),m=lr(d,`removeAttributeNode`),h=lr(d,`nextSibling`),g=lr(d,`childNodes`),_=lr(d,`parentNode`),v=lr(d,`shadowRoot`),y=lr(d,`attributes`),b=o&&o.prototype?lr(o.prototype,`nodeType`):null,x=o&&o.prototype?lr(o.prototype,`nodeName`):null,S=o&&o.prototype?lr(o.prototype,`ownerDocument`):null,C=function(e){return b?b(e):e.nodeType},w=function(e){return x?x(e):e.nodeName};if(typeof a==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let T,E=``,D,O=!1,k=0,A=function(){if(k>0)throw rr(`A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`)},j=function(e){A(),k++;try{return T.createHTML(e)}finally{k--}},ee=function(e){A(),k++;try{return T.createScriptURL(e)}finally{k--}},te=function(){return O||=(D=Vr(u,i),!0),D},ne=n,re=ne.implementation,M=ne.createNodeIterator,N=ne.createDocumentFragment,ie=ne.getElementsByTagName,ae=r.importNode,P=Hr();t.isSupported=typeof Dn==`function`&&typeof _==`function`&&re&&re.createHTMLDocument!==void 0;let oe=Sr,se=Cr,F=wr,ce=Tr,le=Er,ue=Or,de=kr,fe=jr,pe=Dr,me=null,he=V({},[...dr,...fr,...pr,...hr,..._r]),I=null,ge=V({},[...vr,...yr,...br,...xr]),_e=Object.seal(Pn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ve=null,ye=null,be=Object.seal(Pn(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),xe=!0,Se=!0,Ce=!1,we=!0,Te=!1,Ee=!0,De=!1,Oe=!1,ke=null,Ae=null,je=!1,Me=!1,Ne=!1,Pe=!1,Fe=!0,Ie=!1,Le=`user-content-`,Re=!0,ze=!1,Be={},Ve=null,He=V({},`annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(`.`)),Ue=null,L=V({},[`audio`,`video`,`img`,`source`,`image`,`track`]),We=null,Ge=V({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),Ke=`http://www.w3.org/1998/Math/MathML`,qe=`http://www.w3.org/2000/svg`,Je=`http://www.w3.org/1999/xhtml`,Ye=Je,Xe=!1,Ze=null,Qe=V({},[Ke,qe,Je],Gn),$e=Mn([`mi`,`mo`,`mn`,`ms`,`mtext`]),et=V({},$e),tt=Mn([`annotation-xml`]),nt=V({},tt),rt=V({},[`title`,`style`,`font`,`a`,`script`]),it=null,at=[`application/xhtml+xml`,`text/html`],R=null,ot=null,st=n.createElement(`form`),ct=function(e){return e instanceof RegExp||e instanceof Function},lt=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(ot&&ot===e)return;(!e||typeof e!=`object`)&&(e={}),e=sr(e),it=at.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,R=it===`application/xhtml+xml`?Gn:Wn,me=Ur(e,`ALLOWED_TAGS`,he,{transform:R}),I=Ur(e,`ALLOWED_ATTR`,ge,{transform:R}),Ze=Ur(e,`ALLOWED_NAMESPACES`,Qe,{transform:Gn}),We=Ur(e,`ADD_URI_SAFE_ATTR`,Ge,{transform:R,base:Ge}),Ue=Ur(e,`ADD_DATA_URI_TAGS`,L,{transform:R,base:L}),Ve=Ur(e,`FORBID_CONTENTS`,He,{transform:R}),ve=Ur(e,`FORBID_TAGS`,sr({}),{transform:R}),ye=Ur(e,`FORBID_ATTR`,sr({}),{transform:R}),Be=er(e,`USE_PROFILES`)?e.USE_PROFILES&&typeof e.USE_PROFILES==`object`?sr(e.USE_PROFILES):e.USE_PROFILES:!1,xe=e.ALLOW_ARIA_ATTR!==!1,Se=e.ALLOW_DATA_ATTR!==!1,Ce=e.ALLOW_UNKNOWN_PROTOCOLS||!1,we=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Te=e.SAFE_FOR_TEMPLATES||!1,Ee=e.SAFE_FOR_XML!==!1,De=e.WHOLE_DOCUMENT||!1,Me=e.RETURN_DOM||!1,Ne=e.RETURN_DOM_FRAGMENT||!1,Pe=e.RETURN_TRUSTED_TYPE||!1,je=e.FORCE_BODY||!1,Fe=e.SANITIZE_DOM!==!1,Ie=e.SANITIZE_NAMED_PROPS||!1,Re=e.KEEP_CONTENT!==!1,ze=e.IN_PLACE||!1,pe=ur(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:Dr,Ye=typeof e.NAMESPACE==`string`?e.NAMESPACE:Je,et=Wr(e,`MATHML_TEXT_INTEGRATION_POINTS`,()=>V({},$e)),nt=Wr(e,`HTML_INTEGRATION_POINTS`,()=>V({},tt));let t=Wr(e,`CUSTOM_ELEMENT_HANDLING`,()=>Pn(null));if(_e=Pn(null),er(t,`tagNameCheck`)&&ct(t.tagNameCheck)&&(_e.tagNameCheck=t.tagNameCheck),er(t,`attributeNameCheck`)&&ct(t.attributeNameCheck)&&(_e.attributeNameCheck=t.attributeNameCheck),er(t,`allowCustomizedBuiltInElements`)&&typeof t.allowCustomizedBuiltInElements==`boolean`&&(_e.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),Nn(_e),Te&&(Se=!1),Ne&&(Me=!0),Be&&(me=V({},_r),I=Pn(null),Be.html===!0&&(V(me,dr),V(I,vr)),Be.svg===!0&&(V(me,fr),V(I,yr),V(I,xr)),Be.svgFilters===!0&&(V(me,pr),V(I,yr),V(I,xr)),Be.mathMl===!0&&(V(me,hr),V(I,br),V(I,xr))),be.tagCheck=null,be.attributeCheck=null,er(e,`ADD_TAGS`)&&(typeof e.ADD_TAGS==`function`?be.tagCheck=e.ADD_TAGS:Un(e.ADD_TAGS)&&(me===he&&(me=sr(me)),V(me,e.ADD_TAGS,R))),er(e,`ADD_ATTR`)&&(typeof e.ADD_ATTR==`function`?be.attributeCheck=e.ADD_ATTR:Un(e.ADD_ATTR)&&(I===ge&&(I=sr(I)),V(I,e.ADD_ATTR,R))),er(e,`ADD_FORBID_CONTENTS`)&&Un(e.ADD_FORBID_CONTENTS)&&(Ve===He&&(Ve=sr(Ve)),V(Ve,e.ADD_FORBID_CONTENTS,R)),Re&&(me[`#text`]=!0),De&&V(me,[`html`,`head`,`body`]),me.table&&(V(me,[`tbody`]),delete ve.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw rr(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw rr(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);let t=T;T=e.TRUSTED_TYPES_POLICY;try{E=j(``)}catch(e){throw T=t,e}}else e.TRUSTED_TYPES_POLICY===null?(T=void 0,E=``):(T===void 0&&(T=te()),T&&typeof E==`string`&&(E=j(``)));Mn&&Mn(e),ot=e},ut=V({},[...fr,...pr,...mr]),dt=V({},[...hr,...gr]),ft=function(e,t,n){return t.namespaceURI===Je?e===`svg`:t.namespaceURI===Ke?e===`svg`&&(n===`annotation-xml`||et[n]):!!ut[e]},pt=function(e,t,n){return t.namespaceURI===Je?e===`math`:t.namespaceURI===qe?e===`math`&&nt[n]:!!dt[e]},mt=function(e,t,n){return t.namespaceURI===qe&&!nt[n]||t.namespaceURI===Ke&&!et[n]?!1:!dt[e]&&(rt[e]||!ut[e])},ht=function(e){let t=_(e);(!t||!t.tagName)&&(t={namespaceURI:Ye,tagName:`template`});let n=Wn(e.tagName),r=Wn(t.tagName);return Ze[e.namespaceURI]?e.namespaceURI===qe?ft(n,t,r):e.namespaceURI===Ke?pt(n,t,r):e.namespaceURI===Je?mt(n,t,r):!!(it===`application/xhtml+xml`&&Ze[e.namespaceURI]):!1},gt=function(e){Vn(t.removed,{element:e});try{_(e).removeChild(e)}catch{if(p(e),!_(e))throw rr(`a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`)}},_t=function(e,t,n){try{m(e,t)}catch{try{e.removeAttribute(n)}catch{}}},vt=function(e){bt(e);let t=g(e);if(t){let e=[];Rn(t,t=>{Vn(e,t)}),Rn(e,e=>{try{p(e)}catch{}})}let n=y(e);if(n)for(let t=n.length-1;t>=0;--t){let r=n[t],i=r&&r.name;typeof i==`string`&&_t(e,r,i)}},z=function(e,n,r){if(!r)try{r=n.getAttributeNode(e)}catch{r=null}Vn(t.removed,{attribute:r||null,from:n});try{r?m(n,r):n.removeAttribute(e)}catch{try{n.removeAttribute(e)}catch{}}if(e===`is`){if(Me||Ne)try{gt(n)}catch{}else try{n.setAttribute(e,``)}catch{}}},yt=function(e){let t=y(e);if(t)for(let n=t.length-1;n>=0;--n){let r=t[n],i=r&&r.name;typeof i!=`string`||I[R(i)]||_t(e,r,i)}},bt=function(e){let t=[e];for(;t.length>0;){let e=t.pop();C(e)===Ir.element&&yt(e);let n=g(e);if(n)for(let e=n.length-1;e>=0;--e)t.push(n[e])}},xt=function(e,t){return Ee?e===`patchsrc`||e===`for`&&t!==`label`&&t!==`output`:!1},St=function(e){if(!Ee)return;let t=[e];for(;t.length>0;){let e=t.pop(),n=C(e);if(n===Ir.processingInstruction||n===Ir.comment&&nr(Nr,e.data)){try{p(e)}catch{}continue}if(n===Ir.element){let t=e,n=R(w(e));try{t.hasAttribute&&t.hasAttribute(`patchsrc`)&&t.removeAttribute(`patchsrc`),t.hasAttribute&&t.hasAttribute(`for`)&&xt(`for`,n)&&t.removeAttribute(`for`)}catch{}}let r=g(e);if(r)for(let e=r.length-1;e>=0;--e)t.push(r[e])}},Ct=function(e){let t=null,r=null;if(je)e=`<remove></remove>`+e;else{let t=Kn(e,/^[\r\n\t ]+/);r=t&&t[0]}it===`application/xhtml+xml`&&Ye===Je&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=T?j(e):e;if(Ye===Je)try{t=new l().parseFromString(i,it)}catch{}if(!t||!t.documentElement){t=re.createDocument(Ye,`template`,null);try{t.documentElement.innerHTML=Xe?E:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),Ye===Je?ie.call(t,De?`html`:`body`)[0]:De?t.documentElement:a},wt=function(e){let t=S?S(e):e.ownerDocument;return M.call(t||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Tt=function(e){return e=qn(e,oe,` `),e=qn(e,se,` `),e=qn(e,F,` `),e},Et=function(e){e.normalize();let t=S?S(e):e.ownerDocument,n=M.call(t||e,e,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),r=n.nextNode();for(;r;)r.data=Tt(r.data),r=n.nextNode();let i=e.querySelectorAll?.call(e,`template`);i&&Rn(i,e=>{Ot(e.content)&&Et(e.content)})},Dt=function(e){let t=x?x(e):null;return typeof t!=`string`||R(t)!==`form`?!1:typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||e.attributes!==y(e)||typeof e.removeAttribute!=`function`||typeof e.removeAttributeNode!=`function`||typeof e.getAttributeNode!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`||e.nodeType!==b(e)||e.childNodes!==g(e)},Ot=function(e){if(!b||typeof e!=`object`||!e)return!1;try{return b(e)===Ir.documentFragment}catch{return!1}},kt=function(e){if(!b||typeof e!=`object`||!e)return!1;try{return typeof b(e)==`number`}catch{return!1}};function At(e,n,r){e.length!==0&&Rn(e,e=>{e.call(t,n,r,ot)})}let jt=function(e,t){return!!(Ee&&e.hasChildNodes()&&!kt(e.firstElementChild)&&nr(Mr,e.textContent)&&nr(Mr,e.innerHTML)||Ee&&e.namespaceURI===Je&&Rr[t]&&(kt(e.firstElementChild)||typeof e.textContent==`string`&&nr(zr[t],e.textContent))||e.nodeType===Ir.processingInstruction||Ee&&e.nodeType===Ir.comment&&nr(Nr,e.data))},Mt=function(e,t){return e instanceof RegExp?nr(e,t):e instanceof Function&&!!e(t,...[...arguments].slice(2))},Nt=function(e,t,n){if(!ve[t]&&zt(t)&&Mt(_e.tagNameCheck,t))return!1;if(Re&&!Ve[t]){let t=_(e),r=g(e);if(r&&t){let i=r.length;for(let a=i-1;a>=0;--a){let i=e===n?f(r[a],!0):r[a];t.insertBefore(i,h(e))}}}return gt(e),!0},Pt=function(e,t,n,r){return e.length===0?t:t===n||t===r?sr(t):t},Ft=function(e,t){return e===t||_(e)!==null?!1:(ze&&bt(e),!0)},It=function(e,n){if(At(P.beforeSanitizeElements,e,null),Ft(e,n))return!0;if(Dt(e))return gt(e),!0;let r=R(w(e));if(me=Pt(P.uponSanitizeElement,me,he,ke),At(P.uponSanitizeElement,e,{tagName:r,allowedTags:me}),Ft(e,n))return!0;if(jt(e,r))return gt(e),!0;if(ve[r]||!(be.tagCheck instanceof Function&&be.tagCheck(r))&&!me[r]){let t=Nt(e,r,n);return t===!1&&At(P.afterSanitizeElements,e,null),t}if(C(e)===Ir.element&&!ht(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&nr(Pr,e.innerHTML))return gt(e),!0;if(Te&&e.nodeType===Ir.text){let n=Tt(e.textContent);e.textContent!==n&&(Vn(t.removed,{element:e.cloneNode()}),e.textContent=n)}return At(P.afterSanitizeElements,e,null),!1},Lt=function(e,t,r){if(ye[t]||xt(t,e)||Fe&&(t===`id`||t===`name`)&&(r in n||r in st))return!1;let i=I[t]||be.attributeCheck instanceof Function&&be.attributeCheck(t,e);return Se&&nr(ce,t)||xe&&nr(le,t)?!0:i?We[t]||nr(pe,qn(r,de,``))||(t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&Jn(r,`data:`)===0&&Ue[e]||Ce&&!nr(ue,qn(r,de,``))?!0:!r:zt(e)&&Mt(_e.tagNameCheck,e)&&Mt(_e.attributeNameCheck,t,e)||t===`is`&&_e.allowCustomizedBuiltInElements&&Mt(_e.tagNameCheck,r)},Rt=V({},[`annotation-xml`,`color-profile`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`missing-glyph`]),zt=function(e){return!Rt[Wn(e)]&&nr(fe,e)},Bt=function(e,t,n,r){if(T&&typeof u==`object`&&typeof u.getAttributeType==`function`&&!n)switch(u.getAttributeType(e,t)){case`TrustedHTML`:return j(r);case`TrustedScriptURL`:return ee(r)}return r},Vt=function(e,t,n,r){try{return n?e.setAttributeNS(n,t,r):e.setAttribute(t,r),!Dt(e)||(gt(e),!1)}catch{return z(t,e),!1}},Ht=function(e){At(P.beforeSanitizeAttributes,e,null);let n=e.attributes;if(!n||Dt(e))return;I=Pt(P.uponSanitizeAttribute,I,ge,Ae);let r={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:I,forceKeepAttr:void 0},i=n.length,a=R(e.nodeName);for(;i--;){let o=n[i],s=o.name,c=o.namespaceURI,l=o.value,u=R(s),d=l,f=s===`value`?d:Yn(d),p=!1;if(r.attrName=u,r.attrValue=f,r.keepAttr=!0,r.forceKeepAttr=void 0,At(P.uponSanitizeAttribute,e,r),f=r.attrValue,Ie&&(u===`id`||u===`name`)&&Jn(f,Le)!==0&&(z(s,e,o),f=Le+f,p=!0),Ee&&nr(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,f)){z(s,e,o);continue}if(u===`attributename`&&Kn(f,`href`)){z(s,e,o);continue}if(!r.forceKeepAttr){if(!r.keepAttr){z(s,e,o);continue}if(!we&&nr(Fr,f)){z(s,e,o);continue}if(Te&&(f=Tt(f)),!Lt(a,u,f)){z(s,e,o);continue}f=Bt(a,u,c,f),f!==d&&Vt(e,s,c,f)&&p&&Bn(t.removed)}}At(P.afterSanitizeAttributes,e,null)},Ut=function(e){let t=null,n=wt(e);for(At(P.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)if(At(P.uponSanitizeShadowNode,t,null),It(t,e),Ht(t),Ot(t.content)&&Ut(t.content),C(t)===Ir.element){let e=v(t);Ot(e)&&(Wt(e),Ut(e))}At(P.afterSanitizeShadowDOM,e,null)},Wt=function(e){let t=[{node:e,shadow:null}];for(;t.length>0;){let e=t.pop();if(e.shadow){Ut(e.shadow);continue}let n=e.node,r=C(n)===Ir.element,i=g(n);if(i)for(let e=i.length-1;e>=0;--e)t.push({node:i[e],shadow:null});if(r){let e=x?x(n):null;if(typeof e==`string`&&R(e)===`template`){let e=n.content;Ot(e)&&t.push({node:e,shadow:null})}}if(r){let e=v(n);Ot(e)&&t.push({node:null,shadow:e},{node:e,shadow:null})}}};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,a=null,o=null,s=null;if(Xe=!e,Xe&&(e=`<!-->`),typeof e!=`string`&&!kt(e)&&(e=cr(e),typeof e!=`string`))throw rr(`dirty is not a string, aborting`);if(!t.isSupported)return e;Oe?(me=ke,I=Ae):lt(n),(P.uponSanitizeElement.length>0||P.uponSanitizeAttribute.length>0)&&(me=sr(me)),P.uponSanitizeAttribute.length>0&&(I=sr(I)),t.removed=[];let c=ze&&typeof e!=`string`&&kt(e);if(c){St(e);let t=w(e);if(typeof t==`string`){let n=R(t);if(!me[n]||ve[n])throw vt(e),rr(`root node is forbidden and cannot be sanitized in-place`)}if(Dt(e))throw vt(e),rr(`root node is clobbered and cannot be sanitized in-place`);try{Wt(e)}catch(t){throw vt(e),t}}else if(kt(e))i=Ct(`<!---->`),a=i.ownerDocument.importNode(e,!0),a.nodeType===Ir.element&&a.nodeName===`BODY`||a.nodeName===`HTML`?i=a:i.appendChild(a),Wt(i);else{if(!Me&&!Te&&!De&&e.indexOf(`<`)===-1)return T&&Pe?j(e):e;if(i=Ct(e),!i)return Me?null:Pe?E:``}i&&je&&gt(i.firstChild);let l=c?e:i;try{let e=wt(l);for(;o=e.nextNode();)It(o,l),Ht(o),Ot(o.content)&&Ut(o.content)}catch(n){throw c&&(vt(e),Rn(t.removed,e=>{e.element&&bt(e.element)})),n}if(c)return Rn(t.removed,e=>{e.element&&bt(e.element)}),Te&&Et(e),e;if(Me){if(Te&&Et(i),Ne)for(s=N.call(i.ownerDocument);i.firstChild;)s.appendChild(i.firstChild);else s=i;return(I.shadowroot||I.shadowrootmode)&&(s=ae.call(r,s,!0)),s}let u=De?i.outerHTML:i.innerHTML;return De&&me[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&nr(Ar,i.ownerDocument.doctype.name)&&(u=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+u),Te&&(u=Tt(u)),T&&Pe?j(u):u},t.setConfig=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};lt(e),Oe=!0,ke=me,Ae=I},t.clearConfig=function(){ot=null,Oe=!1,ke=null,Ae=null,T=D,E=``},t.isValidAttribute=function(e,t,n){ot||lt({});let r=R(e),i=R(t);return Lt(r,i,n)},t.addHook=function(e,t){typeof t==`function`&&er(P,e)&&Vn(P[e],t)},t.removeHook=function(e,t){if(er(P,e)){if(t!==void 0){let n=zn(P[e],t);return n===-1?void 0:Hn(P[e],n,1)[0]}return Bn(P[e])}},t.removeHooks=function(e){er(P,e)&&(P[e]=[])},t.removeAllHooks=function(){P=Hr()},t}var Kr=Gr(),qr=c(o(((e,t)=>{var n=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,r={},i={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof a?new a(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/\u00a0/g,` `)},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){n||={};var r,a;switch(i.util.type(t)){case`Object`:if(a=i.util.objId(t),n[a])return n[a];for(var o in r={},n[a]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case`Array`:return a=i.util.objId(t),n[a]?n[a]:(r=[],n[a]=r,t.forEach(function(t,i){r[i]=e(t,n)}),r);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return`none`},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,`gi`),``),e.classList.add(`language-`+n)},currentScript:function(){if(typeof document>`u`)return null;if(document.currentScript&&document.currentScript.tagName===`SCRIPT`)return document.currentScript;try{throw Error()}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName(`script`);for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var r=`no-`+t;e;){var i=e.classList;if(i.contains(t))return!0;if(i.contains(r))return!1;e=e.parentElement}return!!n}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){r||=i.languages;var a=r[e],o={};for(var s in a)if(a.hasOwnProperty(s)){if(s==t)for(var c in n)n.hasOwnProperty(c)&&(o[c]=n[c]);n.hasOwnProperty(s)||(o[s]=a[s])}var l=r[e];return r[e]=o,i.languages.DFS(i.languages,function(t,n){n===l&&t!=e&&(this[t]=o)}),o},DFS:function e(t,n,r,a){a||={};var o=i.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],r||s);var c=t[s],l=i.util.type(c);l===`Object`&&!a[o(c)]?(a[o(c)]=!0,e(c,n,null,a)):l===`Array`&&!a[o(c)]&&(a[o(c)]=!0,e(c,n,s,a))}}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:`code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code`};i.hooks.run(`before-highlightall`,r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),i.hooks.run(`before-all-elements-highlight`,r);for(var a=0,o;o=r.elements[a++];)i.highlightElement(o,t===!0,r.callback)},highlightElement:function(t,n,r){var a=i.util.getLanguage(t),o=i.languages[a];i.util.setLanguage(t,a);var s=t.parentElement;s&&s.nodeName.toLowerCase()===`pre`&&i.util.setLanguage(s,a);var c={element:t,language:a,grammar:o,code:t.textContent};function l(e){c.highlightedCode=e,i.hooks.run(`before-insert`,c),c.element.innerHTML=c.highlightedCode,i.hooks.run(`after-highlight`,c),i.hooks.run(`complete`,c),r&&r.call(c.element)}if(i.hooks.run(`before-sanity-check`,c),s=c.element.parentElement,s&&s.nodeName.toLowerCase()===`pre`&&!s.hasAttribute(`tabindex`)&&s.setAttribute(`tabindex`,`0`),!c.code){i.hooks.run(`complete`,c),r&&r.call(c.element);return}if(i.hooks.run(`before-highlight`,c),!c.grammar){l(i.util.encode(c.code));return}if(n&&e.Worker){var u=new Worker(i.filename);u.onmessage=function(e){l(e.data)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else l(i.highlight(c.code,c.grammar,c.language))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};if(i.hooks.run(`before-tokenize`,r),!r.grammar)throw Error(`The language "`+r.language+`" has no grammar.`);return r.tokens=i.tokenize(r.code,r.grammar),i.hooks.run(`after-tokenize`,r),a.stringify(i.util.encode(r.tokens),r.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var i=new c;return l(i,i.head,e),s(e,i,t,i.head,0),d(i)},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(n&&n.length)for(var r=0,a;a=n[r++];)a(t)}},Token:a};e.Prism=i;function a(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=(r||``).length|0}a.stringify=function e(t,n){if(typeof t==`string`)return t;if(Array.isArray(t)){var r=``;return t.forEach(function(t){r+=e(t,n)}),r}var a={type:t.type,content:e(t.content,n),tag:`span`,classes:[`token`,t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(a.classes,o):a.classes.push(o)),i.hooks.run(`wrap`,a);var s=``;for(var c in a.attributes)s+=` `+c+`="`+(a.attributes[c]||``).replace(/"/g,`&quot;`)+`"`;return`<`+a.tag+` class="`+a.classes.join(` `)+`"`+s+`>`+a.content+`</`+a.tag+`>`};function o(e,t,n,r){e.lastIndex=t;var i=e.exec(n);if(i&&r&&i[1]){var a=i[1].length;i.index+=a,i[0]=i[0].slice(a)}return i}function s(e,t,n,r,c,d){for(var f in n)if(n.hasOwnProperty(f)&&n[f]){var p=n[f];p=Array.isArray(p)?p:[p];for(var m=0;m<p.length;++m){if(d&&d.cause==f+`,`+m)return;var h=p[m],g=h.inside,_=!!h.lookbehind,v=!!h.greedy,y=h.alias;if(v&&!h.pattern.global){var b=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,b+`g`)}for(var x=h.pattern||h,S=r.next,C=c;S!==t.tail&&!(d&&C>=d.reach);C+=S.value.length,S=S.next){var w=S.value;if(t.length>e.length)return;if(!(w instanceof a)){var T=1,E;if(v){if(E=o(x,C,e,_),!E||E.index>=e.length)break;var D=E.index,O=E.index+E[0].length,k=C;for(k+=S.value.length;D>=k;)S=S.next,k+=S.value.length;if(k-=S.value.length,C=k,S.value instanceof a)continue;for(var A=S;A!==t.tail&&(k<O||typeof A.value==`string`);A=A.next)T++,k+=A.value.length;T--,w=e.slice(C,k),E.index-=C}else if(E=o(x,0,w,_),!E)continue;var D=E.index,j=E[0],ee=w.slice(0,D),te=w.slice(D+j.length),ne=C+w.length;d&&ne>d.reach&&(d.reach=ne);var re=S.prev;ee&&(re=l(t,re,ee),C+=ee.length),u(t,re,T);var M=new a(f,g?i.tokenize(j,g):j,y,j);if(S=l(t,re,M),te&&l(t,S,te),T>1){var N={cause:f+`,`+m,reach:ne};s(e,t,n,S.prev,C,N),d&&N.reach>d.reach&&(d.reach=N.reach)}}}}}}function c(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function l(e,t,n){var r=t.next,i={value:n,prev:t,next:r};return t.next=i,r.prev=i,e.length++,i}function u(e,t,n){for(var r=t.next,i=0;i<n&&r!==e.tail;i++)r=r.next;t.next=r,r.prev=t,e.length-=i}function d(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}if(!e.document)return e.addEventListener&&(i.disableWorkerMessageHandler||e.addEventListener(`message`,function(t){var n=JSON.parse(t.data),r=n.language,a=n.code,o=n.immediateClose;e.postMessage(i.highlight(a,i.languages[r],r)),o&&e.close()},!1)),i;var f=i.util.currentScript();f&&(i.filename=f.src,f.hasAttribute(`data-manual`)&&(i.manual=!0));function p(){i.manual||i.highlightAll()}if(!i.manual){var m=document.readyState;m===`loading`||m===`interactive`&&f&&f.defer?document.addEventListener(`DOMContentLoaded`,p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return i}(typeof window<`u`?window:typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope?self:{});t!==void 0&&t.exports&&(t.exports=n),typeof global<`u`&&(global.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:`attr-equals`},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:`named-entity`},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside[`attr-value`].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside[`internal-subset`].inside=n.languages.markup,n.hooks.add(`wrap`,function(e){e.type===`entity`&&(e.attributes.title=e.content.replace(/&amp;/,`&`))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r[`language-`+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};i[`language-`+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var a={};a[e]={pattern:RegExp(`(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)`.replace(/__/g,function(){return e}),`i`),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore(`markup`,`cdata`,a)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(e,t){n.languages.markup.tag.inside[`special-attr`].push({pattern:RegExp(`(^|["'\\s])(?:`+e+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,`i`),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,`language-`+t],inside:n.languages[t]},punctuation:[{pattern:/^=/,alias:`attr-equals`},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend(`markup`,{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+t.source+`)*?(?:;|(?=\\s*\\{))`),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:`selector`},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp(`\\burl\\((?:`+t.source+`|(?:[^\\\\\\r\\n()"']|\\\\[\\s\\S])*)\\)`,`i`),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp(`^`+t.source+`$`),alias:`url`}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+`)*(?=\\s*\\{)`),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined(`style`,`css`),n.tag.addAttribute(`style`,`css`))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend(`clike`,{"class-name":[n.languages.clike[`class-name`],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(`(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])`),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript[`class-name`][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore(`javascript`,`keyword`,{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:`language-regex`,inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:`function`},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore(`javascript`,`string`,{hashbang:{pattern:/^#!.*/,greedy:!0,alias:`comment`},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:`string`},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:`punctuation`},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:`property`}}),n.languages.insertBefore(`javascript`,`operator`,{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:`property`}}),n.languages.markup&&(n.languages.markup.tag.addInlined(`script`,`javascript`),n.languages.markup.tag.addAttribute(`on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)`,`javascript`)),n.languages.js=n.languages.javascript,(function(){if(n===void 0||typeof document>`u`)return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e=`Loading…`,t=function(e,t){return`✖ Error `+e+` while fetching file: `+t},r=`✖ Error: File does not exist or is empty`,i={js:`javascript`,py:`python`,rb:`ruby`,ps1:`powershell`,psm1:`powershell`,sh:`bash`,bat:`batch`,h:`c`,tex:`latex`},a=`data-src-status`,o=`loading`,s=`loaded`,c=`failed`,l=`pre[data-src]:not([`+a+`="`+s+`"]):not([`+a+`="`+o+`"])`;function u(e,n,i){var a=new XMLHttpRequest;a.open(`GET`,e,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?n(a.responseText):a.status>=400?i(t(a.status,a.statusText)):i(r))},a.send(null)}function d(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||``);if(t){var n=Number(t[1]),r=t[2],i=t[3];return r?i?[n,Number(i)]:[n,void 0]:[n,n]}}n.hooks.add(`before-highlightall`,function(e){e.selector+=`, `+l}),n.hooks.add(`before-sanity-check`,function(t){var r=t.element;if(r.matches(l)){t.code=``,r.setAttribute(a,o);var f=r.appendChild(document.createElement(`CODE`));f.textContent=e;var p=r.getAttribute(`data-src`),m=t.language;if(m===`none`){var h=(/\.(\w+)$/.exec(p)||[,`none`])[1];m=i[h]||h}n.util.setLanguage(f,m),n.util.setLanguage(r,m);var g=n.plugins.autoloader;g&&g.loadLanguages(m),u(p,function(e){r.setAttribute(a,s);var t=d(r.getAttribute(`data-range`));if(t){var i=e.split(/\r\n?|\n/g),o=t[0],c=t[1]==null?i.length:t[1];o<0&&(o+=i.length),o=Math.max(0,Math.min(o-1,i.length)),c<0&&(c+=i.length),c=Math.max(0,Math.min(c,i.length)),e=i.slice(o,c).join(`
`),r.hasAttribute(`data-start`)||r.setAttribute(`data-start`,String(o+1))}f.textContent=e,n.highlightElement(f)},function(e){r.setAttribute(a,c),f.textContent=e})}}),n.plugins.fileHighlight={highlight:function(e){for(var t=(e||document).querySelectorAll(l),r=0,i;i=t[r++];)n.highlightElement(i)}};var f=!1;n.fileHighlight=function(){f||=(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()}))(),1);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:`punctuation`},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:`string`},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:[`annotation`,`punctuation`],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python[`string-interpolation`].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python,(function(e){var t=`\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b`,n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:`punctuation`,inside:null},r={bash:n,environment:{pattern:RegExp(`\\$`+t),alias:`constant`},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp(`(\\{)`+t),lookbehind:!0,alias:`constant`}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:`important`},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:`function`},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:`function`}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:`variable`,lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp(`(^|[\\s;|&]|[<>]\\()`+t),lookbehind:!0,alias:`constant`}},alias:`variable`,lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:`variable`,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp(`\\$?`+t),alias:`constant`},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:`class-name`},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:`important`},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:`important`}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var i=[`comment`,`function-name`,`for-or-select`,`assign-left`,`parameter`,`string`,`environment`,`function`,`keyword`,`builtin`,`boolean`,`file-descriptor`,`operator`,`punctuation`,`number`],a=r.variable[1].inside,o=0;o<i.length;o++)a[i[o]]=e.languages.bash[i[o]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism),(function(e){function t(e){return e.replace(/__/g,function(){return`(?:[\\w-]+|'[^'\\n\\r]*'|"(?:\\\\.|[^\\\\"\\r\\n])*")`})}e.languages.toml={comment:{pattern:/#.*/,greedy:!0},table:{pattern:RegExp(t(`(^[\\t ]*\\[\\s*(?:\\[\\s*)?)__(?:\\s*\\.\\s*__)*(?=\\s*\\])`),`m`),lookbehind:!0,greedy:!0,alias:`class-name`},key:{pattern:RegExp(t(`(^[\\t ]*|[{,]\\s*)__(?:\\s*\\.\\s*__)*(?=\\s*=)`),`m`),lookbehind:!0,greedy:!0,alias:`property`},string:{pattern:/"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},date:[{pattern:/\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,alias:`number`},{pattern:/\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,alias:`number`}],number:/(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,boolean:/\b(?:false|true)\b/,punctuation:/[.,=[\]{}]/}})(Prism),(function(e){var t=e.languages.powershell={comment:[{pattern:/(^|[^`])<#[\s\S]*?#>/,lookbehind:!0},{pattern:/(^|[^`])#.*/,lookbehind:!0}],string:[{pattern:/"(?:`[\s\S]|[^`"])*"/,greedy:!0,inside:null},{pattern:/'(?:[^']|'')*'/,greedy:!0}],namespace:/\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,boolean:/\$(?:false|true)\b/i,variable:/\$\w+\b/,function:[/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,/\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],keyword:/\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,operator:{pattern:/(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,lookbehind:!0},punctuation:/[|{}[\];(),.]/};t.string[0].inside={function:{pattern:/(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,lookbehind:!0,inside:t},boolean:t.boolean,variable:t.variable}})(Prism);var Jr={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Yr=x.createContext&&x.createContext(Jr),Xr=[`attr`,`size`,`title`];function Zr(e,t){if(e==null)return{};var n,r,i=Qr(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Qr(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function $r(){return $r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$r.apply(null,arguments)}function ei(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ti(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ei(Object(n),!0).forEach(function(t){ni(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ei(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ni(e,t,n){return(t=ri(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ri(e){var t=ii(e,`string`);return typeof t==`symbol`?t:t+``}function ii(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ai(e){return e&&e.map((e,t)=>x.createElement(e.tag,ti({key:t},e.attr),ai(e.child)))}function oi(e){return t=>x.createElement(si,$r({attr:ti({},e.attr)},t),ai(e.child))}function si(e){var t=t=>{var n=e.attr,r=e.size,i=e.title,a=Zr(e,Xr),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),x.createElement(`svg`,$r({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:ti(ti({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&x.createElement(`title`,null,i),e.children)};return Yr===void 0?t(Jr):x.createElement(Yr.Consumer,null,e=>t(e))}function ci(e){return oi({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`13 2 3 14 12 14 11 22 21 10 12 10 13 2`},child:[]}]})(e)}function li(e){return oi({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`6`,x2:`6`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`6`,x2:`18`,y2:`18`},child:[]}]})(e)}function ui(e){return oi({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3`},child:[]}]})(e)}function di(e){return oi({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17`},child:[]}]})(e)}function fi(e){return oi({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`5`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`1`,x2:`12`,y2:`3`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`21`,x2:`12`,y2:`23`},child:[]},{tag:`line`,attr:{x1:`4.22`,y1:`4.22`,x2:`5.64`,y2:`5.64`},child:[]},{tag:`line`,attr:{x1:`18.36`,y1:`18.36`,x2:`19.78`,y2:`19.78`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`12`,x2:`3`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`12`,x2:`23`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`4.22`,y1:`19.78`,x2:`5.64`,y2:`18.36`},child:[]},{tag:`line`,attr:{x1:`18.36`,y1:`5.64`,x2:`19.78`,y2:`4.22`},child:[]}]})(e)}function pi(e){return oi({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`11`,cy:`11`,r:`8`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`},child:[]}]})(e)}function mi(e){return oi({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z`},child:[]}]})(e)}function hi(e){return oi({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`3`,y1:`12`,x2:`21`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`6`,x2:`21`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`18`,x2:`21`,y2:`18`},child:[]}]})(e)}function gi(e){return oi({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22`},child:[]}]})(e)}function _i(e){return oi({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`},child:[]}]})(e)}function vi(e){return oi({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`9 18 15 12 9 6`},child:[]}]})(e)}function yi(e){return oi({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`6 9 12 15 18 9`},child:[]}]})(e)}function bi(e){return oi({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`20 6 9 17 4 12`},child:[]}]})(e)}var xi=`# AxonWeave Documentation

:::DOC-NOTE
AxonWeave provides a computational interface for connectome-derived neural substrates. The current primary substrate is the Drosophila Male CNS v1.0 connectome.
:::

## What is AxonWeave?

AxonWeave is a Python library and computational framework for using connectome-derived neural substrates inside machine-learning, simulation, and agent systems.

It separates three things that are often conflated:

\`\`\`text
Biological data          (the MaleCNS connectome: source facts)
        ↓
Connectome substrate     (AxonWeave: sparse graph + identity + provenance)
        ↓
Neural dynamics          (AxonWeave: configurable models — LIF, rate, ...)
        ↓
Learning / plasticity    (AxonWeave: backprop modes, STDP, dopamine-modulated)
        ↓
Encoder                  (AxonWeave: images, tokens, sensors → neural currents)
        ↓
Biological neural substrate
        ↓
Readout / decoder        (AxonWeave: actions, tokens, classifications)
        ↓
Task / environment       (you: the computational problem)
\`\`\`

The connectome provides structure. AxonWeave adds configurable computational models. You supply the task or environment.

## What can I build?

| Category | Status |
|---|---|
| Connectome simulation | Stable |
| Sparse connectome layer inside PyTorch/Keras models | Stable |
| Image classification on a frozen substrate | Experimental |
| Next-token prediction as a task interface | Experimental |
| Interactive agents (environment loop with reward) | Experimental |
| Game control (Doom/Mario-style encoders/decoders) | Planned |
| Robotics/sensorimotor interfaces | Planned |
| Audio encoding | Planned |

## How it works

\`\`\`text
Input
  ↓
Encoder          — maps application data (pixels, tokens, sensors) to neural currents
  ↓
AxonWeave brain  — sparse connectome substrate
  ↓
Dynamics         — LIF / adaptive LIF / rate; how state evolves over time
  ↓
Readout/decoder  — maps neural activity back to predictions or actions
  ↓
Output / action
\`\`\`

Each component is independently configurable and replaceable. The brain is **stateful and recurrent**: it runs one timestep per call, carries state between calls, and supports sequence execution with deterministic replay — see [Temporal Runtime](runtime.md). Also see [Framework API](framework.md), [Neuron Dynamics](dynamics.md), [Encoders & Decoders](encoders.md), and [Experiments](experiment.md).

## Install

\`\`\`bash
pip install axonweave
axonweave substrate install male-cns:v1.0
\`\`\`

\`\`\`python
import axonweave

brain = axonweave.load("male-cns:v1.0")
\`\`\`

The Python package and the biological substrate are separate artifacts. \`pip install\` never downloads biological data. See [Installation](installation.md) and [Substrate Distribution](distribution.md).

## First example

\`\`\`python
import axonweave
from axonweave.numpy import ConnectomeLayer

brain = axonweave.load("male-cns:v1.0")
print(brain.n_neurons)                      # substrate size

layer = ConnectomeLayer(brain.graph)        # sparse propagation (NumPy reference)
import numpy as np
activity = layer(np.zeros((1, brain.n_neurons), dtype=np.float32))
\`\`\`

## Capabilities

| Capability | Status | Documentation |
|---|---|---|
| Substrate provisioning | Stable | [Distribution](distribution.md) |
| Sparse connectome graph | Stable | [Architecture](architecture.md) |
| PyTorch / Keras / NumPy layers | Stable | [Backends](backends.md) |
| Neuron dynamics (LIF, adaptive LIF, rate) | Experimental | [Dynamics](dynamics.md) |
| Encoders / decoders | Experimental | [Encoders](encoders.md) |
| Readout heads (classification/regression/token/action) | Experimental | [Readouts](readouts.md) |
| Plasticity (STDP, dopamine-modulated) | Experimental | [Learning](learning.md) |
| Rust compute core (compiled extension vs NumPy fallback) | Experimental | [Rust Core](rust-core.md) |
| Supervised task API (\`brain.task\`) | Experimental | [Framework API](framework.md) |
| Agent/environment API (\`brain.agent\`) | Experimental | [Experiments](experiment.md) |
| Checkpoints (substrate identity metadata) | Experimental | [Experiments](experiment.md) |
| Visualization | Planned | — |
| Interoperability (neuPrint, navis) | Optional | [Interoperability](interoperability.md) |

## Scientific scope

AxonWeave does not claim to reproduce the living fly nervous system. The upstream MaleCNS release provides structural connectivity, neuron identities and aggregate neurotransmitter predictions. It does not specify receptor dynamics, membrane behavior, delays or plasticity.

AxonWeave keeps these categories separate:

- **Source facts** — connectivity, body IDs, neurotransmitter predictions, preserved with provenance.
- **Model assumptions** — dynamics, signaling rules, receptor models, delays, plasticity. Always explicit and configurable.
- **Trained parameters** — anything learned from your task. Never presented as biology.

See [Scientific Reference](scientific-reference.md).

## Frameworks

| Framework | Install | Status |
|---|---|---|
| NumPy/SciPy | included | Reference implementation |
| PyTorch | \`pip install "axonweave[torch]"\` | Stable layer; experimental high-level API |
| TensorFlow/Keras | \`pip install "axonweave[tensorflow]"\` | Stable layer |
| JAX | \`pip install "axonweave[jax]"\` | Experimental (adapter + 22 tests written; CI verification pending) |

See [Backends](backends.md).

## Learning modes

| Mode | What trains | Status |
|---|---|---|
| Frozen connectome | encoders/readouts only | Experimental |
| Trainable synaptic weights (topology preserved) | existing edges | Experimental |
| Trainable neuron parameters | τ, thresholds, gain | Experimental |
| Local plasticity (STDP, three-factor) | synapses, locally | Experimental |
| Hybrid | backprop + plasticity | Experimental |

See [Learning & Plasticity](learning.md).

## Current status

- Core substrate loading: **Stable**
- Sparse connectome layer: **Stable**
- Neural dynamics: **Experimental**
- High-level task API: **Experimental**
- Agent API: **Experimental**
- Plasticity: **Experimental**

## Who should use it

- **ML researchers** who want a biologically structured recurrent substrate as a composable layer.
- **Computational neuroscientists** who want a reproducible, versioned connectome substrate with explicit model assumptions.
- **Agent/game developers** exploring connectome-based control experiments.
- **Contributors** building the framework further — see [Contributing](contributing.md).

## Where to go next

1. [Getting Started](getting-started.md) — install, provision, load.
2. [Core Concepts](core-concepts.md) — the mental model.
3. [Framework API](framework.md) — tasks, blocks, training modes.
4. [API Reference](api-reference.md) — full API.
`,Si=`# Getting Started

From a clean environment to a working substrate: install the package, provision the MaleCNS connectome, load a brain and wire it into PyTorch or Keras.

## Requirements

Python 3.10–3.14 is targeted. The core path requires NumPy, SciPy, PyArrow and the substrate cache dependencies. Framework integrations are optional extras.

## Install

\`\`\`bash
pip install axonweave
\`\`\`

PyTorch:

\`\`\`bash
pip install "axonweave[torch]"
\`\`\`

TensorFlow/Keras:

\`\`\`bash
pip install "axonweave[tensorflow]"
\`\`\`

All currently supported optional integrations:

\`\`\`bash
pip install "axonweave[all]"
\`\`\`

## Provision the biological substrate

\`\`\`bash
axonweave substrate install male-cns:v1.0
\`\`\`

The command owns download, validation, sparse graph construction and local activation. You do not need to manually download Feather files.

:::DOC-WARN
The full source release is multi-gigabyte. Provisioning is intentionally separate from \`pip install\` so installing Python dependencies does not unexpectedly download biological data.
:::

## Load

\`\`\`python
import axonweave

brain = axonweave.load("male-cns:v1.0")
print(brain.n_neurons)
\`\`\`

## PyTorch

Static (single-timestep) propagation through a layer:

\`\`\`python
import torch
from axonweave.torch import ConnectomeLayer

layer = ConnectomeLayer(
    brain.graph,
    trainable_edges=True,
    learnable_gain=True,
)

x = torch.randn(2, brain.n_neurons)
y = layer(x)
\`\`\`

Or the high-level stateful model (encoder -> runtime -> readout):

\`\`\`python
from axonweave.torch import BrainModel
from axonweave.encoders import VectorEncoder
from axonweave.dynamics import LIF
from axonweave.readout import RegressionReadout

model = BrainModel(
    brain=brain,
    encoder=VectorEncoder(input_dim=8, output_dim=256),
    dynamics=LIF(),
    readout=RegressionReadout(n_source=256, n_outputs=1),
)
model.reset_state()
for x_t in stream:
    prediction = model.step(x_t)     # state persists between steps
\`\`\`

See [Temporal Runtime](runtime.md) for sequences, state capture and BPTT.

## Keras

\`\`\`python
from axonweave.keras import ConnectomeLayer

layer = ConnectomeLayer(
    brain.graph,
    trainable_edges=True,
    learnable_gain=True,
)
\`\`\`

## JAX

\`\`\`bash
pip install "axonweave[jax]"
\`\`\`

\`\`\`python
import jax.numpy as jnp
from axonweave.jax import ConnectomeLayer

layer = ConnectomeLayer(
    brain.graph,
    trainable_edges=True,
    learnable_gain=True,
)

x = jnp.zeros((1, brain.n_neurons), dtype=jnp.float32)
y = layer(x)
\`\`\`

:::DOC-NOTE
The JAX adapter is experimental. The layer, brain model and block APIs are written and tested against the NumPy reference, but CI verification across JAX versions is pending. See [Backends](backends.md) for details.
:::

## Constraints

A full-connectome state is large. Production applications should deliberately select input projection, internal state, readout and batching strategies. Do not assume a full dense tensor of all neurons is cheap simply because the graph itself is sparse.
`,Ci=`# Architecture

AxonWeave separates source data, biological assumptions and framework execution.

## Runtime flow

\`\`\`text
MaleCNS source
    ↓
substrate manifest
    ↓
download + validate
    ↓
sparse substrate cache
    ↓
BiologicalBrain
    ↓
native.py dispatch layer
    ├── compiled extension (Rust/PyO3)
    └── NumPy/SciPy reference (identical results)
    ↓
framework adapter (tensor/device semantics)
    ↓
user model
\`\`\`

## Composability

AxonWeave layers are ordinary framework layers. A user can place them between arbitrary native or custom layers.

\`\`\`python
model = nn.Sequential(
    custom_input_encoder,
    nn.MultiheadAttention(...),
    axonweave_layer,
    custom_dynamics_layer,
    nn.LayerNorm(...),
    custom_readout,
)
\`\`\`

The exact tensor shapes are application-defined; the AxonWeave layer requires its final feature dimension to match the substrate state dimension.

## Rust core

Every computationally meaningful primitive now routes through a single dispatch layer (\`native.py\`) that either calls the compiled PyO3 extension (\`axonweave._native\`, built from \`rust/\`) or an identical NumPy/SciPy reference. Public results are the same either way; equivalence is proven in CI (\`tests/test_native_runtime.py\`, \`.github/workflows/rust.yml\`). The Rust core is a compute substrate, not a second runtime or a brain simulation. See [Rust Core](rust-core.md).

## Provenance

Every future trainable checkpoint should bind to a substrate fingerprint, biological-policy configuration and backend version.
`,wi='# Backends and Devices\n\nWhich frameworks AxonWeave integrates with, what each backend owns (tensor, sparse and device semantics), and how numerical equivalence between them is maintained and proven.\n\n## Supported package integrations\n\n### NumPy/SciPy\n\nReference CPU implementation. All compute first routes through `native.py`, which dispatches either to the compiled Rust/PyO3 extension or an identical NumPy/SciPy reference — public results are the same either way, and both paths are first-class. Useful for correctness tests, inspection and small graph experiments.\n\n### PyTorch\n\nInstalled with:\n\n```bash\npip install "axonweave[torch]"\n```\n\nThe integration exposes `axonweave.torch.ConnectomeLayer`, a `torch.nn.Module` computing `y = (x @ W) * gain + bias` with PyTorch sparse operations. Layer options:\n\n- `trainable_edges=True` — edge weights become an `nn.Parameter` (Mode 2 synaptic learning; the topology itself never changes).\n- `learnable_gain=True` — the global output gain trains.\n- `bias=True` — trainable per-neuron bias.\n- `selection=` — restrict the layer to a sub-network (`brain.graph.neurons...`).\n- `device=` — placement through `module.to(device)`; unsupported combinations raise `AXW004`.\n\nPassing an unrecognized `selection` type raises `ApiUsageError` (AXW010). Passing `signal_policy=` warns with `AXW007`: the sparse layer computes structural propagation only — see [Signals & Receptors](signals.md) for receptor and neurotransmitter models.\n\nThe layer preserves input dtype (float32 and float64 both round-trip), reports its structure via `repr` (`n_neurons`, `n_edges`, trainable flags, selection size), and exposes the backing CSR as `layer.graph_weights`.\n\n### TensorFlow/Keras\n\nInstalled with:\n\n```bash\npip install "axonweave[tensorflow]"\n```\n\nThe integration exposes `axonweave.keras.ConnectomeLayer`, a Keras `Layer` using TensorFlow sparse operations, with the same option set (`trainable_edges`, `learnable_gain`, `use_bias`, `selection`, `signal_policy`) and the same AXW010/AXW007 behavior as the PyTorch adapter.\n\nIt implements `get_config()`, so layers compose with `model.get_config()` / Keras cloning — the config records the structural options plus `n_neurons` provenance; the sparse topology is re-resolved from the substrate at deserialization time, where fingerprint validation still applies.\n\n## Device model\n\nAxonWeave does not maintain a second device abstraction. The host framework controls placement.\n\nFor PyTorch this can include CPU, CUDA, MPS, XPU and other devices supported by the installed PyTorch release. For TensorFlow it can include CPU, GPU and TPU configurations supported by TensorFlow and the specific sparse operator.\n\n:::DOC-WARN\nA device being recognized by a framework does not imply that every sparse operation used by AxonWeave is implemented on that device. Capability must be tested. Unsupported combinations must fail explicitly instead of silently copying data to CPU.\n:::\n\n## Backend contract\n\nA backend adapter must provide:\n\n- native tensor/layer type;\n- sparse graph representation;\n- gradient propagation where trainable;\n- device placement through native framework APIs;\n- dtype policy;\n- actionable capability errors.\n\n## JAX integration\n\nInstalled with:\n\n```bash\npip install "axonweave[jax]"\n```\n\nAn experimental adapter exists (`axonweave.jax`): `ConnectomeLayer`, `BrainModel`, `ConnectomeBlock`, `Input` and `Readout` wrapping JAX\'s native sparse (BCOO) and device APIs. It follows the same API contract as the torch/keras adapters — same option names, same AXW010/AXW007 guards, `layer.graph_weights` exposing the backing CSR, and a structural `repr` — with JAX-specific semantics: the layer is functional, so `trainable_edges` is accepted for API symmetry while gradient-based edge updates happen outside the layer via standard JAX transformations.\n\nThe adapter propagates `y = (x @ W) * gain + bias` via JAX BCOO sparse matrices, matching the numpy/torch/keras reference. BCOO construction is hardened: uses `bcoo_from_scipy_sparse` + `bcoo_sum_duplicates` with a fallback path for JAX versions before 0.4.37. Import-time failure raises `AXW006` (`BackendUnavailableError`).\n\n22 tests are authored (`tests/test_jax.py`) covering dense reference parity, 3D batched shapes, gain scaling, AXW010/AXW007 error paths, `jax.grad` through edge weights, `jax.jit` forward, block dynamics and `BrainModel` composition. A cross-backend numerical equivalence test (`test_jax_equals_numpy`) runs in the backend smoke matrix. CI verification across JAX versions is pending.\n\nJAX support remains an explicit optional target rather than a claim that every JAX sparse primitive is equivalent across accelerators.\n\n## Behavioral parity\n\nAll three framework adapters guarantee:\n\n- identical propagation semantics (`y = (x @ W) * gain + bias`) and cross-backend numerical equivalence tests;\n- `ApiUsageError` (AXW010) for dimension mismatches and invalid selections;\n- an explicit AXW007 warning rather than silent acceptance for `signal_policy`;\n- device errors as actionable `AXW004` messages, never silent CPU fallback;\n- fixed sparsity: trainable parameters change edge values, never the connectome topology.\n',Ti=`# Biological Model

AxonWeave is deliberately conservative about biological interpretation.

## Structural substrate

The MaleCNS graph supplies neuron identities and directed connectivity. AxonWeave preserves body-ID identity and sparse topology.

## Neurotransmitters

The upstream release provides aggregate neurotransmitter predictions. AxonWeave stores these as source facts.

It does **not** hard-code:

\`\`\`text
neurotransmitter X = always excitatory
neurotransmitter Y = always inhibitory
\`\`\`

Instead, a user can provide a receptor/sign policy:

\`\`\`python
policy = SignalPolicy(
    mapping={
        "acetylcholine": 1.0,
        "gaba": -1.0,
    },
    default_gain=0.0,
)
\`\`\`

Those values are model assumptions and must be documented with the experiment.

## Future biological layers

The model roadmap includes:

- receptor-specific transforms;
- neuron-type dynamics;
- synaptic delays;
- synapse-level neurotransmitter state;
- plasticity;
- morphology-aware computation;
- distributed partitioning.

A scientific claim must identify whether a value comes from the upstream dataset, literature, fitted training, or a user-defined assumption.
`,Ei=`# Interoperability

AxonWeave complements existing neuroscience tooling. External scientific tools remain authoritative for operations they already perform well. AxonWeave is the model/substrate layer, not a replacement for every neuroscience data-analysis package.

## neuPrint integration

[neuPrint](https://neuprint.janelia.org/) provides programmatic access to connectome data via \`neuprint-python\`. AxonWeave does not replace neuPrint. It provides a computational substrate layer on top of connectome queries.

### Query neurons from neuPrint

\`\`\`python
from neuprint import Client, fetch_neurons
import axonweave

c = Client("neuprint.janelia.org", dataset="male")

neurons = fetch_neurons(c, body_ids=[123456, 789012])
body_ids = neurons["bodyId"].values.tolist()

brain = axonweave.load("male-cns:v1.0")
selection = brain.neurons.by_body_id(body_ids)

missing = set(body_ids) - set(selection.body_ids)
if missing:
    print(f"Warning: {len(missing)} neurons not in substrate: {missing}")
\`\`\`

### Cross-reference connectivity

\`\`\`python
from neuprint import fetch_adjacency
import numpy as np

adj = fetch_adjacency(c, body_ids=[123456, 789012, 345678])
sub_adj = brain.graph.adjacency_matrix(selection=selection)

neuprint_edges = set(zip(adj["pre"], adj["post"]))
axonweave_edges = set(zip(*np.where(sub_adj.toarray() > 0)))

only_neuprint = neuprint_edges - axonweave_edges
only_axonweave = axonweave_edges - neuprint_edges
if only_neuprint:
    print(f"Edges in neuPrint but not AxonWeave: {len(only_neuprint)}")
if only_axonweave:
    print(f"Edges in AxonWeave but not neuPrint: {len(only_axonweave)}")
\`\`\`

:::DOC-WARN
neuPrint and AxonWeave may differ due to substrate processing, filtering, or version mismatches. Discrepancies are not necessarily errors. Document the source of each difference.
:::

### Reconcile identifiers

\`\`\`python
from neuprint import fetch_meta

meta = fetch_meta(c, body_ids=[123456])

for _, row in meta.iterrows():
    body_id = row["bodyId"]
    instance = row.get("instance", "unknown")
    neuron_type = row.get("type", "unknown")

    if brain.graph.has_body_id(body_id):
        print(f"Body {body_id}: {instance} ({neuron_type})")
    else:
        print(f"Body {body_id} not in substrate")
\`\`\`

## navis integration

[navis](https://navis-python.readthedocs.io/) provides morphology, skeleton, mesh, and visualization tools. AxonWeave graph state connects to morphology metadata through body IDs.

### Load morphology data

\`\`\`python
import navis
import axonweave

neurons = navis.read_swc("path/to/neurons.swc")
brain = axonweave.load("male-cns:v1.0")

body_ids = neurons.body_id.values
selection = brain.neurons.by_body_id(body_ids.tolist())

valid_ids = selection.body_ids
navis_subset = neurons[neurons.body_id.isin(valid_ids)]

print(f"Loaded {len(navis_subset)} neurons from substrate")
\`\`\`

### Combine graph and morphology

\`\`\`python
import navis
import axonweave

brain = axonweave.load("male-cns:v1.0")

visual = brain.neurons.by_region("optic_lobes")
visual_graph = brain.graph.subgraph(visual)
adj = visual_graph.adjacency_matrix()

neurons = navis.read_swc("optic_lobes.swc")
valid_neurons = neurons[neurons.body_id.isin(visual.body_ids)]

morpho_distances = navis.distal_to_proximal(valid_neurons)
\`\`\`

### Visualization handoff

\`\`\`python
import navis
import axonweave

brain = axonweave.load("male-cns:v1.0")

motor = brain.neurons.by_region("motor_cortex")
adj = brain.graph.adjacency_matrix(selection=motor)

neurons = navis.read_swc("motor_cortex.swc")
valid = neurons[neurons.body_id.isin(motor.body_ids)]

navis.plot3d(valid)
\`\`\`

## Body-ID round-trip tests

Body IDs must survive export and re-import without corruption. Round-trip tests verify this invariant.

### Export and re-import

\`\`\`python
import axonweave
import numpy as np

brain = axonweave.load("male-cns:v1.0")

original_ids = brain.graph.body_ids.copy()

brain.export_body_ids("body_ids.npy")
reimported = np.load("body_ids.npy")

assert np.array_equal(original_ids, reimported)
assert brain.graph.body_ids.dtype == reimported.dtype
\`\`\`

### Cross-format round-trip

\`\`\`python
import axonweave
import pandas as pd

brain = axonweave.load("male-cns:v1.0")

# Export as DataFrame
df = brain.graph.to_dataframe()
assert "body_id" in df.columns

# Re-import from DataFrame
graph2 = axonweave.ConnectomeGraph.from_dataframe(df)

assert np.array_equal(graph2.body_ids, brain.graph.body_ids)
assert graph2.num_neurons == brain.graph.num_neurons
\`\`\`

### JSON serialization round-trip

\`\`\`python
import axonweave
import json

brain = axonweave.load("male-cns:v1.0")

exported = brain.graph.to_json()
data = json.loads(exported)

graph2 = axonweave.ConnectomeGraph.from_json(json.dumps(data))

assert np.array_equal(graph2.body_ids, brain.graph.body_ids)
\`\`\`

:::DOC-NOTE
Body IDs are integers. They must not lose precision during serialization. JSON integers above 2^53 may lose precision in JavaScript. AxonWeave uses Python-native JSON handling to avoid this.
:::

## Neuron selection interoperability

Neuron selections must work consistently across all backends and survive serialization.

### Selection round-trip

\`\`\`python
import axonweave

brain = axonweave.load("male-cns:v1.0")

# Create selection
visual = brain.neurons.by_region("optic_lobes")
motor = brain.neurons.by_region("motor_cortex")

# Combine selections
combined = visual | motor  # union
intersected = visual & motor  # intersection (likely empty)
excluded = brain.neurons.all() - motor  # exclusion

# Serialize selection
serialized = combined.to_dict()

# Re-import
from axonweave.selection import NeuronSelection
restored = NeuronSelection.from_dict(serialized)

assert set(restored.body_ids) == set(combined.body_ids)
\`\`\`

### Selection with runtime

\`\`\`python
import axonweave
from axonweave.torch import BrainModel

brain = axonweave.load("male-cns:v1.0")

visual = brain.neurons.by_region("optic_lobes")

model = BrainModel(
    brain=brain,
    selection=visual,
    dynamics=axonweave.dynamics.LIF(),
    readout=axonweave.readouts.ClassificationReadout(
        source=visual,
        num_classes=10,
    ),
)

# Model operates only on selected neurons
output = model(torch.randn(1, visual.num_neurons))
assert output.shape == (1, 10)
\`\`\`

## Graph conversion documentation

AxonWeave graphs convert to common sparse formats for use with external tools.

### Convert to scipy sparse

\`\`\`python
import axonweave
import scipy.sparse

brain = axonweave.load("male-cns:v1.0")

adj = brain.graph.adjacency_matrix()

assert isinstance(adj, scipy.sparse.csr_matrix)
print(f"Shape: {adj.shape}, nnz: {adj.nnz}")
\`\`\`

### Convert to networkx

\`\`\`python
import axonweave
import networkx as nx

brain = axonweave.load("male-cns:v1.0")

G = brain.graph.to_networkx()

assert isinstance(G, nx.DiGraph)
print(f"Nodes: {G.number_of_nodes()}, Edges: {G.number_of_edges()}")
\`\`\`

### Convert to adjacency list

\`\`\`python
import axonweave

brain = axonweave.load("male-cns:v1.0")

adj_list = brain.graph.to_adjacency_list()

# adj_list is a dict: {body_id: [target_body_ids]}
for source, targets in list(adj_list.items())[:5]:
    print(f"{source} -> {len(targets)} targets")
\`\`\`

### Convert to edge list

\`\`\`python
import axonweave

brain = axonweave.load("male-cns:v1.0")

edges = brain.graph.to_edge_list()

# edges is a list of (source, target, weight) tuples
print(f"Total edges: {len(edges)}")
print(f"Sample: {edges[:3]}")
\`\`\`

## Import/export examples

### Export substrate metadata

\`\`\`python
import axonweave
import json

brain = axonweave.load("male-cns:v1.0")

metadata = {
    "substrate_id": brain.substrate_id,
    "substrate_version": brain.substrate_version,
    "neuron_count": brain.graph.num_neurons,
    "edge_count": brain.graph.num_edges,
    "fingerprint": brain.graph.fingerprint,
    "regions": brain.neurons.regions(),
}

with open("substrate_metadata.json", "w") as f:
    json.dump(metadata, f, indent=2)
\`\`\`

### Import external connectivity

\`\`\`python
import axonweave
import numpy as np
import scipy.sparse

brain = axonweave.load("male-cns:v1.0")

# Load external adjacency matrix
external_adj = scipy.sparse.load_npz("external_connectivity.npz")

# Verify compatibility
assert external_adj.shape[0] == external_adj.shape[1]
assert external_adj.shape[0] == brain.graph.num_neurons

# Create weighted subgraph
subgraph = brain.graph.subgraph(
    brain.neurons.by_region("optic_lobes")
)

# Merge external weights (additive)
combined = subgraph.adjacency_matrix() + external_adj
\`\`\`

### Export for simulation tools

\`\`\`python
import axonweave
import numpy as np

brain = axonweave.load("male-cns:v1.0")

# Export connectivity in common format
adj = brain.graph.adjacency_matrix().toarray()

np.savetxt(
    "connectivity_matrix.csv",
    adj,
    delimiter=",",
    fmt="%d",
)

# Export neuron positions (if available)
positions = brain.neurons.positions()
np.savetxt(
    "neuron_positions.csv",
    positions,
    delimiter=",",
    header="x,y,z",
)
\`\`\`

## Principle

Keep external scientific tools authoritative for the operations they already perform well. AxonWeave is the model/substrate layer, not a replacement for every neuroscience data-analysis package.
`,Di=`# Substrate Distribution

The Python wheel and the biological substrate are separate artifacts.

## Online

\`\`\`bash
pip install axonweave
axonweave substrate install male-cns:v1.0
\`\`\`

## Memory-bounded install

The default install assembles the graph in memory. On constrained machines, use the disk-backed builder, which streams edge batches to scratch files and never holds the full edge list in RAM:

\`\`\`bash
axonweave substrate install male-cns:v1.0 --disk-backed
\`\`\`

or programmatically:

\`\`\`python
from axonweave.data import DiskBackedGraphBuilder

with DiskBackedGraphBuilder("connectivity.feather", "graph.npz", batch_size=100_000) as b:
    graph = b.build()
\`\`\`

Both paths produce an identical graph and an identical content fingerprint, recorded in the substrate manifest and re-verified every time the substrate is loaded.

## Integrity

Each install records a SHA-256 content fingerprint of the built graph (canonical CSR payload + body IDs) in the manifest. \`axonweave substrate verify\` and every \`SubstrateRegistry.load()\` re-derive this fingerprint from the stored artifact and refuse a mismatched graph with \`AXW002\`, so a corrupted or swapped \`graph.npz\` cannot be silently activated.

## Cache

The default cache is under the platform's user cache directory and can be redirected with \`AXONWEAVE_HOME\`.

## Offline deployment: the \`.awb\` substrate artifact

An \`.awb\` file is a versioned AxonWeave substrate artifact: a ZIP archive
containing a \`manifest.json\`, the sparse CSR graph (\`graph.npz\`), biological
metadata attachments (selection tables \`annotations.json\`, neuron metadata
\`annotations.feather\`, \`neurotransmitters.feather\`, \`receptors.json\`,
\`stats.feather\` — each included when present) and optional retained upstream
source files under \`source/\`. It packs a substrate that is already installed
in the local cache — it never embeds the multi-gigabyte raw upstream archive
unless those files were retained during install.

### Pack

\`\`\`bash
axonweave substrate pack male-cns:v1.0 --output male-cns-v1.0.awb
\`\`\`

The manifest records the substrate ID and version, source release URL,
source checksums, graph fingerprint, neuron/edge counts, schema version and
the AxonWeave builder version. Two independently packed artifacts from the
same installed substrate produce identical graph fingerprints.

### Inspect

\`\`\`bash
axonweave substrate inspect ./male-cns-v1.0.awb
\`\`\`

Prints manifest metadata (identity, schema, fingerprint, size, provenance)
without loading the graph.

### Verify

\`\`\`bash
axonweave substrate verify ./male-cns-v1.0.awb
\`\`\`

Checks the schema version, the graph content fingerprint against the
manifest, graph size consistency, and sha256 of every recorded attachment
(biological metadata included). Any mismatch raises \`AXW002\`; an unsupported
or unknown schema raises \`AXW003\`.

### Install from a file

\`\`\`bash
axonweave substrate install-file ./male-cns-v1.0.awb
\`\`\`

The artifact is verified fully before activation: it is extracted into a
staging directory, validated, then atomically moved into the cache. A
corrupted or tampered artifact never replaces an existing installation.
Biological metadata files are restored alongside the graph and wired into
the loaded \`BiologicalBrain\` (\`brain.annotations\`, \`brain.neurotransmitters\`,
\`brain.receptors\`). After installation the substrate loads normally:

\`\`\`python
import axonweave
brain = axonweave.load("male-cns:v1.0")
brain.neurotransmitters  # restored from the .awb artifact
\`\`\`

### Schema versioning and migration

The manifest carries a \`schema_version\`. AxonWeave refuses (with \`AXW003\`)
to read artifacts whose schema is newer than supported, unknown, or has no
migration path — it never silently reinterprets a substrate.

Older schemas with registered migrations upgrade automatically: the chain of
applied migrations is recorded in the loaded manifest (\`migrations_applied\`)
and announced with an \`AXW007\` \`ConfigurationWarning\` at read time. Migrations
are transformations of the manifest itself (field renames, layout moves); the
\`migrations_applied\` field lists each step, e.g. \`["0.9->1.0"]\`.
Re-pack the artifact after a migration to update it in place.

To register a new migration (library developers):

\`\`\`python
from axonweave.data.awb import register_migration

@register_migration("1.0", "1.1")
def _migrate(manifest: dict) -> dict:
    manifest["new_field"] = manifest.pop("old_field", None)
    return manifest
\`\`\`

### Error handling

| Code | Meaning |
|------|---------|
| \`AXW001\` | Substrate not installed / cache entry incomplete when packing |
| \`AXW002\` | Integrity failure: fingerprint, size, attachment hash, or unsafe archive member |
| \`AXW003\` | Schema error: not an \`.awb\` artifact, newer/unknown schema, or no migration path |
| \`AXW007\` | Warning: a schema migration was applied to the manifest (explicit, non-silent) |

## Why not bundle it in PyPI?

The upstream release includes files ranging from tens of megabytes to multi-gigabyte synapse resources. A normal Python wheel should contain software, not force every installation to transfer the entire biological archive.
`,Oi=`# Scientific Reference

The provenance, identity and citation requirements for the biological data underlying every AxonWeave substrate — what is observed fact versus modeling choice.

## MaleCNS v1.0

The default substrate is the complete Drosophila male central nervous system connectome published by Janelia/FlyEM.

The upstream release includes the full connection graph, body annotations, aggregate neurotransmitter predictions, statistics, synapse resources and skeletons.

## Source files

See the repository \`DATA_SOURCES.md\` for the logical-to-upstream file mapping and provenance requirements.

## Scientific limitations

A connectome is not a complete dynamical specification. A computational model still needs assumptions about temporal integration, receptor effects, membrane/dynamics behavior, delays, stochasticity and plasticity.

AxonWeave treats these as explicit model components so that experiments can report what was measured from the source and what was selected by the modeler.

## Citation

The upstream project and publication should be cited in scientific work. Consult the current official MaleCNS release for its recommended citation and license terms.
`,ki=`# Release Engineering

How AxonWeave is built, tested, and published: CI matrices, wheel building with the native core, and what stays out of source control.

## CI matrix

Every push and PR runs across a full platform/Python matrix. Separate jobs handle Rust/PyO3 compilation, pure-Python fallback testing, and platform wheel builds.

| OS | Python | Rust | Notes |
|---|---|---|---|
| Ubuntu 22.04 | 3.10, 3.11, 3.12, 3.13, 3.14 | stable, nightly | Full matrix. CUDA optional. |
| macOS 14 (ARM64) | 3.10, 3.11, 3.12, 3.13, 3.14 | stable | MPS backend tested where available. |
| Windows Server 2022 | 3.10, 3.11, 3.12, 3.13, 3.14 | stable | MSVC toolchain. |

:::DOC-NOTE
Python 3.14 support follows CPython pre-release availability. Wheels may be published after 3.14.0 final.
:::

Each CI job runs:

\`\`\`bash
cargo test --manifest-path rust/Cargo.toml
pytest tests/ -x --tb=short
python -m axonweave verify  # native extension load check
\`\`\`

## Wheel building with maturin

AxonWeave uses [maturin](https://github.com/PyO3/maturin) to build platform-specific wheels containing the compiled Rust/PyO3 native extension. The build is triggered by the \`release\` workflow on tagged commits.

### Build matrix

Maturin builds produce one wheel per (OS, Python version, architecture) tuple:

\`\`\`text
axonweave-X.Y.Z-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
axonweave-X.Y.Z-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
axonweave-X.Y.Z-cp312-cp312-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
axonweave-X.Y.Z-cp313-cp313-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
axonweave-X.Y.Z-cp314-cp314-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
axonweave-X.Y.Z-cp310-cp310-macosx_14_0_arm64.whl
axonweave-X.Y.Z-cp311-cp311-macosx_14_0_arm64.whl
axonweave-X.Y.Z-cp312-cp312-macosx_14_0_arm64.whl
axonweave-X.Y.Z-cp313-cp313-macosx_14_0_arm64.whl
axonweave-X.Y.Z-cp314-cp314-macosx_14_0_arm64.whl
axonweave-X.Y.Z-cp310-cp310-win_amd64.whl
axonweave-X.Y.Z-cp311-cp311-win_amd64.whl
axonweave-X.Y.Z-cp312-cp312-win_amd64.whl
axonweave-X.Y.Z-cp313-cp313-win_amd64.whl
axonweave-X.Y.Z-cp314-cp314-win_amd64.whl
\`\`\`

### Build invocation

\`\`\`bash
maturin build --release --strip --manylinux auto --interpreter cpython --out dist/
\`\`\`

Key flags:

- \`--strip\` — reduces binary size by stripping debug symbols.
- \`--manylinux auto\` — targets the broadest compatible manylinux platform tag on Linux.
- \`--interpreter cpython\` — only builds for CPython (no PyPy wheels).

### Source distribution (sdist)

The source distribution contains:

\`\`\`text
python/axonweave/        # pure Python package
rust/                    # Rust source for the native extension
rust/Cargo.toml
pyproject.toml
README.md
LICENSE.md
\`\`\`

The sdist does **not** require a Rust toolchain to install. When maturin detects no Rust compiler, it falls back to the pure-Python path. The fallback in \`python/axonweave/native.py\` (\`_numpy_*\` functions) provides identical public behavior.

\`\`\`bash
# Install from sdist (no Rust required)
pip install axonweave-X.Y.Z.tar.gz
\`\`\`

:::DOC-WARN
sdist installs use NumPy/SciPy fallback paths. Performance parity with compiled wheels is not guaranteed. Native-equivalence tests verify functional correctness, not speed.
:::

## Native extension verification

After each wheel build, CI verifies the native extension loads and produces correct results.

### Load check

\`\`\`python
import axonweave
assert axonweave._native._HAS_NATIVE is True
\`\`\`

### Equivalence tests

\`tests/test_native_runtime.py\` runs every \`_numpy_*\` reference against its Rust kernel counterpart:

\`\`\`python
def test_edge_lut_map_native_equivalence():
    """Rust edge_lut_map matches _numpy_edge_lut_map."""
    from axonweave.native import edge_lut_map, _numpy_edge_lut_map
    # ... identical inputs → byte-identical outputs
\`\`\`

:::DOC-NOTE
Public behavior must be identical with or without the compiled extension. The extension is a performance optimization, not a correctness gate.
:::

### Fingerprint verification

Two independently built \`.awb\` artifacts from the same official source release must produce identical graph fingerprints. CI verifies this after substrate provisioning.

\`\`\`text
graph_fingerprint = sha256(
    body_id_array +
    edge_src_array +
    edge_dst_array +
    weight_array
)
\`\`\`

## Substrate installation from clean environment

Substrate provisioning is a first-class operation. CI runs a clean-environment installation test:

\`\`\`bash
# Create isolated environment
python -m venv /tmp/test-env
source /tmp/test-env/bin/activate

# Install AxonWeave
pip install axonweave

# Install substrate from official release
axonweave substrate install male-cns:v1.0

# Verify substrate integrity
axonweave substrate verify male-cns:v1.0
\`\`\`

The verification step checks:

1. **Source metadata** — provenance URLs and checksums match the official release.
2. **Schema version** — substrate schema is supported by the installed AxonWeave version.
3. **Graph integrity** — CSR indices are consistent, no dangling body IDs.
4. **Fingerprint** — computed fingerprint matches the published fingerprint.

:::DOC-WARN
Never add raw upstream MaleCNS data to source control. Substrate artifacts are provisioned and cached separately.
:::

## Release checksum and provenance

Every release produces:

### Checksums

\`\`\`text
axonweave-X.Y.Z.sha256
axonweave-X.Y.Z.sha512
\`\`\`

Generated with:

\`\`\`bash
sha256sum dist/* > dist/axonweave-X.Y.Z.sha256
sha512sum dist/* > dist/axonweave-X.Y.Z.sha512
\`\`\`

### Provenance metadata

Each wheel encodes provenance in \`pyproject.toml\`:

\`\`\`toml
[tool.maturin]
project-version = "X.Y.Z"
rust-version = "1.XX.0"
build-location = "github-actions"
source-url = "https://github.com/axonweave/axonweave"
\`\`\`

### PyPI publishing

Publishing uses GitHub Actions with PyPI Trusted Publishing/OIDC. No long-lived PyPI API token belongs in repository secrets.

The trusted publisher configuration:

| Field | Value |
|---|---|
| Repository | \`axonweave/axonweave\` |
| Workflow | \`release.yml\` |
| Environment | \`pypi\` |

Before enabling production publishing, configure the PyPI trusted publisher to match the repository, workflow, and environment.

## Release flow

\`\`\`text
┌─────────────────────────────────────────────────────────────────────┐
│                        Release Flow                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────────┐                                                   │
│  │ Tag vX.Y.Z   │                                                   │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ Quality Gates │  lint, typecheck, native equivalence tests       │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────────────────────────────────┐                       │
│  │ Platform Wheel Builds (maturin)          │                       │
│  │ Linux x86_64  × Python 3.10–3.14        │                       │
│  │ macOS ARM64   × Python 3.10–3.14        │                       │
│  │ Windows x86_64 × Python 3.10–3.14       │                       │
│  └──────┬───────────────────────────────────┘                       │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ sdist build  │  pure-Python fallback, no Rust required          │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ Verification │  wheel install, native load, equiv tests         │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ Checksums    │  sha256, sha512 per artifact                     │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ PyPI Publish │  Trusted Publishing / OIDC                       │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ Substrate    │  .awb pack, verify, publish                      │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ Docs Deploy  │  versioned docs from tag                         │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ Release Notes│  changelog, migration guide                      │
│  └──────────────┘                                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
\`\`\`

## Pre-release checklist

Before tagging a release, verify all items:

### Core

- [ ] All \`PLAN.md\` items at \`[x]\` have corresponding tests.
- [ ] \`CHECKLIST.md\` matches \`PLAN.md\` status.
- [ ] No public API lacks docstrings, type annotations, or examples.
- [ ] \`__all__\` exports are correct for every public module.

### Native

- [ ] Every \`_numpy_*\` reference has a Rust kernel counterpart.
- [ ] \`tests/test_native_runtime.py\` passes with and without native extension.
- [ ] maturin build succeeds on all three platforms.
- [ ] sdist installs cleanly without a Rust toolchain.

### Substrate

- [ ] \`.awb\` format supports the current schema version.
- [ ] \`axonweave substrate verify\` passes on the published artifact.
- [ ] Graph fingerprint is deterministic across independent builds.
- [ ] Substrate installation from clean environment succeeds.

### Scientific

- [ ] Every biological model has documented equations, parameters, units, and sources.
- [ ] Neurotransmitter predictions are explicitly labeled as predictions, not ground truth.
- [ ] Limitations report is current and accurate.
- [ ] Reproducibility fixtures produce identical results.

### Frameworks

- [ ] NumPy/SciPy backend verified.
- [ ] PyTorch backend verified.
- [ ] TensorFlow/Keras backend verified.
- [ ] JAX backend verified.
- [ ] Device capability matrix is current.

### Documentation

- [ ] Versioned docs deploy correctly.
- [ ] \`/playground\` direct navigation returns 200 OK.
- [ ] API reference is generated and accurate.
- [ ] Changelog covers all changes since last release.
- [ ] Migration guide exists for breaking changes.

### Security

- [ ] No API keys, tokens, or credentials in source control.
- [ ] No raw MaleCNS data in source control.
- [ ] No generated build directories in source control.
- [ ] Substrate download URLs are verified.

### Release

- [ ] Tag matches \`pyproject.toml\` version.
- [ ] PyPI trusted publisher is configured.
- [ ] Checksums generated for all artifacts.
- [ ] Release notes are drafted and reviewed.

## Versioning policy

AxonWeave follows Semantic Versioning:

| Change type | Version bump | Example |
|---|---|---|
| Bug fix | Patch | 1.0.0 → 1.0.1 |
| New feature | Minor | 1.0.0 → 1.1.0 |
| Breaking API change | Major | 1.0.0 → 2.0.0 |
| Substrate schema change | Minor or Major | depends on migration path |
| Native kernel change | Patch | functional equivalence maintained |

:::DOC-WARN
A native kernel change that alters numerical output (even within floating-point tolerance) requires a minor or major version bump and updated reproducibility fixtures.
:::

## Rollback and yanking

If a release is found to have critical issues:

\`\`\`bash
# Yank from PyPI (keeps the release visible, prevents new installs)
pip install axonweave==X.Y.Z  # fails after yank
\`\`\`

Yanking does not delete the release. It prevents new installations while preserving existing installations. Always follow a yank with a patch release containing the fix.
`,Ai=`# Contributing to AxonWeave

How to propose changes, report issues, and participate in AxonWeave development.

## Before contributing

Read, in order:

1. \`AGENTS.md\` — agent contract, non-negotiable principles.
2. \`PLAN.md\` — current development status and priorities.
3. \`ARCHITECTURE.md\` — system model and layering.
4. \`CODE_TOKENS.md\` — cross-cutting library identifiers.
5. \`docs-site/AGENTS.md\` and \`docs-site/DESIGN.md\` — for documentation frontend work.

Every public API change should include tests and documentation. Scientific behavior changes must identify their source or state that they are user-configurable assumptions.

Do not commit raw MaleCNS data or generated build artifacts.

## Development setup

### Prerequisites

\`\`\`text
Python 3.10+
Rust toolchain (stable) — required for native extension development
Git
\`\`\`

### Clone and install

\`\`\`bash
git clone https://github.com/axonweave/axonweave.git
cd axonweave
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
# .venv\\Scripts\\activate   # Windows

# Install in development mode with all extras
pip install -e ".[dev,test,docs]"
\`\`\`

### Install with native extension

\`\`\`bash
# Requires Rust toolchain (rustup, cargo)
pip install maturin
maturin develop --release
\`\`\`

### Verify installation

\`\`\`bash
# Run the test suite
pytest tests/ -x --tb=short

# Check native extension loads
python -c "import axonweave; print(axonweave._native._HAS_NATIVE)"

# Run linting
ruff check python/
ruff format --check python/
\`\`\`

### Pure-Python fallback

If you do not have a Rust toolchain, AxonWeave still works via NumPy/SciPy fallbacks in \`python/axonweave/native.py\`. All \`_numpy_*\` functions provide identical public behavior to the compiled kernels.

\`\`\`bash
# Install without Rust — pure Python path
pip install -e .
\`\`\`

:::DOC-NOTE
The pure-Python path is fully functional but may be slower for large-scale operations. Native equivalence tests verify functional correctness, not speed.
:::

## Code of conduct

All participants must follow the [Code of Conduct](/code-of-conduct). This applies to issues, pull requests, discussions, and any public interaction.

## How to propose new biological models

Biological model proposals require explicit documentation and review. Follow this process:

### 1. Open an RFC issue

Use the **Biological Model RFC** issue template. Include:

\`\`\`text
Title: [RFC] Add [model name] receptor model

## Summary
Brief description of the biological model.

## Biological basis
- Source paper(s) with DOI
- Experimental evidence
- Species and preparation

## Equations
- Mathematical formulation
- Parameter definitions with units
- Parameter sources (fitted vs. assumed)

## Assumptions
- What this model assumes
- What this model does NOT simulate
- Comparison to existing receptor models

## Implementation plan
- New files/modules
- Backward compatibility
- Test strategy
\`\`\`

### 2. Review criteria

Every biological model proposal is evaluated on:

| Criterion | Requirement |
|---|---|
| Source provenance | Published peer-reviewed paper with DOI |
| Parameter transparency | Every parameter must have a documented source |
| Assumption clarity | Assumptions must be explicitly listed |
| Scope honesty | Must not claim to simulate what it does not |
| Fallback behavior | Must not break existing models |

### 3. Merge requirements

- [ ] RFC approved by at least one maintainer with domain expertise.
- [ ] Source papers cited with DOI.
- [ ] Equations documented with units.
- [ ] Parameters separated into fitted vs. assumed.
- [ ] Tests cover numerical behavior.
- [ ] Documentation includes limitations.

:::DOC-WARN
Never silently turn a predicted neurotransmitter into an excitatory/inhibitory truth. A source observation, a fitted parameter, and a modeling assumption must have separate representations.
:::

## How to report scientific inaccuracies

Use the **Scientific Inaccuracy Report** issue template:

\`\`\`text
Title: [SCIENCE] Inaccuracy in [module/behavior]

## What is wrong
Describe the inaccuracy.

## Correct behavior
What the correct behavior should be, with references.

## Evidence
- Source papers
- Data
- Expected numerical values

## Impact
- Which users/models are affected
- Severity (correctness vs. approximation)
\`\`\`

Scientific inaccuracies are treated as bugs and triaged accordingly. Correctness issues in biological models receive priority.

## Style guides

### Python code style

Follow existing conventions. Key rules:

\`\`\`python
# Type annotations required on all public functions
def propagate_sparse(
    adjacency: np.ndarray,
    signals: np.ndarray,
    weights: np.ndarray,
) -> np.ndarray:
    ...

# Docstrings: Google style, every public function
def compute_stdp_update(
    pre_spikes: np.ndarray,
    post_spikes: np.ndarray,
    w: np.ndarray,
    *,
    a_plus: float = 0.01,
    a_minus: float = 0.012,
) -> np.ndarray:
    """Compute STDP weight update.

    Args:
        pre_spikes: Binary pre-synaptic spike train [N].
        post_spikes: Binary post-synaptic spike train [N].
        w: Current weights [N].
        a_plus: LTP amplitude.
        a_minus: LTD amplitude.

    Returns:
        Weight delta [N].

    Raises:
        AXW010: If input shapes are incompatible.
    """
\`\`\`

Style enforcement:

\`\`\`bash
ruff check python/
ruff format python/
\`\`\`

### Documentation style

- Concrete nouns, explicit prerequisites, exact commands.
- No generic buzzwords, no marketing language.
- Every claim must be verifiable or explicitly labeled as assumption.
- Use \`:::DOC-NOTE\`, \`:::DOC-WARN\`, \`:::DOC-TIP\` callouts.
- Code blocks use language-specific fences (\`python\`, \`rust\`, \`bash\`, \`text\`).
- Use exact module paths (\`axonweave.dynamics\`, \`axonweave.runtime\`).

### Rust code style

Follow \`rustfmt\` defaults. No custom configuration.

\`\`\`bash
cargo fmt --manifest-path rust/Cargo.toml
cargo clippy --manifest-path rust/Cargo.toml
\`\`\`

## PR process

### 1. Fork and branch

\`\`\`bash
git checkout -b fix/short-description
# or
git checkout -b feat/short-description
# or
git checkout -b science/model-name
\`\`\`

Branch naming:

| Prefix | Use |
|---|---|
| \`fix/\` | Bug fixes |
| \`feat/\` | New features |
| \`science/\` | Biological model changes |
| \`docs/\` | Documentation only |
| \`refactor/\` | Code restructuring |
| \`ci/\` | CI/CD changes |

### 2. Implement with tests

Every change requires:

- [ ] Tests covering the changed behavior.
- [ ] Documentation updates if public API changed.
- [ ] \`CHECKLIST.md\` update if scope changed.

### 3. Run checks locally

\`\`\`bash
# Lint and format
ruff check python/
ruff format --check python/

# Type check
mypy python/axonweave/

# Tests
pytest tests/ -x --tb=short

# Native equivalence (if Rust changes)
cargo test --manifest-path rust/Cargo.toml
pytest tests/test_native_runtime.py -x
\`\`\`

### 4. Submit PR

Include in PR description:

- What changed and why.
- Link to related issue.
- Test results.
- Any scientific references for biological changes.

### 5. Review expectations

Reviewers check:

| Area | What to look for |
|---|---|
| Correctness | Logic, edge cases, numerical stability |
| Scientific accuracy | Source provenance, assumption transparency |
| API stability | No breaking changes without migration notes |
| Tests | Coverage of changed behavior |
| Documentation | Updated if public API changed |
| Style | Consistent with existing code |

:::DOC-NOTE
Reviewers may request changes. Respond to feedback within a reasonable timeframe. Stale PRs (>30 days without activity) may be closed.
:::

## RFC process for biological changes

Significant biological model changes require an RFC before implementation.

### When RFC is required

- New receptor model
- New neuron dynamics model
- New plasticity rule
- Changes to existing biological model behavior
- Changes to neurotransmitter interpretation

### When RFC is NOT required

- Bug fixes that restore documented behavior
- Performance optimizations that preserve numerical output
- Documentation updates
- Test additions
- Refactoring without behavior change

### RFC lifecycle

\`\`\`text
RFC Issue opened
  ↓
Discussion period (minimum 7 days)
  ↓
Maintainer review
  ↓
Approved / Revised / Rejected
  ↓
Implementation (if approved)
  ↓
PR review against RFC
  ↓
Merge
\`\`\`

### RFC template

\`\`\`markdown
# RFC: [Title]

## Status
Draft / Under Review / Approved / Rejected

## Summary
One-paragraph description.

## Motivation
Why this change is needed.

## Biological basis
Source papers, experimental evidence, parameter sources.

## Mathematical formulation
Equations, parameters, units.

## Design
How this integrates with AxonWeave.

## Assumptions and limitations
What this does and does not simulate.

## Alternatives considered
Other approaches and why they were rejected.

## Migration
How existing users are affected.
\`\`\`

## Merge rights and governance

### Maintainer roles

| Role | Responsibilities |
|---|---|
| **Maintainer** | Merge PRs, review biological RFCs, manage releases |
| **Domain Expert** | Review biological model changes for scientific accuracy |
| **Contributor** | Submit PRs, participate in discussions |

### Merge rules

- All PRs require at least one maintainer approval.
- Biological model changes require domain expert approval.
- CI must pass before merge.
- No force-push to \`main\`.
- No direct commits to \`main\`.

### Conflict resolution

1. Author and reviewer discuss in PR.
2. If unresolved, a second maintainer arbitrates.
3. If still unresolved, the project lead decides.
4. All decisions are documented in the PR.

### Branch protection

\`\`\`text
main branch:
  - Require PR reviews (minimum 1)
  - Require CI pass
  - No force-push
  - No direct commits
  - Require signed commits
\`\`\`

### Release process

1. Maintainer creates release branch from \`main\`.
2. Version bump in \`pyproject.toml\`.
3. \`CHECKLIST.md\` and \`PLAN.md\` updated.
4. Release PR reviewed and merged.
5. Tag created on merged commit.
6. CI builds and publishes wheels.

## Issue templates

### Bug report

\`\`\`text
Title: [BUG] Description

## Environment
- Python version:
- AxonWeave version:
- OS:
- Backend (NumPy/PyTorch/etc.):

## Steps to reproduce
1. ...
2. ...

## Expected behavior
What should happen.

## Actual behavior
What actually happens. Include error messages exact.

## Minimal reproducible example
\`\`\`python
# code here
\`\`\`
\`\`\`

### Feature request

\`\`\`text
Title: [FEAT] Description

## Use case
Why this feature is needed.

## Proposed behavior
What the feature should do.

## Alternatives considered
Other approaches.
\`\`\`

### Scientific issue

\`\`\`text
Title: [SCIENCE] Description

## What is wrong
Describe the inaccuracy.

## Source
Papers, data, references.

## Correct behavior
What the correct behavior should be.
\`\`\`

## Recognition

Contributors are recognized in:

- \`CONTRIBUTORS.md\` (root of repository).
- Release notes for significant contributions.
- Academic citations for scientific contributions.
`,ji=`# API Reference

Complete reference for every public class and function in AxonWeave. Each entry includes what it does, what it returns, and a working code example.

## Loading substrates

### \`axonweave.load substrate_id\`

Loads an installed substrate and returns a \`BiologicalBrain\`. The substrate must already be installed via the CLI — this function never downloads data.

\`\`\`python
import axonweave

brain = axonweave.load("male-cns:v1.0")
print(f"Loaded {brain.n_neurons:,} neurons")
\`\`\`

Raises \`AXW001\` if the substrate is not installed. Raises \`AXW002\` if the substrate data is corrupted or was built from a different version.

### \`axonweave.substrate install\`

Downloads, validates and activates a substrate. Run this before \`load()\`.

\`\`\`bash
axonweave substrate install male-cns:v1.0
axonweave substrate install male-cns:v1.0 --disk-backed  # bounded-RAM build
axonweave substrate verify male-cns:v1.0                  # check integrity
axonweave substrate status                                # list installed
\`\`\`

## BiologicalBrain

The main object returned by \`load()\`. Binds the connectome graph to metadata and framework adapters.

\`\`\`python
brain = axonweave.load("male-cns:v1.0")

brain.n_neurons              # int: number of neurons (166,700 for MaleCNS)
brain.graph                  # ConnectomeGraph: the sparse connectivity
brain.fingerprint            # str: deterministic substrate fingerprint
brain.metadata               # NeuronMetadataStore: lazy-loaded annotations

brain.info()                 # BrainInfo: structured metadata
brain.info().summary()       # str: human-readable substrate summary
brain.capabilities()         # dict: available backends, dynamics, learning rules
brain.memory_estimate()      # dict: per-component byte footprint

brain.torch_layer(...)       # PyTorch ConnectomeLayer
brain.keras_layer(...)       # Keras ConnectomeLayer
brain.layer(...)             # framework-dispatched layer
brain.task(...)              # supervised task (encoder -> brain -> readout)
brain.agent(...)             # RL agent (encoder -> brain -> decoder -> env)
\`\`\`

### Memory estimation

\`\`\`python
est = brain.memory_estimate(dtype="float32", state="full")
# {'neuron_state': 2_667_200, 'edge_parameters': 102_400_000, 'total': ..., ...}
\`\`\`

Covers neuron membrane state, edge parameters, delay buffers, receptor state and plasticity traces. Use this to plan GPU memory before building a model.

## ConnectomeGraph

The sparse connectivity object. Preserves original body IDs from the MaleCNS dataset.

\`\`\`python
graph = brain.graph

graph.n_neurons              # int: neuron count
graph.n_edges                # int: directed edge count
graph.weights                # scipy.sparse.csr_matrix: connectivity matrix
graph.body_ids               # numpy array: body ID for each matrix row

graph.index(body_id)         # int: matrix row index for a body ID
graph.neighbors(body_id)     # array: outgoing neighbor body IDs
graph.neurons                # NeuronSelection: selection API

# Selection by various criteria
graph.neurons.all()                          # all neurons
graph.neurons.ids([12345, 67890])            # specific body IDs
graph.neurons.by_type("Kenyon cell")         # by cell type
graph.neurons.by_region("mushroom body")     # by brain region
graph.neurons.by_mask(mask_array)            # boolean mask
\`\`\`

## NeuronSelection

Returned by \`brain.graph.neurons\`. Used to restrict layers to sub-networks.

\`\`\`python
sel = brain.graph.neurons.by_region("mushroom body")
len(sel)                      # number of selected neurons
sel.body_ids                  # array of selected body IDs

# Use in a layer
layer = brain.torch_layer(selection=sel)
\`\`\`

Raises \`AXW010\` if any requested body ID does not exist in the substrate.

## ConnectomeLayer (PyTorch)

A \`torch.nn.Module\` that computes sparse propagation through the connectome.

\`\`\`python
import torch
from axonweave.torch import ConnectomeLayer

layer = ConnectomeLayer(
    brain.graph,
    trainable_edges=False,    # True: edge weights become nn.Parameter
    learnable_gain=False,     # True: global gain trains
    bias=False,               # True: per-neuron bias trains
    selection=None,            # NeuronSelection to restrict sub-network
    signal_policy=None,        # raises AXW007 warning (structural only)
    device=None,               # 'cuda', 'mps', etc.
)

x = torch.randn(4, brain.n_neurons)   # batch of 4
y = layer(x)                           # (4, n_neurons)

print(layer)  # ConnectomeLayer(n_neurons=166700, n_edges=25600000, ...)
\`\`\`

Preserves input dtype (float32 and float64). Exposes \`layer.graph_weights\` (the backing CSR). Raises \`AXW010\` on dimension mismatches and invalid selections.

## ConnectomeLayer (Keras)

A \`tf.keras.layers.Layer\` with the same semantics as the PyTorch version.

\`\`\`python
from axonweave.keras import ConnectomeLayer

layer = ConnectomeLayer(
    brain.graph,
    trainable_edges=True,
    learnable_gain=True,
    use_bias=True,
)

config = layer.get_config()   # serializable config for cloning
\`\`\`

Implements \`get_config()\` for Keras serialization. The sparse topology is re-resolved from the substrate at deserialization time.

## ConnectomeRuntime

Stateful temporal execution over the connectome. The NumPy reference path is the semantic source of truth.

\`\`\`python
from axonweave.runtime import ConnectomeRuntime
from axonweave.dynamics import LIF

rt = ConnectomeRuntime(brain.graph, dynamics=LIF())

rt.reset_state()                  # clear state, t -> 0
y = rt.step(x_t)                  # one timestep; state persists
seq = rt.forward_sequence(x)      # [..., T, F] -> [..., N]

state = rt.get_state()            # deep-copied RuntimeState snapshot
rt.set_state(state)               # restore (replay / branch)
rt.detach_state()                 # BPTT boundary

rt.timestep                       # current clock value
rt.memory_estimate()              # per-component state bytes
\`\`\`

\`forward_sequence\` is exactly equivalent to sequential \`step\` calls from the same initial state. This is enforced by tests across Rate, LIF and AdaptiveLIF.

### State objects

\`get_state()\` returns a \`RuntimeState\` containing:

- \`NeuronState\`: membrane potential, adaptive variables, refractory state, clock
- \`SynapticState\`: delayed signals, receptor state
- \`PlasticityState\`: STDP traces, eligibility traces, reward traces
- \`timestep\`: scalar clock

All snapshots are deep-copied. \`to_dict()\` provides a plain-Python serializable view.

## BrainModel (PyTorch)

Declarative model composition: encoder -> stateful runtime -> readout.

\`\`\`python
from axonweave.torch import BrainModel
from axonweave.encoders import VectorEncoder
from axonweave.dynamics import LIF
from axonweave.readout import RegressionReadout

model = BrainModel(
    brain=brain,
    encoder=VectorEncoder(input_dim=8, output_dim=256),
    dynamics=LIF(),
    readout=RegressionReadout(n_source=256, n_outputs=1),
)

model.reset_state()
for x_t in stream:
    prediction = model.step(x_t)

# Or process a full sequence at once
seq_out = model.forward_sequence(sequence)   # [..., T, F] -> [..., T, out]

# State management
state = model.get_state()
model.set_state(state)       # replay
model.detach_state()         # truncated BPTT boundary
\`\`\`

Exposes \`model.encoder\`, \`model.brain\`, \`model.dynamics\`, \`model.readout\`, \`model.runtime\`. When dynamics is \`SurrogateLIF\` or \`SurrogateAdaptiveLIF\`, \`loss.backward()\` reaches edge weights through the sequence (BPTT).

## Dynamics

### LIF (Leaky Integrate-and-Fire)

\`\`\`python
from axonweave.dynamics import LIF

lif = LIF(
    tau_membrane=0.015,    # membrane time constant (seconds)
    v_threshold=-0.050,    # spike threshold (volts)
    v_rest=-0.070,         # resting potential (volts)
    dt=0.001,              # timestep (seconds)
)
\`\`\`

Single-compartment LIF with absolute refractory period. No gradient path through spikes — use \`SurrogateLIF\` for BPTT.

### SurrogateLIF

\`\`\`python
from axonweave.dynamics import SurrogateLIF, SigmoidSurrogate

lif = SurrogateLIF(
    tau_membrane=0.015,
    surrogate=SigmoidSurrogate(k=5.0),
)
\`\`\`

Differentiable LIF for gradient-based training. Forward: hard threshold. Backward: surrogate derivative. Four surrogate families available: \`SigmoidSurrogate\`, \`ATanSurrogate\`, \`PiecewiseLinearSurrogate\`, \`StraightThroughEstimator\`.

### AdaptiveLIF

Adds threshold adaptation to LIF. \`SurrogateAdaptiveLIF\` provides the differentiable version.

### Rate

Instantaneous firing-rate model. No spikes, no refractory period. Cheapest dynamics for gradient training.

## Encoders

### VectorEncoder

\`\`\`python
from axonweave.encoders import VectorEncoder

enc = VectorEncoder(input_dim=8, output_dim=256, seed=0)
print(enc.input_shape)   # (8,)
print(enc.output_size)   # 256
currents = enc(torch.randn(4, 8))   # (4, 256)
\`\`\`

Fixed random projection. The default for static feature data.

### TimeSeriesEncoder

\`\`\`python
from axonweave.encoders import TimeSeriesEncoder

enc = TimeSeriesEncoder(input_dim=10, output_dim=256, window=1)
print(enc.input_shape)   # (1, 10)
seq_currents = enc(torch.randn(4, 50, 10))   # (4, 50, 256)
\`\`\`

Per-timestep encoder for \`[B, T, features]\` streams. \`window=1\` is memoryless; \`window=k\` carries a k-step delay line.

### ImageEncoder, TokenEncoder, SensorEncoder

See [Encoders & Decoders](encoders.md) for visual, text and telemetry encoding.

## Readouts

### RegressionReadout

\`\`\`python
from axonweave.readout import RegressionReadout

readout = RegressionReadout(n_source=256, n_outputs=1)
prediction = readout(neural_activity)   # (batch, 1)
\`\`\`

### ClassificationReadout

\`\`\`python
from axonweave.readout import ClassificationReadout

readout = ClassificationReadout(n_source=256, n_classes=10)
logits = readout(neural_activity)   # (batch, 10)
\`\`\`

### TokenReadout

\`\`\`python
from axonweave.readout import TokenReadout

readout = TokenReadout(n_source=256, vocab_size=50_000)
logits = readout(neural_activity)   # (batch, seq, vocab_size)
\`\`\`

## SignalPolicy

\`\`\`python
from axonweave.signals import SignalPolicy

policy = SignalPolicy(
    mapping={"acetylcholine": 1.0, "GABA": -0.5},
    default_gain=0.0,
)
\`\`\`

Maps neurotransmitter labels to signal gains. This is an explicit modeling assumption, not an upstream biological truth.

## Learning rules

\`\`\`python
from axonweave.learning import STDP, DopamineSTDP

stdp = STDP(tau_plus=0.020, tau_minus=0.020, a_plus=0.01, a_minus=0.012)
dap = DopamineSTDP(tau_c=1.0, tau_d=0.25, tau_elig=0.75)

agent = brain.agent(..., learning=stdp)
agent = brain.agent(..., learning=dap)
\`\`\`

STDP is pairwise trace-based. DopamineSTDP adds a reward-modulated eligibility trace. Neither claims to model specific fly synapses.

## Error codes

| Code | Meaning | Fix |
|---|---|---|
| \`AXW000\` | Base class / generic misuse | Read the message |
| \`AXW001\` | Substrate not installed | \`axonweave substrate install male-cns:v1.0\` |
| \`AXW002\` | Integrity or fingerprint mismatch | Reinstall substrate; never load mismatched checkpoints |
| \`AXW003\` | Schema error in source data | Check file version |
| \`AXW004\` | Unsupported device | Verify CUDA/MPS availability; try \`device=None\` |
| \`AXW005\` | Missing dynamics override | Register override or use default |
| \`AXW006\` | Optional backend not installed | \`pip install "axonweave[torch]"\` |
| \`AXW007\` | Non-fatal config warning | Read the warning; usually means an option is ignored |
| \`AXW010\` | API misuse (dimensions, IDs, options) | Read the message; it states expected vs. received |
| \`AXW101\` | CLI: unknown substrate | Use \`male-cns:v1.0\` |

Full details in [Errors & Diagnostics](errors.md).
`,H=`# Troubleshooting

Symptom-first fixes for the errors you are most likely to hit, keyed by the \`AXW###\` code you saw in the traceback.

## \`AXW001\` substrate not installed

Run:

\`\`\`bash
axonweave substrate install male-cns:v1.0
\`\`\`

## Download interrupted

The installer uses \`.part\` files and resumes with HTTP Range requests when the source server supports them. It is safe to rerun the command.

## Sparse operation fails on an accelerator

Check the installed framework version and whether its sparse operator is implemented on the selected device. AxonWeave does not silently fall back to CPU.

## Memory pressure

Use a smaller selected subgraph, lower batch size, or a backend/device with sufficient memory. Do not convert the complete graph to a dense matrix.
`,Mi=`# Configuration

Every AxonWeave behavior that can be changed without code edits — environment variables, cache locations and install-time options — in one place.

## Cache location

Set \`AXONWEAVE_HOME\` to control the local substrate cache:

\`\`\`bash
export AXONWEAVE_HOME=/data/axonweave
\`\`\`

On Windows PowerShell:

\`\`\`powershell
$env:AXONWEAVE_HOME = "D:\\axonweave"
\`\`\`

## Biological assumptions

Keep receptor/sign, delay, dynamics and plasticity policies in version-controlled experiment configuration. A trained checkpoint should record these policy identities.

## Layer serialization

Serialization differs per backend, following each framework's native model:

### TensorFlow/Keras

\`axonweave.keras.ConnectomeLayer\` implements \`get_config()\`, so it composes with standard Keras serialization — \`model.get_config()\`, \`keras.models.clone_model\`, and config-based rebuilds:

\`\`\`python
from axonweave.keras import ConnectomeLayer

layer = ConnectomeLayer(brain.graph, trainable_edges=True, learnable_gain=True, use_bias=True)
cfg = layer.get_config()
# {'trainable_edges': True, 'learnable_gain': True, 'use_bias': True,
#  'n_neurons': <substrate size>, ...}
\`\`\`

The config records:

- \`trainable_edges\`, \`learnable_gain\`, \`use_bias\` — the structural options you passed;
- \`n_neurons\` — provenance for the expected substrate dimension.

The sparse topology itself is **not** embedded in the config. A deserialized or cloned layer re-resolves the graph from the substrate, so the substrate must be installed (and loadable) when the model is rebuilt. This is deliberate: embedding edge data in a JSON config would break the wheel/substrate separation and bypass fingerprint validation. Identity is enforced where it belongs — the substrate fingerprint recorded in checkpoints and validated at load time (see [Checkpoints](checkpoints.md)).

\`\`\`python
# Round trip: config -> new layer -> rebuild against the same substrate
layer2 = ConnectomeLayer(brain.graph, **{
    k: v for k, v in cfg.items() if k in
    ("trainable_edges", "learnable_gain", "use_bias")
})
assert layer2.get_config()["n_neurons"] == brain.n_neurons
\`\`\`

### PyTorch

PyTorch serialization is state-dict based and needs no AxonWeave-specific config: \`layer.state_dict()\` captures \`edge_weight\`, \`gain\` and \`bias\`, and \`torch.save\`/\`torch.load\` handle persistence. The sparsity pattern (\`edge_index\`) is a registered buffer and travels with the state dict — guard it the same way you guard the substrate fingerprint, because a state dict is only meaningful against the topology it was trained on:

\`\`\`python
torch.save(layer.state_dict(), "layer.pt")
# ...
layer.load_state_dict(torch.load("layer.pt"))
\`\`\`

For full-model checkpoints (including substrate identity, backend and policy metadata), prefer the experiment checkpoint format in [Checkpoints](checkpoints.md), which validates the substrate fingerprint on load and refuses a mismatched graph with \`AXW002\`.

### JAX

The JAX adapter is functional: layers hold immutable arrays (\`edge_weight\`, \`indices\`, \`bias\`) rather than mutable parameter trees, so serialization is plain array persistence — \`np.savez\` / \`orbax\` / \`flax.serialization\` over the attributes you care about. There is no \`get_config()\` equivalent; reconstruct the layer from the same constructor arguments plus the substrate, then restore the arrays.

## What never serializes

Regardless of backend, these never travel inside a layer config or state file:

- raw upstream MaleCNS data (substrates are provisioned, not embedded);
- the CSR topology itself (always re-derived from the installed substrate);
- anything that would bypass substrate fingerprint validation.
`,Ni=`# Privacy Policy

Your privacy matters. This page explains what data this documentation site collects, why, and how you can control it.

## What we collect

**Nothing by default.** This site runs entirely in your browser. No account is required to read the documentation or use the AxonWeave package.

**Optional analytics.** If the site owner enables analytics, the tool used is Plausible — a privacy-focused, cookie-free analytics service. Plausible does not use cookies, does not track users across sites, and does not build personal profiles. It collects only:

- Page views (which pages are visited)
- Referrer information (where you came from)
- Browser type and device type (to understand which devices people use)

No personally identifiable information is collected. No IP addresses are stored. Data is aggregated, not individual.

**Your feedback.** If you use the "Was this helpful?" buttons on documentation pages, your choice is stored locally in your browser. It is never sent to a server.

**Your preferences.** Theme choice (dark/light), sidebar width, and cookie consent status are stored in your browser's localStorage. This data stays on your device and is never transmitted.

## What we never do

- We do not require accounts or login.
- We do not use tracking cookies.
- We do not sell or share any data with third parties.
- We do not embed advertising or marketing trackers.
- We do not store secrets, credentials, or API keys in the frontend code.

## Your choices

- **Opt out of analytics.** You can block Plausible analytics by using a browser extension that blocks external scripts, or by enabling "Do Not Track" in your browser settings.
- **Clear local data.** You can clear all stored preferences by clearing your browser's localStorage for this site.
- **Self-host.** The documentation source is open source. You can run the site locally without any analytics.

## Changes to this policy

If this policy changes, the update date at the bottom of this page will be revised. Significant changes will be noted in the page content.

---

*Last updated: September 2026*
`,Pi=`# Terms and Conditions

AxonWeave is open-source software. Users are responsible for validating scientific assumptions, model outputs and suitability for their applications.

The upstream MaleCNS biological data have their own license and provenance requirements. Software licensing does not override upstream data terms.
`,Fi=`# License

AxonWeave is open-source software released under the Apache License 2.0. Upstream biological data (such as the MaleCNS v1.0 connectome) are governed by their own license and provenance terms and are not covered by this license.

:::DOC-NOTE
The complete license text is maintained in the repository root at \`LICENSE\`; this page mirrors it in the web documentation.
:::

---

AxonWeave — a trainable sparse biological neural substrate built around the
MaleCNS v1.0 connectome.

Copyright 2025 AxonWeave Contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this project except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

This license applies to the AxonWeave software. Upstream biological data
(such as the MaleCNS v1.0 connectome) is governed by its own license and
provenance terms and is not covered by this license.

---

## Apache License, Version 2.0

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

### 1. Definitions

"License" shall mean the terms and conditions for use, reproduction, and
distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright
owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities
that control, are controlled by, or are under common control with that entity.
For the purposes of this definition, "control" means (i) the power, direct or
indirect, to cause the direction or management of such entity, whether by
contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the
outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising
permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including
but not limited to software source code, documentation source, and
configuration files.

"Object" form shall mean any form resulting from mechanical transformation or
translation of a Source form, including but not limited to compiled object
code, generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made
available under the License, as indicated by a copyright notice that is
included in or attached to the work (an example is provided in the Appendix
below).

"Derivative Works" shall mean any work, whether in Source or Object form, that
is based on (or derived from) the Work and for which the editorial revisions,
annotations, elaborations, or other modifications represent, as a whole, an
original work of authorship. For the purposes of this License, Derivative Works
shall not include works that remain separable from, or merely link (or bind by
name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original
version of the Work and any modifications or additions to that Work or
Derivative Works thereof, that is intentionally submitted to Licensor for
inclusion in the Work by the copyright owner or by an individual or Legal
Entity authorized to submit on behalf of the copyright owner. For the purposes
of this definition, "submitted" means any form of electronic, verbal, or
written communication sent to the Licensor or its representatives, including
but not limited to communication on electronic mailing lists, source code
control systems, and issue tracking systems that are managed by, or on behalf
of, the Licensor for the purpose of discussing and improving the Work, but
excluding communication that is conspicuously marked or otherwise designated in
writing by the copyright owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf
of whom a Contribution has been received by Licensor and subsequently
incorporated within the Work.

### 2. Grant of Copyright License

Subject to the terms and conditions of this License, each Contributor hereby
grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free,
irrevocable copyright license to reproduce, prepare Derivative Works of,
publicly display, publicly perform, sublicense, and distribute the Work and
such Derivative Works in Source or Object form.

### 3. Grant of Patent License

Subject to the terms and conditions of this License, each Contributor hereby
grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free,
irrevocable (except as stated in this section) patent license to make, have
made, use, offer to sell, sell, import, and otherwise transfer the Work, where
such license applies only to those patent claims licensable by such Contributor
that are necessarily infringed by their Contribution(s) alone or by combination
of their Contribution(s) with the Work to which such Contribution(s) was
submitted. If You institute patent litigation against any entity (including a
cross-claim or counterclaim in a lawsuit) alleging that the Work or a
Contribution incorporated within the Work constitutes direct or contributory
patent infringement, then any patent licenses granted to You under this License
for that Work shall terminate as of the date such litigation is filed.

### 4. Redistribution

You may reproduce and distribute copies of the Work or Derivative Works thereof
in any medium, with or without modifications, and in Source or Object form,
provided that You meet the following conditions:

- You must give any other recipients of the Work or Derivative Works a copy of
  this License; and
- You must cause any modified files to carry prominent notices stating that You
  changed the files; and
- You must retain, in the Source form of any Derivative Works that You
  distribute, all copyright, patent, trademark, and attribution notices from
  the Source form of the Work, excluding those notices that do not pertain to
  any part of the Derivative Works; and
- If the Work includes a "NOTICE" text file as part of its distribution, then
  any Derivative Works that You distribute must include a readable copy of the
  attribution notices contained within such NOTICE file, excluding those
  notices that do not pertain to any part of the Derivative Works, in at least
  one of the following places: within a NOTICE text file distributed as part of
  the Derivative Works; within the Source form or documentation, if provided
  along with the Derivative Works; or, within a display generated by the
  Derivative Works, if and wherever such third-party notices normally appear.
  The contents of the NOTICE file are for informational purposes only and do not
  modify the License. You may add Your own attribution notices within
  Derivative Works that You distribute, alongside or as an addendum to the
  NOTICE text from the Work, provided that such additional attribution notices
  cannot be construed as modifying the License.

You may add Your own copyright statement to Your modifications and may provide
additional or different license terms and conditions for use, reproduction, or
distribution of Your modifications, or for any such Derivative Works as a
whole, provided Your use, reproduction, and distribution of the Work otherwise
complies with the conditions stated in this License.

### 5. Submission of Contributions

Unless You explicitly state otherwise, any Contribution intentionally submitted
for inclusion in the Work by You to the Licensor shall be under the terms and
conditions of this License, without any additional terms or conditions.
Notwithstanding the above, nothing herein shall supersede or modify the terms
of any separate license agreement you may have executed with Licensor regarding
such Contributions.

### 6. Trademarks

This License does not grant permission to use the trade names, trademarks,
service marks, or product names of the Licensor, except as required for
reasonable and customary use in describing the origin of the Work and
reproducing the content of the NOTICE file.

### 7. Disclaimer of Warranty

Unless required by applicable law or agreed to in writing, Licensor provides
the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied,
including, without limitation, any warranties or conditions of TITLE,
NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are
solely responsible for determining the appropriateness of using or
redistributing the Work and assume any risks associated with Your exercise of
permissions under this License.

### 8. Limitation of Liability

In no event and under no legal theory, whether in tort (including negligence),
contract, or otherwise, unless required by applicable law (such as deliberate
and grossly negligent acts) or agreed to in writing, shall any Contributor be
liable to You for damages, including any direct, indirect, special, incidental,
or consequential damages of any character arising as a result of this License
or out of the use or inability to use the Work (including but not limited to
damages for loss of goodwill, work stoppage, computer failure or malfunction,
or any and all other commercial damages or losses), even if such Contributor
has been advised of the possibility of such damages.

### 9. Accepting Warranty or Additional Liability

While redistributing the Work or Derivative Works thereof, You may choose to
offer, and charge a fee for, acceptance of support, warranty, indemnity, or
other liability obligations and/or rights consistent with this License.
However, in accepting such obligations, You may act only on Your own behalf and
on Your sole responsibility, not on behalf of any other Contributor, and only
if You agree to indemnify, defend, and hold each Contributor harmless for any
liability incurred by, or claims asserted against, such Contributor by reason
of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS

## Appendix: How to apply the Apache License to your work

To apply the Apache License to your work, attach the following boilerplate
notice, with the fields enclosed by brackets "[]" replaced with your own
identifying information. (Don't include the brackets!) The text should be
enclosed in the appropriate comment syntax for the file format. We also
recommend that a file or class name and description of purpose be included on
the same "printed page" as the copyright notice for easier identification
within third-party archives.

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`,Ii=`# Code of Conduct

:::DOC-NOTE
The canonical policy is maintained in the repository root at \`CODE_OF_CONDUCT.md\`; this page mirrors it in the web documentation.
:::

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

AxonWeave is a scientific and engineering project. Behavior that contributes to
a positive environment includes:

- Demonstrating empathy and kindness toward other people.
- Being respectful of differing opinions, viewpoints, and experiences.
- Giving and gracefully accepting constructive feedback.
- Critiquing implementations, claims, and evidence — not people.
- Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience.
- Focusing on what is best not just for us as individuals, but for the overall
  community and for scientific honesty.

Examples of unacceptable behavior include:

- The use of sexualized language or imagery, and sexual attention or advances of
  any kind.
- Trolling, insulting or derogatory comments, and personal or political attacks.
- Public or private harassment.
- Publishing others' private information, such as a physical or email address,
  without their explicit permission.
- Harassment or dismissal based on age, body size, disability, ethnicity, sex
  characteristics, gender identity, level of experience, education, nationality,
  personal appearance, race, religion, or sexual identity and orientation.
- Fabricating results, provenance, citations, or benchmarks.
- Other conduct which could reasonably be considered inappropriate in a
  professional setting.

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces.
Examples of representing our community include using an official e-mail address,
posting via an official social media account, or acting as an appointed
representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement:

- Confidential reports: use the repository's private vulnerability reporting
  channel (GitHub Security Advisories) or a direct message to a project
  maintainer on GitHub.
- Public reports: open an issue on the project repository at
  https://github.com/dhakalnirajan/axonweave/issues.

All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the
reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining
the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed
unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing
clarity around the nature of the violation and an explanation of why the
behavior was inappropriate. A public apology may be requested.

### 2. Warning

**Community Impact**: A violation through a single incident or series of
actions.

**Consequence**: A warning with consequences for continued behavior. No
interaction with the people involved, including unsolicited interaction with
those enforcing the Code of Conduct, for a specified period of time. This
includes avoiding interactions in community spaces as well as external channels
like social media. Violating these terms may lead to a temporary or permanent
ban.

### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including
sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public
communication with the community for a specified period of time. No public or
private interaction with the people involved, including unsolicited interaction
with those enforcing the Code of Conduct, is allowed during this period.
Violating these terms may lead to a permanent ban.

### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community
standards, including sustained inappropriate behavior, harassment of an
individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within the
community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.1, available at
https://www.contributor-covenant.org/version/2/1/code_of_conduct.html.

Community Impact Guidelines were inspired by
[Mozilla's code of conduct enforcement ladder][mozilla].

For answers to common questions about this code of conduct, see the FAQ at
https://www.contributor-covenant.org/faq. Translations are available at
https://www.contributor-covenant.org/translations.

[homepage]: https://www.contributor-covenant.org
[mozilla]: https://github.com/mozilla/diversity`,Li=`# Security Policy

:::DOC-NOTE
The canonical policy is maintained in the repository root at \`SECURITY.md\`; this page mirrors it in the web documentation.
:::

AxonWeave is an open-source scientific library that ships a small Python package,
an optional Rust/PyO3 native extension, and a static documentation website. This
page documents supported versions, how to report security issues, and the
security expectations we commit to.

## Supported Versions

AxonWeave is pre-1.0. Security fixes are released in the latest stable release
and backported only where the fix is trivial and the affected version is still
supported.

| Version | Supported |
| ------- | --------- |
| Latest stable release (0.1.x) | Yes |
| Previous stable releases | Security fixes only, on a best-effort basis |
| \`main\` branch | No; maintained for maintainers and contributors only |
| Nightly built docs | No |

For release channels, see the [distribution](distribution.md) page.

## Reporting a vulnerability

**Do not open a public issue for a security vulnerability.** Private disclosure
gives maintainers time to assess and fix the issue before it is disclosed.

Report vulnerabilities privately through GitHub's private advisory workflow:

    https://github.com/dhakalnirajan/axonweave/security/advisories/new

### What to include

To help us triage quickly, include:

- The affected component (Python package, Rust extension, documentation site).
- Version information (\`pip show axonweave\`, commit SHA, or wheels you used).
- A minimal, reproducible description of the issue — what you did, what you
  observed, and what you expected.
- Impact: what is at risk, and who could be affected.
- Any suggested remediation, if you have one.

### What happens next

- **Acknowledgment:** maintainers will acknowledge the report within 48 hours.
- **Triage:** a severity assessment and next steps within 5 business days.
- **Fix and release:** a fix is prepared and released in the next stable
  release, or a workaround is documented if the issue cannot be fixed.
- **Coordinated disclosure:** the issue is disclosed publicly (e.g., a GitHub
  Security Advisory) after a fix is available, unless the reporter requests
  otherwise.

If a report is declined as out of scope (below), we will respond with a
reasoned explanation.

## Security scope

### In scope

- The \`axonweave\` Python package: provisioning, substrate loading, graph
  assembly, model execution, checkpoints, and configuration parsing.
- The Rust/PyO3 extension (\`axonweave._native\`).
- The documentation website and its build/deploy pipeline
  (\`.github/workflows/docs.yml\`), including safe rendering of documentation
  content and the absence of client-side secrets (see \`docs-site/SECURITY_HEADERS.md\`).
- Dependency and supply-chain hygiene for the wheels and the docs site.

### Out of scope

- Calibration, accuracy, or biological-plausibility issues in the mathematical
  model. These are scientific questions, not security vulnerabilities; file
  them as issues or raise them through the scientific review process.
- License or provenance compliance of upstream data (e.g., the MaleCNS v1.0
  connectome). These are governed by the upstream data license; see
  \`DATA_LICENSE.md\` and \`DATA_SOURCES.md\`.
- Vulnerabilities in upstream dependencies. Report these to the upstream
  project; we track dependency updates through our dependency review in CI.
- Self-inflicted exposure, such as committed credentials or accidentally
  published private data (though reporting it is still appreciated).

## Non-negotiable security rules

These rules are enforced project-wide and in CI:

1. **Never commit secrets.** API keys, PyPI tokens, cloud credentials, private
   URLs, and private user datasets must never appear in the repository, CI logs,
   or built artifacts.
2. **No client-side secrets in the docs site.** Analytics identifiers, if any,
   must be configured through deployment environment variables and a
   privacy-preserving provider. The built site is public static content.
3. **The wheel stays independent of biological data.** Multi-gigabyte upstream
   data is provisioned and cached separately and is never bundled into the PyPI
   package.
4. **No generated build artifacts in version control.** Build output, \`dist/\`,
   caches, and local data directories remain ignored.
5. **Errors carry no sensitive data.** Error messages should never leak
   paths, keys, or user data beyond what is needed for an actionable
   \`AXW###\`-coded diagnostic.

## Responsible disclosure

We follow coordinated disclosure: we do not demand silence forever, but we ask
that disclosures are coordinated with maintainers so that fixes can ship before
or together with the public announcement. If you plan to publish research based
on a vulnerability, contact us first.`,Ri=`# Custom Signal Policy

Biological sign is an explicit modeling decision.

\`\`\`python
from axonweave.signals import SignalPolicy

policy = SignalPolicy(
    mapping={
        "acetylcholine": 1.0,
        "gaba": -1.0,
    },
    default_gain=0.0,
)
\`\`\`

Record the policy in experiment configuration and checkpoints. Do not describe a user-defined mapping as a source-dataset fact.
`,zi=`# PyTorch Composition Example

This example shows the intended composition boundary: ordinary PyTorch layers before and after the connectome layer.

\`\`\`python
import torch.nn as nn
from axonweave import load

brain = load("male-cns:v1.0")
connectome = brain.torch_layer(trainable_edges=True, learnable_gain=True)

model = nn.Sequential(
    nn.Linear(128, brain.n_neurons),
    connectome,
    nn.LayerNorm(brain.n_neurons),
    nn.Linear(brain.n_neurons, 4),
)
\`\`\`

For very large full-brain states, evaluate memory and latency before selecting this architecture.
`,Bi=`# Selection & Sub-Network Examples

How to restrict computation to a biologically meaningful subset of the substrate: selecting neurons by ID, mask, or annotation, then running a \`ConnectomeLayer\` or a full PyTorch model on the sub-network.

\`\`\`text
Full substrate (166,700 neurons)
        |
        v  brain.graph.neurons.by_type(...)
Selected sub-network (N neurons)
        |
        v  ConnectomeLayer(..., selection=sel)
Sparse propagation over retained synapses only
\`\`\`

## Selecting neurons

Three selection entry points, all preserving the order you request:

\`\`\`python
import axonweave

brain = axonweave.load("male-cns:v1.0")
sel_all = brain.graph.neurons.all()

# By body ID (order preserved exactly as given)
sel = brain.graph.neurons.ids([720575940632062920, 720575940610549233])

# By boolean mask over graph order
import numpy as np
mask = np.zeros(brain.n_neurons, dtype=bool)
mask[brain.graph.body_ids < 720575940600000000] = True
sel = brain.graph.neurons.by_mask(mask)

# By annotation (requires annotations built at substrate install time)
sel = brain.graph.neurons.by_type("kenyon_cell")
sel = brain.graph.neurons.by_region("L")
\`\`\`

Unknown body IDs raise \`AXW010\` rather than being silently dropped; \`by_type\`/\`by_region\` errors list up to 20 known annotation values so you can discover the vocabulary.

:::DOC-NOTE
A selection is lightweight: it stores indices into the existing graph, never a copy of the connectome. \`sel.weights()\` materializes the sub-matrix on demand.
:::

## Inspecting a selection

\`\`\`python
sel = brain.graph.neurons.by_type("kenyon_cell")

len(sel)             # number of neurons
sel.body_ids_list    # body IDs in request order
sel.mask()           # boolean mask over the full substrate
sub = sel.weights()  # sparse (N, N) sub-matrix
\`\`\`

## Region-based selection

Select neurons by anatomical region. The MaleCNS substrate uses region labels from the upstream annotation columns:

\`\`\`python
# Left hemisphere
sel_left = brain.graph.neurons.by_region("L")

# Right hemisphere
sel_right = brain.graph.neurons.by_region("R")

# Combine: union of two regions
import numpy as np
mask_left = sel_left.mask()
mask_right = sel_right.mask()
mask_combined = mask_left | mask_right
sel_both = brain.graph.neurons.by_mask(mask_combined)

print(f"Left: {len(sel_left)}, Right: {len(sel_right)}, Combined: {len(sel_both)}")
\`\`\`

### Region + type filter

Combine region and cell type to select a specific population:

\`\`\`python
# Kenyon cells in the left hemisphere
sel_kc_left = brain.graph.neurons.by_type("kenyon_cell")

# Further filter by region using mask intersection
region_mask = sel_left.mask()
type_mask = sel_kc_left.mask()
combined_mask = region_mask & type_mask
sel_kc_left_final = brain.graph.neurons.by_mask(combined_mask)

print(f"Kenyon cells in left hemisphere: {len(sel_kc_left_final)}")
\`\`\`

### Counting neurons per region

Discover which regions exist and how many neurons each contains:

\`\`\`python
# Trigger error on unknown region to see available values
try:
    brain.graph.neurons.by_region("unknown_region_xyz")
except Exception as e:
    print(e)
    # Lists up to 20 known region values
\`\`\`

## Synapse weight filtering

Select sub-networks based on connection strength:

\`\`\`python
sel = brain.graph.neurons.all()
sub = sel.weights()  # sparse matrix

# Filter: keep only edges with weight >= threshold
from scipy.sparse import csr_matrix
threshold = 5.0

# Mask edges below threshold
filtered = sub.copy()
filtered.data[filtered.data < threshold] = 0
filtered.eliminate_zeros()

print(f"Original edges: {sub.nnz}")
print(f"Edges with weight >= {threshold}: {filtered.nnz}")
\`\`\`

### Strongest connections analysis

\`\`\`python
import numpy as np

sub = sel.weights()
data = sub.data

# Percentile-based filtering
p90 = np.percentile(data, 90)
p99 = np.percentile(data, 99)

strong = sub.copy()
strong.data[strong.data < p90] = 0
strong.eliminate_zeros()

very_strong = sub.copy()
very_strong.data[very_strong.data < p99] = 0
very_strong.eliminate_zeros()

print(f"Top 10% edges: {strong.nnz} (weight >= {p90:.1f})")
print(f"Top 1% edges: {very_strong.nnz} (weight >= {p99:.1f})")
\`\`\`

### Weight distribution per selection

\`\`\`python
sel = brain.graph.neurons.by_type("kenyon_cell")
sub = sel.weights()

# Summary statistics
print(f"Edges: {sub.nnz}")
print(f"Mean weight: {sub.data.mean():.2f}")
print(f"Std weight: {sub.data.std():.2f}")
print(f"Max weight: {sub.data.max():.0f}")
\`\`\`

## Combining selection criteria

Build complex selections by composing masks:

\`\`\`python
# Start with all neurons
sel_all = brain.graph.neurons.all()
base_mask = sel_all.mask()

# Filter 1: body ID range
id_mask = brain.graph.body_ids > 720575940600000000

# Filter 2: region
region_mask = brain.graph.neurons.by_region("L").mask()

# Filter 3: high-connectivity neurons (degree > median)
sub = sel_all.weights()
degree = np.array(sub.sum(axis=1)).ravel()
median_degree = np.median(degree)
high_degree_mask = degree > median_degree

# Combine all filters (intersection)
combined = id_mask & region_mask & high_degree_mask
sel_final = brain.graph.neurons.by_mask(combined)

print(f"Filtered neurons: {len(sel_final)}")
\`\`\`

### Union of multiple cell types

\`\`\`python
sel_a = brain.graph.neurons.by_type("kenyon_cell")
sel_b = brain.graph.neurons.by_type("output_neuron")

mask_a = sel_a.mask()
mask_b = sel_b.mask()
mask_union = mask_a | mask_b

sel_union = brain.graph.neurons.by_mask(mask_union)
print(f"Kenyon + output neurons: {len(sel_union)}")
\`\`\`

## Working with body IDs

Body IDs are the stable biological identifiers. They persist across substrate versions and are the basis for checkpoint compatibility.

### Lookup body ID → index

\`\`\`python
body_id = 720575940632062920
idx = graph.index(body_id)  # → matrix index
print(f"Body ID {body_id} is at matrix index {idx}")
\`\`\`

### Batch body ID lookup

\`\`\`python
body_ids = [720575940632062920, 720575940610549233, 720575940628417433]
sel = brain.graph.neurons.ids(body_ids)

# Verify all resolved
print(f"Requested: {len(body_ids)}, Resolved: {len(sel)}")
print(f"Body IDs: {sel.body_ids_list}")
\`\`\`

### Body ID filtering by pattern

\`\`\`python
# Select neurons with body IDs in a specific range
import numpy as np
all_ids = brain.graph.body_ids

# e.g. first 1000 neurons by graph order
sel = brain.graph.neurons.by_mask(
    np.arange(brain.n_neurons) < 1000
)

print(f"First 1000 body IDs: {sel.body_ids_list[:5]}...")
\`\`\`

:::DOC-WARN
Unknown body IDs raise \`AXW010\`. The library never silently drops an ID — you always know if a lookup failed.
:::

## Sub-network layer (NumPy reference)

The layer operates on the selected neuron space — input and output dimensions equal \`len(sel)\`:

\`\`\`python
from axonweave.numpy import ConnectomeLayer

sel = brain.graph.neurons.ids([10, 20, 30, 40])
layer = ConnectomeLayer(brain.graph, selection=sel)

x = np.ones((2, 4), dtype=np.float32)
y = layer(x)          # shape (2, 4): propagation over retained synapses only
\`\`\`

Equivalent to building the sub-graph by hand:

\`\`\`python
from axonweave.numpy import ConnectomeLayer

manual = ConnectomeLayer(type("G", (), {"weights": sel.weights()})())
np.testing.assert_allclose(layer(x), manual(x), rtol=1e-6)
\`\`\`

## Sub-network layer (PyTorch, trainable)

Trainable edges cover only the synapses retained in the selection — parameters outside the sub-network do not exist:

\`\`\`python
import torch

sel = brain.graph.neurons.by_type("kenyon_cell")
layer = brain.torch_layer(trainable_edges=True, learnable_gain=True, selection=sel)

x = torch.randn(8, len(sel))
y = layer(x)
y.sum().backward()    # gradients flow to selected edges + gain only
\`\`\`

The layer records which neurons it computed over:

\`\`\`python
layer.selection_body_ids   # ndarray of body IDs, saved with checkpoints/metadata
\`\`\`

## Sub-network inside a PyTorch model

Wrap the selected block with arbitrary native layers; dimensions line up at the selection boundary:

\`\`\`python
import torch.nn as nn

sel = brain.graph.neurons.by_type("kenyon_cell")
n = len(sel)

model = nn.Sequential(
    nn.Linear(128, n),          # project onto the sub-network
    brain.torch_layer(selection=sel),
    nn.LayerNorm(n),
    nn.Linear(n, 4),            # read out from the sub-network
)
\`\`\`

## Training a sub-network readout

Freeze the connectome and train only the interface around a selected population:

\`\`\`python
sel = brain.graph.neurons.by_region("L")
n = len(sel)

model = nn.Sequential(
    nn.Linear(784, n),
    brain.torch_layer(selection=sel),          # frozen edges (default)
    nn.Linear(n, 10),
)

optimizer = torch.optim.Adam(
    [p for p in model.parameters() if p.requires_grad]
)
\`\`\`

This is learning mode 1 (frozen connectome) from [Training](training.md), applied to a biologically motivated subset.

## Export and conversion

### Save sub-graph as sparse matrix

\`\`\`python
from scipy.sparse import save_npz

sel = brain.graph.neurons.by_region("L")
sub = sel.weights()
save_npz("region_L_connectome.npz", sub)
\`\`\`

### Convert to NetworkX for visualization

\`\`\`python
import networkx as nx

sel = brain.graph.neurons.by_type("kenyon_cell")
sub = sel.weights()

# Convert sparse matrix to NetworkX graph
G = nx.from_scipy_sparse_array(sub, create_using=nx.DiGraph)

print(f"Nodes: {G.number_of_nodes()}, Edges: {G.number_of_edges()}")
\`\`\`

:::DOC-WARN
NetworkX conversion materializes the sub-graph in memory. For large selections, keep the selection small or use sparse operations directly.
:::

### Convert to adjacency list

\`\`\`python
sel = brain.graph.neurons.by_type("kenyon_cell")
sub = sel.weights()

# CSR → COO for easy iteration
coo = sub.tocoo()
for i, j, w in zip(coo.row, coo.col, coo.data):
    src = sel.body_ids_list[i]
    dst = sel.body_ids_list[j]
    print(f"{src} -> {dst} (weight={w})")
\`\`\`

### Export body ID mapping

\`\`\`python
import json

sel = brain.graph.neurons.by_type("kenyon_cell")
mapping = {
    "body_ids": sel.body_ids_list,
    "n_neurons": len(sel),
    "substrate": brain.substrate_id,
    "fingerprint": brain.fingerprint,
}

with open("selection_metadata.json", "w") as f:
    json.dump(mapping, f, indent=2)
\`\`\`

## What selections do NOT do

:::DOC-WARN
A selection restricts the **computational** sub-network. It does not claim the excluded neurons are biologically silent — in the fly brain, upstream neurons still influence the selected population. Selection is a modeling choice, not a biological statement about isolation.
:::

## Related

- [Biological Brain](brain.md) — selection API reference and introspection.
- [Working with Connectomes](tutorial-connectome.md) — loading and exploring the substrate.
- [PyTorch Composition](examples-pytorch-composition.md) — full-brain layer composition.
- [Training](training.md) — the five learning modes.
`,Vi=`# Framework API

AxonWeave exposes the connectome as a **computational substrate**: you compose it with your own encoders, decoders, dynamics and learning rules. The substrate stays fixed unless you explicitly make it trainable.

## BrainModel: supervised tasks

For classification or token-prediction style tasks, wrap the substrate in a \`BrainModel\`:

\`\`\`python
import torch
import axonweave
from axonweave.frameworks.torch import BrainModel, Input, Readout

brain = axonweave.load("male-cns:v1.0")

model = BrainModel(
    brain,
    dynamics="rate",        # "lif", "adaptive_lif", "rate", or a custom model
    trainable_edges=False,  # Mode 1: frozen connectome
)
model.connect(Input(784))
model.connect(Readout(10))

model.fit(train_loader, epochs=3)
\`\`\`

Conceptually:

\`\`\`text
784 inputs → encoder → connectome dynamics → 10-neuron readout → classification
\`\`\`

## ConnectomeBlock: composable nn.Module

AxonWeave does not dictate your architecture. \`ConnectomeBlock\` is an ordinary \`torch.nn.Module\` you can place between arbitrary layers:

\`\`\`python
import torch.nn as nn
from axonweave.frameworks.torch import ConnectomeBlock

model = nn.Sequential(
    nn.Linear(784, 256),
    nn.ReLU(),
    ConnectomeBlock(brain, dynamics="lif", select=256),
    nn.LayerNorm(brain.n_neurons),
    nn.Linear(brain.n_neurons, 10),
)
\`\`\`

## Brain task and agent facades

The loaded brain object exposes higher-level entry points:

\`\`\`python
# Supervised task
model = brain.task(
    input=axonweave.encoders.TokenEncoder(vocab_size=50_000),
    output=axonweave.decoders.TokenDecoder(vocab_size=50_000),
    dynamics="lif",
)
model.fit(dataset)

# Environment agent
agent = brain.agent(
    input=axonweave.encoders.ImageEncoder(shape=(84, 84, 3)),
    output=axonweave.decoders.ActionDecoder(actions=6),
    dynamics="lif",
    learning="stdp",
)
agent.run(environment, episodes=100)
\`\`\`

:::DOC-NOTE
The connectome provides structural connectivity and published metadata. Dynamics, encoders, decoders and learning rules are explicit model choices — AxonWeave never presents them as biological facts.
:::

## Five training modes

| Mode | What trains | API |
|---|---|---|
| 1. Frozen substrate | encoders/decoders only | \`BrainModel(brain, trainable_edges=False)\` |
| 2. Synaptic weights | \`W = W0 + ΔW\`, topology preserved | \`trainable_edges=True\` |
| 3. Neuron parameters | τ, thresholds, leak, gain | \`train_dynamics=True\` |
| 4. Local plasticity | STDP / dopamine-modulated updates | \`learning="stdp"\` / \`"dopamine_stdp"\` |
| 5. Hybrid | backprop outside + plasticity inside | combine the above |

## Scientific honesty

Do not describe a trained readout as the fly brain "understanding" the task. A next-token experiment means: encoding → connectome dynamics → readout optimized against cross-entropy. AxonWeave records which components come from source data and which are model assumptions in experiment metadata.
`,Hi=`# Encoders & Decoders

Encoders map external data modalities into neural stimulation patterns. Decoders map neural activity back to predictions or actions. Both are ordinary framework modules — fully composable with user code.

## Encoders

Every encoder follows one protocol: it declares \`input_shape\` (excluding batch), \`output_size\` and \`dtype\`, so wiring errors surface before execution (\`AXW010\` otherwise). Encoders are seeded and deterministic engineering components — the projection they apply is an explicit modeling assumption, not biology.

### VectorEncoder

Fixed random projection from a feature vector to input currents — the default choice for static feature data:

\`\`\`python
from axonweave.encoders import VectorEncoder

enc = VectorEncoder(input_dim=8, output_dim=256, seed=0)
enc.input_shape   # (8,)
enc.output_size   # 256
currents = enc(features)    # (batch, 256)
\`\`\`

### TimeSeriesEncoder

Per-timestep encoder for \`[B, T, features]\` streams. With \`window=1\` the mapping is memoryless — recurrence lives in the connectome. With \`window=k\` the current at step \`t\` carries the last \`k\` observations (zero-padded at sequence start):

\`\`\`python
from axonweave.encoders import TimeSeriesEncoder

enc = TimeSeriesEncoder(input_dim=10, output_dim=256, window=1)
enc.input_shape   # (1, 10)
currents = enc(seq)         # (batch, T, 256)
\`\`\`

### ImageEncoder

Maps 2D/3D visual input to currents injected into a selected neuron group:

\`\`\`python
from axonweave.encoders import ImageEncoder

enc = ImageEncoder(
    shape=(84, 84, 3),      # observation shape
    n_target=2048,          # number of stimulated neurons
    normalize=True,         # scale pixel intensities to [0, 1]
)
currents = enc(obs)         # (batch, n_target) tensor
\`\`\`

### TokenEncoder

Maps discrete token IDs (or text embeddings) to input neuron currents:

\`\`\`python
from axonweave.encoders import TokenEncoder

enc = TokenEncoder(vocab_size=50_000, n_target=1024)
currents = enc(token_ids)   # (batch, seq, n_target)
\`\`\`

### SensorEncoder

Generic vector-to-current mapping for robotics/telemetry:

\`\`\`python
from axonweave.encoders import SensorEncoder

enc = SensorEncoder(n_sensors=12, n_target=512)
currents = enc(sensor_vector)
\`\`\`

## Decoders and readouts

The output side has two names for the same components: \`axonweave.decoders\` (framework-neutral building blocks) and \`axonweave.readout\` (the task-facing package used by \`BrainModel\`). See [Readouts](readouts.md) for the full signatures.

### ActionDecoder

Maps readout neuron activity to discrete or continuous actions:

\`\`\`python
from axonweave.decoders import ActionDecoder

dec = ActionDecoder(actions=6)   # discrete action space
action = dec(readout_activity)
\`\`\`

### TokenDecoder / ClassificationHead

Linear projection from neural readout to vocabulary logits:

\`\`\`python
from axonweave.decoders import TokenDecoder

dec = TokenDecoder(vocab_size=50_000)
logits = dec(selected_activity)     # (batch, seq, vocab_size)
\`\`\`

## Choosing neuron groups

Encoders and decoders accept explicit neuron selection. You can select by body ID, by ROI, or by index:

\`\`\`python
enc = ImageEncoder(shape=(84, 84, 3), n_target=2048, select="visual")
dec = ActionDecoder(actions=6, select="motor")
\`\`\`

:::DOC-WARN
Selection semantics ("visual", "motor") require neuron annotations from the substrate. If annotations are not installed, AxonWeave raises \`AXW001\`/\`AXW002\` rather than silently using arbitrary neurons.
:::

## Design rules

- Encoders/decoders are framework modules (PyTorch \`nn.Module\` / Keras \`Layer\`), so gradients flow through them normally in Modes 1, 2, 3 and 5.
- They never modify the substrate graph.
- Custom encoders only need to produce correctly shaped tensors.
`,Ui=`# Neuron Dynamics

AxonWeave separates the **static connectome** (structural wiring) from **neuron dynamics** (how state evolves). Dynamics are explicit, configurable model choices.

## Available models

### Leaky Integrate-and-Fire (LIF)

Membrane potential with spike generation:

$$\\tau \\frac{dV}{dt} = -(V - V_{rest}) + \\sum_j w_{ij} \\, s_j(t)$$

\`\`\`python
from axonweave.dynamics import LIF

dyn = LIF(
    tau=20.0,          # membrane time constant (ms)
    v_rest=-65.0,      # resting potential (mV)
    v_threshold=-50.0, # spike threshold (mV)
    v_reset=-70.0,     # reset potential after a spike
    refractory=2.0,    # absolute refractory period (ms)
)
\`\`\`

### Adaptive LIF

Adds a dynamic firing threshold that increases after each spike:

\`\`\`python
from axonweave.dynamics import AdaptiveLIF

dyn = AdaptiveLIF(tau=20.0, tau_adapt=200.0, delta_threshold=0.5)
\`\`\`

### Rate-based approximation

Instantaneous firing-rate model — cheaper and smoother for gradient-based training:

\`\`\`python
from axonweave.dynamics import Rate

dyn = Rate(gain=1.0, baseline=0.0)
\`\`\`

## Configuration

Override dynamics globally or per neuron type through a policy:

\`\`\`python
from axonweave.dynamics import DynamicsPolicy

policy = DynamicsPolicy(
    default=LIF(tau=20.0),
    overrides={"kenyon_cell": Rate(gain=2.0)},
)
\`\`\`

## Time-stepped propagation

Dynamics run over discrete time steps on top of the sparse propagation:

\`\`\`text
input currents → weighted sum (connectome) → state update (dynamics) → spikes/rates → next step
\`\`\`

:::DOC-NOTE
The LIF equation above is a modeling choice applied to the structural graph — the upstream dataset provides connectivity and synaptic counts, not membrane parameters. Record your dynamics configuration in experiment metadata.
:::

## Determinism

All dynamics models support a deterministic simulation mode: seed the state RNG explicitly for reproducible runs (\`BrainModel(..., seed=0)\`).
`,Wi=`# Learning & Plasticity

AxonWeave supports five distinct training/adaptation paradigms. They are composable — hybrid training combines global gradient descent outside the substrate with local plasticity inside it.

## Mode 1 — Frozen connectome

The substrate is fixed; only encoders and decoders train via backpropagation. The cheapest and most reproducible starting point.

\`\`\`python
model = BrainModel(brain, trainable_edges=False)
\`\`\`

## Mode 2 — Trainable synaptic weights

Start from biological synaptic counts and learn residual weights while preserving topology:

$$W = W_0 + \\Delta W$$

Existing edges become trainable; non-existing edges stay exactly zero unless you explicitly enable structural plasticity.

\`\`\`python
model = BrainModel(brain, trainable_edges=True)
\`\`\`

## Mode 3 — Trainable neuron parameters

Connectivity stays fixed; per-neuron or per-type parameters train instead:

- membrane time constant τ
- firing threshold
- leak / resting potential
- global gain and bias

\`\`\`python
model = BrainModel(brain, train_dynamics=True)
\`\`\`

## Mode 4 — Local plasticity

Updates driven by local activity and reward signals rather than backpropagation:

\`\`\`python
from axonweave.learning import STDP, DopamineSTDP

rule = STDP(a_plus=0.01, a_minus=0.012, tau_pre=20.0, tau_post=20.0)
rule = DopamineSTDP(base=STDP(), dopamine_gain=1.0)   # three-factor rule
\`\`\`

Three-factor updates use:

\`\`\`text
pre-activity × post-activity × neuromodulatory (reward/dopamine) signal
\`\`\`

## Mode 5 — Hybrid training

Global backpropagation through framework layers + local plasticity inside the connectome block:

\`\`\`python
model = BrainModel(
    brain,
    trainable_edges=True,
    learning="dopamine_stdp",
)
model.fit(env_iterator)   # backprop trains interfaces; STDP adapts synapses
\`\`\`

:::DOC-WARN
Plasticity updates are model assumptions, not biological facts. Upstream neurotransmitter predictions inform — but do not determine — sign and strength of plasticity. Record the chosen rule and parameters in experiment metadata.
:::

## Choosing a mode

| Goal | Recommended mode |
|---|---|
| Benchmark the substrate as a fixed feature map | 1 |
| Adapt connectivity to a task | 2 |
| Cheap personalization with few parameters | 3 |
| Online/agent experiments with reward | 4 |
| Research on combined adaptation | 5 |
`,Gi=`# Experiments

The experiment module standardizes the agent/simulation execution loop:

\`\`\`text
observation → encoder → brain dynamics → decoder → action
     ↑                                              │
     └── environment step ← reward ← plasticity ←───┘
\`\`\`

## Running an agent

\`\`\`python
import axonweave

brain = axonweave.load("male-cns:v1.0")

agent = brain.agent(
    input=axonweave.encoders.ImageEncoder(shape=(84, 84, 3)),
    output=axonweave.decoders.ActionDecoder(actions=6),
    dynamics="lif",
    learning="dopamine_stdp",
)

result = agent.run(environment, episodes=100, log_dir="runs/exp1")
\`\`\`

\`agent.run\` executes the canonical loop each step:

1. \`observation = environment.observe()\`
2. \`currents = encoder(observation)\`
3. \`activity = brain.step(currents)\` — time-stepped dynamics
4. \`action = decoder(activity)\`
5. \`reward, next_obs = environment.step(action)\`
6. \`plasticity.update(reward, pre_trace, post_trace)\`

## Checkpointing

Long-running experiments checkpoint substrate identity, configuration and training state:

\`\`\`python
agent.save_checkpoint("runs/exp1/ckpt-0100.awb-ckpt")

# Later — refuses to load into a materially different substrate without override:
agent = axonweave.load_agent("runs/exp1/ckpt-0100.awb-ckpt")
\`\`\`

A checkpoint records:

- AxonWeave version and substrate ID/version
- graph fingerprint
- dynamics, encoder, decoder and plasticity configurations
- optimizer and training metadata

## Logging

Pass \`log_dir\` to write episode returns, step counts, spike rates and plasticity deltas to disk. Logs are plain JSON lines — no proprietary formats.

## Evaluate without learning

\`\`\`python
result = agent.run(environment, episodes=20, learn=False)
print(result.mean_return)
\`\`\`

:::DOC-NOTE
\`brain.simulate(...)\` and \`brain.experiment(...)\` are aliases of the same runner for simulation-style (no-reward) and benchmark-style usage respectively.
:::
`,Ki=`# Installation

AxonWeave installs as three separate concerns — the Python package, optional framework extras, and the versioned biological substrate — so you only download what you use.

## The three layers

1. **Python package** — the runtime (\`axonweave\`). Small; installs in seconds.
2. **Optional framework extras** — PyTorch, TensorFlow/Keras, JAX, neuPrint, navis. Install only what you use.
3. **Biological substrate** — the MaleCNS v1.0 connectome artifact. Multi-gigabyte; installed explicitly via the CLI. Never bundled with the wheel.

## Standard install

\`\`\`bash
pip install axonweave
\`\`\`

This includes NumPy, SciPy, PyArrow, requests and pydantic — enough to load substrates and run the NumPy reference path.

## Compiled compute core

Wheels for Linux, macOS and Windows ship the compiled Rust core (\`axonweave._native\`) built from \`rust/\` — installing a wheel never requires a Rust toolchain. Source and editable installs without a built extension run an identical NumPy/SciPy reference instead. Either way the public API behaves the same; check which path is active with:

\`\`\`python
import axonweave
print(axonweave.load("male-cns:v1.0").info().native_backend)  # "0.2.0" (extension) or "python-fallback"
\`\`\`

See [Rust Core](rust-core.md) for the dispatch contract and [Backends](backends.md) for backend coverage.

## Optional framework extras

\`\`\`bash
pip install "axonweave[torch]"          # PyTorch >= 2.2
pip install "axonweave[tensorflow]"     # TensorFlow >= 2.15
pip install "axonweave[jax]"            # JAX >= 0.4.30
pip install "axonweave[neuprint]"       # neuprint-python
pip install "axonweave[navis]"          # navis
pip install "axonweave[all]"            # everything above + rich
\`\`\`

\`import axonweave\` works even when none of these are installed. Missing backends raise \`AXW006\` (\`BackendUnavailableError\`) with an actionable message when you try to use them.

## Development install

\`\`\`bash
git clone https://github.com/dhakalnirajan/axonweave.git
cd axonweave
python -m pip install -e '.[dev]'
pytest -q
\`\`\`

## Substrate installation

\`\`\`bash
axonweave substrate install male-cns:v1.0
\`\`\`

This downloads the official MaleCNS v1.0 files, verifies them against published checksums, builds the sparse graph, and caches the result. See [Substrate Distribution](distribution.md) for cache location and options.

## Requirements

- Python 3.10–3.14
- Linux, macOS, or Windows
- Sufficient disk for the substrate (the full release includes multi-gigabyte synapse resources; the base connectivity/annotation set is smaller)

## What is NOT installed automatically

- The MaleCNS biological data. Installing the package never triggers a multi-gigabyte download.
- Any ML framework. Torch/TensorFlow/JAX are opt-in extras.

## Next steps

- [Getting Started](getting-started.md) — from zero to first forward pass.
- [Substrate Distribution](distribution.md) — cache, provenance, offline use.
`,qi=`# Core Concepts

The mental model behind AxonWeave: what the biological substrate provides, what the framework adds on top, and where your task plugs in.

## The composition model

\`\`\`text
substrate  +  computational model  +  interface  +  task
\`\`\`

The connectome itself is a **recurrent, stateful substrate**: running it over time is a first-class concept, not a byproduct of stacking layers. The [Temporal Runtime](runtime.md) owns that execution — explicit state, sequence semantics, deterministic replay — while the substrate stays identifiable under learning.

| Concept | What it is | Who provides it |
|---|---|---|
| **Substrate** | The versioned connectome: sparse graph, body IDs, provenance | Upstream science (MaleCNS) + AxonWeave provisioning |
| **Computational model** | Dynamics, signaling rules, plasticity — how activity evolves | AxonWeave (configurable, replaceable) |
| **Interface** | Encoders and decoders bridging application data and neural state | AxonWeave (composable) |
| **Task** | The objective: classification, token prediction, control | You |

## Connectome

The wiring diagram: ~166,700 neurons and ~25.6 million directed connections (MaleCNS v1.0 retained graph). Stored as a sparse CSR matrix; never densified. See [Connectome](connectome.md).

## Substrate and BiologicalBrain

\`axonweave.load("male-cns:v1.0")\` returns a \`BiologicalBrain\` — a computational wrapper binding the graph to optional metadata (annotations, neurotransmitters) and framework adapters. See [Biological Brain](brain.md).

## Neural state and dynamics

A connectome alone is wiring, not computation. Dynamics define how per-neuron state evolves each time step: \`Rate\` (instantaneous), \`LIF\` (leaky integrate-and-fire with refractory periods), \`AdaptiveLIF\` (dynamic thresholds). Dynamics are model choices, not biological facts. See [Neuron Dynamics](dynamics.md).

## Signal policy

Upstream neurotransmitter predictions are data. How a neurotransmitter influences a target neuron depends on receptor composition — which the dataset does not fully specify. AxonWeave therefore requires an explicit \`SignalPolicy\` mapping neurotransmitter labels to gains. Neurotransmitter identity never automatically becomes an excitatory/inhibitory rule. See [Scientific Reference](scientific-reference.md).

## Plasticity

Local update rules (STDP, dopamine-modulated three-factor learning) that change synaptic weights from activity and reward — as an alternative or complement to backpropagation. Always explicitly attached; never active by default. See [Learning & Plasticity](learning.md).

## Encoder

Maps application data (images, token IDs, sensor vectors) into neural input currents. The biological brain does not inherently accept tensors; the encoder is the bridge. See [Encoders & Decoders](encoders.md).

## Decoder / readout

Maps neural activity back to application output: action indices, token logits, classifications. See [Encoders & Decoders](encoders.md).

## Task

A supervised objective wired as \`input encoder → brain → readout\` with a loss. Created via \`brain.task(...)\`. See [Framework API](framework.md).

## Agent and environment

For interactive experiments: \`environment → observation → encoder → brain → decoder → action → environment → reward → plasticity\`. Created via \`brain.agent(...)\`. The environment is framework-neutral (\`reset()\`/\`step()\`); Gymnasium adapters are optional. See [Experiments](experiment.md).

## What stays outside AxonWeave

- Tensor execution, autodiff, optimizers, accelerators — owned by the host framework (PyTorch/TensorFlow/JAX/NumPy).
- Heavy graph kernels — owned by the Rust/PyO3 native layer, used selectively.
- Your task definition — never dictated by the library.

## Next steps

- [Getting Started](getting-started.md)
- [Framework API](framework.md)
- [Scientific Reference](scientific-reference.md)
`,Ji='# Biological Brain\n\nThe `BiologicalBrain` object is the handle you get after loading a substrate: it bundles the connectome, metadata and selection APIs behind a single facade.\n\n## Loading\n\n```python\nimport axonweave\n\nbrain = axonweave.load("male-cns:v1.0")\n```\n\n`load()` reads from the local substrate cache only. It never downloads data. If the substrate is missing it raises:\n\n```text\nAXW001: substrate \'male-cns:v1.0\' is not installed.\nRun `axonweave substrate install male-cns:v1.0`.\n```\n\n## What BiologicalBrain contains\n\n| Attribute | Type | Meaning |\n|---|---|---|\n| `brain.graph` | `ConnectomeGraph` | Sparse CSR connectivity + body IDs |\n| `brain.n_neurons` | `int` | Number of neurons (graph nodes) |\n| `brain.substrate_id` | `str` | Substrate identifier, e.g. `"male-cns:v1.0"` |\n| `brain.fingerprint` | `str` | SHA-256 identity hash of the loaded graph |\n| `brain.annotations` | `Path` or `None` | Path to annotations Feather file, if installed |\n| `brain.neurotransmitters` | `Path` or `None` | Path to neurotransmitter predictions, if installed |\n| `brain.receptors` | `Path` or `None` | Path to receptor metadata, if present |\n\n`BiologicalBrain` is explicitly a **computational wrapper**: the substrate identity and provenance live in the manifest on disk; the wrapper binds the graph to adapters.\n\n## Introspection: brain.info()\n\n`brain.info()` returns a `BrainInfo` snapshot of the loaded substrate:\n\n```python\ninfo = brain.info()\n\ninfo.n_neurons        # 166700\ninfo.n_edges          # 25600000 (approximate)\ninfo.substrate_id     # "male-cns:v1.0"\ninfo.fingerprint      # 64-char graph identity hash\ninfo.has_annotations  # True / False per installed attachments\ninfo.native_backend   # "0.2.0" (compiled Rust core) or "python-fallback"\n\nprint(info.summary())\n# Substrate:   male-cns:v1.0\n# Fingerprint: 3f9c1a2b7d4e5f60...\n# Neurons:     166,700\n# Connections: 25,600,000\n# Annotations: yes  Neurotransmitters: yes  Receptors: no\n# Native core: 0.2.0\n```\n\n`brain.capabilities()` returns the same facts as a machine-readable dict — backends, facades, dynamics and learning rules available on this instance — for use in experiment metadata and notebooks.\n\n## The graph fingerprint\n\nThe fingerprint is a deterministic SHA-256 over the CSR structure (shape, body IDs, indptr, indices, data). Two loads of the same substrate version always produce the same fingerprint; any change in connectivity or body IDs changes it. It is used to:\n\n- detect manifest identity mismatches at load time (`AXW002`)\n- tag checkpoints so a trained model cannot be restored against an incompatible connectome (see [Checkpoints](checkpoints.md))\n\n## Neuron selection\n\nSelections resolve against **body IDs** — the stable biological identifiers preserved from the source dataset. Reach the selector through `brain.graph.neurons`:\n\n```python\nsel = brain.graph.neurons.all()             # every neuron\nsel = brain.graph.neurons.ids([720575940632062920, 720575940610549233])\nsel = brain.graph.neurons.by_mask(my_mask)  # boolean mask over graph order\n```\n\nEvery selection is an ordered `NeuronSelection` with:\n\n| Member | Meaning |\n|---|---|\n| `len(sel)` | Number of selected neurons |\n| `sel.body_ids_list` | Selected body IDs, in request order |\n| `sel.weights()` | Sparse sub-matrix restricted to the selection |\n| `sel.mask()` | Boolean mask over all neurons |\n\nSelection order is preserved exactly as requested, so `ids([a, b])` and `ids([b, a])` produce differently-ordered (but equivalent) selections. Unknown body IDs raise `AXW010` — the library never silently drops an ID.\n\n:::DOC-NOTE\n`by_type()` and `by_region()` resolve against selection tables built from the MaleCNS body-annotations file at install time (stored as `annotations.json` in the substrate directory). If the tables are missing — e.g. an older install — reinstalling the substrate builds them; until then these methods raise an actionable `AXW010` error rather than returning an empty selection.\n:::\n\n```python\nsel = brain.graph.neurons.by_type("kenyon_cell")\nsel = brain.graph.neurons.by_region("L")           # hemisphere-style region values\n```\n\nAnnotation values are taken verbatim from the substrate\'s annotation columns (aliases such as `cell_type`/`type` and `side`/`region` are resolved by the builder). To discover the available values, query a known-missing one and read the error message, which lists up to 20 known values.\n\n## Selections in layers\n\nA selection can be handed directly to any backend\'s `ConnectomeLayer`. The layer then operates on the selected sub-network only — its input/output dimension equals the selection size, weights derive from the sub-matrix, and trainable edge parameters cover only the retained synapses:\n\n```python\nsel = brain.graph.neurons.by_type("kenyon_cell")\n\nlayer = brain.torch_layer(trainable_edges=True, selection=sel)  # torch.nn.Module over the sub-network\n```\n\nThe layer records `selection_body_ids` so experiment metadata can always recover which neurons it computed over. Passing anything that is not a `NeuronSelection` raises `AXW010`.\n\n## Framework adapters\n\n```python\nbrain.torch_layer(trainable_edges=True, learnable_gain=True, selection=None)  # torch.nn.Module\nbrain.keras_layer(trainable_edges=True, selection=None)                       # tf.keras.layers.Layer\nbrain.layer(...)                                                              # alias for torch_layer\n```\n\nThese remain the stable low-level APIs. The high-level facades are additive:\n\n```python\nbrain.task(input=..., output=..., dynamics="lif")   # supervised model (requires torch)\nbrain.agent(input=..., output=..., learning="stdp") # environment agent\nbrain.simulate(...)                                 # no-learning run\nbrain.experiment(...)                               # learning-enabled run\n```\n\n## Manifest identity\n\nEvery provisioned substrate carries a `manifest.json` with substrate ID, version, source URLs, per-file checksums, graph size and build status. `load()` validates identity (`AXW002` on mismatch) so you cannot silently compute against the wrong substrate.\n\n## Related\n\n- [Substrate Distribution](distribution.md) — how the substrate gets to disk.\n- [Connectome](connectome.md) — the graph object in detail.\n- [Framework API](framework.md) — tasks and agents.\n- [Checkpoints](checkpoints.md) — fingerprint-checked checkpoint identity.\n',Yi=`# Connectome

How the MaleCNS connectome is represented internally as a sparse directed graph, and the APIs for inspecting its structure without loading anything dense.

## Representation

The connectome is a **directed weighted graph** stored as a SciPy CSR sparse matrix:

- **Nodes** — neurons, identified by their original upstream **body IDs** (int64). AxonWeave never renumbers them: index 0 in the matrix maps to a stable body ID through \`brain.graph.body_ids\`.
- **Edges** — directed synaptic connections \`pre → post\`.
- **Edge weights** — derived from upstream synaptic counts. These are source data, preserved as loaded.
- **Sparsity** — the full MaleCNS graph is ~166,700 neurons × ~25.6M directed edges. A dense 166,700² matrix would need ~100 GB; AxonWeave never materializes it.

## ConnectomeGraph API

\`\`\`python
graph = brain.graph

graph.n_neurons        # node count
graph.n_edges          # edge count (CSR nonzeros)
graph.body_ids         # int64 array: matrix index -> upstream body ID
graph.index(body_id)   # body ID -> matrix index (KeyError if unknown)
graph.neighbors(body_id)  # (target_body_ids, weights) for outgoing edges

graph.save(path)       # compressed .npz round-trip
graph = ConnectomeGraph.load(path)
\`\`\`

## Raw graph vs propagation graph

The **raw connectome** is the structural source: connectivity as published. The **propagation graph** is the same matrix used computationally by layers and dynamics. AxonWeave keeps them identical by default; trainable modes derive computational weights as \`W = W₀ + ΔW\` on existing edges only, preserving topology.

## Identity and fingerprints

Graph construction writes a SHA-256 fingerprint over the CSR data, indices, indptr and body IDs. Fingerprints are stored in the substrate manifest and are the basis for future checkpoint compatibility checks.

## Why not dense?

- Memory: dense full-connectome matrices are infeasible (~100 GB for MaleCNS).
- Semantics: the biological graph is sparse; dense representation would invent zero-weight synapses.
- Performance: sparse CSR × dense batch matmul is the hot path and is well-supported by NumPy/SciPy, PyTorch and TensorFlow.

## Related

- [Biological Brain](brain.md)
- [Backends](backends.md) — sparse operator support per framework.
- [Scientific Reference](scientific-reference.md) — data provenance.
`,Xi=`# Signals & Receptors

:::DOC-WARN
Receptor models and synaptic delays are planned interfaces, not yet implemented. The \`SignalPolicy\` mechanism exists today.
:::

## The problem

The upstream MaleCNS release provides **aggregate neurotransmitter predictions** per neuron: e.g. "this neuron releases acetylcholine". That is a source fact.

What the dataset does **not** specify is how that transmitter changes the target neuron's state — which depends on the target's receptor composition, which varies per synapse and is not fully mapped. Converting "releases GABA" into "inhibitory" is therefore a **modeling assumption**, not data.

## AxonWeave's rule

Neurotransmitter identity never automatically becomes a universal excitatory/inhibitory rule. Effective influence requires an explicit, user-configurable policy.

## SignalPolicy

\`\`\`python
from axonweave.signals import SignalPolicy

policy = SignalPolicy(
    mapping={
        "acetylcholine": 1.0,
        "gaba": -1.0,
    },
    default_gain=0.0,   # unknown transmitters contribute nothing unless you decide
)

gain = policy.gain("gaba")   # -1.0
\`\`\`

This is a computational policy. It is not a statement about Drosophila biology. Record it in your experiment configuration and checkpoints.

## Planned: receptor models

The planned \`ReceptorModel\` interface separates transmitter identity from receptor response:

\`\`\`text
neurotransmitter identity
        +
receptor type (user/model policy)
        ↓
effective signal
\`\`\`

A receptor model will be replaceable; users will supply custom implementations. Until it exists, \`SignalPolicy\` covers sign/strength decisions.

## Planned: synaptic delays

Synaptic transmission is not instantaneous. The planned delay interface will support constant, per-edge, per-neuron-type and user-callback delay models, compatible with time-stepped dynamics.

## Related

- [Scientific Reference](scientific-reference.md) — what is source data vs assumption.
- [Neuron Dynamics](dynamics.md) — how effective signals drive state.
- [Learning & Plasticity](learning.md) — how plasticity interacts with sign.
`,Zi=`# Tasks

:::DOC-WARN
The task API requires PyTorch (\`pip install "axonweave[torch]"\`) and is **experimental**. Keras and JAX task adapters are planned.
:::

## The pipeline

\`\`\`text
data
  ↓
encoder      (application data → neural currents)
  ↓
brain        (sparse connectome + dynamics; stateful over time)
  ↓
readout      (neural activity → task output)
  ↓
loss         (host framework)
\`\`\`

For temporal tasks (sequences, forecasting, token streams) the stateful \`BrainModel\` supports per-timestep \`step()\`, batched \`forward_sequence()\` and truncated BPTT through spiking dynamics — see [Temporal Runtime](runtime.md).

## Creating a task

\`\`\`python
import axonweave

brain = axonweave.load("male-cns:v1.0")

model = brain.task(
    input=axonweave.encoders.ImageEncoder(shape=(28, 28, 1), n_target=1024),
    output=axonweave.decoders.ClassificationHead(10),
    dynamics="rate",          # "lif", "adaptive_lif", "rate"
    trainable_edges=False,    # Mode 1: frozen connectome
)
\`\`\`

Under the hood this constructs a \`BrainModel\` with \`Input\`/\`Readout\` interfaces sized from the encoder/decoder.

## Training

\`\`\`python
history = model.fit(train_loader, epochs=3, lr=1e-3)
\`\`\`

\`fit\` uses the host framework's optimizer (Adam by default) and cross-entropy loss. Nothing trains unless something can: with a frozen substrate and no connected interfaces, \`fit\` raises \`AXW010\` instead of silently doing nothing.

## Training modes

See [Learning & Plasticity](learning.md) for the five modes. The task API exposes:

- \`trainable_edges=False\` — frozen substrate (Mode 1)
- \`trainable_edges=True\` — synaptic weights on existing edges (Mode 2)
- \`learning="stdp"\` / \`"dopamine_stdp"\` — local plasticity alongside backprop (Modes 4/5)

## Task families

| Family | Status |
|---|---|
| Classification | Experimental |
| Next-token prediction (via TokenEncoder/TokenDecoder) | Experimental |
| Regression (via continuous readouts) | Planned |
| Reinforcement learning (via agent API) | Experimental |
| Custom tasks (compose your own modules) | Supported |

## Scientific framing

A next-token experiment means: token IDs → encoder → connectome dynamics → readout optimized against cross-entropy. It does **not** mean the fly brain understands language. The task interface is yours; the substrate remains source data. See [Scientific Reference](scientific-reference.md).

## Related

- [Framework API](framework.md) — BrainModel and ConnectomeBlock details.
- [Encoders & Decoders](encoders.md).
- [Learning & Plasticity](learning.md).
`,Qi=`# Training

:::DOC-NOTE
All training modes preserve substrate identity and graph topology. Structural plasticity (adding/removing edges) is not supported.
:::

## Mode 1 — Frozen connectome

The substrate is completely fixed. Only encoders, decoders and readouts train through normal backpropagation.

\`\`\`python
model = BrainModel(brain, dynamics="rate", trainable_edges=False)
\`\`\`

- What trains: interface parameters.
- What stays fixed: every synaptic weight, all dynamics.
- Use when: benchmarking the substrate as a fixed feature map; cheapest and most reproducible.

## Mode 2 — Trainable synapses

Synaptic weights become trainable, initialized from biological values:

\`\`\`text
W = W₀ + ΔW
\`\`\`

\`\`\`python
model = BrainModel(brain, dynamics="rate", trainable_edges=True)
\`\`\`

- What trains: one parameter per **existing** edge, initialized at the biological weight.
- What stays fixed: topology. Non-existing edges remain exactly zero — AxonWeave never invents synapses.
- Use when: adapting connectivity signal flow to a task.

## Mode 3 — Trainable neuron parameters

Connectivity untouched; per-neuron parameters train instead:

- membrane time constant τ
- firing threshold
- leak / resting potential
- global gain and bias

\`\`\`python
model = BrainModel(brain, train_dynamics=True)
\`\`\`

- What trains: far fewer parameters than Mode 2; can be dramatically cheaper.
- Status: parameter plumbing implemented for gain/bias; full per-neuron τ/threshold training is planned.

## Mode 4 — Local plasticity

No backpropagation through the brain. Synapses update from local activity traces and reward:

\`\`\`text
pre-activity × post-activity × neuromodulatory signal → synaptic update
\`\`\`

\`\`\`python
from axonweave.learning import STDP, DopamineSTDP

agent = brain.agent(..., learning="stdp")
agent = brain.agent(..., learning="dopamine_stdp")
\`\`\`

- What changes: the working copy of the weights, every step inside the environment loop.
- What stays fixed: the cached substrate graph (copy-on-write; verified by tests).
- Use when: online/agent experiments where backprop is impractical.

## Mode 5 — Hybrid

Combine global gradient descent outside the substrate with local plasticity inside it:

\`\`\`python
model = BrainModel(brain, trainable_edges=True, learning="dopamine_stdp")
\`\`\`

Backprop trains interfaces and synaptic residuals; STDP adapts synapses locally during environment interaction.

## Gradients through spiking dynamics (BPTT)

For temporal training, gradient-based modes route through the stateful runtime. When the model's dynamics is a surrogate-spiking model (\`SurrogateLIF\` / \`SurrogateAdaptiveLIF\`), the torch path becomes fully differentiable: \`loss.backward()\` on \`forward_sequence\` output reaches edge weights, gain and the readout through every timestep, and \`detach_state()\` marks truncated-BPTT chunk boundaries:

\`\`\`python
from axonweave.dynamics import SurrogateLIF, SigmoidSurrogate

model = BrainModel(
    brain=brain,
    encoder=encoder,
    dynamics=SurrogateLIF(surrogate=SigmoidSurrogate(k=5.0)),
    readout=readout,
)
for chunk in chunks:
    out = model.forward_sequence(chunk)
    loss = criterion(out, targets)
    loss.backward()
    opt.step()
    model.detach_state()
\`\`\`

The spike is a hard threshold forward with a surrogate derivative backward; the surrogate (sigmoid / atan / piecewise / straight-through) is an explicit configuration choice — the library never silently substitutes surrogate gradients. See [Temporal Runtime](runtime.md).

Plain \`LIF\` (without a surrogate) has no gradient path through its spikes: use it frozen (Mode 1) or with \`dynamics='rate'\` for gradient training.

## Comparison

| Mode | Trains | Optimizer | Substrate graph |
|---|---|---|---|
| 1 Frozen | interfaces | host framework (Adam/SGD) | untouched |
| 2 Synapses | existing edges | host framework | topology preserved |
| 3 Neuron params | τ/threshold/gain | host framework | untouched |
| 4 Plasticity | synapses locally | local rule (no backprop) | working copy |
| 5 Hybrid | interfaces + edges + synapses | both | working copy for plasticity |

## Scientific caution

These are computational training strategies applied to a biological structure. They are not biologically equivalent learning mechanisms. Plasticity rules in particular are *inspired by* biology, not established complete biological mechanisms. See [Scientific Reference](scientific-reference.md).

## Related

- [Learning & Plasticity](learning.md)
- [Framework API](framework.md)
- [Experiments](experiment.md)
`,$i=`# Checkpoints

:::DOC-TIP
Checkpoints record substrate identity alongside learned parameters. Graph-fingerprint validation is enforced at load time: restoring against an incompatible connectome fails with \`AXW002\` rather than silently producing a meaningless model. For how trained layer weights serialize within each framework, see [Configuration](configuration.md).
:::

## Why identity matters

A trained model is only meaningful against the substrate it was trained on. A checkpoint therefore records context, not just weights:

- AxonWeave version
- substrate ID (e.g. \`male-cns:v1.0\`)
- graph fingerprint (SHA-256 over the substrate's CSR payload and body IDs)
- dynamics configuration (model name and parameters)
- learning rule configuration
- encoder/decoder class names
- creation timestamp

## Saving

\`\`\`python
agent = brain.agent(input=..., output=..., dynamics="lif", learning="stdp")
agent.run(environment, episodes=100)
agent.save_checkpoint("runs/exp1/ckpt-0100.awb-ckpt")
\`\`\`

This writes:

- \`ckpt-0100.awb-ckpt.npz\` — compressed weights (working copy if plasticity ran, otherwise the substrate graph)
- \`ckpt-0100.awb-ckpt.json\` — metadata manifest, including the \`graph_fingerprint\` of the substrate the agent trained against

## Loading

\`\`\`python
from axonweave.experiment import Agent

restored = Agent.load_checkpoint("runs/exp1/ckpt-0100.awb-ckpt", brain)
\`\`\`

The loader reconstructs the dynamics model and learning rule from the metadata and restores the weight matrix.

## Fingerprint validation on load

Before any weights are restored, the loader re-derives the loaded brain's graph fingerprint and compares it to the one recorded in the checkpoint manifest. A mismatch raises:

\`\`\`text
AXW002: checkpoint graph fingerprint does not match the loaded substrate;
refusing to restore against an incompatible connectome
\`\`\`

Two substrates with different fingerprints are materially different graphs, even if their IDs match — so this check fails safely instead of producing a model whose weights point at the wrong neurons. The same fingerprint is also recorded in the substrate manifest at install time and re-verified by \`SubstrateRegistry.load()\` and \`axonweave substrate verify\`, so identity is enforced end to end: download checksums → build fingerprint → install manifest → checkpoint → load.

## Relationship to framework serialization

Checkpoints and framework serialization solve different halves of the problem:

- **Checkpoints** (this page) capture experiment identity: which substrate, which policies, what was learned. They are backend-neutral and validate the substrate fingerprint.
- **Framework serialization** (PyTorch \`state_dict\`, Keras \`get_config()\`, JAX array persistence — see [Configuration](configuration.md)) captures layer weights and structural options inside one framework's native format.

A reproducible result records both: the checkpoint for scientific identity, the framework artifact for exact weight restoration.

## Reproducibility metadata

Checkpoints deliberately capture the "what was learned and why" context so experiments can be reported honestly:

- which components came from source data (the substrate)
- which were model assumptions (dynamics, plasticity configuration)
- which were learned (the weight deltas)

## Related

- [Experiments](experiment.md) — the run loop that produces checkpoints.
- [Learning & Plasticity](learning.md) — what the working copy contains.
- [Configuration](configuration.md) — framework-level layer serialization.
`,ea=`# Device Support

A factual account of which devices AxonWeave runs on and why — AxonWeave delegates execution to the host framework, so accelerator support follows that framework's sparse-operator coverage.

## The device principle

AxonWeave does not maintain its own device runtime. Device placement, transfer and execution belong entirely to the host framework:

- **PyTorch** — \`torch.device\`: CPU, CUDA, MPS, XPU, as supported by the installed PyTorch release.
- **TensorFlow** — native TensorFlow placement: CPU, GPU, TPU where available.
- **JAX** — adapter exists (\`axonweave.jax\`); device placement follows native JAX device semantics. Behavior is experimental and pending verification — see the note under the capability table.
- **NumPy/SciPy** — CPU reference path only.

## Capability table

| Backend | CPU | CUDA | MPS | XPU | TPU | Sparse ops on accelerator |
|---|---|---|---|---|---|---|
| NumPy/SciPy (reference) | Yes | — | — | — | — | N/A (CPU only) |
| PyTorch | Yes | Framework-dependent | Framework-dependent | Framework-dependent | — | \`torch.sparse.mm\` support varies by device/dtype |
| TensorFlow/Keras | Yes | Framework-dependent | — | — | Framework-dependent | \`tf.sparse.sparse_dense_matmul\` support varies |
| JAX | Adapter written; unverified | Planned | — | — | Planned | — |

"Framework-dependent" means: the operation may work, but AxonWeave does not guarantee it. Test your specific device/operation/dtype combination.

:::DOC-WARN
The JAX adapter (\`axonweave.jax\`) exists but is not yet covered by numerical tests on the CI matrix. CPU and accelerator rows above are device claims that remain **pending verification** — treat the adapter as experimental until the equivalence suite covers it.
:::

## Explicit failure, never silent fallback

If a requested device cannot execute a required sparse operation, AxonWeave raises:

\`\`\`text
AXW004: backend rejected device=...: <framework error>
\`\`\`

AxonWeave does not silently copy tensors to CPU. If you want CPU execution, request it explicitly.

## Requesting devices

\`\`\`python
# PyTorch
layer = brain.torch_layer(device="cuda")   # raises AXW004 if unsupported
\`\`\`

\`\`\`python
# TensorFlow — place via the framework
with tf.device("/GPU:0"):
    y = layer(x)
\`\`\`

## Honest limitations

- A device being *recognized* by a framework does not imply every sparse operator is implemented on it.
- Sparse-gradient support on accelerators varies significantly across framework versions.
- The NumPy reference path is CPU-only by design — it exists for correctness and education.

See [Backends](backends.md) for backend comparison and [Troubleshooting](troubleshooting.md) for \`AXW004\` diagnostics.
`,ta=`# FAQ

Direct answers to the questions newcomers actually ask, each verified against the real implementation rather than aspiration.

## Is the MaleCNS connectome the entire model?

No. It is the **structural substrate**: wiring, neuron identities and neurotransmitter predictions. Dynamics, signaling rules, plasticity and interfaces are separate configurable models.

## Is AxonWeave a brain simulator?

No. AxonWeave provides a computational interface *to* connectome data. It explicitly does not claim that a connectome alone is a complete biophysical simulation. See [Scientific Reference](scientific-reference.md).

## Can I train the connectome?

Yes, several ways: trainable synaptic weights on existing edges (topology preserved), local plasticity (STDP, dopamine-modulated), or leave it frozen and train only interfaces. See [Training](training.md).

## Can I freeze the connectome?

Yes — that is the default (\`trainable_edges=False\`). Only encoders/readouts train.

## Can I change synaptic weights?

Existing edges can become trainable parameters or update via plasticity. Non-existing edges stay zero; structural plasticity (new/removes edges) is not supported.

## Can I use PyTorch?

Yes — \`pip install "axonweave[torch]"\`. \`ConnectomeLayer\` is a native \`torch.nn.Module\` and composes with arbitrary PyTorch layers.

## Can I use TensorFlow?

Yes — \`pip install "axonweave[tensorflow]"\`. \`ConnectomeLayer\` is a native \`tf.keras.layers.Layer\`.

## Can I use JAX?

The JAX adapter is planned. NumPy, PyTorch and TensorFlow are available today.

## Can I run on GPU?

Device execution is delegated to the host framework, and sparse-op support on accelerators varies. AxonWeave fails explicitly (\`AXW004\`) rather than silently falling back to CPU. See [Device Support](devices.md).

## Can I use my own layer?

Yes. AxonWeave blocks are ordinary framework modules — compose them with attention, convolution, custom research modules, anything the host framework supports.

## Can I use text?

Yes, as an interface experiment: \`TokenEncoder\` → brain → \`TokenDecoder\` → next-token logits. This is a computational task, not a claim about fly cognition. See [Tasks](tasks.md).

## Can I use games?

The agent/environment loop exists (\`brain.agent(...)\`, \`agent.run(environment)\`). Game-specific adapters (Doom, Gymnasium environments) are planned.

## Do I need to manually download MaleCNS?

No. \`axonweave substrate install male-cns:v1.0\` handles download, checksum verification, graph construction and caching. You never touch Feather files.

## Are neurotransmitter effects hard-coded?

No. Neurotransmitter predictions are stored as data. Sign/strength requires an explicit \`SignalPolicy\` you configure. See [Signals & Receptors](signals.md).

## Is the model biologically exact?

No. The connectome is real data; everything computed on top (dynamics, delays, plasticity) is an explicit modeling choice. AxonWeave keeps these categories separate and visible.

## Can I use another connectome later?

The substrate registry is versioned by design. Additional connectomes are a roadmap item; the manifest/fingerprint system already supports multiple substrates.
`,na=`# Scientific Limitations

:::DOC-WARN
This page is a core scientific requirement, not a disclaimer. Every limitation here should be treated as a real constraint on experimental conclusions.
:::

## The central limitation

A connectome is a wiring diagram. It specifies which neurons can influence which neurons, and with roughly what strength (synapse counts). It does **not** specify how that wiring computes. Everything dynamic — voltages, spikes, receptor effects, learning — is a model layered on top of the structure.

AxonWeave exists to make that layer explicit and configurable. It does not remove the limitation.

## Incomplete biological information

The MaleCNS v1.0 release provides:

- neuron identities (body IDs)
- directed connectivity with synapse-count-derived weights
- aggregate neurotransmitter predictions per neuron

It does not provide:

- receptor composition per synapse
- membrane properties per neuron
- synaptic release probabilities
- detailed neuromodulatory state
- complete cell-type annotations for every neuron

Where AxonWeave needs such values (dynamics parameters, sign policies), it requires you to supply them explicitly rather than guessing.

## Simplified dynamics

The bundled dynamics models are deliberately simple:

- **Rate** — instantaneous input-output; no memory, no spikes.
- **LIF** — single compartment, fixed parameters, absolute refractory period only.
- **Adaptive LIF** — adds threshold adaptation; still single compartment.

None of these reproduce Drosophila biophysics: no ion-channel diversity, no dendritic computation, no compartmental morphology, no stochastic vesicle release. They are computational reference models applied to biological structure.

## Uncertain receptor relationships

The dataset records what transmitter a neuron likely releases. It does not record what receptors the postsynaptic side expresses. Converting "releases GABA" into "inhibitory" is an assumption that holds for typical receptor compositions but is not verified per synapse. AxonWeave therefore refuses to hard-code polarity; see [Signals & Receptors](signals.md).

## Neurotransmitter ambiguity

Predictions are aggregate and probabilistic. A neuron labeled "acetylcholine" may co-release other transmitters. The substrate preserves the prediction with its provenance; it does not resolve ambiguity.

## Missing mechanisms

Not modeled at all currently:

- synaptic delays (planned interface)
- short-term plasticity (facilitation/depression)
- neuromodulation (dopamine, serotonin as global state)
- glia, gap junctions
- development and structural plasticity
- energy/metabolic constraints

## Learning-rule limitations

STDP and dopamine-modulated STDP are computational rules *inspired by* biology:

- pairwise trace-based STDP is a simplification of spike-timing effects
- the dopamine signal in \`DopamineSTDP\` is whatever your environment provides, not a measured neuromodulatory event
- no claim is made that Drosophila uses these rules at these synapses

Training modes 1–5 (see [Training](training.md)) are optimization strategies applied to a biological structure, not models of fly learning.

## Computational discretization

Simulation is time-discrete (\`dt = 1 ms\` default). Continuous biology is approximated; results depend on step size. Sparse propagation is exact with respect to the loaded weights, but weights themselves derive from a thresholded upstream release (\`minconf-0.5\`), so low-confidence connections are absent by construction.

## Substrate and version dependence

Results are only reproducible against the same substrate version. MaleCNS v1.0 is a fixed release; future connectome versions will have different fingerprints. Checkpoints must record substrate identity, and AxonWeave validates manifest identity at load time.

## What this means for your conclusions

- "The substrate + my dynamics produced behavior X" — a legitimate computational result.
- "The fly brain computes X" — not supported by this pipeline alone.
- Treat learned parameters as task adaptations, not biological findings, unless independently validated against experiments.

## Related

- [Scientific Reference](scientific-reference.md) — data provenance and what the source provides.
- [Signals & Receptors](signals.md) — the polarity assumption problem.
- [Training](training.md) — what each learning mode actually optimizes.
- [FAQ](faq.md) — direct answers to common overclaims.
`,ra=`# Errors & Diagnostics

Every AxonWeave error code, what triggers it, and how to handle it programmatically — with stable \`AXW###\` codes designed for catching, not just reading.

## Design principles

AxonWeave errors follow three rules:

1. **Every error carries a stable \`AXWnnn\` code** — you can match on the code, not the prose. Message wording may improve between releases; codes never change meaning.
2. **Messages are actionable.** They state what failed, what was expected, and what to do next — including the exact command to run when one exists.
3. **No silent fallbacks.** A missing substrate, a wrong device, or an incompatible checkpoint raises immediately. Nothing degrades quietly and shifts debugging to your results.

## The error hierarchy

All library errors derive from one base class, so a single \`except\` catches everything AxonWeave raises:

\`\`\`python
AxonWeaveError                     # AXW000 — base class
├── SubstrateNotInstalledError     # AXW001
├── DatasetIntegrityError          # AXW002
├── SchemaError                    # AXW003
├── UnsupportedDeviceError         # AXW004
├── BiologicalAssumptionError      # AXW005
└── BackendUnavailableError        # AXW006
\`\`\`

Warnings follow the same code convention (\`AxonWeaveWarning\` base, \`AXW007\`+
slots): \`ConfigurationWarning\` (AXW007) announces non-fatal configuration
issues such as \`.awb\` schema migrations; \`AnnotationBuildWarning\` (AXW008)
is raised during substrate installs when selection tables cannot be built.

Some API-misuse paths (wrong dimensions, unknown option names) raise \`ValueError\` with an \`AXW010\`-prefixed message rather than a dedicated class — see the code table below.

## Error code reference

| Code | Exception class | Raised when | Typical fix |
|---|---|---|---|
| \`AXW000\` | \`AxonWeaveError\` | Base class; also generic library misuse | Read the message; match on subclass |
| \`AXW001\` | \`SubstrateNotInstalledError\` | \`load()\` for a substrate not in the local cache, or packing a substrate with no installed cache entry | \`axonweave substrate install male-cns:v1.0\` |
| \`AXW002\` | \`DatasetIntegrityError\` | Manifest identity mismatch, checksum failure, checkpoint fingerprint mismatch, or corrupted/unsafe \`.awb\` artifact (graph payload, attachment hash, size) | Reinstall the substrate; re-pack or discard the corrupted \`.awb\`; never load checkpoints against a different graph |
| \`AXW003\` | \`SchemaError\` | A source data file lacks expected columns; an \`.awb\` artifact is not in the expected format, uses a newer/unknown \`schema_version\`, or has no migration path | Check the file schema; upgrade AxonWeave to read newer \`.awb\` schemas |
| \`AXW004\` | \`UnsupportedDeviceError\` | The host framework rejected a device request | Verify CUDA/MPS availability in the framework itself; try \`device=None\` (framework default) |
| \`AXW005\` | \`BiologicalAssumptionError\` | A dynamics override for an unannotated neuron type was requested | Register the override, or use the default dynamics |
| \`AXW006\` | \`BackendUnavailableError\` | An optional framework (torch, TF) is not installed | \`pip install "axonweave[torch]"\` |
| \`AXW007\` | \`ConfigurationWarning\` | A non-fatal configuration issue — e.g. an \`.awb\` schema migration was applied to the manifest at read time | Acknowledge the migration; re-pack the artifact to update it in place |
| \`AXW008\` | \`AnnotationBuildWarning\` | Selection-table construction failed during substrate install | Install will complete; by_type()/by_region() will raise AXW010 at query time |
| \`AXW010\` | \`ValueError\` (prefixed) | API misuse: bad dimensions, unknown IDs/rules/options, missing interface wiring | Read the message; it states the expected and received values |
| \`AXW101\` | CLI \`SystemExit\` | Unknown substrate name on the command line | Use \`male-cns:v1.0\` |

## Reading an AxonWeave traceback

A typical failure produces a normal Python traceback whose **last line** carries the code and the actionable part:

\`\`\`text
axonweave.errors.SubstrateNotInstalledError: AXW001: substrate 'male-cns:v1.0' is not installed.
Run \`axonweave substrate install male-cns:v1.0\`.
\`\`\`

The pattern is always: **code → what failed → expected vs. received → next action**. For example:

\`\`\`text
AXW010: expected last dimension 4, got 166700
\`\`\`

This tells you the model runs on a 4-neuron selection but received a full-brain-sized tensor — the fix is to size your data to the selection (or drop the selection).

\`\`\`text
AXW010: unknown dynamics 'hodgkin_huxley'; known: ['adaptive_lif', 'lif', 'rate']
\`\`\`

Unknown-option errors **list the valid values**, so the message itself is the documentation.

## Try/except patterns

### Catch everything from the library

\`\`\`python
import axonweave
from axonweave.errors import AxonWeaveError

try:
    brain = axonweave.load("male-cns:v1.0")
except AxonWeaveError as e:
    print(f"AxonWeave error [{getattr(e, 'code', 'AXW010')}]: {e}")
    raise SystemExit(1) from e
\`\`\`

### Handle specific failures differently

\`\`\`python
from axonweave.errors import (
    SubstrateNotInstalledError, DatasetIntegrityError, BackendUnavailableError,
)

try:
    brain = axonweave.load("male-cns:v1.0")
except SubstrateNotInstalledError:
    brain = install_and_load()          # your provisioning step
except DatasetIntegrityError as e:
    # Corrupt or mismatched data — do NOT retry blindly.
    raise SystemExit(f"Data integrity failure, reinstall the substrate:\\n{e}")
except BackendUnavailableError as e:
    raise SystemExit(f"Missing optional dependency:\\n{e}")
\`\`\`

### Match on the code string

When you only have the message (e.g. logs from a job):

\`\`\`python
try:
    ...
except Exception as e:
    code = str(e).split(":", 1)[0]        # "AXW002"
    if code == "AXW002":
        ...
\`\`\`

### Guarding experimental blocks in agents

\`\`\`python
from axonweave.errors import AxonWeaveError

agent = brain.agent(dynamics="lif", learning="stdp",
                    input=SensorEncoder(4, brain.n_neurons),
                    output=ActionDecoder(brain.n_neurons, 2))
try:
    result = agent.run(env, episodes=10)
except AxonWeaveError as e:
    if "AXW010" in str(e) and "no encoder" in str(e):
        agent.sense(my_encoder)           # recoverable: wire and retry
        result = agent.run(env, episodes=10)
    else:
        raise
\`\`\`

:::DOC-NOTE
\`raise ... from e\` preserves the original traceback when you re-raise. AxonWeave itself uses \`from e\` internally so the underlying cause (e.g. the exact \`ImportError\` for a missing backend) stays visible.
:::

## Output hints: what the library prints vs. raises

The CLI **prints** success output and **exits non-zero** on failure — it never raises into your shell:

\`\`\`bash
$ axonweave substrate install male-cns:v1.0
Installed male-cns:v1.0: 166700 neurons, 25600000 graph edges

$ axonweave substrate install unknown:v9
AXW101: unsupported substrate 'unknown:v9'; available: male-cns:v1.0
# exit code 1
\`\`\`

In Python, \`load()\` returns a \`BiologicalBrain\` on success and raises on failure; there is no \`None\` return and no warning-only mode. \`brain.info().summary()\` and \`brain.capabilities()\` exist so you can verify *what* you loaded before running anything — the cheapest debugging step available:

\`\`\`python
brain = axonweave.load("male-cns:v1.0")
print(brain.info().summary())
# Substrate:   male-cns:v1.0
# Fingerprint: 3f9c1a2b7d4e5f60...
# Neurons:     166,700
# ...
\`\`\`

## Code syntax errors and IDE hinting

### Type hints are shipped

The package is fully type-annotated, so IDEs (VS Code + Pylance, PyCharm) flag mistakes before runtime:

\`\`\`python
from axonweave.numpy import ConnectomeLayer

layer = ConnectomeLayer(brain.graph)
layer(42)                 # IDE: expected ndarray-like, got int
\`\`\`

### The most common runtime "syntax" errors are dimension errors

Every propagation API validates the last dimension and reports expected vs. received:

\`\`\`python
# AXW010: expected last dimension 166700, got 784
\`\`\`

When you see this on a first forward pass, the projection in front of the connectome layer has the wrong output size — the layer never silently resizes.

### Validator-style quick checks

\`\`\`python
brain = axonweave.load("male-cns:v1.0")
assert brain.n_neurons == brain.graph.weights.shape[0]
sel = brain.graph.neurons.ids(my_ids)   # raises AXW010 immediately on unknown IDs
\`\`\`

Failing fast at selection time is deliberate: a bad body ID is an error now, not a silent empty result later.

### mypy / ruff for contributors

The repository passes \`ruff check\` and typechecks with mypy in CI (non-blocking). Run locally:

\`\`\`bash
python -m ruff check python tests
python -m mypy python/axonweave
\`\`\`

## Error-message anatomy (for contributors)

When adding new errors, follow the house style:

1. Start with the code: \`AXW010: ...\`
2. State what was expected and what arrived: \`expected last dimension 4, got 8\`
3. For unknown-option errors, enumerate valid values: \`known: ['lif', 'rate']\`
4. For missing prerequisites, include the command: \`Run \\\`axonweave substrate install male-cns:v1.0\\\`\`
5. Raise the most specific subclass available; only dimension/usage errors use bare \`ValueError\` with the \`AXW010\` prefix.

## Related

- [Troubleshooting](troubleshooting.md) — problem → cause → solution for common failures.
- [Checkpoints](checkpoints.md) — the AXW002 fingerprint-mismatch semantics.
- [Device Support](devices.md) — AXW004 and framework-delegated execution.
- [Substrates & .awb artifacts](distribution.md) — AXW001/002/003 in the substrate lifecycle, including schema migrations (AXW007).
- [API Reference](api-reference.md) — the classes these errors protect.
`,ia=`# Tutorial: Leaky Integrate-and-Fire Neurons

How LIF neurons work, how to configure them in AxonWeave, and how to interpret membrane potential traces.

## Biological model

A LIF neuron accumulates input current into a membrane potential \`V\`. Between spikes, \`V\` decays exponentially toward a resting value. When \`V\` crosses a threshold, the neuron fires a spike and resets.

The continuous equation:

$$\\tau_m \\frac{dV}{dt} = -(V - V_{rest}) + R \\cdot I(t)$$

Where:
- \`tau_m\` — membrane time constant (how fast \`V\` decays toward rest)
- \`V_rest\` — resting potential (mV)
- \`R\` — membrane resistance (folded into \`tau\` scaling in the discrete model)
- \`I(t)\` — total input current from synaptic connections

Discrete-time rule at each step:

\`\`\`
dV = (-(V - V_rest) + I) * dt / tau_m
V  = V + dV
if V >= V_threshold:
    emit spike
    V = V_reset
    enter refractory period
\`\`\`

:::DOC-NOTE
AxonWeave's LIF implementation uses \`tau\` (ms), \`v_rest\` (mV), \`v_threshold\` (mV), \`v_reset\` (mV) and \`refractory\` (ms) directly. These are modeling parameters you choose — not values extracted from the connectome dataset.
:::

## Quick start

\`\`\`python
import axonweave
from axonweave.dynamics import LIF
from axonweave.runtime import ConnectomeRuntime

brain = axonweave.load("male-cns:v1.0")

dynamics = LIF(
    tau=20.0,           # membrane time constant (ms)
    v_rest=-65.0,       # resting potential (mV)
    v_threshold=-50.0,  # spike threshold (mV)
    v_reset=-70.0,      # reset after spike (mV)
    refractory=2.0,     # absolute refractory period (ms)
    dt=1.0,             # integration step (ms)
)

runtime = ConnectomeRuntime(brain.graph, dynamics=dynamics)
runtime.reset_state()
\`\`\`

## Running the simulation

Feed input currents step by step. State persists between calls:

\`\`\`python
import numpy as np

n_neurons = brain.n_neurons
runtime.reset_state()

# Simulate 500 steps with constant input to a random subset
rng = np.random.default_rng(42)
input_current = np.zeros(n_neurons, dtype=np.float32)
input_current[rng.choice(n_neurons, size=1000, replace=False)] = 5.0

spikes_log = []
voltage_log = []

for step in range(500):
    spikes = runtime.step(input_current)
    spikes_log.append(spikes.copy())
    voltage_log.append(runtime.get_state().neuron.variables["v"].copy())

spikes_log = np.stack(spikes_log)    # (T, n_neurons)
voltage_log = np.stack(voltage_log)  # (T, n_neurons)
\`\`\`

## Visualizing membrane potential

\`\`\`python
import matplotlib.pyplot as plt

# Pick a neuron that spiked at least once
neuron_idx = np.argmax(spikes_log.sum(axis=0))
v_trace = voltage_log[:, neuron_idx]

fig, ax = plt.subplots(figsize=(10, 4))
ax.plot(v_trace, linewidth=0.8)
ax.axhline(dynamics.v_threshold, color="red", linestyle="--", label="threshold")
ax.axhline(dynamics.v_rest, color="gray", linestyle=":", label="rest")
ax.set_xlabel("Time step")
ax.set_ylabel("Membrane potential (mV)")
ax.set_title(f"Neuron {brain.graph.body_ids[neuron_idx]}")
ax.legend()
plt.tight_layout()
plt.show()
\`\`\`

## Parameter tuning guide

### tau (membrane time constant)

| tau value | Effect |
|-----------|--------|
| Low (5 ms) | Fast decay, brief integration window, high-frequency spiking |
| Medium (20 ms) | Balanced integration, good default for most experiments |
| High (50 ms) | Slow decay, longer memory of past inputs, smoother firing |

Low \`tau\` → neuron acts like coincidence detector. High \`tau\` → neuron acts like temporal integrator.

### v_threshold (spike threshold)

Lower threshold (closer to \`v_rest\`) → lower firing rate, easier to trigger spikes. Higher threshold → harder to fire, higher selectivity.

### v_reset (reset potential)

If \`v_reset\` is well below \`v_rest\`, post-spike hyperpolarization creates a stronger refractory effect. If close to \`v_rest\`, recovery is faster.

### refractory period

During the refractory period the neuron ignores input. Longer refractory → lower maximum firing rate, more temporal regularity.

:::DOC-TIP
Start with defaults (\`tau=20, v_rest=-65, v_threshold=-50, v_reset=-70, refractory=2\`). Tune one parameter at a time and observe firing rate changes.
:::

## Using with ConnectomeLayer (PyTorch)

\`\`\`python
import torch
from axonweave.torch import ConnectomeLayer
from axonweave.dynamics import LIF

layer = ConnectomeLayer(brain.graph, trainable_edges=True)

x = torch.randn(4, brain.n_neurons)  # batch=4, random input
y = layer(x)                          # shape (4, n_neurons)
\`\`\`

For full temporal simulation with state:

\`\`\`python
from axonweave.torch import BrainModel
from axonweave.encoders import VectorEncoder
from axonweave.readout import RegressionReadout

model = BrainModel(
    brain=brain,
    encoder=VectorEncoder(input_dim=8, output_dim=256),
    dynamics=LIF(),
    readout=RegressionReadout(n_source=256, n_outputs=1),
)

model.reset_state()
for x_t in stream:
    prediction = model.step(x_t)
\`\`\`

## AdaptiveLIF variant

Adaptive LIF adds an activity-dependent threshold that increases after each spike, producing spike-frequency adaptation:

\`\`\`python
from axonweave.dynamics import AdaptiveLIF

dynamics = AdaptiveLIF(
    tau=20.0,
    tau_adapt=200.0,       # adaptation time constant (ms)
    delta_threshold=0.5,   # threshold increase per spike (mV)
)

runtime = ConnectomeRuntime(brain.graph, dynamics=dynamics)
\`\`\`

Use AdaptiveLIF when you want neurons to reduce firing rate under sustained input (mimicking adaptation observed in real cortical neurons).

## Common pitfalls

### Pitfall 1: Forgetting to reset state

\`\`\`python
runtime.reset_state()  # must call before each new episode
for x_t in stream:
    runtime.step(x_t)
# Next episode — state carries over if you don't reset
runtime.reset_state()  # ← easy to forget
\`\`\`

### Pitfall 2: Input scaling mismatch

The \`tau\` value sets the integration timescale. If your input currents are in a different unit scale than expected by \`dt / tau\`, firing rates will be wildly off. Check that \`dt\` and \`tau\` are in the same units (ms by default).

### Pitfall 3: Dense input to full connectome

Feeding a \`(1, 166700)\` vector means 166,700 neurons receive input every step. Most experiments should use a [selection](examples-selection.md) to focus on a relevant sub-network.

### Pitfall 4: Monitoring state

\`\`\`python
# Wrong — state is deep-copied, must capture explicitly
state = runtime.get_state()
v = state.neuron.variables["v"]

# Correct — access current voltage
state = runtime.get_state()
current_v = state.neuron.variables["v"]  # this is a snapshot, not live
\`\`\`

:::DOC-WARN
Membrane potential values are modeling quantities, not measurements from the biological MaleCNS. Interpret firing patterns as behavior of your chosen model on the biological graph topology — not as predictions about real fly neurons.
:::

## Related

- [Neuron Dynamics](dynamics.md) — all dynamics models and configuration.
- [Temporal Runtime](runtime.md) — state management, sequences, BPTT.
- [Working with Connectomes](tutorial-connectome.md) — loading and exploring the substrate.
`,aa=`# Tutorial: Working with Connectomes

What a connectome is, how to load the MaleCNS substrate, and how to explore and select neurons from the graph.

## What is a connectome?

A connectome is a wiring diagram: which neurons connect to which, and with what strength. The MaleCNS v1.0 connectome maps ~166,700 neurons and ~25.6 million directed synaptic connections in the *Drosophila melanogaster* male central nervous system.

The graph is stored as a sparse CSR matrix — never densified. Dense storage would need ~100 GB; the sparse representation uses only the nonzero edges.

## Loading the substrate

\`\`\`python
import axonweave

brain = axonweave.load("male-cns:v1.0")
print(brain.n_neurons)  # 166700
\`\`\`

:::DOC-WARN
\`load()\` reads from local cache only. If not installed, run:
\`\`\`bash
axonweave substrate install male-cns:v1.0
\`\`\`
:::

## Graph structure

### Neurons as nodes

Each neuron has a stable **body ID** — the biological identifier from the upstream dataset. AxonWeave never renumbers them:

\`\`\`python
graph = brain.graph

graph.n_neurons          # 166700
graph.body_ids[:5]       # first 5 body IDs (int64 array)
graph.body_ids.dtype     # int64
\`\`\`

### Synapses as edges

Directed connections \`pre → post\` with weights derived from upstream synaptic counts:

\`\`\`python
graph.n_edges            # ~25600000 (CSR nonzeros)
graph.weights            # scipy.sparse.csr_matrix
graph.weights.shape      # (166700, 166700)
graph.weights.nnz        # number of actual edges
\`\`\`

### Body ID ↔ matrix index

Body IDs are stable; matrix indices are internal. Convert between them:

\`\`\`python
body_id = 720575940632062920
idx = graph.index(body_id)  # body ID → matrix index (int)
# KeyError if body_id not in substrate
\`\`\`

## Exploring the graph

### Size and density

\`\`\`python
n = graph.n_neurons
e = graph.n_edges
density = e / (n * (n - 1))
print(f"Neurons: {n}, Edges: {e}, Density: {density:.6f}")
# Neurons: 166700, Edges: 25600000, Density: 0.000921
\`\`\`

The graph is extremely sparse — each neuron connects to ~153 others on average out of 166,699 possible targets.

### Neighbors of a neuron

\`\`\`python
body_id = graph.body_ids[0]
targets, weights = graph.neighbors(body_id)
print(f"Neuron {body_id} connects to {len(targets)} targets")
# e.g. Neuron 720575940628417433 connects to 231 targets
\`\`\`

### Weight statistics

\`\`\`python
import numpy as np

data = graph.weights.data
print(f"Min weight: {data.min()}")
print(f"Max weight: {data.max()}")
print(f"Mean weight: {data.mean():.2f}")
print(f"Median weight: {np.median(data):.2f}")
\`\`\`

### Region and type annotations

If annotations were built at substrate install time:

\`\`\`python
sel = brain.graph.neurons.by_region("L")     # left hemisphere
sel = brain.graph.neurons.by_type("kenyon_cell")  # by cell type

len(sel)  # number of matching neurons
\`\`\`

Discover available values by triggering an error on an unknown name — the error lists up to 20 known values.

## Selecting neurons

Three selection methods, all preserving order:

\`\`\`python
# By body ID (exact biological identifiers)
sel = brain.graph.neurons.ids([
    720575940632062920,
    720575940610549233,
])

# By boolean mask over graph order
import numpy as np
mask = np.zeros(brain.n_neurons, dtype=bool)
mask[graph.body_ids < 720575940600000000] = True
sel = brain.graph.neurons.by_mask(mask)

# All neurons
sel = brain.graph.neurons.all()
\`\`\`

:::DOC-WARN
Unknown body IDs raise \`AXW010\` — the library never silently drops an ID.
:::

### Inspecting a selection

\`\`\`python
sel = brain.graph.neurons.by_type("kenyon_cell")

len(sel)             # neuron count in selection
sel.body_ids_list    # body IDs in request order
sel.mask()           # boolean mask: True for selected neurons
sub = sel.weights()  # sparse (N, N) sub-matrix
\`\`\`

:::DOC-NOTE
A selection is lightweight: it stores indices into the existing graph, never a copy of the connectome. \`sel.weights()\` materializes the sub-matrix on demand.
:::

## Sparse connectivity patterns

The connectome is not uniformly sparse — some regions are densely interconnected, others are sparse. Inspect connectivity structure per region:

\`\`\`python
# Sub-matrix for a selection
sel = brain.graph.neurons.by_region("L")
sub = sel.weights()  # sparse matrix of shape (len(sel), len(sel))

# Degree distribution within the selection
import numpy as np
out_degree = np.array(sub.sum(axis=1)).ravel()  # total outgoing weight
in_degree = np.array(sub.sum(axis=0)).ravel()   # total incoming weight
\`\`\`

## Using selections with layers

Selections plug directly into any backend's connectome layer:

\`\`\`python
from axonweave.numpy import ConnectomeLayer

sel = brain.graph.neurons.by_type("kenyon_cell")
layer = ConnectomeLayer(brain.graph, selection=sel)

x = np.ones((2, len(sel)), dtype=np.float32)
y = layer(x)  # shape (2, len(sel))
\`\`\`

PyTorch:

\`\`\`python
import torch
layer = brain.torch_layer(trainable_edges=True, selection=sel)
x = torch.randn(8, len(sel))
y = layer(x)
\`\`\`

## Provenance and substrate identity

Every substrate load validates identity:

\`\`\`python
info = brain.info()

info.substrate_id     # "male-cns:v1.0"
info.fingerprint      # SHA-256 graph identity hash
info.n_neurons        # 166700
info.n_edges          # ~25600000
info.has_annotations  # True/False
info.native_backend   # "0.2.0" or "python-fallback"

print(info.summary())
\`\`\`

The fingerprint ensures a trained model cannot be restored against an incompatible connectome. Checkpoints store the fingerprint; mismatch raises an error at load time.

\`\`\`python
brain.fingerprint  # same 64-char hash as info.fingerprint
\`\`\`

:::DOC-TIP
Record \`brain.fingerprint\` in experiment metadata. This guarantees reproducibility — same fingerprint means identical graph topology.
:::

## Saving and loading selections

Selections reference the graph by index — they round-trip through body IDs:

\`\`\`python
# Capture body IDs from a selection
sel = brain.graph.neurons.by_region("L")
ids = sel.body_ids_list

# Recreate the same selection later
sel2 = brain.graph.neurons.ids(ids)
assert len(sel) == len(sel2)
\`\`\`

For persistent sub-graphs, save the weight matrix:

\`\`\`python
from scipy.sparse import save_npz, load_npz

sub = sel.weights()
save_npz("region_L_subgraph.npz", sub)
loaded = load_npz("region_L_subgraph.npz")
\`\`\`

## Related

- [Biological Brain](brain.md) — selection API reference.
- [Connectome](connectome.md) — graph representation details.
- [Selection & Sub-Network Examples](examples-selection.md) — practical selection patterns.
- [Neuron Dynamics](dynamics.md) — running dynamics on selected sub-networks.
`,oa=`# Readouts

The pipeline's output side has a single unified namespace:

\`\`\`text
encoder  ->  brain  ->  readout
\`\`\`

Encoders turn your data into neural input; readouts turn neural activity back into task output. Both are explicit, configurable interface choices — never implied by the substrate.

## Why a readout exists

The substrate produces neuron-sized activity (166,700 values for the full brain, or \`len(sel)\` for a [selection](brain.md)). No task consumes that directly. A readout selects, projects and shapes the activity into:

- class logits (classification)
- target values (regression)
- vocabulary logits (next-token prediction)
- motor actions (agent control)

## Available readouts

| Readout | Constructor | Output | Typical use |
|---|---|---|---|
| \`ClassificationReadout\` | \`(n_source, n_classes, trainable=False, seed=0)\` | class logits, shape \`(..., n_classes)\` | image/text classification |
| \`RegressionReadout\` | \`(n_source, n_outputs=1, trainable=False, seed=0)\` | values, shape \`(..., n_outputs)\` | scalar/vector targets |
| \`TokenReadout\` | \`(n_source, vocab_size, seed=0)\` | vocab logits, shape \`(..., vocab_size)\` | next-token prediction |
| \`ActionReadout\` | \`(n_source, actions, continuous=False, seed=0)\` | arg-max index (discrete) or clipped vector (continuous) | agent control |

All are importable as \`axonweave.readout.X\` and re-exported at top level (\`axonweave.ClassificationReadout\`, …).

## n_source: matching the neuron space

\`n_source\` is the number of neurons feeding the readout. It must match the last dimension of the activity you pass — mismatches raise \`AXW010: expected last dimension N, got M\` immediately.

Typical values:

\`\`\`python
brain = axonweave.load("male-cns:v1.0")

# Full brain
r = axonweave.readout.ClassificationReadout(brain.n_neurons, n_classes=10)

# A neuron selection (preferred — see Biological Brain page)
sel = brain.graph.neurons.by_type("kenyon_cell")
r = axonweave.readout.ClassificationReadout(len(sel), n_classes=10)
\`\`\`

## Reference-path training

\`ClassificationReadout\` and \`RegressionReadout\` support a NumPy-reference SGD step for the frozen-connectome mode (learning mode 1 — only interface parameters train):

\`\`\`python
r = ClassificationReadout(n_source=len(sel), n_classes=2, trainable=True)
logits = r(activity)

# Host-framework users: use torch/tf optimizers on r.weight instead.
r.update(grad_weight, grad_bias, lr=1e-3)
\`\`\`

:::DOC-NOTE
\`update()\` raises \`AXW010\` unless the readout was constructed with \`trainable=True\`. On the torch path, \`BrainModel\` wraps its own \`nn.Linear\` projections and training flows through the optimizer — these reference readouts are for the NumPy/agent path.
:::

Weights are deterministic per \`seed\`, so experiments reproduce exactly.

## Token and action readouts

\`TokenReadout\` and \`ActionReadout\` wrap the decoder implementations with explicit \`n_source\` guards:

\`\`\`python
tok = TokenReadout(n_source=len(sel), vocab_size=50_000, seed=1)
logits = tok(activity)             # (..., 50_000) next-token logits

act = ActionReadout(n_source=len(sel), actions=4)
action = act(activity)             # arg-max action index
\`\`\`

:::DOC-WARN
Next-token prediction is a computational task interface over the substrate. It does not imply the biological fly nervous system performs language modeling — see [Scientific Limitations](limitations.md) and [Tasks](tasks.md).
:::

## End-to-end with a selection

\`\`\`python
import numpy as np

sel = brain.graph.neurons.ids([0, 10, 20])
r = axonweave.readout.ClassificationReadout(len(sel), n_classes=2, seed=1)

sub = sel.weights()                # (3, 3) sparse sub-network
activity = np.ones(3, dtype=np.float32) @ sub
logits = r(activity)               # shape (2,)
\`\`\`

## Related

- [Biological Brain](brain.md) — neuron selections that feed \`n_source\`.
- [Tasks](tasks.md) — \`brain.task(...)\` with torch-side readout wiring.
- [Training](training.md) — learning modes; readouts are the trainable interface in mode 1.
- [Encoders & Decoders](encoders.md) — the input-side interfaces.
`,sa="# Rust Core\n\nAxonWeave low-level compute lives in Rust. One compiled extension (`axonweave._native`, from `rust/`) exposes all performance-critical kernels through PyO3. Python remains the public API; Rust is the compute substrate underneath.\n\n## Overview\n\nEvery computationally meaningful primitive routes through a single dispatch layer (`python/axonweave/native.py`) that either calls the compiled Rust extension or an identical NumPy/SciPy fallback. Public results are identical either way; equivalence is proven in CI.\n\nThe Rust core is **not**:\n- A second runtime or API surface\n- A brain simulation\n- Required for correctness — the pure-Python path is first-class\n\nIt **is**:\n- A performance accelerator for hot inner loops\n- Built only in CI (`rust.yml`), not on developer machines\n- Scientifically transparent — it never changes modeling behavior\n\n:::DOC-WARN\nThe Rust extension accelerates compute only. It never introduces new biological claims, changes numerical semantics, or makes the connectome a complete biophysical brain simulation. Scientific model rules remain governed by the [Scientific Reference](scientific-reference.md).\n:::\n\n## Architecture\n\n```text\nuser model\n    ↓\nframework adapter (tensor/device semantics owned by PyTorch/TensorFlow/NumPy)\n    ↓\nnative.py  — single dispatch layer\n    ├── _HAS_NATIVE:  -> axonweave._native (compiled PyO3 extension, rust/)\n    └── !_HAS_NATIVE: -> native._numpy_* (SciPy/NumPy reference)\n    ↓\nsparse substrate cache (CSR graph, body IDs)\n```\n\n### Module map\n\n`rust/src/lib.rs` registers the `_native` PyO3 module. Each Rust submodule registers its own pyfunctions:\n\n| Rust module | Kernels / classes | NumPy reference |\n|---|---|---|\n| `graph.rs` | `sparse_matmul`, `sparse_matmul_transpose`, `csr_matmul_2d`, `csr_matmul_2d_transpose`, `build_csr`, `csr_submatrix`, `csr_fingerprint` | `_numpy_sparse_matmul`, `_numpy_sparse_matmul_transpose`, `_numpy_csr_matmul_2d`, `_numpy_csr_matmul_2d_transpose`, `_numpy_build_csr`, `_numpy_csr_submatrix`, `_numpy_csr_fingerprint` |\n| `dynamics.rs` | `lif_step`, `adaptive_lif_step`, `rate_step` | `_numpy_lif_step`, `_numpy_adaptive_lif_step`, `_numpy_rate_step` |\n| `surrogate.rs` | `surrogate_forward`, `surrogate_backward`, `surrogate_lif_step`, `surrogate_adaptive_lif_step` | `_numpy_surrogate_forward`, `_numpy_surrogate_backward`, `_numpy_surrogate_lif_step`, `_numpy_surrogate_adaptive_lif_step` |\n| `learning.rs` | `stdp_update` | `_numpy_stdp_update` |\n| `signals.rs` | `vesicle_release_step`, `nt_currents` | `_numpy_vesicle_release_step`, `_numpy_nt_currents` |\n| `receptors.rs` | `receptor_step` | `_numpy_receptor_step` |\n| `delays.rs` | `DelayRing` (pyclass), `delay_ticks_from_ms`, `apply_delays` | `NumpyDelayBuffer`, `_numpy_delay_ticks`, `_numpy_apply_delayed_propagation` |\n| `encoders.rs` | `dense_matmul`, `row_absmax_normalize`, `embed_lookup` | `_numpy_dense_matmul`, `_numpy_row_absmax_normalize`, `_numpy_embed_lookup` |\n| `decoders.rs` | `decode_argmax`, `decode_clip` | `_numpy_decode_argmax`, `_numpy_decode_clip` |\n| `readout.rs` | `readout_logits` | `_numpy_readout_logits` |\n| `provisioning.rs` | `sha256_file`, `md5_base64_file` | Python `hashlib` fallbacks |\n\nCargo dependencies (`rust/Cargo.toml`): `pyo3 0.22`, `numpy 0.22`, `sha2 0.10`, `md-5 0.10`, `base64 0.22`. Rust edition 2021, minimum Rust version 1.80.\n\n### The dispatch contract\n\n`native.py` is the single dispatch layer. Every public dispatcher:\n\n1. Coerces inputs to canonical dtypes — float32 data, int64 indices/indptr, per-domain dtypes for signals (float64) — and flattens to 1-D where the kernel expects flat arrays.\n2. Calls `_NATIVE.<fn>` when `_HAS_NATIVE` is true, otherwise calls `native._numpy_*`.\n3. Reshapes flat kernel output back to public shape (e.g. `(batch, n_rows)` for `csr_matmul_2d`) and returns NumPy arrays or scalars. `native.py` never returns framework tensors.\n\nKernel signatures that consume CSR always receive raw `data`/`indices`/`indptr` arrays plus explicit `n_rows`/`n_cols`, never a SciPy matrix object. Public `native` functions take the matrix and decompose it; the reference implementations use it directly.\n\n## Available Kernels\n\n### Dynamics\n\n**`lif_step`** — Leaky Integrate-and-Fire with absolute refractory period.\n\n```rust\nfn lif_step(\n    v, refrac_until, current: PyArray1<f32>,\n    t, tau, v_rest, v_threshold, v_reset, refractory, dt: f32,\n) -> (spikes, v_new, refrac_new): (PyArray1<f32>, PyArray1<f32>, PyArray1<f32>)\n```\n\nUpdate rule: `dv = (-(v - v_rest) + current) * dt / tau`. Spike when `v >= v_threshold` and refractory expired. Reset to `v_reset` on spike.\n\n**`adaptive_lif_step`** — LIF + threshold adaptation.\n\n```rust\nfn adaptive_lif_step(\n    v, refrac_until, threshold, current: PyArray1<f32>,\n    t, tau, v_rest, v_threshold, v_reset, refractory, tau_adapt, delta_threshold, dt: f32,\n) -> (spikes, v_new, threshold_new, refrac_new): (PyArray1<f32>, PyArray1<f32>, PyArray1<f32>, PyArray1<f32>)\n```\n\nThreshold relaxes toward `v_rest` between spikes and jumps by `delta_threshold` on spike.\n\n**`rate_step`** — Instantaneous firing rate.\n\n```rust\nfn rate_step(current: PyArray1<f32>, gain, baseline: f32) -> PyArray1<f32>\n```\n\nOutput: `baseline + gain * current`.\n\n### Sparse matrix operations\n\n**`sparse_matmul`** — `W @ x` for 1-D `x`, CSR format. Row accumulation of column-activity.\n\n**`sparse_matmul_transpose`** — `x @ W` (transpose propagation). Row-activity propagates to columns.\n\n**`csr_matmul_2d`** — Batched `W @ x^T` for 2-D `x` with shape `(batch, n_cols)`. Returns `(batch, n_rows)`.\n\n**`csr_matmul_2d_transpose`** — Batched `x @ W` for 2-D `x` with shape `(batch, n_rows)`. Returns `(batch, n_cols)`.\n\n**`build_csr`** — COO-to-CSR reduction. Sorts by (row, col), sums duplicate entries.\n\n**`csr_submatrix`** — Extract submatrix by row/column index arrays. Returns new CSR with remapped indices.\n\n**`csr_fingerprint`** — Deterministic SHA-256 over shape, body IDs, indptr, indices, and data. Used for substrate integrity verification.\n\n### Surrogate gradients\n\n**`surrogate_forward`** — Hard threshold: `v >= threshold ? 1 : 0`.\n\n**`surrogate_backward`** — Gradient of surrogate function. Accepts `kind` in `0..3`:\n\n| kind | name | formula |\n|---|---|---|\n| `0` | sigmoid | `k * sigmoid(x*k) * (1 - sigmoid(x*k))`, `x = clip(v - threshold, -20, 20)` |\n| `1` | atan | `k / (1 + (pi*k*x)^2)` |\n| `2` | piecewise | `k` if `|x| <= 1/k`, else `0` |\n| `3` | STE | `1` if `|x| <= width`, else `0` |\n\n**`surrogate_lif_step`** — Combined forward LIF + surrogate backward in one call.\n\n**`surrogate_adaptive_lif_step`** — Same as above for adaptive LIF.\n\n### Learning\n\n**`stdp_update`** — Pairwise trace-based STDP. Updates CSR edge data in-place. Supports optional reward modulation, weight clamping (`w_min`, `w_max`).\n\n### Signals and receptors\n\n**`vesicle_release_step`** — Vesicle pool dynamics with stochastic release. Returns (concentration, pool, per-synapse current, total current).\n\n**`nt_currents`** — `sign * weights * pre_activity`. Simple current computation.\n\n**`receptor_step`** — Conductance-based receptor dynamics. Accepts `kind` in `0..3`:\n\n| kind | name | driving current |\n|---|---|---|\n| `0` | AMPA | `g * V_rev` |\n| `1` | GABA | `g * V_rev` |\n| `2` | NMDA | `g * Mg_block * V_rev` (voltage-dependent Mg block) |\n| `3` | dopamine | `g * gain * sign` (modulatory, no reversal potential) |\n\nConductance decays as `g' = g + (pre - g) * dt / tau` for all kinds.\n\n### Delays\n\n**`DelayRing`** (Rust pyclass) / **`NumpyDelayBuffer`** — Per-neuron circular buffer for axonal conduction delays.\n\n- `reset()` — zero buffers and write positions\n- `step(pre, pre_idx, post_idx, delay_ticks, weights)` — write + read\n- `read(pre_idx, post_idx, delay_ticks, weights)` — read without writing\n- `write_pos` — per-neuron write counters\n\n**`delay_ticks_from_ms`** — Convert ms to integer ticks: `clip(round(d / dt), 0, n_slots - 1)`.\n\n**`apply_delays`** — Stateless single-shot delayed propagation.\n\n### Encoders, decoders, readout\n\n**`dense_matmul`** — Flat-buffer dense matmul `(m,k) @ (k,n) -> (m,n)`.\n\n**`row_absmax_normalize`** — Row-wise max-abs normalization with epsilon floor.\n\n**`embed_lookup`** — Index into flat embedding table by token IDs.\n\n**`decode_argmax`** — `argmax` over first `n_actions` columns per batch.\n\n**`decode_clip`** — `clip` over first `n_actions` columns per batch.\n\n**`readout_logits`** — `activity @ weight + bias` for readout layers.\n\n### Provisioning\n\n**`sha256_file`** — Chunked (8 MiB) SHA-256 hash of a file. Python `hashlib` fallback.\n\n**`md5_base64_file`** — MD5 + base64 encoding of a file. Used for substrate manifest verification.\n\n## NumPy/SciPy Fallback\n\n```python\ntry:\n    from . import _native as _NATIVE\n    _HAS_NATIVE = True\nexcept ImportError:\n    _NATIVE = None\n    _HAS_NATIVE = False\n```\n\nThe extension is optional. Built only in CI, source installs run pure-Python. Both paths are first-class:\n\n- `_numpy_*` functions implement reference semantics unconditionally — the single numeric source of truth.\n- Public behavior is identical with or without the extension.\n- `tests/test_native_runtime.py` proves equivalence (skipped when `_HAS_NATIVE` is false, run against built wheel in CI).\n\n:::DOC-NOTE\nA `_numpy_*` reference must stay in sync with its Rust kernel. Every new primitive adds both the Rust kernel and the NumPy reference in the same PR.\n:::\n\n## Building from Source\n\n### Prerequisites\n\n- **Rust toolchain**: `rustup` (rustc >= 1.80, cargo)\n- **Python**: >= 3.10 with `maturin` (`pip install maturin`)\n- **System**: C compiler (MSVC on Windows, Xcode CLI tools on macOS, gcc/clang on Linux)\n\n### Build\n\n```bash\ncd rust/\nmaturin develop --release        # build + install into current venv\nmaturin build --release          # build wheel only\ncargo test                       # run Rust unit tests\n```\n\nOr from the repo root:\n\n```bash\npip install maturin\nmaturin develop -m rust/Cargo.toml --release\n```\n\n### Verify\n\n```python\nimport axonweave._native as native\nprint(native.__version__)        # e.g. \"0.2.0\"\nprint(native._HAS_NATIVE)        # should be True after build\n```\n\n:::DOC-WARN\nThe extension is built only in CI (`rust.yml`). Developer machines may not have a Rust toolchain. The pure-Python path is authoritative for day-to-day work. CI is authoritative for the compiled path.\n:::\n\n## Platform Support\n\n| Platform | Status | Notes |\n|---|---|---|\n| **Linux** (x86_64) | Supported | Primary CI target. Wheels built with manylinux. |\n| **macOS** (ARM64, x86_64) | Supported | CI builds for both architectures. MPS backend compatible. |\n| **Windows** (x86_64) | Supported | CI builds with MSVC. PyPI wheels available. |\n| **Linux** (aarch64) | Experimental | May require manual maturin build. |\n\nThe pure-Python fallback works on any platform with NumPy/SciPy. The compiled extension adds performance but is not required.\n\n:::DOC-NOTE\nPlatform-specific quirks: Windows may need Visual Studio Build Tools. macOS may need `xcode-select --install`. All platforms share the same `axonweave._native` Python API.\n:::\n\n## Performance\n\nThe Rust kernel eliminates Python interpreter overhead in tight loops — the same numeric result, fewer cycles. Benefit scales with array size and simulation duration.\n\n### Where Rust helps most\n\n| Kernel | Bottleneck | Rust benefit |\n|---|---|---|\n| `sparse_matmul` / `csr_matmul_2d` | Inner dot-product loop over CSR edges | ~5-15x on 100k+ neurons |\n| `lif_step` / `adaptive_lif_step` | Per-neuron membrane update | ~3-8x depending on batch |\n| `build_csr` | Sort + dedup of COO edges | ~2-5x on large graphs |\n| `csr_fingerprint` | SHA-256 over CSR arrays | ~2-3x vs hashlib |\n| `surrogate_lif_step` | Combined LIF + gradient computation | ~4-10x on long sequences |\n\n### When it doesn't matter\n\n- Small arrays (< 1k elements): Python overhead dominates, Rust benefit negligible.\n- I/O-bound work (substrate loading, disk-backed builds): NumPy/SciPy already efficient.\n- Single-step calls: GIL release in PyO3 helps only with sustained loops.\n\n### Benchmarking\n\nRun the benchmark suite:\n\n```bash\npython benchmarks/bench_graph_build.py          # wall time, RSS, fingerprints\npython benchmarks/bench_graph_build.py --jsonl   # append to results.jsonl\n```\n\nThe benchmark hard-fails if in-memory and disk-backed paths produce different fingerprints — a correctness tripwire, not just a performance report.\n\n### Equivalence guarantee\n\n`tests/test_native_runtime.py` calls `_NATIVE.<fn>` directly against `native._numpy_*` for every kernel. CI runs this both with and without the compiled extension. Numerical results must match to within float32 tolerance; any divergence is a test failure.\n\n## API Reference\n\nAll functions below are in `axonweave.native`. They accept NumPy arrays and return NumPy arrays. Framework adapters (PyTorch, Keras) sit above this layer and handle tensor/device conversion.\n\n### `native.lif_step`\n\n```python\nfrom axonweave.native import lif_step\n\nspikes, v_new, refrac_new = lif_step(\n    v, refrac_until, current,      # np.ndarray (float32, 1-D)\n    t, tau, v_rest, v_threshold,   # float\n    v_reset, refractory, dt,       # float\n)\n```\n\nSingle-compartment LIF update. Returns spike mask, updated membrane, updated refractory clock.\n\n### `native.adaptive_lif_step`\n\n```python\nfrom axonweave.native import adaptive_lif_step\n\nspikes, v_new, threshold_new, refrac_new = adaptive_lif_step(\n    v, refrac_until, threshold, current,   # np.ndarray (float32, 1-D)\n    t, tau, v_rest, v_threshold,           # float\n    v_reset, refractory, tau_adapt,        # float\n    delta_threshold, dt,                   # float\n)\n```\n\nAdaptive threshold LIF. Threshold relaxes toward `v_rest` with time constant `tau_adapt` and jumps by `delta_threshold` on spike.\n\n### `native.rate_step`\n\n```python\nfrom axonweave.native import rate_step\n\nrate = rate_step(current, gain, baseline)\n# current: np.ndarray (float32, 1-D)\n# gain, baseline: float\n# returns: np.ndarray (float32, 1-D)\n```\n\nInstantaneous firing rate: `baseline + gain * current`.\n\n### `native.sparse_matmul`\n\n```python\nfrom axonweave.native import sparse_matmul\n\nresult = sparse_matmul(csr, x)\n# csr: scipy.sparse.csr_matrix\n# x: np.ndarray (float32, 1-D, length n_cols)\n# returns: np.ndarray (float32, 1-D, length n_rows)\n```\n\nCSR matrix-vector multiply: `result[i] = sum_j(W[i,j] * x[j])`.\n\n### `native.sparse_matmul_transpose`\n\n```python\nfrom axonweave.native import sparse_matmul_transpose\n\nresult = sparse_matmul_transpose(csr, x)\n# csr: scipy.sparse.csr_matrix\n# x: np.ndarray (float32, 1-D, length n_rows)\n# returns: np.ndarray (float32, 1-D, length n_cols)\n```\n\nTranspose multiply: `result[j] = sum_i(x[i] * W[i,j])`.\n\n### `native.csr_matmul_2d`\n\n```python\nfrom axonweave.native import csr_matmul_2d\n\nresult = csr_matmul_2d(csr, x)\n# csr: scipy.sparse.csr_matrix\n# x: np.ndarray (float32, 2-D, shape (batch, n_cols))\n# returns: np.ndarray (float32, 2-D, shape (batch, n_rows))\n```\n\nBatched CSR multiply for multi-sample inference.\n\n### `native.build_csr_from_coo`\n\n```python\nfrom axonweave.native import build_csr_from_coo\n\ncsr = build_csr_from_coo(rows, cols, weights, shape)\n# rows, cols: np.ndarray (int64)\n# weights: np.ndarray (float32)\n# shape: (n_rows, n_cols)\n# returns: scipy.sparse.csr_matrix\n```\n\nCOO-to-CSR reduction. Sums duplicate (row, col) entries.\n\n### `native.csr_submatrix`\n\n```python\nfrom axonweave.native import csr_submatrix\n\nsub = csr_submatrix(csr, row_sel, col_sel)\n# csr: scipy.sparse.csr_matrix\n# row_sel, col_sel: np.ndarray (int64)\n# returns: scipy.sparse.csr_matrix (shape = (len(row_sel), len(col_sel)))\n```\n\nExtract submatrix by index selection. Used for NeuronSelection sub-networks.\n\n### `native.csr_fingerprint`\n\n```python\nfrom axonweave.native import csr_fingerprint\n\nhex_digest = csr_fingerprint(csr, body_ids)\n# csr: scipy.sparse.csr_matrix\n# body_ids: np.ndarray (int64, length n_neurons)\n# returns: str (64-char hex SHA-256)\n```\n\nDeterministic fingerprint for substrate integrity checks.\n\n### `native.graph_bfs`\n\nThere is no `graph_bfs` kernel in the Rust core. Graph traversal is handled at the Python level using CSR row slicing (`csr_submatrix`) and scipy sparse operations. BFS-style exploration uses the `ConnectomeGraph` API instead:\n\n```python\nneighbors = brain.graph.neighbors(body_id)  # outgoing neighbor body IDs\n```\n\n:::DOC-NOTE\n`graph_bfs` was proposed but not implemented as a Rust kernel — BFS semantics vary by use case and are better expressed in Python with existing CSR primitives.\n:::\n\n### `native.mulberry32_rng`\n\nThere is no `mulberry32_rng` kernel in the current Rust core. Random number generation is handled by NumPy's RNG or framework-specific generators. The Rust core focuses on deterministic compute kernels where reproducibility is managed at the Python level.\n\n:::DOC-NOTE\nIf a deterministic Rust RNG is needed in the future, it would follow the standard contract: Rust kernel + `_numpy_*` reference + dispatcher + equivalence test.\n:::\n\n### `native.surrogate_forward`\n\n```python\nfrom axonweave.native import surrogate_forward\n\nspikes = surrogate_forward(v, threshold)\n# v, threshold: np.ndarray (float32, 1-D) or float\n# returns: np.ndarray (float32, 1-D) — 1.0 where v >= threshold, 0.0 otherwise\n```\n\n### `native.surrogate_backward`\n\n```python\nfrom axonweave.native import surrogate_backward\n\ngrad = surrogate_backward(v, threshold, kind, k, width)\n# v: np.ndarray (float32, 1-D)\n# threshold, k, width: float\n# kind: int (0=sigmoid, 1=atan, 2=piecewise, 3=STE)\n# returns: np.ndarray (float32, 1-D)\n```\n\nSurrogate gradient for backpropagation through spikes.\n\n### `native.surrogate_lif_step`\n\n```python\nfrom axonweave.native import surrogate_lif_step\n\nspikes, v_new, refrac_new, gradient = surrogate_lif_step(\n    v, refrac_until, current,\n    t, tau, v_rest, v_threshold, v_reset, refractory, dt,\n    kind, k, width,\n)\n```\n\nCombined LIF forward + surrogate backward in one call. Returns spike mask, updated state, and gradient for BPTT.\n\n### `native.stdp_update`\n\n```python\nfrom axonweave.native import stdp_update\n\ndata_new, pre_trace_new, post_trace_new = stdp_update(\n    csr, pre_trace, post_trace, pre_activity, post_activity,\n    a_plus, a_minus, tau_pre, tau_post, dt,\n    reward=None, w_min=None, w_max=None,\n)\n```\n\nPairwise trace-based STDP. Updates CSR edge weights. `reward` scales weight changes for three-factor learning.\n\n### `native.receptor_step`\n\n```python\nfrom axonweave.native import receptor_step\n\ncurrent, g_new = receptor_step(\n    g, pre_activity, kind, decay_time_constant,\n    reverse_potential, gain, sign,\n    mg_concentration, mg_slope, mg_offset,\n    voltage=None, dt=1.0,\n)\n```\n\nConductance-based receptor update. `kind`: 0=AMPA, 1=GABA, 2=NMDA, 3=dopamine.\n\n### `native.delay_ticks_from_ms`\n\n```python\nfrom axonweave.native import delay_ticks_from_ms\n\nticks = delay_ticks_from_ms(delays_ms, dt, max_delay_ms)\n# delays_ms: np.ndarray (float32)\n# returns: np.ndarray (int64)\n```\n\nConverts millisecond delays to integer tick indices.\n\n### `native.dense_matmul`\n\n```python\nfrom axonweave.native import dense_matmul\n\nresult = dense_matmul(a, b)\n# a: np.ndarray (float32, shape (m, k))\n# b: np.ndarray (float32, shape (k, n))\n# returns: np.ndarray (float32, shape (m, n))\n```\n\nDense matrix multiplication for encoder/readout layers.\n\n### `native.readout_logits`\n\n```python\nfrom axonweave.native import readout_logits\n\nlogits = readout_logits(activity, weight, bias)\n# activity: np.ndarray (float32, shape (batch, n_source))\n# weight: np.ndarray (float32, shape (n_source, n_out))\n# bias: np.ndarray (float32, shape (n_out,))\n# returns: np.ndarray (float32, shape (batch, n_out))\n```\n\nReadout projection: `activity @ weight + bias`.\n\n## Adding a New Primitive\n\n1. Write the Rust kernel in `rust/src/*.rs`. Register the pyfunction in the module's `register` function.\n2. Add `_numpy_*` reference in `python/axonweave/native.py` — the single numeric source of truth.\n3. Add public dispatcher in `native.py` following the dtype/1-D/reshape contract.\n4. Add equivalence test in `tests/test_native_runtime.py` calling `_NATIVE.<fn>` against `native._numpy_*`.\n5. CI is authoritative for compiled-path verification; do not claim local verification of the extension.\n\n## CI Verification\n\n`.github/workflows/rust.yml`:\n- **Rust job**: `cargo test` + maturin build across OSes.\n- **native-equivalence job**: builds wheel, installs it, runs `tests/test_native_runtime.py` against compiled extension, then runs full suite against the wheel.\n\nLocally, the extension is never compiled — CI is authoritative for the compiled path.\n\n## Limitations\n\n- Extension is optional by design, built only in CI.\n- Rust kernels return flat arrays/scalars; shape and dtype correctness sits in Python wrappers.\n- The Rust core is a compute substrate, not a brain simulation.\n\n## Related\n\n- [Architecture](architecture.md) — system layout and the Rust boundary.\n- [Backends](backends.md) — how `native.py` sits under the NumPy and framework adapters.\n- [Release Engineering](release-engineering.md) — CI wheel building with the extension included.\n",ca=`# Temporal Runtime

The connectome is a recurrent, stateful computational substrate. The runtime package turns the existing primitives — sparse topology, dynamics, delays, plasticity — into one temporal execution model with explicit state and deterministic replay.

## The core loop

\`\`\`python
from axonweave.runtime import ConnectomeRuntime
from axonweave.dynamics import LIF

runtime = ConnectomeRuntime(brain.graph, dynamics=LIF())
runtime.reset_state()
for x_t in stream:          # x_t: [features] or [batch, features]
    y_t = runtime.step(x_t) # state persists between calls
\`\`\`

\`step()\` advances exactly one timestep and never resets state automatically. Episodes and sessions are bounded explicitly with \`reset_state()\`.

## Sequence semantics

\`\`\`python
seq_out = runtime.forward_sequence(x)   # x: [..., T, F] -> [..., T, N]
\`\`\`

\`forward_sequence\` is exactly equivalent to calling \`step\` on each timestep from the same initial state under deterministic execution. This equivalence is enforced by tests across the \`Rate\`, \`LIF\` and \`AdaptiveLIF\` models — it is a contract, not an approximation.

## Explicit state

State is a first-class object, not hidden module globals:

\`\`\`python
state = runtime.get_state()   # deep copy: safe to keep, branch, serialize
y = runtime.step(x)
runtime.set_state(state)      # rewind
y2 = runtime.step(x)          # identical to the first y — replay works
\`\`\`

A \`RuntimeState\` snapshot contains:

| Component | Contents |
|---|---|
| \`NeuronState\` | membrane/adaptive/refractory variables, the timestep clock |
| \`SynapticState\` | delayed signals, receptor state (reserved; delay engine composes here) |
| \`PlasticityState\` | eligibility, STDP and reward traces |
| \`RuntimeState.timestep\` | scalar clock for the whole runtime |

Snapshots are deep-copied on both \`get_state()\` and \`set_state()\`, so captured states are never mutated by later steps, and \`to_dict()\` provides a plain-Python serializable view.

## Truncated BPTT

\`detach_state()\` marks a gradient boundary. On the NumPy reference path it is an explicit no-op (there is no autograd graph); framework adapters override it to break carried gradients across sequence chunks:

\`\`\`python
for chunk in chunks:
    y = model.forward_sequence(chunk)
    loss = criterion(y, targets)
    loss.backward()
    model.detach_state()
\`\`\`

## Gradients through spiking dynamics (BPTT)

When the model's dynamics is a surrogate-spiking model (\`SurrogateLIF\` / \`SurrogateAdaptiveLIF\`), the torch \`BrainModel\` routes the sequence through a differentiable, torch-native spiking cell instead of the reference bridge. The membrane state is rebuilt as a function of the previous state each step, so autograd builds a true recurrent graph (BPTT), and gradients reach the connectome's edge weights:

\`\`\`python
from axonweave.dynamics import SurrogateLIF, SigmoidSurrogate

model = BrainModel(
    brain=brain,
    encoder=TimeSeriesEncoder(input_dim=8, output_dim=256),
    dynamics=SurrogateLIF(surrogate=SigmoidSurrogate(k=5.0)),
    readout=RegressionReadout(n_source=256, n_outputs=1),
)

out = model.forward_sequence(seq)     # [..., T, F] -> [..., T, out]
loss = criterion(out, targets)
loss.backward()                       # reaches edge weights, gain, readout
opt.step()
model.detach_state()                  # truncated BPTT boundary
\`\`\`

The spike is a hard threshold forward and a surrogate derivative backward; the four surrogate families (sigmoid, atan, piecewise, straight-through) mirror the native \`surrogate_backward\` formulas exactly and are equivalence-tested against them. The surrogate choice is explicit — the library never silently substitutes surrogate gradients.

Sparse propagation on this path uses a persistent torch sparse matrix built once at model construction (no per-step COO rebuilds).

## High-level model

The torch \`BrainModel\` composes the runtime with interfaces. Construction is declarative — you pass components, the model wires them:

\`\`\`python
import torch
from axonweave.torch import BrainModel
from axonweave.encoders import VectorEncoder
from axonweave.dynamics import LIF
from axonweave.readout import RegressionReadout

model = BrainModel(
    brain=brain,
    encoder=VectorEncoder(input_dim=8, output_dim=256, seed=0),
    dynamics=LIF(),
    readout=RegressionReadout(n_source=256, n_outputs=1),
)

model.reset_state()
for x_t in stream:
    prediction = model.step(x_t)          # encoder -> runtime -> readout
\`\`\`

The model exposes its components (\`model.encoder\`, \`model.brain\`, \`model.dynamics\`, \`model.readout\`, \`model.runtime\`), supports \`model.forward_sequence(sequence)\`, and the same state API (\`get_state\`/\`set_state\`/\`detach_state\`). The legacy \`connect(Input(...))\`/\`connect(Readout(...))\` wiring keeps working; constructor injection takes precedence when both are used.

## Time-series encoding

\`TimeSeriesEncoder\` maps \`[B, T, features]\` streams per timestep. With \`window=1\` the mapping is memoryless — recurrence lives in the connectome, where it belongs. With \`window=k\` the current at step \`t\` carries the last \`k\` observations (delay-line style, zero-padded at the sequence start):

\`\`\`python
from axonweave.encoders import TimeSeriesEncoder

encoder = TimeSeriesEncoder(input_dim=10, output_dim=256, window=1)
model = BrainModel(brain=brain, encoder=encoder, dynamics=LIF(), readout=...)
forecast = model.forward_sequence(history)
\`\`\`

Every encoder declares \`input_shape\`, \`output_size\` and \`dtype\` so wiring errors surface before execution (\`AXW010\` otherwise).

## Memory estimation

MaleCNS-scale state is large; know the footprint before you run:

\`\`\`python
brain.memory_estimate(dtype="float32", state="full")
# {'n_neurons': ..., 'n_edges': ..., 'neuron_state': ..., 'edge_parameters': ...,
#  'total': ..., ...}

runtime.memory_estimate()   # same accounting from the runtime side
\`\`\`

The estimate covers neuron state, edge parameters and (once composed) delay, receptor and plasticity state. It deliberately does not encourage dense \`features × 166700\` projection matrices — use [Selection & Sub-Networks](examples-selection.md) and small encoder outputs to keep task interfaces modest.

## Backend status

The NumPy reference runtime is the semantic source of truth and is fully tested locally. The torch bridge (\`TorchStatefulRuntime\`) implements the same semantics on tensors and is CI-verified-pending, as is the differentiable spiking path (\`TorchSurrogateLIF\`, BPTT). See [STATUS](https://github.com/dhakalnirajan/axonweave/blob/main/docs/development/STATUS.md) for the three-state audit.

## End-to-end example

[examples/time_series_forecasting.py](https://github.com/dhakalnirajan/axonweave/blob/main/examples/time_series_forecasting.py) trains the full pipeline (TimeSeriesEncoder -> recurrent connectome -> RegressionReadout) against MLP/RNN/LSTM/GRU baselines on a synthetic multivariate task, with every component labeled as biological, assumed, learned or task-specific.
`,la=`# Playground

:::DOC-TIP
This page contains a **demo simulation** of spiking neural network dynamics. It uses a small random graph with LIF (Leaky Integrate-and-Fire) neurons — not the real MaleCNS connectome. The purpose is to let you explore how spiking networks process signals, adjust parameters, and build intuition before using the real AxonWeave runtime.
:::

The playground runs entirely in your browser. No data is sent anywhere. All neuron weights, connections and parameters are generated randomly on page load.

Use the controls above to adjust the network size, connection density, LIF time constant, input signal type, frequency and amplitude. Hit **Run** to start the simulation and watch neurons spike in real time.

The code panel below the visualization shows the equivalent AxonWeave Python code that would produce the same kind of simulation on the real substrate — but note that the browser version is a simplified approximation, not the actual library execution.
`,ua='# Glossary\n\nDefinitions of terms used across the AxonWeave documentation, with emphasis on substrate distribution.\n\n## Substrate and distribution\n\n**Substrate** — A versioned biological connectome artifact (e.g. `male-cns:v1.0`) comprising the sparse CSR graph, provenance, and optional biological metadata. Loaded via `axonweave.load("male-cns:v1.0")`.\n\n**Substrate cache** — The on-disk directory where installed substrates live, under the platform user cache directory by default and redirectable with `AXONWEAVE_HOME`.\n\n**`.awb` artifact** — The versioned AxonWeave substrate file format: a ZIP archive containing `manifest.json`, `graph.npz`, biological metadata attachments, and optional retained upstream source files. Used for offline distribution. See [Substrates](distribution.md).\n\n**Manifest** — The `manifest.json` inside an `.awb` artifact. Records substrate identity, source provenance, graph fingerprint, counts, schema version, and per-attachment sha256 hashes.\n\n**Graph fingerprint** — A canonical, deterministic digest of the connectivity graph alone. Two independently packed artifacts of the same installed substrate always produce the same fingerprint.\n\n**Attachment** — Any file recorded in the manifest alongside the graph (e.g. `annotations.feather`, `neurotransmitters.feather`, `receptors.json`, `stats.feather`). Each attachment is integrity-checked by sha256 during `verify`.\n\n**Schema version** — The `.awb` manifest format version (`schema_version`), independent of the substrate version and the AxonWeave package version.\n\n**Migration** — A registered, explicit transformation that upgrades a manifest from one schema version to the next. Applied migrations are recorded in `migrations_applied` and announced with an `AXW007` warning; unsupported or unknown schemas are refused with `AXW003`.\n\n## Error codes (distribution)\n\n**`AXW001`** — Substrate not installed or cache entry incomplete (e.g. when packing).\n\n**`AXW002`** — Integrity failure: fingerprint mismatch, size inconsistency, tampered attachment, or unsafe archive member.\n\n**`AXW003`** — Format/schema error: not an `.awb` artifact, newer or unknown schema version, or no migration path.\n\n**`AXW007`** — Configuration warning: a schema migration was applied to the manifest (never silent).\n',da=`# CLI Examples: Substrate Workflow

End-to-end command-line examples for distributing a substrate with the \`.awb\` artifact format. See [Substrates](distribution.md) for the format itself and [Errors & Diagnostics](errors.md) for the failure codes.

## Pack an installed substrate

Requires the substrate to already be installed in the local cache.

\`\`\`bash
axonweave substrate pack male-cns:v1.0 --output male-cns-v1.0.awb
\`\`\`

Exit code 0 with \`AXW001\` if the cache entry is missing or incomplete.

## Inspect without loading

Print manifest metadata — identity, schema version, fingerprint, counts, provenance — without touching the graph:

\`\`\`bash
axonweave substrate inspect ./male-cns-v1.0.awb
\`\`\`

## Verify integrity

Checks the schema version, graph fingerprint, size consistency, and sha256 of every attachment:

\`\`\`bash
axonweave substrate verify ./male-cns-v1.0.awb
\`\`\`

Any mismatch fails with \`AXW002\`; an unsupported schema fails with \`AXW003\`.

## Install from a file (offline machine)

The artifact is fully verified before activation — extracted to a staging directory, validated, then atomically moved into the cache:

\`\`\`bash
axonweave substrate install-file ./male-cns-v1.0.awb
axonweave substrate verify male-cns:v1.0   # verify the installed cache entry
\`\`\`

A corrupted or tampered artifact never replaces an existing installation.

## Verify an installed substrate

\`verify\` accepts both installed substrate names and \`.awb\` file paths:

\`\`\`bash
axonweave substrate verify male-cns:v1.0
\`\`\`

## Reload and use biological metadata

After installation, biological metadata is restored alongside the graph and wired into the loaded \`BiologicalBrain\`:

\`\`\`python
import axonweave

brain = axonweave.load("male-cns:v1.0")
brain.annotations          # selection tables, restored from the .awb
brain.neurotransmitters    # upstream neurotransmitter predictions
brain.receptors            # receptor composition metadata
\`\`\`

## Typical offline hand-off

On a machine with network access:

\`\`\`bash
axonweave substrate install male-cns:v1.0
axonweave substrate pack male-cns:v1.0 --output male-cns-v1.0.awb
axonweave substrate verify ./male-cns-v1.0.awb
\`\`\`

Copy the artifact to the target machine (USB, artifact registry, air-gapped transfer), then:

\`\`\`bash
axonweave substrate verify ./male-cns-v1.0.awb
axonweave substrate install-file ./male-cns-v1.0.awb
python -c "import axonweave; axonweave.load('male-cns:v1.0')"
\`\`\`

:::DOC-TIP
Re-pack after a schema migration warning (\`AXW007\`) to update the artifact in place — migrated manifests are announced, never silently reinterpreted.
:::
`,fa='# Migration Guide\n\nHow to move between AxonWeave versions without losing scientific provenance. This page covers substrate artifact (`.awb`) schema migrations and library API changes.\n\n## How versioning works\n\nAxonWeave keeps three independent version numbers:\n\n| Version | Where it lives | What it changes |\n|---|---|---|\n| **Package version** | `axonweave.__version__` (e.g. `0.2.0`) | Library API and behavior |\n| **Substrate version** | Substrate ID (e.g. `male-cns:v1.0`) | Upstream biological data release |\n| **`.awb` schema version** | `schema_version` inside the manifest | Artifact file format only |\n\nA substrate version change is a scientific fact and never comes from AxonWeave. Schema changes are format changes and never reinterpret the underlying graph. The graph fingerprint is unaffected by schema version.\n\n## Substrate artifact (`.awb`) schema migrations\n\n### Reading old artifacts\n\nWhen AxonWeave reads an `.awb` artifact whose `schema_version` is older than the current one, it applies the registered migration chain automatically:\n\n- The applied steps are recorded in the loaded manifest under `migrations_applied` (e.g. `["0.9->1.0"]`).\n- Each migration announces itself with an `AXW007` `ConfigurationWarning` — the change is explicit, never silent.\n- The graph fingerprint is computed after migration and must still match the manifest; integrity is never weakened by a migration.\n\nRecommended follow-up after seeing `AXW007`: re-pack the artifact in place.\n\n```bash\naxonweave substrate verify ./male-cns-v1.0.awb   # read triggers the migration + warning\naxonweave substrate pack male-cns:v1.0 --output male-cns-v1.0.awb\n```\n\n### What is refused (never migrated)\n\n| Situation | Error |\n|---|---|\n| Artifact `schema_version` newer than the installed AxonWeave supports | `AXW003` |\n| Unknown schema version | `AXW003` |\n| No migration path registered between two versions | `AXW003` |\n| File is not an `.awb` artifact | `AXW003` |\n\nUpgrade AxonWeave before installing an artifact created by a newer library version.\n\n### Registering a migration (maintainers)\n\nMigrations are plain manifest-to-manifest functions keyed by `(from, to)`:\n\n```python\nfrom axonweave.data.awb import register_migration\n\n@register_migration("1.0", "1.1")\ndef _migrate(manifest: dict) -> dict:\n    manifest["new_field"] = manifest.pop("old_field", None)\n    return manifest\n```\n\nRules for new migrations:\n\n1. A migration transforms only the manifest (field renames, layout moves) — never graph payload or biological attachments.\n2. Chain steps must be registered so any older version can walk to `SUPPORTED_SCHEMA_VERSION`.\n3. Add a test that a legacy manifest migrates, the warning fires, and `migrations_applied` is recorded.\n4. Document the change on this page.\n\n## API changes\n\n### 0.1.x → 0.2.0 (Temporal Runtime Alpha)\n\n- **CLI**: `axonweave substrate unpack` was removed. `pack` now writes versioned `.awb` artifacts. Use `install-file` to install from an artifact, `inspect` for metadata, and `verify` (which now also accepts `.awb` paths) for integrity checks.\n- **Data module**: `pack_substrate`/`unpack_substrate` zip helpers remain only as deprecated backward-compat exports; prefer `axonweave.data.awb`.\n- **Substrate pack contents**: `.awb` artifacts now include biological metadata attachments (`annotations.feather`, `neurotransmitters.feather`, `receptors.json`, `stats.feather`) when present, each sha256-recorded in the manifest.\n\n### Principles for future API changes\n\n1. No breaking API change ships without a migration note on this page.\n2. Scientific assumptions require explicit configuration — a change that flips an implicit default (e.g. making a predicted neurotransmitter automatically excitatory) is treated as breaking.\n3. Provenance fields in manifests and metadata are additive-only where possible; removals get a schema bump and a migration entry.\n\n## Reproducibility across migrations\n\nTwo independently built artifacts of the same installed substrate always produce identical graph fingerprints, regardless of manifest schema version. When reproducing a published experiment:\n\n1. Record the substrate ID and version, not just the artifact filename.\n2. Record the graph fingerprint — it survives both artifact re-packing and schema migrations.\n3. Record `axonweave.__version__` and the applied `migrations_applied` list from the loaded manifest.\n',pa=`# Benchmarks

Performance characteristics of AxonWeave's graph-construction and runtime paths, how to reproduce them, and how to read the results honestly. Numbers here are indicative, not guarantees — always re-benchmark on your own hardware.

## Reproducing

The graph-construction benchmark suite lives at \`benchmarks/bench_graph_build.py\`. It benchmarks the three graph-build paths available today and reports wall time, peak RSS, and content fingerprint equality:

1. **\`in-memory\`** — \`axonweave.data.builder.build_graph\` (batches held in RAM).
2. **\`disk-backed\`** — \`axonweave.data.streaming_builder.DiskBackedGraphBuilder\` (Python streaming; O(batch) RAM).
3. **\`native kernels\`** — same disk-backed build, reporting whether the compiled \`axonweave._native\` CSR reduction is active (the Rust streaming builder is the Phase 2 roadmap item).

\`\`\`bash
python benchmarks/bench_graph_build.py                        # default sizes
python benchmarks/bench_graph_build.py --n-neurons 5000 --density 0.001
python benchmarks/bench_graph_build.py --jsonl --label nightly
\`\`\`

Passing \`--jsonl\` appends a machine-readable line (timestamp, label, sizes, timings, peak RSS, fingerprint equality) to \`benchmarks/results.jsonl\` so reports can accumulate history. Each result records the environment (Python/NumPy/Arrow versions, platform, whether the native extension was active) — a benchmark without its environment is not reproducible.

## What is measured, honestly

| Metric | Meaning | Caveat |
|---|---|---|
| Wall time | End-to-end build time including I/O | Dominated by disk speed for streaming runs |
| Peak RSS | Peak resident memory via \`tracemalloc\` | Excludes allocator overhead outside Python |
| Fingerprint equality | Whether all paths produced the same graph | A correctness gate — a fast wrong answer is a failure |

The fingerprint gate is deliberate: every build path must produce an identical graph fingerprint before timing is even reported. Performance numbers from runs that fail the fingerprint check are discarded.

## Known scale points

- **MaleCNS v1.0 retained graph**: ~166,700 neurons, ~25.6 million directed edges. The in-memory builder requires proportional RAM; the disk-backed builder bounds memory at O(batch).
- **Native CSR kernels**: when the compiled extension is present, CSR matmul and fingerprint kernels are used transparently. Public results are identical with or without the extension (the central native-core invariant), so benchmarks separate the two configurations via the \`native active\` flag rather than assuming it.

## Runtime step benchmarks (planned)

Per-\`step\` and \`forward_sequence\` throughput benchmarks over the [Temporal Runtime](runtime.md) are part of Phase 18 (Sparse Runtime Performance) and are not yet implemented. No numbers are published here until a benchmark harness exists for them.

## Rules for contributing benchmark results

1. Run on idle hardware; note CPU model, core count, and RAM.
2. Report the AxonWeave version, substrate version, and whether \`_HAS_NATIVE\` was true.
3. Never average away the fingerprint-equality gate.
4. Append via \`--jsonl\` rather than editing historical lines.

:::DOC-NOTE
Benchmark results are engineering facts, not scientific claims. Nothing on this page speaks to biological fidelity — see [Scientific Limitations](limitations.md).
:::
`;function ma(e){return()=>{let t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var ha=[`visual`,`motor`,`association`,`sensory`],ga={visual:`#4d8fd6`,motor:`#ee4c2c`,association:`#8dc4d8`,sensory:`#3ca878`},_a={visual:`Visual`,motor:`Motor`,association:`Association`,sensory:`Sensory`};function va(e,t,n){let r=ma(n),i=[],a=Math.max(1,Math.round(e*.25)),o=Math.max(1,Math.round(e*.25)),s=e-a-o,c=0;for(let e=0;e<a;e++){let t=.12+.76*e/Math.max(1,a-1),n=ha[Math.floor(r()*ha.length)];i.push({id:c++,x:.15+(r()-.5)*.04,y:t+(r()-.5)*.03,v:-.07,vRest:-.07,vThresh:-.05+(r()-.5)*.004,tauM:.01+r()*.01,refrac:0,region:n,lastSpikeTick:-9999})}for(let e=0;e<s;e++){let t=.08+.84*e/Math.max(1,s-1),n=ha[Math.floor(r()*ha.length)];i.push({id:c++,x:.5+(r()-.5)*.14,y:t+(r()-.5)*.04,v:-.07,vRest:-.07,vThresh:-.05+(r()-.5)*.004,tauM:.01+r()*.01,refrac:0,region:n,lastSpikeTick:-9999})}for(let e=0;e<o;e++){let t=.12+.76*e/Math.max(1,o-1),n=ha[Math.floor(r()*ha.length)];i.push({id:c++,x:.85+(r()-.5)*.04,y:t+(r()-.5)*.03,v:-.07,vRest:-.07,vThresh:-.05+(r()-.5)*.004,tauM:.01+r()*.01,refrac:0,region:n,lastSpikeTick:-9999})}let l=[];for(let n=0;n<e;n++)for(let i=0;i<e;i++){if(n===i)continue;let e=n<a,o=n>=a&&n<a+s,c=n>=a+s,u=i>=a&&i<a+s,d=i>=a+s,f=t*.3;if(e&&u||o&&d?f=t*1.2:o&&u?f=t*.5:c&&u&&(f=t*.3),r()<f){let e=r()>.2;l.push({pre:n,post:i,weight:(r()*.008+.001)*(e?1:-.5),lastActiveTick:-9999})}}return{neurons:i,synapses:l}}function ya(e,t,n,r,i){let a=[];for(let t of e){if(t.refrac>0){t.refrac-=r;continue}let e=n[t.id]||0,o=(-(t.v-t.vRest)/t.tauM+e*1e3)*r;t.v+=o,t.v=Math.min(t.v,.03),t.v>=t.vThresh&&(a.push({neuron:t.id,time:i}),t.v=t.vRest,t.refrac=.003,t.lastSpikeTick=i)}for(let n of a){let r=t.filter(e=>e.pre===n.neuron);for(let t of r)e[t.post].v+=t.weight,t.lastActiveTick=i}return a}function ba(e,t,n,r,i){let a=Array(t).fill(0),o=1/r,s=e%o/o,c=Math.min(4,t);switch(n){case`sine`:for(let t=0;t<c;t++)a[t]=i*Math.sin(2*Math.PI*r*e+t*.7)*.012;break;case`pulse`:if(s<.15)for(let e=0;e<c;e++)a[e]=i*.015;break;case`burst`:if(s<.05||s>.2&&s<.25)for(let e=0;e<Math.min(3,t);e++)a[e]=i*.018;break;case`ramp`:for(let e=0;e<c;e++)a[e]=i*s*.015}return a}function xa({state:e,running:t,onStatsUpdate:n}){let{nNeurons:r,density:i,seed:a,mode:o,freq:s,amplitude:c,speed:l,tauM:u}=e,d=(0,x.useRef)(va(r,i,a)),f=(0,x.useRef)([]),p=(0,x.useRef)(0),m=(0,x.useRef)([]),h=(0,x.useRef)(0),g=(0,x.useRef)(0),_=(0,x.useRef)([]),v=(0,x.useRef)(0),y=(0,x.useCallback)(()=>{let e=va(r,i,a);d.current=e,f.current=[],p.current=0,m.current=e.neurons.map(e=>[e.v]),_.current=[],v.current=0,n({tick:0,spikeCount:0,firingRate:0,activeNeurons:0})},[r,i,a,n]);return(0,x.useEffect)(y,[y]),(0,x.useEffect)(()=>{if(!t){cancelAnimationFrame(h.current);return}let e=t=>{if(t-g.current>16){let e=Math.max(1,Math.round(l*4)),r=[];for(let t=0;t<e;t++){let e=p.current,t=d.current,n=ba(e/1e3,t.neurons.length,o,s,c),i=ya(t.neurons,t.synapses,n,.001,e);r.push(...i),f.current.push(...i),p.current+=1;for(let e=0;e<Math.min(5,t.neurons.length);e++)m.current[e]=m.current[e]||[],m.current[e].push(t.neurons[e].v),m.current[e].length>400&&m.current[e].shift()}v.current+=r.length,_.current.push(r.length),_.current.length>200&&_.current.shift();let i=_.current.reduce((e,t)=>e+t,0),a=new Set,u=p.current;for(let e of f.current)u-e.time<200&&a.add(e.neuron);n({tick:p.current,spikeCount:v.current,firingRate:Math.round(i*5),activeNeurons:a.size}),f.current.length>2e3&&f.current.splice(0,f.current.length-2e3),g.current=t}h.current=requestAnimationFrame(e)};return g.current=0,h.current=requestAnimationFrame(e),()=>cancelAnimationFrame(h.current)},[t,o,s,c,l,n]),{net:d.current,spikes:f.current,tick:p.current,traces:m.current,rebuild:y}}function Sa(e){let t=e.parentElement;if(!t)return{w:300,h:200};let n=t.getBoundingClientRect();return{w:n.width,h:n.height}}function Ca(e){let t=document.querySelector(`.pg`);return t?getComputedStyle(t).getPropertyValue(e).trim():``}function wa(e,t,n,r,i,a={scale:1,x:0,y:0},o=null){let s=e.getContext(`2d`);if(!s)return;let{w:c,h:l}=Sa(e),u=Ca(`--bg`)||(i?`#10151b`:`#f6f7f8`),d=Ca(`--muted`)||(i?`#aeb8c2`:`#55616b`);s.clearRect(0,0,c,l),s.fillStyle=u,s.fillRect(0,0,c,l);let f=e=>24+e*(c-48),p=e=>24+e*(l-48);s.save(),s.translate(a.x,a.y),s.scale(a.scale,a.scale);for(let e of n){let n=t[e.pre],a=t[e.post],o=r-e.lastActiveTick,c=o>=0&&o<60,l=e.weight>0;if(s.beginPath(),s.moveTo(f(n.x),p(n.y)),s.lineTo(f(a.x),p(a.y)),c){let e=.2+.6*(1-o/60);s.strokeStyle=l?`rgba(77,143,214,${e})`:`rgba(238,76,44,${e})`,s.lineWidth=1.5+(1-o/60)*1.5}else s.strokeStyle=(Ca(`--line`)||(i?`#2a343e`:`#d9dfe4`))+`40`,s.lineWidth=.5;s.stroke()}for(let e of t){let t=f(e.x),n=p(e.y),a=r-e.lastSpikeTick,c=a>=0&&a<80,l=Math.max(0,Math.min(1,(e.v-e.vRest)/(e.vThresh-e.vRest))),u=ga[e.region]||`#8dc4d8`,m=o===e.id;if(c){let e=.35*(1-a/80),r=12+a*.05;s.beginPath(),s.arc(t,n,r,0,Math.PI*2),s.fillStyle=u,s.globalAlpha=e,s.fill(),s.globalAlpha=1}let h=c?7:5.5;s.beginPath(),s.arc(t,n,h,0,Math.PI*2),s.fillStyle=c?u:Ca(`--surface-2`)||(i?`#1b242d`:`#eef1f3`),s.fill(),s.strokeStyle=m?`#fff`:u,s.lineWidth=m?3:c?2.5:1,s.stroke(),m&&(s.beginPath(),s.arc(t,n,h+4,0,Math.PI*2),s.strokeStyle=`#8dc4d8`,s.lineWidth=2,s.setLineDash([6,4]),s.stroke(),s.setLineDash([]));let g=t+h+4,_=n-9;s.fillStyle=Ca(`--surface`)||(i?`#151c23`:`#ffffff`),s.fillRect(g,_,3,18);let v=Math.max(1,18*l);s.fillStyle=l>.85?`#ee4c2c`:l>.5?`#e8a13c`:u,s.fillRect(g,_+18-v,3,v),s.strokeStyle=Ca(`--line`)||(i?`#2a343e`:`#d9dfe4`),s.lineWidth=.5,s.strokeRect(g,_,3,18),e.id%4==0&&(s.fillStyle=d,s.font=`9px monospace`,s.textAlign=`center`,s.fillText(`N${e.id}`,t,n-h-4))}s.font=`11px IBM Plex Sans, sans-serif`,s.textAlign=`left`;let m=l-10,h=10;for(let e of ha){s.fillStyle=ga[e],s.beginPath(),s.arc(h+5,m-3,4,0,Math.PI*2),s.fill(),s.fillStyle=d;let t=_a[e];s.fillText(t,h+14,m),h+=s.measureText(t).width+24}s.font=`10px IBM Plex Sans, sans-serif`,s.fillStyle=d,s.globalAlpha=.6,s.textAlign=`center`,s.fillText(`INPUT`,f(.15),14),s.fillText(`PROCESSING`,f(.5),14),s.fillText(`OUTPUT`,f(.85),14),s.globalAlpha=1,s.setLineDash([4,4]),s.strokeStyle=d,s.globalAlpha=.15,s.lineWidth=1,s.beginPath(),s.moveTo(f(.32),24),s.lineTo(f(.32),l-24),s.stroke(),s.beginPath(),s.moveTo(f(.68),24),s.lineTo(f(.68),l-24),s.stroke(),s.setLineDash([]),s.globalAlpha=1,s.restore()}function Ta(e,t,n,r,i){let a=e.getContext(`2d`);if(!a)return;let{w:o,h:s}=Sa(e);a.clearRect(0,0,o,s),a.fillStyle=Ca(`--bg`)||(i?`#10151b`:`#f6f7f8`),a.fillRect(0,0,o,s),a.strokeStyle=(Ca(`--line`)||(i?`#2a343e`:`#d9dfe4`))+`55`,a.lineWidth=.5;for(let e=0;e<=4;e++){let t=s/4*e;a.beginPath(),a.moveTo(0,t),a.lineTo(o,t),a.stroke()}let c=Ca(`--muted`)||(i?`#aeb8c2`:`#55616b`);a.fillStyle=c,a.font=`9px monospace`,a.textAlign=`center`;for(let e=0;e<=4;e++){let t=Math.round(n-600+150*e);a.fillText(`${(t/1e3).toFixed(1)}s`,o/4*e,s-3)}let l=Math.max(0,n-600);for(let e of t){if(e.time<l)continue;let t=(e.time-l)/600*o,i=e.neuron/Math.max(1,r-1)*(s-16)+4,c=ha[e.neuron%ha.length],u=(n-e.time)/600;a.fillStyle=ga[c],a.globalAlpha=Math.max(.25,1-u),a.fillRect(t,i-1.5,2.5,3),a.globalAlpha=1}a.fillStyle=c,a.font=`9px monospace`,a.textAlign=`left`,a.fillText(`N${r-1}`,2,14),a.fillText(`N0`,2,s-16)}function Ea(e,t,n){let r=e.getContext(`2d`);if(!r)return;let{w:i,h:a}=Sa(e);r.clearRect(0,0,i,a),r.fillStyle=Ca(`--bg`)||(n?`#10151b`:`#f6f7f8`),r.fillRect(0,0,i,a),r.strokeStyle=(Ca(`--line`)||(n?`#2a343e`:`#d9dfe4`))+`55`,r.lineWidth=.5;for(let e=0;e<=4;e++){let t=a/4*e;r.beginPath(),r.moveTo(0,t),r.lineTo(i,t),r.stroke()}let o=[`#4d8fd6`,`#ee4c2c`,`#8dc4d8`,`#3ca878`,`#c792ea`];for(let e=0;e<Math.min(5,t.length);e++){let n=t[e];if(!n||n.length===0)continue;r.beginPath(),r.strokeStyle=o[e],r.lineWidth=1.3,r.globalAlpha=.9;let s=Math.min(250,n.length),c=n.length-s;for(let e=0;e<s;e++){let t=e/249*i,o=n[c+e],s=a-8-(o- -.075)/.039999999999999994*(a-16);e===0?r.moveTo(t,s):r.lineTo(t,s)}r.stroke(),r.globalAlpha=1}r.fillStyle=Ca(`--muted`)||(n?`#aeb8c2`:`#55616b`),r.font=`9px monospace`,r.textAlign=`right`,r.fillText(`-35mV`,i-4,14),r.fillText(`-75mV`,i-4,a-6);let s=a-8-.024999999999999994/.039999999999999994*(a-16);r.setLineDash([4,3]),r.strokeStyle=`#ee4c2c`,r.lineWidth=1,r.beginPath(),r.moveTo(0,s),r.lineTo(i,s),r.stroke(),r.setLineDash([]),r.fillStyle=`#ee4c2c`,r.textAlign=`left`,r.fillText(`threshold`,4,s-4)}function Da(e,t,n,r,i,a,o){let s=e.getContext(`2d`);if(!s)return;let{w:c,h:l}=Sa(e);s.clearRect(0,0,c,l),s.fillStyle=Ca(`--bg`)||(a?`#10151b`:`#f6f7f8`),s.fillRect(0,0,c,l),s.strokeStyle=(Ca(`--line`)||(a?`#2a343e`:`#d9dfe4`))+`50`,s.lineWidth=.5;let u=l/2;s.beginPath(),s.moveTo(0,u),s.lineTo(c,u),s.stroke();let d=1/n*3,f=Math.max(0,i-d);s.beginPath(),s.strokeStyle=`#8dc4d8`,s.lineWidth=1.5;for(let e=0;e<200;e++){let i=o(f+e/200*d,1,t,n,r)[0]||0,a=e/200*c,p=u-i/.04*(l/2-8);e===0?s.moveTo(a,p):s.lineTo(a,p)}s.stroke(),s.fillStyle=Ca(`--muted`)||(a?`#aeb8c2`:`#55616b`),s.font=`9px monospace`,s.textAlign=`left`,s.fillText(t.toUpperCase(),4,14),s.fillText(`${n}Hz`,4,26)}var Oa=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),U=o(((e,t)=>{t.exports=Oa()}))(),ka={scale:1,x:0,y:0};function Aa(e,t,n,r,i,a){let o=i.getBoundingClientRect(),s=(e-o.left)/(window.devicePixelRatio||1),c=(t-o.top)/(window.devicePixelRatio||1),{w:l,h:u}=Sa(i),d=e=>a+e*(l-2*a),f=e=>a+e*(u-2*a);for(let e=n.length-1;e>=0;e--){let t=n[e],i=(d(t.x)-r.x)*r.scale+r.x,a=(f(t.y)-r.y)*r.scale+r.y,o=7*r.scale,l=s-i,u=c-a;if(l*l+u*u<=o*o)return t.id}return null}function ja({neurons:e,synapses:t,spikes:n,tick:r,nNeurons:i,traces:a,mode:o,freq:s,amplitude:c,dark:l,selectedNeuron:u,onSelectNeuron:d,onPanZoom:f,panZoom:p=ka}){let m=(0,x.useRef)(null),h=(0,x.useRef)(null),g=(0,x.useRef)(null),_=(0,x.useRef)(null),[v,y]=(0,x.useState)({scale:1,x:0,y:0}),[b,S]=(0,x.useState)(!1),C=(0,x.useRef)({x:0,y:0,transform:{scale:1,x:0,y:0}}),w=(0,x.useRef)(!1),T=(0,x.useCallback)(()=>{m.current&&wa(m.current,e,t,r,l,v,u),h.current&&Ta(h.current,n,r,i,l),g.current&&Ea(g.current,a,l),_.current&&Da(_.current,o,s,c,r/1e3,l,ba)},[e,t,n,r,i,a,o,s,c,l,v,u]);(0,x.useEffect)(()=>{T()},[T]),(0,x.useEffect)(()=>{p&&(p.scale!==v.scale||p.x!==v.x||p.y!==v.y)&&y(p)},[p]),(0,x.useEffect)(()=>{let e=[m.current,h.current,g.current,_.current].filter(Boolean),t=new ResizeObserver(()=>{e.forEach(e=>{e&&(e.width=e.parentElement?.clientWidth||300,e.height=e.parentElement?.clientHeight||200)}),T()});return e.forEach(e=>{e?.parentElement&&t.observe(e.parentElement)}),()=>t.disconnect()},[T]);let E=(0,x.useCallback)(e=>{e.button===0?(e.preventDefault(),w.current=!1,S(!0),C.current={x:e.clientX,y:e.clientY,transform:v}):e.button===1&&(e.preventDefault(),w.current=!0,S(!0),C.current={x:e.clientX,y:e.clientY,transform:v})},[v]),D=(0,x.useCallback)(e=>{if(!b)return;let t=e.clientX-C.current.x,n=e.clientY-C.current.y;if(!w.current&&(Math.abs(t)>3||Math.abs(n)>3)&&(w.current=!0),!w.current)return;let r={...C.current.transform,x:C.current.transform.x+t,y:C.current.transform.y+n};y(r),f&&f(r)},[b,f]),O=(0,x.useCallback)(()=>{S(!1)},[]);(0,x.useEffect)(()=>{let e=m.current;if(!e)return;let t=t=>{t.preventDefault();let n=e.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top,a=t.deltaY>0?.9:1.1,o=Math.min(5,Math.max(.5,v.scale*a)),s={scale:o,x:r-(r-v.x)*(o/v.scale),y:i-(i-v.y)*(o/v.scale)};y(s),f&&f(s)};return e.addEventListener(`wheel`,t,{passive:!1}),()=>e.removeEventListener(`wheel`,t)},[v,f]);let k=(0,x.useCallback)(t=>{let n=m.current;if(!n)return;let r=Aa(t.clientX,t.clientY,e,v,n,24);d&&d(r)},[e,v,d]),A=(0,x.useCallback)(t=>{if(w.current)return;let n=m.current;if(!n)return;let r=Aa(t.clientX,t.clientY,e,v,n,24);d&&d(r)},[e,v,d]),j={width:`100%`,height:`100%`,display:`block`,cursor:b?`grabbing`:`grab`};return(0,U.jsxs)(`div`,{className:`pg-center`,children:[(0,U.jsx)(`div`,{className:`pg-viz-main`,children:(0,U.jsxs)(`div`,{className:`pg-panel`,children:[(0,U.jsx)(`div`,{className:`pg-panel-title`,children:`Neuron Map`}),(0,U.jsx)(`div`,{className:`pg-canvas-wrap`,children:(0,U.jsx)(`canvas`,{ref:m,style:j,onMouseDown:E,onMouseMove:D,onMouseUp:O,onMouseLeave:O,onDoubleClick:k,onClick:A})})]})}),(0,U.jsxs)(`div`,{className:`pg-viz-row`,children:[(0,U.jsxs)(`div`,{className:`pg-panel`,children:[(0,U.jsx)(`div`,{className:`pg-panel-title`,children:`Spike Raster`}),(0,U.jsx)(`div`,{className:`pg-canvas-wrap`,children:(0,U.jsx)(`canvas`,{ref:h,style:j})})]}),(0,U.jsxs)(`div`,{className:`pg-panel`,children:[(0,U.jsx)(`div`,{className:`pg-panel-title`,children:`Membrane Traces`}),(0,U.jsx)(`div`,{className:`pg-canvas-wrap`,children:(0,U.jsx)(`canvas`,{ref:g,style:j})})]}),(0,U.jsxs)(`div`,{className:`pg-panel`,children:[(0,U.jsx)(`div`,{className:`pg-panel-title`,children:`Input Waveform`}),(0,U.jsx)(`div`,{className:`pg-canvas-wrap`,children:(0,U.jsx)(`canvas`,{ref:_,style:j})})]})]})]})}var Ma=Object.defineProperty,Na=(e,t)=>Ma(e,`name`,{value:t,configurable:!0});function Pa(e,[t,n]){return Math.min(n,Math.max(t,e))}Na(Pa,`clamp`);var Fa=Object.defineProperty,Ia=(e,t)=>Fa(e,`name`,{value:t,configurable:!0}),La=!!(typeof window<`u`&&window.document&&window.document.createElement);function Ra(e,t,{checkForDefaultPrevented:n=!0}={}){return Ia(function(r){if(e?.(r),n===!1||!r||!r.defaultPrevented)return t?.(r)},`handleEvent`)}Ia(Ra,`composeEventHandlers`);function za(e){if(!La)throw Error(`Cannot access window outside of the DOM`);return e?.ownerDocument?.defaultView??window}Ia(za,`getOwnerWindow`);function Ba(e){if(!La)throw Error(`Cannot access document outside of the DOM`);return e?.ownerDocument??document}Ia(Ba,`getOwnerDocument`);function Va(e,t=!1){let{activeElement:n}=Ba(e);if(!n?.nodeName)return null;if(Ha(n)&&n.contentDocument)return Va(n.contentDocument.body,t);if(t){let e=n.getAttribute(`aria-activedescendant`);if(e){let t=Ba(n).getElementById(e);if(t)return t}}return n}Ia(Va,`getActiveElement`);function Ha(e){return e.tagName===`IFRAME`}Ia(Ha,`isFrame`);var Ua=Object.defineProperty,Wa=(e,t)=>Ua(e,`name`,{value:t,configurable:!0});function Ga(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}Wa(Ga,`setRef`);function Ka(...e){return t=>{let n=!1,r=e.map(e=>{let r=Ga(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Ga(e[t],null)}}}}Wa(Ka,`composeRefs`);function qa(...e){return x.useCallback(Ka(...e),e)}Wa(qa,`useComposedRefs`);var Ja=Object.defineProperty,Ya=(e,t)=>Ja(e,`name`,{value:t,configurable:!0});function Xa(e,t){let n=x.createContext(t);n.displayName=e+`Context`;let r=Ya(e=>{let{children:t,...r}=e,i=x.useMemo(()=>r,Object.values(r));return(0,U.jsx)(n.Provider,{value:i,children:t})},`Provider`);r.displayName=e+`Provider`;function i(r,i={}){let{optional:a=!1}=i,o=x.useContext(n);if(o)return o;if(t!==void 0)return t;if(!a)throw Error(`\`${r}\` must be used within \`${e}\``)}return Ya(i,`useContext`),[r,i]}Ya(Xa,`createContext`);function Za(e,t=[]){let n=[];function r(t,r){let i=x.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=Ya(t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=x.useMemo(()=>o,Object.values(o));return(0,U.jsx)(s.Provider,{value:c,children:r})},`Provider`);o.displayName=t+`Provider`;function s(n,o,s={}){let{optional:c=!1}=s,l=o?.[e]?.[a]||i,u=x.useContext(l);if(u)return u;if(r!==void 0)return r;if(!c)throw Error(`\`${n}\` must be used within \`${t}\``)}return Ya(s,`useContext`),[o,s]}Ya(r,`createContext`);let i=Ya(()=>{let t=n.map(e=>x.createContext(e));return Ya(function(n){let r=n?.[e]||t;return x.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])},`useScope`)},`createScope`);return i.scopeName=e,[r,Qa(i,...t)]}Ya(Za,`createContextScope`);function Qa(...e){let t=e[0];if(e.length===1)return t;let n=Ya(()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return Ya(function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return x.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])},`useComposedScopes`)},`createScope`);return n.scopeName=t.scopeName,n}Ya(Qa,`composeContextScopes`);var $a=globalThis?.document?x.useLayoutEffect:()=>{},eo=Object.defineProperty,to=(e,t)=>eo(e,`name`,{value:t,configurable:!0}),no=x.useEffectEvent,ro=x.useInsertionEffect;function io(e){if(typeof no==`function`)return no(e);let t=x.useRef(()=>{throw Error(`Cannot call an event handler while rendering.`)});return typeof ro==`function`?ro(()=>{t.current=e}):$a(()=>{t.current=e}),x.useMemo(()=>((...e)=>t.current?.(...e)),[])}to(io,`useEffectEvent`);var ao=Object.defineProperty,oo=(e,t)=>ao(e,`name`,{value:t,configurable:!0}),so=x.useInsertionEffect||$a;function co({prop:e,defaultProp:t,onChange:n=oo(()=>{},`onChange`),caller:r}){let[i,a,o]=W({defaultProp:t,onChange:n}),s=e!==void 0;return[s?e:i,x.useCallback(t=>{if(s){let n=G(t)?t(e):t;n!==e&&o.current?.(n)}else a(t)},[s,e,a,o])]}oo(co,`useControllableState`);function W({defaultProp:e,onChange:t}){let[n,r]=x.useState(e),i=x.useRef(n),a=x.useRef(t);return so(()=>{a.current=t},[t]),x.useEffect(()=>{i.current!==n&&(a.current?.(n),i.current=n)},[n,i]),[n,r,a]}oo(W,`useUncontrolledState`);function G(e){return typeof e==`function`}oo(G,`isFunction`);var lo=Symbol(`RADIX:SYNC_STATE`);function uo(e,t,n,r){let{prop:i,defaultProp:a,onChange:o,caller:s}=t,c=i!==void 0,l=io(o),u=[{...n,state:a}];r&&u.push(r);let[d,f]=x.useReducer((t,n)=>{if(n.type===lo)return{...t,state:n.state};let r=e(t,n);return c&&!Object.is(r.state,t.state)&&l(r.state),r},...u),p=d.state,m=x.useRef(p);x.useEffect(()=>{m.current!==p&&(m.current=p,c||l(p))},[p,m,c]);let h=x.useMemo(()=>i===void 0?d:{...d,state:i},[d,i]);return x.useEffect(()=>{c&&!Object.is(i,d.state)&&f({type:lo,state:i})},[i,d.state,c]),[h,f]}oo(uo,`useControllableStateReducer`);var fo=Object.defineProperty,po=(e,t)=>fo(e,`name`,{value:t,configurable:!0}),mo=x.createContext(void 0);function ho(e){let t=x.useContext(mo);return e||t||`ltr`}po(ho,`useDirection`);var go=Object.defineProperty,_o=(e,t)=>go(e,`name`,{value:t,configurable:!0});function vo(e){let t=x.useRef({value:e,previous:e});return x.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}_o(vo,`usePrevious`);var yo=Object.defineProperty,bo=(e,t)=>yo(e,`name`,{value:t,configurable:!0});function xo(e){let[t,n]=x.useState(void 0);return $a(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{if(!Array.isArray(t)||!t.length)return;let r=t[0],i,a;if(`borderBoxSize`in r){let e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;i=t.inlineSize,a=t.blockSize}else i=e.offsetWidth,a=e.offsetHeight;n({width:i,height:a})});return t.observe(e,{box:`border-box`}),()=>t.unobserve(e)}n(void 0)},[e]),t}bo(xo,`useSize`);var So=c(m(),1),Co=Object.defineProperty,wo=(e,t)=>Co(e,`name`,{value:t,configurable:!0});function To(e){let t=x.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];No(r)&&typeof Lo==`function`&&(r=Lo(r._payload)),x.Children.forEach(r,e=>{if(jo(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;No(n)&&typeof Lo==`function`&&(n=Lo(n._payload)),a=Oo(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=x.cloneElement(a,void 0,s):!o&&x.Children.count(r)===1&&x.isValidElement(r)&&(a=r);let c=a?Ao(a):void 0,l=qa(n,c);if(!a){if(r||r===0)throw Error(o?Io(e):Fo(e));return r}let u=ko(i,a.props??{});return a.type!==x.Fragment&&(u.ref=n?l:c),x.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}wo(To,`createSlot`);var Eo=Symbol.for(`radix.slottable`);function Do(e){let t=wo(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=Eo,t}wo(Do,`createSlottable`);var Oo=wo((e,t)=>{if(`child`in e.props){let t=e.props.child;return x.isValidElement(t)?x.cloneElement(t,void 0,e.props.children(t.props.children)):null}return x.isValidElement(t)?t:null},`getSlottableElementFromSlottable`);function ko(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}wo(ko,`mergeProps`);function Ao(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}wo(Ao,`getElementRef`);function jo(e){return x.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Eo}wo(jo,`isSlottable`);var Mo=Symbol.for(`react.lazy`);function No(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Mo&&`_payload`in e&&Po(e._payload)}wo(No,`isLazyComponent`);function Po(e){return typeof e==`object`&&!!e&&`then`in e}wo(Po,`isPromiseLike`);var Fo=wo(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),Io=wo(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),Lo=x.use,Ro=Object.defineProperty,zo=(e,t)=>Ro(e,`name`,{value:t,configurable:!0}),Bo=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=To(`Primitive.${t}`),r=x.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,U.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Vo(e,t){e&&So.flushSync(()=>e.dispatchEvent(t))}zo(Vo,`dispatchDiscreteCustomEvent`);var Ho=Object.defineProperty,Uo=(e,t)=>Ho(e,`name`,{value:t,configurable:!0});function Wo(e){let t=e+`CollectionProvider`,[n,r]=Za(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),o=Uo(e=>{let{scope:t,children:n}=e,r=x.useRef(null),a=x.useRef(new Map).current;return(0,U.jsx)(i,{scope:t,itemMap:a,collectionRef:r,children:n})},`CollectionProvider`);o.displayName=t;let s=e+`CollectionSlot`,c=To(s),l=x.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=qa(t,a(s,n).collectionRef);return(0,U.jsx)(c,{ref:i,children:r})});l.displayName=s;let u=e+`CollectionItemSlot`,d=`data-radix-collection-item`,f=To(u),p=x.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=x.useRef(null),s=qa(t,o),c=a(u,n);return x.useEffect(()=>(c.itemMap.set(o,{ref:o,...i}),()=>void c.itemMap.delete(o))),(0,U.jsx)(f,{[d]:``,ref:s,children:r})});p.displayName=u;function m(t){let n=a(e+`CollectionConsumer`,t);return x.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${d}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])}return Uo(m,`useCollection`),[{Provider:o,Slot:l,ItemSlot:p},m,r]}Uo(Wo,`createCollection`);var Go=new WeakMap,Ko=class e extends Map{static{Uo(this,`OrderedDict`)}#e;constructor(e){super(e),this.#e=[...super.keys()],Go.set(this,!0)}set(e,t){return Go.get(this)&&(this.has(e)?this.#e[this.#e.indexOf(e)]=e:this.#e.push(e)),super.set(e,t),this}insert(e,t,n){let r=this.has(t),i=this.#e.length,a=Yo(e),o=a>=0?a:i+a,s=o<0||o>=i?-1:o;if(s===this.size||r&&s===this.size-1||s===-1)return this.set(t,n),this;let c=this.size+ +!r;a<0&&o++;let l=[...this.#e],u,d=!1;for(let e=o;e<c;e++)if(o===e){let i=l[e];l[e]===t&&(i=l[e+1]),r&&this.delete(t),u=this.get(i),this.set(t,n)}else{!d&&l[e-1]===t&&(d=!0);let n=l[d?e:e-1],r=u;u=this.get(n),this.delete(n),this.set(n,r)}return this}with(t,n,r){let i=new e(this);return i.insert(t,n,r),i}before(e){let t=this.#e.indexOf(e)-1;if(!(t<0))return this.entryAt(t)}setBefore(e,t,n){let r=this.#e.indexOf(e);return r===-1?this:this.insert(r,t,n)}after(e){let t=this.#e.indexOf(e);if(t=t===-1||t===this.size-1?-1:t+1,t!==-1)return this.entryAt(t)}setAfter(e,t,n){let r=this.#e.indexOf(e);return r===-1?this:this.insert(r+1,t,n)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return this.#e=[],super.clear()}delete(e){let t=super.delete(e);return t&&this.#e.splice(this.#e.indexOf(e),1),t}deleteAt(e){let t=this.keyAt(e);return t!==void 0&&this.delete(t)}at(e){let t=qo(this.#e,e);if(t!==void 0)return this.get(t)}entryAt(e){let t=qo(this.#e,e);if(t!==void 0)return[t,this.get(t)]}indexOf(e){return this.#e.indexOf(e)}keyAt(e){return qo(this.#e,e)}from(e,t){let n=this.indexOf(e);if(n===-1)return;let r=n+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.at(r)}keyFrom(e,t){let n=this.indexOf(e);if(n===-1)return;let r=n+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.keyAt(r)}find(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return r;n++}}findIndex(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return n;n++}return-1}filter(t,n){let r=[],i=0;for(let e of this)Reflect.apply(t,n,[e,i,this])&&r.push(e),i++;return new e(r)}map(t,n){let r=[],i=0;for(let e of this)r.push([e[0],Reflect.apply(t,n,[e,i,this])]),i++;return new e(r)}reduce(...e){let[t,n]=e,r=0,i=n??this.at(0);for(let n of this)i=r===0&&e.length===1?n:Reflect.apply(t,this,[i,n,r,this]),r++;return i}reduceRight(...e){let[t,n]=e,r=n??this.at(-1);for(let n=this.size-1;n>=0;n--){let i=this.at(n);r=n===this.size-1&&e.length===1?i:Reflect.apply(t,this,[r,i,n,this])}return r}toSorted(t){let n=[...this.entries()].sort(t);return new e(n)}toReversed(){let t=new e;for(let e=this.size-1;e>=0;e--){let n=this.keyAt(e),r=this.get(n);t.set(n,r)}return t}toSpliced(...t){let n=[...this.entries()];return n.splice(...t),new e(n)}slice(t,n){let r=new e,i=this.size-1;if(t===void 0)return r;t<0&&(t+=this.size),n!==void 0&&n>0&&(i=n-1);for(let e=t;e<=i;e++){let t=this.keyAt(e),n=this.get(t);r.set(t,n)}return r}every(e,t){let n=0;for(let r of this){if(!Reflect.apply(e,t,[r,n,this]))return!1;n++}return!0}some(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return!0;n++}return!1}};function qo(e,t){if(`at`in Array.prototype)return Array.prototype.at.call(e,t);let n=Jo(e,t);return n===-1?void 0:e[n]}Uo(qo,`at`);function Jo(e,t){let n=e.length,r=Yo(t),i=r>=0?r:n+r;return i<0||i>=n?-1:i}Uo(Jo,`toSafeIndex`);function Yo(e){return e!==e||e===0?0:Math.trunc(e)}Uo(Yo,`toSafeInteger`);function Xo(e){let t=e+`CollectionProvider`,[n,r]=Za(t),[i,a]=n(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Ko,setItemMap:Uo(()=>void 0,`setItemMap`)}),o=Uo(({state:e,...t})=>e?(0,U.jsx)(c,{...t,state:e}):(0,U.jsx)(s,{...t}),`CollectionProvider`);o.displayName=t;let s=Uo(e=>{let t=h();return(0,U.jsx)(c,{...e,state:t})},`CollectionInit`);s.displayName=t+`Init`;let c=Uo(e=>{let{scope:t,children:n,state:r}=e,a=x.useRef(null),[o,s]=x.useState(null),c=qa(a,s),[l,u]=r;return x.useEffect(()=>{if(!o)return;let e=es(()=>{});return e.observe(o,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[o]),(0,U.jsx)(i,{scope:t,itemMap:l,setItemMap:u,collectionRef:c,collectionRefObject:a,collectionElement:o,children:n})},`CollectionProviderImpl`);c.displayName=t+`Impl`;let l=e+`CollectionSlot`,u=To(l),d=x.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=qa(t,a(l,n).collectionRef);return(0,U.jsx)(u,{ref:i,children:r})});d.displayName=l;let f=e+`CollectionItemSlot`,p=To(f),m=x.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=x.useRef(null),[s,c]=x.useState(null),l=qa(t,o,c),{setItemMap:u}=a(f,n),d=x.useRef(i);Zo(d.current,i)||(d.current=i);let m=d.current;return x.useEffect(()=>{let e=m;return u(t=>s?t.has(s)?t.set(s,{...e,element:s}).toSorted($o):(t.set(s,{...e,element:s}),t.toSorted($o)):t),()=>{u(e=>!s||!e.has(s)?e:(e.delete(s),new Ko(e)))}},[s,m,u]),(0,U.jsx)(p,{"data-radix-collection-item":``,ref:l,children:r})});m.displayName=f;function h(){return x.useState(new Ko)}Uo(h,`useInitCollection`);function g(t){let{itemMap:n}=a(e+`CollectionConsumer`,t);return n}return Uo(g,`useCollection`),[{Provider:o,Slot:d,ItemSlot:m},{createCollectionScope:r,useCollection:g,useInitCollection:h}]}Uo(Xo,`createCollection`);function Zo(e,t){if(e===t)return!0;if(typeof e!=`object`||typeof t!=`object`||e==null||t==null)return!1;let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Uo(Zo,`shallowEqual`);function Qo(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Uo(Qo,`isElementPreceding`);function $o(e,t){return!e[1].element||!t[1].element?0:Qo(e[1].element,t[1].element)?-1:1}Uo($o,`sortByDocumentPosition`);function es(e){return new MutationObserver(t=>{for(let n of t)if(n.type===`childList`){e();return}})}Uo(es,`getChildListObserver`);var ts=Object.defineProperty,K=(e,t)=>ts(e,`name`,{value:t,configurable:!0}),ns=[`PageUp`,`PageDown`],rs=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`],is={"from-left":[`Home`,`PageDown`,`ArrowDown`,`ArrowLeft`],"from-right":[`Home`,`PageDown`,`ArrowDown`,`ArrowRight`],"from-bottom":[`Home`,`PageDown`,`ArrowDown`,`ArrowLeft`],"from-top":[`Home`,`PageDown`,`ArrowUp`,`ArrowLeft`]},as=`Slider`,[os,ss,cs]=Wo(as),[ls,us]=Za(as,[cs]),[ds,fs]=ls(as),ps=x.forwardRef(K(function(e,t){let{name:n,min:r=0,max:i=100,step:a=1,orientation:o=`horizontal`,disabled:s=!1,minStepsBetweenThumbs:c=0,defaultValue:l=[r],value:u,onValueChange:d=K(()=>{},`onValueChange`),onValueCommit:f=K(()=>{},`onValueCommit`),inverted:p=!1,form:m,...h}=e,g=x.useRef(new Set),_=x.useRef(0),v=x.useRef(!1),y=o===`horizontal`?gs:_s,[b,S]=x.useState(null),C=qa(t,S),[w=[],T]=co({prop:u,defaultProp:l,onChange:K(e=>{[...g.current][_.current]?.focus({preventScroll:!0,focusVisible:v.current}),v.current=!1,d(e)},`onChange`)}),E=x.useRef(w),D=x.useRef(w);x.useEffect(()=>{let e=m?b?.ownerDocument.getElementById(m):b?.closest(`form`);if(e instanceof HTMLFormElement){let t=K(()=>T(D.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[b,m,T]);function O(e){j(e,Fs(w,e))}K(O,`handleSlideStart`);function k(e){j(e,_.current)}K(k,`handleSlideMove`);function A(){String(w)!==String(E.current)&&f(w)}K(A,`handleSlideEnd`);function j(e,t,{commit:n}={commit:!1}){let o=Bs(a),s=Pa(Vs(Math.round((e-r)/a)*a+r,o),[r,i]);T((e=[])=>{let r=Ms(e,s,t);if(Rs(r,c*a)){_.current=r.indexOf(s);let t=String(r)!==String(e);return t&&n&&f(r),t?r:e}return e})}return K(j,`updateValues`),(0,U.jsx)(ds,{scope:e.__scopeSlider,name:n,disabled:s,min:r,max:i,valueIndexToChangeRef:_,thumbs:g.current,values:w,orientation:o,form:m,children:(0,U.jsx)(os.Provider,{scope:e.__scopeSlider,children:(0,U.jsx)(os.Slot,{scope:e.__scopeSlider,children:(0,U.jsx)(y,{"aria-disabled":s,"data-disabled":s?``:void 0,...h,ref:C,onPointerDown:Ra(h.onPointerDown,()=>{s||(E.current=w,v.current=!1)}),min:r,max:i,inverted:p,onSlideStart:s?void 0:O,onSlideMove:s?void 0:k,onSlideEnd:s?void 0:A,onHomeKeyDown:()=>{s||(v.current=!0,j(r,0,{commit:!0}))},onEndKeyDown:()=>{s||(v.current=!0,j(i,w.length-1,{commit:!0}))},onStepKeyDown:({event:e,direction:t})=>{if(!s){v.current=!0;let n=ns.includes(e.key)||e.shiftKey&&rs.includes(e.key)?10:1,i=_.current,o=w[i];j(Hs(o,{min:r,step:a,direction:t,multiplier:n}),i,{commit:!0})}}})})})})},`Slider`)),[ms,hs]=ls(as,{startEdge:`left`,endEdge:`right`,size:`width`,direction:1}),gs=x.forwardRef(K(function(e,t){let{min:n,max:r,dir:i,inverted:a,onSlideStart:o,onSlideMove:s,onSlideEnd:c,onStepKeyDown:l,...u}=e,[d,f]=x.useState(null),p=qa(t,f),m=x.useRef(void 0),h=ho(i),g=h===`ltr`,_=g&&!a||!g&&a;function v(e){let t=m.current||d.getBoundingClientRect(),i=zs([0,t.width],_?[n,r]:[r,n]);return m.current=t,i(e-t.left)}return K(v,`getValueFromPointer`),(0,U.jsx)(ms,{scope:e.__scopeSlider,startEdge:_?`left`:`right`,endEdge:_?`right`:`left`,direction:_?1:-1,size:`width`,children:(0,U.jsx)(vs,{dir:h,"data-orientation":`horizontal`,...u,ref:p,style:{...u.style,"--radix-slider-thumb-transform":`translateX(-50%)`},onSlideStart:e=>{let t=v(e.clientX);o?.(t)},onSlideMove:e=>{let t=v(e.clientX);s?.(t)},onSlideEnd:()=>{m.current=void 0,c?.()},onStepKeyDown:e=>{let t=is[_?`from-left`:`from-right`].includes(e.key);l?.({event:e,direction:t?-1:1})}})})},`SliderHorizontal`)),_s=x.forwardRef(K(function(e,t){let{min:n,max:r,inverted:i,onSlideStart:a,onSlideMove:o,onSlideEnd:s,onStepKeyDown:c,...l}=e,u=x.useRef(null),d=qa(t,u),f=x.useRef(void 0),p=!i;function m(e){let t=f.current||u.current.getBoundingClientRect(),i=zs([0,t.height],p?[r,n]:[n,r]);return f.current=t,i(e-t.top)}return K(m,`getValueFromPointer`),(0,U.jsx)(ms,{scope:e.__scopeSlider,startEdge:p?`bottom`:`top`,endEdge:p?`top`:`bottom`,size:`height`,direction:p?1:-1,children:(0,U.jsx)(vs,{"data-orientation":`vertical`,...l,ref:d,style:{...l.style,"--radix-slider-thumb-transform":`translateY(50%)`},onSlideStart:e=>{let t=m(e.clientY);a?.(t)},onSlideMove:e=>{let t=m(e.clientY);o?.(t)},onSlideEnd:()=>{f.current=void 0,s?.()},onStepKeyDown:e=>{let t=is[p?`from-bottom`:`from-top`].includes(e.key);c?.({event:e,direction:t?-1:1})}})})},`SliderVertical`)),vs=x.forwardRef(K(function(e,t){let{__scopeSlider:n,onSlideStart:r,onSlideMove:i,onSlideEnd:a,onHomeKeyDown:o,onEndKeyDown:s,onStepKeyDown:c,...l}=e,u=fs(as,n);return(0,U.jsx)(Bo.span,{...l,ref:t,onKeyDown:Ra(e.onKeyDown,e=>{e.key===`Home`?(o(e),e.preventDefault()):e.key===`End`?(s(e),e.preventDefault()):ns.concat(rs).includes(e.key)&&(c(e),e.preventDefault())}),onPointerDown:Ra(e.onPointerDown,e=>{let t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),u.thumbs.has(t)?t.focus({preventScroll:!0,focusVisible:!1}):r(e)}),onPointerMove:Ra(e.onPointerMove,e=>{e.target.hasPointerCapture(e.pointerId)&&i(e)}),onPointerUp:Ra(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),a(e))})})},`SliderImpl`)),ys=`SliderTrack`,bs=x.forwardRef(K(function(e,t){let{__scopeSlider:n,...r}=e,i=fs(ys,n);return(0,U.jsx)(Bo.span,{"data-disabled":i.disabled?``:void 0,"data-orientation":i.orientation,...r,ref:t})},`SliderTrack`)),xs=`SliderRange`,Ss=x.forwardRef(K(function(e,t){let{__scopeSlider:n,...r}=e,i=fs(xs,n),a=hs(xs,n),o=qa(t,x.useRef(null)),s=i.values.length,c=i.values.map(e=>Ns(e,i.min,i.max)),l=s>1?Math.min(...c):0,u=100-Math.max(...c);return(0,U.jsx)(Bo.span,{"data-orientation":i.orientation,"data-disabled":i.disabled?``:void 0,...r,ref:o,style:{...e.style,[a.startEdge]:l+`%`,[a.endEdge]:u+`%`}})},`SliderRange`)),[Cs,ws]=ls(`SliderThumb`),Ts=`SliderThumbProvider`;function Es(e){let{__scopeSlider:t,name:n,children:r,internal_do_not_use_render:i}=e,a=fs(Ts,t),o=ss(t),[s,c]=x.useState(null),l=x.useMemo(()=>s?o().findIndex(e=>e.ref.current===s):-1,[o,s]),u=xo(s),d=!s||!!a.form||!!s.closest(`form`),f=a.values[l],p=n??(a.name?a.name+(a.values.length>1?`[]`:``):void 0),m=f===void 0?0:Ns(f,a.min,a.max);x.useEffect(()=>{if(s)return a.thumbs.add(s),()=>{a.thumbs.delete(s)}},[s,a.thumbs]);let h={value:f,name:p,form:a.form,isFormControl:d,index:l,thumb:s,onThumbChange:c,percent:m,size:u};return(0,U.jsx)(Cs,{scope:t,...h,children:Us(i)?i(h):r})}K(Es,`SliderThumbProvider`);var Ds=`SliderThumbTrigger`,Os=x.forwardRef(K(function(e,t){let{__scopeSlider:n,...r}=e,i=fs(Ds,n),a=hs(Ds,n),{index:o,value:s,percent:c,size:l,onThumbChange:u}=ws(Ds,n),d=qa(t,u),f=Ps(o,i.values.length),p=l?.[a.size],m=p?Is(p,c,a.direction):0;return(0,U.jsx)(`span`,{style:{transform:`var(--radix-slider-thumb-transform)`,position:`absolute`,[a.startEdge]:`calc(${c}% + ${m}px)`},children:(0,U.jsx)(os.ItemSlot,{scope:n,children:(0,U.jsx)(Bo.span,{role:`slider`,"aria-label":e[`aria-label`]||f,"aria-valuemin":i.min,"aria-valuenow":s,"aria-valuemax":i.max,"aria-orientation":i.orientation,"data-orientation":i.orientation,"data-disabled":i.disabled?``:void 0,tabIndex:i.disabled?void 0:0,...r,ref:d,style:s===void 0?{display:`none`}:e.style,onFocus:Ra(e.onFocus,()=>{i.valueIndexToChangeRef.current=o})})})})},`SliderThumbTrigger`)),ks=x.forwardRef(K(function(e,t){let{__scopeSlider:n,name:r,...i}=e;return(0,U.jsx)(Es,{__scopeSlider:n,name:r,internal_do_not_use_render:({index:e,isFormControl:r})=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Os,{...i,ref:t,__scopeSlider:n}),r?(0,U.jsx)(js,{__scopeSlider:n},e):null]})})},`SliderThumb`)),As=`SliderBubbleInput`,js=x.forwardRef(K(function({__scopeSlider:e,...t},n){let{value:r,name:i,form:a}=ws(As,e),o=x.useRef(null),s=qa(o,n),c=vo(r);return x.useEffect(()=>{let e=o.current;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`value`).set;if(c!==r&&n){let t=new Event(`input`,{bubbles:!0});n.call(e,r),e.dispatchEvent(t)}},[c,r]),(0,U.jsx)(Bo.input,{style:{display:`none`},name:i,form:a,...t,ref:s,defaultValue:r})},`SliderBubbleInput`));function Ms(e=[],t,n){let r=[...e];return r[n]=t,r.sort((e,t)=>e-t)}K(Ms,`getNextSortedValues`);function Ns(e,t,n){return Pa(100/(n-t)*(e-t),[0,100])}K(Ns,`convertValueToPercentage`);function Ps(e,t){if(t>2)return`Value ${e+1} of ${t}`;if(t===2)return[`Minimum`,`Maximum`][e]}K(Ps,`getLabel`);function Fs(e,t){if(e.length===1)return 0;let n=e.map(e=>Math.abs(e-t)),r=Math.min(...n);return n.indexOf(r)}K(Fs,`getClosestValueIndex`);function Is(e,t,n){let r=e/2;return(r-zs([0,50],[0,r])(t)*n)*n}K(Is,`getThumbInBoundsOffset`);function Ls(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}K(Ls,`getStepsBetweenValues`);function Rs(e,t){if(t>0){let n=Ls(e);return Math.min(...n)>=t}return!0}K(Rs,`hasMinStepsBetweenValues`);function zs(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}K(zs,`linearScale`);function Bs(e){if(!Number.isFinite(e))return 0;let t=e.toString();if(t.includes(`e`)){let[e,n]=t.split(`e`),r=e.split(`.`)[1]||``,i=Number(n);return Math.max(0,r.length-i)}let n=t.split(`.`)[1];return n?n.length:0}K(Bs,`getDecimalCount`);function Vs(e,t){let n=10**t;return Math.round(e*n)/n}K(Vs,`roundValue`);function Hs(e,{min:t,step:n,direction:r,multiplier:i}){let a=Bs(n),o=(e-t)/n,s=Math.round(o),c=Vs(s*n+t,a)===Vs(e,a),l;return l=c?s+i*r:r>0?Math.ceil(o):Math.floor(o),Vs(l*n+t,a)}K(Hs,`getNextStepValue`);function Us(e){return typeof e==`function`}K(Us,`isFunction`);var Ws=Object.defineProperty,Gs=(e,t)=>Ws(e,`name`,{value:t,configurable:!0});function Ks(e){let t=x.useRef(e);return x.useEffect(()=>{t.current=e}),x.useMemo(()=>((...e)=>t.current?.(...e)),[])}Gs(Ks,`useCallbackRef`);var qs=Object.defineProperty,Js=(e,t)=>qs(e,`name`,{value:t,configurable:!0}),Ys=`dismissableLayer.update`,Xs=`dismissableLayer.pointerDownOutside`,Zs=`dismissableLayer.focusOutside`,Qs,$s=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),ec=x.forwardRef(Js(function(e,t){let{disableOutsidePointerEvents:n=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:o,onInteractOutside:s,onDismiss:c,...l}=e,u=x.useContext($s),[d,f]=x.useState(null),p=d?.ownerDocument??globalThis?.document,[,m]=x.useState({}),h=qa(t,f),g=Array.from(u.layers),[_]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),v=_?g.indexOf(_):-1,y=d?g.indexOf(d):-1,b=u.layersWithOutsidePointerEventsDisabled.size>0,S=y>=v,C=x.useRef(!1),w=rc(e=>{a?.(e),s?.(e),e.defaultPrevented||c?.()},{ownerDocument:p,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:C,dismissableSurfaces:u.dismissableSurfaces,shouldHandlePointerDownOutside:x.useCallback(e=>{if(!(e instanceof Node))return!1;let t=[...u.branches].some(t=>t.contains(e));return S&&!t},[u.branches,S])}),T=ic(e=>{if(r&&C.current)return;let t=e.target;[...u.branches].some(e=>e.contains(t))||(o?.(e),s?.(e),e.defaultPrevented||c?.())},p),E=d?y===g.length-1:!1,D=Ks(e=>{e.key===`Escape`&&(i?.(e),!e.defaultPrevented&&c&&(e.preventDefault(),c()))});return x.useEffect(()=>{if(E)return p.addEventListener(`keydown`,D,{capture:!0}),()=>p.removeEventListener(`keydown`,D,{capture:!0})},[p,E,D]),x.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Qs=p.body.style.pointerEvents,p.body.style.pointerEvents=`none`),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),ac(),()=>{n&&(u.layersWithOutsidePointerEventsDisabled.delete(d),u.layersWithOutsidePointerEventsDisabled.size===0&&(p.body.style.pointerEvents=Qs))}},[d,p,n,u]),x.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),ac())},[d,u]),x.useEffect(()=>{let e=Js(()=>m({}),`handleUpdate`);return document.addEventListener(Ys,e),()=>document.removeEventListener(Ys,e)},[]),(0,U.jsx)(Bo.div,{...l,ref:h,style:{pointerEvents:b?S?`auto`:`none`:void 0,...e.style},onFocusCapture:Ra(e.onFocusCapture,T.onFocusCapture),onBlurCapture:Ra(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:Ra(e.onPointerDownCapture,w.onPointerDownCapture)})},`DismissableLayer`));function tc(){let e=x.useContext($s),[t,n]=x.useState(null);return x.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),n}Js(tc,`useDismissableLayerSurface`);var nc=Js(()=>!0,`IS_TRUE`);function rc(e,t){let{ownerDocument:n=globalThis?.document,deferPointerDownOutside:r=!1,isDeferredPointerDownOutsideRef:i,dismissableSurfaces:a,shouldHandlePointerDownOutside:o=nc}=t,s=Ks(e),c=x.useRef(!1),l=x.useRef(!1),u=x.useRef(new Map),d=x.useRef(()=>{});return x.useEffect(()=>{function e(){l.current=!1,i.current=!1,u.current.clear()}Js(e,`resetOutsideInteraction`);function t(){return Array.from(u.current.values()).some(Boolean)}Js(t,`isOutsideInteractionIntercepted`);function f(e){if(!l.current)return;let t=e.target;t instanceof Node&&[...a].some(e=>e.contains(t))||u.current.set(e.type,!0),e.type===`click`&&window.setTimeout(()=>{l.current&&d.current()},0)}Js(f,`handleInteractionCapture`);function p(e){l.current&&u.current.set(e.type,!1)}Js(p,`handleInteractionBubble`);let m=Js(a=>{if(a.target&&!c.current){let f=function(){n.removeEventListener(`click`,d.current);let r=t();e(),r||oc(Xs,s,p,{discrete:!0})};if(Js(f,`handleAndDispatchPointerDownOutsideEvent`),!o(a.target)){n.removeEventListener(`click`,d.current),e(),c.current=!1;return}let p={originalEvent:a};l.current=!0,i.current=r&&a.button===0,u.current.clear(),!r||a.button!==0?f():(n.removeEventListener(`click`,d.current),d.current=f,n.addEventListener(`click`,d.current,{once:!0}))}else n.removeEventListener(`click`,d.current),e();c.current=!1},`handlePointerDown`),h=[`pointerup`,`mousedown`,`mouseup`,`touchstart`,`touchend`,`click`];for(let e of h)n.addEventListener(e,f,!0),n.addEventListener(e,p);let g=window.setTimeout(()=>{n.addEventListener(`pointerdown`,m)},0);return()=>{window.clearTimeout(g),n.removeEventListener(`pointerdown`,m),n.removeEventListener(`click`,d.current);for(let e of h)n.removeEventListener(e,f,!0),n.removeEventListener(e,p)}},[n,s,r,i,a,o]),{onPointerDownCapture:Js(()=>c.current=!0,`onPointerDownCapture`)}}Js(rc,`usePointerDownOutside`);function ic(e,t=globalThis?.document){let n=Ks(e),r=x.useRef(!1);return x.useEffect(()=>{let e=Js(e=>{e.target&&!r.current&&oc(Zs,n,{originalEvent:e},{discrete:!1})},`handleFocus`);return t.addEventListener(`focusin`,e),()=>t.removeEventListener(`focusin`,e)},[t,n]),{onFocusCapture:Js(()=>r.current=!0,`onFocusCapture`),onBlurCapture:Js(()=>r.current=!1,`onBlurCapture`)}}Js(ic,`useFocusOutside`);function ac(){let e=new CustomEvent(Ys);document.dispatchEvent(e)}Js(ac,`dispatchUpdate`);function oc(e,t,n,{discrete:r}){let i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?Vo(i,a):i.dispatchEvent(a)}Js(oc,`handleAndDispatchCustomEvent`);var sc=Object.defineProperty,cc=(e,t)=>sc(e,`name`,{value:t,configurable:!0}),lc=0,uc=null;function dc(e){return fc(),e.children}cc(dc,`FocusGuards`);function fc(){x.useEffect(()=>{uc||={start:pc(),end:pc()};let{start:e,end:t}=uc;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement(`afterbegin`,e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement(`beforeend`,t),lc++,()=>{lc===1&&(uc?.start.remove(),uc?.end.remove(),uc=null),lc=Math.max(0,lc-1)}},[])}cc(fc,`useFocusGuards`);function pc(){let e=document.createElement(`span`);return e.setAttribute(`data-radix-focus-guard`,``),e.tabIndex=0,e.style.outline=`none`,e.style.opacity=`0`,e.style.position=`fixed`,e.style.pointerEvents=`none`,e}cc(pc,`createFocusGuard`);var mc=Object.defineProperty,hc=(e,t)=>mc(e,`name`,{value:t,configurable:!0}),gc=`focusScope.autoFocusOnMount`,_c=`focusScope.autoFocusOnUnmount`,vc={bubbles:!1,cancelable:!0},yc=x.forwardRef(hc(function(e,t){let{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:a,...o}=e,[s,c]=x.useState(null),l=Ks(i),u=Ks(a),d=x.useRef(null),f=qa(t,c),p=x.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;x.useEffect(()=>{if(r){let e=function(e){if(p.paused||!s)return;let t=e.target;s.contains(t)?d.current=t:Ec(d.current,{select:!0})},t=function(e){if(p.paused||!s)return;let t=e.relatedTarget;t!==null&&(s.contains(t)||Ec(d.current,{select:!0}))},n=function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&Ec(s)};hc(e,`handleFocusIn`),hc(t,`handleFocusOut`),hc(n,`handleMutations`),document.addEventListener(`focusin`,e),document.addEventListener(`focusout`,t);let r=new MutationObserver(n);return s&&r.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener(`focusin`,e),document.removeEventListener(`focusout`,t),r.disconnect()}}},[r,s,p.paused]),x.useEffect(()=>{if(s){Dc.add(p);let e=document.activeElement;if(!s.contains(e)){let t=new CustomEvent(gc,vc);s.addEventListener(gc,l),s.dispatchEvent(t),t.defaultPrevented||(bc(Ac(Sc(s)),{select:!0}),document.activeElement===e&&Ec(s))}return()=>{s.removeEventListener(gc,l),setTimeout(()=>{let t=new CustomEvent(_c,vc);s.addEventListener(_c,u),s.dispatchEvent(t),t.defaultPrevented||Ec(e??document.body,{select:!0}),s.removeEventListener(_c,u),Dc.remove(p)},0)}}},[s,l,u,p]);let m=x.useCallback(e=>{if(!n&&!r||p.paused)return;let t=e.key===`Tab`&&!e.altKey&&!e.ctrlKey&&!e.metaKey,i=document.activeElement;if(t&&i){let t=e.currentTarget,[r,a]=xc(t);r&&a?!e.shiftKey&&i===a?(e.preventDefault(),n&&Ec(r,{select:!0})):e.shiftKey&&i===r&&(e.preventDefault(),n&&Ec(a,{select:!0})):i===t&&e.preventDefault()}},[n,r,p.paused]);return(0,U.jsx)(Bo.div,{tabIndex:-1,...o,ref:f,onKeyDown:m})},`FocusScope`));function bc(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(Ec(r,{select:t}),document.activeElement!==n)return}hc(bc,`focusFirst`);function xc(e){let t=Sc(e);return[Cc(t,e),Cc(t.reverse(),e)]}hc(xc,`getTabbableEdges`);function Sc(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:hc(e=>{let t=e.tagName===`INPUT`&&e.type===`hidden`;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},`acceptNode`)});for(;n.nextNode();)t.push(n.currentNode);return t}hc(Sc,`getTabbableCandidates`);function Cc(e,t){let n=typeof t.checkVisibility==`function`&&t.checkVisibility({checkVisibilityCSS:!0});for(let r of e)if(!(n?!r.checkVisibility({checkVisibilityCSS:!0}):wc(r,{upTo:t})))return r}hc(Cc,`findVisible`);function wc(e,{upTo:t}){if(getComputedStyle(e).visibility===`hidden`)return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display===`none`)return!0;e=e.parentElement}return!1}hc(wc,`isHidden`);function Tc(e){return e instanceof HTMLInputElement&&`select`in e}hc(Tc,`isSelectableInput`);function Ec(e,{select:t=!1}={}){if(e&&e.focus){let n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Tc(e)&&t&&e.select()}}hc(Ec,`focus`);var Dc=Oc();function Oc(){let e=[];return{add(t){let n=e[0];t!==n&&n?.pause(),e=kc(e,t),e.unshift(t)},remove(t){e=kc(e,t),e[0]?.resume()}}}hc(Oc,`createFocusScopesStack`);function kc(e,t){let n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}hc(kc,`arrayRemove`);function Ac(e){return e.filter(e=>e.tagName!==`A`)}hc(Ac,`removeLinks`);var jc=Object.defineProperty,Mc=(e,t)=>jc(e,`name`,{value:t,configurable:!0}),Nc=x.useId||(()=>void 0),Pc=0;function Fc(e){let[t,n]=x.useState(Nc());return $a(()=>{e||n(e=>e??String(Pc++))},[e]),e||(t?`radix-${t}`:``)}Mc(Fc,`useId`);var Ic=[`top`,`right`,`bottom`,`left`],Lc=Math.min,Rc=Math.max,zc=Math.round,Bc=Math.floor,Vc=e=>({x:e,y:e}),Hc={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Uc(e,t,n){return Rc(e,Lc(t,n))}function Wc(e,t){return typeof e==`function`?e(t):e}function Gc(e){return e.split(`-`)[0]}function Kc(e){return e.split(`-`)[1]}function qc(e){return e===`x`?`y`:`x`}function Jc(e){return e===`y`?`height`:`width`}function Yc(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Xc(e){return qc(Yc(e))}function Zc(e,t,n){n===void 0&&(n=!1);let r=Kc(e),i=Xc(e),a=Jc(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=ol(o)),[o,ol(o)]}function Qc(e){let t=ol(e);return[$c(e),t,$c(t)]}function $c(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var el=[`left`,`right`],tl=[`right`,`left`],nl=[`top`,`bottom`],rl=[`bottom`,`top`];function il(e,t,n){switch(e){case`top`:case`bottom`:return n?t?tl:el:t?el:tl;case`left`:case`right`:return t?nl:rl;default:return[]}}function al(e,t,n,r){let i=Kc(e),a=il(Gc(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map($c)))),a}function ol(e){let t=Gc(e);return Hc[t]+e.slice(t.length)}function sl(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function cl(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:sl(e)}function ll(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function ul(e,t,n){let{reference:r,floating:i}=e,a=Yc(t),o=Xc(t),s=Jc(o),c=Gc(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Kc(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function dl(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Wc(t,e),p=cl(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=ll(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=ll(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var fl=50,pl=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:dl},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=ul(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<fl&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=ul(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},ml=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Wc(e,t)||{};if(l==null)return{};let d=cl(u),f={x:n,y:r},p=Xc(i),m=Jc(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;(!C||!await(o.isElement==null?void 0:o.isElement(S)))&&(C=s.floating[y]||a.floating[m]);let w=b/2-x/2,T=C/2-h[m]/2-1,E=Lc(d[_],T),D=Lc(d[v],T),O=C-h[m]-D,k=C/2-h[m]/2+w,A=Uc(E,k,O),j=!c.arrow&&Kc(i)!=null&&k!==A&&a.reference[m]/2-(k<E?E:D)-h[m]/2<0,ee=j?k<E?k-E:k-O:0;return{[p]:f[p]+ee,data:{[p]:A,centerOffset:k-A-ee,...j&&{alignmentOffset:ee}},reset:j}}}),hl=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Wc(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Gc(r),_=Yc(o),v=Gc(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[ol(o)]:Qc(o)),x=p!==`none`;!d&&x&&b.push(...al(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Zc(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===Yc(t)||T.every(e=>Yc(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Yc(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}};function gl(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function _l(e){return Ic.some(t=>e[t]>=0)}var vl=function(e){return e===void 0&&(e={}),{name:`hide`,options:e,async fn(t){let{rects:n,platform:r}=t,{strategy:i=`referenceHidden`,...a}=Wc(e,t);switch(i){case`referenceHidden`:{let e=gl(await r.detectOverflow(t,{...a,elementContext:`reference`}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:_l(e)}}}case`escaped`:{let e=gl(await r.detectOverflow(t,{...a,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:_l(e)}}}default:return{}}}}},yl=new Set([`left`,`top`]);async function bl(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Gc(n),s=Kc(n),c=Yc(n)===`y`,l=yl.has(o)?-1:1,u=a&&c?-1:1,d=Wc(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var xl=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await bl(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Sl=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Wc(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Yc(i),p=qc(f),m=u[p],h=u[f],g=(e,t)=>Uc(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},Cl=function(e){return e===void 0&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:i,rects:a,middlewareData:o}=t,{offset:s=0,mainAxis:c=!0,crossAxis:l=!0}=Wc(e,t),u={x:n,y:r},d=Yc(i),f=qc(d),p=u[f],m=u[d],h=Wc(s,t),g=typeof h==`number`?{mainAxis:h,crossAxis:0}:{mainAxis:h.mainAxis??0,crossAxis:h.crossAxis??0};if(c){let e=f===`y`?`height`:`width`,t=a.reference[f]-a.floating[e]+g.mainAxis,n=a.reference[f]+a.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(l){let e=f===`y`?`width`:`height`,t=yl.has(Gc(i)),n=a.reference[d]-a.floating[e]+(t&&o.offset?.[d]||0)+(t?0:g.crossAxis),r=a.reference[d]+a.reference[e]+(t?0:o.offset?.[d]||0)-(t?g.crossAxis:0);m<n?m=n:m>r&&(m=r)}return{[f]:p,[d]:m}}}},wl=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Wc(e,t),c=await i.detectOverflow(t,s),l=Gc(n),u=Kc(n),d=Yc(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=Lc(p-c[m],g),y=Lc(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*Rc(c.left,c.right):S=p-2*Rc(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}};function Tl(){return typeof window<`u`}function El(e){return kl(e)?(e.nodeName||``).toLowerCase():`#document`}function Dl(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ol(e){return((kl(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function kl(e){return Tl()?e instanceof Node||e instanceof Dl(e).Node:!1}function Al(e){return Tl()?e instanceof Element||e instanceof Dl(e).Element:!1}function jl(e){return Tl()?e instanceof HTMLElement||e instanceof Dl(e).HTMLElement:!1}function Ml(e){return!Tl()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Dl(e).ShadowRoot}function Nl(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Bl(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Pl(e){return/^(table|td|th)$/.test(El(e))}function Fl(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Il=/transform|translate|scale|rotate|perspective|filter/,Ll=/paint|layout|strict|content/,q=e=>!!e&&e!==`none`,Rl;function J(e){let t=Al(e)?Bl(e):e;return q(t.transform)||q(t.translate)||q(t.scale)||q(t.rotate)||q(t.perspective)||!X()&&(q(t.backdropFilter)||q(t.filter))||Il.test(t.willChange||``)||Ll.test(t.contain||``)}function Y(e){let t=Hl(e);for(;jl(t)&&!zl(t);){if(J(t))return t;if(Fl(t))return null;t=Hl(t)}return null}function X(){return Rl??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Rl}function zl(e){return/^(html|body|#document)$/.test(El(e))}function Bl(e){return Dl(e).getComputedStyle(e)}function Vl(e){return Al(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Hl(e){if(El(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Ml(e)&&e.host||Ol(e);return Ml(t)?t.host:t}function Ul(e){let t=Hl(e);return zl(t)?(e.ownerDocument||e).body:jl(t)&&Nl(t)?t:Ul(t)}function Wl(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Ul(e),i=r===e.ownerDocument?.body,a=Dl(r);if(i){let e=Gl(a);return t.concat(a,a.visualViewport||[],Nl(r)?r:[],e&&n?Wl(e):[])}return t.concat(r,Wl(r,[],n))}function Gl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Kl(e){let t=Bl(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=jl(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=zc(n)!==a||zc(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function ql(e){return Al(e)?e:e.contextElement}function Jl(e){let t=ql(e);if(!jl(t))return Vc(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Kl(t),o=(a?zc(n.width):n.width)/r,s=(a?zc(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var Yl=Vc(0);function Xl(e){let t=Dl(e);return!X()||!t.visualViewport?Yl:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Zl(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===Dl(e)}function Ql(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=ql(e),o=Vc(1);t&&(r?Al(r)&&(o=Jl(r)):o=Jl(e));let s=Zl(a,n,r)?Xl(a):Vc(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=Dl(a),t=Al(r)?Dl(r):r,n=e,i=Gl(n);for(;i&&t!==n;){let e=Jl(i),t=i.getBoundingClientRect(),r=Bl(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Dl(i),i=Gl(n)}}return ll({width:u,height:d,x:c,y:l})}function $l(e,t){let n=Vl(e).scrollLeft;return t?t.left+n:Ql(Ol(e)).left+n}function eu(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-$l(e,n),y:n.top+t.scrollTop}}function tu(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Ol(r),s=t?Fl(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Vc(1),u=Vc(0),d=jl(r);if((d||!a)&&((El(r)!==`body`||Nl(o))&&(c=Vl(r)),d)){let e=Ql(r);l=Jl(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?eu(o,c):Vc(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function nu(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function ru(e){let t=Vl(e),n=e.ownerDocument.body,r=Rc(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=Rc(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+$l(e),o=-t.scrollTop;return Bl(n).direction===`rtl`&&(a+=Rc(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var iu=25;function au(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=Dl(e),a=Ol(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!X()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if($l(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=iu&&(s-=o)}return{width:s,height:c,x:l,y:u}}function ou(e,t){let n=Ql(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Jl(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function su(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=au(e,n,t);else if(t===`document`)r=ru(Ol(e));else if(Al(t))r=ou(t,n);else{let n=Xl(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return ll(r)}function cu(e,t){let n=t.get(e);if(n)return n;let r=Wl(e,[],!1).filter(e=>Al(e)&&El(e)!==`body`),i=null,a=Bl(e).position===`fixed`,o=a?Hl(e):e;for(;Al(o)&&!zl(o);){let e=Bl(o),t=J(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Hl(o)}return t.set(e,r),r}function lu(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Fl(t)?[]:cu(t,this._c):[].concat(n),r],o=su(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=su(t,a[e],i);s=Rc(n.top,s),c=Lc(n.right,c),l=Lc(n.bottom,l),u=Rc(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function uu(e){let{width:t,height:n}=Kl(e);return{width:t,height:n}}function du(e,t,n){let r=jl(t),i=Ol(t),a=n===`fixed`,o=Ql(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Vc(0);if((r||!a)&&((El(t)!==`body`||Nl(i))&&(s=Vl(t)),r)){let e=Ql(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=$l(i));let l=i&&!r&&!a?eu(i,s):Vc(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function fu(e){return Bl(e).position===`static`}function pu(e,t){if(!jl(e)||Bl(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Ol(e)===n&&(n=n.ownerDocument.body),n}function mu(e,t){let n=Dl(e);if(Fl(e))return n;if(!jl(e)){let t=Hl(e);for(;t&&!zl(t);){if(Al(t)&&!fu(t))return t;t=Hl(t)}return n}let r=pu(e,t);for(;r&&Pl(r)&&fu(r);)r=pu(r,t);return r&&zl(r)&&fu(r)&&!J(r)?n:r||Y(e)||n}var hu=async function(e){let t=this.getOffsetParent||mu,n=this.getDimensions,r=await n(e.floating);return{reference:du(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function gu(e){return Bl(e).direction===`rtl`}var _u={convertOffsetParentRelativeRectToViewportRelativeRect:tu,getDocumentElement:Ol,getClippingRect:lu,getOffsetParent:mu,getElementRects:hu,getClientRects:nu,getDimensions:uu,getScale:Jl,isElement:Al,isRTL:gu};function vu(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function yu(e,t,n){let r=null,i,a=Ol(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Bc(d),h=Bc(a.clientWidth-(u+f)),g=Bc(a.clientHeight-(d+p)),_=Bc(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Rc(0,Lc(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!vu(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=Dl(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function bu(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=ql(e),u=i||a?[...l?Wl(l):[],...t?Wl(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?yu(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?Ql(e):null;c&&g();function g(){let t=Ql(e);h&&!vu(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var xu=xl,Su=Sl,Cu=hl,wu=wl,Tu=vl,Eu=ml,Du=Cl,Ou=(e,t,n)=>{let r=new Map,i=n??{},a={..._u,...i.platform,_c:r};return pl(e,t,{...i,platform:a})},ku=typeof document<`u`?x.useLayoutEffect:function(){};function Au(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e==`function`&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e==`object`){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Au(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){let n=i[r];if(!(n===`_owner`&&e.$$typeof)&&!Au(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function ju(e){return typeof window>`u`?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Mu(e,t){let n=ju(e);return Math.round(t*n)/n}function Nu(e){let t=x.useRef(e);return ku(()=>{t.current=e}),t}function Pu(e){e===void 0&&(e={});let{placement:t=`bottom`,strategy:n=`absolute`,middleware:r=[],platform:i,elements:{reference:a,floating:o}={},transform:s=!0,whileElementsMounted:c,open:l}=e,[u,d]=x.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=x.useState(r);Au(f,r)||p(r);let[m,h]=x.useState(null),[g,_]=x.useState(null),v=x.useCallback(e=>{e!==C.current&&(C.current=e,h(e))},[]),y=x.useCallback(e=>{e!==w.current&&(w.current=e,_(e))},[]),b=a||m,S=o||g,C=x.useRef(null),w=x.useRef(null),T=x.useRef(u),E=c!=null,D=Nu(c),O=Nu(i),k=Nu(l),A=x.useCallback(()=>{if(!C.current||!w.current)return;let e={placement:t,strategy:n,middleware:f};O.current&&(e.platform=O.current),Ou(C.current,w.current,e).then(e=>{let t={...e,isPositioned:k.current!==!1};j.current&&!Au(T.current,t)&&(T.current=t,So.flushSync(()=>{d(t)}))})},[f,t,n,O,k]);ku(()=>{l===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[l]);let j=x.useRef(!1);ku(()=>(j.current=!0,()=>{j.current=!1}),[]),ku(()=>{if(b&&(C.current=b),S&&(w.current=S),b&&S){if(D.current)return D.current(b,S,A);A()}},[b,S,A,D,E]);let ee=x.useMemo(()=>({reference:C,floating:w,setReference:v,setFloating:y}),[v,y]),te=x.useMemo(()=>({reference:b,floating:S}),[b,S]),ne=x.useMemo(()=>{let e={position:n,left:0,top:0};if(!te.floating)return e;let t=Mu(te.floating,u.x),r=Mu(te.floating,u.y);return s?{...e,transform:`translate(`+t+`px, `+r+`px)`,...ju(te.floating)>=1.5&&{willChange:`transform`}}:{position:n,left:t,top:r}},[n,s,te.floating,u.x,u.y]);return x.useMemo(()=>({...u,update:A,refs:ee,elements:te,floatingStyles:ne}),[u,A,ee,te,ne])}var Fu=e=>{function t(e){return{}.hasOwnProperty.call(e,`current`)}return{name:`arrow`,options:e,fn(n){let{element:r,padding:i}=typeof e==`function`?e(n):e;return r&&t(r)?r.current==null?{}:Eu({element:r.current,padding:i}).fn(n):r?Eu({element:r,padding:i}).fn(n):{}}}},Iu=(e,t)=>{let n=xu(e);return{name:n.name,fn:n.fn,options:[e,t]}},Lu=(e,t)=>{let n=Su(e);return{name:n.name,fn:n.fn,options:[e,t]}},Ru=(e,t)=>({fn:Du(e).fn,options:[e,t]}),zu=(e,t)=>{let n=Cu(e);return{name:n.name,fn:n.fn,options:[e,t]}},Bu=(e,t)=>{let n=wu(e);return{name:n.name,fn:n.fn,options:[e,t]}},Vu=(e,t)=>{let n=Tu(e);return{name:n.name,fn:n.fn,options:[e,t]}},Hu=(e,t)=>{let n=Fu(e);return{name:n.name,fn:n.fn,options:[e,t]}},Uu=Object.defineProperty,Wu=(e,t)=>Uu(e,`name`,{value:t,configurable:!0}),Z=`Popper`,[Gu,Ku]=Za(Z),[qu,Ju]=Gu(Z),Yu=Wu(e=>{let{__scopePopper:t,children:n}=e,[r,i]=x.useState(null),[a,o]=x.useState(void 0);return(0,U.jsx)(qu,{scope:t,anchor:r,onAnchorChange:i,placementState:a,setPlacementState:o,children:n})},`Popper`),Xu=`PopperAnchor`,Zu=x.forwardRef(Wu(function(e,t){let{__scopePopper:n,virtualRef:r,...i}=e,a=Ju(Xu,n),o=x.useRef(null),s=a.onAnchorChange,c=qa(t,x.useCallback(e=>{o.current=e,e&&s(e)},[s])),l=x.useRef(null);x.useEffect(()=>{if(!r)return;let e=l.current;l.current=r.current,e!==l.current&&s(l.current)});let u=a.placementState&&id(a.placementState),d=u?.[0],f=u?.[1];return r?null:(0,U.jsx)(Bo.div,{"data-radix-popper-side":d,"data-radix-popper-align":f,...i,ref:c})},`PopperAnchor`)),Qu=`PopperContent`,[$u,ed]=Gu(Qu),td=x.forwardRef(Wu(function(e,t){let{__scopePopper:n,side:r=`bottom`,sideOffset:i=0,align:a=`center`,alignOffset:o=0,arrowPadding:s=0,avoidCollisions:c=!0,collisionBoundary:l=[],collisionPadding:u=0,sticky:d=`partial`,hideWhenDetached:f=!1,updatePositionStrategy:p=`optimized`,onPlaced:m,...h}=e,g=Ju(Qu,n),[_,v]=x.useState(null),y=qa(t,v),[b,S]=x.useState(null),C=xo(b),w=C?.width??0,T=C?.height??0,E=r+(a===`center`?``:`-`+a),D=typeof u==`number`?u:{top:0,right:0,bottom:0,left:0,...u},O=Array.isArray(l)?l:[l],k=O.length>0,A={padding:D,boundary:O.filter(nd),altBoundary:k},{refs:j,floatingStyles:ee,placement:te,isPositioned:ne,middlewareData:re}=Pu({strategy:`fixed`,placement:E,whileElementsMounted:Wu((...e)=>bu(...e,{animationFrame:p===`always`}),`whileElementsMounted`),elements:{reference:g.anchor},middleware:[Iu({mainAxis:i+T,alignmentAxis:o}),c&&Lu({mainAxis:!0,crossAxis:!1,limiter:d===`partial`?Ru():void 0,...A}),c&&zu({...A}),Bu({...A,apply:Wu(({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:i,height:a}=t.reference,o=e.floating.style;o.setProperty(`--radix-popper-available-width`,`${n}px`),o.setProperty(`--radix-popper-available-height`,`${r}px`),o.setProperty(`--radix-popper-anchor-width`,`${i}px`),o.setProperty(`--radix-popper-anchor-height`,`${a}px`)},`apply`)}),b&&Hu({element:b,padding:s}),rd({arrowWidth:w,arrowHeight:T}),f&&Vu({strategy:`referenceHidden`,...A,boundary:k?A.boundary:void 0})]}),M=g.setPlacementState;$a(()=>(M(te),()=>{M(void 0)}),[te,M]);let[N,ie]=id(te),ae=Ks(m);$a(()=>{ne&&ae?.()},[ne,ae]);let P=re.arrow?.x,oe=re.arrow?.y,se=re.arrow?.centerOffset!==0,[F,ce]=x.useState();return $a(()=>{_&&ce(window.getComputedStyle(_).zIndex)},[_]),(0,U.jsx)(`div`,{ref:j.setFloating,"data-radix-popper-content-wrapper":``,style:{...ee,transform:ne?ee.transform:`translate(0, -200%)`,minWidth:`max-content`,zIndex:F,"--radix-popper-transform-origin":[re.transformOrigin?.x,re.transformOrigin?.y].join(` `),...re.hide?.referenceHidden&&{visibility:`hidden`,pointerEvents:`none`}},dir:e.dir,children:(0,U.jsx)($u,{scope:n,placedSide:N,placedAlign:ie,onArrowChange:S,arrowX:P,arrowY:oe,shouldHideArrow:se,children:(0,U.jsx)(Bo.div,{"data-side":N,"data-align":ie,...h,ref:y,style:{...h.style,animation:ne?h.style?.animation:`none`}})})})},`PopperContent`));function nd(e){return e!==null}Wu(nd,`isNotNull`);var rd=Wu(e=>({name:`transformOrigin`,options:e,fn(t){let{placement:n,rects:r,middlewareData:i}=t,a=i.arrow?.centerOffset!==0,o=a?0:e.arrowWidth,s=a?0:e.arrowHeight,[c,l]=id(n),u={start:`0%`,center:`50%`,end:`100%`}[l],d=(i.arrow?.x??0)+o/2,f=(i.arrow?.y??0)+s/2,p=``,m=``;return c===`bottom`?(p=a?u:`${d}px`,m=`${-s}px`):c===`top`?(p=a?u:`${d}px`,m=`${r.floating.height+s}px`):c===`right`?(p=`${-s}px`,m=a?u:`${f}px`):c===`left`&&(p=`${r.floating.width+s}px`,m=a?u:`${f}px`),{data:{x:p,y:m}}}}),`transformOrigin`);function id(e){let[t,n=`center`]=e.split(`-`);return[t,n]}Wu(id,`getSideAndAlignFromPlacement`);var ad=Yu,od=Zu,sd=td,cd=Object.defineProperty,ld=x.forwardRef(((e,t)=>cd(e,`name`,{value:t,configurable:!0}))(function(e,t){let{container:n,...r}=e,[i,a]=x.useState(!1);$a(()=>a(!0),[]);let o=n||i&&globalThis?.document?.body;return o?So.createPortal((0,U.jsx)(Bo.div,{...r,ref:t}),o):null},`Portal`)),ud=Object.defineProperty,dd=(e,t)=>ud(e,`name`,{value:t,configurable:!0});function fd(e,t){return x.useReducer((e,n)=>t[e][n]??e,e)}dd(fd,`useStateMachine`);var pd=dd(e=>{let{present:t,children:n}=e,r=md(t),i=typeof n==`function`?n({present:r.isPresent}):x.Children.only(n),a=gd(r.ref,vd(i));return typeof n==`function`||r.isPresent?x.cloneElement(i,{ref:a}):null},`Presence`);function md(e){let[t,n]=x.useState(),r=x.useRef(null),i=x.useRef(e),a=x.useRef(`none`),o=x.useRef(void 0),[s,c]=fd(e?`mounted`:`unmounted`,{mounted:{UNMOUNT:`unmounted`,ANIMATION_OUT:`unmountSuspended`},unmountSuspended:{MOUNT:`mounted`,ANIMATION_END:`unmounted`},unmounted:{MOUNT:`mounted`}});return x.useEffect(()=>{s===`mounted`?(a.current=o.current??_d(r.current),o.current=void 0):a.current=`none`},[s]),$a(()=>{let t=r.current,n=i.current;if(n!==e){let r=a.current,s=_d(t);e?(o.current=s,c(`MOUNT`)):s===`none`||t?.display===`none`?c(`UNMOUNT`):c(n&&r!==s?`ANIMATION_OUT`:`UNMOUNT`),i.current=e}},[e,c]),$a(()=>{if(t){let e,n=t.ownerDocument.defaultView??window,o=dd(a=>{let o=_d(r.current).includes(CSS.escape(a.animationName));if(a.target===t&&o&&(c(`ANIMATION_END`),!i.current)){let r=t.style.animationFillMode;t.style.animationFillMode=`forwards`,e=n.setTimeout(()=>{t.style.animationFillMode===`forwards`&&(t.style.animationFillMode=r)})}},`handleAnimationEnd`),s=dd(e=>{e.target===t&&(a.current=_d(r.current))},`handleAnimationStart`);return t.addEventListener(`animationstart`,s),t.addEventListener(`animationcancel`,o),t.addEventListener(`animationend`,o),()=>{n.clearTimeout(e),t.removeEventListener(`animationstart`,s),t.removeEventListener(`animationcancel`,o),t.removeEventListener(`animationend`,o)}}c(`ANIMATION_END`)},[t,c]),{isPresent:[`mounted`,`unmountSuspended`].includes(s),ref:x.useCallback(e=>{if(e){let t=getComputedStyle(e);r.current=t,o.current=_d(t)}else r.current=null;n(e)},[])}}dd(md,`usePresence`);function hd(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}dd(hd,`setRef`);function gd(...e){let t=x.useRef(e);return t.current=e,x.useCallback(e=>{let n=t.current,r=!1,i=n.map(t=>{let n=hd(t,e);return!r&&typeof n==`function`&&(r=!0),n});if(r)return()=>{for(let e=0;e<i.length;e++){let t=i[e];typeof t==`function`?t():hd(n[e],null)}}},[])}dd(gd,`useStableComposedRefs`);function _d(e){return e?.animationName||`none`}dd(_d,`getAnimationName`);function vd(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}dd(vd,`getElementRef`);var yd=Object.freeze({position:`absolute`,border:0,width:1,height:1,padding:0,margin:-1,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,whiteSpace:`nowrap`,wordWrap:`normal`}),Q=function(e){return typeof document>`u`?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},bd=new WeakMap,xd=new WeakMap,Sd={},Cd=0,wd=function(e){return e&&(e.host||wd(e.parentNode))},Td=function(e,t){return t.map(function(t){if(e.contains(t))return t;var n=wd(t);return n&&e.contains(n)?n:(console.error(`aria-hidden`,t,`in not contained inside`,e,`. Doing nothing`),null)}).filter(function(e){return!!e})},Ed=function(e,t,n,r){var i=Td(t,Array.isArray(e)?e:[e]);Sd[n]||(Sd[n]=new WeakMap);var a=Sd[n],o=[],s=new Set,c=new Set(i),l=function(e){e&&!s.has(e)&&(s.add(e),l(e.parentNode))};i.forEach(l);var u=function(e){e&&!c.has(e)&&Array.prototype.forEach.call(e.children,function(e){if(s.has(e))u(e);else try{var t=e.getAttribute(r),i=t!==null&&t!==`false`,c=(bd.get(e)||0)+1,l=(a.get(e)||0)+1;bd.set(e,c),a.set(e,l),o.push(e),c===1&&i&&xd.set(e,!0),l===1&&e.setAttribute(n,`true`),i||e.setAttribute(r,`true`)}catch(t){console.error(`aria-hidden: cannot operate on `,e,t)}})};return u(t),s.clear(),Cd++,function(){o.forEach(function(e){var t=bd.get(e)-1,i=a.get(e)-1;bd.set(e,t),a.set(e,i),t||(xd.has(e)||e.removeAttribute(r),xd.delete(e)),i||e.removeAttribute(n)}),Cd--,Cd||(bd=new WeakMap,bd=new WeakMap,xd=new WeakMap,Sd={})}},Dd=function(e,t,n){n===void 0&&(n=`data-aria-hidden`);var r=Array.from(Array.isArray(e)?e:[e]),i=t||Q(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll(`[aria-live], script`))),Ed(r,i,n,`aria-hidden`)):function(){return null}},Od=function(){return Od=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Od.apply(this,arguments)};function kd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ad(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var jd=`right-scroll-bar-position`,Md=`width-before-scroll-bar`,Nd=`with-scroll-bars-hidden`,Pd=`--removed-body-scroll-bar-size`;function Fd(e,t){return typeof e==`function`?e(t):e&&(e.current=t),e}function Id(e,t){var n=(0,x.useState)(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(e){var t=n.value;t!==e&&(n.value=e,n.callback(e,t))}}}})[0];return n.callback=t,n.facade}var Ld=typeof window<`u`?x.useLayoutEffect:x.useEffect,Rd=new WeakMap;function zd(e,t){var n=Id(t||null,function(t){return e.forEach(function(e){return Fd(e,t)})});return Ld(function(){var t=Rd.get(n);if(t){var r=new Set(t),i=new Set(e),a=n.current;r.forEach(function(e){i.has(e)||Fd(e,null)}),i.forEach(function(e){r.has(e)||Fd(e,a)})}Rd.set(n,e)},[e]),n}function Bd(e){return e}function Vd(e,t){t===void 0&&(t=Bd);var n=[],r=!1;return{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(e){var i=t(e,r);return n.push(i),function(){n=n.filter(function(e){return e!==i})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var i=n;n=[],i.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(a)};o(),n={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),n}}}}}function Hd(e){e===void 0&&(e={});var t=Vd(null);return t.options=Od({async:!0,ssr:!1},e),t}var Ud=function(e){var t=e.sideCar,n=kd(e,[`sideCar`]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error(`Sidecar medium not found`);return x.createElement(r,Od({},n))};Ud.isSideCarExport=!0;function Wd(e,t){return e.useMedium(t),Ud}var Gd=Hd(),Kd=function(){},qd=x.forwardRef(function(e,t){var n=x.useRef(null),r=x.useState({onScrollCapture:Kd,onWheelCapture:Kd,onTouchMoveCapture:Kd}),i=r[0],a=r[1],o=e.forwardProps,s=e.children,c=e.className,l=e.removeScrollBar,u=e.enabled,d=e.shards,f=e.sideCar,p=e.noRelative,m=e.noIsolation,h=e.inert,g=e.allowPinchZoom,_=e.as,v=_===void 0?`div`:_,y=e.gapMode,b=kd(e,[`forwardProps`,`children`,`className`,`removeScrollBar`,`enabled`,`shards`,`sideCar`,`noRelative`,`noIsolation`,`inert`,`allowPinchZoom`,`as`,`gapMode`]),S=f,C=zd([n,t]),w=Od(Od({},b),i);return x.createElement(x.Fragment,null,u&&x.createElement(S,{sideCar:Gd,removeScrollBar:l,shards:d,noRelative:p,noIsolation:m,inert:h,setCallbacks:a,allowPinchZoom:!!g,lockRef:n,gapMode:y}),o?x.cloneElement(x.Children.only(s),Od(Od({},w),{ref:C})):x.createElement(v,Od({},w,{className:c,ref:C}),s))});qd.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},qd.classNames={fullWidth:Md,zeroRight:jd};var Jd=function(){if(typeof __webpack_nonce__<`u`)return __webpack_nonce__};function Yd(){if(!document)return null;var e=document.createElement(`style`);e.type=`text/css`;var t=Jd();return t&&e.setAttribute(`nonce`,t),e}function Xd(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Zd(e){(document.head||document.getElementsByTagName(`head`)[0]).appendChild(e)}var Qd=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Yd())&&(Xd(t,n),Zd(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},$d=function(){var e=Qd();return function(t,n){x.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},ef=function(){var e=$d();return function(t){var n=t.styles,r=t.dynamic;return e(n,r),null}},tf={left:0,top:0,right:0,gap:0},nf=function(e){return parseInt(e||``,10)||0},rf=function(e){var t=window.getComputedStyle(document.body),n=t[e===`padding`?`paddingLeft`:`marginLeft`],r=t[e===`padding`?`paddingTop`:`marginTop`],i=t[e===`padding`?`paddingRight`:`marginRight`];return[nf(n),nf(r),nf(i)]},af=function(e){if(e===void 0&&(e=`margin`),typeof window>`u`)return tf;var t=rf(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},of=ef(),sf=`data-scroll-locked`,cf=function(e,t,n,r){var i=e.left,a=e.top,o=e.right,s=e.gap;return n===void 0&&(n=`margin`),`
  .${Nd} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${sf}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[t&&`position: relative ${r};`,n===`margin`&&`
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,n===`padding`&&`padding-right: ${s}px ${r};`].filter(Boolean).join(``)}
  }
  
  .${jd} {
    right: ${s}px ${r};
  }
  
  .${Md} {
    margin-right: ${s}px ${r};
  }
  
  .${jd} .${jd} {
    right: 0 ${r};
  }
  
  .${Md} .${Md} {
    margin-right: 0 ${r};
  }
  
  body[${sf}] {
    ${Pd}: ${s}px;
  }
`},lf=function(){var e=parseInt(document.body.getAttribute(`data-scroll-locked`)||`0`,10);return isFinite(e)?e:0},uf=function(){x.useEffect(function(){return document.body.setAttribute(sf,(lf()+1).toString()),function(){var e=lf()-1;e<=0?document.body.removeAttribute(sf):document.body.setAttribute(sf,e.toString())}},[])},df=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?`margin`:r;uf();var a=x.useMemo(function(){return af(i)},[i]);return x.createElement(of,{styles:cf(a,!t,i,n?``:`!important`)})},ff=!1;if(typeof window<`u`)try{var pf=Object.defineProperty({},"passive",{get:function(){return ff=!0,!0}});window.addEventListener(`test`,pf,pf),window.removeEventListener(`test`,pf,pf)}catch{ff=!1}var mf=ff?{passive:!1}:!1,hf=function(e){return e.tagName===`TEXTAREA`},gf=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!==`hidden`&&!(n.overflowY===n.overflowX&&!hf(e)&&n[t]===`visible`)},_f=function(e){return gf(e,`overflowY`)},vf=function(e){return gf(e,`overflowX`)},yf=function(e,t){var n=t.ownerDocument,r=t;do{if(typeof ShadowRoot<`u`&&r instanceof ShadowRoot&&(r=r.host),Sf(e,r)){var i=Cf(e,r);if(i[1]>i[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},bf=function(e){return[e.scrollTop,e.scrollHeight,e.clientHeight]},xf=function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]},Sf=function(e,t){return e===`v`?_f(t):vf(t)},Cf=function(e,t){return e===`v`?bf(t):xf(t)},wf=function(e,t){return e===`h`&&t===`rtl`?-1:1},Tf=function(e,t,n,r,i){var a=wf(e,window.getComputedStyle(t).direction),o=a*r,s=n.target,c=t.contains(s),l=!1,u=o>0,d=0,f=0;do{if(!s)break;var p=Cf(e,s),m=p[0],h=p[1]-p[2]-a*m;(m||h)&&Sf(e,s)&&(d+=h,f+=m);var g=s.parentNode;s=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g}while(!c&&s!==document.body||c&&(t.contains(s)||t===s));return(u&&(i&&Math.abs(d)<1||!i&&o>d)||!u&&(i&&Math.abs(f)<1||!i&&-o>f))&&(l=!0),l},Ef=function(e){return`changedTouches`in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Df=function(e){return[e.deltaX,e.deltaY]},Of=function(e){return e&&`current`in e?e.current:e},kf=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Af=function(e){return`
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`},jf=0,Mf=[];function Nf(e){var t=x.useRef([]),n=x.useRef([0,0]),r=x.useRef(),i=x.useState(jf++)[0],a=x.useState(ef)[0],o=x.useRef(e);x.useEffect(function(){o.current=e},[e]),x.useEffect(function(){if(e.inert){document.body.classList.add(`block-interactivity-${i}`);var t=Ad([e.lockRef.current],(e.shards||[]).map(Of),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add(`allow-interactivity-${i}`)}),function(){document.body.classList.remove(`block-interactivity-${i}`),t.forEach(function(e){return e.classList.remove(`allow-interactivity-${i}`)})}}},[e.inert,e.lockRef.current,e.shards]);var s=x.useCallback(function(e,t){if(`touches`in e&&e.touches.length===2||e.type===`wheel`&&e.ctrlKey)return!o.current.allowPinchZoom;var i=Ef(e),a=n.current,s=`deltaX`in e?e.deltaX:a[0]-i[0],c=`deltaY`in e?e.deltaY:a[1]-i[1],l,u=e.target,d=Math.abs(s)>Math.abs(c)?`h`:`v`;if(`touches`in e&&d===`h`&&u.type===`range`)return!1;var f=window.getSelection(),p=f&&f.anchorNode;if(p&&(p===u||p.contains(u)))return!1;var m=yf(d,u);if(!m)return!0;if(m?l=d:(l=d===`v`?`h`:`v`,m=yf(d,u)),!m)return!1;if(!r.current&&`changedTouches`in e&&(s||c)&&(r.current=l),!l)return!0;var h=r.current||l;return Tf(h,t,e,h===`h`?s:c,!0)},[]),c=x.useCallback(function(e){var n=e;if(Mf.length&&Mf[Mf.length-1]===a){var r=`deltaY`in n?Df(n):Ef(n),i=t.current.filter(function(e){return e.name===n.type&&(e.target===n.target||n.target===e.shadowParent)&&kf(e.delta,r)})[0];if(i&&i.should){n.cancelable&&n.preventDefault();return}if(!i){var c=(o.current.shards||[]).map(Of).filter(Boolean).filter(function(e){return e.contains(n.target)});(c.length>0?s(n,c[0]):!o.current.noIsolation)&&n.cancelable&&n.preventDefault()}}},[]),l=x.useCallback(function(e,n,r,i){var a={name:e,delta:n,target:r,should:i,shadowParent:Pf(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),u=x.useCallback(function(e){n.current=Ef(e),r.current=void 0},[]),d=x.useCallback(function(t){l(t.type,Df(t),t.target,s(t,e.lockRef.current))},[]),f=x.useCallback(function(t){l(t.type,Ef(t),t.target,s(t,e.lockRef.current))},[]);x.useEffect(function(){return Mf.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener(`wheel`,c,mf),document.addEventListener(`touchmove`,c,mf),document.addEventListener(`touchstart`,u,mf),function(){Mf=Mf.filter(function(e){return e!==a}),document.removeEventListener(`wheel`,c,mf),document.removeEventListener(`touchmove`,c,mf),document.removeEventListener(`touchstart`,u,mf)}},[]);var p=e.removeScrollBar,m=e.inert;return x.createElement(x.Fragment,null,m?x.createElement(a,{styles:Af(i)}):null,p?x.createElement(df,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Pf(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var Ff=Wd(Gd,Nf),If=x.forwardRef(function(e,t){return x.createElement(qd,Od({},e,{ref:t,sideCar:Ff}))});If.classNames=qd.classNames;var Lf=Object.defineProperty,$=(e,t)=>Lf(e,`name`,{value:t,configurable:!0}),Rf=[` `,`Enter`,`ArrowUp`,`ArrowDown`],zf=[` `,`Enter`],Bf=`Select`,[Vf,Hf,Uf]=Wo(Bf),[Wf,Gf]=Za(Bf,[Uf,Ku]),Kf=Ku(),[qf,Jf]=Wf(Bf),[Yf,Xf]=Wf(Bf);function Zf(e){let{__scopeSelect:t,children:n,open:r,defaultOpen:i,onOpenChange:a,value:o,defaultValue:s,onValueChange:c,dir:l,name:u,autoComplete:d,disabled:f,required:p,form:m,internal_do_not_use_render:h}=e,g=Kf(t),[_,v]=x.useState(null),[y,b]=x.useState(null),[S,C]=x.useState(!1),w=ho(l),[T,E]=co({prop:r,defaultProp:i??!1,onChange:a,caller:Bf}),[D,O]=co({prop:o,defaultProp:s,onChange:c,caller:Bf}),k=x.useRef(null),A=x.useRef(D);x.useEffect(()=>{let e=m?_?.ownerDocument.getElementById(m):_?.form;if(e instanceof HTMLFormElement){let t=$(()=>O(A.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[m,_,O]);let j=!_||!!m||!!_.closest(`form`),[ee,te]=x.useState(new Set),ne=Fc(),re=Array.from(ee).map(e=>e.props.value).join(`;`),M=x.useCallback(e=>{te(t=>new Set(t).add(e))},[]),N=x.useCallback(e=>{te(t=>{let n=new Set(t);return n.delete(e),n})},[]),ie={required:p,trigger:_,onTriggerChange:v,valueNode:y,onValueNodeChange:b,valueNodeHasChildren:S,onValueNodeHasChildrenChange:C,contentId:ne,value:D,onValueChange:O,open:T,onOpenChange:E,dir:w,triggerPointerDownPosRef:k,disabled:f,name:u,autoComplete:d,form:m,nativeOptions:ee,nativeSelectKey:re,isFormControl:j};return(0,U.jsx)(ad,{...g,children:(0,U.jsx)(qf,{scope:t,...ie,children:(0,U.jsx)(Vf.Provider,{scope:t,children:(0,U.jsx)(Yf,{scope:t,onNativeOptionAdd:M,onNativeOptionRemove:N,children:jp(h)?h(ie):n})})})})}$(Zf,`SelectProvider`);var Qf=$(e=>{let{__scopeSelect:t,children:n,...r}=e;return(0,U.jsx)(Zf,{__scopeSelect:t,...r,internal_do_not_use_render:({isFormControl:e})=>(0,U.jsxs)(U.Fragment,{children:[n,e?(0,U.jsx)(Ap,{__scopeSelect:t}):null]})})},`Select`),$f=`SelectTrigger`,ep=x.forwardRef($(function(e,t){let{__scopeSelect:n,disabled:r=!1,...i}=e,a=Kf(n),o=Jf($f,n),s=o.disabled||r,c=qa(t,o.onTriggerChange),l=Hf(n),u=x.useRef(`touch`),[d,f,p]=Np(e=>{let t=l().filter(e=>!e.disabled),n=Pp(t,e,t.find(e=>e.value===o.value));n!==void 0&&o.onValueChange(n.value)}),m=$(e=>{s||(o.onOpenChange(!0),p()),e&&(o.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})},`handleOpen`);return(0,U.jsx)(od,{asChild:!0,...a,children:(0,U.jsx)(Bo.button,{type:`button`,role:`combobox`,"aria-controls":o.open?o.contentId:void 0,"aria-expanded":o.open,"aria-required":o.required,"aria-autocomplete":`none`,dir:o.dir,"data-state":o.open?`open`:`closed`,disabled:s,"data-disabled":s?``:void 0,"data-placeholder":Mp(o.value)?``:void 0,...i,ref:c,onClick:Ra(i.onClick,e=>{e.currentTarget.focus(),u.current!==`mouse`&&m(e)}),onPointerDown:Ra(i.onPointerDown,e=>{u.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),e.button===0&&e.ctrlKey===!1&&e.pointerType===`mouse`&&(m(e),e.preventDefault())}),onKeyDown:Ra(i.onKeyDown,e=>{let t=d.current!==``;!(e.ctrlKey||e.altKey||e.metaKey)&&e.key.length===1&&f(e.key),!(t&&e.key===` `)&&Rf.includes(e.key)&&(m(),e.preventDefault())})})})},`SelectTrigger`)),tp=`SelectValue`,np=x.forwardRef($(function(e,t){let{__scopeSelect:n,className:r,style:i,children:a,placeholder:o=``,...s}=e,c=Jf(tp,n),{onValueNodeHasChildrenChange:l}=c,u=a!==void 0,d=qa(t,c.onValueNodeChange);$a(()=>{l(u)},[l,u]);let f=Mp(c.value);return(0,U.jsx)(Bo.span,{...s,asChild:!f&&s.asChild,ref:d,style:{pointerEvents:`none`},children:(0,U.jsx)(x.Fragment,{children:f?o:a},f?`placeholder`:`value`)})},`SelectValue`)),rp=x.forwardRef($(function(e,t){let{__scopeSelect:n,children:r,...i}=e;return(0,U.jsx)(Bo.span,{"aria-hidden":!0,...i,ref:t,children:r||`▼`})},`SelectIcon`)),[ip,ap]=Wf(`SelectPortal`,{forceMount:void 0}),op=$(e=>{let{__scopeSelect:t,forceMount:n,...r}=e;return(0,U.jsx)(ip,{scope:e.__scopeSelect,forceMount:n,children:(0,U.jsx)(ld,{asChild:!0,...r})})},`SelectPortal`),sp=`SelectContent`,cp=x.forwardRef($(function(e,t){let n=ap(sp,e.__scopeSelect),{forceMount:r=n.forceMount,...i}=e,a=Jf(sp,e.__scopeSelect),[o,s]=x.useState();return $a(()=>{s(new DocumentFragment)},[]),(0,U.jsx)(pd,{present:r||a.open,children:({present:e})=>e?(0,U.jsx)(mp,{...i,ref:t}):(0,U.jsx)(lp,{...i,fragment:o})})},`SelectContent`)),lp=x.forwardRef($(function(e,t){let{__scopeSelect:n,children:r,fragment:i}=e;return i?So.createPortal((0,U.jsx)(dp,{scope:n,children:(0,U.jsx)(Vf.Slot,{scope:n,children:(0,U.jsx)(`div`,{ref:t,children:r})})}),i):null},`SelectContentFragment`)),up=10,[dp,fp]=Wf(sp),pp=To(`SelectContent.RemoveScroll`),mp=x.forwardRef($(function(e,t){let{__scopeSelect:n}=e,{position:r=`item-aligned`,onCloseAutoFocus:i,onEscapeKeyDown:a,onPointerDownOutside:o,side:s,sideOffset:c,align:l,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:m,hideWhenDetached:h,avoidCollisions:g,..._}=e,v=Jf(sp,n),[y,b]=x.useState(null),[S,C]=x.useState(null),w=qa(t,b),[T,E]=x.useState(null),[D,O]=x.useState(null),k=Hf(n),[A,j]=x.useState(!1),ee=x.useRef(!1);x.useEffect(()=>{if(y)return Dd(y)},[y]),fc();let te=x.useCallback(e=>{let[t,...n]=k().map(e=>e.ref.current),[r]=n.slice(-1),i=document.activeElement;for(let n of e)if(n===i||(n?.scrollIntoView({block:`nearest`}),n===t&&S&&(S.scrollTop=0),n===r&&S&&(S.scrollTop=S.scrollHeight),n?.focus(),document.activeElement!==i))return},[k,S]),ne=x.useCallback(()=>te([T,y]),[te,T,y]);x.useEffect(()=>{A&&ne()},[A,ne]);let{onOpenChange:re,triggerPointerDownPosRef:M}=v;x.useEffect(()=>{if(y){let e={x:0,y:0},t=$(t=>{e={x:Math.abs(Math.round(t.pageX)-(M.current?.x??0)),y:Math.abs(Math.round(t.pageY)-(M.current?.y??0))}},`handlePointerMove`),n=$(n=>{e.x<=10&&e.y<=10?n.preventDefault():n.composedPath().includes(y)||re(!1),document.removeEventListener(`pointermove`,t),M.current=null},`handlePointerUp`);return M.current!==null&&(document.addEventListener(`pointermove`,t),document.addEventListener(`pointerup`,n,{capture:!0,once:!0})),()=>{document.removeEventListener(`pointermove`,t),document.removeEventListener(`pointerup`,n,{capture:!0})}}},[y,re,M]),x.useEffect(()=>{let e=$(()=>re(!1),`close`);return window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[re]);let[N,ie]=Np(e=>{let t=k().filter(e=>!e.disabled),n=Pp(t,e,t.find(e=>e.ref.current===document.activeElement));n&&setTimeout(()=>n.ref.current?.focus())}),ae=x.useCallback((e,t,n)=>{let r=!ee.current&&!n;(v.value!==void 0&&v.value===t||r)&&(E(e),r&&(ee.current=!0))},[v.value]),P=x.useCallback(()=>y?.focus(),[y]),oe=x.useCallback((e,t,n)=>{let r=!ee.current&&!n;(v.value!==void 0&&v.value===t||r)&&O(e)},[v.value]),se=r===`popper`?gp:hp,F=se===gp?{side:s,sideOffset:c,align:l,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:m,hideWhenDetached:h,avoidCollisions:g}:{};return(0,U.jsx)(dp,{scope:n,content:y,viewport:S,onViewportChange:C,itemRefCallback:ae,selectedItem:T,onItemLeave:P,itemTextRefCallback:oe,focusSelectedItem:ne,selectedItemText:D,position:r,isPositioned:A,searchRef:N,children:(0,U.jsx)(If,{as:pp,allowPinchZoom:!0,children:(0,U.jsx)(yc,{asChild:!0,trapped:v.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:Ra(i,e=>{v.trigger?.focus({preventScroll:!0}),e.preventDefault()}),children:(0,U.jsx)(ec,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:a,onPointerDownOutside:o,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>v.onOpenChange(!1),children:(0,U.jsx)(se,{role:`listbox`,id:v.contentId,"data-state":v.open?`open`:`closed`,dir:v.dir,onContextMenu:e=>e.preventDefault(),..._,...F,onPlaced:()=>j(!0),ref:w,style:{display:`flex`,flexDirection:`column`,outline:`none`,..._.style},onKeyDown:Ra(_.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if(e.key===`Tab`&&e.preventDefault(),!t&&e.key.length===1&&ie(e.key),[`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=k().filter(e=>!e.disabled).map(e=>e.ref.current);if([`ArrowUp`,`End`].includes(e.key)&&(t=t.slice().reverse()),[`ArrowUp`,`ArrowDown`].includes(e.key)){let n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout(()=>te(t)),e.preventDefault()}})})})})})})},`SelectContentImpl`)),hp=x.forwardRef($(function(e,t){let{__scopeSelect:n,onPlaced:r,...i}=e,a=Jf(sp,n),o=fp(sp,n),[s,c]=x.useState(null),[l,u]=x.useState(null),d=qa(t,u),f=Hf(n),p=x.useRef(!1),m=x.useRef(!0),{viewport:h,selectedItem:g,selectedItemText:_,focusSelectedItem:v}=o,y=x.useCallback(()=>{if(a.trigger&&a.valueNode&&s&&l&&h&&g&&_){let e=a.trigger.getBoundingClientRect(),t=l.getBoundingClientRect(),n=a.valueNode.getBoundingClientRect(),i=_.getBoundingClientRect();if(a.dir!==`rtl`){let r=i.left-t.left,a=n.left-r,o=e.left-a,c=e.width+o,l=Math.max(c,t.width),u=window.innerWidth-up,d=Pa(a,[up,Math.max(up,u-l)]);s.style.minWidth=c+`px`,s.style.left=d+`px`}else{let r=t.right-i.right,a=window.innerWidth-n.right-r,o=window.innerWidth-e.right-a,c=e.width+o,l=Math.max(c,t.width),u=window.innerWidth-up,d=Pa(a,[up,Math.max(up,u-l)]);s.style.minWidth=c+`px`,s.style.right=d+`px`}let o=f(),c=window.innerHeight-up*2,u=h.scrollHeight,d=window.getComputedStyle(l),m=parseInt(d.borderTopWidth,10),v=parseInt(d.paddingTop,10),y=parseInt(d.borderBottomWidth,10),b=parseInt(d.paddingBottom,10),x=m+v+u+b+y,S=Math.min(g.offsetHeight*5,x),C=window.getComputedStyle(h),w=parseInt(C.paddingTop,10),T=parseInt(C.paddingBottom,10),E=e.top+e.height/2-up,D=c-E,O=g.offsetHeight/2,k=g.offsetTop+O,A=m+v+k,j=x-A;if(A<=E){let e=o.length>0&&g===o[o.length-1].ref.current;s.style.bottom=`0px`;let t=l.clientHeight-h.offsetTop-h.offsetHeight,n=A+Math.max(D,O+(e?T:0)+t+y);s.style.height=n+`px`}else{let e=o.length>0&&g===o[0].ref.current;s.style.top=`0px`;let t=Math.max(E,m+h.offsetTop+(e?w:0)+O)+j;s.style.height=t+`px`,h.scrollTop=A-E+h.offsetTop}s.style.margin=`${up}px 0`,s.style.minHeight=S+`px`,s.style.maxHeight=c+`px`,r?.(),requestAnimationFrame(()=>p.current=!0)}},[f,a.trigger,a.valueNode,s,l,h,g,_,a.dir,r]);$a(()=>y(),[y]);let[b,S]=x.useState();$a(()=>{l&&S(window.getComputedStyle(l).zIndex)},[l]);let C=x.useCallback(e=>{e&&m.current===!0&&(y(),v?.(),m.current=!1)},[y,v]);return(0,U.jsx)(_p,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:p,onScrollButtonChange:C,children:(0,U.jsx)(`div`,{ref:c,style:{display:`flex`,flexDirection:`column`,position:`fixed`,zIndex:b},children:(0,U.jsx)(Bo.div,{...i,ref:d,style:{boxSizing:`border-box`,maxHeight:`100%`,...i.style}})})})},`SelectItemAlignedPosition`)),gp=x.forwardRef($(function(e,t){let{__scopeSelect:n,align:r=`start`,collisionPadding:i=up,...a}=e,o=Kf(n);return(0,U.jsx)(sd,{...o,...a,ref:t,align:r,collisionPadding:i,style:{boxSizing:`border-box`,...a.style,"--radix-select-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-select-content-available-width":`var(--radix-popper-available-width)`,"--radix-select-content-available-height":`var(--radix-popper-available-height)`,"--radix-select-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-select-trigger-height":`var(--radix-popper-anchor-height)`}})},`SelectPopperPosition`)),[_p,vp]=Wf(sp,{}),yp=`SelectViewport`,bp=x.forwardRef($(function(e,t){let{__scopeSelect:n,nonce:r,...i}=e,a=fp(yp,n),o=vp(yp,n),s=qa(t,a.onViewportChange),c=x.useRef(0);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`},nonce:r}),(0,U.jsx)(Vf.Slot,{scope:n,children:(0,U.jsx)(Bo.div,{"data-radix-select-viewport":``,role:`presentation`,...i,ref:s,style:{position:`relative`,flex:1,overflow:`hidden auto`,...i.style},onScroll:Ra(i.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=o;if(r?.current&&n){let e=Math.abs(c.current-t.scrollTop);if(e>0){let r=window.innerHeight-up*2,i=parseFloat(n.style.minHeight),a=parseFloat(n.style.height),o=Math.max(i,a);if(o<r){let i=o+e,a=Math.min(r,i),s=i-a;n.style.height=a+`px`,n.style.bottom===`0px`&&(t.scrollTop=s>0?s:0,n.style.justifyContent=`flex-end`)}}}c.current=t.scrollTop})})})]})},`SelectViewport`)),[xp,Sp]=Wf(`SelectGroup`),Cp=`SelectItem`,[wp,Tp]=Wf(Cp),Ep=x.forwardRef($(function(e,t){let{__scopeSelect:n,value:r,disabled:i=!1,textValue:a,...o}=e,s=Jf(Cp,n),c=fp(Cp,n),l=s.value===r,[u,d]=x.useState(a??``),[f,p]=x.useState(!1),m=qa(t,Ks(e=>c.itemRefCallback?.(e,r,i))),h=Fc(),g=x.useRef(`touch`),_=$(()=>{i||(s.onValueChange(r),s.onOpenChange(!1))},`handleSelect`);return(0,U.jsx)(wp,{scope:n,value:r,disabled:i,textId:h,isSelected:l,onItemTextChange:x.useCallback(e=>{d(t=>t||(e?.textContent??``).trim())},[]),children:(0,U.jsx)(Vf.ItemSlot,{scope:n,value:r,disabled:i,textValue:u,children:(0,U.jsx)(Bo.div,{role:`option`,"aria-labelledby":h,"data-highlighted":f?``:void 0,"aria-selected":l&&f,"data-state":l?`checked`:`unchecked`,"aria-disabled":i||void 0,"data-disabled":i?``:void 0,tabIndex:i?void 0:-1,...o,ref:m,onFocus:Ra(o.onFocus,()=>p(!0)),onBlur:Ra(o.onBlur,()=>p(!1)),onClick:Ra(o.onClick,()=>{g.current!==`mouse`&&_()}),onPointerUp:Ra(o.onPointerUp,()=>{g.current===`mouse`&&_()}),onPointerDown:Ra(o.onPointerDown,e=>{g.current=e.pointerType}),onPointerMove:Ra(o.onPointerMove,e=>{g.current=e.pointerType,i?c.onItemLeave?.():g.current===`mouse`&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Ra(o.onPointerLeave,e=>{e.currentTarget===document.activeElement&&c.onItemLeave?.()}),onKeyDown:Ra(o.onKeyDown,e=>{i||e.target!==e.currentTarget||(c.searchRef?.current===``||e.key!==` `)&&(zf.includes(e.key)&&_(),e.key===` `&&e.preventDefault())})})})})},`SelectItem`)),Dp=`SelectItemText`,Op=x.forwardRef($(function(e,t){let{__scopeSelect:n,className:r,style:i,...a}=e,o=Jf(Dp,n),s=fp(Dp,n),c=Tp(Dp,n),l=Xf(Dp,n),[u,d]=x.useState(null),f=Ks(e=>s.itemTextRefCallback?.(e,c.value,c.disabled)),p=qa(t,d,c.onItemTextChange,f),m=u?.textContent,h=x.useMemo(()=>(0,U.jsx)(`option`,{value:c.value,disabled:c.disabled,children:m},c.value),[c.disabled,c.value,m]),{onNativeOptionAdd:g,onNativeOptionRemove:_}=l;return $a(()=>(g(h),()=>_(h)),[g,_,h]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Bo.span,{id:c.textId,...a,ref:p}),c.isSelected&&o.valueNode&&!o.valueNodeHasChildren&&!Mp(o.value)?So.createPortal(a.children,o.valueNode):null]})},`SelectItemText`)),kp=`SelectBubbleInput`,Ap=x.forwardRef($(function({__scopeSelect:e,...t},n){let r=Jf(kp,e),{value:i,onValueChange:a,required:o,disabled:s,name:c,autoComplete:l,form:u}=r,{nativeOptions:d,nativeSelectKey:f}=r,p=x.useRef(null),m=qa(n,p),h=i??``,g=vo(h),_=Array.from(d).some(e=>(e.props.value??``)===``);return x.useEffect(()=>{let e=p.current;if(!e)return;let t=window.HTMLSelectElement.prototype,n=Object.getOwnPropertyDescriptor(t,`value`).set;if(g!==h&&n){let t=new Event(`change`,{bubbles:!0});n.call(e,h),e.dispatchEvent(t)}},[g,h]),(0,U.jsxs)(Bo.select,{"aria-hidden":!0,required:o,tabIndex:-1,name:c,autoComplete:l,disabled:s,form:u,onChange:e=>a(e.target.value),...t,style:{...yd,...t.style},ref:m,defaultValue:h,children:[Mp(i)&&!_?(0,U.jsx)(`option`,{value:``}):null,Array.from(d)]},f)},`SelectBubbleInput`));function jp(e){return typeof e==`function`}$(jp,`isFunction`);function Mp(e){return e===``||e===void 0}$(Mp,`shouldShowPlaceholder`);function Np(e){let t=Ks(e),n=x.useRef(``),r=x.useRef(0),i=x.useCallback(e=>{let i=n.current+e;t(i),$((function e(t){n.current=t,window.clearTimeout(r.current),t!==``&&(r.current=window.setTimeout(()=>e(``),1e3))}),`updateSearch`)(i)},[t]),a=x.useCallback(()=>{n.current=``,window.clearTimeout(r.current)},[]);return x.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,i,a]}$(Np,`useTypeaheadSearch`);function Pp(e,t,n){let r=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,i=n?e.indexOf(n):-1,a=Fp(e,Math.max(i,0));r.length===1&&(a=a.filter(e=>e!==n));let o=a.find(e=>e.textValue.toLowerCase().startsWith(r.toLowerCase()));return o===n?void 0:o}$(Pp,`findNextItem`);function Fp(e,t){return e.map((n,r)=>e[(t+r)%e.length])}$(Fp,`wrapArray`);function Ip({label:e,value:t,min:n,max:r,step:i,onChange:a,format:o}){return(0,U.jsxs)(`div`,{className:`pg-ctrl`,children:[(0,U.jsx)(`span`,{className:`pg-ctrl-name`,children:e}),(0,U.jsxs)(ps,{className:`pg-slider`,value:[t],min:n,max:r,step:i,onValueChange:([e])=>a(e),children:[(0,U.jsx)(bs,{className:`pg-slider-track`,children:(0,U.jsx)(Ss,{className:`pg-slider-range`})}),(0,U.jsx)(ks,{className:`pg-slider-thumb`})]}),(0,U.jsx)(`span`,{className:`pg-ctrl-val`,children:o?o(t):t})]})}function Lp({label:e,value:t,options:n,onChange:r}){return(0,U.jsxs)(`div`,{className:`pg-ctrl`,children:[(0,U.jsx)(`span`,{className:`pg-ctrl-name`,children:e}),(0,U.jsxs)(Qf,{value:t,onValueChange:r,children:[(0,U.jsxs)(ep,{className:`pg-select-trigger`,children:[(0,U.jsx)(np,{}),(0,U.jsx)(rp,{children:(0,U.jsx)(yi,{size:12})})]}),(0,U.jsx)(op,{children:(0,U.jsx)(cp,{className:`pg-select-content`,position:`popper`,sideOffset:4,children:(0,U.jsx)(bp,{className:`pg-select-viewport`,children:n.map(e=>(0,U.jsx)(Ep,{value:e.value,className:`pg-select-item`,children:(0,U.jsx)(Op,{children:e.label})},e.value))})})})]})]})}function Rp({state:e,onChange:t}){return(0,U.jsxs)(`div`,{className:`pg-left`,children:[(0,U.jsx)(`div`,{className:`pg-col-header`,children:`Parameters`}),(0,U.jsxs)(`div`,{className:`pg-ctrl-group`,children:[(0,U.jsx)(`label`,{className:`pg-ctrl-label`,children:`Network`}),(0,U.jsx)(Ip,{label:`Neurons`,value:e.nNeurons,min:8,max:40,step:1,onChange:e=>t(`nNeurons`,e)}),(0,U.jsx)(Ip,{label:`Density`,value:e.density,min:.05,max:.35,step:.01,onChange:e=>t(`density`,e),format:e=>e.toFixed(2)}),(0,U.jsx)(Ip,{label:`Seed`,value:e.seed,min:1,max:100,step:1,onChange:e=>t(`seed`,e)})]}),(0,U.jsxs)(`div`,{className:`pg-ctrl-group`,children:[(0,U.jsx)(`label`,{className:`pg-ctrl-label`,children:`Dynamics`}),(0,U.jsx)(Ip,{label:`tau_m`,value:e.tauM*1e3,min:5,max:30,step:1,onChange:e=>t(`tauM`,e/1e3),format:e=>`${e.toFixed(0)}ms`})]}),(0,U.jsxs)(`div`,{className:`pg-ctrl-group`,children:[(0,U.jsx)(`label`,{className:`pg-ctrl-label`,children:`Input Signal`}),(0,U.jsx)(Lp,{label:`Mode`,value:e.mode,onChange:e=>t(`mode`,e),options:[{value:`sine`,label:`Sine`},{value:`pulse`,label:`Pulse`},{value:`burst`,label:`Burst`},{value:`ramp`,label:`Ramp`}]}),(0,U.jsx)(Ip,{label:`Freq`,value:e.freq,min:.5,max:10,step:.5,onChange:e=>t(`freq`,e),format:e=>`${e} Hz`}),(0,U.jsx)(Ip,{label:`Amplitude`,value:e.amplitude,min:.1,max:3,step:.1,onChange:e=>t(`amplitude`,e),format:e=>e.toFixed(1)})]}),(0,U.jsxs)(`div`,{className:`pg-ctrl-group`,children:[(0,U.jsx)(`label`,{className:`pg-ctrl-label`,children:`Playback`}),(0,U.jsx)(Ip,{label:`Speed`,value:e.speed,min:.2,max:4,step:.2,onChange:e=>t(`speed`,e),format:e=>`${e.toFixed(1)}x`})]})]})}function zp({tick:e,spikeCount:t,firingRate:n,activeNeurons:r,nNeurons:i,code:a,onCopy:o,copied:s,selectedNeuron:c,neuron:l}){let u=(0,x.useRef)(null);return(0,x.useEffect)(()=>{u.current&&qr.default.highlightElement(u.current)},[a]),(0,U.jsxs)(`div`,{className:`pg-right`,children:[(0,U.jsxs)(`div`,{className:`pg-stats-grid`,children:[(0,U.jsxs)(`div`,{className:`pg-stat`,children:[(0,U.jsx)(`span`,{className:`pg-stat-label`,children:`Time`}),(0,U.jsxs)(`span`,{className:`pg-stat-value`,children:[(e/1e3).toFixed(2),`s`]})]}),(0,U.jsxs)(`div`,{className:`pg-stat`,children:[(0,U.jsx)(`span`,{className:`pg-stat-label`,children:`Spikes`}),(0,U.jsx)(`span`,{className:`pg-stat-value`,children:t})]}),(0,U.jsxs)(`div`,{className:`pg-stat`,children:[(0,U.jsx)(`span`,{className:`pg-stat-label`,children:`Rate`}),(0,U.jsxs)(`span`,{className:`pg-stat-value`,children:[n,` Hz`]})]}),(0,U.jsxs)(`div`,{className:`pg-stat`,children:[(0,U.jsx)(`span`,{className:`pg-stat-label`,children:`Active`}),(0,U.jsxs)(`span`,{className:`pg-stat-value`,children:[r,`/`,i]})]})]}),c!==null&&l&&(0,U.jsxs)(`div`,{className:`pg-stats-grid`,style:{marginTop:8,borderTop:`1px solid var(--line)`,paddingTop:8},children:[(0,U.jsxs)(`div`,{className:`pg-stat`,children:[(0,U.jsx)(`span`,{className:`pg-stat-label`,children:`Neuron`}),(0,U.jsxs)(`span`,{className:`pg-stat-value`,children:[`N`,c]})]}),(0,U.jsxs)(`div`,{className:`pg-stat`,children:[(0,U.jsx)(`span`,{className:`pg-stat-label`,children:`Region`}),(0,U.jsx)(`span`,{className:`pg-stat-value`,children:l.region})]}),(0,U.jsxs)(`div`,{className:`pg-stat`,children:[(0,U.jsx)(`span`,{className:`pg-stat-label`,children:`V_m`}),(0,U.jsxs)(`span`,{className:`pg-stat-value`,children:[(l.v*1e3).toFixed(1),`mV`]})]}),(0,U.jsxs)(`div`,{className:`pg-stat`,children:[(0,U.jsx)(`span`,{className:`pg-stat-label`,children:`Threshold`}),(0,U.jsxs)(`span`,{className:`pg-stat-value`,children:[(l.vThresh*1e3).toFixed(1),`mV`]})]})]}),(0,U.jsxs)(`div`,{className:`pg-code-panel`,children:[(0,U.jsxs)(`div`,{className:`pg-code-header`,children:[(0,U.jsx)(`span`,{children:`AxonWeave Code`}),(0,U.jsxs)(`div`,{className:`pg-code-actions`,children:[(0,U.jsx)(`span`,{className:`pg-lang-chip`,children:`python`}),(0,U.jsx)(`button`,{className:`pg-copy-btn`,onClick:o,"aria-label":`Copy code`,children:s?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(bi,{size:12}),` Copied`]}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(_i,{size:12}),` Copy`]})})]})]}),(0,U.jsx)(`div`,{className:`pg-code-body`,children:(0,U.jsx)(`pre`,{children:(0,U.jsx)(`code`,{ref:u,className:`language-python`,children:a})})})]})]})}var Bp={default:{n:24,d:.15,s:42,m:`sine`,f:3,a:1,t:15,label:`Default`,desc:`Balanced network with sine input`},sparse:{n:16,d:.08,s:7,m:`pulse`,f:2,a:1.5,t:20,label:`Sparse Pulse`,desc:`Low density, pulse-driven, slow dynamics`},dense_burst:{n:32,d:.25,s:99,m:`burst`,f:5,a:2,t:10,label:`Dense Burst`,desc:`High connectivity, fast bursting input`},minimal:{n:8,d:.2,s:1,m:`sine`,f:1,a:.8,t:15,label:`Minimal`,desc:`Tiny network, easy to observe individual neurons`},cortical:{n:36,d:.18,s:55,m:`ramp`,f:4,a:1.2,t:12,label:`Cortical-like`,desc:`Larger network with ramping input`}};Object.keys(Bp);function Vp(e,t,n,r,i,a,o){return`# AxonWeave equivalent (NOT running here — demo only)
import axonweave
from axonweave.dynamics import LIF
from axonweave.runtime import ConnectomeRuntime

brain = axonweave.load("male-cns:v1.0")

# LIF dynamics — same parameters as the demo
dynamics = LIF(
    tau_membrane=${i.toFixed(3)},   # membrane time constant (s)
    v_threshold=-0.050,  # spike threshold (V)
    v_rest=-0.070,       # resting potential (V)
    dt=0.001,            # 1 ms timestep
)

# Runtime on the real substrate
runtime = ConnectomeRuntime(
    brain.graph,
    dynamics=dynamics,
    n_neurons=${r},   # demo topology
)

runtime.reset_state()

# Input: ${e} wave, ${t} Hz, amplitude ${n.toFixed(2)}
# In the demo: neurons 0-${Math.min(3,r-1)} receive input
# In real use: input maps to sensory neuron regions
for t in range(1000):
    x_t = generate_input(t * 0.001)  # shape: [batch, features]
    y_t = runtime.step(x_t)          # 1 ms step

# Access spike state
state = runtime.get_state()
spikes = state.neuron.spiked
print(f"Active neurons: {spikes.sum()}/${r}")

# Topology: ${r} neurons, density ${a.toFixed(2)}, seed ${o}
# Real MaleCNS: 166,700 neurons, millions of synapses`}var Hp={nNeurons:`n`,density:`d`,seed:`s`,mode:`m`,freq:`f`,amplitude:`a`,tauM:`t`,speed:`sp`,running:`run`};function Up(e,t){return typeof t==`number`?e===`tauM`?(t*1e3).toFixed(0):e===`density`?t.toFixed(3):e===`amplitude`||e===`freq`||e===`speed`?t.toFixed(1):String(t):typeof t==`string`?t:typeof t==`boolean`?t?`1`:`0`:String(t)}function Wp(e,t){if(e===`mode`)return t;if(e===`running`)return t===`1`;if(e===`tauM`)return parseInt(t,10)/1e3;let n=parseFloat(t);return isNaN(n)?t:n}function Gp(){if(typeof window>`u`)return{};let e=new URLSearchParams(window.location.search),t={};for(let n of Object.keys(Hp)){let r=Hp[n],i=e.get(r);i!==null&&(t[n]=Wp(n,i))}return t}var Kp={nNeurons:24,density:.15,seed:42,mode:`sine`,freq:3,amplitude:1,tauM:.015,speed:1,running:!1};function qp(e,t=!0){if(typeof window>`u`)return;let n=new URLSearchParams,r=!1;for(let t of Object.keys(Hp)){let i=Hp[t],a=e[t],o=Kp[t];a!=null&&a!==o&&(n.set(i,Up(t,a)),r=!0)}let i=r?`${window.location.pathname}?${n.toString()}`:window.location.pathname;t?window.history.replaceState({},``,i):window.history.pushState({},``,i)}function Jp({dark:e}){let[t,n]=(0,x.useState)(!1),[r,i]=(0,x.useState)(!1),[a,o]=(0,x.useState)(!1),[s,c]=(0,x.useState)(`default`),[l,u]=(0,x.useState)(null),[d,f]=(0,x.useState)({scale:1,x:0,y:0}),[p,m]=(0,x.useState)(()=>{let e=Gp();return{...Kp,...e}}),[h,g]=(0,x.useState)(0),[_,v]=(0,x.useState)(0),[y,b]=(0,x.useState)(0),[S,C]=(0,x.useState)(0),{net:w,spikes:T,traces:E,rebuild:D}=xa({state:p,running:t,onStatsUpdate:e=>{g(e.tick),v(e.spikeCount),b(e.firingRate),C(e.activeNeurons)}});(0,x.useEffect)(()=>{qp(p)},[p]);let O=(0,x.useCallback)((e,t)=>{m(n=>({...n,[e]:t})),n(!1)},[]),k=(0,x.useCallback)(e=>{let t=Bp[e];t&&(c(e),n(!1),m({nNeurons:t.n,density:t.d,seed:t.s,mode:t.m,freq:t.f,amplitude:t.a,tauM:t.t/1e3,speed:1,running:!1}))},[]),A=(0,x.useCallback)(()=>{n(!1),D()},[D]),j=(0,x.useCallback)(()=>{n(e=>!e)},[]),ee=(0,x.useCallback)(async()=>{await navigator.clipboard.writeText(window.location.href),o(!0),setTimeout(()=>o(!1),1500)},[]);(0,x.useMemo)(()=>{if(l===null||!w)return null;let e=w.neurons[l];return e?{region:{visual:`Visual`,motor:`Motor`,association:`Association`,sensory:`Sensory`}[e.region]??e.region,voltage:e.v.toFixed(3),threshold:e.vThresh.toFixed(3)}:null},[l,w,h]);let te=(0,x.useMemo)(()=>Vp(p.mode,p.freq,p.amplitude,p.nNeurons,p.tauM,p.density,p.seed),[p.mode,p.freq,p.amplitude,p.nNeurons,p.tauM,p.density,p.seed]),ne=(0,x.useCallback)(async()=>{await navigator.clipboard.writeText(te),i(!0),setTimeout(()=>i(!1),1500)},[te]);return(0,U.jsxs)(`div`,{className:`pg`,children:[(0,U.jsxs)(`div`,{className:`pg-topbar`,children:[(0,U.jsx)(`div`,{className:`pg-topbar-left`,children:(0,U.jsx)(`span`,{className:`pg-logo`,children:`AxonWeave Playground`})}),(0,U.jsx)(`div`,{className:`pg-topbar-center`,children:(0,U.jsx)(`div`,{className:`pg-presets-row`,children:Object.entries(Bp).map(([e,t])=>(0,U.jsx)(`button`,{className:`pg-preset ${s===e?`active`:``}`,title:t.desc,onClick:()=>k(e),children:t.label},e))})}),(0,U.jsxs)(`div`,{className:`pg-topbar-right`,children:[(0,U.jsx)(`button`,{className:`pg-reset-btn`,onClick:A,title:`Reset`,children:`Reset`}),(0,U.jsx)(`button`,{className:`pg-run-btn ${t?`running`:``}`,onClick:j,children:t?`Pause`:`Run`}),(0,U.jsx)(`button`,{className:`pg-reset-btn`,onClick:ee,title:`Share`,children:a?`Copied!`:`Share`})]})]}),(0,U.jsx)(`div`,{className:`pg-alert-row`,children:(0,U.jsxs)(`div`,{className:`pg-alert pg-alert-demo`,children:[`DEMO SUBSTRATE `,`—`,` Not MaleCNS v1.0. This uses `,p.nNeurons,` random neurons for education.`]})}),(0,U.jsxs)(`div`,{className:`pg-body`,children:[(0,U.jsx)(Rp,{state:p,onChange:O}),(0,U.jsx)(`div`,{className:`pg-center`,children:w&&(0,U.jsx)(ja,{neurons:w.neurons,synapses:w.synapses,spikes:T,tick:h,nNeurons:p.nNeurons,traces:E,mode:p.mode,freq:p.freq,amplitude:p.amplitude,dark:e,selectedNeuron:l,onSelectNeuron:u,panZoom:d,onPanZoom:f})}),(0,U.jsx)(zp,{tick:h,spikeCount:_,firingRate:y,activeNeurons:S,nNeurons:p.nNeurons,selectedNeuron:l,neuron:w?.neurons[l??-1]??null,code:te,copied:r,onCopy:ne})]})]})}var Yp=[{slug:`index`,label:`Overview`,source:xi,section:`Overview`},{slug:`installation`,label:`Installation`,source:Ki,section:`Getting Started`},{slug:`getting-started`,label:`Getting Started`,source:Si,section:`Getting Started`},{slug:`distribution`,label:`Substrates`,source:Di,section:`Getting Started`},{slug:`core-concepts`,label:`Core Concepts`,source:qi,section:`Concepts`},{slug:`brain`,label:`Biological Brain`,source:Ji,section:`Concepts`},{slug:`connectome`,label:`Connectome`,source:Yi,section:`Concepts`},{slug:`dynamics`,label:`Neuron Dynamics`,source:Ui,section:`Concepts`},{slug:`runtime`,label:`Temporal Runtime`,source:ca,section:`Concepts`},{slug:`signals`,label:`Signals & Receptors`,source:Xi,section:`Concepts`},{slug:`encoders`,label:`Encoders & Decoders`,source:Hi,section:`Concepts`},{slug:`readouts`,label:`Readouts`,source:oa,section:`Concepts`},{slug:`tasks`,label:`Tasks`,source:Zi,section:`Concepts`},{slug:`training`,label:`Training`,source:Qi,section:`Guides`},{slug:`learning`,label:`Learning & Plasticity`,source:Wi,section:`Guides`},{slug:`experiment`,label:`Experiments & Agents`,source:Gi,section:`Guides`},{slug:`checkpoints`,label:`Checkpoints`,source:$i,section:`Guides`},{slug:`examples-pytorch-composition`,label:`Custom Layer Composition`,source:zi,section:`Guides`},{slug:`examples-selection`,label:`Selection & Sub-Networks`,source:Bi,section:`Guides`},{slug:`tutorial-lif`,label:`Tutorial: LIF Neurons`,source:ia,section:`Guides`},{slug:`tutorial-connectome`,label:`Tutorial: Connectomes`,source:aa,section:`Guides`},{slug:`examples-custom-policy`,label:`Custom Signal Policy`,source:Ri,section:`Guides`},{slug:`framework`,label:`Framework API`,source:Vi,section:`Reference`},{slug:`backends`,label:`Backends`,source:wi,section:`Reference`},{slug:`devices`,label:`Device Support`,source:ea,section:`Reference`},{slug:`configuration`,label:`Configuration`,source:Mi,section:`Reference`},{slug:`api-reference`,label:`API Reference`,source:ji,section:`Reference`},{slug:`biology`,label:`Biological Model`,source:Ti,section:`Science`},{slug:`scientific-reference`,label:`Scientific Reference`,source:Oi,section:`Science`},{slug:`limitations`,label:`Scientific Limitations`,source:na,section:`Science`},{slug:`interoperability`,label:`Interoperability`,source:Ei,section:`Science`},{slug:`architecture`,label:`Architecture`,source:Ci,section:`Development`},{slug:`rust-core`,label:`Rust Core`,source:sa,section:`Development`},{slug:`release-engineering`,label:`Release Process`,source:ki,section:`Development`},{slug:`contributing`,label:`Contributing`,source:Ai,section:`Development`},{slug:`faq`,label:`FAQ`,source:ta,section:`Project`},{slug:`privacy`,label:`Privacy Policy`,source:Ni,section:`Project`},{slug:`terms`,label:`Terms & Conditions`,source:Pi,section:`Project`},{slug:`license`,label:`License`,source:Fi,section:`Project`},{slug:`code-of-conduct`,label:`Code of Conduct`,source:Ii,section:`Project`},{slug:`security`,label:`Security Policy`,source:Li,section:`Project`},{slug:`errors`,label:`Errors & Diagnostics`,source:ra,section:`Reference`},{slug:`cli-examples`,label:`CLI Examples`,source:da,section:`Reference`},{slug:`glossary`,label:`Glossary`,source:ua,section:`Reference`},{slug:`migration-guide`,label:`Migration Guide`,source:fa,section:`Development`},{slug:`benchmarks`,label:`Benchmarks`,source:pa,section:`Development`},{slug:`troubleshooting`,label:`Troubleshooting`,source:H,section:`Project`},{slug:`playground`,label:`Playground`,source:la,section:`Tools`}];B.setOptions({gfm:!0,breaks:!1});var Xp=e=>B.parse(e).trim(),Zp=e=>e.replace(/^:::DOC-NOTE ?\n?([\s\S]*?)\n:::/gm,(e,t)=>`<div class="callout callout-note"><p class="callout-title">Note</p>\n${Xp(t)}\n</div>`).replace(/^:::DOC-WARN ?\n?([\s\S]*?)\n:::/gm,(e,t)=>`<div class="callout callout-warn"><p class="callout-title">Constraint</p>\n${Xp(t)}\n</div>`).replace(/^:::DOC-TIP ?\n?([\s\S]*?)\n:::/gm,(e,t)=>`<div class="callout callout-tip"><p class="callout-title">Tip</p>\n${Xp(t)}\n</div>`),Qp=e=>Kr.sanitize(B.parse(Zp(e)),{ADD_ATTR:[`target`,`rel`,`class`]}),$p=e=>e.replace(/href="([A-Za-z0-9_-]+)\.md(#[^"]*)?"/g,(e,t,n)=>`href="${tm}/${t}${n??``}"`),em=`/axonweave/`,tm=em.endsWith(`/`)?em.slice(0,-1):em,nm=e=>`${em}${e===`index`?``:e}`,rm=()=>location.pathname.replace(tm,``).replace(/^\//,``).replace(/\/$/,``)||`index`,im=[`stable (0.2.0)`,`nightly`];function am({slug:e}){return(0,x.useEffect)(()=>{qr.default.highlightAllUnder(document.querySelector(`article`)??document.body),[...(document.querySelector(`article`)??document.body).querySelectorAll(`pre`)].forEach(e=>{if(e.querySelector(`.code-topbar`))return;let t=e.querySelector(`code`),n=[...(t?.className||``).match(/language-([\w-]+)/)||[]][1],r=n===`python`||n===`rust`||n===`bash`,i=document.createElement(`div`);if(i.className=`code-topbar`,n&&n!==`text`&&n!==`none`){let e=document.createElement(`span`);e.className=`lang-chip`,e.setAttribute(`aria-hidden`,`true`),e.textContent=n,i.appendChild(e)}if(r){let e=document.createElement(`button`);e.className=`copy-button`,e.setAttribute(`aria-label`,`Copy code`),e.innerHTML=`<span class="copy-label">Copy</span>`,e.onclick=async()=>{await navigator.clipboard.writeText(t?.textContent||``);let n=e.querySelector(`.copy-label`);e.classList.add(`copied`),n&&(n.textContent=`Copied!`),setTimeout(()=>{e.classList.remove(`copied`),n&&(n.textContent=`Copy`)},1400)},i.appendChild(e)}let a=!1;if((n===`python`||n===`rust`||n===`bash`)&&t){let n=(t.textContent||``).replace(/\n$/,``).split(`
`).length;if(n>=4){a=!0;let t=document.createElement(`div`);t.className=`line-numbers`,t.setAttribute(`aria-hidden`,`true`);let r=``;for(let e=1;e<=n;e++)r+=e+`
`;t.textContent=r,e.__lineNumbers=t,e.__lineCount=n}}let o=document.createElement(`div`);o.className=`codeblock`+(a?` has-lines`:``),e.replaceWith(o),i.children.length>0&&o.appendChild(i),a&&e.__lineNumbers&&o.appendChild(e.__lineNumbers),o.appendChild(e);let s=document.createElement(`span`);s.className=`scroll-hint`,s.setAttribute(`aria-hidden`,`true`),s.textContent=`scroll`,o.appendChild(s);let c=()=>s.classList.toggle(`visible`,e.scrollWidth>e.clientWidth+4);c(),e.addEventListener(`scroll`,()=>s.classList.remove(`visible`),{once:!0,passive:!0}),typeof ResizeObserver<`u`&&new ResizeObserver(c).observe(e)});let e=document.querySelector(`article`);if(e&&/\$\$[^$]+\$\$|(?<![\\$\w])\$(?!\s)[^$\n]+?(?<!\\)\$(?![\w$])/.test(e.textContent||``)&&!window.MathJax){let e=document.createElement(`script`);e.src=`https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js`,e.async=!0,window.MathJax={tex:{inlineMath:[[`$`,`$`]],displayMath:[[`$$`,`$$`]]}},document.head.appendChild(e)}},[e]),null}function om(){let[e,t]=(0,x.useState)(rm()),[n,r]=(0,x.useState)(localStorage.getItem(`axonweave-theme`)!==`light`),[i,a]=(0,x.useState)(!1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)(()=>parseInt(localStorage.getItem(`axonweave-sidebar`)||`240`,10)),[u,d]=(0,x.useState)(()=>parseInt(localStorage.getItem(`axonweave-toc`)||`240`,10)),[f,p]=(0,x.useState)(im[0]),m=(0,x.useRef)(null),h=(0,x.useRef)(null);(0,x.useEffect)(()=>{let e=()=>t(rm());return addEventListener(`popstate`,e),()=>removeEventListener(`popstate`,e)},[]),(0,x.useEffect)(()=>{document.documentElement.dataset.theme=n?`dark`:`light`,localStorage.setItem(`axonweave-theme`,n?`dark`:`light`)},[n]),(0,x.useEffect)(()=>{let e=e=>{if(!m.current)return;let t=Math.min(420,Math.max(180,m.current.startW+(e.clientX-m.current.startX)));l(t)},t=()=>{m.current&&(m.current=null,document.body.classList.remove(`resizing`))};return addEventListener(`mousemove`,e),addEventListener(`mouseup`,t),()=>{removeEventListener(`mousemove`,e),removeEventListener(`mouseup`,t)}},[]),(0,x.useEffect)(()=>{localStorage.setItem(`axonweave-sidebar`,String(c))},[c]),(0,x.useEffect)(()=>{let e=e=>{if(!h.current)return;let t=Math.min(400,Math.max(160,h.current.startW-(e.clientX-h.current.startX)));d(t)},t=()=>{h.current&&(h.current=null,document.body.classList.remove(`resizing`))};return addEventListener(`mousemove`,e),addEventListener(`mouseup`,t),()=>{removeEventListener(`mousemove`,e),removeEventListener(`mouseup`,t)}},[]),(0,x.useEffect)(()=>{localStorage.setItem(`axonweave-toc`,String(u))},[u]),(0,x.useEffect)(()=>{let e=e=>{e.shiftKey&&e.key===`?`&&(e.preventDefault(),s(!0)),e.key===`Escape`&&s(!1)};return addEventListener(`keydown`,e),()=>removeEventListener(`keydown`,e)},[]);let g=Yp.find(t=>t.slug===e),_=(0,x.useMemo)(()=>g?$p(Qp(g.source)):``,[g]),v=()=>{let e=document.documentElement,t=e.style.scrollBehavior;e.style.scrollBehavior=`auto`,window.scrollTo(0,0),e.style.scrollBehavior=t};(0,x.useEffect)(()=>{document.title=g?`${g.label} · AxonWeave`:`Page not found · AxonWeave`},[g]);let y=[...new Set(Yp.map(e=>e.section))],b=e=>{history.pushState({},``,nm(e)),t(e),a(!1),v()};return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(Re,{children:[(0,U.jsx)(`meta`,{name:`description`,content:g?`AxonWeave ${g.label} documentation`:`AxonWeave documentation`}),(0,U.jsx)(`meta`,{property:`og:title`,content:g?`${g.label} · AxonWeave`:`AxonWeave Documentation`}),(0,U.jsx)(`meta`,{property:`og:description`,content:g?`AxonWeave ${g.label} documentation`:`AxonWeave documentation`}),(0,U.jsx)(`meta`,{name:`twitter:card`,content:`summary`})]}),(0,U.jsxs)(`div`,{className:`app`,children:[(0,U.jsxs)(`header`,{className:`topbar`,children:[(0,U.jsx)(`button`,{className:`icon-button mobile-menu`,onClick:()=>a(!i),"aria-label":`Open navigation`,children:(0,U.jsx)(hi,{size:20})}),(0,U.jsxs)(`a`,{className:`brand`,href:`/`,onClick:e=>{e.preventDefault(),b(`index`)},children:[(0,U.jsx)(`img`,{src:`${em}logo.svg`,alt:`AxonWeave`}),(0,U.jsx)(`span`,{children:`AxonWeave`})]}),(0,U.jsxs)(`nav`,{className:`topnav`,children:[(0,U.jsx)(`a`,{href:nm(`core-concepts`),onClick:e=>{e.preventDefault(),b(`core-concepts`)},children:`Learn`}),(0,U.jsx)(`a`,{href:nm(`api-reference`),onClick:e=>{e.preventDefault(),b(`api-reference`)},children:`API`}),(0,U.jsx)(`a`,{href:nm(`tasks`),onClick:e=>{e.preventDefault(),b(`tasks`)},children:`Tutorials`})]}),(0,U.jsxs)(`button`,{className:`search-trigger`,onClick:()=>s(!0),"aria-label":`Search documentation (Shift+/)`,children:[(0,U.jsx)(pi,{size:15}),(0,U.jsx)(`span`,{children:`Search documentation...`}),(0,U.jsx)(`kbd`,{children:`Shift+/`})]}),(0,U.jsxs)(`div`,{className:`top-actions`,children:[(0,U.jsxs)(`div`,{className:`learn-menu`,children:[(0,U.jsxs)(`button`,{className:`learn-trigger version-trigger`,children:[f,` `,(0,U.jsx)(yi,{size:12})]}),(0,U.jsx)(`div`,{className:`learn-dropdown version-dropdown`,children:im.map(e=>(0,U.jsx)(`button`,{className:e===f?`version-item active`:`version-item`,onClick:()=>p(e),children:e},e))})]}),(0,U.jsx)(`button`,{className:`icon-button`,onClick:()=>r(!n),"aria-label":`Toggle theme`,children:n?(0,U.jsx)(fi,{size:19}):(0,U.jsx)(mi,{size:19})}),(0,U.jsxs)(`a`,{className:`nav-playground-btn`,href:nm(`playground`),onClick:e=>{e.preventDefault(),b(`playground`)},children:[(0,U.jsx)(ci,{size:15}),` Playground`]}),(0,U.jsx)(`a`,{className:`gh-link`,href:`https://github.com/dhakalnirajan/axonweave`,target:`_blank`,rel:`noreferrer`,"aria-label":`GitHub repository`,children:(0,U.jsx)(gi,{size:19})})]})]}),(0,U.jsxs)(`div`,{className:`shell${e===`playground`?` pg-shell`:``}`,style:{"--sidebar-w":`${c}px`,"--toc-w":`${u}px`},children:[e!==`playground`&&i&&(0,U.jsx)(`div`,{className:`sidebar-overlay visible`,onClick:()=>a(!1),"aria-hidden":`true`}),e!==`playground`&&(0,U.jsxs)(`aside`,{className:`sidebar ${i?`open`:``}`,children:[(0,U.jsxs)(`div`,{className:`sidebar-header`,children:[`Documentation `,(0,U.jsx)(`button`,{className:`icon-button close-mobile`,onClick:()=>a(!1),children:(0,U.jsx)(li,{size:18})})]}),y.map(t=>(0,U.jsxs)(`div`,{className:`nav-section`,children:[(0,U.jsx)(`div`,{className:`nav-label`,children:t}),Yp.filter(e=>e.section===t).map(t=>(0,U.jsx)(`a`,{className:e===t.slug?`active`:``,href:nm(t.slug),onClick:e=>{e.preventDefault(),b(t.slug)},children:t.label},t.slug))]},t))]}),(0,U.jsx)(`main`,{id:`main`,className:`content${e===`playground`?` pg-content`:``}`,children:g?e===`playground`?(0,U.jsx)(Jp,{dark:n}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(`div`,{className:`doc-meta-row`,children:[(0,U.jsxs)(`nav`,{className:`breadcrumbs`,"aria-label":`Breadcrumb`,children:[(0,U.jsx)(`a`,{className:`crumb-link`,href:nm(`index`),onClick:e=>{e.preventDefault(),b(`index`)},children:`Docs`}),(0,U.jsx)(`span`,{children:`/`}),(0,U.jsx)(`span`,{className:`crumb-here`,children:g.label})]}),(0,U.jsx)(sm,{slug:e})]}),(0,U.jsx)(`article`,{dangerouslySetInnerHTML:{__html:_}}),e===`index`&&(0,U.jsx)(`div`,{className:`hero-cta`,children:(0,U.jsx)(`button`,{className:`primary`,onClick:()=>b(`getting-started`),children:`Install AxonWeave`})}),(0,U.jsx)(am,{slug:e}),(0,U.jsx)(um,{slug:e,navigate:b})]}):(0,U.jsx)(lm,{navigate:b})}),g&&e!==`playground`&&(0,U.jsxs)(`aside`,{className:`toc`,children:[(0,U.jsx)(`div`,{className:`toc-title`,children:`On this page`}),(0,U.jsx)(cm,{slug:e})]}),g&&e!==`playground`&&(0,U.jsx)(`div`,{className:`toc-resizer`,onMouseDown:e=>{h.current={startX:e.clientX,startW:u},document.body.classList.add(`resizing`)},role:`separator`,"aria-orientation":`vertical`,"aria-label":`Resize table of contents`,tabIndex:0})]}),e!==`playground`&&(0,U.jsx)(`div`,{className:`sidebar-resizer`,onMouseDown:e=>{m.current={startX:e.clientX,startW:c},document.body.classList.add(`resizing`)},role:`separator`,"aria-orientation":`vertical`,"aria-label":`Resize sidebar`,tabIndex:0}),(0,U.jsxs)(`footer`,{children:[(0,U.jsx)(`span`,{children:`AxonWeave · Apache-2.0 software`}),(0,U.jsxs)(`span`,{children:[(0,U.jsx)(`a`,{href:nm(`privacy`),onClick:e=>{e.preventDefault(),b(`privacy`)},children:`Privacy`}),` · `,(0,U.jsx)(`a`,{href:nm(`terms`),onClick:e=>{e.preventDefault(),b(`terms`)},children:`Terms`})]})]}),(0,U.jsx)(fm,{}),o&&(0,U.jsx)(dm,{pages:Yp,onClose:()=>s(!1),onGo:b})]})]})}function sm({slug:e}){let t=`axonweave-feedback-${e}`,[n,r]=(0,x.useState)(()=>localStorage.getItem(t)),i=e=>{localStorage.setItem(t,e),r(e)};return(0,U.jsx)(`div`,{className:`feedback`,role:`group`,"aria-label":`Page feedback`,children:n?(0,U.jsx)(`span`,{className:`feedback-thanks`,children:`Thanks for your feedback.`}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`span`,{className:`feedback-label`,children:`Was this helpful?`}),(0,U.jsx)(`button`,{className:`feedback-button`,onClick:()=>i(`up`),"aria-label":`Yes, this page was helpful`,children:(0,U.jsx)(ui,{size:15})}),(0,U.jsx)(`button`,{className:`feedback-button`,onClick:()=>i(`down`),"aria-label":`No, this page was not helpful`,children:(0,U.jsx)(di,{size:15})})]})})}function cm({slug:e}){let[t,n]=(0,x.useState)([]),[r,i]=(0,x.useState)(``);return(0,x.useEffect)(()=>{i(``);let e=[...document.querySelectorAll(`article h2,article h3`)].map((e,t)=>{let n=`section-${t}-${(e.textContent||``).toLowerCase().replace(/[^a-z0-9]+/g,`-`)}`;return e.id=n,{id:n,text:e.textContent||``,level:e.tagName===`H2`?2:3}});if(n(e),!e.length)return;let t=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top);t[0]&&i(t[0].target.id)},{rootMargin:`-64px 0px -70% 0px`});return e.forEach(e=>{let n=document.getElementById(e.id);n&&t.observe(n)}),()=>t.disconnect()},[e]),(0,U.jsx)(`nav`,{children:t.map(e=>(0,U.jsxs)(`a`,{className:(e.level===3?`sub `:``)+(r===e.id?`active`:``),href:`#${e.id}`,children:[(0,U.jsx)(vi,{size:11,className:`toc-caret`}),e.text]},e.id))})}function lm({navigate:e}){return(0,U.jsxs)(`div`,{className:`not-found`,children:[(0,U.jsx)(`p`,{className:`eyebrow`,children:`404`}),(0,U.jsx)(`h1`,{children:`Page not found`}),(0,U.jsx)(`p`,{children:`The requested documentation page does not exist.`}),(0,U.jsx)(`button`,{className:`primary`,onClick:()=>e(`index`),children:`Return to documentation`})]})}function um({slug:e,navigate:t}){let n=Yp.map(e=>e.slug),r=n.indexOf(e);if(r===-1)return null;let i=r>0?Yp[r-1]:null,a=r<n.length-1?Yp[r+1]:null;return(0,U.jsxs)(`div`,{className:`page-nav`,children:[i?(0,U.jsxs)(`button`,{className:`page-nav-cell prev`,onClick:()=>t(i.slug),children:[(0,U.jsxs)(`span`,{className:`page-nav-dir`,children:[(0,U.jsx)(vi,{size:12,style:{transform:`rotate(180deg)`}}),` Previous`]}),(0,U.jsx)(`span`,{className:`page-nav-label`,children:i.label})]}):(0,U.jsx)(`span`,{className:`page-nav-cell`}),a?(0,U.jsxs)(`button`,{className:`page-nav-cell next`,onClick:()=>t(a.slug),children:[(0,U.jsxs)(`span`,{className:`page-nav-dir`,children:[`Next `,(0,U.jsx)(vi,{size:12})]}),(0,U.jsx)(`span`,{className:`page-nav-label`,children:a.label})]}):(0,U.jsx)(`span`,{className:`page-nav-cell`})]})}function dm({pages:e,onClose:t,onGo:n}){let[r,i]=(0,x.useState)(``),a=e.filter(e=>(e.label+` `+e.source).toLowerCase().includes(r.toLowerCase())).slice(0,8);return(0,U.jsx)(`div`,{className:`overlay`,onMouseDown:t,children:(0,U.jsxs)(`div`,{className:`search-dialog`,onMouseDown:e=>e.stopPropagation(),children:[(0,U.jsxs)(`div`,{className:`search-head`,children:[(0,U.jsx)(pi,{size:18}),(0,U.jsx)(`input`,{autoFocus:!0,value:r,onChange:e=>i(e.target.value),placeholder:`Search documentation`}),(0,U.jsx)(`button`,{className:`icon-button`,onClick:t,children:(0,U.jsx)(li,{size:18})})]}),a.map(e=>(0,U.jsxs)(`button`,{className:`search-result`,onClick:()=>{n(e.slug),t()},children:[(0,U.jsx)(`strong`,{children:e.label}),(0,U.jsx)(`span`,{children:e.section})]},e.slug))]})})}function fm(){let[e,t]=(0,x.useState)(!1),[n,r]=(0,x.useState)(!1);(0,x.useEffect)(()=>{localStorage.getItem(`axonweave-cookie-consent`)||t(!0)},[]);let i=e=>{localStorage.setItem(`axonweave-cookie-consent`,e),t(!1),r(!1)};return e?(0,U.jsx)(`div`,{className:`cookie`,role:`dialog`,"aria-label":`Cookie preferences`,children:n?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`strong`,{children:`Manage preferences`}),(0,U.jsxs)(`label`,{className:`cookie-pref`,children:[(0,U.jsx)(`input`,{type:`checkbox`,disabled:!0,checked:!0}),` Essential (always on)`]}),(0,U.jsxs)(`label`,{className:`cookie-pref`,children:[(0,U.jsx)(`input`,{type:`checkbox`}),` Analytics (coming soon)`]})]}),(0,U.jsxs)(`div`,{className:`cookie-actions`,children:[(0,U.jsx)(`button`,{className:`primary`,onClick:()=>i(`all`),children:`Save and accept`}),(0,U.jsx)(`button`,{className:`ghost`,onClick:()=>r(!1),children:`Back`})]})]}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`strong`,{children:`Privacy & cookies`}),(0,U.jsx)(`p`,{children:`This site uses essential cookies only. Optional analytics, if enabled, will be disclosed in the Privacy Policy. You may accept all or reject non-essential cookies.`})]}),(0,U.jsxs)(`div`,{className:`cookie-actions`,children:[(0,U.jsx)(`button`,{className:`primary`,onClick:()=>i(`all`),children:`Accept all`}),(0,U.jsx)(`button`,{className:`secondary`,onClick:()=>i(`essential`),children:`Reject all`}),(0,U.jsx)(`button`,{className:`ghost`,onClick:()=>r(!0),children:`Manage preferences`})]})]})}):null}(0,b.createRoot)(document.getElementById(`root`)).render((0,U.jsx)(we,{children:(0,U.jsx)(om,{})}));
//# sourceMappingURL=index-CflXW0wK.js.map