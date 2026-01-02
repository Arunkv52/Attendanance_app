"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceCompare = AttendanceCompare;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var recharts_1 = require("recharts");
var card_1 = require("../ui/card");
var chart_1 = require("../ui/chart");
var select_1 = require("../ui/select");
var User_1 = require("../../api/User");
var chartConfig = {
    visitors: {
        label: "Visitors",
    },
    desktop: {
        label: "Present",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Absent",
        color: "var(--chart-2)",
    },
};
function AttendanceCompare() {
    var _a = React.useState("90d"), timeRange = _a[0], setTimeRange = _a[1];
    var filteredData = User_1.monthData.filter(function (item) {
        var date = new Date(item.date);
        var referenceDate = new Date("2024-06-30");
        var daysToSubtract = 90;
        if (timeRange === "30d") {
            daysToSubtract = 30;
        }
        else if (timeRange === "7d") {
            daysToSubtract = 7;
        }
        var startDate = new Date(referenceDate);
        startDate.setDate(startDate.getDate() - daysToSubtract);
        return date >= startDate;
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { className: "flex items-center gap-2 space-y-0  py-5 sm:flex-row", children: [(0, jsx_runtime_1.jsx)("div", { className: "grid flex-1 gap-1", children: (0, jsx_runtime_1.jsx)(card_1.CardTitle, { className: "text-2xl", children: "Attendance Comparision Chart" }) }), (0, jsx_runtime_1.jsxs)(select_1.Select, { value: timeRange, onValueChange: setTimeRange, children: [(0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { className: "hidden w-40 rounded-lg sm:ml-auto sm:flex bg-blue-500", "aria-label": "Select a value", children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: "Last 3 months" }) }), (0, jsx_runtime_1.jsxs)(select_1.SelectContent, { className: "rounded-xl", children: [(0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "90d", className: "rounded-lg", children: "Last 3 months" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "30d", className: "rounded-lg", children: "Last 30 days" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "7d", className: "rounded-lg", children: "Last 7 days" })] })] })] }), (0, jsx_runtime_1.jsx)(card_1.CardContent, { className: "px-2 pt-2 sm:px-6 sm:pt-6 mt-21", children: (0, jsx_runtime_1.jsx)(chart_1.ChartContainer, { config: chartConfig, className: "aspect-auto h-62.5 w-full", children: (0, jsx_runtime_1.jsxs)(recharts_1.AreaChart, { data: filteredData, children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsxs)("linearGradient", { id: "fillDesktop", x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, jsx_runtime_1.jsx)("stop", { offset: "5%", stopColor: "var(--color-desktop)", stopOpacity: 0.8 }), (0, jsx_runtime_1.jsx)("stop", { offset: "95%", stopColor: "var(--color-desktop)", stopOpacity: 0.1 })] }), (0, jsx_runtime_1.jsxs)("linearGradient", { id: "fillMobile", x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, jsx_runtime_1.jsx)("stop", { offset: "5%", stopColor: "var(--color-mobile)", stopOpacity: 0.8 }), (0, jsx_runtime_1.jsx)("stop", { offset: "95%", stopColor: "var(--color-mobile)", stopOpacity: 0.1 })] })] }), (0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { vertical: false }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "date", tickLine: false, axisLine: false, tickMargin: 8, minTickGap: 32, tickFormatter: function (value) {
                                    var date = new Date(value);
                                    return date.toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                    });
                                } }), (0, jsx_runtime_1.jsx)(chart_1.ChartTooltip, { cursor: false, content: (0, jsx_runtime_1.jsx)(chart_1.ChartTooltipContent, { labelFormatter: function (value) {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                        });
                                    }, indicator: "dot" }) }), (0, jsx_runtime_1.jsx)(recharts_1.Area, { dataKey: "mobile", type: "natural", fill: "url(#fillMobile)", stroke: "var(--color-mobile)", stackId: "a" }), (0, jsx_runtime_1.jsx)(recharts_1.Area, { dataKey: "desktop", type: "natural", fill: "url(#fillDesktop)", stroke: "var(--color-desktop)", stackId: "a" }), (0, jsx_runtime_1.jsx)(chart_1.ChartLegend, { content: (0, jsx_runtime_1.jsx)(chart_1.ChartLegendContent, {}) })] }) }) })] }));
}
