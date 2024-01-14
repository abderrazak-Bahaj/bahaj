import Image from "next/image";
import React from "react";

const Technologies: React.FC = () => {
  const basClassName ="bg-gray-950 p-6 rounded-[1.5rem] transition duration-300 ease-in-out hover:transform hover:translate-y-2";

  const renderImages = getRenderImages(basClassName)
  
  return (
    <section className="dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
        <h2 className="text-3xl font-bold leading py-10 text-center sm:text-4xl">
          Technologies Stack
        </h2>

        <div className="flex flex-wrap gap-5 items-center justify-center">
          {renderImages}
        </div>
      </div>
    </section>
  );
};

export default Technologies;



const getRenderImages = (baseClassName: string) => {
  const imageContext = require.context('@/assets/images/tech', false, /\.(svg|png|jpg)$/);
  const images = imageContext.keys().map(imageContext);
  
  return images.map((image: any, index: number) => (
    <div className={baseClassName} key={`Image${index}`}>
      <Image
        src={image.default}
        alt={image.default}
        width={70}
        height={70}
        className=""
      />
    </div> 
  ));
}