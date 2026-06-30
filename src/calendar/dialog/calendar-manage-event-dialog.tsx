import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCalendarContext } from "../calendar-context";

export default function CalendarManageEventDialog() {
  const {
    manageEventDialogOpen,
    setManageEventDialogOpen,
    selectedEvent,
    events,
    setEvents,
  } = useCalendarContext();

  const handleDelete = () => {
    if (selectedEvent) {
      setEvents(events.filter((e) => e.id !== selectedEvent.id));
      setManageEventDialogOpen(false);
    }
  };

  return (
    <Dialog
      open={manageEventDialogOpen}
      onOpenChange={setManageEventDialogOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manage Event: {selectedEvent?.title}</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <p>Start: {selectedEvent?.start.toLocaleString()}</p>
          <div className="mt-4 flex gap-2">
            <Button variant="destructive" onClick={handleDelete}>
              Delete Event
            </Button>
            <Button
              variant="outline"
              onClick={() => setManageEventDialogOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
