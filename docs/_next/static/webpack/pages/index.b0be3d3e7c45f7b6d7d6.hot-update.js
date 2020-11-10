webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ArticleList/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/ArticleList/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ \"./src/components/Icon/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/ArticleList/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/ArticleList/index.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar ArticleList = function ArticleList(_ref) {\n  var content = _ref.content;\n  var articles = content.map(function (_ref2) {\n    var title = _ref2.title,\n        date = _ref2.date,\n        image = _ref2.image,\n        url = _ref2.url;\n    var backgroundImage = image ? \"url(\".concat(image, \")\") : 'url(\"_default-blog001.jpg\")';\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"article\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleLink\"],\n        href: url,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleImage\"],\n          style: {\n            backgroundImage: backgroundImage\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleTitle\"],\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleDate\"],\n          children: date\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)\n    }, \"articles\".concat(date), false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleList\"],\n    children: articles\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ArticleList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleList);\nArticleList.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"ArticleList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QvaW5kZXguanN4PzdiZjQiXSwibmFtZXMiOlsiQXJ0aWNsZUxpc3QiLCJjb250ZW50IiwiYXJ0aWNsZXMiLCJtYXAiLCJ0aXRsZSIsImRhdGUiLCJpbWFnZSIsInVybCIsImJhY2tncm91bmRJbWFnZSIsImFydGljbGUiLCJhcnRpY2xlTGluayIsImFydGljbGVJbWFnZSIsImFydGljbGVUaXRsZSIsImFydGljbGVEYXRlIiwiYXJ0aWNsZUxpc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFTQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNuQyxNQUFNQyxRQUFRLEdBQUdELE9BQU8sQ0FBQ0UsR0FBUixDQUFZLGlCQUt2QjtBQUFBLFFBSkpDLEtBSUksU0FKSkEsS0FJSTtBQUFBLFFBSEpDLElBR0ksU0FISkEsSUFHSTtBQUFBLFFBRkpDLEtBRUksU0FGSkEsS0FFSTtBQUFBLFFBREpDLEdBQ0ksU0FESkEsR0FDSTtBQUNKLFFBQU1DLGVBQWUsR0FBR0YsS0FBSyxpQkFBVUEsS0FBVixTQUFxQiw2QkFBbEQ7QUFFQSx3QkFDRTtBQUFTLGVBQVMsRUFBRUcseURBQXBCO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFFQyw2REFBZDtBQUEyQixZQUFJLEVBQUVILEdBQWpDO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFSSw4REFBaEI7QUFBOEIsZUFBSyxFQUFFO0FBQUVILDJCQUFlLEVBQWZBO0FBQUY7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUksbUJBQVMsRUFBRUksOERBQWY7QUFBQSxvQkFBOEJSO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFHLG1CQUFTLEVBQUVTLDZEQUFkO0FBQUEsb0JBQTRCUjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHlCQUE2Q0EsSUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBU0QsR0FqQmdCLENBQWpCO0FBbUJBLHNCQUNFO0FBQVMsYUFBUyxFQUFFUyw2REFBcEI7QUFBQSxjQUNHWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBekJEOztLQUFNRixXO0FBMkJTQSwwRUFBZjtBQUVBQSxXQUFXLENBQUNlLFNBQVosR0FBd0I7QUFDdEJkLFNBQU8sRUFBRWUsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkM7QUFETCxDQUF4QiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0FydGljbGVMaXN0L2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcblxuaW1wb3J0IHtcbiAgYXJ0aWNsZUxpc3QsXG4gIGFydGljbGUsXG4gIGFydGljbGVUaXRsZSxcbiAgYXJ0aWNsZUxpbmssXG4gIGFydGljbGVJbWFnZSxcbiAgYXJ0aWNsZURhdGUsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEFydGljbGVMaXN0ID0gKHsgY29udGVudCB9KSA9PiB7XG4gIGNvbnN0IGFydGljbGVzID0gY29udGVudC5tYXAoKHtcbiAgICB0aXRsZSxcbiAgICBkYXRlLFxuICAgIGltYWdlLFxuICAgIHVybCxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IGltYWdlID8gYHVybCgke2ltYWdlfSlgIDogJ3VybChcIl9kZWZhdWx0LWJsb2cwMDEuanBnXCIpJztcblxuICAgIHJldHVybiAoXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2FydGljbGV9IGtleT17YGFydGljbGVzJHtkYXRlfWB9PlxuICAgICAgICA8YSBjbGFzc05hbWU9e2FydGljbGVMaW5rfSBocmVmPXt1cmx9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthcnRpY2xlSW1hZ2V9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZSB9fSAvPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2FydGljbGVUaXRsZX0+e3RpdGxlfTwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXthcnRpY2xlRGF0ZX0+e2RhdGV9PC9wPlxuICAgICAgICA8L2E+XG4gICAgICA8L2FydGljbGU+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2FydGljbGVMaXN0fT5cbiAgICAgIHthcnRpY2xlc31cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlTGlzdDtcblxuQXJ0aWNsZUxpc3QucHJvcFR5cGVzID0ge1xuICBjb250ZW50OiBQcm9wVHlwZXMuYXJyYXlPZi5pc1JlcXVpcmVkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ArticleList/index.jsx\n");

/***/ })

})