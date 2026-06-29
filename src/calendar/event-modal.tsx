"use client";

import { useState } from "react";
import { useCalendarContext } from "./calendar-context";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EventModal() {
  const { newEventDialogOpen, setNewEventDialogOpen, events, setEvents } =
    useCalendarContext();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSave = () => {
    // 1. Validation: التحقق من البيانات
    if (!title.trim()) {
      alert("Please enter a meeting title.");
      return;
    }
    if (!date) {
      alert("Please select a date.");
      return;
    }
    if (!time) {
      alert("Please select a time.");
      return;
    }

    // 2. تجهيز البيانات
    const start = new Date(`${date}T${time}`);

    // 3. إضافة الحدث للـ Context
    const newEvent = {
      id: Date.now().toString(),
      title,
      start,
      end: new Date(start.getTime() + 60 * 60000), // مدة الاجتماع ساعة
      color: "brand",
    };

    setEvents([...events, newEvent]);

    // 4. إغلاق المودال وتصفير الحقول
    setTitle("");
    setDate("");
    setTime("");
    setNewEventDialogOpen(false);
  };

  return (
    <Dialog open={newEventDialogOpen} onOpenChange={setNewEventDialogOpen}>
      <DialogContent className="sm:max-w-[400px] rounded-2xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Add New Meeting
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase">
              Title
            </label>
            <Input
              placeholder="e.g., Team Sync"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Date
              </label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Time
              </label>
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={() => setNewEventDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleSave}
          >
            Save Meeting
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
