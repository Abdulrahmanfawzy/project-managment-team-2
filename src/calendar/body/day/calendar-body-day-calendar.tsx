import { useCalendarContext } from "../../calendar-context";
import { format } from "date-fns";

export default function CalendarBodyDayCalendar() {
  const { date } = useCalendarContext();
  return (
    <div className="flex flex-col items-center justify-center p-4 border-b">
      <span className="text-xs font-bold text-muted-foreground uppercase">
        {format(date, "MMM")}
      </span>
      <span className="text-2xl font-bold">{format(date, "d")}</span>
    </div>
  );
}
