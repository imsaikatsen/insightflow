// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './features/dashboardSlice';
import authReducer from './features/authSlice';

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    auth: authReducer,
  },
});

export default store;
