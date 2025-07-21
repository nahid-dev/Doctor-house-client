import React from "react";
import classNames from "classnames";

const Card = ({ className, children }) => {
  return (
    <div
      className={classNames(
        "rounded-xl border bg-white text-black shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
