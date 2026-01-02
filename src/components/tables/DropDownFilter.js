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
exports.DropDownFilter = DropDownFilter;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var button_1 = require("../ui/button");
var dropdown_menu_1 = require("../ui/dropdown-menu");
function DropDownFilter() {
    var _a = React.useState(true), showStatusBar = _a[0], setShowStatusBar = _a[1];
    var _b = React.useState(false), showActivityBar = _b[0], setShowActivityBar = _b[1];
    var _c = React.useState(false), showPanel = _c[0], setShowPanel = _c[1];
    return ((0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenu, { children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuTrigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(button_1.Button, { variant: 'outline', children: "Open" }) }), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuContent, { className: 'w-56', children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuLabel, { children: "Appearance" }), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuSeparator, {}), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuCheckboxItem, { checked: showStatusBar, onCheckedChange: setShowStatusBar, children: "Status Bar" }), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuCheckboxItem, { checked: showActivityBar, onCheckedChange: setShowActivityBar, disabled: true, children: "Activity Bar" }), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuCheckboxItem, { checked: showPanel, onCheckedChange: setShowPanel, children: "Panel" })] })] }));
}
