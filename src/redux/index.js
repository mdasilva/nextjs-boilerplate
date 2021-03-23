import { configureStore, createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    loaded: false
  },
  reducers: {
    setLandingLoaded(state, action) {
      return { ...state, loaded: action.payload };
    }
  }
});

export const { setLandingLoaded } = appSlice.actions;

export const store = configureStore({
  reducer: appSlice.reducer
});
