import * as z from "zod"; 

export const taskSchema = z.object({ 
    title: z.string().min(3, "Task name must be at least 3 characters long"),
    description: z.string().min(5, "Task description must be at least 5 characters long"),
    // start_date: z.string('Start date is required'),
    start_date: z.date('Start date is required'),
    due_date: z.date('End date is required'),
    // guests: z.string().min(3, "Guest name must be at least 3 characters long").optional(),
    // guests: z.string().refine((val) => val === "" || val.length >= 3,"Guest name must be at least 3 characters long").optional(),
    // file: z.file().optional(),
    // file: z.any().optional(),
    // priority: z.string().min(1, "Priority is required"),
    priority: z.enum(["low", "medium", "high", "critical"], {
        message: "select a valid priority"
    }),
    // status: z.string().refine((val) => val === "" || ["pending", "in_progress", "in_review", "completed"].includes(val.toLowerCase()), {
    //     message: "Invalid status"
    // }),
    status: z.enum(["pending", "in_progress", "in_review", "completed"], {
        message: "select a valid status"
    }),
    progress: z.number().min(0, "Progress must be at least 0").max(100, "Progress cannot exceed 100").optional()
});
