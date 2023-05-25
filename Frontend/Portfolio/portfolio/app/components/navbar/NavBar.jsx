"use client";

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Socials from "./Socials";
import NavItems from "./NavItems";
import { motion } from "framer-motion";

{
  /* <div className="sticky top-0 bg-opacity-90 backdrop-blur z-10">
<div className="mx-auto flex justify-between items-start md:items-center p-2 max-w-7xl"> */
}

const NavBar = () => {
  return (
    <div className="sticky top-0 bg-themeblack backdrop-blur z-10">
      <div className="mx-auto flex justify-between items-start md:items-center p-2 max-w-7xl">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className=""
        >
          <NavItems />
        </motion.div>

        <motion.div
          initial={{
            y: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className=""
        >
          <Logo />
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="hidden md:block"
        >
          <Socials />
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
