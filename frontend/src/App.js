import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from '@react-oauth/google';
// import { googleLogout } from '@react-oauth/google';
// import { useGoogleOneTapLogin } from '@react-oauth/google';
// import { useGoogleLogin } from '@react-oauth/google';
import { useRef } from "react";
import Profile from "./components/Profile";
import Challenges from "./components/Challenges";
import Challenge from "./components/Challenge";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
//require("dotenv").config();

function App() {
  // googleLogout();
  const pageRefs = useRef({});
  // alert(process.env.REACT_APP_CLIENT_ID);
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <div className="App">
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        </div>
      </GoogleOAuthProvider>
      <Routes>
        <Route path="/profile" element={<Profile pageRefs={pageRefs} />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/" element={<Home pageRefs={pageRefs} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
