import { configureStore } from '@reduxjs/toolkit';
import stepper from './slices/stepper';

export const store = configureStore({
  reducer: { stepper },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
