"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
exports.ThemeContext = (0, react_1.createContext)();
var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)('light'), theme = _b[0], setTheme = _b[1]; // light is default
    var themeChange = function () {
        setTheme(function (prev) { return prev === 'light' ? 'dark' : 'light'; });
    };
    return ((0, jsx_runtime_1.jsx)(exports.ThemeContext.Provider, { value: { theme: theme, themeChange: themeChange }, children: children }));
};
exports.default = ThemeProvider;
