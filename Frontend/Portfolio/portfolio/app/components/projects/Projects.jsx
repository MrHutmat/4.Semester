"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Frontend from "./Frontend";
import AppDev from "./AppDev";

const Projects = () => {
  const projects = [
    {
      name: "Test",
      description: "Det her er en lille test til at starte på",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 0,
    },
    {
      name: "Test",
      description: "Det her er en lille test til at starte på",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 0,
    },
    {
      name: "Test",
      description: "Det her er en lille test til at starte på",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 0,
    },
    {
      name: "Test",
      description: "Det her er en lille test til at starte på",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 0,
    },
  ];

  return (
    <div className="z-10 h-[100%] flex flex-col relative max-w-7xl items-center justify-evenly text-center md:text-left md:flex-row mx-auto p-5">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-darkturkish">
        Projects
      </h3>

      <div className="flex flex-col mt-[300px]">
        <div className="flex flex-col mb-20 space-y-5">
          <h3 className="text-4xl font-semibold">4. Semester.</h3>
          <p className="text-lg">
            Her er mine 2 emner, <a className="text-turkish">frontend</a> og{" "}
            <a className="text-turkish">app-udvikling</a>, som jeg har arbejdet
            med under 4. Semester på UCL. Det er her inde du vil finde lærings
            planer, og lærings mål for de to emner.
          </p>

          <div className="flex flex-row space-x-5">
            <button className="navButton basis-1/2 text-turkish hover:bg-left-bottom hover:text-themeblack font-bold px-4 py-2 text-center ml-0 cursor-pointer">
              <span>Frontend</span>
            </button>
            <button className="navButton basis-1/2 text-turkish hover:bg-left-bottom hover:text-themeblack font-bold px-4 py-2 text-center ml-0 cursor-pointer">
              <span>App dev</span>
            </button>
          </div>

          {/* <button className="navButton text-turkish hover:bg-left-bottom hover:text-themeblack font-bold px-4 py-2 text-center ml-0 cursor-pointer">
            <span>Frontend</span>
          </button>

          <button className="navButton text-turkish hover:bg-left-bottom hover:text-themeblack font-bold px-4 py-2 text-center ml-0 cursor-pointer">
            <span>App dev</span>
          </button> */}
        </div>

        <div className="flex flex-col">
          {projects.map((project) => {
            return (
              <div key={project.projectId}>
                <img className="w-[600px] h-[400px] " src={project.image} />
                <div>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <div>
                    <SocialIcon
                      url={project.github}
                      target="_blank"
                      fgColor="#66fcf1"
                      bgColor="transparent"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
