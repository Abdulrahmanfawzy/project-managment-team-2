import axios from "axios";
import type {  TnewTask } from "../types/types";
import { axiosInstance } from "@/constants/AxiosInstance";


export const createTask= async (taskData:TnewTask)=>{
    try{
        const {data}= await axiosInstance.post(`/tasks`, taskData)
        console.log(data)
    }catch(error){
        throw error
    }
}