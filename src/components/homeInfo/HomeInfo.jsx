import React from "react";
import { HiOutlineClock } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const HomeInfo = () => {
  return (
    <div className="main-container">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* part 1 */}
          <div className="primary-bg p-12 rounded-lg">
            <div className="flex gap-3">
              <div className="text-white mt-1">
                <HiOutlineClock size={32}></HiOutlineClock>
              </div>
              <div>
                <h6 className="text-[25px] font-bold text-white m-0">
                  Opening Hours
                </h6>
                <p className="text-white text-xl">
                  Open 9.00 am to 5.00pm Everyday
                </p>
              </div>
            </div>
          </div>
          {/* part 2 */}
          <div className="primary-btn-bg p-12 rounded-lg">
            <div className="flex gap-3">
              <div className="text-white mt-1">
                <MdLocationPin size={32}></MdLocationPin>
              </div>
              <div>
                <h6 className="text-[25px] font-bold text-white m-0">
                  Our Locations
                </h6>
                <p className="text-white text-xl">
                  Dhanmondi 17, Dhaka -1200, Bangladesh
                </p>
              </div>
            </div>
          </div>
          {/* part 3 */}
          <div className="primary-bg p-12 rounded-lg">
            <div className="flex gap-3">
              <div className="text-white mt-2">
                <BsFillTelephoneOutboundFill
                  size={32}
                ></BsFillTelephoneOutboundFill>
              </div>
              <div>
                <h6 className="text-[25px] font-bold text-white m-0">
                  Contact Us
                </h6>
                <p className="text-white text-xl">
                  +88 01750 00 00 00 <br />
                  +88 01750 00 00 00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
