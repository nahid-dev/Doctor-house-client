import React from "react";
import "./homeBanner.css";
import bannerImg from "../../assets/banner_images/banner_img_1.png";
import shape01 from "../../assets/banner_images/banner_shape_1.png";
import shape02 from "../../assets/banner_images/baner_shap_2.png";
import shape03 from "../../assets/banner_images/banner_shape_3.png";
import MainButton from "../button/MainButton";

const HomeBanner = () => {
  return (
    <>
      <div className="primary-bg h-[800px] flex items-center main-container relative">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="flex items-center col-span-7">
              <div className="text-center md:text-left">
                <h1 className="heading-color text-[30px] md:text-7xl font-semibold text-center md:text-left">
                  Your Best Medical Help Center
                </h1>
                <p className="heading-color font-semibold mb-5">
                  Lorem Ipsum is simply dummy text they are printing typesetting
                  has been the industry’s stardard.
                </p>
                <MainButton
                  path={"/appointment"}
                  title={"All Service"}
                ></MainButton>
              </div>
            </div>
            <div className="col-span-5">
              <img src={bannerImg} alt="" />
            </div>
          </div>
          <div>
            <div className="absolute top-0 left-0">
              <img src={shape01} alt="" />
            </div>
          </div>
          <div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img src={shape02} alt="" />
            </div>
          </div>
          <div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <img src={shape03} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
