import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-default py-6 px-8 md:px-28">
      {/* Wrapper */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl md:text-[32px] text-white font-bold uppercase"
        >
          start framework
        </NavLink>
        {/* NavLinks (Desktop) */}
        <ul className="text-white font-bold uppercase hidden  md:flex flex-row gap-6 ">
          <li>
            <NavLink
              className={({ isActive }) =>
                `p-2 rounded-lg ${isActive ? "bg-secondary" : ""}`
              }
              to="about"
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `p-2 rounded-lg ${isActive ? "bg-secondary" : ""}`
              }
              to="portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                ` p-2 rounded-lg ${isActive ? "bg-secondary" : ""}`
              }
              to="contact"
            >
              contact
            </NavLink>
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
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
