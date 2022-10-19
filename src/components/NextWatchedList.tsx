import { useEffect, useState } from "react";
import { getNextWatched } from "../service/api";
import {WatchedRow} from "./WatchedRow";

type Movied = {
  id:number;
  title:string;
  detail:string;
  releasedate:string;
  review:string;
  cast:string;
  createdate:string;
  image:string;
}

const NextWatchedList = () => {

  const [nextwatched,setWatched] = useState<Movied[]>([]);

  useEffect(() => {
    getWatchedDetails();
  },[]);

  const getWatchedDetails =  async() => {
    let response:any= await getNextWatched();
    setWatched(response.data);
  }

  return(
    <div>
      <h1 style={{textAlign:"center"}}>次観たい映画一覧</h1>
      <WatchedRow  datas={nextwatched} detailurl="nextwatchedlist"/>
    </div>
  )
}

export default NextWatchedList;