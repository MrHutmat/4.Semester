"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
    <div>
      <h1 className="text-turkish font-black text-4xl cursor-pointer">
        HELSENGREN
      </h1>
    </div>
  );
};

export default Logo;
