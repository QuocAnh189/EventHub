/* eslint-disable react-hooks/exhaustive-deps */

//hook
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

//icons
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { IoMdTime } from 'react-icons/io'
import { FaUsers } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'

//style
import { IEvent } from 'interfaces/contents/event.interface'
import dayjs from 'dayjs'

//assets
import userDefault from '@assets/common/user_default.png'

//redux
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { useFollowUserMutation, useUnfollowUserMutation } from '@redux/apis/user.api'
import { toast } from 'react-toastify'
import { setUser } from '@redux/slices/user.slice'
import { FormToChat } from '../FormToChat'

//i18
import { withTranslation } from 'react-i18next'

interface Props {
  event: IEvent
}

const TranslatedEventInformation = (props: Props) => {
  const { event } = props

  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const totalQuality = useMemo(() => {
    const calculation = event.ticketTypes?.reduce((total: number, currentValue: any) => {
      return total + currentValue.quantity
    }, 0)
    return calculation
  }, [])

  const isFollow = user?.followingIds?.includes(event.creatorId)

  const [followUser] = useFollowUserMutation()
  const [unfollowUser] = useUnfollowUserMutation()

  const handleFollowUser = async () => {
    if (!user) {
      navigate('/signin')
      return
    }
    try {
      const result = isFollow
        ? await unfollowUser({ followerId: user?.id!, followedId: event.creatorId }).unwrap()
        : await followUser({ followerId: user?.id!, followedId: event.creatorId }).unwrap()

      if (result) {
        toast.success(isFollow ? 'unFollow successfully' : 'follow successfully')
        dispatch(setUser(result))
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-center bg-body'>
        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <FaRegCalendarAlt color='#3D56F0' size={50} />
          <p className='font-semibold text-header'>Time</p>
          <p className='text-gray500 text-[14px] text-header'>
            {dayjs(event.startTime).format('dddd, DD/MM/YYYY hh:mm A').toString()}
          </p>
        </div>

        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <IoLocationOutline color='#3D56F0' size={50} />
          <p className='font-semibold text-header'>Location</p>
          <p className='text-gray500 text-[14px] text-header'>{event.location}</p>
        </div>

        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <IoMdTime color='#3D56F0' size={50} />
          <p className='font-semibold text-header'>Happen</p>
          <p className='text-gray500 text-[14px] text-header'>9 day</p>
        </div>

        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <FaUsers color='#3D56F0' size={50} />
          <p className='font-semibold text-header'>Participant</p>
          <p className='text-gray500 text-[14px] text-header'>{event.ticketTypes.length ? totalQuality : 0}</p>
        </div>
      </div>

      <div className='flex flex-col px-[100px] gap-8'>
        <div className='space-y-2'>
          <h5>Organization By</h5>
          <div className='flex items-center gap-3'>
            <img
              src={event?.creator.avatar ? event?.creator.avatar : userDefault}
              alt=''
              className='w-[50px] h-[50px] object-cover rounded-full'
            />
            <div>
              <p className='font-semibold text-header'>{event?.creator.fullName}</p>
              <button onClick={handleFollowUser} className='flex items-center gap-1 px-2 py-1 rounded-md bg-primary'>
                <IoMdAdd color='white' size={24} />
                <p className='text-white'>{isFollow ? 'unfollow' : 'follow'}</p>
              </button>
            </div>
          </div>
        </div>

        <div className='space-y-1'>
          <h5>Event Description</h5>
          <p className='text-header'>{event.description}</p>
          <h6 className='text-header'>3 Reasons to attend the event:</h6>

          {event.reasons?.map((reason: string, index: number) => (
            <p key={`reason${index}`} className='text-header'>
              {index + 1}. {reason}
            </p>
          ))}
        </div>
      </div>

      <div className='flex items-center justify-center w-full gap-8'>
        {event?.subImages.map(
          (image: any, index: number) =>
            image && (
              <img
                key={`subimage-${index}`}
                loading='lazy'
                className='h-[200px] w-[200px] rounded-lg'
                src={image || ''}
                alt=''
              />
            )
        )}
      </div>

      {user?.id !== event?.creator?.id && (
        <FormToChat
          eventId={event.id!}
          hostId={event.creatorId}
          userId={user?.id!}
          eventName={event.name}
          userEmail={event?.creator?.email!}
          userFullName={event?.creator?.fullName!}
        />
      )}
    </div>
  )
}

export const EventInformation = withTranslation('event')(TranslatedEventInformation)
