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
const EventDetail = lazy(() => import('@pages/events/Event-Detail'))
const Profile = lazy(() => import('@pages/setting/Profile'))
const Explore = lazy(() => import('@pages/explore/Explore'))
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
              <Route path='/organization/explore' element={<Explore />} />
              <Route path='/organization/event/:id' element={<EventDetail />} />
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
