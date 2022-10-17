import React from "react";

function CodeWindow() {
  return (
    <section>
      <div className="bg-gray-300 max-w-xl h-96 rounded-3xl relative">
        <div className="bg-gray-700 max-w-xl h-16 rounded-t-3xl relative">
          <div className=" bg-blue-700 rounded-full h-5 w-5 absolute left-8 top-5"></div>
          <div className="bg-gray-100 rounded-full h-5 w-5 absolute left-16 top-5"></div>
        </div>
        <div className="bg-gray-100 max-w-lg h-72 mx-8 my-4 rounded-b-3xl pl-8 pt-6">
          for number in range (1, 10):<br></br> if (): <br></br> print (number)
        </div>
        <button className="bg-blue-700 rounded-full text-white px-7 py-1 absolute bottom-8 right-12 text-xs">
          Check
        </button>
      </div>
    </section>
  );
}

export default CodeWindow;
