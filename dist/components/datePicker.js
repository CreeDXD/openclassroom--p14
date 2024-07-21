"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// input date component

const DatePicker = _ref => {
  let {
    label,
    value,
    onChange
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: label
  }, label), /*#__PURE__*/_react.default.createElement("input", {
    id: label,
    type: "date",
    value: value,
    onChange: onChange,
    placeholder: label
  }));
};
var _default = exports.default = DatePicker;