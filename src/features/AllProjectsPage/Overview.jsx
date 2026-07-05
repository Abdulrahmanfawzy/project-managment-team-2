import React, { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  Calendar,
  CalendarClock,
  CircleAlert,
  CircleCheckBig,
} from "lucide-react";
import axios from "axios";
import AccessDenied from "./AccessDenied";

function ProductDetailsCard({ Icon, title, projectType, iconColorClass }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className={`${iconColorClass} w-6 h-6`} />
      <div>
        <p className="text-gray-500 text-xs">{title}</p>
        <p className="text-black font-bold text-sm">{projectType}</p>
      </div>
    </div>
  );
}

export default function Overview({ project }) {
  const [apiData, setApiData] = useState(null);
  const [teamsData, setTeamsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [projectAccessDenied, setProjectAccessDenied] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setProjectAccessDenied(false);
        
        const headers = {
          Authorization: `Bearer 8|3RvEjkCc9qKsuZcwLkjrrMrdeuSGHklTIO4Gm6xZb1247378`,
        };

        const overviewResponse = await axios.get(
          `https://collabspace-team-one.newcinderella.online/api/dashboard/project-overview?project_id=${project.id}`, 
          { headers }
        );
        setApiData(overviewResponse.data.data);

        const teamsResponse = await axios.get(
          `https://collabspace-team-one.newcinderella.online/api/projects/${project.id}/teams`,
          { headers }
        );
        
        // هنا قمنا بالدخول إلى أول عنصر في المصفوفة بناءً على الـ JSON الذي أرسلته
        if (teamsResponse.data.data && teamsResponse.data.data.length > 0) {
          setTeamsData(teamsResponse.data.data[0]); 
        } else {
          setTeamsData(null);
        }

      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        if (error.response && (error.response.status === 403 || error.response.status === 401)) {
          setProjectAccessDenied(true);
        }
      } finally {
        setLoading(false);
      }
    };

    if (project?.id) {
      fetchData();
    }
  }, [project?.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 font-medium">Loading project data...</p>
      </div>
    );
  }

  if (projectAccessDenied) {
    return (
      <AccessDenied title={"Sorry"} message={"You don't have access to this project from the API"} />
    );
  }

  const stats = apiData?.stats || {};
  const chartMonthlyData = apiData?.chart_data?.monthly || [];

  const percentage = stats.progress || 0;
  const pendingTasks = stats.pending_tasks || 0;
  const inProgressTasks = stats.in_progress_tasks || 0;
  const completedTasks = stats.completed_tasks || 0;
  const totalTasks = stats.total_tasks || 0;

  const needleRotation = -90 + (percentage / 100) * 180;

  return (
    <>
      <div className="grid grid-cols-12 mt-5 gap-5">
        <div className="col-span-8 flex flex-col gap-5">
          <div className="bg-white rounded-xl px-5 py-2">
            <h3 className="text-black font-medium mb-1">Description</h3>
            <p className="text-gray-600 text-sm">{project.description || "No description available"}</p>
          </div>
          
          <div
            className="h-70 bg-white rounded-xl py-5"
            style={{
              width: "100%",
              maxWidth: 800,
              margin: "auto",
              aspectRatio: 1.618,
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartMonthlyData}>
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="month"
                  stroke="#9ca3af"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#9ca3af"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                  ticks={[0, 20, 40, 60, 80, 100]}
                />

                <Area
                  type="monotone"
                  dataKey="progress"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#chartGradient)"
                  dot={false}
                  className="cursor-pointer"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-4 bg-white rounded-xl px-5 py-4 gap-4">
            <ProductDetailsCard
              Icon={Calendar}
              title={"Start Date"}
              projectType={project.start_date || "N/A"}
              iconColorClass="text-pink-700"
            />
            <ProductDetailsCard
              Icon={CalendarClock}
              title={"Deadline"}
              projectType={project.deadline || "N/A"}
              iconColorClass="text-orange-500"
            />
            <ProductDetailsCard
              Icon={CircleAlert}
              title={"Priority"}
              projectType={project.priority || "N/A"}
              iconColorClass="text-red-600"
            />
            <ProductDetailsCard
              Icon={CircleCheckBig}
              title={"Total Tasks"}
              projectType={totalTasks.toString()}
              iconColorClass="text-green-600"
            />
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-5">
          <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center">
            <h3 className="text-black font-semibold text-lg self-start mb-2">
              Project Progress
            </h3>

            <div className="relative flex flex-col items-center justify-center min-h-[150px] w-full">
              <svg
                width="200"
                height="110"
                viewBox="0 0 220 120"
                className="overflow-visible"
              >
                <path
                  d="M 20 110 A 90 90 0 0 1 200 110"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                <path
                  d="M 20 110 A 90 90 0 0 1 200 110"
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="282"
                  strokeDashoffset={282 - (282 * percentage) / 100}
                />
                <g transform={`translate(110, 110) rotate(${needleRotation})`}>
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="-75"
                    stroke="#1f2937"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="6"
                    fill="white"
                    stroke="#1f2937"
                    strokeWidth="3"
                  />
                </g>
              </svg>

              <div className="text-center mt-2">
                <span className="text-2xl font-bold text-black">
                  {percentage}%
                </span>
                <p className="text-gray-500 text-xs mt-0.5">
                  Project Completed
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1 border-t border-gray-100 pt-4 mt-4 w-full text-center">
              <div>
                <p className="text-sm font-bold text-black">
                  {pendingTasks}
                  <span className="text-gray-400 font-normal text-xs">
                    /{totalTasks}
                  </span>
                </p>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                  <span className="text-gray-500 text-[10px] whitespace-nowrap">
                    Pending tasks
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-black">
                  {inProgressTasks}
                  <span className="text-gray-400 font-normal text-xs">
                    /{totalTasks}
                  </span>
                </p>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-gray-500 text-[10px] whitespace-nowrap">
                    In progress
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-black">
                  {completedTasks}
                  <span className="text-gray-400 font-normal text-xs">
                    /{totalTasks}
                  </span>
                </p>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-gray-500 text-[10px] whitespace-nowrap">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-black font-semibold text-lg">Team Members</h3>
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <span className="font-medium bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-600">
                  {teamsData?.name || "No Team"}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              {teamsData?.members?.map((member, index) => (
                <div key={member.id || index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={member.avatar_url || "https://via.placeholder.com/40"}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover border border-gray-100"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-800 text-sm font-medium">
                        {member.name}
                      </span>
                      <span className="text-gray-400 text-[11px]">{member.email}</span>
                    </div>
                  </div>
                  <span className="text-gray-500 text-xs bg-gray-50 px-2 py-1 rounded">
                    {member.job_title || "Member"}
                  </span>
                </div>
              ))}
              
              {(!teamsData?.members || teamsData.members.length === 0) && (
                <p className="text-gray-400 text-sm text-center py-2">No members assigned to this team.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}