import { hero } from "../content";

export function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        {hero.role} · {hero.location}
      </p>
      <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight">
        Hi, I&apos;m <span className="text-gradient">{hero.name}</span>
      </h1>
      <p className="mt-6 text-xl text-ink/70 leading-relaxed max-w-xl">
        {hero.headline}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={hero.ctaPrimary.href}
          className="inline-block px-6 py-3 bg-ink text-paper rounded-full font-medium hover:opacity-90 transition"
        >
          {hero.ctaPrimary.label}
        </a>
        <a
          href={hero.ctaSecondary.href}
          className="inline-block px-6 py-3 border border-ink/15 rounded-full font-medium hover:bg-ink/5 transition"
        >
          {hero.ctaSecondary.label}
        </a>
      </div>
    </section>
  );
}
