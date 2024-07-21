"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EmployeList;
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _createEmployeSlice = require("../redux/reducers/createEmployeSlice");
var _EmployeeTable = _interopRequireDefault(require("../components/EmployeeTable"));
var _data = require("../data/data");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// page employee with the table of the employees

function EmployeList() {
  const navigate = (0, _reactRouterDom.useNavigate)();
  const employees = (0, _reactRedux.useSelector)(_createEmployeSlice.selectEmployees);
  const handleGoHome = e => {
    e.preventDefault();
    navigate('/');
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "employee-div",
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", null, "Current Employees"), /*#__PURE__*/React.createElement(_EmployeeTable.default, {
    columns: _data.columns,
    data: employees
  }), /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    onClick: handleGoHome
  }, "Home"));
}