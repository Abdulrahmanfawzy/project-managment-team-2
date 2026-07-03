"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { addWeeks, addMonths, subWeeks, subMonths } from "date-fns";
import {
  type CalendarContextType,
  type CalendarEvent,
  type Mode,
} from "./calendar-types";

// Mock Data
const MOCK_EVENTS: CalendarEvent[] = [
  {
    id: "1",
    title: "Design Review",
    start: new Date(2026, 6, 28, 9, 0),
    end: new Date(2026, 6, 28, 9, 30),
  },
  {
    id: "2",
    title: "Alignment Meeting",
    start: new Date(2026, 6, 29, 13, 0),
    end: new Date(2026, 6, 29, 13, 30),
  },
];

export const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined,
);

export function CalendarProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<Mode>("week");
  const [newEventDialogOpen, setNewEventDialogOpen] = useState(false);
  const [manageEventDialogOpen, setManageEventDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null,
  );

  // تحميل البيانات (ممكن تستبدل الـ Timeout بـ fetch للـ API)
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setEvents(MOCK_EVENTS);
      setIsLoading(false);
    }, 500);
  }, []);

  const navigate = (direction: "prev" | "next") => {
    setDate((prev) => {
      if (mode === "week") {
        return direction === "next" ? addWeeks(prev, 1) : subWeeks(prev, 1);
      } else {
        return direction === "next" ? addMonths(prev, 1) : subMonths(prev, 1);
      }
    });
  };

  return (
    <CalendarContext.Provider
      value={{
        events,
        setEvents,
        isLoading,
        date,
        setDate,
        mode,
        setMode,
        newEventDialogOpen,
        setNewEventDialogOpen,
        manageEventDialogOpen,
        setManageEventDialogOpen,
        selectedEvent,
        setSelectedEvent,
        navigate,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context)
    throw new Error("useCalendarContext must be used within CalendarProvider");
  return context;
};
