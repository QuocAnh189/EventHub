//hooks
import { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

//components
import Switch from 'react-switch'
import Loading from '@components/Loading'

//motion
import { motion } from 'framer-motion'

//icons
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'

//type
import { SignUpPayloadTwo } from '@dtos/auth.dto'

//util
import classNames from 'classnames'

//i18n
import { withTranslation } from 'react-i18next'

interface Props {
  t: any
  formDataSessionTwo: SignUpPayloadTwo
  setFormDataSessionTwo: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: () => void
  backSession: () => void
  disabled: boolean
}

const FormSetPassword = (props: Props) => {
  const { t, formDataSessionTwo, handleSubmit, setFormDataSessionTwo, backSession, disabled } = props
  const navigate = useNavigate()

  const [check, setCheck] = useState<boolean>(false)
  const [showPassWord, setShowPassWord] = useState<boolean>(false)
  const [showConfirmPassWord, setShowConfirmPassWord] = useState<boolean>(false)

  return (
    <div className='mt-4 flex flex-col items-center'>
      <div className='mt-4 flex flex-col w-4/5 sm:w-full'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className='relative mb-6'
        >
          <input
            className={classNames(
              'field-input text-header block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-6 font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px]'
            )}
            type={showPassWord ? 'text' : 'password'}
            value={formDataSessionTwo.password}
            name='password'
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
            className={classNames(
              'field-input text-header block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-6 font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px]'
            )}
            type={showConfirmPassWord ? 'text' : 'password'}
            name='confirmPassword'
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
          <span className='ml-[10px] mt-0 inline-block h-[30px] text-sm font-semibold leading-[30px] text-header'>
            Accept <a className='text-blue-light2 outline-none'>Terms of use </a>
            and
            <a className='text-blue-light2 outline-none'> Privacy policy</a>
          </span>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <button
            className='flex w-full btn hover:bg-blue-light2 bg-blue-light3 text-white'
            disabled={disabled}
            onClick={handleSubmit}
          >
            {disabled ? <Loading /> : t('session_two.signup_btn')}
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
          className='block w-full py-4 text-sm font-semibold hover:rounded-[18px] hover:bg-gray-light2 text-header'
        >
          {t('session_two.option')}
        </button>

        <button
          className='block w-full py-4 text-sm font-bold hover:rounded-[18px] hover:bg-gray-light2 text-header'
          onClick={backSession}
        >
          {t('session_two.back_btn')}
        </button>
      </motion.div>
    </div>
  )
}

export default withTranslation('signup')(FormSetPassword)
