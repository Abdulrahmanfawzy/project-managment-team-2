import { CalendarDays, MessageSquareText, SquarePen, Trash, Trash2, X } from "lucide-react";
import Avatars from "./AvatarGroups";
import { ProgressWithLabel } from "./Progress";
import type { Ttask } from "../types/types";
import { DeleteDialog } from "./AlertDialog";
import { useState } from "react";



function TaskCard({id, title, description, priority, progress, start_date}: Ttask) {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-gray-100 rounded-2xl p-3  shadow-md w-full flex flex-col justify-between h-55 relative">

            <DeleteDialog open={open} setOpen={setOpen} id={id}/>

            <div className="flex justify-between items-center">
                <h3 className="text-black">{title}</h3>
                <div className="flex gap-3">
                    <SquarePen className="h-4 w-4 text-blue-400  cursor-pointer" />
                    <Trash2 onClick={()=> setOpen(true)} className="h-4 w-4 text-red-400  cursor-pointer" />
                </div>
            </div>

            <span className={`${priority=='high'?'bg-red-500': priority=='medium'?'bg-yellow-500':'bg-green-500'} text-white text-xs font-bold px-2 py-1 rounded-full w-fit `}>
                {priority}
            </span>

            <p className="text-sm">{description}</p>

            {progress ?<ProgressWithLabel value={progress} /> : <p className="h-9"></p>}

            <div className="flex justify-between items-center">
                <Avatars/>
                <div className="flex gap-3">
                    <span className="flex items-center text-sm gap-2">8 <MessageSquareText className="h-4 w-4" /></span>
                    {/* <span className="flex items-center text-sm gap-2">Dec 12 <CalendarDays className="h-4 w-4" /></span> */}
                    <span className="flex items-center text-sm gap-2">{`${start_date}`}<CalendarDays className="h-4 w-4" /></span>
                </div>
            </div>
        </div>
    )
}

export default TaskCard