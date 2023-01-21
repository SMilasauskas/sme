import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type ChatT = {
  isExpanded: boolean;
};

export const initialState: ChatT = {
  isExpanded: false,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    toggleChat: (state: ChatT) => {
      state.isExpanded = !state.isExpanded;
    },
  },
});

export const { toggleChat } = chatSlice.actions;

export default chatSlice.reducer;
