import Calendar from "./Calendar";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-lg shadow gap-6 md:gap-0">
      
      {/* Left: Text and Image */}
      <div className="flex flex-col items-start text-left w-full md:w-3/4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Today's Task</h2>
        <p className="text-gray-500 text-sm sm:text-base mt-1">Check your daily tasks and schedules</p>
        <img src="/time.png" alt="Illustration" className="w-full sm:w-48 mt-2" />
      </div>

      {/* Right: Calendar */}
      <div className="flex-shrink-0 w-full md:w-1/4">
        <Calendar />
      </div>
    </div>
  );
}
