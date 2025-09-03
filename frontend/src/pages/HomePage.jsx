import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
          Welcome to <span className="text-purple-500">PlanIT!</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Your all-in-one task manager to organize, track, and achieve your goals
          with peace of mind. Stay productive. Stay focused.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
            to="/signup"
            className="px-6 py-3 rounded-2xl bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 rounded-2xl border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Feature Section */}
      <div className="mt-16 grid gap-8 md:grid-cols-3 text-center max-w-5xl">
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-purple-600 mb-2">📅 Organize</h2>
          <p className="text-gray-500">
            Easily create, update, and prioritize your tasks with a clean interface.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-purple-600 mb-2">⏳ Track</h2>
          <p className="text-gray-500">
            Stay on top of deadlines and progress with powerful task tracking tools.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-purple-600 mb-2">🏆 Achieve</h2>
          <p className="text-gray-500">
            Boost productivity and achieve your goals with clarity and focus.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} PlanIT! – Built for productivity 🌸
      </footer>
    </div>
  );
}
