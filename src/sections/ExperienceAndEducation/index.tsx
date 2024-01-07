import React from "react";
import { Timeline} from "@/components";
import { IconExperience, IconEduction } from '@/assets/icons';


const ExperienceAndEducation: React.FC = () => {
  const fakeDataExperience = [
    {
      title: "Developer web and mobile",
      date: "2018-2021",
      description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    },
    {
      title: "fullstack developer",
      date: "2021-2022",
      description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    },
  ]
  
  const fakeDataEductions = [
    {
      title: "Bachelor of Science",
      date: "2010-2013",
      description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    },
    {
      title: "License to development software",
      date: "2013-2015",
      description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    },
    {
      title: "Master of Science",
      date: "2015-2018",
      description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    }
  ]
  return (
    <section className="py-8 ">
      <div className="w-full px-4  my-5 pt-5">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Experience & Education
              </h2>
            </div>
          </div>

      <div className="flex flex-wrap mx-5 my-5" >
        <div className="w-full px-4 md:w-1/2">
          <h3 className="mb-[30px] text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-2xl md:text-[30px]">Experience</h3>
          <Timeline  items={fakeDataExperience}   icon={ <IconExperience />} />
        </div>
        <div className="w-full px-4 md:w-1/2">
          <h3 className="mb-[30px] text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-2xl md:text-[30px]">Education</h3>
          <Timeline items={fakeDataEductions} icon={<IconEduction />} />
        </div>
      </div>
    </section>
  )
}

export default ExperienceAndEducation;
