import { Trash2Icon } from "lucide-react"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { useDeleteTask } from "../hooks/useDeleteTask"

export function DeleteDialog({open, setOpen, id}:{open:boolean, setOpen:(open:boolean)=>void, id:number}) {
    
    const deleteTaskMutation= useDeleteTask()
    
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            {/* <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Chat</Button>
            </AlertDialogTrigger> */}
            <AlertDialogContent size="sm">
                <AlertDialogHeader>
                <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                    <Trash2Icon />
                </AlertDialogMedia>
                <AlertDialogTitle>Delete chat?</AlertDialogTitle>
                <AlertDialogDescription>
                    This will permanently delete this chat conversation. View{" "}
                    <a href="#">Settings</a> delete any memories saved during this chat.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="border-t-0">
                <AlertDialogCancel onClick={()=>setOpen(false)} variant="outline">Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={()=>deleteTaskMutation.mutate(id)} variant="destructive">Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
