import { colors } from "../styles/colors";

const About = () => {
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

  const grid = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  };

  const card = {
    padding: "24px",
    borderRadius: "24px",
    background: colors.surfaceAlt,
    border: `1px solid ${colors.border}`,
    color: colors.textWhite,
  };

  return (
    <main style={pageStyle}>
      <section style={hero}>
        <p style={{ margin: 0, color: colors.accentLight, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 700, fontSize: "0.9rem" }}>
          About Financely
        </p>
        <h1 style={{ margin: "18px 0", fontSize: "clamp(2.5rem, 4vw, 3.75rem)", lineHeight: 1.05 }}>
          Simple financial clarity for modern lives
        </h1>
        <p style={{ margin: 0, color: colors.textSecondary, fontSize: "1.05rem", lineHeight: 1.85, maxWidth: "760px" }}>
          Financely helps you track spending, manage budgets, and keep your finances organized without extra complexity. Our mission is to make every money decision easier.
        </p>
      </section>

      <section style={grid}>
        <div style={card}>
          <p style={{ margin: 0, color: colors.accentLight, fontWeight: 700 }}>Our mission</p>
          <h2 style={{ margin: "16px 0 10px" }}>Build confidence around money</h2>
          <p style={{ margin: 0, color: colors.textSecondary, lineHeight: 1.8 }}>
            We create tools that turn accounts and transactions into clear, actionable insights so you can budget, save, and plan with confidence.
          </p>
        </div>
        <div style={card}>
          <p style={{ margin: 0, color: colors.accentLight, fontWeight: 700 }}>What we do</p>
          <h2 style={{ margin: "16px 0 10px" }}>Connect, categorize, and review</h2>
          <p style={{ margin: 0, color: colors.textSecondary, lineHeight: 1.8 }}>
            Financely brings your accounts together, sorts transactions automatically, and highlights the spending patterns that matter most.
          </p>
        </div>
        <div style={card}>
          <p style={{ margin: 0, color: colors.accentLight, fontWeight: 700 }}>Why it works</p>
          <h2 style={{ margin: "16px 0 10px" }}>Clear data, confident choices</h2>
          <p style={{ margin: 0, color: colors.textSecondary, lineHeight: 1.8 }}>
            With clean reports, smart budgeting insights, and real-time updates, you can move from guesswork to purposeful financial decisions.
          </p>
        </div>
      </section>

      <section style={{ ...hero, padding: "32px" }}>
        <h2 style={{ marginTop: 0 }}>Built for people who want a better money experience</h2>
        <p style={{ margin: "18px 0 0", color: colors.textSecondary, lineHeight: 1.8 }}>
          Whether you are saving for a goal, tracking monthly expenses, or planning the next step in your financial journey, Financely is designed to simplify the process without sacrificing detail.
        </p>
      </section>
    </main>
  );
};

export default About;
