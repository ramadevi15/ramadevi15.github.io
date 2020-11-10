webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown/index.jsx":
/*!********************************************!*\
  !*** ./src/components/Countdown/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ \"./src/components/Icon/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Countdown/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Countdown/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Countdown = function Countdown(_ref) {\n  _s();\n\n  var time = _ref.time;\n\n  var getTimeLeft = function getTimeLeft(timestamp) {\n    var total = Date.parse(timestamp) - Date.parse(new Date());\n    var seconds = Math.floor(total / 1000 % 60);\n    var minutes = Math.floor(total / 1000 / 60 % 60);\n    var hours = Math.floor(total / (1000 * 60 * 60) % 24);\n    var days = Math.floor(total / (1000 * 60 * 60 * 24));\n    return {\n      total: total,\n      days: days,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(time),\n      countdown = _useState[0],\n      setCountdown = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var interval = null;\n    interval = setInterval(function () {\n      setCountdown(getTimeLeft(countdown).seconds - 1000);\n    }, 1000);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, [countdown]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"countdown\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      type: \"atom\",\n      color: \"red\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(time).seconds\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 10\n      }, _this), \" seconds\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(time).minutes\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 10\n      }, _this), \" minutes\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(time).hours\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 10\n      }, _this), \" hours\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(time).days\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 10\n      }, _this), \" days\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Countdown, \"HXbhM8iefhqt3ozcbezwZ2AIORM=\");\n\n_c = Countdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Countdown);\nCountdown.propTypes = {\n  time: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL2luZGV4LmpzeD9hY2RkIl0sIm5hbWVzIjpbIkNvdW50ZG93biIsInRpbWUiLCJnZXRUaW1lTGVmdCIsInRpbWVzdGFtcCIsInRvdGFsIiwiRGF0ZSIsInBhcnNlIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJob3VycyIsImRheXMiLCJ1c2VTdGF0ZSIsImNvdW50ZG93biIsInNldENvdW50ZG93biIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY291bnRkb3duU3R5bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBSUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDOUIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsU0FBRCxFQUFlO0FBQ2pDLFFBQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFNBQVgsSUFBd0JFLElBQUksQ0FBQ0MsS0FBTCxDQUFXLElBQUlELElBQUosRUFBWCxDQUF0QztBQUNBLFFBQU1FLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVlMLEtBQUssR0FBRyxJQUFULEdBQWlCLEVBQTVCLENBQWhCO0FBQ0EsUUFBTU0sT0FBTyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBWUwsS0FBSyxHQUFHLElBQVIsR0FBZSxFQUFoQixHQUFzQixFQUFqQyxDQUFoQjtBQUNBLFFBQU1PLEtBQUssR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVlMLEtBQUssSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUFOLEdBQTZCLEVBQXhDLENBQWQ7QUFDQSxRQUFNUSxJQUFJLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxLQUFLLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFoQixDQUFiO0FBRUEsV0FBTztBQUNMQSxXQUFLLEVBQUxBLEtBREs7QUFFTFEsVUFBSSxFQUFKQSxJQUZLO0FBR0xELFdBQUssRUFBTEEsS0FISztBQUlMRCxhQUFPLEVBQVBBLE9BSks7QUFLTEgsYUFBTyxFQUFQQTtBQUxLLEtBQVA7QUFPRCxHQWREOztBQUQ4QixrQkFpQklNLHNEQUFRLENBQUNaLElBQUQsQ0FqQlo7QUFBQSxNQWlCdkJhLFNBakJ1QjtBQUFBLE1BaUJaQyxZQWpCWTs7QUFtQjlCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxRQUFRLEdBQUcsSUFBZjtBQUNBQSxZQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQzNCSCxrQkFBWSxDQUFDYixXQUFXLENBQUNZLFNBQUQsQ0FBWCxDQUF1QlAsT0FBdkIsR0FBaUMsSUFBbEMsQ0FBWjtBQUNELEtBRnFCLEVBRW5CLElBRm1CLENBQXRCO0FBR0EsV0FBTztBQUFBLGFBQU1ZLGFBQWEsQ0FBQ0YsUUFBRCxDQUFuQjtBQUFBLEtBQVA7QUFDRCxHQU5RLEVBTU4sQ0FBQ0gsU0FBRCxDQU5NLENBQVQ7QUFRQSxzQkFDRTtBQUFLLGFBQVMsRUFBRU0sMkRBQWhCO0FBQUEsNEJBQ0UscUVBQUMsNkNBQUQ7QUFBTSxVQUFJLEVBQUMsTUFBWDtBQUFrQixXQUFLLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSw4QkFBRztBQUFBLGtCQUFTbEIsV0FBVyxDQUFDRCxJQUFELENBQVgsQ0FBa0JNO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsOEJBQUc7QUFBQSxrQkFBU0wsV0FBVyxDQUFDRCxJQUFELENBQVgsQ0FBa0JTO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQUEsOEJBQUc7QUFBQSxrQkFBU1IsV0FBVyxDQUFDRCxJQUFELENBQVgsQ0FBa0JVO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQUtFO0FBQUEsOEJBQUc7QUFBQSxrQkFBU1QsV0FBVyxDQUFDRCxJQUFELENBQVgsQ0FBa0JXO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBcENEOztHQUFNWixTOztLQUFBQSxTO0FBc0NTQSx3RUFBZjtBQUVBQSxTQUFTLENBQUNxQixTQUFWLEdBQXNCO0FBQ3BCcEIsTUFBSSxFQUFFcUIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFESCxDQUF0QiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nO1xuXG5pbXBvcnQge1xuICBjb3VudGRvd24gYXMgY291bnRkb3duU3R5bGUsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IENvdW50ZG93biA9ICh7IHRpbWUgfSkgPT4ge1xuICBjb25zdCBnZXRUaW1lTGVmdCA9ICh0aW1lc3RhbXApID0+IHtcbiAgICBjb25zdCB0b3RhbCA9IERhdGUucGFyc2UodGltZXN0YW1wKSAtIERhdGUucGFyc2UobmV3IERhdGUoKSk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRvdGFsIC8gMTAwMCkgJSA2MCk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsIC8gMTAwMCAvIDYwKSAlIDYwKTtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKHRvdGFsIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCk7XG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodG90YWwgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsLFxuICAgICAgZGF5cyxcbiAgICAgIGhvdXJzLFxuICAgICAgbWludXRlcyxcbiAgICAgIHNlY29uZHMsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBbY291bnRkb3duLCBzZXRDb3VudGRvd25dID0gdXNlU3RhdGUodGltZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW50ZXJ2YWwgPSBudWxsO1xuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0Q291bnRkb3duKGdldFRpbWVMZWZ0KGNvdW50ZG93bikuc2Vjb25kcyAtIDEwMDApO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW2NvdW50ZG93bl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvdW50ZG93blN0eWxlfT5cbiAgICAgIDxJY29uIHR5cGU9XCJhdG9tXCIgY29sb3I9XCJyZWRcIiAvPlxuICAgICAgPHA+PHN0cm9uZz57Z2V0VGltZUxlZnQodGltZSkuc2Vjb25kc308L3N0cm9uZz4gc2Vjb25kczwvcD5cbiAgICAgIDxwPjxzdHJvbmc+e2dldFRpbWVMZWZ0KHRpbWUpLm1pbnV0ZXN9PC9zdHJvbmc+IG1pbnV0ZXM8L3A+XG4gICAgICA8cD48c3Ryb25nPntnZXRUaW1lTGVmdCh0aW1lKS5ob3Vyc308L3N0cm9uZz4gaG91cnM8L3A+XG4gICAgICA8cD48c3Ryb25nPntnZXRUaW1lTGVmdCh0aW1lKS5kYXlzfTwvc3Ryb25nPiBkYXlzPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duO1xuXG5Db3VudGRvd24ucHJvcFR5cGVzID0ge1xuICB0aW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Countdown/index.jsx\n");

/***/ })

})