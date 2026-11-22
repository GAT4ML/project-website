export type WorkPackageTask = {
  number: string;
  title: string;
  description?: string;
};

export type WorkPackage = {
  number: string;
  title: string;
  current: boolean;
  description: string;
  tasks: WorkPackageTask[];
};

export const workPackages: WorkPackage[] = [
  {
    number: "1",
    title: "Tactic Synthesis",
    current: true,
    description:
      "In this foundational WP, we will refine and extend the initial catalog of tactics. The goal is to make existing tactics more actionable and to identify new tactics that cover underrepresented life cycle phases and currently popular types of systems, e.g., LLM-based applications. We will approach the synthesis from several directions:",
    tasks: [
      {
        number: "WP1.1",
        title: "Gray Literature Review",
        description:
          "Since our initial catalog was purely based on peer-reviewed white literature, we now extend our tactic synthesis towards practitioner-oriented gray literature, i.e., we will conduct a systematic gray literature review about Green AI techniques to synthesize additional tactics.",
      },
      {
        number: "WP1.2",
        title: "Focused White Literature Search",
        description:
          "To include techniques based on recent Green AI research and for underrepresented types of ML-enabled systems, we will perform targeted, unsystematic white literature studies, e.g., that cover only the years starting from 2023 or only Green AI techniques focused on LLMs.",
      },
      {
        number: "WP1.3",
        title: "Focus Group",
        description:
          "True to the cyclical nature of design science, we will periodically use the focus group method during the ongoing synthesis to evaluate, refine, and extend the tactic catalog. We will include both experts from industry and academia.",
      },
    ],
  },
  {
    number: "2",
    title: "Tactic Synthesis Support",
    current: true,
    description:
      "To make the iterative and long-lasting activities from WP1 more effective and efficient, we will develop a tool-supported methodology for the continuous synthesis of architectural knowledge. Due to its modular and flexible template-based design, this methodology will be reusable outside of GAT4ML, e.g., to synthesize design patterns for a certain domain. For example, the methodology will support functionality like creating, editing, renaming, and categorizing the curated entities in a consistent manner, while keeping manual efforts minimal. The methodology will be created in the following way:",
    tasks: [
      {
        number: "WP2.1",
        title: "Requirements Elicitation",
        description:
          "Through an interview study with experts in architectural knowledge synthesis, we will identify and specify the requirements for the tool-supported methodology.",
      },
      {
        number: "WP2.2",
        title: "Design & Implementation",
        description:
          "Based on the requirements, we will then design and implement the methodology and its tool support following the prototyping paradigm.",
      },
      {
        number: "WP2.3",
        title: "User Evaluation",
        description:
          "While the methodology will of course also be used and potentially refined by ourselves during WP1, we will also conduct a holistic user evaluation study with external participants, which will focus on usability and generalizability.",
      },
    ],
  },
  {
    number: "3",
    title: "Tactic Representation & Selection",
    current: false,
    description:
      "While WP2 focuses on tool support for tactic synthesis, WP3 focuses on tool support for tactic browsing and selection. We will develop a tool-supported methodology that enables the convenient browsing of the catalog, with features like filtering and searching. Additionally, the methodology includes functionality to suggest suitable tactics based on contextual attributes, e.g., the used type of ML, use of pre-trained models, quality requirements, or constraints based on programming languages or frameworks. Great emphasis will be placed on the two methodologies being complementary, e.g., synthesized tactics with the tool support from WP2 should be easily importable into the WP3 tool support. The creation of this methodology follows the same process as described in WP2, with the only difference being the involved participants. This time, we will recruit practitioners and researchers interested in using and selecting tactics.",
    tasks: [
      { number: "WP3.1", title: "Requirements Elicitation" },
      { number: "WP3.2", title: "Design & Implementation" },
      { number: "WP3.3", title: "User Evaluation" },
    ],
  },
  {
    number: "4",
    title: "Tactic Evidence Collection",
    current: false,
    description:
      "This work package focuses on accumulating additional evidence about understudied or newly synthesized tactics. This evidence generally takes three forms:",
    tasks: [
      {
        number: "WP4.1",
        title: "Energy Consumption Experiments",
        description:
          "Using the controlled experiment method, we will analyze the impact of selected tactics on energy consumption by comparing to an unoptimized baseline.",
      },
      {
        number: "WP4.2",
        title: "Trade-Off Analysis",
        description:
          "Additionally, we will also study the impact of selected tactics on other QAs, such as accuracy, inference duration, training duration, security, maintainability, etc. While some of these studies might run in parallel to the experiments of WP4.1 (especially regarding accuracy), others will be separate studies, e.g., via metric-based analysis.",
      },
      {
        number: "WP4.3",
        title: "Acceptance Interviews",
        description:
          "Lastly, we will use interviews with industry practitioners to understand important factors for tactic selection, as well as their perceived relevance and applicability. These results will also be used to refine the tactic suggestion mechanism of the WP3 methodology.",
      },
    ],
  },
  {
    number: "5",
    title: "Industry Evaluations",
    current: false,
    description:
      "In the final work package, we will use the created contributions from previous work packages for holistic evaluations in industry. This consists of two steps:",
    tasks: [
      {
        number: "WP5.1",
        title: "Case Studies",
        description:
          "We will conduct several case studies with different companies, where the goal is to improve the energy efficiency of selected ML-enabled systems via the tactics, i.e., we want to reduce energy consumption while simultaneously keeping other QAs like accuracy at acceptable levels.",
      },
      {
        number: "WP5.2",
        title: "Guideline Synthesis",
        description:
          "Based on our experiences from the case studies, we will again refine the tactic catalog and associated tool support, but also synthesize guidelines for how best to apply the tactics in industry environments. This will include process-related guidance, but also potential pitfalls or challenges to watch out for, together with potential solutions.",
      },
    ],
  },
];
