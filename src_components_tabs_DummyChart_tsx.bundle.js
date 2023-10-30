"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcms"] = self["webpackChunkcms"] || []).push([["src_components_tabs_DummyChart_tsx"],{

/***/ "./src/components/tabs/DummyChart.tsx":
/*!********************************************!*\
  !*** ./src/components/tabs/DummyChart.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n\r\nvar data = [\r\n    { title: \"Family Home\", value: 92 },\r\n    { title: \"Apartment\", value: 80 },\r\n    { title: \"Villa\", value: 75 },\r\n    { title: \"Studio\", value: 60 },\r\n];\r\nvar DummyChart = function () {\r\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"chart\" }, { children: data.map(function (item) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"bar\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"bar-inner\", style: { height: item.value + \"%\" } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", __assign({ className: \"value\" }, { children: item.value })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"labels\" }, { children: item.title }))] }), item.title)); }) })));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (DummyChart);\r\n\n\n//# sourceURL=webpack://cms/./src/components/tabs/DummyChart.tsx?");

/***/ })

}]);