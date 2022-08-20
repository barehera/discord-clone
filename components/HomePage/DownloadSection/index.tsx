import React from "react";
import Image from "next/image";

import downloadImage from "assets/svg/download-section.svg";
import sparkles from "assets/svg/sparkles.svg";
import Button from "./Button";
const index = () => {
  return (
    <section className="px-6 py-12 bg-gray-100">
      <h4 className="text-2xl text-dark-primary font-black tracking-tighter mb-6">
        HER ZAMAN YAKIN OLMAK IÇIN GÜVENILIR TEKNOLOJI
      </h4>
      <p className="text-base text-gray-600 mb-6">
        Düşük gecikmeli ses ve görüntü tıpkı aynı odadaymışsınız gibi
        hissettiriyor. Birbirinize videodan el sallayın, oyun yayını yapan
        arkadaşlarınızı izleyin veya ekran paylaşarak hep beraber çizim yapın.
      </p>
      <div className="relative w-full h-72 mb-6">
        <Image src={downloadImage} layout="fill" />
      </div>
      <div className="relative text-3xl text-dark-primary font-bold mb-8">
        <Image src={sparkles} layout="fill" />
        <h4>Yolculuğuna başlamaya hazır mısın?</h4>
      </div>

      <Button />
    </section>
  );
};

export default index;
