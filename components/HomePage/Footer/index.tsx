import React from "react";
import Bottom from "./Bottom";
import Languages from "./Languages";
import Links from "./Links";
import SocialMedia from "./SocialMedia";

const index = () => {
  return (
    <footer className="px-6 bg-dark-primary pt-20 pb-16 text-white">
      <div className="grid md:grid-cols-2 md:gap-20">
        <div>
          <h4 className="text-4xl font-black text-secondary tracking-tighter mb-6">
            BIR ORTAM HAYAL ET
          </h4>
          <Languages />
          <SocialMedia />
        </div>
        <div>
          <Links />
        </div>
      </div>
      <Bottom />
    </footer>
  );
};

export default index;
