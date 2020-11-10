webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown/index.jsx":
/*!********************************************!*\
  !*** ./src/components/Countdown/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ \"./src/components/Icon/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Countdown/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Countdown/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Countdown = function Countdown(_ref) {\n  _s();\n\n  var start = _ref.start,\n      end = _ref.end;\n\n  var getTimeLeft = function getTimeLeft(timestamp) {\n    var total = Date.parse(timestamp) - Date.parse(new Date());\n    var seconds = Math.floor(total / 1000 % 60);\n    var minutes = Math.floor(total / 1000 / 60 % 60);\n    var hours = Math.floor(total / (1000 * 60 * 60) % 24);\n    var days = Math.floor(total / (1000 * 60 * 60 * 24));\n    return {\n      total: total,\n      days: days,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(start),\n      countdown = _useState[0],\n      setCountdown = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var interval = null;\n    interval = setInterval(function () {\n      setCountdown(getTimeLeft(countdown).seconds - 1000);\n    }, 1000);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, [countdown]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"countdown\"],\n    children: getTimeLeft(start).total >= 0 && getTimeLeft(end).total >= 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        type: \"calendar\",\n        color: \"purple\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }, _this), getTimeLeft(start).total, \" \", getTimeLeft(end).total, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"column\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          children: getTimeLeft(start).days\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 38\n        }, _this), \" days\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"column\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          children: getTimeLeft(start).hours\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 38\n        }, _this), \" hours\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"column\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          children: getTimeLeft(start).minutes\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 38\n        }, _this), \" minutes\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"column\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          children: getTimeLeft(start).seconds\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 38\n        }, _this), \" seconds\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true) : getTimeLeft(start).total >= 0 && getTimeLeft(end).total >= 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"This event has passed.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Other text\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Countdown, \"4MnWN8HGsJ6LDyM/H17OnVWsBqA=\");\n\n_c = Countdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Countdown);\nCountdown.propTypes = {\n  start: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  end: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL2luZGV4LmpzeD9hY2RkIl0sIm5hbWVzIjpbIkNvdW50ZG93biIsInN0YXJ0IiwiZW5kIiwiZ2V0VGltZUxlZnQiLCJ0aW1lc3RhbXAiLCJ0b3RhbCIsIkRhdGUiLCJwYXJzZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiaG91cnMiLCJkYXlzIiwidXNlU3RhdGUiLCJjb3VudGRvd24iLCJzZXRDb3VudGRvd24iLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNvdW50ZG93blN0eWxlIiwiY29sdW1uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFLQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxLQUFpQixRQUFqQkEsS0FBaUI7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7O0FBQ3BDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFNBQUQsRUFBZTtBQUNqQyxRQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxTQUFYLElBQXdCRSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxJQUFJRCxJQUFKLEVBQVgsQ0FBdEM7QUFDQSxRQUFNRSxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxLQUFLLEdBQUcsSUFBVCxHQUFpQixFQUE1QixDQUFoQjtBQUNBLFFBQU1NLE9BQU8sR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVlMLEtBQUssR0FBRyxJQUFSLEdBQWUsRUFBaEIsR0FBc0IsRUFBakMsQ0FBaEI7QUFDQSxRQUFNTyxLQUFLLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxLQUFLLElB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QSxTQUFTLENBQUN1QixTQUFWLEdBQXNCO0FBQ3BCdEIsT0FBSyxFQUFFdUIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFESjtBQUVwQnhCLEtBQUcsRUFBRXNCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRkYsQ0FBdEIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24vaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcblxuaW1wb3J0IHtcbiAgY291bnRkb3duIGFzIGNvdW50ZG93blN0eWxlLFxuICBjb2x1bW4sXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IENvdW50ZG93biA9ICh7IHN0YXJ0LCBlbmQgfSkgPT4ge1xuICBjb25zdCBnZXRUaW1lTGVmdCA9ICh0aW1lc3RhbXApID0+IHtcbiAgICBjb25zdCB0b3RhbCA9IERhdGUucGFyc2UodGltZXN0YW1wKSAtIERhdGUucGFyc2UobmV3IERhdGUoKSk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRvdGFsIC8gMTAwMCkgJSA2MCk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsIC8gMTAwMCAvIDYwKSAlIDYwKTtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKHRvdGFsIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCk7XG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodG90YWwgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsLFxuICAgICAgZGF5cyxcbiAgICAgIGhvdXJzLFxuICAgICAgbWludXRlcyxcbiAgICAgIHNlY29uZHMsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBbY291bnRkb3duLCBzZXRDb3VudGRvd25dID0gdXNlU3RhdGUoc3RhcnQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGludGVydmFsID0gbnVsbDtcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldENvdW50ZG93bihnZXRUaW1lTGVmdChjb3VudGRvd24pLnNlY29uZHMgLSAxMDAwKTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtjb3VudGRvd25dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb3VudGRvd25TdHlsZX0+XG4gICAgICB7Z2V0VGltZUxlZnQoc3RhcnQpLnRvdGFsID49IDAgJiYgZ2V0VGltZUxlZnQoZW5kKS50b3RhbCA+PSAwXG4gICAgICAgID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8SWNvbiB0eXBlPVwiY2FsZW5kYXJcIiBjb2xvcj1cInB1cnBsZVwiIC8+XG4gICAgICAgICAgICB7Z2V0VGltZUxlZnQoc3RhcnQpLnRvdGFsfSB7Z2V0VGltZUxlZnQoZW5kKS50b3RhbH1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29sdW1ufT48c3Ryb25nPntnZXRUaW1lTGVmdChzdGFydCkuZGF5c308L3N0cm9uZz4gZGF5czwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29sdW1ufT48c3Ryb25nPntnZXRUaW1lTGVmdChzdGFydCkuaG91cnN9PC9zdHJvbmc+IGhvdXJzPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb2x1bW59PjxzdHJvbmc+e2dldFRpbWVMZWZ0KHN0YXJ0KS5taW51dGVzfTwvc3Ryb25nPiBtaW51dGVzPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb2x1bW59PjxzdHJvbmc+e2dldFRpbWVMZWZ0KHN0YXJ0KS5zZWNvbmRzfTwvc3Ryb25nPiBzZWNvbmRzPC9zcGFuPlxuICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgICAgIDogZ2V0VGltZUxlZnQoc3RhcnQpLnRvdGFsID49IDAgJiYgZ2V0VGltZUxlZnQoZW5kKS50b3RhbCA+PSAwXG4gICAgICAgICAgPyA8cD5UaGlzIGV2ZW50IGhhcyBwYXNzZWQuPC9wPlxuICAgICAgICAgIDogPHA+T3RoZXIgdGV4dDwvcD5cbiAgICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duO1xuXG5Db3VudGRvd24ucHJvcFR5cGVzID0ge1xuICBzdGFydDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBlbmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Countdown/index.jsx\n");

/***/ })

})