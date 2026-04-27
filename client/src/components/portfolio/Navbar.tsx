import { useState, useEffect } from "react";
import { Menu, X, Settings, Github } from "lucide-react";
import logoSrc from "@assets/logo.svg";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "var(--m-bg-subtle)",
        borderBottom: "1px solid var(--m-border)",
        height: 48,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 20px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Left: logo + breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src={logoSrc} alt="Logo" style={{ width: 14, height: 14, filter: "invert(1)", opacity: 0.7 }} />
          <span style={{ color: "var(--m-fg-muted)", fontSize: 13 }}>Aman</span>
          <span style={{ color: "var(--m-border-strong)", fontSize: 13 }}>/</span>
          <span style={{ color: "var(--m-fg-base)", fontSize: 13, fontWeight: 500 }}>Portfolio</span>
        </div>

        {/* Center: nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="hidden-mobile">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                padding: "4px 10px",
                borderRadius: 5,
                fontSize: 13,
                fontWeight: 500,
                color: active === item.href.slice(1) ? "var(--m-fg-base)" : "var(--m-fg-muted)",
                background: active === item.href.slice(1) ? "var(--m-bg-component)" : "transparent",
                textDecoration: "none",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                if (active !== item.href.slice(1)) {
                  e.currentTarget.style.color = "var(--m-fg-base)";
                  e.currentTarget.style.background = "var(--m-border)";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== item.href.slice(1)) {
                  e.currentTarget.style.color = "var(--m-fg-muted)";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <a
            href="https://github.com/aman-mohammed-max"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              border: "1px solid var(--m-border-strong)",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--m-fg-muted)",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
            title="GitHub"
          >
            <Github size={13} />
          </a>
          <a
            href="#contact"
            className="m-btn m-btn-primary"
            style={{ padding: "5px 12px", fontSize: 12 }}
          >
            Hire Me
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            style={{
              display: "none",
              width: 28,
              height: 28,
              borderRadius: 6,
              border: "1px solid var(--m-border-strong)",
              background: "transparent",
              color: "var(--m-fg-muted)",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {open ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>

      {open && (
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 0,
            right: 0,
            background: "var(--m-bg-base)",
            borderBottom: "1px solid var(--m-border)",
            padding: "12px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                padding: "8px 10px",
                borderRadius: 6,
                fontSize: 13,
                color: "var(--m-fg-subtle)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
