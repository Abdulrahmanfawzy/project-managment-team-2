import { Dispatch, SetStateAction } from "react";

// 1. تعريف الـ Mode والـ Modes المتاحة
export type Mode = "day" | "week" | "month";
export const calendarModes: Mode[] = ["day", "week", "month"];

// 2. تعريف الـ Event
export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  color?: string;
}

// 3. تعريف الـ Context
export interface CalendarContextType {
  events: CalendarEvent[];
  setEvents: Dispatch<SetStateAction<CalendarEvent[]>>;

  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;

  mode: Mode;
  setMode: Dispatch<SetStateAction<Mode>>;

  isLoading: boolean;

  newEventDialogOpen: boolean;
  setNewEventDialogOpen: Dispatch<SetStateAction<boolean>>;

  manageEventDialogOpen: boolean;
  setManageEventDialogOpen: Dispatch<SetStateAction<boolean>>;

  selectedEvent: CalendarEvent | null;
  setSelectedEvent: Dispatch<SetStateAction<CalendarEvent | null>>;

  calendarIconIsToday: boolean;

  navigate: (direction: "prev" | "next") => void;
}

// 4. تعريف الـ Props (لو بتستخدمها في مكونات تانية)
export interface CalendarProps {
  events: CalendarEvent[];
  setEvents: Dispatch<SetStateAction<CalendarEvent[]>>;
  mode: Mode;
  setMode: Dispatch<SetStateAction<Mode>>;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  calendarIconIsToday?: boolean;
}
