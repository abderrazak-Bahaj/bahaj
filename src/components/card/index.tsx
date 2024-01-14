import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconNavigate } from "@/assets/icons";
import {CardProps,ContainerCardProps} from "@/lib/interfaces/components"
import {Badge}  from  "@/components"

const Card: React.FC<CardProps> = ({
  image,
  title,
  details,
  linkText,
  creator,
  date,
  tags,
  tagTheme,
  ...props
}) => {

  const renderImage = image && (
    <Image
      unoptimized
      alt="image"
      height="350"
      width="350"
      src={image}
      className={`${props.theme == "secondary" ? "h-[100%] w-[50%]" :"max-h-48"} text-gray-500 dark:text-gray-400 mb-3 w-full  rounded-lg`}
    />
  );

  const renderTitle = title && (
    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-200 group-hover:underline group-focus:underline">
      {title}
    </h3>
  );

  const renderTags = tags && (
    <div className="flex flex-wrap gap-1 mb-1">
      {tags?.map((tag) =><Badge key={tag} text={tag} theme={tagTheme} />)}
    </div>
  );

  const renderDetails = details && (
    <p className = {`mb-3 font-normal text-gray-500 dark:text-gray-400 ${props.theme == "secondary" ? "line-clamp-6" : "line-clamp-3"}`}>
      {details}
    </p>
  );

  const renderDate = date && (
    <p className="mb-3 text-sm font-normal text-gray-500">
      By <span className="font-bold">{creator}</span> In {date}
    </p>
  );

  const renderLink = props.link && props.htmlTag === "div" && (
    <Link
      href={props.link}
      className="inline-flex items-center dark:text-gray-300 hover:text-blue-500 hover:underline"
    >
      {linkText ?? "Read More"}
      <IconNavigate className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" />
    </Link>
  );

  return (
    <ContainerCard {...props}>
      {renderImage}
      <div className={`${props.theme == "secondary" && "flex flex-col gap-1 "}`}>
        {renderTitle}
        {renderTags}
        {renderDetails}
        {renderDate}
        {renderLink}
      </div>
    </ContainerCard>
  );
};
export default Card;


const ContainerCard: React.FC<React.PropsWithChildren<ContainerCardProps>> = ({
  htmlTag = "div",
  className = "",
  theme = "primary",
  children,
  link,
  onclick
}) => {
  const themClassName = getClassName(theme);
  const finalClassName = `${themClassName} ${className}`;
  
  if (htmlTag === "div") {
    return (
      <div className={finalClassName} onClick={onclick && onclick}>
        {children}
      </div>
    );
  }

  return (
    <Link className={finalClassName} href={link ?? "#"}>
      {children}
    </Link>
  );
}


const getClassName = (tag: string) => {
  const baseClassName = "p-3 rounded-lg bg-white dark:bg-dark-2 shadow-xl cursor-pointer group hover:no-underline focus:no-underline ";
  switch (tag) {
    case "primary":
      return `${baseClassName} dark:bg-gray-800 opacity-80 transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:opacity-100`;
    case "secondary":
      return `${baseClassName} mb-5 max-w-sm gap-3 flex min-w-[100%] w-full  group hover:no-underline focus:no-underline  dark:bg-gray-900 dark:border-gray-700   border border-gray-200`;
    case "tertiary":
      return `${baseClassName}  bg-transparent dark:bg-inherit dark:border-gray-700  hover:shadow-gray-800 border border-gray-200`;
    default:
      return `${baseClassName} dark:bg-gray-800`;
  }
}