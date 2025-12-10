import React from "react";
import { Facebook, Globe, TwitterIcon, LinkedinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full fixed bottom-0 bg-default text-white">
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {/* Location */}
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-[28px] font-medium">LOCATION</h1>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          {/* Around the web */}
          <div className="flex flex-col items-center">
            <h1 className="text-[28px] font-medium">AROUND THE WEB</h1>
            <div className="flex gap-3 mt-2">
              <Facebook className="rounded-full p-1 border border-white" />
              <TwitterIcon className="rounded-full p-1 border border-white" />
              <LinkedinIcon className="rounded-full p-1 border border-white" />
              <Globe className="rounded-full p-1 border border-white" />
            </div>
          </div>

          {/* About freelancing */}
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <h1 className="text-[28px] font-medium">ABOUT FREELANCER</h1>
            <p className="mt-2">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-default-dark text-center py-6">
        © Your Website 2021
      </div>
    </footer>
  );
}
