import * as z from 'zod'

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
