import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../styles/colors";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("financelyAuth", "true");
    console.log("Register payload:", form);
    alert("Registration submitted. Redirecting to your dashboard.");
    navigate("/dashboard");
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "16px",
    border: `1px solid ${colors.border}`,
    background: colors.backgroundSoft,
    color: colors.textPrimary,
    fontSize: "1rem",
  };

  return (
    <main style={{ padding: "40px 24px", minHeight: "100vh", background: colors.background, color: colors.textWhite, display: "grid", placeItems: "center" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "36px",
          background: colors.surface,
          borderRadius: "28px",
          border: `1px solid ${colors.border}`,
          boxShadow: colors.shadow,
        }}
      >
        <div style={{ marginBottom: "28px" }}>
          <p style={{ margin: 0, color: colors.accent, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 700, fontSize: "0.8rem" }}>
            Join Financely
          </p>
          <h1 style={{ margin: "14px 0 12px", fontSize: "2rem", color: colors.textWhite }}>Create your account</h1>
          <p style={{ margin: 0, color: colors.textSecondary, lineHeight: 1.8 }}>
            Sign up and start managing your spending with clear insights, budgets, and transaction tracking.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "18px" }}>
          <label style={{ display: "grid", gap: "8px", textAlign: "left", color: colors.textSecondary }}>
            Full name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              required
              style={inputStyle}
            />
          </label>

          <label style={{ display: "grid", gap: "8px", textAlign: "left", color: colors.textSecondary }}>
            Email address
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              style={inputStyle}
            />
          </label>

          <label style={{ display: "grid", gap: "8px", textAlign: "left", color: colors.textSecondary }}>
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Choose a strong password"
              required
              style={inputStyle}
            />
          </label>

          <label style={{ display: "grid", gap: "8px", textAlign: "left", color: colors.textSecondary }}>
            Confirm password
            <input
              type="password"
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              placeholder="Repeat your password"
              required
              style={inputStyle}
            />
          </label>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <span style={{ color: colors.textSecondary, fontSize: "0.95rem" }}>Already have an account?</span>
            <Link to="/login" style={{ color: colors.primary, fontWeight: 600, textDecoration: "none" }}>
              Sign in
            </Link>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px 18px",
              borderRadius: "16px",
              border: "none",
              background: colors.primary,
              color: colors.textWhite,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Create account
          </button>
        </form>
      </div>
    </main>
  );
}

export default Register;
