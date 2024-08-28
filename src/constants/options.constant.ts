//assets
import eng from '@assets/images/flags/eng.webp'
import vn from '@assets/images/flags/vn.webp'
import mc from '@assets/images/payment/mc.svg'
import visa from '@assets/images/payment/visa.svg'
import googlepay from '@assets/images/payment/googlepay.svg'
import applepay from '@assets/images/payment/applepay.svg'
import paypal from '@assets/images/payment/paypal.svg'
import bitpay from '@assets/images/payment/bitpay.svg'

//enum
import { EEventType } from './enum.constant'

export interface IOptionSelect {
  value: string
  label?: string
  icon?: any
}

export const EVENT_CATEGORIES = [
  {
    name: 'Workshop',
    iconImage:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505725/eventhub/category/hhganbll8tt2wofqdsn2.png',
    backgroundColor: '#F27BBD'
  },
  {
    name: 'Exhibition',
    iconImage:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505724/eventhub/category/dze7rcjxmhbiyuxp0nms.png',
    backgroundColor: '#A3FFD6'
  },
  {
    name: 'Music',
    iconImage:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505724/eventhub/category/ltf9kjwcm9flsr9kava1.png',
    backgroundColor: '#F3D0D7'
  },
  {
    name: 'Sport',
    iconImage:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505726/eventhub/category/zs0q5wmitcvihqjgm0ov.png',
    backgroundColor: '#EE4266'
  },
  {
    name: 'Culture',
    iconImage:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505727/eventhub/category/cvpt43b4aqxcjdgoezoc.png',
    backgroundColor: '#D1BB9E'
  },
  {
    name: 'Party',
    iconImage:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505729/eventhub/category/mqx4ehibcschz59jd81t.png',
    backgroundColor: '#FFFAB7'
  },
  {
    name: 'Education',
    iconImage:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505730/eventhub/category/fvbuvcl1yetyimeh6v40.png',
    backgroundColor: '#BC7FCD'
  },
  {
    name: 'Fair',
    iconImage:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505731/eventhub/category/xngndezflobwdhyds2dl.png',
    backgroundColor: '#AFD198'
  },
  {
    name: 'Festival',
    iconImage:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505732/eventhub/category/fj0qbybujspr8crybhez.png',
    backgroundColor: '#F7C566'
  },
  {
    name: 'Enviroment',
    iconImage:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505734/eventhub/category/nubvqwxlqcu2suwgbas1.png',
    backgroundColor: '#5DEBD7'
  }
]

export const PRODUCT_SORT_OPTIONS: IOptionSelect[] = [
  { value: 'best-selling', label: 'Best Selling' },
  { value: 'available', label: 'Available' },
  { value: 'price-low-to-high', label: 'Price: Low to High' },
  { value: 'price-high-to-low', label: 'Price: High to Low' }
]

export const SELLER_SORT_OPTIONS: IOptionSelect[] = [
  { value: 'best-selling', label: 'Best Selling' },
  { value: 'rating-high-to-low', label: 'Rating: High to Low' },
  { value: 'rating-low-to-high', label: 'Rating: Low to High' },
  { value: 'a-z', label: 'By name: A-Z' },
  { value: 'z-a', label: 'By name: Z-A' }
]

export const REVIEW_SORT_OPTIONS: IOptionSelect[] = [
  { value: 'recent', label: 'Recent' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'rating-high-to-low', label: 'Highest Rating' },
  { value: 'rating-low-to-high', label: 'Lowest Rating' }
]

export const LOCALES: IOptionSelect[] = [
  { value: 'en', label: 'English (EN)', icon: eng },
  { value: 'vn', label: 'VietNam (VN)', icon: vn }
]

export const APPS_OPTIONS: IOptionSelect[] = [
  { value: 'all', label: 'All' },
  { value: 'development', label: 'Developer Tools' },
  { value: 'marketplace', label: 'Marketplace' },
  { value: 'finances', label: 'Financial Accounting' }
]

export const EVENT_MANAGEMENT_OPTIONS: IOptionSelect[] = [
  { value: 'ALL', label: 'All' },
  { value: 'PUBLIC', label: 'Published' },
  { value: 'PRIVATE', label: 'Privated' }
]

export const ORDER_SORT_OPTIONS: IOptionSelect[] = [
  { value: 'default', label: 'Default sorting' },
  { value: 'a-z', label: 'By name: A-Z' },
  { value: 'z-a', label: 'By name: Z-A' },
  { value: 'rating-high-to-low', label: 'Rating: High to Low' },
  { value: 'rating-low-to-high', label: 'Rating: Low to High' }
]

export const PAYMENT_OPTIONS: IOptionSelect[] = [
  { value: 'mastercard', icon: mc },
  { value: 'visa', icon: visa },
  { value: 'googlepay', icon: googlepay },
  { value: 'applepay', icon: applepay },
  { value: 'paypal', icon: paypal },
  { value: 'bitpay', icon: bitpay }
]

export const NOTIFICATION_OPTIONS: IOptionSelect[] = [
  { value: 'all', label: 'All' },
  { value: 'follow', label: 'Following' },
  { value: 'order', label: 'Orders' }
]

export const MESSAGE_OPTIONS: IOptionSelect[] = [
  { value: 'all', label: 'All' },
  { value: 'latest', label: 'Latest' },
  { value: 'archived', label: 'Archive' }
]

export const EVENT_STATUS_OPTIONS: IOptionSelect[] = [
  { value: EEventType.ALL, label: 'All' },
  { value: EEventType.UPCOMING, label: 'Upcoming' },
  { value: EEventType.OPENING, label: 'Openning' },
  { value: EEventType.CLOSED, label: 'Closed' }
]

export const PRODUCT_TYPE_OPTIONS: IOptionSelect[] = [
  { value: 'simple', label: 'Simple Product' },
  { value: 'variable', label: 'Variable Product' },
  { value: 'grouped', label: 'Grouped Product' },
  { value: 'service', label: 'Services Product' }
]

export const TRANSACTIONS_SORT_OPTIONS: IOptionSelect[] = [
  { value: 'recent', label: 'Recent' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'amount-high-to-low', label: 'Amount: High to Low' },
  { value: 'amount-low-to-high', label: 'Amount: Low to High' }
]

export const EVENT_SELLER_OPTIONS: IOptionSelect[] = [
  { value: 'FREE', label: 'Free' },
  { value: 'FEE', label: 'Buy Ticket' }
]

export const PRODUCT_ADDITIONAL_OPTIONS: IOptionSelect[] = [
  { value: 'last-modified', label: 'Last Modified' },
  { value: 'date-added', label: 'Date Added' },
  { value: 'last-viewed', label: 'Last Viewed' },
  { value: 'average-rating', label: 'Average Rating' },
  { value: 'popularity', label: 'Popularity' }
]

export const EVENT_SELECT_OPTIONS: IOptionSelect[] = [
  { value: 'PUBLIC', label: 'Move to Publics' },
  { value: 'PRIVATE', label: 'Move to Privates' },
  { value: 'TRASH', label: 'Move to Trash' }
]

export const PROMOTIONAL_OPTIONS: IOptionSelect[] = [
  { value: 'category-1', label: 'Category 1' },
  { value: 'category-2', label: 'Category 2' },
  { value: 'category-3', label: 'Category 3' },
  { value: 'category-4', label: 'Category 4' },
  { value: 'category-5', label: 'Category 5' }
]

export const UNITS_OPTIONS: IOptionSelect[] = [
  { value: 'pcs', label: 'Pieces' },
  { value: 'box', label: 'Boxes' },
  { value: 'kg', label: 'Kilograms' }
]
