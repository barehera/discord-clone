import React from "react";
import Image from "next/image";

import downloadImage from "assets/svg/download-section.svg";
import sparkles from "assets/svg/sparkles.svg";
import Button from "./Button";
const index = () => {
  return (
    <section className="px-6 lg:px-10 py-16 md:py-20 bg-gray-100 lg:flex lg:flex-col lg:items-center lg:justify-center">
      <h4 className="text-2xl text-dark-primary font-black tracking-tighter mb-6 md:text-center md:text-4xl lg:text-5xl md:leading-8 lg:w-[48rem]">
        HER ZAMAN YAKIN OLMAK IÇIN GÜVENILIR TEKNOLOJI
      </h4>
      <p className="text-base text-gray-600 mb-6 md:text-center lg:w-[60rem]">
        Düşük gecikmeli ses ve görüntü tıpkı aynı odadaymışsınız gibi
        hissettiriyor. Birbirinize videodan el sallayın, oyun yayını yapan
        arkadaşlarınızı izleyin veya ekran paylaşarak hep beraber çizim yapın.
      </p>
      <div className="relative w-full h-60 md:h-96 lg:h-[40rem] mb-6 md:mb-20">
        <Image src={downloadImage} layout="fill" />
      </div>
      <div className="relative text-3xl text-dark-primary font-bold mb-8">
        <img
          src={sparkles.src}
          className="w-full absolute -top-6 object-cover"
        />
        <h4 className="md:text-center">Yolculuğuna başlamaya hazır mısın?</h4>
      </div>
      <div className="flex items-center justify-center">
        <Button />
      </div>
    </section>
  );
};

export default index;
