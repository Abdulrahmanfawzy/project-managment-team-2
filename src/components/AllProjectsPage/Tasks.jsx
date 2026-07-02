import TasksGroup from "../../features/tasks/components/TasksGroup";
import TaskCard from "../../features/tasks/components/TaskCard";
import tasksList from "../../features/tasks/api/tasks";

export default function Tasks() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {tasksList.map((group, index) => (
        <TasksGroup key={index} title={group[0]?.status} tasks={group} />
      ))}
    </div>
  );
}
