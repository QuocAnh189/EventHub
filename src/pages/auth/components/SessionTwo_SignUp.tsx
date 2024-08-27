//hook
import { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

//component
import Switch from 'react-switch'
import CircularProgress from '@mui/material/CircularProgress'

// motion
import { motion } from 'framer-motion'

// icons
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'

// type
import { SignUpPayloadTwo } from '@type/auth.type'
import { withTranslation } from 'react-i18next'

interface SessionTwoProps {
  t: any
  formDataSessionTwo: SignUpPayloadTwo
  setFormDataSessionTwo: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: () => void
  backSession: () => void
  disabled: boolean
}
const TranslatedSessionTwo = (props: SessionTwoProps) => {
  const {
    t,
    formDataSessionTwo,
    handleSubmit,
    setFormDataSessionTwo,
    backSession,
    disabled
  } = props
  const navigate = useNavigate()

  const [check, setCheck] = useState<boolean>(false)
  const [showPassWord, setShowPassWord] = useState<boolean>(false)
  const [showConfirmPassWord, setShowConfirmPassWord] = useState<boolean>(false)

  return (
    <div className='mt-4 flex flex-col'>
      <div className='flex flex-col'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className='relative mb-6'
        >
          <input
            type={showPassWord ? 'text' : 'password'}
            value={formDataSessionTwo.password}
            name='password'
            className='min-h-[auto] w-full rounded-2xl border bg-transparent px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
            placeholder={t('session_two.password_placeholder')}
            onChange={setFormDataSessionTwo}
          />
          <button
            className='absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer'
            onClick={() => {
              setShowPassWord(!showPassWord)
            }}
          >
            {showPassWord ? (
              <AiFillEye className=' h-[20px] w-[20px]' />
            ) : (
              <AiFillEyeInvisible className=' h-[20px] w-[20px]' />
            )}
          </button>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className='relative mb-6'
          data-te-input-wrapper-init
        >
          <input
            type={showConfirmPassWord ? 'text' : 'password'}
            name='confirmPassword'
            className='min-h-[auto] w-full rounded-2xl border bg-transparent px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
            placeholder={t('session_two.confirm_password_placeholder')}
          />
          <button
            className='absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer'
            onClick={() => {
              setShowConfirmPassWord(!showConfirmPassWord)
            }}
          >
            {showConfirmPassWord ? (
              <AiFillEye className=' h-[20px] w-[20px]' />
            ) : (
              <AiFillEyeInvisible className=' h-[20px] w-[20px]' />
            )}
          </button>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className='mb-4 flex w-full items-center justify-start text-right'
        >
          <Switch
            onChange={() => {
              setCheck(!check)
            }}
            checked={check}
          />
          <span className='ml-[10px] mt-0 inline-block h-[30px] text-sm font-semibold leading-[30px]'>
            Accept{' '}
            <a className='text-textBlueLight outline-none'>Terms of use </a>
            and
            <a className='text-textBlueLight outline-none'> Privacy policy</a>
          </span>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <button
            disabled={disabled}
            className='flex w-full items-center justify-center rounded-2xl py-[0.6rem] font-bold leading-7 text-textWhite cursor-pointer border-gray bg-bgBlue'
            onClick={handleSubmit}
          >
            {disabled ? (
              <CircularProgress size={28} color='info' />
            ) : (
              t('session_two.signup_btn')
            )}
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className='mt-3 flex w-full flex-col gap-y-2'
      >
        <button
          onClick={() => navigate('/signin')}
          className='block w-full py-4 text-sm font-semibold hover:rounded-[18px] hover:bg-bgGrayLight hover:text-[15px]'
        >
          {t('session_two.option')}
        </button>

        <button
          className='block w-full py-4 text-sm font-bold hover:rounded-[18px] hover:bg-bgGrayLight hover:text-[15px]'
          onClick={backSession}
        >
          {t('session_two.back_btn')}
        </button>
      </motion.div>
    </div>
  )
}

export const SessionTwo = withTranslation('signup')(TranslatedSessionTwo)
