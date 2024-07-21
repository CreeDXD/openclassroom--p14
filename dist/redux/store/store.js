"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _createEmployeSlice = _interopRequireDefault(require("../reducers/createEmployeSlice"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// store.js

const store = (0, _toolkit.configureStore)({
  reducer: {
    employees: _createEmployeSlice.default
    // Add other reducers as needed
  }
});
var _default = exports.default = store;