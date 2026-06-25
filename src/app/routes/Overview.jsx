import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import {
  Briefcase,
  Calendar,
  CalendarClock,
  CircleAlert,
  CircleCheckBig,
  ChevronDown,
} from "lucide-react";

const data = [
  { name: "Jan", total: 10000 },
  { name: "", total: 12500 },
  { name: "Feb", total: 13000 },
  { name: "", total: 8500 },
  { name: "Mar", total: 20000 },
  { name: "", total: 15000 },
  { name: "Apr", total: 8500 },
  { name: "", total: 14000 },
  { name: "May", total: 11500 },
  { name: "", total: 13000 },
  { name: "Jun", total: 19000 },
];

// Small Component
function ProductDetailsCard({ Icon, title, projectType, iconColor }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className={`text-${iconColor} w-6 h-15`} />
      <div>
        <p>{title}</p>
        <p className="text-black font-bold text-sm">{projectType}</p>
      </div>
    </div>
  );
}

export default function Overview() {
  const percentage = 78; 
  const pendingTasks = 62;
  const inProgressTasks = 36;
  const completedTasks = 42;
  const totalTasks = 94;

  const needleRotation = -90 + (percentage / 100) * 180;

  const teamMembers = [
    { name: "Mohanad wahib", role: "Leader", isLeader: true, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" },
    { name: "Sara Hassan", role: "", isLeader: false, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" },
    { name: "Ali Mohamed", role: "", isLeader: false, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" },
    { name: "Khalid Mousa", role: "", isLeader: false, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" },
  ];

  return (
    <>
      <div className="grid grid-cols-12 mt-5 gap-5">
        <div className="col-span-8 flex flex-col gap-5">
          {/* Description */}
          <div className="bg-white rounded-xl px-5 py-2">
            <h3 className="text-black font-medium mb-1">Description</h3>
            <p>
              This project focuses on organizing tasks, tracking progress, and
              coordinating team efforts to ensure timely delivery and clear
              visibility across all project activities.
            </p>
          </div>
          {/* Chart */}
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
              <AreaChart data={data}>
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="name"
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
                  tickFormatter={(value) =>
                    value === 0 ? "0k" : `${value / 1000}k`
                  }
                  ticks={[0, 5000, 10000, 15000, 20000, 25000]}
                />

                <Area
                  type="monotone"
                  dataKey="total"
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
          {/* Product Details */}
          <div className="grid grid-cols-3 bg-white rounded-xl px-5 py-2">
            <ProductDetailsCard
              Icon={Briefcase}
              title={"Project Type"}
              projectType={"SaaS"}
              iconColor={"blue-600"}
            />
            <ProductDetailsCard
              Icon={Calendar}
              title={"Start Date"}
              projectType={"Oct 12"}
              iconColor={"pink-900"}
            />
            <ProductDetailsCard
              Icon={CalendarClock}
              title={"Deadline"}
              projectType={"Dec 25"}
              iconColor={"orange-500"}
            />
            <ProductDetailsCard
              Icon={CircleAlert}
              title={"Priority"}
              projectType={"High"}
              iconColor={"red-600"}
            />
            <ProductDetailsCard
              Icon={CircleCheckBig}
              title={"Total Tasks"}
              projectType={"140"}
              iconColor={""}
            />
          </div>
        </div>
        
        {/* Second Column */}
        <div className="col-span-4 flex flex-col gap-5">
          {/* 1. Project Progress Card */}
          <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center">
            <h3 className="text-black font-semibold text-lg self-start mb-2">
              Project Progress
            </h3>

            <div className="relative flex flex-col items-center justify-center min-h-[150px] w-full">
              <svg width="200" height="110" viewBox="0 0 220 120" className="overflow-visible">
                {/* القوس الخلفي الرمادي */}
                <path
                  d="M 20 110 A 90 90 0 0 1 200 110"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                {/* القوس الأمامي الأسود المكتمل بنسبة 78% */}
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
                  <line x1="0" y1="0" x2="0" y2="-75" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="0" cy="0" r="6" fill="white" stroke="#1f2937" strokeWidth="3" />
                </g>
              </svg>

              {/* النسبة المئوية أسفل العداد */}
              <div className="text-center mt-2">
                <span className="text-2xl font-bold text-black">{percentage}%</span>
                <p className="text-gray-500 text-xs mt-0.5">Project Completed</p>
              </div>
            </div>

            {/* الأرقام والتفاصيل السفلية للتاسكات */}
            <div className="grid grid-cols-3 gap-1 border-t border-gray-100 pt-4 mt-4 w-full text-center">
              <div>
                <p className="text-sm font-bold text-black">
                  {pendingTasks}<span className="text-gray-400 font-normal text-xs">/{totalTasks}</span>
                </p>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                  <span className="text-gray-500 text-[10px] whitespace-nowrap">Pending tasks</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-black">
                  {inProgressTasks}<span className="text-gray-400 font-normal text-xs">/{totalTasks}</span>
                </p>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-gray-500 text-[10px] whitespace-nowrap">In progress</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-black">
                  {completedTasks}<span className="text-gray-400 font-normal text-xs">/{totalTasks}</span>
                </p>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-gray-500 text-[10px] whitespace-nowrap">Completed</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Team Members Card */}
          <div className="bg-white rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-black font-semibold text-lg">Team Members</h3>
              <div className="flex items-center gap-1 text-gray-500 text-sm cursor-pointer hover:text-black transition-colors">
                <span>UI/UX</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {member.isLeader && (
                        <span className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full p-0.5 border border-white flex items-center justify-center w-4 h-4">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      )}
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{member.name}</span>
                  </div>
                  {member.role && (
                    <span className="text-gray-400 text-xs">{member.role}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}