import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
export default function Home() {
  const Api_Key = "fcb387f6b0154d0eb32711f4982326f9";
  const [games, setGames] = useState([]);
  const [setVideos] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${Api_Key}`)
      .then((res) => res.json())
      .then((data) => setGames(data.results));
  }, []);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/platforms?key=${Api_Key}`)
      .then((res) => res.json())
      .then((data) => setVideos(data.results));
  }, []);

  return (
    <div className="flex pt-[90px] gap-[50px] w-full flex-col items-center">
      <div className="w-full min-h-screen bg-[url(https://static.vecteezy.com/system/resources/previews/033/503/316/non_2x/group-of-special-forces-soldiers-with-assault-rifle-studio-shot-over-dark-background-armed-special-forces-group-with-shotguns-on-a-black-background-face-covered-with-masks-ai-generated-free-photo.jpg)] bg-center bg-no-repeat bg-cover">
        <div className="relative px-6 sm:max-md:px-1 pt-14 after:absolute after:w-[80vw] after:h-[100vh] after:animate-afterHome after:top-[100px] after:left-[150px] before:absolute before:w-[70vw] before:h-[100vh] before:animate-afterHome before:top-[100px] before:left-[215px] lg:px-8">
          <div className="relative max-w-2xl py-32 mx-auto animate-textHome sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-mainText sm:text-6xl">
                Discover a world of amazing videos!
              </h1>
              <p className="mt-6 text-lg leading-8 text-mainText sm:text-base md:text-lg lg:text-xl">
                Noting that a variety of videos are available to suit all tastes.
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <button className="rounded-md bg-button px-3.5 py-2.5 text-sm font-semibold text-button shadow-sm hover:bg-hoverButton">
                  Get started
                </button>
                <span className="text-sm font-semibold leading-6 text-button">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full min-h-screen gap-10">
        <h1 className="text-4xl font-bold text-mainText sm:text-3xl md:text-4xl">
          Various Games
        </h1>
        <div className="w-full px-4 md:px-[50px] lg:px-[100px] gap-4 min-h-[50vh] sm:max-md:flex sm:max-md:flex-col sm:max-md:items-center sm:max-md:gap-[20px] sm:max-md:w-[100vw] sm:max-md:px-0  flex flex-row flex-wrap justify-center">
          {games.slice(0, 8).map((v) => (
            <Link to={`/playerVideo/${v.id}`} key={v.id}>
              <Card
                name={v.name}
                rating={v.rating}
                released={v.released}
                ratings_count={v.ratings_count}
                image={v.background_image}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full py-20 flex flex-col items-center gap-10 min-h-[50vh]">
        <h1 className="text-xl font-bold text-center w-[80%] sm:w-[90%] md:w-[70%] lg:w-[50%] text-mainText">
          <span className="text-3xl font-bold text-title">Welcome to HaedaraTube</span>, your go-to platform to discover and watch a wide range of diverse videos.
        </h1>
        <video
          src="https://video.akamai.steamstatic.com/store_trailers/256972298/movie480_vp9.webm?t=1696005467"
          className="w-full sm:w-[480px] md:w-[640px] h-auto"
          autoPlay
        ></video>
      </div>
    </div>
  );
}
