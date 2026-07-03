import { useQuery } from "@tanstack/react-query"
import { getProjectsReport } from "../api/getProjectsReport"

export const useProjectsReport = () => {
    return useQuery({
        queryKey: ["projectsReport"],
        queryFn: getProjectsReport,
    })
}