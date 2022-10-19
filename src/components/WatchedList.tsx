import { useEffect, useState } from "react";
import { getWatched } from "../service/api";
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

const WatchedList = () => {

  const [watched,setWatched] = useState<Movied[]>([]);

  useEffect(() => {
    getWatchedDetails();
  },[]);

  const getWatchedDetails =  async() => {
    let response:any= await getWatched();
    setWatched(response.data);
  }
  return(
    <div>
      <h1 style={{textAlign:"center"}}>観た映画一覧</h1>
      <WatchedRow datas={watched} detailurl="watchedlist"/>
    </div>
  )
}

export default WatchedList;