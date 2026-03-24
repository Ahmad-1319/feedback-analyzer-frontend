"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: LucideIcon;
  };
  className?: string;
}

export function FeatureCard({
  feature,
  className,
  ...props
}: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div
      className={cn(
        "group relative p-8 rounded-2xl border border-black/5 bg-white/40 backdrop-blur-xl overflow-hidden transition-all duration-500",
        "hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] hover:-translate-y-1",
        className,
      )}
      {...props}
    >

      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>


      <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 blur-[40px] rounded-full group-hover:scale-150 transition-transform duration-700" />

      <div className="relative z-10">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-500">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="mb-3 text-xl font-bold font-heading tracking-tight text-foreground group-hover:text-primary transition-colors">
          {feature.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed font-sans group-hover:text-foreground transition-colors font-medium">
          {feature.description}
        </p>

        <div className="mt-6 flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-primary/0 group-hover:text-primary transition-all duration-500 translate-y-2 group-hover:translate-y-0 italic">
          Node Active
        </div>
      </div>
    </div>
  );
}
