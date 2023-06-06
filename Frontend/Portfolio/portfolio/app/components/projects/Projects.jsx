"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Frontend from "./Frontend";
import AppDev from "./AppDev";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      name: "Test",
      description:
        "Det her er en lille test til at starte på, her skriver jeg en masse bare for at se hvordan det ser ud, hvis vi har en hel del tekst, bam bamb bam test tstesd. asd asoddsdsd. asdasdasdaoasd. asdasd asd ad. asdasdasdasd, asdasdasda",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 1,
      path: "/",
    },
    {
      name: "Test",
      description:
        "Det her er en lille test til at starte på Det her er en lille test til at starte på, her skriver jeg en masse bare for at se hvordan det ser ud, hvis vi har en hel del tekst, bam bamb bam test tstesd. asd asoddsdsd. asdasdasdaoasd. asdasd asd ad. asdasdasdasd, asdasdasda",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 2,
      path: "/",
    },
    {
      name: "Test",
      description: "Det her er en lille test til at starte på",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 3,
      path: "/",
    },
    {
      name: "Test",
      description: "Det her er en lille test til at starte på",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 4,
      path: "/",
    },
  ];

  return (
    <div className="z-10 h-[100%] flex flex-col relative max-w-7xl items-center justify-evenly text-center md:text-left md:flex-row mx-auto p-5">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-darkturkish">
        Projects
      </h3>

      <div className="flex flex-col mt-[300px]">
        <div className="flex flex-col place-items-center">
          <div className="lg:grid grid-cols-2 auto-cols-max p-5 gap-10 mb-20 space-y-5">
            <div className="text-start">
              <h3 className="text-4xl font-semibold mb-2">4. Semester.</h3>
              <p className="text-lg">
                Her er mine 2 emner, <a className="text-turkish">frontend</a> og{" "}
                <a className="text-turkish">app-udvikling</a>, som jeg har
                arbejdet med under 4. Semester på UCL. Det er her inde du vil
                finde lærings planer, og lærings mål for de to emner.
              </p>
            </div>

            <div className="flex flex-row lg:flex-col space-x-2 lg:space-x-0 lg:space-y-5">
              <Link
                key={"frontend"}
                href={"/frontend"}
                className="navButton basis-1/2 text-turkish hover:bg-left-bottom hover:text-themeblack font-bold px-4 py-2 text-center ml-0 cursor-pointer"
              >
                <span>Frontend</span>
              </Link>
              <Link
                key={"appdev"}
                href={"/appdev"}
                className="navButton basis-1/2 text-turkish hover:bg-left-bottom hover:text-themeblack font-bold px-4 py-2 text-center ml-0 cursor-pointer"
              >
                <span>App dev</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project) => {
            return (
              <div
                className="flex flex-col mx-auto xl:mx-0 xl:flex-row text-start justify-between items-center gap-6 xl:max-w-none max-w-[700px] "
                key={project.projectId}
              >
                <div className="space-y-4">
                  <h4 className="text-3xl font-semibold">{project.name}</h4>
                  <p>{project.description}</p>
                  <div className="flex">
                    <Link key={project.name} href={project.path}>
                      <button className="navButton text-turkish hover:bg-left-bottom hover:text-themeblack font-bold px-4 py-2 text-center ml-0 cursor-pointer">
                        Læs mere...
                      </button>
                    </Link>
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                      }}
                    >
                      <SocialIcon
                        url={project.github}
                        target="_blank"
                        fgColor="#66fcf1"
                        bgColor="transparent"
                      />
                    </motion.div>
                  </div>
                </div>
                <img
                  className="shadow-2xl object-cover rounded-lg flex-shrink-0 w-[700px] h-[400px]"
                  src={project.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
//grid col-start-1 row-start-1 xl:justify-between space-x-5 xl:flex-row p-5 space-y-8 text-start place-items-center
