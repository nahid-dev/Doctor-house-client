import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Badge = ({ children, variant = "default", size = "md", className = "" }) => {
  const variants = {
    default: "primary-bg text-white",
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-purple-100 text-purple-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
  };

  const sizes = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  const base = "inline-block rounded-full font-medium";

  const finalClass = classNames(
    base,
    variants[variant],
    sizes[size],
    className
  );

  return <span className={finalClass}>{children}</span>;
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

export default Badge;
