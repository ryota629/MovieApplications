import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import { getMovied } from "../service/api";
import { getNextMovied } from "../service/api";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import IconButton from "@mui/material/IconButton";
import { deleteMovied } from "../service/api";
import { deleteNextMovied } from "../service/api";

type Props = {
  datas: any;
  detailurl: string;
};

const useStyles = makeStyles((theme) => ({
  cardcontents: {
    paddingTop: "0px",
  },
  cardtext: {
    width: 140,
    height: 30,
  },
}));

export const WatchedRow = ({ datas, detailurl }: Props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  let movies: any = null;
  const getMovideDetail = async (id: number) => {
    let datas_id = datas[id].id;
    if (detailurl === "watchedlist") {
      let response = await getMovied(datas_id);
      movies = response?.data;
      navigate("/watchedlist/moviedetail", { state: { movies, detailurl } });
    }
    if (detailurl === "nextwatchedlist") {
      let response = await getNextMovied(datas_id);
      movies = response?.data;
      navigate("/nextwatchedlist/moviedetail", {
        state: { movies, detailurl },
      });
    }
  };

  const deleteItemData = async (id: number) => {
    let datas_id = datas[id].id;
    console.log(datas_id);
    if (detailurl === "watchedlist") {
      await deleteMovied(datas_id);
    }
    if (detailurl === "nextwatchedlist") {
      console.log("削除");
      await deleteNextMovied(datas_id);
    }
    window.location.reload();
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
          {datas.map((movied: any, id: number) => (
            <Grid item xs={2} key={id}>
              <Card sx={{ maxWidth: 300, height: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={`${movied.image}`}
                    alt=""
                  />
                  <CardContent>
                    <Typography
                      className={classes.cardtext}
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {movied.title}
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ paddingTop: 0, paddinBottom: 0 }}>
                    <Stack spacing={1}>
                      <Rating
                        name="review"
                        value={movied.review}
                        precision={0.1}
                        readOnly
                      />
                      評価:{movied.review}
                    </Stack>
                  </CardContent>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      onClick={() => getMovideDetail(id)}
                      variant="contained"
                    >
                      詳細
                    </Button>
                    <IconButton
                      type="button"
                      onClick={() => deleteItemData(id)}
                    >
                      <DeleteOutlinedIcon sx={{ fontSize: 25 }} />
                    </IconButton>
                  </div>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
