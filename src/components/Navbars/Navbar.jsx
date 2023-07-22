import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import mainLogo from "../../assets/mainLogo.png";
import "./navbar.css";
import Headroom from "react-headroom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err.message);
      });
  };
  const navItem = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
          to="/appointment"
        >
          Appointment
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to="/dashboard/allUsers"
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {user ? (
        <li>
          <Link
            onClick={handleLogOut}
            className="bg-white border border-white text-[#07332F] hover:text-black hover:bg-white rounded-md px-4 py-1"
          >
            Logout
          </Link>
        </li>
      ) : (
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to="/authentication/login"
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <>
      <Headroom>
        <div className="navbar main-container primary-bg text-white z-50">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 items-center"
              >
                {navItem}
              </ul>
            </div>
            <img src={mainLogo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex"></div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 items-center space-x-3">
              {navItem}
            </ul>
          </div>
        </div>
      </Headroom>
    </>
  );
};

export default Navbar;
