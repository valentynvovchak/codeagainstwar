import React from "react";

function BigBlueButton({ title }) {
  return (
    <button className="bg-blue-700 px-14 py-2 text-white rounded-full text-lg font-semibold shadow-md hover:shadow-xl active:scale-90 transition duration-150 text-center">
      {title}
    </button>
  );
}

export default BigBlueButton;
