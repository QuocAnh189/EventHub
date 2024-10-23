//hooks
import { useEffect } from 'react'
import { useAppDispatch } from '@hooks/useRedux'

//components
import SearchHome from './components/SearchHome'
import BestEvents from './components/BestEvents'
import BannerPic from './components/BannerPic'
import UpcomingEvents from './components/UpComingEvents'
import AboutUs from './components/AboutUs'

//assets
import PosterOne from '@assets/images/event/event_poster.png'
import PosterTwo from '@assets/images/event/event_subposter.png'

//redux
import { useGetCategoriesQuery } from '@redux/apis/category.api'
import { setCategories } from '@redux/slices/category.slice'

const Home = () => {
  const dispatch = useAppDispatch()

  const { data: categories, isSuccess } = useGetCategoriesQuery()

  useEffect(() => {
    if (isSuccess) {
      console.log(categories)
      dispatch(setCategories(categories))
    }
  }, [isSuccess])

  return (
    <div className='flex flex-col items-center'>
      <SearchHome />
      <BestEvents />
      <BannerPic img={PosterOne} />
      <UpcomingEvents />
      <BannerPic img={PosterTwo} />
      <AboutUs />
    </div>
  )
}

export default Home
