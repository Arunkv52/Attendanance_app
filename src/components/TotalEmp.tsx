import { FaRegUser } from 'react-icons/fa'
import StateCard from './my-ui/StatCard'
import { AttendanceData } from '../api/User'


const TotalEmp = () => {


  return (
    <>
      {AttendanceData.map(item => (
        <>
          
          <StateCard
            count={item.count}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        </>
      ))}
    </>
  )
}

export default TotalEmp
