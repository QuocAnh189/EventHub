//hook
import { useForm, SubmitHandler } from 'react-hook-form'

//components
import ModalBase from '@ui/ModalBase'
import MediaDropPlaceholder from '@ui/MediaDropPlaceholder'
import { toast } from 'react-toastify'
import Loading from '@components/Loading'

//icon
import { BiTrash } from 'react-icons/bi'

//util
import classNames from 'classnames'
import dayjs from 'dayjs'

//interface
import { ICoupon } from '@interfaces/contents/coupon.interface'
import { IUpdateCouponPayload } from '@dtos/coupon.dto'

//redux
import { useUpdateCouponMutation } from '@redux/apis/coupon.api'

//i18n
import { withTranslation } from 'react-i18next'

interface IProps {
  t: any
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
  coupon: ICoupon
}

const ModalUpdateCoupon = (props: IProps) => {
  const { t, modalOpen, setModalOpen, coupon } = props

  const [UpdateCoupon, { isLoading }] = useUpdateCouponMutation()

  const { register, handleSubmit, setValue, watch } = useForm<IUpdateCouponPayload>({
    defaultValues: {
      id: coupon.id,
      name: coupon.name,
      description: coupon.description,
      coverImageUrl: coupon.coverImageUrl,
      image: null,
      minPrice: coupon.minPrice,
      minQuantity: coupon.minQuantity,
      percentageValue: coupon.percentageValue,
      expireDate: dayjs(coupon.expireDate).format('YYYY-MM-DD')
    }
  })

  const convertCoverImageToBase64 = (e: any) => {
    const image = e.target.files[0]
    setValue('image', image)
  }

  const onSubmit: SubmitHandler<ICoupon> = async (data: ICoupon) => {
    const formData = new FormData()
    for (const key in data) {
      formData.append(key, data[key as keyof ICoupon] as any)
    }

    try {
      const result = await UpdateCoupon(formData).unwrap()
      if (result) {
        console.log(result)
        toast.success('Coupon updated successfully')
        setModalOpen(false)
      }
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong')
    }
  }

  return (
    <ModalBase open={modalOpen} onClose={() => setModalOpen(false)}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='card relative no-hover flex flex-col w-full max-w-[400px] will-change-transform'
      >
        <button
          type='button'
          className='absolute top-5 right-5 icon text-[18px] transition hover:text-red'
          onClick={() => setModalOpen(false)}
          aria-label='Close'
        >
          <i className='icon-circle-xmark-regular' />
        </button>
        <h6 className='h6'>{t('modal.update_coupon')}</h6>
        <div className='flex flex-col gap-4 mt-4'>
          <div className='relative lg:w-full h-[100px] flex items-center justify-center text-white rounded-xl media-dropzone 2xl:col-span-2'>
            <img
              loading='lazy'
              className={`absolute h-full w-full rounded-[8px] outline-none opacity-${
                watch().coverImageUrl || watch().image ? '1' : '0'
              }`}
              src={watch().image ? URL.createObjectURL(watch().image) : watch().coverImageUrl}
            />
            <input
              aria-label=''
              title=''
              accept='image/*'
              type='file'
              className='h-full w-full bg-transparent rounded-xl hover:cursor-pointer z-[999] outline-none opacity-0'
              onChange={convertCoverImageToBase64}
              alt='No avatar'
              onClick={(event: any) => (event.target.value = null)}
            />
            {!watch().coverImageUrl ? (
              <div className='absolute'>
                <MediaDropPlaceholder text='CoverImage' />
              </div>
            ) : (
              <div className='absolute z-[1000] hover:cursor-pointer right-4 bottom-4'>
                {watch().image && (
                  <BiTrash
                    size={20}
                    onClick={() => {
                      URL.revokeObjectURL(watch().image)
                      setValue('image', null)
                    }}
                    color='white'
                  />
                )}
              </div>
            )}
          </div>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='brandName'>
              {t('modal.name_label')}
            </label>
            <input
              className={classNames('field-input', { 'field-input--error': false })}
              id='name'
              defaultValue=''
              placeholder={t('modal.name_placeholder')}
              {...register('name', { required: true })}
            />
          </div>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='description'>
              {t('modal.description_label')}
            </label>
            <textarea
              className={classNames(`field-input !h-[80px] !py-[15px] !overflow-y-auto`, {
                'field-input--error': false
              })}
              id='description'
              defaultValue=''
              placeholder={t('modal.description_placeholder')}
              {...register('description', { required: true })}
            />
          </div>
          <div className='flex items-center justify-between gap-4'>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='dimensions'>
                {t('modal.min_price_label')}
              </label>
              <input
                className={classNames('field-input', { 'field-input--error': false })}
                id='minPrice'
                defaultValue=''
                {...register('minPrice', { required: true })}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='weight'>
                {t('modal.min_quantity_label')}
              </label>
              <input
                className={classNames('field-input', { 'field-input--error': false })}
                id='weight'
                {...register('minQuantity', { required: true })}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='weight'>
                {t('modal.percent_label')}
              </label>
              <input
                className={classNames('field-input', { 'field-input--error': false })}
                id='weight'
                {...register('percentageValue', { required: true })}
              />
            </div>
          </div>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='brandName'>
              {t('modal.expire_label')}
            </label>
            <input
              id='date'
              type='date'
              className={classNames('field-input', { 'field-input--error': false })}
              value={dayjs(coupon.expireDate).format('YYYY-MM-DD')}
              placeholder='Enter name'
              {...register('expireDate', { required: true })}
            />
          </div>
          <button type='submit' className='btn btn-primary hover:bg-primary-300'>
            {isLoading ? <Loading /> : t('modal.update_coupon')}
          </button>
        </div>
      </form>
    </ModalBase>
  )
}

export default withTranslation('coupon')(ModalUpdateCoupon)
