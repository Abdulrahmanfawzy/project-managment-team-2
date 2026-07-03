import React from "react";
import { CircleAlert } from "lucide-react";

export default function AccessDenied({title,message}) {
  return (
    <div className="flex flex-col justify-center items-center h-96 bg-white rounded-2xl p-8 shadow-sm max-w-md mx-auto mt-10">
      <CircleAlert className="w-16 h-16 text-red-500 mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-center text-sm leading-relaxed">
        {message}
      </p>
    </div>
  );
}