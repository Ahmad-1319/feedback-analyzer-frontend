"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormData } from "@/lib/validations/auth";
import { useSignup } from "@/hooks/useSignup";
import { toast } from "react-hot-toast";

export function useSignupForm() {
  const { signup, isLoading, error } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      const response = await signup(data);
      toast.success("Account created successfully!");
      console.log("Signup response:", response);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Signup failed");
      console.error("Signup error:", err);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isLoading,
    error,
  };
}
