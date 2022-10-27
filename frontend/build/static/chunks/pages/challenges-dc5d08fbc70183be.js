(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33],{8482:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/challenges",function(){return r(3855)}])},5119:function(e,t,r){"use strict";var n=r(5893),l=(r(7294),r(3606));function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.Z=function(e){var t=e.pageRefs;return(0,n.jsxs)("div",{ref:function(e){return t.current=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},t.current,{about:e})},className:"px-16 py-32",children:[(0,n.jsx)("a",{className:"uppercase font-bold text-sm text-blue-700 pl-14",children:"About us"}),(0,n.jsx)("p",{className:"text-black text-3xl font-bold pl-14 mt-6",children:"Meet your dream candidates"}),(0,n.jsxs)("div",{className:"flex gap-4 justify-evenly align-center pb-4",children:[(0,n.jsx)("p",{className:"w-96 text-3xl font-extrabold text-blue-700 pt-16 ml-16",children:"Our fast-growing community is full of enthusiastic individuals willing to learn while doing a good deed. Let us help you finding your perfect trainee. All donations will go to Ukraine`s military forces."}),(0,n.jsx)("img",{src:"community-1.jpg",width:"380px",className:"rounded-2xl ml-20"})]}),(0,n.jsx)("div",{className:"mt-6 flex justify-center",children:(0,n.jsx)(l.Z,{title:"Learn more!"})})]})}},3606:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(e){var t=e.title;return(0,n.jsx)("button",{className:"bg-blue-700 px-14 py-2 text-white rounded-full text-lg font-semibold shadow-md hover:shadow-xl active:scale-90 transition duration-150 text-center",children:t})}},7673:function(e,t,r){"use strict";var n=r(5893),l=(r(5675),r(5119),r(3153)),a=(r(7294),r(387));r(1163);t.Z=function(e){var t=e.pageRefs,r=function(e){t.current[e].scrollIntoView({behavior:"smooth"})},s=(0,a.useRouter)();return(0,n.jsxs)("header",{className:"sticky top-0 z-50 grid grid-cols-2 bg-gray-100 py-5 px-5 md:px-10",children:[(0,n.jsx)("div",{className:"relative flex items-center h-10 cursor-pointer my-auto",children:(0,n.jsx)("img",{src:"logo.png",layout:"fill",width:"300px"})}),(0,n.jsxs)("div",{className:"flex justify-end gap-5 space-x-10 py-5 text-blue-700 font-semibold",children:[(0,n.jsx)("a",{className:"p-1 cursor-pointer",onClick:function(){return r("about")},children:"About"}),(0,n.jsx)("a",{className:"p-1 cursor-pointer",onClick:function(){return r("learning")},children:"Learning"}),(0,n.jsx)("a",{className:"p-1 cursor-pointer",onClick:function(){return r("partners")},children:"Partners"}),(0,n.jsx)("button",{className:"text-white font-medium bg-blue-700 px-6 py-1 rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-150 text-center",children:"Sign up"}),(0,n.jsx)("div",{className:"flex items-center space-x-4 justify-end text-blue-700",children:(0,n.jsxs)("div",{className:" flex items-center space-x-2 border-2 border-gray-300 p-1 rounded-full",children:[(0,n.jsx)(l.Oqj,{className:"h-6"}),(0,n.jsx)(l.lMe,{className:"h-6 cursor-pointer",onClick:function(){return s.push("profile")}})]})})]})]})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],s=!0,o=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);s=!0);}catch(i){o=!0,l=i}finally{try{s||null==r.return||r.return()}finally{if(o)throw l}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,s=(a=r(7294))&&a.__esModule?a:{default:a},o=r(6273),i=r(387),c=r(7190);var u={};function d(e,t,r,n){if(e&&o.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var l=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(l?"%"+l:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),a=s.default.useMemo((function(){var t=l(o.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?o.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),f=a.href,p=a.as,x=e.children,h=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof x&&(x=s.default.createElement("a",null,x));var v=(t=s.default.Children.only(x))&&"object"===typeof t&&t.ref,j=l(c.useIntersection({rootMargin:"200px"}),2),g=j[0],w=j[1],N=s.default.useCallback((function(e){g(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,g]);s.default.useEffect((function(){var e=w&&r&&o.isLocalURL(f),t="undefined"!==typeof b?b:n&&n.locale,l=u[f+"%"+p+(t?"%"+t:"")];e&&!l&&d(n,f,p,{locale:t})}),[p,f,w,b,r,n]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,l,a,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[l?"replace":"push"](r,n,{shallow:a,locale:i,scroll:s}))}(e,n,f,p,h,m,y,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),o.isLocalURL(f)&&d(n,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:n&&n.locale,L=n&&n.isLocaleDomain&&o.getDomainLocale(p,E,n&&n.locales,n&&n.domainLocales);k.href=L||o.addBasePath(o.addLocale(p,E,n&&n.defaultLocale))}return s.default.cloneElement(t,k)};t.default=f},3855:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),l=r(7294),a=(r(1664),r(387));r(1163);var s=function(){var e=(0,a.useRouter)();return(0,n.jsxs)("div",{className:"flex justify-around font-semibold py-5 pl-4 border-b-2 last-of-type:border-b-0 hover:bg-gray-100",children:[(0,n.jsx)("a",{className:"pl-4",children:"#1"}),(0,n.jsx)("a",{children:"Matrix Multiplication"}),(0,n.jsx)("a",{className:"text-green-500 pl-14",children:"Easy"}),(0,n.jsx)("a",{className:"pl-4",children:"0.50$"}),(0,n.jsx)("button",{onClick:function(){return e.push("/challenge")},className:"bg-blue-700 w-32 py-1 rounded-2xl font-semibold text-white shadow-md hover:shadow-xl active:scale-90 transition duration-150 text-center",children:"Start!"})]})},o=r(7673),i=r(3153),c=r(9008);var u=function(){var e=(0,l.useRef)({});return(0,a.useRouter)(),(0,n.jsxs)("div",{className:"h-screen",children:[(0,n.jsx)(c.default,{children:(0,n.jsx)("link",{rel:"stylesheet",href:"https://rsms.me/inter/inter.css"})}),(0,n.jsx)(o.Z,{pageRefs:e}),(0,n.jsxs)("div",{className:"border-t-2 border-l-2 border-r-2 border-b-2 rounded-b-2xl rounded-t-2xl mx-16 mt-6",children:[(0,n.jsxs)("div",{className:"flex gap-32 font-semibold py-5 pl-4 border-b-2",children:[(0,n.jsx)("a",{className:"text-blue-700 pl-8 pt-3",children:"Challenges"}),(0,n.jsxs)("div",{className:"flex align-center items-center md:border-2 rounded-full py-1.5 md:shadow-sm",children:[(0,n.jsx)("input",{className:"flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400",type:"text",placeholder:"Start your search"}),(0,n.jsx)(i.W1M,{className:"hidden md:inline-flex h-8 bg-blue-700 text-white rounded-full p-2 cursor-pointer md:mx-2"})]}),(0,n.jsx)("a",{className:"pt-3",children:"Difficulty"}),(0,n.jsx)("a",{className:"pt-3 pl-5",children:"Reward"})]}),(0,n.jsxs)("div",{className:"h-[440px] overflow-scroll scrollbar-hide",children:[(0,n.jsx)(s,{}),(0,n.jsx)(s,{}),(0,n.jsx)(s,{}),(0,n.jsx)(s,{}),(0,n.jsx)(s,{}),(0,n.jsx)(s,{}),(0,n.jsx)(s,{}),(0,n.jsx)(s,{}),(0,n.jsx)(s,{}),(0,n.jsx)(s,{})]})]})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[440,774,888,179],(function(){return t=8482,e(e.s=t);var t}));var t=e.O();_N_E=t}]);