import { MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import   React                      from "react";
import   MyCustomButton             from "./helpers/MyCustomButton";
import { GoogleOAuthProvider }      from "@react-oauth/google";
import { Link }                     from "react-router-dom";

function Header({ pageRefs }) {
  function scrollIntoView(type) {
    pageRefs.current[type].scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <GoogleOAuthProvider clientId="1047839081489-v1v1dubc557qiqq36mhag4neskapnurk.apps.googleusercontent.com">
      <header className="sticky top-0 z-50 grid grid-cols-2 bg-gray-100 py-5 px-10 sm:py-2 sm:flex justify-between md:py-4">
        <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <MyCustomButton />
          <Link to="/" onClick={() => scrollIntoView("home")}>
            <img
              src="/logo.png"
              layout="fill"
              width="300px"
              className="lg:w-[300px] md:w-[150px] sm:w-[150px] sm:mx-5"
            />
          </Link>
        </div>
        <div className="flex justify-end gap-5 space-x-10 py-5 text-blue-700 font-semibold md:gap-1">
          <Link
            to="/"
            className="p-1 cursor-pointer text-base sm:hidden"
            onClick={() => scrollIntoView("about")}
          >
            About
          </Link>
          <Link
            to="/"
            className="p-1 cursor-pointer text-base sm:hidden"
            onClick={() => scrollIntoView("learning")}
          >
            Learning
          </Link>
          <Link
            to="/"
            className="p-1 cursor-pointer text-base sm:hidden"
            onClick={() => scrollIntoView("partners")}
          >
            Partners
          </Link>
          <div className="flex items-center space-x-4 justify-end text-blue-700">
            <div className=" flex items-center space-x-2 border-2 border-gray-300 p-1 rounded-full sm:space-x-0">
              <MenuIcon className="h-6" />
              <Link to="/profile">
                <UserCircleIcon className="h-6 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </GoogleOAuthProvider>
  );
}
export default Header;
