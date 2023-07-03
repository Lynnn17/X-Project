import React from "react";
import { batuBesar, mascotXpro } from "../assets";
import Background from "./Background";

const HeroTitle = ({ title }) => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute bg-gradient-to-t from-blue-600 to-blue-300 top-0 bottom-0 w-full h-full -z-[6]"></div>
      <div className="sticky top-0 px-4 lg:px-[8.2rem] pt-32 lg:pt-20 font-poppins font-semibold">
        <div className="flex flex-col lg:flex-row lg:justify-evenly items-center h-full">
          <img className="animate-wiggle w-36 lg:w-80 h-52 lg:h-96" src={mascotXpro} alt="" />
          <div className="lg:my-28">
            <div className="text-5xl lg:text-8xl font-bowlby relative text-center">
              <h1 className="text-white relative">{title}</h1>
              <h1 className="text-black absolute top-[0.15rem] -right-1 w-full">{title}</h1>
            </div>

            {/* Scroll Down Button Start */}
            <div className="mx-auto flex flex-col items-center mt-5">
              <a className="text-center mx-auto w-fit animate-bounce" href="">
                Scroll Down
                <svg className="w-6 h-6 mx-auto" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <g id="icons/regular/chevron-up-s">
                    <path
                      id="Icon"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.4114 7.74408C14.7368 7.41864 15.2645 7.41864 15.5899 7.74408C15.9153 8.06951 15.9153 8.59715 15.5899 8.92259L10.5899 13.9226C10.2645 14.248 9.73683 14.248 9.4114 13.9226L4.4114 8.92259C4.08596 8.59715 4.08596 8.06951 4.4114 7.74408C4.73683 7.41864 5.26447 7.41864 5.58991 7.74408L10.0007 12.1548L14.4114 7.74408Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </a>
              <img className="w-72 lg:w-96" src={batuBesar} alt="" />
            </div>
            {/* Scroll Down Button End */}
          </div>
        </div>
      </div>
      <Background />
    </div>
  );
};

export default HeroTitle;