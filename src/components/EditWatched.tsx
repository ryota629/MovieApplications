import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate, useLocation } from "react-router-dom";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { useState } from "react";
import Button from "@mui/material/Button";
import { PutMovied } from "../service/api";
import { PutNextMovied } from "../service/api";
import Input from "@mui/material/Input";
import { PostMovied } from "../service/api";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import { hover } from "@testing-library/user-event/dist/hover";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "800px",
    height: "550px",
    margin: "auto",
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
    width: 300,
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
  field: {
    width: "100%",
    height: 48,
    border: "solid",
    borderRadius: "5px",
    borderWidth: "thin",
    borderColor: "#C0C0C0",
    position: "relative",
    marginTop: "15px",
    "&:hover": {
      borderColor: "#000000",
    },
  },
  fieldlable: {
    background: "#fff",
    padding: "3px 10px",
    color: "#666666",
    position: "absolute",
    top: "-15px",
    left: "5px",
  },
  reviewIcon: {
    textAlign: "center",
    padding: "15px 10px",
  },
  buttons: {
    textAlign: "center",
    margin: "20px auto",
    paddingBottom: "10px",
  },
}));

const EditWatched = () => {
  // const base_url: string = "https://image.tmdb.org/t/p/w185/";
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state.moviereg;
  const movdlUrl = location.state.movdlUrl;

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

  const [moviedreg, setMovieReg] = useState(initialValues);

  const onValueChange = (e: any) => {
    setMovieReg({ ...moviedreg, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    if (movdlUrl === "watchedlist") {
      await PutMovied(moviedreg, moviedreg.id);
      navigate("/watchedlist");
    }

    if (movdlUrl === "nextwatchedlist") {
      await PutNextMovied(moviedreg, moviedreg.id);
      navigate("/nextwatchedlist");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {movdlUrl === "watchedlist" ? "観た映画一覧編集" : "次観たい一覧編集"}
      </h1>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCell1}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={8}>
                    <Card sx={{ width: 290, height: 480 }}>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={movie.image}
                        alt=""
                      />
                    </Card>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <TextField
                  label="タイトル"
                  type="text"
                  fullWidth
                  margin="normal"
                  onChange={(e) => onValueChange(e)}
                  name="title"
                  defaultValue={movie.title}
                />

                <TextField
                  label="詳細"
                  onChange={(e) => onValueChange(e)}
                  type="text"
                  name="detail"
                  margin="normal"
                  fullWidth
                  multiline
                  rows="6"
                  defaultValue={movie.detail}
                />

                <TextField
                  label="公開日"
                  type="text"
                  fullWidth
                  margin="normal"
                  onChange={(e) => onValueChange(e)}
                  name="releasedate"
                  defaultValue={movie.releasedate}
                />

                <div className={classes.field}>
                  <span className={classes.fieldlable}>評価</span>
                  <div className={classes.reviewIcon}>
                    <Stack spacing={1}>
                      <Rating
                        name="review"
                        onChange={(e) => onValueChange(e)}
                        defaultValue={movie.review}
                        precision={0.5}
                      />
                    </Stack>
                  </div>
                </div>

                <TextField
                  label="出演者"
                  type="text"
                  fullWidth
                  margin="normal"
                  onChange={(e) => onValueChange(e)}
                  name="cast"
                  defaultValue={movie.cast}
                />

                <TextField
                  label="作成日"
                  type="text"
                  fullWidth
                  margin="normal"
                  onChange={(e) => onValueChange(e)}
                  name="time"
                  defaultValue={movie.createdate}
                />

                <TextField
                  label="コメント"
                  type="text"
                  defaultValue={movie.comment}
                  fullWidth
                  multiline
                  rows="6"
                  margin="normal"
                  onChange={(e) => onValueChange(e)}
                  name="comment"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <div className={classes.buttons}>
        <Button variant="contained" size="small" onClick={() => onSubmit()}>
          登録する
        </Button>
      </div>
    </div>
  );
};

export default EditWatched;
