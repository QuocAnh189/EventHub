import { IConversation } from '@interfaces/websockets/conversation.interface'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const ConversationSliceKey = 'conversation'

type InitialType = {
  conversation: IConversation | null
}

const initialState = {
  conversation: null
} as InitialType

const conversationSlice = createSlice({
  name: ConversationSliceKey,
  initialState,
  reducers: {
    setConversation: (state, action: PayloadAction<any | null>) => {
      state.conversation = action.payload
    }
  }
})

export const { setConversation } = conversationSlice.actions

const conversationReducer = conversationSlice.reducer
export default conversationReducer
