import React from "react";
import BigBlueButton from "./BigBlueButton";
import CodeWindow from "./CodeWindow";

function LearningBlock() {
  return (
    <div className="px-16 py-20">
      <a className="uppercase font-bold text-sm text-blue-700 pl-14">
        Learning
      </a>
      <p className="text-black text-3xl font-bold pl-14 mt-6">
        Improve your development skills by taking on challenges from real
        companies
      </p>
      <a className="font-bold text-sm text-blue-700 pl-14">
        Complete code below to print only even numbers in range from 1 to 10
      </a>
      <div className="mt-6 flex justify-between">
        <div className="w-full ml-14">
          <CodeWindow />
        </div>
        <div className="max-w-2xl pr-40">
          <div className="flex justify-center pr-8">
            <img src="ukr-nobg.png" className="w-20" />
            <p1 className="uppercase text-blue-700 font-bold mt-5 text-xl">
              Study & Help
            </p1>
          </div>
          <p className="text-2xl w-64 font-semibold pb-8">
            Succesfull completion of this simple task will be monetized as 0.50$
            DONATION to Ukrainian Military Forces from our sponsors
          </p>
          <BigBlueButton title="Learn more!" />
        </div>
      </div>
    </div>
  );
}

export default LearningBlock;
