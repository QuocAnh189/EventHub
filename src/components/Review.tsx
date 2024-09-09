//hooks
import { useState, useEffect } from 'react'
import { useTheme } from '@contexts/theme.context'
import { useWindowSize } from 'react-use'
import useMeasure from 'react-use-measure'

//layout
import { TruncatedText } from '@layouts/components/navbar/TruncatedText'

//components
import Spring from './Spring'
import SubmenuTrigger from '@ui/SubmenuTrigger'
import RatingStars from '@ui/RatingStars'
import Timestamp from '@ui/Timestamp'
import ModalBase from '@ui/ModalBase'

//interfaces
import { IReview } from 'interfaces/contents/review.interface'

//utils
import dayjs from 'dayjs'

//assets
import userDefault from '@assets/images/common/user_default.png'

interface UserProps {
  userName: string
  userAvatar: string
  email: string
  wrapperClass: string
}

const User = (props: UserProps) => {
  const { userName, userAvatar, email, wrapperClass } = props

  return (
    <div className={`flex items-center ${wrapperClass}`}>
      <img
        className='bg-input-border shrink-0 w-10 h-10 rounded-md md:w-[63px] md:h-[63px]'
        src={userAvatar ? userAvatar : userDefault}
        alt={userName}
        width={63}
        height={63}
      />
      <div className='flex flex-col gap-1.5 md:gap-2.5'>
        <h6 className='truncate max-w-[120px] xs:max-w-[180px]'>{userName}</h6>
        <a className='text-btn' href={`mailto:${email}`}>
          <span className='truncate max-w-[120px] xs:max-w-[180px]'>{email}</span>
        </a>
      </div>
    </div>
  )
}

interface IEventProps {
  coverImage: string
  name: string
  wrapperClass: string
}

const EventModal = (props: IEventProps) => {
  const { coverImage, name, wrapperClass } = props

  return (
    <div className={`flex items-center ${wrapperClass}`}>
      <img
        className='bg-input-border shrink-0 w-10 h-10 rounded-md md:w-[63px] md:h-[63px]'
        src={coverImage ? coverImage : userDefault}
        alt=''
        width={63}
        height={63}
      />
      <div className='flex flex-col gap-1.5 md:gap-2.5'>
        <h6 className='max-w-[120px] xs:max-w-[180px]'>{name}</h6>
        {/* <a className='text-btn' href={`mailto:${email}`}>
          <span className='truncate max-w-[120px] xs:max-w-[180px]'>{email}</span>
        </a> */}
      </div>
    </div>
  )
}

interface Props {
  review: IReview
  index: number
}

const Review = (props: Props) => {
  const { index, review } = props

  const { theme } = useTheme()
  const { width } = useWindowSize()
  const [ref, { width: refWidth }] = useMeasure()
  const bgColor = theme === 'light' ? 'var(--body)' : 'rgba(39,50,65,.2)'

  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    setModalOpen(false)
  }, [width])

  return (
    <Spring index={index}>
      <div className='p-5' style={{ backgroundColor: index % 2 === 0 ? bgColor : 'var(--widget)' }}>
        <div className='flex items-center justify-between'>
          <User
            userName={review.fullName}
            userAvatar={review.userAvatar}
            email={review.email}
            wrapperClass='gap-5 md:gap-[30px] md:w-[300px]'
          />
          {width >= 768 && (
            <div className='flex items-center gap-[18px] xl:ml-[30px] xl:mr-10 xl:w-[200px]'>
              <RatingStars rating={review.rate} />
              <span className='label-text'>{review.rate}</span>
            </div>
          )}
          {width >= 1280 && (
            <div
              className='flex flex-1 gap-5 bg-input-bg border border-input-border h-20 rounded-md
                             max-w-[588px] p-4 overflow-hidden'
            >
              <div className='flex-1 max-w-[513px]' ref={ref}>
                <TruncatedText className='flex-1' text={review.content} width={refWidth} />
              </div>
              <button
                className='self-start icon text-[18px] mt-1'
                onClick={() => setModalOpen(true)}
                aria-label='See details'
              >
                <i className='icon-message-arrow-up-right-regular' />
              </button>
            </div>
          )}
          {width >= 1024 && <Timestamp date={review.createdAt} wrapperClass='xl:ml-[30px] xl:mr-[75px]' />}
          <div className='flex gap-4 items-center'>
            <button
              className='icon text-[18px] mt-0.5 xl:hidden'
              onClick={() => setModalOpen(true)}
              aria-label='See details'
            >
              <i className='icon-message-arrow-up-right-regular' />
            </button>
            <SubmenuTrigger />
          </div>
        </div>
      </div>
      <ModalBase open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className='card relative no-hover flex flex-col w-full max-w-[400px] will-change-transform'>
          <button
            className='absolute top-5 right-5 icon text-[18px] transition hover:text-red'
            onClick={() => setModalOpen(false)}
            aria-label='Close'
          >
            <i className='icon-circle-xmark-regular' />
          </button>
          <EventModal coverImage={review.eventCoverImage} name={review.eventName} wrapperClass='gap-4 mb-5' />
          <p className='flex gap-4 mb-2'>
            <span className='label-text'>Date: </span>
            <span className='text-sm font-medium'>{dayjs(review.createdAt).format('DD/MM/YYYY, hh:mm A')}</span>
          </p>
          <p className='flex gap-4 mb-2'>
            <span className='label-text'>UserName: </span>
            <span className='text-sm font-medium'>{review.fullName}</span>
          </p>
          <div className='flex gap-4 mb-6'>
            <span className='label-text'>Rate:</span>
            <RatingStars rating={review.rate} />
          </div>
          <div className='bg-input-bg rounded-md border border-input-border h-[240px] p-4 overflow-y-auto'>
            {review.content}
          </div>
        </div>
      </ModalBase>
    </Spring>
  )
}

export default Review
