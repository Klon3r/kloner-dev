// import { useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";

const FETCH_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api/movies"
    : "/api/movies";

type MovieType = {
  movie_id: number;
  movie_title: string;
};

const MovieLog = () => {
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const [isMovieListLoading, setIsMovieListLoading] = useState(true);
  const movieTotal = movieList.length;

  const getMovieList = async () => {
    const response = await fetch(FETCH_URL, { method: "GET" });
    const data = await response.json();
    const movies = data.body.rows.map((row: string[]) => {
      return Object.fromEntries(
        data.body.columns.map((col: string, idx: number) => [col, row[idx]]),
      );
    });

    setIsMovieListLoading(false);
    return movies;
  };

  useEffect(() => {
    getMovieList().then((movies) => setMovieList(movies));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl underline underline-offset-5">Movie List</h1>
      {/* Movie Count */}
      {isMovieListLoading ? (
        <Spinner className="size-10 mt-5" />
      ) : (
        <div className="flex flex-col justify-center items-center">
          {!isMovieListLoading && movieTotal > 0 && (
            <h2 className="text-primary text-xl mb-5">
              Total DVDs: {movieTotal}
            </h2>
          )}
          <table>
            {!isMovieListLoading && movieTotal > 0 ? (
              <tbody>
                {movieList.map((movie) => (
                  <tr key={movie.movie_id}>
                    <td className="border-b-2 text-xl p-2 hover:text-primary">
                      {movie.movie_title}
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td>No Movies Found</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      )}
    </div>
  );
};

export default MovieLog;
