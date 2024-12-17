// hook
import { useEffect, useState } from 'react'

// //component
import ItemReview from './ItemReview'
import Loading from './Loading'
import { toast } from 'react-toastify'
import Pagination from '@ui/Pagination'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { useCreateReviewMutation, useGetReviewsByEventIdQuery } from '@redux/apis/review.api'

//util
import classNames from 'classnames'
import { IReview } from '@interfaces/contents'
import { usePagination } from '@hooks/usePagination'

// //data
// import reviews_data from '@db/reviews'

//interface
import { IUser } from '@interfaces/systems'
// import { IReviewEventPayload } from '@type/event.type'

const initParams = {
  page: 1,
  pageSize: 5
}

interface Props {
  eventId: string
  ownerId: string
}

const Comments = (props: Props) => {
  const { eventId, ownerId } = props
  const user: IUser = useAppSelector((state) => state.persistedReducer.user.user)

  const [params, setParams] = useState(initParams)
  const { data } = useGetReviewsByEventIdQuery({ eventId, params })
  const [AddReview, { isLoading }] = useCreateReviewMutation()

  const [rate, setRate] = useState<number>(0.0)
  const [content, setContent] = useState<string>('')

  const handleAddReviews = async () => {
    const formData = new FormData()
    formData.append('userId', user?.id!)
    formData.append('eventId', eventId)
    formData.append('content', content)
    formData.append('rate', rate.toString())

    // const data: IReviewEventPayload = { userId: user?.id!, eventId, content, rate }
    try {
      const result = await AddReview(formData).unwrap()
      if (result) {
        setRate(0)
        setContent('')
        console.log('result', result)
        toast.success('Add review successfully')
      }
    } catch (e: any) {
      if (e.data.errors[0] === 'Rate is required') {
        toast.error('Rate is not zero')
      }
    }
  }

  const pagination = usePagination(data?.metadata.totalCount, data?.metadata.pageSize)

  useEffect(() => {
    setParams({ ...params, page: pagination.currentPage })
  }, [pagination.currentPage])

  return (
    <div className='space-y-8 mdl:w-full mdl:pl-[150px]'>
      <div className='w-1/2 space-y-4'>
        <div className='space-y-2'>
          <div className='w-full relative'>
            {data?.items.map((review: IReview, index: number) => (
              <ItemReview
                key={`review-${review.id}`}
                index={index}
                review={review}
                ownerId={ownerId}
                userId={user.id!}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        {pagination && pagination.maxPage > 1 && <Pagination pagination={pagination} />}
      </div>

      <div className='w-1/2 flex flex-col gap-2'>
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
        <textarea
          className={classNames(`field-input !h-[120px] !py-[15px] !overflow-y-auto`)}
          id='comment'
          value={content}
          placeholder='Comments here'
          onChange={(e) => setContent(e.target.value)}
        />
        <button disabled={isLoading} onClick={handleAddReviews} className='btn btn-primary hover:bg-primary-400 w-40'>
          {isLoading ? <Loading /> : 'Post comment'}
        </button>
      </div>
    </div>
  )
}

export default Comments
