import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

// css style
const PaperMain = styled(Paper)`
  width: 800px;
  height: 650px;
  margin: auto;
  overflow-x: auto;
`;
const PaperSub = styled(Paper)`
  width: 450px;
  height: 600px;
  overflowx: auto;
`;

const buttons: { [key: string]: any } = {
  textAlign: "center",
  margin: "20px auto",
  paddingBottom: "20px",
};

const WatchDetail = () => {
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
      navigate("/watchedlist/moviedetail/editwatched", {
        state: { moviereg, moviedlUrl },
      });
    }

    if (moviedlUrl === "nextwatchedlist") {
      navigate("/nextwatchedlist/moviedetail/editwatched", {
        state: { moviereg, moviedlUrl },
      });
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {moviedlUrl === "watchedlist"
          ? "観た映画一覧詳細"
          : "次観たい映画一覧詳細"}
      </h1>

      <PaperMain>
        <Grid container spacing={1}>
          <Grid item xs={6} md={5}>
            <Card sx={{ width: 250, height: 350, margin: "50px" }}>
              <CardMedia component="img" height="100%" image={movie.image} />
            </Card>
          </Grid>
          <Grid item xs={6} md={5}>
            <div style={{ margin: "20px" }}>
              <PaperSub>
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
              </PaperSub>
            </div>
          </Grid>
        </Grid>
      </PaperMain>ï
      <div style={buttons}>
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

export default WatchDetail;
