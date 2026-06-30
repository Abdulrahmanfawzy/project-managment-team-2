"use client";

import {
  format,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isSameDay,
  isToday,
} from "date-fns";
import { useCalendarContext } from "../calendar-context";
import EventCard from "../meeting-card";

export function CalendarBody() {
  const { events, date, mode } = useCalendarContext();

  // تحديد نطاق الأيام بناءً على الـ mode
  let days: Date[] = [];
  let gridCols = "";

  if (mode === "day") {
    days = [date];
    gridCols = "grid-cols-[80px_1fr]";
  } else if (mode === "week") {
    days = eachDayOfInterval({
      start: startOfWeek(date, { weekStartsOn: 0 }),
      end: endOfWeek(date, { weekStartsOn: 0 }),
    });
    gridCols = "grid-cols-[80px_repeat(7,1fr)]";
  } else {
    days = eachDayOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    });
    gridCols = "grid-cols-7"; // وضع الشهر بيكون 7 أعمدة فقط
  }

  // الساعات من 8 صباحاً لـ 7 مساءً
  const hours = Array.from({ length: 12 }, (_, i) => i + 8);

  return (
    <div className="bg-white w-full">
      <div className={`grid ${gridCols}`}>
        {/* هيدر الأيام: يظهر فوق الساعات في وضع الأسبوع واليوم */}
        {mode !== "month" && <div className="h-24" />}

        {days.map((day) => (
          <div
            key={day.toString()}
            className="h-24 flex flex-col items-center justify-center gap-1 border-b border-gray-100"
          >
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">
              {format(day, "EEE")}
            </span>
            <span
              className={`text-xl font-bold ${
                isToday(day) ? "text-blue-600" : "text-gray-900"
              }`}
            >
              {format(day, "d")}
            </span>
          </div>
        ))}

        {/* عرض الساعات (يظهر فقط في اليوم والأسبوع) */}
        {mode !== "month" &&
          hours.map((hour) => (
            <div key={hour} className="contents">
              <div className="h-32 text-[10px] font-bold text-gray-400 text-right pr-4 pt-2">
                {hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 AM`}
              </div>

              {days.map((day) => (
                <div
                  key={day.toString()}
                  className={`h-32 relative flex flex-col p-1 transition-colors ${
                    isToday(day) ? "bg-blue-50/50" : ""
                  }`}
                >
                  {events
                    .filter(
                      (e) =>
                        isSameDay(e.start, day) && e.start.getHours() === hour,
                    )
                    .map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                </div>
              ))}
            </div>
          ))}

        {/* عرض وضع الشهر (خلايا فقط بدون ساعات) */}
        {mode === "month" &&
          days.map((day) => (
            <div
              key={day.toString()}
              className="h-32 border border-gray-50 p-1 bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="text-xs font-bold text-gray-400">
                {format(day, "d")}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
