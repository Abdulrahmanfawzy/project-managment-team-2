import { Button } from "@/components/ui/button"
import { EllipsisVertical, Plus } from "lucide-react"
import TaskCard from "./TaskCard"
import { TasksDialog } from "./NewTaskDialog";
import { useState } from "react";
import type { Ttask, Ttasks } from "../types/types";

interface IProps{   
    title:string;
    bgColor?:string;
    tasks?: Ttask[]
}

function TasksGroup({title, bgColor, tasks}:IProps) {

    const [open, setOpen] = useState(false);

    return (
        <div className="rounded-2xl shadow-mainShadow flex flex-col gap-2">

            <div className={`${bgColor} flex justify-between items-center p-4 rounded-t-2xl`}>
                <p className="text-sm font-bold">{title}</p>
                <EllipsisVertical className="cursor-pointer w-4 h-4" />
            </div>

            <div className="p-4 flex flex-col gap-5">
                {/* <TasksDialog triggerBtn={
                    <Button className="rounded-3xl py-5 cursor-pointer border-2 border-brand border-dashed bg-relative w-full text-brand transition-all hover:bg-brand hover:text-white">Add Task <Plus/> </Button>
                }/> */}

                <TasksDialog open={open} setOpen={setOpen}/>

                <Button onClick={() => setOpen(true)} className="rounded-3xl py-5 cursor-pointer border-2 border-brand border-dashed bg-relative w-full text-brand transition-all hover:bg-brand hover:text-white">Add Task <Plus/> </Button>
                {/* </TasksDialog> */}

                {tasks?.map((task, index) => (
                    <TaskCard key={index} {...task} />
                )) || (
                    <p className="text-gray-500 text-sm">No tasks available</p>
                )}

                {/* <TaskCard title="Creat Wireframes" description="Create wireframes for the new feature" priority="High"/> */}
                {/* <TaskCard title="Creat Wireframes" description="Create wireframes for the new feature" priority="Medium"/> */}
                {/* <TaskCard title="Creat Wireframes" description="Create wireframes for the new feature" priority="Low"/> */}
            </div>

        </div>
    )
}

export default TasksGroup
