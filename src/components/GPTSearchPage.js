import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute h-screen w-screen -z-10">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={BACKGROUND_IMAGE}
          alt="Background"
        />
      </div>
      <GPTSearchBar />
    </div>
  );
};

export default GPTSearch;
