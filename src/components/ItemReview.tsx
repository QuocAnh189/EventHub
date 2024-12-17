//hooks
import { useState } from 'react'
import { useSubmenu } from '@hooks/useSubmenu'

//component
import RatingStars from '@ui/RatingStars'
import ConfirmDialog from './Dialog'
import { Divider } from '@mui/material'
import Submenu from '@ui/Submenu'
import SubmenuTrigger from '@ui/SubmenuTrigger'
import ModalUpdate from '@pages/review/components/ModalUpdate'

//interfaces
import { IReview } from '@interfaces/contents'

//assets
import userDefault from '@assets/images/common/user_default.png'
import dayjs from 'dayjs'

//redux
import { useDeleteReviewMutation } from '@redux/apis/review.api'
import { toast } from 'react-toastify'

interface IProps {
  index: number
  review: IReview
  ownerId: string
  userId: string
}

const ItemReview = (props: IProps) => {
  const { index, review, ownerId, userId } = props

  const { anchorEl, open, handleClick, handleClose } = useSubmenu()
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [modalUpdate, setModalUpdate] = useState<boolean>(false)

  const [DeleteReview, { isLoading: loadingDeleteReview }] = useDeleteReviewMutation()

  const handleDeleteReview = async () => {
    try {
      const result = await DeleteReview(review.id).unwrap()
      if (result) {
        toast.success('Delete review successfully')
        setOpenDialog(false)
      }
    } catch (e) {
      toast.error('Something went wrong')
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
      <div className='flex items-center justify-between gap-2'>
        <p className='text-gray500'>{review.content}.</p>
        {review.user.id === userId && (
          <div>
            <SubmenuTrigger onClick={handleClick} />
            <Submenu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <div className='py-5 pl-6 pr-8'>
                <div className='flex flex-col gap-3'>
                  <button onClick={() => setModalUpdate(true)} className='menu-btn subheading-2'>
                    <span className='icon-wrapper'>
                      <i className='icon icon-user' />
                    </span>
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setOpenDialog(true)
                    }}
                    className='menu-btn subheading-2'
                  >
                    <span className='icon-wrapper'>
                      <i className='icon icon-user' />
                    </span>
                    Delete
                  </button>
                </div>
              </div>
            </Submenu>
          </div>
        )}
      </div>
      <Divider />

      {modalUpdate && <ModalUpdate modalOpen={modalUpdate} setModalOpen={setModalUpdate} review={review} />}

      {openDialog && (
        <ConfirmDialog
          title='Delete Comment'
          description='Do you want to delete this comment ?'
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
