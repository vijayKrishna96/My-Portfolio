import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

import { IoClose } from "react-icons/io5";
import { RxDropdownMenu } from "react-icons/rx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container  mx-auto">
      <div className="fixed flex container mx-auto flex-row pt-6 h-14 justify-between items-center">
        <div className="">
          <img
            src="/src/assets/v (2).png"
            className="h-12 rounded-full"
            alt=""
          />
        </div>
        <div className="flex nav">
          <ul
            className={` flex gap-7 items-center justify-center text-white ${
              isMenuOpen ? "nav-link show" : "nav-link"
            }`}
          >
            <li>
              <NavLink to="/home" activeClassName="active ">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="menu text-3xl text-white" onClick={toggleMenu}>
            {isMenuOpen ? <IoClose /> : <RxDropdownMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}
