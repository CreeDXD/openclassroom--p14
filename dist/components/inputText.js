"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// input text component

const InputText = _ref => {
  let {
    label,
    value,
    onChange
  } = _ref;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: label
  }, label), /*#__PURE__*/React.createElement("input", {
    id: label,
    type: "text",
    value: value,
    onChange: onChange,
    placeholder: label
  }));
};
var _default = exports.default = InputText;