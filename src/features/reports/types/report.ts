export type TReport= {
    report_type : "project" | "meeting_summary" | "worker_performance" | "tasks" | "kpfs",
    note : string,
    start_date : string,
    end_date : string
}