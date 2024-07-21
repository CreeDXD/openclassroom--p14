"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// input number component

const InputNumber = _ref => {
  let {
    label,
    value,
    onChange
  } = _ref;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: label
  }, label), /*#__PURE__*/React.createElement("input", {
    id: label,
    type: "number",
    value: value,
    onChange: onChange,
    placeholder: label,
    min: "0"
  }));
};
var _default = exports.default = InputNumber;