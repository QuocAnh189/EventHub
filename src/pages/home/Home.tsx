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
import { useAppSelector } from '@hooks/useRedux'
import { useGetCategoriesQuery } from '@redux/apis/category.api'
import { useGetCouponsByCreatedQuery } from '@redux/apis/coupon.api'
import { setCategories } from '@redux/slices/category.slice'
import { setCoupons } from '@redux/slices/coupon.slice'
import { useGetFavouriteEventQuery } from '@redux/apis/event.api'
import { setCategoryIdsWishlist } from '@redux/slices/event.slice'
import { setSocket } from '@redux/slices/socket.slice'

//socket
import io from 'socket.io-client'

//interface
import { IUser } from '@interfaces/systems'

const Home = () => {
  const dispatch = useAppDispatch()

  const user: IUser = useAppSelector((state) => state.persistedReducer.user.user)
  // const socket = useAppSelector((state) => state.socket.socket)

  const { data: categories, isSuccess: isSuccessCategories } = useGetCategoriesQuery()
  const { data: coupons, isSuccess: isSuccessCoupons } = useGetCouponsByCreatedQuery({ pageSize: 20 })
  const { data: events, isSuccess: isSuccessEvents } = useGetFavouriteEventQuery({ pageSize: 20 })

  useEffect(() => {
    if (user?.id) {
      const socket = io('http://localhost:9000', {
        transports: ['websocket'],
        query: { id: user.id },
        reconnection: false
      })

      dispatch(setSocket(socket))
    }
  }, [])

  useEffect(() => {
    if (isSuccessCategories && categories) {
      dispatch(setCategories(categories))
    }
  }, [isSuccessCategories])

  useEffect(() => {
    if (isSuccessEvents && events) {
      dispatch(setCategoryIdsWishlist(events.items))
    }
  }, [isSuccessEvents])

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
