import React from "react";

const MainButton = ({ title }) => {
  return (
    <button className="primary-btn-bg text-white font-bold text-xl px-7 py-4 rounded-lg">
      {title}
    </button>
  );
};

export default MainButton;
