import { useEffect, useState } from 'react'
import '../../App.css'
import { FaGoogle } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'

const Login = () => {
  // For Login to view
  // "username": "snyder",
  // "password": "f238&@*$",

  // types of data
  interface logindata {
    username: string
    password: any
    useremail: any
    signupusername: string
    signuppassword: any
  }

  interface User {
    username: string
    password: string
  }

  // React hook form
  const { register, handleSubmit, reset } = useForm<logindata>()

  const onSubmit = (inputData: any) => {
    const { userName, password } = inputData
    reset() // clears all inputs

    // Username and pwd
    const isUserValid = userData.some(
      (item: User) => item.username === userName && item.password === password
    )

    if (isUserValid) {
      navigate('/dashboard')
    } else {
      alert('Invalid username or password')
    }
  }

  // Redirect to url
  const navigate = useNavigate()

  // User loggin
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/users')
        const result = await response.json()
        setUserData(result)
      } catch (error) {
        console.log('Error :', error)
      }
    }
    fetchUsers()
  }, [])

  const [userData, setUserData] = useState([])

  return (
    <>
      <div className='login-container min-h-dvh md:p-0 p-3'>
        <div className='container bg-[#171717] text-white py-10 px-10 max-w-125 md:absolute md:top-1/12 md:left-1/3 relative top-20 rounded-xl border-2 border-blue-300'>
          {/* Login */}

          <div className='log-in'>
            <div className='head text-center'>
              <h1 className='text-2xl font-semibold'>Welcome back</h1>
              <p>Login to your HD Verse account</p>
            </div>
            <div className='form-container py-5'>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Username */}
                <div className='flex flex-col justify-start items-start gap-3'>
                  <label htmlFor='username'>Username</label>
                  <input
                    type='text'
                    id='userName'
                    placeholder='Admin'
                    className='bg-[#212121] outline-0 py-3 px-4 rounded-xl border border-gray-200 hover:shadow-xs w-full text-sm'
                    {...register('username', {
                      required: true,
                      maxLength: 10
                    })}
                  />
                </div>
                {/* Password */}
                <div className='flex flex-col justify-start items-start gap-3 py-5'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    id='password'
                    placeholder='Enter your password'
                    className='bg-[#212121] outline-0 py-3 px-4 rounded-xl border border-gray-200 hover:shadow-xs w-full text-sm'
                    {...register('password', {
                      required: true,
                      maxLength: 20
                    })}
                  />
                </div>
                {/* Login btn */}
                <div className='py-3'>
                  <button
                    type='submit'
                    className='bg-white text-black w-full py-2 rounded-xl cursor-pointer font-semibold'
                  >
                    Login
                  </button>
                </div>
              </form>
              {/* or */}
              <div className='form-or-content py-5'>
                <p className='form-or-content-text text-sm font-normal text-center'>
                  Or continue with
                </p>
              </div>
              {/* Link to socials */}
              <div className='flex justify-center items-center gap-4'>
                <div className='bg-[#212121] border border-gray-400 px-15 py-3 rounded-2xl cursor-pointer'>
                  <FaGoogle />
                </div>
                <div className='bg-[#212121] border border-gray-400 px-15 py-3 rounded-2xl cursor-pointer'>
                  <FaGithub />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className='text-sm text-center flex justify-center items-center gap-1'>
              Don't have an account?{' '}
              <Link to={'/signup'} className='underline'>
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
