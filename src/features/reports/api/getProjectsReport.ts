import { axiosInstance } from "@/constants/AxiosInstance";

export const getProjectsReport= async ()=>{
    try{
        const {data}= await axiosInstance.get(`/reports/tasks`)
        console.log(data)
        return data;
    }catch(error){
        console.error("Error fetching projects report:", error);
        throw error
    }
}