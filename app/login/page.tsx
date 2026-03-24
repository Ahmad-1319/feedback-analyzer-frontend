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
import { useLoginForm } from "@/hooks/useLoginForm";

export default function LoginPage() {
  const { register, handleSubmit, errors, onSubmit, isLoading } =
    useLoginForm();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-secondary/30 px-4">

      <div className="relative z-10 w-full max-w-md">
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
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold">
                Sign In
              </CardTitle>
              <CardDescription>
                 Enter your credentials to access your account.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 pt-2 pb-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-4">
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
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 rounded-md font-bold text-sm bg-primary hover:bg-primary/90 transition-all focus:ring-2 focus:ring-primary/20"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Signing In...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>

              <div className="relative py-4 flex items-center justify-center">
                <div className="absolute inset-x-0 h-px bg-black/5" />
                <span className="relative px-4 bg-background text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">
                  OR SIGN IN WITH
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-12 rounded-xl border-black/5 bg-white/50 hover:bg-white hover:border-primary/20 text-xs font-bold uppercase tracking-widest font-sans transition-all backdrop-blur-sm"
                >
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-xl border-black/5 bg-white/50 hover:bg-white hover:border-primary/20 text-xs font-bold uppercase tracking-widest font-sans transition-all backdrop-blur-sm"
                >
                  GitHub
                </Button>
              </div>
            </CardContent>

            <CardFooter className="pb-8 justify-center border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-primary font-bold hover:underline"
                >
                  Get Started
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
