import * as z from 'zod'
import { PHONE_REGEX } from '@constants/regex.constant'

export const formSchemaSignIn = z.object({
  identity: z.string().min(1, 'Account is not empty'),
  password: z.string().min(1, 'Password is not empty')
})

export const formSchemaSignUp = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is not empty' })
    .max(50, { message: 'Email must not exceed 50 characters' })
    .email('Email invalid'),
  userName: z.string().min(1, 'Name is not empty').max(32, { message: 'Name must not exceed 32 characters' }),
  phoneNumber: z
    .string()
    .min(1, 'Phone is not empty')
    .regex(PHONE_REGEX, 'Phone is invalid')
    .max(12, { message: 'phone must not exceed 12 characters' })
})

export const formEventSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'You have not entered the email yet' })
    .max(30, { message: 'Name must not exceed 30 characters' }),
  categoryIds: z.array(z.string()).min(1, { message: 'You have not selected any category' }),

  startTime: z.string({ invalid_type_error: 'Start time must be a valid date' }),

  endTime: z.string({ invalid_type_error: 'End time must be a valid date' }),

  location: z
    .string()
    .min(1, { message: 'You have not entered the location' })
    .max(100, { message: 'Location must not exceed 100 characters' }),

  pathLocation: z.any(),
  reasons: z.any(),
  creatorId: z.any(),
  eventSubImages: z.any(),
  ticketTypes: z.any(),

  description: z.string().min(1, { message: 'You have not entered the description' }),

  coverImage: z.instanceof(File).refine((file) => file.type.startsWith('image/'), {
    message: 'Cover image must be a valid image file'
  }),

  eventPaymentType: z.string().min(1, { message: 'You have not entered the event payment type' }),

  isPrivate: z.boolean()
})
