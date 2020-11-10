webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/EventCountdown/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/EventCountdown/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ \"./src/components/Icon/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/EventCountdown/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/EventCountdown/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar monthLongName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\nvar Countdown = function Countdown(_ref) {\n  _s();\n\n  var time = _ref.time;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(time),\n      countdown = _useState[0],\n      setCountdown = _useState[1];\n\n  var getTimeLeft = function getTimeLeft(timestamp) {\n    var total = Date.parse(timestamp) - Date.parse(new Date());\n    var seconds = Math.floor(total / 1000 % 60);\n    var minutes = Math.floor(total / 1000 / 60 % 60);\n    var hours = Math.floor(total / (1000 * 60 * 60) % 24);\n    var days = Math.floor(total / (1000 * 60 * 60 * 24));\n    return {\n      total: total,\n      days: days,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var interval = null;\n    interval = setInterval(function () {\n      setCountdown(getTimeLeft(countdown).seconds - 1000);\n    }, 1000);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, [countdown]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(time).seconds\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 10\n      }, _this), \" seconds\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(time).minutes\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 10\n      }, _this), \" minutes\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(time).hours\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 10\n      }, _this), \" hours\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(time).days\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 10\n      }, _this), \" days\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Countdown, \"HXbhM8iefhqt3ozcbezwZ2AIORM=\");\n\n_c = Countdown;\nCountdown.propTypes = {\n  time: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired\n};\n\nvar EventCountdown = function EventCountdown(_ref2) {\n  var content = _ref2.content;\n  var events = content.map(function (_ref3) {\n    var name = _ref3.name,\n        description = _ref3.description,\n        start = _ref3.start,\n        end = _ref3.end,\n        image = _ref3.image,\n        url = _ref3.url;\n    var begin = new Date(start);\n    var beginMonth = monthLongName[begin.getMonth()];\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"event\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventLink\"],\n        href: url,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventImage\"],\n          children: image ? 'image' : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: \"messages\",\n            color: \"blue\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 58\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventInfo\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventTitle\"],\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventDate\"],\n            children: beginMonth\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Countdown, {\n            time: start\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventDescription\"],\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this)\n    }, \"events\".concat(name), false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventList\"],\n    children: events\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = EventCountdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventCountdown);\nEventCountdown.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf.isRequired\n};\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Countdown\");\n$RefreshReg$(_c2, \"EventCountdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRDb3VudGRvd24vaW5kZXguanN4P2YwZDgiXSwibmFtZXMiOlsibW9udGhMb25nTmFtZSIsIkNvdW50ZG93biIsInRpbWUiLCJ1c2VTdGF0ZSIsImNvdW50ZG93biIsInNldENvdW50ZG93biIsImdldFRpbWVMZWZ0IiwidGltZXN0YW1wIiwidG90YWwiLCJEYXRlIiwicGFyc2UiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsImhvdXJzIiwiZGF5cyIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIkV2ZW50Q291bnRkb3duIiwiY29udGVudCIsImV2ZW50cyIsIm1hcCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXJ0IiwiZW5kIiwiaW1hZ2UiLCJ1cmwiLCJiZWdpbiIsImJlZ2luTW9udGgiLCJnZXRNb250aCIsImV2ZW50IiwiZXZlbnRMaW5rIiwiZXZlbnRJbWFnZSIsImV2ZW50SW5mbyIsImV2ZW50VGl0bGUiLCJldmVudERhdGUiLCJldmVudERlc2NyaXB0aW9uIiwiZXZlbnRMaXN0IiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVdBLElBQU1BLGFBQWEsR0FBRyxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlELE1BQWpELEVBQ3BCLE1BRG9CLEVBQ1osUUFEWSxFQUNGLFdBREUsRUFDVyxTQURYLEVBQ3NCLFVBRHRCLEVBQ2tDLFVBRGxDLENBQXRCOztBQUdBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ0lDLHNE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Z0IsMkRBQXBCO0FBQUEsY0FDR2xCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FqQ0Q7O01BQU1GLGM7QUFtQ1NBLDZFQUFmO0FBRUFBLGNBQWMsQ0FBQ0osU0FBZixHQUEyQjtBQUN6QkssU0FBTyxFQUFFSixpREFBUyxDQUFDd0IsT0FBVixDQUFrQnRCO0FBREYsQ0FBM0IiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FdmVudENvdW50ZG93bi9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nO1xuXG5pbXBvcnQge1xuICBldmVudExpc3QsXG4gIGV2ZW50LFxuICBldmVudEluZm8sXG4gIGV2ZW50VGl0bGUsXG4gIGV2ZW50TGluayxcbiAgZXZlbnREZXNjcmlwdGlvbixcbiAgZXZlbnRJbWFnZSxcbiAgZXZlbnREYXRlLFxufSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBtb250aExvbmdOYW1lID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJyxcbiAgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5cbmNvbnN0IENvdW50ZG93biA9ICh7IHRpbWUgfSkgPT4ge1xuICBjb25zdCBbY291bnRkb3duLCBzZXRDb3VudGRvd25dID0gdXNlU3RhdGUodGltZSk7XG5cbiAgY29uc3QgZ2V0VGltZUxlZnQgPSAodGltZXN0YW1wKSA9PiB7XG4gICAgY29uc3QgdG90YWwgPSBEYXRlLnBhcnNlKHRpbWVzdGFtcCkgLSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpO1xuICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0b3RhbCAvIDEwMDApICUgNjApO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0b3RhbCAvIDEwMDAgLyA2MCkgJSA2MCk7XG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0b3RhbCAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpO1xuICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHRvdGFsIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0b3RhbCxcbiAgICAgIGRheXMsXG4gICAgICBob3VycyxcbiAgICAgIG1pbnV0ZXMsXG4gICAgICBzZWNvbmRzLFxuICAgIH07XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW50ZXJ2YWwgPSBudWxsO1xuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0Q291bnRkb3duKGdldFRpbWVMZWZ0KGNvdW50ZG93bikuc2Vjb25kcyAtIDEwMDApO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW2NvdW50ZG93bl0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwPjxzdHJvbmc+e2dldFRpbWVMZWZ0KHRpbWUpLnNlY29uZHN9PC9zdHJvbmc+IHNlY29uZHM8L3A+XG4gICAgICA8cD48c3Ryb25nPntnZXRUaW1lTGVmdCh0aW1lKS5taW51dGVzfTwvc3Ryb25nPiBtaW51dGVzPC9wPlxuICAgICAgPHA+PHN0cm9uZz57Z2V0VGltZUxlZnQodGltZSkuaG91cnN9PC9zdHJvbmc+IGhvdXJzPC9wPlxuICAgICAgPHA+PHN0cm9uZz57Z2V0VGltZUxlZnQodGltZSkuZGF5c308L3N0cm9uZz4gZGF5czwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkNvdW50ZG93bi5wcm9wVHlwZXMgPSB7XG4gIHRpbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IEV2ZW50Q291bnRkb3duID0gKHsgY29udGVudCB9KSA9PiB7XG4gIGNvbnN0IGV2ZW50cyA9IGNvbnRlbnQubWFwKCh7XG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBzdGFydCxcbiAgICBlbmQsXG4gICAgaW1hZ2UsXG4gICAgdXJsLFxuICB9KSA9PiB7XG4gICAgY29uc3QgYmVnaW4gPSBuZXcgRGF0ZShzdGFydCk7XG4gICAgY29uc3QgYmVnaW5Nb250aCA9IG1vbnRoTG9uZ05hbWVbYmVnaW4uZ2V0TW9udGgoKV07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtldmVudH0ga2V5PXtgZXZlbnRzJHtuYW1lfWB9PlxuICAgICAgICA8YSBjbGFzc05hbWU9e2V2ZW50TGlua30gaHJlZj17dXJsfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZXZlbnRJbWFnZX0+e2ltYWdlID8gJ2ltYWdlJyA6IDxJY29uIHR5cGU9XCJtZXNzYWdlc1wiIGNvbG9yPVwiYmx1ZVwiIC8+fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtldmVudEluZm99PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17ZXZlbnRUaXRsZX0+e25hbWV9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17ZXZlbnREYXRlfT57YmVnaW5Nb250aH08L3A+XG4gICAgICAgICAgICA8Q291bnRkb3duIHRpbWU9e3N0YXJ0fSAvPlxuICAgICAgICAgICAgey8qIDxwPntEYXRlLnBhcnNlKGZpbmFsKX0ge2JlZ2luTW9udGh9IHtiZWdpbkRhdGV9LCB7YmVnaW5GdWxsWWVhcn08L3A+ICovfVxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtldmVudERlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L2FydGljbGU+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2V2ZW50TGlzdH0+XG4gICAgICB7ZXZlbnRzfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q291bnRkb3duO1xuXG5FdmVudENvdW50ZG93bi5wcm9wVHlwZXMgPSB7XG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5hcnJheU9mLmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/EventCountdown/index.jsx\n");

/***/ })

})