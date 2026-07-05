import { useCalendarContext } from "../calendar-context";
import { format } from "date-fns"; // تأكد من تثبيت مكتبة date-fns

export default function CalendarHeaderDate() {
  const { date } = useCalendarContext();

  return (
    <div className="flex items-center gap-2">
      <h2 className="text-xl font-bold">{format(date, "MMMM yyyy")}</h2>
    </div>
  );
}
