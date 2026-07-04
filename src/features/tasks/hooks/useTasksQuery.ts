import { getAllTasks } from "../api/tasks";
import {useQuery} from '@tanstack/react-query'

export function useTasksQuery(){
    return useQuery({
        queryKey: ['tasks'],
        queryFn: getAllTasks
    })
}