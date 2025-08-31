import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Litness</h1>
      <div className="space-x-6">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/workouts">Workouts</Link>
      <Link href="/sleep">Sleep</Link>
      <Link href="/todo">To-Do</Link>
      <Link href="/calendar">Calendar</Link>
      </div>
    </nav>
  );
}
