//hooks
import { useState, useRef } from 'react'

//component
import Loading from '@components/Loading'

//motion
import { motion } from 'framer-motion'

//icons
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'

//i18n
import { withTranslation } from 'react-i18next'

//dto
import { ResetPassWordPayload } from '@dtos/auth.dto'

//util
import classNames from 'classnames'
import { useResetPasswordMutation } from '@redux/apis/auth.api'
import { toast } from 'react-toastify'

interface Props {
  t: any
  changeSession: (name: string) => void
}

const ResetPassword = (props: Props) => {
  const { t, changeSession } = props

  const [ResetPassword, { isLoading }] = useResetPasswordMutation()

  const password = useRef(null)
  const confirmPassword = useRef(null)

  const [showPassWord, setShowPassWord] = useState<boolean>(false)
  const [showConfirmPassWord, setShowConfirmPassWord] = useState<boolean>(false)

  const handleSubmit = async () => {
    const data: ResetPassWordPayload = {
      newPassword: password.current!,
      email: '',
      token: ''
    }
    try {
      const result = await ResetPassword(data).unwrap()
      if (result) {
        toast.success('Reset password successfully')
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div className='flex flex-col h-full items-center'>
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
            ref={password}
            name='password'
            placeholder={t('reset_password.password_placeholder')}
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
            ref={confirmPassword}
            className={classNames(
              'field-input text-header block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-6 font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px]'
            )}
            type={showConfirmPassWord ? 'text' : 'password'}
            name='confirmPassword'
            placeholder={t('reset_password.confirm_password_placeholder')}
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
        >
          <button className='flex w-full btn hover:bg-blue-light2 bg-blue-light2 text-white' onClick={handleSubmit}>
            {isLoading ? <Loading /> : t('submit_btn')}
          </button>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <button
            onClick={() => {
              changeSession('forgot-password')
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

export default withTranslation('signin')(ResetPassword)
