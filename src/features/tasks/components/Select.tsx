import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface IProps{
    placeHolder: string;
    label: string;
    items: string[];
}

function SelectDemo({placeHolder, label, items}:IProps) {
    return (
        <Select>
            <SelectTrigger className="w-full max-w-25 py-4 rounded-xl">
                <SelectValue placeholder={placeHolder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectLabel>{label}</SelectLabel>
                {items.map((item, i) => (
                    <SelectItem value={item}>{item}</SelectItem>
                ))}

                {/* <SelectItem value="project2">Project 2</SelectItem>
                <SelectItem value="project3">Project 3</SelectItem> */}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SelectDemo