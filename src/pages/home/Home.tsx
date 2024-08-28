//hook
import { useEffect } from 'react'
import { useAppDispatch } from '@hooks/useRedux'

import { SearchHome, BestEvents, BannerPic, UpcomingEvents, AboutUs } from './components/index'

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
