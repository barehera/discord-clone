import React from "react";
import Image from "next/image";

import downloadImage from "assets/svg/download-section.svg";
import sparkles from "assets/svg/sparkles.svg";
import Button from "./Button";
const index = () => {
  return (
    <section className="px-6 py-20 bg-gray-100">
      <h4 className="text-2xl text-dark-primary font-black tracking-tighter mb-6 md:text-center md:text-4xl md:leading-8">
        HER ZAMAN YAKIN OLMAK IÇIN GÜVENILIR TEKNOLOJI
      </h4>
      <p className="text-base text-gray-600 mb-6">
        Düşük gecikmeli ses ve görüntü tıpkı aynı odadaymışsınız gibi
        hissettiriyor. Birbirinize videodan el sallayın, oyun yayını yapan
        arkadaşlarınızı izleyin veya ekran paylaşarak hep beraber çizim yapın.
      </p>
      <div className="relative w-full h-60 md:h-96 mb-6 md:mb-20">
        <Image src={downloadImage} layout="fill" />
      </div>
      <div className="relative text-3xl text-dark-primary font-bold mb-8">
        <img src={sparkles.src} className="w-full" />
        <h4 className="md:text-center">Yolculuğuna başlamaya hazır mısın?</h4>
      </div>
      <div className="flex items-center justify-center">
        <Button />
      </div>
    </section>
  );
};

export default index;
