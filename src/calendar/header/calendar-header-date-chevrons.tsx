import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCalendarContext } from "../calendar-context";
import { addMonths, subMonths, addDays, subDays } from "date-fns";

export default function CalendarHeaderDateChevrons() {
  const { date, setDate, mode } = useCalendarContext();

  const handlePrev = () =>
    setDate(mode === "month" ? subMonths(date, 1) : subDays(date, 1));
  const handleNext = () =>
    setDate(mode === "month" ? addMonths(date, 1) : addDays(date, 1));

  return (
    <div className="flex gap-1">
      <Button variant="ghost" size="icon" onClick={handlePrev}>
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={handleNext}>
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
