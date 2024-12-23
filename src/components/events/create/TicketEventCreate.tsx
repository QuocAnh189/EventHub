//hooks
import { Control, useFieldArray, UseFormRegister, UseFormSetValue } from 'react-hook-form'

//components
import { toast } from 'react-toastify'

//constant
import { EEventPaymentTicket } from '@constants/enum.constant'

//type
import { ICreateEventPayload, InitCreateTicketPayload } from '@dtos/event.dto'

//i18n
import { withTranslation } from 'react-i18next'

//icon
import { IoMdAddCircleOutline } from 'react-icons/io'
import { CiCircleRemove } from 'react-icons/ci'

//assets
import feeImg from '@assets/images/ticket/fee.png'
import noFeeImg from '@assets/images/ticket/no-fee.png'

//util
import classNames from 'classnames'

interface Props {
  t: any
  register: UseFormRegister<ICreateEventPayload>
  eventTicketType: EEventPaymentTicket
  setValue: UseFormSetValue<ICreateEventPayload>
  control: Control<ICreateEventPayload, any>
  setActive: (value: number) => void
  ticketTypes: any[]
}

const TicketEventCreate = (props: Props) => {
  const { t, setActive, control, register, eventTicketType, setValue, ticketTypes } = props

  const {
    fields: tickets,
    append,
    remove
  } = useFieldArray({
    control,
    name: 'ticketTypeItems'
  })

  const handleNextStep = () => {
    let isContinue = true
    if (eventTicketType === EEventPaymentTicket.Paid && tickets.length === 0) {
      isContinue = false
      toast.error('Please add at least one ticket')
    }

    ticketTypes.forEach((ticket) => {
      if (ticket.name === '') {
        isContinue = false
        toast.error('Please enter ticket name')
        return
      }
      if (ticket.quantity <= 0) {
        isContinue = false
        toast.error('Please enter ticket quantity again, at least 1')
        return
      }
      if (ticket.price <= 0) {
        isContinue = false
        toast.error('Please enter ticket price again, at least 1')
        return
      }
    })
    if (isContinue) {
      setActive(3)
    }
  }

  return (
    <div className='relative pt-10 pb-20 px-10 mdl:px-40 space-y-10 min-h-screen'>
      <div className='space-y-4'>
        <p className='h4 mdl:text-xl font-bold tracking-wider text-header'>{t('ticket.title')}</p>
        <div className=' flex flex-col mdl:flex-row mdl:items-center gap-8'>
          <div
            onClick={() => setValue('eventPaymentType', EEventPaymentTicket.Paid)}
            className={`card border-[2px] border-solid ${
              eventTicketType === EEventPaymentTicket.Paid ? 'border-primary' : 'border-textGray'
            } rounded-lg py-4 px-12 flex flex-col items-center justify-center hover:cursor-pointer`}
          >
            <img loading='lazy' src={feeImg} alt='' className='w-[42px] text-header' />
            <p
              className={`h5 my-2 font-bold  text-${
                eventTicketType === EEventPaymentTicket.Paid ? 'primary' : 'header'
              }`}
            >
              {t('ticket.option_one.label')}
            </p>
            <p className={`h6 ${eventTicketType === EEventPaymentTicket.Paid ? 'text-primary' : 'text-header'}`}>
              {t('ticket.option_one.description')}
            </p>
          </div>
          <div
            onClick={() => {
              setValue('eventPaymentType', EEventPaymentTicket.Free)
              // setValue('ticketTypes', [] as any)
            }}
            className={`card border-[2px] border-solid ${
              eventTicketType === EEventPaymentTicket.Free ? 'border-primary' : 'border-textGray'
            } rounded-lg py-4 px-12 flex flex-col items-center justify-center hover:cursor-pointer`}
          >
            <img loading='lazy' src={noFeeImg} alt='' className='w-[42px] text-header' />
            <p
              className={`h5 my-2 font-bold text-${
                eventTicketType === EEventPaymentTicket.Free ? 'primary' : 'header'
              }`}
            >
              {t('ticket.option_two.label')}
            </p>
            <p className={`h6 ${eventTicketType === EEventPaymentTicket.Free ? 'text-primary' : 'text-header'}`}>
              {t('ticket.option_two.description')}
            </p>
          </div>
        </div>
      </div>

      {eventTicketType === EEventPaymentTicket.Paid && (
        <div className='space-y-4'>
          <div className='flex items-center gap-2'>
            <p className='mdl:text-xl font-bold tracking-wider text-header h5'>{t('ticket.ticket_title')}</p>
            <button
              type='button'
              className='text-header btn bg-body'
              onClick={() => {
                append(InitCreateTicketPayload)
              }}
            >
              <IoMdAddCircleOutline size={30} />
            </button>
          </div>
          {tickets.map((ticket, index: number) => (
            <div className='flex flex-col mdl:flex-row mdl:items-center gap-2 mdl:gap-8' key={ticket.id}>
              <div className=''>
                <label className='field-label text-sm' htmlFor='ticket_name'>
                  {t('ticket.ticket_name')}
                </label>
                <div className='text-header'>
                  <input
                    id='ticket_name'
                    className={classNames('field-input', { 'field-input--error': false })}
                    placeholder={t('ticket.ticket_name_placeholder')}
                    {...register(`ticketTypeItems.${index}.name`)}
                  />
                </div>
              </div>
              <div className=''>
                <label className='field-label text-sm' htmlFor='ticket_quantity'>
                  {t('ticket.ticket_quantity')}
                </label>
                <div className='text-header'>
                  <input
                    type='number'
                    className={classNames('field-input', { 'field-input--error': false })}
                    id='ticket_quantity'
                    defaultValue={0}
                    {...register(`ticketTypeItems.${index}.quantity`)}
                  />
                </div>
              </div>
              <div className=''>
                <label className='field-label text-sm' htmlFor='ticket_price'>
                  {t('ticket.ticket_price')}
                </label>
                <div className='text-header'>
                  <input
                    type='number'
                    className={classNames('field-input', { 'field-input--error': false })}
                    id='ticket_price'
                    defaultValue={0}
                    {...register(`ticketTypeItems.${index}.price`)}
                  />
                </div>
              </div>
              <button>
                <CiCircleRemove color='var(--header)' size={32} onClick={() => remove(index)} />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className='absolute flex items-center gap-4 right-8'>
        <button
          className='btn bg-textGray hover:text-white'
          onClick={() => {
            setActive(1)
          }}
        >
          {t('button_back')}
        </button>
        <button type='button' className='btn btn-primary' onClick={handleNextStep}>
          {t('button_continue')}
        </button>
      </div>
    </div>
  )
}

export default withTranslation('create_event')(TicketEventCreate)
