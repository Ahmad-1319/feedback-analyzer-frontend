"use client";
import React from "react";
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
import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/feature-card";

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#030712] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <header className="fixed top-0 z-50 w-full bg-[#030712]/80 backdrop-blur-2xl border-b border-cyan-500/10 h-20 flex items-center">
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <Cpu className="h-5 w-5 text-white" />
            </div>
            <span className="tracking-tighter text-xl font-bold font-heading">
              feedback<span className="text-cyan-400">nexus</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-gray-400">
            <Link
              href="/"
              className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px]"
            >
              Back to Node
            </Link>
            <Link
              href="/login"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Button
              asChild
              size="sm"
              className="glow-button rounded-xl h-10 px-6 text-[10px] font-black uppercase tracking-[0.2em]"
            >
              <Link href="/signup">Activate Agent</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-24">

        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] aurora-bg opacity-20 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/10 mb-8 animate-pulse-glow">
              <Sparkles className="h-3 w-3 text-cyan-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
                Agentic Capabilities 2024
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold font-heading tracking-tight mb-8 leading-[0.9]">
              The Neural <span className="gradient-text">Manifesto.</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-sans font-medium leading-relaxed mb-12">
              Nexus is not just a tool; it is a cognitive extension of your
              product team. Our agent utilizes high-density vector processing to
              decode the unspoken needs of your user base.
            </p>
          </div>
        </section>


        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                feature={{
                  title: "Strategic Extraction",
                  description:
                    "Automatically identify top-tier strategic opportunities from thousands of raw feedback nodes.",
                  icon: TrendingUp,
                }}
                className="bg-gray-900/50 backdrop-blur-md border hover:border-cyan-500/30 transition-all duration-300"
              />
              <FeatureCard
                feature={{
                  title: "Sentiment Vectors",
                  description:
                    "Deep-layer emotional decoding that maps user sentiment across a multi-dimensional emotional plane.",
                  icon: Fingerprint,
                }}
                className="bg-gray-900/50 backdrop-blur-md border hover:border-cyan-500/30 transition-all duration-300"
              />
              <FeatureCard
                feature={{
                  title: "Automated Taxon",
                  description:
                    "Self-organizing categorization logic that adjusts in real-time as new feedback flows into the agent.",
                  icon: Brain,
                }}
                className="bg-gray-900/50 backdrop-blur-md border hover:border-cyan-500/30 transition-all duration-300"
              />
            </div>
          </div>
        </section>


        <section className="py-32 bg-black/40 relative z-10 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                Agent vs. Legacy
              </h2>
              <p className="text-gray-500 font-sans tracking-wide">
                Comparison of neural processing vs. traditional sentiment tools.
              </p>
            </div>
            <div className="glass-card rounded-3xl overflow-hidden border-white/5 shadow-2xl">
              <table className="w-full text-left border-collapse font-sans">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                      Capability
                    </th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">
                      Nexus Agent
                    </th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                      Manual Analysis
                    </th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                      Legacy Tools
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-200">
                      Processing Speed
                    </td>
                    <td className="px-8 py-6 text-cyan-400 font-bold whitespace-nowrap">
                      Instant (&lt; 200ms)
                    </td>
                    <td className="px-8 py-6 text-gray-500 italic">
                      Days/Weeks
                    </td>
                    <td className="px-8 py-6 text-gray-400 font-medium whitespace-nowrap">
                      Minutes/Hours
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-200">
                      Depth of Logic
                    </td>
                    <td className="px-8 py-6 text-cyan-400 font-bold whitespace-nowrap">
                      Neural Vectoring
                    </td>
                    <td className="px-8 py-6 text-gray-500 italic">
                      Subjective
                    </td>
                    <td className="px-8 py-6 text-gray-400 font-medium whitespace-nowrap">
                      Keyword Matching
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-200">
                      Data Sovereignty
                    </td>
                    <td className="px-8 py-6 text-cyan-400 font-bold whitespace-nowrap">
                      Encryption Tier III
                    </td>
                    <td className="px-8 py-6 text-gray-500 italic">
                      Vulnerable
                    </td>
                    <td className="px-8 py-6 text-gray-400 font-medium whitespace-nowrap">
                      Centralized
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>


        <section className="py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-cyan-500/5 to-[#030712]" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="glass-card border-white/10 rounded-[2.5rem] p-12 lg:p-24 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full aurora-bg opacity-30 animate-pulse-glow pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-bold font-heading mb-8 gradient-text">
                  Initialize Your Agent Node
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg lg:text-xl font-sans leading-relaxed">
                  Join the global network of data-driven organizations upgrading
                  their intelligence stack with Nexus AI.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button
                    asChild
                    size="lg"
                    className="glow-button h-16 rounded-2xl px-12 text-sm font-black uppercase tracking-[0.2em] w-full sm:w-auto"
                  >
                    <Link href="/signup">
                      Activate Agent Node{" "}
                      <Fingerprint className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-16 rounded-2xl px-12 text-xs font-bold uppercase tracking-widest border border-white/10 bg-white/5 hover:border-cyan-500/20 hover:text-white transition-all w-full sm:w-auto"
                  >
                    <Link href="#">Query Nexus Ops</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 bg-[#030712]/80 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.5em]">
            &copy; {new Date().getFullYear()} NEXUS AGENT NODE [OPERATIONAL]
          </p>
        </div>
      </footer>
    </div>
  );
}
