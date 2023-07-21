import React from "react";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import ButtonBold from "../ButtonBold/ButtonBold";

const ContactUs = () => {
  return (
    <div className="main-container my-10">
      <div className="primary-bg p-24 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <div>
              <h2 className="font-bold text-white text-4xl mb-3">
                Contact With Us
              </h2>
              <p className="text-white leading-7">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inve ntore veritatis et quasi.
              </p>
              <div className="mt-5">
                <div className="flex items-center text-white">
                  <span className="mr-5">
                    <BsTelephoneOutbound size={30}></BsTelephoneOutbound>
                  </span>
                  <span>+88 01750 14 14 14</span>
                </div>
                <div className="flex items-center text-white mt-5">
                  <span className="mr-5">
                    <MdLocationOn size={32}></MdLocationOn>
                  </span>
                  <span>Dhanmondi, Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-2 gap-5">
              <input
                className="p-5 rounded-lg bg-[#09403b] text-white placeholder-white"
                type="text"
                placeholder="Name"
              />
              <input
                className="p-5 rounded-lg bg-[#09403b] text-white placeholder-white"
                type="email"
                placeholder="Email"
              />
              <input
                className="p-5 rounded-lg bg-[#09403b] text-white placeholder-white"
                type="text"
                placeholder="Mobile Number"
              />
              <input
                className="p-5 rounded-lg bg-[#09403b] text-white placeholder-white"
                type="text"
                placeholder="Doctor Name"
              />
              <input
                className="p-5 rounded-lg bg-[#09403b] text-white placeholder-white"
                type="date"
                placeholder="Date"
              />
              <input
                className="p-5 rounded-lg bg-[#09403b] text-white placeholder-white"
                type="time"
                placeholder="Time"
              />
            </div>
            <ButtonBold title={"Book Now"} type={"submit"}></ButtonBold>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
