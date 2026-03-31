import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../styles/colors";
import { getTransactions } from "../services/api";

const sampleTransactions = [
  { id: 1, title: "Salary deposit", category: "Income", amount: 780000, date: "2026-03-26", type: "income" },
  { id: 2, title: "Groceries", category: "Food", amount: -42500, date: "2026-03-25", type: "expense" },
  { id: 3, title: "Electric bill", category: "Utilities", amount: -17200, date: "2026-03-23", type: "expense" },
  { id: 4, title: "Freelance project", category: "Income", amount: 165000, date: "2026-03-22", type: "income" },
  { id: 5, title: "Subscription", category: "Services", amount: -9200, date: "2026-03-20", type: "expense" },
];

const normalizeTransaction = (transaction) => {
  const amount = Number(transaction.amount ?? transaction.value ?? 0);
  const title = transaction.title ?? transaction.description ?? "Transaction";
  const category = transaction.category ?? transaction.type ?? "General";
  const date = transaction.date ?? transaction.created_at ?? "2026-03-01";
  const type = transaction.type ?? (amount >= 0 ? "income" : "expense");

  return { ...transaction, amount, title, category, date, type };
};

function Dashboard() {
  const [transactions, setTransactions] = useState(sampleTransactions);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("financelyAuth")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    async function loadTransactions() {
      const data = await getTransactions();
      if (Array.isArray(data) && data.length > 0) {
        setTransactions(data.map(normalizeTransaction));
      } else {
        setTransactions(sampleTransactions);
      }
      setLoading(false);
    }
    loadTransactions();
  }, []);

  const totalIncome = transactions.filter((tx) => tx.amount > 0).reduce((sum, tx) => sum + tx.amount, 0);
  const totalExpenses = transactions.filter((tx) => tx.amount < 0).reduce((sum, tx) => sum + tx.amount, 0);
  const balance = totalIncome + totalExpenses;
  const recentTransactions = transactions.slice(0, 5);

  const cardStyle = {
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: "24px",
    padding: "26px",
    color: colors.textPrimary,
    boxShadow: colors.shadow,
  };

  return (
    <main style={{ minHeight: "100vh", background: colors.background, padding: "40px 24px", color: colors.textWhite }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", display: "grid", gap: "30px" }}>
        <section style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "18px" }}>
          <div>
            <p style={{ margin: 0, color: colors.accentLight, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 700, fontSize: "0.8rem" }}>
              Dashboard overview
            </p>
            <h1 style={{ margin: "12px 0 10px", fontSize: "2.6rem" }}>Welcome back</h1>
            <p style={{ margin: 0, color: colors.textSecondary, maxWidth: "640px", lineHeight: 1.8 }}>
              View your account summary, recent activity, and the most important numbers for managing your money.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link to="/transactions" style={{ padding: "13px 20px", borderRadius: "16px", background: colors.primary, color: colors.textWhite, textDecoration: "none", fontWeight: 700 }}>
              See transactions
            </Link>
            <Link to="/register" style={{ padding: "13px 20px", borderRadius: "16px", background: colors.surface, color: colors.primary, border: `1px solid ${colors.primary}`, textDecoration: "none", fontWeight: 700 }}>
              Invite team
            </Link>
          </div>
        </section>

        <section style={{ display: "grid", gap: "18px", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          <div style={cardStyle}>
            <p style={{ margin: 0, color: colors.textSecondary, fontSize: "0.9rem" }}>Current balance</p>
            <p style={{ margin: "14px 0 0", fontSize: "2rem", fontWeight: 700 }}>₦{balance.toLocaleString()}</p>
          </div>
          <div style={cardStyle}>
            <p style={{ margin: 0, color: colors.textSecondary, fontSize: "0.9rem" }}>Income this month</p>
            <p style={{ margin: "14px 0 0", fontSize: "2rem", fontWeight: 700, color: colors.accentLight }}>{totalIncome.toLocaleString()}</p>
          </div>
          <div style={cardStyle}>
            <p style={{ margin: 0, color: colors.textSecondary, fontSize: "0.9rem" }}>Expenses this month</p>
            <p style={{ margin: "14px 0 0", fontSize: "2rem", fontWeight: 700, color: colors.danger }}>{Math.abs(totalExpenses).toLocaleString()}</p>
          </div>
        </section>

        <section style={{ display: "grid", gap: "24px", gridTemplateColumns: "1.5fr 1fr" }}>
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "22px" }}>
              <div>
                <h2 style={{ margin: 0, fontSize: "1.4rem" }}>Recent activity</h2>
                <p style={{ margin: "8px 0 0", color: colors.textSecondary }}>Latest transactions from your accounts.</p>
              </div>
              <span style={{ color: colors.primary, fontWeight: 700 }}>Live</span>
            </div>

            {loading ? (
              <p style={{ color: colors.textSecondary }}>Loading recent transactions…</p>
            ) : (
              <div style={{ display: "grid", gap: "14px" }}>
                {recentTransactions.map((tx) => (
                  <div key={tx.id} style={{ padding: "16px", borderRadius: "18px", background: colors.backgroundSoft, display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center" }}>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700 }}>{tx.title}</p>
                      <p style={{ margin: "6px 0 0", color: colors.textSecondary, fontSize: "0.95rem" }}>{tx.category}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ margin: 0, fontWeight: 700, color: tx.amount >= 0 ? colors.accentLight : colors.danger }}>
                        {tx.amount >= 0 ? "+" : "-"}₦{Math.abs(tx.amount).toLocaleString()}
                      </p>
                      <p style={{ margin: "6px 0 0", color: colors.textSecondary, fontSize: "0.9rem" }}>{tx.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={cardStyle}>
            <h2 style={{ marginTop: 0, fontSize: "1.4rem" }}>Action items</h2>
            <p style={{ color: colors.textSecondary, lineHeight: 1.8 }}>Keep track of your cash flow and focus on the next steps to improve your financial health.</p>
            <ul style={{ margin: "22px 0 0", paddingLeft: "20px", color: colors.textSecondary, lineHeight: 1.9 }}>
              <li>Review your latest merchant spending</li>
              <li>Set a budget target for this month</li>
              <li>Confirm recurring subscriptions</li>
            </ul>
            <Link to="/transactions" style={{ display: "inline-flex", marginTop: "22px", padding: "12px 18px", borderRadius: "16px", background: colors.primary, color: colors.textWhite, textDecoration: "none", fontWeight: 700 }}>
              View all transactions
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Dashboard;
