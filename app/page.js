// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to Litness 🚀</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl">
        Your all-in-one hub to track workouts, improve sleep, and stay on top of your tasks.
        Stay productive, stay healthy, and stay lit. 🔥
      </p>

      <Link
        href="/dashboard"
        className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
      >
        Get Started Free
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl">
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">💪 Workouts</h2>
          <p>Plan and track your workouts easily to reach your goals.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">😴 Sleep</h2>
          <p>Monitor and improve your sleep for better recovery and focus.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">✅ To-Do</h2>
          <p>Stay productive by organizing your daily tasks in one place.</p>
        </div>
      </div>
    </main>
  );
}
