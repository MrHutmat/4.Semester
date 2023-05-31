"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="z-10 h-screen flex flex-col relative max-w-7xl items-center justify-evenly text-center md:text-left md:flex-row mx-auto p-5"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-darkturkish">
        About
      </h3>
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src="/images/profile.jpg"
        className="shadow-2xl -mb-20 w-56 h-56 object-cover rounded-full flex-shrink-0 md:w-[256px] md:h-[400px] md:rounded-2xl md:mb-0"
      />
      <div className="px-0 md:px-10 space-y-10">
        <h4 className="text-4xl font-semibold">Lidt omkring mig.</h4>
        <p className="text-sm">
          Mit navn er Mathias Helsengren, jeg er 26 år og går pt på UCL, hvor
          jeg studerer til datamatiker. Jeg er generelt en glad og meget
          smilende person, der godt kan lide at møde nye mennesker. Jeg er meget
          udadvendt og ekstrovert. Samtidig er jeg også meget seriøs og punktlig
          når det kommer til at arbejde, da jeg synes det er vigtigt ikke kun
          for en selv, men også ens kollegaer, at man gør sit bedste. På mit
          studie har jeg arbejde med mange forskellige projektstyringsmodeler,
          blandt andet SCRUM. Derudover har jeg også arbejdet med React og
          Android udvikling, som jeg også nævner i mit CV. Hvis i vil vide mere,
          eller se nogle af de forskellige ting jeg har arbejdet på, er i
          velkommen til at kontakte mig. <br /> <br />
          Siden jeg har været barn, har jeg altid interesseret mig for IT og
          computer, og er vokset op med en far som har været
          IT-support/IT-administrator. Jeg håber at høre fra jer, og få en
          praktikplads.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
