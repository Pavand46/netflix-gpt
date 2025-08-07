import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 py-6 bg-black text-white">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray space-x-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
