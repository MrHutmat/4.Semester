'use client';

import React from 'react'
import Container from "../Container"
import Logo from "./Logo"
import Socials from "./Socials";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <div className="sticky w-full bg-white bg-opacity-90 backdrop-blur transition-all duration-100 z-10 flex top-0 h-16 shadow-sm">
        <nav className="flex">
        <NavItems />
        </nav>

        <nav>
          <Logo />
        </nav>

        <nav>
          <Socials />
        </nav>
    </div>
  )
}

export default NavBar