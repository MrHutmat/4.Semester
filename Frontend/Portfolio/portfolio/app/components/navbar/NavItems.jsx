"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";
import { useState } from "react";
//import { usePathname } from 'next/navigation';
import { Link } from "react-scroll/modules";
import Socials from "./Socials";
import Logo from "./Logo";
import { motion } from "framer-motion";

const NavItems = () => {
  const [navBar, setNavBar] = useState(false);

  const navLinks = [
    {
      label: "Home",
      page: "home",
    },
    {
      label: "About",
      page: "about",
    },
    {
      label: "Projects",
      page: "projects",
    },
    {
      label: "Contact",
      page: "contact",
    },
  ];

  return (
    <div className="text-turkish">
      <div className="md:hidden ml-3">
        <button
          className="mt-1 flex items-center"
          onClick={() => setNavBar(!navBar)}
        >
          {navBar ? <FaTimes size={30} /> : <FaBars size={30} />}
          <p className="px-4 text-themegray font-bold text-lg">MENU</p>
        </button>
      </div>
      <div
        className={`flex-1 justify-self-center pb-3 mt-8 md:items-center md:block md:pb-0 md:mt-0 ${
          navBar ? "block" : "hidden"
        }`}
      >
        <ul className="md:flex md:space-x-0 md:space-y-0 space-y-2 px-4">
          {navLinks.map((item, idx) => {
            return (
              <div className="navButton  hover:bg-left-bottom hover:text-themeblack">
                <Link
                  key={idx}
                  to={item.page}
                  //className="block border-2 border-gray-400 hover:border-gray-500 px-4 py-2 rounded-lg"
                  className="px-4 py-2 text-center block ml-0 cursor-pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setNavBar(!navBar)}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
          {navBar && (
            <div className="md:hidden">
              <Socials />
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavItems;
