webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown/index.jsx":
/*!********************************************!*\
  !*** ./src/components/Countdown/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ \"./src/components/Icon/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Countdown/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Countdown/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Countdown = function Countdown(_ref) {\n  _s();\n\n  var time = _ref.time;\n\n  var getTimeLeft = function getTimeLeft(timestamp) {\n    var total = Date.parse(timestamp) - Date.parse(new Date());\n    var seconds = Math.floor(total / 1000 % 60);\n    var minutes = Math.floor(total / 1000 / 60 % 60);\n    var hours = Math.floor(total / (1000 * 60 * 60) % 24);\n    var days = Math.floor(total / (1000 * 60 * 60 * 24));\n    return {\n      total: total,\n      days: days,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(time),\n      countdown = _useState[0],\n      setCountdown = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var interval = null;\n    interval = setInterval(function () {\n      setCountdown(getTimeLeft(countdown).seconds - 1000);\n    }, 1000);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, [countdown]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"countdown\"],\n    children: [time >= 0 ? \"one\" : \"two\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      type: \"messages\",\n      color: \"blue\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"column\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(time).days\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 32\n      }, _this), \" days\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"column\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(time).hours\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 32\n      }, _this), \" hours\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"column\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(time).minutes\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 32\n      }, _this), \" minutes\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"column\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(time).seconds\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 32\n      }, _this), \" seconds\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Countdown, \"HXbhM8iefhqt3ozcbezwZ2AIORM=\");\n\n_c = Countdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Countdown);\nCountdown.propTypes = {\n  time: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL2luZGV4LmpzeD9hY2RkIl0sIm5hbWVzIjpbIkNvdW50ZG93biIsInRpbWUiLCJnZXRUaW1lTGVmdCIsInRpbWVzdGFtcCIsInRvdGFsIiwiRGF0ZSIsInBhcnNlIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJob3VycyIsImRheXMiLCJ1c2VTdGF0ZSIsImNvdW50ZG93biIsInNldENvdW50ZG93biIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY291bnRkb3duU3R5bGUiLCJjb2x1bW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBS0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDOUIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsU0FBRCxFQUFlO0FBQ2pDLFFBQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFNBQVgsSUFBd0JFLElBQUksQ0FBQ0MsS0FBTCxDQUFXLElBQUlELElBQUosRUFBWCxDQUF0QztBQUNBLFFBQU1FLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVlMLEtBQUssR0FBRyxJQUFULEdBQWlCLEVBQTVCLENBQWhCO0FBQ0EsUUFBTU0sT0FBTyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBWUwsS0FBSyxHQUFHLElBQVIsR0FBZSxFQUFoQixHQUFzQixFQUFqQyxDQUFoQjtBQUNBLFFBQU1PLEtBQUssR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVlMLEtBQUssSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUFOLEdBQTZCLEVBQXhDLENBQWQ7QUFDQSxRQUFNUSxJQUFJLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxLQUFLLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFoQixDQUFiO0FBRUEsV0FBTztBQUNMQSxXQUFLLEVBQUxBLEtBREs7QUFFTFEsVUFBSSxFQUFKQSxJQUZLO0FBR0xELFdBQUssRUFBTEEsS0FISztBQUlMRCxhQUFPLEVBQVBBLE9BSks7QUFLTEgsYUFBTyxFQUFQQTtBQUxLLEtBQVA7QUFPRCxHQWREOztBQUQ4QixrQkFpQklNLHNEQUFRLENBQUNaLElBQUQsQ0FqQlo7QUFBQSxNQWlCdkJhLFNBakJ1QjtBQUFBLE1BaUJaQyxZQWpCWTs7QUFtQjlCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxRQUFRLEdBQUcsSUFBZjtBQUNBQSxZQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQzNCSCxrQkFBWSxDQUFDYixXQUFXLENBQUNZLFNBQUQsQ0FBWCxDQUF1QlAsT0FBdkIsR0FBaUMsSUFBbEMsQ0FBWjtBQUNELEtBRnFCLEVBRW5CLElBRm1CLENBQXRCO0FBR0EsV0FBTztBQUFBLGFBQU1ZLGFBQWEsQ0FBQ0YsUUFBRCxDQUFuQjtBQUFBLEtBQVA7QUFDRCxHQU5RLEVBTU4sQ0FBQ0gsU0FBRCxDQU5NLENBQVQ7QUFRQSxzQkFDRTtBQUFLLGFBQVMsRUFBRU0sMkRBQWhCO0FBQUEsZUFDR25CLElBQUksSUFBSSxDQUFSLEdBQVksS0FBWixHQUFvQixLQUR2QixlQUVFLHFFQUFDLDZDQUFEO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBSyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQU0sZUFBUyxFQUFFb0Isd0RBQWpCO0FBQUEsOEJBQXlCO0FBQUEsa0JBQVNuQixXQUFXLENBQUNELElBQUQsQ0FBWCxDQUFrQlc7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQU0sZUFBUyxFQUFFUyx3REFBakI7QUFBQSw4QkFBeUI7QUFBQSxrQkFBU25CLFdBQVcsQ0FBQ0QsSUFBRCxDQUFYLENBQWtCVTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0U7QUFBTSxlQUFTLEVBQUVVLHdEQUFqQjtBQUFBLDhCQUF5QjtBQUFBLGtCQUFTbkIsV0FBVyxDQUFDRCxJQUFELENBQVgsQ0FBa0JTO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFNRTtBQUFNLGVBQVMsRUFBRVcsd0RBQWpCO0FBQUEsOEJBQXlCO0FBQUEsa0JBQVNuQixXQUFXLENBQUNELElBQUQsQ0FBWCxDQUFrQk07QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBckNEOztHQUFNUCxTOztLQUFBQSxTO0FBdUNTQSx3RUFBZjtBQUVBQSxTQUFTLENBQUNzQixTQUFWLEdBQXNCO0FBQ3BCckIsTUFBSSxFQUFFc0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFESCxDQUF0QiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nO1xuXG5pbXBvcnQge1xuICBjb3VudGRvd24gYXMgY291bnRkb3duU3R5bGUsXG4gIGNvbHVtbixcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc3QgQ291bnRkb3duID0gKHsgdGltZSB9KSA9PiB7XG4gIGNvbnN0IGdldFRpbWVMZWZ0ID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0gRGF0ZS5wYXJzZSh0aW1lc3RhbXApIC0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKTtcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodG90YWwgLyAxMDAwKSAlIDYwKTtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWwgLyAxMDAwIC8gNjApICUgNjApO1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigodG90YWwgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KTtcbiAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcih0b3RhbCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG90YWwsXG4gICAgICBkYXlzLFxuICAgICAgaG91cnMsXG4gICAgICBtaW51dGVzLFxuICAgICAgc2Vjb25kcyxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IFtjb3VudGRvd24sIHNldENvdW50ZG93bl0gPSB1c2VTdGF0ZSh0aW1lKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpbnRlcnZhbCA9IG51bGw7XG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRDb3VudGRvd24oZ2V0VGltZUxlZnQoY291bnRkb3duKS5zZWNvbmRzIC0gMTAwMCk7XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbY291bnRkb3duXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y291bnRkb3duU3R5bGV9PlxuICAgICAge3RpbWUgPj0gMCA/IFwib25lXCIgOiBcInR3b1wifVxuICAgICAgPEljb24gdHlwZT1cIm1lc3NhZ2VzXCIgY29sb3I9XCJibHVlXCIgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29sdW1ufT48c3Ryb25nPntnZXRUaW1lTGVmdCh0aW1lKS5kYXlzfTwvc3Ryb25nPiBkYXlzPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb2x1bW59PjxzdHJvbmc+e2dldFRpbWVMZWZ0KHRpbWUpLmhvdXJzfTwvc3Ryb25nPiBob3Vyczwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29sdW1ufT48c3Ryb25nPntnZXRUaW1lTGVmdCh0aW1lKS5taW51dGVzfTwvc3Ryb25nPiBtaW51dGVzPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb2x1bW59PjxzdHJvbmc+e2dldFRpbWVMZWZ0KHRpbWUpLnNlY29uZHN9PC9zdHJvbmc+IHNlY29uZHM8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247XG5cbkNvdW50ZG93bi5wcm9wVHlwZXMgPSB7XG4gIHRpbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Countdown/index.jsx\n");

/***/ })

})