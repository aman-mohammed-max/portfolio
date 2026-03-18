import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import logoSrc from "@assets/logo.svg";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--m-border)",
        background: "var(--m-bg-subtle)",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        {/* Logo + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src={logoSrc} alt="Logo" style={{ width: 13, height: 13, filter: "invert(1)", opacity: 0.5 }} />
          <span style={{ fontSize: 12, color: "var(--m-fg-muted)" }}>Aman Mohammed</span>
        </div>

        {/* Center */}
        <span style={{ fontSize: 11, color: "var(--m-fg-muted)", fontFamily: "Roboto Mono, monospace" }}>
          Built with React · TypeScript · Medusa UI · {new Date().getFullYear()}
        </span>

        {/* Social icons */}
        <div style={{ display: "flex", gap: 6 }}>
          {[
            { icon: SiGithub,  href: "https://github.com",             label: "GitHub" },
            { icon: SiLinkedin,href: "https://www.linkedin.com/in/aman-mohammed-b4001822b/", label: "LinkedIn" },
            { icon: Mail,      href: "mailto:aman.mohammed979@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                border: "1px solid var(--m-border)",
                background: "var(--m-bg-base)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--m-fg-muted)",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--m-border-strong)";
                e.currentTarget.style.color = "var(--m-fg-base)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--m-border)";
                e.currentTarget.style.color = "var(--m-fg-muted)";
              }}
            >
              <Icon size={12} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
