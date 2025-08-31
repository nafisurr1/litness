// app/layout.js
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Litness",
  description: "Your personal hub for fitness, sleep, and tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header style={{ borderBottom: "3px solid #bbb", background: "#fff" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 20px",
            }}
          >
            {/* Logo */}
            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Litness</h1>

            {/* Navigation */}
            <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/" style={{ color: "#333", textDecoration: "none", fontWeight: "500" }}>
              Dashboard
            </Link>
            <Link href="/workouts" style={{ color: "#333", textDecoration: "none", fontWeight: "500" }}>
              Workouts
            </Link>
            <Link href="/sleep" style={{ color: "#333", textDecoration: "none", fontWeight: "500" }}>
              Sleep
            </Link>
            <Link href="/to-do" style={{ color: "#333", textDecoration: "none", fontWeight: "500" }}>
              To-Do
            </Link>
            <Link href="/calendar" style={{ color: "#333", textDecoration: "none", fontWeight: "500" }}>
              Calendar
            </Link>
          </nav>
          </div>
        </header>

        {/* Page content */}
        <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
