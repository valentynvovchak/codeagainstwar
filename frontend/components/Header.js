import Image from "next/image";
import AboutBlock from "./AboutBlock";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import React, { useRef } from "react";
const scrollTo = (r) => {
  r.current.scrollIntoView({ behavior: "smooth" });
};
function Header(props) {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 bg-gray-100 py-5 px-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <img
          src="logo.png"
          layout="fill"
          //width="180px"
          // height="10px"
          //objectFit="contain"
          width="300px"
          // objectPosition="left"
        />
      </div>
      <div className="flex justify-end gap-5 space-x-10 py-5 text-blue-700 font-semibold">
        <a className="p-1" onClick={() => scrollTo(props.refAbout)}>
          About
        </a>
        <a className="p-1">Partners</a>
        <a className="p-1">Learning</a>
        <button className="text-white bg-blue-700 px-6 py-1 rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-150 text-center">
          Sign up
        </button>
        <div className="flex items-center space-x-4 justify-end text-blue-700">
          <div className=" flex items-center space-x-2 border-2 border-gray-300 p-1 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
      </div>
      {/* Right */}
    </header>
  );
}
export default Header;
