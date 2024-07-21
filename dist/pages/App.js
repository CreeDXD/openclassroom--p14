"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../style/css/main.css");
var _mainHomePage = _interopRequireDefault(require("../components/mainHomePage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//page form to add employee

function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_mainHomePage.default, null));
}
var _default = exports.default = App;