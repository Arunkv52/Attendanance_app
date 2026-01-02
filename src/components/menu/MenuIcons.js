"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIconsRow3 = exports.MenuIconsRow2 = exports.MenuIconsRow1 = exports.MenuIconsRow = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var io_1 = require("react-icons/io");
var md_1 = require("react-icons/md");
var md_2 = require("react-icons/md");
var fi_1 = require("react-icons/fi");
var io5_1 = require("react-icons/io5");
var fi_2 = require("react-icons/fi");
exports.MenuIconsRow = [
    {
        title: 'Menu',
        icon: (0, jsx_runtime_1.jsx)(md_1.MdMenuOpen, {}),
        link: '/menu'
    },
];
exports.MenuIconsRow1 = [
    {
        title: 'Notification',
        icon: (0, jsx_runtime_1.jsx)(io_1.IoMdNotificationsOutline, {}),
        link: '/notification'
    }
];
exports.MenuIconsRow2 = [
    {
        title: 'Dashboard',
        icon: (0, jsx_runtime_1.jsx)(md_2.MdDashboard, {}),
        link: '/dashboard'
    },
    {
        title: 'Users',
        icon: (0, jsx_runtime_1.jsx)(fi_1.FiUser, {}),
        link: '/user'
    }
];
exports.MenuIconsRow3 = [
    {
        title: 'Settings',
        icon: (0, jsx_runtime_1.jsx)(io5_1.IoSettingsOutline, {}),
        link: '/settings'
    },
    {
        title: 'Logout',
        icon: (0, jsx_runtime_1.jsx)(fi_2.FiLogOut, {}),
        link: '/logout'
    }
];
