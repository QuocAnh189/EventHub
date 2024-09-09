// hooks
import { useState } from 'react'

// motion
import { motion } from 'framer-motion'

//util
import classNames from 'classnames'

//i18n
import { withTranslation } from 'react-i18next'

interface ForgotProps {
  t: any
  changeSession: (name: string) => void
}

const TranslatedForgotPassword = (props: ForgotProps) => {
  const { t, changeSession } = props

  const [email, setEmail] = useState<string>('')

  const handleSubmit = () => {
    changeSession('verify-opt')
  }

  return (
    <div className='flex flex-col h-full items-center'>
      <div className='mt-4 flex flex-col w-4/5 sm:w-full'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className='relative mb-6'
        >
          <input
            className={classNames(
              'field-input text-header block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-6 font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px]'
            )}
            type='email'
            value={email}
            name='email'
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
            className='flex w-full btn hover:bg-blue-light2 bg-blue-light2 text-white'
            // disabled={email ? false : true}
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
              changeSession('sign-in')
            }}
            className='mt-3 block w-full py-4 text-sm font-bold hover:rounded-[18px] hover:bg-gray-light2 text-header'
          >
            {t('back_btn')}
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export const FormForgotPassword = withTranslation('signin')(TranslatedForgotPassword)
