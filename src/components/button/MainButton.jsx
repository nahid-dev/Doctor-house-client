import React from "react";
import { Link } from "react-router-dom";

const MainButton = ({ title, path }) => {
  return (
    <Link
      to={path}
      className="primary-btn-bg text-white font-bold text-xl px-5 py-3 md:px-7 md:py-4 rounded"
    >
      <span>{title}</span>
      <span></span>
    </Link>
  );
};

export default MainButton;
