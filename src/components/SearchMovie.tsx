import { useState } from "react";
import { tmdb_api } from "../service/api";
import ItemSearch from "./ItemSearch";
import { SearchRow } from "./SearchRow";

type Props = {
  fetchUrl: string;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
};

const SearchMovie = ({ fetchUrl }: Props) => {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);


  const handleFreeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = () => {
    async function fetchData() {
      const request = await tmdb_api.get(
        `${fetchUrl}&query=${keyword}&page=1&include_adult=false`
      );
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <ItemSearch
          value={keyword}
          handleFreeWord={handleFreeWord}
          handleSubmit={handleSubmit}
        />
      </div>
      <SearchRow datas={movies} />
    </div>
  );
};

export default SearchMovie;
