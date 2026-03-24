"use client";

import { useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";
import { API_ENDPOINTS } from "@/lib/api-config";
import type { UserLogin, UserSignup, Token } from "@/types/auth";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setUser,
  setIsLoading,
  openLogoutModal,
  closeLogoutModal,
  clearUser,
} from "@/redux/slices/auth/authSlice";

export function useAuth() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isLoading, isLogoutModalOpen } = useAppSelector(
    (state) => state.auth
  );
  
  const router = useRouter();
  const pathname = usePathname();

  const fetchCurrentUser = useCallback(async (token: string) => {
    try {
      const response = await fetch(API_ENDPOINTS.AUTH.ME, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const userData = await response.json();
        dispatch(setUser(userData));
      } else {
        localStorage.removeItem("access_token");
        dispatch(setUser(null));
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
      localStorage.removeItem("access_token");
      dispatch(setUser(null));
    } finally {
      dispatch(setIsLoading(false));
    }
  }, [dispatch]);


  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
    if (token) {
      fetchCurrentUser(token);
    } else {
      dispatch(setIsLoading(false));
    }
  }, [fetchCurrentUser, dispatch]);


  useEffect(() => {
    if (isLoading) return;
    const publicPaths = ["/", "/login", "/signup"];
    const isPublicPath = publicPaths.includes(pathname);
    if (user && isPublicPath) {
      router.push("/dashboard");
    } else if (!user && !isPublicPath) {
      router.push("/");
    }
  }, [user, isLoading, pathname, router]);

  const login = async (credentials: UserLogin) => {
    const response = await fetch(API_ENDPOINTS.AUTH.LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Login failed");
    }
    const data: Token = await response.json();
    localStorage.setItem("access_token", data.access_token);
    await fetchCurrentUser(data.access_token);
    toast.success("Secure link established. Welcome back, Agent.");
    router.push("/dashboard");
  };

  const signup = async (signupData: UserSignup) => {
    const response = await fetch(API_ENDPOINTS.AUTH.SIGNUP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Signup failed");
    }
    toast.success("Agent profile initialized. Please sign in.");
    router.push("/login");
  };

  const logout = () => {
    dispatch(openLogoutModal());
  };

  const confirmLogout = () => {
    localStorage.removeItem("access_token");
    dispatch(clearUser());
    dispatch(closeLogoutModal());
    toast.success("Session terminated. Node offline.");
    router.push("/");
  };

  const handleCloseLogoutModal = () => dispatch(closeLogoutModal());

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
    confirmLogout,
    isLogoutModalOpen,
    closeLogoutModal: handleCloseLogoutModal,
  };
}
