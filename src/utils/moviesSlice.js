import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    teluguMovies: null,
    hindiMovies: null,
    tamilMovies: null,
    malayalamMovies: null,
    kannadaMovies: null,
    trendingList: null,
    popularTvSeries: null,
    popularTeluguTvSeries: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTeluguMovies: (state, action) => {
      state.teluguMovies = action.payload;
    },
    addHindiMovies: (state, action) => {
      state.hindiMovies = action.payload;
    },
    addTamilMovies: (state, action) => {
      state.tamilMovies = action.payload;
    },
    addMalayalamMovies: (state, action) => {
      state.malayalamMovies = action.payload;
    },
    addKannadaMovies: (state, action) => {
      state.kannadaMovies = action.payload;
    },
    addTrendingList: (state, action) => {
      state.trendingList = action.payload;
    },
    addPopularTvSeries: (state, action) => {
      state.popularTvSeries = action.payload;
    },
    addPopularTeluguTvSeries: (state, action) => {
      state.popularTeluguTvSeries = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTeluguMovies,
  addHindiMovies,
  addTamilMovies,
  addMalayalamMovies,
  addKannadaMovies,
  addTrendingList,
  addPopularTvSeries,
  addPopularTeluguTvSeries,
} = moviesSlice.actions;
export default moviesSlice.reducer;
