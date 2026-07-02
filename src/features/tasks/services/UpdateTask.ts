import axios from "axios";
import type { TnewTask } from "../types/types";
import { token } from "@/constants/token";

const base_url = import.meta.env.VITE_API_URL;

export const updateTask= async(id:number, updatedData:{})=>{
    try {
        const {data}= await axios.put(`${base_url}/tasks/${id}`, updatedData, {headers:{Authorization:`Bearer ${token}`}})
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error updating task:", error);
        throw error
    }
}