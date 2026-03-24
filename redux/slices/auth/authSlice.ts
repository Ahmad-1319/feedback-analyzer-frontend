import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserResponse } from "@/types/auth";

interface AuthState {
  user: UserResponse | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLogoutModalOpen: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  isLogoutModalOpen: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserResponse | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    openLogoutModal: (state) => {
      state.isLogoutModalOpen = true;
    },
    closeLogoutModal: (state) => {
      state.isLogoutModalOpen = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  setUser,
  setIsLoading,
  openLogoutModal,
  closeLogoutModal,
  clearUser,
} = authSlice.actions;

export default authSlice.reducer;
