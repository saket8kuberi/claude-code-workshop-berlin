import { aiTechnology } from "../content";

export function AITechnology() {
  return (
    <section id="ai-technology" className="py-16 border-t border-ink/10">
      <h2 className="text-3xl font-semibold mb-3">{aiTechnology.heading}</h2>
      <p className="text-ink/60 mb-8 max-w-xl">{aiTechnology.intro}</p>
      <div className="flex flex-wrap gap-2">
        {aiTechnology.items.map((item, i) => (
          <span
            key={i}
            className="px-4 py-1.5 text-sm rounded-full border border-accent/25 bg-accent/[0.08] text-ink/85"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
