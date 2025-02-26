// components
import Spring from '@components/Spring'
import { ITicket } from '@interfaces/contents/ticket.interface'
import { NavLink } from 'react-router-dom'

//i18n
import { withTranslation } from 'react-i18next'
import { formatNumber } from '@utils/helpers'

interface IProps {
  t: any
  ticket: ITicket
  index: number
  isSlide?: boolean
}

const TicketGridItem = (props: IProps) => {
  const { t, ticket, index, isSlide } = props

  const Wrapper = isSlide ? 'div' : Spring
  const wrapperProps = isSlide ? {} : { type: 'slideUp', index }

  return (
    <Wrapper className='card flex flex-col h-full' {...wrapperProps}>
      <div className='flex items-start gap-[14px] mb-2.5'>
        <div className='img-wrapper flex flex-1 items-center justify-center'>
          <img src={ticket.event.coverImageUrl} alt={ticket.event.name} />
        </div>
      </div>
      <NavLink
        className={`h6 truncate !leading-[1.4] block max-w-[180px] transition hover:text-accent ${
          isSlide ? 'mb-3' : ''
        }`}
        to='/product-editor'
      >
        {ticket.event.name}
      </NavLink>
      <div className={`flex flex-col flex-1 ${isSlide ? 'gap-1 mt-1.5' : 'gap-2.5 mt-2.5'}`}>
        <p className='font-heading font-bold text-sm leading-[1.4] text-green truncate'>
          {t('card.ticket_no')}: {ticket.ticketNo}
        </p>
        <p className='font-heading font-bold text-sm leading-[1.4] text-green truncate'>
          {t('card.name')}: {ticket.customerName}
        </p>
        <p className='font-heading font-bold text-sm leading-[1.4] text-green'>
          {t('card.email')}: {ticket.customerEmail}
        </p>
        <p className='font-heading font-bold text-sm leading-[1.4] text-accent'>
          {t('card.phone')}: {ticket.customerPhone}
        </p>
        <div className='flex flex-row justify-between items-center'>
          <div>
            <p className='font-heading font-bold text-sm leading-[1.4] text-accent'>
              {t('card.ticket_type')} : {ticket.ticketType.name}
            </p>
          </div>
          <div className='bg-primary-300 rounded-xl p-2'>
            <p className='h6 text-primary'>{formatNumber(ticket.ticketType.price)} VND</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default withTranslation('my_ticket')(TicketGridItem)
