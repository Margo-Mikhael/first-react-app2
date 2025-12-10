import React from "react";
import { Facebook, Globe, TwitterIcon, LinkedinIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-default text-white">
      {/* Outer container */}
      <div className="block">
        {/* main content */}
        <div className="flex items-center justify-center py-20 px-10">
          {/* Main content outer container */}
          <div className="flex justify-center gap-20 items-start w-full">
            {/* Location */}
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-[28px] font-medium">LOCATION</h1>
              <p> 2215 John Daniel Drive </p>
              <p>Clark, MO 65243</p>
            </div>
            {/* Around the web */}
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[28px] font-medium">AROUND THE WEB</h1>
              <div className="flex gap-2">
                <Facebook className="rounded-full p-1 border border-white" />
                <TwitterIcon className="rounded-full p-1 border border-white" />
                <LinkedinIcon className="rounded-full p-1 border border-white" />
                <Globe className="rounded-full p-1 border border-white" />
              </div>
            </div>
            {/* About freelancing */}
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[28px] font-medium">ABOUT FREELANCER</h1>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        {/* Copyrights */}
        <p className="bg-default-dark text-center py-6 text-white">
          Copyright © Your Website 2021
        </p>
      </div>
    </div>
  );
}
