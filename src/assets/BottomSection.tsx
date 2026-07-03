import React, { useEffect, useState } from "react";
import "./BottomSection.css";
import { TOKEN } from "../constants/token";

const base_url = import.meta.env.VITE_API_URL;

type Task = { id: number; title: string; date: string; percent: number; priority: "High" | "Medium" | "Low"; };
type Team = { id: number; name: string; tasks: string; percent: number; avatar: string; };
type Meeting = { id: number; title: string; date: string; time: string; avatars: string[]; };

// 1. حطي الداتا الوهمية هنا
const mockTasks: Task[] = [
  { id: 1, title: "Crest Wireframes", date: "Due Today", percent: 82, priority: "High" },
  { id: 2, title: "User Research", date: "Due Dec 18", percent: 52, priority: "Medium" },
  { id: 3, title: "Design System Updates", date: "Due Dec 25", percent: 42, priority: "Low" },
];
const mockTeams: Team[] = [
  { id: 1, name: "Mohamed wahib", tasks: "12/14", percent: 100, avatar: "https://i.pravatar.cc/32?u=1" },
  { id: 2, name: "Sara Hassan", tasks: "7/10", percent: 70, avatar: "https://i.pravatar.cc/32?u=2" },
  { id: 3, name: "Ali Mohamed", tasks: "4/10", percent: 40, avatar: "https://i.pravatar.cc/32?u=3" },
];
const mockMeetings: Meeting[] = [
  { id: 1, title: "Design Review", date: "Today", time: "14:00 - 15:00", avatars: ["https://i.pravatar.cc/24?u=1", "https://i.pravatar.cc/24?u=2", "https://i.pravatar.cc/24?u=3"] },
  { id: 2, title: "Sprint Planning", date: "Dec 18", time: "13:00 - 13:30", avatars: ["https://i.pravatar.cc/24?u=4", "https://i.pravatar.cc/24?u=5"] },
];

export default function BottomSection() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${base_url}/projects`, { headers: { "Authorization": `Bearer ${TOKEN}` } });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        // 2. السطر المهم: لو الـ API فاضي استخدمي الداتا الوهمية
        setTasks(data.tasks?.length ? data.tasks : mockTasks);
        setTeams(data.teams?.length ? data.teams : mockTeams);
        setMeetings(data.meetings?.length ? data.meetings : mockMeetings);

      } catch (err: any) {
        setError(err.message);
        // 3. لو فيه Error اصلا، استخدمي الوهمي برضو
        setTasks(mockTasks);
        setTeams(mockTeams);
        setMeetings(mockMeetings);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="center">Loading...</div>;
  if (error) console.log("API Error:", error); // هنشوف الايرور في الكونسول بس

  return (
    <div className="dashboard">
      {/* Tasks Card */}
      <div className="card">
        <div className="card-header"><h3>Tasks</h3><span>View All</span></div>
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <div className="task-title">
              <span>{task.title}</span>
              <span className={`tag ${task.priority.toLowerCase()}`}>{task.priority}</span>
            </div>
            <p className="task-date">{task.date}</p>
            <div className="progress-bar"><div className="progress" style={{ width: `${task.percent}%`, background: '#4f46e5' }}></div></div>
          </div>
        ))}
      </div>

      {/* Teams Card */}
      <div className="card">
        <div className="card-header"><h3>Teams</h3><span>USUK ▼</span></div>
        {teams.map((team) => (
          <div key={team.id} className="team-member">
            <img src={team.avatar} alt={team.name} className="avatar" />
            <div className="team-info">
              <p className="team-name">{team.name}</p>
              <div className="team-progress"><div style={{ width: `${team.percent}%` }}></div></div>
            </div>
            <span className="team-tasks">{team.tasks}</span>
          </div>
        ))}
      </div>

      {/* Meetings Card */}
      <div className="card">
        <div className="card-header"><h3>Upcoming meetings</h3><span>View All</span></div>
        {meetings.map((meeting) => (
          <div key={meeting.id} className="meeting-item">
            <p className="meeting-title">{meeting.title}</p>
            <p className="meeting-time">{meeting.date} · {meeting.time}</p>
            <div className="avatars">
              {meeting.avatars.map((url, i) => (<img key={i} src={url} className="avatar" alt="avatar" />))}
            </div>
          </div>
        ))}
      </div>

      {/* Ask AI Card */}
      <div className="card">
        <div className="card-header"><h3>Ask AI</h3></div>
        <div className="ai-box">🤖 ask me anything about..</div>
        <div className="ai-input"><input type="text" placeholder="ask me anything..." /><button>➤</button></div>
      </div>
    </div>
  );
}