import React from "react";
import Button from "./Button";
import { AiOutlineDownload } from "react-icons/ai";

import heroSectionImage1 from "assets/svg/hero-section-image-1.svg";
import heroSectionImage2 from "assets/svg/hero-section-image-2.svg";
import heroSectionBackgroundImage from "assets/svg/hero-section-background.svg";

const index = () => {
  return (
    <section className="bg-primary">
      <article className="px-6 pt-12 md:grid md:grid-cols-12 ">
        <div className="md:col-span-8">
          <h1 className="text-white text-4xl md:text-7xl font-black mb-6 md:mb-12 tracking-tighter">
            Öyle Bir Ortam Hayal Et Ki...
          </h1>
          <p className="text-white text-base mb-6 md:mb-12">
            ...bir okul kulübünün, oyun grubunun veya dünya çapında bir sanat
            topluluğunun bir üyesi olabilirsin. Sadece sen ve arkadaşlarının
            vakit geçirebileceği bir yer. Her gün konuşmayı ve daha sık
            takılmayı kolaylaştıran bir ortam.
          </p>
          <div className="flex flex-col sm:flex-row md:flex-col gap-6 mb-20 ">
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
      <div className="flex items-end justify-end md:-mt-32 bg-primary w-full">
        <img src={heroSectionImage1.src} className="md:hidden z-[3]" />
        <img src={heroSectionImage2.src} className="hidden md:block z-[3]" />
        <img
          src={heroSectionBackgroundImage.src}
          className="hidden md:block absolute h-[40rem] object-cover z-[1]"
        />
      </div>
    </section>
  );
};

export default index;
