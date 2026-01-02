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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("../../App.css");
var fa_1 = require("react-icons/fa");
var fa_2 = require("react-icons/fa");
var react_hook_form_1 = require("react-hook-form");
var react_router_1 = require("react-router");
var Login = function () {
    // For Login to view
    // "username": "snyder",
    // "password": "f238&@*$",
    // React hook form
    var _a = (0, react_hook_form_1.useForm)(), register = _a.register, handleSubmit = _a.handleSubmit, reset = _a.reset;
    var onSubmit = function (inputData) {
        var userName = inputData.userName, password = inputData.password;
        reset(); // clears all inputs
        // Username and
        var isUserValid = userData.find(function (item) { return item.username === userName && item.password === password; });
        if (isUserValid) {
            navigate('/dashboard');
        }
        else {
            alert('Invalid username or password');
        }
    };
    // Redirect to url
    var navigate = (0, react_router_1.useNavigate)();
    // User loggin
    (0, react_1.useEffect)(function () {
        var fetchUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch('https://fakestoreapi.com/users')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        setUserData(result);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log('Error :', error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        fetchUsers();
    }, []);
    var _b = (0, react_1.useState)([]), userData = _b[0], setUserData = _b[1];
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: 'login-container min-h-dvh md:p-0 p-3', children: (0, jsx_runtime_1.jsxs)("div", { className: 'container bg-[#171717] text-white py-10 px-10 max-w-125 md:absolute md:top-1/12 md:left-1/3 relative top-20 rounded-xl border-2 border-blue-300', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'log-in', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'head text-center', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-2xl font-semibold', children: "Welcome back" }), (0, jsx_runtime_1.jsx)("p", { children: "Login to your HD Verse account" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'form-container py-5', children: [(0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col justify-start items-start gap-3', children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: 'username', children: "Username" }), (0, jsx_runtime_1.jsx)("input", __assign({ type: 'text', id: 'userName', placeholder: 'Admin', className: 'bg-[#212121] outline-0 py-3 px-4 rounded-xl border border-gray-200 hover:shadow-xs w-full text-sm' }, register('username', {
                                                        required: true,
                                                        maxLength: 10
                                                    })))] }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col justify-start items-start gap-3 py-5', children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: 'password', children: "Password" }), (0, jsx_runtime_1.jsx)("input", __assign({ type: 'password', id: 'password', placeholder: 'Enter your password', className: 'bg-[#212121] outline-0 py-3 px-4 rounded-xl border border-gray-200 hover:shadow-xs w-full text-sm' }, register('password', {
                                                        required: true,
                                                        maxLength: 20
                                                    })))] }), (0, jsx_runtime_1.jsx)("div", { className: 'py-3', children: (0, jsx_runtime_1.jsx)("button", { type: 'submit', className: 'bg-white text-black w-full py-2 rounded-xl cursor-pointer font-semibold', children: "Login" }) })] }), (0, jsx_runtime_1.jsx)("div", { className: 'form-or-content py-5', children: (0, jsx_runtime_1.jsx)("p", { className: 'form-or-content-text text-sm font-normal text-center', children: "Or continue with" }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex justify-center items-center gap-4', children: [(0, jsx_runtime_1.jsx)("div", { className: 'bg-[#212121] border border-gray-400 px-15 py-3 rounded-2xl cursor-pointer', children: (0, jsx_runtime_1.jsx)(fa_1.FaGoogle, {}) }), (0, jsx_runtime_1.jsx)("div", { className: 'bg-[#212121] border border-gray-400 px-15 py-3 rounded-2xl cursor-pointer', children: (0, jsx_runtime_1.jsx)(fa_2.FaGithub, {}) })] })] })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("p", { className: 'text-sm text-center flex justify-center items-center gap-1', children: ["Don't have an account? ", (0, jsx_runtime_1.jsx)(react_router_1.Link, { to: '/signup', className: 'underline', children: "Signup" })] }) })] }) }) }));
};
exports.default = Login;
