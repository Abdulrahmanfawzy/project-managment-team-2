import { CalendarIcon } from "lucide-react"

// import { Calendar } from "@/components/ui/calendar"
import { Field, FieldLabel } from "@/components/ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group"

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

function formatDate(date: Date | undefined) {
    if (!date) {
        return ""
    }

    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    })
}

function isValidDate(date: Date | undefined) {
    if (!date) {
        return false
    }
    return !isNaN(date.getTime())
}

export function DateInput({placeholder, onChange}: {placeholder?: string; onChange?: (date: Date | undefined) => void}) {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState<Date | undefined>()
    const [month, setMonth] = useState<Date | undefined>(date)
    const [value, setValue] = useState(formatDate(date))

    return (
        <Field className="mx-auto">
        {/* <FieldLabel htmlFor="date-required">Subscription Date</FieldLabel> */}
        <InputGroup>
            <InputGroupInput className="px-3 py-5"
            id="date-required"
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
                const date = new Date(e.target.value)
                // setValue(e.target.value)
                if (isValidDate(date)) {
                setDate(date)
                setMonth(date)
                }
            }}
            onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                e.preventDefault()
                setOpen(true)
                }
            }}
            />
            <InputGroupAddon align="inline-end">
            <Popover open={open} onOpenChange={setOpen} >
                <PopoverTrigger asChild>
                <InputGroupButton
                    id="date-picker"
                    variant="ghost"
                    size="icon-xs"
                    aria-label="Select date"
                    className=" cursor-pointer"
                >
                    <CalendarIcon />
                    <span className="sr-only">Select date</span>
                </InputGroupButton>
                </PopoverTrigger>
                <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="end"
                alignOffset={-8}
                sideOffset={10}
                >
                <Calendar
                    mode="single"
                    selected={date}
                    month={month}
                    onMonthChange={setMonth}
                    onSelect={(date) => {
                    setDate(date)
                    setValue(formatDate(date))
                    setOpen(false)
                    onChange?.(date);
                    // field.onChange(date);
                    }}
                />
                </PopoverContent>
            </Popover>
            </InputGroupAddon>
        </InputGroup>
        </Field>
    )
}
