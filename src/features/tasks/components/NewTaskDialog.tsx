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
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { useState, type ReactNode } from "react"
import NameInput from "./dialog/NameInput"
import FileInput from "./dialog/FileInput"
import { DateInput } from "./dialog/DateInput"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { Plus } from "lucide-react"
import AddInput from "./dialog/AddInput"
import AvatarGroups from "./AvatarGroups"
import { Controller, useForm } from "react-hook-form"
import { taskSchema } from "../schema/schema"
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod"
import { toast } from "react-toastify"
import { Input } from "@/components/ui/input"

export function TasksDialog({open, setOpen}:{open: boolean, setOpen:(open: boolean) => void}) {
    
    type IFormData = z.infer<typeof taskSchema>;

    const {register, handleSubmit, control, formState: { errors },} = useForm<IFormData>({
        resolver: zodResolver(taskSchema),
    })

    const onSubmit = (data: IFormData) =>{ 
        console.log(data)
        setOpen(false)
        toast.success("Task Created Successfully",{position: "top-center"})
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
                            <NameInput {...register("name")} className="bg-blue-300"/>
                            <p className="text-sm text-destructive">{errors.name?.message}</p>
                        </div>
                        <div>
                            <Input {...register("description")} className="bg-blue-300" placeholder="Task Description"/>
                            <p className="text-sm text-destructive">{errors.description?.message}</p>
                        </div>
                        <div className="flex gap-5">
                            <div>
                                {/* <DateInput {...register("startDate")} placeholder="Start Date" /> */}
                                <Controller name="startDate" control={control} render={({ field }) => (
                                        <DateInput {...register("startDate")} onChange={field.onChange} placeholder="Start Date"/>
                                    )}
                                />
                                <p className="text-sm text-destructive">{errors.startDate?.message}</p>
                            </div>
                            <div>
                                {/* <DateInput {...register("endDate")} onChange={field.onChange} placeholder="End Date" /> */}
                                <Controller name="endDate" control={control} render={({ field }) => (
                                        <DateInput {...register("endDate")} onChange={field.onChange} placeholder="End Date" />
                                    )}
                                />
                                <p className="text-sm text-destructive ">{errors.endDate?.message}</p>
                            </div>
                        </div>
                        {/* <div>
                            <AddInput {...register("guests")} />
                            <p className="text-sm text-destructive">{errors.guests?.message}</p>
                        </div> */}

                        <AvatarGroups className="-translate-y-1"/>

                        <FileInput {...register("file")} />
                        
                        <Button type="submit" className="bg-brand w-full py-5 rounded-2xl cursor-pointer">Create Task</Button>

                    </FieldGroup>

                </form>
            </DialogContent>
        </Dialog>
    )
}

