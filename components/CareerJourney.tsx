import { careerJourney } from "../content";

export function CareerJourney() {
  return (
    <section id="journey" className="py-16 border-t border-ink/10">
      <h2 className="text-3xl font-semibold mb-3">{careerJourney.heading}</h2>
      <p className="text-ink/60 mb-10 max-w-xl">{careerJourney.intro}</p>
      <ol className="relative border-l border-ink/15 space-y-10 pl-8">
        {careerJourney.milestones.map((m, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(124,108,246,0.15)]" />
            <p className="text-sm text-ink/50 font-medium">{m.period}</p>
            <h3 className="mt-1 font-medium text-lg">
              {m.title} <span className="text-ink/60">· {m.company}</span>
            </h3>
            <p className="mt-2 text-ink/70 leading-relaxed max-w-2xl">
              {m.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
