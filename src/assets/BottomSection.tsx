import React, { useEffect, useState } from "react";
import "./BottomSection.css";
import { TOKEN } from "../constants/token";

const base_url = import.meta.env.VITE_API_URL;
console.log("BASE URL =", base_url);
// Types
type Task = {
  id: number;
  title: string;
  date: string;
  percent: number;
  priority: "High" | "Medium" | "Low";
};

type Team = {
  id: number;
  name: string;
  tasks: string;
  percent: number;
  avatar: string;
};

type Meeting = {
  id: number;
  title: string;
  date: string;
  time: string;
  avatars: string[];
};

export default function BottomSection() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(`${base_url}/projects`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Error ${res.status}`);
      }

      const data = await res.json();

      console.log("API DATA:", data);

      setTasks(Array.isArray(data.tasks) ? data.tasks : []);
      setTeams(Array.isArray(data.teams) ? data.teams : []);
      setMeetings(Array.isArray(data.meetings) ? data.meetings : []);
    } catch (err: any) {
      console.log(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);




  if (loading) {
    return <div className="dashboard">Loading...</div>;
  }

  if (error) {
    return <div className="dashboard">Error: {error}</div>;
  }

  return (
    <div className="dashboard">

      <div className="card">
        <div className="card-header">
          <h3>Tasks</h3>
        </div>

        {tasks.length ? (
          tasks.map((task) => (
            <div key={task.id}>
              {task.title}
            </div>
          ))
        ) : (
          <p>No Tasks</p>
        )}
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Teams</h3>
        </div>

        {teams.length ? (
          teams.map((team) => (
            <div key={team.id}>
              {team.name}
            </div>
          ))
        ) : (
          <p>No Teams</p>
        )}
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Upcoming meetings</h3>
        </div>

        {meetings.length ? (
          meetings.map((meeting) => (
            <div key={meeting.id}>
              {meeting.title}
            </div>
          ))
        ) : (
          <p>No Meetings</p>
        )}
      </div>

    </div>
  );
}