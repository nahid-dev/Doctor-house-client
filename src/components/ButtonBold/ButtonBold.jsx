import React from "react";

const ButtonBold = ({ title }) => {
  return (
    <button className="w-full md:py-4 bg-[#F7A582] text-white rounded-lg text-xl border-0 hover:bg-[#d79f87] my-5 text-">
      {title}
    </button>
  );
};

export default ButtonBold;
