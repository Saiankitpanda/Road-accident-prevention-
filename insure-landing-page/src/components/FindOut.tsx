import React from "react";
import Image from "next/image";
import workRight from "../../public/images/bg-pattern-how-we-work-desktop.svg";
import workRightMobile from "../../public/images/bg-pattern-how-we-work-mobile.svg";

const FindOut = () => {
  return (
    <section className="px-6 md:px-10 lg:px-40 pb-40">
      <div className="bg-violet px-12 py-20 md:py-0 flex flex-col gap-10 items-center md:justify-between relative min-h-[250px] md:flex-row ">
        <h2 className="text-4xl md:text-6xl text-light text-center md:text-left md:w-1/2">
          Find out more about how we work
        </h2>
        <button className="border-2 uppercase px-7 py-3 text-light justify-self-end text-right z-10 cursor-pointer hover:bg-light hover:text-midnight">
          <a href="#">How we work</a>
        </button>
        <Image
          src={workRightMobile}
          alt="background image"
          className="absolute top-0 right-0 md:hidden overflow-hidden"
        ></Image>
        <Image
          src={workRight}
          alt="background image"
          className="hidden md:block md:absolute md:top-0 md:right-0"
        ></Image>
      </div>
    </section>
  );
};

export default FindOut;
