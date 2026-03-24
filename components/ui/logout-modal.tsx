"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function LogoutModal({ isOpen, onClose, onConfirm }: LogoutModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-sm overflow-hidden rounded-lg border border-border bg-white p-6 shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive mx-auto">
              <LogOut className="h-6 w-6" />
            </div>

            <div className="text-center">
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Sign Out?
              </h3>
              <p className="mb-6 text-muted-foreground text-sm leading-relaxed">
                Are you sure you want to sign out? You will need to log in again to access your dashboard.
              </p>

              <div className="flex flex-col gap-2">
                <Button
                  onClick={onConfirm}
                  variant="destructive"
                  className="h-10 w-full rounded-md font-bold text-xs"
                >
                  Sign Out
                </Button>
                <Button
                  variant="ghost"
                  onClick={onClose}
                  className="h-10 w-full rounded-md font-bold text-xs text-muted-foreground hover:text-foreground"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
