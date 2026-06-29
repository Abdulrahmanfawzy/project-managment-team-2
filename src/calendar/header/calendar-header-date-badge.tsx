import { useCalendarContext } from "../calendar-context";
import { format } from "date-fns";

export default function CalendarHeaderDateBadge() {
  const { date } = useCalendarContext();
  return (
    <div className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">
      {format(date, "dd MMM")}
    </div>
  );
}
