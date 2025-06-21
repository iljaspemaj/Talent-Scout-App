import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')) || null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        state.isAuthenticated = false;
        state.user = null;
    }
}
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;