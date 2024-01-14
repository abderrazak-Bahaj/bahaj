import React from "react";
import { ReviewCard } from "@/components";

const AboutMe: React.FC = () => {
  return (
    <section className="dark:bg-gray-800 py-10 my-6">
    <div className=" dark:text-gray-100 ">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?1"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-800">
            <h3 className="text-3xl font-bold">
            About Me
            </h3>
            <p className="my-6 dark:text-gray-400">
              I am Abderrazak Bahaj, an Innovative Full Stack Developer with
              a passion for bringing ideas to life in pixels and code. As a
              solutions architect and problem solver, I seamlessly combine
              technical prowess with an empathetic approach to create
              transformative solutions. My meticulous attention to detail
              and steadfast commitment to perfection define my work. Guided
              by values of integrity and transparency, I prioritize open
              communication and foster trust in every collaboration. Join me
              on a journey where creativity meets functionality, and
              together, we can turn visions into digital realities.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="  dark:text-gray-100">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-800">
            <h3 className="text-3xl font-bold">{"Let's Collaborate"}</h3>
            <p className="my-6 dark:text-gray-400">
              {
                " I'm always excited to explore new opportunities and collaborate with fellow enthusiasts. If you share my passion for excellence and creativity, let's connect and explore how we can make a difference together. Feel free to reach out—I'm here to innovate, create, and inspire!"
              }
            </p>
          </div>
          <img
            src="https://source.unsplash.com/640x480/?1"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutMe;
