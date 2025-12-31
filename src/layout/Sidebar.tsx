import { useContext, useState } from 'react'
import {
  MenuIconsRow,
  MenuIconsRow1,
  MenuIconsRow2,
  MenuIconsRow3
} from '../components/menu/MenuIcons'
import { ThemeContext } from '../context/ThemeContext'
import { Link } from 'react-router'

const Sidebar = () => {
  const [width, setWidth] = useState(true)
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <aside>
        <div
          className={`${
            width === true ? 'w-12' : 'w-36'
          } row-all flex flex-col justify-between items-start min-h-dvh  shadow-2xl px-3 mx-3 my-3 fixed z-10 ${
            theme === 'light' ? 'bg-white text-black' : 'bg-[#171717] text-white'
          }`}
        >
          <div className='row-1'>
            {MenuIconsRow.map(item => (
              <>
                <div className='flex justify-start items-center gap-3 gap-y-5 cursor-pointer hover:text-blue-800 my-10'>
                  {width ? (
                    <>
                      {' '}
                      <p
                        className='text-2xl'
                        onClick={() => {
                          setWidth(!width)
                        }}
                      >
                        {item.icon}
                      </p>
                    </>
                  ) : (
                    <>
                      {' '}
                      <p
                        className='text-2xl'
                        onClick={() => {
                          setWidth(!width)
                        }}
                      >
                        {item.icon}
                      </p>
                      <p className='font-semibold'>{item.title}</p>
                    </>
                  )}
                </div>
              </>
            ))}
          </div>
          <div className='row-2'>
            {MenuIconsRow1.map(item => (
              <>
                <div className='flex justify-start items-center gap-3 gap-y-5 cursor-pointer hover:text-blue-800 my-10'>
                  {width ? (
                    <>
                      <Link to={item.link}>
                        <p className='text-2xl'>{item.icon}</p>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={item.link} className='flex justify-start items-center gap-3 gap-y-5'>
                        <p className='text-2xl'>{item.icon}</p>
                        <p className='font-semibold'>{item.title}</p>
                      </Link>
                    </>
                  )}
                </div>
              </>
            ))}
          </div>
          <div className='row-3'>
            {MenuIconsRow2.map(item => (
              <>
                <div className='flex justify-start items-center gap-3 gap-y-5 cursor-pointer hover:text-blue-800 my-10'>
                  {width ? (
                    <>
                      <Link to={item.link}>
                        <p className='text-2xl'>{item.icon}</p>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={item.link} className='flex justify-start items-center gap-3 gap-y-5'>
                        <p className='text-2xl'>{item.icon}</p>
                        <p className='font-semibold'>{item.title}</p>
                      </Link>
                    </>
                  )}
                </div>
              </>
            ))}
          </div>
          <div className='row-4'>
            {MenuIconsRow3.map(item => (
              <>
                <div className='hover:text-blue-800 my-10'>
                  {width ? (
                    <>
                      <Link to={item.link}>
                        <p className='text-2xl'>{item.icon}</p>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        to={item.link}
                        className='flex justify-start items-center gap-3 gap-y-5'
                      >
                        <p className='text-2xl'>{item.icon}</p>
                        <p className='font-semibold'>{item.title}</p>
                      </Link>
                    </>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
