import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTransactions } from "../services/api";
import { colors } from "../styles/colors";

const sampleTransactions = [
  { id: 1, title: "Salary deposit", category: "Income", amount: 780000, date: "2026-03-26", status: "Completed" },
  { id: 2, title: "Groceries", category: "Food", amount: -42500, date: "2026-03-25", status: "Completed" },
  { id: 3, title: "Electric bill", category: "Utilities", amount: -17200, date: "2026-03-23", status: "Completed" },
  { id: 4, title: "Freelance project", category: "Income", amount: 165000, date: "2026-03-22", status: "Completed" },
  { id: 5, title: "Subscription", category: "Services", amount: -9200, date: "2026-03-20", status: "Pending" },
];

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("financelyAuth")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTransactions();
      if (Array.isArray(data) && data.length > 0) {
        setTransactions(data);
      } else {
        setTransactions(sampleTransactions);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const formatCurrency = (value) => {
    const amount = Number(value ?? 0);
    return `${Math.abs(amount).toLocaleString()}`;
  };

  return (
    <main style={{ minHeight: "100vh", background: colors.background, padding: "40px 24px", color: colors.textWhite }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", display: "grid", gap: "28px" }}>
        <section style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "18px", alignItems: "center" }}>
          <div>
            <p style={{ margin: 0, color: colors.accentLight, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 700, fontSize: "0.8rem" }}>
              Transactions
            </p>
            <h1 style={{ margin: "12px 0 10px", fontSize: "2.6rem" }}>All account activity</h1>
            <p style={{ margin: 0, color: colors.textSecondary, maxWidth: "720px", lineHeight: 1.8 }}>
              Browse your recent payments, income, and transfer history with quick sorting and status details.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link to="/dashboard" style={{ padding: "12px 18px", borderRadius: "16px", background: colors.surface, color: colors.textWhite, textDecoration: "none", border: `1px solid ${colors.border}` }}>
              Back to dashboard
            </Link>
            <button
              type="button"
              style={{ padding: "12px 18px", borderRadius: "16px", border: "none", background: colors.primary, color: colors.textWhite, cursor: "pointer" }}
              onClick={() => alert("Export is not enabled in this demo.")}
            >
              Export CSV
            </button>
          </div>
        </section>

        <section style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: "24px", padding: "24px", boxShadow: colors.shadow }}>
          {loading ? (
            <p style={{ color: colors.textSecondary }}>Loading transactions…</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "720px" }}>
                <thead>
                  <tr style={{ color: colors.textSecondary, textTransform: "uppercase", fontSize: "0.8rem" }}>
                    <th style={{ padding: "14px 16px", textAlign: "left" }}>Date</th>
                    <th style={{ padding: "14px 16px", textAlign: "left" }}>Title</th>
                    <th style={{ padding: "14px 16px", textAlign: "left" }}>Category</th>
                    <th style={{ padding: "14px 16px", textAlign: "right" }}>Amount</th>
                    <th style={{ padding: "14px 16px", textAlign: "center" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr key={tx.id} style={{ borderTop: `1px solid ${colors.border}` }}>
                      <td style={{ padding: "16px", color: colors.textSecondary }}>{tx.date ?? "—"}</td>
                      <td style={{ padding: "16px", fontWeight: 600 }}>{tx.title ?? tx.description ?? "Transaction"}</td>
                      <td style={{ padding: "16px", color: colors.textSecondary }}>{tx.category ?? tx.type ?? "General"}</td>
                      <td style={{ padding: "16px", textAlign: "right", color: tx.amount >= 0 ? colors.accentLight : colors.danger }}>
                        {tx.amount >= 0 ? "+" : "-"}{formatCurrency(tx.amount)}
                      </td>
                      <td style={{ padding: "16px", textAlign: "center" }}>
                        <span style={{ display: "inline-flex", padding: "6px 12px", borderRadius: "999px", background: tx.status === "Pending" ? colors.warning : colors.backgroundSoft, color: tx.status === "Pending" ? colors.textPrimary : colors.textSecondary, fontSize: "0.85rem", fontWeight: 700 }}>
                          {tx.status ?? (tx.amount >= 0 ? "Completed" : "Completed")}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Transactions;
