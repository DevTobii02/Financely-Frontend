import { colors } from "../styles/colors";

const Contact = () => {
  const pageStyle = {
    minHeight: "100vh",
    background: colors.background,
    color: colors.textWhite,
    padding: "40px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  };

  const hero = {
    maxWidth: "860px",
    width: "100%",
    margin: "0 auto",
    padding: "36px",
    borderRadius: "28px",
    background: colors.surface,
    border: `1px solid ${colors.border}`,
  };

  const layout = {
    display: "grid",
    gap: "24px",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    width: "100%",
    maxWidth: "1120px",
    margin: "0 auto",
  };

  const card = {
    padding: "28px",
    borderRadius: "24px",
    background: colors.surfaceAlt,
    border: `1px solid ${colors.border}`,
    color: colors.textWhite,
  };

  const form = {
    display: "grid",
    gap: "18px",
    padding: "28px",
    borderRadius: "24px",
    background: colors.surfaceAlt,
    border: `1px solid ${colors.border}`,
  };

  const field = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const input = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "16px",
    border: `1px solid ${colors.border}`,
    background: colors.background,
    color: colors.textWhite,
  };

  const textarea = {
    ...input,
    minHeight: "140px",
    resize: "vertical",
  };

  const button = {
    padding: "14px 20px",
    borderRadius: "18px",
    border: "none",
    background: colors.primary,
    color: colors.textWhite,
    fontWeight: 700,
    cursor: "pointer",
  };

  return (
    <main style={pageStyle}>
      <section style={hero}>
        <p style={{ margin: 0, color: colors.accentLight, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 700, fontSize: "0.9rem" }}>
          Contact Financely
        </p>
        <h1 style={{ margin: "18px 0", fontSize: "clamp(2.5rem, 4vw, 3.75rem)", lineHeight: 1.05 }}>
          Let’s build better financial habits together
        </h1>
        <p style={{ margin: 0, color: colors.textSecondary, fontSize: "1.05rem", lineHeight: 1.85, maxWidth: "760px" }}>
          Have a question, feature request, or need support? Reach out and we’ll get back to you as soon as possible.
        </p>
      </section>

      <div style={layout}>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>Get in touch</h2>
          <p style={{ color: colors.textSecondary, lineHeight: 1.8 }}>
            Our team is happy to help with onboarding, account setup, or product feedback.
          </p>

          <div style={{ marginTop: "24px", display: "grid", gap: "18px" }}>
            <div>
              <p style={{ margin: 0, color: colors.accentLight, fontWeight: 700 }}>Email</p>
              <p style={{ margin: "8px 0 0", color: colors.textWhite }}>support@financely.app</p>
            </div>
            <div>
              <p style={{ margin: 0, color: colors.accentLight, fontWeight: 700 }}>Phone</p>
              <p style={{ margin: "8px 0 0", color: colors.textWhite }}>+234 800 123 4567</p>
            </div>
            <div>
              <p style={{ margin: 0, color: colors.accentLight, fontWeight: 700 }}>Hours</p>
              <p style={{ margin: "8px 0 0", color: colors.textWhite }}>Mon–Fri, 8am–6pm</p>
            </div>
          </div>
        </div>

        <form style={form}>
          <div style={field}>
            <label style={{ color: colors.textSecondary, fontSize: "0.95rem" }} htmlFor="name">Name</label>
            <input id="name" type="text" style={input} placeholder="Your name" />
          </div>
          <div style={field}>
            <label style={{ color: colors.textSecondary, fontSize: "0.95rem" }} htmlFor="email">Email</label>
            <input id="email" type="email" style={input} placeholder="you@example.com" />
          </div>
          <div style={field}>
            <label style={{ color: colors.textSecondary, fontSize: "0.95rem" }} htmlFor="message">Message</label>
            <textarea id="message" style={textarea} placeholder="Tell us how we can help" />
          </div>
          <button type="button" style={button}>Send message</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
