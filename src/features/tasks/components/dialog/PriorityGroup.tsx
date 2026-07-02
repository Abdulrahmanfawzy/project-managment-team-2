import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function PriorityToggleGroup({value, onValueChange}:{value: string, onValueChange: (value: string) => void}) {
    return (
        <ToggleGroup
        type="single"
        size="sm"
        defaultValue="top"
        variant="outline"
        spacing={2}
        value={value}
        onValueChange={onValueChange}
        >
            <ToggleGroupItem value="low" aria-label="Toggle low" className="data-[state=on]:bg-green-300">
                Low
            </ToggleGroupItem>
            <ToggleGroupItem value="medium" aria-label="Toggle medium" className="data-[state=on]:bg-yellow-300">
                Medium
            </ToggleGroupItem>
            <ToggleGroupItem value="high" aria-label="Toggle high" className="data-[state=on]:bg-red-300">
                High
            </ToggleGroupItem>
            <ToggleGroupItem value="critical" aria-label="Toggle Critical" className="data-[state=on]:bg-purple-300">
                Critical
            </ToggleGroupItem>
        </ToggleGroup>
    )
}
