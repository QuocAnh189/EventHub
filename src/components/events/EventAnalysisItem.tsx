//hooks
import { useNavigate } from 'react-router-dom'

//components
import Spring from '@components/Spring'

//interfaces
import { IEvent } from '@interfaces/contents'
interface Props {
  event: IEvent
  index: number
}

const EventAnalysisItem = (props: Props) => {
  const { event, index } = props
  const navigate = useNavigate()

  const handleViewDetail = () => navigate(`123`)

  return (
    <Spring
      className='card flex items-center justify-center gap-1.5 !pt-[22px] !pr-5 !pb-6 !pl-6'
      type='slideUp'
      index={index}
    >
      <div
        className='h-[136px] bg-body rounded-lg flex flex-1 items-center justify-center cursor-pointer'
        onClick={handleViewDetail}
      >
        <div className='w-[140px] h-[120px] flex flex-col items-center justify-center gap-2'>
          <img className='h-full w-auto object-contain' src={event.coverImage} alt={event.name} />
          <p className='font-bold text-xl text-header text-justify'>{event.name}</p>
        </div>
      </div>
    </Spring>
  )
}

export default EventAnalysisItem
