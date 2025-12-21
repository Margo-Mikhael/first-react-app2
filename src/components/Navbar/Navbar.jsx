import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="w-full bg-default py-6 px-8 md:px-28">
      {/* Wrapper */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl md:text-[32px] text-white font-bold uppercase">
          start framework
        </h1>
        {/* Links (Desktop) */}
        <ul className="text-white font-bold uppercase hidden  md:flex flex-row gap-6 ">
          <li>
            <Link to="about">about</Link>
          </li>
          <li>
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="contact">contact</Link>
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
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="portfolio">Portfolio</Link>
            </li>
            <li>
            
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
