// const tasksList=[
//         [
//             {
//                 status: "To-do",
//                 title: "Creat Wireframes",
//                 description: "Initial layout and structure for mani page",
//                 priority: "High",
//                 bgColor:"bg-white",
//                 progress:62
//             },
//             {
//                 title: "User Research Analysis",
//                 description: "Create Interactive Prototype for Chat screen", 
//                 priority: "Medium",
//             },
//             {
//                 title: "Design System Updates",
//                 description: "Update component library with new brand color",
//                 priority: "Low",
//             }
//         ],
//         [
//             {
//                 status: "In Progress",
//                 title: "Chat Screen",
//                 description: "Create Interactive Prototype for Chat screen", 
//                 priority: "Medium",
//                 bgColor:"bg-blue-100"
//             },
//             {
//                 title: "Create Miro interaction",
//                 description: "Initial layout and structure for mani page",
//                 priority: "Low",
//                 progress: 30
//             },
//         ],
//         [
//             {
//                 status: "In Review",
//                 title: "Write Documentation",
//                 description: "Create Interactive Prototype for Chat screen",
//                 priority: "Low",
//                 bgColor:"bg-purple-100"
//             },
//             {
//                 title: "Creat Wireframes",
//                 description: "Initial layout and structure for mani page",
//                 priority: "High",
//             },
//         ],
//         [
//             {
//                 status: "Completed",
//                 title: "Creat Wireframes",
//                 description: "Create wireframes for the new feature",
//                 priority: "High",
//                 bgColor:"bg-green-100",
//                 progress: 90,
//             },
//         ],
//     ]
// export default tasksList

import { token } from "@/constants/token";
import axios from "axios";
import type { Ttasks } from "../types/types";

const base_url = import.meta.env.VITE_API_URL;

export const getAllTasks= async()=>{
    try {
        const {data}:{data:Ttasks}= await axios.get(`${base_url}/tasks`, {headers:{Authorization: `Bearer ${token}`}})
        return data
    } catch (error) {
        throw error
    }
} 