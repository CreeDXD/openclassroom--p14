"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// input select component

const InputSelect = _ref => {
  let {
    label,
    value,
    onChange,
    options,
    valueKey,
    labelKey
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: label
  }, label), /*#__PURE__*/_react.default.createElement("select", {
    id: label,
    value: value,
    onChange: onChange,
    placeholder: label
  }, options.map((option, index) => /*#__PURE__*/_react.default.createElement("option", {
    key: index,
    value: option[valueKey] || option
  }, option[labelKey] || option))));
};
var _default = exports.default = InputSelect;