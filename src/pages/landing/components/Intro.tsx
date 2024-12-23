//hooks
import { useNavigate } from 'react-router-dom'

//images
import directImg from '@assets/images/landing/direct.svg'
import threePeopleImg from '@assets/images/landing/three_people.webp'
import logoImg from '@assets/images/common/logo.png'

//animation
import { motion } from 'framer-motion'

//i18n
import { withTranslation } from 'react-i18next'

const Intro = ({ t }: any) => {
  const navigate = useNavigate()

  return (
    <motion.section
      id='intro'
      className='relative flex min-h-screen m-auto items-center justify-center overflow-hidden'
    >
      <div className='flex max-w-[1440px] flex-1 items-center justify-center rounded-[4px] bg-transparent'>
        <div className='flex flex-col items-center'>
          <div className='-mb-2 flex w-full flex-col items-center justify-center'>
            <div className='relative flex items-center pl-[1.88em]'>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='absolute hidden w-[10.25em] mdl:bottom-[0em] mdl:left-[-8.25em] mdl:flex xl:bottom-[0.9em] xl:left-[-9em]'
              >
                <img loading='lazy' src={directImg} alt='' className='overflow-hidden' />
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='mt-[-0.1em] text-[2em] font-bold leading-[1.1] tracking-[-0.035em] mdl:text-[4em] xl:text-[6.25em]'
              >
                {t('intro.text_one')}
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <img
                  loading='lazy'
                  src={threePeopleImg}
                  alt=''
                  className='ml-6 h-auto w-[4em] flex-none mdl:w-[10em] xl:w-[13.75em]'
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className='mt-[-0.1em] flex items-center justify-center gap-x-10 self-center text-[2em] font-bold mdl:text-[4em] xl:text-[6.25em]'
            >
              {t('intro.text_two')}
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='flex items-center justify-center'
            >
              <div className='mt-[-0.1em] block text-center text-[2em] font-bold leading-[1.1] tracking-[-0.035em] text-primary-500 mdl:text-[4em] xl:text-[6.25em]'>
                {t('intro.text_three')}
              </div>
              <div className='border-l-solid -mb-6 ml-[1.13em] block border-l-[1px] border-l-textGray py-[0.63em] pl-[1.13em] mdl:max-w-[12em]'>
                <div className='my-0 block text-[1em] font-semibold leading-[1.4]'>{t('intro.text_four')}</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className='mt-[1em] flex w-[10em] flex-col gap-y-3 self-center xl:mt-[3.25em]'
            >
              <button
                onClick={() => {
                  navigate('signin')
                }}
                className='z-[1] flex min-h-[3.13em] cursor-pointer items-center justify-center gap-x-[0.5rem] overflow-hidden rounded-xl bg-primary px-4 py-2 text-center font-black text-white shadow-purple hover:bg-primary-500  hover:delay-[0s] hover:duration-300'
              >
                <div className='relative z-[-1] -ml-3 block h-9 w-9'>
                  <div className='absolute bottom-[0%] left-[0%] right-[0%] top-[0%] z-[-1] h-9 w-9 rounded-full bg-white' />
                  <div className='flex h-full w-full items-center justify-center align-middle'>
                    <img loading='lazy' src={logoImg} className='h-3/5 w-3/5 max-w-full' alt='' />
                  </div>
                </div>
                <div className='my-0 block text-[1.13em] leading-[1.45]'>{t('intro.try_now')}</div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-[-0.6em] left-[-12.4em] right-auto top-auto h-[30em] w-[34.5em] rounded-[75em] bg-gradient-intro opacity-[0.6] blur-[50px]'></div>
      <div className='absolute bottom-[-17.4em] left-auto right-[-21em] top-auto h-[37em] w-[99em] rounded-[75em] bg-gradient-intro opacity-[0.6] blur-[50px]'></div>
    </motion.section>
  )
}

export default withTranslation('landing')(Intro)
