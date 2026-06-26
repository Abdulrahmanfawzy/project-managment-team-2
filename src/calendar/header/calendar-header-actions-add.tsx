import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useCalendarContext } from "../calendar-context";

export default function CalendarHeaderActionsAdd() {
  const { setNewEventDialogOpen } = useCalendarContext();

  return (
    <Button
      onClick={() => setNewEventDialogOpen(true)}
      className="flex items-center gap-2"
    >
      <Plus className="size-4" />
      <span>إضافة حدث</span>
    </Button>
  );
}
