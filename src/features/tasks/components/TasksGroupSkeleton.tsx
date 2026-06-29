import { Skeleton } from "@/components/ui/skeleton";

export default function TasksGroupSkeleton() {
    return (
        <div className="rounded-2xl shadow-mainShadow flex flex-col gap-2">

            {/* Header */}
            <div className="flex justify-between items-center p-4 rounded-t-2xl bg-gray-100">
                <Skeleton className="h-5 w-28" />
                <Skeleton className="h-5 w-5 rounded-full" />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-5">

                {/* Add Task Button */}
                <Skeleton className="h-12 w-full rounded-3xl" />

                {/* Task 1 */}
                <div className="bg-gray-100 rounded-2xl py-4 px-3 shadow-md flex flex-col gap-3.5 h-55">
                    <div className="flex justify-between items-center">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-2 w-full rounded-full" />
                        <Skeleton className="h-3 w-12" />
                    </div>

                    <div className="flex justify-between items-center mt-auto">
                        <div className="flex -space-x-2">
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                        </div>

                        <div className="flex gap-3">
                            <Skeleton className="h-5 w-10" />
                            <Skeleton className="h-5 w-20" />
                        </div>
                    </div>
                </div>

                {/* Task 2 */}
                <div className="bg-gray-100 rounded-2xl py-4 px-3 shadow-md flex flex-col gap-3.5 h-55">
                    <div className="flex justify-between items-center">
                        <Skeleton className="h-5 w-28" />
                        <Skeleton className="h-6 w-14 rounded-full" />
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-2 w-full rounded-full" />
                        <Skeleton className="h-3 w-12" />
                    </div>

                    <div className="flex justify-between items-center mt-auto">
                        <div className="flex -space-x-2">
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                        </div>

                        <div className="flex gap-3">
                            <Skeleton className="h-5 w-10" />
                            <Skeleton className="h-5 w-20" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}