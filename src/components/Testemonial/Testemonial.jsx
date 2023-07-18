import React from "react";
import SectionHeader from "../sectionHeader/SectionHeader";
import slideImg1 from "../../assets/slideImg/slideImg-1.png";
// import slideImg2 from '../../assets/slideImg/slideImg-2.png'
import slideImg3 from "../../assets/slideImg/quotationImg.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { SwiperNavButton } from "../SwiperNavButton/SwiperNavButton";

const reviews = [
  {
    id: 1,
    image: { slideImg1 },
    name: "Awlad Hosen",
    Designation: "Product Designer",
    review:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.",
  },
  {
    id: 2,
    image: { slideImg1 },
    name: "Farhana Hossain",
    Designation: "Brand Designer",
    review:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.",
  },
  {
    id: 3,
    image: { slideImg1 },
    name: "Farhana Hossain",
    Designation: "Brand Designer",
    review:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.",
  },
  {
    id: 4,
    image: { slideImg1 },
    name: "Awlad Hosen",
    Designation: "Product Designer",
    review:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.",
  },
];

const Testemonial = () => {
  return (
    <>
      <SectionHeader
        title={"What Our Patients Says"}
        pera={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      ></SectionHeader>
      <div className="main-container my-10">
        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="border p-10 rounded-md">
                <div className="flex justify-between">
                  <div className="flex items-center md:space-x-4 md:mb-4">
                    <img src={review.image.slideImg1} alt="" />
                    <div>
                      <h6 className="font-bold text-xl">{review.name}</h6>
                      <p className="text-[#6C6B6B]">{review.Designation}</p>
                    </div>
                  </div>
                  <div>
                    <img src={slideImg3} alt="" />
                  </div>
                </div>
                <div>
                  <p className="text-[#6C6B6B]">{review.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButton></SwiperNavButton>
        </Swiper>
      </div>
    </>
  );
};

export default Testemonial;
