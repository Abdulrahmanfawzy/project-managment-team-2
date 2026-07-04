import axios from "axios";
import type {  TnewTask } from "../types/types";
import { token } from "@/constants/token";

const base_url = import.meta.env.VITE_API_URL;

export const createTask= async (taskData:TnewTask)=>{
    try{
        const {data}= await axios.post(`${base_url}/tasks`, taskData, {headers:{Authorization:`Bearer ${token}`}})
        console.log(data)
    }catch(error){
        throw error
    }
}