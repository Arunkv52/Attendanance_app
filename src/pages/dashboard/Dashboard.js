"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Header_1 = __importDefault(require("../../layout/Header"));
var MainLayout_1 = __importDefault(require("../../layout/MainLayout"));
var Sidebar_1 = __importDefault(require("../../layout/Sidebar"));
var ThemeContext_1 = require("../../context/ThemeContext");
var Dashboard = function () {
    var theme = (0, react_1.useContext)(ThemeContext_1.ThemeContext).theme;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("main", { className: "".concat(theme === 'light' ? 'bg-white text-black' : 'bg-black text-white', " mx-0 flex justify-start items-start gap-2"), children: [(0, jsx_runtime_1.jsx)(Sidebar_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "main-layout w-full ml-15", children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(MainLayout_1.default, {})] })] }) }));
};
exports.default = Dashboard;
