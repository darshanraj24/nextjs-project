"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news/[category]",{

/***/ "./pages/news/[category].js":
/*!**********************************!*\
  !*** ./pages/news/[category].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ListByCategory(param) {\n    var articles = param.articles, category = param.category;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Showing news for category \",\n                    category\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\news\\\\[category].js\",\n                lineNumber: 4,\n                columnNumber: 9\n            }, this),\n            articles.map(function(article) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                article.id,\n                                \" \",\n                                article.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\news\\\\[category].js\",\n                            lineNumber: 8,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: article.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\news\\\\[category].js\",\n                            lineNumber: 11,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\news\\\\[category].js\",\n                            lineNumber: 12,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, article.id, true, {\n                    fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\news\\\\[category].js\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                }, _this);\n            })\n        ]\n    }, void 0, true);\n}\n_c = ListByCategory;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListByCategory);\nvar _c;\n$RefreshReg$(_c, \"ListByCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzL1tjYXRlZ29yeV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQSxTQUFTQSxjQUFjLENBQUMsS0FBc0IsRUFBRTtRQUF0QkMsUUFBUSxHQUFWLEtBQXNCLENBQXBCQSxRQUFRLEVBQUVDLFFBQVEsR0FBcEIsS0FBc0IsQ0FBVkEsUUFBUTs7SUFDeEMscUJBQ0U7OzBCQUNFLDhEQUFDQyxJQUFFOztvQkFBQyw0QkFBMEI7b0JBQUNELFFBQVE7Ozs7OztvQkFBTTtZQUM1Q0QsUUFBUSxDQUFDRyxHQUFHLENBQUNDLFNBQUFBLE9BQU8sRUFBSTtnQkFDdkIscUJBQ0UsOERBQUNDLEtBQUc7O3NDQUNGLDhEQUFDQyxJQUFFOztnQ0FDQUYsT0FBTyxDQUFDRyxFQUFFO2dDQUFDLEdBQUM7Z0NBQUNILE9BQU8sQ0FBQ0ksS0FBSzs7Ozs7O2lDQUN4QjtzQ0FDTCw4REFBQ0MsR0FBQztzQ0FBRUwsT0FBTyxDQUFDTSxXQUFXOzs7OztpQ0FBSztzQ0FDNUIsOERBQUNDLElBQUU7Ozs7aUNBQUc7O21CQUxFUCxPQUFPLENBQUNHLEVBQUU7Ozs7eUJBTWQsQ0FDUDthQUNGLENBQUM7O29CQUNELENBQ0o7Q0FDRjtBQWpCTVIsS0FBQUEsY0FBYzs7QUFtQnJCLCtEQUFlQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3MvW2NhdGVnb3J5XS5qcz9jNzhjIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIExpc3RCeUNhdGVnb3J5KHsgYXJ0aWNsZXMsIGNhdGVnb3J5IH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGgxPlNob3dpbmcgbmV3cyBmb3IgY2F0ZWdvcnkge2NhdGVnb3J5fTwvaDE+XHJcbiAgICAgICAge2FydGljbGVzLm1hcChhcnRpY2xlID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXthcnRpY2xlLmlkfT5cclxuICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS5pZH0ge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTGlzdEJ5Q2F0ZWdvcnlcclxuICBcclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHsgcGFyYW1zLCByZXEsIHJlcywgcXVlcnkgfSA9IGNvbnRleHRcclxuICAgIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IHBhcmFtc1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL25ld3M/Y2F0ZWdvcnk9JHtjYXRlZ29yeX1gKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIFxyXG4gICAgY29uc29sZS5sb2coYFByZS1yZW5kZXJpbmcgTmV3cyBBcnRpY2xlcyBmb3IgY2F0ZWdvcnkgJHtjYXRlZ29yeX1gKSAvL2J1aWxkXHJcbiAgICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgWyduYW1lPURhcnNoYW4nXSlcclxuICAgIGNvbnNvbGUubG9nKHJlcS5oZWFkZXJzLmNvb2tpZSlcclxuICAgIGNvbnNvbGUubG9nKHF1ZXJ5KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBhcnRpY2xlczogZGF0YSxcclxuICAgICAgICBjYXRlZ29yeVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSJdLCJuYW1lcyI6WyJMaXN0QnlDYXRlZ29yeSIsImFydGljbGVzIiwiY2F0ZWdvcnkiLCJoMSIsIm1hcCIsImFydGljbGUiLCJkaXYiLCJoMiIsImlkIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news/[category].js\n"));

/***/ })

});