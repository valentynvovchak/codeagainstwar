import   React, { useRef } from "react";
import   ChallengeItem     from "./helpers/ChallengeItem";
import   Header            from "./Header";
import { SearchIcon }      from "@heroicons/react/solid";

function Challenges() {
  const pageRefs = useRef({});

  return (
    <div className="h-screen">
      <Header pageRefs={pageRefs} />
      <div className="border-t-2 border-l-2 border-r-2 border-b-2 rounded-b-2xl rounded-t-2xl mx-16 mt-6">
        <div className="flex gap-32 font-semibold py-5 pl-4 border-b-2">
          <a className="text-blue-700 pl-8 pt-3">Challenges</a>
          <div className="flex align-center items-center md:border-2 rounded-full py-1.5 md:shadow-sm">
            <input
              className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
              type="text"
              placeholder="Start your search"
            />
            <SearchIcon className="hidden md:inline-flex h-8 bg-blue-700 text-white rounded-full p-2 cursor-pointer md:mx-2" />
          </div>
          <a className="pt-3">Difficulty</a>
          <a className="pt-3 pl-5">Reward</a>
        </div>
        <div className="h-[440px] overflow-scroll scrollbar-hide">
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
