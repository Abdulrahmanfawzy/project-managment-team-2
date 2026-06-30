import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useCalendarContext } from "../calendar-context";
import { modeIconMap } from "../calendar-mode-icon-map";
import { type Mode } from "../calendar-types";

export default function CalendarHeaderActionsMode() {
  const { mode, setMode } = useCalendarContext();
  return (
    <ToggleGroup
      type="single"
      value={mode}
      onValueChange={(v) => v && setMode(v as Mode)}
    >
      <ToggleGroupItem value="day">{modeIconMap.day}</ToggleGroupItem>
      <ToggleGroupItem value="week">{modeIconMap.week}</ToggleGroupItem>
      <ToggleGroupItem value="month">{modeIconMap.month}</ToggleGroupItem>
    </ToggleGroup>
  );
}
