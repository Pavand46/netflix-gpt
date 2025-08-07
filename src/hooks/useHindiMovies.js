import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addHindiMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useHindiMovies = () => {
  const dispatch = useDispatch();

  const getHindiMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_original_language=hi&sort_by=release_date.asc&release_date.gte=2025-08-20",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addHindiMovies(json.results));
  };

  useEffect(() => {
    getHindiMovies();
  }, []);
};

export default useHindiMovies;
