
import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import { SelectInput } from "./formInputs/SelectInput"
import { DateInput } from "@/features/tasks/components/dialog/DateInput"
import { reportSchema } from "../schema/schema"
import type z from "zod"
import { Astroid } from "lucide-react"
import useCreateReport from "../hooks/useCreateReport"


export function ReportForm() {

    const form = useForm<z.infer<typeof reportSchema>>({
        resolver: zodResolver(reportSchema),
        defaultValues: {
            // type: "",
            // note: "",
        },
    })

    const createReportMutation = useCreateReport()
    
    function onSubmit(data: z.infer<typeof reportSchema>) {
        console.log(data)
        createReportMutation.mutate(data)
    }

    return (
        <Card className="w-full h-fit">
        <CardHeader className="flex justify-between gap-2">
            <CardTitle>Submit a detailed report</CardTitle>
            <p className="text-lg font-bold text-brand relative">
                AI <Astroid className="text-brand h-2 w-3 absolute top-0 left-2.5" />
            </p>
        </CardHeader>
        <CardContent>
            <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                    <Controller
                    name="report_type"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <SelectInput  
                                {...field}
                                value={field.value}
                                onValueChange={field.onChange}
                                // id="form-rhf-demo-type"
                                aria-invalid={fieldState.invalid}
                            />
                        {fieldState.invalid ? (
                            <FieldError errors={[fieldState.error]} />
                        ) : <p></p>}
                        </Field>
                    )}
                    />

                    <Controller
                    name="note"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <Input
                                {...field}
                                id="form-rhf-demo-note"
                                placeholder="Add Note"
                                aria-invalid={fieldState.invalid}
                            />
                            {fieldState.invalid ? (
                                <FieldError errors={[fieldState.error]} />
                            ) : <p></p>}
                        </Field>
                    )}
                    />

                    <div className="flex gap-6">
                        <Controller
                        name="start_date"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <DateInput
                                    {...field}
                                    // id="form-rhf-demo-start_date"
                                    placeholder="Start Date"
                                    aria-invalid={fieldState.invalid}
                                />
                                {fieldState.invalid ? (
                                    <FieldError errors={[fieldState.error]} />
                                ) : <p></p>}
                            </Field>
                        )}
                        />

                        <Controller
                        name="end_date"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <DateInput
                                    {...field}
                                    // id="form-rhf-demo-start_date"
                                    placeholder="End Date"
                                    aria-invalid={fieldState.invalid}
                                />
                                {fieldState.invalid ? (
                                    <FieldError errors={[fieldState.error]} />
                                ) : <p></p>}
                            </Field>
                        )}
                        />
                    </div>

                </FieldGroup>
            </form>
        </CardContent>
        <CardFooter className="border-t-0 pt-0 bg-white">
            <Field orientation="horizontal" className="justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => form.reset()}>
                    Reset
                </Button>
                <Button type="submit" form="form-rhf-demo" className="bg-brand">
                    Submit
                </Button>
            </Field>
        </CardFooter>
        </Card>
    )
}
