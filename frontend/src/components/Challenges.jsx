import   React, { useRef } from "react";
import   ChallengeItem     from "./helpers/ChallengeItem";
import   Header            from "./Header";
import { SearchIcon }      from "@heroicons/react/solid";

function Challenges() {
  const pageRefs = useRef({});

  return (
    <div className="h-screen">
      <Header pageRefs={pageRefs} />
      <div className="border-t-2 border-l-2 border-r-2 border-b-2 rounded-b-2xl rounded-t-2xl mx-16 mt-6 sm:mx-4">
        <div className="flex gap-32 font-semibold py-5 pl-4 border-b-2 sm:gap-5">
          <a className="text-blue-700 pl-8 pt-3 sm:text-sm sm:pl-2">
            Challenges
          </a>
          <div className="flex align-center items-center border-2 rounded-full py-1.5 md:shadow-sm sm:hidden md:hidden">
            <input
              className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
              type="text"
              placeholder="Start your search"
            />
            <SearchIcon className="inline-flex h-8 bg-blue-700 text-white rounded-full p-2 cursor-pointer mr-1" />
          </div>
          <a className="pt-3 sm:hidden md:hidden">Difficulty</a>
          <a className="pt-3 pl-5 sm:hidden sm:pl-0 md:hidden">Reward</a>
        </div>
        <div className="h-[440px] overflow-scroll scrollbar-hide sm:h-full md:h-full">
          <ChallengeItem />
          <ChallengeItem />
          <ChallengeItem />
          <ChallengeItem />
          <ChallengeItem />
          <ChallengeItem />
          <ChallengeItem />
          <ChallengeItem />
          <ChallengeItem />
          <ChallengeItem />
          <ChallengeItem />
        </div>
      </div>
    </div>
  );
}

export default Challenges;
