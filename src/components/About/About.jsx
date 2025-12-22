import React from "react";
import Header from "../Header/Header";

export default function About() {
  return (
    <div className="grow bg-secondary flex items-center justify-center min-h-[620px] ">
      {/* section content container */}
      <div className="flex flex-col gap-4 container  ">
        <Header text="About component" isDark={false} />

        {/* Paragraphs container */}
        <div className="flex flex-col md:flex-row text-white container px-18 gap-4">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>

          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
