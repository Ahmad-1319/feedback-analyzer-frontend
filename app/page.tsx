"use client";
import React, { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import IntegrationSection from "@/components/home/IntegrationSection";
import Navbar from "@/components/home/Navbar";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <FeaturedSection />
        <IntegrationSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
