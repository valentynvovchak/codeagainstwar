import React from "react";

function HeroCard({ img, title}) {
  return (
    <section className="relative p-16 cursor-pointer">
      <div className="relative cursor-pointer hover:scale-105 transform transition duration-300 ease-out hover:shadow-m">
        <img
          src={img}
          width="330px"
          className="rounded-3xl"
        />
      </div>
      <div className="absolute">
        <h3 className="text-xl w-64 mt-4 font-bold px-3">{title}</h3>
      </div>
    </section>
  );
}

export default HeroCard;
