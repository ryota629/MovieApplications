// import { makeStyles } from "@material-ui/core/styles";
import { requests } from "../service/request";
import SearchMovie from "./SearchMovie";
import WatchedList from "./WatchedList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditMovied from "./EditMovied";
import MoviedDetail from "./MoviedDetail";
import EditWatched from "./EditWatched";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* 映画リスト */}
          <Route path="/" element={<WatchedList watchListUrl="watchedlist"/>} />
          <Route path="/watchedlist" element={<WatchedList watchListUrl="watchedlist"/>} />
          {/* 観たい映画編集画面(検索用) */}
          <Route path="/searchmovie/editmovie" element={<EditMovied />} />
          {/* 観たい映画詳細画面 */}
          <Route path="/watchedlist/moviedetail" element={<MoviedDetail />} />
          {/*観たい映画編集画面(詳細用)  */}
          <Route
            path="/watchedlist/moviedetail/editwatched"
            element={<EditWatched />}
          />

          {/* 次観たい映画リスト */}
          <Route path="/nextwatchedlist" element={<WatchedList watchListUrl="nextwatchedlist"/> } />
          {/* 次観たい映画編集画面(検索用) */}
         <Route
           path="/searchmovie/editnextmovie"
           element={<EditMovied />}
         />
          {/* 次観たい映画詳細画面 */}
          <Route
            path="/nextwatchedlist/moviedetail"
            element={<MoviedDetail />}
          />
          {/*次観たい映画編集画面(詳細用)  */}
          <Route
            path="/nextwatchedlist/moviedetail/editwatched"
            element={<EditWatched />}
          />

          {/* 検索画面 */}
          <Route
            path="/searchmovie"
            element={<SearchMovie fetchUrl={requests.feactTopRated} />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Main;
