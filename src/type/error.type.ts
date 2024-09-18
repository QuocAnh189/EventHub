export interface IFormErrorCreateEventStepOne {
  name: boolean
  categories: boolean
  eventType: boolean
  startDate: boolean
  endDate: boolean
  startTime: boolean
  endTime: boolean
  location: boolean
  description: boolean
}

export const initFormErrorCreateEventStepOne = {
  name: false,
  categories: false,
  eventType: false,
  startDate: false,
  endDate: false,
  startTime: false,
  endTime: false,
  location: false,
  description: false
} as IFormErrorCreateEventStepOne
