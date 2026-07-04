import { useCalendarContext } from "../../calendar-context";
import { format, addHours, startOfDay, isSameDay } from "date-fns";
import CalendarEventComponent from "../../calendar-event";

export default function CalendarBodyDayContent({ date }: { date: Date }) {
  const { events, setSelectedEvent, setManageEventDialogOpen } =
    useCalendarContext();

  // إنشاء مصفوفة من 24 ساعة
  const hours = Array.from({ length: 24 }, (_, i) =>
    addHours(startOfDay(date), i),
  );

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setManageEventDialogOpen(true);
  };

  return (
    <div className="flex-1 overflow-y-auto">
      {hours.map((hour) => {
        const hourEvents = events.filter(
          (e) =>
            isSameDay(e.start, hour) && e.start.getHours() === hour.getHours(),
        );

        return (
          <div key={hour.toString()} className="h-20 border-b flex relative">
            <div className="w-16 text-xs text-gray-500 p-2 border-r text-right">
              {format(hour, "HH:mm")}
            </div>
            <div className="flex-1 p-1 space-y-1">
              {hourEvents.map((event) => (
                <div key={event.id} onClick={() => handleEventClick(event)}>
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
