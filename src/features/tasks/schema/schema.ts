import * as z from "zod"; 

export const taskSchema = z.object({ 
    name: z.string().min(3, "Task name must be at least 3 characters long"),
    // startDate: z.string().min(1, "Start date is required"),
    // endDate: z.string().min(1, "End date is required"),
    startDate: z.date('Start date is required'),
    endDate: z.date('End date is required'),
    // guests: z.string().min(3, "Guest name must be at least 3 characters long").optional(),
    guests: z.string().refine((val) => val === "" || val.length >= 3,"Guest name must be at least 3 characters long").optional(),
    // file: z.file().optional(),
    file: z.any().optional(),
});