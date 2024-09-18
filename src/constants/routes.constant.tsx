import { Route } from '@interfaces/common.interface'

//icon
import { IoHomeOutline } from 'react-icons/io5'
import { MdDashboard } from 'react-icons/md'
import { MdEventAvailable } from 'react-icons/md'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { MdOutlinePreview } from 'react-icons/md'
import { MdMenuBook } from 'react-icons/md'
import { BiHelpCircle } from 'react-icons/bi'
import { IoSettingsOutline } from 'react-icons/io5'

const ROUTES: Route[] = [
  {
    name: 'home',
    icon: <IoHomeOutline size={20} />,
    path: '/organization'
  },
  {
    name: 'dashboard',
    icon: <MdDashboard size={20} />,
    links: [
      { name: 'overview', path: '/organization/dashboard/overview' },
      {
        name: 'event analysis',
        path: '/organization/dashboard/event-analysis'
      },
      { name: 'customer', path: '/organization/dashboard/customer' },
      { name: 'payment', path: '/organization/dashboard/payment' }
    ]
  },
  {
    name: 'event',
    icon: <MdEventAvailable size={20} />,
    links: [
      { name: 'top events', path: '/organization/top-event' },
      { name: 'my events', path: '/organization/my-event' },
      { name: 'trash events', path: '/organization/trash-event' },
      { name: 'create event', path: '/organization/create-event' }
    ]
  },
  {
    name: 'calendar',
    icon: <FaRegCalendarAlt size={20} />,
    path: '/organization/calendar'
  },
  {
    name: 'orders',
    icon: <MdMenuBook size={20} />,
    path: '/organization/order'
  },
  {
    name: 'reviews',
    icon: <MdOutlinePreview size={20} />,
    path: '/organization/review'
  },
  {
    name: 'faq',
    icon: <BiHelpCircle size={20} />,
    path: '/organization/faq'
  },
  {
    name: 'settings',
    icon: <IoSettingsOutline size={20} />,
    links: [{ name: 'profile', path: '/organization/settings/profile' }]
  }
]

export default ROUTES
