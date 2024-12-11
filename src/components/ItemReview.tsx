import { useState } from 'react'

//component
import RatingStars from '@ui/RatingStars'
import ConfirmDialog from './Dialog'
import { Divider } from '@mui/material'

//interfaces
import { IReview } from '@interfaces/contents'

//assets
import userDefault from '@assets/images/common/user_default.png'
import dayjs from 'dayjs'

//redux
import { useDeleteReviewMutation } from '@redux/apis/event.api'

interface Props {
  index: number
  review: IReview
  ownerId: string
  userId: string
}

const ItemReview = (props: Props) => {
  const { index, review, ownerId, userId } = props
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const [deleteReview, { isLoading: loadingDeleteReview }] = useDeleteReviewMutation()

  const handleDeleteReview = async () => {
    try {
      const result = await deleteReview({ eventId: review.eventId, reviewId: review.id }).unwrap()
      if (result) {
        setOpenDialog(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div key={`index${index}`} className='space-y-4'>
      <div className='flex items-center justify-between gap-2'>
        <div className='flex items-center gap-2'>
          <img
            src={review.user.avatarUrl ? review.user.avatarUrl : userDefault}
            alt=''
            className='w-[40px] h-[40px] object-cover rounded-full'
          />
          <div className=''>
            <div className='flex items-center gap-2'>
              <p className='font-semibold text-header'>{review.user.fullName}</p>
              {review.user.id === ownerId && <p className='font-medium text-header'>(Author)</p>}
            </div>
            <div className='flex items-center'>
              <RatingStars rating={review.rate} />
            </div>
          </div>
        </div>
        <p className='text-sm text-gray500'>{dayjs(review.createdAt).format('DD/MM/YYYY hh:mm A').toString()}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-gray500'>{review.content}.</p>
        {review.user.id === userId && (
          <button
            onClick={() => {
              setOpenDialog(true)
            }}
            className='font-medium text-header hover:underline text-textError'
          >
            Delete
          </button>
        )}
      </div>
      <Divider />

      {openDialog && (
        <ConfirmDialog
          title='Delete Comment'
          description='Do you want to delete this message'
          open={openDialog}
          setOpen={(value: any) => {
            setOpenDialog(value)
          }}
          action='Ok'
          disabled={loadingDeleteReview}
          onHandle={handleDeleteReview}
        />
      )}
    </div>
  )
}

export default ItemReview
