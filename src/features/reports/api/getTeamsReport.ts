import { axiosInstance } from "@/constants/AxiosInstance";
import axios from "axios";

export const getTeamsReport= async ()=>{
    try{
        const {data}= await axiosInstance.get(`/reports/teams`)
        console.log(data)
        return data;
    }catch(error){
        console.error("Error fetching teams report:", error);
        throw error
    }
}