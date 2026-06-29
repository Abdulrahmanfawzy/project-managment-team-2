"use client";

import { useCalendarContext } from "../../calendar-context";;
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isSameMonth,
  isSameDay,
} from "date-fns";
import CalendarEventComponent from "../../calendar-event";
import type { CalendarEvent } from "../../calendar-types";
import React from "react";

export default function CalendarBodyMonth() {
  const { date, events, setSelectedEvent, setManageEventDialogOpen } =
    useCalendarContext();

  const start = startOfMonth(date);
  const end = endOfMonth(date);
  const days = eachDayOfInterval({ start, end });

  const handleEventClick = (e: React.MouseEvent, event: CalendarEvent) => {
    e.stopPropagation();
    setSelectedEvent(event);
    setManageEventDialogOpen(true);
  };

  return (
    <div className="grid grid-cols-7 h-full border-l border-t">
      {days.map((day) => {
        // الحماية هنا: لو events طلعت undefined، نستخدم مصفوفة فارغة
        const dayEvents = (events ?? []).filter((e) => isSameDay(e.start, day));

        return (
          <div
            key={day.toString()}
            className="h-32 border-b border-r p-2 overflow-y-auto"
          >
            <div
              className={`text-sm ${
                isSameMonth(day, date) ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {format(day, "d")}
            </div>
            <div className="space-y-1 mt-1">
              {dayEvents.map((event) => (
                <div
                  key={event.id}
                  onClick={(e) => handleEventClick(e, event)}
                  className="cursor-pointer"
                >
                  <CalendarEventComponent event={event} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
