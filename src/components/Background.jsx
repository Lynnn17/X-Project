import React from "react";
import { layer1, layer2, layer3, layer4 } from "../assets";

const Background = () => {
  return (
    <div className="relative w-full h-40 lg:h-72">
      <div className="w-full">
        <img className="absolute bottom-0 -z-[5]" src={layer1} alt="" />
        <img className="absolute bottom-0 -z-[4]" src={layer2} alt="" />
        <img className="absolute bottom-0 -z-[3]" src={layer3} alt="" />
        <img className="absolute bottom-0 -z-[2]" src={layer4} alt="" />
      </div>
    </div>
  );
};

export default Background;