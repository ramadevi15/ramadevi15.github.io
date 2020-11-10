webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/EventCountdown/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/EventCountdown/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ \"./src/components/Icon/index.jsx\");\n/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Countdown */ \"./src/components/Countdown/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/EventCountdown/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/EventCountdown/index.jsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar monthLongName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\nvar dateString = function dateString(start, end) {\n  return start === end ? start : \"\".concat(start, \"-\").concat(end);\n};\n\nvar EventList = function EventList(_ref) {\n  var content = _ref.content;\n  var events = content.map(function (_ref2) {\n    var name = _ref2.name,\n        description = _ref2.description,\n        start = _ref2.start,\n        end = _ref2.end,\n        image = _ref2.image,\n        url = _ref2.url;\n    var first = new Date(start);\n    var last = new Date(end);\n    var beginString = \"\".concat(monthLongName[first.getMonth()], \" \").concat(dateString(first.getDate(), last.getDate()));\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"event\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"eventLink\"],\n        href: url,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"eventImage\"],\n          children: image ? 'image' : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: \"calendar\",\n            color: \"purple\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 58\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"eventInfo\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"eventTitle\"],\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"eventDate\"],\n            children: [beginString, \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"eventDescription\"],\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Countdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            time: start\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)\n    }, \"events\".concat(name), false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"eventList\"],\n    children: events\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = EventList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventList);\nEventList.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"EventList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRDb3VudGRvd24vaW5kZXguanN4P2YwZDgiXSwibmFtZXMiOlsibW9udGhMb25nTmFtZSIsImRhdGVTdHJpbmciLCJzdGFydCIsImVuZCIsIkV2ZW50TGlzdCIsImNvbnRlbnQiLCJldmVudHMiLCJtYXAiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInVybCIsImZpcnN0IiwiRGF0ZSIsImxhc3QiLCJiZWdpblN0cmluZyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImV2ZW50IiwiZXZlbnRMaW5rIiwiZXZlbnRJbWFnZSIsImV2ZW50SW5mbyIsImV2ZW50VGl0bGUiLCJldmVudERhdGUiLCJldmVudERlc2NyaXB0aW9uIiwiZXZlbnRMaXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBV0EsSUFBTUEsYUFBYSxHQUFHLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsT0FBeEIsRUFBaUMsT0FBakMsRUFBMEMsS0FBMUMsRUFBaUQsTUFBakQsRUFDcEIsTUFEb0IsRUFDWixRQURZLEVBQ0YsV0FERSxFQUNXLFNBRFgsRUFDc0IsVUFEdEIsRUFDa0MsVUFEbEMsQ0FBdEI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FBaUJELEtBQUssS0FBS0MsR0FBVixHQUFnQkQsS0FBaEIsYUFBMkJBLEtBQTNCLGNBQW9DQyxHQUFwQyxDQUFqQjtBQUFBLENBQW5COztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2pDLE1BQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxHQUFSLENBQVksaUJBT3JCO0FBQUEsUUFOSkMsSUFNSSxTQU5KQSxJQU1JO0FBQUEsUUFMSkMsV0FLSSxTQUxKQSxXQUtJO0FBQUEsUUFKSlAsS0FJSSxTQUpKQSxLQUlJO0FBQUEsUUFISkMsR0FHSSxTQUhKQSxHQUdJO0FBQUEsUUFGSk8sS0FFSSxTQUZKQSxLQUVJO0FBQUEsUUFESkMsR0FDSSxTQURKQSxHQUNJO0FBQ0osUUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosQ0FBU1gsS0FBVCxDQUFkO0FBQ0EsUUFBTVksSUFBSSxHQUFHLElBQUlELElBQUosQ0FBU1YsR0FBVCxDQUFiO0FBQ0EsUUFBTVksV0FBVyxhQUFNZixhQUFhLENBQUNZLEtBQUssQ0FBQ0ksUUFBTixFQUFELENBQW5CLGNBQXlDZixVQUFVLENBQUNXLEtBQUssQ0FBQ0ssT0FBTixFQUFELEVBQWtCSCxJQUFJLENBQUNHLE9BQUwsRUFBbEIsQ0FBbkQsQ0FBakI7QUFFQSx3QkFDRTtBQUFTLGVBQVMsRUFBRUMsdURBQXBCO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFFQywyREFBZDtBQUF5QixZQUFJLEVBQUVSLEdBQS9CO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFUyw0REFBaEI7QUFBQSxvQkFBNkJWLEtBQUssR0FBRyxPQUFILGdCQUFhLHFFQUFDLDZDQUFEO0FBQU0sZ0JBQUksRUFBQyxVQUFYO0FBQXNCLGlCQUFLLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFFVywyREFBaEI7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUVDLDREQUFmO0FBQUEsc0JBQTRCZDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFFZSwyREFBZDtBQUFBLHVCQUEwQlIsV0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBRyxxQkFBUyxFQUFFUyxrRUFBZDtBQUFBLHNCQUFpQ2Y7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFLHFFQUFDLGtEQUFEO0FBQVcsZ0JBQUksRUFBRVA7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsdUJBQXlDTSxJQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFhRCxHQXpCYyxDQUFmO0FBMkJBLHNCQUNFO0FBQVMsYUFBUyxFQUFFaUIsMkRBQXBCO0FBQUEsY0FDR25CO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FqQ0Q7O0tBQU1GLFM7QUFtQ1NBLHdFQUFmO0FBRUFBLFNBQVMsQ0FBQ3NCLFNBQVYsR0FBc0I7QUFDcEJyQixTQUFPLEVBQUVzQixpREFBUyxDQUFDQyxPQUFWLENBQWtCQztBQURQLENBQXRCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRXZlbnRDb3VudGRvd24vaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcbmltcG9ydCBDb3VudGRvd24gZnJvbSAnLi4vQ291bnRkb3duJztcblxuaW1wb3J0IHtcbiAgZXZlbnRMaXN0LFxuICBldmVudCxcbiAgZXZlbnRJbmZvLFxuICBldmVudFRpdGxlLFxuICBldmVudExpbmssXG4gIGV2ZW50RGVzY3JpcHRpb24sXG4gIGV2ZW50SW1hZ2UsXG4gIGV2ZW50RGF0ZSxcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc3QgbW9udGhMb25nTmFtZSA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXG4gICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuY29uc3QgZGF0ZVN0cmluZyA9IChzdGFydCwgZW5kKSA9PiAoc3RhcnQgPT09IGVuZCA/IHN0YXJ0IDogYCR7c3RhcnR9LSR7ZW5kfWApO1xuXG5jb25zdCBFdmVudExpc3QgPSAoeyBjb250ZW50IH0pID0+IHtcbiAgY29uc3QgZXZlbnRzID0gY29udGVudC5tYXAoKHtcbiAgICBuYW1lLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHN0YXJ0LFxuICAgIGVuZCxcbiAgICBpbWFnZSxcbiAgICB1cmwsXG4gIH0pID0+IHtcbiAgICBjb25zdCBmaXJzdCA9IG5ldyBEYXRlKHN0YXJ0KTtcbiAgICBjb25zdCBsYXN0ID0gbmV3IERhdGUoZW5kKTtcbiAgICBjb25zdCBiZWdpblN0cmluZyA9IGAke21vbnRoTG9uZ05hbWVbZmlyc3QuZ2V0TW9udGgoKV19ICR7ZGF0ZVN0cmluZyhmaXJzdC5nZXREYXRlKCksIGxhc3QuZ2V0RGF0ZSgpKX1gO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17ZXZlbnR9IGtleT17YGV2ZW50cyR7bmFtZX1gfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtldmVudExpbmt9IGhyZWY9e3VybH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2V2ZW50SW1hZ2V9PntpbWFnZSA/ICdpbWFnZScgOiA8SWNvbiB0eXBlPVwiY2FsZW5kYXJcIiBjb2xvcj1cInB1cnBsZVwiIC8+fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtldmVudEluZm99PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17ZXZlbnRUaXRsZX0+e25hbWV9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17ZXZlbnREYXRlfT57YmVnaW5TdHJpbmd9IDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17ZXZlbnREZXNjcmlwdGlvbn0+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxDb3VudGRvd24gdGltZT17c3RhcnR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17ZXZlbnRMaXN0fT5cbiAgICAgIHtldmVudHN9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRMaXN0O1xuXG5FdmVudExpc3QucHJvcFR5cGVzID0ge1xuICBjb250ZW50OiBQcm9wVHlwZXMuYXJyYXlPZi5pc1JlcXVpcmVkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/EventCountdown/index.jsx\n");

/***/ })

})