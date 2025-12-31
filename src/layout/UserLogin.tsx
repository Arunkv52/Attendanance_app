import { UserDetails } from '../api/User'

const UserLogin = () => {
  return (
    <>
      {UserDetails.map(item => (
        <div>
          <div className='flex justify-start items-center gap-2'>
            <div>
              <img src={item.Image} alt='' className='w-10' />
            </div>
            <div className='flex flex-col text-sm font-semibold'>
              <p>{item.User}</p>
              <p>{item.Jobtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default UserLogin
