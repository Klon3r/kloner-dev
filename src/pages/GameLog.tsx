import GameCard from "@/components/GameCard/GameCard";
import { Skeleton } from "@/components/ui/skeleton";
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
  const [gameListLoading, setGameListLoading] = useState(true);

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
    setGameListLoading(false);
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
        {!gameListLoading ? (
          <div className="flex flex-col items-center gap-5">
            <GameCard gameList={gameList} />
            <h1 className="text-xl">Total Games: {gameList.length}</h1>
          </div>
        ) : (
          <GameListLoadingSkeleton />
        )}
      </div>
    </div>
  );
};

const GameListLoadingSkeleton = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Skeleton className="max-w-xs w-8 h-8 rounded-full" />
      <Skeleton className="max-w-xs w-100 h-105 rounded-2xl" />
      <Skeleton className="max-w-xs w-8 h-8 rounded-full" />
    </div>
  );
};

export default GameLog;
