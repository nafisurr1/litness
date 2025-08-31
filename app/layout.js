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
        <header style={{ borderBottom: "1px solid #ddd", background: "#fff" }}>
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
              <Link href="/">Dashboard</Link>
              <Link href="/workouts">Workouts</Link>
              <Link href="/sleep">Sleep</Link>
              <Link href="/to-do">To-Do</Link>
              <Link href="/calendar">Calendar</Link>
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
