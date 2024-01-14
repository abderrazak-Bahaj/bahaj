import Image from "next/image";
import React from "react";
import { IconReview } from "@/assets/icons";

interface PropsReviewCard {
  reviewText?: string;
  name?: string;
  image?: string;
  job?: string;
  className?: string;
}

const ReviewCard: React.FC<PropsReviewCard> = ({
  image,
  job,
  reviewText,
  name,
  className = "",
}) => {
  const renderImage = image && (
    <Image
      src={image}
      width={100}
      height={100}
      alt={name ?? "username"}
      className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-700"
    />
  );

  const renderTextReview = reviewText && (
    <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
      <IconReview className="w-8 h-8 text-blue-500" />
      {reviewText}
      <IconReview className="absolute right-0 w-8 h-8 text-blue-500 line-clamp-6" />
    </p>
  );

  const renderName = name && (
    <p className="text-xl font-semibold leading-tight text-black">{name}</p>
  );

  const renderJob = job && <p className="text-sm uppercase text-gray-900  ">{job}</p>;

  return (
    <div className={`flex flex-col max-w-sm mx-4 my-6 shadow-lg dark:bg-gray-900 rounded-lg ${className}`}>
      <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
        {renderTextReview}
      </div>
      <div className="flex flex-col items-center justify-center p-8 rounded-lg bg-violet-400">
        {renderImage}
        {renderName}
        {renderJob}
      </div>
    </div>
  );
};

export default ReviewCard;
