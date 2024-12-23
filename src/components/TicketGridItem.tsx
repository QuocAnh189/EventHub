// components
import Spring from '@components/Spring'
import { ITicket } from '@interfaces/contents/ticket.interface'
import { NavLink } from 'react-router-dom'

//i18n
import { withTranslation } from 'react-i18next'

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
        <p className='font-heading font-bold text-sm leading-[1.4] text-green'>
          {t('card.ticket_no')}: {ticket.ticketNo}
        </p>
        <p className='font-heading font-bold text-sm leading-[1.4] text-green'>
          {t('card.name')}: {ticket.customerName}
        </p>
        <p className='font-heading font-bold text-sm leading-[1.4] text-green'>
          {t('card.email')}: {ticket.customerEmail}
        </p>
        <p className='font-heading font-bold text-sm leading-[1.4] text-accent'>
          {t('card.phone')}: {ticket.customerPhone}
        </p>
        <p className='font-heading font-bold text-sm leading-[1.4] text-accent'>
          {t('card.ticket_type')} : {ticket.ticketType.name}
        </p>
        <p className='font-heading font-bold text-sm leading-[1.4] text-error'>{t('card.status')} : Active</p>
      </div>
    </Wrapper>
  )
}

export default withTranslation('my_ticket')(TicketGridItem)
