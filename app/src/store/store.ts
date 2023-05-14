import { configureStore } from '@reduxjs/toolkit';
import { mainSlice } from '~/pages/main/store/store';

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
