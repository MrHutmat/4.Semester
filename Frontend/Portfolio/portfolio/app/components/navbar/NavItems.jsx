"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";
import { useState } from "react";
//import { usePathname } from 'next/navigation';
import { Link } from "react-scroll/modules";
import Socials from "./Socials";
import Logo from "./Logo";

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
    <div className="text-turkish mt-4">
      <div className="md:hidden ml-3">
        <button className="" onClick={() => setNavBar(!navBar)}>
          {navBar ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>
      <div
        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          navBar ? "block" : "hidden"
        }`}
      >
        <ul className="md:flex md:space-x-0 md:space-y-0 space-y-2">
          {navLinks.map((item, idx) => {
            return (
              <Link
                key={idx}
                to={item.page}
                className="navButton text-center block ml-3 border-solid hover:border hover:bg-turkish hover:text-themelight cursor-pointer"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavBar(!navBar)}
              >
                {item.label}
              </Link>
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
