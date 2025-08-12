import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="px-8 py-2 w-screen absolute bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44 md:w-52" src={LOGO} alt="Netflix Logo" />

      {user && (
        <div className="flex items-center gap-4">
          {showGPTSearch && (
            <select
              aria-label="Select language"
              className="bg-black/60 text-white text-sm px-3 py-2 rounded-md border border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
            onClick={handleGptSearchClick}
          >
            {showGPTSearch ? "Homepage" : "GPT Search"}
          </button>

          <img
            className="w-12 h-12 rounded"
            src={USER_AVATAR}
            alt="User Avatar"
          />
          <button
            onClick={() => {
              handleSignOut();
            }}
            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
