import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Menu, X } from "lucide-react";

export default function Navbar() {
  const scrolled = useNavbarScroll(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <BarChart3 className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-foreground font-heading">
            FeedbackNexus
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link
            href="#features"
            className="hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Docs
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Company
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Sign In
          </Link>
          <Button asChild className="rounded-md font-semibold">
            <Link href="/signup">Get Started</Link>
          </Button>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg"
          >
            <div className="px-6 py-8 space-y-4">
              <Link
                href="#features"
                className="block font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#"
                className="block font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="block font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Docs
              </Link>
              <div className="pt-4 border-t border-border flex flex-col gap-4">
                <Link href="/login" className="text-center font-medium">
                  Sign In
                </Link>
                <Button asChild className="w-full">
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
