import React from "react";
import Image from "next/image";
import imageIntro from "../../public/images/image-intro-desktop.jpg";
import imageIntroMobile from "../../public/images/image-intro-mobile.jpg";
import introLeft from "../../public/images/bg-pattern-intro-left-desktop.svg";
import introLeftMobile from "../../public/images/bg-pattern-intro-left-mobile.svg";
import introRight from "../../public/images/bg-pattern-intro-right-desktop.svg";
import introRightMobile from "../../public/images/bg-pattern-intro-right-mobile.svg";

function Hero() {
  return (
    <section className="pt-24 md:pb-24 md:px-10 lg:px-40 bg-violet text-light flex flex-col-reverse items-center relative md:flex-row md:gap-20">
      <div className="space-y-8 text-center md:text-left md:w-1/2 relative px-6 py-20">
        <h1 className="text-5xl md:text-7xl tracking-tight">
          <span className="hidden md:block absolute w-[150px] h-0.5 bg-light -translate-y-[2rem]"></span>
          Humanizing your insurance.
        </h1>
        <p className="text-base">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="border-2 uppercase px-7 py-3 hover:bg-light hover:text-midnight">
          View plans
        </button>
        <Image
          className="absolute -right-[1.5rem] md:hidden"
          src={introRightMobile}
          alt="decorative image"
        ></Image>
        <Image
          className="absolute -left-[1.5rem] -top-[2rem] md:hidden"
          src={introLeftMobile}
          alt="decorative image"
        ></Image>
      </div>

      <div className="object-fill relative md:w-1/2 md:flex-1 xl:w-3/4">
        <Image
          src={imageIntroMobile}
          alt="Image of a family holding hands, walking along a sidewalk"
          className="object-fill md:hidden"
        ></Image>
        <Image
          src={imageIntro}
          alt="Image of a family holding hands, walking along a sidewalk "
          className="hidden overflow-hidden md:block lg:translate-y-1/4"
        ></Image>
      </div>

      <Image
        className="hidden md:block md:absolute md:left-0 md:-bottom-60"
        src={introLeft}
        alt="decorative image"
      ></Image>
      <Image
        className="hidden md:block md:absolute md:right-0 md:top-0"
        src={introRight}
        alt="decorative image"
      ></Image>
    </section>
  );
}

export default Hero;
