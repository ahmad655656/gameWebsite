import React from "react";

export default function Card(props) {
  return (
    <div className="w-[20vw] sm:max-md:w-[90vw] sm:max-md:h-[60vh] relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:border-[2px] after:border-solid after:rounded-lg before:absolute before:w-[100%] before:h-[100%] before:left-0 before:top-0 before:border-[4px] before:border-solid before:border-HomeAfter before:rounded-lg  after:border-borderbefore max-xlg:w-[20vw] max-xlg:h-[60vh] h-[60vh] overflow-hidden rounded-lg shadow-platform">
      <div className="px-4 py-2">
        <h1 className="sm:max-md:text-[25px] text-[15px] font-bold h-[30px] uppercase text-title">
          {props.name}
        </h1>
          <p className="mt-1 text-sm h-[30px] text-mainText">
            {props.requirements_en}
          </p>
      </div>

      <img
        className="object-cover w-full mt-2 h-[50%]  "
        src={props.image}
        alt="NIKE AIR"
      />

      <div className="flex items-center justify-between py-2 px-2">
        <h1 className="text-[15px] font-bold sm:max-md:text-[20px] max-lg:text-[20px] text-mainText">
          ratings: {props.ratings_count}
        </h1>
        <h1 className="text-[15px] font-bold sm:max-md:text-[20px] max-lg:text-[20px] text-mainText">
          released: {props.released}
        </h1>
      </div>
      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-lg font-bold text-mainText">{props.likeCount}</h1>
        <button className="px-2 py-1 sm:max-md:py-[20px] sm:max-md:mt-[20px] sm:max-md:px-[20px] sm:max-md:text-[20px] sm:max-md:font-bold text-xs font-semibold uppercase transition-colors duration-300 transform rounded text-button bg-button hover:bg-hoverButton focus:bg-hoverButton focus:outline-none">
          View Details
        </button>
      </div>
    </div>
  );
}
