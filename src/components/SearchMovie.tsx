import {useState} from 'react';
import {tmdb_api} from '../service/api';
import ItemSearch from './ItemSearch';
import {SearchRow} from "./SearchRow";
import { makeStyles } from "@material-ui/core/styles";


type Props = {
  fetchUrl:string;
}

type Movie = {
  is:string;
  name:string;
  title:string;
  original_name:string;
  poster_path:string;
  backdrop_path:string;
  vote_average:number;
};

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
  }
}));

const SearchMovie = ({fetchUrl}:Props) => {
  const classes = useStyles();

  const [keyword,setKeyword] = useState('');

  const [movies,setMovies] = useState<Movie[]>([]);

  const [check,setCheck] = useState(false);

  const handleFreeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = () => {
    async function fetchData(){
      const request = await tmdb_api.get(`${fetchUrl}&query=${keyword}&page=1&include_adult=false`);
      setMovies(request.data.results);
      setCheck(true);
      return request;
    }
    fetchData();
  }
  return(

      <div className={classes.root}>
      <div>
        <ItemSearch 
        value={keyword}
        handleFreeWord={handleFreeWord}
        handleSubmit={handleSubmit}
        />
        <SearchRow datas={movies} check={check} />
      </div>
      </div>

  )
}

export default SearchMovie;
