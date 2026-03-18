import { Calendar, MapPin } from "lucide-react";

const exps = [
  {
    role: "Founder & Business Lead",
    company: "Towlips",
    period: "Present",
    location: "Remote",
    color: "var(--m-fg-green)",
    tags: ["Business", "Product", "Strategy", "Operations"],
    bullets: [
      "Leading the vision, product direction, and early execution for Towlips",
      "Balancing customer needs with feasible technical scope and timelines",
      "Building the foundation for growth: brand, product, and delivery",
    ],
  },
  {
    role: "Self-Directed JavaScript & TypeScript Developer",
    company: "Personal Projects",
    period: "2022 – Present",
    location: "Kerala, India · Remote",
    color: "var(--m-fg-blue)",
    tags: ["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB"],
    bullets: [
      "Built full-stack MERN applications with JWT authentication and REST APIs",
      "Developed cross-platform mobile apps with Expo and React Native",
      "Explored Hono.js on Bun runtime for high-performance backend development",
      "Designed UI prototypes in Figma before coding them with Tailwind CSS",
      "Experimented with lower-level languages: Rust (studying) and Go (studied)",
    ],
  },
  {
    role: "Data Analysis Practice",
    company: "Self-Study & Certifications",
    period: "2023 – Present",
    location: "Kerala, India",
    color: "var(--m-fg-green)",
    tags: ["Data Analysis", "Excel", "Google Sheets", "Data Visualization"],
    bullets: [
      "Applied data analysis techniques to sample datasets for pattern discovery",
      "Built visual dashboards using Excel and Google Sheets",
      "Completed Data Analyst & Data Scientist certification track",
      "Practised CRM software concepts and sales support tooling",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" style={{ borderBottom: "1px solid var(--m-border)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>

        <div className="m-page-header">
          <p className="m-label" style={{ marginBottom: 6 }}>04. Experience</p>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--m-fg-base)" }}>
            My journey so far
          </h2>
        </div>

        <div style={{ borderLeft: "1px solid var(--m-border)", paddingBottom: 24 }}>
          {exps.map((exp, i) => (
            <div
              key={exp.role}
              style={{
                borderBottom: i < exps.length - 1 ? "1px solid var(--m-border)" : undefined,
                display: "grid",
                gridTemplateColumns: "240px 1fr",
              }}
            >
              {/* Left: meta */}
              <div
                style={{
                  borderRight: "1px solid var(--m-border)",
                  padding: "24px 20px",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: exp.color,
                    marginBottom: 12,
                  }}
                />
                <p style={{ margin: "0 0 4px", fontSize: 13, fontWeight: 600, color: "var(--m-fg-base)" }}>
                  {exp.role}
                </p>
                <p style={{ margin: "0 0 12px", fontSize: 12, color: exp.color, fontWeight: 500 }}>
                  {exp.company}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "var(--m-fg-muted)" }}>
                    <Calendar size={11} /> {exp.period}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "var(--m-fg-muted)" }}>
                    <MapPin size={11} /> {exp.location}
                  </span>
                </div>
                <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {exp.tags.map((t) => (
                    <span key={t} className="m-tag" style={{ fontSize: 10, padding: "1px 5px" }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Right: bullets */}
              <div style={{ padding: "24px 20px" }}>
                <p className="m-label" style={{ marginBottom: 14 }}>Highlights</p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "flex-start",
                        fontSize: 13,
                        color: "var(--m-fg-subtle)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: exp.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          #experience [style*="240px 1fr"] { grid-template-columns: 1fr !important; }
          #experience [style*="border-right: 1px solid"] { border-right: none !important; border-bottom: 1px solid var(--m-border) !important; }
        }
      `}</style>
    </section>
  );
}
