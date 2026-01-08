import * as React from 'react'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState
} from '@tanstack/react-table'
import {  ChevronDown, } from 'lucide-react'
import { PiArrowsDownUp } from 'react-icons/pi'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import data from '@/api/attandanancedata.json'

export interface dataTypes {
  id: string
  employeeName: string
  role: string
  department: string
  date: string
  checkin: string
  checkout: string
  workhours: string
  status:string
}



export const columns: ColumnDef<dataTypes>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <div>
          <p
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className='flex justify-start items-center gap-1 text-base cursor-pointer'
          >
            Employee Id <PiArrowsDownUp />
          </p>
        </div>
      )
    },
    cell: ({ row }) => <div className='lowercase'>{row.getValue('id')}</div>
  },
  {
    accessorKey: 'employeeName',
    header: ({ column }) => {
      return (
        <div>
          <p
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className='flex justify-start items-center gap-1 text-base cursor-pointer'
          >
            Employee Name <PiArrowsDownUp />
          </p>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className='Capitialize'>{row.getValue('employeeName')}</div>
    )
  },
  {
    accessorKey: 'role',
    header: ({ column }) => {
      return (
        <div>
          <p
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className='flex justify-start items-center gap-1 text-base cursor-pointer'
          >
            Role <PiArrowsDownUp />
          </p>
        </div>
      )
    },
    cell: ({ row }) => <div className='Capitialize'>{row.getValue('role')}</div>
  },
  {
    accessorKey: 'department',
    header: ({ column }) => {
      return (
        <div>
          <p
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className='flex justify-start items-center gap-1 text-base cursor-pointer'
          >
            Department <PiArrowsDownUp />
          </p>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className='Capitialize'>{row.getValue('department')}</div>
    )
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <div>
          <p
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className='flex justify-start items-center gap-1 text-base cursor-pointer'
          >
           Date <PiArrowsDownUp />
          </p>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className='Capitialize'>{row.getValue('date')}</div>
    )
  },
  {
    accessorKey: 'checkin',
    header: ({ column }) => {
      return (
        <div>
          <p
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className='flex justify-start items-center gap-1 text-base cursor-pointer'
          >
           Check In <PiArrowsDownUp />
          </p>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className='Capitialize'>{row.getValue('checkin')}</div>
    )
  },
  {
    accessorKey: 'checkout',
    header: ({ column }) => {
      return (
        <div>
          <p
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className='flex justify-start items-center gap-1 text-base cursor-pointer'
          >
           Check Out <PiArrowsDownUp />
          </p>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className='Capitialize'>{row.getValue('checkout')}</div>
    )
  },
  {
    accessorKey: 'workhours',
    header: ({ column }) => {
      return (
        <div>
          <p
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className='flex justify-start items-center gap-1 text-base cursor-pointer'
          >
           Work Hours <PiArrowsDownUp />
          </p>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className='Capitialize'>{row.getValue('workhours')}</div>
    )
  },
   {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <div>
          <p
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className='flex justify-start items-center gap-1 text-base cursor-pointer'
          >
          Status <PiArrowsDownUp />
          </p>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className='Capitialize'>{row.getValue('status')}
      </div>
      
    )
  }
]

const DataSets = () => {

 

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  })
  return (
    <>
      <div className='w-full'>
        <div className='flex justify-between items-center py-4'>
          <div className='heading'>
            <h1 className='text-2xl font-bold'>Attendanance Overview</h1>
          </div>
          <div className='input-search'>
            <Input
              placeholder='Filter Name...'
              value={
                (table.getColumn('employeeName')?.getFilterValue() as string) ?? ''
              }
              onChange={event =>
                table.getColumn('employeeName')?.setFilterValue(event.target.value)
              }
              className='md:w-2xl w-full rounded-sm outline-0'
            />
          </div>
          <div className='data-dropdown'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' className='ml-auto bg-blue-500 cursor-pointer rounded-sm outline-0 border-0'>
                  Advanced Filters
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                {table
                  .getAllColumns()
                  .filter(column => column.getCanHide())
                  .map(column => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className='capitalize'
                        checked={column.getIsVisible()}
                        onCheckedChange={value =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className='overflow-hidden '>
          <Table>
            <TableHeader className='border-y-2 border-y-gray-200'>
              {table.getHeaderGroups().map(headerGroup => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map(header => {
                    return (
                      <TableHead key={header.id} className='bg-blue-200'>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map(row => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map(cell => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className='h-24 text-center'
                  >
                    Data Not Found...
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className='flex items-center justify-end space-x-2 py-4'>
          <div className='text-muted-foreground flex-1 text-sm'>
            {table.getFilteredSelectedRowModel().rows.length} of{' '}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className='space-x-2'>
            <Button
              variant='outline'
              size='sm'
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className='bg-gray-300 cursor-pointer'
            >
              Previous
            </Button>
            <Button
              variant='outline'
              size='sm'
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className='bg-gray-300 cursor-pointer'
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DataSets
