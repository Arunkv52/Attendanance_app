"use client";
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
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var lucide_react_1 = require("lucide-react");
var button_1 = require("../ui/button");
var calendar_1 = require("../ui/calendar");
var input_1 = require("../ui/input");
var popover_1 = require("../ui/popover");
function formatDate(date) {
    if (!date) {
        return "";
    }
    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}
function isValidDate(date) {
    if (!date) {
        return false;
    }
    return !isNaN(date.getTime());
}
var CalendarShow = function () {
    var _a = React.useState(false), open = _a[0], setOpen = _a[1];
    var _b = React.useState(new Date("2025-02-22")), date = _b[0], setDate = _b[1];
    var _c = React.useState(date), month = _c[0], setMonth = _c[1];
    var _d = React.useState(formatDate(date)), value = _d[0], setValue = _d[1];
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "relative flex gap-2", children: [(0, jsx_runtime_1.jsx)(input_1.Input, { id: "date", value: value, placeholder: "Feb 22, 2025", className: "bg-black/10 outline-0  py-5 pr-0 rounded-sm", onChange: function (e) {
                        var date = new Date(e.target.value);
                        setValue(e.target.value);
                        if (isValidDate(date)) {
                            setDate(date);
                            setMonth(date);
                        }
                    }, onKeyDown: function (e) {
                        if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setOpen(true);
                        }
                    } }), (0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: open, onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(button_1.Button, { id: "date-picker", variant: "ghost", className: "absolute top-1/2 right-2 size-6 -translate-y-1/2", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.CalendarIcon, { className: "size-3.5" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Select date" })] }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-auto overflow-hidden p-0", align: "end", alignOffset: -8, sideOffset: 10, children: (0, jsx_runtime_1.jsx)(calendar_1.Calendar, { mode: "single", selected: date, captionLayout: "dropdown", month: month, onMonthChange: setMonth, fromYear: 2022, toYear: 2040, onSelect: function (date) {
                                    setDate(date);
                                    setValue(formatDate(date));
                                    setOpen(false);
                                } }) })] })] }) }));
};
exports.default = CalendarShow;
