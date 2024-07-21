"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MainHomePage;
var _reactRouterDom = require("react-router-dom");
var _react = require("react");
var _reactRedux = require("react-redux");
var _createEmployeSlice = require("../redux/reducers/createEmployeSlice");
var _data = require("../data/data");
var _datePicker = _interopRequireDefault(require("../components/datePicker"));
var _inputText = _interopRequireDefault(require("../components/inputText"));
var _inputSelect = _interopRequireDefault(require("./inputSelect"));
var _inputNumber = _interopRequireDefault(require("./inputNumber"));
var _index = _interopRequireDefault(require("@creedxd/modalcomponent/dist/modal/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//the form of the page form 

function MainHomePage() {
  const [isModalOpen, setIsModalOpen] = (0, _react.useState)(false);
  const [newEmployee, setNewEmployee] = (0, _react.useState)({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    dateToStart: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    department: ''
  });
  const navigate = (0, _reactRouterDom.useNavigate)();
  const dispatch = (0, _reactRedux.useDispatch)();
  const formatDates = inputDate => {
    let parts = inputDate.split('-');
    return "".concat(parts[2], "/").concat(parts[1], "/").concat(parts[0]);
  };
  const saveEmployee = () => {
    let employeeformated = newEmployee;
    employeeformated.dateOfBirth ? employeeformated.dateOfBirth = formatDates(newEmployee.dateOfBirth) : employeeformated.dateOfBirth = newEmployee.dateOfBirth;
    employeeformated.dateOfBirth ? employeeformated.dateToStart = formatDates(newEmployee.dateToStart) : employeeformated.dateToStart = newEmployee.dateToStart;
    dispatch((0, _createEmployeSlice.addEmployee)(employeeformated));

    // Reset form data after saving
    setNewEmployee({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      dateToStart: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      department: ''
    });
    setIsModalOpen(true);
  };
  const handleGoToEmployeList = e => {
    e.preventDefault();
    navigate('/employelist');
  };
  const handleChange = fieldName => e => {
    setNewEmployee({
      ...newEmployee,
      [fieldName]: e.target.value
    });
  };
  const hanldeCloseModal = e => {
    e.preventDefault();
    setIsModalOpen(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, /*#__PURE__*/React.createElement("h1", null, "HRnet")), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("a", {
    href: "employee-list.html",
    onClick: handleGoToEmployeList
  }, "View Current Employees"), /*#__PURE__*/React.createElement("h2", null, "Create Employee"), /*#__PURE__*/React.createElement("form", {
    action: "#",
    id: "create-employee"
  }, /*#__PURE__*/React.createElement(_inputText.default, {
    label: "First Name",
    value: newEmployee.firstName,
    onChange: handleChange('firstName')
  }), /*#__PURE__*/React.createElement(_inputText.default, {
    label: "Last Name",
    value: newEmployee.lastName,
    onChange: handleChange('lastName')
  }), /*#__PURE__*/React.createElement(_datePicker.default, {
    label: "Date of Birth",
    value: newEmployee.dateOfBirth,
    onChange: handleChange('dateOfBirth')
  }), /*#__PURE__*/React.createElement(_datePicker.default, {
    label: "Start Date",
    value: newEmployee.dateToStart,
    onChange: handleChange('dateToStart')
  }), /*#__PURE__*/React.createElement("fieldset", {
    className: "address"
  }, /*#__PURE__*/React.createElement("legend", null, "Address"), /*#__PURE__*/React.createElement(_inputText.default, {
    label: "Street",
    value: newEmployee.street,
    onChange: handleChange('street')
  }), /*#__PURE__*/React.createElement(_inputText.default, {
    label: "City",
    value: newEmployee.city,
    onChange: handleChange('city')
  }), /*#__PURE__*/React.createElement(_inputSelect.default, {
    label: "State",
    value: newEmployee.state,
    onChange: handleChange('state'),
    options: _data.states,
    valueKey: "abbreviation",
    labelKey: "name"
  }), /*#__PURE__*/React.createElement(_inputNumber.default, {
    label: "Zip Code",
    value: newEmployee.zipcode,
    onChange: handleChange('zipcode')
  })), /*#__PURE__*/React.createElement(_inputSelect.default, {
    label: "Department",
    value: newEmployee.department,
    onChange: handleChange('department'),
    options: _data.departments
  })), /*#__PURE__*/React.createElement("button", {
    className: "save_button",
    onClick: saveEmployee
  }, "Save")), /*#__PURE__*/React.createElement(_index.default, {
    isModalOpen: isModalOpen,
    hanldeCloseModal: hanldeCloseModal,
    modalText: "Employee Created!"
  }));
}