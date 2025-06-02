import React from "react";
import Boton from "~/componentes/Boton";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router";
import ThemeToggle from "~/componentes/ThemeToggle";

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
      <nav className="flex w-full align-top justify-betwee">
        <div className="relative z-10 flex flex-col self-center justify-start w-full md:flex-row">
          <div className="flex">
            <div className="hidden md:block">
              <NavLink to={"/"} className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "pointer-events-none" : ""
                  }>
                <Boton key={1} variant="aikos" text="aiko's" />
              </NavLink>
            </div>

            <div
              className="md:ms-2"
              onMouseEnter={() => setShowNavbar(true)}
              // onMouseLeave={() => setShowNavbar(false)}
            >
              <Boton key={2} variant="blanco" imagen="iconos/bars-solid.svg" />
            </div>
          </div>
          <motion.div
            className="bg-white shadow-lg ms-0 md:ms-2 mt-1 md:mt-0 md:translate-x-0 w-[50%] md:w-auto "
            initial={{ opacity: 0, x: -20000}}
            animate={{ opacity: showNavbar ? 1 : 0, x:0}}
            transition={{ duration: 0.2 }}
            // onMouseEnter={() => setShowNavbar(true)}
            onMouseLeave={() => setShowNavbar(false)}
          >
            <ul className="flex flex-col h-full text-black md:flex-row ">
                <NavLink to={"/"} className={ ({ isActive, isPending }) =>
                  isPending ? "bg-amber-400" : isActive ? "bg-black text-white pointer-events-none" : ""
                }>
                  <li className="flex items-center h-full px-6 py-2 text-center border-b-2 border-black md:hidden md:border-b-0 md:border-e-2 hover:bg-grey md:py-0">
                    Home
                  </li>
                </NavLink>

                <NavLink to={"about"} className={({ isActive, isPending }) =>
                  isPending ? "bg-amber-400" : isActive ? "bg-black text-white pointer-events-none" : ""
                }>
                <li className="flex items-center h-full px-6 py-2 text-center border-b-2 border-black md:border-b-0 md:border-e-2 hover:bg-grey md:py-0">
                  About Us
                </li>
                </NavLink>

                <NavLink to={"contact"} className={({ isActive, isPending }) =>
                    isPending ? "bg-amber-400" : isActive ? "bg-black text-white pointer-events-none" : ""
                  }>
                  <li className="flex items-center h-full px-6 py-2 text-center border-b-2 border-black md:border-b-0 md:border-e-2 hover:bg-grey md:py-0">
                    Contact
                  </li>
                </NavLink>
                
                <NavLink to={"services"} className={({ isActive, isPending }) =>
                    isPending ? "bg-amber-400" : isActive ? "bg-black text-white pointer-events-none" : ""
                  }>
                  <li className="flex items-center h-full px-6 py-2 text-center border-b-2 border-black md:border-b-0 md:border-e-2 hover:bg-grey md:py-0">
                    Services
                  </li>
                </NavLink>
            </ul>
          </motion.div>
        </div>

        <div className="">
          <ThemeToggle />
        </div>
      </nav>
  );
}

export default Header;
