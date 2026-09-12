var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function te(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(te(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!te(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=te,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,te());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?te():S=!1}}}var te;if(typeof y==`function`)te=function(){y(ee)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=ee,te=function(){re.postMessage(null)}}else te=function(){_(ee,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,te()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),te=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case te:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],k=-1;function de(e){return{current:e}}function fe(e){0>k||(e.current=ue[k],ue[k]=null,k--)}function A(e,t){k++,ue[k]=e.current,e.current=t}var pe=de(null),me=de(null),he=de(null),ge=de(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(pe),A(pe,e)}function ve(){fe(pe),fe(me),fe(he)}function j(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function ye(e){me.current===e&&(fe(pe),fe(me)),ge.current===e&&(fe(ge),Qf._currentValue=le)}var M,be;function xe(e){if(M===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);M=t&&t[1]||``,be=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+M+e+be}var Se=!1;function Ce(e,t){if(!e||Se)return``;Se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Se=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?xe(n):``}function we(e,t){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe(`Lazy`);case 13:return e.child!==t&&t!==null?xe(`Suspense Fallback`):xe(`Suspense`);case 19:return xe(`SuspenseList`);case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return xe(`Activity`);default:return``}}function Te(e){try{var t=``,n=null;do t+=we(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ee=Object.prototype.hasOwnProperty,De=t.unstable_scheduleCallback,Oe=t.unstable_cancelCallback,ke=t.unstable_shouldYield,Ae=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,N=262144,Je=4194304;function Ye(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ye(n))):i=Ye(o):i=Ye(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ye(n))):i=Ye(o)):i=Ye(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ze(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $e(){var e=Je;return Je<<=1,!(Je&62914560)&&(Je=4194304),e}function et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&rt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function rt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function it(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function at(e,t){var n=t&-t;return n=n&42?1:ot(n),(n&(e.suspendedLanes|t))===0?n:0}function ot(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function st(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ct(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function lt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var P=Math.random().toString(36).slice(2),F=`__reactFiber$`+P,ut=`__reactProps$`+P,dt=`__reactContainer$`+P,ft=`__reactEvents$`+P,pt=`__reactListeners$`+P,mt=`__reactHandles$`+P,ht=`__reactResources$`+P,gt=`__reactMarker$`+P;function _t(e){delete e[F],delete e[ut],delete e[ft],delete e[pt],delete e[mt]}function vt(e){var t=e[F];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[F]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[F])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function yt(e){if(e=e[F]||e[dt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function xt(e){var t=e[ht];return t||=e[ht]={hoistableStyles:new Map,hoistableScripts:new Map},t}function I(e){e[gt]=!0}var St=new Set,Ct={};function wt(e,t){Tt(e,t),Tt(e+`Capture`,t)}function Tt(e,t){for(Ct[e]=t,e=0;e<t.length;e++)St.add(t[e])}var Et=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Dt={},Ot={};function kt(e){return Ee.call(Ot,e)?!0:Ee.call(Dt,e)?!1:Et.test(e)?Ot[e]=!0:(Dt[e]=!0,!1)}function At(e,t,n){if(kt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function jt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Mt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Nt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Pt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ft(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function It(e){if(!e._valueTracker){var t=Pt(e)?`checked`:`value`;e._valueTracker=Ft(e,t,``+e[t])}}function Lt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Pt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Rt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var zt=/[\n"\\]/g;function Bt(e){return e.replace(zt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Vt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Nt(t)):e.value!==``+Nt(t)&&(e.value=``+Nt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ut(e,o,Nt(n)):Ut(e,o,Nt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Nt(s):e.removeAttribute(`name`)}function Ht(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){It(e);return}n=n==null?``:``+Nt(n),t=t==null?n:``+Nt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),It(e)}function Ut(e,t,n){t===`number`&&Rt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Wt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gt(e,t,n){if(t!=null&&(t=``+Nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Nt(n)}function Kt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Nt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),It(e)}function qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Yt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Jt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Xt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Yt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Yt(e,o,t[o])}function Zt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Qt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),$t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function en(e){return $t.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function tn(){}var nn=null;function rn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var an=null,on=null;function sn(e){var t=yt(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Vt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Bt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ut]||null;if(!a)throw Error(i(90));Vt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Lt(r)}break a;case`textarea`:Gt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Wt(e,!!n.multiple,t,!1)}}}var cn=!1;function ln(e,t,n){if(cn)return e(t,n);cn=!0;try{return e(t)}finally{if(cn=!1,(an!==null||on!==null)&&(bu(),an&&(t=an,e=on,on=an=null,sn(t),e)))for(t=0;t<e.length;t++)sn(e[t])}}function un(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ut]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var dn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),fn=!1;if(dn)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){fn=!0}}),window.addEventListener(`test`,pn,pn),window.removeEventListener(`test`,pn,pn)}catch{fn=!1}var mn=null,hn=null,gn=null;function _n(){if(gn)return gn;var e,t=hn,n=t.length,r,i=`value`in mn?mn.value:mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return gn=i.slice(e,1<r?1-r:void 0)}function vn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yn(){return!0}function bn(){return!1}function xn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?yn:bn,this.isPropagationStopped=bn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=yn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=yn)},persist:function(){},isPersistent:yn}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},L=xn(Sn),Cn=h({},Sn,{view:0,detail:0}),wn=xn(Cn),Tn,En,Dn,On=h({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Dn&&(Dn&&e.type===`mousemove`?(Tn=e.screenX-Dn.screenX,En=e.screenY-Dn.screenY):En=Tn=0,Dn=e),Tn)},movementY:function(e){return`movementY`in e?e.movementY:En}}),kn=xn(On),An=xn(h({},On,{dataTransfer:0})),jn=xn(h({},Cn,{relatedTarget:0})),Mn=xn(h({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0})),Nn=xn(h({},Sn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Pn=xn(h({},Sn,{data:0})),Fn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},In={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Ln={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Rn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ln[e])?!!t[e]:!1}function zn(){return Rn}var Bn=xn(h({},Cn,{key:function(e){if(e.key){var t=Fn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=vn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?In[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zn,charCode:function(e){return e.type===`keypress`?vn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?vn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Vn=xn(h({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Hn=xn(h({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zn})),Un=xn(h({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Wn=xn(h({},On,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Gn=xn(h({},Sn,{newState:0,oldState:0})),Kn=[9,13,27,32],qn=dn&&`CompositionEvent`in window,Jn=null;dn&&`documentMode`in document&&(Jn=document.documentMode);var Yn=dn&&`TextEvent`in window&&!Jn,Xn=dn&&(!qn||Jn&&8<Jn&&11>=Jn),Zn=` `,Qn=!1;function $n(e,t){switch(e){case`keyup`:return Kn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function er(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var tr=!1;function nr(e,t){switch(e){case`compositionend`:return er(t);case`keypress`:return t.which===32?(Qn=!0,Zn):null;case`textInput`:return e=t.data,e===Zn&&Qn?null:e;default:return null}}function rr(e,t){if(tr)return e===`compositionend`||!qn&&$n(e,t)?(e=_n(),gn=hn=mn=null,tr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Xn&&t.locale!==`ko`?null:t.data;default:return null}}var ir={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ir[e.type]:t===`textarea`}function or(e,t,n,r){an?on?on.push(r):on=[r]:an=r,t=Ed(t,`onChange`),0<t.length&&(n=new L(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var R=null,sr=null;function z(e){yd(e,0)}function cr(e){if(Lt(bt(e)))return e}function lr(e,t){if(e===`change`)return t}var ur=!1;if(dn){var dr;if(dn){var fr=`oninput`in document;if(!fr){var pr=document.createElement(`div`);pr.setAttribute(`oninput`,`return;`),fr=typeof pr.oninput==`function`}dr=fr}else dr=!1;ur=dr&&(!document.documentMode||9<document.documentMode)}function mr(){R&&(R.detachEvent(`onpropertychange`,hr),sr=R=null)}function hr(e){if(e.propertyName===`value`&&cr(sr)){var t=[];or(t,sr,e,rn(e)),ln(z,t)}}function gr(e,t,n){e===`focusin`?(mr(),R=t,sr=n,R.attachEvent(`onpropertychange`,hr)):e===`focusout`&&mr()}function _r(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return cr(sr)}function vr(e,t){if(e===`click`)return cr(t)}function yr(e,t){if(e===`input`||e===`change`)return cr(t)}function br(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var xr=typeof Object.is==`function`?Object.is:br;function Sr(e,t){if(xr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ee.call(t,i)||!xr(e[i],t[i]))return!1}return!0}function Cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,t){var n=Cr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Cr(n)}}function Tr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Er(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Rt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rt(e.document)}return t}function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Or=dn&&`documentMode`in document&&11>=document.documentMode,kr=null,Ar=null,jr=null,Mr=!1;function Nr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mr||kr==null||kr!==Rt(r)||(r=kr,`selectionStart`in r&&Dr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Sr(jr,r)||(jr=r,r=Ed(Ar,`onSelect`),0<r.length&&(t=new L(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Fr={animationend:Pr(`Animation`,`AnimationEnd`),animationiteration:Pr(`Animation`,`AnimationIteration`),animationstart:Pr(`Animation`,`AnimationStart`),transitionrun:Pr(`Transition`,`TransitionRun`),transitionstart:Pr(`Transition`,`TransitionStart`),transitioncancel:Pr(`Transition`,`TransitionCancel`),transitionend:Pr(`Transition`,`TransitionEnd`)},Ir={},Lr={};dn&&(Lr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),`TransitionEvent`in window||delete Fr.transitionend.transition);function Rr(e){if(Ir[e])return Ir[e];if(!Fr[e])return e;var t=Fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lr)return Ir[e]=t[n];return e}var zr=Rr(`animationend`),Br=Rr(`animationiteration`),Vr=Rr(`animationstart`),Hr=Rr(`transitionrun`),Ur=Rr(`transitionstart`),Wr=Rr(`transitioncancel`),Gr=Rr(`transitionend`),Kr=new Map,qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);qr.push(`scrollEnd`);function Jr(e,t){Kr.set(e,t),wt(t,[e])}var Yr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Xr=[],Zr=0,Qr=0;function $r(){for(var e=Zr,t=Qr=Zr=0;t<e;){var n=Xr[t];Xr[t++]=null;var r=Xr[t];Xr[t++]=null;var i=Xr[t];Xr[t++]=null;var a=Xr[t];if(Xr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ri(n,i,a)}}function ei(e,t,n,r){Xr[Zr++]=e,Xr[Zr++]=t,Xr[Zr++]=n,Xr[Zr++]=r,Qr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ti(e,t,n,r){return ei(e,t,n,r),ii(e)}function ni(e,t){return ei(e,null,null,t),ii(e)}function ri(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ii(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ai={};function oi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,t,n,r){return new oi(e,t,n,r)}function ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function li(e,t){var n=e.alternate;return n===null?(n=si(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ui(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ci(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=si(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return fi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=si(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=si(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=si(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case te:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=si(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function fi(e,t,n,r){return e=si(7,e,r,t),e.lanes=n,e}function pi(e,t,n){return e=si(6,e,null,t),e.lanes=n,e}function mi(e){var t=si(18,null,null,0);return t.stateNode=e,t}function hi(e,t,n){return t=si(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gi=new WeakMap;function _i(e,t){if(typeof e==`object`&&e){var n=gi.get(e);return n===void 0?(t={value:e,source:t,stack:Te(t)},gi.set(e,t),t):n}return{value:e,source:t,stack:Te(t)}}var vi=[],yi=0,bi=null,xi=0,Si=[],Ci=0,wi=null,Ti=1,Ei=``;function Di(e,t){vi[yi++]=xi,vi[yi++]=bi,bi=e,xi=t}function Oi(e,t,n){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,wi=e;var r=Ti;e=Ei;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ti=1<<32-Ue(t)+i|n<<i|r,Ei=a+e}else Ti=1<<a|n<<i|r,Ei=e}function ki(e){e.return!==null&&(Di(e,1),Oi(e,1,0))}function Ai(e){for(;e===bi;)bi=vi[--yi],vi[yi]=null,xi=vi[--yi],vi[yi]=null;for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ei=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null}function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,Ti=t.id,Ei=t.overflow,wi=e}var Mi=null,B=null,V=!1,Ni=null,Pi=!1,Fi=Error(i(519));function Ii(e){throw Hi(_i(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Fi}function Li(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[F]=e,t[ut]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Ht(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Kt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=tn),t=!0):t=!1,t||Ii(e,!0)}function Ri(e){for(Mi=e.return;Mi;)switch(Mi.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Mi=Mi.return}}function zi(e){if(e!==Mi)return!1;if(!V)return Ri(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&B&&Ii(e),Ri(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=uf(e)}else t===27?(t=B,Zd(e.type)?(e=lf,lf=null,B=e):B=t):B=Mi?cf(e.stateNode.nextSibling):null;return!0}function Bi(){B=Mi=null,V=!1}function Vi(){var e=Ni;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ni=null),e}function Hi(e){Ni===null?Ni=[e]:Ni.push(e)}var Ui=de(null),Wi=null,Gi=null;function Ki(e,t,n){A(Ui,t._currentValue),t._currentValue=n}function qi(e){e._currentValue=Ui.current,fe(Ui)}function Ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Yi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ji(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ji(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Xi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;xr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Yi(t,e,n,r),t.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!xr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qi(e){Wi=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $i(e){return ta(Wi,e)}function ea(e,t){return Wi===null&&Qi(e),ta(e,t)}function ta(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gi===null){if(e===null)throw Error(i(308));Gi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gi=Gi.next=t;return n}var na=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ra=t.unstable_scheduleCallback,ia=t.unstable_NormalPriority,aa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oa(){return{controller:new na,data:new Map,refCount:0}}function sa(e){e.refCount--,e.refCount===0&&ra(ia,function(){e.controller.abort()})}var ca=null,la=0,ua=0,H=null;function da(e,t){if(ca===null){var n=ca=[];la=0,ua=dd(),H={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return la++,t.then(fa,fa),t}function fa(){if(--la===0&&ca!==null){H!==null&&(H.status=`fulfilled`);var e=ca;ca=null,ua=0,H=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function pa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ma=D.S;D.S=function(e,t){eu=je(),typeof t==`object`&&t&&typeof t.then==`function`&&da(e,t),ma!==null&&ma(e,t)};var ha=de(null);function ga(){var e=ha.current;return e===null?q.pooledCache:e}function _a(e,t){t===null?A(ha,ha.current):A(ha,t.pool)}function va(){var e=ga();return e===null?null:{parent:aa._currentValue,pool:e}}var ya=Error(i(460)),ba=Error(i(474)),xa=Error(i(542)),Sa={then:function(){}};function Ca(e){return e=e.status,e===`fulfilled`||e===`rejected`}function wa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(tn,tn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Oa(e),e;default:if(typeof t.status==`string`)t.then(tn,tn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Oa(e),e}throw Ea=t,ya}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ea=e,ya):e}}var Ea=null;function Da(){if(Ea===null)throw Error(i(459));var e=Ea;return Ea=null,e}function Oa(e){if(e===ya||e===xa)throw Error(i(483))}var ka=null,Aa=0;function ja(e){var t=Aa;return Aa+=1,ka===null&&(ka=[]),wa(ka,e,t)}function Ma(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Na(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Pa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=li(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=pi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===te&&Ta(i)===t.type)?(t=a(t,n.props),Ma(t,n),t.return=e,t):(t=di(n.type,n.key,n.props,null,e.mode,r),Ma(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=hi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=fi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=pi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=di(t.type,t.key,t.props,null,e.mode,n),Ma(n,t),n.return=e,n;case v:return t=hi(t,e.mode,n),t.return=e,t;case te:return t=Ta(t),f(e,t,n)}if(ce(t)||ae(t))return t=fi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ja(t),n);if(t.$$typeof===C)return f(e,ea(e,t),n);Na(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case te:return n=Ta(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ja(n),r);if(n.$$typeof===C)return p(e,t,ea(e,n),r);Na(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case te:return r=Ta(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ja(r),i);if(r.$$typeof===C)return m(e,t,n,ea(t,r),i);Na(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Di(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Di(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Di(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Di(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Di(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Di(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===te&&Ta(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ma(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=fi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=di(o.type,o.key,o.props,null,e.mode,c),Ma(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=hi(o,e.mode,c),c.return=e,e=c}return s(e);case te:return o=Ta(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,ja(o),c);if(o.$$typeof===C)return b(e,r,ea(e,o),c);Na(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=pi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Aa=0;var i=b(e,t,n,r);return ka=null,i}catch(t){if(t===ya||t===xa)throw t;var a=si(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Fa=Pa(!0),Ia=Pa(!1),La=!1;function Ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function za(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Va(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ii(e),ri(e,null,n),t}return ei(e,r,t,n),ii(e)}function Ha(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Wa=!1;function Ga(){if(Wa){var e=H;if(e!==null)throw e}}function Ka(e,t,n,r){Wa=!1;var i=e.updateQueue;La=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ua&&(Wa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:La=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ja(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)qa(n[e],t)}var Ya=de(null),Xa=de(0);function Za(e,t){e=Ul,A(Xa,e),A(Ya,t),Ul=e|t.baseLanes}function Qa(){A(Xa,Ul),A(Ya,Ya.current)}function $a(){Ul=Xa.current,fe(Ya),fe(Xa)}var eo=de(null),to=null;function no(e){var t=e.alternate;A(so,so.current&1),A(eo,e),to===null&&(t===null||Ya.current!==null||t.memoizedState!==null)&&(to=e)}function ro(e){A(so,so.current),A(eo,e),to===null&&(to=e)}function io(e){e.tag===22?(A(so,so.current),A(eo,e),to===null&&(to=e)):ao(e)}function ao(){A(so,so.current),A(eo,eo.current)}function oo(e){fe(eo),to===e&&(to=null),fe(so)}var so=de(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lo=0,U=null,W=null,uo=null,fo=!1,po=!1,mo=!1,ho=0,go=0,_o=null,vo=0;function yo(){throw Error(i(321))}function bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xr(e[n],t[n]))return!1;return!0}function xo(e,t,n,r,i,a){return lo=a,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Rs:zs,mo=!1,a=n(r,i),mo=!1,po&&(a=Co(t,n,r,i)),So(e),a}function So(e){D.H=Ls;var t=W!==null&&W.next!==null;if(lo=0,uo=W=U=null,fo=!1,go=0,_o=null,t)throw Error(i(300));e===null||nc||(e=e.dependencies,e!==null&&Zi(e)&&(nc=!0))}function Co(e,t,n,r){U=e;var a=0;do{if(po&&(_o=null),go=0,po=!1,25<=a)throw Error(i(301));if(a+=1,uo=W=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Bs,o=t(n,r)}while(po);return o}function wo(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?jo(t):t,e=e.useState()[0],(W===null?null:W.memoizedState)!==e&&(U.flags|=1024),t}function To(){var e=ho!==0;return ho=0,e}function Eo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Do(e){if(fo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fo=!1}lo=0,uo=W=U=null,po=!1,go=ho=0,_o=null}function Oo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return uo===null?U.memoizedState=uo=e:uo=uo.next=e,uo}function ko(){if(W===null){var e=U.alternate;e=e===null?null:e.memoizedState}else e=W.next;var t=uo===null?U.memoizedState:uo.next;if(t!==null)uo=t,W=e;else{if(e===null)throw U.alternate===null?Error(i(467)):Error(i(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},uo===null?U.memoizedState=uo=e:uo=uo.next=e}return uo}function Ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var t=go;return go+=1,_o===null&&(_o=[]),e=wa(_o,e,t),t=U,(uo===null?t.memoizedState:uo.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Rs:zs),e}function Mo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return jo(e);if(e.$$typeof===C)return $i(e)}throw Error(i(438,String(e)))}function No(e){var t=null,n=U.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=U.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Ao(),U.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Po(e,t){return typeof t==`function`?t(e):t}function Fo(e){return Io(ko(),W,e)}function Io(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(lo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ua&&(d=!0);else if((lo&p)===p){u=u.next,p===ua&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,U.lanes|=p,Gl|=p;f=u.action,mo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,U.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!xr(o,e.memoizedState)&&(nc=!0,d&&(n=H,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Lo(e){var t=ko(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);xr(o,t.memoizedState)||(nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ro(e,t,n){var r=U,a=ko(),o=V;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!xr((W||a).memoizedState,n);if(s&&(a.memoizedState=n,nc=!0),a=a.queue,ls(Vo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||uo!==null&&uo.memoizedState.tag&1){if(r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||lo&127||zo(r,t,n)}return n}function zo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t=Ao(),U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bo(e,t,n,r){t.value=n,t.getSnapshot=r,Ho(t)&&Uo(e)}function Vo(e,t,n){return n(function(){Ho(t)&&Uo(e)})}function Ho(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xr(e,n)}catch{return!0}}function Uo(e){var t=ni(e,2);t!==null&&hu(t,e,2)}function Wo(e){var t=Oo();if(typeof e==`function`){var n=e;if(e=n(),mo){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t}function Go(e,t,n,r){return e.baseState=n,Io(e,W,typeof r==`function`?r:Po)}function Ko(e,t,n,r,a){if(Ps(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Jo(e,t,s)}catch(n){Xo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Jo(e,t,a)}catch(n){Xo(e,t,n)}}function Jo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Yo(e,t,n)},function(n){return Xo(e,t,n)}):Yo(e,t,n)}function Yo(e,t,n){t.status=`fulfilled`,t.value=n,Zo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qo(e,n)))}function Xo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Zo(t),t=t.next;while(t!==r)}e.action=null}function Zo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qo(e,t){return t}function $o(e,t){if(V){var n=q.formState;if(n!==null){a:{var r=U;if(V){if(B){b:{for(var i=B,a=Pi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){B=cf(i.nextSibling),r=i.data===`F!`;break a}}Ii(r)}r=!1}r&&(t=n[0])}}return n=Oo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},n.queue=r,n=js.bind(null,U,r),r.dispatch=n,r=Wo(!1),a=Ns.bind(null,U,!1,r.queue),r=Oo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ko.bind(null,U,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function es(e){return ts(ko(),W,e)}function ts(e,t,n){if(t=Io(e,t,Qo)[0],e=Fo(Po)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=jo(t)}catch(e){throw e===ya?xa:e}else r=t;t=ko();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(U.flags|=2048,is(9,{destroy:void 0},ns.bind(null,i,n),null)),[r,a,e]}function ns(e,t){e.action=t}function rs(e){var t=ko(),n=W;if(n!==null)return ts(t,n,e);ko(),t=t.memoizedState,n=ko();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function is(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=U.updateQueue,t===null&&(t=Ao(),U.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function as(){return ko().memoizedState}function os(e,t,n,r){var i=Oo();U.flags|=e,i.memoizedState=is(1|t,{destroy:void 0},n,r===void 0?null:r)}function ss(e,t,n,r){var i=ko();r=r===void 0?null:r;var a=i.memoizedState.inst;W!==null&&r!==null&&bo(r,W.memoizedState.deps)?i.memoizedState=is(t,a,n,r):(U.flags|=e,i.memoizedState=is(1|t,a,n,r))}function cs(e,t){os(8390656,8,e,t)}function ls(e,t){ss(2048,8,e,t)}function us(e){U.flags|=4;var t=U.updateQueue;if(t===null)t=Ao(),U.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ds(e){var t=ko().memoizedState;return us({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function fs(e,t){return ss(4,2,e,t)}function ps(e,t){return ss(4,4,e,t)}function ms(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hs(e,t,n){n=n==null?null:n.concat([e]),ss(4,4,ms.bind(null,t,e),n)}function gs(){}function _s(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vs(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&bo(t,r[1]))return r[0];if(r=e(),mo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function ys(e,t,n){return n===void 0||lo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),U.lanes|=e,Gl|=e,n)}function bs(e,t,n,r){return xr(n,t)?n:Ya.current===null?!(lo&42)||lo&1073741824&&!(Y&261930)?(nc=!0,e.memoizedState=n):(e=mu(),U.lanes|=e,Gl|=e,t):(e=ys(e,n,r),xr(e,t)||(nc=!0),e)}function xs(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Ns(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ms(e,t,pa(c,r),pu(e)):Ms(e,t,r,pu(e))}catch(n){Ms(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function Ss(){}function Cs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ws(e).queue;xs(e,a,t,le,n===null?Ss:function(){return Ts(e),n(r)})}function ws(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ts(e){var t=ws(e);t.next===null&&(t=e.alternate.memoizedState),Ms(e,t.next.queue,{},pu())}function Es(){return $i(Qf)}function Ds(){return ko().memoizedState}function Os(){return ko().memoizedState}function ks(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ba(n);var r=Va(t,e,n);r!==null&&(hu(r,t,n),Ha(r,t,n)),t={cache:oa()},e.payload=t;return}t=t.return}}function As(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ps(e)?Fs(t,n):(n=ti(e,t,n,r),n!==null&&(hu(n,e,r),Is(n,t,r)))}function js(e,t,n){Ms(e,t,n,pu())}function Ms(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,xr(s,o))return ei(e,t,i,0),q===null&&$r(),!1}catch{}if(n=ti(e,t,i,r),n!==null)return hu(n,e,r),Is(n,t,r),!0}return!1}function Ns(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ps(e)){if(t)throw Error(i(479))}else t=ti(e,n,r,2),t!==null&&hu(t,e,2)}function Ps(e){var t=e.alternate;return e===U||t!==null&&t===U}function Fs(e,t){po=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Is(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}var Ls={readContext:$i,use:Mo,useCallback:yo,useContext:yo,useEffect:yo,useImperativeHandle:yo,useLayoutEffect:yo,useInsertionEffect:yo,useMemo:yo,useReducer:yo,useRef:yo,useState:yo,useDebugValue:yo,useDeferredValue:yo,useTransition:yo,useSyncExternalStore:yo,useId:yo,useHostTransitionStatus:yo,useFormState:yo,useActionState:yo,useOptimistic:yo,useMemoCache:yo,useCacheRefresh:yo};Ls.useEffectEvent=yo;var Rs={readContext:$i,use:Mo,useCallback:function(e,t){return Oo().memoizedState=[e,t===void 0?null:t],e},useContext:$i,useEffect:cs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),os(4194308,4,ms.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){os(4,2,e,t)},useMemo:function(e,t){var n=Oo();t=t===void 0?null:t;var r=e();if(mo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Oo();if(n!==void 0){var i=n(t);if(mo){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=As.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Oo();return e={current:e},t.memoizedState=e},useState:function(e){e=Wo(e);var t=e.queue,n=js.bind(null,U,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gs,useDeferredValue:function(e,t){return ys(Oo(),e,t)},useTransition:function(){var e=Wo(!1);return e=xs.bind(null,U,e.queue,!0,!1),Oo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=U,a=Oo();if(V){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||zo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,cs(Vo.bind(null,r,o,e),[e]),r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,o,n,t),null),n},useId:function(){var e=Oo(),t=q.identifierPrefix;if(V){var n=Ei,r=Ti;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ho++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=vo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Es,useFormState:$o,useActionState:$o,useOptimistic:function(e){var t=Oo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ns.bind(null,U,!0,n),n.dispatch=t,[e,t]},useMemoCache:No,useCacheRefresh:function(){return Oo().memoizedState=ks.bind(null,U)},useEffectEvent:function(e){var t=Oo(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},zs={readContext:$i,use:Mo,useCallback:_s,useContext:$i,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Fo,useRef:as,useState:function(){return Fo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){return bs(ko(),W.memoizedState,e,t)},useTransition:function(){var e=Fo(Po)[0],t=ko().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:es,useActionState:es,useOptimistic:function(e,t){return Go(ko(),W,e,t)},useMemoCache:No,useCacheRefresh:Os};zs.useEffectEvent=ds;var Bs={readContext:$i,use:Mo,useCallback:_s,useContext:$i,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Lo,useRef:as,useState:function(){return Lo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){var n=ko();return W===null?ys(n,e,t):bs(n,W.memoizedState,e,t)},useTransition:function(){var e=Lo(Po)[0],t=ko().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){var n=ko();return W===null?(n.baseState=e,[e,n.queue.dispatch]):Go(n,W,e,t)},useMemoCache:No,useCacheRefresh:Os};Bs.useEffectEvent=ds;function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ba(r);i.payload=t,n!=null&&(i.callback=n),t=Va(e,i,r),t!==null&&(hu(t,e,r),Ha(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ba(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Va(e,i,r),t!==null&&(hu(t,e,r),Ha(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ba(n);r.tag=2,t!=null&&(r.callback=t),t=Va(e,r,n),t!==null&&(hu(t,e,n),Ha(t,e,n))}};function Us(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(i,a):!0}function Ws(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Gs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ks(e){Yr(e)}function qs(e){console.error(e)}function Js(e){Yr(e)}function Ys(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){return n=Ba(n),n.tag=3,n.payload={element:null},n.callback=function(){Ys(e,t)},n}function Qs(e){return e=Ba(e),e.tag=3,e}function $s(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Xs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Xs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ec(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Xi(t,n,a,!0),n=eo.current,n!==null){switch(n.tag){case 31:case 13:return to===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Sa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Sa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(V)return t=eo.current,t===null?(r!==Fi&&(t=Error(i(423),{cause:r}),Hi(_i(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=_i(r,n),a=Zs(e.stateNode,r,a),Ua(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Fi&&(e=Error(i(422),{cause:r}),Hi(_i(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=_i(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=_i(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Zs(n.stateNode,r,e),Ua(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Qs(a),$s(a,e,n,r),Ua(n,a),!1}n=n.return}while(n!==null);return!1}var tc=Error(i(461)),nc=!1;function rc(e,t,n,r){t.child=e===null?Ia(t,null,n,r):Fa(t,e.child,n,r)}function ic(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Qi(t),r=xo(e,t,n,o,a,i),s=To(),e!==null&&!nc?(Eo(e,t,i),Oc(e,t,i)):(V&&s&&ki(t),t.flags|=1,rc(e,t,r,i),t.child)}function ac(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ci(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,oc(e,t,a,r,i)):(e=di(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!kc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Sr:n,n(o,r)&&e.ref===t.ref)return Oc(e,t,i)}return t.flags|=1,e=li(a,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Sr(a,r)&&e.ref===t.ref){if(nc=!1,t.pendingProps=r=a,kc(e,i))e.flags&131072&&(nc=!0);else return t.lanes=e.lanes,Oc(e,t,i)}}return mc(e,t,n,r,i)}function sc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return lc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_a(t,a===null?null:a.cachePool),a===null?Qa():Za(t,a),io(t);else return r=t.lanes=536870912,lc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&_a(t,null),Qa(),ao(t)):(_a(t,a.cachePool),Za(t,a),ao(t),t.memoizedState=null);return rc(e,t,i,n),t.child}function cc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lc(e,t,n,r,i){var a=ga();return a=a===null?null:{parent:aa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&_a(t,null),Qa(),io(t),e!==null&&Xi(e,t,r,!0),t.childLanes=i,null}function uc(e,t){return t=Cc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dc(e,t,n){return Fa(t,e.child,null,n),e=uc(t,t.pendingProps),e.flags|=2,oo(t),t.memoizedState=null,e}function fc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=uc(t,r),t.lanes=536870912,cc(null,e);if(ro(t),(e=B)?(e=rf(e,Pi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return t.lanes=536870912,null}return uc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ro(t),a){if(t.flags&256)t.flags&=-257,t=dc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(nc||Xi(e,t,n,!1),a=(n&e.childLanes)!==0,nc||a){if(r=q,r!==null&&(s=at(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ni(e,s),hu(r,e,s),tc;Du(),t=dc(e,t,n)}else e=o.treeContext,B=cf(s.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=uc(t,r),t.flags|=4096;return t}return e=li(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mc(e,t,n,r,i){return Qi(t),n=xo(e,t,n,r,void 0,i),r=To(),e!==null&&!nc?(Eo(e,t,i),Oc(e,t,i)):(V&&r&&ki(t),t.flags|=1,rc(e,t,n,i),t.child)}function hc(e,t,n,r,i,a){return Qi(t),t.updateQueue=null,n=Co(t,r,n,i),So(e),r=To(),e!==null&&!nc?(Eo(e,t,a),Oc(e,t,a)):(V&&r&&ki(t),t.flags|=1,rc(e,t,n,a),t.child)}function gc(e,t,n,r,i){if(Qi(t),t.stateNode===null){var a=ai,o=n.contextType;typeof o==`object`&&o&&(a=$i(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Hs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ra(t),o=n.contextType,a.context=typeof o==`object`&&o?$i(o):ai,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Vs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Hs.enqueueReplaceState(a,a.state,null),Ka(t,r,a,i),Ga(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Gs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ai,typeof u==`object`&&u&&(o=$i(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ws(t,a,r,o),La=!1;var f=t.memoizedState;a.state=f,Ka(t,r,a,i),Ga(),l=t.memoizedState,s||f!==l||La?(typeof d==`function`&&(Vs(t,n,d,r),l=t.memoizedState),(c=La||Us(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,za(e,t),o=t.memoizedProps,u=Gs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ai,typeof l==`object`&&l&&(c=$i(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ws(t,a,r,c),La=!1,f=t.memoizedState,a.state=f,Ka(t,r,a,i),Ga();var p=t.memoizedState;o!==d||f!==p||La||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof s==`function`&&(Vs(t,n,s,r),p=t.memoizedState),(u=La||Us(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,pc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Fa(t,e.child,null,i),t.child=Fa(t,null,n,i)):rc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Oc(e,t,i),e}function _c(e,t,n,r){return Bi(),t.flags|=256,rc(e,t,n,r),t.child}var vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yc(e){return{baseLanes:e,cachePool:va()}}function bc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function xc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(so.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(V){if(a?no(t):ao(t),(e=B)?(e=rf(e,Pi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ao(t),a=t.mode,c=Cc({mode:`hidden`,children:c},a),r=fi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(null,r)):(no(t),Sc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(no(t),t.flags&=-257,t=wc(e,t,n)):t.memoizedState===null?(ao(t),c=r.fallback,a=t.mode,r=Cc({mode:`visible`,children:r.children},a),c=fi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Fa(t,e.child,null,n),r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,t=cc(null,r)):(ao(t),t.child=e.child,t.flags|=128,t=null);else if(no(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Hi({value:r,source:null,stack:null}),t=wc(e,t,n)}else if(nc||Xi(e,t,n,!1),s=(n&e.childLanes)!==0,nc||s){if(s=q,s!==null&&(r=at(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ni(e,r),hu(s,e,r),tc;af(c)||Du(),t=wc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,B=cf(c.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=Sc(t,r.children),t.flags|=4096);return t}return a?(ao(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=li(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=fi(c,a,n,null),c.flags|=2):c=li(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,cc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=yc(n):(a=c.cachePool,a===null?a=va():(l=aa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(e.child,r)):(no(t),n=e.child,e=n.sibling,n=li(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Sc(e,t){return t=Cc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Cc(e,t){return e=si(22,e,null,t),e.lanes=0,e}function wc(e,t,n){return Fa(t,e.child,null,n),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ji(e.return,t,n)}function Ec(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Dc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=so.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,A(so,o),rc(e,t,r,n),r=V?xi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,n,t);else if(e.tag===19)Tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ec(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ec(t,!0,n,null,a,r);break;case`together`:Ec(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Oc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Xi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Zi(e)))}function Ac(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),Ki(t,aa,e.memoizedState.cache),Bi();break;case 27:case 5:j(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:Ki(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ro(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(no(t),e=Oc(e,t,n),e===null?null:e.sibling):xc(e,t,n):(no(t),t.flags|=128,null);no(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Xi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Dc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(so,so.current),r)break;return null;case 22:return t.lanes=0,sc(e,t,n,t.pendingProps);case 24:Ki(t,aa,e.memoizedState.cache)}return Oc(e,t,n)}function jc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)nc=!0;else{if(!kc(e,n)&&!(t.flags&128))return nc=!1,Ac(e,t,n);nc=!!(e.flags&131072)}}else nc=!1,V&&t.flags&1048576&&Oi(t,xi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e==`function`)ci(e)?(r=Gs(e,r),t.tag=1,t=gc(null,t,e,r,n)):(t.tag=0,t=mc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ic(null,t,e,r,n);break a}if(a===ee){t.tag=14,t=ac(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return mc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Gs(r,t.pendingProps),gc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,za(e,t),Ka(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ki(t,aa,r),r!==o.cache&&Yi(t,[aa],n,!0),Ga(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=_c(e,t,r,n);break a}if(r!==a){a=_i(Error(i(424)),t),Hi(a),t=_c(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(B=cf(e.firstChild),Mi=t,V=!0,Ni=null,Pi=!0,n=Ia(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Bi(),r===a){t=Oc(e,t,n);break a}rc(e,t,r,n)}t=t.child}return t;case 26:return pc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[F]=t,r[ut]=e,Pd(r,n,e),I(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return j(t),e===null&&V&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Mi=t,Pi=!0,a=B,Zd(t.type)?(lf=a,B=cf(r.firstChild)):B=a),rc(e,t,t.pendingProps.children,n),pc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((a=r=B)&&(r=tf(r,t.type,t.pendingProps,Pi),r===null?a=!1:(t.stateNode=r,Mi=t,B=cf(r.firstChild),Pi=!1,a=!0)),a||Ii(t)),j(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=xo(e,t,wo,null,null,n),Qf._currentValue=a),pc(e,t),rc(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=B)&&(n=nf(n,t.pendingProps,Pi),n===null?e=!1:(t.stateNode=n,Mi=t,B=null,e=!0)),e||Ii(t)),null;case 13:return xc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fa(t,null,r,n):rc(e,t,r,n),t.child;case 11:return ic(e,t,t.type,t.pendingProps,n);case 7:return rc(e,t,t.pendingProps,n),t.child;case 8:return rc(e,t,t.pendingProps.children,n),t.child;case 12:return rc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ki(t,t.type,r.value),rc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Qi(t),a=$i(a),r=r(a),t.flags|=1,rc(e,t,r,n),t.child;case 14:return ac(e,t,t.type,t.pendingProps,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 19:return Dc(e,t,n);case 31:return fc(e,t,n);case 22:return sc(e,t,n,t.pendingProps);case 24:return Qi(t),r=$i(aa),e===null?(a=ga(),a===null&&(a=q,o=oa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ra(t),Ki(t,aa,a)):((e.lanes&n)!==0&&(za(e,t),Ka(t,null,null,n),Ga()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ki(t,aa,r),r!==a.cache&&Yi(t,[aa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ki(t,aa,r))),rc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Mc(e){e.flags|=4}function Nc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ea=Sa,ba}}else e.flags&=-16777217}function Pc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Ea=Sa,ba}}function Fc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:$e(),e.lanes|=t,Yl|=t)}function Ic(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function G(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(Ai(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return G(t),null;case 1:return G(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),qi(aa),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zi(t)?Mc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vi())),G(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Mc(t),o===null?(G(t),Nc(t,a,null,r,n)):(G(t),Pc(t,o))):o?o===e.memoizedState?(G(t),t.flags&=-16777217):(Mc(t),G(t),Pc(t,o)):(e=e.memoizedProps,e!==r&&Mc(t),G(t),Nc(t,a,e,r,n)),null;case 27:if(ye(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return G(t),null}e=pe.current,zi(t)?Li(t,e):(e=ff(a,r,n),t.stateNode=e,Mc(t))}return G(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return G(t),null}if(o=pe.current,zi(t))Li(t,o);else{var s=Bd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[F]=t,o[ut]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Mc(t)}}return G(t),Nc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,zi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Mi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[F]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ii(t,!0)}else e=Bd(e).createTextNode(r),e[F]=t,t.stateNode=e}return G(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=zi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[F]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),e=!1}else n=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(oo(t),t):(oo(t),null);if(t.flags&128)throw Error(i(558))}return G(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[F]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),a=!1}else a=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(oo(t),t):(oo(t),null)}return oo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Fc(t,t.updateQueue),G(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),G(t),null;case 10:return qi(t.type),G(t),null;case 19:if(fe(so),r=t.memoizedState,r===null)return G(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Ic(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=co(e),o!==null){for(t.flags|=128,Ic(r,!1),e=o.updateQueue,t.updateQueue=e,Fc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ui(n,e),n=n.sibling;return A(so,so.current&1|2),V&&Di(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>tu&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304)}}else{if(!a){if(e=co(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Fc(t,e),Ic(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!V)return G(t),null}else 2*je()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(G(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,n=so.current,A(so,a?n&1|2:n&1),V&&Di(t,r.treeForkCount),e);case 22:case 23:return oo(t),$a(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(G(t),t.subtreeFlags&6&&(t.flags|=8192)):G(t),n=t.updateQueue,n!==null&&Fc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(ha),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qi(aa),G(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(Ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qi(aa),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(oo(t),t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(oo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(so),null;case 4:return ve(),null;case 10:return qi(t.type),null;case 22:case 23:return oo(t),$a(),e!==null&&fe(ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qi(aa),null;case 25:return null;default:return null}}function zc(e,t){switch(Ai(t),t.tag){case 3:qi(aa),ve();break;case 26:case 27:case 5:ye(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&oo(t);break;case 13:oo(t);break;case 19:fe(so);break;case 10:qi(t.type);break;case 22:case 23:oo(t),$a(),e!==null&&fe(ha);break;case 24:qi(aa)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ja(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ut]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[F]=e,t[ut]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Er(e),Dr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Gs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ja(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,!!(n.subtreeFlags&8772)):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_t(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null){if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[gt]||o[F]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[F]=e,I(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[F]=e,I(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(qt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:sa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=$i(aa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $i(aa).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:D.T===null?ct():dd()}function mu(){if(Jl===0){if(!(Y&536870912)||V){var e=N;N<<=1,!(N&3932160)&&(N=262144),Jl=e}else Jl=536870912}return e=eo.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),tt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Ze(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-je(),10<a)){if(yu(r,t,Jl,!Bl),Xe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},jl(t,a,d);var m=(a&62914560)===a?$l-je():(a&4194048)===a?eu-je():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!xr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&rt(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Gi=Wi=null,Do(e),ka=null,Aa=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=li(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Ze(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,$r(),n}function Cu(e,t){U=null,D.H=Ls,t===ya||t===xa?(t=Da(),X=3):t===ba?(t=Da(),X=4):X=t===tc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Ys(e,_i(t,e.current)))}function wu(){var e=eo.current;return e===null?!0:(Y&4194048)===Y?to===null:(Y&62914560)===Y||Y&536870912?e===to:!1}function Tu(){var e=D.H;return D.H=Ls,e===null?Ls:e}function Eu(){var e=D.A;return D.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&eo.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:eo.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Gi=Wi=null,K=r,D.H=i,D.A=a,J===null&&(q=null,Y=0,$r()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=je()+500,Su(e,t)):Vl=Ze(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ca(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Ca(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Gi=Wi=null,D.H=r,D.A=a,K=n,J===null?(q=null,Y=0,$r(),Wl):0}function ju(){for(;J!==null&&!ke();)Mu(J)}function Mu(e){var t=jc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=hc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=hc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Do(t);default:zc(n,t),t=J=ui(t,Ul),t=jc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Gi=Wi=null,Do(t),ka=null,Aa=0;var i=t.return;try{if(ec(e,i,t,n,Y)){Wl=1,Ys(e,_i(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Ys(e,_i(n,e.current)),J=null;return}t.flags&32768?(V||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=eo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Qr,nt(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Fe,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,O.p=a,D.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Er(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Tr(s.ownerDocument.documentElement,s)){if(c!==null&&Dr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=wr(s,h),v=wr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,O.p=r,D.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,O.p=r,D.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ae();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),st(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=st(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=_i(n,t),t=Zs(e.stateNode,t,2),e=Va(e,t,2),e!==null&&(tt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=_i(n,e),n=Qs(2),r=Va(t,n,2),r!==null&&($s(n,r,t,e),tt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>je()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=$e()),e=ni(e,t),e!==null&&(tt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return De(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Xe(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ze(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=je(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Xe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ze(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Oe(r),st(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=cd.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Xe(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,je()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?De(Ne,ad):od()})}function dd(){if(nd===0){var e=ua;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:en(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ut]||null).action),o=r.submitter;o&&(t=(t=o[ut]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new L(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Cs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Cs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<qr.length;hd++){var gd=qr[hd];Jr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Jr(zr,`onAnimationEnd`),Jr(Br,`onAnimationIteration`),Jr(Vr,`onAnimationStart`),Jr(`dblclick`,`onDoubleClick`),Jr(`focusin`,`onFocus`),Jr(`focusout`,`onBlur`),Jr(Hr,`onTransitionRun`),Jr(Ur,`onTransitionStart`),Jr(Wr,`onTransitionCancel`),Jr(Gr,`onTransitionEnd`),Tt(`onMouseEnter`,[`mouseout`,`mouseover`]),Tt(`onMouseLeave`,[`mouseout`,`mouseover`]),Tt(`onPointerEnter`,[`pointerout`,`pointerover`]),Tt(`onPointerLeave`,[`pointerout`,`pointerover`]),wt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),wt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),wt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),wt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ft];n===void 0&&(n=t[ft]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,St.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!fn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=vt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}ln(function(){var r=a,i=rn(n),s=[];a:{var c=Kr.get(e);if(c!==void 0){var l=L,u=e;switch(e){case`keypress`:if(vn(n)===0)break a;case`keydown`:case`keyup`:l=Bn;break;case`focusin`:u=`focus`,l=jn;break;case`focusout`:u=`blur`,l=jn;break;case`beforeblur`:case`afterblur`:l=jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=kn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=An;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Hn;break;case zr:case Br:case Vr:l=Mn;break;case Gr:l=Un;break;case`scroll`:case`scrollend`:l=wn;break;case`wheel`:l=Wn;break;case`copy`:case`cut`:case`paste`:l=Nn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Vn;break;case`toggle`:case`beforetoggle`:l=Gn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=un(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==nn&&(u=n.relatedTarget||n.fromElement)&&(vt(u)||u[dt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?vt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=kn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Vn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:bt(l),h=u==null?c:bt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,vt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?bt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=lr;else if(ar(c)){if(ur)v=yr;else{v=_r;var y=gr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Zt(r.elementType)&&(v=lr):v=vr;if(v&&=v(e,r)){or(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ut(c,`number`,c.value)}switch(y=r?bt(r):window,e){case`focusin`:(ar(y)||y.contentEditable===`true`)&&(kr=y,Ar=r,jr=null);break;case`focusout`:jr=Ar=kr=null;break;case`mousedown`:Mr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Mr=!1,Nr(s,n,i);break;case`selectionchange`:if(Or)break;case`keydown`:case`keyup`:Nr(s,n,i)}var b;if(qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else tr?$n(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Xn&&n.locale!==`ko`&&(tr||x!==`onCompositionStart`?x===`onCompositionEnd`&&tr&&(b=_n()):(mn=i,hn=`value`in mn?mn.value:mn.textContent,tr=!0)),y=Ed(r,x),0<y.length&&(x=new Pn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=er(n),b!==null&&(x.data=b)))),(b=Yn?nr(e,n):rr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Pn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=un(e,n),i!=null&&r.unshift(Td(e,i,a)),i=un(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=un(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=un(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&qt(e,``+r);break;case`className`:jt(e,`class`,r);break;case`tabIndex`:jt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:jt(e,n,r);break;case`style`:Xt(e,r,o);break;case`data`:if(t!==`object`){jt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=en(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=en(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=tn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=en(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),At(e,`popover`,r);break;case`xlinkActuate`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:At(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Qt.get(n)||n,At(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Xt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=tn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ct.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ut]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):At(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Ht(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Wt(e,!!r,n,!0):Wt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Kt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Zt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Vt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Wt(e,!!n,n?[]:``,!1):Wt(e,!!n,t,!0)):Wt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Gt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Zt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[gt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),_t(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[gt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_t(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=yt(e);t!==null&&t.tag===5&&t.type===`form`?Ts(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Bt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),I(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Bt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Bt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Bt(n.imageSizes)+`"]`)):i+=`[href="`+Bt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),I(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Bt(r)+`"][href="`+Bt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),I(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=xt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);I(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=xt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),I(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=xt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),I(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=he.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=xt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=xt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=xt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Bt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),I(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Bt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Bt(n.href)+`"]`);if(r)return t.instance=r,I(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),I(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,I(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),I(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,I(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),I(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[gt]||a[F]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,I(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),I(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=si(3,null,null,t),e.current=a,a.stateNode=e,t=oa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ra(a),e}function tp(e){return e?(e=ai,e):ai}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ba(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Va(e,r,t),n!==null&&(hu(n,e,t),Ha(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ni(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ot(t);var n=ni(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=yt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ye(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=je()+500,id(0,!1))}}break;case 31:case 13:s=ni(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=rn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=vt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=yt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=vt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,lt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,lt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nn=r,n.target.dispatchEvent(r),nn=null}else return t=yt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=yt(n);a!==null&&(e.splice(t,3),t-=3,Cs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ut]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ut]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[dt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Be=zp.inject(Rp),Ve=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ks,s=qs,c=Js;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[dt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=o(((e,t)=>{var n=typeof Element<`u`,r=typeof Map==`function`,i=typeof Set==`function`,a=typeof ArrayBuffer==`function`&&!!ArrayBuffer.isView;function o(e,t){if(e===t)return!0;if(e&&t&&typeof e==`object`&&typeof t==`object`){if(e.constructor!==t.constructor)return!1;var s,c,l;if(Array.isArray(e)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(!o(e[c],t[c]))return!1;return!0}var u;if(r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],t.get(c.value[0])))return!1;return!0}if(i&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(e[c]!==t[c])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf==`function`&&typeof t.valueOf==`function`)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString==`function`&&typeof t.toString==`function`)return e.toString()===t.toString();if(l=Object.keys(e),s=l.length,s!==Object.keys(t).length)return!1;for(c=s;c--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[c]))return!1;if(n&&e instanceof Element)return!1;for(c=s;c--!==0;)if((l[c]!==`_owner`&&l[c]!==`__v`&&l[c]!==`__o`||!e.$$typeof)&&!o(e[l[c]],t[l[c]]))return!1;return!0}return e!==e&&t!==t}t.exports=function(e,t){try{return o(e,t)}catch(e){if((e.message||``).match(/stack|recursion/i))return console.warn(`react-fast-compare cannot handle circular refs`),!1;throw e}}})),v=o(((e,t)=>{t.exports=function(e,t,n,r,i,a,o,s){if(!e){var c;if(t===void 0)c=Error(`Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.`);else{var l=[n,r,i,a,o,s],u=0;c=Error(t.replace(/%s/g,function(){return l[u++]})),c.name=`Invariant Violation`}throw c.framesToPop=1,c}}})),y=o(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),b=g(),x=c(u()),S=c(_()),C=c(v()),w=c(y()),T=(e=>(e.BASE=`base`,e.BODY=`body`,e.HEAD=`head`,e.HTML=`html`,e.LINK=`link`,e.META=`meta`,e.NOSCRIPT=`noscript`,e.SCRIPT=`script`,e.STYLE=`style`,e.TITLE=`title`,e.FRAGMENT=`Symbol(react.fragment)`,e))(T||{}),E={link:{rel:[`amphtml`,`canonical`,`alternate`]},script:{type:[`application/ld+json`]},meta:{charset:``,name:[`generator`,`robots`,`description`],property:[`og:type`,`og:title`,`og:url`,`og:image`,`og:image:alt`,`og:description`,`twitter:url`,`twitter:title`,`twitter:description`,`twitter:image`,`twitter:image:alt`,`twitter:card`,`twitter:site`]}},ee=Object.values(T),te={accesskey:`accessKey`,charset:`charSet`,class:`className`,contenteditable:`contentEditable`,contextmenu:`contextMenu`,"http-equiv":`httpEquiv`,itemprop:`itemProp`,tabindex:`tabIndex`},ne=Object.entries(te).reduce((e,[t,n])=>(e[n]=t,e),{}),re=`data-rh`,ie={DEFAULT_TITLE:`defaultTitle`,DEFER:`defer`,ENCODE_SPECIAL_CHARACTERS:`encodeSpecialCharacters`,ON_CHANGE_CLIENT_STATE:`onChangeClientState`,TITLE_TEMPLATE:`titleTemplate`,PRIORITIZE_SEO_TAGS:`prioritizeSeoTags`},ae=(e,t)=>{for(let n=e.length-1;n>=0;--n){let r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},oe=e=>{let t=ae(e,`title`),n=ae(e,ie.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join(``)),n&&t)return n.replace(/%s/g,()=>t);let r=ae(e,ie.DEFAULT_TITLE);return t||r||void 0},se=e=>ae(e,ie.ON_CHANGE_CLIENT_STATE)||(()=>{}),ce=(e,t)=>t.filter(t=>t[e]!==void 0).map(t=>t[e]).reduce((e,t)=>({...e,...t}),{}),D=(e,t)=>t.filter(e=>e.base!==void 0).map(e=>e.base).reverse().reduce((t,n)=>{if(!t.length){let r=Object.keys(n);for(let i=0;i<r.length;i+=1){let a=r[i].toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}}return t},[]),O=e=>console&&typeof console.warn==`function`&&console.warn(e),le=(e,t,n)=>{let r={};return n.filter(t=>Array.isArray(t[e])?!0:(t[e]!==void 0&&O(`Helmet: ${e} should be of type "Array". Instead found type "${typeof t[e]}"`),!1)).map(t=>t[e]).reverse().reduce((e,n)=>{let i={};n.filter(e=>{let n,a=Object.keys(e);for(let r=0;r<a.length;r+=1){let i=a[r],o=i.toLowerCase();t.indexOf(o)!==-1&&(n!==`rel`||e[n].toLowerCase()!==`canonical`)&&(o!==`rel`||e[o].toLowerCase()!==`stylesheet`)&&(n=o),t.indexOf(i)!==-1&&(i===`innerHTML`||i===`cssText`||i===`itemprop`)&&(n=i)}if(!n||!e[n])return!1;let o=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][o]&&(i[n][o]=!0,!0)}).reverse().forEach(t=>e.push(t));let a=Object.keys(i);for(let e=0;e<a.length;e+=1){let t=a[e],n={...r[t],...i[t]};r[t]=n}return e},[]).reverse()},ue=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},k=e=>({baseTag:D([`href`],e),bodyAttributes:ce(`bodyAttributes`,e),defer:ae(e,ie.DEFER),encode:ae(e,ie.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ce(`htmlAttributes`,e),linkTags:le(`link`,[`rel`,`href`],e),metaTags:le(`meta`,[`name`,`charset`,`http-equiv`,`property`,`itemprop`],e),noscriptTags:le(`noscript`,[`innerHTML`],e),onChangeClientState:se(e),scriptTags:le(`script`,[`src`,`innerHTML`],e),styleTags:le(`style`,[`cssText`],e),title:oe(e),titleAttributes:ce(`titleAttributes`,e),prioritizeSeoTags:ue(e,ie.PRIORITIZE_SEO_TAGS)}),de=e=>Array.isArray(e)?e.join(``):e,fe=(e,t)=>{let n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},A=(e,t)=>Array.isArray(e)?e.reduce((e,n)=>(fe(n,t)?e.priority.push(n):e.default.push(n),e),{priority:[],default:[]}):{default:e,priority:[]},pe=(e,t)=>({...e,[t]:void 0}),me=[`noscript`,`script`,`style`],he=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`),ge=e=>Object.keys(e).reduce((t,n)=>{let r=e[n]===void 0?`${n}`:`${n}="${e[n]}"`;return t?`${t} ${r}`:r},``),_e=(e,t,n,r)=>{let i=ge(n),a=de(t);return i?`<${e} ${re}="true" ${i}>${he(a,r)}</${e}>`:`<${e} ${re}="true">${he(a,r)}</${e}>`},ve=(e,t,n=!0)=>t.reduce((t,r)=>{let i=r,a=Object.keys(i).filter(e=>e!==`innerHTML`&&e!==`cssText`).reduce((e,t)=>{let r=i[t]===void 0?t:`${t}="${he(i[t],n)}"`;return e?`${e} ${r}`:r},``),o=i.innerHTML||i.cssText||``;return`${t}<${e} ${re}="true" ${a}${me.indexOf(e)===-1?`/>`:`>${o}</${e}>`}`},``),j=(e,t={})=>Object.keys(e).reduce((t,n)=>{let r=te[n];return t[r||n]=e[n],t},t),ye=(e,t,n)=>{let r=j(n,{key:t,[re]:!0});return[x.createElement(`title`,r,t)]},M=(e,t)=>t.map((t,n)=>{let r={key:n,[re]:!0};return Object.keys(t).forEach(e=>{let n=te[e]||e;if(n===`innerHTML`||n===`cssText`){let e=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:e}}else r[n]=t[e]}),x.createElement(e,r)}),be=(e,t,n=!0)=>{switch(e){case`title`:return{toComponent:()=>ye(e,t.title,t.titleAttributes),toString:()=>_e(e,t.title,t.titleAttributes,n)};case`bodyAttributes`:case`htmlAttributes`:return{toComponent:()=>j(t),toString:()=>ge(t)};default:return{toComponent:()=>M(e,t),toString:()=>ve(e,t,n)}}},xe=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{let i=A(e,E.meta),a=A(t,E.link),o=A(n,E.script);return{priorityMethods:{toComponent:()=>[...M(`meta`,i.priority),...M(`link`,a.priority),...M(`script`,o.priority)],toString:()=>`${be(`meta`,i.priority,r)} ${be(`link`,a.priority,r)} ${be(`script`,o.priority,r)}`},metaTags:i.default,linkTags:a.default,scriptTags:o.default}},Se=e=>{let{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:a,styleTags:o,title:s=``,titleAttributes:c,prioritizeSeoTags:l}=e,{linkTags:u,metaTags:d,scriptTags:f}=e,p={toComponent:()=>[],toString:()=>``};return l&&({priorityMethods:p,linkTags:u,metaTags:d,scriptTags:f}=xe(e)),{priority:p,base:be(`base`,t,r),bodyAttributes:be(`bodyAttributes`,n,r),htmlAttributes:be(`htmlAttributes`,i,r),link:be(`link`,u,r),meta:be(`meta`,d,r),noscript:be(`noscript`,a,r),script:be(`script`,f,r),style:be(`style`,o,r),title:be(`title`,{title:s,titleAttributes:c},r)}},Ce=[],we=!!(typeof window<`u`&&window.document&&window.document.createElement),Te=class{instances=[];canUseDOM=we;context;value={setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Ce:this.instances,add:e=>{(this.canUseDOM?Ce:this.instances).push(e)},remove:e=>{let t=(this.canUseDOM?Ce:this.instances).indexOf(e);(this.canUseDOM?Ce:this.instances).splice(t,1)}}};constructor(e,t){this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Se({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:``,titleAttributes:{}}))}},Ee=parseInt(`19.2.8`.split(`.`)[0],10)>=19,De=x.createContext({}),Oe=class e extends x.Component{static canUseDOM=we;helmetData;constructor(t){super(t),this.helmetData=Ee?null:new Te(this.props.context||{},e.canUseDOM)}render(){return Ee?x.createElement(x.Fragment,null,this.props.children):x.createElement(De.Provider,{value:this.helmetData.value},this.props.children)}},ke=(e,t)=>{let n=document.head||document.querySelector(`head`),r=n.querySelectorAll(`${e}[${re}]`),i=[].slice.call(r),a=[],o;return t&&t.length&&t.forEach(t=>{let n=document.createElement(e);for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e)){if(e===`innerHTML`)n.innerHTML=t.innerHTML;else if(e===`cssText`){let e=t.cssText;n.appendChild(document.createTextNode(e))}else{let r=e,i=t[r]===void 0?``:t[r];n.setAttribute(e,i)}}n.setAttribute(re,`true`),i.some((e,t)=>(o=t,n.isEqualNode(e)))?i.splice(o,1):a.push(n)}),i.forEach(e=>e.parentNode?.removeChild(e)),a.forEach(e=>n.appendChild(e)),{oldTags:i,newTags:a}},Ae=(e,t)=>{let n=document.getElementsByTagName(e)[0];if(!n)return;let r=n.getAttribute(re),i=r?r.split(`,`):[],a=[...i],o=Object.keys(t);for(let e of o){let r=t[e]||``;n.getAttribute(e)!==r&&n.setAttribute(e,r),i.indexOf(e)===-1&&i.push(e);let o=a.indexOf(e);o!==-1&&a.splice(o,1)}for(let e=a.length-1;e>=0;--e)n.removeAttribute(a[e]);i.length===a.length?n.removeAttribute(re):n.getAttribute(re)!==o.join(`,`)&&n.setAttribute(re,o.join(`,`))},je=(e,t)=>{e!==void 0&&document.title!==e&&(document.title=de(e)),Ae(`title`,t)},Me=(e,t)=>{let{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:a,metaTags:o,noscriptTags:s,onChangeClientState:c,scriptTags:l,styleTags:u,title:d,titleAttributes:f}=e;Ae(`body`,r),Ae(`html`,i),je(d,f);let p={baseTag:ke(`base`,n),linkTags:ke(`link`,a),metaTags:ke(`meta`,o),noscriptTags:ke(`noscript`,s),scriptTags:ke(`script`,l),styleTags:ke(`style`,u)},m={},h={};Object.keys(p).forEach(e=>{let{newTags:t,oldTags:n}=p[e];t.length&&(m[e]=t),n.length&&(h[e]=p[e].oldTags)}),t&&t(),c(e,m,h)},Ne=null,Pe=e=>{Ne&&cancelAnimationFrame(Ne),e.defer?Ne=requestAnimationFrame(()=>{Me(e,()=>{Ne=null})}):(Me(e),Ne=null)},Fe=class extends x.Component{rendered=!1;shouldComponentUpdate(e){return!(0,w.default)(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){let{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){let{helmetInstances:e,setHelmet:t}=this.props.context,n=null,r=k(e.get().map(e=>{let{context:t,...n}=e.props;return n}));Oe.canUseDOM?Pe(r):Se&&(n=Se(r)),t(n)}init(){if(this.rendered)return;this.rendered=!0;let{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Ie=[],Le=e=>{let t={};for(let n of Object.keys(e))t[ne[n]||n]=e[n];return t},Re=e=>{let t={};for(let n of Object.keys(e)){let r=te[n];t[r||n]=e[n]}return t},ze=(e,t)=>{if(!we)return;let n=document.getElementsByTagName(e)[0];if(!n)return;let r=`data-rh-managed`,i=n.getAttribute(r),a=i?i.split(`,`):[],o=Object.keys(t);for(let e of a)o.includes(e)||n.removeAttribute(e);for(let e of o){let r=t[e];r==null||r===!1?n.removeAttribute(e):r===!0?n.setAttribute(e,``):n.setAttribute(e,String(r))}o.length>0?n.setAttribute(r,o.join(`,`)):n.removeAttribute(r)},Be=()=>{let e={},t={};for(let n of Ie){let{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(e,Le(r)),i&&Object.assign(t,Le(i))}ze(`html`,e),ze(`body`,t)},Ve=class extends x.Component{componentDidMount(){Ie.push(this),Be()}componentDidUpdate(){Be()}componentWillUnmount(){let e=Ie.indexOf(this);e!==-1&&Ie.splice(e,1),Be()}resolveTitle(){let{title:e,titleTemplate:t,defaultTitle:n}=this.props;return e&&t?t.replace(/%s/g,()=>Array.isArray(e)?e.join(``):e):e||n||void 0}renderTitle(){let e=this.resolveTitle();if(e===void 0)return null;let t=this.props.titleAttributes||{};return x.createElement(`title`,Re(t),e)}renderBase(){let{base:e}=this.props;return e?x.createElement(`base`,Re(e)):null}renderMeta(){let{meta:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>x.createElement(`meta`,{key:t,...Re(e)}))}renderLink(){let{link:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>x.createElement(`link`,{key:t,...Re(e)}))}renderScript(){let{script:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{innerHTML:n,...r}=e,i=Re(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),x.createElement(`script`,{key:t,...i})})}renderStyle(){let{style:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{cssText:n,...r}=e,i=Re(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),x.createElement(`style`,{key:t,...i})})}renderNoscript(){let{noscript:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{innerHTML:n,...r}=e,i=Re(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),x.createElement(`noscript`,{key:t,...i})})}render(){return x.createElement(x.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},He=class extends x.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(e){return!(0,S.default)(pe(this.props,`helmetData`),pe(e,`helmetData`))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case`script`:case`noscript`:return{innerHTML:t};case`style`:return{cssText:t};default:throw Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case`title`:return{...t,[e.type]:r,titleAttributes:{...n}};case`body`:return{...t,bodyAttributes:{...n}};case`html`:return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(t=>{n={...n,[t]:e[t]}}),n}warnOnInvalidChildren(e,t){return(0,C.default)(ee.some(t=>e.type===t),typeof e.type==`function`?`You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.`:`Only elements types ${ee.join(`, `)} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),(0,C.default)(!t||typeof t==`string`||Array.isArray(t)&&!t.some(e=>typeof e!=`string`),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return x.Children.forEach(e,e=>{if(!e||!e.props)return;let{children:r,...i}=e.props,a=Object.keys(i).reduce((e,t)=>(e[ne[t]||t]=i[t],e),{}),{type:o}=e;switch(typeof o==`symbol`?o=o.toString():this.warnOnInvalidChildren(e,r),o){case`Symbol(react.fragment)`:t=this.mapChildrenToProps(r,t);break;case`link`:case`meta`:case`noscript`:case`script`:case`style`:n=this.flattenArrayTypeChildren(e,n,a,r);break;default:t=this.mapObjectTypeChildren(e,t,a,r)}}),this.mapArrayTypeChildrenToProps(n,t)}render(){let{children:e,...t}=this.props,n={...t},{helmetData:r}=t;return e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Te)&&(r=new Te(r.context,!0),delete n.helmetData),Ee?x.createElement(Ve,{...n}):r?x.createElement(Fe,{...n,context:r.value}):x.createElement(De.Consumer,null,e=>x.createElement(Fe,{...n,context:e}))}};function Ue(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var We=Ue();function Ge(e){We=e}var Ke={exec:()=>null};function qe(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function N(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(Ye.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var Je=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),Ye={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:qe(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:qe(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:qe(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:qe(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:qe(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:qe(e=>RegExp(`^ {0,${e}}>`))},Xe=/^(?:[ \t]*(?:\n|$))+/,Ze=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Qe=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,$e=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,et=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,tt=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,nt=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,rt=N(nt).replace(/bull/g,tt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),it=N(nt).replace(/bull/g,tt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),at=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,ot=/^[^\n]+/,st=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ct=N(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,st).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),lt=N(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,tt).getRegex(),P=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,F=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ut=N(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,F).replace(`tag`,P).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),dt=e=>N(at).replace(`hr`,$e).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,P).getRegex(),ft=dt(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),pt=dt(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),mt={blockquote:N(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,pt).getRegex(),code:Ze,def:ct,fences:Qe,heading:et,hr:$e,html:ut,lheading:rt,list:lt,newline:Xe,paragraph:ft,table:Ke,text:ot},ht=N(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,$e).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,P).getRegex(),gt={...mt,lheading:it,table:ht,paragraph:N(at).replace(`hr`,$e).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,ht).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,P).getRegex()},_t={...mt,html:N(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,F).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ke,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:N(at).replace(`hr`,$e).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,rt).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},vt=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,yt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,bt=/^( {2,}|\\)\n(?!\s*$)/,xt=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,I=/[\p{P}\p{S}]/u,St=/[\s\p{P}\p{S}]/u,Ct=/[^\s\p{P}\p{S}]/u,wt=N(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,St).getRegex(),Tt=/[\p{Pi}\p{Ps}"']/u,Et=/(?!~)[\p{P}\p{S}]/u,Dt=/(?!~)[\s\p{P}\p{S}]/u,Ot=/(?:[^\s\p{P}\p{S}]|~)/u,kt=N(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,Je?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),At=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,jt=N(At,`u`).replace(/punct/g,I).getRegex(),Mt=N(At,`u`).replace(/punct/g,Et).getRegex(),Nt=N(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,Tt).replace(/punct/g,I).getRegex(),Pt=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Ft=N(Pt,`gu`).replace(/notPunctSpace/g,Ct).replace(/punctSpace/g,St).replace(/punct/g,I).getRegex(),It=N(Pt,`gu`).replace(/notPunctSpace/g,Ot).replace(/punctSpace/g,Dt).replace(/punct/g,Et).getRegex(),Lt=N(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Ct).replace(/punctSpace/g,St).replace(/punct/g,I).getRegex(),Rt=N(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,Ct).replace(/punctSpace/g,St).replace(/punct/g,I).getRegex(),zt=N(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Ct).replace(/punctSpace/g,St).replace(/punct/g,I).getRegex(),Bt=N(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,I).getRegex(),Vt=N(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Ct).replace(/punctSpace/g,St).replace(/punct/g,I).getRegex(),Ht=N(/\\(punct)/,`gu`).replace(/punct/g,I).getRegex(),Ut=N(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Wt=N(F).replace(`(?:-->|$)`,`-->`).getRegex(),Gt=N(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Wt).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Kt=N(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,/\[(?:\\[\s\S]|[^\[\]\\])*\]/).getRegex(),qt=N(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,Kt).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Jt=N(/^!?\[(label)\]\[(ref)\]/).replace(`label`,Kt).replace(`ref`,st).getRegex(),Yt=N(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,st).getRegex(),Xt=N(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Jt).replace(`nolink`,Yt).getRegex(),Zt=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Qt={_backpedal:Ke,anyPunctuation:Ht,autolink:Ut,blockSkip:kt,br:bt,code:yt,del:Ke,delLDelim:Ke,delRDelim:Ke,emStrongLDelim:jt,emStrongRDelimAst:Ft,emStrongRDelimUnd:Rt,escape:vt,link:qt,nolink:Yt,punctuation:wt,reflink:Jt,reflinkSearch:Xt,tag:Gt,text:xt,url:Ke},$t={...Qt,emStrongLDelim:Nt,emStrongRDelimAst:Lt,emStrongRDelimUnd:zt,link:N(/^!?\[(label)\]\((.*?)\)/).replace(`label`,Kt).getRegex(),reflink:N(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,Kt).getRegex()},en={...Qt,emStrongRDelimAst:It,emStrongLDelim:Mt,delLDelim:Bt,delRDelim:Vt,url:N(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,Zt).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:N(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,Zt).getRegex()},tn={...en,br:N(bt).replace(`{2,}`,`*`).getRegex(),text:N(en.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},nn={normal:mt,gfm:gt,pedantic:_t},rn={normal:Qt,gfm:en,breaks:tn,pedantic:$t},an={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},on=e=>an[e];function sn(e,t){if(t){if(Ye.escapeTest.test(e))return e.replace(Ye.escapeReplace,on)}else if(Ye.escapeTestNoEncode.test(e))return e.replace(Ye.escapeReplaceNoEncode,on);return e}function cn(e){try{e=encodeURI(e).replace(Ye.percentDecode,`%`)}catch{return null}return e}function ln(e,t){let n=e.replace(Ye.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(Ye.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(Ye.slashPipe,`|`);return n}function un(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function dn(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&Ye.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function fn(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function pn(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function mn(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`;r.state.inLink=!0;let l=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let d=r.inlineTokens(s),f=r.state.linkEmitted;if(r.state.linkEmitted=l,r.state.inLink=!1,!c){if(f){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:d}}function hn(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}var gn=class{options;rules;lexer;constructor(e){this.options=e||We}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:dn(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=hn(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=un(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:un(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:un(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=un(t[0],`
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
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=pn(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of i.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=dn(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:un(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=ln(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:un(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(ln(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:un(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=un(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=fn(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),mn(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return mn(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},_n=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||We,this.options.tokenizer=this.options.tokenizer||new gn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let t={other:Ye,block:nn.normal,inline:rn.normal};this.options.pedantic?(t.block=nn.pedantic,t.inline=rn.pedantic):this.options.gfm&&(t.block=nn.gfm,t.inline=this.options.breaks?rn.breaks:rn.gfm),this.tokenizer.rules=t}static get rules(){return{block:nn,inline:rn}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(Ye.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Ye.tabCharGlobal,`    `).replace(Ye.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
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
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(e.charAt(0)!==`!`&&Object.hasOwn(this.tokens.links,e.slice(n+1,-1))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,t=n=>{let r=n.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,n.slice(r+1,-1)))return n;if(r>1&&n.charAt(0)!==`!`){let i=n.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,t)+`][`+`a`.repeat(n.length-r-2)+`]`}return`[`+`a`.repeat(n.length-2)+`]`};n=n.replace(e,t)}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,e=>`+`.repeat(e.length)),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},vn=class{options;parser;constructor(e){this.options=e||We}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(Ye.notSpaceStart)?.[0],i=e?e.replace(Ye.endingNewline,``)+`
`:``;return r?`<pre><code class="language-`+sn(r)+`">`+(n?i:sn(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:sn(i,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${sn(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?sn(n,!0):this.parser.parseInline(r),o=cn(e);if(o===null)return a;e=sn(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+sn(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=cn(e);if(i===null)return sn(n);e=i;let a=`<img src="${sn(e)}" alt="${sn(n)}"`;return t&&(a+=` title="${sn(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:sn(e.text)}},yn=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},bn=class e{options;renderer;textRenderer;constructor(e){this.options=e||We,this.options.renderer=this.options.renderer||new vn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new yn}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},xn=class{options;block;constructor(e){this.options=e||We}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?_n.lex:_n.lexInline}provideParser(e=this.block){return e?bn.parse:bn.parseInline}},Sn=new class{defaults=Ue();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=bn;Renderer=vn;TextRenderer=yn;Lexer=_n;Tokenizer=gn;Hooks=xn;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new vn(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new gn(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new xn;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=xn.passThroughHooks.has(n)?e=>{if(this.defaults.async&&xn.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return _n.lex(e,t??this.defaults)}parser(e,t){return bn.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?_n.lex:_n.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?bn.parse:bn.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?_n.lex:_n.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?bn.parse:bn.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+sn(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function L(e,t){return Sn.parse(e,t)}L.options=L.setOptions=function(e){return Sn.setOptions(e),L.defaults=Sn.defaults,Ge(L.defaults),L},L.getDefaults=Ue,L.defaults=We;function Cn(...e){return Sn.use(...e),L.defaults=Sn.defaults,Ge(L.defaults),L}L.use=Cn,L.walkTokens=function(e,t){return Sn.walkTokens(e,t)},L.parseInline=Sn.parseInline,L.Parser=bn,L.parser=bn.parse,L.Renderer=vn,L.TextRenderer=yn,L.Lexer=_n,L.lexer=_n.lex,L.Tokenizer=gn,L.Hooks=xn,L.parse=L,L.options,L.setOptions,L.walkTokens,L.parseInline,bn.parse,_n.lex;function wn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Tn(e){if(Array.isArray(e))return e}function En(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Dn(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function On(e,t){return Tn(e)||En(e,t)||kn(e,t)||Dn()}function kn(e,t){if(e){if(typeof e==`string`)return wn(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?wn(e,t):void 0}}var An=Object.entries,jn=Object.setPrototypeOf,Mn=Object.isFrozen,Nn=Object.getPrototypeOf,Pn=Object.getOwnPropertyDescriptor,Fn=Object.freeze,In=Object.seal,Ln=Object.create,Rn=typeof Reflect<`u`&&Reflect,zn=Rn.apply,Bn=Rn.construct;Fn||=function(e){return e},In||=function(e){return e},zn||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},Bn||=function(e){return new e(...[...arguments].slice(1))};var Vn=R(Array.prototype.forEach),Hn=R(Array.prototype.lastIndexOf),Un=R(Array.prototype.pop),Wn=R(Array.prototype.push),Gn=R(Array.prototype.splice),Kn=Array.isArray,qn=R(String.prototype.toLowerCase),Jn=R(String.prototype.toString),Yn=R(String.prototype.match),Xn=R(String.prototype.replace),Zn=R(String.prototype.indexOf),Qn=R(String.prototype.trim),$n=R(Number.prototype.toString),er=R(Boolean.prototype.toString),tr=typeof BigInt>`u`?null:R(BigInt.prototype.toString),nr=typeof Symbol>`u`?null:R(Symbol.prototype.toString),rr=R(Object.prototype.hasOwnProperty),ir=R(Object.prototype.toString),ar=R(RegExp.prototype.test),or=sr(TypeError);function R(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return zn(e,t,n)}}function sr(e){return function(){return Bn(e,[...arguments])}}function z(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:qn;if(jn&&jn(e,null),!Kn(t))return e;let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(Mn(t)||(t[r]=e),i=e)}e[i]=!0}return e}function cr(e){for(let t=0;t<e.length;t++)rr(e,t)||(e[t]=null);return e}function lr(e){let t=Ln(null);for(let r of An(e)){var n=On(r,2);let i=n[0],a=n[1];rr(e,i)&&(t[i]=Kn(a)?cr(a):a&&typeof a==`object`&&a.constructor===Object?lr(a):a)}return t}function ur(e){switch(typeof e){case`string`:return e;case`number`:return $n(e);case`boolean`:return er(e);case`bigint`:return tr?tr(e):`0`;case`symbol`:return nr?nr(e):`Symbol()`;case`undefined`:return ir(e);case`function`:case`object`:{if(e===null)return ir(e);let t=e,n=dr(t,`toString`);if(typeof n==`function`){let e=n(t);return typeof e==`string`?e:ir(e)}return ir(e)}default:return ir(e)}}function dr(e,t){for(;e!==null;){let n=Pn(e,t);if(n){if(n.get)return R(n.get);if(typeof n.value==`function`)return R(n.value)}e=Nn(e)}function n(){return null}return n}function fr(e){try{return ar(e,``),!0}catch{return!1}}var pr=Fn(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),mr=Fn(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),hr=Fn([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),gr=Fn([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),_r=Fn(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),vr=Fn([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),yr=Fn([`#text`]),br=Fn(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(`.`)),xr=Fn(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),Sr=Fn(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),Cr=Fn([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),wr=In(/{{[\w\W]*|^[\w\W]*}}/g),Tr=In(/<%[\w\W]*|^[\w\W]*%>/g),Er=In(/\${[\w\W]*/g),Dr=In(/^data-[\-\w.\u00B7-\uFFFF]+$/),Or=In(/^aria-[\-\w]+$/),kr=In(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ar=In(/^(?:\w+script|data):/i),jr=In(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Mr=In(/^html$/i),Nr=In(/^[a-z][.\w]*(-[.\w]+)+$/i),Pr=In(/<[/\w!]/g),Fr=In(/<[/\w]/g),Ir=In(/<\/no(script|embed|frames)/i),Lr=In(/\/>/i),Rr={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},zr=[`style`,`script`,`xmp`,`iframe`,`noembed`,`noframes`,`plaintext`,`noscript`],Br=Fn(z({},zr)),Vr=function(){let e={};return Vn(zr,t=>{e[t]=In(RegExp(`</`+t+`(?=[\\t\\n\\f\\r />])`,`i`))}),Fn(e)}(),Hr=function(){return typeof window>`u`?null:window},Ur=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},Wr=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Gr=function(e,t,n,r){return rr(e,t)&&Kn(e[t])?z(r.base?lr(r.base):{},e[t],r.transform):n},Kr=function(e,t,n){let r=rr(e,t)?e[t]:void 0;return r&&typeof r==`object`?lr(r):n()};function qr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Hr(),t=e=>qr(e);if(t.version=`3.4.15`,t.removed=[],!e||!e.document||e.document.nodeType!==Rr.document||!e.Element)return t.isSupported=!1,t;let n=e.document,r=n,i=r.currentScript;e.DocumentFragment;let a=e.HTMLTemplateElement,o=e.Node,s=e.Element,c=e.NodeFilter;e.NamedNodeMap===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;let l=e.DOMParser,u=e.trustedTypes,d=s.prototype,f=dr(d,`cloneNode`),p=dr(d,`remove`),m=dr(d,`removeAttributeNode`),h=dr(d,`nextSibling`),g=dr(d,`childNodes`),_=dr(d,`parentNode`),v=dr(d,`shadowRoot`),y=dr(d,`attributes`),b=o&&o.prototype?dr(o.prototype,`nodeType`):null,x=o&&o.prototype?dr(o.prototype,`nodeName`):null,S=o&&o.prototype?dr(o.prototype,`ownerDocument`):null,C=function(e){return b?b(e):e.nodeType},w=function(e){return x?x(e):e.nodeName};if(typeof a==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let T,E=``,ee,te=!1,ne=0,re=function(){if(ne>0)throw or(`A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`)},ie=function(e){re(),ne++;try{return T.createHTML(e)}finally{ne--}},ae=function(e){re(),ne++;try{return T.createScriptURL(e)}finally{ne--}},oe=function(){return te||=(ee=Ur(u,i),!0),ee},se=n,ce=se.implementation,D=se.createNodeIterator,O=se.createDocumentFragment,le=se.getElementsByTagName,ue=r.importNode,k=Wr();t.isSupported=typeof An==`function`&&typeof _==`function`&&ce&&ce.createHTMLDocument!==void 0;let de=wr,fe=Tr,A=Er,pe=Dr,me=Or,he=Ar,ge=jr,_e=Nr,ve=kr,j=null,ye=z({},[...pr,...mr,...hr,..._r,...yr]),M=null,be=z({},[...br,...xr,...Sr,...Cr]),xe=Object.seal(Ln(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Se=null,Ce=null,we=Object.seal(Ln(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Te=!0,Ee=!0,De=!1,Oe=!0,ke=!1,Ae=!0,je=!1,Me=!1,Ne=null,Pe=null,Fe=!1,Ie=!1,Le=!1,Re=!1,ze=!0,Be=!1,Ve=`user-content-`,He=!0,Ue=!1,We={},Ge=null,Ke=z({},`annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(`.`)),qe=null,N=z({},[`audio`,`video`,`img`,`source`,`image`,`track`]),Je=null,Ye=z({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),Xe=`http://www.w3.org/1998/Math/MathML`,Ze=`http://www.w3.org/2000/svg`,Qe=`http://www.w3.org/1999/xhtml`,$e=Qe,et=!1,tt=null,nt=z({},[Xe,Ze,Qe],Jn),rt=Fn([`mi`,`mo`,`mn`,`ms`,`mtext`]),it=z({},rt),at=Fn([`annotation-xml`]),ot=z({},at),st=z({},[`title`,`style`,`font`,`a`,`script`]),ct=null,lt=[`application/xhtml+xml`,`text/html`],P=null,F=null,ut=n.createElement(`form`),dt=function(e){return e instanceof RegExp||e instanceof Function},ft=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(F&&F===e)return;(!e||typeof e!=`object`)&&(e={}),e=lr(e),ct=lt.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,P=ct===`application/xhtml+xml`?Jn:qn,j=Gr(e,`ALLOWED_TAGS`,ye,{transform:P}),M=Gr(e,`ALLOWED_ATTR`,be,{transform:P}),tt=Gr(e,`ALLOWED_NAMESPACES`,nt,{transform:Jn}),Je=Gr(e,`ADD_URI_SAFE_ATTR`,Ye,{transform:P,base:Ye}),qe=Gr(e,`ADD_DATA_URI_TAGS`,N,{transform:P,base:N}),Ge=Gr(e,`FORBID_CONTENTS`,Ke,{transform:P}),Se=Gr(e,`FORBID_TAGS`,lr({}),{transform:P}),Ce=Gr(e,`FORBID_ATTR`,lr({}),{transform:P}),We=rr(e,`USE_PROFILES`)?e.USE_PROFILES&&typeof e.USE_PROFILES==`object`?lr(e.USE_PROFILES):e.USE_PROFILES:!1,Te=e.ALLOW_ARIA_ATTR!==!1,Ee=e.ALLOW_DATA_ATTR!==!1,De=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Oe=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ke=e.SAFE_FOR_TEMPLATES||!1,Ae=e.SAFE_FOR_XML!==!1,je=e.WHOLE_DOCUMENT||!1,Ie=e.RETURN_DOM||!1,Le=e.RETURN_DOM_FRAGMENT||!1,Re=e.RETURN_TRUSTED_TYPE||!1,Fe=e.FORCE_BODY||!1,ze=e.SANITIZE_DOM!==!1,Be=e.SANITIZE_NAMED_PROPS||!1,He=e.KEEP_CONTENT!==!1,Ue=e.IN_PLACE||!1,ve=fr(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:kr,$e=typeof e.NAMESPACE==`string`?e.NAMESPACE:Qe,it=Kr(e,`MATHML_TEXT_INTEGRATION_POINTS`,()=>z({},rt)),ot=Kr(e,`HTML_INTEGRATION_POINTS`,()=>z({},at));let t=Kr(e,`CUSTOM_ELEMENT_HANDLING`,()=>Ln(null));if(xe=Ln(null),rr(t,`tagNameCheck`)&&dt(t.tagNameCheck)&&(xe.tagNameCheck=t.tagNameCheck),rr(t,`attributeNameCheck`)&&dt(t.attributeNameCheck)&&(xe.attributeNameCheck=t.attributeNameCheck),rr(t,`allowCustomizedBuiltInElements`)&&typeof t.allowCustomizedBuiltInElements==`boolean`&&(xe.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),In(xe),ke&&(Ee=!1),Le&&(Ie=!0),We&&(j=z({},yr),M=Ln(null),We.html===!0&&(z(j,pr),z(M,br)),We.svg===!0&&(z(j,mr),z(M,xr),z(M,Cr)),We.svgFilters===!0&&(z(j,hr),z(M,xr),z(M,Cr)),We.mathMl===!0&&(z(j,_r),z(M,Sr),z(M,Cr))),we.tagCheck=null,we.attributeCheck=null,rr(e,`ADD_TAGS`)&&(typeof e.ADD_TAGS==`function`?we.tagCheck=e.ADD_TAGS:Kn(e.ADD_TAGS)&&(j===ye&&(j=lr(j)),z(j,e.ADD_TAGS,P))),rr(e,`ADD_ATTR`)&&(typeof e.ADD_ATTR==`function`?we.attributeCheck=e.ADD_ATTR:Kn(e.ADD_ATTR)&&(M===be&&(M=lr(M)),z(M,e.ADD_ATTR,P))),rr(e,`ADD_FORBID_CONTENTS`)&&Kn(e.ADD_FORBID_CONTENTS)&&(Ge===Ke&&(Ge=lr(Ge)),z(Ge,e.ADD_FORBID_CONTENTS,P)),He&&(j[`#text`]=!0),je&&z(j,[`html`,`head`,`body`]),j.table&&(z(j,[`tbody`]),delete Se.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw or(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw or(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);let t=T;T=e.TRUSTED_TYPES_POLICY;try{E=ie(``)}catch(e){throw T=t,e}}else e.TRUSTED_TYPES_POLICY===null?(T=void 0,E=``):(T===void 0&&(T=oe()),T&&typeof E==`string`&&(E=ie(``)));Fn&&Fn(e),F=e},pt=z({},[...mr,...hr,...gr]),mt=z({},[..._r,...vr]),ht=function(e,t,n){return t.namespaceURI===Qe?e===`svg`:t.namespaceURI===Xe?e===`svg`&&(n===`annotation-xml`||it[n]):!!pt[e]},gt=function(e,t,n){return t.namespaceURI===Qe?e===`math`:t.namespaceURI===Ze?e===`math`&&ot[n]:!!mt[e]},_t=function(e,t,n){return t.namespaceURI===Ze&&!ot[n]||t.namespaceURI===Xe&&!it[n]?!1:!mt[e]&&(st[e]||!pt[e])},vt=function(e){let t=_(e);(!t||!t.tagName)&&(t={namespaceURI:$e,tagName:`template`});let n=qn(e.tagName),r=qn(t.tagName);return tt[e.namespaceURI]?e.namespaceURI===Ze?ht(n,t,r):e.namespaceURI===Xe?gt(n,t,r):e.namespaceURI===Qe?_t(n,t,r):!!(ct===`application/xhtml+xml`&&tt[e.namespaceURI]):!1},yt=function(e){Wn(t.removed,{element:e});try{_(e).removeChild(e)}catch{if(p(e),!_(e))throw or(`a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`)}},bt=function(e,t,n){try{m(e,t)}catch{try{e.removeAttribute(n)}catch{}}},xt=function(e){Ct(e);let t=g(e);if(t){let e=[];Vn(t,t=>{Wn(e,t)}),Vn(e,e=>{try{p(e)}catch{}})}let n=y(e);if(n)for(let t=n.length-1;t>=0;--t){let r=n[t],i=r&&r.name;typeof i==`string`&&bt(e,r,i)}},I=function(e,n,r){if(!r)try{r=n.getAttributeNode(e)}catch{r=null}Wn(t.removed,{attribute:r||null,from:n});try{r?m(n,r):n.removeAttribute(e)}catch{try{n.removeAttribute(e)}catch{}}if(e===`is`){if(Ie||Le)try{yt(n)}catch{}else try{n.setAttribute(e,``)}catch{}}},St=function(e){let t=y(e);if(t)for(let n=t.length-1;n>=0;--n){let r=t[n],i=r&&r.name;typeof i!=`string`||M[P(i)]||bt(e,r,i)}},Ct=function(e){let t=[e];for(;t.length>0;){let e=t.pop();C(e)===Rr.element&&St(e);let n=g(e);if(n)for(let e=n.length-1;e>=0;--e)t.push(n[e])}},wt=function(e,t){return Ae?e===`patchsrc`||e===`for`&&t!==`label`&&t!==`output`:!1},Tt=function(e){if(!Ae)return;let t=[e];for(;t.length>0;){let e=t.pop(),n=C(e);if(n===Rr.processingInstruction||n===Rr.comment&&ar(Fr,e.data)){try{p(e)}catch{}continue}if(n===Rr.element){let t=e,n=P(w(e));try{t.hasAttribute&&t.hasAttribute(`patchsrc`)&&t.removeAttribute(`patchsrc`),t.hasAttribute&&t.hasAttribute(`for`)&&wt(`for`,n)&&t.removeAttribute(`for`)}catch{}}let r=g(e);if(r)for(let e=r.length-1;e>=0;--e)t.push(r[e])}},Et=function(e){let t=null,r=null;if(Fe)e=`<remove></remove>`+e;else{let t=Yn(e,/^[\r\n\t ]+/);r=t&&t[0]}ct===`application/xhtml+xml`&&$e===Qe&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=T?ie(e):e;if($e===Qe)try{t=new l().parseFromString(i,ct)}catch{}if(!t||!t.documentElement){t=ce.createDocument($e,`template`,null);try{t.documentElement.innerHTML=et?E:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),$e===Qe?le.call(t,je?`html`:`body`)[0]:je?t.documentElement:a},Dt=function(e){let t=S?S(e):e.ownerDocument;return D.call(t||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Ot=function(e){return e=Xn(e,de,` `),e=Xn(e,fe,` `),e=Xn(e,A,` `),e},kt=function(e){e.normalize();let t=S?S(e):e.ownerDocument,n=D.call(t||e,e,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),r=n.nextNode();for(;r;)r.data=Ot(r.data),r=n.nextNode();let i=e.querySelectorAll?.call(e,`template`);i&&Vn(i,e=>{jt(e.content)&&kt(e.content)})},At=function(e){let t=x?x(e):null;return typeof t!=`string`||P(t)!==`form`?!1:typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||e.attributes!==y(e)||typeof e.removeAttribute!=`function`||typeof e.removeAttributeNode!=`function`||typeof e.getAttributeNode!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`||e.nodeType!==b(e)||e.childNodes!==g(e)},jt=function(e){if(!b||typeof e!=`object`||!e)return!1;try{return b(e)===Rr.documentFragment}catch{return!1}},Mt=function(e){if(!b||typeof e!=`object`||!e)return!1;try{return typeof b(e)==`number`}catch{return!1}};function Nt(e,n,r){e.length!==0&&Vn(e,e=>{e.call(t,n,r,F)})}let Pt=function(e,t){return!!(Ae&&e.hasChildNodes()&&!Mt(e.firstElementChild)&&ar(Pr,e.textContent)&&ar(Pr,e.innerHTML)||Ae&&e.namespaceURI===Qe&&Br[t]&&(Mt(e.firstElementChild)||typeof e.textContent==`string`&&ar(Vr[t],e.textContent))||e.nodeType===Rr.processingInstruction||Ae&&e.nodeType===Rr.comment&&ar(Fr,e.data))},Ft=function(e,t){return e instanceof RegExp?ar(e,t):e instanceof Function&&!!e(t,...[...arguments].slice(2))},It=function(e,t,n){if(!Se[t]&&Ht(t)&&Ft(xe.tagNameCheck,t))return!1;if(He&&!Ge[t]){let t=_(e),r=g(e);if(r&&t){let i=r.length;for(let a=i-1;a>=0;--a){let i=e===n?f(r[a],!0):r[a];t.insertBefore(i,h(e))}}}return yt(e),!0},Lt=function(e,t,n,r){return e.length===0?t:t===n||t===r?lr(t):t},Rt=function(e,t){return e===t||_(e)!==null?!1:(Ue&&Ct(e),!0)},zt=function(e,n){if(Nt(k.beforeSanitizeElements,e,null),Rt(e,n))return!0;if(At(e))return yt(e),!0;let r=P(w(e));if(j=Lt(k.uponSanitizeElement,j,ye,Ne),Nt(k.uponSanitizeElement,e,{tagName:r,allowedTags:j}),Rt(e,n))return!0;if(Pt(e,r))return yt(e),!0;if(Se[r]||!(we.tagCheck instanceof Function&&we.tagCheck(r))&&!j[r]){let t=It(e,r,n);return t===!1&&Nt(k.afterSanitizeElements,e,null),t}if(C(e)===Rr.element&&!vt(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&ar(Ir,e.innerHTML))return yt(e),!0;if(ke&&e.nodeType===Rr.text){let n=Ot(e.textContent);e.textContent!==n&&(Wn(t.removed,{element:e.cloneNode()}),e.textContent=n)}return Nt(k.afterSanitizeElements,e,null),!1},Bt=function(e,t,r){if(Ce[t]||wt(t,e)||ze&&(t===`id`||t===`name`)&&(r in n||r in ut))return!1;let i=M[t]||we.attributeCheck instanceof Function&&we.attributeCheck(t,e);return Ee&&ar(pe,t)||Te&&ar(me,t)?!0:i?Je[t]||ar(ve,Xn(r,ge,``))||(t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&Zn(r,`data:`)===0&&qe[e]||De&&!ar(he,Xn(r,ge,``))?!0:!r:Ht(e)&&Ft(xe.tagNameCheck,e)&&Ft(xe.attributeNameCheck,t,e)||t===`is`&&xe.allowCustomizedBuiltInElements&&Ft(xe.tagNameCheck,r)},Vt=z({},[`annotation-xml`,`color-profile`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`missing-glyph`]),Ht=function(e){return!Vt[qn(e)]&&ar(_e,e)},Ut=function(e,t,n,r){if(T&&typeof u==`object`&&typeof u.getAttributeType==`function`&&!n)switch(u.getAttributeType(e,t)){case`TrustedHTML`:return ie(r);case`TrustedScriptURL`:return ae(r)}return r},Wt=function(e,t,n,r){try{return n?e.setAttributeNS(n,t,r):e.setAttribute(t,r),!At(e)||(yt(e),!1)}catch{return I(t,e),!1}},Gt=function(e){Nt(k.beforeSanitizeAttributes,e,null);let n=e.attributes;if(!n||At(e))return;M=Lt(k.uponSanitizeAttribute,M,be,Pe);let r={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:M,forceKeepAttr:void 0},i=n.length,a=P(e.nodeName);for(;i--;){let o=n[i],s=o.name,c=o.namespaceURI,l=o.value,u=P(s),d=l,f=s===`value`?d:Qn(d),p=!1;if(r.attrName=u,r.attrValue=f,r.keepAttr=!0,r.forceKeepAttr=void 0,Nt(k.uponSanitizeAttribute,e,r),f=r.attrValue,Be&&(u===`id`||u===`name`)&&Zn(f,Ve)!==0&&(I(s,e,o),f=Ve+f,p=!0),Ae&&ar(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,f)){I(s,e,o);continue}if(u===`attributename`&&Yn(f,`href`)){I(s,e,o);continue}if(!r.forceKeepAttr){if(!r.keepAttr){I(s,e,o);continue}if(!Oe&&ar(Lr,f)){I(s,e,o);continue}if(ke&&(f=Ot(f)),!Bt(a,u,f)){I(s,e,o);continue}f=Ut(a,u,c,f),f!==d&&Wt(e,s,c,f)&&p&&Un(t.removed)}}Nt(k.afterSanitizeAttributes,e,null)},Kt=function(e){let t=null,n=Dt(e);for(Nt(k.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)if(Nt(k.uponSanitizeShadowNode,t,null),zt(t,e),Gt(t),jt(t.content)&&Kt(t.content),C(t)===Rr.element){let e=v(t);jt(e)&&(qt(e),Kt(e))}Nt(k.afterSanitizeShadowDOM,e,null)},qt=function(e){let t=[{node:e,shadow:null}];for(;t.length>0;){let e=t.pop();if(e.shadow){Kt(e.shadow);continue}let n=e.node,r=C(n)===Rr.element,i=g(n);if(i)for(let e=i.length-1;e>=0;--e)t.push({node:i[e],shadow:null});if(r){let e=x?x(n):null;if(typeof e==`string`&&P(e)===`template`){let e=n.content;jt(e)&&t.push({node:e,shadow:null})}}if(r){let e=v(n);jt(e)&&t.push({node:null,shadow:e},{node:e,shadow:null})}}};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,a=null,o=null,s=null;if(et=!e,et&&(e=`<!-->`),typeof e!=`string`&&!Mt(e)&&(e=ur(e),typeof e!=`string`))throw or(`dirty is not a string, aborting`);if(!t.isSupported)return e;Me?(j=Ne,M=Pe):ft(n),(k.uponSanitizeElement.length>0||k.uponSanitizeAttribute.length>0)&&(j=lr(j)),k.uponSanitizeAttribute.length>0&&(M=lr(M)),t.removed=[];let c=Ue&&typeof e!=`string`&&Mt(e);if(c){Tt(e);let t=w(e);if(typeof t==`string`){let n=P(t);if(!j[n]||Se[n])throw xt(e),or(`root node is forbidden and cannot be sanitized in-place`)}if(At(e))throw xt(e),or(`root node is clobbered and cannot be sanitized in-place`);try{qt(e)}catch(t){throw xt(e),t}}else if(Mt(e))i=Et(`<!---->`),a=i.ownerDocument.importNode(e,!0),a.nodeType===Rr.element&&a.nodeName===`BODY`||a.nodeName===`HTML`?i=a:i.appendChild(a),qt(i);else{if(!Ie&&!ke&&!je&&e.indexOf(`<`)===-1)return T&&Re?ie(e):e;if(i=Et(e),!i)return Ie?null:Re?E:``}i&&Fe&&yt(i.firstChild);let l=c?e:i;try{let e=Dt(l);for(;o=e.nextNode();)zt(o,l),Gt(o),jt(o.content)&&Kt(o.content)}catch(n){throw c&&(xt(e),Vn(t.removed,e=>{e.element&&Ct(e.element)})),n}if(c)return Vn(t.removed,e=>{e.element&&Ct(e.element)}),ke&&kt(e),e;if(Ie){if(ke&&kt(i),Le)for(s=O.call(i.ownerDocument);i.firstChild;)s.appendChild(i.firstChild);else s=i;return(M.shadowroot||M.shadowrootmode)&&(s=ue.call(r,s,!0)),s}let u=je?i.outerHTML:i.innerHTML;return je&&j[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&ar(Mr,i.ownerDocument.doctype.name)&&(u=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+u),ke&&(u=Ot(u)),T&&Re?ie(u):u},t.setConfig=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ft(e),Me=!0,Ne=j,Pe=M},t.clearConfig=function(){F=null,Me=!1,Ne=null,Pe=null,T=ee,E=``},t.isValidAttribute=function(e,t,n){F||ft({});let r=P(e),i=P(t);return Bt(r,i,n)},t.addHook=function(e,t){typeof t==`function`&&rr(k,e)&&Wn(k[e],t)},t.removeHook=function(e,t){if(rr(k,e)){if(t!==void 0){let n=Hn(k[e],t);return n===-1?void 0:Gn(k[e],n,1)[0]}return Un(k[e])}},t.removeHooks=function(e){rr(k,e)&&(k[e]=[])},t.removeAllHooks=function(){k=Wr()},t}var Jr=qr(),Yr=c(o(((e,t)=>{var n=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,r={},i={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof a?new a(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/\u00a0/g,` `)},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){n||={};var r,a;switch(i.util.type(t)){case`Object`:if(a=i.util.objId(t),n[a])return n[a];for(var o in r={},n[a]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case`Array`:return a=i.util.objId(t),n[a]?n[a]:(r=[],n[a]=r,t.forEach(function(t,i){r[i]=e(t,n)}),r);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return`none`},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,`gi`),``),e.classList.add(`language-`+n)},currentScript:function(){if(typeof document>`u`)return null;if(document.currentScript&&document.currentScript.tagName===`SCRIPT`)return document.currentScript;try{throw Error()}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName(`script`);for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var r=`no-`+t;e;){var i=e.classList;if(i.contains(t))return!0;if(i.contains(r))return!1;e=e.parentElement}return!!n}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){r||=i.languages;var a=r[e],o={};for(var s in a)if(a.hasOwnProperty(s)){if(s==t)for(var c in n)n.hasOwnProperty(c)&&(o[c]=n[c]);n.hasOwnProperty(s)||(o[s]=a[s])}var l=r[e];return r[e]=o,i.languages.DFS(i.languages,function(t,n){n===l&&t!=e&&(this[t]=o)}),o},DFS:function e(t,n,r,a){a||={};var o=i.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],r||s);var c=t[s],l=i.util.type(c);l===`Object`&&!a[o(c)]?(a[o(c)]=!0,e(c,n,null,a)):l===`Array`&&!a[o(c)]&&(a[o(c)]=!0,e(c,n,s,a))}}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:`code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code`};i.hooks.run(`before-highlightall`,r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),i.hooks.run(`before-all-elements-highlight`,r);for(var a=0,o;o=r.elements[a++];)i.highlightElement(o,t===!0,r.callback)},highlightElement:function(t,n,r){var a=i.util.getLanguage(t),o=i.languages[a];i.util.setLanguage(t,a);var s=t.parentElement;s&&s.nodeName.toLowerCase()===`pre`&&i.util.setLanguage(s,a);var c={element:t,language:a,grammar:o,code:t.textContent};function l(e){c.highlightedCode=e,i.hooks.run(`before-insert`,c),c.element.innerHTML=c.highlightedCode,i.hooks.run(`after-highlight`,c),i.hooks.run(`complete`,c),r&&r.call(c.element)}if(i.hooks.run(`before-sanity-check`,c),s=c.element.parentElement,s&&s.nodeName.toLowerCase()===`pre`&&!s.hasAttribute(`tabindex`)&&s.setAttribute(`tabindex`,`0`),!c.code){i.hooks.run(`complete`,c),r&&r.call(c.element);return}if(i.hooks.run(`before-highlight`,c),!c.grammar){l(i.util.encode(c.code));return}if(n&&e.Worker){var u=new Worker(i.filename);u.onmessage=function(e){l(e.data)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else l(i.highlight(c.code,c.grammar,c.language))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};if(i.hooks.run(`before-tokenize`,r),!r.grammar)throw Error(`The language "`+r.language+`" has no grammar.`);return r.tokens=i.tokenize(r.code,r.grammar),i.hooks.run(`after-tokenize`,r),a.stringify(i.util.encode(r.tokens),r.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var i=new c;return l(i,i.head,e),s(e,i,t,i.head,0),d(i)},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(n&&n.length)for(var r=0,a;a=n[r++];)a(t)}},Token:a};e.Prism=i;function a(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=(r||``).length|0}a.stringify=function e(t,n){if(typeof t==`string`)return t;if(Array.isArray(t)){var r=``;return t.forEach(function(t){r+=e(t,n)}),r}var a={type:t.type,content:e(t.content,n),tag:`span`,classes:[`token`,t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(a.classes,o):a.classes.push(o)),i.hooks.run(`wrap`,a);var s=``;for(var c in a.attributes)s+=` `+c+`="`+(a.attributes[c]||``).replace(/"/g,`&quot;`)+`"`;return`<`+a.tag+` class="`+a.classes.join(` `)+`"`+s+`>`+a.content+`</`+a.tag+`>`};function o(e,t,n,r){e.lastIndex=t;var i=e.exec(n);if(i&&r&&i[1]){var a=i[1].length;i.index+=a,i[0]=i[0].slice(a)}return i}function s(e,t,n,r,c,d){for(var f in n)if(n.hasOwnProperty(f)&&n[f]){var p=n[f];p=Array.isArray(p)?p:[p];for(var m=0;m<p.length;++m){if(d&&d.cause==f+`,`+m)return;var h=p[m],g=h.inside,_=!!h.lookbehind,v=!!h.greedy,y=h.alias;if(v&&!h.pattern.global){var b=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,b+`g`)}for(var x=h.pattern||h,S=r.next,C=c;S!==t.tail&&!(d&&C>=d.reach);C+=S.value.length,S=S.next){var w=S.value;if(t.length>e.length)return;if(!(w instanceof a)){var T=1,E;if(v){if(E=o(x,C,e,_),!E||E.index>=e.length)break;var ee=E.index,te=E.index+E[0].length,ne=C;for(ne+=S.value.length;ee>=ne;)S=S.next,ne+=S.value.length;if(ne-=S.value.length,C=ne,S.value instanceof a)continue;for(var re=S;re!==t.tail&&(ne<te||typeof re.value==`string`);re=re.next)T++,ne+=re.value.length;T--,w=e.slice(C,ne),E.index-=C}else if(E=o(x,0,w,_),!E)continue;var ee=E.index,ie=E[0],ae=w.slice(0,ee),oe=w.slice(ee+ie.length),se=C+w.length;d&&se>d.reach&&(d.reach=se);var ce=S.prev;ae&&(ce=l(t,ce,ae),C+=ae.length),u(t,ce,T);var D=new a(f,g?i.tokenize(ie,g):ie,y,ie);if(S=l(t,ce,D),oe&&l(t,S,oe),T>1){var O={cause:f+`,`+m,reach:se};s(e,t,n,S.prev,C,O),d&&O.reach>d.reach&&(d.reach=O.reach)}}}}}}function c(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function l(e,t,n){var r=t.next,i={value:n,prev:t,next:r};return t.next=i,r.prev=i,e.length++,i}function u(e,t,n){for(var r=t.next,i=0;i<n&&r!==e.tail;i++)r=r.next;t.next=r,r.prev=t,e.length-=i}function d(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}if(!e.document)return e.addEventListener&&(i.disableWorkerMessageHandler||e.addEventListener(`message`,function(t){var n=JSON.parse(t.data),r=n.language,a=n.code,o=n.immediateClose;e.postMessage(i.highlight(a,i.languages[r],r)),o&&e.close()},!1)),i;var f=i.util.currentScript();f&&(i.filename=f.src,f.hasAttribute(`data-manual`)&&(i.manual=!0));function p(){i.manual||i.highlightAll()}if(!i.manual){var m=document.readyState;m===`loading`||m===`interactive`&&f&&f.defer?document.addEventListener(`DOMContentLoaded`,p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return i}(typeof window<`u`?window:typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope?self:{});t!==void 0&&t.exports&&(t.exports=n),typeof global<`u`&&(global.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:`attr-equals`},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:`named-entity`},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside[`attr-value`].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside[`internal-subset`].inside=n.languages.markup,n.hooks.add(`wrap`,function(e){e.type===`entity`&&(e.attributes.title=e.content.replace(/&amp;/,`&`))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r[`language-`+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};i[`language-`+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var a={};a[e]={pattern:RegExp(`(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)`.replace(/__/g,function(){return e}),`i`),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore(`markup`,`cdata`,a)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(e,t){n.languages.markup.tag.inside[`special-attr`].push({pattern:RegExp(`(^|["'\\s])(?:`+e+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,`i`),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,`language-`+t],inside:n.languages[t]},punctuation:[{pattern:/^=/,alias:`attr-equals`},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend(`markup`,{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+t.source+`)*?(?:;|(?=\\s*\\{))`),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:`selector`},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp(`\\burl\\((?:`+t.source+`|(?:[^\\\\\\r\\n()"']|\\\\[\\s\\S])*)\\)`,`i`),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp(`^`+t.source+`$`),alias:`url`}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+`)*(?=\\s*\\{)`),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined(`style`,`css`),n.tag.addAttribute(`style`,`css`))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend(`clike`,{"class-name":[n.languages.clike[`class-name`],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(`(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])`),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript[`class-name`][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore(`javascript`,`keyword`,{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:`language-regex`,inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:`function`},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore(`javascript`,`string`,{hashbang:{pattern:/^#!.*/,greedy:!0,alias:`comment`},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:`string`},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:`punctuation`},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:`property`}}),n.languages.insertBefore(`javascript`,`operator`,{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:`property`}}),n.languages.markup&&(n.languages.markup.tag.addInlined(`script`,`javascript`),n.languages.markup.tag.addAttribute(`on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)`,`javascript`)),n.languages.js=n.languages.javascript,(function(){if(n===void 0||typeof document>`u`)return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e=`Loading…`,t=function(e,t){return`✖ Error `+e+` while fetching file: `+t},r=`✖ Error: File does not exist or is empty`,i={js:`javascript`,py:`python`,rb:`ruby`,ps1:`powershell`,psm1:`powershell`,sh:`bash`,bat:`batch`,h:`c`,tex:`latex`},a=`data-src-status`,o=`loading`,s=`loaded`,c=`failed`,l=`pre[data-src]:not([`+a+`="`+s+`"]):not([`+a+`="`+o+`"])`;function u(e,n,i){var a=new XMLHttpRequest;a.open(`GET`,e,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?n(a.responseText):a.status>=400?i(t(a.status,a.statusText)):i(r))},a.send(null)}function d(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||``);if(t){var n=Number(t[1]),r=t[2],i=t[3];return r?i?[n,Number(i)]:[n,void 0]:[n,n]}}n.hooks.add(`before-highlightall`,function(e){e.selector+=`, `+l}),n.hooks.add(`before-sanity-check`,function(t){var r=t.element;if(r.matches(l)){t.code=``,r.setAttribute(a,o);var f=r.appendChild(document.createElement(`CODE`));f.textContent=e;var p=r.getAttribute(`data-src`),m=t.language;if(m===`none`){var h=(/\.(\w+)$/.exec(p)||[,`none`])[1];m=i[h]||h}n.util.setLanguage(f,m),n.util.setLanguage(r,m);var g=n.plugins.autoloader;g&&g.loadLanguages(m),u(p,function(e){r.setAttribute(a,s);var t=d(r.getAttribute(`data-range`));if(t){var i=e.split(/\r\n?|\n/g),o=t[0],c=t[1]==null?i.length:t[1];o<0&&(o+=i.length),o=Math.max(0,Math.min(o-1,i.length)),c<0&&(c+=i.length),c=Math.max(0,Math.min(c,i.length)),e=i.slice(o,c).join(`
`),r.hasAttribute(`data-start`)||r.setAttribute(`data-start`,String(o+1))}f.textContent=e,n.highlightElement(f)},function(e){r.setAttribute(a,c),f.textContent=e})}}),n.plugins.fileHighlight={highlight:function(e){for(var t=(e||document).querySelectorAll(l),r=0,i;i=t[r++];)n.highlightElement(i)}};var f=!1;n.fileHighlight=function(){f||=(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()}))(),1);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:`punctuation`},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:`string`},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:[`annotation`,`punctuation`],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python[`string-interpolation`].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python,(function(e){var t=`\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b`,n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:`punctuation`,inside:null},r={bash:n,environment:{pattern:RegExp(`\\$`+t),alias:`constant`},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp(`(\\{)`+t),lookbehind:!0,alias:`constant`}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:`important`},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:`function`},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:`function`}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:`variable`,lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp(`(^|[\\s;|&]|[<>]\\()`+t),lookbehind:!0,alias:`constant`}},alias:`variable`,lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:`variable`,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp(`\\$?`+t),alias:`constant`},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:`class-name`},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:`important`},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:`important`}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var i=[`comment`,`function-name`,`for-or-select`,`assign-left`,`parameter`,`string`,`environment`,`function`,`keyword`,`builtin`,`boolean`,`file-descriptor`,`operator`,`punctuation`,`number`],a=r.variable[1].inside,o=0;o<i.length;o++)a[i[o]]=e.languages.bash[i[o]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism),(function(e){function t(e){return e.replace(/__/g,function(){return`(?:[\\w-]+|'[^'\\n\\r]*'|"(?:\\\\.|[^\\\\"\\r\\n])*")`})}e.languages.toml={comment:{pattern:/#.*/,greedy:!0},table:{pattern:RegExp(t(`(^[\\t ]*\\[\\s*(?:\\[\\s*)?)__(?:\\s*\\.\\s*__)*(?=\\s*\\])`),`m`),lookbehind:!0,greedy:!0,alias:`class-name`},key:{pattern:RegExp(t(`(^[\\t ]*|[{,]\\s*)__(?:\\s*\\.\\s*__)*(?=\\s*=)`),`m`),lookbehind:!0,greedy:!0,alias:`property`},string:{pattern:/"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},date:[{pattern:/\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,alias:`number`},{pattern:/\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,alias:`number`}],number:/(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,boolean:/\b(?:false|true)\b/,punctuation:/[.,=[\]{}]/}})(Prism),(function(e){var t=e.languages.powershell={comment:[{pattern:/(^|[^`])<#[\s\S]*?#>/,lookbehind:!0},{pattern:/(^|[^`])#.*/,lookbehind:!0}],string:[{pattern:/"(?:`[\s\S]|[^`"])*"/,greedy:!0,inside:null},{pattern:/'(?:[^']|'')*'/,greedy:!0}],namespace:/\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,boolean:/\$(?:false|true)\b/i,variable:/\$\w+\b/,function:[/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,/\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],keyword:/\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,operator:{pattern:/(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,lookbehind:!0},punctuation:/[|{}[\];(),.]/};t.string[0].inside={function:{pattern:/(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,lookbehind:!0,inside:t},boolean:t.boolean,variable:t.variable}})(Prism);var Xr=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase();function Zr(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:Xr(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}var Qr=e=>{let t=``,n=!1;for(let r of e){if(r===`-`||r===`_`||r<=` `){n=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1}return t},$r=e=>{let t=Qr(e);return t.charAt(0).toUpperCase()+t.slice(1)},ei=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),ti={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};function ni(e){return e!=null}function ri(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??ti.width,a=e.size??e.height??ti.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?ei(...c):ei(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??ti[`stroke-width`])*Number(e.size??e.width??ti.width)/Number(t.size??t.width??ti.width):t.strokeWidth??ti[`stroke-width`];return[`svg`,{...Object.entries(ti).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&ni(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&ni(t.width)&&{[r(`width`)]:t.width},...`height`in t&&ni(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function ii(e,t={}){return ri(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}var ai=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},oi=(0,x.createContext)({}),si=()=>(0,x.useContext)(oi),ci=(0,x.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:h=!1,nonScalingStroke:g=!1,color:_=`currentColor`,className:v=``}=si()??{},y=!!c||ai(d),[b,S,C=[]]=ii(u,{color:e??_,width:n??t??p,height:r??t??p,strokeWidth:i??m,absoluteStrokeWidth:a??h,nonScalingStroke:o??g,className:ei(v,s),hasA11yProp:y,attributes:d});return(0,x.createElement)(b,{ref:f,...S},[...C.map(([e,t])=>(0,x.createElement)(e,t)),...Array.isArray(c)?c:[c]])});function li(e,t=[],n=[]){let r=typeof e==`string`?Zr(e,t,n):e,i=(0,x.forwardRef)(({className:e,...t},n)=>(0,x.createElement)(ci,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=$r(r.name)),i}var ui={name:`chevron-right`,size:24,node:[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]};ui.node;var di=li(ui),fi={name:`menu`,size:24,node:[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]};fi.node;var pi=li(fi),mi={name:`moon`,size:24,node:[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]};mi.node;var hi=li(mi),gi={name:`search`,size:24,node:[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]};gi.node;var _i=li(gi),vi={name:`sun`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]};vi.node;var yi=li(vi),bi={name:`thumbs-down`,size:24,node:[[`path`,{d:`M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z`,key:`m61m77`}],[`path`,{d:`M17 14V2`,key:`8ymqnk`}]]};bi.node;var xi=li(bi),Si={name:`thumbs-up`,size:24,node:[[`path`,{d:`M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z`,key:`emmmcr`}],[`path`,{d:`M7 10v12`,key:`1qc93n`}]]};Si.node;var Ci=li(Si),wi={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]};wi.node;var Ti=li(wi),Ei=`# AxonWeave Documentation

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

Each component is independently configurable and replaceable. See [Framework API](framework.md), [Neuron Dynamics](dynamics.md), [Encoders & Decoders](encoders.md), and [Experiments](experiment.md).

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
| JAX | \`pip install "axonweave[jax]"\` | Experimental (adapter written; verification pending) |

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
`,Di=`# Getting Started

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

## Keras

\`\`\`python
from axonweave.keras import ConnectomeLayer

layer = ConnectomeLayer(
    brain.graph,
    trainable_edges=True,
    learnable_gain=True,
)
\`\`\`

## Constraints

A full-connectome state is large. Production applications should deliberately select input projection, internal state, readout and batching strategies. Do not assume a full dense tensor of all neurons is cheap simply because the graph itself is sparse.
`,Oi=`# Architecture

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
`,ki=`# Backends and Devices

## Supported package integrations

### NumPy/SciPy

Reference CPU implementation. All compute first routes through \`native.py\`, which dispatches either to the compiled Rust/PyO3 extension or an identical NumPy/SciPy reference — public results are the same either way, and both paths are first-class. Useful for correctness tests, inspection and small graph experiments.

### PyTorch

Installed with:

\`\`\`bash
pip install "axonweave[torch]"
\`\`\`

The integration exposes \`torch.nn.Module\` and uses PyTorch sparse operations.

### TensorFlow/Keras

Installed with:

\`\`\`bash
pip install "axonweave[tensorflow]"
\`\`\`

The integration exposes a Keras \`Layer\` and uses TensorFlow sparse operations.

## Device model

AxonWeave does not maintain a second device abstraction. The host framework controls placement.

For PyTorch this can include CPU, CUDA, MPS, XPU and other devices supported by the installed PyTorch release. For TensorFlow it can include CPU, GPU and TPU configurations supported by TensorFlow and the specific sparse operator.

:::DOC-WARN
A device being recognized by a framework does not imply that every sparse operation used by AxonWeave is implemented on that device. Capability must be tested. Unsupported combinations must fail explicitly instead of silently copying data to CPU.
:::

## Backend contract

A backend adapter must provide:

- native tensor/layer type;
- sparse graph representation;
- gradient propagation where trainable;
- device placement through native framework APIs;
- dtype policy;
- actionable capability errors.

## JAX integration

An experimental adapter exists (\`axonweave.jax\`): \`ConnectomeLayer\`, \`BrainModel\`, \`ConnectomeBlock\`, \`Input\` and \`Readout\` wrapping JAX's native sparse (BCOO) and device APIs. It is a written, unverified implementation — the supported sparse path still needs numerical equivalence tests on the suite's CI runners before it can be claimed stable.

JAX support remains an explicit optional target rather than a claim that every JAX sparse primitive is equivalent across accelerators.
`,Ai=`# Biological Model

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
`,ji=`# Interoperability

AxonWeave is intended to complement existing neuroscience tooling.

## neuPrint

Use \`neuprint-python\` for programmatic queries against neuPrint services. AxonWeave can ingest or reconcile identifiers through explicit adapters rather than replacing neuPrint.

## navis

Use \`navis\` for morphology, skeletons, meshes, visualization and morphology analysis. AxonWeave's graph state can be connected to morphology metadata through body IDs.

## Principle

Keep external scientific tools authoritative for the operations they already perform well. AxonWeave is the model/substrate layer, not a replacement for every neuroscience data-analysis package.
`,Mi=`# Substrate Distribution

The Python wheel and the biological substrate are separate artifacts.

## Online

\`\`\`bash
pip install axonweave
axonweave substrate install male-cns:v1.0
\`\`\`

## Cache

The default cache is under the platform's user cache directory and can be redirected with \`AXONWEAVE_HOME\`.

## Offline deployment

A future \`.awb\` pack format is planned. The intended workflow is:

\`\`\`bash
axonweave substrate pack male-cns:v1.0 --output male-cns-v1.0.awb
\`\`\`

then on an isolated machine:

\`\`\`bash
axonweave substrate install ./male-cns-v1.0.awb
\`\`\`

## Why not bundle it in PyPI?

The upstream release includes files ranging from tens of megabytes to multi-gigabyte synapse resources. A normal Python wheel should contain software, not force every installation to transfer the entire biological archive.
`,B=`# Scientific Reference

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
`,V=`# Release Engineering

## CI matrix

The repository defines CI for Ubuntu, macOS and Windows and Python 3.10–3.14. Separate jobs build/test Rust/PyO3 and build platform wheels using maturin. Source distributions remain usable without a Rust toolchain — the pure-Python fallback in \`native.py\` provides identical functionality.

## PyPI publishing

Publishing uses GitHub Actions with PyPI Trusted Publishing/OIDC. No long-lived PyPI API token belongs in repository secrets.

Before enabling production publishing, configure the PyPI trusted publisher to match the repository, workflow and environment.

## Release flow

\`\`\`text
tag vX.Y.Z
  ↓
quality gates
  ↓
platform wheel builds
  ↓
source distribution
  ↓
artifact inspection
  ↓
PyPI trusted publishing
  ↓
release notes
\`\`\`
`,Ni=`# Contributing

Start with \`AGENTS.md\`, \`ARCHITECTURE.md\` and \`PLAN.md\`.

Every public API change should include tests and documentation. Scientific behavior changes must identify their source or state that they are user-configurable assumptions.

Do not commit raw MaleCNS data or generated build artifacts.
`,Pi='# API Reference\n\n## `axonweave.load`\n\n```python\nbrain = axonweave.load("male-cns:v1.0")\n```\n\nLoads an installed substrate. It does not silently download multi-gigabyte data. Provisioning is explicit through the CLI.\n\n## `ConnectomeGraph`\n\n```python\ngraph.n_neurons\ngraph.n_edges\ngraph.index(body_id)\ngraph.neighbors(body_id)\n```\n\nThe graph preserves original body IDs and stores directed connectivity as a SciPy CSR matrix.\n\n## `BiologicalBrain`\n\n```python\nbrain.graph\nbrain.n_neurons\nbrain.torch_layer(...)\nbrain.keras_layer(...)\n```\n\nThe object binds the graph to optional source metadata paths and framework adapters.\n\n## `SignalPolicy`\n\n```python\nSignalPolicy(mapping={"label": 1.0}, default_gain=0.0)\n```\n\nThis is an explicit model assumption. It is not an upstream biological truth.\n\n## Error codes\n\n`AXW001` substrate missing; `AXW002` integrity/provenance mismatch; `AXW003` schema error; `AXW004` unsupported device; `AXW005` biological assumption error; `AXW006` optional backend unavailable.\n',Fi=`# Troubleshooting

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
`,Ii=`# Configuration

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
`,Li=`# Privacy Policy

AxonWeave documentation is designed to operate without collecting personal data by default. The project does not require an account to read documentation or use the open-source package.

If hosted analytics are enabled, the deployment should use a privacy-preserving provider and publish the exact data collected, retention period and opt-out mechanism here. No secrets or credentials belong in frontend code.
`,Ri=`# Terms and Conditions

AxonWeave is open-source software. Users are responsible for validating scientific assumptions, model outputs and suitability for their applications.

The upstream MaleCNS biological data have their own license and provenance requirements. Software licensing does not override upstream data terms.
`,zi=`# License

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
    limitations under the License.`,Bi=`# Code of Conduct

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
[mozilla]: https://github.com/mozilla/diversity`,Vi=`# Security Policy

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
on a vulnerability, contact us first.`,Hi=`# Custom Signal Policy

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
`,Ui=`# PyTorch Composition Example

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
`,Wi=`# Selection & Sub-Network Examples

This page shows how to restrict computation to a biologically meaningful subset of the substrate: selecting neurons by ID, mask, or annotation, then running a \`ConnectomeLayer\` or a full PyTorch model on the sub-network.

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

## What selections do NOT do

:::DOC-WARN
A selection restricts the **computational** sub-network. It does not claim the excluded neurons are biologically silent — in the fly brain, upstream neurons still influence the selected population. Selection is a modeling choice, not a biological statement about isolation.
:::

## Related

- [Biological Brain](brain.md) — selection API reference and introspection.
- [PyTorch Composition](examples-pytorch-composition.md) — full-brain layer composition.
- [Training](training.md) — the five learning modes.
`,Gi=`# Framework API

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
`,Ki=`# Encoders & Decoders

Encoders map external data modalities into neural stimulation patterns. Decoders map neural activity back to predictions or actions. Both are ordinary framework modules — fully composable with user code.

## Encoders

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

## Decoders

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
`,qi=`# Neuron Dynamics

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
`,Ji=`# Learning & Plasticity

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
`,Yi=`# Experiments

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
`,Xi=`# Installation

One-sentence purpose: install the AxonWeave Python package, optional framework extras, and the versioned biological substrate — as three separate concerns.

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
print(axonweave.load("male-cns:v1.0").info().native_backend)  # "0.1.0" (extension) or "python-fallback"
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
`,Zi=`# Core Concepts

One-sentence purpose: establish the mental model — what the substrate is, what AxonWeave adds, and where your task fits.

## The composition model

\`\`\`text
substrate  +  computational model  +  interface  +  task
\`\`\`

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
`,Qi='# Biological Brain\n\nOne-sentence purpose: document `axonweave.load()`, the `BiologicalBrain` object, brain introspection, and neuron selection.\n\n## Loading\n\n```python\nimport axonweave\n\nbrain = axonweave.load("male-cns:v1.0")\n```\n\n`load()` reads from the local substrate cache only. It never downloads data. If the substrate is missing it raises:\n\n```text\nAXW001: substrate \'male-cns:v1.0\' is not installed.\nRun `axonweave substrate install male-cns:v1.0`.\n```\n\n## What BiologicalBrain contains\n\n| Attribute | Type | Meaning |\n|---|---|---|\n| `brain.graph` | `ConnectomeGraph` | Sparse CSR connectivity + body IDs |\n| `brain.n_neurons` | `int` | Number of neurons (graph nodes) |\n| `brain.substrate_id` | `str` | Substrate identifier, e.g. `"male-cns:v1.0"` |\n| `brain.fingerprint` | `str` | SHA-256 identity hash of the loaded graph |\n| `brain.annotations` | `Path` or `None` | Path to annotations Feather file, if installed |\n| `brain.neurotransmitters` | `Path` or `None` | Path to neurotransmitter predictions, if installed |\n| `brain.receptors` | `Path` or `None` | Path to receptor metadata, if present |\n\n`BiologicalBrain` is explicitly a **computational wrapper**: the substrate identity and provenance live in the manifest on disk; the wrapper binds the graph to adapters.\n\n## Introspection: brain.info()\n\n`brain.info()` returns a `BrainInfo` snapshot of the loaded substrate:\n\n```python\ninfo = brain.info()\n\ninfo.n_neurons        # 166700\ninfo.n_edges          # 25600000 (approximate)\ninfo.substrate_id     # "male-cns:v1.0"\ninfo.fingerprint      # 64-char graph identity hash\ninfo.has_annotations  # True / False per installed attachments\ninfo.native_backend   # "0.1.0" (compiled Rust core) or "python-fallback"\n\nprint(info.summary())\n# Substrate:   male-cns:v1.0\n# Fingerprint: 3f9c1a2b7d4e5f60...\n# Neurons:     166,700\n# Connections: 25,600,000\n# Annotations: yes  Neurotransmitters: yes  Receptors: no\n# Native core: 0.1.0\n```\n\n`brain.capabilities()` returns the same facts as a machine-readable dict — backends, facades, dynamics and learning rules available on this instance — for use in experiment metadata and notebooks.\n\n## The graph fingerprint\n\nThe fingerprint is a deterministic SHA-256 over the CSR structure (shape, body IDs, indptr, indices, data). Two loads of the same substrate version always produce the same fingerprint; any change in connectivity or body IDs changes it. It is used to:\n\n- detect manifest identity mismatches at load time (`AXW002`)\n- tag checkpoints so a trained model cannot be restored against an incompatible connectome (see [Checkpoints](checkpoints.md))\n\n## Neuron selection\n\nSelections resolve against **body IDs** — the stable biological identifiers preserved from the source dataset. Reach the selector through `brain.graph.neurons`:\n\n```python\nsel = brain.graph.neurons.all()             # every neuron\nsel = brain.graph.neurons.ids([720575940632062920, 720575940610549233])\nsel = brain.graph.neurons.by_mask(my_mask)  # boolean mask over graph order\n```\n\nEvery selection is an ordered `NeuronSelection` with:\n\n| Member | Meaning |\n|---|---|\n| `len(sel)` | Number of selected neurons |\n| `sel.body_ids_list` | Selected body IDs, in request order |\n| `sel.weights()` | Sparse sub-matrix restricted to the selection |\n| `sel.mask()` | Boolean mask over all neurons |\n\nSelection order is preserved exactly as requested, so `ids([a, b])` and `ids([b, a])` produce differently-ordered (but equivalent) selections. Unknown body IDs raise `AXW010` — the library never silently drops an ID.\n\n:::DOC-NOTE\n`by_type()` and `by_region()` resolve against selection tables built from the MaleCNS body-annotations file at install time (stored as `annotations.json` in the substrate directory). If the tables are missing — e.g. an older install — reinstalling the substrate builds them; until then these methods raise an actionable `AXW010` error rather than returning an empty selection.\n:::\n\n```python\nsel = brain.graph.neurons.by_type("kenyon_cell")\nsel = brain.graph.neurons.by_region("L")           # hemisphere-style region values\n```\n\nAnnotation values are taken verbatim from the substrate\'s annotation columns (aliases such as `cell_type`/`type` and `side`/`region` are resolved by the builder). To discover the available values, query a known-missing one and read the error message, which lists up to 20 known values.\n\n## Selections in layers\n\nA selection can be handed directly to any backend\'s `ConnectomeLayer`. The layer then operates on the selected sub-network only — its input/output dimension equals the selection size, weights derive from the sub-matrix, and trainable edge parameters cover only the retained synapses:\n\n```python\nsel = brain.graph.neurons.by_type("kenyon_cell")\n\nlayer = brain.torch_layer(trainable_edges=True, selection=sel)  # torch.nn.Module over the sub-network\n```\n\nThe layer records `selection_body_ids` so experiment metadata can always recover which neurons it computed over. Passing anything that is not a `NeuronSelection` raises `AXW010`.\n\n## Framework adapters\n\n```python\nbrain.torch_layer(trainable_edges=True, learnable_gain=True, selection=None)  # torch.nn.Module\nbrain.keras_layer(trainable_edges=True, selection=None)                       # tf.keras.layers.Layer\nbrain.layer(...)                                                              # alias for torch_layer\n```\n\nThese remain the stable low-level APIs. The high-level facades are additive:\n\n```python\nbrain.task(input=..., output=..., dynamics="lif")   # supervised model (requires torch)\nbrain.agent(input=..., output=..., learning="stdp") # environment agent\nbrain.simulate(...)                                 # no-learning run\nbrain.experiment(...)                               # learning-enabled run\n```\n\n## Manifest identity\n\nEvery provisioned substrate carries a `manifest.json` with substrate ID, version, source URLs, per-file checksums, graph size and build status. `load()` validates identity (`AXW002` on mismatch) so you cannot silently compute against the wrong substrate.\n\n## Related\n\n- [Substrate Distribution](distribution.md) — how the substrate gets to disk.\n- [Connectome](connectome.md) — the graph object in detail.\n- [Framework API](framework.md) — tasks and agents.\n- [Checkpoints](checkpoints.md) — fingerprint-checked checkpoint identity.\n',$i=`# Connectome

One-sentence purpose: explain the graph representation — nodes, edges, weights, sparsity and identity — and the APIs to inspect it.

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
`,ea=`# Signals & Receptors

One-sentence purpose: explain how neurotransmitter data, signal policy and receptor models combine into effective synaptic influence — and why polarity is never hard-coded.

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
`,ta=`# Tasks

One-sentence purpose: document the high-level \`brain.task(...)\` interface that wires \`encoder → brain → readout\` into a trainable model.

:::DOC-WARN
The task API requires PyTorch (\`pip install "axonweave[torch]"\`) and is **experimental**. Keras and JAX task adapters are planned.
:::

## The pipeline

\`\`\`text
data
  ↓
encoder      (application data → neural currents)
  ↓
brain        (sparse connectome + dynamics)
  ↓
readout      (neural activity → task output)
  ↓
loss         (host framework)
\`\`\`

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
`,na=`# Training

One-sentence purpose: explain the five distinct ways to "train the brain" — what changes in each mode, and what stays fixed.

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
`,ra=`# Checkpoints

One-sentence purpose: explain how experiment checkpoints preserve substrate identity alongside learned parameters — and how compatibility is enforced.

:::DOC-WARN
Checkpointing currently covers the agent experiment API. Substrate-fingerprint validation on load is implemented at the registry level (manifest identity) and will extend to graph-fingerprint comparison in checkpoints.
:::

## Why identity matters

A trained model is only meaningful against the substrate it was trained on. A checkpoint therefore records context, not just weights:

- AxonWeave version
- substrate ID (e.g. \`male-cns:v1.0\`)
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
- \`ckpt-0100.awb-ckpt.json\` — metadata manifest

## Loading

\`\`\`python
from axonweave.experiment import Agent

restored = Agent.load_checkpoint("runs/exp1/ckpt-0100.awb-ckpt", brain)
\`\`\`

The loader reconstructs the dynamics model and learning rule from the metadata and restores the weight matrix.

## The graph fingerprint concept

Every substrate build computes a SHA-256 fingerprint over the CSR data, indices, indptr and body IDs. Two substrates with different fingerprints are materially different graphs, even if their IDs match. Loading a checkpoint against an incompatible substrate must fail safely — this check is on the roadmap (see [IMPLEMENTATION_GAP](https://github.com/dhakalnirajan/axonweave/blob/main/docs/development/IMPLEMENTATION_GAP.md)).

## Reproducibility metadata

Checkpoints deliberately capture the "what was learned and why" context so experiments can be reported honestly:

- which components came from source data (the substrate)
- which were model assumptions (dynamics, plasticity configuration)
- which were learned (the weight deltas)

## Related

- [Experiments](experiment.md) — the run loop that produces checkpoints.
- [Learning & Plasticity](learning.md) — what the working copy contains.
`,ia=`# Device Support

One-sentence purpose: state factually which devices work and why — AxonWeave delegates execution to the host framework, and accelerator compatibility depends on that framework's sparse-operator support.

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
`,aa=`# FAQ

One-sentence purpose: direct answers to the questions newcomers actually ask, matching the real implementation.

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
`,oa=`# Scientific Limitations

One-sentence purpose: state plainly what AxonWeave and its substrate cannot do, so researchers can judge suitability before investing in an experiment.

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
`,sa=`# Errors & Diagnostics

One-sentence purpose: document every AxonWeave error code, what each message means, how to catch and handle errors programmatically, and how to read Python tracebacks and code-hinting when things go wrong.

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

Some API-misuse paths (wrong dimensions, unknown option names) raise \`ValueError\` with an \`AXW010\`-prefixed message rather than a dedicated class — see the code table below.

## Error code reference

| Code | Exception class | Raised when | Typical fix |
|---|---|---|---|
| \`AXW000\` | \`AxonWeaveError\` | Base class; also generic library misuse | Read the message; match on subclass |
| \`AXW001\` | \`SubstrateNotInstalledError\` | \`load()\` for a substrate not in the local cache | \`axonweave substrate install male-cns:v1.0\` |
| \`AXW002\` | \`DatasetIntegrityError\` | Manifest identity mismatch, checksum failure, or checkpoint fingerprint mismatch | Reinstall the substrate; never load checkpoints against a different graph |
| \`AXW003\` | \`SchemaError\` | A source data file lacks expected columns | Check the file schema; verify you downloaded the right version |
| \`AXW004\` | \`UnsupportedDeviceError\` | The host framework rejected a device request | Verify CUDA/MPS availability in the framework itself; try \`device=None\` (framework default) |
| \`AXW005\` | \`BiologicalAssumptionError\` | A dynamics override for an unannotated neuron type was requested | Register the override, or use the default dynamics |
| \`AXW006\` | \`BackendUnavailableError\` | An optional framework (torch, TF) is not installed | \`pip install "axonweave[torch]"\` |
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
- [API Reference](api-reference.md) — the classes these errors protect.
`,ca=`# Readouts

One-sentence purpose: document the \`axonweave.readout\` package — the task-facing interfaces that map neural activity onto classification, regression, token and action outputs.

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
`,la="# Rust Core\n\nAxonWeave's low-level compute is implemented once in Rust and exposed through a PyO3 extension (`axonweave._native`, built from `rust/`). Python remains the public API; the Rust core is the compute substrate underneath it.\n\n## Purpose and principles\n\nThe Rust core exists to give every computationally meaningful primitive a single, tested implementation with optional accelerator-grade performance — not to become a second runtime, a brain simulation, or a shadow API surface.\n\n- **Scientific honesty.** The connectome plus the Rust core is a compute substrate, never a claim of a complete biophysical brain simulation. Dynamics, signaling, plasticity and receptor models remain explicit, configurable modeling choices.\n- **No silent divergence.** When the compiled extension is present it is used; when it is absent an identical NumPy/SciPy reference runs. Public results are the same either way, and equivalence is proven in CI.\n- **One runtime per layer.** The Rust core owns low-level kernels. NumPy/SciPy owns the pure-Python reference path. Framework adapters own device/tensor semantics. Nothing introduces a second tensor runtime inside AxonWeave.\n\n## System interplay\n\n```text\nuser model\n    ↓\nframework adapter (tensor/device semantics owned by PyTorch/TensorFlow/NumPy)\n    ↓\nnative.py  — single dispatch layer\n    ├── _HAS_NATIVE:  -> axonweave._native (compiled PyO3 extension, rust/)\n    └── !_HAS_NATIVE: -> native._numpy_* (SciPy/NumPy reference)\n    ↓\nsparse substrate cache (CSR graph, body IDs)\n```\n\n`native.py` is the only module that talks to the extension. Public layers never import `_native` directly; they call `native.<fn>`, which selects the compiled kernel or its reference twin. Framework adapters sit above this and never receive framework tensors from `native.py` — they own all conversion to/from their device and tensor types.\n\n## Module map\n\nEach Rust module registers a fixed set of pyfunctions (plus one pyclass in `delays.rs`). Every kernel has a matching `native._numpy_*` reference; the function names below are the registered extension names.\n\n| Rust module | Kernels / classes | numpy reference |\n|---|---|---|\n| `graph.rs` | `sparse_matmul`, `sparse_matmul_transpose`, `csr_matmul_2d`, `csr_matmul_2d_transpose`, `build_csr`, `csr_submatrix`, `csr_fingerprint` | `_numpy_sparse_matmul`, `_numpy_sparse_matmul_transpose`, `_numpy_csr_matmul_2d`, `_numpy_csr_matmul_2d_transpose`, `_numpy_build_csr`, `_numpy_csr_submatrix`, `_numpy_csr_fingerprint` |\n| `dynamics.rs` | `lif_step`, `adaptive_lif_step`, `rate_step` | `_numpy_lif_step`, `_numpy_adaptive_lif_step`, `_numpy_rate_step` |\n| `surrogate.rs` | `surrogate_forward`, `surrogate_backward`, `surrogate_lif_step`, `surrogate_adaptive_lif_step` | `_numpy_surrogate_forward`, `_numpy_surrogate_backward`, `_numpy_surrogate_lif_step`, `_numpy_surrogate_adaptive_lif_step` |\n| `learning.rs` | `stdp_update` | `_numpy_stdp_update` |\n| `signals.rs` | `vesicle_release_step`, `nt_currents` | `_numpy_vesicle_release_step`, `_numpy_nt_currents` |\n| `receptors.rs` | `receptor_step` | `_numpy_receptor_step` |\n| `delays.rs` | `DelayRing` (pyclass), `delay_ticks_from_ms`, `apply_delays` | `NumpyDelayBuffer`, `_numpy_delay_ticks`, `_numpy_apply_delayed_propagation` |\n| `encoders.rs` | `dense_matmul`, `row_absmax_normalize`, `embed_lookup` | `_numpy_dense_matmul`, `_numpy_row_absmax_normalize`, `_numpy_embed_lookup` |\n| `decoders.rs` | `decode_argmax`, `decode_clip` | `_numpy_decode_argmax`, `_numpy_decode_clip` |\n| `readout.rs` | `readout_logits` | `_numpy_readout_logits` |\n| `provisioning.rs` | `sha256_file`, `md5_base64_file` | Python `hashlib` fallbacks in `native.py` |\n\nDependency notes: kernels are individually thread-released (`py.allow_threads`) where the compute is pure. `graph.rs` uses the `sha2` crate directly for `csr_fingerprint`; `provisioning.rs` uses `sha2`, `md-5` and `base64` for chunked (8 MiB) file hashing. Cargo dependencies are `pyo3 0.22`, `numpy 0.22`, `sha2 0.10`, `md-5 0.10` and `base64 0.22` (`rust/Cargo.toml`).\n\n## The dispatch contract\n\n`native.py` is the single dispatch layer. Every public dispatcher:\n\n1. Coerces inputs to canonical dtypes — float32 data (`float32`), int64 indices/indptr and body IDs (`int64`), per-domain dtypes for signals (float64) — and flattens to 1-D where the kernel expects flat arrays.\n2. Calls `_NATIVE.<fn>` when `_HAS_NATIVE` is true, otherwise calls `native._numpy_*`.\n3. Reshapes flat kernel output back to the public shape (e.g. `(batch, n_rows)` for `csr_matmul_2d`) and returns NumPy arrays or scalars. `native.py` never returns framework tensors.\n\nKernel signatures that consume CSR always receive raw `data`/`indices`/`indptr` arrays plus explicit `n_rows`/`n_cols`, never a SciPy matrix object. Public `native` functions take the matrix and decompose it; the reference implementations use it directly.\n\n## Fallback rationale\n\n```python\ntry:\n    from . import _native as _NATIVE\n    _HAS_NATIVE = True\nexcept ImportError:\n    _NATIVE = None\n    _HAS_NATIVE = False\n```\n\nThe extension is built only in CI, so source installs and local checkouts without a Rust toolchain run the pure-Python path. Both paths are first-class:\n\n- The `_numpy_*` functions implement the reference semantics unconditionally and are the single numeric source of truth — they stay in sync with the Rust kernels.\n- Public behavior is identical with or without the extension; `tests/test_native_runtime.py` proves it (skipped when `_HAS_NATIVE` is false, run against the built wheel in CI).\n\n## Surrogate gradient kind codes\n\n`surrogate_backward` (and its siblings) accept `kind` in `0..3`; the argument is `x = v - threshold`.\n\n| kind | name | formula |\n|---|---|---|\n| `0` | sigmoid | `k · σ(xk) · (1 − σ(xk))`, with `σ(·)` the logistic function on `clip(xk, −20, 20)` |\n| `1` | atan | `k / (1 + (π·k·x)²)` |\n| `2` | piecewise | `k` if `|x| ≤ 1/k`, else `0` |\n| `3` | STE | `1` if `|x| ≤ width`, else `0` |\n\n`surrogate_forward` is the hard threshold `v ≥ threshold ? 1 : 0`, shared by all kinds. Unknown kinds return `0` from the Rust kernel and raise `ValueError` from the reference — a known asymmetry, kept because the dispatcher validates kinds before reaching either.\n\n## Receptor kind codes\n\n`receptor_step` accepts `kind` in `0..3`; conductance decays as `g' = g + (pre − g) · (dt / τ)` for all kinds.\n\n| kind | name | driving current |\n|---|---|---|\n| `0` | AMPA | `g · V_rev` |\n| `1` | GABA | `g · V_rev` |\n| `2` | NMDA | `g · (1 / (1 + [Mg²⁺]·exp(−slope·(V − offset)))) · V_rev` — voltage-dependent Mg block |\n| `3` | dopamine | `g · gain · sign` — modulatory, no reversal potential |\n\n## Delay ring semantics\n\n`DelayRing` (Rust pyclass; `NumpyDelayBuffer` in NumPy) is a per-neuron circular buffer. Constructor takes `n_slots` (number of tick rows) and `n_neurons`. Interface:\n\n- `reset()` — zero buffers and write positions.\n- `step(pre, pre_idx, post_idx, delay_ticks, weights)` — write `pre` into the current slot, advance `write_pos`, then read.\n- `read(pre_idx, post_idx, delay_ticks, weights)` — read without writing.\n- `write_pos` getter — per-neuron write counters.\n\nA read looks up each edge's source slot at `write_pos − delay_ticks − 1` (mod `n_slots`), accumulating `pre[slot][pre_idx[k]] · weight[k]` into `post_idx[k]`. `delay_ticks_from_ms` converts milliseconds to integer ticks by rounding and clamping to `[0, n_slots − 1]` where `n_slots = ceil(max_delay_ms/dt) + 1`. `apply_delays` is the stateless single-shot form used by the public propagation path.\n\n## Adding a new primitive\n\n1. Write the Rust kernel in the appropriate `rust/src/*.rs` and register the pyfunction in that module's `register` (listed in `lib.rs`).\n2. Add the `_numpy_*` reference in `native.py` — it stays the single numeric source of truth.\n3. Add the public dispatcher in `native.py` following the dtype/1-D/reshape contract above.\n4. Add an equivalence test in `tests/test_native_runtime.py` calling `_NATIVE.<fn>` directly against `native._numpy_*`.\n5. CI (below) is the only place the compiled kernel and its reference are validated side by side; do not claim local verification of the extension.\n\n## CI verification\n\n`.github/workflows/rust.yml` runs a Rust job (cargo test + maturin build across OSes) and a `native-equivalence` job: it builds the wheel with maturin, installs it, runs `tests/test_native_runtime.py` against the compiled extension, then runs the full suite against the wheel. Locally on this machine there is no Rust toolchain, so the extension is never compiled here — CI is authoritative for the compiled path.\n\n## Limitations\n\n- The extension is optional by design and built only in CI; there is no local Rust toolchain on this machine.\n- Rust kernels return flat arrays/scalars; all shape and dtype correctness responsibility sits in the Python wrappers.\n- The Rust core is a compute substrate. It does not make the connectome a complete biophysical brain simulation; scientific-model claims remain governed by the [Scientific Reference](scientific-reference.md) rules.\n\n## Related\n\n- [Architecture](architecture.md) — system layout and the Rust boundary.\n- [Backends](backends.md) — how `native.py` sits under the NumPy and framework adapters.\n- [Release Engineering](release-engineering.md) — CI wheel building with the extension included.",ua=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),H=o(((e,t)=>{t.exports=ua()}))(),da=[{slug:`index`,label:`Overview`,source:Ei,section:`Overview`},{slug:`installation`,label:`Installation`,source:Xi,section:`Getting Started`},{slug:`getting-started`,label:`Getting Started`,source:Di,section:`Getting Started`},{slug:`distribution`,label:`Substrates`,source:Mi,section:`Getting Started`},{slug:`core-concepts`,label:`Core Concepts`,source:Zi,section:`Concepts`},{slug:`brain`,label:`Biological Brain`,source:Qi,section:`Concepts`},{slug:`connectome`,label:`Connectome`,source:$i,section:`Concepts`},{slug:`dynamics`,label:`Neuron Dynamics`,source:qi,section:`Concepts`},{slug:`signals`,label:`Signals & Receptors`,source:ea,section:`Concepts`},{slug:`encoders`,label:`Encoders & Decoders`,source:Ki,section:`Concepts`},{slug:`readouts`,label:`Readouts`,source:ca,section:`Concepts`},{slug:`tasks`,label:`Tasks`,source:ta,section:`Concepts`},{slug:`training`,label:`Training`,source:na,section:`Guides`},{slug:`learning`,label:`Learning & Plasticity`,source:Ji,section:`Guides`},{slug:`experiment`,label:`Experiments & Agents`,source:Yi,section:`Guides`},{slug:`checkpoints`,label:`Checkpoints`,source:ra,section:`Guides`},{slug:`examples-pytorch-composition`,label:`Custom Layer Composition`,source:Ui,section:`Guides`},{slug:`examples-selection`,label:`Selection & Sub-Networks`,source:Wi,section:`Guides`},{slug:`examples-custom-policy`,label:`Custom Signal Policy`,source:Hi,section:`Guides`},{slug:`framework`,label:`Framework API`,source:Gi,section:`Reference`},{slug:`backends`,label:`Backends`,source:ki,section:`Reference`},{slug:`devices`,label:`Device Support`,source:ia,section:`Reference`},{slug:`configuration`,label:`Configuration`,source:Ii,section:`Reference`},{slug:`api-reference`,label:`API Reference`,source:Pi,section:`Reference`},{slug:`biology`,label:`Biological Model`,source:Ai,section:`Science`},{slug:`scientific-reference`,label:`Scientific Reference`,source:B,section:`Science`},{slug:`limitations`,label:`Scientific Limitations`,source:oa,section:`Science`},{slug:`interoperability`,label:`Interoperability`,source:ji,section:`Science`},{slug:`architecture`,label:`Architecture`,source:Oi,section:`Development`},{slug:`rust-core`,label:`Rust Core`,source:la,section:`Development`},{slug:`release-engineering`,label:`Release Process`,source:V,section:`Development`},{slug:`contributing`,label:`Contributing`,source:Ni,section:`Development`},{slug:`faq`,label:`FAQ`,source:aa,section:`Project`},{slug:`privacy`,label:`Privacy Policy`,source:Li,section:`Project`},{slug:`terms`,label:`Terms & Conditions`,source:Ri,section:`Project`},{slug:`license`,label:`License`,source:zi,section:`Project`},{slug:`code-of-conduct`,label:`Code of Conduct`,source:Bi,section:`Project`},{slug:`security`,label:`Security Policy`,source:Vi,section:`Project`},{slug:`errors`,label:`Errors & Diagnostics`,source:sa,section:`Reference`},{slug:`troubleshooting`,label:`Troubleshooting`,source:Fi,section:`Project`}];L.setOptions({gfm:!0,breaks:!1});var fa=e=>L.parse(e).trim(),pa=e=>e.replace(/^:::DOC-NOTE ?\n?([\s\S]*?)\n:::/gm,(e,t)=>`<div class="callout callout-note"><p class="callout-title">Note</p>\n${fa(t)}\n</div>`).replace(/^:::DOC-WARN ?\n?([\s\S]*?)\n:::/gm,(e,t)=>`<div class="callout callout-warn"><p class="callout-title">Constraint</p>\n${fa(t)}\n</div>`).replace(/^:::DOC-TIP ?\n?([\s\S]*?)\n:::/gm,(e,t)=>`<div class="callout callout-tip"><p class="callout-title">Tip</p>\n${fa(t)}\n</div>`),ma=e=>Jr.sanitize(L.parse(pa(e)),{ADD_ATTR:[`target`,`rel`,`class`]}),ha=e=>e.replace(/href="([A-Za-z0-9_-]+)\.md(#[^"]*)?"/g,(e,t,n)=>`href="${_a}/${t}${n??``}"`),ga=`/axonweave/`,_a=ga.endsWith(`/`)?ga.slice(0,-1):ga,va=e=>`${ga}${e===`index`?``:e}`,ya=()=>location.pathname.replace(_a,``).replace(/^\//,``).replace(/\/$/,``)||`index`,ba=[`stable (0.1.0)`,`nightly`];function xa({slug:e}){return(0,x.useEffect)(()=>{Yr.default.highlightAllUnder(document.querySelector(`article`)??document.body),[...document.querySelectorAll(`pre`)].forEach(e=>{if(e.querySelector(`button`))return;let t=e.querySelector(`code`),n=[...(t?.className||``).match(/language-([\w-]+)/)||[]][1];if(n&&n!==`text`&&n!==`none`){let t=document.createElement(`span`);t.className=`lang-chip`,t.setAttribute(`aria-hidden`,`true`),t.textContent=n,e.appendChild(t)}let r=!1;n===`python`&&t&&(r=(t.textContent||``).replace(/\n$/,``).split(`
`).length>=8);let i=document.createElement(`button`);i.className=`copy-button`,i.setAttribute(`aria-label`,`Copy code`),i.innerHTML=`<span class="copy-label">Copy</span>`,i.onclick=async()=>{await navigator.clipboard.writeText(e.querySelector(`code`)?.textContent||``);let t=i.querySelector(`.copy-label`);i.classList.add(`copied`),t&&(t.textContent=`Copied!`),setTimeout(()=>{i.classList.remove(`copied`),t&&(t.textContent=`Copy`)},1400)},e.appendChild(i);let a=document.createElement(`div`);a.className=`pre-wrap`+(r?` has-gutter`:``),e.replaceWith(a),a.appendChild(e);let o=document.createElement(`span`);if(o.className=`scroll-hint`,o.setAttribute(`aria-hidden`,`true`),o.textContent=`scroll →`,a.appendChild(o),r){let t=document.createElement(`span`);t.className=`ln-rail`,t.setAttribute(`aria-hidden`,`true`),t.textContent=`1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40`,a.appendChild(t);let n=()=>{t.style.height=e.scrollHeight+`px`};n(),typeof ResizeObserver<`u`&&new ResizeObserver(n).observe(e)}let s=()=>o.classList.toggle(`visible`,e.scrollWidth>e.clientWidth+4);s(),e.addEventListener(`scroll`,()=>o.classList.remove(`visible`),{once:!0,passive:!0}),typeof ResizeObserver<`u`&&new ResizeObserver(s).observe(e)});let e=document.querySelector(`article`);if(e&&/\$\$[^$]+\$\$|(?<![\\$\w])\$(?!\s)[^$\n]+?(?<!\\)\$(?![\w$])/.test(e.textContent||``)&&!window.MathJax){let e=document.createElement(`script`);e.src=`https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js`,e.async=!0,window.MathJax={tex:{inlineMath:[[`$`,`$`]],displayMath:[[`$$`,`$$`]]}},document.head.appendChild(e)}},[e]),null}function Sa(){let[e,t]=(0,x.useState)(ya()),[n,r]=(0,x.useState)(localStorage.getItem(`axonweave-theme`)!==`light`),[i,a]=(0,x.useState)(!1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)(()=>parseInt(localStorage.getItem(`axonweave-sidebar`)||`240`,10)),[u,d]=(0,x.useState)(ba[0]),f=(0,x.useRef)(null);(0,x.useEffect)(()=>{let e=()=>t(ya());return addEventListener(`popstate`,e),()=>removeEventListener(`popstate`,e)},[]),(0,x.useEffect)(()=>{document.documentElement.dataset.theme=n?`dark`:`light`,localStorage.setItem(`axonweave-theme`,n?`dark`:`light`)},[n]),(0,x.useEffect)(()=>{let e=e=>{if(!f.current)return;let t=Math.min(420,Math.max(180,f.current.startW+(e.clientX-f.current.startX)));l(t)},t=()=>{f.current&&(f.current=null,document.body.classList.remove(`resizing`))};return addEventListener(`mousemove`,e),addEventListener(`mouseup`,t),()=>{removeEventListener(`mousemove`,e),removeEventListener(`mouseup`,t)}},[]),(0,x.useEffect)(()=>{localStorage.setItem(`axonweave-sidebar`,String(c))},[c]),(0,x.useEffect)(()=>{let e=e=>{e.shiftKey&&e.key===`?`&&(e.preventDefault(),s(!0)),e.key===`Escape`&&s(!1)};return addEventListener(`keydown`,e),()=>removeEventListener(`keydown`,e)},[]);let p=da.find(t=>t.slug===e),m=(0,x.useMemo)(()=>p?ha(ma(p.source)):``,[p]),h=()=>{let e=document.documentElement,t=e.style.scrollBehavior;e.style.scrollBehavior=`auto`,window.scrollTo(0,0),e.style.scrollBehavior=t};(0,x.useEffect)(()=>{document.title=p?`${p.label} · AxonWeave`:`Page not found · AxonWeave`},[p]);let g=[...new Set(da.map(e=>e.section))],_=e=>{history.pushState({},``,va(e)),t(e),a(!1),h()};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(He,{children:[(0,H.jsx)(`meta`,{name:`description`,content:p?`AxonWeave ${p.label} documentation`:`AxonWeave documentation`}),(0,H.jsx)(`meta`,{property:`og:title`,content:p?`${p.label} · AxonWeave`:`AxonWeave Documentation`}),(0,H.jsx)(`meta`,{property:`og:description`,content:p?`AxonWeave ${p.label} documentation`:`AxonWeave documentation`}),(0,H.jsx)(`meta`,{name:`twitter:card`,content:`summary`})]}),(0,H.jsxs)(`div`,{className:`app`,children:[(0,H.jsxs)(`header`,{className:`topbar`,children:[(0,H.jsx)(`button`,{className:`icon-button mobile-menu`,onClick:()=>a(!i),"aria-label":`Open navigation`,children:(0,H.jsx)(pi,{size:20})}),(0,H.jsxs)(`a`,{className:`brand`,href:`/`,onClick:e=>{e.preventDefault(),_(`index`)},children:[(0,H.jsx)(`img`,{src:`${ga}logo.svg`,alt:`AxonWeave`}),(0,H.jsx)(`span`,{children:`AxonWeave`})]}),(0,H.jsxs)(`nav`,{className:`topnav`,children:[(0,H.jsx)(`a`,{href:va(`core-concepts`),onClick:e=>{e.preventDefault(),_(`core-concepts`)},children:`Learn`}),(0,H.jsx)(`a`,{href:va(`api-reference`),onClick:e=>{e.preventDefault(),_(`api-reference`)},children:`API`}),(0,H.jsx)(`a`,{href:va(`tasks`),onClick:e=>{e.preventDefault(),_(`tasks`)},children:`Tutorials`}),(0,H.jsx)(`a`,{href:`https://github.com/dhakalnirajan/axonweave`,target:`_blank`,rel:`noreferrer`,children:`GitHub`})]}),(0,H.jsxs)(`button`,{className:`search-trigger`,onClick:()=>s(!0),"aria-label":`Search documentation (Shift+/)`,children:[(0,H.jsx)(_i,{size:15}),(0,H.jsx)(`span`,{children:`Search documentation...`}),(0,H.jsx)(`kbd`,{children:`Shift+/`})]}),(0,H.jsxs)(`div`,{className:`top-actions`,children:[(0,H.jsxs)(`div`,{className:`learn-menu`,children:[(0,H.jsxs)(`button`,{className:`learn-trigger version-trigger`,children:[u,` `,(0,H.jsx)(`span`,{children:`▾`})]}),(0,H.jsx)(`div`,{className:`learn-dropdown version-dropdown`,children:ba.map(e=>(0,H.jsx)(`button`,{className:e===u?`version-item active`:`version-item`,onClick:()=>d(e),children:e},e))})]}),(0,H.jsx)(`button`,{className:`icon-button`,onClick:()=>r(!n),"aria-label":`Toggle theme`,children:n?(0,H.jsx)(yi,{size:19}):(0,H.jsx)(hi,{size:19})})]})]}),(0,H.jsxs)(`div`,{className:`shell`,style:{"--sidebar-w":`${c}px`},children:[(0,H.jsxs)(`aside`,{className:`sidebar ${i?`open`:``}`,children:[(0,H.jsxs)(`div`,{className:`sidebar-header`,children:[`Documentation `,(0,H.jsx)(`button`,{className:`icon-button close-mobile`,onClick:()=>a(!1),children:(0,H.jsx)(Ti,{size:18})})]}),g.map(t=>(0,H.jsxs)(`div`,{className:`nav-section`,children:[(0,H.jsx)(`div`,{className:`nav-label`,children:t}),da.filter(e=>e.section===t).map(t=>(0,H.jsx)(`a`,{className:e===t.slug?`active`:``,href:va(t.slug),onClick:e=>{e.preventDefault(),_(t.slug)},children:t.label},t.slug))]},t))]}),(0,H.jsx)(`main`,{id:`main`,className:`content`,children:p?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`nav`,{className:`breadcrumbs`,"aria-label":`Breadcrumb`,children:[(0,H.jsx)(`a`,{className:`crumb-link`,href:va(`index`),onClick:e=>{e.preventDefault(),_(`index`)},children:`Docs`}),(0,H.jsx)(`span`,{children:`/`}),(0,H.jsx)(`span`,{className:`crumb-here`,children:p.label})]}),(0,H.jsxs)(`div`,{className:`title-row`,children:[(0,H.jsx)(`h1`,{style:{display:`none`}}),(0,H.jsx)(`div`,{className:`title-row-spacer`}),(0,H.jsx)(Ca,{slug:e})]}),(0,H.jsx)(`article`,{dangerouslySetInnerHTML:{__html:m}}),e===`index`&&(0,H.jsx)(`div`,{className:`hero-cta`,children:(0,H.jsx)(`button`,{className:`primary`,onClick:()=>_(`getting-started`),children:`Install AxonWeave`})}),(0,H.jsx)(xa,{slug:e}),(0,H.jsx)(Ea,{slug:e,navigate:_})]}):(0,H.jsx)(Ta,{navigate:_})}),p&&(0,H.jsxs)(`aside`,{className:`toc`,children:[(0,H.jsx)(`div`,{className:`toc-title`,children:`On this page`}),(0,H.jsx)(wa,{slug:e})]})]}),(0,H.jsx)(`div`,{className:`sidebar-resizer`,onMouseDown:e=>{f.current={startX:e.clientX,startW:c},document.body.classList.add(`resizing`)},role:`separator`,"aria-orientation":`vertical`,"aria-label":`Resize sidebar`,tabIndex:0}),(0,H.jsxs)(`footer`,{children:[(0,H.jsx)(`span`,{children:`AxonWeave · Apache-2.0 software`}),(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`a`,{href:va(`privacy`),onClick:e=>{e.preventDefault(),_(`privacy`)},children:`Privacy`}),` · `,(0,H.jsx)(`a`,{href:va(`terms`),onClick:e=>{e.preventDefault(),_(`terms`)},children:`Terms`})]})]}),(0,H.jsx)(Oa,{}),o&&(0,H.jsx)(Da,{pages:da,onClose:()=>s(!1),onGo:_})]})]})}function Ca({slug:e}){let t=`axonweave-feedback-${e}`,[n,r]=(0,x.useState)(()=>localStorage.getItem(t)),i=e=>{localStorage.setItem(t,e),r(e)};return(0,H.jsx)(`div`,{className:`feedback`,role:`group`,"aria-label":`Page feedback`,children:n?(0,H.jsx)(`span`,{className:`feedback-thanks`,children:`Thanks for your feedback.`}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`span`,{className:`feedback-label`,children:`Was this helpful?`}),(0,H.jsx)(`button`,{className:`feedback-button`,onClick:()=>i(`up`),"aria-label":`Yes, this page was helpful`,children:(0,H.jsx)(Ci,{size:15})}),(0,H.jsx)(`button`,{className:`feedback-button`,onClick:()=>i(`down`),"aria-label":`No, this page was not helpful`,children:(0,H.jsx)(xi,{size:15})})]})})}function wa({slug:e}){let[t,n]=(0,x.useState)([]),[r,i]=(0,x.useState)(``);return(0,x.useEffect)(()=>{i(``);let e=[...document.querySelectorAll(`article h2,article h3`)].map((e,t)=>{let n=`section-${t}-${(e.textContent||``).toLowerCase().replace(/[^a-z0-9]+/g,`-`)}`;return e.id=n,{id:n,text:e.textContent||``,level:e.tagName===`H2`?2:3}});if(n(e),!e.length)return;let t=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top);t[0]&&i(t[0].target.id)},{rootMargin:`-64px 0px -70% 0px`});return e.forEach(e=>{let n=document.getElementById(e.id);n&&t.observe(n)}),()=>t.disconnect()},[e]),(0,H.jsx)(`nav`,{children:t.map(e=>(0,H.jsxs)(`a`,{className:(e.level===3?`sub `:``)+(r===e.id?`active`:``),href:`#${e.id}`,children:[(0,H.jsx)(di,{size:11,className:`toc-caret`}),e.text]},e.id))})}function Ta({navigate:e}){return(0,H.jsxs)(`div`,{className:`not-found`,children:[(0,H.jsx)(`p`,{className:`eyebrow`,children:`404`}),(0,H.jsx)(`h1`,{children:`Page not found`}),(0,H.jsx)(`p`,{children:`The requested documentation page does not exist.`}),(0,H.jsx)(`button`,{className:`primary`,onClick:()=>e(`index`),children:`Return to documentation`})]})}function Ea({slug:e,navigate:t}){let n=da.map(e=>e.slug),r=n.indexOf(e);if(r===-1)return null;let i=r>0?da[r-1]:null,a=r<n.length-1?da[r+1]:null;return(0,H.jsxs)(`div`,{className:`page-nav`,children:[i?(0,H.jsxs)(`button`,{className:`page-nav-cell prev`,onClick:()=>t(i.slug),children:[(0,H.jsx)(`span`,{className:`page-nav-dir`,children:`← Previous`}),(0,H.jsx)(`span`,{className:`page-nav-label`,children:i.label})]}):(0,H.jsx)(`span`,{className:`page-nav-cell`}),a?(0,H.jsxs)(`button`,{className:`page-nav-cell next`,onClick:()=>t(a.slug),children:[(0,H.jsx)(`span`,{className:`page-nav-dir`,children:`Next →`}),(0,H.jsx)(`span`,{className:`page-nav-label`,children:a.label})]}):(0,H.jsx)(`span`,{className:`page-nav-cell`})]})}function Da({pages:e,onClose:t,onGo:n}){let[r,i]=(0,x.useState)(``),a=e.filter(e=>(e.label+` `+e.source).toLowerCase().includes(r.toLowerCase())).slice(0,8);return(0,H.jsx)(`div`,{className:`overlay`,onMouseDown:t,children:(0,H.jsxs)(`div`,{className:`search-dialog`,onMouseDown:e=>e.stopPropagation(),children:[(0,H.jsxs)(`div`,{className:`search-head`,children:[(0,H.jsx)(_i,{size:18}),(0,H.jsx)(`input`,{autoFocus:!0,value:r,onChange:e=>i(e.target.value),placeholder:`Search documentation`}),(0,H.jsx)(`button`,{className:`icon-button`,onClick:t,children:(0,H.jsx)(Ti,{size:18})})]}),a.map(e=>(0,H.jsxs)(`button`,{className:`search-result`,onClick:()=>{n(e.slug),t()},children:[(0,H.jsx)(`strong`,{children:e.label}),(0,H.jsx)(`span`,{children:e.section})]},e.slug))]})})}function Oa(){let[e,t]=(0,x.useState)(localStorage.getItem(`axonweave-cookie`)!==`accepted`);return e?(0,H.jsxs)(`div`,{className:`cookie`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:`Privacy choices`}),(0,H.jsx)(`p`,{children:`This documentation does not require analytics cookies. Optional analytics, if enabled by a deployment, should be disclosed in the Privacy Policy.`})]}),(0,H.jsx)(`button`,{className:`primary`,onClick:()=>{localStorage.setItem(`axonweave-cookie`,`accepted`),t(!1)},children:`Accept`})]}):null}(0,b.createRoot)(document.getElementById(`root`)).render((0,H.jsx)(Oe,{children:(0,H.jsx)(Sa,{})}));
//# sourceMappingURL=index-DzHNbXFn.js.map