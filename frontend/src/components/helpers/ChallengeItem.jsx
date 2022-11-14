import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/dist/client/router";
// import Router from "next/router";
import { Link } from "react-router-dom";

function ChallengeItem() {
  // const router = useRouter();
  return (
    // <div className="grid grid-cols-5 font-semibold py-5 pl-4 border-b-2 last-of-type:border-b-0 hover:bg-gray-100">
    //   <a className="pl-8">#1</a>
    //   <a>Matrix Multiplication</a>
    //   <a className="text-green-500">Easy</a>
    //   <a>0.50$</a>
    //   <button className="bg-blue-700 w-32 py-1 rounded-2xl font-semibold text-white">
    //     Start!
    //   </button>
    // </div>
    <div className="flex justify-around font-semibold py-5 pl-4 border-b-2 last-of-type:border-b-0 hover:bg-gray-100">
      <a className="pl-4">#1</a>
      <a>Matrix Multiplication</a>
      <a className="text-green-500 pl-14">Easy</a>
      <a className="pl-4">0.50$</a>
      <Link to="/challenge">
        <button
          // onClick={() => router.push("/challenge")}
          className="bg-blue-700 w-32 py-1 rounded-2xl font-semibold text-white shadow-md hover:shadow-xl active:scale-90 transition duration-150 text-center"
        >
          Start!
        </button>
      </Link>
    </div>
  );
}

export default ChallengeItem;
