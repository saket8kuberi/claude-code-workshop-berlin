import { education } from "../content";

export function Education() {
  return (
    <section id="education" className="py-16 border-t border-ink/10">
      <h2 className="text-3xl font-semibold mb-8">{education.heading}</h2>
      <ul className="space-y-6">
        {education.items.map((item, i) => (
          <li key={i} className="grid md:grid-cols-[160px_1fr] gap-2 md:gap-8">
            <p className="text-sm text-ink/60 font-medium pt-1">{item.period}</p>
            <div>
              <h3 className="font-medium text-lg">{item.title}</h3>
              <p className="text-ink/60">{item.institution}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
