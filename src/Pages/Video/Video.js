import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import { Link, useParams } from "react-router-dom";
import CardPlatform from "../../Components/CardPlatform";

export default function Video() {
  const Api_Key = "fcb387f6b0154d0eb32711f4982326f9";
  const { name } = useParams();
  const [array, setArray] = useState([]);
  useEffect(() => {
    fetch(`https://api.rawg.io/api/${name}?key=${Api_Key}`)
      .then((res) => res.json())
      .then((data) => setArray(data.results));
  }, [name]);
  console.log(array);

  const handleCards = () => {
    switch (name) {
      case "devlopers":
      case "games":
        return array.map((v) => (
          <Link to={`/gameDetails/${name}/${v.id}`}>
            <Card
              name={v.name}
              rating={v.rating}
              released={v.released}
              ratings_count={v.ratings_count}
              image={
                v.background_image ? v.background_image : v.image_background
              }
            />
          </Link>
        ));
      case "platforms":
      case "genres":
      case "publishers":
        return array.map((v) => (
          <Link to={`/gameDetails/${name}/${v.id}`}>
            <CardPlatform
              item2={v.name}
              item1={v.slug}
              item3={v.games_count}
              image={v.image_background}
            >
              {v.games &&
                v.games.map((g) => (
                  <div
                    key={g.id}
                    className="flex flex-col items-start gap-[10px]"
                  >
                    <span>{g.name}</span>
                    <span>{g.slug}</span>
                    <span>{g.added}</span>
                  </div>
                ))}
            </CardPlatform>
          </Link>
        ));
      default:
        <h1>no cards</h1>;
        break;
    }
  };
  return (
    <div className="w-[100vw] pt-[150px] max-xlg:px-[70px] sm:max-md:px-[20px] px-[90px] gap-[30px] min-h-[100vh] flex flex-row items-center flex-wrap ">
      {handleCards()}
    </div>
  );
}
