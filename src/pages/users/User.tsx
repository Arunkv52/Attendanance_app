import Header from '@/layout/Header'
import Sidebar from '@/layout/Sidebar'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'


const User = () => {
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
            <h1 className='text-2xl py-5'>📅 List of Users</h1>
            
          </div>
          
        </div>
      </main>
    </>
  )
}

export default User