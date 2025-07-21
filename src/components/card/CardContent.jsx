import React from "react";
import classNames from "classnames";

const CardContent = ({ className, children }) => {
  return <div className={classNames("p-6 pt-0", className)}>{children}</div>;
};

export default CardContent;
