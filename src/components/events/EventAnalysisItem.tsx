// hooks
import { useNavigate } from 'react-router-dom'

// components
import Spring from '@components/Spring'
interface IProps {
  seller: any
  index: number
}

const EventAnalysisItem = (props: IProps) => {
  const { seller, index } = props
  const navigate = useNavigate()

  const handleLogoClick = () => navigate(`123`)

  return (
    <Spring className='card flex items-start gap-1.5 !pt-[22px] !pr-5 !pb-6 !pl-6' type='slideUp' index={index}>
      <div
        className='h-[136px] bg-white rounded-lg flex flex-1 items-center justify-center cursor-pointer'
        onClick={handleLogoClick}
      >
        <div className='w-[140px] h-[120px] flex flex-col items-center justify-center gap-2'>
          <img
            className='h-full w-auto object-contain'
            src='https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
            alt={seller.name}
          />
          <p className='font-bold text-xl'>JobFair UIT</p>
        </div>
      </div>
    </Spring>
  )
}

export default EventAnalysisItem
