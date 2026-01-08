import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react' // React Data Grid Component
import { useEffect, useState } from 'react'

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule])


// DataFetch
import data from '@/api/holidays2026.json'

const TableData = () => {

  interface dataItem {
    id: number,
    holidayName:string
    startDate: string
    endDate: string
    type: string
    numberOfDays: number
    isWorkingDay: boolean
  }



 

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: 'holidayName' },
    { field: 'startDate' },
    { field: 'endDate' },
    { field: 'type' },
    { field: 'numberOfDays' },
    { field: 'isWorkingDay' }
  ])


  

  return (
    <>
      <div style={{ height: 400 }}>
        <AgGridReact rowData={data} columnDefs={colDefs} />
      </div>
    </>
  )
}

export default TableData
