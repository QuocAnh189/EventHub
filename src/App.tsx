// utils
import { lazy, Suspense, useContext, useEffect } from 'react'

//styles
import '@styles/index.scss'
import 'react-toastify/dist/ReactToastify.min.css'
import ThemeStyles from '@styles/theme'

//layouts
import MainLayout from '@layouts/main'

//route
import { Routes, Route } from 'react-router-dom'

//context
import { ThemeProvider } from 'styled-components'

//hook
import { ThemeContext } from './contexts/theme.context'

// components
// import MainLayout from '@layouts'
import Loader from '@components/Loader'
import { ToastContainer } from 'react-toastify'

//aos
import AOS from 'aos'
import 'aos/dist/aos.css'
import { IContextTheme } from '@interfaces/context.interface'

//pages
const Landing = lazy(() => import('@pages/landing/Landing'))
const SignIn = lazy(() => import('@pages/auth/Signin'))
const SignUp = lazy(() => import('@pages/auth/Signup'))
const Home = lazy(() => import('@pages/home/Home'))
const Overview = lazy(() => import('@pages/dashboard/Overview'))
const OverviewDetail = lazy(() => import('@pages/dashboard/Overview-Detail'))
const EventAnalysis = lazy(() => import('@pages/dashboard/Event-Analysis'))
const EventAnalysisDetail = lazy(() => import('@pages/dashboard/Event-Analysis-Detail'))
const Customer = lazy(() => import('@pages/dashboard/Customer'))
const Payment = lazy(() => import('@pages/dashboard/Payment'))
const EventDetail = lazy(() => import('@pages/events/Event-Detail'))
const Profile = lazy(() => import('@pages/setting/Profile'))
const Explore = lazy(() => import('@pages/explore/Explore'))
const CreateEvent = lazy(() => import('@pages/events/Create-Event'))
const TopEvent = lazy(() => import('@pages/events/Top-Event'))
const MyEvent = lazy(() => import('@pages/events/My-Event'))
const TrashEvent = lazy(() => import('@pages/events/Trash-Event'))
const Calendar = lazy(() => import('@pages/calendar/Calendar'))
const Order = lazy(() => import('@pages/order/index'))
const Review = lazy(() => import('@pages/review/Review'))
const NotFound = lazy(() => import('@pages/errors/NotFound'))

function App() {
  const { theme }: IContextTheme = useContext(ThemeContext)

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: 'ease-in-sine',
      delay: 100
    })
    AOS.refresh()
  }, [])

  return (
    <ThemeProvider theme={{ theme: theme }}>
      <ThemeStyles />
      <ToastContainer theme={theme} autoClose={2000} style={{ padding: '20px' }} />
      <Suspense fallback={<Loader />}>
        <div className='main overflow-scroll no-scrollbar'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/organization' element={<MainLayout />}>
              <Route path='/organization/' element={<Home />} />
              <Route path='/organization/dashboard/overview' element={<Overview />} />
              <Route path='/organization/dashboard/overview-detail' element={<OverviewDetail />} />
              <Route path='/organization/dashboard/event-analysis' element={<EventAnalysis />} />
              <Route path='/organization/dashboard/event-analysis/:id' element={<EventAnalysisDetail />} />
              <Route path='/organization/dashboard/customer' element={<Customer />} />
              <Route path='/organization/dashboard/payment' element={<Payment />} />
              <Route path='/organization/explore' element={<Explore />} />
              <Route path='/organization/event/:id' element={<EventDetail />} />
              <Route path='/organization/create-event' element={<CreateEvent />} />
              <Route path='/organization/top-event' element={<TopEvent />} />
              <Route path='/organization/my-event' element={<MyEvent />} />
              <Route path='/organization/trash-event' element={<TrashEvent />} />
              <Route path='/organization/calendar' element={<Calendar />} />
              <Route path='/organization/order' element={<Order />} />
              <Route path='/organization/review' element={<Review />} />
              <Route path='/organization/settings/profile' element={<Profile />} />
            </Route>
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
