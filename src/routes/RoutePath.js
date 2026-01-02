"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_1 = require("react-router");
var Auth_1 = __importDefault(require("../pages/auth/Auth"));
var Dashboard_1 = __importDefault(require("../pages/dashboard/Dashboard"));
var Signup_1 = __importDefault(require("../pages/auth/Signup"));
var Login_1 = __importDefault(require("../pages/auth/Login"));
var ThemeContext_1 = __importDefault(require("../context/ThemeContext"));
var Settings_1 = __importDefault(require("../pages/settings/Settings"));
var User_1 = __importDefault(require("../pages/users/User"));
var RoutePath = function () {
    return ((0, jsx_runtime_1.jsx)(ThemeContext_1.default, { children: (0, jsx_runtime_1.jsx)(react_router_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_1.Route, { path: '/', element: (0, jsx_runtime_1.jsx)(Auth_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: '/signup', element: (0, jsx_runtime_1.jsx)(Signup_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: '/login', element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: '/dashboard', element: (0, jsx_runtime_1.jsx)(Dashboard_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: '/settings', element: (0, jsx_runtime_1.jsx)(Settings_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: '/user', element: (0, jsx_runtime_1.jsx)(User_1.default, {}) })] }) }) }));
};
exports.default = RoutePath;
