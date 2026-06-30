import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FieldGroup} from "@/components/ui/field"
import { useState, type ReactNode } from "react"
import NameInput from "./dialog/NameInput"
// import FileInput from "./dialog/FileInput"
import { DateInput } from "./dialog/DateInput"
// import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
// import AddInput from "./dialog/AddInput"
import AvatarGroups from "./AvatarGroups"
import { Controller, useForm } from "react-hook-form"
import { taskSchema } from "../schema/schema"
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod"
import { Input } from "@/components/ui/input"
import { useCreateTask } from "../hooks/useCreateTask"
import { PriorityToggleGroup } from "./dialog/PriorityGroup"
import { StatusToggleGroup } from "./dialog/StatusGroup"

export function TasksDialog({open, setOpen}:{open: boolean, setOpen:(open: boolean) => void}) {
    
    type IFormData = z.infer<typeof taskSchema>;

    const {register, handleSubmit, control, formState: { errors },} = useForm<IFormData>({
        resolver: zodResolver(taskSchema),
    })

    const newTaskMutation= useCreateTask()
    
    const onSubmit = (data: IFormData) =>{ 
        console.log(data)
        setOpen(false)
        newTaskMutation.mutate({project_id: 1, ...data})
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* <DialogTrigger asChild >
                <Button variant="brand">Open Dialog</Button>
                {children}
            </DialogTrigger> */}

            <DialogContent className="sm:max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <DialogHeader>
                        <DialogTitle>Create Task</DialogTitle>
                    </DialogHeader>

                    <FieldGroup>
                        <div>
                            {/* <input {...register("name")} placeholder="Task Name" /> */}
                            <NameInput {...register("title")} className="bg-blue-300"/>
                            <p className="text-sm text-destructive">{errors.title?.message}</p>
                        </div>
                        <div>
                            <Input {...register("description")} className="bg-blue-300" placeholder="Task Description"/>
                            <p className="text-sm text-destructive">{errors.description?.message}</p>
                        </div>
                        <div className="flex gap-5">
                            <div>
                                {/* <DateInput {...register("startDate")} placeholder="Start Date" /> */}
                                <Controller name="start_date" control={control} render={({ field }) => (
                                        <DateInput {...register("start_date")} onChange={field.onChange} placeholder="Start Date"/>
                                    )}
                                />
                                <p className="text-sm text-destructive">{errors.start_date?.message}</p>
                            </div>
                            <div>
                                {/* <DateInput {...register("endDate")} onChange={field.onChange} placeholder="End Date" /> */}
                                <Controller name="due_date" control={control} render={({ field }) => (
                                        <DateInput {...register("due_date")} onChange={field.onChange} placeholder="End Date" />
                                    )}
                                />
                                <p className="text-sm text-destructive ">{errors.due_date?.message}</p>
                            </div>
                        </div>
                        {/* <div>
                            <AddInput {...register("guests")} />
                            <p className="text-sm text-destructive">{errors.guests?.message}</p>
                        </div> */}

                        {/* <AvatarGroups className="-translate-y-1"/> */}

                        {/* <FileInput {...register("file")} /> */}

                        <div>
                            <Controller
                                name="priority"
                                control={control}
                                render={({ field }) => (
                                    <PriorityToggleGroup
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    />
                                )}
                            />
                            <p className="text-sm text-destructive">{errors.priority?.message}</p>
                        </div>

                        <div>
                            <Controller
                                name="status"
                                control={control}
                                render={({ field }) => (
                                    <StatusToggleGroup
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    />
                                )}
                            />
                            <p className="text-sm text-destructive">{errors.status?.message}</p>
                        </div>

                        
                        <Button type="submit" className="bg-brand w-full py-5 rounded-2xl cursor-pointer">Create Task</Button>

                    </FieldGroup>

                </form>
            </DialogContent>
        </Dialog>
    )
}

