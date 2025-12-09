import { Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 bg-default py-6 px-8 md:px-28">
      {/* Wrapper */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl md:text-[32px] text-white font-bold uppercase">
          start framework
        </h1>
        {/* Links (Desktop) */}
        <ul className="text-white font-bold uppercase hidden  md:flex flex-row gap-6 ">
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a className="" href="">
              contact
            </a>
          </li>
        </ul>
    
        {/*Toggle menu button */}
        <button
          onClick={() => setisOpen(!isOpen)}
          className="block md:hidden cursor-pointer"
        >
          {isOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu section */}
      {isOpen && (
        <div className="mt-4 block md:hidden font-bold text-white uppercase ">
          <ul className="flex flex-col gap-2">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">portfolio</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
