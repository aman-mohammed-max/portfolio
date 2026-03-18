import { useEffect, useRef, useState } from "react";

type Cat = { label: string; color: string; skills: { name: string; level: number; note: string }[] };

const categories: Cat[] = [
  {
    label: "Languages",
    color: "var(--m-fg-blue)",
    skills: [
      { name: "JavaScript (ES2024)", level: 88, note: "Primary" },
      { name: "TypeScript",          level: 82, note: "Primary" },
      { name: "HTML / CSS",          level: 85, note: "Solid" },
      { name: "Go",                  level: 35, note: "Studying" },
      { name: "Rust",                level: 25, note: "Studying" },
    ],
  },
  {
    label: "Frontend",
    color: "var(--m-fg-green)",
    skills: [
      { name: "React",            level: 85, note: "Strong" },
      { name: "Expo (RN)",        level: 65, note: "Familiar" },
      { name: "Tailwind CSS",     level: 80, note: "Strong" },
      { name: "Figma (UI/UX)",    level: 72, note: "Good" },
      { name: "Lynx Framework",   level: 40, note: "Exploring" },
    ],
  },
  {
    label: "Backend / Runtime",
    color: "rgba(196,181,253,1)",
    skills: [
      { name: "Node.js",      level: 80, note: "Strong" },
      { name: "Express.js",   level: 80, note: "Strong" },
      { name: "Hono.js",      level: 70, note: "Familiar" },
      { name: "Bun runtime",  level: 65, note: "Familiar" },
      { name: "Deno runtime", level: 60, note: "Familiar" },
    ],
  },
  {
    label: "Data & Tools",
    color: "rgba(253,186,116,1)",
    skills: [
      { name: "MongoDB",         level: 78, note: "Good" },
      { name: "Git / GitHub",    level: 75, note: "Solid" },
      { name: "Data Analysis",   level: 62, note: "Basic" },
      { name: "Google Sheets",   level: 65, note: "Basic" },
      { name: "PowerPoint/Slides", level: 70, note: "Good" },
    ],
  },
];

const allTech = [
  "JavaScript","TypeScript","React","Node.js","Express.js","Hono.js","MongoDB",
  "MERN Stack","Bun","Deno","Expo","Lynx","Rust","Go","Tailwind CSS","Figma",
  "Git","REST APIs","HTML5","CSS3","Google Sheets","Data Analysis",
];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimate(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" style={{ borderBottom: "1px solid var(--m-border)" }} ref={ref}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>

        <div className="m-page-header">
          <p className="m-label" style={{ marginBottom: 6 }}>02. Skills & Stack</p>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--m-fg-base)" }}>
            Technologies I work with
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderLeft: "1px solid var(--m-border)",
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="m-grid-col"
              style={{ padding: "24px 20px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: cat.color,
                    flexShrink: 0,
                  }}
                />
                <p className="m-label" style={{ margin: 0, color: cat.color }}>{cat.label}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 12, color: "var(--m-fg-subtle)" }}>{s.name}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                        <span className="m-tag" style={{ fontSize: 10, padding: "1px 5px" }}>{s.note}</span>
                        <span style={{ fontSize: 11, fontFamily: "Roboto Mono, monospace", color: "var(--m-fg-muted)" }}>{s.level}%</span>
                      </div>
                    </div>
                    <div className="m-skill-bar">
                      <div
                        className="m-skill-fill"
                        style={{
                          width: animate ? `${s.level}%` : "0%",
                          background: cat.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech marquee row */}
        <div
          style={{
            borderTop: "1px solid var(--m-border)",
            borderLeft: "1px solid var(--m-border)",
            borderRight: "1px solid var(--m-border)",
            padding: "16px 0",
            overflow: "hidden",
          }}
        >
          <p className="m-label" style={{ marginBottom: 12, paddingLeft: 20 }}>Also familiar with</p>
          <div style={{ display: "flex", gap: 8, overflow: "hidden" }}>
            <div className="anim-marquee" style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              {[...allTech, ...allTech].map((t, i) => (
                <span key={i} className="m-tag" style={{ flexShrink: 0 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills [style*="repeat(4, 1fr)"] { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          #skills [style*="repeat(4, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
