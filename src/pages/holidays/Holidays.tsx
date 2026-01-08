import Header from '@/layout/Header'
import Sidebar from '@/layout/Sidebar'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import TableData from '@/components/tables/holidays/TableData'
import CompansationData from '@/components/tables/holidays/CompansationData'
import '@/App.css'



const Holidays = () => {
  const { theme }: any = useContext(ThemeContext)
  
  return (
    <>
      <main
        className={`${
          theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
        } mx-0 flex justify-start items-start gap-2`}
      >
        <Sidebar />
        <div className='main-layout w-full ml-15'>
          <Header />
          <div className='px-3 mt-5'>
            <h1 className='text-2xl py-5'>📅 List of Holidays 2026</h1>
            <TableData />
          </div>
           <div className='px-3 mt-5'>
            <h1 className='text-2xl py-5'>📅 Compansation Full Working Days</h1>
            <CompansationData />
            <p>** Subjected to change applicable to all</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Holidays
