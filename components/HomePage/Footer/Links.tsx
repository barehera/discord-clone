import React from "react";
import FooterLink from "./FooterLink";

const Links = () => {
  return (
    <div className="grid grid-cols-2 gap-12 py-14">
      <nav>
        <ul className="flex flex-col gap-2">
          <li className="text-secondary">Ürün</li>
          <FooterLink text="İndir" />
          <FooterLink text="Nitro" />
          <FooterLink text="Durum" />
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-col gap-2">
          <li className="text-secondary">Şirket</li>
          <FooterLink text="Hakkında" />
          <FooterLink text="İş Olanakları" />
          <FooterLink text="Marka" />
          <FooterLink text="Haber merkezi" />
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-col gap-2">
          <li className="text-secondary">Kaynaklar</li>
          <FooterLink text="Üniversite" />
          <FooterLink text="Destek" />
          <FooterLink text="Güvenlik" />
          <FooterLink text="Blog" />
          <FooterLink text="Geri bildirim" />
          <FooterLink text="Geliştiriciler" />
          <FooterLink text="StreamKit" />
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-col gap-2">
          <li className="text-secondary">İlkeler</li>
          <FooterLink text="Koşullar" />
          <FooterLink text="Gizlilik" />
          <FooterLink text="Çerez Ayarları" />
          <FooterLink text="İlkeler" />
          <FooterLink text="Teşekkürler" />
          <FooterLink text="Lisanslar" />
          <FooterLink text="Moderasyon" />
        </ul>
      </nav>
    </div>
  );
};

export default Links;
