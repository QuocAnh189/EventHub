//assets
import china from '@assets/images/flags/china.png'
import english from '@assets/images/flags/english.png'
import france from '@assets/images/flags/france.png'
import germany from '@assets/images/flags/germany.png'
import italia from '@assets/images/flags/italia.png'
import japan from '@assets/images/flags/japan.png'
import korea from '@assets/images/flags/korea.png'
import russia from '@assets/images/flags/russia.png'
import spain from '@assets/images/flags/spain.png'
import vietnam from '@assets/images/flags/vietnam.png'

import mc from '@assets/images/payment/mc.svg'
import visa from '@assets/images/payment/visa.svg'
import googlepay from '@assets/images/payment/googlepay.svg'
import applepay from '@assets/images/payment/applepay.svg'
import paypal from '@assets/images/payment/paypal.svg'
import bitpay from '@assets/images/payment/bitpay.svg'

//enum
import { EEventType } from './enum.constant'

export interface IOptionSelect {
  id?: string
  value?: any
  label?: string
  icon?: string
  backgroundColor?: string
}

export const EVENT_CATEGORIES: any = [
  {
    id: '1',
    name: 'Workshop',
    iconImageUrl:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505725/eventhub/category/hhganbll8tt2wofqdsn2.png',
    color: '#F27BBD'
  },
  {
    id: '2',
    name: 'Exhibition',
    iconImageUrl:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505724/eventhub/category/dze7rcjxmhbiyuxp0nms.png',
    color: '#A3FFD6'
  },
  {
    id: '3',
    name: 'Music',
    iconImageUrl:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505724/eventhub/category/ltf9kjwcm9flsr9kava1.png',
    color: '#F3D0D7'
  },
  {
    id: '4',
    name: 'Sport',
    iconImageUrl:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505726/eventhub/category/zs0q5wmitcvihqjgm0ov.png',
    color: '#EE4266'
  },
  {
    id: '5',
    name: 'Culture',
    iconImageUrl:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505727/eventhub/category/cvpt43b4aqxcjdgoezoc.png',
    color: '#D1BB9E'
  },
  {
    id: '6',
    name: 'Party',
    iconImageUrl:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505729/eventhub/category/mqx4ehibcschz59jd81t.png',
    color: '#FFFAB7'
  },
  {
    id: '7',
    name: 'Education',
    iconImageUrl:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505730/eventhub/category/fvbuvcl1yetyimeh6v40.png',
    color: '#BC7FCD'
  },
  {
    id: '8',
    name: 'Fair',
    iconImageUrl:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505731/eventhub/category/xngndezflobwdhyds2dl.png',
    color: '#AFD198'
  },
  {
    id: '9',
    name: 'Festival',
    iconImageUrl:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505732/eventhub/category/fj0qbybujspr8crybhez.png',
    color: '#F7C566'
  },
  {
    id: '10',
    name: 'Environment',
    iconImageUrl:
      'https://res.cloudinary.com/dadvtny30/image/upload/v1713505734/eventhub/category/nubvqwxlqcu2suwgbas1.png',
    color: '#5DEBD7'
  }
]

export const PRODUCT_CATEGORIES = [
  { value: 'all', label: 'All Products' },
  { value: 'electronics', label: 'Electronics', icon: 'icon-laptop-mobile-solid', color: 'accent' },
  { value: 'food', label: 'Groceries', icon: 'icon-burger-soda-solid', color: 'header' },
  { value: 'fashion', label: 'Fashion', icon: 'icon-shirt-solid', color: 'red' },
  { value: 'services', label: 'Services', icon: 'icon-user-gear-solid', color: 'yellow' }
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
  { value: 'en', label: 'English', icon: english },
  { value: 'cn', label: 'China', icon: china },
  { value: 'jp', label: 'Japan', icon: japan },
  { value: 'kr', label: 'Korea', icon: korea },
  { value: 'ge', label: 'Germany', icon: germany },
  { value: 'it', label: 'Italia', icon: italia },
  { value: 'ru', label: 'Russia', icon: russia },
  { value: 'sp', label: 'Spain', icon: spain },
  { value: 'fr', label: 'France', icon: france },
  { value: 'vn', label: 'Vietnam', icon: vietnam }
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
  { value: EEventType.OPENING, label: 'Opening' },
  { value: EEventType.CLOSED, label: 'Closed' }
]

export const EVENT_RATE_OPTIONS: IOptionSelect[] = [
  { value: 5, label: '5 start' },
  { value: 4, label: '4 start' },
  { value: 3, label: '3 start' },
  { value: 2, label: '2 start' },
  { value: 2, label: '1 start' }
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
