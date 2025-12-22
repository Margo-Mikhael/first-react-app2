import React from "react";
import Header from "../Header/Header";
import avatar from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <div className="grow bg-secondary flex flex-col items-center justify-center min-h-[620px]">
      <div className="flex flex-col items-center gap-4 text-white">
        <img src={avatar} alt="avatar" className="size-[250px]" />

        <Header text="Start Framework" isDark={false} />
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}
