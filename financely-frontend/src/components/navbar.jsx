import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("financelyAuth")));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("financelyAuth")));
  }, [location]);

  const navStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "18px",
    padding: "18px 24px",
    background: "#0F172A",
    borderBottom: "1px solid #334155",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    color: "#E2E8F0",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "0.95rem",
  };

  const buttonStyle = {
    color: "#E2E8F0",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: "0.95rem",
    padding: 0,
  };

  const handleLogout = () => {
    localStorage.removeItem("financelyAuth");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/features" style={linkStyle}>Features</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
      {!isLoggedIn && <Link to="/register" style={linkStyle}>Register</Link>}
      {!isLoggedIn && <Link to="/login" style={linkStyle}>Login</Link>}
      {isLoggedIn && <Link to="/dashboard" style={linkStyle}>Dashboard</Link>}
      {isLoggedIn && <Link to="/transactions" style={linkStyle}>Transactions</Link>}
      {isLoggedIn && (
        <button type="button" onClick={handleLogout} style={buttonStyle}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar; 