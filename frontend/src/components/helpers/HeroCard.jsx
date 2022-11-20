import React from "react";

function HeroCard({ img, title, description, buttonText }) {
  return (
    <section className="relative p-16 cursor-pointer">
      <div className="relative cursor-pointer hover:scale-105 transform transition duration-300 ease-out hover:shadow-m">
        <img
          src={img}
          width="330px"
          //objectFit="contain"
          className="rounded-3xl"
        />
      </div>
      <div className="absolute">
        <h3 className="text-xl w-64 mt-4 font-bold px-3 md:px-0">{title}</h3>
        {/* <p>{description}</p> */}
        {/* <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button> */}
      </div>
    </section>
  );
}

export default HeroCard;
