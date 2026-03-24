"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Shield,
  Sparkles,
  TrendingUp,
  Zap,
  Users,
  Menu,
  X,
  Cpu,
  Fingerprint,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <FeatureBento />
        <IntegrationSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

import { useNavbarScroll } from "@/hooks/useNavbarScroll";

function Navbar() {
  const scrolled = useNavbarScroll(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-4" : "bg-transparent py-6"
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
          <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Docs</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Company</Link>
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
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              <Link href="#features" className="block font-medium" onClick={() => setMobileOpen(false)}>Features</Link>
              <Link href="#" className="block font-medium" onClick={() => setMobileOpen(false)}>Pricing</Link>
              <Link href="#" className="block font-medium" onClick={() => setMobileOpen(false)}>Docs</Link>
              <div className="pt-4 border-t border-border flex flex-col gap-4">
                <Link href="/login" className="text-center font-medium">Sign In</Link>
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

function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as const 
      },
    },
  };

  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest mb-8 border border-primary/10"
          >
            v3.0 is now live
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="hero-heading text-6xl md:text-8xl lg:text-[110px] mb-8"
          >
            Turn feedback into <br />
            <span className="text-primary">actionable growth.</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-xl lg:text-2xl text-muted-foreground/80 mb-14 leading-[1.6] font-medium"
          >
            Analyze your customer data with precision. Our AI-driven platform decodes sentiment and automates taxonomy to give you the insights you need.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="h-14 px-10 rounded-lg font-bold text-base shadow-xl shadow-primary/20 active:scale-95 transition-all">
              <Link href="/signup">Get Started for Free</Link>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-10 rounded-lg font-bold text-base border-2 active:scale-95 transition-all">
              <Link href="#">Book a Demo</Link>
            </Button>
          </motion.div>
          
          <motion.div
             variants={itemVariants}
             className="mt-24 rounded-2xl border border-border bg-card shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-4 max-w-6xl mx-auto w-full relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="rounded-xl bg-secondary/30 aspect-video flex items-center justify-center text-muted-foreground font-black text-lg tracking-widest uppercase border border-border overflow-hidden relative">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
               Dashboard Preview
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const brands = ["Nike", "Stripe", "Airbnb", "Vercel", "OpenAI", "Linear"];
  return (
    <section className="py-12 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest mb-10">
          Trusted by high-growth product teams
        </p>
        <div className="flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale">
          {brands.map((brand, i) => (
            <span key={i} className="text-2xl font-bold tracking-tighter">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureBento() {
  const features = [
    {
      title: "Real-time Analysis",
      desc: "Instantly process customer feedback as it arrives with high accuracy.",
      icon: Zap,
    },
    {
      title: "AI Taxonomy",
      desc: "Automatically categorize feedback into actionable tags and themes.",
      icon: Brain,
    },
    {
      title: "Deep Sentiment",
      desc: "Go beyond positive and negative to understand true user intent.",
      icon: MessageSquare,
    },
    {
      title: "Secure & Compliant",
      desc: "Enterprise-grade security ensuring your data remains private and protected.",
      icon: Shield,
    },
    {
      title: "Team Collaboration",
      desc: "Shared workflows to ensure every piece of feedback is addressed.",
      icon: Users,
    },
    {
      title: "Insights Engine",
      desc: "Powerful reporting that highlights trends and growth opportunities.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="sub-heading text-3xl lg:text-5xl mb-4">
            Built for modern product teams.
          </h2>
          <p className="text-muted-foreground/80 max-w-xl mx-auto text-lg font-medium">
            Powerful tools to help you understand your customers and grow your product faster.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="saas-card p-8 group cursor-default"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="sub-heading text-xl mb-3">{f.title}</h3>
              <p className="text-muted-foreground/80 leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationSection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="sub-heading text-3xl md:text-4xl mb-6"
        >
          Connect your workflow
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground/80 max-w-xl mx-auto mb-16 text-lg font-medium"
        >
           Nexus integrates seamlessly with your favorite tools.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4">
          {["Slack", "Discord", "Linear", "GitHub", "Jira", "Notion"].map(
            (tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 rounded-lg border border-border bg-white text-foreground font-bold text-base shadow-sm hover:border-primary transition-all cursor-default"
              >
                {tool}
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-30" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hero-heading text-white text-4xl md:text-6xl mb-8"
        >
          Ready to transform <br /> your feedback?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/80 max-w-2xl mx-auto mb-12 text-xl font-medium leading-relaxed"
        >
          Start your 14-day free trial today. Join thousands of teams turning data into growth.
        </motion.p>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex justify-center"
        >
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-16 px-12 rounded-lg font-bold text-xl bg-white text-primary hover:bg-white/95 shadow-xl active:scale-95 transition-all"
          >
            <Link href="/signup">Start Free Trial</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-7 w-7 rounded bg-primary flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">FeedbackNexus</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The modern platform for customer feedback analysis. Turn insight into growth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold text-sm">Product</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-primary transition-colors">Features</Link>
                <Link href="#" className="hover:text-primary transition-colors">Integrations</Link>
                <Link href="#" className="hover:text-primary transition-colors">Pricing</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm">Company</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-primary transition-colors">About</Link>
                <Link href="#" className="hover:text-primary transition-colors">Careers</Link>
                <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm">Support</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-primary transition-colors">Documentation</Link>
                <Link href="#" className="hover:text-primary transition-colors">API</Link>
                <Link href="#" className="hover:text-primary transition-colors">Help Center</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-medium">
          <p>© {new Date().getFullYear()} FeedbackNexus. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-primary transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
