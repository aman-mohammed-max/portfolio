import { Github, ExternalLink } from "lucide-react";
import { projects, type TagColor } from "../../control/projects";

const tagStyles: Record<TagColor, { bg: string; color: string; border: string }> = {
  blue:    { bg: "var(--m-tag-blue-bg)",  color: "var(--m-tag-blue-txt)",  border: "var(--m-tag-blue-bdr)" },
  green:   { bg: "var(--m-tag-grn-bg)",   color: "var(--m-tag-grn-txt)",   border: "var(--m-tag-grn-bdr)" },
  purple:  { bg: "rgba(46,16,101,1)",      color: "rgba(196,181,253,1)",    border: "rgba(91,33,182,1)" },
  orange:  { bg: "rgba(67,20,7,1)",        color: "rgba(253,186,116,1)",    border: "rgba(124,45,18,1)" },
  neutral: { bg: "var(--m-tag-neu-bg)",    color: "var(--m-tag-neu-txt)",   border: "var(--m-tag-neu-bdr)" },
};

const formatStatus = (status: string) => status.charAt(0).toUpperCase() + status.slice(1);

export function Projects() {
  return (
    <section id="projects" style={{ borderBottom: "1px solid var(--m-border)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>

        <div className="m-page-header">
          <p className="m-label" style={{ marginBottom: 6 }}>03. Projects & Experiments</p>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--m-fg-base)" }}>
            What I'm building and learning from
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
                key={p.name}
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
                    {formatStatus(p.status)}
                  </span>
                  {(p.github && p.github !== "#") || (p.live && p.live !== "#") ? (
                    <div style={{ display: "flex", gap: 6 }}>
                      {p.github && p.github !== "#" && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "var(--m-fg-muted)", display: "flex" }}
                          title="GitHub"
                        >
                          <Github size={13} />
                        </a>
                      )}
                      {p.live && p.live !== "#" && (
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
                  ) : null}
                </div>

                {/* Title */}
                <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 600, color: "var(--m-fg-base)" }}>
                  {p.name}
                </p>

                {/* Desc */}
                <p style={{ margin: "0 0 10px", fontSize: 12, color: "var(--m-fg-muted)", lineHeight: 1.65, flex: 1 }}>
                  {p.description}
                </p>
                <div style={{ marginBottom: 12, display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontSize: 11, color: "var(--m-fg-subtle)" }}>
                    What it does: {p.what}
                  </span>
                  {p.idea && (
                    <span style={{ fontSize: 11, color: "var(--m-fg-subtle)" }}>
                      Idea: {p.idea}
                    </span>
                  )}
                  <span style={{ fontSize: 11, color: "var(--m-fg-subtle)" }}>
                    Why I built this: {p.why}
                  </span>
                  <span style={{ fontSize: 11, color: "var(--m-fg-subtle)" }}>
                    What I learned: {p.learnings}
                  </span>
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {p.tech.map((tag) => (
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
            href="https://github.com/aman-mohammed-max"
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
