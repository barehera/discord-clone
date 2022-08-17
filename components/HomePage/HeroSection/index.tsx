import React from "react";
import Button from "./Button";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";

import heroSectionImage from "assets/svg/hero-section-image-1.svg";

const index = () => {
  return (
    <section className="bg-primary">
      <article className="px-6 pt-12">
        <h1 className="text-white text-2xl font-black mb-6">
          Öyle Bir Ortam Hayal Et Ki...
        </h1>
        <p className="text-white text-base mb-6">
          ...bir okul kulübünün, oyun grubunun veya dünya çapında bir sanat
          topluluğunun bir üyesi olabilirsin. Sadece sen ve arkadaşlarının vakit
          geçirebileceği bir yer. Her gün konuşmayı ve daha sık takılmayı
          kolaylaştıran bir ortam.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mb-10">
          <Button
            icon={<AiOutlineDownload className="text-2xl" />}
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

        <img src={heroSectionImage.src} />
      </article>
    </section>
  );
};

export default index;
