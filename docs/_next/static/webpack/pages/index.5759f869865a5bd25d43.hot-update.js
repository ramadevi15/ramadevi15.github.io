webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/EventList/index.jsx":
/*!********************************************!*\
  !*** ./src/components/EventList/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Countdown */ \"./src/components/Countdown/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/EventList/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/EventList/index.jsx\",\n    _this = undefined;\n\n\n\n\nvar monthLongName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\nvar dateString = function dateString(firstDate, lastDate, firstMonth, lastMonth, firstYear, lastYear) {\n  if (firstYear !== lastYear) {\n    return \"\".concat(monthLongName[firstMonth], \" \").concat(firstDate, \", \").concat(firstYear, \"-\").concat(monthLongName[lastMonth], \" \").concat(lastDate, \", \").concat(lastYear);\n  }\n\n  if (firstMonth !== lastMonth) {\n    return \"\".concat(monthLongName[firstMonth], \" \").concat(firstDate, \"-\").concat(monthLongName[lastMonth], \" \").concat(lastDate, \", \").concat(firstYear);\n  }\n\n  if (firstDate !== lastDate) {\n    return \"\".concat(monthLongName[firstMonth], \" \").concat(firstDate, \"-\").concat(lastDate, \", \").concat(firstYear);\n  }\n\n  return \"\".concat(monthLongName[firstMonth], \" \").concat(firstDate, \", \").concat(firstYear);\n};\n\nvar EventList = function EventList(_ref) {\n  var content = _ref.content;\n  var events = content.map(function (_ref2) {\n    var name = _ref2.name,\n        description = _ref2.description,\n        location = _ref2.location,\n        start = _ref2.start,\n        end = _ref2.end,\n        url = _ref2.url;\n    var first = new Date(start);\n    var last = new Date(end);\n    var beginString = dateString(first.getDate(), last.getDate(), first.getMonth(), last.getMonth(), first.getFullYear(), last.getFullYear());\n\n    var locality = function locality() {\n      return \"\".concat(location.city, \", \").concat(location.state, \", \").concat(location.country);\n    };\n\n    var place = function place(l) {\n      return l.online ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"location\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventLink\"],\n          href: url,\n          children: \"Online\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 41\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"location\"],\n        children: [\" in \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventLink\"],\n          href: url,\n          children: locality()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 45\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this);\n    };\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"event\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventInfo\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventLink\"],\n          href: url,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventTitle\"],\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventDate\"],\n          children: [beginString, \" \", place(location)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventDescription\"],\n          children: description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Countdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          start: start,\n          end: end\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this)\n    }, \"events\".concat(name), false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventList\"],\n    children: events\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = EventList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventList);\nEventList.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"EventList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRMaXN0L2luZGV4LmpzeD8yZTdiIl0sIm5hbWVzIjpbIm1vbnRoTG9uZ05hbWUiLCJkYXRlU3RyaW5nIiwiZmlyc3REYXRlIiwibGFzdERhdGUiLCJmaXJzdE1vbnRoIiwibGFzdE1vbnRoIiwiZmlyc3RZZWFyIiwibGFzdFllYXIiLCJFdmVudExpc3QiLCJjb250ZW50IiwiZXZlbnRzIiwibWFwIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJzdGFydCIsImVuZCIsInVybCIsImZpcnN0IiwiRGF0ZSIsImxhc3QiLCJiZWdpblN0cmluZyIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwibG9jYWxpdHkiLCJjaXR5Iiwic3RhdGUiLCJjb3VudHJ5IiwicGxhY2UiLCJsIiwib25saW5lIiwibG9jYXRpb25TdHlsZSIsImV2ZW50TGluayIsImV2ZW50IiwiZXZlbnRJbmZvIiwiZXZlbnRUaXRsZSIsImV2ZW50RGF0ZSIsImV2ZW50RGVzY3JpcHRpb24iLCJldmVudExpc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQVdBLElBQU1BLGFBQWEsR0FBRyxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlELE1BQWpELEVBQ3BCLE1BRG9CLEVBQ1osUUFEWSxFQUNGLFdBREUsRUFDVyxTQURYLEVBQ3NCLFVBRHRCLEVBQ2tDLFVBRGxDLENBQXRCOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFNBQUQsRUFBWUMsUUFBWixFQUFzQkMsVUFBdEIsRUFBa0NDLFNBQWxDLEVBQTZDQyxTQUE3QyxFQUF3REMsUUFBeEQsRUFBcUU7QUFDdEYsTUFBSUQsU0FBUyxLQUFLQyxR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REYsZUFJRTtBQUFHLG1CQUFTLEVBQUV5QiwyREFBZDtBQUFBLHFCQUEwQmhCLFdBQTFCLE9BQXdDUSxLQUFLLENBQUNmLFFBQUQsQ0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0U7QUFBRyxtQkFBUyxFQUFFd0Isa0VBQWQ7QUFBQSxvQkFBaUN6QjtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBTUUscUVBQUMsa0RBQUQ7QUFBVyxlQUFLLEVBQUVFLEtBQWxCO0FBQXlCLGFBQUcsRUFBRUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix1QkFBeUNKLElBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVlELEdBdENjLENBQWY7QUF3Q0Esc0JBQ0U7QUFBUyxhQUFTLEVBQUUyQiwyREFBcEI7QUFBQSxjQUNHN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQTlDRDs7S0FBTUYsUztBQWdEU0Esd0VBQWY7QUFFQUEsU0FBUyxDQUFDZ0MsU0FBVixHQUFzQjtBQUNwQi9CLFNBQU8sRUFBRWdDLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JDO0FBRFAsQ0FBdEIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FdmVudExpc3QvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb3VudGRvd24gZnJvbSAnLi4vQ291bnRkb3duJztcblxuaW1wb3J0IHtcbiAgZXZlbnRMaXN0LFxuICBldmVudCxcbiAgZXZlbnRJbmZvLFxuICBldmVudFRpdGxlLFxuICBldmVudExpbmssXG4gIGV2ZW50RGVzY3JpcHRpb24sXG4gIGV2ZW50RGF0ZSxcbiAgbG9jYXRpb24gYXMgbG9jYXRpb25TdHlsZSxcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc3QgbW9udGhMb25nTmFtZSA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXG4gICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuY29uc3QgZGF0ZVN0cmluZyA9IChmaXJzdERhdGUsIGxhc3REYXRlLCBmaXJzdE1vbnRoLCBsYXN0TW9udGgsIGZpcnN0WWVhciwgbGFzdFllYXIpID0+IHtcbiAgaWYgKGZpcnN0WWVhciAhPT0gbGFzdFllYXIpIHtcbiAgICByZXR1cm4gYCR7bW9udGhMb25nTmFtZVtmaXJzdE1vbnRoXX0gJHtmaXJzdERhdGV9LCAke2ZpcnN0WWVhcn0tJHttb250aExvbmdOYW1lW2xhc3RNb250aF19ICR7bGFzdERhdGV9LCAke2xhc3RZZWFyfWA7XG4gIH1cbiAgaWYgKGZpcnN0TW9udGggIT09IGxhc3RNb250aCkge1xuICAgIHJldHVybiBgJHttb250aExvbmdOYW1lW2ZpcnN0TW9udGhdfSAke2ZpcnN0RGF0ZX0tJHttb250aExvbmdOYW1lW2xhc3RNb250aF19ICR7bGFzdERhdGV9LCAke2ZpcnN0WWVhcn1gO1xuICB9XG4gIGlmIChmaXJzdERhdGUgIT09IGxhc3REYXRlKSB7XG4gICAgcmV0dXJuIGAke21vbnRoTG9uZ05hbWVbZmlyc3RNb250aF19ICR7Zmlyc3REYXRlfS0ke2xhc3REYXRlfSwgJHtmaXJzdFllYXJ9YDtcbiAgfVxuICByZXR1cm4gYCR7bW9udGhMb25nTmFtZVtmaXJzdE1vbnRoXX0gJHtmaXJzdERhdGV9LCAke2ZpcnN0WWVhcn1gO1xufTtcblxuY29uc3QgRXZlbnRMaXN0ID0gKHsgY29udGVudCB9KSA9PiB7XG4gIGNvbnN0IGV2ZW50cyA9IGNvbnRlbnQubWFwKCh7XG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBsb2NhdGlvbixcbiAgICBzdGFydCxcbiAgICBlbmQsXG4gICAgdXJsLFxuICB9KSA9PiB7XG4gICAgY29uc3QgZmlyc3QgPSBuZXcgRGF0ZShzdGFydCk7XG4gICAgY29uc3QgbGFzdCA9IG5ldyBEYXRlKGVuZCk7XG4gICAgY29uc3QgYmVnaW5TdHJpbmcgPSBkYXRlU3RyaW5nKFxuICAgICAgZmlyc3QuZ2V0RGF0ZSgpLFxuICAgICAgbGFzdC5nZXREYXRlKCksXG4gICAgICBmaXJzdC5nZXRNb250aCgpLFxuICAgICAgbGFzdC5nZXRNb250aCgpLFxuICAgICAgZmlyc3QuZ2V0RnVsbFllYXIoKSxcbiAgICAgIGxhc3QuZ2V0RnVsbFllYXIoKSxcbiAgICApO1xuXG4gICAgY29uc3QgbG9jYWxpdHkgPSAoKSA9PiBgJHtsb2NhdGlvbi5jaXR5fSwgJHtsb2NhdGlvbi5zdGF0ZX0sICR7bG9jYXRpb24uY291bnRyeX1gO1xuXG4gICAgY29uc3QgcGxhY2UgPSAobCkgPT4gKGwub25saW5lXG4gICAgICA/IDxzcGFuIGNsYXNzTmFtZT17bG9jYXRpb25TdHlsZX0+PGEgY2xhc3NOYW1lPXtldmVudExpbmt9IGhyZWY9e3VybH0+T25saW5lPC9hPjwvc3Bhbj5cbiAgICAgIDogPHNwYW4gY2xhc3NOYW1lPXtsb2NhdGlvblN0eWxlfT4gaW4gPGEgY2xhc3NOYW1lPXtldmVudExpbmt9IGhyZWY9e3VybH0+e2xvY2FsaXR5KCl9PC9hPjwvc3Bhbj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17ZXZlbnR9IGtleT17YGV2ZW50cyR7bmFtZX1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2V2ZW50SW5mb30+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtldmVudExpbmt9IGhyZWY9e3VybH0+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtldmVudFRpdGxlfT57bmFtZX08L2gzPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2V2ZW50RGF0ZX0+e2JlZ2luU3RyaW5nfSB7cGxhY2UobG9jYXRpb24pfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2V2ZW50RGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPENvdW50ZG93biBzdGFydD17c3RhcnR9IGVuZD17ZW5kfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17ZXZlbnRMaXN0fT5cbiAgICAgIHtldmVudHN9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRMaXN0O1xuXG5FdmVudExpc3QucHJvcFR5cGVzID0ge1xuICBjb250ZW50OiBQcm9wVHlwZXMuYXJyYXlPZi5pc1JlcXVpcmVkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/EventList/index.jsx\n");

/***/ })

})