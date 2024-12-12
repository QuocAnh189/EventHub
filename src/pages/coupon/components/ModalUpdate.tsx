//components
import ModalBase from '@ui/ModalBase'
import MediaDropPlaceholder from '@ui/MediaDropPlaceholder'

//icon
import { BiTrash } from 'react-icons/bi'

//util
import classNames from 'classnames'

interface IProps {
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
}

const ModalUpdateCoupon = (props: IProps) => {
  const { modalOpen, setModalOpen } = props

  const coverImage = false

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
        <h6 className='h6'>Update Coupon</h6>
        <div className='flex flex-col gap-4 mt-4'>
          <div className='relative lg:w-full h-[100px] flex items-center justify-center text-white rounded-xl media-dropzone 2xl:col-span-2'>
            <img
              loading='lazy'
              className={`absolute h-full w-full rounded-[8px] outline-none opacity-${coverImage ? '1' : '0'}`}
              src={coverImage ? URL.createObjectURL(coverImage) : ''}
            />
            <input
              aria-label=''
              title=''
              accept='image/*'
              type='file'
              className='h-full w-full bg-transparent rounded-xl hover:cursor-pointer z-[999] outline-none opacity-0'
              onChange={() => {}}
              alt='No avatar'
              onClick={(event: any) => (event.target.value = null)}
            />
            {!coverImage ? (
              <div className='absolute'>
                <MediaDropPlaceholder text='CoverImage' />
              </div>
            ) : (
              <div className='absolute z-[1000] hover:cursor-pointer right-4 bottom-4'>
                <BiTrash
                  size={32}
                  // onClick={() => {
                  //   URL.revokeObjectURL(coverImage)
                  //   setValue('coverImage', '')
                  // }}
                  // color={coverImage ? 'white' : '#333'}
                />
              </div>
            )}
          </div>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='brandName'>
              Name
            </label>
            <input
              className={classNames('field-input', { 'field-input--error': false })}
              id='name'
              defaultValue=''
              placeholder='Enter name'
              // {...register('brandName', { required: true })}
            />
          </div>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='description'>
              Description
            </label>
            <textarea
              className={classNames(`field-input !h-[80px] !py-[15px] !overflow-y-auto`, {
                'field-input--error': false
              })}
              id='description'
              defaultValue=''
              placeholder='Enter description'
              // {...register('description', { required: true })}
            />
          </div>
          <div className='flex items-center justify-between gap-4'>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='dimensions'>
                Min Price
              </label>
              <input
                className={classNames('field-input', { 'field-input--error': false })}
                id='dimensions'
                defaultValue=''
                // {...register('dimensions', { required: true })}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='weight'>
                Min Quantity
              </label>
              <input
                className={classNames('field-input', { 'field-input--error': false })}
                id='weight'
                // {...register('weight', { required: true, pattern: /^[0-9]*$/ })}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='weight'>
                Percent
              </label>
              <input
                className={classNames('field-input', { 'field-input--error': false })}
                id='weight'
                // {...register('weight', { required: true, pattern: /^[0-9]*$/ })}
              />
            </div>
          </div>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='brandName'>
              Expire Date
            </label>
            <input
              type='date'
              className={classNames('field-input', { 'field-input--error': false })}
              id='name'
              defaultValue=''
              placeholder='Enter name'
              // {...register('brandName', { required: true })}
            />
          </div>
          <button className='btn btn-primary hover:bg-primary-300'>Update Coupon</button>
        </div>
      </div>
    </ModalBase>
  )
}

export default ModalUpdateCoupon
