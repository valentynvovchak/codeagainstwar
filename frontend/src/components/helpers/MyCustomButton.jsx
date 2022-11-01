import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

const MyCustomButton = () => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "implicit",
  });

  return (
    <button
      onClick={() => login()}
      className="lg: text-white font-medium bg-blue-700 px-6 py-1 rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-150 text-center text-base sm: text-base"
    >
      Sign up
    </button>
  );
};

export default MyCustomButton;
