import { useContext } from 'react'
import Logo from '../assets/logo//hdverse-logo.png'
import UserLogin from './UserLogin'
import { IoSunnyOutline, IoSunny } from 'react-icons/io5'
import { ThemeContext } from '../context/ThemeContext'

const Header = () => {
 

  const { theme, themeChange }:any = useContext(ThemeContext)

  return (
    <>
      <header>
        <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-[#171717] text-white'} header-all flex justify-between items-center gap-0 shadow-2xl mx-2 my-3`}>
          <div className='col'>
            <img src={Logo} alt='' className='w-40' />
          </div>
          
          <div className='col'>
            <div className='flex justify-start items-center gap-4'>
              <button className='cursor-pointer text-xl' onClick={themeChange}>
                {theme === 'light' ? (<IoSunnyOutline/>) : (<IoSunny/>)}
              </button>
              <UserLogin />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
