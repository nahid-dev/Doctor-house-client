import React, { useState } from "react";
import "./appointDate.css";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import img1 from "../../assets/appointmentImage/appintmentImg-1.jpg";
import Category from "../category/Category";

const AppointDate = () => {
  const [selected, setSelected] = useState();
  const footer = selected ? (
    <p>You selected {format(selected, "PPP")}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  const date = footer?.props?.children[1];
  // console.log(date);
  return (
    <>
      <div className="section-bg py-10">
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            {/* part 1 */}
            <div>
              <div>
                <DayPicker
                  className=" "
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  footer={footer}
                ></DayPicker>
              </div>
            </div>
            {/* part 2 */}
            <div>
              <div>
                <img className="rounded-lg" src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Category date={date}></Category>
    </>
  );
};

export default AppointDate;
