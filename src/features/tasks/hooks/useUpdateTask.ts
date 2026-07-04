import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTask } from "../services/UpdateTask"
import { toast } from "react-toastify"


export const useUpdateTask=()=>{

    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: updateTask,
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ['tasks']})
            toast.success("Task Updated Successfully",{position: "top-center"})
        },
        onError: (error:any)=>{ 
            toast.error(error.message,{position: "top-center"})
        }

    })
}