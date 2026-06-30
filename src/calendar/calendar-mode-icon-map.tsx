// src/calendar/calendar-mode-icon-map.tsx

import React from "react";
import { type Mode } from "./calendar-types";
import { Calendar, CalendarDays, CalendarRange } from "lucide-react";
export const modeIconMap: Record<Mode, JSX.Element> = {
  day: <Calendar />,
  week: <CalendarDays />,
  month: <CalendarRange />,
};
