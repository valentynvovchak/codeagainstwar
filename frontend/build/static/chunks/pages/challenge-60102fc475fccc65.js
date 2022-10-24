(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[963],{194:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/challenge",function(){return r(9123)}])},5119:function(e,t,r){"use strict";var n=r(5893),l=(r(7294),r(3606));function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.Z=function(e){var t=e.pageRefs;return(0,n.jsxs)("div",{ref:function(e){return t.current=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},t.current,{about:e})},className:"px-16 py-32",children:[(0,n.jsx)("a",{className:"uppercase font-bold text-sm text-blue-700 pl-14",children:"About us"}),(0,n.jsx)("p",{className:"text-black text-3xl font-bold pl-14 mt-6",children:"Meet your dream candidates"}),(0,n.jsxs)("div",{className:"flex gap-4 justify-evenly align-center pb-4",children:[(0,n.jsx)("p",{className:"w-96 text-3xl font-extrabold text-blue-700 pt-16 ml-16",children:"Our fast-growing community is full of enthusiastic individuals willing to learn while doing a good deed. Let us help you finding your perfect trainee. All donations will go to Ukraine`s military forces."}),(0,n.jsx)("img",{src:"community-1.jpg",width:"380px",className:"rounded-2xl ml-20"})]}),(0,n.jsx)("div",{className:"mt-6 flex justify-center",children:(0,n.jsx)(l.Z,{title:"Learn more!"})})]})}},3606:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(e){var t=e.title;return(0,n.jsx)("button",{className:"bg-blue-700 px-14 py-2 text-white rounded-full text-lg font-semibold shadow-md hover:shadow-xl active:scale-90 transition duration-150 text-center",children:t})}},7673:function(e,t,r){"use strict";var n=r(5893),l=(r(5675),r(5119),r(3153)),o=(r(7294),r(387));r(1163);t.Z=function(e){var t=e.pageRefs,r=function(e){t.current[e].scrollIntoView({behavior:"smooth"})},a=(0,o.useRouter)();return(0,n.jsxs)("header",{className:"sticky top-0 z-50 grid grid-cols-2 bg-gray-100 py-5 px-5 md:px-10",children:[(0,n.jsx)("div",{className:"relative flex items-center h-10 cursor-pointer my-auto",children:(0,n.jsx)("img",{src:"logo.png",layout:"fill",width:"300px"})}),(0,n.jsxs)("div",{className:"flex justify-end gap-5 space-x-10 py-5 text-blue-700 font-semibold",children:[(0,n.jsx)("a",{className:"p-1 cursor-pointer",onClick:function(){return r("about")},children:"About"}),(0,n.jsx)("a",{className:"p-1 cursor-pointer",onClick:function(){return r("learning")},children:"Learning"}),(0,n.jsx)("a",{className:"p-1 cursor-pointer",onClick:function(){return r("partners")},children:"Partners"}),(0,n.jsx)("button",{className:"text-white font-medium bg-blue-700 px-6 py-1 rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-150 text-center",children:"Sign up"}),(0,n.jsx)("div",{className:"flex items-center space-x-4 justify-end text-blue-700",children:(0,n.jsxs)("div",{className:" flex items-center space-x-2 border-2 border-gray-300 p-1 rounded-full",children:[(0,n.jsx)(l.Oqj,{className:"h-6"}),(0,n.jsx)(l.lMe,{className:"h-6 cursor-pointer",onClick:function(){return a.push("profile")}})]})})]})]})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(i){s=!0,l=i}finally{try{a||null==r.return||r.return()}finally{if(s)throw l}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},s=r(6273),i=r(387),c=r(7190);var u={};function d(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var l=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(l?"%"+l:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),o=a.default.useMemo((function(){var t=l(s.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?s.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),f=o.href,p=o.as,m=e.children,x=e.replace,h=e.shallow,b=e.scroll,y=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var g=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,v=l(c.useIntersection({rootMargin:"200px"}),2),j=v[0],w=v[1],N=a.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);a.default.useEffect((function(){var e=w&&r&&s.isLocalURL(f),t="undefined"!==typeof y?y:n&&n.locale,l=u[f+"%"+p+(t?"%"+t:"")];e&&!l&&d(n,f,p,{locale:t})}),[p,f,w,y,r,n]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,l,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),t[l?"replace":"push"](r,n,{shallow:o,locale:i,scroll:a}))}(e,n,f,p,x,h,b,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(f)&&d(n,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof y?y:n&&n.locale,E=n&&n.isLocaleDomain&&s.getDomainLocale(p,C,n&&n.locales,n&&n.domainLocales);k.href=E||s.addBasePath(s.addLocale(p,C,n&&n.defaultLocale))}return a.default.cloneElement(t,k)};t.default=f},9123:function(e,t,r){"use strict";r.r(t);var n=r(5893),l=(r(7294),r(7673)),o=r(9008),a=(r(1664),r(387)),s=r(3153);t.default=function(){var e=(0,a.useRouter)();return(0,n.jsxs)("div",{children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("link",{rel:"stylesheet",href:"https://rsms.me/inter/inter.css"})}),(0,n.jsx)(l.Z,{}),(0,n.jsxs)("div",{className:"bg-gradient-to-b from-blue-700 to-white relative",children:[(0,n.jsx)(s.qO_,{onClick:function(){return e.push("challenges")},className:"h-10 absolute left-16 top-9 text-white cursor-pointer"}),(0,n.jsxs)("p",{className:"text-white text-2xl font-semibold px-8 pl-32 pt-10",children:["Complete code below to cleate a function ","'slugify'"," to generate unique url for article by it","`","s title"]}),(0,n.jsxs)("div",{className:"bg-white rounded-2xl m-10 mx-12 box-border flex justify-around",children:[(0,n.jsxs)("div",{className:"pt-12 pl-20 mr-24",children:[(0,n.jsx)("p",{className:"font-semibold text-xl border-b-2 border-black inline-block mb-4",children:"Examples"}),(0,n.jsxs)("p",{className:"font-semibold text-xl w-[300px]",children:["How to become a really good programmer ","->","/how-to-become-a-really-good-programmer",(0,n.jsx)("br",{}),"Air alarm: types of signals and their meaning ","->","/air-alarm-types-of-signals-and-their-meaning"]})]}),(0,n.jsx)("div",{className:"w-[770px] mt-6 mr-14",children:(0,n.jsxs)("div",{className:"bg-gray-200 rounded-3xl relative",children:[(0,n.jsxs)("div",{className:"bg-gray-800 w-[770px] h-16 rounded-t-3xl relative",children:[(0,n.jsx)("button",{className:"bg-blue-700 rounded-full text-white px-9 py-1 absolute top-4 right-14 text-base font-medium active:scale-90 transition duration-150 text-center",children:"Check"}),(0,n.jsx)("div",{className:" bg-blue-700 rounded-full h-5 w-5 absolute left-8 top-5"}),(0,n.jsx)("div",{className:"bg-gray-100 rounded-full h-5 w-5 absolute left-16 top-5"})]}),(0,n.jsx)("textarea",{className:"bg-gray-100 w-lg h-72 mx-8 my-4 rounded-b-3xl pl-6 pt-6 outline-none resize-none w-11/12",children:"def slugify(title): # put your code here, good luck :)"}),(0,n.jsx)("textarea",{className:"bg-gray-100 w-lg h-72 mx-8 my-4 rounded-b-3xl pl-6 pt-6 outline-none resize-none w-11/12",children:"Console"})]})})]})]})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[440,774,888,179],(function(){return t=194,e(e.s=t);var t}));var t=e.O();_N_E=t}]);