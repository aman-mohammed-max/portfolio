import { GraduationCap, Award, Code2, Layers, Zap } from "lucide-react";
import { profile } from "../../control/profile";

const iconMap = {
  Code2,
  Layers,
  Zap,
};


export function About() {
  return (
    <section id="about" style={{ borderBottom: "1px solid var(--m-border)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>

        {/* Section title row */}
        <div className="m-page-header">
          <p className="m-label" style={{ marginBottom: 6 }}>01. What I Build & Explore</p>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--m-fg-base)" }}>
            Systems, experiments, and learning direction
          </h2>
        </div>

        {/* 3-col grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            borderLeft: "1px solid var(--m-border)",
          }}
        >
          {/* Strengths */}
          {profile.strengths.map(({ icon, title, desc }) => {
            const Icon = iconMap[icon as keyof typeof iconMap];
            return (
            <div
              key={title}
              className="m-grid-col"
              style={{ padding: "24px 20px" }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 7,
                  border: "1px solid var(--m-border-strong)",
                  background: "var(--m-bg-component)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                  color: "var(--m-fg-blue)",
                }}
              >
                <Icon size={15} />
              </div>
              <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 600, color: "var(--m-fg-base)" }}>
                {title}
              </p>
              <p style={{ margin: 0, fontSize: 12, color: "var(--m-fg-muted)", lineHeight: 1.6 }}>
                {desc}
              </p>
            </div>
          );
          })}
        </div>

        {/* Education & Certs — full width */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderLeft: "1px solid var(--m-border)",
          }}
        >
          {/* Education */}
          <div className="m-grid-col" style={{ padding: "24px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <GraduationCap size={13} style={{ color: "var(--m-fg-muted)" }} />
              <p className="m-label" style={{ margin: 0 }}>Education</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {profile.education.map((e) => (
                <div
                  key={e.degree}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 6,
                    border: "1px solid var(--m-border)",
                    background: "var(--m-bg-base)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: "var(--m-fg-base)" }}>{e.degree}</p>
                    <p style={{ margin: 0, fontSize: 11, color: "var(--m-fg-muted)", marginTop: 2 }}>{e.institution}</p>
                  </div>
                  <span className="m-tag">{e.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="m-grid-col" style={{ padding: "24px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <Award size={13} style={{ color: "var(--m-fg-muted)" }} />
              <p className="m-label" style={{ margin: 0 }}>Certifications</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {profile.certifications.map((c) => (
                <div
                  key={c}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 6,
                    border: "1px solid var(--m-border)",
                    background: "var(--m-bg-base)",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--m-fg-green)",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 13, color: "var(--m-fg-subtle)" }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 700px) {
          #about [style*="grid-template-columns: 1fr 1fr 1fr"] { grid-template-columns: 1fr !important; }
          #about [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
