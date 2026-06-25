import { Button } from "@/components/ui/button";
import tasksList from "@/features/tasks/api/tasks";
import SearchDemo from "@/features/tasks/components/toolbar/Search";
import SelectDemo from "@/features/tasks/components/toolbar/Select";
import TasksGroup from "@/features/tasks/components/TasksGroup";
import { Plus } from "lucide-react";
import { TasksDialog } from "@/features/tasks/components/NewTaskDialog";
import { useState } from "react";
import { ToastContainer} from 'react-toastify';

function TasksPage() {

  const [open, setOpen] = useState(false);
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
        {tasksList.map((taskGroup, i) => (
          <TasksGroup
            title={`${taskGroup[0].status}`}
            bgColor={taskGroup[0].bgColor}
            tasks={taskGroup}
          />
        ))}

        {/* <TasksGroup title="In Progress" bgColor="bg-blue-100"/>
          <TasksGroup title="In Review" bgColor="bg-purple-100" /> */}
      </div>
      
      <ToastContainer/>
    </div>
  );
}

export default TasksPage;
