import { useEffect, useState } from "react";
import { Github, Mail, ArrowRight } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const roles = [
  "Founder at Towlips",
  "JavaScript Developer",
  "TypeScript Engineer",
  "MERN Stack Builder",
  "Business Builder",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[idx];
    let t: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        t = setTimeout(() => setTyping(false), 2400);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
      } else {
        setIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, idx]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderBottom: "1px solid var(--m-border)",
        paddingTop: 48,
      }}
    >
      {/* Page title row — like Medusa admin "Wordmark" heading */}
      <div
        style={{
          borderBottom: "1px solid var(--m-border)",
          background: "var(--m-bg-subtle)",
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "28px 20px 24px",
          }}
        >
          <p className="m-label" style={{ marginBottom: 10 }}>Developer Portfolio</p>
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 60px)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              color: "var(--m-fg-base)",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Aman Mohammed
          </h1>
          <div
            style={{
              marginTop: 12,
              height: 28,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                fontFamily: "Roboto Mono, monospace",
                fontSize: 14,
                color: "var(--m-fg-blue)",
              }}
            >
              {displayed}
              <span className="anim-blink" style={{ color: "var(--m-fg-blue)" }}>▎</span>
            </span>
          </div>
        </div>
      </div>

      {/* Content grid — Medusa admin content layout */}
      <div style={{ flex: 1, background: "var(--m-bg-subtle)" }}>
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "0 20px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderLeft: "1px solid var(--m-border)",
          }}
        >
          {/* Left panel */}
          <div
            style={{
              borderRight: "1px solid var(--m-border)",
              padding: "32px 28px 32px 0",
            }}
          >
            <p className="m-label" style={{ marginBottom: 16 }}>About</p>
            <p
              style={{
                fontSize: 14,
                color: "var(--m-fg-subtle)",
                lineHeight: 1.7,
                margin: 0,
                maxWidth: 420,
              }}
            >
              Founder of Towlips and a full‑stack developer focused on JavaScript
              and TypeScript. I build modern web products with the MERN stack and
              translate ideas into clean, usable interfaces. I’m growing a
              business while shipping reliable software.
            </p>

            <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Founder", "JS / TS", "MERN Stack", "Product", "Bun", "Figma"].map((t) => (
                <span key={t} className="m-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div style={{ padding: "32px 0 32px 28px" }}>
            <p className="m-label" style={{ marginBottom: 16 }}>Contact & Links</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              {[
                { icon: Mail, label: "aman.mohammed979@gmail.com", href: "mailto:aman.mohammed979@gmail.com" },
                { icon: SiGithub, label: "github.com/aman-mohammed-max", href: "https://github.com/aman-mohammed-max" },
                { icon: SiLinkedin, label: "linkedin.com/in/aman-mohammed-b4001822b", href: "https://www.linkedin.com/in/aman-mohammed-b4001822b/" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 12px",
                    borderRadius: 6,
                    border: "1px solid var(--m-border)",
                    background: "var(--m-bg-base)",
                    color: "var(--m-fg-subtle)",
                    textDecoration: "none",
                    fontSize: 13,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--m-border-strong)";
                    e.currentTarget.style.color = "var(--m-fg-base)";
                    e.currentTarget.style.background = "var(--m-bg-component)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--m-border)";
                    e.currentTarget.style.color = "var(--m-fg-subtle)";
                    e.currentTarget.style.background = "var(--m-bg-base)";
                  }}
                >
                  <Icon size={13} style={{ flexShrink: 0, color: "var(--m-fg-muted)" }} />
                  <span>{label}</span>
                  <ArrowRight size={11} style={{ marginLeft: "auto", color: "var(--m-fg-muted)" }} />
                </a>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <a href="#projects" className="m-btn m-btn-primary" style={{ textDecoration: "none" }}>
                View Projects
              </a>
              <a href="#contact" className="m-btn m-btn-secondary" style={{ textDecoration: "none" }}>
                Get In Touch
              </a>
            </div>

            <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--m-fg-green)",
                  display: "inline-block",
                }}
                className="anim-float"
              />
              <span style={{ fontSize: 12, color: "var(--m-fg-muted)" }}>
                Available for work · Kerala, India · Open to Remote
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          section#hero [style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          section#hero [style*="border-right: 1px solid"] {
            border-right: none !important;
            border-bottom: 1px solid var(--m-border) !important;
            padding-right: 0 !important;
          }
          section#hero [style*="padding: 32px 0"] {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
