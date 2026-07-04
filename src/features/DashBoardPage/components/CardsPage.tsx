import React from "react";



function StatCard({ title, value, icon, color, subtext }) {
  return (
    <div
      className="
        bg-white
        p-6
        rounded-xl
        shadow-sm
        hover:shadow-md
        transition
        duration-300
        w-full
        h-50
        relative
      "
    >
      {/* الخط الملون تحت */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[4px] w-1/2 rounded-full ${color}`}
      />

      {/* العنوان + الأيقونة */}
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm font-medium text-gray-500">
          {title}
        </p>

        <span className="text-2xl">
          {icon}
        </span>
      </div>

      {/* الرقم */}
      <h3 className="text-4xl font-bold text-gray-900 mb-2">
        {value}
      </h3>

      {/* النص السفلي */}
      <p className="text-xs text-gray-500">
        {subtext}
      </p>
    </div>
  );
}

export default function CardsPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-bold mb-6">
        Dashboard Cards
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Pending Tasks"
          value="32"
          subtext="12% from last month"
          color="bg-orange-400"
          icon="📋"
        />

        <StatCard
          title="In Progress"
          value="40"
          subtext="5% from last month"
          color="bg-blue-400"
          icon="⚡"
        />

        <StatCard
          title="Completed"
          value="22"
          subtext="8% from last month"
          color="bg-green-400"
          icon="✅"
        />

        <StatCard
          title="Completion Rate"
          value="33%"
          subtext="12% from last month"
          color="bg-purple-400"
          icon="📊"
        />

      </div>
    </div>
  );
}