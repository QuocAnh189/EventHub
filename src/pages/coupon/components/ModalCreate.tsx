//hook
// import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

//components
import Loading from '@components/Loading'
import ModalBase from '@ui/ModalBase'
import MediaDropPlaceholder from '@ui/MediaDropPlaceholder'

//icon
import { BiTrash } from 'react-icons/bi'

//util
import classNames from 'classnames'

//interface
import { ICreateCouponPayload } from '@dtos/coupon.dto'
import { useAppSelector } from '@hooks/useRedux'

//util
import dayjs from 'dayjs'

//18n
import { withTranslation } from 'react-i18next'

interface IProps {
  t: any
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
  onCreate: (data: ICreateCouponPayload) => void
  isLoading: boolean
}

const ModalCreateCoupon = (props: IProps) => {
  const { t, modalOpen, setModalOpen, onCreate, isLoading } = props

  const userId: string = useAppSelector((state) => state.persistedReducer.user.user?.id)

  const { register, handleSubmit, watch, setValue } = useForm<ICreateCouponPayload>({
    defaultValues: {
      userId: userId,
      image: null,
      name: '',
      description: '',
      minPrice: 0,
      minQuantity: 0,
      percentageValue: 0,
      expireDate: dayjs(new Date()).format('YYYY-MM-DD')
    }
  })

  const convertCoverImageToBase64 = (e: any) => {
    const image = e.target.files[0]
    setValue('image', image)
  }

  const onSubmit = (data: ICreateCouponPayload) => {
    onCreate(data)
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
        <h6 className='h6'>{t('modal.create_coupon')}</h6>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-4'>
          <div className='relative lg:w-full h-[100px] flex items-center justify-center text-white rounded-xl media-dropzone 2xl:col-span-2'>
            <img
              loading='lazy'
              className={`absolute h-full w-full rounded-[8px] outline-none opacity-${watch().image ? '1' : '0'}`}
              src={watch().image ? URL.createObjectURL(watch().image) : ''}
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
            {!watch().image ? (
              <div className='absolute'>
                <MediaDropPlaceholder text='CoverImage' />
              </div>
            ) : (
              <div className='absolute z-[1000] hover:cursor-pointer right-4 bottom-4'>
                <BiTrash
                  size={20}
                  onClick={() => {
                    setValue('image', null)
                  }}
                  color={watch().image ? 'white' : '#333'}
                />
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
                {...register('minPrice', { required: true })}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='weight'>
                {t('modal.min_quantity_label')}
              </label>
              <input
                className={classNames('field-input', { 'field-input--error': false })}
                id='minQuantity'
                {...register('minQuantity', { required: true, pattern: /^[0-9]*$/ })}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='weight'>
                {t('modal.percent_label')}
              </label>
              <input
                className={classNames('field-input', { 'field-input--error': false })}
                id='percentageValue'
                {...register('percentageValue', { required: true, pattern: /^[0-9]*$/ })}
              />
            </div>
          </div>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='brandName'>
              {t('modal.expire_label')}
            </label>
            <input
              type='date'
              className={classNames('field-input', { 'field-input--error': false })}
              id='expireDate'
              defaultValue=''
              {...register('expireDate', { required: true })}
            />
          </div>
          <button type='submit' className='btn btn-primary hover:bg-primary-300'>
            {isLoading ? <Loading /> : t('modal.create_coupon')}
          </button>
        </form>
      </div>
    </ModalBase>
  )
}

export default withTranslation('coupon')(ModalCreateCoupon)
