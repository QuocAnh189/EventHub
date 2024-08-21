import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//api
import { apiAuth } from './apis/auth.api'

//slices
import userReducer, { UserSliceKey } from '@redux/slices/user.slice'

const persistConfig = {
  key: 'root',
  storage: storage
}

const combinedReducer: any = combineReducers({
  [UserSliceKey]: userReducer
})

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action)
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: {
    persistedReducer,

    [apiAuth.reducerPath]: apiAuth.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }).concat([apiAuth.middleware])
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

export const persistor = persistStore(store)
