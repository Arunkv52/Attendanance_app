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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_table_1 = require("@tanstack/react-table");
var lucide_react_1 = require("lucide-react");
var pi_1 = require("react-icons/pi");
var button_1 = require("../ui/button");
var dropdown_menu_1 = require("../ui/dropdown-menu");
var input_1 = require("../ui/input");
var table_1 = require("../ui/table");
var attandanancedata_json_1 = __importDefault(require("../../api/attandanancedata.json"));
exports.columns = [
    {
        accessorKey: 'id',
        header: function (_a) {
            var column = _a.column;
            return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("p", { onClick: function () { return column.toggleSorting(column.getIsSorted() === 'asc'); }, className: 'flex justify-start items-center gap-1 text-base cursor-pointer', children: ["Employee Id ", (0, jsx_runtime_1.jsx)(pi_1.PiArrowsDownUp, {})] }) }));
        },
        cell: function (_a) {
            var row = _a.row;
            return (0, jsx_runtime_1.jsx)("div", { className: 'lowercase', children: row.getValue('id') });
        }
    },
    {
        accessorKey: 'employeeName',
        header: function (_a) {
            var column = _a.column;
            return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("p", { onClick: function () { return column.toggleSorting(column.getIsSorted() === 'asc'); }, className: 'flex justify-start items-center gap-1 text-base cursor-pointer', children: ["Employee Name ", (0, jsx_runtime_1.jsx)(pi_1.PiArrowsDownUp, {})] }) }));
        },
        cell: function (_a) {
            var row = _a.row;
            return ((0, jsx_runtime_1.jsx)("div", { className: 'Capitialize', children: row.getValue('employeeName') }));
        }
    },
    {
        accessorKey: 'role',
        header: function (_a) {
            var column = _a.column;
            return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("p", { onClick: function () { return column.toggleSorting(column.getIsSorted() === 'asc'); }, className: 'flex justify-start items-center gap-1 text-base cursor-pointer', children: ["Role ", (0, jsx_runtime_1.jsx)(pi_1.PiArrowsDownUp, {})] }) }));
        },
        cell: function (_a) {
            var row = _a.row;
            return (0, jsx_runtime_1.jsx)("div", { className: 'Capitialize', children: row.getValue('role') });
        }
    },
    {
        accessorKey: 'department',
        header: function (_a) {
            var column = _a.column;
            return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("p", { onClick: function () { return column.toggleSorting(column.getIsSorted() === 'asc'); }, className: 'flex justify-start items-center gap-1 text-base cursor-pointer', children: ["Department ", (0, jsx_runtime_1.jsx)(pi_1.PiArrowsDownUp, {})] }) }));
        },
        cell: function (_a) {
            var row = _a.row;
            return ((0, jsx_runtime_1.jsx)("div", { className: 'Capitialize', children: row.getValue('department') }));
        }
    },
    {
        accessorKey: 'date',
        header: function (_a) {
            var column = _a.column;
            return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("p", { onClick: function () { return column.toggleSorting(column.getIsSorted() === 'asc'); }, className: 'flex justify-start items-center gap-1 text-base cursor-pointer', children: ["Date ", (0, jsx_runtime_1.jsx)(pi_1.PiArrowsDownUp, {})] }) }));
        },
        cell: function (_a) {
            var row = _a.row;
            return ((0, jsx_runtime_1.jsx)("div", { className: 'Capitialize', children: row.getValue('date') }));
        }
    },
    {
        accessorKey: 'checkin',
        header: function (_a) {
            var column = _a.column;
            return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("p", { onClick: function () { return column.toggleSorting(column.getIsSorted() === 'asc'); }, className: 'flex justify-start items-center gap-1 text-base cursor-pointer', children: ["Check In ", (0, jsx_runtime_1.jsx)(pi_1.PiArrowsDownUp, {})] }) }));
        },
        cell: function (_a) {
            var row = _a.row;
            return ((0, jsx_runtime_1.jsx)("div", { className: 'Capitialize', children: row.getValue('checkin') }));
        }
    },
    {
        accessorKey: 'checkout',
        header: function (_a) {
            var column = _a.column;
            return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("p", { onClick: function () { return column.toggleSorting(column.getIsSorted() === 'asc'); }, className: 'flex justify-start items-center gap-1 text-base cursor-pointer', children: ["Check Out ", (0, jsx_runtime_1.jsx)(pi_1.PiArrowsDownUp, {})] }) }));
        },
        cell: function (_a) {
            var row = _a.row;
            return ((0, jsx_runtime_1.jsx)("div", { className: 'Capitialize', children: row.getValue('checkout') }));
        }
    },
    {
        accessorKey: 'workhours',
        header: function (_a) {
            var column = _a.column;
            return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("p", { onClick: function () { return column.toggleSorting(column.getIsSorted() === 'asc'); }, className: 'flex justify-start items-center gap-1 text-base cursor-pointer', children: ["Work Hours ", (0, jsx_runtime_1.jsx)(pi_1.PiArrowsDownUp, {})] }) }));
        },
        cell: function (_a) {
            var row = _a.row;
            return ((0, jsx_runtime_1.jsx)("div", { className: 'Capitialize', children: row.getValue('workhours') }));
        }
    },
    {
        accessorKey: 'status',
        header: function (_a) {
            var column = _a.column;
            return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("p", { onClick: function () { return column.toggleSorting(column.getIsSorted() === 'asc'); }, className: 'flex justify-start items-center gap-1 text-base cursor-pointer', children: ["Status ", (0, jsx_runtime_1.jsx)(pi_1.PiArrowsDownUp, {})] }) }));
        },
        cell: function (_a) {
            var row = _a.row;
            return ((0, jsx_runtime_1.jsx)("div", { className: 'Capitialize', children: row.getValue('status') }));
        }
    }
];
var DataSets = function () {
    var _a, _b, _c;
    var _d = React.useState([]), sorting = _d[0], setSorting = _d[1];
    var _e = React.useState([]), columnFilters = _e[0], setColumnFilters = _e[1];
    var _f = React.useState({}), columnVisibility = _f[0], setColumnVisibility = _f[1];
    var _g = React.useState({}), rowSelection = _g[0], setRowSelection = _g[1];
    var table = (0, react_table_1.useReactTable)({
        data: attandanancedata_json_1.default,
        columns: exports.columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getPaginationRowModel: (0, react_table_1.getPaginationRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)(),
        getFilteredRowModel: (0, react_table_1.getFilteredRowModel)(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting: sorting,
            columnFilters: columnFilters,
            columnVisibility: columnVisibility,
            rowSelection: rowSelection
        }
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: 'w-full', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex justify-between items-center py-4', children: [(0, jsx_runtime_1.jsx)("div", { className: 'heading', children: (0, jsx_runtime_1.jsx)("h1", { className: 'text-2xl font-bold', children: "Attendanance Overview" }) }), (0, jsx_runtime_1.jsx)("div", { className: 'input-search', children: (0, jsx_runtime_1.jsx)(input_1.Input, { placeholder: 'Filter Name...', value: (_b = (_a = table.getColumn('employeeName')) === null || _a === void 0 ? void 0 : _a.getFilterValue()) !== null && _b !== void 0 ? _b : '', onChange: function (event) { var _a; return (_a = table.getColumn('employeeName')) === null || _a === void 0 ? void 0 : _a.setFilterValue(event.target.value); }, className: 'md:w-2xl w-full rounded-sm outline-0' }) }), (0, jsx_runtime_1.jsx)("div", { className: 'data-dropdown', children: (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenu, { children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: 'outline', className: 'ml-auto bg-blue-500 cursor-pointer rounded-sm outline-0 border-0', children: ["Advanced Filters", (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDown, {})] }) }), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuContent, { align: 'end', children: table
                                            .getAllColumns()
                                            .filter(function (column) { return column.getCanHide(); })
                                            .map(function (column) {
                                            return ((0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuCheckboxItem, { className: 'capitalize', checked: column.getIsVisible(), onCheckedChange: function (value) {
                                                    return column.toggleVisibility(!!value);
                                                }, children: column.id }, column.id));
                                        }) })] }) })] }), (0, jsx_runtime_1.jsx)("div", { className: 'overflow-hidden ', children: (0, jsx_runtime_1.jsxs)(table_1.Table, { children: [(0, jsx_runtime_1.jsx)(table_1.TableHeader, { className: 'border-y-2 border-y-gray-200', children: table.getHeaderGroups().map(function (headerGroup) { return ((0, jsx_runtime_1.jsx)(table_1.TableRow, { children: headerGroup.headers.map(function (header) {
                                        return ((0, jsx_runtime_1.jsx)(table_1.TableHead, { className: 'bg-blue-200', children: header.isPlaceholder
                                                ? null
                                                : (0, react_table_1.flexRender)(header.column.columnDef.header, header.getContext()) }, header.id));
                                    }) }, headerGroup.id)); }) }), (0, jsx_runtime_1.jsx)(table_1.TableBody, { children: ((_c = table.getRowModel().rows) === null || _c === void 0 ? void 0 : _c.length) ? (table.getRowModel().rows.map(function (row) { return ((0, jsx_runtime_1.jsx)(table_1.TableRow, { "data-state": row.getIsSelected() && 'selected', children: row.getVisibleCells().map(function (cell) { return ((0, jsx_runtime_1.jsx)(table_1.TableCell, { children: (0, react_table_1.flexRender)(cell.column.columnDef.cell, cell.getContext()) }, cell.id)); }) }, row.id)); })) : ((0, jsx_runtime_1.jsx)(table_1.TableRow, { children: (0, jsx_runtime_1.jsx)(table_1.TableCell, { colSpan: exports.columns.length, className: 'h-24 text-center', children: "Data Not Found..." }) })) })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center justify-end space-x-2 py-4', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'text-muted-foreground flex-1 text-sm', children: [table.getFilteredSelectedRowModel().rows.length, " of", ' ', table.getFilteredRowModel().rows.length, " row(s) selected."] }), (0, jsx_runtime_1.jsxs)("div", { className: 'space-x-2', children: [(0, jsx_runtime_1.jsx)(button_1.Button, { variant: 'outline', size: 'sm', onClick: function () { return table.previousPage(); }, disabled: !table.getCanPreviousPage(), className: 'bg-gray-300 cursor-pointer', children: "Previous" }), (0, jsx_runtime_1.jsx)(button_1.Button, { variant: 'outline', size: 'sm', onClick: function () { return table.nextPage(); }, disabled: !table.getCanNextPage(), className: 'bg-gray-300 cursor-pointer', children: "Next" })] })] })] }) }));
};
exports.default = DataSets;
