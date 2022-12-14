import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { useState } from "react";
import { PostMovied } from "../service/api";
import { PostNextMovied } from "../service/api";

//css style
const PaperMain = styled(Paper)`
  width: 800px;
  height: 650px;
  margin: auto;
  overflow-x: auto;
`;

const RegButton: { [key: string]: string } = {
  textAlign: "center",
  margin: "20px auto",
  paddingBottom: "20px",
};

const RatingField: { [key: string]: any } = {
  width: "100%",
  height: "48px",
  border: "solid",
  borderRadius: "5px",
  borderWidth: "thin",
  borderColor: "#C0C0C0",
  position: "relative",
  marginTop: "15px",
  "&:hover": {
    borderColor: "#000000",
  },
};

const RatingLable: { [key: string]: string } = {
  background: "#fff",
  padding: "3px 10px",
  color: "#666666",
  position: "absolute",
  top: "-15px",
  left: "5px",
};

const RatingIcon: { [key: string]: string } = {
  textAlign: "center",
  padding: "15px 10px",
};

const EditWatch= () => {
  const base_url = "https://image.tmdb.org/t/p/w185/";
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state.dataItem;
  const overview = location.state.overview;
  const casts = location.state.cast;
  const editUrl = location.state.editUrl;
  const today = new Date();
  const today_year = format(today, "yyyy-M-d", {
    locale: ja,
  });

  const initialValues = {
    title: movie.title,
    detail: overview,
    releasedate: movie.release_date,
    review: movie.vote_average / 2,
    cast: casts,
    createdate: today_year,
    comment: "",
    image: base_url + movie.poster_path,
  };

  const [watchedEdit, setWatchedEdit] = useState(initialValues);

  // ??????????????????????????????????????????
  if (Array.isArray(movie.overview)) {
    watchedEdit.cast = "";
  }

  if (Array.isArray(movie.credits)) {
    watchedEdit.cast = "";
  }

  const onValueChange = (e: any) => {
    setWatchedEdit({ ...watchedEdit, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    if (editUrl === "editmovie") {
      await PostMovied(watchedEdit);
      navigate("/watchedlist");
    } else {
      await PostNextMovied(watchedEdit);
      navigate("/nextwatchedlist");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {editUrl === "editmovie" ? "????????????????????????" : "???????????????????????????"}
      </h1>
      {/* Material UI styles?????????(Paper=>PaperMain)*/}
      <PaperMain>
        <Table sx={{ minWidth: 650 }}>
          <TableBody>
            <TableRow>
              <TableCell sx={{ width: 230, height: 10 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={8}>
                    <Card sx={{ width: 230, height: 350 }}>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={base_url + movie.poster_path}
                        alt=""
                      />
                    </Card>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <TextField
                  label="????????????"
                  type="text"
                  fullWidth
                  margin="normal"
                  onChange={(e) => onValueChange(e)}
                  name="title"
                  defaultValue={movie.title}
                />

                <TextField
                  label="??????"
                  onChange={(e) => onValueChange(e)}
                  type="text"
                  name="detail"
                  margin="normal"
                  fullWidth
                  multiline
                  rows="6"
                  defaultValue={overview}
                />

                <TextField
                  label="?????????"
                  type="text"
                  fullWidth
                  margin="normal"
                  onChange={(e) => onValueChange(e)}
                  name="releasedate"
                  defaultValue={movie.release_date}
                />

                <div style={RatingField}>
                  <span style={RatingLable}>??????</span>
                  <div style={RatingIcon}>
                    <Stack spacing={1}>
                      <Rating
                        name="review"
                        onChange={(e) => onValueChange(e)}
                        defaultValue={movie.vote_average / 2}
                        precision={0.5}
                      />
                    </Stack>
                  </div>
                </div>

                <TextField
                  label="?????????"
                  type="text"
                  fullWidth
                  margin="normal"
                  onChange={(e) => onValueChange(e)}
                  name="cast"
                  multiline
                  rows="2"
                  defaultValue={casts}
                />

                <TextField
                  label="?????????"
                  type="text"
                  fullWidth
                  margin="normal"
                  onChange={(e) => onValueChange(e)}
                  name="time"
                  defaultValue={today_year}
                />

                <TextField
                  label="????????????"
                  type="text"
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
      </PaperMain>
      <div style={RegButton}>
        <Button variant="contained" size="small" onClick={() => onSubmit()}>
          ????????????
        </Button>
      </div>
    </div>
  );
};

export default EditWatch;
