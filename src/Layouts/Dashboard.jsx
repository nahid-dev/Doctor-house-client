import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import "./dashboard.css";
import Hamburger from "hamburger-react";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();

  let path;
  if (isAdmin) {
    path = "/dashboard/allUsers";
  } else {
    path = "/dashboard/myAppointment";
  }
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        navigate("/");
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="contactUs">Contact Us</Link>
      </li>
      <li>
        <Link to={path}>Dashboard</Link>
      </li>
      {user && (
        <li>
          <Link
            onClick={handleLogOut}
            className="bg-white border border-white text-[#07332F] hover:text-black hover:bg-white rounded-md px-4 py-1"
          >
            LogOut
          </Link>
        </li>
      )}
    </>
  );
  const sideBarItem = (
    <>
      {isAdmin ? (
        <>
          <li className="border">
            <NavLink
              className={({ isActive }) =>
                isActive ? "d-active" : "d-default"
              }
              to="/dashboard/allUsers"
            >
              All Users
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "d-active" : "d-default"
              }
              to="/addADoctor"
            >
              Add a Doctor
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "d-active" : "d-default"
              }
              to="/manageDoctors"
            >
              Manage Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "d-active" : "d-default"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="border">
            <NavLink
              className={({ isActive }) =>
                isActive ? "d-active" : "d-default"
              }
              to="/dashboard/myAppointment"
            >
              My Appointment
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "d-active" : "d-default"
              }
              to="/myReview"
            >
              My Review
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "d-active" : "d-default"
              }
              to="/myHistory"
            >
              My History
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "d-active" : "d-default"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="primary-bg">
        {/* NavBar */}
        <nav className=" flex items-center main-container text-white justify-between py-5">
          <div>
            <Link className="text-xl font-light uppercase">Doc House</Link>
          </div>
          <div>
            <ul className="md:flex items-center md:space-x-5 hidden">
              {navItems}
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
                  className={`absolute primary-bg top-[68px]  w-2/3  px-5 py-5 text-center space-y-5  h-full transition-all duration-300 ${
                    isOpen ? "left-0" : "-left-[527px]"
                  }`}
                >
                  {navItems}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Sidebar */}
      <div className="">
        <div className="grid grid-cols-12">
          <aside className="col-span-12 md:col-span-3">
            <div>
              <ul className="space-y-1">{sideBarItem}</ul>
            </div>
          </aside>
          <div className="col-span-10 md:col-span-9 bg-[#F1F5F9] p-10">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
