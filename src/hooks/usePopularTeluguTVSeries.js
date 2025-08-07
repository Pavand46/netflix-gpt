import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTeluguTvSeries } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularTeluguTVSeries = () => {
  const dispatch = useDispatch();

  const getpopularTeluguTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/tv?with_original_language=te&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularTeluguTvSeries(json.results));
  };

  useEffect(() => {
    getpopularTeluguTvSeries();
  }, []);
};

export default usePopularTeluguTVSeries;
