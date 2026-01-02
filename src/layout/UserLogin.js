"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var User_1 = require("../api/User");
var UserLogin = function () {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: User_1.UserDetails.map(function (item) { return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex justify-start items-center gap-2', children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("img", { src: item.Image, alt: '', className: 'w-10' }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col text-sm font-semibold', children: [(0, jsx_runtime_1.jsx)("p", { children: item.User }), (0, jsx_runtime_1.jsx)("p", { children: item.Jobtitle })] })] }) })); }) }));
};
exports.default = UserLogin;
