export interface ITask{
    title: string;
    description: string;
    // priority: "High" | "Medium" | "Low";
    priority: string;
    bgColor?: string;
    progress?: number;
    status?:string;
}