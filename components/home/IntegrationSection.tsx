import { motion } from "framer-motion";

export default function IntegrationSection() {
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
