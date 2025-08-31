import GameCard from "@/components/GameCard/GameCard";
import { useEffect, useState } from "react";

const FETCH_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api/games"
    : "/api/games";

type GameType = {
  game_id: string;
  game_title: string;
  platform: string;
  completion_date: string;
  notes?: string;
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
    <div className="flex flex-wrap justify-center gap-10">
      {gameList &&
        gameList.map((game) => (
          <GameCard
            key={game.game_id}
            id={game.game_id}
            gameTitle={game.game_title}
            platform={game.platform}
            completionDate={game.completion_date}
            notes={game.notes}
          />
        ))}
    </div>
  );
};

export default GameLog;
