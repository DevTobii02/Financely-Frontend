import { Link } from "react-router-dom";
import { colors } from "../styles/colors";

const Home = () => {
  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 24px",
    background: colors.background,
    color: colors.textWhite,
  };

  const heroStyle = {
    maxWidth: "760px",
    width: "100%",
    textAlign: "center",
    marginBottom: "40px",
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "14px 26px",
    borderRadius: "999px",
    border: "none",
    background: colors.primary,
    color: colors.textWhite,
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "16px",
  };

  const accentButton = {
    ...buttonStyle,
    background: colors.surface,
    color: colors.primary,
    border: `1px solid ${colors.primary}`,
  };

  const gridStyle = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    width: "100%",
    maxWidth: "1120px",
  };

  const featureCard = {
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: "24px",
    padding: "28px",
    color: colors.textPrimary,
    boxShadow: colors.shadow,
  };

  return (
    <main style={pageStyle}>
      <div style={heroStyle}>
        <p style={{ margin: 0, color: colors.accentLight, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Finance made simple
        </p>
        <h1 style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", margin: "18px 0 18px", lineHeight: 1.02 }}>
          Welcome to Financely
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.9, color: colors.textSecondary, maxWidth: "680px", margin: "0 auto" }}>
          Connect your accounts, categorize transactions automatically, and get a crystal-clear view of where your money goes. Start managing your budget with confidence today.
        </p>
      </div>

      <section style={gridStyle}>
        <div style={featureCard}>
          <p style={{ margin: 0, color: colors.textPrimary, fontWeight: 700 }}>Real-time insights</p>
          <h2 style={{ margin: "14px 0", fontSize: "1.3rem" }}>See your cash flow in one place</h2>
          <p style={{ margin: 0, color: colors.textWhite }}>Review income, spending, and balances instantly with automated updates from your accounts.</p>
        </div>

        <div style={featureCard}>
          <p style={{ margin: 0, color: colors.textPrimary, fontWeight: 700 }}>Smart categorization</p>
          <h2 style={{ margin: "14px 0", fontSize: "1.3rem" }}>Know where your money goes</h2>
          <p style={{ margin: 0, color: colors.textWhite }}>Automatically sort transactions into categories like groceries, bills, subscriptions, and travel.</p>
        </div>

        <div style={featureCard}>
          <p style={{ margin: 0, color: colors.textPrimary, fontWeight: 700 }}>Secure by design</p>
          <h2 style={{ margin: "14px 0", fontSize: "1.3rem" }}>Protected financial views</h2>
          <p style={{ margin: 0, color: colors.textWhite }}>Built with strong encryption and modern authentication so your data stays safe.</p>
        </div>
      </section>

      <section style={{ ...featureCard, marginTop: "40px", width: "100%", maxWidth: "1120px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "22px" }}>
          <div style={{ flex: "1 1 340px" }}>
            <h2 style={{ marginTop: 0, marginBottom: "16px" }}>Your finance command center</h2>
            <p style={{ margin: 0, color: colors.textSecondary, lineHeight: 1.8 }}>
              Financely gives you the tools to track spending, forecast budgets, and act on the insights that matter most.
            </p>
          </div>
          <div style={{ display: "grid", gap: "14px", flex: "1 1 240px" }}>
            <div style={{ padding: "18px", borderRadius: "20px", background: colors.backgroundSoft, border: `1px solid ${colors.border}` }}>
              <p style={{ margin: 0, color: colors.textSecondary, fontSize: "0.9rem" }}>Monthly spend</p>
              <p style={{ margin: "8px 0 0", fontSize: "1.4rem", fontWeight: 700 }}>$4,820</p>
            </div>
            <div style={{ padding: "18px", borderRadius: "20px", background: colors.backgroundSoft, border: `1px solid ${colors.border}` }}>
              <p style={{ margin: 0, color: colors.textSecondary, fontSize: "0.9rem" }}>Savings goal</p>
              <p style={{ margin: "8px 0 0", fontSize: "1.4rem", fontWeight: 700 }}>$1,900</p>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gap: "16px", marginTop: "30px", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          {[
            { title: "Fast onboarding", description: "Create an account and start reviewing transactions in minutes." },
            { title: "Actionable reports", description: "Spot category overspend and recurring bills automatically." },
            { title: "Built for clarity", description: "A clean interface helps you focus on the numbers that matter." },
          ].map((item) => (
            <div key={item.title} style={{ padding: "22px", borderRadius: "24px", background: colors.surfaceAlt, border: `1px solid ${colors.border}` }}>
              <h3 style={{ margin: "0 0 10px" }}>{item.title}</h3>
              <p style={{ margin: 0, color: colors.textSecondary }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
