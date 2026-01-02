"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ThemeContext_1 = require("../../context/ThemeContext");
var StatCard = function (_a) {
    var count = _a.count, icon = _a.icon, title = _a.title, description = _a.description;
    var theme = (0, react_1.useContext)(ThemeContext_1.ThemeContext).theme;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "".concat(theme === 'light' ? 'bg-white text-black' : 'bg-[#171717] text-white', "pr-10 pl-5 py-5 rounded-xl shadow-2xl"), children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex justify-between item-center gap-0', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-5xl font-bold', children: count }), (0, jsx_runtime_1.jsx)("span", { className: 'bg-white/50 text-blue-700 p-2 rounded-2xl max-w-fit max-h-fit text-3xl', children: icon })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'pt-10', children: [(0, jsx_runtime_1.jsx)("h2", { className: 'text-lg font-semibold', children: title }), (0, jsx_runtime_1.jsx)("p", { className: 'text-xs', children: description })] })] }) }));
};
exports.default = StatCard;
