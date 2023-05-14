import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type User } from 'next-auth';

interface MainState {
  user: User | null;
}

const initialState: MainState = {
  user: null,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = mainSlice.actions;

export default mainSlice.reducer;
