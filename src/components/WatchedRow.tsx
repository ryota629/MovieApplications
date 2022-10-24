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
import Tooltip from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";
import Container from "@mui/material/Container";
import { useState } from "react";

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
  cardbutton: {
    marginTop: "-12px",
    textAlign: "center",
  },
}));

export const WatchedRow = ({ datas, detailurl }: Props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  let movies: any = null;
  const pageCount = Math.ceil(datas.length / 18);
  const [page, setPage] = useState(1);
  let startPage = (page - 1) * 18;
  let endPage = 18 * page;
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
    if (detailurl === "watchedlist") {
      await deleteMovied(datas_id);
    }
    if (detailurl === "nextwatchedlist") {
      await deleteNextMovied(datas_id);
    }
    window.location.reload();
  };

  const title = (id: number) => {
    const wordCount = 21;
    const titleCount = datas[id].title.length;
    const clamp = "...";
    let title = datas[id].title;
    if (titleCount > wordCount) {
      var str = datas[id].title;
      str = str.substr(0, wordCount - 1);
      title = str + clamp;
    }
    return title;
  };

  return (
    <div className="Row" style={{ display: "block" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        margin="40px"
      >
        <Grid container spacing={2}>
          {/* マジックナンバーのため、変数を作ること */}
          {datas.slice(startPage, endPage).map((movied: any, id: number) => (
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
                      {title(id)}
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ paddingTop: 0 }}>
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
                </CardActionArea>
                  <div className={classes.cardbutton}>
                    <Button
                      onClick={() => getMovideDetail(id)}
                      variant="contained"
                    >
                      詳細
                    </Button>
                    <Tooltip title="削除">
                      <IconButton
                        type="button"
                        onClick={() => deleteItemData(id)}
                      >
                        <DeleteOutlinedIcon sx={{ fontSize: 25 }} />
                      </IconButton>
                    </Tooltip>
                  </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <Pagination
            count={pageCount}
            shape="rounded"
            onChange={(e, page) => setPage(page)}
            page={page}
          />
        </Stack>
      </Container>
    </div>
  );
};
