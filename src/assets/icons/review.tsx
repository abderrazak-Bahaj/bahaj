import React from 'react'
import {PropsIcon} from "@/lib/interfaces/components";

const IconReview: React.FC<PropsIcon> = ({...props}) =>{
  return (
    <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          {...props}

        >
          <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
          <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
        </svg>
  )
}

export default IconReview