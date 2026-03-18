import { useState } from "react";
import { Mail, MapPin, ArrowRight, CheckCircle, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const links = [
  { icon: SiGithub,  label: "GitHub",   sub: "@aman-mohammed",                   href: "https://github.com" },
  { icon: FaLinkedinIn,label: "LinkedIn", sub: "linkedin.com/in/aman-mohammed-b4001822b", href: "https://www.linkedin.com/in/aman-mohammed-b4001822b/" },
  { icon: Mail,      label: "Email",    sub: "connect@amanm.space",         href: "mailto:connect@amanm.space" },
];

export function Contact() {
  const CONTACT_ENDPOINT =
    import.meta.env.PUBLIC_CONTACT_ENDPOINT || "https://your-worker-domain/api/contact";
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const sendMessage = async (payload: typeof form) => {
    const res = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error("Request failed");
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      await sendMessage(form);
      setForm({ name: "", email: "", subject: "", message: "" });
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" style={{ borderBottom: "1px solid var(--m-border)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>

        <div className="m-page-header">
          <p className="m-label" style={{ marginBottom: 6 }}>05. Connect</p>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--m-fg-base)" }}>
            Open to conversations and ideas
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            borderLeft: "1px solid var(--m-border)",
          }}
        >
          {/* Left: info */}
          <div style={{ borderRight: "1px solid var(--m-border)", padding: "24px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Status */}
            <div
              style={{
                padding: "12px 14px",
                borderRadius: 6,
                border: "1px solid var(--m-border)",
                background: "var(--m-bg-base)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span
                  style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--m-fg-green)", display: "inline-block" }}
                  className="anim-float"
                />
                <span style={{ fontSize: 12, fontWeight: 500, color: "var(--m-fg-base)" }}>Open to conversations</span>
              </div>
              <p style={{ margin: 0, fontSize: 12, color: "var(--m-fg-muted)", lineHeight: 1.6 }}>
                Open to conversations, collaborations, and interesting ideas.
              </p>
            </div>

            {/* Location */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--m-fg-muted)" }}>
              <MapPin size={12} />
              India · Remote
            </div>

            {/* Social links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {links.map(({ icon: Icon, label, sub, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "9px 12px",
                    borderRadius: 6,
                    border: "1px solid var(--m-border)",
                    background: "var(--m-bg-base)",
                    textDecoration: "none",
                    color: "var(--m-fg-subtle)",
                    fontSize: 12,
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
                  <Icon size={12} style={{ color: "var(--m-fg-muted)", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 500 }}>{label}</div>
                    <div style={{ fontSize: 10, color: "var(--m-fg-muted)", fontFamily: "Roboto Mono, monospace" }}>{sub}</div>
                  </div>
                  <ArrowRight size={11} style={{ marginLeft: "auto", color: "var(--m-fg-muted)" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div style={{ padding: "24px 20px" }}>
            {status === "success" ? (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  textAlign: "center",
                  padding: "40px 20px",
                }}
              >
                <CheckCircle size={40} style={{ color: "var(--m-fg-green)" }} />
                <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: "var(--m-fg-base)" }}>
                  Message sent successfully
                </p>
                <p style={{ margin: 0, fontSize: 13, color: "var(--m-fg-muted)", maxWidth: 280 }}>
                  Thanks for reaching out. I'll reply when I can.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label className="m-label" style={{ display: "block", marginBottom: 6 }}>Name</label>
                    <input
                      className="m-input"
                      placeholder="Your name or company"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="m-label" style={{ display: "block", marginBottom: 6 }}>Email</label>
                    <input
                      className="m-input"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="m-label" style={{ display: "block", marginBottom: 6 }}>Subject</label>
                    <input
                      className="m-input"
                      placeholder="Idea, experiment, collaboration..."
                      value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="m-label" style={{ display: "block", marginBottom: 6 }}>Message</label>
                  <textarea
                    className="m-input"
                    rows={5}
                    placeholder="Share what you are building or exploring..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button
                    type="submit"
                    className="m-btn m-btn-primary"
                    disabled={status === "loading"}
                    style={{ minWidth: 140 }}
                  >
                    {status === "loading" ? (
                      <span
                        style={{
                          width: 13,
                          height: 13,
                          borderRadius: "50%",
                          border: "2px solid rgba(0,0,0,.25)",
                          borderTopColor: "rgba(0,0,0,.8)",
                          animation: "spin 0.7s linear infinite",
                          display: "inline-block",
                        }}
                      />
                    ) : (
                      <Send size={13} />
                    )}
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </div>
                {status === "error" && (
                  <p style={{ margin: 0, fontSize: 12, color: "var(--m-fg-muted)" }}>
                    Something went wrong. Try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 640px) {
          #contact [style*="280px 1fr"] { grid-template-columns: 1fr !important; }
          #contact [style*="border-right: 1px solid"] { border-right: none !important; border-bottom: 1px solid var(--m-border) !important; }
        }
      `}</style>
    </section>
  );
}
