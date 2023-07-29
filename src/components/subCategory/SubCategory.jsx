import React from "react";

import ServiceItem from "./ServiceItem";

const services = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    image: "https://i.ibb.co/yYTXJsj/sub-Cat-1.png",
    time: "8:00 AM - 9:00 AM",
    fee: 200,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    image: "https://i.ibb.co/NNMqytS/sub-Cat-2.png",
    time: "10.05 AM - 11:30 AM",
    fee: 144,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    image: "https://i.ibb.co/N9rHJzt/sub-Cat-3.png",
    time: "8:00 AM - 9:00 AM",
    fee: 250,
  },
  {
    id: 4,
    name: "Teeth Orthodontics",
    image: "https://i.ibb.co/F3kV9bm/sub-Cat-4.png",
    time: "8:00 AM - 9:00 AM",
    fee: 150,
  },
  {
    id: 5,
    name: "Teeth Orthodontics",
    image: "https://i.ibb.co/HFrN5xZ/sub-Cat-5.png",
    time: "10.05 AM - 11:30 AM",
    fee: 333,
  },
];

const SubCategory = ({ subCategory, date }) => {
  return (
    <>
      <div className="main-container md:py-10">
        {subCategory && (
          <div className="text-center">
            <p className="font-bold text-4xl">
              Available slots for {subCategory}
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
          {subCategory === "Teeth Orthodontics" &&
            services.map((service) => (
              <ServiceItem
                date={date}
                service={service}
                key={service.id}
              ></ServiceItem>
            ))}
        </div>
      </div>

      {/* Modal */}
    </>
  );
};

export default SubCategory;
