import React from "react";
import { SocialIcon } from "react-social-icons";

const Socials = () => {
  return (
    <div className="flex flex-row items-center">
      <div>
        <SocialIcon
          url="https://github.com/MrHutmat/4.Semester"
          fgColor="#66fcf1"
          bgColor="transparent"
        />
      </div>
      <div>
        <SocialIcon
          url="https://www.linkedin.com/in/mathias-helsengren-1231b9139/"
          fgColor="#66fcf1"
          bgColor="transparent"
        />
      </div>
    </div>
  );
};

export default Socials;
