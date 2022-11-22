import React         from "react";
import BigBlueButton from "./BigBlueButton";

function AboutBlock({ pageRefs }) {
  return (
    <div
      ref={(el) => (pageRefs.current = { ...pageRefs.current, about: el })}
      className="px-16 py-32 sm:py-10 md:py-14 flex flex-col"
    >
      <a className="uppercase font-bold text-sm text-blue-700 pl-14 sm:pl-6">
        About us
      </a>
      <p className="text-black text-3xl font-bold pl-14 mt-6 sm:pl-6 sm:text-2xl">
        Meet your dream candidates
      </p>
      <div className="flex gap-4 justify-evenly self-center align-center pb-4 sm:flex-col md:flex-col ">
        <p className="w-96 text-3xl font-extrabold text-blue-700 pt-16 ml-16 sm:text-lg sm:ml-4 sm:pt-8 sm:w-64 md:w-[600px] md:ml-14 md:pb-10">
          Our fast-growing community is full of enthusiastic individuals willing
          to learn while doing a good deed. Let us help you finding your perfect
          trainee. All donations will go to Ukraine`s military forces.
        </p>
        <img
          src="community-1.jpg"
          width="380px"
          className="rounded-2xl ml-20 sm:w-[240px] sm:ml-4 md:ml-40"
        />
      </div>
      <div className="mt-6 flex justify-center">
        <BigBlueButton title="Learn more!" />
      </div>
    </div>
  );
}

export default AboutBlock;
