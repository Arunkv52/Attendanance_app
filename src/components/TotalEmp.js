"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var StatCard_1 = __importDefault(require("./my-ui/StatCard"));
var User_1 = require("../api/User");
var TotalEmp = function () {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: User_1.AttendanceData.map(function (item) { return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(StatCard_1.default, { count: item.count, icon: item.icon, title: item.title, description: item.description }) })); }) }));
};
exports.default = TotalEmp;
