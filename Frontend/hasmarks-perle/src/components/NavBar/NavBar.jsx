import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import UserMenu from "./UserMenu";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "contact",
    },
    {
      id: 3,
      link: "about",
    },
  ];

  return (
    <div className="fixed shadow-md w-full top-0 left-0 bg-neutral">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="btn btn-ghost text-2xl navbar-start">
          Hasmarks Perle
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:underline transition duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
        <UserMenu />

        <div className="dropdown">
          <div
            onClick={() => setNav(!nav)}
            tabIndex={0}
            className="btn btn-ghost text-3xl cursor-pointer md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links.map(({ id, link }) => (
              <li key={id} className="">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-neutral md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            nav ? "top-20" : "top-[-490px]"
          }`}
        >
          {links.map(({ id, link }) => (
            <li key={id} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link}
                className="capitalize text-white hover:underline hover:text-secondary duration-500"
              >
                {link}
              </a>
            </li>
          ))}
        </ul> */}
        {/* <UserMenu /> */}
      </div>
    </div>
  );
};

export default NavBar;
