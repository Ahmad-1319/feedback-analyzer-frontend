import { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HeroSection() {
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
        ease: [0.22, 1, 0.36, 1] as const,
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
            Analyze your customer data with precision. Our AI-driven platform
            decodes sentiment and automates taxonomy to give you the insights
            you need.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="h-14 px-10 rounded-lg font-bold text-base shadow-xl shadow-primary/20 active:scale-95 transition-all"
            >
              <Link href="/signup">Get Started for Free</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-10 rounded-lg font-bold text-base border-2 active:scale-95 transition-all"
            >
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
