//hooks
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'

//component
import Loading from '@components/Loading'
import Switch from 'react-switch'

//icons
import { IoLocationOutline } from 'react-icons/io5'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'

//type
import { ICreateEventPayload } from '@dtos/event.dto'
import { EEventPaymentTicket } from '@constants/enum.constant'

//assets
import useDefault from '@assets/images/common/user_default.png'

//utils
import formatDate from '@utils/dayjs'

//redux
import { useAppSelector } from '@hooks/useRedux'

//i18n
import { withTranslation } from 'react-i18next'

//interface
import { IUser } from '@interfaces/systems'

interface Props {
  t: any
  watch: UseFormWatch<ICreateEventPayload>
  setValue: UseFormSetValue<ICreateEventPayload>
  setActive: (value: number) => void
  disabled: boolean
  create: boolean
}

const ReviewEventCreate = (props: Props) => {
  const { t, setActive, watch, setValue, disabled, create } = props

  const user: IUser = useAppSelector((state) => state.persistedReducer.user.user)

  return (
    <div className='px-4 mdl:w-full lgl:px-40 mt-10 mx-auto'>
      <div className='flex flex-col gap-6 border-[3px] border-textGray rounded-2xl p-10'>
        <div className='h-[200px] lgl:h-[500px]'>
          <img
            src={
              watch().coverImage && typeof watch().coverImage !== 'string'
                ? URL.createObjectURL(watch().coverImage)
                : watch().coverImage || ''
            }
            alt='coverImage'
            loading='lazy'
            className='w-full h-full object-cover rounded-xl'
          />
        </div>
        <div className='w-full flex items-center justify-between'>
          <h1 className='h1'>{watch().name}</h1>
          <div className='flex items-center gap-2'>
            <p className='h5 text-header'>{t('review.public')}:</p>
            <Switch
              onChange={() => {
                setValue('isPrivate', !watch().isPrivate)
              }}
              checked={!watch().isPrivate}
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='w-full flex flex-col gap-4'>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-y-3'>
                <h4 className='h5 text-header'>{t('review.date_time_label')}</h4>
                <div className='flex items-center gap-1'>
                  <FaRegCalendarAlt color='gray' size='24px' />

                  {watch().startTime && <p className='text-header'>{formatDate(watch().startTime)}</p>}
                </div>
                <div className='flex items-center gap-1'>
                  <IoMdTime color='gray' size='24px' />

                  {watch().startTime && watch().endTime && (
                    <p className='text-header'>
                      {formatDate(watch().startTime)} - {formatDate(watch().endTime)}
                    </p>
                  )}
                </div>
              </div>
              <div className='flex flex-col gap-2 items-end'>
                <h3 className='h5 mb-4 text-header'>{t('review.ticket_information')}</h3>
                <div className='flex items-center gap-1 text-[12px] mdl:text-sm text-right'>
                  <p className='h6 text-header'>
                    {t('review.ticket_type')}:{' '}
                    {watch().eventPaymentType === EEventPaymentTicket.Free ? t('review.free') : t('review.fee')}
                  </p>
                </div>
                {watch().eventPaymentType === EEventPaymentTicket.Paid &&
                  watch().ticketTypeItems.map((ticket, index: number) => (
                    <p key={`ticket-${index}`} className='w-full flex justify-between gap-2'>
                      <span className='text-header'>
                        {index + 1}. <span className='font-bold'>{ticket.name}:</span>
                      </span>
                      <span className='text-primary font-bold'>{ticket.price}.000 VND</span>
                    </p>
                  ))}
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <h4 className='h5 text-header'>{t('review.location_title')}</h4>
              <div className='flex gap-1'>
                <IoLocationOutline color='gray' size='24px' />
                <p className='max-w-[500px] text-header'>{watch().location}</p>
              </div>
              <iframe
                className='rounded-sm w-full'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s'
                height='250'
                loading='lazy'
              />
            </div>

            <div className='flex flex-col gap-8'>
              <div className='space-y-2'>
                <h5 className='h5'>{t('review.organization_title')}</h5>
                <div className='flex items-center gap-3'>
                  <img
                    src={user.avatarUrl ? user.avatarUrl : useDefault}
                    alt=''
                    className='w-[50px] h-[50px] object-cover rounded-full'
                  />
                  <p className='font-semibold text-header'>{user?.fullName || user?.userName}</p>
                </div>
              </div>

              <div className='space-y-1'>
                <h5 className='h5'>{t('review.description_title')}</h5>
                <p className='text-header'>{watch().description}</p>
              </div>

              <div className='space-y-1'>
                <h5 className='h5'>
                  {watch().reasonItems.length} {t('review.reasons_event')}:
                </h5>
                {watch().reasonItems.map((reason, index: number) => (
                  <p key={`reason-${index}`} className='text-header'>
                    {index + 1}. {reason}.
                  </p>
                ))}
              </div>
            </div>

            <div className='w-full flex items-center gap-8 justify-center flex-wrap'>
              {watch().subImageItems.map(
                (image: any, index: number) =>
                  image && (
                    <img
                      key={`subimage-${index}`}
                      loading='lazy'
                      className='h-[200px] w-[200px] rounded-lg'
                      src={image && typeof image !== 'string' ? URL.createObjectURL(image) : image || ''}
                      alt=''
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex items-center gap-4 justify-end mt-10'>
        <button
          type='button'
          className='btn bg-textGray hover:text-white'
          onClick={() => {
            setActive(2)
          }}
        >
          {t('button_back')}
        </button>
        <button disabled={disabled} type='submit' className='w-[150px] btn btn-primary'>
          {disabled ? <Loading /> : create ? t('review.button_create') : t('review.button_update')}
        </button>
      </div>
    </div>
  )
}

export default withTranslation('create_event')(ReviewEventCreate)
