export type SkillItem = { name: string; level: number; note: string };

export const skills = {
  core: [
    { name: "JavaScript", level: 88, note: "Core" },
    { name: "TypeScript", level: 82, note: "Core" },
    { name: "MERN Stack", level: 80, note: "Strong" },
    { name: "Linux", level: 70, note: "Solid" },
  ] satisfies SkillItem[],
  backend: [
    { name: "Node.js", level: 80, note: "Strong" },
    { name: "Express.js", level: 80, note: "Strong" },
    { name: "Hono.js", level: 75, note: "Strong" },
    { name: "Bun", level: 70, note: "Strong" },
    { name: "Deno", level: 70, note: "Strong" },
    { name: "Astro.js", level: 65, note: "Using" },
    { name: "Next.js", level: 60, note: "Learning" },
  ] satisfies SkillItem[],
  other: [
    { name: "Figma", level: 72, note: "Good" },
    { name: "Data Basics", level: 62, note: "Basic" },
    { name: "Analytics", level: 60, note: "Basic" },
    { name: "Git / GitHub", level: 75, note: "Solid" },
    { name: "SQL", level: 50, note: "Learning" },
    { name: "Cloudflare", level: 55, note: "Familiar" },
    { name: "Vite", level: 70, note: "Solid" },
    { name: "React Native", level: 60, note: "Learning" },
  ] satisfies SkillItem[],
  learning: [
    { name: "Golang", level: 70, note: "Learning" },
    { name: "Rust", level: 40, note: "Learning" },
    { name: "AI / AI Agents", level: 45, note: "Learning" },
    { name: "IoT", level: 40, note: "Exploring" },
  ] satisfies SkillItem[],
};

export const otherTech = [
  "React",
  "MongoDB",
  "REST APIs",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Recharts",
  "Expo",
];
