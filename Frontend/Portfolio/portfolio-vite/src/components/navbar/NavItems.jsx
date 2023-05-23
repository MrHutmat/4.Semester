'use client';
 
import React from "react";
//import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
//import { Link } from 'react-scroll';
//import { navLinks } from "@/app/navLinks";
 

const NavItems = () => {
  const router = useRouter();



    // const pathname = usePathname();

    // const navLinks = [
    //     {
    //         name: "Home", 
    //         href: "/" 
    //     },
    //     {
    //         name: "About",
    //         href: "/#about",
    //     },
    //     {
    //         name: "Projects",
    //         href: "/#projects",
    //     },
    //     {
    //         name: "Contact",
    //         href: "#contact",
    //     },
    //   ];

  return (
    <ul>
      <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>


        // <ul>
        //     {navLinks.map((link) => (
        //         <li
        //         href={link.href}
        //         >
        //             {link.name}
        //         </li>
        //     ))}
        // </ul>
    // <ul>
    //     {pathname} asd
    //   {navLinks.map((link) => {
    //     const isActive = pathname === link.href;
 
    //     return (
    //       <Link
    //         className={isActive ? 'text-yellow-400' : 'text-black'}
    //         href={link.href}
    //         id={link.name}
    //       >
    //         {link.name}
    //       </Link>
    //     );
    //   })}
    // </ul>
  )
}

export default NavItems