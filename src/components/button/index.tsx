import React from "react";
import { ButtonProps } from "@/lib/interfaces/components";

const ButtonApp: React.FC<ButtonProps> = ({
  theme = "default",
  rounded = "none",
  className = "",
  children,
  ...props
}) => {
  const baseClassName = `text-sm px-5 py-3 rounded-${rounded}`;
  const finaleClassName = getClassName(theme, className, baseClassName);
  return (
    <button className={finaleClassName} {...props}>
      {children}
    </button>
  );
};

export default ButtonApp;

const getClassName = (
  theme: string,
  className: string,
  baseClassName: string
) => {
  switch (theme) {
    case "primary":
      return `bg-indigo-500 hover:bg-indigo-800  ${baseClassName} ${className}`;
    case "success":
      return `btn bg-green-600 hover:bg-green-800 ${baseClassName} ${className}`;
    case "danger":
      return `bg-red-500 hover:bg-red-800 ${baseClassName} ${className}`;
    case "warning":
      return `bg-yellow-500 hover:bg-yellow-800 ${baseClassName} ${className}`;
    case "info":
      return `bg-blue-500 hover:bg-blue-800 ${baseClassName} ${className}`;
    default:
      return `bg-gray-700 hover:bg-gray-800 ${baseClassName} ${className}`;
  }
};
