import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTeluguMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTelugudMovies = () => {
  const dispatch = useDispatch();
  const getTeluguMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_original_language=te&sort_by=release_date.asc&release_date.gte=2025-08-20",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTeluguMovies(json.results));
  };
  useEffect(() => {
    getTeluguMovies();
  }, []);
};

export default useTelugudMovies;
