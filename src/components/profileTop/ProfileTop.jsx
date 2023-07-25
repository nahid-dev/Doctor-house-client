import React from "react";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { TfiLocationPin } from "react-icons/tfi";

const ProfileTop = ({ doctorProfile }) => {
  const { name, image, rating, title, specialty, selectOptions } =
    doctorProfile;
  return (
    <>
      <div className="main-container  bg-[#F3F3F3] py-14">
        <div className="w-full p-6 flex gap-10 bg-white rounded-lg items-center">
          <div className="w-full md:w-1/3 h-full">
            <div className="">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div>
              <div>
                <h4 className="text-[40px] font-bold">{name}</h4>
                <span className="text-[18px] text-[#6C6B6B]">{title}</span>
              </div>
              <div className="md:space-y-3">
                <div className="flex">
                  <Rating
                    value={rating}
                    readOnly
                    style={{ maxWidth: 100 }}
                  ></Rating>{" "}
                  <span>({rating})</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">
                    <TfiLocationPin></TfiLocationPin>
                  </span>
                  <span className="card-text-color">
                    Dhanmondi, Dhaka, Bangladesh .{" "}
                    <span className="text-[#F7A582] font-bold">
                      Get Direction
                    </span>
                  </span>
                </div>
              </div>
              <div className=" space-y-5 mt-5">
                <div className="my-2">
                  <span className="text-[#6C6B6B] font-bold">
                    Specialist :{" "}
                  </span>
                  <span className="border rounded-md py-2 px-2 border-[#6C6B6B] text-[#6C6B6B]">
                    {specialty}
                  </span>
                </div>
                <div className="my-2 space-x-4">
                  <span className="text-[#6C6B6B] font-bold">Others :</span>
                  {selectOptions.map((item) => (
                    <span
                      key={item.value}
                      className="border rounded-md py-2 px-2 border-[#6C6B6B] text-[#6C6B6B]"
                    >
                      {item.value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTop;
