//hook
import { useState } from 'react'

//icon
import { IoAdd } from 'react-icons/io5'
import { GrSubtract } from 'react-icons/gr'

//interfaces
import { ITicketType } from '@interfaces/contents/ticketType.interface'

interface IProps {
  ticket: ITicketType
  openDialog: () => void
  updateTotalPrice: (value: number) => void
}

const ActionTicket = (props: IProps) => {
  const { ticket, openDialog, updateTotalPrice } = props

  const [quality, setQuality] = useState<number>(0)

  const handleIncreaseQuantity = () => {
    setQuality((pre) => pre + 1)
    updateTotalPrice(ticket.price!)
  }

  const handleDecreaseQuantity = () => {
    if (quality <= 0) {
      openDialog()
    } else {
      setQuality((pre) => pre - 1)
      updateTotalPrice(-ticket.price!)
    }
  }

  return (
    <div className='flex items-center justify-between'>
      <div className='w-[100px] flex p-1 items-center justify-around border border-solid border-gray300 rounded-3xl'>
        <button
          onClick={handleDecreaseQuantity}
          className='flex items-center justify-center p-[6px] rounded-full bg-primary-200 hover:bg-gray200'
        >
          <GrSubtract color='#333' />
        </button>
        <p className='text-black'>{quality}</p>
        <button
          onClick={handleIncreaseQuantity}
          className='flex items-center justify-center p-[6px] rounded-full bg-primary-200 hover:bg-primary-300'
        >
          <IoAdd color='#333' />
        </button>
      </div>
      <span className='text-black'>
        <span className='font-bold text-black'>
          {ticket.price * quality}.{quality > 0 ? '000 VNĐ ' : 'VND '}
        </span>
        / {ticket.name}
      </span>
    </div>
  )
}

export default ActionTicket
