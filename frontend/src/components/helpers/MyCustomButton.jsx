import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

const MyCustomButton = () => {
  const postConvertToken = (googleAccessToken) => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "convert_token",
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        backend: "google-oauth2",
        token: googleAccessToken,
      }),
    };
    fetch("https://codeagainstwar.online/auth/convert-token/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("access_token", JSON.stringify(data.access_token));
        localStorage.setItem(
          "refresh_token",
          JSON.stringify(data.refresh_token)
        );
      });
  };

  //access_token
  //refresh_token
  const login = useGoogleLogin({
    onSuccess: function (codeResponse) {
      //console.log(codeResponse);
      postConvertToken(codeResponse.access_token);
    },
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
