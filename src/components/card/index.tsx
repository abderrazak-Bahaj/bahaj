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
      className="text-gray-500 dark:text-gray-400 mb-3 w-full max-h-72 rounded-lg"
    />
  );

  const renderTitle = title && (
    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-200">
      {title}
    </h3>
  );

  const renderTags = tags && (
    <div className="flex flex-wrap gap-1 mb-1">
      {tags?.map((tag) =><Badge key={tag} text={tag} theme={tagTheme} />)}
    </div>
  );

  const renderDetails = details && (
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
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
      {renderTitle}
      {renderTags}
      {renderDetails}
      {renderDate}
      {renderLink}
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
  const hoverClassName = theme === "primary" ? "opacity-80 transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:opacity-100": "";
  const baseClassName = "dark:bg-gray-800 p-3 rounded-lg bg-white dark:bg-dark-2 shadow-xl cursor-pointer";
  const finalClassName = `${baseClassName} ${hoverClassName} ${className}`;
  
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
