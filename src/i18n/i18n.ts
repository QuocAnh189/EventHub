import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import SIGNIN_EN from '@translate/en/auth/signin.json'
import SIGNUP_EN from '@translate/en/auth/signup.json'
import COMMON_EN from '@translate/en/common.json'
import HOME_EN from '@translate/en/home.json'

import SIGNIN_VN from '@translate/vi/auth/signin.json'
import SIGNUP_VN from '@translate/vi/auth/signup.json'
import COMMON_VN from '@translate/vi/common.json'
import HOME_VN from '@translate/vi/home.json'

const resources = {
  en: {
    signin: SIGNIN_EN,
    signup: SIGNUP_EN,
    common: COMMON_EN,
    home: HOME_EN
  },
  vn: {
    signin: SIGNIN_VN,
    signup: SIGNUP_VN,
    common: COMMON_VN,
    home: HOME_VN
  }
}

const defaultNS = 'home'

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',
  ns: [],
  fallbackLng: 'en',
  defaultNS,
  interpolation: {
    escapeValue: false
  }
})
