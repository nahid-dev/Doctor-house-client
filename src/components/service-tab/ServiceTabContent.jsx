import React from "react";

// import tabImage1 from "../../assets/services_images/service_img_2.png";

const ServiceTabContent = ({ post }) => {
  // console.log(post.image);
  return (
    <div>
      <img src={post.image} alt="" />
      <h3 className="text-3xl font-bold md:my-7">{post.title}</h3>
      <p className="section-pera">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Sed ut perspiciatis unde omnis iste natus error <br /> <br />{" "}
        Sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo.
      </p>
      <button className="px-3 py-2 border border-[#F7A582] rounded my-5 font-bold hover:bg-[#F7A582] hover:text-white">
        More Details
      </button>
    </div>
  );
};

export default ServiceTabContent;
