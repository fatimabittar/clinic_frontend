import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import "../../styles/Header.css";

export const Header = () => {
  const path = window.location.pathname;
  const [openMenu, setOpenMenu] = useState(false);
  const nav = useNavigate();
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = () => {
    setOpenMenu(false);
    logout();
    nav("/");
  };
  return (
    <header>
      <a href="/">
        <img src={logo} alt="logo" className="logoheader" />
      </a>
      <ul className={`${openMenu === true ? "nav-open" : "nav-closed"}`}>
        <li className="animate">
          <Link
            to="/"
            className={path === "/" ? "current" : ""}
            onClick={() => setOpenMenu(false)}
          >
            Home
          </Link>
        </li>
        <li className="animate">
          <Link
            to="/about"
            className={path === "/about" ? "current" : ""}
            onClick={() => setOpenMenu(false)}
          >
            About
          </Link>
        </li>
        <li className="animate">
          <Link
            to="/services"
            className={path === "/services" ? "current" : ""}
            onClick={() => setOpenMenu(false)}
          >
            Services
          </Link>
        </li>
        <li className="animate">
          <Link
            to="/reviews"
            className={path === "/reviews" ? "current" : ""}
            onClick={() => setOpenMenu(false)}
          >
            Reviews
          </Link>
        </li>
        <li className="animate">
          <Link
            to="/contact"
            className={path === "/contact" ? "current" : ""}
            onClick={() => setOpenMenu(false)}
          >
            Contact
          </Link>
        </li>
        {user && (
          <li>
            <Link
              to="/dashboard"
              className={path === "/dashboard" ? "current" : ""}
              onClick={() => setOpenMenu(false)}
            >
              Dashboard
            </Link>
          </li>
        )}
        <li className="left">
          <button
            onClick={() => {
              setOpenMenu(false);
              nav("/", { state: { targetId: "appointment" } });
            }}
            className={openMenu ? "secondary-button" : "primary-button"}
          >
            Appointment
          </button>
        </li>
        {user && (
          <li className="left">
            <button onClick={handleClick} className="secondary-button">
              Logout
            </button>
          </li>
        )}
        {!user && (
          <li className="left">
            <div>
              <button
                onClick={() => {
                  setOpenMenu(false);
                  nav("/login");
                }}
                className="secondary-button"
              >
                Login
              </button>
            </div>
          </li>
        )}

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="nav-btn nav-close-btn"
        >
          {openMenu ? <FaTimes /> : <FaBars />}
        </button>
      </ul>
    </header>
  );
};
