webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/EventCountdown/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/EventCountdown/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ \"./src/components/Icon/index.jsx\");\n/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Countdown */ \"./src/components/Countdown/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/EventCountdown/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/EventCountdown/index.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar monthLongName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\nvar dateString = function dateString(firstDate, lastDate, firstMonth, lastMonth, firstYear, lastYear) {\n  var month = firstMonth === lastMonth ? \"\".concat(monthLongName[firstMonth], \" \").concat(firstDate, \"-\").concat(lastDate, \", \").concat(firstYear) : \"\".concat(monthLongName[firstMonth], \" \").concat(firstDate, \"-\").concat(monthLongName[lastMonth], \" \").concat(lastDate);\n  return month;\n}; // firstDate === lastDate ? firstDate : `${firstDate}-${lastDate}`;\n// November 31 - December 1;\n\n\nvar EventList = function EventList(_ref) {\n  var content = _ref.content;\n  var events = content.map(function (_ref2) {\n    var name = _ref2.name,\n        description = _ref2.description,\n        start = _ref2.start,\n        end = _ref2.end,\n        image = _ref2.image,\n        url = _ref2.url;\n    var first = new Date(start);\n    var last = new Date(end);\n    var beginString = dateString(first.getDate(), last.getDate(), first.getMonth(), last.getMonth(), first.getFullYear(), last.getFullYear());\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"event\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventLink\"],\n        href: url,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventImage\"],\n          children: image ? 'image' : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            type: \"calendar\",\n            color: \"purple\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 58\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventInfo\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventTitle\"],\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventDate\"],\n            children: [beginString, \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventDescription\"],\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Countdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            time: start\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, \"events\".concat(name), false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventList\"],\n    children: events\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = EventList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventList);\nEventList.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"EventList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRDb3VudGRvd24vaW5kZXguanN4P2YwZDgiXSwibmFtZXMiOlsibW9udGhMb25nTmFtZSIsImRhdGVTdHJpbmciLCJmaXJzdERhdGUiLCJsYXN0RGF0ZSIsImZpcnN0TW9udGgiLCJsYXN0TW9udGgiLCJmaXJzdFllYXIiLCJsYXN0WWVhciIsIm1vbnRoIiwiRXZlbnRMaXN0IiwiY29udGVudCIsImV2ZW50cyIsIm1hcCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXJ0IiwiZW5kIiwiaW1hZ2UiLCJ1cmwiLCJmaXJzdCIsIkRhdGUiLCJsYXN0IiwiYmVnaW5TdHJpbmciLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImV2ZW50IiwiZXZlbnRMaW5rIiwiZXZlbnRJbWFnZSIsImV2ZW50SW5mbyIsImV2ZW50VGl0bGUiLCJldmVudERhdGUiLCJldmVudERlc2NyaXB0aW9uIiwiZXZlbnRMaXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFXQSxJQUFNQSxhQUFhLEdBQUcsQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixPQUF4QixFQUFpQyxPQUFqQyxFQUEwQyxLQUExQyxFQUFpRCxNQUFqRCxFQUNwQixNQURvQixFQUNaLFFBRFksRUFDRixXQURFLEVBQ1csU0FEWCxFQUNzQixVQUR0QixFQUNrQyxVQURsQyxDQUF0Qjs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxTQUFELEVBQVlDLFFBQVosRUFBc0JDLFVBQXRCLEVBQWtDQyxTQUFsQyxFQUE2Q0MsU0FBN0MsRUFBd0RDLFFBQXhELEVBQXFFO0FBQ3RGLE1BQU1DLEtBQUssR0FBSUosVUFBVSxLQUFLQyxTQUFmLGFBQ1JMLGFBQWEsQ0FBQ0ksVUFBRCxDQURMLGNBQ3FCRixTQURyQixjQUNrQ0MsUUFEbEMsZUFDK0NHLFNBRC9DLGNBRVJOLGFBQWEsQ0FBQ0ksVUFBRCxDQUZMLGNBRXFCRixTQUZyQixjQUVrQ0YsYUFBYSxDQUFDSyxTQUFELENBRi9DLGNBRThERixRQUY5RCxDQUFmO0FBSUEsU0FBT0ssS0FBUDtBQUNELENBTkQsQyxDQU9BO0FBR0E7OztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2pDLE1BQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxHQUFSLENBQVksaUJBT3JCO0FBQUEsUUFOSkMsSUFNSSxTQU5KQSxJQU1JO0FBQUEsUUFMSkMsV0FLSSxTQUxKQSxXQUtJO0FBQUEsUUFKSkMsS0FJSSxTQUpKQSxLQUlJO0FBQUEsUUFISkMsR0FHSSxTQUhKQSxHQUdJO0FBQUEsUUFGSkMsS0FFSSxTQUZKQSxLQUVJO0FBQUEsUUFESkMsR0FDSSxTQURKQSxHQUNJO0FBQ0osUUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosQ0FBU0wsS0FBVCxDQUFkO0FBQ0EsUUFBTU0sSUFBSSxHQUFHLElBQUlELElBQUosQ0FBU0osR0FBVCxDQUFiO0FBQ0EsUUFBTU0sV0FBVyxHQUFHckIsVUFBVSxDQUFDa0IsS0FBSyxDQUFDSSxPQUFOLEVBQUQsRUFBa0JGLElBQUksQ0FBQ0UsT0FBTCxFQUFsQixFQUFrQ0osS0FBSyxDQUFDSyxRQUFOLEVBQWxDLEVBQW9ESCxJQUFJLENBQUNHLFFBQUwsRUFBcEQsRUFBcUVMLEtBQUssQ0FBQ00sV0FBTixFQUFyRSxFQUEwRkosSUFBSSxDQUFDSSxXQUFMLEVBQTFGLENBQTlCO0FBRUEsd0JBQ0U7QUFBUyxlQUFTLEVBQUVDLHVEQUFwQjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBRUMsMkRBQWQ7QUFBeUIsWUFBSSxFQUFFVCxHQUEvQjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRVUsNERBQWhCO0FBQUEsb0JBQTZCWCxLQUFLLEdBQUcsT0FBSCxnQkFBYSxxRUFBQyw2Q0FBRDtBQUFNLGdCQUFJLEVBQUMsVUFBWDtBQUFzQixpQkFBSyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRVksMkRBQWhCO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFFQyw0REFBZjtBQUFBLHNCQUE0QmpCO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFHLHFCQUFTLEVBQUVrQiwyREFBZDtBQUFBLHVCQUEwQlQsV0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBRyxxQkFBUyxFQUFFVSxrRUFBZDtBQUFBLHNCQUFpQ2xCO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRSxxRUFBQyxrREFBRDtBQUFXLGdCQUFJLEVBQUVDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHVCQUF5Q0YsSUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBYUQsR0F6QmMsQ0FBZjtBQTJCQSxzQkFDRTtBQUFTLGFBQVMsRUFBRW9CLDJEQUFwQjtBQUFBLGNBQ0d0QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBakNEOztLQUFNRixTO0FBbUNTQSx3RUFBZjtBQUVBQSxTQUFTLENBQUN5QixTQUFWLEdBQXNCO0FBQ3BCeEIsU0FBTyxFQUFFeUIsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkM7QUFEUCxDQUF0QiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0V2ZW50Q291bnRkb3duL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcbmltcG9ydCBDb3VudGRvd24gZnJvbSAnLi4vQ291bnRkb3duJztcblxuaW1wb3J0IHtcbiAgZXZlbnRMaXN0LFxuICBldmVudCxcbiAgZXZlbnRJbmZvLFxuICBldmVudFRpdGxlLFxuICBldmVudExpbmssXG4gIGV2ZW50RGVzY3JpcHRpb24sXG4gIGV2ZW50SW1hZ2UsXG4gIGV2ZW50RGF0ZSxcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc3QgbW9udGhMb25nTmFtZSA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXG4gICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuY29uc3QgZGF0ZVN0cmluZyA9IChmaXJzdERhdGUsIGxhc3REYXRlLCBmaXJzdE1vbnRoLCBsYXN0TW9udGgsIGZpcnN0WWVhciwgbGFzdFllYXIpID0+IHtcbiAgY29uc3QgbW9udGggPSAoZmlyc3RNb250aCA9PT0gbGFzdE1vbnRoXG4gICAgPyBgJHttb250aExvbmdOYW1lW2ZpcnN0TW9udGhdfSAke2ZpcnN0RGF0ZX0tJHtsYXN0RGF0ZX0sICR7Zmlyc3RZZWFyfWBcbiAgICA6IGAke21vbnRoTG9uZ05hbWVbZmlyc3RNb250aF19ICR7Zmlyc3REYXRlfS0ke21vbnRoTG9uZ05hbWVbbGFzdE1vbnRoXX0gJHtsYXN0RGF0ZX1gKTtcblxuICByZXR1cm4gbW9udGg7XG59O1xuLy8gZmlyc3REYXRlID09PSBsYXN0RGF0ZSA/IGZpcnN0RGF0ZSA6IGAke2ZpcnN0RGF0ZX0tJHtsYXN0RGF0ZX1gO1xuXG5cbi8vIE5vdmVtYmVyIDMxIC0gRGVjZW1iZXIgMTtcblxuY29uc3QgRXZlbnRMaXN0ID0gKHsgY29udGVudCB9KSA9PiB7XG4gIGNvbnN0IGV2ZW50cyA9IGNvbnRlbnQubWFwKCh7XG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBzdGFydCxcbiAgICBlbmQsXG4gICAgaW1hZ2UsXG4gICAgdXJsLFxuICB9KSA9PiB7XG4gICAgY29uc3QgZmlyc3QgPSBuZXcgRGF0ZShzdGFydCk7XG4gICAgY29uc3QgbGFzdCA9IG5ldyBEYXRlKGVuZCk7XG4gICAgY29uc3QgYmVnaW5TdHJpbmcgPSBkYXRlU3RyaW5nKGZpcnN0LmdldERhdGUoKSwgbGFzdC5nZXREYXRlKCksIGZpcnN0LmdldE1vbnRoKCksIGxhc3QuZ2V0TW9udGgoKSwgZmlyc3QuZ2V0RnVsbFllYXIoKSwgbGFzdC5nZXRGdWxsWWVhcigpKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2V2ZW50fSBrZXk9e2BldmVudHMke25hbWV9YH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17ZXZlbnRMaW5rfSBocmVmPXt1cmx9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtldmVudEltYWdlfT57aW1hZ2UgPyAnaW1hZ2UnIDogPEljb24gdHlwZT1cImNhbGVuZGFyXCIgY29sb3I9XCJwdXJwbGVcIiAvPn08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZXZlbnRJbmZvfT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2V2ZW50VGl0bGV9PntuYW1lfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2V2ZW50RGF0ZX0+e2JlZ2luU3RyaW5nfSA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2V2ZW50RGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8Q291bnRkb3duIHRpbWU9e3N0YXJ0fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L2FydGljbGU+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2V2ZW50TGlzdH0+XG4gICAgICB7ZXZlbnRzfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50TGlzdDtcblxuRXZlbnRMaXN0LnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLmFycmF5T2YuaXNSZXF1aXJlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/EventCountdown/index.jsx\n");

/***/ })

})