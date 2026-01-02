"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var io5_1 = require("react-icons/io5");
var md_1 = require("react-icons/md");
var DateCard_1 = __importDefault(require("./my-ui/DateCard"));
var DateComponent = function () {
    var DateItem = new Date().toLocaleTimeString();
    var Datetday = new Date().toDateString();
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(DateCard_1.default, { icon: (0, jsx_runtime_1.jsx)(io5_1.IoPartlySunny, {}), date: DateItem, dateparagraph: 'Realtime insight', day: 'Today', todaydate: Datetday, advanceicon: (0, jsx_runtime_1.jsx)(md_1.MdOutlineSettings, {}), advancetext: 'Advanced Configuration' }) }));
};
exports.default = DateComponent;
