// import { useState } from "react";

import MovieListSearchBar from "@/components/SearchBar/MovieSearchBar";
import { Spinner } from "@/components/ui/spinner";
import { toSearchFormat } from "@/utils/search";
import { useEffect, useState } from "react";

const FETCH_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api/movies"
    : "/api/movies";

export type MovieType = {
  movie_id: number;
  movie_title: string;
  search_title?: string;
};

const MovieLog = () => {
  const [allMovies, setAllMovies] = useState<MovieType[]>([]);
  const [displayedMovies, setDisplayedMovies] = useState<MovieType[]>([]);
  const [isMovieListLoading, setIsMovieListLoading] = useState(true);

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
    getMovieList().then((movies) => {
      // Add search title to help with movie searching, removes punctuation syntax
      const searchFormat = movies.map((movie: MovieType) => ({
        ...movie,
        search_title: toSearchFormat(movie.movie_title),
      }));

      setAllMovies(searchFormat);
      setDisplayedMovies(searchFormat);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl underline underline-offset-5">Movie List</h1>
      {/* Movie Count */}
      {isMovieListLoading ? (
        <Spinner className="size-10 mt-5" />
      ) : (
        <div className="flex flex-col justify-center items-center">
          {!isMovieListLoading && (
            <div>
              <MovieListSearchBar
                className="py-3"
                allMovies={allMovies}
                setDisplayedMovieList={setDisplayedMovies}
                totalResults={displayedMovies.length}
              />
            </div>
          )}
          <table>
            {/* {!isMovieListLoading && movieTotal > 0 ? ( */}
            {!isMovieListLoading ? (
              <tbody>
                {displayedMovies.map((movie) => (
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
