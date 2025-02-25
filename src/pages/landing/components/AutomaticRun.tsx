//images
import gradientPurpleImg from '@assets/images/landing/bg_gradient_two.webp'
import heartImg from '@assets/images/landing/heart.png'
import raiseHandImg from '@assets/images/landing/hand_raise.webp'

import landing from '@assets/images/landing/screens/landing.png'
import signin from '@assets/images/landing/screens/signin.png'
import coupon from '@assets/images/landing/screens/coupon.png'
import customer from '@assets/images/landing/screens/customer.png'
import detail from '@assets/images/landing/screens/detail.png'
import home from '@assets/images/landing/screens/home.png'
import list_event from '@assets/images/landing/screens/list_event.png'
import overview from '@assets/images/landing/screens/overview.png'
import ticket from '@assets/images/landing/screens/ticket.png'
import transaction from '@assets/images/landing/screens/transaction.png'

//animation
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'

//i18n
import { withTranslation } from 'react-i18next'

const AutomaticRun = ({ t }: any) => {
  return (
    <motion.section
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, delay: 1.2 }}
      id='overview'
      className='w-screen relative pt-6 pb-0 overflow-hidden bg-white'
    >
      <div className='w-full max-w-[1440px] bg-transparent rounded-[4px] mx-auto px-[3.13rem]'>
        <div className='relative flex flex-col items-center text-center'>
          <img
            loading='lazy'
            src={gradientPurpleImg}
            className='w-[70em] h-auto absolute inline-block max-w-full z-[1]'
          />
          <div className='flex flex-col gap-y-[2.75em]'>
            <Marquee loop={0}>
              <div className='w-[35.38em] rounded-xl flex flex-none mx-4'>
                <img
                  loading='lazy'
                  src={landing}
                  className='w-full h-full max-w-full relative inline-block object-cover'
                />
              </div>
              <div className='w-[35.38em] rounded-xl flex flex-none mx-4'>
                <img
                  loading='lazy'
                  src={signin}
                  className='w-full h-full max-w-full relative inline-block object-cover'
                />
              </div>
              <div className='w-[35.38em] rounded-xl flex flex-none mx-4'>
                <img
                  loading='lazy'
                  src={coupon}
                  className='w-full h-full max-w-full relative inline-block object-cover'
                />
              </div>
              <div className='w-[35.38em] rounded-xl flex flex-none mx-4'>
                <img
                  loading='lazy'
                  src={customer}
                  className='w-full h-full max-w-full relative inline-block object-cover'
                />
              </div>
              <div className='w-[35.38em] rounded-xl flex flex-none mx-4'>
                <img
                  loading='lazy'
                  src={detail}
                  className='w-full h-full max-w-full relative inline-block object-cover'
                />
              </div>
            </Marquee>
            <Marquee direction='right' loop={0}>
              <div className='w-[35.38em] rounded-xl flex flex-none mx-4'>
                <img
                  loading='lazy'
                  src={home}
                  className='relative w-full h-full max-w-full inline-block object-cover'
                />
              </div>
              <div className='w-[35.38em] rounded-xl flex flex-none mx-4'>
                <img
                  loading='lazy'
                  src={list_event}
                  className='relative w-full h-full max-w-full inline-block object-cover'
                />
              </div>
              <div className='w-[35.38em] rounded-xl flex flex-none mx-4'>
                <img
                  loading='lazy'
                  src={overview}
                  className='relative w-full h-full max-w-full inline-block object-cover'
                />
              </div>
              <div className='w-[35.38em] rounded-xl flex flex-none mx-4'>
                <img
                  loading='lazy'
                  src={ticket}
                  className='relative w-full h-full max-w-full inline-block object-cover'
                />
              </div>
              <div className='w-[35.38em] rounded-xl flex flex-none mx-4'>
                <img
                  loading='lazy'
                  src={transaction}
                  className='relative w-full h-full max-w-full inline-block object-cover'
                />
              </div>
            </Marquee>
          </div>
          <div className='z-[2] text-center absolute top-[7.19em] flex flex-col items-center gap-10'>
            <div className='text-center block leading-[1] font-bold text-[4em] mdl:text-[6em] xl:text-[10em] tracking-[-0.025em]'>
              {t('automatic.select_my')}
              <br />
            </div>
            <div className='block mt-[-2.1em]'>
              <div className='block text-center leading-[1] font-bold text-[4em] mdl:text-[6em] xl:text-[10em] tracking-[-0.025em]'>
                {t('automatic.event')}
              </div>
            </div>
          </div>
          <img
            loading='lazy'
            src={raiseHandImg}
            className='w-[30.75em] h-[30.75em] max-w-full inline-block absolute bottom-[-4em] object-contain z-[4]'
          />
          <img
            loading='lazy'
            src={heartImg}
            className='w-[10.25em] h-auto inline-block max-w-full absolute z-[3] bottom-[0] translate-x-[19%] translate-y-[-28em]'
          />
          <img
            loading='lazy'
            src={heartImg}
            alt=''
            className='z-[1] bottom-[0] h-auto inline-bock max-w-full align-middle absolute w-[4.81em] translate-x-[-4em] translate-y-[-21em]'
          />
          <img
            loading='lazy'
            src={heartImg}
            className='z-[1] bottom-[0] h-auto max-w-full inline-bock align-middle absolute w-[2.75em] translate-x-[-3.4em] translate-y-[-34em]'
          />
        </div>
      </div>
    </motion.section>
  )
}

export default withTranslation('landing')(AutomaticRun)
