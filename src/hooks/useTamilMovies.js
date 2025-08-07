import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTamilMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTamilMovies = () => {
  const dispatch = useDispatch();

  const getTamilMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_original_language=ta&sort_by=release_date.asc&release_date.gte=2025-08-20",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTamilMovies(json.results));
  };

  useEffect(() => {
    getTamilMovies();
  }, []);
};

export default useTamilMovies;
