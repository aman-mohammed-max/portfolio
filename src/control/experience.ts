export type ExperienceItem = {
  title: string;
  description: string;
  period: string;
  location: string;
  tags: string[];
  highlights: string[];
  color: string;
};

export const experience: ExperienceItem[] = [
  {
    title: "Founder / CEO",
    description: "Towilps — independent fashion brand (early stage).",
    period: "Ongoing",
    location: "Remote",
    tags: ["Fashion", "Ecommerce", "Systems"],
    highlights: [
      "Building a small fashion brand focused on clothing, accessories, and gadgets",
      "Working on an online store setup, product positioning, and store workflows",
      "Developing technical integrations to support catalog, payments, and operations",
    ],
    color: "var(--m-fg-green)",
  },
  {
    title: "Independent Builder",
    description: "Personal systems, experiments, and product ideas.",
    period: "2022 – Present",
    location: "Remote",
    tags: ["JavaScript", "TypeScript", "React", "Node.js"],
    highlights: [
      "Built full-stack apps to practice auth, data models, and API design",
      "Explored backend runtimes like Bun and Deno in real projects",
      "Designed interfaces in Figma before implementation",
    ],
    color: "var(--m-fg-blue)",
  },
  {
    title: "Data & Analytics Practice",
    description: "Learning-based projects and dashboards.",
    period: "2023 – Present",
    location: "Remote",
    tags: ["Analytics", "Dashboards", "Reporting"],
    highlights: [
      "Built dashboards from sample datasets to practice insight extraction",
      "Worked on reporting flows and data summaries",
      "Improved data interpretation and visualization habits",
    ],
    color: "var(--m-fg-green)",
  },
  {
    title: "Business Exploration",
    description: "Connecting technical systems with real-world ideas.",
    period: "Ongoing",
    location: "Remote",
    tags: ["Ideas", "Validation", "Systems"],
    highlights: [
      "Exploring small business use cases and product directions",
      "Testing ideas with lightweight prototypes",
      "Learning through iteration and feedback",
    ],
    color: "var(--m-fg-green)",
  },
];
