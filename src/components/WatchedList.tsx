import { useEffect, useState } from "react";
import { getWatched } from "../service/api";
import { getNextWatched } from "../service/api";
import { WatchedRow } from "./WatchedRow";

type Movied = {
  id: number;
  title: string;
  detail: string;
  releasedate: string;
  review: string;
  cast: string;
  createdate: string;
  image: string;
};

type Props = {
  watchListUrl: string;
};

const WatchedList = ( {watchListUrl}:Props ) => {
  const [watched, setWatched] = useState<Movied[]>([]);

  useEffect(() => {
    getWatchedDetails();
  }, []);

  const getWatchedDetails = async () => {
    if(watchListUrl === "watchedlist"){
    const response: any = await getWatched();
    setWatched(response.data);
    }
    if(watchListUrl === "nextwatchedlist"){
      const response: any = await getNextWatched();
      setWatched(response.data);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{watchListUrl === "watchedlist" ? "観た映画一覧" : "次観たい映画一覧"}</h1>
      <WatchedRow datas={watched} detailurl={watchListUrl}/>
    </div>
  );
};

export default WatchedList;
