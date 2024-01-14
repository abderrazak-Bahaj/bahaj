import React from "react";
import { ReviewCard } from "@/components";
const feedbacks = [
  {
    name: "John Doe",
    job: "Web Developer",
    reviewText:
      "Your website's design is sleek and user-friendly. Navigation is smooth, and the content is well-organized.",
  },
  {
    name: "Jane Smith",
    job: "Graphic Designer",
    reviewText:
      "Impressive visuals! The color scheme and imagery used truly enhance the overall aesthetics of your site.",
  },
  {
    name: "Alex Johnson",
    job: "Digital Marketer",
    reviewText:
      "Great content! The information provided is valuable, engaging, and easy to digest.",
  },
  {
    name: "Sarah Davis",
    job: "UX/UI Designer",
    reviewText:
      "The website's layout is intuitive, making it a pleasure to explore. Fantastic job on the user experience!",
  },
  {
    name: "Michael Brown",
    job: "Content Writer",
    reviewText:
      "Well-written and informative content. It's clear, concise, and adds tremendous value to your website.",
  },
];

const FeedbacksAPP: React.FC = () => {
  return (
    <section className="py-8 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-5 max-w-[510px] text-center lg:mb-10">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                What People Say
              </h2>
              <p className="text-base text-body-color dark:text-gray-300">
                We believe brand interaction is key in commuication.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full inline-flex flex-nowrap overflow-x-hidden py-5">
          <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll gap-5">
            {feedbacks.map((feedback, index) => (
              <ReviewCard
                key={index + feedback.name}
                {...feedback}
                className="shrink-0 "
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbacksAPP;
