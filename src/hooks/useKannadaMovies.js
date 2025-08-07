import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addKannadaMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useKannadaMovies = () => {
  const dispatch = useDispatch();

  const getKannadaMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_original_language=kn&sort_by=release_date.asc&release_date.gte=2025-07-07",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addKannadaMovies(json.results));
  };

  useEffect(() => {
    getKannadaMovies();
  }, []);
};

export default useKannadaMovies;
