import React         from "react";
import BigBlueButton from "./BigBlueButton";
import CodeWindow    from "./CodeWindow";

function LearningBlock({ pageRefs }) {
  return (
    <div
      ref={(el) => (pageRefs.current = { ...pageRefs.current, learning: el })}
      className="px-16 py-32 flex flex-col justify-evenly align-middle sm:py-10 md:py-14"
    >
      <a className="uppercase font-bold text-sm text-blue-700 pl-14 sm:pl-1">
        Learning
      </a>
      <p className="text-black text-3xl font-bold pl-14 mt-6 mb-6 sm:pl-1 sm:mb-4 sm:text-2xl">
        Improve your development skills by taking on challenges from real
        companies
      </p>
      <a className="font-bold text-md text-blue-700 pl-14 md:self-center sm:self-center  sm:pl-0">
        Complete code below to print only even numbers in range from 1 to 10
      </a>
      <div className="mt-6 flex justify-between sm:flex-col md:flex-col">
        <div className="w-full ml-14 sm:ml-2 mb-6 self-center">
          <CodeWindow />
        </div>
        <div className="max-w-2xl pr-40 sm:pr-6 mt-8 self-center">
          <div className="flex justify-center pr-8 sm:pr-2 sm:justify-around md:pl-36">
            <img src="ukr-nobg.png" className="w-20 sm:w-14" />
            <p className="uppercase text-blue-700 font-bold mt-5 text-xl sm:mt-2.5">
              Study & Help
            </p>
          </div>
          <p className="text-2xl w-64 font-semibold pb-8 sm:pl-8 sm:text-xl md:pl-[130px] md:w-[600px]">
            Succesfull completion of this simple task will be monetized as 0.50$
            DONATION to Ukrainian Military Forces from our sponsors
          </p>
          <div className="sm:pl-8 md:pl-60">
            <BigBlueButton title="Learn more!" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningBlock;
