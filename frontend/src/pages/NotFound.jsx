import { Link } from "wouter";

export default function NotFound() {
  return (
    <div style={{ background: "#0a0a0a", color: "#f0f0f0", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "20px" }}>
      <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "4rem", fontWeight: 700 }}>404</h1>
      <p style={{ color: "#aaa" }}>Page not found</p>
      <Link href="/" style={{ background: "#D40000", color: "#fff", padding: "10px 24px", borderRadius: "8px", fontWeight: 600 }}>
        Go Home
      </Link>
    </div>
  );
}
