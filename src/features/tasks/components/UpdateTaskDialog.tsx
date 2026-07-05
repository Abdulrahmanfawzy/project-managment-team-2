import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"

import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import  { UpdateTaskSchema}  from "../schema/schema"
import { useTasksQuery } from "../hooks/useTasksQuery"
import { useUpdateTask } from "../hooks/useUpdateTask"
import { PriorityToggleGroup } from "./dialog/PriorityGroup"
import { StatusToggleGroup } from "./dialog/StatusGroup"


export function BugReportForm({open, setOpen, id,}:{open: boolean;setOpen: (open: boolean) => void;id: number;}) {

    const {data}= useTasksQuery()

    const task= data?.data.find((task) => task.id === id)
    
    const form = useForm<z.infer<typeof UpdateTaskSchema>>({
        resolver: zodResolver(UpdateTaskSchema),
        defaultValues: {
            title: task?.title,
            description: task?.description,
            priority: task?.priority as "low" | "medium" | "high" | "critical",
            status: task?.status as "pending" | "in_progress" | "in_review" | "completed",
        },
    })

    const updateMutaion =useUpdateTask()


    function onSubmit(data: {}) {
        console.log(data)
        updateMutaion.mutate(id,data)
        setOpen(false)
    }

    return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit Task</DialogTitle>
            </DialogHeader>
            <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                    <Controller
                    name="title"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                        <Input
                            {...field}
                            id="form-rhf-demo-title"
                            aria-invalid={fieldState.invalid}
                            placeholder="Title"
                            autoComplete="off"
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                        </Field>
                    )}
                    />

                    <Controller
                    name="description"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                        <InputGroup>
                            <InputGroupTextarea
                            {...field}
                            id="form-rhf-demo-description"
                            placeholder="Description"
                            rows={6}
                            className="min-h-24 resize-none"
                            aria-invalid={fieldState.invalid}
                            />
                            <InputGroupAddon align="block-end">
                            <InputGroupText className="tabular-nums">
                                {field.value.length}/100 characters
                            </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                        </Field>
                    )}
                    />

                    <Controller
                    name="priority"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                        <PriorityToggleGroup
                            {...field}
                            // id="form-rhf-demo-priority"
                            aria-invalid={fieldState.invalid}
                            value={field.value}
                            onValueChange={field.onChange}
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                        </Field>
                    )}
                    />

                    <Controller
                    name="status"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                        <StatusToggleGroup
                            {...field}
                            // id="form-rhf-demo-priority"
                            aria-invalid={fieldState.invalid}
                            value={field.value}
                            onValueChange={field.onChange}
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                        </Field>
                    )}
                    />

                </FieldGroup>
            </form>
                    <Field orientation="horizontal">
                        <Button type="button" variant="outline" onClick={() => form.reset()}>
                            Reset
                        </Button>
                        <Button type="submit" form="form-rhf-demo">
                            Submit
                        </Button>
                    </Field>
        </DialogContent>
    </Dialog>
    )
}
