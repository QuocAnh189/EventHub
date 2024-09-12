import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import SIGNIN_EN from '@translate/en/auth/signin.json'
import SIGNUP_EN from '@translate/en/auth/signup.json'
import CATEGORY_ANALYSIS_EN from '@translate/en/dashboard/category-analysis.json'
import CUSTOMER_EN from '@translate/en/dashboard/customer.json'
import EVENT_ANALYSIS_EN from '@translate/en/dashboard/event-analysis.json'
import EVENT_ANALYSIS_DETAILS_EN from '@translate/en/dashboard/event-analysis-detail.json'
import OVERVIEW_DETAIL_EN from '@translate/en/dashboard/overview-detail.json'
import OVERVIEW_EN from '@translate/en/dashboard/overview.json'
import PAYMENT_EN from '@translate/en/dashboard/payment.json'
import TICKET_SALE_EN from '@translate/en/dashboard/ticket-sale.json'
import CREATE_EVENT_EN from '@translate/en/events/create-event.json'
import MY_EVENT_EN from '@translate/en/events/my-event.json'
import MY_TICKET_EN from '@translate/en/events/my-ticket.json'
import TOP_EVENT_EN from '@translate/en/events/top-event.json'
import CALENDAR_EN from '@translate/en/calendar.json'
import HELP_EN from '@translate/en/help.json'
import HOME_EN from '@translate/en/home.json'
import EXPLORE_EN from '@translate/en/explore.json'
import LANDING_EN from '@translate/en/landing.json'
import ORDER_EN from '@translate/en/order.json'
import REPORT_EN from '@translate/en/report.json'
import REVIEW_EN from '@translate/en/review.json'
import PROFILE_EN from '@translate/en/profile.json'
import COMMON_EN from '@translate/en/common.json'

import SIGNIN_VN from '@translate/vi/auth/signin.json'
import SIGNUP_VN from '@translate/vi/auth/signup.json'
import CATEGORY_ANALYSIS_VN from '@translate/vi/dashboard/category-analysis.json'
import CUSTOMER_VN from '@translate/vi/dashboard/customer.json'
import EVENT_ANALYSIS_VN from '@translate/vi/dashboard/event-analysis.json'
import EVENT_ANALYSIS_DETAILS_VN from '@translate/vi/dashboard/event-analysis-detail.json'
import OVERVIEW_DETAIL_VN from '@translate/vi/dashboard/overview-detail.json'
import OVERVIEW_VN from '@translate/vi/dashboard/overview.json'
import PAYMENT_VN from '@translate/vi/dashboard/payment.json'
import TICKET_SALE_VN from '@translate/vi/dashboard/ticket-sale.json'
import CREATE_EVENT_VN from '@translate/vi/events/create-event.json'
import MY_EVENT_VN from '@translate/vi/events/my-event.json'
import MY_TICKET_VN from '@translate/vi/events/my-ticket.json'
import TOP_EVENT_VN from '@translate/vi/events/top-event.json'
import CALENDAR_VN from '@translate/vi/calendar.json'
import HELP_VN from '@translate/vi/help.json'
import HOME_VN from '@translate/vi/home.json'
import EXPLORE_VN from '@translate/vi/explore.json'
import LANDING_VN from '@translate/vi/landing.json'
import ORDER_VN from '@translate/vi/order.json'
import REPORT_VN from '@translate/vi/report.json'
import REVIEW_VN from '@translate/vi/review.json'
import PROFILE_VN from '@translate/vi/profile.json'
import COMMON_VN from '@translate/vi/common.json'

const resources = {
  en: {
    landing: LANDING_EN,
    signin: SIGNIN_EN,
    signup: SIGNUP_EN,
    category_analysis: CATEGORY_ANALYSIS_EN,
    customer: CUSTOMER_EN,
    event_analysis: EVENT_ANALYSIS_EN,
    event_analysis_detail: EVENT_ANALYSIS_DETAILS_EN,
    overview_detail: OVERVIEW_DETAIL_EN,
    overview: OVERVIEW_EN,
    payment: PAYMENT_EN,
    ticket_sale: TICKET_SALE_EN,
    create_event: CREATE_EVENT_EN,
    my_event: MY_EVENT_EN,
    my_ticket: MY_TICKET_EN,
    top_event: TOP_EVENT_EN,
    calendar: CALENDAR_EN,
    help: HELP_EN,
    home: HOME_EN,
    explore: EXPLORE_EN,
    order: ORDER_EN,
    report: REPORT_EN,
    review: REVIEW_EN,
    profile: PROFILE_EN,
    common: COMMON_EN
  },
  vn: {
    landing: LANDING_VN,
    signin: SIGNIN_VN,
    signup: SIGNUP_VN,
    category_analysis: CATEGORY_ANALYSIS_VN,
    customer: CUSTOMER_VN,
    event_analysis: EVENT_ANALYSIS_VN,
    event_analysis_detail: EVENT_ANALYSIS_DETAILS_VN,
    overview_detail: OVERVIEW_DETAIL_VN,
    overview: OVERVIEW_VN,
    payment: PAYMENT_VN,
    ticket_sale: TICKET_SALE_VN,
    create_event: CREATE_EVENT_VN,
    my_event: MY_EVENT_VN,
    my_ticket: MY_TICKET_VN,
    top_event: TOP_EVENT_VN,
    calendar: CALENDAR_VN,
    help: HELP_VN,
    home: HOME_VN,
    explore: EXPLORE_VN,
    order: ORDER_VN,
    report: REPORT_VN,
    review: REVIEW_VN,
    profile: PROFILE_VN,
    common: COMMON_VN
  }
}

const defaultNS = 'home'

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language')! || 'en',
  ns: [
    'landing',
    'signin',
    'signup',
    'category_analysis',
    'customer',
    'event_analysis',
    'event_analysis_detail',
    'overview_detail',
    'overview',
    'payment',
    'ticket_sale',
    'create_event',
    'my_event',
    'my_ticket',
    'top_event',
    'my_ticket',
    'top_event',
    'calendar',
    'help',
    'home',
    'explore',
    'order',
    'report',
    'review',
    'profile'
  ],
  fallbackLng: 'en',
  defaultNS,
  interpolation: {
    escapeValue: false
  }
})

i18n.loadNamespaces('profile')
