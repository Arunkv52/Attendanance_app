"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var fa_1 = require("react-icons/fa");
var fa_2 = require("react-icons/fa");
var react_hook_form_1 = require("react-hook-form");
var react_router_1 = require("react-router");
var Signup = function () {
    // types of data
    var _a = (0, react_hook_form_1.useForm)(), register = _a.register, handleSubmit = _a.handleSubmit, reset = _a.reset, errors = _a.formState.errors;
    var signupForm = function (data) {
        var user = {
            username: data.useremail,
            email: data.signupuser,
            password: data.signuppassword
        };
        fetch('https://fakestoreapi.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(function (res) { return res.json(); })
            .then(function (result) {
            console.log('User created:', result);
        })
            .catch(function (error) {
            console.error('Signup error:', error);
        });
        reset();
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: 'login-container min-h-dvh  md:p-0 p-3', children: (0, jsx_runtime_1.jsxs)("div", { className: 'container bg-[#171717] text-white py-10 px-10 max-w-125 md:absolute md:top-1/12 md:left-1/3 relative top-20 rounded-xl border-2 border-blue-300', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'sign-up', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'head text-center', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-2xl font-semibold', children: "Welcome back" }), (0, jsx_runtime_1.jsx)("p", { children: "Create your account HD Verse account" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'form-container py-5', children: [(0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(signupForm), children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col justify-start items-start gap-3', children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: 'useremail', children: "Enter Email Address" }), (0, jsx_runtime_1.jsx)("input", __assign({ type: 'email', id: 'useremail', placeholder: 'admin@gmail.com', className: 'bg-[#212121] outline-0 py-3 px-4 rounded-xl border border-gray-200 hover:shadow-xs w-full text-sm' }, register('useremail', {
                                                        required: true,
                                                        maxLength: 30
                                                    })))] }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col justify-start items-start gap-3 py-3', children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: 'signupuser', children: "Username" }), (0, jsx_runtime_1.jsx)("input", __assign({ type: 'text', id: 'name', placeholder: 'Admin', className: 'bg-[#212121] outline-0 py-3 px-4 rounded-xl border border-gray-200 hover:shadow-xs w-full text-sm' }, register('signupuser', {
                                                        required: true,
                                                        maxLength: 20
                                                    })))] }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col justify-start items-start gap-3 py-0', children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: 'signuppassword', children: "Password" }), (0, jsx_runtime_1.jsx)("input", __assign({ type: 'password', id: 'password', placeholder: 'Enter your password', className: 'bg-[#212121] outline-0 py-3 px-4 rounded-xl border border-gray-200 hover:shadow-xs w-full text-sm' }, register('signuppassword', {
                                                        required: true,
                                                        maxLength: 20
                                                    })))] }), (0, jsx_runtime_1.jsx)("div", { className: 'mt-5', children: (0, jsx_runtime_1.jsx)("button", { type: 'submit', className: 'bg-white text-black w-full py-2 rounded-xl cursor-pointer font-semibold', children: "Create an account" }) })] }), (0, jsx_runtime_1.jsx)("div", { className: 'form-or-content py-5', children: (0, jsx_runtime_1.jsx)("p", { className: 'form-or-content-text text-sm font-normal text-center', children: "Or continue with" }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex justify-center items-center gap-4', children: [(0, jsx_runtime_1.jsx)("div", { className: 'bg-[#212121] border border-gray-400 px-15 py-3 rounded-2xl cursor-pointer', children: (0, jsx_runtime_1.jsx)(fa_1.FaGoogle, {}) }), (0, jsx_runtime_1.jsx)("div", { className: 'bg-[#212121] border border-gray-400 px-15 py-3 rounded-2xl cursor-pointer', children: (0, jsx_runtime_1.jsx)(fa_2.FaGithub, {}) })] })] })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("p", { className: 'text-sm text-center flex justify-center items-center gap-1', children: ["Already have an account?", ' ', (0, jsx_runtime_1.jsx)(react_router_1.Link, { to: '/', className: 'underline', children: "Login" })] }) })] }) }) }));
};
exports.default = Signup;
