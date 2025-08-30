import { Button } from "@/components/ui/button";

const GameLog = () => {
  const FETCH_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:3000/api/games"
      : "/api/games";

  const getDB = () => {
    fetch(FETCH_URL, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Object transformation (row/columns)
        const games = data.body.rows.map((row: string[]) => {
          return Object.fromEntries(
            data.body.columns.map((col: string, idx: number) => [col, row[idx]])
          );
        });
        console.log(games);
      });
  };

  return (
    <div className="flex justify-center">
      <Button onClick={getDB}>GET GAME LOG</Button>
    </div>
  );
};

export default GameLog;
