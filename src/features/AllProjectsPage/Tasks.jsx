import { useEffect, useState } from "react";
import axios from "axios";
import TasksGroup from "../../features/tasks/components/TasksGroup";

export default function Tasks({ projectId }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `https://collabspace-team-one.newcinderella.online/api/tasks?project_id=${projectId}`,
          {
            headers: {
              Authorization: `Bearer 8|3RvEjkCc9qKsuZcwLkjrrMrdeuSGHklTIO4Gm6xZb1247378`,
            },
          }
        );

        setTasks(response.data.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    if (projectId) {
      fetchTasks();
    }
  }, [projectId]);

  const groupedTasks = {
    pending: [],
    in_progress: [],
    in_review: [],
    completed: [],
  };

  tasks.forEach((task) => {
    if (groupedTasks[task.status]) {
      groupedTasks[task.status].push(task);
    }
  });

  return (
    <div className="grid grid-cols-4 gap-4">
      <TasksGroup
        title="Pending"
        tasks={groupedTasks.pending}
      />

      <TasksGroup
        title="In Progress"
        tasks={groupedTasks.in_progress}
      />

      <TasksGroup
        title="In Review"
        tasks={groupedTasks.in_review}
      />

      <TasksGroup
        title="Completed"
        tasks={groupedTasks.completed}
      />
    </div>
  );
}