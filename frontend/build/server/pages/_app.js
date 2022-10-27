"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@badrap/bar-of-progress"
const bar_of_progress_namespaceObject = require("@badrap/bar-of-progress");
var bar_of_progress_default = /*#__PURE__*/__webpack_require__.n(bar_of_progress_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./pages/_app.js




const progress = new (bar_of_progress_default())({
    size: 2,
    color: "#204ADE",
    className: "z-50",
    delay: 100
});
router_default().events.on("routeChangeStart", progress.start);
router_default().events.on("routeChangeComplete", progress.finish);
router_default().events.on("routeChangeError", progress.finish);
// progress.start();
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9677));
module.exports = __webpack_exports__;

})();