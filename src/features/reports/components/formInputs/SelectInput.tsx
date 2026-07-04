import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectInput({value, onValueChange}: {value: string, onValueChange: (value: string) => void}) {
    return (
        <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Report Type" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Report Types</SelectLabel>
                <SelectItem value="project_progress">Project Progress</SelectItem>
                <SelectItem value="meeting_summary">Meeting Summary</SelectItem>
                <SelectItem value="worker_performance">Worker Performance</SelectItem>
                <SelectItem value="tasks">Tasks</SelectItem>
                <SelectItem value="kpfs">KPFS</SelectItem>
            </SelectGroup>
        </SelectContent>
        </Select>
    )
}
