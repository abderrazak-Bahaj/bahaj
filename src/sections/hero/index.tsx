import Link from "next/link";
import React from "react";
import {IconRightArrow} from "@/assets/icons"
const Hero: React.FC = () => {
  return (
    <header className="relative overflow-hidden h-screen">
      <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-b from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-gray-900 dark:to-blue-950"></div>
      </div>
    
      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <div className="mt-5 max-w-2xl">
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              Full stack developer
            </p>
              <h1 className="block font-semibold leading-10 text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                My Name Bahaj Abderrazak 
              </h1>
            </div>
    
            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-gray-600 dark:text-gray-400">
              {"As a Full Stack Web Developer, I'm passionate about building user-friendly and efficient web applications. Always seeking new challenges, I strive to improve my skills and contribute to innovative projects. My goal is to create seamless, engaging digital experiences that leave a lasting impression on users."}
              </p>
            </div>
    
            <div className="mt-8 gap-3 flex justify-center">
              <Link className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/about">
                About me
              </Link>
              <Link className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent dark:hover:bg-gray-900 text-gray-800 hover:bg-gray-100  disabled:pointer-events-none dark:text-white  dark:focus:outline-none dark:focus:ring-1 dark:hover:border-blue-500" href="/contact">
                Contact me <IconRightArrow className="flex-shrink-0 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
