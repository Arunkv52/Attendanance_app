import { useContext } from "react"
import Header from "../../layout/Header"
import MainLayout from "../../layout/MainLayout"
import Sidebar from "../../layout/Sidebar"
import { ThemeContext } from "../../context/ThemeContext"

const Dashboard = () => {
  const {theme} = useContext(ThemeContext)
  return (
   <>
      <main className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} mx-0 flex justify-start items-start gap-2`}>
        <Sidebar/>
        <div className="main-layout w-full ml-15">
          <Header/>
          <MainLayout />
        </div>
      </main>
   </>
  )
}

export default Dashboard