import React from "react";

export default function About() {
  return (
    <div className="min-h-[100vh] flex flex-col pt-[200px] gap-[40px] items-center w-[90vw] mx-auto ">
      <div>
        <h1 className="text-3xl font-bold text-title">About us</h1>
      </div>
      <div className="flex flxe-row gap-[20px] items-center w-[90vw]">
        <div className="bg-navBar relative w-[90vw] sm:max-md:after:shadow-none sm:max-md:before:shadow-none sm:max-md:before:w-0 sm:max-md:after:w-0 mx-auto after:absolute after:shadow-after before:shadow-before before:rotateXB after:rotateX after:w-[100px] after:h-[100%] after:bg-button after:left-0 after:top-0 after:mix-blend-screen before:absolute before:w-[100px] before:h-[100%] before:bg-button before:right-0 before:top-0 before:mix-blend-screen ">
          <p className="text-mainText w-[70vw] sm:max-md:w-[90vw] sm:max-md:text-left mx-auto font-bold text-[20px] sm:max-md:text-[25px] text-center ">
            The world of games without limits We offer a comprehensive gaming
            experience for the most famous games such as Counter-Strike, GTA,
            and others, so you can enjoy the best of the gaming world. Center of
            excitement and imagination Our website is your ideal destination to
            enjoy popular games, as we display the best electronic games that
            combine challenge and excitement. Hub for professional players If
            you are a fan of big games like GTA and Counter-Strike, you are in
            the right place. Here you will find everything you need to level up
            your game
          </p>
        </div>
      </div>
    </div>
  );
}
