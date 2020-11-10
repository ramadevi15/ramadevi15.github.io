webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ArticleList/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/ArticleList/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/ArticleList/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/ArticleList/index.jsx\",\n    _this = undefined;\n\n\n\n\nvar ArticleList = function ArticleList(_ref) {\n  var content = _ref.content;\n  var articles = content.map(function (_ref2) {\n    var title = _ref2.title,\n        date = _ref2.date,\n        image = _ref2.image,\n        url = _ref2.url;\n\n    // eslint-disable-next-line no-bitwise\n    var hashCode = function hashCode(s) {\n      return s.split('').reduce(function (a, b) {\n        var newA = (a << 1) - a + b.charCodeAt(0);\n        return newA & newA;\n      }, 0);\n    };\n\n    console.log(hashCode('one', 'Google\\'s Kelsey Hightower offers tips on how to centralize and evolve IT practices by Matt Asay'));\n    console.log(hashCode('2', 'Podcast: The Business of Cloud Native with Emily Omier and Nithya Ruff'));\n    console.log(hashCode('3', 'GPL Initiative Grows Over 40%; More Than 60 Companies Have Joined the Campaign for Greater Predictability in Open Source Licensing'));\n    console.log(hashCode('4', '_default-blog002.jpg'));\n    var backgroundImage = image ? \"url(\".concat(image, \")\") : 'linear-gradient(90deg, rgba(253,185,19,.5) 16%, rgba(243,112,33,.5) 16%, rgba(243,112,33,.5) 33%, rgba(180,40,70,.5) 33%, rgba(180,40,70,.5) 49%, rgba(100,95,170,.5) 49%, rgba(100,95,170,.5) 66%, rgba(0,137,207,.5) 66%, rgba(0,137,207,.5) 82%, rgba(13,177,75,.5) 82%), url(\"/images/blog/_default-blog001.jpg\")';\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"article\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleLink\"],\n        href: url,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleImage\"],\n          style: {\n            backgroundImage: backgroundImage\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleTitle\"],\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleDate\"],\n          children: date\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)\n    }, \"articles\".concat(date), false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleList\"],\n    children: articles\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ArticleList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleList);\nArticleList.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"ArticleList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QvaW5kZXguanN4PzdiZjQiXSwibmFtZXMiOlsiQXJ0aWNsZUxpc3QiLCJjb250ZW50IiwiYXJ0aWNsZXMiLCJtYXAiLCJ0aXRsZSIsImRhdGUiLCJpbWFnZSIsInVybCIsImhhc2hDb2RlIiwicyIsInNwbGl0IiwicmVkdWNlIiwiYSIsImIiLCJuZXdBIiwiY2hhckNvZGVBdCIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhcnRpY2xlIiwiYXJ0aWNsZUxpbmsiLCJhcnRpY2xlSW1hZ2UiLCJhcnRpY2xlVGl0bGUiLCJhcnRpY2xlRGF0ZSIsImFydGljbGVMaXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBU0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDbkMsTUFBTUMsUUFBUSxHQUFHRCxPQUFPLENBQUNFLEdBQVIsQ0FBWSxpQkFLdkI7QUFBQSxRQUpKQyxLQUlJLFNBSkpBLEtBSUk7QUFBQSxRQUhKQyxJQUdJLFNBSEpBLElBR0k7QUFBQSxRQUZKQyxLQUVJLFNBRkpBLEtBRUk7QUFBQSxRQURKQyxHQUNJLFNBREpBLEdBQ0k7O0FBQ0o7QUFDQSxRQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVEsRUFBUixFQUFZQyxNQUFaLENBQW1CLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQUUsWUFBTUMsSUFBSSxHQUFJLENBQUNGLENBQUMsSUFBSSxDQUFOLElBQVdBLENBQVosR0FBaUJDLENBQUMsQ0FBQ0UsVUFBRixDQUFhLENBQWIsQ0FBOUI7QUFBK0MsZUFBT0QsSUFBSSxHQUFHQSxJQUFkO0FBQXFCLE9BQW5HLEVBQXFHLENBQXJHLENBQVA7QUFBQSxLQUFqQjs7QUFFQUUsV0FBTyxDQUFDQyxHQUFSLENBQVlULFFBQVEsQ0FBQyxLQUFELEVBQVEsa0dBQVIsQ0FBcEI7QUFDQVEsV0FBTyxDQUFDQyxHQUFSLENBQVlULFFBQVEsQ0FBQyxHQUFELEVBQU0sd0VBQU4sQ0FBcEI7QUFDQVEsV0FBTyxDQUFDQyxHQUFSLENBQVlULFFBQVEsQ0FBQyxHQUFELEVBQU0sb0lBQU4sQ0FBcEI7QUFDQVEsV0FBTyxDQUFDQyxHQUFSLENBQVlULFFBQVEsQ0FBQyxHQUFELEVBQU0sc0JBQU4sQ0FBcEI7QUFFQSxRQUFNVSxlQUFlLEdBQUdaLEtBQUssaUJBQVVBLEtBQVYsU0FBcUIsdVRBQWxEO0FBRUEsd0JBQ0U7QUFBUyxlQUFTLEVBQUVhLHlEQUFwQjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBRUMsNkRBQWQ7QUFBMkIsWUFBSSxFQUFFYixHQUFqQztBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRWMsOERBQWhCO0FBQThCLGVBQUssRUFBRTtBQUFFSCwyQkFBZSxFQUFmQTtBQUFGO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFJLG1CQUFTLEVBQUVJLDhEQUFmO0FBQUEsb0JBQThCbEI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUcsbUJBQVMsRUFBRW1CLDZEQUFkO0FBQUEsb0JBQTRCbEI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix5QkFBNkNBLElBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVNELEdBekJnQixDQUFqQjtBQTJCQSxzQkFDRTtBQUFTLGFBQVMsRUFBRW1CLDZEQUFwQjtBQUFBLGNBQ0d0QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBakNEOztLQUFNRixXO0FBbUNTQSwwRUFBZjtBQUVBQSxXQUFXLENBQUN5QixTQUFaLEdBQXdCO0FBQ3RCeEIsU0FBTyxFQUFFeUIsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkM7QUFETCxDQUF4QiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0FydGljbGVMaXN0L2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7XG4gIGFydGljbGVMaXN0LFxuICBhcnRpY2xlLFxuICBhcnRpY2xlVGl0bGUsXG4gIGFydGljbGVMaW5rLFxuICBhcnRpY2xlSW1hZ2UsXG4gIGFydGljbGVEYXRlLFxufSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBBcnRpY2xlTGlzdCA9ICh7IGNvbnRlbnQgfSkgPT4ge1xuICBjb25zdCBhcnRpY2xlcyA9IGNvbnRlbnQubWFwKCh7XG4gICAgdGl0bGUsXG4gICAgZGF0ZSxcbiAgICBpbWFnZSxcbiAgICB1cmwsXG4gIH0pID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgIGNvbnN0IGhhc2hDb2RlID0gKHMpID0+IHMuc3BsaXQoJycpLnJlZHVjZSgoYSwgYikgPT4geyBjb25zdCBuZXdBID0gKChhIDw8IDEpIC0gYSkgKyBiLmNoYXJDb2RlQXQoMCk7IHJldHVybiBuZXdBICYgbmV3QTsgfSwgMCk7XG5cbiAgICBjb25zb2xlLmxvZyhoYXNoQ29kZSgnb25lJywgJ0dvb2dsZVxcJ3MgS2Vsc2V5IEhpZ2h0b3dlciBvZmZlcnMgdGlwcyBvbiBob3cgdG8gY2VudHJhbGl6ZSBhbmQgZXZvbHZlIElUIHByYWN0aWNlcyBieSBNYXR0IEFzYXknKSk7XG4gICAgY29uc29sZS5sb2coaGFzaENvZGUoJzInLCAnUG9kY2FzdDogVGhlIEJ1c2luZXNzIG9mIENsb3VkIE5hdGl2ZSB3aXRoIEVtaWx5IE9taWVyIGFuZCBOaXRoeWEgUnVmZicpKTtcbiAgICBjb25zb2xlLmxvZyhoYXNoQ29kZSgnMycsICdHUEwgSW5pdGlhdGl2ZSBHcm93cyBPdmVyIDQwJTsgTW9yZSBUaGFuIDYwIENvbXBhbmllcyBIYXZlIEpvaW5lZCB0aGUgQ2FtcGFpZ24gZm9yIEdyZWF0ZXIgUHJlZGljdGFiaWxpdHkgaW4gT3BlbiBTb3VyY2UgTGljZW5zaW5nJykpO1xuICAgIGNvbnNvbGUubG9nKGhhc2hDb2RlKCc0JywgJ19kZWZhdWx0LWJsb2cwMDIuanBnJykpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gaW1hZ2UgPyBgdXJsKCR7aW1hZ2V9KWAgOiAnbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1MywxODUsMTksLjUpIDE2JSwgcmdiYSgyNDMsMTEyLDMzLC41KSAxNiUsIHJnYmEoMjQzLDExMiwzMywuNSkgMzMlLCByZ2JhKDE4MCw0MCw3MCwuNSkgMzMlLCByZ2JhKDE4MCw0MCw3MCwuNSkgNDklLCByZ2JhKDEwMCw5NSwxNzAsLjUpIDQ5JSwgcmdiYSgxMDAsOTUsMTcwLC41KSA2NiUsIHJnYmEoMCwxMzcsMjA3LC41KSA2NiUsIHJnYmEoMCwxMzcsMjA3LC41KSA4MiUsIHJnYmEoMTMsMTc3LDc1LC41KSA4MiUpLCB1cmwoXCIvaW1hZ2VzL2Jsb2cvX2RlZmF1bHQtYmxvZzAwMS5qcGdcIiknO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17YXJ0aWNsZX0ga2V5PXtgYXJ0aWNsZXMke2RhdGV9YH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17YXJ0aWNsZUxpbmt9IGhyZWY9e3VybH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FydGljbGVJbWFnZX0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlIH19IC8+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17YXJ0aWNsZVRpdGxlfT57dGl0bGV9PC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2FydGljbGVEYXRlfT57ZGF0ZX08L3A+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YXJ0aWNsZUxpc3R9PlxuICAgICAge2FydGljbGVzfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVMaXN0O1xuXG5BcnRpY2xlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5hcnJheU9mLmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ArticleList/index.jsx\n");

/***/ })

})