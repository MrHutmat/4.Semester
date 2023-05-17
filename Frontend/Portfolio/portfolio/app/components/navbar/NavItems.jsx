//'use client';
 
import React from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
//import { navLinks } from "@/app/navLinks";
 

const NavItems = () => {
    const pathname = usePathname();

    const navLinks = [
        {
            name: "Home", 
            href: "/" 
        },
        {
            name: "About",
            href: "/#about",
        },
        {
            name: "Projects",
            href: "/#projects",
        },
        {
            name: "Contact",
            href: "#contact",
        },
      ];

  return (



        // <ul>
        //     {navLinks.map((link) => (
        //         <li
        //         href={link.href}
        //         >
        //             {link.name}
        //         </li>
        //     ))}
        // </ul>
    <ul>
        {pathname} asd
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
 
        return (
          <Link
            className={isActive ? 'text-yellow-400' : 'text-black'}
            href={link.href}
            id={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </ul>
  )
}

export default NavItems