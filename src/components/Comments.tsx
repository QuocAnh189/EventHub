// hook
import { useEffect, useState } from 'react'
import { usePagination } from '@hooks/index'

//component
import FormControl from '@mui/material/FormControl'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress'
import Pagination from '@ui/Pagination'
import ConfirmDialog from './Dialog'
import { toast } from 'react-toastify'

//icons
import { MdStarRate } from 'react-icons/md'

//interface and type
import { IMetadataReviewResponse, initParamsReview, IReviewEventPayload } from '@type/event.type'
import { IReview } from 'interfaces/contents/review.interface'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { useGetReviewsByEventIdQuery, useAddReviewMutation, useDeleteReviewMutation } from '@redux/apis/event.api'

//util
import dayjs from 'dayjs'

//assets
import userDefault from '@assets/images/common/user_default.png'

//data
import reviews_data from '@db/reviews'

interface Props {
  eventId: string
  ownerId: string
}

const ItemReviews = (props: Props) => {
  const { eventId, ownerId } = props

  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [reviewIdSelected, setReviewIdSelected] = useState<string>('')

  const [metadata, setMetadata] = useState<IMetadataReviewResponse>()
  const [reviews, setReviews] = useState<IReview[]>([])

  const pagination = usePagination(metadata?.totalCount! || reviews_data.length, initParamsReview.size)

  const { data } = useGetReviewsByEventIdQuery({ ...initParamsReview, eventId, page: pagination.currentPage || 1 })
  const [deleteReview, { isLoading: loadingDeleteReview }] = useDeleteReviewMutation()

  useEffect(() => {
    if (data) {
      setMetadata(data.metadata)
      setReviews(data.items)
    }
  }, [data])

  const handleDeleteReview = async (reviewId: string) => {
    try {
      const result = await deleteReview({ eventId, reviewId }).unwrap()
      if (result) {
        setOpenDialog(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='space-y-2'>
      {reviews_data.slice(0, 3).map((review: IReview, index: number) => (
        <div key={`index${index}`} className='space-y-4'>
          <div className='flex items-center justify-between gap-2'>
            <div className='flex items-center gap-2'>
              <img
                src={review.userAvatar ? review.userAvatar : userDefault}
                alt=''
                className='w-[40px] h-[40px] object-cover rounded-full'
              />
              <div className=''>
                <div className='flex items-center gap-2'>
                  <p className='font-semibold text-header'>{review.fullName}</p>
                  {review.userId === ownerId && <p className='font-medium text-header'>(Author)</p>}
                </div>
                <div className='flex items-center'>
                  {[1, 2, 3, 4, 5].map((rate, index) => (
                    <MdStarRate key={`rate-${index}`} color={rate <= review.rate ? 'orange' : 'gray'} />
                  ))}
                </div>
              </div>
            </div>
            <p className='text-sm text-gray500'>{dayjs(review.createdAt).format('DD/MM/YYYY hh:mm A').toString()}</p>
          </div>
          <div className='flex items-center gap-2'>
            <p className='text-gray500'>{review.content}.</p>
            {review.userId === user?.id && (
              <button
                onClick={() => {
                  setOpenDialog(true)
                  setReviewIdSelected(review.id!)
                }}
                className='font-medium text-header hover:underline text-textError'
              >
                Delete
              </button>
            )}
          </div>
          <Divider />
        </div>
      ))}
      {reviews.length === 0 && <p className='text-header text-center text-xl w-full'>No comments here</p>}
      <div className='w-full relative'>
        <div className='absolute right-0 translate-x-[50%]'>
          {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
        </div>
      </div>
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
          onHandle={() => {
            handleDeleteReview(reviewIdSelected)
          }}
        />
      )}
    </div>
  )
}

interface Props {
  eventId: string
  ownerId: string
}

const Comments = (props: Props) => {
  const { eventId, ownerId } = props

  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const [addReview, { isLoading }] = useAddReviewMutation()

  const [rate, setRate] = useState<number>(0.0)
  const [content, setContent] = useState<string>('')

  const handleAddReviews = async () => {
    const data: IReviewEventPayload = { userId: user?.id!, eventId, content, rate }
    try {
      const result = await addReview({ eventId, data }).unwrap()
      if (result) {
        toast.success('Add review successfully')
        setRate(0)
        setContent('')
      }
    } catch (e: any) {
      if (e.data.errors[0] === 'Rate is required') {
        toast.error('Rate is not zero')
      }
    }
  }

  return (
    <div className='space-y-8 mdl:w-1/2 mdl:pl-[150px]'>
      <div className='w-full space-y-4'>
        <ItemReviews eventId={eventId} ownerId={ownerId} />
      </div>

      <div className='w-full flex flex-col gap-2'>
        <div className='flex flex-row items-center gap-2 mt-10'>
          <p className='text-header'>Rate</p>
          <button className='flex items-center gap-1 label-text leading-none w-[30px] hover:cursor-pointer'>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <i
                onClick={() => setRate(item)}
                key={`rate-${index}`}
                className={`icon-star-solid text-${item <= rate ? 'yellow' : 'gray'}`}
              />
            ))}
          </button>
        </div>
        <FormControl>
          <TextField
            value={content}
            onChange={(e) => {
              setContent(e.target.value)
            }}
            sx={{
              '& label': { color: 'var(--header)' },
              '& .MuiOutlinedInput-input': {
                color: 'var(--header)'
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'var(--header)'
                },
                '&:hover fieldset': {
                  borderColor: 'var(--header)'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'var(--header)'
                }
              }
            }}
            error={false}
            multiline={true}
            rows={2}
            id='outlined-basic'
            label='Comments here'
          />
        </FormControl>
        <button disabled={isLoading} onClick={handleAddReviews} className='btn btn-primary hover:bg-primary-400 w-40'>
          {isLoading ? <CircularProgress size={24} /> : 'Post comment'}
        </button>
      </div>
    </div>
  )
}

export default Comments
