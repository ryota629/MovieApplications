import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PutMovied } from "../service/api";
import { PutNextMovied } from "../service/api";

//css style
const PaperMain = styled(Paper)`
  width: 800px;
  height: 650px;
  margin: auto;
  overflow-x: auto;
`;

const RatingField: { [key: string]: any } = {
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
};

const RatingLable: { [key: string]: any } = {
  background: "#fff",
  padding: "3px 10px",
  color: "#666666",
  position: "absolute",
  top: "-15px",
  left: "5px",
};

const RatingIcon: { [key: string]: any } = {
  textAlign: "center",
  padding: "15px 10px",
};

const buttons: { [key: string]: any } = {
  textAlign: "center",
  margin: "20px auto",
  paddingBottom: "10px",
};

const EditDetailWatch = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state.moviereg;
  const moviedUrl = location.state.moviedlUrl;

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
    if (moviedUrl === "watchedlist") {
      await PutMovied(moviedreg, moviedreg.id);
      navigate("/watchedlist");
    }

    if (moviedUrl === "nextwatchedlist") {
      await PutNextMovied(moviedreg, moviedreg.id);
      navigate("/nextwatchedlist");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {moviedUrl === "watchedlist" ? "観た映画一覧編集" : "次観たい一覧編集"}
      </h1>
      <PaperMain>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ width: 300 }}>
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

                <div style={RatingField}>
                  <span style={RatingLable}>評価</span>
                  <div style={RatingIcon}>
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
      </PaperMain>
      <div style={buttons}>
        <Button variant="contained" size="small" onClick={() => onSubmit()}>
          登録する
        </Button>
      </div>
    </div>
  );
};

export default EditDetailWatch;
