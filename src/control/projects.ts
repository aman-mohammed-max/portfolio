export type TagColor = "blue" | "green" | "purple" | "orange" | "neutral";

export type Project = {
  name: string;
  description: string;
  what: string;
  tech: string[];
  idea?: string;
  status: "experiment" | "ongoing" | "paused" | "shipped";
  why: string;
  learnings: string;
  color: TagColor;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "Towlips",
    description: "An independent venture where I test product ideas and build small systems around them.",
    what: "Prototype workflows, landing flows, and lightweight apps to validate ideas.",
    tech: ["TypeScript", "React", "Node.js"],
    idea: "Explore small business tools and micro-products.",
    status: "ongoing",
    why: "To learn how products evolve from idea to real usage.",
    learnings: "Early feedback beats assumptions.",
    color: "green",
  },
  {
    name: "MERN Task Manager",
    description: "A task system built to practice real-world CRUD flows and auth.",
    what: "Tasks, roles, and activity tracking for teams.",
    tech: ["TypeScript", "React", "Express", "MongoDB"],
    status: "shipped",
    why: "To build a full-stack baseline product with auth and data models.",
    learnings: "Clear data models reduce UI complexity.",
    color: "blue",
  },
  {
    name: "Hono REST API",
    description: "A lightweight API experiment on modern runtimes.",
    what: "Fast routes, validation, and clean API structure.",
    tech: ["TypeScript", "Hono.js", "Bun", "Zod"],
    status: "experiment",
    why: "To explore performance-first backend tooling.",
    learnings: "Smaller frameworks can be faster to iterate.",
    color: "green",
  },
  {
    name: "Data Dashboard",
    description: "A simple analytics dashboard built from sample datasets.",
    what: "Charts and summaries for quick signal checks.",
    tech: ["React", "Recharts", "Tailwind", "Figma"],
    status: "experiment",
    why: "To practice turning data into visuals.",
    learnings: "Designing the story is as important as the chart.",
    color: "purple",
  },
  {
    name: "Expo Mobile App",
    description: "A cross-platform app to learn mobile patterns and flows.",
    what: "Navigation, storage, and API integration.",
    tech: ["React Native", "Expo", "TypeScript"],
    status: "ongoing",
    why: "To expand experiments beyond web.",
    learnings: "Mobile UX needs different assumptions.",
    color: "orange",
  },
  {
    name: "Portfolio Site",
    description: "This site, focused on clarity and honest progress.",
    what: "A personal hub for projects, experiments, and learning.",
    tech: ["Astro", "TypeScript", "Medusa UI", "Tailwind"],
    status: "shipped",
    why: "To document and share what I am building.",
    learnings: "Small updates keep momentum.",
    color: "neutral",
  },
];
