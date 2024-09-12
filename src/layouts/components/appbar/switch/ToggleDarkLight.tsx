import './style.scss'

import cloud_1 from '@assets/images/toggle/cloud_1.svg'
import cloud_2 from '@assets/images/toggle/cloud_2.svg'
import cloud_3 from '@assets/images/toggle/cloud_3.svg'
import cloud_4 from '@assets/images/toggle/cloud_4.svg'
import start from '@assets/images/toggle/stars.svg'

interface Props {
  theme: string
  toggleTheme: () => void
}
const ToggleDarkLight = (props: Props) => {
  const { theme, toggleTheme } = props

  return (
    <div className={`container-toggle  ${theme !== 'light' ? 'dark' : 'light'}`}>
      <label className='switch' htmlFor='switch'>
        <input type='checkbox' id='switch' onChange={toggleTheme} />
        <div className='sunmoon'>
          <div className='darkside'></div>
        </div>
        <div className='border'></div>
        <div className='clouds'>
          <img src={cloud_1} alt='' className='cloud cloud-1' />
          <img src={cloud_2} alt='' className='cloud cloud-2' />
          <img src={cloud_3} alt='' className='cloud cloud-3' />
          <img src={cloud_4} alt='' className='cloud cloud-4' />
          <img src={start} alt='' className='stars' />
        </div>
      </label>
    </div>
  )
}

export default ToggleDarkLight
