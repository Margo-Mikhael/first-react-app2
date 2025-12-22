import { Star } from "lucide-react";
import React from "react";

export default function Header({ text, isDark }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1
        className={`text-lg font-bold uppercase text-[40px] ${
          isDark ? "text-default" : "text-white"
        }`}
      >
        {text}
      </h1>
      {/* Star Section */}
      <div className="flex gap-4 items-center">
        <span
          className={`h-1 w-20 ${isDark ? "bg-default" : "bg-white"}`}
        ></span>
        <Star
          fill={isDark ? "currentColor" : "#fff"}
          className={`size-4 ${isDark ? "text-default" : "text-white"}`}
        />
        <span
          className={`h-1 w-20 ${isDark ? "bg-default" : "bg-white"}`}
        ></span>
      </div>
    </div>
  );
}
