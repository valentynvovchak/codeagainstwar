import React  from "react";
import Header from "./components/Header";

function Profile() {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <div className="bg-white mx-16 rounded-l-3xl flex justify-between">
        <div>
          <p className="font-black pt-10 pl-12 text-lg">My Profile</p>
          <div className=" bg-blue-700 ml-32 w-[400px] h-[200px] rounded-b-3xl mt-8">
            <img
              src="profile-pic.png"
              width="200px"
              className="inline-block mt-12 ml-[105px] h-48 rounded-full border-2"
            />
          </div>
          <div className="mt-20 ml-32 relative">
            <button className="bg-blue-700 font-semibold text-sm text-white px-36 py-2 w-full mb-6 active:scale-95 transition duration-150 text-center">
              <p className="inline-block absolute left-6 top-1 text-lg">G</p>
              Contact Me
            </button>
            <button className="bg-gray-800 block font-semibold text-sm text-white px-36 py-2 w-full mb-6 active:scale-95 transition duration-150 text-center">
              <img
                src="GitHub-Mark.png"
                className="w-5 absolute left-5 rounded-full"
              />
              GitHub Profile
            </button>
          </div>
        </div>
        <div>
          <p className="font-black w-[600px] pt-10 text-lg">My Challenges</p>
          <div className="h-[200px] w-[500px] ml-10 bg-blue-700 mt-8 rounded-t-3xl relative">
            <div className="bg-white absolute top-10 left-6 py-2 w-11/12 rounded-3xl">
              <div className="flex justify-between font-semibold px-6">
                <p>Completed</p>
                <p>8</p>
              </div>
            </div>
            <div className="bg-white absolute top-24 left-6 py-2 w-11/12 rounded-3xl">
              <div className="flex justify-between font-semibold px-6">
                <p>Earned</p>
                <p>100$</p>
              </div>
            </div>
            <div className="h-[75px] w-[75px] bg-blue-700 absolute top-40 left-52 rounded-full"></div>
          </div>
          <div className="ml-10 border-l-2 border-r-2 border-b-2 border-gray-800 w-[500px] rounded-b-3xl mb-10 h-[190px] overflow-scroll scrollbar-hide">
            <p className="font-bold text-lg pl-10 pt-6 mb-4">Solutions</p>
            <div className="flex gap-24 px-10 font-semibold mb-2">
              <p>1.</p>
              <p>Matrix Multiplication</p>
            </div>
            <div className="flex gap-24 px-10 font-semibold mb-2">
              <p>2.</p>
              <p>Matrix Multiplication</p>
            </div>
            <div className="flex gap-24 px-10 font-semibold mb-2">
              <p>3.</p>
              <p>Matrix Multiplication</p>
            </div>
            <div className="flex gap-24 px-10 font-semibold mb-2">
              <p>4.</p>
              <p>Matrix Multiplication</p>
            </div>
            <div className="flex gap-24 px-10 font-semibold mb-2">
              <p>5.</p>
              <p>Matrix Multiplication</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
