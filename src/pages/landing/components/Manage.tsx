//image
import CarlaImg from '@assets/images/landing/manager_carla.webp'
import LisaImg from '@assets/images/landing/manager_lisa.webp'
import PhillipImg from '@assets/images/landing/manager_phillip.webp'

//animation
import { motion } from 'framer-motion'

//i18n
import { withTranslation } from 'react-i18next'

const Manage = ({ t }: any) => {
  return (
    <motion.section
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, delay: 1.2 }}
      id='manager'
      className='mx-auto block w-full max-w-[1440px] rounded bg-transparent px-[3.13rem] pb-[4em] pt-20'
    >
      <div className='relative z-[1] flex flex-col items-center rounded-[2.5em] bg-white pt-[5.63em]'>
        <div className='absolute left-0 right-0 top-0 my-[-3.13em] flex h-[60em] flex-col justify-center overflow-hidden md:flex-row'>
          <div className='bottom-20 w-[22.69em] md:absolute'>
            <img
              loading='lazy'
              src={PhillipImg}
              alt=''
              className='relative inline-block h-full w-full max-w-full object-contain md:object-fill'
            />
          </div>
          <div className='left-0  top-[5em] w-[26.88em] md:absolute'>
            <img
              loading='lazy'
              src={LisaImg}
              alt=''
              className='relative inline-block h-full w-full max-w-full object-contain md:object-fill'
            />
          </div>
          <div className='right-0 top-0 w-[26.13em] md:absolute'>
            <img
              loading='lazy'
              src={CarlaImg}
              alt=''
              className='relative inline-block h-full w-full max-w-full object-contain md:object-fill'
            />
          </div>
        </div>
        <div className='sticky top-[7.5em] mb-[8em] flex flex-col items-center gap-y-[0.5em] text-center'>
          <div className='my-0 text-[4em] font-extrabold leading-[1] tracking-tight'>
            <span className='text-special'>EventHub</span> is Over Power
            <br />
          </div>
          <div className='rounded-[60px] bg-blue-light4 px-[30px] pb-[16px] pt-0 text-blue'>
            <div className='my-0 font-sans text-[4em] font-extrabold leading-[1] tracking-tight'>
              {t('manage.project_management')}
            </div>
          </div>
        </div>
        <div className='sticky top-[38vh] z-[5] flex h-[24.8em] w-full items-center'>
          <div className='absolute left-[1.13em] flex min-w-[16px] flex-col items-center gap-y-[6px]'></div>
        </div>
      </div>
    </motion.section>
  )
}

export default withTranslation('landing')(Manage)
