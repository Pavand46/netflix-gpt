import React from "react";
import lang from "../utils/lang";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="flex justify-center pt-40">
      <div className="flex items-center bg-black shadow-lg rounded-lg px-4 py-4 w-full max-w-2xl">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="flex-grow px-4 py-2 rounded-full outline-none text-gray-700 text-lg"
        />
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition">
          {lang[langKey].search}
        </button>
      </div>
    </div>
  );
};

export default GPTSearchBar;
