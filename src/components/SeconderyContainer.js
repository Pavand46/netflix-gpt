import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SeconderyContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <div>
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Trending Movies"} movies={movies.trendingList} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Telugu Movies"} movies={movies.teluguMovies} />
        <MovieList title={"Hindi Movies"} movies={movies.hindiMovies} />
        <MovieList title={"Tamil Movies"} movies={movies.tamilMovies} />
        <MovieList title={"Malayalam Movies"} movies={movies.malayalamMovies} />
        <MovieList title={"Kannada Movies"} movies={movies.kannadaMovies} />
        <MovieList
          title={"Popular TV Series"}
          movies={movies.popularTvSeries}
        />
        <MovieList
          title={"Popular Telugu TV Series"}
          movies={movies.popularTeluguTvSeries}
        />
      </div>
    </div>
  );
};

export default SeconderyContainer;
