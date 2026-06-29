import { Button } from "@/components/ui/button";
import SearchDemo from "@/features/tasks/components/toolbar/Search";
import SelectDemo from "@/features/tasks/components/toolbar/Select";
import TasksGroup from "@/features/tasks/components/TasksGroup";
import { Plus } from "lucide-react";
import { TasksDialog } from "@/features/tasks/components/NewTaskDialog";
import { useState } from "react";
import { ToastContainer} from 'react-toastify';
import { useTasksQuery } from "@/features/tasks/hooks/useTasksQuery";
import Spinner from "@/components/shared/Spinner";
import TasksGroupSkeleton from "@/features/tasks/components/TasksGroupSkeleton";

function TasksPage() {

  const bgColors = ["bg-white","bg-blue-100", "bg-purple-100", "bg-green-100"]
  const status= ["To-do", "In Progress", "In Review", "Completed"]

  const [open, setOpen] = useState(false);

  const {isPending, data:tasksList, error}= useTasksQuery();
  console.log(tasksList)


  return (
    <div className="max-w-7xl mx-auto bg-background py-5 max-lg:px-5">
      <div className="flex justify-between items-center mb-5">
        <div className=" flex gap-4">
          <SearchDemo />
          <SelectDemo
            placeHolder="Project 1"
            label="Projects"
            items={["Project 1", "Project 2", "Project 3"]}
          />
          <SelectDemo
            placeHolder="My Task"
            label="Tasks"
            items={["Task 1", "Task 2", "Task 3"]}
          />
        </div>

        {/* <TasksDialog triggerBtn={
          <Button className="bg-brand rounded-2xl p-4 cursor-pointer">
            Create Task <Plus />
          </Button>
        } /> */}

        <TasksDialog open={open} setOpen={setOpen}/>

        {/* <TasksDialog> */}
          <Button onClick={() => setOpen(true)} className="bg-brand rounded-2xl p-4 cursor-pointer ml-2">
            Create Task <Plus />
          </Button>
        {/* </TasksDialog> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-between">

        {isPending && Array.from({ length: 4 }, () => <TasksGroupSkeleton />)}

        {error && <p>Error: {error.message}</p>}

        {/* {tasksList?.data.map((taskGroup, i) => (
          <TasksGroup
            title={`${taskGroup[0].status}`}
            bgColor={taskGroup[0].bgColor}
            tasks={taskGroup}
          />
        ))} */}
        {/* {tasksList?.data.map((task, i) => (
          <TasksGroup
            key={task.id}
            title={`${task.title}`}
            bgColor={bgColors[i]} 
            tasks={[task]}
          />
          ))} */}
        {tasksList&& status.map((state,i)=>(
          <TasksGroup key={i} title={state} bgColor={bgColors[i]} tasks={tasksList?.data}/>
        ))}

      </div>
      
      <ToastContainer/>
    </div>
  );
}

export default TasksPage;
