//hooks
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'

//component
import Switch from 'react-switch'
import { CircularProgress } from '@mui/material'

//icons
import { IoLocationOutline } from 'react-icons/io5'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { IoTicketOutline } from 'react-icons/io5'

//type
import { ICreateEventPayload } from '@type/event.type'

//assets
import useDefault from '@assets/images/common/user_default.png'

//util
import dayjs from 'dayjs'

//redux
import { useAppSelector } from '@hooks/useRedux'

//i18n
import { withTranslation } from 'react-i18next'

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

  const user = useAppSelector((state) => state.persistedReducer.user.user)

  return (
    <div className='px-4 mdl:w-full lgl:px-40 mt-10 mx-auto'>
      <div className='flex flex-col gap-6 border-[3px] border-textGray rounded-2xl p-10'>
        <div className='h-[200px] lgl:h-[500px]'>
          <img
            src={
              watch().coverImage
                ? URL.createObjectURL(watch().coverImage)
                : 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
            }
            alt=''
            loading='lazy'
            className='w-full h-full object-cover rounded-xl'
          />
        </div>
        <div className='w-full flex items-center justify-between'>
          <h1 className='tex-sm mdl:text-xl'>{watch().name}</h1>
          <div className='flex items-center gap-2'>
            <p className='mdl:text-xl font-bold text-header'>{t('review.public')}:</p>
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
                <h4 className='text-header'>{t('review.date_time_label')}</h4>
                <div className='flex items-center gap-1'>
                  <FaRegCalendarAlt color='gray' size='24px' />

                  <p className='text-header'>{dayjs(watch().startTime).format('dddd, DD MMMM YYYY')?.toString()}</p>
                </div>
                <div className='flex items-center gap-1'>
                  <IoMdTime color='gray' size='24px' />

                  <p className='text-header'>
                    {dayjs(watch().startTime).format('hh:mm A YYYY/MM/DD')?.toString()} -{' '}
                    {dayjs(watch().endTime).format('hh:mm A YYYY/MM/DD')?.toString()}
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-2 items-end'>
                <h3 className='text-sm mdl:text-xl font-bold mb-4 text-header'>{t('review.ticket_information')}</h3>
                <div className='flex items-center gap-1 text-[12px] mdl:text-sm text-right'>
                  <IoTicketOutline size='24px' color='gray' />
                  <p className='text-header'>
                    {t('ticket_type')}: {watch().eventPaymentType}/{t('review.ticket_sub')}
                  </p>
                </div>
                {watch().ticketTypes.map((ticket, index: number) => (
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
              <h4 className='text-header'>{t('review.location_title')}</h4>
              <div className='flex gap-1'>
                <IoLocationOutline color='gray' size='24px' />
                <p className='max-w-[500px] text-header'>{watch().location}</p>
              </div>
            </div>

            <div className='flex flex-col gap-8'>
              <div className='space-y-2'>
                <h5>{t('review.organization_title')}</h5>
                <div className='flex items-center gap-3'>
                  <img
                    src={user?.avatar ? user.avatar : useDefault}
                    alt=''
                    className='w-[50px] h-[50px] object-cover rounded-full'
                  />
                  <p className='font-semibold text-header'>{user?.userName || user?.fullName}</p>
                </div>
              </div>

              <div className='space-y-1'>
                <h5>{t('review.description_title')}</h5>
                <p className='text-header'>{watch().description}</p>
                <h6>
                  {watch().reasons.length} {t('review.reasons_event')}:
                </h6>
                {watch().reasons.map((reason, index: number) => (
                  <p key={`reason-${index}`} className='text-header'>
                    {index + 1}. {reason}.
                  </p>
                ))}
              </div>
            </div>

            <div className='w-full flex items-center gap-8 justify-center'>
              {watch().eventSubImages.map(
                (image: any, index: number) =>
                  image && (
                    <img
                      key={`subimage-${index}`}
                      loading='lazy'
                      className='h-[200px] w-[200px] rounded-lg'
                      src={image ? URL.createObjectURL(image) : ''}
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
          className='btn bg-textGray hover:text-white'
          onClick={() => {
            setActive(2)
          }}
        >
          {t('button_back')}
        </button>
        <button disabled={disabled} type='submit' className='btn btn-primary'>
          {disabled ? <CircularProgress size={24} /> : create ? t('review.button_create') : t('review.button_update')}
        </button>
      </div>
    </div>
  )
}

export default withTranslation('create_event')(ReviewEventCreate)
