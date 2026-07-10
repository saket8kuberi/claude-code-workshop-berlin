import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { ProductPhilosophy } from "../components/ProductPhilosophy";
import { CareerJourney } from "../components/CareerJourney";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { AITechnology } from "../components/AITechnology";
import { Education } from "../components/Education";
import { Contact } from "../components/Contact";
import { Reveal } from "../components/Reveal";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <ProductPhilosophy />
      </Reveal>
      <Reveal>
        <CareerJourney />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <AITechnology />
      </Reveal>
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <footer className="py-10 border-t border-ink/10 text-sm text-ink/50">
        Made with Claude Code · Berlin · 2026
      </footer>
    </main>
  );
}
