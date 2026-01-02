import { FaGoogle } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'

const Signup = () => {
  interface Inputs {
    useremail: string
    signupuser: any
    signuppassword: any
  }

  // types of data
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>()

  const signupForm = (data: any) => {
    const user = {
      username: data.useremail,
      email: data.signupuser,
      password: data.signuppassword
    }

    fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(result => {
        console.log('User created:', result)
      })
      .catch(error => {
        console.error('Signup error:', error)
      })
    reset();
  }

  return (
    <>
      <div className='login-container min-h-dvh  md:p-0 p-3'>
        <div className='container bg-[#171717] text-white py-10 px-10 max-w-125 md:absolute md:top-1/12 md:left-1/3 relative top-20 rounded-xl border-2 border-blue-300'>
          <div className='sign-up'>
            <div className='head text-center'>
              <h1 className='text-2xl font-semibold'>Welcome back</h1>
              <p>Create your account HD Verse account</p>
            </div>
            <div className='form-container py-5'>
              <form onSubmit={handleSubmit(signupForm)}>
                {/* Username */}
                <div className='flex flex-col justify-start items-start gap-3'>
                  <label htmlFor='useremail'>Enter Email Address</label>
                  <input
                    type='email'
                    id='useremail'
                    placeholder='admin@gmail.com'
                    className='bg-[#212121] outline-0 py-3 px-4 rounded-xl border border-gray-200 hover:shadow-xs w-full text-sm'
                    {...register('useremail', {
                      required: true,
                      maxLength: 30
                    })}
                  />
                </div>
                {/* Username */}
                <div className='flex flex-col justify-start items-start gap-3 py-3'>
                  <label htmlFor='signupuser'>Username</label>
                  <input
                    type='text'
                   
                    id='name'
                    placeholder='Admin'
                    className='bg-[#212121] outline-0 py-3 px-4 rounded-xl border border-gray-200 hover:shadow-xs w-full text-sm'
                    {...register('signupuser', {
                      required: true,
                      maxLength: 20
                    })}
                  />
                </div>
                {/* Password */}
                <div className='flex flex-col justify-start items-start gap-3 py-0'>
                  <label htmlFor='signuppassword'>Password</label>
                  <input
                    type='password'
                    
                    id='password'
                    placeholder='Enter your password'
                    className='bg-[#212121] outline-0 py-3 px-4 rounded-xl border border-gray-200 hover:shadow-xs w-full text-sm'
                    {...register('signuppassword', {
                      required: true,
                      maxLength: 20
                    })}
                  />
                </div>
                {/* Login btn */}
                <div className='mt-5'>
                  <button
                    type='submit'
                    className='bg-white text-black w-full py-2 rounded-xl cursor-pointer font-semibold'
                  >
                    Create an account
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
              Already have an account?{' '}
              <Link to={'/'} className='underline'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
