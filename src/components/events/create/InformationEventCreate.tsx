//hooks
import { useNavigate } from 'react-router-dom'

//form
import { Control, useFieldArray, UseFormRegister, UseFormWatch, UseFormSetValue, FieldErrors } from 'react-hook-form'

//constant
import { IOptionSelect } from '@constants/options.constant'

//icon
import { IoMdAddCircleOutline } from 'react-icons/io'
import { CiCircleRemove } from 'react-icons/ci'

//constant
import { EEventStyle } from '@constants/enum.constant'

//interface & type
// import { ICategory } from '@interfaces/contents/category.interface'
import { ICreateEventPayload } from '@dtos/event.dto'

//redux
import { useAppSelector } from '@hooks/useRedux'

//i18n
import { withTranslation } from 'react-i18next'
// import Select from '@ui/Select'
import SelectMultipleCategory from '@components/SelectMultipleCategory'

// utils
import classNames from 'classnames'

interface Props {
  t: any
  create: boolean
  register: UseFormRegister<ICreateEventPayload>
  errors?: FieldErrors<ICreateEventPayload>
  setValue: UseFormSetValue<ICreateEventPayload>
  watch: UseFormWatch<ICreateEventPayload>
  control: Control<ICreateEventPayload, any>
  setActive: (value: number) => void
}

const InformationEvent = (props: Props) => {
  const { t, create, setActive, register, errors, watch, control, setValue } = props
  const navigate = useNavigate()

  const categoriesStore = useAppSelector((state) => state.persistedReducer.category.categories)

  const {
    fields: reasonItems,
    append: appendReasons,
    remove: removeReasons
  } = useFieldArray({
    control,
    name: 'reasonItems'
  })

  return (
    <div className='relative lg:pl-24 items-center pt-10 pb-20 space-y-10 min-h-screen'>
      <div className='w-full flex flex-col mdl:flex-row items-center gap-2'>
        <div className='w-4/5 mdl:w-[200px] flex mdl:justify-end gap-2'>
          <p className='h6 text-header'>{t('information.event.name')}</p>
          <span className='text-red'>*</span>
        </div>
        <div className='w-4/5 mdl:w-[600px] text-header'>
          <input
            className={classNames('field-input', { 'field-input--error': errors?.name })}
            id='name'
            placeholder={t('information.event.name_placeholder')}
            {...register('name', { required: true })}
          />
        </div>
      </div>

      <div className='w-full flex flex-col mdl:flex-row items-center gap-2'>
        <div className='w-4/5 mdl:w-[200px] flex mdl:justify-end gap-2'>
          <p className='h6 text-header'>{t('information.event.category')}</p>
          <span className='text-red'>*</span>
        </div>
        <div className='w-4/5 mdl:w-[600px] text-header'>
          <label className='field-label' htmlFor='startTime'>
            {t('information.event.category_placeholder')}
          </label>
          <SelectMultipleCategory
            id='category'
            options={categoriesStore || []}
            onChange={(e: IOptionSelect) => {
              watch().categoryIds.push(e.id!)
            }}
            categoryIds={watch().categoryIds}
            removeCategory={(id: string) => {
              setValue(
                'categoryIds',
                watch().categoryIds.filter((categoryId: string) => categoryId !== id)
              )
            }}
          />
        </div>
      </div>

      <div className='w-full flex flex-col mdl:flex-row items-center gap-2'>
        <div className='w-4/5 mdl:w-[200px] flex mdl:justify-end gap-2'>
          <p className='h6 text-header'>{t('information.event.type.name')}</p>
          <span className='text-red'>*</span>
        </div>
        <div className='w-4/5 flex items-center gap-5 mdl:w-[600px] text-header'>
          <div className='flex items-center gap-2'>
            <label className='field-label text-sm' htmlFor='startTime'>
              {t('information.event.type.single_event')}
            </label>
            <input
              id='eventStyle'
              type='radio'
              value={EEventStyle.Single}
              className={classNames('field-input w-6', { 'field-input--error': false })}
              placeholder={t('information.event_detail.event_title_placeholder')}
              {...register('eventCycleType')}
            />
          </div>
          <div className='flex items-center gap-2'>
            <label className='field-label text-sm' htmlFor='startTime'>
              {t('information.event.type.recurring_event')}
            </label>
            <input
              id='eventStyle'
              type='radio'
              className={classNames('field-input w-6', { 'field-input--error': false })}
              value={EEventStyle.Recurring}
              placeholder={t('information.event_detail.event_title_placeholder')}
              {...register('eventCycleType')}
            />
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-center gap-2'>
        <div className='w-4/5 mdl:pl-20'>
          <p className='h5 mb-4 text-header'>{t('information.datetime.title')}</p>
        </div>
        <div className='w-full flex flex-col mdl:flex-row items-center gap-2'>
          <div className='w-4/5 mdl:w-[200px] flex mdl:justify-end gap-2'>
            <p className='h6 text-header'>
              {t('information.datetime.session.title')} <span className='text-red'>*</span>
            </p>
          </div>
          <div className='w-4/5 mdl:w-[600px] flex flex-col md:flex-row items-center text-header space-y-2 mdl:space-y-0 mdl:space-x-8'>
            <div className='flex mdl:w-[300px] flex-col'>
              <label className='field-label' htmlFor='startTime'>
                {t('information.datetime.session.start_time')}
              </label>
              <input
                id='startTime'
                type='datetime-local'
                className={classNames('field-input', { 'field-input--error': errors?.startTime })}
                {...register('startTime', { required: true })}
              />
            </div>
            <div className='flex mdl:w-[300px] flex-col'>
              <label className='field-label' htmlFor='startTime'>
                {t('information.datetime.session.end_time')}
              </label>
              <input
                id='endTime'
                type='datetime-local'
                className={classNames('field-input', { 'field-input--error': errors?.endTime })}
                {...register('endTime', { required: true })}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-center gap-2'>
        <div className='w-4/5 mdl:pl-20'>
          <p className='h5 mb-4 text-header'>{t('information.location.title')}</p>
        </div>
        <div className='w-full flex flex-col mdl:flex-row items-center gap-2'>
          <div className='w-4/5 mdl:w-[200px] flex mdl:justify-end gap-2'>
            <p className='h6 text-right text-header'>{t('information.location.label')}</p>
            <span className='text-red'>*</span>
          </div>
          <div className='w-4/5 mdl:w-[600px] text-header space-y-3'>
            <input
              className={classNames('field-input', { 'field-input--error': errors?.location })}
              id='location'
              placeholder={t('information.location.placeholder')}
              {...register('location', { required: true })}
            />
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-center gap-2'>
        <div className='w-4/5 mdl:pl-20'>
          <p className='h5 mb-4 text-header'>{t('information.description.title')}</p>
        </div>
        <div className='w-full flex flex-col mdl:flex-row items-center gap-2'>
          <div className='w-4/5 mdl:w-[200px] flex mdl:justify-end gap-2'>
            <p className='h6 text-header'>
              {t('information.description.label')} <span className='text-red'>*</span>
            </p>
          </div>
          <div className='w-4/5 mdl:w-[600px] text-header'>
            <textarea
              className={classNames(`field-input !h-[160px] !py-[15px] !overflow-y-auto`, {
                'field-input--error': errors?.description && errors.description
              })}
              id='description'
              defaultValue=''
              {...register('description', { required: true })}
              placeholder={t('information.description.placeholder')}
            />
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-center gap-2'>
        <div className='w-4/5 mdl:pl-20 flex flex-row gap-2 items-center'>
          <p className='h5 text-header'>{t('information.reason.title')}</p>
          <button
            type='button'
            onClick={() => {
              appendReasons('')
            }}
          >
            <IoMdAddCircleOutline color='var(--header)' size={30} />
          </button>
        </div>
        <div className='w-full flex flex-col mdl:flex-row items-center gap-2'>
          <div className='w-4/5 mdl:w-[200px] flex mdl:justify-end gap-2'>
            <p className='h6 text-header'>{t('information.reason.label')}</p>
          </div>

          <div className='space-y-3'>
            {reasonItems?.map((field: any, index: number) => (
              <div
                key={field.id}
                className='w-full md:w-4/5 mdl:w-[600px] text-header flex flex-row md:items-center gap-2'
              >
                <input
                  className={classNames('field-input', { 'field-input--error': false })}
                  id={`reasonItems.${index}`}
                  defaultValue=''
                  placeholder={`${t('information.reason.placeholder')} ${index + 1}`}
                  {...register(`reasonItems.${index}`)}
                />
                <button
                  onClick={() => {
                    removeReasons(index)
                  }}
                >
                  <CiCircleRemove color='var(--header)' size={30} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='absolute flex items-center gap-4 right-8'>
        <button
          type='button'
          className='btn bg-textGray hover:text-white'
          onClick={() => {
            create ? setActive(-1) : navigate(-1)
          }}
        >
          {t('button_back')}
        </button>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={() => {
            setActive(1)
          }}
        >
          {t('button_continue')}
        </button>
      </div>
    </div>
  )
}

export default withTranslation('create_event')(InformationEvent)
