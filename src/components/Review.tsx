//hooks
import { useState, useEffect } from 'react'
import { useTheme } from '@contexts/theme.context'
import { useWindowSize } from 'react-use'
import useMeasure from 'react-use-measure'

//layout
import { TruncatedText } from '@layouts/components/navbar/TruncatedText'

//components
import Spring from './Spring'
import RatingStars from '@ui/RatingStars'
import Timestamp from '@ui/Timestamp'
import ModalBase from '@ui/ModalBase'
import ConfirmDialog from './Dialog'
import { toast } from 'react-toastify'

//interfaces
import { IReview } from 'interfaces/contents/review.interface'

//utils
import dayjs from 'dayjs'

//icon
import { HiTrash } from 'react-icons/hi'

//assets
import userDefault from '@assets/images/common/user_default.png'

//redux
import { useDeleteReviewMutation } from '@redux/apis/review.api'

//i18n
import { withTranslation } from 'react-i18next'

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

interface IProps {
  t: any
  review: IReview
  index: number
}

const Review = (props: IProps) => {
  const { t, index, review } = props

  const { theme } = useTheme()
  const { width } = useWindowSize()
  const [ref, { width: refWidth }] = useMeasure()
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const bgColor = theme === 'light' ? 'var(--body)' : 'rgba(39,50,65,.2)'

  const [modalOpen, setModalOpen] = useState(false)

  const [DeleteReview, { isLoading: loadingDelete }] = useDeleteReviewMutation()

  const handleDelete = async () => {
    try {
      const result = await DeleteReview(review.id).unwrap()
      if (result) {
        toast.success('Delete review successfully')
      }
    } catch (error) {
      console.error('Delete review error:', error)
    } finally {
      setOpenDialog(false)
    }
  }

  useEffect(() => {
    setModalOpen(false)
  }, [width])

  return (
    <Spring index={index}>
      <div className='p-5' style={{ backgroundColor: index % 2 === 0 ? bgColor : 'var(--widget)' }}>
        <div className='flex items-center justify-between'>
          <User
            userName={review.user.fullName}
            userAvatar={review.user.avatarUrl}
            email={review.user.email}
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
            <button
              onClick={() => {
                setOpenDialog(true)
              }}
              className='menu-btn subheading-2'
            >
              <HiTrash className='ml-1 h-6 w-6 text-primary' />
            </button>
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
          <EventModal coverImage={review.event.coverImageUrl} name={review.event.name} wrapperClass='gap-4 mb-5' />
          <p className='flex gap-4 mb-2'>
            <span className='label-text'>{t('modal.date')}: </span>
            <span className='text-sm font-medium'>{dayjs(review.createdAt).format('DD/MM/YYYY, hh:mm A')}</span>
          </p>
          <p className='flex gap-4 mb-2'>
            <span className='label-text'>{t('modal.username')}: </span>
            <span className='text-sm font-medium'>{review.user.userName}</span>
          </p>
          <div className='flex gap-4 mb-6'>
            <span className='label-text'>{t('modal.rate')}:</span>
            <RatingStars rating={review.rate} />
          </div>
          <p
            className={`flex gap-4 mb-2 ${
              review.isPositive ? 'bg-green' : 'bg-red'
            } w-20 items-center justify-center text-white rounded-lg`}
          >
            {review.isPositive ? 'positive' : 'negative'}
          </p>
          <div className='bg-input-bg text-justify rounded-md border border-input-border h-[240px] p-4 overflow-y-auto'>
            {review.content}
          </div>
        </div>
      </ModalBase>
      {openDialog && (
        <ConfirmDialog
          title='Delete Review'
          description={`Are you sure want to delete this review`}
          open={openDialog}
          setOpen={(value) => {
            setOpenDialog(value)
          }}
          action='Delete'
          onHandle={handleDelete}
          disabled={loadingDelete}
        />
      )}
    </Spring>
  )
}

export default withTranslation('review')(Review)
