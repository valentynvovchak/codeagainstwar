import React, { useRef } from "react";
import BigBlueButton from "./BigBlueButton";

function AboutBlock({ pageRefs }) {
  return (
    <div
      ref={(el) => (pageRefs.current = { ...pageRefs.current, about: el })}
      className="px-16 py-32"
    >
      <a className="uppercase font-bold text-sm text-blue-700 pl-14">
        About us
      </a>
      <p className="text-black text-3xl font-bold pl-14 mt-6">
        Meet your dream candidates
      </p>
      <div className="flex gap-4 justify-evenly align-center pb-4">
        <p className="w-96 text-3xl font-extrabold text-blue-700 pt-16 ml-16">
          Our fast-growing community is full of enthusiastic individuals willing
          to learn while doing a good deed. Let us help you finding your perfect
          trainee. All donations will go to Ukraine`s military forces.
        </p>
        <img
          src="community-1.jpg"
          width="380px"
          className="rounded-2xl ml-20"
        />
      </div>
      <div className="mt-6 flex justify-center">
        <BigBlueButton title="Learn more!" />
      </div>
    </div>
  );
}

export default AboutBlock;
