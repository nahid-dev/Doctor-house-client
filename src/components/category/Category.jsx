import React, { useState } from "react";
import img1 from "../../assets/category_Image/C-image-1.png";
import img2 from "../../assets/category_Image/C-Image_2.png";
import img3 from "../../assets/category_Image/C_Image_3.png";
import img4 from "../../assets/category_Image/C_Image_4.png";
import img5 from "../../assets/category_Image/C_Image_5.png";
import img6 from "../../assets/category_Image/C_Image_6.png";
import SubCategory from "../subCategory/SubCategory";

const Category = ({ date }) => {
  const [subCategory, setSubCategory] = useState(null);
  //   console.log(subCategory);
  return (
    <>
      <div className="main-container">
        {/* Header */}
        <div className="text-center my-5 md:my10">
          <div>
            <p className="text-[#F7A582] text-[22px]">
              Available Services on {date}
            </p>
            <h5 className="text-4xl font-bold text-[#3B3A3A]">
              Please select a service.
            </h5>
          </div>
        </div>
        {/* main category */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 py-10">
          {/* CATEGORY 1 */}
          <div
            onClick={() => setSubCategory("Teeth Orthodontics")}
            className="p-5 shadow-lg rounded-lg cursor-pointer "
          >
            <div className="flex items-center md:space-x-5">
              <div className="bg-[#FFDBBD] p-5 rounded-md">
                <img className="rounded-full" src={img1} alt="" />
              </div>
              <div>
                <h6 className="text-[25px] font-bold">Teeth Orthodontics</h6>
              </div>
            </div>
          </div>
          {/* CATEGORY 2 */}
          <div
            onClick={() => setSubCategory("Cosmetic Dentisty")}
            className="p-5 shadow-lg rounded-lg cursor-pointer"
          >
            <div className="flex items-center md:space-x-5">
              <div className="bg-[#FFDBBD] p-5 rounded-md">
                <img className="rounded-full" src={img2} alt="" />
              </div>
              <div>
                <h6 className="text-[25px] font-bold">Cosmetic Dentisty</h6>
              </div>
            </div>
          </div>
          {/* CATEGORY 3 */}
          <div
            onClick={() => setSubCategory("Teeth Cleaning")}
            className="p-5 shadow-lg rounded-lg cursor-pointer"
          >
            <div className="flex items-center md:space-x-5">
              <div className="bg-[#FFDBBD] p-5 rounded-md">
                <img className="rounded-full" src={img3} alt="" />
              </div>
              <div>
                <h6 className="text-[25px] font-bold">Teeth Cleaning</h6>
              </div>
            </div>
          </div>
          {/* CATEGORY 4 */}
          <div
            onClick={() => setSubCategory("Cavity Protection")}
            className="p-5 shadow-lg rounded-lg cursor-pointer"
          >
            <div className="flex items-center md:space-x-5">
              <div className="bg-[#37D4E9] p-5 rounded-md">
                <img className="rounded-full" src={img4} alt="" />
              </div>
              <div>
                <h6 className="text-[25px] font-bold">Cavity Protection</h6>
              </div>
            </div>
          </div>
          {/* CATEGORY 5 */}
          <div
            onClick={() => setSubCategory("Pediatric Dental")}
            className="p-5 shadow-lg rounded-lg cursor-pointer"
          >
            <div className="flex items-center md:space-x-5">
              <div className="bg-[#FFDBBD] p-5 rounded-md">
                <img className="rounded-full" src={img5} alt="" />
              </div>
              <div>
                <h6 className="text-[25px] font-bold">Pediatric Dental</h6>
              </div>
            </div>
          </div>
          {/* CATEGORY 6 */}
          <div
            onClick={() => setSubCategory("Oral Surgery")}
            className="p-5 shadow-lg rounded-lg cursor-pointer"
          >
            <div className="flex items-center md:space-x-5">
              <div className="bg-[#FFDBBD] p-5 rounded-md">
                <img className="rounded-full" src={img6} alt="" />
              </div>
              <div>
                <h6 className="text-[25px] font-bold">Oral Surgery</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubCategory subCategory={subCategory} date={date}></SubCategory>
    </>
  );
};

export default Category;
