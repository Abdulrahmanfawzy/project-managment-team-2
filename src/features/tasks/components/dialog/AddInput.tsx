import { Field, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { Plus } from "lucide-react"
import type { InputHTMLAttributes } from "react";

function AddInput(props:InputHTMLAttributes<HTMLInputElement>) {
    return (
        <Field >
        <FieldLabel className="font-medium text-gray-500">Add Guests</FieldLabel>
        <InputGroup className="py-4">
            <InputGroupInput  {...props} placeholder="@Mohamed Hassan"/>
            <InputGroupAddon align="inline-end">
            <InputGroupButton
                variant="default"
                className="px-4 py-3 rounded-lg cursor-pointer"
            >
                Add <Plus />
            </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
        </Field>
    );
}

export default AddInput;
