import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setISSignUp] = useState(false);

  const handleSignUp = () => {
    setISSignUp(!isSignUp);
  };
  return (
    <div>
      <Header />
      <div className="relative h-screen w-screen">
        {/* Background Image */}
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg"
          alt="Background"
        />

        {/* Centered Form */}
        <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 w-3/12 p-6 text-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-6 text-center">
            {isSignUp === true ? "Sign Up" : "Sign In"}
          </h1>

          {isSignUp && (
            <input
              className="py-2 mb-4 w-full px-4 rounded bg-gray-800 placeholder-gray-400"
              type="text"
              placeholder="Name"
            />
          )}

          <input
            className="py-2 mb-4 w-full px-4 rounded bg-gray-800 placeholder-gray-400"
            type="text"
            placeholder="Email"
          />

          <input
            className="py-2 mb-4 w-full px-4 rounded bg-gray-800 placeholder-gray-400"
            type="password"
            placeholder="Password"
          />

          <button className="w-full py-2 bg-red-600 hover:bg-red-700 rounded">
            {isSignUp === true ? "Sign Up" : "Sign In"}
          </button>

          <p
            className="mt-4 text-center text-sm text-gray-300 hover:text-white underline cursor-pointer transition-colors duration-200"
            onClick={() => handleSignUp()}
          >
            {isSignUp ? "Already a User? Sign In" : "New User? Sign Up Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
