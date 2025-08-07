import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[160px] transition-transform hover:scale-95">
      <img
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
        className="rounded-lg shadow-md"
      />
    </div>
  );
};

export default MovieCard;
