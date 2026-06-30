export default function CalendarBodyHeader() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="grid grid-cols-7 border-b bg-gray-50">
      {days.map((day) => (
        <div
          key={day}
          className="py-2 text-center text-sm font-semibold text-gray-600"
        >
          {day}
        </div>
      ))}
    </div>
  );
}
