import { token } from "@/constants/token";
import axios from "axios";
import { toast } from "react-toastify";

const base_url = import.meta.env.VITE_API_URL;

export const deleteTask= async(id:number)=>{
    const {data}= await axios.delete(`${base_url}/tasks/${id}`, {headers:{Authorization:`Bearer ${token}`}}) 
    console.log(data)
    toast.success("Task deleted successfully", {position: "top-center"})
}