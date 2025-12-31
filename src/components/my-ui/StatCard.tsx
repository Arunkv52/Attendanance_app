import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

interface StateCardProps {
  count: number | string
  icon: React.ReactNode
  title: string
  description?: string
}

const StatCard = ({ count, icon, title, description }: StateCardProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div
        className={`${
          theme === 'light' ? 'bg-white text-black' : 'bg-[#171717] text-white'
        }pr-10 pl-5 py-5 rounded-xl shadow-2xl`}
      >
        <div className='flex justify-between item-center gap-0'>
          <h1 className='text-5xl font-bold'>{count}</h1>
          <span className='bg-white/50 text-blue-700 p-2 rounded-2xl max-w-fit max-h-fit text-3xl'>
            {icon}
          </span>
        </div>
        <div className='pt-10'>
          <h2 className='text-lg font-semibold'>{title}</h2>
          <p className='text-xs'>{description}</p>
        </div>
      </div>
    </>
  )
}

export default StatCard
