import React from "react";
import { ServiceCard } from "@/components";
import { IconHome, IconSpeed, IconSynchronize, IconApps } from "@/assets/icons";

const Service: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Creative Idea",
      details:
        "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
      icon: <IconApps />,
    },
    {
      id: 2,
      title: "Modern Design",
      details:
        "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
      icon: <IconHome />,
    },
    {
      id: 3,
      title: "High Quality",
      details:
        "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
      icon: <IconSpeed />,
    }
  ];

  return (
    <section className="py-8 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary  dark:text-[#00B7FF]">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color dark:text-gray-300">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap p-5 md:p-0">
          {services.map((service) => (
            <div className="w-full px-4 md:w-1/2 lg:w-1/3" key={service.id}>
              <ServiceCard
                title={service.title}
                details={service.details}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
