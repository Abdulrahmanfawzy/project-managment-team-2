import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function StatusToggleGroup({value, onValueChange}:{value: string, onValueChange: (value: string) => void}) {
    return (
        <>
            <ToggleGroup
            type="single"
            size="sm"
            defaultValue="top"
            variant="outline"
            spacing={2}
            value={value}
            onValueChange={onValueChange}
            >
                <ToggleGroupItem value="pending" aria-label="Toggle pending"  className="data-[state=on]:bg-yellow-300">
                    Pending
                </ToggleGroupItem>
                <ToggleGroupItem value="in_progress" aria-label="Toggle in progress" className="data-[state=on]:bg-blue-300">
                    In Progress
                </ToggleGroupItem>
                <ToggleGroupItem value="in_review" aria-label="Toggle in review" className="data-[state=on]:bg-purple-300">
                    In Review
                </ToggleGroupItem>
                <ToggleGroupItem value="completed" aria-label="Toggle completed" className="data-[state=on]:bg-green-300">
                    Completed
                </ToggleGroupItem>
            </ToggleGroup>

            {value=="in_progress" &&  
                <InputGroup className="mt-2">
                    <InputGroupInput placeholder="Progress" />
                    <InputGroupAddon align="inline-end">
                    <InputGroupText>%</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            }
        </>
    )
}
