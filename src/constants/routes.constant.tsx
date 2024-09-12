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
    name: 'Home',
    icon: <IoHomeOutline size={20} />,
    path: '/organization'
  },
  {
    name: 'Dashboard',
    icon: <MdDashboard size={20} />,
    links: [
      { name: 'Overview', path: '/organization/dashboard/overview' },
      {
        name: 'Event Analysis',
        path: '/organization/dashboard/event-analysis'
      },
      { name: 'Customer', path: '/organization/dashboard/customer' },
      { name: 'Payment', path: '/organization/dashboard/payment' }
    ]
  },
  {
    name: 'Event',
    icon: <MdEventAvailable size={20} />,
    links: [
      { name: 'Top Events', path: '/organization/top-event' },
      { name: 'My Events', path: '/organization/my-event' },
      { name: 'Trash Events', path: '/organization/trash-event' },
      { name: 'Create Event', path: '/organization/create-event' }
    ]
  },
  {
    name: 'Calendar',
    icon: <FaRegCalendarAlt size={20} />,
    path: '/organization/calendar'
  },
  {
    name: 'Orders',
    icon: <MdMenuBook size={20} />,
    path: '/organization/order'
  },
  {
    name: 'Reviews',
    icon: <MdOutlinePreview size={20} />,
    path: '/organization/review'
  },
  {
    name: 'FAQ',
    icon: <BiHelpCircle size={20} />,
    path: '/organization/faq'
  },
  {
    name: 'Settings',
    icon: <IoSettingsOutline size={20} />,
    links: [{ name: 'Profile', path: '/organization/settings/profile' }]
  }
]

export default ROUTES
