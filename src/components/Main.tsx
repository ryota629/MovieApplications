// import { makeStyles } from "@material-ui/core/styles";
import { requests } from "../service/request";
import SearchMovie from "./SearchMovie";
import WatchedList from "./WatchedList";
import NextWatchedList from "./NextWatchedList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditMovied from "./EditMovied";
import EditNextMovied from "./EditNextMovied";
import MoviedDetail from "./MoviedDetail";
import EditWatched from "./EditWatched";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WatchedList />} />
          <Route path="/watchedlist" element={<WatchedList />} />
          <Route path="/nextwatchedlist" element={<NextWatchedList />} />
          <Route
            path="/searchmovie"
            element={<SearchMovie fetchUrl={requests.feactTopRated} />}
          />
          <Route path="/searchmovie/editmovie" element={<EditMovied />} />
          <Route
            path="/searchmovie/editnextmovie"
            element={<EditNextMovied />}
          />
          <Route path="/watchedlist/moviedetail" element={<MoviedDetail />} />
          <Route
            path="/nextwatchedlist/moviedetail"
            element={<MoviedDetail />}
          />
          <Route
            path="/watchedlist/moviedetail/editwatched"
            element={<EditWatched />}
          />
          <Route
            path="/nextwatchedlist/moviedetail/editwatched"
            element={<EditWatched />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Main;
