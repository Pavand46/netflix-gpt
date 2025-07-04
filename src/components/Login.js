import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignUp, setISSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignUp = () => {
    setISSignUp(!isSignUp);
    setErrorMessage("");
  };

  const handleSubmitButton = () => {
    const nameValue = name.current?.value || "";
    const emailValue = email.current.value.trim();
    const passwordValue = password.current.value;

    const response = checkValidateData(
      nameValue,
      emailValue,
      passwordValue,
      isSignUp
    );
    setErrorMessage(response);

    if (response !== null) return;

    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode === "auth/email-already-in-use") {
            setErrorMessage("Email is already in use, Please Login");
          } else {
            setErrorMessage(errorCode, "->", errorMessage);
          }
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode === "auth/invalid-credential") {
            setErrorMessage("Please Enter Valid Email ID and Password");
          } else {
            setErrorMessage(errorCode + " -> " + errorMessage);
          }
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="relative h-screen w-screen">
        {/* Background Image */}
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={BACKGROUND_IMAGE}
          alt="Background"
        />

        {/* Centered Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 w-3/12 p-6 text-white rounded-lg shadow-lg"
        >
          <h1 className="text-2xl font-semibold mb-6 text-center">
            {isSignUp === true ? "Sign Up" : "Sign In"}
          </h1>

          {isSignUp && (
            <input
              ref={name}
              className="py-2 mb-4 w-full px-4 rounded bg-gray-800 placeholder-gray-400"
              type="text"
              placeholder="Name"
            />
          )}

          <input
            ref={email}
            className="py-2 mb-4 w-full px-4 rounded bg-gray-800 placeholder-gray-400"
            type="text"
            placeholder="Email"
          />

          <input
            ref={password}
            className="py-2 mb-4 w-full px-4 rounded bg-gray-800 placeholder-gray-400"
            type="password"
            placeholder="Password"
          />

          {errorMessage && (
            <p className="m-2 p-2 text-red-500 text-sm text-center">
              {errorMessage}
            </p>
          )}

          <button
            onClick={handleSubmitButton}
            className="w-full py-2 bg-red-600 hover:bg-red-700 rounded"
          >
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
