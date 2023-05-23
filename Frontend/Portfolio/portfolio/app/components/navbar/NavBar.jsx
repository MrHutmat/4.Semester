//'use client';

import React from 'react'
import Container from "../Container"
import Logo from "./Logo"
import Socials from "./Socials";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <div className="sticky w-full flex bg-white bg-opacity-90 backdrop-blur transition-all duration-100 z-10">
        <nav className="">
        <NavItems />
        </nav>

        <nav className="">
          <Logo />
        </nav>

        <nav className="hidden md:block">
          <Socials />
        </nav>
    </div>
  )
}

export default NavBar