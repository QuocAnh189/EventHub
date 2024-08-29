// hooks
import { useState } from 'react'

// motion
import { motion } from 'framer-motion'
import { withTranslation } from 'react-i18next'

interface ForgotProps {
  t: any
  handleForgotPassword: (value: boolean) => void
}

const TranslatedForgotPassword = (props: ForgotProps) => {
  const { t, handleForgotPassword } = props

  const [email, setEmail] = useState<string>('')

  const handleSubmit = () => {
    alert(email)
  }

  return (
    <div className='block h-full'>
      <div className='mt-4 flex flex-col'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className='relative mb-6'
        >
          <input
            type='email'
            value={email}
            name='email'
            className='block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] border-gray focus:border-blue-light'
            placeholder={t('forgot_password.email_placeholder')}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <button
            className='flex w-full items-center justify-center rounded-2xl py-[0.6rem] font-bold leading-7 text-white cursor-pointer bg-blue-light3'
            disabled={email ? false : true}
            onClick={handleSubmit}
          >
            {t('submit_btn')}
          </button>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <button
            onClick={() => {
              handleForgotPassword(false)
            }}
            className='mt-3 block w-full py-4 text-sm font-bold hover:rounded-[18px] hover:bg-gray-light4 hover:text-[15px]'
          >
            {t('back_btn')}
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export const FormForgotPassword = withTranslation('signin')(TranslatedForgotPassword)
