webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/EventCountdown/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/EventCountdown/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ \"./src/components/Icon/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/EventCountdown/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/EventCountdown/index.jsx\",\n    _this = undefined;\n\n\n\n\nvar monthLongNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\nvar EventCountdown = function EventCountdown(_ref) {\n  var content = _ref.content;\n  var events = content.map(function (_ref2) {\n    var name = _ref2.name,\n        description = _ref2.description,\n        start = _ref2.start,\n        image = _ref2.image,\n        url = _ref2.url;\n    var now = Date.now();\n    var begin = new Date(start);\n    var beginMonth = monthLongNames[begin.getMonth()];\n    var beginSeconds = begin.getSeconds();\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"event\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventLink\"],\n        href: url,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventImage\"],\n          children: image ? 'image' : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            type: \"messages\",\n            color: \"blue\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 58\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventInfo\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventTitle\"],\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventDate\"],\n            children: [now, \" - \", begin, \" \", beginMonth, \" | \", beginSeconds]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventDescription\"],\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)\n    }, \"events\".concat(name), false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventList\"],\n    children: events\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = EventCountdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventCountdown);\nEventCountdown.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"EventCountdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRDb3VudGRvd24vaW5kZXguanN4P2YwZDgiXSwibmFtZXMiOlsibW9udGhMb25nTmFtZXMiLCJFdmVudENvdW50ZG93biIsImNvbnRlbnQiLCJldmVudHMiLCJtYXAiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzdGFydCIsImltYWdlIiwidXJsIiwibm93IiwiRGF0ZSIsImJlZ2luIiwiYmVnaW5Nb250aCIsImdldE1vbnRoIiwiYmVnaW5TZWNvbmRzIiwiZ2V0U2Vjb25kcyIsImV2ZW50IiwiZXZlbnRMaW5rIiwiZXZlbnRJbWFnZSIsImV2ZW50SW5mbyIsImV2ZW50VGl0bGUiLCJldmVudERhdGUiLCJldmVudERlc2NyaXB0aW9uIiwiZXZlbnRMaXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFXQSxJQUFNQSxjQUFjLEdBQUcsQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixPQUF4QixFQUFpQyxPQUFqQyxFQUEwQyxLQUExQyxFQUFpRCxNQUFqRCxFQUNyQixNQURxQixFQUNiLFFBRGEsRUFDSCxXQURHLEVBQ1UsU0FEVixFQUNxQixVQURyQixFQUNpQyxVQURqQyxDQUF2Qjs7QUFHQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ3RDLE1BQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxHQUFSLENBQVksaUJBTXJCO0FBQUEsUUFMSkMsSUFLSSxTQUxKQSxJQUtJO0FBQUEsUUFKSkMsV0FJSSxTQUpKQSxXQUlJO0FBQUEsUUFISkMsS0FHSSxTQUhKQSxLQUdJO0FBQUEsUUFGSkMsS0FFSSxTQUZKQSxLQUVJO0FBQUEsUUFESkMsR0FDSSxTQURKQSxHQUNJO0FBQ0osUUFBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNELEdBQUwsRUFBWjtBQUNBLFFBQU1FLEtBQUssR0FBRyxJQUFJRCxJQUFKLENBQVNKLEtBQVQsQ0FBZDtBQUNBLFFBQU1NLFVBQVUsR0FBR2IsY0FBYyxDQUFDWSxLQUFLLENBQUNFLFFBQU4sRUFBRCxDQUFqQztBQUNBLFFBQU1DLFlBQVksR0FBR0gsS0FBSyxDQUFDSSxVQUFOLEVBQXJCO0FBRUEsd0JBQ0U7QUFBUyxlQUFTLEVBQUVDLHVEQUFwQjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBRUMsMkRBQWQ7QUFBeUIsWUFBSSxFQUFFVCxHQUEvQjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRVUsNERBQWhCO0FBQUEsb0JBQTZCWCxLQUFLLEdBQUcsT0FBSCxnQkFBYSxxRUFBQyw2Q0FBRDtBQUFNLGdCQUFJLEVBQUMsVUFBWDtBQUFzQixpQkFBSyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRVksMkRBQWhCO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFFQyw0REFBZjtBQUFBLHNCQUE0QmhCO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFHLHFCQUFTLEVBQUVpQiwyREFBZDtBQUFBLHVCQUEwQlosR0FBMUIsU0FBa0NFLEtBQWxDLE9BQTBDQyxVQUExQyxTQUF5REUsWUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBRyxxQkFBUyxFQUFFUSxrRUFBZDtBQUFBLHNCQUFpQ2pCO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHVCQUF5Q0QsSUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBWUgsR0F4QmdCLENBQWY7QUEwQkEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVtQiwyREFBcEI7QUFBQSxjQUNHckI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQWhDRDs7S0FBTUYsYztBQWtDU0EsNkVBQWY7QUFFQUEsY0FBYyxDQUFDd0IsU0FBZixHQUEyQjtBQUN6QnZCLFNBQU8sRUFBRXdCLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JDO0FBREYsQ0FBM0IiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FdmVudENvdW50ZG93bi9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5cbmltcG9ydCB7XG4gIGV2ZW50TGlzdCxcbiAgZXZlbnQsXG4gIGV2ZW50SW5mbyxcbiAgZXZlbnRUaXRsZSxcbiAgZXZlbnRMaW5rLFxuICBldmVudERlc2NyaXB0aW9uLFxuICBldmVudEltYWdlLFxuICBldmVudERhdGUsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IG1vbnRoTG9uZ05hbWVzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJyxcbiAgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5cbmNvbnN0IEV2ZW50Q291bnRkb3duID0gKHsgY29udGVudCB9KSA9PiB7XG4gIGNvbnN0IGV2ZW50cyA9IGNvbnRlbnQubWFwKCh7XG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBzdGFydCxcbiAgICBpbWFnZSxcbiAgICB1cmwsXG4gIH0pID0+IHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGJlZ2luID0gbmV3IERhdGUoc3RhcnQpO1xuICAgIGNvbnN0IGJlZ2luTW9udGggPSBtb250aExvbmdOYW1lc1tiZWdpbi5nZXRNb250aCgpXTtcbiAgICBjb25zdCBiZWdpblNlY29uZHMgPSBiZWdpbi5nZXRTZWNvbmRzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtldmVudH0ga2V5PXtgZXZlbnRzJHtuYW1lfWB9PlxuICAgICAgICA8YSBjbGFzc05hbWU9e2V2ZW50TGlua30gaHJlZj17dXJsfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZXZlbnRJbWFnZX0+e2ltYWdlID8gJ2ltYWdlJyA6IDxJY29uIHR5cGU9XCJtZXNzYWdlc1wiIGNvbG9yPVwiYmx1ZVwiIC8+fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtldmVudEluZm99PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17ZXZlbnRUaXRsZX0+e25hbWV9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17ZXZlbnREYXRlfT57bm93fSAtIHtiZWdpbn0ge2JlZ2luTW9udGh9IHwge2JlZ2luU2Vjb25kc308L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2V2ZW50RGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn0pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtldmVudExpc3R9PlxuICAgICAge2V2ZW50c31cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudENvdW50ZG93bjtcblxuRXZlbnRDb3VudGRvd24ucHJvcFR5cGVzID0ge1xuICBjb250ZW50OiBQcm9wVHlwZXMuYXJyYXlPZi5pc1JlcXVpcmVkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/EventCountdown/index.jsx\n");

/***/ })

})