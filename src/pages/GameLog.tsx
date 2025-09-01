import GameCard from "@/components/GameCard/GameCard";
import { useEffect, useState } from "react";

const FETCH_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api/games"
    : "/api/games";

export type GameType = {
  game_id: string;
  game_title: string;
  platform: string;
  completion_date: string;
  notes?: string;
  game_cover?: string;
};

const GameLog = () => {
  const [gameList, setGameList] = useState<GameType[]>([]);

  const getDBList = async () => {
    const response = await fetch(FETCH_URL, {
      method: "GET",
    });
    const data = await response.json();
    // Object transformation (row/columns)
    const games = data.body.rows.map((row: string[]) => {
      return Object.fromEntries(
        data.body.columns.map((col: string, idx: number) => [col, row[idx]])
      );
    });
    return games;
  };

  useEffect(() => {
    getDBList().then((games) => setGameList(games));
  }, []);

  return (
    <div>
      <div className="flex flex-wrap flex-col items-center justify-center gap-10">
        <h1 className="text-4xl underline underline-offset-5">
          The Completion Hall
        </h1>
        <GameCard gameList={gameList} />
        <h1 className="text-xl">Total Games: {gameList.length}</h1>
      </div>
    </div>
  );
};

export default GameLog;
