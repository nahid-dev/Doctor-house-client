import React from "react";
import serviceLeftImg from "../../assets/services_images/service_img_1.png";
import ServiceTab from "../service-tab/ServiceTab";

const Services = () => {
  return (
    <div className="main-container md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <img src={serviceLeftImg} alt="Services Image" />
        </div>
        <div>
          <div>
            <h2 className="heading-two">Our Service</h2>
            <p className="section-pera">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <ServiceTab></ServiceTab>
        </div>
      </div>
    </div>
  );
};

export default Services;
