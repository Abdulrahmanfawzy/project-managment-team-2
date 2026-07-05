import { CircleCheck } from "lucide-react";
import { TaskBoard } from "./TaskBoard";
import { TaskRow } from "./TaskRow";

const ProfilePageTasks = () => {
  return (
    <section className="flex flex-col items-center lg:flex-row lg:items-start gap-5 ">
      <TaskBoard title="To do" count={4} variant="todo" className="w-full lg:flex-1 border-0 shadow-lg">
        <TaskRow title="Create user interview" progress={12} variant="todo" />

        <TaskRow title="Create Wireframes" progress={8} variant="todo" />

        <TaskRow title="Create user flow" progress={2} variant="todo" />

        <TaskRow title="Design log in screen" progress={2} variant="todo" />
      </TaskBoard>

      <TaskBoard title="Done" count={6} variant="done" className="w-full lg:flex-1 border-0 shadow-lg">
        <TaskRow
          title="Update design system"
          variant="done"
          icon={<CircleCheck className="h-5 w-5 text-green-600" />}
        />

        <TaskRow
          title="Create information architecture"
          variant="done"
          icon={<CircleCheck className="h-5 w-5 text-green-600" />}
        />

        <TaskRow
          title="Make survey"
          variant="done"
          icon={<CircleCheck className="h-5 w-5 text-green-600" />}
        />

        <TaskRow
          title="Creat Wireframes"
          variant="done"
          icon={<CircleCheck className="h-5 w-5 text-green-600" />}
        />

        <TaskRow
          title="Creat Wireframes"
          variant="done"
          icon={<CircleCheck className="h-5 w-5 text-green-600" />}
        />

      </TaskBoard>
    </section>
  );
};

export default ProfilePageTasks;
