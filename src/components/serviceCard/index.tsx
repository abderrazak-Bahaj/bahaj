
import React from 'react'


interface ServiceCardProps {
    icon: React.ReactNode
    title: string
    details: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, details }) => {
    return (
          <div className=" dark:bg-gray-800 mb-9 rounded-[20px] bg-white p-10 dark:bg-dark-2 md:px-7 xl:px-10 opacity-80 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:opacity-100 sm:mx-4">
            <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
              {icon}
            </div>
            <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
              {title}
            </h4>
            <p className="text-body-color dark:text-dark-6">{details}</p>
          </div>
    );
  };
  
  export default ServiceCard