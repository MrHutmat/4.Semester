"use client";

import React from "react";
import { motion } from "framer-motion";

const MobileNav = ({ toggle }) => {
  return (
    <button className="mt-1 flex items-center" onClick={toggle}>
      <span
        className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          navBar ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>

      <span
        className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
          navBar ? "opacity-0" : "opacity-100"
        }`}
      ></span>

      <span
        className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          navBar ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export default MobileNav;

{
  /* <button className="mt-1 flex items-center" onClick={toggle}>
<svg width="23" height="23" viewBox="0 0 23 23">
  <Path
    variants={{
      closed: { d: "M 2 2.5 L 20 2.5" },
      open: { d: "M 3 16.5 L 17 2.5" },
    }}
  />
  <Path
    d="M 2 9.423 L 20 9.423"
    variants={{
      closed: { opacity: 1 },
      open: { opacity: 0 },
    }}
    transition={{ duration: 0.1 }}
  />
  <Path
    variants={{
      closed: { d: "M 2 16.346 L 20 16.346" },
      open: { d: "M 3 2.5 L 17 16.346" },
    }}
  />
</svg>
</button> */
}
