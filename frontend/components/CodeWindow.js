import React from "react";

function CodeWindow() {
  return (
    <section>
      <div className="bg-gray-200 max-w-xl h-96 rounded-3xl relative">
        <div className="bg-gray-800 max-w-xl h-16 rounded-t-3xl relative">
          <div className=" bg-blue-700 rounded-full h-5 w-5 absolute left-8 top-5"></div>
          <div className="bg-gray-100 rounded-full h-5 w-5 absolute left-16 top-5"></div>
        </div>
        <textarea className="bg-gray-100 w-lg h-72 mx-6 my-4 rounded-b-3xl pl-6 pt-6 outline-none resize-none w-11/12">
          for number in range (1, 10): if (): print (number)
        </textarea>
        <button className="bg-blue-700 rounded-full text-white px-7 py-1 absolute bottom-8 right-12 text-xs font-medium active:scale-90 transition duration-150 text-center">
          Check
        </button>
      </div>
    </section>
  );
}

export default CodeWindow;
