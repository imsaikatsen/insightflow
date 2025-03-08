import { createSlice } from '@reduxjs/toolkit';

// Dummy user credentials
const DUMMY_USER = {
  email: 'admin@example.com',
  password: 'admin123',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null, // Check localStorage for existing user
    error: null,
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;

      if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
        state.user = { email }; // Store user info
        localStorage.setItem('user', JSON.stringify({ email })); // Persist login
        state.error = null;
      } else {
        state.error = 'Invalid email or password!';
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
