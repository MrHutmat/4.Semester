"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";
import { useState } from "react";
//import { usePathname } from 'next/navigation';
//import { Link } from "react-scroll/modules";
import Socials from "./Socials";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { Fade as Hamburger } from "hamburger-react";

const NavItems = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    {
      label: "Home",
      page: "#home",
      linkId: 0,
    },
    {
      label: "About",
      page: "#about",
      linkId: 1,
    },
    {
      label: "Projects",
      page: "#projects",
      linkId: 2,
    },
    {
      label: "Contact",
      page: "#contact",
      linkId: 3,
    },
  ];

  return (
    <div className="text-turkish">
      <div className="md:hidden ml-3 flex items-center">
        {/* <button className="mt-1 flex items-center" onClick={handleClick}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          <p className="px-4 text-themegray font-bold text-lg">MENU</p>
        </button>
        <button
          className="flex flex-col justify-center items-center"
          onClick={handleClick}
        >
          <span
            className={`bg-turkish block transition-all duration-300 ease-out h-1 w-8 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>

          <span
            className={`bg-turkish block transition-all duration-300 ease-out h-1 w-8 rounded-sm my-1 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>

          <span
            className={`bg-turkish block transition-all duration-300 ease-out h-1 w-8 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button> */}
        <Hamburger direction="right" toggled={isOpen} toggle={setIsOpen} />

        <p className="px-4 text-themegray font-bold text-lg">MENU</p>
      </div>
      <div
        className={`flex-1 justify-self-center pb-3 mt-8 md:items-center md:block md:pb-0 md:mt-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="md:flex md:space-x-0 md:space-y-0 space-y-2 px-3 md:px-1">
          {navLinks.map((item) => {
            return (
              <div
                key={item.label}
                className="navButton min-w-[91px] w-[150px] md:w-auto hover:bg-left-bottom hover:text-themeblack"
              >
                <Link
                  key={item.linkId}
                  href={item.page}
                  scroll={false}
                  className="font-bold px-3 py-2 text-center block ml-0 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
          {isOpen && (
            <div className="md:hidden">
              <Socials />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavItems;
