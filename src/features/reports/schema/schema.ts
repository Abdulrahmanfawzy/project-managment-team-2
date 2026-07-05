import * as z from "zod"

export const reportSchema = z.object({
    type: z.enum(["project_progress", "meeting_summary", "worker_performance", "tasks", "kpfs"], {
        message: "Select a valid report type"
    }),
    note: z
        .string()
        .min(3, "Note must be at least 3 characters.")
        .max(30, "Note must be at most 30 characters."),
    start_date: z.date("Start date is required"),
    due_date: z.date("End date is required"),
})