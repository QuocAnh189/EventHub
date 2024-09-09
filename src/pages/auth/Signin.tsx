// hooks
import { useState } from 'react'
import { useWindowSize } from 'react-use'

// components
import { FormForgotPassword, FormSignIn, VerifyOpt, ResetPassword } from './components'

//motion
import { motion } from 'framer-motion'

//i18
import { withTranslation } from 'react-i18next'

// assets
import authImg from '@assets/images/auth/bg_auth.png'
import logoText_Img from '@assets/images/common/logo_text.png'

const initSession = {
  'sign-in': false,
  'forgot-password': false,
  'verify-opt': false,
  'reset-password': false
}

const SignIn = ({ t }: any) => {
  const { width } = useWindowSize()

  const [sessions, setSessions] = useState({ ...initSession, 'sign-in': true })

  const changeSession = (name: string) => {
    setSessions({ ...initSession, [name]: true })
  }

  return (
    <div className='flex-1 grid grid-cols-1 xl:grid-cols-2 4xl:grid-cols-[minmax(0,_1030px)_minmax(0,_1fr)]'>
      {width >= 1280 && (
        <div className='bg-body flex flex-col justify-center items-center lg:p-[60px]'>
          <a className='logo' href='/'>
            <img loading='lazy' src={logoText_Img} alt='EventHub' className='w-[200px] object-cover' />
          </a>
          <p className='text-center text-header tracking-[0.2px] font-semibold text-lg leading-6 max-w-[540px] my-7 mx-auto'>
            {t('slogan')}
          </p>
          <img loading='lazy' className='max-w-[780px]' src={authImg} alt='media' />
        </div>
      )}
      <div className='relative w-full h-screen flex justify-center items-center'>
        <motion.main
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
          className='mx-auto mt-auto flex min-h-screen w-full max-w-full flex-col overflow-hidden bg-pink'
        >
          <div className='absolute left-[50%] top-[50%] min-h-full w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-[50px] bg-body px-[100px] py-[60px] mdl:min-h-[600px]'>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className='mb-[30px] flex flex-row items-center justify-center gap-x-4'
            >
              <h1 className='text-4xl font-semibold'>
                {sessions['sign-in'] && t('login.title')}
                {sessions['forgot-password'] && t('forgot_password.title')}
                {sessions['verify-opt'] && t('verify_opt.title')}
                {sessions['reset-password'] && t('reset_password.title')}
              </h1>
            </motion.div>

            {sessions['sign-in'] && <FormSignIn changeSession={changeSession} />}
            {sessions['forgot-password'] && <FormForgotPassword changeSession={changeSession} />}
            {sessions['verify-opt'] && <VerifyOpt changeSession={changeSession} />}
            {sessions['reset-password'] && <ResetPassword changeSession={changeSession} />}

            <div className='absolute bottom-0 left-[50%] min-h-[70px] w-full translate-x-[-50%] text-center'>
              <p className='font-semibold text-header'>
                {t('footer_one')} - <span className='font-bold text-header'>{t('footer_two')}</span>
              </p>
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  )
}

export default withTranslation('signin')(SignIn)
