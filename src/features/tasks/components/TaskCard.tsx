import { CalendarDays, MessageSquareText } from "lucide-react";
import Avatars from "./AvatarGroups";
import { ProgressWithLabel } from "./Progress";
import type { Ttask } from "../types/types";



function TaskCard({title, description, priority, progress, start_date}: Ttask) {
    return (
        <div className="bg-gray-100 rounded-2xl py-4 px-3 shadow-md w-full flex flex-col justify-between  gap-3.5 h-55">
            <div className="flex justify-between items-center">
                <h3 className="text-black">{title}</h3>
                <span className={`${priority=='high'?'bg-red-500': priority=='medium'?'bg-yellow-500':'bg-green-500'} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                    {priority}
                </span>
            </div>

            <p className="text-sm">{description}</p>

            {progress ?<ProgressWithLabel value={progress}/> : <p></p>}

            <div className="flex justify-between items-center mt-5">
                <Avatars/>
                <div className="flex gap-3">
                    <span className="flex items-center text-sm gap-2">8 <MessageSquareText className="h-4 w-4" /></span>
                    {/* <span className="flex items-center text-sm gap-2">Dec 12 <CalendarDays className="h-4 w-4" /></span> */}
                    <span className="flex items-center text-sm gap-2">{start_date}<CalendarDays className="h-4 w-4" /></span>
                </div>
            </div>
        </div>
    )
}

export default TaskCard