//components
import Spring from '@components/Spring'

//utils
import { numFormatter } from '@utils/helpers'

interface Props {
  value: number
  label: string
  image: string
  imgClass?: string
}

const WalletBadge = (props: Props) => {
  const { value, label, image, imgClass } = props
  return (
    <Spring className='card flex !py-[13px] !pl-[18px] !pr-6'>
      <div className={`w-[52px] h-[52px] hidden xs:flex items-center ${imgClass || ''}`}>
        <img src={image} alt={label} />
      </div>
      <span className='h6 !text-sm'>{label}</span>
      <span className='h6 !text-sm ml-auto'>{numFormatter(value, 1, '$')}</span>
    </Spring>
  )
}

export default WalletBadge
