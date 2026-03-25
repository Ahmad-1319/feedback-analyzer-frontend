import {
  Zap,
  Brain,
  MessageSquare,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedSection() {
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
            Powerful tools to help you understand your customers and grow your
            product faster.
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
              <p className="text-muted-foreground/80 leading-relaxed font-medium">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
