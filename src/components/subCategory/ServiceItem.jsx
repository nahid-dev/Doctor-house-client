import React from "react";
import CategoryModal from "./CategoryModal";

const ServiceItem = ({ service, date }) => {
  return (
    <>
      <div key={service.id} className="shadow-lg text-center p-5 rounded-lg ">
        <div className="space-y-5 flex flex-col items-center">
          <img src={service.image} alt="" />
          <h6 className="text-[25px] font-bold">{service.name}</h6>
          <p className="font-bold">{service.time}</p>
          <CategoryModal date={date} service={service}></CategoryModal>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
