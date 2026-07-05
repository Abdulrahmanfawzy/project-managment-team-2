import CalendarBodyDayContent from "./calendar-body-day-content";
import CalendarBodyMarginDayMargin from "./calendar-body-margin-day-margin";

export default function CalendarBodyDay() {
  return (
    <div className="flex h-full">
      <CalendarBodyMarginDayMargin />
      <CalendarBodyDayContent date={new Date()} />
    </div>
  );
}
