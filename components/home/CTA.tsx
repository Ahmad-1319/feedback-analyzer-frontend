import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
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
          Start your 14-day free trial today. Join thousands of teams turning
          data into growth.
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
