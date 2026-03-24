"use client";

import React from "react";
import { motion } from "framer-motion";

export function NeuralVisual() {
  return (
    <div className="relative w-full h-full bg-white/5 overflow-hidden flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      {/* Central Core */}
      <div className="relative z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-primary blur-[100px] rounded-full"
        />

        <div className="relative h-64 w-64 rounded-full border border-primary/20 flex items-center justify-center backdrop-blur-3xl shadow-[0_0_50px_rgba(59,130,246,0.1)]">
          <div className="h-48 w-48 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
          <div className="absolute h-32 w-32 rounded-full border border-accent/20 animate-[spin_10s_linear_infinite_reverse]" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
          </div>

          {/* Data Nodes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
              }}
              style={{
                transform: `rotate(${i * 45}deg) translateY(-100px)`,
              }}
              className="absolute h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.3)]"
            />
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 600 - 300,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute h-1 w-1 rounded-full bg-primary/30"
        />
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="px-4 py-2 bg-white/40 backdrop-blur-md rounded-full border border-black/5 text-[8px] font-black uppercase tracking-[0.4em] text-primary/60 flex items-center gap-3">
          <span className="h-1 w-1 rounded-full bg-primary animate-ping" />
          Neural Synthesis Active
        </div>
      </div>
    </div>
  );
}
