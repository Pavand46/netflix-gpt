import useHindiMovies from "../hooks/useHindiMovies";
import useKannadaMovies from "../hooks/useKannadaMovies";
import useMalayalamMovies from "../hooks/useMalayalamMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTeluguTvSeries from "../hooks/usePopularTeluguTVSeries";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import useTamilMovies from "../hooks/useTamilMovies";
import useTelugudMovies from "../hooks/useTeluguMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingList from "../hooks/useTrendingList";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTelugudMovies();
  useHindiMovies();
  useTamilMovies();
  useMalayalamMovies();
  useKannadaMovies();
  useTrendingList();
  usePopularTvSeries();
  usePopularTeluguTvSeries();

  return (
    <div>
      <Header />
      <MainContainer />
      <SeconderyContainer />
    </div>
  );
};

export default Browse;
