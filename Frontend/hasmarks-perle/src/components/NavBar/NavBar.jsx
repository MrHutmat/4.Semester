import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import UserMenu from "./UserMenu";
import UserItems from "./UserItems";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="navbar fixed z-50 shadow-md bg-neutral">
      <div className="flex-1 px-2">
        <div className="btn btn-ghost text-2xl">Hasmarks Perle</div>

        <div className="flex flex-1 px-2 justify-end">
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium hover:underline hover:text-secondary transition duration-200"
              >
                {link}
              </li>
            ))}
            <UserMenu />
          </ul>
          <div className="dropdown dropdown-end">
            <div
              onClick={() => setIsOpen((prev) => !prev)}
              tabIndex={0}
              className="btn btn-ghost text-3xl md:hidden"
            >
              {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {isOpen && (
              <ul className="menu dropdown-content capitalize mt-4 p-2 shadow bg-neutral rounded-box w-52">
                {links.map(({ id, link }) => (
                  <li key={id}>
                    <a>{link}</a>
                  </li>
                ))}
                <UserItems />
              </ul>
            )}
          </div>
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
