"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineFile } from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="">
      <div className="h-screen grid place-items-center col-start-1 row-start-1">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center p-5 gap-10 max-w-7xl">
          <motion.img
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            src="/images/logoNoBorder.png"
            className="w-500 h-500 max-w-sm rounded-2xl shadow-2xl"
          >
            {/* <Image
              alt="Profile picture"
              className="max-w-sm rounded-2xl shadow-2xl"
              height="500"
              width="500"
              src="/images/logoNoBorder.png"
            /> */}
          </motion.img>
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h1 className="text-5xl font-bold">
              Mit navn er <a className="text-turkish">Mathias.</a>
            </h1>
            <p className="py-6">
              Jeg pt datamatikker studerende på UCL i Odense. Det her er mit
              personlige portfølje, jeg har lavet i anledning af mit 4.
              semester. Her kan du finde nogle af de forskellige ting jeg har
              arbejdet med inde for frontend, og app udvikling.
            </p>
            <button className="text-themelight bg-turkish hover:bg-darkturkish font-bold py-2 px-4 rounded inline-flex items-center">
              <AiOutlineFile size={25} className="mr-2" />
              <span>Her er mit CV</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
