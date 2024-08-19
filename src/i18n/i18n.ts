import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {},
  vn: {}
}

const defaultNS = 'home'

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language')! || 'en',
  ns: [],
  fallbackLng: 'en',
  defaultNS,
  interpolation: {
    escapeValue: false
  }
})
