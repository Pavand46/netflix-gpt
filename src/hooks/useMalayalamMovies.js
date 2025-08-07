import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMalayalamMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMalayalamMovies = () => {
  const dispatch = useDispatch();

  const getMalayalamMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_original_language=ml&sort_by=release_date.asc&release_date.gte=2025-08-20",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMalayalamMovies(json.results));
  };

  useEffect(() => {
    getMalayalamMovies();
  }, []);
};

export default useMalayalamMovies;
