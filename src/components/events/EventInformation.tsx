//hooks
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

//components
import Loading from '@components/Loading'
import FormToChat from '@components/FormToChat'
import { toast } from 'react-toastify'

//icons
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { IoMdTime } from 'react-icons/io'
import { FaUsers } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { RiSubtractLine } from 'react-icons/ri'

//interfaces
import { IEvent, IReason, ISubImage } from 'interfaces/contents/event.interface'

//util
import dayjs from 'dayjs'

//assets
import userDefault from '@assets/images/common/user_default.png'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { useFollowUserMutation, useUnFollowUserMutation, useCheckFollowerQuery } from '@redux/apis/user.api'

//i18n
import { withTranslation } from 'react-i18next'
import TimeDifference from '@utils/time_difference'

interface IProps {
  t: any
  event: IEvent
}

const EventInformation = (props: IProps) => {
  const { t, event } = props

  const navigate = useNavigate()

  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const { data: isFollow } = useCheckFollowerQuery(event?.creator.id!)

  const totalQuantity = useMemo(() => {
    const totalQuantity = event?.ticketTypes?.reduce((total: any, currentValue: any) => {
      return total + currentValue.quantity
    }, 0)
    return totalQuantity
  }, [])

  const [FollowUser, { isLoading: loadingFollower }] = useFollowUserMutation()
  const [UnfollowUser, { isLoading: loadingUnFollower }] = useUnFollowUserMutation()

  const timeDifference = useMemo(() => {
    const { hours, days, minutes } = TimeDifference(event?.startTime!, event?.endTime!)
    return { hours, days, minutes }
  }, [])

  const handleFollowUser = async () => {
    if (!user) {
      navigate('/signin')
      return
    }
    try {
      const result = isFollow
        ? await UnfollowUser(event?.creator.id).unwrap()
        : await FollowUser(event?.creator.id).unwrap()

      if (result) {
        toast.success(isFollow ? 'UnFollow successfully' : 'Follow successfully')
      }
    } catch (e) {
      toast.error('Something went wrong')
      console.log(e)
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-center bg-body flex-wrap'>
        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <FaRegCalendarAlt color='#3D56F0' size={50} />
          <p className='h6 text-header'>{t('information.time')}</p>
          <p className='text-sm text-header'>{dayjs(event?.startTime).format('dddd, DD/MM/YYYY hh:mm A').toString()}</p>
        </div>

        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <IoLocationOutline color='#3D56F0' size={50} />
          <p className='h6 text-header'>{t('information.location')}</p>
          <p className='text-sm text-header'>{event?.location}</p>
        </div>

        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <IoMdTime color='#3D56F0' size={50} />
          <p className='h6 text-header'>{t('information.happen')}</p>
          <p className='text-sm text-header'>
            {timeDifference.days ? `${timeDifference.days} days` : ''}
            {timeDifference.hours ? `${timeDifference.hours} hour` : ''}
            {timeDifference.minutes ? `${timeDifference.minutes} minute` : ''}
          </p>
        </div>

        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <FaUsers color='#3D56F0' size={50} />
          <p className='h6 text-header'>{t('information.participant')}</p>
          <p className='text-sm text-header'>{totalQuantity || 200}</p>
        </div>
      </div>

      <div className='flex flex-col px-[100px] gap-8'>
        <div className='space-y-2'>
          <h5 className='h5'>{t('information.organization_by')}</h5>
          <div className='flex items-center gap-3'>
            <img
              src={event?.creator.avatarUrl ? event?.creator.avatarUrl : userDefault}
              alt=''
              className='w-[50px] h-[50px] object-cover rounded-full'
            />
            <div>
              <p className='font-semibold text-header'>{event?.creator.userName}</p>
              <button onClick={handleFollowUser}>
                {loadingFollower || loadingUnFollower ? (
                  <Loading />
                ) : (
                  <div className='flex items-center gap-1 px-2 py-1 rounded-md bg-primary hover:bg-primary-300'>
                    {isFollow ? <RiSubtractLine color='white' size={24} /> : <IoMdAdd color='white' size={24} />}
                    <p className='text-white'>{isFollow ? t('information.follow') : t('information.unfollow')}</p>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className='space-y-1'>
          <h5 className='h4'>{t('information.description')}</h5>
          <p className='text-header'>{event?.description}</p>
          <h6 className='h4 text-header'>3 {t('information.reasons_to_attend_the_event')}:</h6>

          {event?.reasons?.map((reason: IReason, index: number) => (
            <p key={`reason-${index}`} className='text-header'>
              {index + 1}. {reason.content}
            </p>
          ))}
        </div>
      </div>

      <div className='flex items-center justify-center w-full gap-8'>
        {event?.subImages.map((item: ISubImage, index: number) => (
          <img
            key={`subimage-${index}`}
            loading='lazy'
            className='h-[200px] w-[200px] rounded-lg'
            src={
              item.imageUrl ||
              'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
            }
            alt=''
          />
        ))}
      </div>

      {user?.id !== event?.creator?.id && (
        <FormToChat
          eventId={event.id!}
          hostId={event.creator.id!}
          userId={user?.id!}
          eventName={event.name}
          userEmail={event?.creator?.email!}
          userFullName={event?.creator?.fullName!}
        />
      )}
    </div>
  )
}

export default withTranslation('event_detail')(EventInformation)
