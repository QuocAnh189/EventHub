// hooks
import { useTheme } from '@contexts/theme.context'

// components
import Spring from './Spring'

// assets
import coin from '@assets/images/dashboard/coin.png'

interface Props {
  wrapperClass?: string
  imgClass?: string
}

const TotalBalance = (props: Props) => {
  const { wrapperClass, imgClass } = props
  const { theme } = useTheme()

  return (
    <Spring>
      <div
        className={`rounded-md overflow-hidden shadow flex items-center h-[120px] md:h-[286px] lg:flex-col
                 lg:justify-center xl:flex-row xl:justify-start ${wrapperClass || ''}`}
        style={{ background: theme === 'light' ? 'var(--linear-sky)' : 'rgba(3,94,207, .45)' }}
      >
        <img
          className={`max-h-[80px] w-auto ml-1 2xs:ml-2 md:max-h-[216px] lg:max-h-[120px] lg:ml-0 lg:mb-5
                     xl:mb-0 xl:max-h-[216px] 5xl:max-h-[unset] 5xl:w-[60%] ${imgClass || ''}`}
          src={coin}
          alt='balance'
        />
        <div className='flex flex-col gap-1.5 ml-4 lg:text-center xl:text-left'>
          <span className='h1'>$476,3k</span>
          <span className='h6'>Total Balance</span>
        </div>
      </div>
    </Spring>
  )
}

export default TotalBalance
