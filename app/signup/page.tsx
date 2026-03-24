"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  Mail,
  Lock,
  Loader2,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSignupForm } from "@/hooks/useSignupForm";

export default function SignupPage() {
  const { register, handleSubmit, errors, onSubmit, isLoading } =
    useSignupForm();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-secondary/30 px-4 py-12">

      <div className="relative z-10 w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">
              FeedbackNexus
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="saas-card p-2">
            <CardHeader className="text-center pb-2 px-8">
              <CardTitle className="text-2xl font-bold">
                Create Account
              </CardTitle>
              <CardDescription>
                Join high-growth teams using FeedbackNexus.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 pt-2 pb-8 px-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      {...register("first_name")}
                      placeholder="First Name"
                      className="h-12 border-border focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-md"
                    />
                    {errors.first_name && (
                      <p className="text-xs text-destructive font-medium">
                        {errors.first_name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Input
                      {...register("last_name")}
                      placeholder="Last Name"
                      className="h-12 border-border focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-md"
                    />
                    {errors.last_name && (
                      <p className="text-xs text-destructive font-medium">
                        {errors.last_name.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Email Address"
                    className="h-12 border-border focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-md"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                    className="h-12 border-border focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-md"
                  />
                  {errors.password && (
                    <p className="text-xs text-destructive font-medium">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Input
                    {...register("confirmPassword")}
                    type="password"
                    placeholder="Confirm Password"
                    className="h-12 border-border focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-md"
                  />
                  {errors.confirmPassword && (
                    <p className="text-xs text-destructive font-medium">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 rounded-md font-bold text-sm bg-primary hover:bg-primary/90 transition-all focus:ring-2 focus:ring-primary/20"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Creating Account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>
            </CardContent>

            <CardFooter className="pb-8 justify-center border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary font-bold hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
