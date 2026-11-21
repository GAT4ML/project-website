export type WorkPackage = {
  number: string;
  title: string;
  current: boolean;
  description: string;
};

export const workPackages: WorkPackage[] = [
  {
    number: "1",
    title: "Foundations & Environmental Baselines",
    current: true,
    description:
      "Establish the shared concepts, system boundaries, environmental indicators, and measurement methods that guide the project. This package creates a consistent foundation for comparing architectural choices across the ML lifecycle.",
  },
  {
    number: "2",
    title: "Green Tactic Discovery",
    current: true,
    description:
      "Identify and synthesize promising green architectural tactics from software architecture, machine learning, Green AI, and sustainability research. Evidence is translated into a common structure that makes each tactic understandable and reusable.",
  },
  {
    number: "3",
    title: "Evaluation in ML-Enabled Systems",
    current: false,
    description:
      "Apply candidate tactics in representative ML-enabled systems and examine their effects on energy use, carbon impact, performance, and other quality attributes. Findings are used to refine both the tactics and their usage guidance.",
  },
  {
    number: "4",
    title: "Tactics Catalog & Decision Support",
    current: false,
    description:
      "Turn validated findings into an accessible catalog that helps researchers and practitioners find, compare, and select tactics. Each entry connects the problem context, implementation approach, trade-offs, evidence, and expected impact.",
  },
  {
    number: "5",
    title: "Community, Adoption & Impact",
    current: false,
    description:
      "Engage researchers, industry practitioners, and the wider Green AI community through workshops, publications, and open resources. Feedback supports continuous improvement and helps the project’s outcomes move into real-world practice.",
  },
];
