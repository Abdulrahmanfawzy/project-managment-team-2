import { useQuery } from "@tanstack/react-query"
import { getTasksReport } from "../api/getTasksReport"

export const useTasksReport = () => {
    return useQuery({
        queryKey: ["tasksReport"],
        queryFn: getTasksReport,
    })
}