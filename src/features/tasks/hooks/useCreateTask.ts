import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTask } from "../services/CreateTask"
import { toast } from "react-toastify"

export const useCreateTask= ()=>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createTask,
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ['tasks']})
            toast.success("Task Created Successfully",{position: "top-center"})
        },
        onError: (error:any)=>{
            toast.error(error.response.data.message,{position: "top-center"})
        }
    })
}