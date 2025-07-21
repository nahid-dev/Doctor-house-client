import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  className = "",
  ...rest
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-green-700",
    secondary: "bg-orange-300 text-white hover:bg-orange-600",
    outline:
      "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const finalClass = classNames(
    baseStyles,
    variants[variant],
    sizes[size],
    {
      "opacity-50 cursor-not-allowed": disabled || isLoading,
    },
    className
  );

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={finalClass}
      {...rest}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
