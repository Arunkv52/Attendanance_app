import { IoPartlySunny } from 'react-icons/io5'
import { MdOutlineSettings } from 'react-icons/md'
import DateCard from './my-ui/DateCard'

const DateComponent = () => {
  const DateItem = new Date().toLocaleTimeString()
  const Datetday = new Date().toDateString()

  return (
    <>
      <DateCard
        icon={<IoPartlySunny />}
        date ={DateItem}
        dateparagraph = 'Realtime insight'
        day = 'Today'
        todaydate = {Datetday}
        advanceicon = {<MdOutlineSettings />}
        advancetext = 'Advanced Configuration'
      />
    </>
  )
}

export default DateComponent
