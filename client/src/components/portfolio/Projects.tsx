import { Github, ExternalLink } from "lucide-react";

type TagColor = "blue" | "green" | "purple" | "orange" | "neutral";

const projects: {
  title: string;
  desc: string;
  tags: string[];
  color: TagColor;
  label: string;
  github: string;
  live?: string;
}[] = [
  {
    title: "Towlips",
    desc: "Founder-led venture focused on building real-world products. I handle business direction while shipping the core web experience.",
    tags: ["Founder", "Product", "Business", "Web"],
    color: "green",
    label: "Founder",
    github: "#",
  },
  {
    title: "MERN Task Manager",
    desc: "Full-stack task manager with JWT auth, CRUD ops, and responsive React UI. Deployed on Node + MongoDB Atlas.",
    tags: ["TypeScript", "React", "Express", "MongoDB"],
    color: "blue",
    label: "Full Stack",
    github: "https://github.com",
  },
  {
    title: "Hono REST API",
    desc: "Lightweight REST API built with Hono.js on Bun runtime. Input validation with Zod, clean routing structure.",
    tags: ["TypeScript", "Hono.js", "Bun", "Zod"],
    color: "green",
    label: "Backend",
    github: "https://github.com",
  },
  {
    title: "Data Dashboard",
    desc: "Analytics dashboard with Recharts data visualization. Designed in Figma first, then implemented from scratch.",
    tags: ["React", "Recharts", "Tailwind", "Figma"],
    color: "purple",
    label: "Frontend",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Expo Mobile App",
    desc: "Cross-platform app built with Expo & React Native. Features navigation, local storage, and REST API integration.",
    tags: ["React Native", "Expo", "TypeScript"],
    color: "orange",
    label: "Mobile",
    github: "https://github.com",
  },
  {
    title: "Portfolio Site",
    desc: "This portfolio — built with React, TypeScript, Medusa UI, and Tailwind CSS. Inspired by the Medusa admin design.",
    tags: ["React", "TypeScript", "Medusa UI", "Tailwind"],
    color: "blue",
    label: "This Site",
    github: "https://github.com",
    live: "#",
  },
  {
    title: "JS Utility Library",
    desc: "Reusable JS/TS utility functions — array helpers, date formatters, string transforms. Fully typed & tested.",
    tags: ["TypeScript", "Vitest", "npm"],
    color: "neutral",
    label: "Open Source",
    github: "https://github.com",
  },
];

const tagStyles: Record<TagColor, { bg: string; color: string; border: string }> = {
  blue:    { bg: "var(--m-tag-blue-bg)",  color: "var(--m-tag-blue-txt)",  border: "var(--m-tag-blue-bdr)" },
  green:   { bg: "var(--m-tag-grn-bg)",   color: "var(--m-tag-grn-txt)",   border: "var(--m-tag-grn-bdr)" },
  purple:  { bg: "rgba(46,16,101,1)",      color: "rgba(196,181,253,1)",    border: "rgba(91,33,182,1)" },
  orange:  { bg: "rgba(67,20,7,1)",        color: "rgba(253,186,116,1)",    border: "rgba(124,45,18,1)" },
  neutral: { bg: "var(--m-tag-neu-bg)",    color: "var(--m-tag-neu-txt)",   border: "var(--m-tag-neu-bdr)" },
};

export function Projects() {
  return (
    <section id="projects" style={{ borderBottom: "1px solid var(--m-border)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>

        <div className="m-page-header">
          <p className="m-label" style={{ marginBottom: 6 }}>03. Projects</p>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--m-fg-base)" }}>
            Things I've built
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderLeft: "1px solid var(--m-border)",
          }}
        >
          {projects.map((p) => {
            const ts = tagStyles[p.color];
            return (
              <div
                key={p.title}
                className="m-grid-col"
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  cursor: "default",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--m-bg-base)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 500,
                      padding: "2px 7px",
                      borderRadius: 4,
                      background: ts.bg,
                      color: ts.color,
                      border: `1px solid ${ts.border}`,
                    }}
                  >
                    {p.label}
                  </span>
                  <div style={{ display: "flex", gap: 6 }}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--m-fg-muted)", display: "flex" }}
                      title="GitHub"
                    >
                      <Github size={13} />
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--m-fg-muted)", display: "flex" }}
                        title="Live"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 600, color: "var(--m-fg-base)" }}>
                  {p.title}
                </p>

                {/* Desc */}
                <p style={{ margin: "0 0 14px", fontSize: 12, color: "var(--m-fg-muted)", lineHeight: 1.65, flex: 1 }}>
                  {p.desc}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {p.tags.map((tag) => (
                    <span key={tag} className="m-tag" style={{ fontSize: 10, padding: "2px 6px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer row */}
        <div
          style={{
            borderLeft: "1px solid var(--m-border)",
            borderRight: "1px solid var(--m-border)",
            borderBottom: "1px solid var(--m-border)",
            padding: "16px 20px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="m-btn m-btn-secondary"
            style={{ textDecoration: "none", fontSize: 12 }}
          >
            <Github size={13} />
            View all on GitHub
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #projects [style*="repeat(3, 1fr)"] { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          #projects [style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
