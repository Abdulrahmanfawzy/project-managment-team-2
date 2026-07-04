import { useState } from "react";
import { CalendarContext } from "./calendar-context";
import {type CalendarEvent, type CalendarProps , type  Mode} from "./calendar-types";

export  function CalendarProvider({
  children,
  events,
  setEvents,
}: { children: React.ReactNode } & CalendarProps) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<Mode>("month");
  const [newEventDialogOpen, setNewEventDialogOpen] = useState(false);
  const [manageEventDialogOpen, setManageEventDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null,
  );

  return (
    <CalendarContext.Provider
      value={{
        events,
        setEvents,
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
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
