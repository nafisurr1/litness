import Link from "next/link";

export default function Dashboard() {
  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>Welcome back to Litness 🚀</h1>
      <p>Your personal hub for fitness, sleep, and tasks.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <Link href="/workouts">
          <div style={{ background: "#222", padding: "20px", borderRadius: "10px", cursor: "pointer" }}>
            <h2>Workouts</h2>
            <p>3 workouts planned this week</p>
          </div>
        </Link>

        <Link href="/sleep">
          <div style={{ background: "#222", padding: "20px", borderRadius: "10px", cursor: "pointer" }}>
            <h2>Sleep</h2>
            <p>Avg: 7 hrs/night</p>
          </div>
        </Link>

        <Link href="/to-do">
          <div style={{ background: "#222", padding: "20px", borderRadius: "10px", cursor: "pointer" }}>
            <h2>To-Do</h2>
            <p>2 tasks due today</p>
          </div>
        </Link>

        <Link href="/calendar">
          <div style={{ background: "#222", padding: "20px", borderRadius: "10px", cursor: "pointer" }}>
            <h2>Calendar</h2>
            <p>View your month</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
