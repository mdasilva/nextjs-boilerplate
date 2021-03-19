import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import app from './slices/app';

// NOTE: If you need to split your redux store just add it here
const reducer = combineReducers({
  app
});

export const store = configureStore({
  // middleware: getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }), // disabled only because the data in the state is too big
  reducer,
  devTools: process.env.NODE_ENV !== 'production'
});
