import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconNavigate } from "@/assets/icons";

interface ContainerCardProps {
  type?: "link" | "div";
  className?: string;
  link?: string;
  onclick?: React.MouseEventHandler<HTMLDivElement>;
}
interface CardProps  extends ContainerCardProps {
  image?: string;
  title?: string;
  details?: string;
  linkText?: string;
  date?: string,
  creator?: string,
  category?: string
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  details,
  linkText,
  creator,
  date,
  category,
  ...props
}) => {

  return (

    <ContainerCard  {...props} >
         {image && (
        <Image
          unoptimized
          alt="image"
          height={"350"}
          width={"350"}
          src={image}
          className=" text-gray-500 dark:text-gray-400 mb-3 rounded-lg w-full max-h-72 "
        />
      )}
      <h2 className="mb-2 px-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="mb-2 px-3 text-xs font-bold tracking-wider text-gray-400 uppercase">
          {category}
      </p>
      <p className="mb-3 px-3 font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
        {details}
      </p>

      {
        date && (
          <p className="mb-3 px-3 text-sm font-normal text-gray-500">
            By <span className="font-bold">{creator}</span> In {date}
          </p>
        )
      }
      {props.link && props.type === "div" && (
        <Link
          href={props.link}
          className="px-3 inline-flex items-center text-blue-600 hover:underline"
        >
          {linkText}
          <IconNavigate className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" />
        </Link>
      )}
    </ContainerCard>
 
  );
};

export default Card;



const ContainerCard: React.FC<React.PropsWithChildren<ContainerCardProps>> = ({type="div",className = "",children,link,onclick}) => {
  
  className=`max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer shadow dark:bg-gray-800 dark:border-gray-700 opacity-90 hover:opacity-100 ${className}`
  if (type === "div") {
    return (
      <div className={className} onClick={onclick && onclick}>
        {children}
      </div>
    )
  }
  return(
    <Link  className={className} href={link??"#"}>
      {children}
    </Link>
  )
}
