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
    }
  ];


  return (
    <div className="h-screen max-w-7xl relative flex space-y-8 items-center justify-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-darkturkish">
        Projekter
      </h3>

      <div>
        <Frontend />
        <AppDev />
      </div>

      <div>

        {projects.map((project) => {
          return (
            <div key={project.projectId}>
              <img src={project.image} />
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
          )
        })}

      </div>
    </div>
  );
};

export default Projects;
