// import { HubConnection } from '@microsoft/signalr'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const SocketSliceKey = 'socket'

type InitialType = {
  socket: any
}

const initialState = {
  socket: null
} as InitialType

const socketSlice = createSlice({
  name: SocketSliceKey,
  initialState,
  reducers: {
    setSocket: (state, action: PayloadAction<any>) => {
      state.socket = action.payload
    }
  }
})

export const { setSocket } = socketSlice.actions

const socketReducer = socketSlice.reducer
export default socketReducer
