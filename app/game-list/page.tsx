"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Frown, Gamepad2 } from "lucide-react";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
type RoomInfo = {
  id: number;
  masa_no: number;
  cihaz_turu: "PS3" | "PS4" | "PS5";
};

type GameListProps = {
  id: string;
  game_name: string;
  category: string;
  image_url: string | null;
  person: number;
  ea_games: boolean;
  room_number: RoomInfo[];
};
const GameList = () => {
  const [gameList, setGameList] = useState<GameListProps[]>([]);
  const [filteredGameList, setFilteredGameList] = useState<GameListProps[]>([]);

  useEffect(() => {
    fetch("/api/gameList", {})
      .then((res) => res.json())
      .then((res) => {
        setGameList(res || []);
        setFilteredGameList(res || []);
      })
      .catch((err) => console.error("Error fetching game list:", err));
  }, []);

  return (
    <div>
      <Card className="relative w-full  h-full overflow-hidden">
        <CardContent className="h-full">
          {filteredGameList.length > 0 ? (
            <>
              <BentoGrid className="max-w-4xl mx-auto">
                {filteredGameList.map((item, i) => (
                  <BentoGridItem
                    key={i}
                    title={item.game_name}
                    category={item.category}
                    eaPlay={item.ea_games}
                    imageUrl={item.image_url || ""}
                    person={item.person}
                    room_number={item.room_number || []}
                    className={"md:col-span-1"}
                  />
                ))}
              </BentoGrid>
            </>
          ) : (
            <>
              <Empty>
                <EmptyHeader>
                  <EmptyMedia className="size-24" variant="default">
                    <Frown className="size-24" />
                  </EmptyMedia>
                  <EmptyTitle>Gamepad Malfunction</EmptyTitle>
                  <EmptyDescription>Sorry, game not found.</EmptyDescription>
                </EmptyHeader>
              </Empty>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default GameList;
