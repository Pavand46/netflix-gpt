const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full px-16 text-white bg-gradient-to-r from-black/80 flex flex-col justify-center">
      <h1 className="text-6xl font-bold p-5">{title}</h1>
      <p className="px-5 text-xl w-1/3">{overview}</p>
      <div className="flex gap-9 p-5">
        <button className="bg-white text-black text-lg px-8 py-2 rounded-lg">
          ▶️ Play
        </button>
        <button className="bg-white text-black text-lg px-6 py-2 rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
