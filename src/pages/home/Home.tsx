//hooks
import { useEffect } from 'react'
import { useAppDispatch } from '@hooks/useRedux'

//components
import SearchHome from './components/SearchHome'
import BestEvents from './components/BestEvents'
import BannerPic from './components/BannerPic'
import UpcomingEvents from './components/UpComingEvents'
import AboutUs from './components/AboutUs'

//redux
import { useGetCategoriesQuery } from '@redux/apis/category.api'
import { useGetCouponsByCreatedQuery } from '@redux/apis/coupon.api'
import { setCategories } from '@redux/slices/category.slice'
import { setCoupons } from '@redux/slices/coupon.slice'

const Home = () => {
  const dispatch = useAppDispatch()

  const { data: categories, isSuccess: isSuccessCategories } = useGetCategoriesQuery()
  const { data: coupons, isSuccess: isSuccessCoupons } = useGetCouponsByCreatedQuery({ pageSize: 20 })

  useEffect(() => {
    if (isSuccessCategories && categories) {
      dispatch(setCategories(categories))
    }
  }, [isSuccessCategories])

  useEffect(() => {
    if (isSuccessCoupons && coupons) {
      dispatch(setCoupons(coupons.items))
    }
  }, [isSuccessCoupons])

  return (
    <div className='flex flex-col items-center'>
      <SearchHome />
      <BestEvents />
      <BannerPic img='https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg' />
      <UpcomingEvents />
      <BannerPic img='https://res.cloudinary.com/dadvtny30/image/upload/v1712409118/eventhub/event/infflklkudlatzvf8gsz.jpg' />
      <AboutUs />
    </div>
  )
}

export default Home
