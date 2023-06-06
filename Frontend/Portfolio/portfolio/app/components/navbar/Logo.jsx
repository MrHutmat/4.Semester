"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Logo = () => {
  const router = useRouter();
  return (
    // <Image
    //     alt="Logo"
    //     className=""
    //     height="100"
    //     width="100"
    //     src="/images/logo.png"
    // />
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
    >
      <h1 className="text-turkish font-black text-4xl cursor-pointer">
        HELSENGREN
      </h1>
    </motion.div>
  );
};

export default Logo;
