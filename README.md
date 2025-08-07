# Netflix GPT

# Steps

- create react app
- configure tailwind css and test
- Routing of the app
- Header
- Login form
- Sign in - Sign up form
- Form Validation
- Authentication set up completed
- Deployed to test
- Authentication Logic for Sign Up and Sign In Form(using API)
- Created redux store with userSlice
- Implemented Sign Out using API
- Update Profile using API

- BugFix : User store is not updating quickly
- BugFix : User can only access the /browse page if he logged in and can only goto / if he is sign out
- unsubscribed to onAuthChange callback inside useEffect
- Add hard coded data to the constants file inside utils folder
- Created Account in TMDB
- Fetched nowPlayingMovies Data using TMDB API
- Created moviesSlice and add it to the store
- Added now playing movies to the store
- Refractor the Browse component by creating a useNowPlayingMovies hook
- Created a movieSlice
- update store with movies data
- Design for MainContainer and Secondery container
- Fetch Data for trailer video using TMDB API
- update store with trailer data
- Build VideoTitle component
- Build VideoBackground component
- Embedded the youtube video and make it autoplay and mute
- Built Now Playing Section added tailwind css
- Custumised Tailwind CSS for Now Playing Section for scrolling
- Build secndery components
- Build Movie List
- Made Movielist scrollable
- Build Movie Card
- used TMDB images to display movie card
- completed Now Playing, Trending, Popular ... totally 13 sections of movie Lists using TMDB API
- Created custom hook for each Movie List/ category

# Features

- Before Login
  - Sign up/ Login page
- After Login/Sign Up
  - Redirected to browse page
    - Header
    - Movie
      - Trailer in the background
      - Movie Name
    - Movie suggestions
    - Movie categories / List
      - Movie Cards
