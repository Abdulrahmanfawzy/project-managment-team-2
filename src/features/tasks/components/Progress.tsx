import { Field, FieldLabel } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"

export function ProgressWithLabel({value}:{value:number}) {
    return (
        <Field className="w-full max-w-sm h-9">
            <FieldLabel htmlFor="progress-upload">
                <span>progress</span>
                <span className="ml-auto">{value}%</span>
            </FieldLabel>
            <Progress value={value} id="progress-upload" className="bg-gray-200 h-2"/>
        </Field>
    )
}
