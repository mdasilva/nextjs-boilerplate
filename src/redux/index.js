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
  // middleware: getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }), // disabled only because the data in the state is too big
  reducer: appSlice.reducer,
  devTools: process.env.NODE_ENV !== 'production'
});
