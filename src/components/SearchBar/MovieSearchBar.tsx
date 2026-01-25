import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { MovieType } from "@/pages/MovieLog";
import { toSearchFormat } from "@/utils/search";

type MovieListSearchBarType = {
  allMovies: MovieType[];
  setDisplayedMovieList: Dispatch<SetStateAction<MovieType[]>>;
  totalResults?: number;
  className?: string;
};

const MovieListSearchBar = ({
  allMovies,
  setDisplayedMovieList,
  totalResults,
  className,
}: MovieListSearchBarType) => {
  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const searchFormat = toSearchFormat(value);

    const filteredResults = allMovies.filter((movie) => {
      return movie.search_title?.includes(searchFormat);
    });

    setDisplayedMovieList(filteredResults);
  };

  return (
    <div className={className}>
      <InputGroup className="max-w-xs rounded-[5px] h-10">
        <InputGroupInput
          placeholder="Search..."
          onChange={(e) => {
            onChangeHandle(e);
          }}
        />
        <InputGroupAddon>
          <Search className="mb-1" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end" className="text-lg">
          {totalResults}
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default MovieListSearchBar;
