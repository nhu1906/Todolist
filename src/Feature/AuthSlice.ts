import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  email: string;
  token: string | null;
  username: string;
  refreshToken: string;
}

const initialState: AuthState = {
  email: '',
  token: null,
  username: '',
  refreshToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        email: string;
        token: string;
        username: string;
        refreshToken: string;
      }>
    ) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.refreshToken = action.payload.refreshToken;
    },
    clearUser: (state) => {
      state.email = '';
      state.token = null;
      state.username = '';
      state.refreshToken = '';
    }
  }
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
