import { cn } from "@/lib/utils";
import { colorOptions } from "./calendar-tailwind-classes";
import type { CalendarEvent as CalendarEventType } from "./calendar-types";

interface CalendarEventProps {
  event: CalendarEventType;
}

export default function CalendarEvent({ event }: CalendarEventProps) {
  // 1. البحث عن اللون، مع وضع قيمة افتراضية (fallback) لو اللون غير موجود
  const colorData = colorOptions.find((c) => c.value === event.color);

  // 2. استخدام "Optional Chaining" بأمان مع لون افتراضي (مثلاً رمادي)
  const colorClass = colorData?.class?.base ?? "bg-gray-500";

  return <div className={cn("size-2 rounded-full", colorClass)} />;
}
