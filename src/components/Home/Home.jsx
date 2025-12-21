import React from "react";
import Header from "../Header/Header";

export default function Home() {
  return (
    <div className="grow bg-secondary flex items-center justify-center">
      <Header text="Start Framework" isDark={false} />
    </div>
  );
}
