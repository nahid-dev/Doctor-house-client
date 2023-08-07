import React from "react";
import animation from "../../../public/padge_building.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const ContactUs = () => {
  const [isAdmin] = useAdmin();

  let path;
  if (isAdmin) {
    path = "/dashboard/allUsers";
  } else {
    path = "/dashboard/myAppointment";
  }
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="flex items-center flex-col md:flex-row">
          <div className="md:border-r-2 border-black md:pr-5 my-5 md:my-0 text-center ">
            <h4 className="text-xl md:text-2xl font-semibold">
              This page is not build yet
            </h4>
            <p>You can visit those page:</p>
            <div className="md:space-x-4 space-x-2 my-5">
              <Link
                className="p-2 bg-[#07332F] text-white rounded-md"
                to="/appointment"
              >
                Appointment
              </Link>
              <Link
                className="p-2 bg-[#07332F] text-white rounded-md"
                to={path}
              >
                Dashboard
              </Link>
            </div>
          </div>
          <div className="w-[300px] md:w-1/2">
            <Lottie animationData={animation}></Lottie>
          </div>
        </div>
      </div>
      <div className="text-center my-3 md:my-5">
        <span className="mr-2">or</span>
        <Link to="/" className="rounded-md bg-[#F7A582] text-white py-2 px-4">
          Back to Home page
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
