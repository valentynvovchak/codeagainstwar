(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4488)}])},4488:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var o=n(5893),r=(n(906),n(1163));function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=new function(e){this.start=void 0,this.finish=void 0;var t,n,o=Object.assign,r=o({size:2,color:"#29e",className:"bar-of-progress",delay:80},e),i={position:"fixed",top:0,left:0,margin:0,padding:0,border:"none",borderRadius:0,backgroundColor:r.color,zIndex:1e4,height:"number"==typeof r.size?r.size+"px":r.size,color:r.color,opacity:0,width:"0%"},a={opacity:1,width:"99%",transition:"width 10s cubic-bezier(0.1, 0.05, 0, 1)"},s={opacity:0,width:"100%",transition:"width 0.1s ease-out, opacity 0.5s ease 0.2s"},c={opacity:.4,boxShadow:"3px 0 8px",height:"100%"};this.start=function(){n&&n.parentNode&&n.parentNode.removeChild(n),(n=document.body.appendChild(document.createElement("div"))).className=r.className+" stopped",o(n.style,i);var e=n.appendChild(document.createElement("div"));e.className="glow",o(e.style,c),null!=t&&clearTimeout(t),t=setTimeout((function(){t=void 0,n.className=r.className+" started",o(n.style,a)}),r.delay),n.scrollTop=0},this.finish=function(){null!=t&&(clearTimeout(t),t=void 0),n&&(n.className=r.className+" finished",o(n.style,s))}}({size:2,color:"#204ADE",className:"z-50",delay:100});r.default.events.on("routeChangeStart",a.start),r.default.events.on("routeChangeComplete",a.finish),r.default.events.on("routeChangeError",a.finish);var s=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}({},n))}},906:function(){},1163:function(e,t,n){e.exports=n(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);