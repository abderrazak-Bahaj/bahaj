import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconNavigate } from "@/assets/icons";
import {BadgeProps,BadgeHtmlTagProps} from "@/lib/interfaces/components"

const BadgeApp:React.FC<BadgeProps> = ({theme,className="",...props}) => {
  switch (theme) {
    case "primary":
      return <BadgeHtmlTag className={`bg-indigo-500  rounded-full text-white px-3 py-1 text-xs uppercase font-medium ${className}`} {...props}/>
    case "success":
      return <BadgeHtmlTag className={`bg-green-500  rounded-full text-white px-3 py-1 text-xs uppercase font-medium ${className}`} {...props}/>
    case "danger":
      return <BadgeHtmlTag className={`bg-red-500  rounded-full text-white px-3 py-1 text-xs uppercase font-medium ${className}`} {...props}/>
    case "warning":
      return <BadgeHtmlTag className={`bg-yellow-500 rounded-full text-white px-3 py-1 text-xs uppercase font-medium ${className}`} {...props}/>
    case "info":
      return <BadgeHtmlTag className={`bg-blue-500  rounded-full text-white px-3 py-1 text-xs uppercase font-medium ${className}`} {...props}/>
    default:
      return <BadgeHtmlTag className={`bg-gray-700 rounded-full text-white px-3 py-1 text-xs uppercase font-medium ${className}`} {...props}/>
  }

}

const BadgeHtmlTag:React.FC<BadgeHtmlTagProps> = ({htmlTag="span",link="#",text,className}) => {
  switch (htmlTag) {
    case "link":
      return <Link href={link} className={className}>{text}</Link>
    default:
      return <span className={className}>{text}</span>
  }
}




export default BadgeApp