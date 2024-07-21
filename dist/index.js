"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./pages/App"));
var _reactRouterDom = require("react-router-dom");
var _employeList = _interopRequireDefault(require("./pages/employe-list"));
var _reactRedux = require("react-redux");
var _store = _interopRequireDefault(require("./redux/store/store"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//installer redux et reduxtoolkit

const root = _client.default.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: _store.default
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, {
  basename: "/openclassroom--p14/"
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/",
  element: /*#__PURE__*/_react.default.createElement(_App.default, null)
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/employelist",
  element: /*#__PURE__*/_react.default.createElement(_employeList.default, null)
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "*",
  element: /*#__PURE__*/_react.default.createElement(_App.default, null)
}))))));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals