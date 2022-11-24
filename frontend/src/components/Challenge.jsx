import   React             from "react";
import   Header            from "./Header";
import { Link }            from "react-router-dom";
import { ArrowSmLeftIcon } from "@heroicons/react/solid";
import   Editor            from "./helpers/Editor";

const baseStyle = {
  border: '1px solid rgb(31, 41, 55)',
  backgroundColor: 'white'
}

function Challenge() {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-blue-700 to-white relative">
        <Link to="/challenges">
          <ArrowSmLeftIcon className="h-10 absolute left-16 top-9 text-white cursor-pointer sm:left-8" />
        </Link>
        <p className="text-white text-2xl font-semibold px-8 pl-32 pt-10 sm:pl-20">
          Complete code below to cleate a function {"'slugify'"} to generate
          unique url for article by it{"`"}s title
        </p>
        <div className="bg-white rounded-2xl m-10 pl-5 mx-12 box-border flex flex-row-reverse sm:flex-col-reverse md:flex-col-reverse">
          <div className="pt-12 pl-20 mr-20 w-3/4 flex flex-col justify-around self-center">
            <p className="font-semibold text-xl border-b-2 border-black inline-block mb-4">
              Examples
            </p>
            <p className="font-semibold text-xl w-full sm:text-lg">
              How to become a really good programmer {"->"}
              /how-to-become-a-really-good-programmer<br></br>
              Air alarm: types of signals and their meaning {"->"}
              /air-alarm-types-of-signals-and-their-meaning
            </p>
            <div
              className="bg-gray-100 w-lg h-72 my-4 rounded-3xl pl-6 pt-6 resize-none"
              style={baseStyle}
            >
              Ready? Click 'Check' to prove you're a pro!
            </div>
          </div>
          <div className="w-5/6 mt-6 flex flex-col self-center">
            <div className="bg-gray-200 rounded-3xl relative" style={baseStyle}>
              <div className="bg-gray-800 w-full h-16 rounded-t-3xl relative">
                <button className="bg-blue-700 rounded-full text-white px-9 py-1 absolute top-4 right-14 text-base font-medium active:scale-90 transition duration-150 text-center sm:text-sm sm:right-4 sm:px-3">
                  Check
                </button>
                <div className=" bg-blue-700 rounded-full h-5 w-5 absolute left-8 top-5"></div>
                <div className="bg-gray-100 rounded-full h-5 w-5 absolute left-16 top-5"></div>
              </div>
              <div className="rounded-3xl">
                <Editor />
                {/* br is used here as temporary fix for bug with bottom corners of editor container*/}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
