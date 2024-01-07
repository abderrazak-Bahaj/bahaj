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
    <Link
    href="javascript:void(0)"
    className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3"
  >
    {
      image && (
        <Image
      src={image}
      width={500}
      height={500}
      className="object-cover w-full h-64 mb-5 bg-center rounded"
      alt="Kutty"
      loading="lazy"
    />
      )
    }
    {
      category && (
        <p className="mb-2 text-xs font-bold tracking-wider text-gray-400 uppercase">
      {category}
    </p>
      )
    }
    <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900 dark:text-white">
      Process Documents Using Artificial Intelligence For RPA Bots
    </h2>
    <p className="text-sm font-normal text-gray-600 dark:text-gray-400 line-clamp-3">
      Earlier RPA bots used to have some limitations like it would take
      structured data for processing from excel, database, on these data.
      But with advancements in technology like OCR (Optical Character
      Recognition) and Machine Learning, RPA bots are capable of
      extracting these data …
    </p>
    <div className=" text-gray-700 text-sm  text-gray-900 dark:text-gray-500 pt-2">
      By <span className="font-bold"> Praveen Juge </span>in Jan 12, 2021
    </div>
  </Link>
 
  );
};

export default Card;
