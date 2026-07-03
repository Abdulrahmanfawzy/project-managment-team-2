import { CalendarProvider } from "./calendar-context";
import { CalendarHeader } from "./calendar-header";
import { CalendarBody } from "./body/calendar-body";
import { EventModal } from "./event-modal"; // تأكد من اسم الملف والمسار

export default function CalendarPage() {
  return (
    <CalendarProvider>
      <section className="mainContainer py-5">
        <CalendarHeader />
        <CalendarBody />

        {/* المودال لازم يكون هنا عشان يستقبل الـ state */}
        <EventModal />
      </section>
    </CalendarProvider>
  );
}
