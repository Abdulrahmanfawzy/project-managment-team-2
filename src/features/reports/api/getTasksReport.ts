import { axiosInstance } from "@/constants/AxiosInstance";
import axios from "axios";

export const getTasksReport= async ()=>{
    try{
        const {data}= await axiosInstance.get(`/reports/tasks`)
        console.log(data)
        return data;
    }catch(error){
        console.error("Error fetching tasks report:", error);
        throw error
    }
}