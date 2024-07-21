"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactTable = require("react-table");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } //table of the employee page
const EmployeeTable = _ref => {
  let {
    columns,
    data
  } = _ref;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    page,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage
  } = (0, _reactTable.useTable)({
    columns,
    data,
    initialState: {
      pageIndex: 0,
      pageSize: 3
    }
  }, _reactTable.useGlobalFilter, _reactTable.usePagination);
  const {
    globalFilter,
    pageIndex,
    pageSize
  } = state;
  (0, _react.useMemo)(() => columns, [columns]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "search"
  }, "Search by Task:\xA0", /*#__PURE__*/_react.default.createElement("input", {
    id: "search",
    type: "text",
    value: globalFilter || '',
    onChange: e => setGlobalFilter(e.target.value),
    placeholder: "Search..."
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("table", _extends({}, getTableProps(), {
    style: {
      border: '1px solid black',
      width: '100%'
    }
  }), /*#__PURE__*/_react.default.createElement("thead", null, headerGroups.map(headerGroup => /*#__PURE__*/_react.default.createElement("tr", _extends({}, headerGroup.getHeaderGroupProps(), {
    style: {
      background: '#f2f2f2'
    }
  }), headerGroup.headers.map(column => /*#__PURE__*/_react.default.createElement("th", _extends({}, column.getHeaderProps(), {
    style: {
      padding: '10px',
      borderBottom: '1px solid black'
    }
  }), column.render('Header')))))), /*#__PURE__*/_react.default.createElement("tbody", getTableBodyProps(), page.map(row => {
    prepareRow(row);
    return /*#__PURE__*/_react.default.createElement("tr", _extends({}, row.getRowProps(), {
      style: {
        borderBottom: '1px solid black'
      }
    }), row.cells.map(cell => /*#__PURE__*/_react.default.createElement("td", _extends({}, cell.getCellProps(), {
      style: {
        padding: '10px'
      }
    }), cell.render('Cell'))));
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => previousPage(),
    disabled: !canPreviousPage
  }, "Previous Page"), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      margin: '0 10px'
    }
  }, "Page ", rows.length > 0 ? pageIndex + 1 : 0, " of ", Math.max(Math.ceil(rows.length / pageSize), 0)), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => nextPage(),
    disabled: !canNextPage
  }, "Next Page")));
};
var _default = exports.default = EmployeeTable;