"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/main/HomeDiv.js":
/*!************************************!*\
  !*** ./components/main/HomeDiv.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HomeDiv_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomeDiv.module.scss */ \"./components/main/HomeDiv.module.scss\");\n/* harmony import */ var _HomeDiv_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_HomeDiv_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction HomeDiv(param) {\n    var imageBanner = param.imageBanner, title = param.title, two_row = param.two_row;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: two_row ? (_HomeDiv_module_scss__WEBPACK_IMPORTED_MODULE_3___default().two_row) : \"\",\n        id: (_HomeDiv_module_scss__WEBPACK_IMPORTED_MODULE_3___default().banner_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: imageBanner,\n                alt: title + \"banner\",\n                objectFit: \"cover\",\n                layout: \"fill\",\n                className: (_HomeDiv_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image)\n            }, void 0, false, {\n                fileName: \"E:\\\\APRENDIZAJE\\\\PROYECTOS\\\\eCommerce NextJS\\\\components\\\\main\\\\HomeDiv.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"E:\\\\APRENDIZAJE\\\\PROYECTOS\\\\eCommerce NextJS\\\\components\\\\main\\\\HomeDiv.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\APRENDIZAJE\\\\PROYECTOS\\\\eCommerce NextJS\\\\components\\\\main\\\\HomeDiv.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = HomeDiv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeDiv);\nvar _c;\n$RefreshReg$(_c, \"HomeDiv\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4vSG9tZURpdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNZO0FBQ2Q7QUFFN0IsU0FBU0csT0FBTyxDQUFDLEtBQTZCLEVBQUU7UUFBOUJDLFdBQVcsR0FBWixLQUE2QixDQUE1QkEsV0FBVyxFQUFFQyxLQUFLLEdBQW5CLEtBQTZCLENBQWZBLEtBQUssRUFBRUMsT0FBTyxHQUE1QixLQUE2QixDQUFSQSxPQUFPO0lBQ3pDLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRUYsT0FBTyxHQUFHTCxxRUFBYyxHQUFHLEVBQUU7UUFBRVEsRUFBRSxFQUFFUiw4RUFBdUI7OzBCQUV0RSw4REFBQ0QsbURBQUs7Z0JBQ0ZXLEdBQUcsRUFBRVAsV0FBVztnQkFDaEJRLEdBQUcsRUFBRVAsS0FBSyxHQUFHLFFBQVE7Z0JBQ3JCUSxTQUFTLEVBQUUsT0FBTztnQkFDbEJDLE1BQU0sRUFBRSxNQUFNO2dCQUNkTixTQUFTLEVBQUVQLG1FQUFZOzs7OztvQkFDekI7MEJBRUYsOERBQUNlLElBQUU7MEJBQUVYLEtBQUs7Ozs7O29CQUFNOzs7Ozs7WUFFZCxDQUNQO0NBQ047QUFoQlFGLEtBQUFBLE9BQU87QUFrQmhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL0hvbWVEaXYuanM/OTk0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ib21lRGl2Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmZ1bmN0aW9uIEhvbWVEaXYoe2ltYWdlQmFubmVyLCB0aXRsZSwgdHdvX3Jvd30pIHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0d29fcm93ID8gc3R5bGVzLnR3b19yb3cgOiAnJ30gaWQ9e3N0eWxlcy5iYW5uZXJfY29udGFpbmVyfT5cclxuXHJcbiAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VCYW5uZXJ9ICBcclxuICAgICAgICAgICAgICAgIGFsdD17dGl0bGUgKyAnYmFubmVyJ31cclxuICAgICAgICAgICAgICAgIG9iamVjdEZpdD17J2NvdmVyJ30gXHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ9eydmaWxsJ30gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVEaXY7Il0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwiTGluayIsIkhvbWVEaXYiLCJpbWFnZUJhbm5lciIsInRpdGxlIiwidHdvX3JvdyIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiYmFubmVyX2NvbnRhaW5lciIsInNyYyIsImFsdCIsIm9iamVjdEZpdCIsImxheW91dCIsImltYWdlIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/main/HomeDiv.js\n");

/***/ })

});