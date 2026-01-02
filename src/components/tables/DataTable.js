"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var DataSets_1 = __importDefault(require("./DataSets"));
var DataTable = function () {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: 'data-container', children: (0, jsx_runtime_1.jsx)("div", { className: 'down', children: (0, jsx_runtime_1.jsx)(DataSets_1.default, {}) }) }) }));
};
exports.default = DataTable;
