import React from "react";
import headerImg2 from "../../assets/pageHeaderImg/headerImg-1.png";
import headerImg1 from "../../assets/pageHeaderImg/headerImg-2.png";

const PageHeader = ({ title, navigation }) => {
  return (
    <>
      <div className="primary-bg relative md:h-[400px]">
        <div className="absolute bottom-0 left-10">
          <img src={headerImg1} alt="Header_Bg_Img" />
        </div>
        <div className="absolute right-0 top-6 ">
          <img src={headerImg2} alt="Header_Bg_Img" className="" />
        </div>
        <div className="main-container h-full flex items-center">
          <div>
            <span className="text-white text-[18px] font-light">
              {navigation}
            </span>
            <h3 className="text-white text-[45px] font-bold">{title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
