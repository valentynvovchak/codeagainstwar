import React, { useRef } from "react";
import ChallengeItem from "../components/ChallengeItem";
import Header from "../components/Header";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import Router from "next/router";

function Challenges() {
  const pageRefs = useRef({});
  const router = useRouter();
  return (
    <div className="h-screen">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <Header pageRefs={pageRefs} />
      {/* <Header onClick={() => router.push("/index")} /> */}
      <div className="border-t-2 border-l-2 border-r-2 border-b-2 rounded-b-2xl rounded-t-2xl mx-16 mt-6">
        {/* <div className="grid grid-cols-5 font-semibold py-5 pl-4 border-b-2">
          <a className="text-blue-700 pl-8">Challenges</a>
          <a>Search bar</a>
          <a className="">Difficulty</a>
          <a>Reward</a>
        </div> */}
        <div className="flex gap-32 font-semibold py-5 pl-4 border-b-2">
          <a className="text-blue-700 pl-8 pt-3">Challenges</a>
          {/* <a>Search bar</a> */}
          {/* Middle - Search */}
          <div className="flex align-center items-center md:border-2 rounded-full py-1.5 md:shadow-sm">
            <input
              //   value={searchInput}
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
