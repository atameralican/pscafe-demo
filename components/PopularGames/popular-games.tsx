"use client";
import React, { useEffect, useState } from "react";
import { CardSlider, Carousel } from "../ui/apple-cards-carousel";

type PopularGamesProps = {
  game_name: string;
  id: string;
  image_url?: string;
};
function PopularGames() {
  const [data, setData] = useState<PopularGamesProps[]>([]);
  useEffect(() => {
    fetch("/api/popularGames", {
     // next: { revalidate: 60 }, //30 gn cache de tutmak için ikinci yöntem 
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => setData([])); 
  }, []);

  let cards = data?.map((card, index) => (
    <CardSlider
      key={card?.id}
      title={card?.game_name || card?.id}
      src={card?.image_url || ""}
      index={index}
    />
  ));
  return (
    <>
      <Carousel items={cards} />
    </>
  );
}

export default PopularGames;
