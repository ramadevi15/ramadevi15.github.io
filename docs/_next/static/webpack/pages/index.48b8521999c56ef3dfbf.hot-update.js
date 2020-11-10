webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ArticleList/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/ArticleList/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/ArticleList/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/ArticleList/index.jsx\",\n    _this = undefined;\n\n/* eslint-disable no-bitwise */\n\n\n\nvar ArticleList = function ArticleList(_ref) {\n  var content = _ref.content;\n  var articles = content.map(function (_ref2) {\n    var title = _ref2.title,\n        date = _ref2.date,\n        image = _ref2.image,\n        url = _ref2.url;\n\n    var hashCode = function hashCode(s) {\n      return s.split('').reduce(function (a, b) {\n        var newA = (a << 5) - a + b.charCodeAt(0);\n        return newA & newA;\n      }, 0);\n    };\n\n    function intToRGB(i) {\n      var c = (i & 0x00FFFFFF).toString(16);\n      return c;\n    }\n\n    console.log(intToRGB(hashCode('Googles')));\n    console.log(intToRGB(hashCode('Googles Kelsey Hightower offers tips on how to centralize and evolve IT practices by Matt Asay')));\n    console.log(intToRGB(hashCode('Podcast: The Business of Cloud Native with Emily Omier and Nithya Ruff')));\n    console.log(intToRGB(hashCode('GPL Initiative Grows Over 40%; More Than 60 Companies Have Joined the Campaign for Greater Predictability in Open Source Licensing')));\n    var backgroundImage = image ? \"url(\".concat(image, \")\") : \"linear-gradient(90deg, #\".concat(intToRGB(hashCode(title)), \"cc 0%, #\").concat(intToRGB(hashCode(title)), \"99 100%), url(\\\"/images/blog/_default-blog001.jpg\\\")\");\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"article\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleLink\"],\n        href: url,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleImage\"],\n          style: {\n            backgroundImage: backgroundImage\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleTitle\"],\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleDate\"],\n          children: date\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this)\n    }, \"articles\".concat(date), false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleList\"],\n    children: articles\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ArticleList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleList);\nArticleList.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"ArticleList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QvaW5kZXguanN4PzdiZjQiXSwibmFtZXMiOlsiQXJ0aWNsZUxpc3QiLCJjb250ZW50IiwiYXJ0aWNsZXMiLCJtYXAiLCJ0aXRsZSIsImRhdGUiLCJpbWFnZSIsInVybCIsImhhc2hDb2RlIiwicyIsInNwbGl0IiwicmVkdWNlIiwiYSIsImIiLCJuZXdBIiwiY2hhckNvZGVBdCIsImludFRvUkdCIiwiaSIsImMiLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhcnRpY2xlIiwiYXJ0aWNsZUxpbmsiLCJhcnRpY2xlSW1hZ2UiLCJhcnRpY2xlVGl0bGUiLCJhcnRpY2xlRGF0ZSIsImFydGljbGVMaXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFTQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNuQyxNQUFNQyxRQUFRLEdBQUdELE9BQU8sQ0FBQ0UsR0FBUixDQUFZLGlCQUt2QjtBQUFBLFFBSkpDLEtBSUksU0FKSkEsS0FJSTtBQUFBLFFBSEpDLElBR0ksU0FISkEsSUFHSTtBQUFBLFFBRkpDLEtBRUksU0FGSkEsS0FFSTtBQUFBLFFBREpDLEdBQ0ksU0FESkEsR0FDSTs7QUFDSixRQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVEsRUFBUixFQUFZQyxNQUFaLENBQW1CLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQUUsWUFBTUMsSUFBSSxHQUFJLENBQUNGLENBQUMsSUFBSSxDQUFOLElBQVdBLENBQVosR0FBaUJDLENBQUMsQ0FBQ0UsVUFBRixDQUFhLENBQWIsQ0FBOUI7QUFBK0MsZUFBT0QsSUFBSSxHQUFHQSxJQUFkO0FBQXFCLE9BQW5HLEVBQXFHLENBQXJHLENBQVA7QUFBQSxLQUFqQjs7QUFFQSxhQUFTRSxRQUFULENBQWtCQyxDQUFsQixFQUFxQjtBQUNuQixVQUFNQyxDQUFDLEdBQUcsQ0FBQ0QsQ0FBQyxHQUFHLFVBQUwsRUFDUEUsUUFETyxDQUNFLEVBREYsQ0FBVjtBQUVBLGFBQU9ELENBQVA7QUFDRDs7QUFFREUsV0FBTyxDQUFDQyxHQUFSLENBQVlMLFFBQVEsQ0FBQ1IsUUFBUSxDQUFDLFNBQUQsQ0FBVCxDQUFwQjtBQUNBWSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBUSxDQUFDUixRQUFRLENBQUMsZ0dBQUQsQ0FBVCxDQUFwQjtBQUNBWSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBUSxDQUFDUixRQUFRLENBQUMsd0VBQUQsQ0FBVCxDQUFwQjtBQUNBWSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBUSxDQUFDUixRQUFRLENBQUMsb0lBQUQsQ0FBVCxDQUFwQjtBQUVBLFFBQU1jLGVBQWUsR0FBR2hCLEtBQUssaUJBQVVBLEtBQVYsMkNBQWdEVSxRQUFRLENBQUNSLFFBQVEsQ0FBQ0osS0FBRCxDQUFULENBQXhELHFCQUFvRlksUUFBUSxDQUFDUixRQUFRLENBQUNKLEtBQUQsQ0FBVCxDQUE1Rix5REFBN0I7QUFFQSx3QkFDRTtBQUFTLGVBQVMsRUFBRW1CLHlEQUFwQjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBRUMsNkRBQWQ7QUFBMkIsWUFBSSxFQUFFakIsR0FBakM7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVrQiw4REFBaEI7QUFBOEIsZUFBSyxFQUFFO0FBQUVILDJCQUFlLEVBQWZBO0FBQUY7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUksbUJBQVMsRUFBRUksOERBQWY7QUFBQSxvQkFBOEJ0QjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBRyxtQkFBUyxFQUFFdUIsNkRBQWQ7QUFBQSxvQkFBNEJ0QjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHlCQUE2Q0EsSUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBU0QsR0E5QmdCLENBQWpCO0FBZ0NBLHNCQUNFO0FBQVMsYUFBUyxFQUFFdUIsNkRBQXBCO0FBQUEsY0FDRzFCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0F0Q0Q7O0tBQU1GLFc7QUF3Q1NBLDBFQUFmO0FBRUFBLFdBQVcsQ0FBQzZCLFNBQVosR0FBd0I7QUFDdEI1QixTQUFPLEVBQUU2QixpREFBUyxDQUFDQyxPQUFWLENBQWtCQztBQURMLENBQXhCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtcbiAgYXJ0aWNsZUxpc3QsXG4gIGFydGljbGUsXG4gIGFydGljbGVUaXRsZSxcbiAgYXJ0aWNsZUxpbmssXG4gIGFydGljbGVJbWFnZSxcbiAgYXJ0aWNsZURhdGUsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEFydGljbGVMaXN0ID0gKHsgY29udGVudCB9KSA9PiB7XG4gIGNvbnN0IGFydGljbGVzID0gY29udGVudC5tYXAoKHtcbiAgICB0aXRsZSxcbiAgICBkYXRlLFxuICAgIGltYWdlLFxuICAgIHVybCxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IGhhc2hDb2RlID0gKHMpID0+IHMuc3BsaXQoJycpLnJlZHVjZSgoYSwgYikgPT4geyBjb25zdCBuZXdBID0gKChhIDw8IDUpIC0gYSkgKyBiLmNoYXJDb2RlQXQoMCk7IHJldHVybiBuZXdBICYgbmV3QTsgfSwgMCk7XG5cbiAgICBmdW5jdGlvbiBpbnRUb1JHQihpKSB7XG4gICAgICBjb25zdCBjID0gKGkgJiAweDAwRkZGRkZGKVxuICAgICAgICAudG9TdHJpbmcoMTYpO1xuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coaW50VG9SR0IoaGFzaENvZGUoJ0dvb2dsZXMnKSkpO1xuICAgIGNvbnNvbGUubG9nKGludFRvUkdCKGhhc2hDb2RlKCdHb29nbGVzIEtlbHNleSBIaWdodG93ZXIgb2ZmZXJzIHRpcHMgb24gaG93IHRvIGNlbnRyYWxpemUgYW5kIGV2b2x2ZSBJVCBwcmFjdGljZXMgYnkgTWF0dCBBc2F5JykpKTtcbiAgICBjb25zb2xlLmxvZyhpbnRUb1JHQihoYXNoQ29kZSgnUG9kY2FzdDogVGhlIEJ1c2luZXNzIG9mIENsb3VkIE5hdGl2ZSB3aXRoIEVtaWx5IE9taWVyIGFuZCBOaXRoeWEgUnVmZicpKSk7XG4gICAgY29uc29sZS5sb2coaW50VG9SR0IoaGFzaENvZGUoJ0dQTCBJbml0aWF0aXZlIEdyb3dzIE92ZXIgNDAlOyBNb3JlIFRoYW4gNjAgQ29tcGFuaWVzIEhhdmUgSm9pbmVkIHRoZSBDYW1wYWlnbiBmb3IgR3JlYXRlciBQcmVkaWN0YWJpbGl0eSBpbiBPcGVuIFNvdXJjZSBMaWNlbnNpbmcnKSkpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gaW1hZ2UgPyBgdXJsKCR7aW1hZ2V9KWAgOiBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjJHtpbnRUb1JHQihoYXNoQ29kZSh0aXRsZSkpfWNjIDAlLCAjJHtpbnRUb1JHQihoYXNoQ29kZSh0aXRsZSkpfTk5IDEwMCUpLCB1cmwoXCIvaW1hZ2VzL2Jsb2cvX2RlZmF1bHQtYmxvZzAwMS5qcGdcIilgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17YXJ0aWNsZX0ga2V5PXtgYXJ0aWNsZXMke2RhdGV9YH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17YXJ0aWNsZUxpbmt9IGhyZWY9e3VybH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FydGljbGVJbWFnZX0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlIH19IC8+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17YXJ0aWNsZVRpdGxlfT57dGl0bGV9PC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2FydGljbGVEYXRlfT57ZGF0ZX08L3A+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YXJ0aWNsZUxpc3R9PlxuICAgICAge2FydGljbGVzfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVMaXN0O1xuXG5BcnRpY2xlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5hcnJheU9mLmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ArticleList/index.jsx\n");

/***/ })

})