import React from "react";
import BigCard from "./BigCard";
import BigBlueButton from "./BigBlueButton";

function PartnersBlock({ pageRefs }) {
  return (
    <>
      <div
        ref={(el) => (pageRefs.current = { ...pageRefs.current, partners: el })}
        className="px-16 pt-32 pb-16 sm:py-10 sm:pb-6 md:py-14"
      >
        <a className="uppercase font-bold text-sm text-blue-700 pl-14 sm:pl-4">
          Partners
        </a>
        <p className="text-black text-3xl font-bold pl-14 mt-6 sm:pl-4 sm:text-2xl">
          Qualified partners with the world`s leading thechnology and insitutes
          to evaluate, educate, and certify software engineers at scale
        </p>
        <div className="flex justify-center">
          <BigCard img="partners-1.png" />
        </div>
        <div className="flex justify-center">
          <BigBlueButton title="Become a sponsor!" />
        </div>
      </div>
      <img src="sponsors-1.png" />
    </>
  );
}
export default PartnersBlock;
