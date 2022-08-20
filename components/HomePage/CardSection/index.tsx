import React from "react";
import Card from "./Card";

import Icon1 from "assets/svg/card-icon-1.svg";
import Icon2 from "assets/svg/card-icon-2.svg";
import Icon3 from "assets/svg/card-icon-3.svg";

const index = () => {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 py-4">
      <Card
        image={Icon1}
        title="Sadece davet ile girilebilen, ait olduğun bir ortam oluştur"
        text="Discord sunucuları konulara göre kanallara ayrılır ve bu kanallarda grup konuşmasını işgal etmeden diğerleriyle birlikte çalışabilir, paylaşabilir veya yalnızca gününden bahsedebilirsin."
      />
      <Card
        bgColor="bg-[#F6F6F6]"
        image={Icon2}
        title="Birlikte takılmak burada çok kolay"
        text="Uygun olduğunda bir ses kanalına gir. Sunucundaki arkadaşların seni görünce ayrıca aramalarına gerek kalmadan hemen konuşmaya gelebilirler."
      />
      <Card
        image={Icon3}
        title="Birkaç kişiden hayran kitlelerine"
        text="Moderasyon araçları ve özelleştirilebilir üye erişimleriyle istediğin bir topluluk kur. Üyelere çeşitli yetkiler verebilir, özel kanallar kurabilir ve daha fazlasını yapabilirsin."
      />
    </section>
  );
};

export default index;
