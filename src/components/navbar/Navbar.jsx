
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

import {FaHome,FaUser,FaFolderOpen,FaEnvelopeOpen} from "react-icons/fa";

const Navbar = () => {

  const links = [
    {
      id: 1,
      name: "Home",
      icon: <FaHome className="nav__icon" />,
      path: "/",
    },

    {
      id: 2,
      name: "Dashboard",
      icon: <FaFolderOpen className="nav__icon" />,
      path: "/dashboard",
    },
    {
      id: 3,
      name: "About_Us",
      icon: <FaUser className="nav__icon" />,
      path: "/about",
    },
    {
      id: 4,
      name: "Contact",
      icon: <FaEnvelopeOpen className="nav__icon" />,
      path: "/contact",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (

    <nav className="nav">
      <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>

        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav__item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav__link active_link" : "nav__link"
                  }
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {icon}
                  <h3 className="nav__name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>

      </div>

      <div
        className={` ${
          showMenu ? "nav__toggle animate-toggle" : "nav__toggle"
        }`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
