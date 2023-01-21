import { configureStore } from '@reduxjs/toolkit';
import stepper from './slices/stepper';
import chat from './slices/chat';

export const store = configureStore({
  reducer: { stepper, chat },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
