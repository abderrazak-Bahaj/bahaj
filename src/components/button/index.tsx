import React from "react";
import { ButtonProps } from "@/lib/interfaces/components";
import Link from "next/link";

const ButtonApp: React.FC<ButtonProps> = ({
  theme = "default",
  rounded = "none",
  className = "",
  htmlTag = "button",
  link = "#",
  children,
  ...props
}) => {
  const baseClassName = ` text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md  px-5 py-3 rounded-${rounded}`;
  const finaleClassName = getClassName(theme, className, baseClassName);
 
  if (htmlTag == "link") {
    return (
      <Link href={link} className={finaleClassName} >
        {children}
      </Link>
    );
  }
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
      return `bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200  ${baseClassName} ${className}`;
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
