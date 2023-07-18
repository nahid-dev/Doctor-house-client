import React from "react";

const SectionHeader = ({ title, pera }) => {
  return (
    <div className="main-container text-center py-20">
      <div className="md:px-10 ">
        <h2 className="heading-two">{title}</h2>
        <p className="section-pera">{pera}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
