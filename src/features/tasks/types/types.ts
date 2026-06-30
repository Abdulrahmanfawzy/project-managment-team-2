
export type Ttask = {
  // title: string;
  // description: string;
  // // priority: "High" | "Medium" | "Low";
  // priority: string;
  // bgColor?: string;
  // progress?: number;
  // status?:string;
    id: number;
    project_id?: number;
    name?: string;
    title: string;
    description: string;
    start_date: string;
    due_date?: string | null;
    progress?: number;
    status?: string;
    priority?: string;
    project?: {
        id: number;
        name: string;
    };
    assignees?: [
        {
        id: number;
        name: string;
        email: string;
        },
    ];
    created_at?: string;
    updated_at?: string;
};

export type Ttasks = {
    data: Ttask[];

    links: {
        first: string;
        last: string;
        prev?: number;
        next?: number;
    };

    meta: {
        current_page: number;
        from: number;
        last_page: number;
        path: string;
        per_page: number;
        to: number;
        total: number;
    };
};

export type TnewTask = {
    project_id: number;
    title: string;
    description: string;
    start_date: Date;
    status: string;
    due_date?: Date | null;
    priority?: string;
    guests?: string;
    porogress?: number;
    // file?: any;
}