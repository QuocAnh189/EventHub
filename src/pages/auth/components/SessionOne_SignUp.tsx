//hook
import { ChangeEvent } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

//constant
import { PHONE_REGEX } from '@constants/regex.constant'

//validate
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// components
import { toast } from 'react-toastify'

//motion
import { motion } from 'framer-motion'

//type
import { SignUpPayloadOne } from '@type/auth.type'

//redux
import { useValidateUserMutation } from '@redux/apis/auth.api'
import { withTranslation } from 'react-i18next'

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is not empty' })
    .max(50, { message: 'Email must not exceed 50 characters' })
    .email('Email invalid'),
  fullName: z.string().min(1, 'Name is not empty').max(32, { message: 'Name must not exceed 32 characters' }),
  phoneNumber: z
    .string()
    .min(1, 'Phone is not empty')
    .regex(PHONE_REGEX, 'Phone is invalid')
    .max(12, { message: 'phone must not exceed 12 characters' })
})

interface SessionOneProps {
  t: any
  formDataSessionOne: SignUpPayloadOne
  setFormDataSessionOne: (e: ChangeEvent<HTMLInputElement>) => void
  nextSession: () => void
}
const TranslatedSessionOne = (props: SessionOneProps) => {
  const { t, formDataSessionOne, setFormDataSessionOne, nextSession } = props

  const navigate = useNavigate()

  const [validateUser, { isLoading }] = useValidateUserMutation()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpPayloadOne>({
    resolver: zodResolver(formSchema),
    defaultValues: formDataSessionOne
  })

  const onSubmit: SubmitHandler<SignUpPayloadOne> = async (data: SignUpPayloadOne) => {
    try {
      const result = await validateUser(data).unwrap()
      if (result) {
        nextSession()
      }
    } catch (error: any) {
      const message = error.data.message
      switch (message) {
        case 'Email already exists':
          toast.error('Email already exists')
          break
        case 'Phone number already exists':
          toast.error('Phone already exists')
          break
        default:
          break
      }
    }
  }

  return (
    <div className='mt-4 flex flex-col'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className='relative mb-6'
        >
          <input
            {...register('email')}
            type='email'
            name='email'
            className='block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] border-gray focus:border-blue-light'
            placeholder={t('session_one.email_placeholder')}
            onChange={setFormDataSessionOne}
          />
          {errors.email && <p className='mt-1 text-red'>{errors.email.message}</p>}
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className='relative mb-6'
        >
          <input
            {...register('fullName')}
            type='text'
            name='fullName'
            className='block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] border-gray focus:border-blue-light'
            placeholder={t('session_one.fullname_placeholder')}
            onChange={setFormDataSessionOne}
          />
          {errors.fullName && <p className='mt-1 text-red'>{errors.fullName.message}</p>}
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className='relative mb-6'
        >
          <input
            {...register('phoneNumber')}
            type='text'
            name='phoneNumber'
            className='block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] border-gray focus:border-blue-light'
            placeholder={t('session_one.phone_placeholder')}
            onChange={setFormDataSessionOne}
          />
          {errors.phoneNumber && <p className='mt-1 text-red'>{errors.phoneNumber.message}</p>}
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <button
            disabled={isLoading}
            type='submit'
            className='flex w-full items-center justify-center rounded-2xl py-[0.6rem] font-bold leading-7 text-white cursor-pointer bg-blue-light3'
          >
            {t('session_one.submit_btn')}
          </button>
        </motion.div>
      </form>

      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className='mt-3 flex w-full flex-col gap-y-2'
      >
        <button
          onClick={() => navigate('/signin')}
          className='block w-full py-4 text-sm font-semibold hover:rounded-[18px] hover:bg-gray-light4 hover:text-[15px]'
        >
          {t('session_one.option')}
        </button>

        <button
          className='block w-full py-4 text-sm font-bold hover:rounded-[18px] hover:bg-gray-light4 hover:text-[15px]'
          onClick={() => {
            navigate(-1)
          }}
        >
          {t('session_one.back_btn')}
        </button>
      </motion.div>
    </div>
  )
}

export const SessionOne = withTranslation('signup')(TranslatedSessionOne)
