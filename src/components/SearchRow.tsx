import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import Button  from "@mui/material/Button";
import { useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {tmdb_api} from '../service/api';
import {requests} from '../service/request';


type Props = {
  datas:any;
  check:boolean;
}

const base_url:string= "https://image.tmdb.org/t/p/w185/";

export const SearchRow = ({datas,check}:Props) => {
  const [overview,setOverView] = useState([]);
  const [credits,setCredit] = useState([]);
    const data_id =  datas[0]?.id;
      useEffect(() => {
          const fetchUrl= requests.feactOverview;
          async function fetchData(){ 
          const request = await tmdb_api.get(`/movie/${data_id}?${fetchUrl}`);
          setOverView(request.data.overview);
          return request;
          }
        fetchData();

      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[check]);
    
      useEffect(()=>{
        const fetchUrl= requests.feactCredit;
        async function fetchData(){
          const request = await tmdb_api.get(`/movie/${data_id}/${fetchUrl}`);
          setCredit(request.data.cast[0].name);
          return request;
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[check]);
  const navigate = useNavigate();
  const SubmitItem = () => {
    navigate('/searchmovie/editmovie',{state:{datas,overview,credits}});
  } 
  const SubmitNextItem = () => {
    navigate('/searchmovie/editnextmovie',{state:{datas,overview,credits}});
  } 
  
  return (
    <div className="Row">
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      margin="20px"
    >
      <Grid container spacing={2}>
        {datas.map((movie:any,i:number) => (
        <Grid item xs={2} key={i}>
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia component="img" height="250" image={`${base_url}${movie.poster_path}`} alt="" />
              <CardContent sx={{paddingTop:"5px"}} >
                <Typography gutterBottom variant="h6" component="div">
                {movie.title}
                </Typography>
                <Typography>
                 評価:{Math.round(movie.vote_average / 2  * 10) / 10}
                </Typography>
              </CardContent>
              <Button variant="contained" color="primary" sx={{display:"block",margin:"auto"}} onClick={SubmitItem} >既に観た登録</Button>
              <Button variant="contained" color="primary" sx={{display:"block",margin:"auto"}} onClick={SubmitNextItem} >次観たい登録</Button>
            </CardActionArea>
          </Card> 
        </Grid>
        ))}
      </Grid>
    </Grid>
    
  </div>

  )
}