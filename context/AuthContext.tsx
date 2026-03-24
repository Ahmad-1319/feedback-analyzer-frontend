"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { toast } from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";
import { API_ENDPOINTS } from "@/lib/api-config";
import type { UserResponse, Token, UserLogin, UserSignup } from "@/types/auth";
interface AuthContextType {
  user: UserResponse | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: UserLogin) => Promise<void>;
  signup: (data: UserSignup) => Promise<void>;
  logout: () => void;
  confirmLogout: () => void;
  isLogoutModalOpen: boolean;
  closeLogoutModal: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
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
        setUser(userData);
      } else {
        localStorage.removeItem("access_token");
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
      localStorage.removeItem("access_token");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      fetchCurrentUser(token);
    } else {
      setIsLoading(false);
    }
  }, [fetchCurrentUser]);

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
    setIsLogoutModalOpen(true);
  };
  const confirmLogout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
    setIsLogoutModalOpen(false);
    toast.success("Session terminated. Node offline.");
    router.push("/");
  };
  const closeLogoutModal = () => setIsLogoutModalOpen(false);
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
        confirmLogout,
        isLogoutModalOpen,
        closeLogoutModal,
      }}
    >
      {isLoading ? (
        <div className="flex h-screen w-screen items-center justify-center bg-black">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
