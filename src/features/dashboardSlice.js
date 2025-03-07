// src/features/dashboardSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  systemMetrics: [],
  loading: false,
  error: null,
};

// Slice
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.systemMetrics = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  dashboardSlice.actions;

// Export reducer
export default dashboardSlice.reducer;
