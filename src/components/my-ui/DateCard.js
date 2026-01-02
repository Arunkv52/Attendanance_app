"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_1 = require("react-router");
var ThemeContext_1 = require("../../context/ThemeContext");
var DateCard = function (_a) {
    var icon = _a.icon, date = _a.date, dateparagraph = _a.dateparagraph, day = _a.day, todaydate = _a.todaydate, advanceicon = _a.advanceicon, advancetext = _a.advancetext;
    var theme = (0, react_1.useContext)(ThemeContext_1.ThemeContext).theme;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "".concat(theme === 'light' ? 'bg-white text-black' : 'bg-[#171717] text-white', "components shadow-2xl px-8 py-5 w-100 h-100 rounded-2xl"), children: [(0, jsx_runtime_1.jsxs)("div", { className: 'date-with-icon flex justify-start items-start gap-5', children: [(0, jsx_runtime_1.jsx)("div", { className: 'text-5xl', children: icon }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col justify-start items-start', children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-3xl', children: date }), (0, jsx_runtime_1.jsx)("p", { children: dateparagraph })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'mt-24', children: [(0, jsx_runtime_1.jsx)("p", { className: 'font-bold text-xl', children: day }), (0, jsx_runtime_1.jsx)("p", { className: 'font-bold text-xl', children: todaydate })] }), (0, jsx_runtime_1.jsx)("div", { className: 'py-5 mt-8', children: (0, jsx_runtime_1.jsx)(react_router_1.Link, { to: '/settings', children: (0, jsx_runtime_1.jsxs)("button", { className: 'bg-[#3e8fcb] flex justify-start items-center gap-2 text-base p-3 rounded-xl shadow-sm cursor-pointer', children: [advanceicon, advancetext] }) }) })] }) }));
};
exports.default = DateCard;
