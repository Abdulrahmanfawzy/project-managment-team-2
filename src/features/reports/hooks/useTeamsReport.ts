import { useQuery } from "@tanstack/react-query"
import { getTeamsReport } from "../api/getTeamsReport"

export const useTeamsReport = () => {
    return useQuery({
        queryKey: ["teamsReport"],
        queryFn: getTeamsReport,
    })
}