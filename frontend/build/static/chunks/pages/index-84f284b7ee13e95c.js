(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5609)}])},5119:function(e,t,r){"use strict";var n=r(5893),l=(r(7294),r(3606));function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.Z=function(e){var t=e.pageRefs;return(0,n.jsxs)("div",{ref:function(e){return t.current=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},t.current,{about:e})},className:"px-16 py-32",children:[(0,n.jsx)("a",{className:"uppercase font-bold text-sm text-blue-700 pl-14",children:"About us"}),(0,n.jsx)("p",{className:"text-black text-3xl font-bold pl-14 mt-6",children:"Meet your dream candidates"}),(0,n.jsxs)("div",{className:"flex gap-4 justify-evenly align-center pb-4",children:[(0,n.jsx)("p",{className:"w-96 text-3xl font-extrabold text-blue-700 pt-16 ml-16",children:"Our fast-growing community is full of enthusiastic individuals willing to learn while doing a good deed. Let us help you finding your perfect trainee. All donations will go to Ukraine`s military forces."}),(0,n.jsx)("img",{src:"community-1.jpg",width:"380px",className:"rounded-2xl ml-20"})]}),(0,n.jsx)("div",{className:"mt-6 flex justify-center",children:(0,n.jsx)(l.Z,{title:"Learn more!"})})]})}},3606:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(e){var t=e.title;return(0,n.jsx)("button",{className:"bg-blue-700 px-14 py-2 text-white rounded-full text-lg font-semibold shadow-md hover:shadow-xl active:scale-90 transition duration-150 text-center",children:t})}},7673:function(e,t,r){"use strict";var n=r(5893),l=(r(5675),r(5119),r(3153)),s=(r(7294),r(387));r(1163);t.Z=function(e){var t=e.pageRefs,r=function(e){t.current[e].scrollIntoView({behavior:"smooth"})},a=(0,s.useRouter)();return(0,n.jsxs)("header",{className:"sticky top-0 z-50 grid grid-cols-2 bg-gray-100 py-5 px-5 md:px-10",children:[(0,n.jsx)("div",{className:"relative flex items-center h-10 cursor-pointer my-auto",children:(0,n.jsx)("img",{src:"logo.png",layout:"fill",width:"300px"})}),(0,n.jsxs)("div",{className:"flex justify-end gap-5 space-x-10 py-5 text-blue-700 font-semibold",children:[(0,n.jsx)("a",{className:"p-1 cursor-pointer",onClick:function(){return r("about")},children:"About"}),(0,n.jsx)("a",{className:"p-1 cursor-pointer",onClick:function(){return r("learning")},children:"Learning"}),(0,n.jsx)("a",{className:"p-1 cursor-pointer",onClick:function(){return r("partners")},children:"Partners"}),(0,n.jsx)("button",{className:"text-white font-medium bg-blue-700 px-6 py-1 rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-150 text-center",children:"Sign up"}),(0,n.jsx)("div",{className:"flex items-center space-x-4 justify-end text-blue-700",children:(0,n.jsxs)("div",{className:" flex items-center space-x-2 border-2 border-gray-300 p-1 rounded-full",children:[(0,n.jsx)(l.Oqj,{className:"h-6"}),(0,n.jsx)(l.lMe,{className:"h-6 cursor-pointer",onClick:function(){return a.push("profile")}})]})})]})]})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,s=[],a=!0,o=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);a=!0);}catch(i){o=!0,l=i}finally{try{a||null==r.return||r.return()}finally{if(o)throw l}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var s,a=(s=r(7294))&&s.__esModule?s:{default:s},o=r(6273),i=r(387),c=r(7190);var u={};function f(e,t,r,n){if(e&&o.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var l=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(l?"%"+l:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),s=a.default.useMemo((function(){var t=l(o.resolveHref(n,e.href,!0),2),r=t[0],s=t[1];return{href:r,as:e.as?o.resolveHref(n,e.as):s||r}}),[n,e.href,e.as]),d=s.href,p=s.as,x=e.children,m=e.replace,h=e.shallow,b=e.scroll,j=e.locale;"string"===typeof x&&(x=a.default.createElement("a",null,x));var v=(t=a.default.Children.only(x))&&"object"===typeof t&&t.ref,g=l(c.useIntersection({rootMargin:"200px"}),2),y=g[0],w=g[1],N=a.default.useCallback((function(e){y(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,y]);a.default.useEffect((function(){var e=w&&r&&o.isLocalURL(d),t="undefined"!==typeof j?j:n&&n.locale,l=u[d+"%"+p+(t?"%"+t:"")];e&&!l&&f(n,d,p,{locale:t})}),[p,d,w,j,r,n]);var O={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,l,s,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),t[l?"replace":"push"](r,n,{shallow:s,locale:i,scroll:a}))}(e,n,d,p,m,h,b,j)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),o.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof j?j:n&&n.locale,L=n&&n.isLocaleDomain&&o.getDomainLocale(p,k,n&&n.locales,n&&n.domainLocales);O.href=L||o.addBasePath(o.addLocale(p,k,n&&n.defaultLocale))}return a.default.cloneElement(t,O)};t.default=d},5609:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),l=r(9008);r(5675);var s=r(7673),a=r(7294),o=r(387),i=(r(1163),r(1664));var c=function(e){var t=e.img,r=e.title;return e.description,e.buttonText,(0,n.jsxs)("section",{className:"relative p-16 cursor-pointer",children:[(0,n.jsx)("div",{className:"relative cursor-pointer hover:scale-105 transform transition duration-300 ease-out hover:shadow-m",children:(0,n.jsx)("img",{src:t,width:"330px",className:"rounded-3xl"})}),(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)("h3",{className:"text-xl w-64 mt-4 font-bold px-3",children:r})})]})},u=r(3606);var f=function(e){var t=e.img;return(0,n.jsx)("section",{className:"relative pt-16 pb-4 cursor-pointer",children:(0,n.jsx)("div",{className:"relative h-96 min-w-[300px]",children:(0,n.jsx)("img",{src:t,layout:"fill",className:"rounded-2xl"})})})};var d=function(){return(0,n.jsx)("section",{children:(0,n.jsxs)("div",{className:"bg-gray-200 max-w-xl h-96 rounded-3xl relative",children:[(0,n.jsxs)("div",{className:"bg-gray-800 max-w-xl h-16 rounded-t-3xl relative",children:[(0,n.jsx)("div",{className:" bg-blue-700 rounded-full h-5 w-5 absolute left-8 top-5"}),(0,n.jsx)("div",{className:"bg-gray-100 rounded-full h-5 w-5 absolute left-16 top-5"})]}),(0,n.jsx)("textarea",{className:"bg-gray-100 w-lg h-72 mx-6 my-4 rounded-b-3xl pl-6 pt-6 outline-none resize-none w-11/12",children:"for number in range (1, 10): if (): print (number)"}),(0,n.jsx)("button",{className:"bg-blue-700 rounded-full text-white px-7 py-1 absolute bottom-8 right-12 text-xs font-medium active:scale-90 transition duration-150 text-center",children:"Check"})]})})},p=r(5119);function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){var t=e.pageRefs;return(0,n.jsxs)("div",{ref:function(e){return t.current=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){x(e,t,r[t])}))}return e}({},t.current,{learning:e})},className:"px-16 py-32",children:[(0,n.jsx)("a",{className:"uppercase font-bold text-sm text-blue-700 pl-14",children:"Learning"}),(0,n.jsx)("p",{className:"text-black text-3xl font-bold pl-14 mt-6 mb-6",children:"Improve your development skills by taking on challenges from real companies"}),(0,n.jsx)("a",{className:"font-bold text-md text-blue-700 pl-14",children:"Complete code below to print only even numbers in range from 1 to 10"}),(0,n.jsxs)("div",{className:"mt-6 flex justify-between",children:[(0,n.jsx)("div",{className:"w-full ml-14",children:(0,n.jsx)(d,{})}),(0,n.jsxs)("div",{className:"max-w-2xl pr-40",children:[(0,n.jsxs)("div",{className:"flex justify-center pr-8",children:[(0,n.jsx)("img",{src:"ukr-nobg.png",className:"w-20"}),(0,n.jsx)("p1",{className:"uppercase text-blue-700 font-bold mt-5 text-xl",children:"Study & Help"})]}),(0,n.jsx)("p",{className:"text-2xl w-64 font-semibold pb-8",children:"Succesfull completion of this simple task will be monetized as 0.50$ DONATION to Ukrainian Military Forces from our sponsors"}),(0,n.jsx)(u.Z,{title:"Learn more!"})]})]})]})};function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){var t=e.pageRefs;return(0,n.jsxs)("div",{ref:function(e){return t.current=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}({},t.current,{partners:e})},className:"px-16 pt-32 pb-16",children:[(0,n.jsx)("a",{className:"uppercase font-bold text-sm text-blue-700 pl-14",children:"Partners"}),(0,n.jsx)("p",{className:"text-black text-3xl font-bold pl-14 mt-6",children:"Qualified partners with the world`s leading thechnology and insitutes to evaluate, educate, and certify software engineers at scale"}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(f,{img:"partners-1.png"})}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(u.Z,{title:"Become a sponsor!"})})]})};function j(){var e=(0,a.useRef)({});(0,o.useRouter)();return(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)(l.default,{children:[(0,n.jsx)("title",{children:"CodeAgainstWar"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://rsms.me/inter/inter.css"})]}),(0,n.jsx)(s.Z,{pageRefs:e}),(0,n.jsxs)("main",{className:"flex px-6",children:[(0,n.jsx)(c,{img:"solider-1.webp",title:"Help Ukraine"}),(0,n.jsx)(i.default,{href:"/challenges",children:(0,n.jsx)(c,{img:"solider-1.webp",title:"Take Challenges"})}),(0,n.jsx)(c,{img:"solider-1.webp",title:"Get Job Offers"})]}),(0,n.jsx)(p.Z,{pageRefs:e}),(0,n.jsx)(m,{pageRefs:e}),(0,n.jsx)(b,{pageRefs:e}),(0,n.jsx)("img",{src:"sponsors-1.png"})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[440,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);