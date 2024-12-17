import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//api
import { apiAuth } from './apis/auth.api'
import { apiCategory } from './apis/category.api'
import { apiCommand } from './apis/command.api'
import { apiEvent } from './apis/event.api'
import { apiReview } from './apis/review.api'
import { apiPayment } from './apis/payment.api'
import { apiConversation } from './apis/conversation.api'
import { apiCoupon } from './apis/coupon.api'
import { apiExpense } from './apis/expense.api'
// import { apiRole } from './apis/roles.api'
import { apiTicket } from './apis/ticket.api'
import { apiUser } from './apis/user.api'
// import { apiPermission } from './apis/permission.api'
// import { apiFunction } from './apis/function.api'

//slices
import userReducer, { UserSliceKey } from '@redux/slices/user.slice'
import categoryReducer, { CategorySliceKey } from './slices/category.slice'
import eventReducer, { EventSliceKey } from './slices/event.slice'
import socketReducer, { SocketSliceKey } from './slices/socket.slice'
import conversationReducer, { ConversationSliceKey } from './slices/conversation.slice'
import couponReducer, { CouponSliceKey } from './slices/coupon.slice'

const persistConfig = {
  key: 'root',
  storage: storage
}

const combinedReducer: any = combineReducers({
  [CategorySliceKey]: categoryReducer,
  [UserSliceKey]: userReducer,
  [EventSliceKey]: eventReducer,
  [SocketSliceKey]: socketReducer,
  [ConversationSliceKey]: conversationReducer,
  [CouponSliceKey]: couponReducer
})

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action)
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: {
    persistedReducer,

    [apiAuth.reducerPath]: apiAuth.reducer,
    [apiCategory.reducerPath]: apiCategory.reducer,
    [apiCommand.reducerPath]: apiCommand.reducer,
    [apiEvent.reducerPath]: apiEvent.reducer,
    [apiCoupon.reducerPath]: apiCoupon.reducer,
    [apiExpense.reducerPath]: apiExpense.reducer,
    [apiReview.reducerPath]: apiReview.reducer,
    [apiPayment.reducerPath]: apiPayment.reducer,
    [apiConversation.reducerPath]: apiConversation.reducer,
    [apiTicket.reducerPath]: apiTicket.reducer,
    [apiUser.reducerPath]: apiUser.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }).concat([
      apiAuth.middleware,
      apiCategory.middleware,
      apiCommand.middleware,
      apiEvent.middleware,
      apiCoupon.middleware,
      apiExpense.middleware,
      apiReview.middleware,
      apiPayment.middleware,
      apiConversation.middleware,
      apiTicket.middleware,
      apiUser.middleware
    ])
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

export const persistor = persistStore(store)
