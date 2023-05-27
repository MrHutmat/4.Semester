"use client";

import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";
import NavItems from "./NavItems";
import { motion } from "framer-motion";

{
  /* <div className="sticky top-0 bg-themeblack mt-7 z-10">
      <div className="mx-auto flex justify-between items-start md:items-center p-2 max-w-7xl px-3">
      
      <div className="sticky p-5 justify-between top-0 flex bg-themeblack mt-7 z-10 max-w-7xl items-start mx-auto">
      <div className="flex flex-row items-center">
      */
}

const NavBar = () => {
  return (
    <div className="sticky top-0 bg-themeblack mt-7 z-10 py-5 px-2 max-w-7xl mx-auto">
      <div className="flex justify-between items-start md:items-center">
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
          className="px-2"
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
          className="hidden md:flex"
        >
          <Socials />
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
