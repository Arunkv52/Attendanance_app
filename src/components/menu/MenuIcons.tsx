import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdMenuOpen } from 'react-icons/md'
import { MdDashboard } from 'react-icons/md'
import { FiUser } from 'react-icons/fi'
import { IoSettingsOutline } from 'react-icons/io5'
import { FiLogOut } from 'react-icons/fi'
import { FiCalendar } from "react-icons/fi";




export const MenuIconsRow = [
  {
    title: 'Menu',
    icon: <MdMenuOpen />,
    link: '/menu'
  },
  
]

export const MenuIconsRow1 = [
 
  {
    title: 'Notification',
    icon: <IoMdNotificationsOutline />,
    link: '/notification'
  }
]

export const MenuIconsRow2 = [
  {
    title: 'Dashboard',
    icon: <MdDashboard />,
    link: '/dashboard'
  },
  {
    title: 'Users',
    icon: <FiUser />,
    link: '/user'
  }
]


export const MenuIconsRow3 = [
  {
    title: 'Holidays',
    icon: <FiCalendar />,
    link: '/holidays'
  },
  {
    title: 'Logout',
    icon: <FiLogOut />,
    link: '/logout'
  }
  
]