import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { tmdb_api } from "../service/api";
import { requests } from "../service/request";


type Props = {
  datas: any;
};

const base_url: string = "https://image.tmdb.org/t/p/w185/";

export const SearchRow = ({ datas}: Props) => {
  const fetchUrlOverview = requests.feactOverview;
  const fetchUrlCast = requests.feactCredit;
  const navigate = useNavigate();

  const title = (i: number) => {
    const wordCount = 21;
    const titleCount = datas[i].title.length;
    const clamp = "...";
    let title = datas[i].title;
    if (titleCount > wordCount) {
      var str = datas[i].title;
      str = str.substr(0, wordCount - 1);
      title = str + clamp;
    }
    return title;
  };

  const SubmitItem = async (i: any, editUrl: string) => {
    const data_id = datas[i]?.id;
    const requestoverview = await tmdb_api.get(
      `/movie/${data_id}?${fetchUrlOverview}`
    );
    const requestcast = await tmdb_api.get(`/movie/${data_id}/${fetchUrlCast}`);
    const dataItem = datas[i];
    const overview = requestoverview.data.overview;

    const credits_data = requestcast.data;
    const cast_length: number = requestcast.data.cast.length;

    let array: Array<string> = new Array(cast_length);
    for (let i = 0; i < cast_length; i++) {
      array[i] = credits_data.cast[i].name;
    }
    const cast = array.join();
    if (editUrl === "editmovie") {
      navigate("/searchmovie/editmovie", {
        state: { dataItem, overview, cast, editUrl },
      });
    }
    if (editUrl === "editnextmovie") {
      navigate("/searchmovie/editnextmovie", {
        state: { dataItem, overview, cast, editUrl },
      });
    }
  };

  return (
    <div className="Row">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        margin="40px"
      >
        <Grid container spacing={2}>
          {datas.map((movie: any, i: number) => (
            <Grid item xs={2} key={i}>
              <Card sx={{ maxWidth: 300, height: 450 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={`${base_url}${movie.poster_path}`}
                    alt=""
                  />
                  <CardContent>
                    <Typography
                      sx={{ paddingTop: "0px" }}
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {title(i)}
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{ paddingTop: 0, paddinBottom: 0, padinngRight: 0 }}
                  >
                    <Stack spacing={1}>
                      <Rating
                        name="review"
                        defaultValue={
                          Math.round((movie.vote_average / 2) * 10) / 10
                        }
                        precision={0.1}
                        readOnly
                      />
                      評価:{Math.round((movie.vote_average / 2) * 10) / 10}
                    </Stack>
                  </CardContent>
                </CardActionArea>
                <div style={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginBottom: "3px" }}
                    onClick={() => SubmitItem(i, "editmovie")}
                  >
                    既に観た登録
                  </Button>
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => SubmitItem(i, "editnextmovie")}
                  >
                    次観たい登録
                  </Button>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
