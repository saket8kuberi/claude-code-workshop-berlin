// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
// Almost every text change you'll want to make lives here.
// You don't need to touch the components — they read from this file.
// ────────────────────────────────────────────────────────────────

export const hero = {
  name: "Saket Kuberi",
  role: "Head of Product",
  location: "Berlin, Germany",
  headline:
    "Head of Product building AI-native products at BetterCoach. Passionate about product strategy, AI, business growth, and creating products that deliver measurable customer and commercial impact.",
  ctaPrimary: { label: "See my work", href: "#projects" },
  ctaSecondary: { label: "Get in touch", href: "#contact" },
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a Head of Product who's spent a career refusing to specialize in just one industry — SaaS, InsurTech, mining technology, and digital consulting have all, at some point, needed the same thing from me: turn a genuinely confusing problem into a product a customer would pay for twice.",
    "These days that means building AI-native products at BetterCoach, where 'AI strategy' has to survive contact with a real roadmap, a real support queue, and a real renewal date. I care less about which model we use and more about whether the thing we shipped actually changed a customer's week.",
    "My approach is equal parts business strategy, AI curiosity, and mild obsession with the customer's actual problem — not the one that's easiest to build for. I've managed products behind €50M+ in revenue, and the lesson that scales across all of it: measurable outcomes beat elegant plans.",
  ],
};

export const philosophy = {
  heading: "Product Philosophy",
  intro:
    "A few convictions that shape how I build, prioritized in roughly this order.",
  principles: [
    {
      title: "Outcomes over output",
      description:
        "Shipping is not the finish line. A roadmap is a bet on a customer outcome — retention, revenue, time saved — and I hold every feature accountable to that bet, not to the fact that it shipped on time.",
    },
    {
      title: "AI as leverage, not a headline",
      description:
        "The interesting question is never 'should we add AI' — it's which workflow becomes 10x better if a model sits inside it. Most AI features fail because they answer the wrong question well.",
    },
    {
      title: "Customer obsession, data-checked",
      description:
        "Customer interviews tell you what people believe about themselves. Usage data tells you what they actually do. I trust neither alone — I triangulate.",
    },
    {
      title: "Cross-functional by default",
      description:
        "The best product decisions are made in a room with design, engineering, and go-to-market at the same table, not sequentially. Handoffs are where good ideas quietly get worse.",
    },
  ],
};

export const careerJourney = {
  heading: "Career Journey",
  intro:
    "Five industries, one throughline: making sense of complexity for the people who have to live with the product.",
  milestones: [
    {
      period: "2024 — Present",
      title: "AI-native product leadership",
      company: "BetterCoach",
      description:
        "Leading product strategy for an AI-native coaching platform — defining the AI Coach vision, roadmap, and enterprise adoption strategy.",
    },
    {
      period: "2021 — 2024",
      title: "Scaling B2B SaaS",
      company: "Growth & Retention",
      description:
        "Owned growth, retention, and monetization for core SaaS product lines, driving measurable gains in adoption and net revenue retention.",
    },
    {
      period: "2018 — 2021",
      title: "InsurTech product strategy",
      company: "Digital Insurance",
      description:
        "Built and scaled digital insurance products end to end — from customer discovery through go-to-market — in a heavily regulated, trust-driven category.",
    },
    {
      period: "2015 — 2018",
      title: "Mining technology & digital consulting",
      company: "Industrial Tech",
      description:
        "Cut my teeth translating deep technical and operational complexity — mining technology systems — into products and strategy non-technical stakeholders could act on.",
    },
  ],
};

export const experience = {
  heading: "Experience",
  roles: [
    {
      title: "Head of Product",
      company: "BetterCoach",
      period: "2024 — Present",
      summary:
        "Own product strategy and the roadmap for an AI-native coaching platform. Defined the AI Coach vision and drove enterprise AI adoption, contributing to 3× acquisition revenue growth and 90%+ customer retention.",
    },
    {
      title: "Senior Product Manager",
      company: "B2B SaaS",
      period: "2021 — 2024",
      summary:
        "Led growth, retention, and monetization initiatives across core product lines. Improved product adoption by 1.5×, reduced churn and CAC, and improved LTV and NRR through data-driven experimentation.",
    },
    {
      title: "Product Manager",
      company: "InsurTech",
      period: "2018 — 2021",
      summary:
        "Owned product strategy and go-to-market for digital insurance products, managing a portfolio responsible for €50M+ in revenue across multiple markets.",
    },
    {
      title: "Product Consultant",
      company: "Digital Consulting / Mining Technology",
      period: "2015 — 2018",
      summary:
        "Advised on product and digital transformation strategy across mining technology and industrial clients, bridging deep technical complexity and commercial decision-making.",
    },
  ],
};

export const projects = {
  heading: "Featured Projects & Case Studies",
  items: [
    {
      title: "AI Coach — Vision to Enterprise Adoption",
      year: "2024",
      summary:
        "Defined and shipped the AI Coach product vision at BetterCoach, from roadmap to enterprise rollout. Drove 3× acquisition revenue growth and 1.5× improvement in product adoption.",
      link: { label: "Case study", href: "#" },
    },
    {
      title: "Retention & Monetization Overhaul",
      year: "2023",
      summary:
        "Redesigned the growth and monetization model for a core SaaS product line — reducing churn and CAC while improving LTV and NRR through targeted, data-driven experimentation.",
      link: { label: "Read the writeup", href: "#" },
    },
    {
      title: "Digital Insurance Platform Launch",
      year: "2020",
      summary:
        "Took a digital insurance product from customer discovery to market launch, ultimately managing a portfolio responsible for €50M+ in revenue.",
      link: { label: "View details", href: "#" },
    },
  ],
};

export const skills = {
  heading: "Skills & Expertise",
  groups: [
    {
      label: "Product",
      items: [
        "AI product strategy & execution",
        "Product leadership",
        "Product strategy & vision",
        "Growth, retention & monetization",
        "Customer discovery",
        "Go-to-market strategy",
      ],
    },
    {
      label: "Operating",
      items: [
        "B2B SaaS",
        "Data-driven decision making",
        "Cross-functional leadership",
      ],
    },
    {
      label: "Industries",
      items: ["SaaS", "AI", "InsurTech", "Mining technology", "Digital consulting"],
    },
  ],
};

export const aiTechnology = {
  heading: "AI & Technology",
  intro:
    "The technical layer I stay close to so product decisions stay grounded in what's actually possible.",
  items: [
    "AI Product Management",
    "MCPs (Model Context Protocol)",
    "APIs",
    "FastAPI",
    "RAG Systems",
    "Product Analytics",
    "Cloud Architecture",
  ],
};

export const education = {
  heading: "Education & Certifications",
  items: [
    {
      title: "Add your degree or certification",
      institution: "Institution name",
      period: "Year — Year",
    },
  ],
};

export const contact = {
  heading: "Get in touch",
  body:
    "Open to conversations about AI product strategy, product leadership roles, and building things that create measurable business outcomes. Berlin or remote.",
  email: "saket.kuberi@bettercoach.io",
  socials: [
    { label: "LinkedIn", href: "#" },
  ],
};

export const meta = {
  title: "Saket Kuberi — Head of Product",
  description:
    "Head of Product building AI-native products at BetterCoach. Berlin-based.",
};
