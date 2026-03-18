import { useEffect, useRef, useState } from "react";
import { skills, otherTech } from "../../control/skills";

const categories = [
  { label: "Core", color: "var(--m-fg-blue)", skills: skills.core },
  { label: "Backend & Runtimes", color: "var(--m-fg-green)", skills: skills.backend },
  { label: "Other", color: "rgba(253,186,116,1)", skills: skills.other },
  { label: "Learning & Exploring", color: "rgba(196,181,253,1)", skills: skills.learning },
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
          <p className="m-label" style={{ marginBottom: 6 }}>02. Tech Stack & Capabilities</p>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--m-fg-base)" }}>
            Tools I build and experiment with
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
          <p className="m-label" style={{ marginBottom: 12, paddingLeft: 20 }}>Other tools I use</p>
          <div style={{ display: "flex", gap: 8, overflow: "hidden" }}>
            <div className="anim-marquee" style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              {[...otherTech, ...otherTech].map((t, i) => (
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
