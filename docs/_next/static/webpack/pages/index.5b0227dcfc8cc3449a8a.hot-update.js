webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ArticleList/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/ArticleList/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ \"./src/components/Icon/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/ArticleList/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/ArticleList/index.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar ArticleList = function ArticleList(_ref) {\n  var content = _ref.content;\n  var articles = content.map(function (_ref2) {\n    var title = _ref2.title,\n        date = _ref2.date,\n        image = _ref2.image,\n        url = _ref2.url;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"article\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleLink\"],\n        href: url,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleImage\"],\n          children: image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: image,\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 48\n          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            type: \"messages\",\n            color: \"blue\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 77\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleTitle\"],\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleDate\"],\n          children: date\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }, _this)\n    }, \"articles\".concat(date), false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleList\"],\n    children: articles\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ArticleList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleList);\nArticleList.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"ArticleList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QvaW5kZXguanN4PzdiZjQiXSwibmFtZXMiOlsiQXJ0aWNsZUxpc3QiLCJjb250ZW50IiwiYXJ0aWNsZXMiLCJtYXAiLCJ0aXRsZSIsImRhdGUiLCJpbWFnZSIsInVybCIsImFydGljbGUiLCJhcnRpY2xlTGluayIsImFydGljbGVJbWFnZSIsImFydGljbGVUaXRsZSIsImFydGljbGVEYXRlIiwiYXJ0aWNsZUxpc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFTQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNuQyxNQUFNQyxRQUFRLEdBQUdELE9BQU8sQ0FBQ0UsR0FBUixDQUFZO0FBQUEsUUFDM0JDLEtBRDJCLFNBQzNCQSxLQUQyQjtBQUFBLFFBRTNCQyxJQUYyQixTQUUzQkEsSUFGMkI7QUFBQSxRQUczQkMsS0FIMkIsU0FHM0JBLEtBSDJCO0FBQUEsUUFJM0JDLEdBSjJCLFNBSTNCQSxHQUoyQjtBQUFBLHdCQU0zQjtBQUFTLGVBQVMsRUFBRUMseURBQXBCO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFFQyw2REFBZDtBQUEyQixZQUFJLEVBQUVGLEdBQWpDO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFRyw4REFBaEI7QUFBQSxvQkFBK0JKLEtBQUssZ0JBQUc7QUFBSyxlQUFHLEVBQUVBLEtBQVY7QUFBaUIsZUFBRyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUgsZ0JBQWdDLHFFQUFDLDZDQUFEO0FBQU0sZ0JBQUksRUFBQyxVQUFYO0FBQXNCLGlCQUFLLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSSxtQkFBUyxFQUFFSyw4REFBZjtBQUFBLG9CQUE4QlA7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUcsbUJBQVMsRUFBRVEsNkRBQWQ7QUFBQSxvQkFBNEJQO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYseUJBQTZDQSxJQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTjJCO0FBQUEsR0FBWixDQUFqQjtBQWVBLHNCQUNFO0FBQVMsYUFBUyxFQUFFUSw2REFBcEI7QUFBQSxjQUNHWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBckJEOztLQUFNRixXO0FBdUJTQSwwRUFBZjtBQUVBQSxXQUFXLENBQUNjLFNBQVosR0FBd0I7QUFDdEJiLFNBQU8sRUFBRWMsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkM7QUFETCxDQUF4QiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0FydGljbGVMaXN0L2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcblxuaW1wb3J0IHtcbiAgYXJ0aWNsZUxpc3QsXG4gIGFydGljbGUsXG4gIGFydGljbGVUaXRsZSxcbiAgYXJ0aWNsZUxpbmssXG4gIGFydGljbGVJbWFnZSxcbiAgYXJ0aWNsZURhdGUsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEFydGljbGVMaXN0ID0gKHsgY29udGVudCB9KSA9PiB7XG4gIGNvbnN0IGFydGljbGVzID0gY29udGVudC5tYXAoKHtcbiAgICB0aXRsZSxcbiAgICBkYXRlLFxuICAgIGltYWdlLFxuICAgIHVybCxcbiAgfSkgPT4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17YXJ0aWNsZX0ga2V5PXtgYXJ0aWNsZXMke2RhdGV9YH0+XG4gICAgICA8YSBjbGFzc05hbWU9e2FydGljbGVMaW5rfSBocmVmPXt1cmx9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YXJ0aWNsZUltYWdlfT57aW1hZ2UgPyA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cIlwiIC8+IDogPEljb24gdHlwZT1cIm1lc3NhZ2VzXCIgY29sb3I9XCJibHVlXCIgLz59PC9kaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e2FydGljbGVUaXRsZX0+e3RpdGxlfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17YXJ0aWNsZURhdGV9PntkYXRlfTwvcD5cbiAgICAgIDwvYT5cbiAgICA8L2FydGljbGU+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXthcnRpY2xlTGlzdH0+XG4gICAgICB7YXJ0aWNsZXN9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUxpc3Q7XG5cbkFydGljbGVMaXN0LnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLmFycmF5T2YuaXNSZXF1aXJlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ArticleList/index.jsx\n");

/***/ })

})