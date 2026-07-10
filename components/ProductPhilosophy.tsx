import { philosophy } from "../content";

export function ProductPhilosophy() {
  return (
    <section id="philosophy" className="py-16 border-t border-ink/10">
      <h2 className="text-3xl font-semibold mb-3">{philosophy.heading}</h2>
      <p className="text-ink/60 mb-8 max-w-xl">{philosophy.intro}</p>
      <div className="grid md:grid-cols-2 gap-5">
        {philosophy.principles.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-surface border border-ink/10 hover:border-accent/40 transition"
          >
            <h3 className="font-medium text-lg text-gradient">{p.title}</h3>
            <p className="mt-2 text-ink/70 leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
