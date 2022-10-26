import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import { PutMovied, PutNextMovied } from "../service/api";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "850px",
    height: "650px",
    margin: "auto",
    overflowX: "auto",
    backgroundColor: "black",
  },
  root2: {
    width: "450px",
    height: "600px",
    overflowX: "auto",
  },
  root3: {
    margin: "auto",
    padding: 30,
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
  selectTableCell: {
    width: 60,
  },
  tableCell: {
    width: 230,
    height: 10,
  },
  tableCell1: {
    width: 330,
  },
  tableCellDetail: {
    width: 230,
    height: 150,
  },
  tableCellComent: {
    width: 230,
    height: 150,
  },
  input: {
    width: 230,
    height: 80,
  },
  buttons: {
    textAlign: "center",
    margin: "20px auto",
    paddingBottom: "20px",
  },
}));

const MoviedDetail = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state.movies;
  const moviedlUrl = location.state.detailurl;

  const initialValues = {
    id: movie.id,
    title: movie.title,
    detail: movie.detail,
    releasedate: movie.releasedate,
    review: movie.review,
    cast: movie.cast,
    createdate: movie.createdate,
    comment: movie.comment,
    image: movie.image,
  };

  const [moviereg, setMovieReg] = useState(initialValues);

  const onValueChange = (e: any) => {
    setMovieReg({ ...moviereg, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    if (moviedlUrl === "watchedlist") {
      //await PutMovied(moviereg);
      navigate("/watchedlist/moviedetail/editwatched", {
        state: { moviereg, moviedlUrl },
      });
    }

    if (moviedlUrl === "nextwatchedlist") {
      //await PutNextMovied(moviereg);
      navigate("/nextwatchedlist/moviedetail/editwatched", {
        state: { moviereg, moviedlUrl },
      });
    }
  };
  return (
    <div>
      {moviedlUrl === "watchedlist" ? (
        <h1 style={{ textAlign: "center" }}>観た映画一覧詳細</h1>
      ) : (
        <h1 style={{ textAlign: "center" }}>次観たい映画一覧詳細</h1>
      )}
      <Paper className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={6} md={5}>
            <Card sx={{ width: 250, height: 350, margin: "50px" }}>
              <CardMedia component="img" height="100%" image={movie.image} />
            </Card>
          </Grid>
          <Grid item xs={6} md={5}>
            <div style={{ margin: "20px" }}>
              <Paper className={classes.root2}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{
                          paddingBottom: "5px",
                          paddingTop: "5px",
                          backgroundColor: "gray",
                          fontSize: "10px",
                        }}
                      >
                        <div style={{ fontSize: "10px" }}>タイトル</div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          width: "420px",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        {movie.title}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell
                        sx={{
                          paddingBottom: "5px",
                          paddingTop: "5px",
                          backgroundColor: "gray",
                        }}
                      >
                        詳細
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={{ fontSize: "12px", fontWeight: "bold" }}>
                        {movie.detail}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell
                        sx={{
                          paddingBottom: "5px",
                          paddingTop: "5px",
                          backgroundColor: "gray",
                        }}
                      >
                        公開日
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: "12px", fontWeight: "bold" }}>
                        {movie.releasedate}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell
                        sx={{
                          paddingBottom: "5px",
                          paddingTop: "5px",
                          backgroundColor: "gray",
                        }}
                      >
                        評価
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        <Stack spacing={1}>
                          <Rating
                            name="review"
                            onChange={(e) => onValueChange(e)}
                            defaultValue={movie.review}
                            precision={0.5}
                            readOnly
                          />
                        </Stack>
                      </TableCell>
                      {/* <Input onChange={(e)=>onValueChange(e)} name="title" defaultValue={movie.datas[0].title} fullWidth /><br /> */}
                    </TableRow>

                    <TableRow>
                      <TableCell
                        sx={{
                          paddingBottom: "5px",
                          paddingTop: "5px",
                          backgroundColor: "gray",
                        }}
                      >
                        出演者
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: "12px", fontWeight: "bold" }}>
                        {movie.cast}
                      </TableCell>
                      {/* <Input onChange={(e)=>onValueChange(e)} name="title" defaultValue={movie.datas[0].title} fullWidth /><br /> */}
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          paddingBottom: "5px",
                          paddingTop: "5px",
                          backgroundColor: "gray",
                        }}
                      >
                        作成日
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={{ fontSize: "12px", fontWeight: "bold" }}>
                        {movie.createdate}
                      </TableCell>
                      {/* <Input onChange={(e)=>onValueChange(e)} name="title" defaultValue={movie.datas[0].title} fullWidth /><br /> */}
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          paddingBottom: "5px",
                          paddingTop: "5px",
                          backgroundColor: "gray",
                        }}
                      >
                        コメント
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: "12px", fontWeight: "bold" }}>
                        {movie.comment}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <div className={classes.buttons}>
        <Button
          variant="contained"
          size="small"
          onClick={() => onSubmit()}
          sx={{ fontSize: "12px" }}
        >
          編集
        </Button>
      </div>
    </div>
  );
};

export default MoviedDetail;
