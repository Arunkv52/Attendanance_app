import { useContext } from "react"
import { Link } from "react-router"
import { ThemeContext } from "../../context/ThemeContext"
interface Datecarditem {
  icon: any
  date: any
  dateparagraph: string
  day: string
  todaydate: any
  advanceicon: any
  advancetext: string
}

const DateCard = ({
  icon,
  date,
  dateparagraph,
  day,
  todaydate,
  advanceicon,
  advancetext
}: Datecarditem) => {

const {theme}:any = useContext(ThemeContext)


  return (
    <>
      <div className={`${
            theme === 'light' ? 'bg-white text-black' : 'bg-[#171717] text-white'
          }components shadow-2xl px-8 py-5 w-100 h-100 rounded-2xl`}>
        <div className='date-with-icon flex justify-start items-start gap-5'>
          <div className='text-5xl'>{icon}</div>
          <div className='flex flex-col justify-start items-start'>
            <p className='text-3xl'>{date}</p>
            <p>{dateparagraph}</p>
          </div>
        </div>
        <div className='mt-24'>
          <p className='font-bold text-xl'>{day}</p>
          <p className='font-bold text-xl'>{todaydate}</p>
        </div>
        <div className='py-5 mt-8'>
          <Link to={'/settings'}>
           <button className='bg-[#3e8fcb] flex justify-start items-center gap-2 text-base p-3 rounded-xl shadow-sm cursor-pointer'>
            {advanceicon}
            {advancetext}
          </button>
          </Link>
         
        </div>
      </div>
    </>
  )
}

export default DateCard
