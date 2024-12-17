//hook
import { useState } from 'react'

//component
import ModalBase from '@ui/ModalBase'
import { toast } from 'react-toastify'

//redux
import Loading from '@components/Loading'
import { useUpdateReviewMutation } from '@redux/apis/review.api'

interface Props {
  review: any
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
}

const ModalUpdate = (props: Props) => {
  const { review, modalOpen, setModalOpen } = props
  const [rate, setRate] = useState<number>(review.rate)
  const [content, setContent] = useState<string>(review.content)

  const [UpdateReview, { isLoading: loadingUpdateReview }] = useUpdateReviewMutation()

  const handleUpdateReview = async () => {
    const formData: any = new FormData()
    formData.append('id', review.id)
    formData.append('userId', review.user.id)
    formData.append('eventId', review.eventId)
    formData.append('content', content)
    formData.append('rate', rate.toString())
    if (rate === 0 || content.trim() === '') {
      toast.error('Rate and content are required')
      return
    }

    try {
      const result = await UpdateReview(formData).unwrap()
      if (result) {
        console.log('result', result)
        toast.success('Update review successfully')
        setModalOpen(false)
      }
    } catch (e) {
      toast.error('Something went wrong')
      console.log(e)
    }
  }

  return (
    <ModalBase open={modalOpen} onClose={() => setModalOpen(false)}>
      <div className='card relative no-hover flex flex-col w-full max-w-[400px] will-change-transform'>
        <button
          className='absolute top-5 right-5 icon text-[18px] transition hover:text-red'
          onClick={() => setModalOpen(false)}
          aria-label='Close'
        >
          <i className='icon-circle-xmark-regular' />
        </button>
        <div className='flex gap-4 mb-6'>
          <span className='label-text'>Rate:</span>
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
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='bg-input-bg text-justify rounded-md border border-input-border h-[100px] p-4 overflow-y-auto'
        />
        <button className='btn btn-primary mt-4' onClick={handleUpdateReview}>
          {loadingUpdateReview ? <Loading /> : 'Update'}
        </button>
      </div>
    </ModalBase>
  )
}

export default ModalUpdate
