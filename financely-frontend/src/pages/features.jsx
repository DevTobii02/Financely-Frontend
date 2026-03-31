import { colors } from "../styles/colors";

const Features = () => {
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
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  };

  const card = {
    padding: "28px",
    borderRadius: "24px",
    background: colors.surfaceAlt,
    border: `1px solid ${colors.border}`,
    color: colors.textWhite,
  };

  const featureList = [
    {
      title: "Automatic categorization",
      description: "Transactions are sorted into categories instantly so you always know where your money goes.",
    },
    {
      title: "Unified account view",
      description: "Connect bank accounts, cards, and payments to see balances and activity in one dashboard.",
    },
    {
      title: "Budget planning",
      description: "Set monthly limits, track progress, and stay on top of recurring expenses.",
    },
    {
      title: "Savings goals",
      description: "Create targets, measure progress, and celebrate milestones as you save more.",
    },
    {
      title: "Secure sync",
      description: "Strong encryption and careful access controls keep your data private and protected.",
    },
    {
      title: "Actionable insights",
      description: "Get smart summaries and spending alerts that help you make better decisions every day.",
    },
  ];

  return (
    <main style={pageStyle}>
      <section style={hero}>
        <p style={{ margin: 0, color: colors.accentLight, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 700, fontSize: "0.9rem" }}>
          Financely features
        </p>
        <h1 style={{ margin: "18px 0", fontSize: "clamp(2.5rem, 4vw, 3.75rem)", lineHeight: 1.05 }}>
          Powerful tools for smarter spending
        </h1>
        <p style={{ margin: 0, color: colors.textSecondary, fontSize: "1.05rem", lineHeight: 1.85, maxWidth: "760px" }}>
          Discover the capabilities that make Financely a practical, modern way to manage money with less guesswork and more control.
        </p>
      </section>

      <section style={grid}>
        {featureList.map((feature) => (
          <div key={feature.title} style={card}>
            <p style={{ margin: 0, color: colors.accentLight, fontWeight: 700 }}>{feature.title}</p>
            <p style={{ margin: "14px 0 0", color: colors.textSecondary, lineHeight: 1.8 }}>{feature.description}</p>
          </div>
        ))}
      </section>

      <section style={{ ...hero, padding: "32px" }}>
        <h2 style={{ marginTop: 0 }}>Designed for clarity and momentum</h2>
        <p style={{ margin: "18px 0 0", color: colors.textSecondary, lineHeight: 1.8 }}>
          With Financely, every feature is built to help you move from tracking numbers to taking action—whether that means saving more, spending smarter, or reaching your next financial goal.
        </p>
      </section>
    </main>
  );
};

export default Features;
