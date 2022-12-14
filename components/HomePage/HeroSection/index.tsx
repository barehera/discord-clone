import React from "react";
import Button from "./Button";
import { AiOutlineDownload } from "react-icons/ai";

import heroSectionImage1 from "assets/svg/hero-section-image-1.svg";
import heroSectionImage2 from "assets/svg/hero-section-image-2.svg";
import heroSectionBackgroundImage from "assets/svg/hero-section-background.svg";

const index = () => {
  return (
    <section className="bg-primary overflow-x-hidden">
      <article className="px-6 pt-12  max-w-6xl mx-auto md:grid md:grid-cols-12 lg:flex lg:items-center lg:justify-center lg:text-center lg:pt-24">
        <div className="col-span-8 z-10 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <h2 className="text-white text-4xl font-black mb-6 tracking-tighter md:text-7xl md:mb-12 lg:w-[40rem]">
            Öyle Bir Ortam Hayal Et Ki...
          </h2>
          <p className="text-white text-base lg:text-lg mb-6 md:mb-12 lg:w-[45rem]">
            ...bir okul kulübünün, oyun grubunun veya dünya çapında bir sanat
            topluluğunun bir üyesi olabilirsin. Sadece sen ve arkadaşlarının
            vakit geçirebileceği bir yer. Her gün konuşmayı ve daha sık
            takılmayı kolaylaştıran bir ortam.
          </p>
          <div className="flex flex-col gap-6 mb-20 lg:mb-28 z-10 sm:flex-row md:flex-col lg:flex-row ">
            <Button
              icon={<AiOutlineDownload className="text-xl" />}
              text="Windows için indir"
              bgColor="bg-white"
              textColor="text-black"
              hoverStyle="hover:text-primary hover:shadow-xl"
            />

            <Button
              text="Discord'u tarayıcıda aç"
              bgColor="bg-dark-primary"
              textColor="text-white"
              hoverStyle="hover:bg-[#2D3135] hover:shadow-xl"
            />
          </div>
        </div>
      </article>
      <div className="relative flex items-center justify-center  md:-mt-32 lg:mt-0 bg-primary w-full  mx-auto">
        <div className="relative lg:max-w-7xl lg:mx-auto w-full z-[3]">
          <img
            src={heroSectionImage1.src}
            className="mr-20 md:mr-0 md:hidden lg:block lg:absolute lg:bottom-0 lg:-left-96"
            alt="hero-section image"
          />
          <img
            src={heroSectionImage2.src}
            className="hidden md:block md:ml-96 md:h-96 lg:mr-0 lg:absolute lg:bottom-0 lg:-right-80 "
            alt="hero-section image"
          />
        </div>
        <img
          src={heroSectionBackgroundImage.src}
          className="hidden md:block absolute bottom-0 h-[45rem] object-cover z-[1]"
          alt="hero-section image"
        />
      </div>
    </section>
  );
};

export default index;
