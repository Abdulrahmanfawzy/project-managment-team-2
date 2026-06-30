"use client";

import { format } from "date-fns";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useCalendarContext } from "./calendar-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CalendarHeader() {
  const { date, navigate, mode, setMode, setNewEventDialogOpen } =
    useCalendarContext();

  return (
    <div className="flex flex-col gap-4 mb-6 md:gap-6 md:mb-8">
      {/* الصف الأول: العنوان والزرار */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Meetings
        </h1>
        <button
          onClick={() => setNewEventDialogOpen(true)}
          className="bg-brand hover:bg-brand/90 text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all shadow-sm cursor-pointer w-full sm:w-auto justify-center"
        >
          Add Meeting
          <Plus className="size-4" />
        </button>
      </div>

      {/* الصف الثاني: التنقل والـ Dropdown */}
      <div className="flex flex-wrap justify-between items-center gap-3">
        {/* التحكم في التاريخ */}
        <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-full border border-gray-100">
          <button
            onClick={() => navigate("prev")}
            className="p-2 hover:bg-white rounded-full transition-colors cursor-pointer shadow-sm"
          >
            <ChevronLeft className="size-5 text-gray-600" />
          </button>

          <span className="text-sm md:text-base font-semibold w-[120px] md:w-[160px] text-center text-gray-800">
            {format(date, "MMMM yyyy")}
          </span>

          <button
            onClick={() => navigate("next")}
            className="p-2 hover:bg-white rounded-full transition-colors cursor-pointer shadow-sm"
          >
            <ChevronRight className="size-5 text-gray-600" />
          </button>
        </div>

        {/* الـ Select المجاوب */}
        <Select value={mode} onValueChange={(val: any) => setMode(val)}>
          <SelectTrigger className="w-[130px] md:w-[150px] rounded-full border-gray-200 px-4 py-2 text-sm cursor-pointer hover:bg-gray-50">
            <SelectValue placeholder="This Week" />
          </SelectTrigger>
          <SelectContent className="rounded-2xl">
            <SelectItem value="day">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
