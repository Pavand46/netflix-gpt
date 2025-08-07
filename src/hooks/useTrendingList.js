import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingList } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingList = () => {
  const dispatch = useDispatch();

  const getTrendingList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingList(json.results));
  };

  useEffect(() => {
    getTrendingList();
  }, []);
};

export default useTrendingList;
