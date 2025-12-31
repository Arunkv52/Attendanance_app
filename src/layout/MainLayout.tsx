import { useContext } from 'react'
import { AttendanceCompare } from '../components/charts/AttendanceCompare'
import { WeeklyAttendance } from '../components/charts/WeeklyAttendance'
import DateComponent from '../components/DateComponent'
import DataTable from '../components/tables/DataTable'
import TotalEmp from '../components/TotalEmp'
import { ThemeContext } from '../context/ThemeContext'

const MainLayout = () => {
  const { theme }:any = useContext(ThemeContext)

  return (
    <>
      <div className='px-2 mt-10 main-layout'>
        <div className='md:flex justify-between items-start gap-4'>
          <div className='w-[30%]'>
            <DateComponent />
          </div>
          <div className='w-[70%] data-store md:grid md:grid-cols-3 grid grid-cols-1 gap-14'>
            <TotalEmp />
          </div>
        </div>

        {/* Attendance Compare */}
        <div className='next-chart'>
          <div className='md:grid md:grid-cols-2 grid grid-cols-1 gap-5'>
            <div
              className={`${
                theme === 'light'
                  ? 'bg-white text-black'
                  : 'bg-[#171717] text-white'
              } mt-10 shadow-2xl rounded-2xl`}
            >
              <AttendanceCompare />
            </div>
            <div
              className={`${
                theme === 'light'
                  ? 'bg-white text-black'
                  : 'bg-[#171717] text-white'
              } mt-10 shadow-2xl rounded-2xl`}
            >
              <WeeklyAttendance />
            </div>
          </div>
        </div>

        {/* Tables data Overview */}
        <div className='table-datas mt-10 shadow-2xl p-5'>
          <div
              className={`${
                theme === 'light'
                  ? 'bg-white text-black'
                  : 'bg-[#171717] text-white'
              } table-datas p-5 rounded-2xl`}
            >
         
            <DataTable />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainLayout
