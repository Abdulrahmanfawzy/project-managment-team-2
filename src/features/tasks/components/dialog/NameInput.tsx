import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { ClipboardCheck } from "lucide-react"
import type { InputHTMLAttributes } from "react";

function NameInput(props:InputHTMLAttributes<HTMLInputElement>) {
    return (
        <Field>
        <FieldLabel
            htmlFor="input-field-username"
            className="text-sm font-medium text-gray-500"
        >
            Task Name
        </FieldLabel>
        <div className="relative">
            <ClipboardCheck className="w-4 h-4 absolute left-3 top-2.5 text-gray-500" />
            <Input
            {...props}
            id="input-field-username"
            type="text"
            placeholder="Enter task name"
            className="px-8 py-4"
            />
        </div>
        </Field>
    );
}

export default NameInput;
