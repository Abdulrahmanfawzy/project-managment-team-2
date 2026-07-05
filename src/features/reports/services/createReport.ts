import { axiosInstance } from "@/constants/AxiosInstance";
import type { TReport } from "../types/report";

const createReport = async (reportData: TReport) => {
    try {
        const { data } = await axiosInstance.post(`/reports`, reportData); 
        console.log(data);
        return data;
    }
    catch (error) {
        console.error("Error creating report:", error);
        throw error;
    }
}
export default createReport;