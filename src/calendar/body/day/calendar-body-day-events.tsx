import { useCalendarContext } from "../../calendar-context";
import CalendarEventComponent from "../../calendar-event";

export default function CalendarBodyDayEvents() {
  const { events, date } = useCalendarContext();
  const dayEvents = events.filter(
    (e) => e.start.toDateString() === date.toDateString(),
  );

  return (
    <div className="p-2 space-y-2">
      {dayEvents.map((event) => (
        <CalendarEventComponent key={event.id} event={event} />
      ))}
    </div>
  );
}
