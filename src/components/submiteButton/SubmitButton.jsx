import React from "react";

const SubmitButton = ({ title, type }) => {
  return (
    <button
      type={type}
      className="bg-[#07332F] w-full md:py-3 text-white font-semibold md:text-xl md:my-3 my-2 md:mt-5 rounded-md"
    >
      {title}
    </button>
  );
};

export default SubmitButton;
