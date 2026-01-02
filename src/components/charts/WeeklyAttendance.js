"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeeklyAttendance = WeeklyAttendance;
var jsx_runtime_1 = require("react/jsx-runtime");
var recharts_1 = require("recharts");
var card_1 = require("../ui/card");
var chart_1 = require("../ui/chart");
var User_1 = require("../../api/User");
var chartConfig = {
    desktop: {
        label: "Employee Present",
        color: "var(--chart-3)",
    },
};
function WeeklyAttendance() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "py-5", children: [(0, jsx_runtime_1.jsx)(card_1.CardHeader, { children: (0, jsx_runtime_1.jsx)(card_1.CardTitle, { className: "text-2xl", children: "Monthlywise Attendance" }) }), (0, jsx_runtime_1.jsx)(card_1.CardContent, { children: (0, jsx_runtime_1.jsx)(chart_1.ChartContainer, { config: chartConfig, children: (0, jsx_runtime_1.jsxs)(recharts_1.BarChart, { accessibilityLayer: true, data: User_1.chartData, margin: {
                                top: 20,
                            }, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { vertical: false }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "month", tickLine: false, tickMargin: 10, axisLine: false, tickFormatter: function (value) { return value.slice(0, 3); } }), (0, jsx_runtime_1.jsx)(chart_1.ChartTooltip, { cursor: false, content: (0, jsx_runtime_1.jsx)(chart_1.ChartTooltipContent, { hideLabel: true }) }), (0, jsx_runtime_1.jsx)(recharts_1.Bar, { dataKey: "desktop", fill: "var(--color-desktop)", radius: 8, children: (0, jsx_runtime_1.jsx)(recharts_1.LabelList, { position: "top", offset: 12, className: "fill-foreground", fontSize: 12 }) })] }) }) })] }) }));
}
