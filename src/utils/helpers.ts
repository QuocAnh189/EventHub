import { EEventStatus, EPaymentStatus } from '@constants/enum.constant'
import { PRODUCT_CATEGORIES } from '@constants/options.constant'

/**
 *
 * @param arr
 * @param value
 * @returns {number}
 */
export const getPercentage = (arr: any, value: any) => {
  const total = arr.reduce((acc: any, item: any) => acc + item.value, 0)
  return Math.round((value / total) * 100)
}

export const getTotal = (arr: any) => {
  return arr.reduce((acc: any, item: any) => acc + item.value, 0)
}

/**
 *
 * @param num - number to be formatted
 * @param fractionDigits - number of digits after the decimal point
 * @param prefix - prefix to be added to the formatted number
 * @returns {*|string}
 */
export const numFormatter = (num: any, fractionDigits = 0, prefix = '') => {
  const options = {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  }

  if (num > 999 && num < 1000000) {
    const formattedNum = (num / 1000).toLocaleString(undefined, options)
    return `${prefix}${formattedNum}k`
  } else if (num > 1000000) {
    const formattedNum = (num / 1000000).toLocaleString(undefined, options)
    return `${prefix}${formattedNum}m`
  } else if (num < 900) {
    return `${prefix}${num}`
  }
}

export const commaFormatter = (num: any) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// grid y-axis or x-axis points generator for recharts
/**
 *
 * @param id - container id
 * @param gutter - grid gutter
 * @param axis - 'x' or 'y'
 * @returns {*[]} - array of grid points
 */
export const generateGridPoints = (gutter = 20, axis = 'y') => {
  // const gridWidth = document.getElementById(id).offsetWidth;
  const gridWidth = 1000
  // const gridHeight = document.getElementById(id).offsetHeight;
  const gridHeight = 400

  const points = []
  for (let i = 0; i < (axis === 'y' ? gridWidth : gridHeight); i += gutter) {
    points.push(i)
  }
  return points
}

export const sortProducts = (products: any, sort: any) => {
  switch (sort) {
    default:
    case 'best-selling':
      return products.sort((a: any, b: any) => b.sold - a.sold)
    case 'available':
      return products.sort((a: any, b: any) => b.in_stock - a.in_stock)
    case 'price-low-to-high':
      return products.sort((a: any, b: any) => a.regular_price - b.regular_price)
    case 'price-high-to-low':
      return products.sort((a: any, b: any) => b.regular_price - a.regular_price)
  }
}

export const sortSellers = (data: any, sortOption: any) => {
  switch (sortOption) {
    case 'best-selling':
      return data.sort((a: any, b: any) => b.sales - a.sales)
    case 'rating-high-to-low':
      return data.sort((a: any, b: any) => b.rating - a.rating)
    case 'rating-low-to-high':
      return data.sort((a: any, b: any) => a.rating - b.rating)
    case 'a-z':
      return data.sort((a: any, b: any) => a.name.localeCompare(b.name))
    case 'z-a':
      return data.sort((a: any, b: any) => b.name.localeCompare(a.name))
    default:
      return data
  }
}

export const getCategory = (value: any) => {
  return PRODUCT_CATEGORIES.find((category: any) => category.value === value)
}

export const getStatusColor = (status: any) => {
  switch (status) {
    default:
    case 'approved':
    case 'completed':
    case EPaymentStatus.Success:
      return 'green'
    case 'waiting':
    case 'confirmed':
    case EPaymentStatus.Pending:
      return 'accent'
    case 'cancelled':
    case EPaymentStatus.Reject:
      return 'red'
    case 'rejected':
    case 'refunded':
      return 'badge-status-bg'
  }
}

export const getStatusEventColor = (status: any) => {
  switch (status) {
    default:
    case 'approved':
    case 'completed':
    case EEventStatus.Opening:
      return 'yellow'
    case 'waiting':
    case 'confirmed':
    case EEventStatus.Upcoming:
      return 'green'
    case 'cancelled':
    case EEventStatus.Closed:
      return 'red'
    case 'rejected':
    case 'refunded':
      return 'badge-status-bg'
  }
}

export const formatMessageDateLong = (date: any) => {
  const now = new Date()
  const inputDate: any = new Date(date)

  if (isToday(inputDate)) {
    return inputDate?.toLocalTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
  } else if (isYesterday(inputDate)) {
    return (
      'Yesterday' +
      inputDate?.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    )
  } else if (inputDate.getFullYear() === now.getFullYear()) {
    return inputDate?.toLocaleDateString([], {
      day: '2-digit',
      month: 'short'
    })
  } else {
    return inputDate?.toLocalDateString()
  }
}

export const formatMessageDateShort = (date: any) => {
  const now = new Date()
  const inputDate: any = new Date(date)

  if (isToday(inputDate)) {
    return inputDate?.toLocalTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
  } else if (isYesterday(inputDate)) {
    return 'Yesterday'
  } else if (inputDate.getFullYear() === now.getFullYear()) {
    return inputDate?.toLocaleDateString([], {
      day: '2-digit',
      month: 'short'
    })
  } else {
    return inputDate?.toLocalDateString()
  }
}

export const isToday = (date: any) => {
  const now = new Date()

  return (
    date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()
  )
}

export const isYesterday = (date: any) => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  return (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  )
}

export const isImage = (attachment: any) => {
  let mime = attachment.mime || attachment.type

  mime = mime.split('/')
  return mime[0].toLowerCase() === 'image'
}

export const isVideo = (attachment: any) => {
  let mime = attachment.mime || attachment.type

  mime = mime.split('/')
  return mime[0].toLowerCase() === 'video'
}

export const isAudio = (attachment: any) => {
  let mime = attachment.mime || attachment.type
  mime = mime.split('/')
  return mime[0].toLowerCase() === 'audio'
}

export const isPDF = (attachment: any) => {
  const mime = attachment.mime || attachment.type
  return mime === 'application/pdf'
}

export const isPreviewable = (attachment: any) => {
  return isImage(attachment) || isVideo(attachment) || isAudio(attachment) || isPDF(attachment)
}

export const formatBytes = (bytes: any, decimals?: any) => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB']

  let i = 0
  let size = bytes
  while (size >= k) {
    size /= k
    i++
  }

  return parseFloat(size.toFixed(dm)) + ' ' + sizes[i]
}
