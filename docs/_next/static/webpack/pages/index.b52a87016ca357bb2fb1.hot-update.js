webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown/index.jsx":
/*!********************************************!*\
  !*** ./src/components/Countdown/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ \"./src/components/Icon/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Countdown/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Countdown/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Countdown = function Countdown(_ref) {\n  _s();\n\n  var start = _ref.start,\n      end = _ref.end;\n\n  var getTimeLeft = function getTimeLeft(timestamp) {\n    var total = Date.parse(timestamp) - Date.parse(new Date());\n    var seconds = Math.floor(total / 1000 % 60);\n    var minutes = Math.floor(total / 1000 / 60 % 60);\n    var hours = Math.floor(total / (1000 * 60 * 60) % 24);\n    var days = Math.floor(total / (1000 * 60 * 60 * 24));\n    return {\n      total: total,\n      days: days,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n\n  var displayBoard = function displayBoard(s, e) {\n    var string = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"This event has passed.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 18\n    }, _this);\n\n    if (getTimeLeft(s).total >= 0 && getTimeLeft(e).total >= 0) {\n      /*#__PURE__*/\n      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          type: \"calendar\",\n          color: \"purple\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"column\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: getTimeLeft(s).days\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 34\n          }, _this), \" days\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"column\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: getTimeLeft(s).hours\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 34\n          }, _this), \" hours\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"column\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: getTimeLeft(s).minutes\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 34\n          }, _this), \" minutes\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"column\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: getTimeLeft(s).seconds\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 34\n          }, _this), \" seconds\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true);\n    }\n\n    if (getTimeLeft(s).total <= 0 && getTimeLeft(e).total >= 0) {\n      string = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"This event is going on now!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 16\n      }, _this);\n    }\n\n    return string;\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(start),\n      countdown = _useState[0],\n      setCountdown = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var interval = null;\n    interval = setInterval(function () {\n      setCountdown(getTimeLeft(countdown).seconds - 1000);\n    }, 1000);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, [countdown]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"countdown\"],\n    children: board(start, end)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Countdown, \"4MnWN8HGsJ6LDyM/H17OnVWsBqA=\");\n\n_c = Countdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Countdown);\nCountdown.propTypes = {\n  start: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  end: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL2luZGV4LmpzeD9hY2RkIl0sIm5hbWVzIjpbIkNvdW50ZG93biIsInN0YXJ0IiwiZW5kIiwiZ2V0VGltZUxlZnQiLCJ0aW1lc3RhbXAiLCJ0b3RhbCIsIkRhdGUiLCJwYXJzZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiaG91cnMiLCJkYXlzIiwiZGlzcGxheUJvYXJkIiwicyIsImUiLCJzdHJpbmciLCJjb2x1bW4iLCJ1c2VTdGF0ZSIsImNvdW50ZG93biIsInNldENvdW50ZG93biIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY291bnRkb3duU3R5bGUiLCJib2FyZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBS0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsS0FBaUIsUUFBakJBLEtBQWlCO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVOztBQUNwQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxTQUFELEVBQWU7QUFDakMsUUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsU0FBWCxJQUF3QkUsSUFBSSxDQUFDQyxLQUFMLENBQVcsSUFBSUQsSUFBSixFQUFYLENBQXRDO0FBQ0EsUUFBTUUsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBWUwsS0FBSyxHQUFHLElBQVQsR0FBaUIsRUFBNUIsQ0FBaEI7QUFDQSxRQUFNTSxPQUFPLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxLQUFLLEdBQUcsSUFBUixHQUFlLEVBQWhCLEdBQXNCLEVBQWpDLENBQWhCO0FBQ0EsUUFBTU8sS0FBSyxHQUFH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QVMsRUFBRU0sMkRBQWhCO0FBQUEsY0FDR0MsS0FBSyxDQUFDMUIsS0FBRCxFQUFRQyxHQUFSO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FqREQ7O0dBQU1GLFM7O0tBQUFBLFM7QUFtRFNBLHdFQUFmO0FBRUFBLFNBQVMsQ0FBQzRCLFNBQVYsR0FBc0I7QUFDcEIzQixPQUFLLEVBQUU0QixpREFBUyxDQUFDWixNQUFWLENBQWlCYSxVQURKO0FBRXBCNUIsS0FBRyxFQUFFMkIsaURBQVMsQ0FBQ1osTUFBVixDQUFpQmE7QUFGRixDQUF0QiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nO1xuXG5pbXBvcnQge1xuICBjb3VudGRvd24gYXMgY291bnRkb3duU3R5bGUsXG4gIGNvbHVtbixcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc3QgQ291bnRkb3duID0gKHsgc3RhcnQsIGVuZCB9KSA9PiB7XG4gIGNvbnN0IGdldFRpbWVMZWZ0ID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0gRGF0ZS5wYXJzZSh0aW1lc3RhbXApIC0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKTtcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodG90YWwgLyAxMDAwKSAlIDYwKTtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWwgLyAxMDAwIC8gNjApICUgNjApO1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigodG90YWwgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KTtcbiAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcih0b3RhbCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG90YWwsXG4gICAgICBkYXlzLFxuICAgICAgaG91cnMsXG4gICAgICBtaW51dGVzLFxuICAgICAgc2Vjb25kcyxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlCb2FyZCA9IChzLCBlKSA9PiB7XG4gICAgbGV0IHN0cmluZyA9IDxwPlRoaXMgZXZlbnQgaGFzIHBhc3NlZC48L3A+O1xuICAgIGlmIChnZXRUaW1lTGVmdChzKS50b3RhbCA+PSAwICYmIGdldFRpbWVMZWZ0KGUpLnRvdGFsID49IDApIHtcbiAgICAgIDw+XG4gICAgICAgIDxJY29uIHR5cGU9XCJjYWxlbmRhclwiIGNvbG9yPVwicHVycGxlXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb2x1bW59PjxzdHJvbmc+e2dldFRpbWVMZWZ0KHMpLmRheXN9PC9zdHJvbmc+IGRheXM8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29sdW1ufT48c3Ryb25nPntnZXRUaW1lTGVmdChzKS5ob3Vyc308L3N0cm9uZz4gaG91cnM8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29sdW1ufT48c3Ryb25nPntnZXRUaW1lTGVmdChzKS5taW51dGVzfTwvc3Ryb25nPiBtaW51dGVzPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NvbHVtbn0+PHN0cm9uZz57Z2V0VGltZUxlZnQocykuc2Vjb25kc308L3N0cm9uZz4gc2Vjb25kczwvc3Bhbj5cbiAgICAgIDwvPjtcbiAgICB9XG4gICAgaWYgKGdldFRpbWVMZWZ0KHMpLnRvdGFsIDw9IDAgJiYgZ2V0VGltZUxlZnQoZSkudG90YWwgPj0gMCkge1xuICAgICAgc3RyaW5nID0gPHA+VGhpcyBldmVudCBpcyBnb2luZyBvbiBub3chPC9wPjtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICBjb25zdCBbY291bnRkb3duLCBzZXRDb3VudGRvd25dID0gdXNlU3RhdGUoc3RhcnQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGludGVydmFsID0gbnVsbDtcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldENvdW50ZG93bihnZXRUaW1lTGVmdChjb3VudGRvd24pLnNlY29uZHMgLSAxMDAwKTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtjb3VudGRvd25dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb3VudGRvd25TdHlsZX0+XG4gICAgICB7Ym9hcmQoc3RhcnQsIGVuZCl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247XG5cbkNvdW50ZG93bi5wcm9wVHlwZXMgPSB7XG4gIHN0YXJ0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGVuZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Countdown/index.jsx\n");

/***/ })

})