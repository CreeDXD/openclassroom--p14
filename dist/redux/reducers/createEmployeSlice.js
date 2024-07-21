"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectEmployees = exports.default = exports.addEmployee = void 0;
var _toolkit = require("@reduxjs/toolkit");
// authSlice.jsx
// addEmployee action to add employee from the form

const employeeSlice = (0, _toolkit.createSlice)({
  name: 'employees',
  initialState: {
    list: []
  },
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
    }
  }
});
const {
  addEmployee
} = employeeSlice.actions;
exports.addEmployee = addEmployee;
const selectEmployees = state => state.employees.list;
exports.selectEmployees = selectEmployees;
var _default = exports.default = employeeSlice.reducer;