"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var hdverse_logo_png_1 = __importDefault(require("../assets/logo//hdverse-logo.png"));
var UserLogin_1 = __importDefault(require("./UserLogin"));
var io5_1 = require("react-icons/io5");
var ThemeContext_1 = require("../context/ThemeContext");
var Header = function () {
    var _a = (0, react_1.useContext)(ThemeContext_1.ThemeContext), theme = _a.theme, themeChange = _a.themeChange;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("header", { children: (0, jsx_runtime_1.jsxs)("div", { className: "".concat(theme === 'light' ? 'bg-white text-black' : 'bg-[#171717] text-white', " header-all flex justify-between items-center gap-0 shadow-2xl mx-2 my-3"), children: [(0, jsx_runtime_1.jsx)("div", { className: 'col', children: (0, jsx_runtime_1.jsx)("img", { src: hdverse_logo_png_1.default, alt: '', className: 'w-40' }) }), (0, jsx_runtime_1.jsx)("div", { className: 'col', children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex justify-start items-center gap-4', children: [(0, jsx_runtime_1.jsx)("button", { className: 'cursor-pointer text-xl', onClick: themeChange, children: theme === 'light' ? ((0, jsx_runtime_1.jsx)(io5_1.IoSunnyOutline, {})) : ((0, jsx_runtime_1.jsx)(io5_1.IoSunny, {})) }), (0, jsx_runtime_1.jsx)(UserLogin_1.default, {})] }) })] }) }) }));
};
exports.default = Header;
