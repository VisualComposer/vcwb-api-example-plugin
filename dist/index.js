/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var t={488:(t,e)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),d=Symbol.iterator,h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,b={};function m(t,e,n){this.props=t,this.context=e,this.refs=b,this.updater=n||h}function w(){}function g(t,e,n){this.props=t,this.context=e,this.refs=b,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(t,e){if("object"!==n(t)&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},m.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},w.prototype=m.prototype;var _=g.prototype=new w;_.constructor=g,v(_,m.prototype),_.isPureReactComponent=!0;var S=Array.isArray,C=Object.prototype.hasOwnProperty,E={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function R(t,e,n){var o,u={},a=null,i=null;if(null!=e)for(o in void 0!==e.ref&&(i=e.ref),void 0!==e.key&&(a=""+e.key),e)C.call(e,o)&&!L.hasOwnProperty(o)&&(u[o]=e[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];u.children=l}if(t&&t.defaultProps)for(o in c=t.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:r,type:t,key:a,ref:i,props:u,_owner:E.current}}function k(t){return"object"===n(t)&&null!==t&&t.$$typeof===r}var O=/\/+/g;function j(t,e){return"object"===n(t)&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function x(t,e,u,a,i){var c=n(t);"undefined"!==c&&"boolean"!==c||(t=null);var l=!1;if(null===t)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case r:case o:l=!0}}if(l)return i=i(l=t),t=""===a?"."+j(l,0):a,S(i)?(u="",null!=t&&(u=t.replace(O,"$&/")+"/"),x(i,e,u,"",(function(t){return t}))):null!=i&&(k(i)&&(i=function(t,e){return{$$typeof:r,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(i,u+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+t)),e.push(i)),1;if(l=0,a=""===a?".":a+":",S(t))for(var s=0;s<t.length;s++){var f=a+j(c=t[s],s);l+=x(c,e,u,f,i)}else if(f=function(t){return null===t||"object"!==n(t)?null:"function"==typeof(t=d&&t[d]||t["@@iterator"])?t:null}(t),"function"==typeof f)for(t=f.call(t),s=0;!(c=t.next()).done;)l+=x(c=c.value,e,u,f=a+j(c,s++),i);else if("object"===c)throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function P(t,e,n){if(null==t)return t;var r=[],o=0;return x(t,r,"","",(function(t){return e.call(n,t,o++)})),r}function $(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var I={current:null},D={transition:null},A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:D,ReactCurrentOwner:E};e.Children={map:P,forEach:function(t,e,n){P(t,(function(){e.apply(this,arguments)}),n)},count:function(t){var e=0;return P(t,(function(){e++})),e},toArray:function(t){return P(t,(function(t){return t}))||[]},only:function(t){if(!k(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},e.Component=m,e.Fragment=u,e.Profiler=i,e.PureComponent=g,e.StrictMode=a,e.Suspense=f,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,e.cloneElement=function(t,e,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=v({},t.props),u=t.key,a=t.ref,i=t._owner;if(null!=e){if(void 0!==e.ref&&(a=e.ref,i=E.current),void 0!==e.key&&(u=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(l in e)C.call(e,l)&&!L.hasOwnProperty(l)&&(o[l]=void 0===e[l]&&void 0!==c?c[l]:e[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:r,type:t.type,key:u,ref:a,props:o,_owner:i}},e.createContext=function(t){return(t={$$typeof:l,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:t},t.Consumer=t},e.createElement=R,e.createFactory=function(t){var e=R.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:s,render:t}},e.isValidElement=k,e.lazy=function(t){return{$$typeof:y,_payload:{_status:-1,_result:t},_init:$}},e.memo=function(t,e){return{$$typeof:p,type:t,compare:void 0===e?null:e}},e.startTransition=function(t){var e=D.transition;D.transition={};try{t()}finally{D.transition=e}},e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},e.useCallback=function(t,e){return I.current.useCallback(t,e)},e.useContext=function(t){return I.current.useContext(t)},e.useDebugValue=function(){},e.useDeferredValue=function(t){return I.current.useDeferredValue(t)},e.useEffect=function(t,e){return I.current.useEffect(t,e)},e.useId=function(){return I.current.useId()},e.useImperativeHandle=function(t,e,n){return I.current.useImperativeHandle(t,e,n)},e.useInsertionEffect=function(t,e){return I.current.useInsertionEffect(t,e)},e.useLayoutEffect=function(t,e){return I.current.useLayoutEffect(t,e)},e.useMemo=function(t,e){return I.current.useMemo(t,e)},e.useReducer=function(t,e,n){return I.current.useReducer(t,e,n)},e.useRef=function(t){return I.current.useRef(t)},e.useState=function(t){return I.current.useState(t)},e.useSyncExternalStore=function(t,e,n){return I.current.useSyncExternalStore(t,e,n)},e.useTransition=function(){return I.current.useTransition()},e.version="18.2.0"},684:(t,e,n)=>{t.exports=n(488)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return t[r](u,u.exports,n),u.exports}(()=>{var t=n(684);function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function u(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return a(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}var c=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}(p,e);var n,c,l,s,f=(l=p,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=i(l);if(s){var n=i(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function p(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(e=f.call(this,t)).state={contentLength:e.props.getContentLength()},e.handleLayoutChange=e.handleLayoutChange.bind(a(e)),e.setContentLengthState=e.setContentLengthState.bind(a(e)),e}return n=p,(c=[{key:"componentDidMount",value:function(){window.vcwbEditorApi.subscribe("layoutChange",this.handleLayoutChange),window.vcwbEditorApi.subscribe("elementUpdate",this.handleLayoutChange)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.layoutChangeInterval),window.vcwbEditorApi.unsubscribe("layoutChange",this.handleLayoutChange),window.vcwbEditorApi.unsubscribe("elementUpdate",this.handleLayoutChange)}},{key:"handleLayoutChange",value:function(){this.layoutChangeInterval=window.setInterval(this.setContentLengthState,1100)}},{key:"setContentLengthState",value:function(){this.setState({contentLength:this.props.getContentLength()}),window.clearInterval(this.layoutChangeInterval)}},{key:"render",value:function(){return t.createElement("div",{className:"vcv-ui-tree-content-section-inner"},"Custom Insights panel",t.createElement("p",null,"Layout has ",this.state.contentLength," words!"))}}])&&r(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),p}(t.Component),l={savedData:{},saveRequestData:function(t){return t.exampleInsights=l.savedData,t},updateData:function(t){l.savedData={contentLength:t}},getContentLength:function(){return l.savedData.contentLength}};const s=l;window.addEventListener("load",(function(){var e=function(){return function(t){t=t.replace(/\s*\bdata-vcv-[^"<>]+"[^"<>]+"+/g,"").replace(/<!--\[vcvSourceHtml]/g,"").replace(/\[\/vcvSourceHtml]-->/g,"").replace(/<\//g," </");for(var e=document.createRange().createContextualFragment(t),n=e.querySelector("style, script, noscript, meta, title, .vcv-ui-blank-row-container, .vcv-row-control-container");n;)n.parentNode.removeChild(n),n=e.querySelector("style, script, noscript, meta, title, .vcv-ui-blank-row-container, .vcv-row-control-container");return e.textContent.trim()}(document.getElementById("vcv-editor-iframe").contentWindow.document.querySelector(".vcv-layouts-html").innerHTML).split(/\s+/).length};window.vcwbEditorApi.subscribe("savedDataLoad",(function(t){t.exampleInsights&&t.exampleInsights.contentLength&&s.updateData(t.exampleInsights.contentLength)})),window.vcwbEditorApi.subscribe("layoutChange",(function(t){window.setTimeout((function(){var t=e();s.updateData(t)}),1e3)})),window.vcwbEditorApi.subscribe("elementUpdate",(function(t,n){window.setTimeout((function(){var t=e();s.updateData(t)}),1e3)})),window.vcwbEditorApi.addFilter("saveRequestData",s.saveRequestData),window.vcwbEditorApi.mount("panelMessages:third-party",(function(){return t.createElement(c,{key:"panel-messages-example",getContentLength:s.getContentLength})})),window.vcwbEditorApi.addFilter("insightPanelsData",(function(t){return t["third-party"]={index:1,type:"third-party",title:"Example Panel",icon:"yoast-small"},t}))}))})()})();