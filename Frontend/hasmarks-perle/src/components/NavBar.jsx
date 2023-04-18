import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'contact'
    },
    {
      id: 3,
      link: 'about'
    },
    { 
      id: 4,
      link: 'login'
    },
    { 
      id: 5,
      link: 'opret'
    }
  ]



  return (
    <div className="shadow-md w-full fixed top-0 left-0">
    <div className="md:flex items-center justify-between bg-neutral py-4 md:px-10 px-7">
      <div className="font-bold text-4xl cursor-pointer flex items-center 
      text-white">
        Hasmarks Perle
      </div>
{/* 
      <ul className="hidden md:flex">

        {links.map(({id, link}) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:underline transition duration-200">{link}</li>
        ))}

      </ul> */}

      <div onClick={() => setNav(!nav)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>


      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-neutral md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${nav ? "top-20" : "top-[-490px]"}`}>
        {
          links.map(({id, link}) => (
            <li key={id} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link} className="capitalize text-white hover:underline hover:text-secondary duration-500">{link}</a>
            </li>
          ))
        }
      </ul>


      {/* {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">

        {links.map(({id, link}) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">{link}</li>
          ))}
      </ul>

      )} */}

      
    </div>
    </div>



  )
}

export default NavBar