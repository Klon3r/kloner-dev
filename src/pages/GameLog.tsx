import GameCard from "@/components/GameCard/GameCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

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
  const [yearClicked, setYearClicked] = useState(false);
  const [previousYearClicked, setPreviousYearClicked] = useState<number | null>(
    null
  );

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2024 }, // Started the game log in 2025 (minus 2024 for the correct length)
    (_, i) => currentYear - i
  );

  const handleYearLevelClick = (year: number) => {
    // Don't resend API if the user clicks the same year as previous
    if (year != previousYearClicked) {
      resetGameListAndLoadingState();
      getDBList(year).then((games) => setGameList(games));
      setPreviousYearClicked(year);
    }
    setYearClicked(true);
  };

  const handleBackButtonClick = () => {
    // Reset values
    setYearClicked(false);
  };

  const resetGameListAndLoadingState = () => {
    setGameListLoading(true);
    setGameList([]);
  };

  const getDBList = async (year: number) => {
    const response = await fetch(`${FETCH_URL}?year=${year}`, {
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

  return (
    <div className="flex flex-col justify-center flex-wrap items-center gap-2">
      <h1 className="text-3xl underline underline-offset-5">
        The Completion Hall
      </h1>
      {/* Select a year */}
      {!yearClicked &&
        years.map((year) => {
          return (
            <Button
              variant="link"
              className="rounded-[5px] text-2xl"
              key={year}
              onClick={() => handleYearLevelClick(year)}
            >
              {year}
            </Button>
          );
        })}

      {/* Game List - Content */}
      {yearClicked && (
        <div className="flex flex-wrap flex-col items-center justify-center gap-10">
          {!gameListLoading && gameList.length > 0 ? (
            <div className="flex flex-col items-center gap-5">
              <GameCard gameList={gameList} />
              <h1 className="text-xl">Total Games: {gameList.length}</h1>
            </div>
          ) : gameListLoading ? (
            <GameListLoadingSkeleton />
          ) : (
            <NoGamesFound />
          )}
          <Button
            variant="link"
            className="rounded-[5px] text-lg"
            onClick={() => handleBackButtonClick()}
          >
            Back
          </Button>
        </div>
      )}
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

const NoGamesFound = () => {
  return <div className="pt-3 text-lg">No games found</div>;
};

export default GameLog;
