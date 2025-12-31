import { BrowserRouter, Route, Routes } from 'react-router'
import LoginPage from '../pages/auth/Auth'
import Dashboard from '../pages/dashboard/Dashboard'
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import ThemeProvider from '../context/ThemeContext'
import Settings from '../pages/settings/Settings'
import User from '../pages/users/User'

const RoutePath = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/user' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default RoutePath
