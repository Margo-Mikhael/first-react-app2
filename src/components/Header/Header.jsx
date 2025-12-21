import React from "react";

export default function Header({ text, isDark }) {
  return (
    <h1
      className={`text-lg font-bold uppercase text-[40px] ${
        isDark ? "text-default-dark" : "text-white"
      }`}
    >
      {text}
    </h1>
  );
}
