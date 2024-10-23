import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardTags from "../../Components/CardTags";
import CardStores from "../../Components/CardStores";

export default function GameDetails() {
  const Api_Key = "fcb387f6b0154d0eb32711f4982326f9";
  const { id } = useParams();
  const { name } = useParams();
  const [game, setGame] = useState([]);
  useEffect(() => {
    try {
      fetch(`https://api.rawg.io/api/${name}/${id}?key=${Api_Key}`)
        .then((res) => res.json())
        .then((data) => setGame(data));
    } catch {
      console.log("THE CONNECTION IS LOW WELCOM TO SYRIA");
    }
  }, [id]);
  console.log(game);

  return (
    <div>
      <div className="max-w-[85rem] flex flex-col gap-[30px] items-center px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div>
          <img
            src={game.background_image}
            className="w-[90vw] relative h-[50vh] mt-[50px] mx-auto rounded-[20px] "
            alt=""
          />
          <div
            style={{
              "--after-angle": `${game.rating * 3.6}deg`,
            }}
            className="relative translate-y-[-70px] rounded-[50%] bg-navBar w-[70px] h-[70px]"
          >
            <h1 className="text-sm font-medium text-mainText absolute top-[20%] left-[10%] z-[3] ">RATING</h1>
            <div
              style={{
                background: `conic-gradient(#FF0000 var(--after-angle), transparent 0deg)`,
              }}
              className="absolute top-0 left-0 w-full h-full rounded-[50%]"

            ></div>
          </div>
          <div className="flex flex-col items-start w-[90vw] mx-auto justify-between">
            <h2 className="text-[20px] text-mainText "><span className="text-title">Updated:</span> {game.updated}</h2>
            <h2 className="text-[20px] text-mainText "><span className="text-title">Youtube_Count</span>: {game.youtube_count}</h2>
            <a href={`https://${game.website}`} className="text-[20px] text-mainText "><span className="text-title">Website:</span> {game.website}</a>
            <h2 className="text-[20px] text-mainText "><span className="text-title">Description</span>: {game.description_raw}</h2>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[30px] w-[100vw] min-h-[100vh] ">
          <h1 className="text-4xl font-bold text-title">PLATFORMS</h1>
          <div className="flex px-[90px] min-h-[100vh] flex-row items-center flex-wrap gap-[30px] w-[100vw] ">
            {game.platforms?.map((p) => (
              <>
                <div className="w-[20vw] overflow-hidden rounded-lg shadow-lg bg-navBar">
                  <div className="flex flex-row items-center justify-between px-1">
                    <div className="py-2 ">
                      <h1 className="text-xl font-bold text-logo">
                        {p.platform.name}
                      </h1>
                      <p className="mt-1 text-sm text-mainText">
                        Slug: {p.platform.slug}
                      </p>
                    </div>
                    <h2 className="text-sm font-bold text-logo">
                      {p.released_at}
                    </h2>
                  </div>

                  <img
                    className="object-cover w-full h-48 mt-2"
                    src={p.platform.image_background}
                    alt="NIKE AIR"
                  />

                  <div className="flex items-center justify-between px-1 py-2 bg-navBar">
                    <h1 className="text-sm font-bold text-hoverLink">
                      Games_Count: {p.platform.games_count}
                    </h1>
                    <span className="px-2 py-1 text-xs text-mainText">
                      {p.platform.year_start}
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-[30px] w-[100vw] h-[50vh] ">
          <h1 className="text-2xl font-bold text-title ">RATINGS</h1>
          <div className="flex flex-row py-[20px] items-center w-[100vw]">
            {game.ratings?.map((r) =>
              <div className="flex flex-col justify-between items-center h-[20vh] w-[30vw] ">
              <h1 className="text-lg font-bold text-title">{r.title}</h1>
              <div
            style={{
              "--after-angle": `${r.percent * 3.6}deg`,
            }}
            className="relative rounded-[50%] bg-navBar w-[70px] h-[70px]"
          >
            <h1 className="text-sm font-medium text-mainText absolute top-[20%] left-[10%] z-[3] ">RATING</h1>
            <div
              style={{
                background: `conic-gradient(#FF0000 var(--after-angle), transparent 0deg)`,
              }}
              className="absolute top-0 left-0 w-full h-full rounded-[50%]"

            ></div>
          </div>
          <h1 className="text-sm font-semibold text-button">Count: {r.count}</h1>
            </div>
            )}
          </div>
        </div>
       <div className="flex flex-col items-center gap-[30px] w-[100vw] min-h-[80vh] ">
        <h1 className="text-4xl font-bold text-title">Tages</h1>
       <div className="flex flex-row overflow-x-scroll w-[600vw] no-scrollbar items-center gap-[20px] ">
        {game.tags?.map((t) =>
          <CardTags image={t.image_background} gameC={t.games_count} name={t.name} lang={t.language} />
        )}
        </div>
       </div>
       <div className="flex flex-col items-center gap-[30px] w-[100vw] min-h-[80vh] ">
        <h1 className="text-4xl font-bold text-title">Stores</h1>
       <div className="flex px-[120px] flex-row flex-wrap w-[100vw] items-center gap-[20px] ">
        {game.stores?.map((t) =>
          <CardStores image={t.store.image_background} gameC={t.store.games_count} name={t.store.name} domin={t.store.domain} />
        )}
        </div>
       </div>
        <div className="w-[90vw] h-[300px] ">
          <video className="w-full h-full" src="https://content1.avplayer.com/641186cd15d2e834c809eb78/videos/66f2be3ce7910ba3f9074c86/66f2be44bd0b86e39e07d547/video.mp4?AV_TAGID=64411a82a479e527d809e416&pid=641186cd15d2e834c809eb78&cid=6436b0443ea22984690c1b64&AV_TEMPID=6441140e26f5980d0a0466f9&AV_PUBLISHERID=641186cd15d2e834c809eb78&av_qd1=668fea776d5cce1bf20f4dd2&videoId=66f2be3ce7910ba3f9074c86" autoPlay></video>
        </div>
      </div>
    </div>
  );
}
