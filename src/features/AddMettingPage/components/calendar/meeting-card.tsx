"use client";

import { type CalendarEvent } from "./calendar-types";
import { Plus } from "lucide-react";

export default function EventCard({ event }: { event: CalendarEvent }) {
  // دي الـ Array اللي فيها صور الناس، اتأكد إنها موجودة هنا
  const avatars = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  ];

  return (
    <div className="bg-white p-3 rounded-2xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)] border border-gray-100 w-full h-full flex flex-col justify-between transition-all">
      {/* العنوان والوقت */}
      <div className="flex flex-col gap-0.5">
        <h3 className="font-bold text-mainText text-md truncate leading-tight capitalize">
          {event.title}
        </h3>
        <p className="font-medium text-[9px] text-mutedText">
          {event.start.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          })}
        </p>
      </div>

      {/* صف الـ Avatars والـ Join */}
      <div className="flex items-center justify-between mt-2">
        {/* هنا الـ Avatars المتداخلة */}
        <div className="flex -space-x-2">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Avatar"
              className="size-6 rounded-full border-2 border-white object-cover"
            />
          ))}
          {/* دائرة الـ +5 */}
          <div className="size-6 rounded-full bg-mutedText border-2 border-white flex items-center justify-center text-[8px] font-bold text-gray-500 z-10">
            +5
          </div>
        </div>

        <button className="flex items-center gap-0.5 text-[9px] font-bold text-gray-700 bg-gray-50 px-1.5 py-1 rounded-md cursor-pointer  hover:bg-mutedText hover:text-white transition-colors duration-150">
          Join <Plus className="size-2.5" />
        </button>
      </div>
    </div>
  );
}
