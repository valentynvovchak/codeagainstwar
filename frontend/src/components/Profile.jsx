import React  from "react";
import Header from "./Header";

function Profile({ pageRefs }) {
  return (
    <>
      <Header pageRefs={pageRefs} />
      <div className="bg-gray-100 h-screen sm:h-full overflow-y-hidden">
        <div className="bg-white mx-16 rounded-l-3xl flex justify-between sm:flex-col sm:mx-6 md:flex-col">
          <div className="flex flex-col">
            <p className="font-black pt-10 pl-12 text-lg">My Profile</p>
            <div className="flex justify-center self-center bg-blue-700 w-[400px] h-[200px] rounded-b-3xl mt-8 ml-28 md:ml-0 sm:mx-6 sm:w-5/6 sm:h-[130px]">
              <img
                src="profile-pic.png"
                width="200px"
                // className="inline-block mt-12 ml-[105px] h-48 rounded-full border-2 sm:h-32 sm:w-[130px] sm:ml-[85px] sm:mt-16 md:ml-[97px]"
                className="rounded-full border-2 h-48 mt-12 sm:h-32 sm:w-[130px]"
              />
            </div>
            <div className="mt-20 ml-32 relative sm:ml-8 sm:mr-8 md:ml-28 md:mr-28">
              <button className="bg-blue-700 font-semibold text-sm text-white px-36 py-2 w-full mb-6 active:scale-95 transition duration-150 text-center sm:px-0">
                <p className="inline-block absolute left-6 top-1 text-lg">G</p>
                Contact Me
              </button>
              <button className="bg-gray-800 block font-semibold text-sm text-white px-36 py-2 w-full mb-6 active:scale-95 transition duration-150 text-center sm:px-0">
                <img
                  src="GitHub-Mark.png"
                  className="w-5 absolute left-5 rounded-full"
                />
                GitHub Profile
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-black w-[600px] pt-10 text-lg sm:ml-12 md:ml-12">
              My Challenges
            </p>
            {/* <div className="h-[200px] w-[500px] ml-10 bg-blue-700 mt-8 rounded-t-3xl relative sm:w-[320px] sm:ml-3 sm:h-[180px] md:ml-20"> */}
            <div className="flex justify-center self-center bg-blue-700 mt-8 rounded-t-3xl relative h-[200px] w-5/6">
              <div className="bg-white absolute top-10 left-6 py-2 w-11/12 rounded-3xl sm:left-3 sm:top-6">
                <div className="flex justify-between font-semibold px-6">
                  <p>Completed</p>
                  <p>8</p>
                </div>
              </div>
              <div className="bg-white absolute top-24 left-6 py-2 w-11/12 rounded-3xl sm:left-3 sm:top-20">
                <div className="flex justify-between font-semibold px-6">
                  <p>Earned</p>
                  <p>100$</p>
                </div>
              </div>
              {/* <div className="h-[75px] w-[75px] bg-blue-700 absolute top-40 left-52 rounded-full sm:left-32 sm:top-36"></div> */}
              <div className="flex justify-center self-center h-[75px] w-[75px] bg-blue-700 absolute top-40 rounded-full"></div>
            </div>
            {/* <div className="ml-10 border-l-2 border-r-2 border-b-2 border-gray-800 w-[500px] rounded-b-3xl mb-10 h-[190px] overflow-scroll scrollbar-hide sm:w-[320px] sm:ml-3 sm:h-[250px] sm:mb-4 md:ml-20"> */}
            <div className="flex flex-col justify-center self-center overflow-scroll scrollbar-hide border-l-2 border-r-2 border-b-2 border-gray-800 rounded-b-3xl w-5/6">
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
    </>
  );
}

export default Profile;
