"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var AttendanceCompare_1 = require("../components/charts/AttendanceCompare");
var WeeklyAttendance_1 = require("../components/charts/WeeklyAttendance");
var DateComponent_1 = __importDefault(require("../components/DateComponent"));
var DataTable_1 = __importDefault(require("../components/tables/DataTable"));
var TotalEmp_1 = __importDefault(require("../components/TotalEmp"));
var ThemeContext_1 = require("../context/ThemeContext");
var MainLayout = function () {
    var theme = (0, react_1.useContext)(ThemeContext_1.ThemeContext).theme;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: 'px-2 mt-10 main-layout', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'md:flex justify-between items-start gap-4', children: [(0, jsx_runtime_1.jsx)("div", { className: 'w-[30%]', children: (0, jsx_runtime_1.jsx)(DateComponent_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: 'w-[70%] data-store md:grid md:grid-cols-3 grid grid-cols-1 gap-14', children: (0, jsx_runtime_1.jsx)(TotalEmp_1.default, {}) })] }), (0, jsx_runtime_1.jsx)("div", { className: 'next-chart', children: (0, jsx_runtime_1.jsxs)("div", { className: 'md:grid md:grid-cols-2 grid grid-cols-1 gap-5', children: [(0, jsx_runtime_1.jsx)("div", { className: "".concat(theme === 'light'
                                    ? 'bg-white text-black'
                                    : 'bg-[#171717] text-white', " mt-10 shadow-2xl rounded-2xl"), children: (0, jsx_runtime_1.jsx)(AttendanceCompare_1.AttendanceCompare, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "".concat(theme === 'light'
                                    ? 'bg-white text-black'
                                    : 'bg-[#171717] text-white', " mt-10 shadow-2xl rounded-2xl"), children: (0, jsx_runtime_1.jsx)(WeeklyAttendance_1.WeeklyAttendance, {}) })] }) }), (0, jsx_runtime_1.jsx)("div", { className: 'table-datas mt-10 shadow-2xl p-5', children: (0, jsx_runtime_1.jsx)("div", { className: "".concat(theme === 'light'
                            ? 'bg-white text-black'
                            : 'bg-[#171717] text-white', " table-datas p-5 rounded-2xl"), children: (0, jsx_runtime_1.jsx)(DataTable_1.default, {}) }) })] }) }));
};
exports.default = MainLayout;
