export default function StatsSection() {
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
