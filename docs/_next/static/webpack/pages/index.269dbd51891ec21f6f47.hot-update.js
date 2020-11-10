webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/EventCountdown/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/EventCountdown/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ \"./src/components/Icon/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/EventCountdown/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/EventCountdown/index.jsx\",\n    _this = undefined;\n\n\n\n\nvar monthLongNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\nvar EventCountdown = function EventCountdown(_ref) {\n  var content = _ref.content;\n  var events = content.map(function (_ref2) {\n    var name = _ref2.name,\n        description = _ref2.description,\n        start = _ref2.start,\n        image = _ref2.image,\n        url = _ref2.url;\n    var begin = new Date(start);\n    var beginMonth = monthLongNames[begin.getMonth()];\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"event\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventLink\"],\n        href: url,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventImage\"],\n          children: image ? 'image' : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            type: \"messages\",\n            color: \"blue\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 56\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventTitle\"],\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventDate\"],\n          children: beginMonth\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventDescription\"],\n          children: description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }, _this)\n    }, \"events\".concat(name), false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"eventList\"],\n    children: events\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = EventCountdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventCountdown);\nEventCountdown.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"EventCountdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRDb3VudGRvd24vaW5kZXguanN4P2YwZDgiXSwibmFtZXMiOlsibW9udGhMb25nTmFtZXMiLCJFdmVudENvdW50ZG93biIsImNvbnRlbnQiLCJldmVudHMiLCJtYXAiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzdGFydCIsImltYWdlIiwidXJsIiwiYmVnaW4iLCJEYXRlIiwiYmVnaW5Nb250aCIsImdldE1vbnRoIiwiZXZlbnQiLCJldmVudExpbmsiLCJldmVudEltYWdlIiwiZXZlbnRUaXRsZSIsImV2ZW50RGF0ZSIsImV2ZW50RGVzY3JpcHRpb24iLCJldmVudExpc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQVVBLElBQU1BLGNBQWMsR0FBRyxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlELE1BQWpELEVBQ3JCLE1BRHFCLEVBQ2IsUUFEYSxFQUNILFdBREcsRUFDVSxTQURWLEVBQ3FCLFVBRHJCLEVBQ2lDLFVBRGpDLENBQXZCOztBQUdBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDdEMsTUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUNFLEdBQVIsQ0FBWSxpQkFNckI7QUFBQSxRQUxKQyxJQUtJLFNBTEpBLElBS0k7QUFBQSxRQUpKQyxXQUlJLFNBSkpBLFdBSUk7QUFBQSxRQUhKQyxLQUdJLFNBSEpBLEtBR0k7QUFBQSxRQUZKQyxLQUVJLFNBRkpBLEtBRUk7QUFBQSxRQURKQyxHQUNJLFNBREpBLEdBQ0k7QUFDSixRQUFNQyxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTSixLQUFULENBQWQ7QUFDQSxRQUFNSyxVQUFVLEdBQUdaLGNBQWMsQ0FBQ1UsS0FBSyxDQUFDRyxRQUFOLEVBQUQsQ0FBakM7QUFFQSx3QkFDQTtBQUFTLGVBQVMsRUFBRUMsdURBQXBCO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFFQywyREFBZDtBQUF5QixZQUFJLEVBQUVOLEdBQS9CO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFTyw0REFBaEI7QUFBQSxvQkFBNkJSLEtBQUssR0FBRyxPQUFILGdCQUFhLHFFQUFDLDZDQUFEO0FBQU0sZ0JBQUksRUFBQyxVQUFYO0FBQXNCLGlCQUFLLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSSxtQkFBUyxFQUFFUyw0REFBZjtBQUFBLG9CQUE0Qlo7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUcsbUJBQVMsRUFBRWEsMkRBQWQ7QUFBQSxvQkFBMEJOO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFHLG1CQUFTLEVBQUVPLGtFQUFkO0FBQUEsb0JBQWlDYjtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHVCQUF5Q0QsSUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBO0FBVUgsR0FwQmdCLENBQWY7QUFzQkEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVlLDJEQUFwQjtBQUFBLGNBQ0dqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBNUJEOztLQUFNRixjO0FBOEJTQSw2RUFBZjtBQUVBQSxjQUFjLENBQUNvQixTQUFmLEdBQTJCO0FBQ3pCbkIsU0FBTyxFQUFFb0IsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkM7QUFERixDQUEzQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0V2ZW50Q291bnRkb3duL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcblxuaW1wb3J0IHtcbiAgZXZlbnRMaXN0LFxuICBldmVudCxcbiAgZXZlbnRUaXRsZSxcbiAgZXZlbnRMaW5rLFxuICBldmVudERlc2NyaXB0aW9uLFxuICBldmVudEltYWdlLFxuICBldmVudERhdGUsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IG1vbnRoTG9uZ05hbWVzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJyxcbiAgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5cbmNvbnN0IEV2ZW50Q291bnRkb3duID0gKHsgY29udGVudCB9KSA9PiB7XG4gIGNvbnN0IGV2ZW50cyA9IGNvbnRlbnQubWFwKCh7XG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBzdGFydCxcbiAgICBpbWFnZSxcbiAgICB1cmwsXG4gIH0pID0+IHtcbiAgICBjb25zdCBiZWdpbiA9IG5ldyBEYXRlKHN0YXJ0KTtcbiAgICBjb25zdCBiZWdpbk1vbnRoID0gbW9udGhMb25nTmFtZXNbYmVnaW4uZ2V0TW9udGgoKV07XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2V2ZW50fSBrZXk9e2BldmVudHMke25hbWV9YH0+XG4gICAgICA8YSBjbGFzc05hbWU9e2V2ZW50TGlua30gaHJlZj17dXJsfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2V2ZW50SW1hZ2V9PntpbWFnZSA/ICdpbWFnZScgOiA8SWNvbiB0eXBlPVwibWVzc2FnZXNcIiBjb2xvcj1cImJsdWVcIiAvPn08L2Rpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17ZXZlbnRUaXRsZX0+e25hbWV9PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtldmVudERhdGV9PntiZWdpbk1vbnRofTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtldmVudERlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9hPlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn0pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtldmVudExpc3R9PlxuICAgICAge2V2ZW50c31cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudENvdW50ZG93bjtcblxuRXZlbnRDb3VudGRvd24ucHJvcFR5cGVzID0ge1xuICBjb250ZW50OiBQcm9wVHlwZXMuYXJyYXlPZi5pc1JlcXVpcmVkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/EventCountdown/index.jsx\n");

/***/ })

})