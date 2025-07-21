import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import mainLogo from "../../assets/mainLogo.png";
import "./navbar.css";
import Headroom from "react-headroom";
import { AuthContext } from "../../Providers/AuthProviders";
import useAdmin from "../../Hooks/useAdmin";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const pathName = window.location.pathname;
  const isAboutPage = pathName.includes("/about");
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  const [isAdmin] = useAdmin();
  const [hasScrolled, setHasScrolled] = useState(false);

  let path;
  if (isAdmin) {
    path = "/dashboard/allUsers";
  } else {
    path = "/dashboard/myAppointment";
  }

  useEffect(() => {
    // Check initial scroll position
    if (window.scrollY > 0) {
      setHasScrolled(true);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            to="/review"
          >
            Review
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to="contactUs"
          >
            Contact Us
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to={path}
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
    <div>
      <Headroom>
        {/* NavBar */}
        <div
          className={`${
            hasScrolled
              ? "primary-bg"
              : isAboutPage
              ? "primary-bg"
              : "bg-transparent"
          }`}
        >
          <nav className="flex items-center main-container text-white justify-between py-5">
            <div>
              <Link className="text-xl font-light uppercase">
                <img src={mainLogo} alt="" />
              </Link>
            </div>
            <div>
              <ul className="md:flex items-center md:space-x-5 hidden">
                {navItem}
              </ul>
              <div className="md:hidden">
                <span
                  onClick={() => {
                    setOpen(!isOpen);
                  }}
                >
                  <Hamburger toggled={isOpen} toggle={setOpen} />
                </span>
                <div>
                  <ul
                    className={`absolute primary-bg top-[102px]  w-2/3  px-5 py-5 text-center space-y-5  h-screen transition-all duration-300 ${
                      isOpen ? "left-0" : "-left-[527px]"
                    }`}
                  >
                    {navItem}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Headroom>
    </div>
  );
};

export default Navbar;
