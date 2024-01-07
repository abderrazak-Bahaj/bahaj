import React from "react";
import { Timeline} from "@/components";
import { IconExperience, IconEduction } from '@/assets/icons';

 const experience = [
    {
      title: "Fullstack developer",
      date: "07-2022-Present",
      description: "developing fullstack applications for clients and organizations. We are working on different projects with different technologies. ",
    },
  ]
  const eductions = [
    {
      title: "Bachelor of Applied Science",
      date: "2016 - 2017",
      description: "Lycee Moula Abdellah Ben HssainLycee Moula Abdellah Ben Hssain",
    },
    {
      title: "University, Chemistry",
      date: "2017 - 2018",
      description: "Faculty of Sciences of AgadirFaculty of Sciences of Agadire",
    },
    {
      title: "Specialized Technician, Computer Development",
      date: "2018 - 2020",
      description: "Specialized Institute Of Applied Technology Tinghir Moroccan",
    }
  ]

const ExperienceAndEducation: React.FC = () => {
 
  return (
    <section className="py-8 ">
      <div className="w-full px-4  my-5 pt-5">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-4xl">
                Experience & Education
              </h2>
            </div>
          </div>

      <div className="flex flex-wrap mx-5 my-5" >
        <div className="w-full px-4 md:w-1/2">
          <h3 className="mb-[30px] text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-2xl md:text-[30px]">Experience</h3>
          <Timeline  items={experience}   icon={ <IconExperience />} />
        </div>
        <div className="w-full px-4 md:w-1/2">
          <h3 className="mb-[30px] text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-2xl md:text-[30px]">Education</h3>
          <Timeline items={eductions} icon={<IconEduction />} />
        </div>
      </div>
    </section>
  )
}

export default ExperienceAndEducation;
