import { axiosInstance } from "@/constants/AxiosInstance";
import axios from "axios";
import { toast } from "react-toastify";



export const deleteTask= async(id:number)=>{
    const {data}= await axiosInstance.delete(`/tasks/${id}`) 
    console.log(data)
    toast.success("Task deleted successfully", {position: "top-center"})
}