import { useMutation } from "@tanstack/react-query"
import createReport from "../services/createReport"
import { toast } from "react-toastify"

const useCreateReport= ()=>{
    return useMutation({
        mutationFn: createReport,
        onSuccess: ()=>{
            toast.success("Report Created Successfully",{position: "top-center"})
        }
    })
}
export default useCreateReport