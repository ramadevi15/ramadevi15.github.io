webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/EventList/index.jsx":
/*!********************************************!*\
  !*** ./src/components/EventList/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Countdown */ \"./src/components/Countdown/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/EventList/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/EventList/index.jsx\",\n    _this = undefined;\n\n\n\n\nvar monthLongName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\nvar dateString = function dateString(firstDate, lastDate, firstMonth, lastMonth, firstYear, lastYear) {\n  if (firstYear !== lastYear) {\n    return \"\".concat(monthLongName[firstMonth], \" \").concat(firstDate, \", \").concat(firstYear, \"-\").concat(monthLongName[lastMonth], \" \").concat(lastDate, \", \").concat(lastYear);\n  }\n\n  if (firstMonth !== lastMonth) {\n    return \"\".concat(monthLongName[firstMonth], \" \").concat(firstDate, \"-\").concat(monthLongName[lastMonth], \" \").concat(lastDate, \", \").concat(firstYear);\n  }\n\n  if (firstDate !== lastDate) {\n    return \"\".concat(monthLongName[firstMonth], \" \").concat(firstDate, \"-\").concat(lastDate, \", \").concat(firstYear);\n  }\n\n  return \"\".concat(monthLongName[firstMonth], \" \").concat(firstDate, \", \").concat(firstYear);\n};\n\nvar EventList = function EventList(_ref) {\n  var content = _ref.content;\n  var events = content.map(function (_ref2) {\n    var name = _ref2.name,\n        description = _ref2.description,\n        location = _ref2.location,\n        start = _ref2.start,\n        end = _ref2.end,\n        url = _ref2.url;\n    var first = new Date(start);\n    var last = new Date(end);\n    var beginString = dateString(first.getDate(), last.getDate(), first.getMonth(), last.getMonth(), first.getFullYear(), last.getFullYear());\n\n    var place = function place(location) {\n      return location.online ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: eventLocation,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventLink\"],\n          href: url,\n          children: \"online\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 41\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: eventLocation,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventLink\"],\n          href: url,\n          children: [location.city, \", \", location.state]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 41\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this);\n    };\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"event\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventInfo\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventLink\"],\n          href: url,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventTitle\"],\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventDate\"],\n          children: [beginString, \" \", place(location)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventDescription\"],\n          children: description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Countdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          start: start,\n          end: end\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, \"events\".concat(name), false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventList\"],\n    children: events\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = EventList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventList);\nEventList.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"EventList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRMaXN0L2luZGV4LmpzeD8yZTdiIl0sIm5hbWVzIjpbIm1vbnRoTG9uZ05hbWUiLCJkYXRlU3RyaW5nIiwiZmlyc3REYXRlIiwibGFzdERhdGUiLCJmaXJzdE1vbnRoIiwibGFzdE1vbnRoIiwiZmlyc3RZZWFyIiwibGFzdFllYXIiLCJFdmVudExpc3QiLCJjb250ZW50IiwiZXZlbnRzIiwibWFwIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJzdGFydCIsImVuZCIsInVybCIsImZpcnN0IiwiRGF0ZSIsImxhc3QiLCJiZWdpblN0cmluZyIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicGxhY2UiLCJvbmxpbmUiLCJldmVudExvY2F0aW9uIiwiZXZlbnRMaW5rIiwiY2l0eSIsInN0YXRlIiwiZXZlbnQiLCJldmVudEluZm8iLCJldmVudFRpdGxlIiwiZXZlbnREYXRlIiwiZXZlbnREZXNjcmlwdGlvbiIsImV2ZW50TGlzdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBVUEsSUFBTUEsYUFBYSxHQUFHLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsT0FBeEIsRUFBaUMsT0FBakMsRUFBMEMsS0FBMUMsRUFBaUQsTUFBakQsRUFDcEIsTUFEb0IsRUFDWixRQURZLEVBQ0YsV0FERSxFQUNXLFNBRFgsRUFDc0IsVUFEdEIsRUFDa0MsVUFEbEMsQ0FBdEI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsU0FBRCxFQUFZQyxRQUFaLEVBQXNCQyxVQUF0QixFQUFrQ0MsU0FBbEMsRUFBNkNDLFNBQTdDLEVBQXdEQyxRQUF4RCxFQUFxRTtBQUN0RixNQUFJRCxTQUFTLEtBQUtDLFFBQWxCLEVBQTRCO0FBQzFCLHFCQUFVUCxh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bUJBQVMsRUFBRXFCLGtFQUFkO0FBQUEsb0JBQWlDdEI7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQU1FLHFFQUFDLGtEQUFEO0FBQVcsZUFBSyxFQUFFRSxLQUFsQjtBQUF5QixhQUFHLEVBQUVDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsdUJBQXlDSixJQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFZRCxHQXBDYyxDQUFmO0FBc0NBLHNCQUNFO0FBQVMsYUFBUyxFQUFFd0IsMkRBQXBCO0FBQUEsY0FDRzFCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0E1Q0Q7O0tBQU1GLFM7QUE4Q1NBLHdFQUFmO0FBRUFBLFNBQVMsQ0FBQzZCLFNBQVYsR0FBc0I7QUFDcEI1QixTQUFPLEVBQUU2QixpREFBUyxDQUFDQyxPQUFWLENBQWtCQztBQURQLENBQXRCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRXZlbnRMaXN0L2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ291bnRkb3duIGZyb20gJy4uL0NvdW50ZG93bic7XG5cbmltcG9ydCB7XG4gIGV2ZW50TGlzdCxcbiAgZXZlbnQsXG4gIGV2ZW50SW5mbyxcbiAgZXZlbnRUaXRsZSxcbiAgZXZlbnRMaW5rLFxuICBldmVudERlc2NyaXB0aW9uLFxuICBldmVudERhdGUsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IG1vbnRoTG9uZ05hbWUgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxuICAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcbmNvbnN0IGRhdGVTdHJpbmcgPSAoZmlyc3REYXRlLCBsYXN0RGF0ZSwgZmlyc3RNb250aCwgbGFzdE1vbnRoLCBmaXJzdFllYXIsIGxhc3RZZWFyKSA9PiB7XG4gIGlmIChmaXJzdFllYXIgIT09IGxhc3RZZWFyKSB7XG4gICAgcmV0dXJuIGAke21vbnRoTG9uZ05hbWVbZmlyc3RNb250aF19ICR7Zmlyc3REYXRlfSwgJHtmaXJzdFllYXJ9LSR7bW9udGhMb25nTmFtZVtsYXN0TW9udGhdfSAke2xhc3REYXRlfSwgJHtsYXN0WWVhcn1gO1xuICB9XG4gIGlmIChmaXJzdE1vbnRoICE9PSBsYXN0TW9udGgpIHtcbiAgICByZXR1cm4gYCR7bW9udGhMb25nTmFtZVtmaXJzdE1vbnRoXX0gJHtmaXJzdERhdGV9LSR7bW9udGhMb25nTmFtZVtsYXN0TW9udGhdfSAke2xhc3REYXRlfSwgJHtmaXJzdFllYXJ9YDtcbiAgfVxuICBpZiAoZmlyc3REYXRlICE9PSBsYXN0RGF0ZSkge1xuICAgIHJldHVybiBgJHttb250aExvbmdOYW1lW2ZpcnN0TW9udGhdfSAke2ZpcnN0RGF0ZX0tJHtsYXN0RGF0ZX0sICR7Zmlyc3RZZWFyfWA7XG4gIH1cbiAgcmV0dXJuIGAke21vbnRoTG9uZ05hbWVbZmlyc3RNb250aF19ICR7Zmlyc3REYXRlfSwgJHtmaXJzdFllYXJ9YDtcbn07XG5cbmNvbnN0IEV2ZW50TGlzdCA9ICh7IGNvbnRlbnQgfSkgPT4ge1xuICBjb25zdCBldmVudHMgPSBjb250ZW50Lm1hcCgoe1xuICAgIG5hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgbG9jYXRpb24sXG4gICAgc3RhcnQsXG4gICAgZW5kLFxuICAgIHVybCxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IGZpcnN0ID0gbmV3IERhdGUoc3RhcnQpO1xuICAgIGNvbnN0IGxhc3QgPSBuZXcgRGF0ZShlbmQpO1xuICAgIGNvbnN0IGJlZ2luU3RyaW5nID0gZGF0ZVN0cmluZyhcbiAgICAgIGZpcnN0LmdldERhdGUoKSxcbiAgICAgIGxhc3QuZ2V0RGF0ZSgpLFxuICAgICAgZmlyc3QuZ2V0TW9udGgoKSxcbiAgICAgIGxhc3QuZ2V0TW9udGgoKSxcbiAgICAgIGZpcnN0LmdldEZ1bGxZZWFyKCksXG4gICAgICBsYXN0LmdldEZ1bGxZZWFyKCksXG4gICAgKTtcblxuICAgIGNvbnN0IHBsYWNlID0gKGxvY2F0aW9uKSA9PiAobG9jYXRpb24ub25saW5lXG4gICAgICA/IDxzcGFuIGNsYXNzTmFtZT17ZXZlbnRMb2NhdGlvbn0+PGEgY2xhc3NOYW1lPXtldmVudExpbmt9IGhyZWY9e3VybH0+b25saW5lPC9hPjwvc3Bhbj5cbiAgICAgIDogPHNwYW4gY2xhc3NOYW1lPXtldmVudExvY2F0aW9ufT48YSBjbGFzc05hbWU9e2V2ZW50TGlua30gaHJlZj17dXJsfT57bG9jYXRpb24uY2l0eX0sIHtsb2NhdGlvbi5zdGF0ZX08L2E+PC9zcGFuPlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtldmVudH0ga2V5PXtgZXZlbnRzJHtuYW1lfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZXZlbnRJbmZvfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2V2ZW50TGlua30gaHJlZj17dXJsfT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2V2ZW50VGl0bGV9PntuYW1lfTwvaDM+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17ZXZlbnREYXRlfT57YmVnaW5TdHJpbmd9IHtwbGFjZShsb2NhdGlvbil9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17ZXZlbnREZXNjcmlwdGlvbn0+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8Q291bnRkb3duIHN0YXJ0PXtzdGFydH0gZW5kPXtlbmR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtldmVudExpc3R9PlxuICAgICAge2V2ZW50c31cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudExpc3Q7XG5cbkV2ZW50TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5hcnJheU9mLmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/EventList/index.jsx\n");

/***/ })

})