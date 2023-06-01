"use client";

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const Alert = ({ setAlert, keyId }) => {
  return (
    <motion.div
      initial={{
        //y: -10,
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        // y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      exit={{
        opacity: 0.5,
        x: 500,
      }}
      className="flex items-center p-4 text-themepink rounded-md bg-themelight"
    >
      <BsFillInfoSquareFill className="flex-shrink-0 w-5 h-5" />
      <div className="ml-3 text-sm font-medium">
        <p>{setAlert}</p>
      </div>
      {/* <button
        onClick={() => setOpen(false)}
        className="ml-auto -mx-1.5 -my-1.5 bg-themelight text-themepink rounded-lg focus:ring-2 focus:ring-darkturkish p-1.5 hover:bg-[#353d47] inline-flex h-8 w-8"
      >
        <FaTimes className="w-5 h-5" />
      </button> */}
    </motion.div>
  );
};

export default Alert;
