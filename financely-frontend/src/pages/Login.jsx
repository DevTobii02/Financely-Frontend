import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../styles/colors";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "", remember: false });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setCredentials((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("financelyAuth", "true");
    console.log("Login payload:", credentials);
    alert("Login submitted. Redirecting to your dashboard.");
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
          maxWidth: "560px",
          padding: "36px",
          background: colors.surface,
          borderRadius: "28px",
          border: `1px solid ${colors.border}`,
          boxShadow: colors.shadow,
        }}
      >
        <div style={{ marginBottom: "28px" }}>
          <p style={{ margin: 0, color: colors.accent, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 700, fontSize: "0.8rem" }}>
            Welcome back
          </p>
          <h1 style={{ margin: "14px 0 12px", fontSize: "2rem", color: colors.textWhite }}>Login to Financely</h1>
          <p style={{ margin: 0, color: colors.textSecondary, lineHeight: 1.8 }}>
            Enter any random email and password to login for demo access; credentials are accepted and you will be redirected to the dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "18px" }}>
          <label style={{ display: "grid", gap: "8px", textAlign: "left", color: colors.textSecondary }}>
            Email address
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="random@example.com"
              required
              style={inputStyle}
            />
          </label>

          <label style={{ display: "grid", gap: "8px", textAlign: "left", color: colors.textSecondary }}>
            Password
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              style={inputStyle}
            />
          </label>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", color: colors.textSecondary, fontSize: "0.95rem" }}>
              <input type="checkbox" name="remember" checked={credentials.remember} onChange={handleChange} style={{ width: "18px", height: "18px" }} />
              Remember me
            </label>
            <Link to="/register" style={{ color: colors.primary, fontWeight: 600, textDecoration: "none" }}>
              Create account
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
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
